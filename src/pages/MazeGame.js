import React, { useEffect, useState, useCallback, useRef } from 'react';

const MIN_SIZE = 10;
const MAX_SIZE = 50;
const STEP = 5;
const DEFAULT_SIZE = 20;
const SCALE_FACTOR = 0.75;
const HOLD_DELAY_MS = 350;

// EASY: random but open
function generateEasyMaze(n) {
  const grid = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => (Math.random() < 0.7 ? 'path' : 'wall'))
  );
  grid[0][0] = 'path';
  grid[n - 1][n - 1] = 'path';
  return grid;
}

// HARD: solvable, winding path + short fake branches
function generateHardMaze(n) {
  const WALL = 'wall', PATH = 'path';
  const grid = Array.from({ length: n }, () => Array(n).fill(WALL));
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const inBounds = (x, y) => x >= 0 && y >= 0 && x < n && y < n;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=(Math.random()*(i+1))|0; [a[i],a[j]]=[a[j],a[i]];} return a; }

  const stack = [[0,0]];
  visited[0][0] = true;
  grid[0][0] = PATH;

  while (stack.length) {
    const [cx, cy] = stack[stack.length - 1];
    if (cx === n - 1 && cy === n - 1) break;

    const options = shuffle(dirs.slice()).filter(([dx,dy])=>{
      const nx = cx + dx, ny = cy + dy;
      return inBounds(nx, ny) && !visited[ny][nx];
    });

    if (options.length === 0) {
      stack.pop();
      continue;
    }

    options.sort((a,b)=>{
      const ax = cx + a[0], ay = cy + a[1];
      const bx = cx + b[0], by = cy + b[1];
      const da = Math.abs((n-1)-ax) + Math.abs((n-1)-ay);
      const db = Math.abs((n-1)-bx) + Math.abs((n-1)-by);
      return Math.random() < 0.3 ? da - db : 0;
    });

    const [dx, dy] = options[0];
    const nx = cx + dx, ny = cy + dy;
    visited[ny][nx] = true;
    grid[ny][nx] = PATH;
    stack.push([nx, ny]);
  }

  const pathCells = [];
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++)
      if (grid[y][x] === PATH) pathCells.push([x, y]);

  const BRANCHES = Math.max(3, Math.floor(pathCells.length * 0.15));
  const MAX_BRANCH_LEN = Math.max(2, Math.floor(n * 0.15));

  for (let i = 0; i < BRANCHES; i++) {
    const [sx, sy] = pathCells[(Math.random() * pathCells.length) | 0];
    let bx = sx, by = sy;
    const len = 1 + ((Math.random() * MAX_BRANCH_LEN) | 0);
    for (let step = 0; step < len; step++) {
      const [dx, dy] = shuffle(dirs.slice())[0];
      const nx = bx + dx, ny = by + dy;
      if (!inBounds(nx, ny)) break;

      let neighbors = 0;
      for (const [adx, ady] of dirs) {
        const vx = nx + adx, vy = ny + ady;
        if (inBounds(vx, vy) && grid[vy][vx] === PATH) neighbors++;
      }
      if (neighbors <= 1) {
        grid[ny][nx] = PATH;
        bx = nx; by = ny;
      } else break;
    }
  }

  grid[0][0] = PATH;
  grid[n - 1][n - 1] = PATH;
  return grid;
}

function MazeGame() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [maze, setMaze] = useState([]);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [goalPos, setGoalPos] = useState({ x: DEFAULT_SIZE - 1, y: DEFAULT_SIZE - 1 });
  const [difficulty, setDifficulty] = useState('easy');
  const [elapsed, setElapsed] = useState(0);
  const [best, setBest] = useState(null);
  const [running, setRunning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const timerRef = useRef(null);
  const gameRef = useRef(null);
  const startTimeRef = useRef(null);

  const generateMaze = useCallback(() => {
    const newMaze = difficulty === 'easy' ? generateEasyMaze(size) : generateHardMaze(size);
    setMaze(newMaze);
    setPlayerPos({ x: 0, y: 0 });
    setGoalPos({ x: size - 1, y: size - 1 });
    setHasWon(false);
    setElapsed(0);
    setRunning(true);
    startTimeRef.current = Date.now();
  }, [size, difficulty]);

  useEffect(() => {
    generateMaze();
  }, [generateMaze]);

  useEffect(() => {
    const key = `mazeBest-${size}-${difficulty}`;
    const stored = localStorage.getItem(key);
    if (stored && Number(stored) > 0) setBest(Number(stored));
  }, [size, difficulty]);

  useEffect(() => {
    if (!running) return;
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - startTimeRef.current);
    }, 100);
    return () => clearInterval(timerRef.current);
  }, [running]);

  const movePlayer = useCallback(
    (dx, dy) => {
      if (hasWon) return;
      setPlayerPos((pos) => {
        const newX = pos.x + dx;
        const newY = pos.y + dy;
        if (
          newX >= 0 &&
          newX < size &&
          newY >= 0 &&
          newY < size &&
          maze[newY]?.[newX] === 'path'
        ) {
          const nextPos = { x: newX, y: newY };
          if (newX === goalPos.x && newY === goalPos.y) {
            setHasWon(true);
            setRunning(false);
            clearInterval(timerRef.current);
            const finalTime = (Date.now() - startTimeRef.current) / 1000;
            setElapsed(finalTime);
            const key = `mazeBest-${size}-${difficulty}`;
            const stored = localStorage.getItem(key);
            if (!stored || finalTime < Number(stored)) {
              localStorage.setItem(key, finalTime);
              setBest(finalTime);
            }
          }
          return nextPos;
        }
        return pos;
      });
    },
    [maze, size, goalPos, hasWon, difficulty]
  );

  const handleSizeChange = (delta) => {
    const newSize = Math.max(MIN_SIZE, Math.min(MAX_SIZE, size + delta));
    setSize(newSize);
  };

  const handleRestart = () => generateMaze();

  const cellSize = Math.min(
    (Math.min(window.innerWidth, window.innerHeight) * SCALE_FACTOR) / size,
    50
  );

  const formatTime = (ms) => (ms / 1000).toFixed(1) + 's';

  const startHoldMove = (dx, dy) => {
    movePlayer(dx, dy);
    const intervalId = setInterval(() => movePlayer(dx, dy), HOLD_DELAY_MS);
    const stop = () => clearInterval(intervalId);
    window.addEventListener('mouseup', stop, { once: true });
    window.addEventListener('touchend', stop, { once: true });
  };

  return (
    <div
      ref={gameRef}
      className="min-h-screen bg-black text-gray-300 p-8 flex flex-col items-center"
      style={{ touchAction: 'manipulation', userSelect: 'none' }}
    >
      <h1 className="text-red-500 text-3xl font-bold mb-4">Maze Game</h1>

      <div className="flex items-center justify-center mb-4 space-x-4">
        <button onClick={() => handleSizeChange(-STEP)} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white text-sm">-</button>
        <div className="text-xl font-semibold w-20 text-center">{size} × {size}</div>
        <button onClick={() => handleSizeChange(STEP)} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white text-sm">+</button>
        <button onClick={handleRestart} className="ml-4 bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-white text-sm">Restart</button>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="ml-4 bg-gray-700 text-white rounded px-2 py-1 text-sm"
        >
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
        <div className="ml-4 text-sm">
          <span className="text-white">Time: {formatTime(elapsed)}</span>
          {best !== null && <span className="text-green-400 ml-2">Best: {best.toFixed(1)}s</span>}
        </div>
      </div>

      <div className="mb-6 overflow-auto">
        {maze.length > 0 && (
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
            }}
          >
            {maze.map((row, y) =>
              row.map((cell, x) => {
                let bg = cell === 'path' ? 'bg-gray-600' : 'bg-gray-900';
                if (x === playerPos.x && y === playerPos.y) bg = 'bg-blue-400';
                if (x === goalPos.x && y === goalPos.y) bg = 'bg-green-500';
                return (
                  <div key={`${x}-${y}`} className={`${bg}`} style={{ width: cellSize, height: cellSize }} />
                );
              })
            )}
          </div>
        )}
      </div>

      {!hasWon && (
        <div className="flex flex-col items-center space-y-2">
          <button onMouseDown={() => startHoldMove(0, -1)} onTouchStart={() => startHoldMove(0, -1)} className="bg-gray-700 hover:bg-gray-600 text-xl rounded p-3">↑</button>
          <div className="flex space-x-4">
            <button onMouseDown={() => startHoldMove(-1, 0)} onTouchStart={() => startHoldMove(-1, 0)} className="bg-gray-700 hover:bg-gray-600 text-xl rounded p-3">←</button>
            <button onMouseDown={() => startHoldMove(1, 0)} onTouchStart={() => startHoldMove(1, 0)} className="bg-gray-700 hover:bg-gray-600 text-xl rounded p-3">→</button>
          </div>
          <button onMouseDown={() => startHoldMove(0, 1)} onTouchStart={() => startHoldMove(0, 1)} className="bg-gray-700 hover:bg-gray-600 text-xl rounded p-3">↓</button>
        </div>
      )}

      {hasWon && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-900 text-center p-6 rounded-2xl shadow-xl">
            <h2 className="text-green-400 text-2xl font-bold mb-2">You Win!</h2>
            <p className="text-gray-300 mb-4">
              Your Time: {elapsed.toFixed(1)}s<br />
              Best Time: {best ? best.toFixed(1) + 's' : 'N/A'}
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={handleRestart} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white">Play Again</button>
              <button onClick={() => setDifficulty('hard')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white">Try Hard</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MazeGame;
