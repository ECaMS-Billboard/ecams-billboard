import React, { useEffect, useState, useCallback, useRef } from 'react';

// Configurable Variables
const MIN_SIZE = 10;
const MAX_SIZE = 50;
const STEP = 5;
const DEFAULT_SIZE = 20;
const SCALE_FACTOR = 0.75;
const HOLD_DELAY_MS = 350;

function MazeGame() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [maze, setMaze] = useState([]);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [goalPos, setGoalPos] = useState({ x: size - 1, y: size - 1 });
  const [difficulty, setDifficulty] = useState('Hard'); // Easy | Hard
  const gameRef = useRef(null);

  // Timer / Best (localStorage)
  const bestKey = (s, d) => `mazeBest-${s}-${d}`;
  const [startTime, setStartTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [best, setBest] = useState(() => {
    const v = localStorage.getItem(bestKey(size, difficulty));
    return v ? Number(v) : null;
  });
  const [running, setRunning] = useState(true);

  // ==========================================================
  //                 HARD MODE — ADVANCED DFS
  // ==========================================================
  function generateHardMaze(n) {
    const WALL = "wall";
    const PATH = "path";

    const grid = Array.from({ length: n }, () => Array(n).fill(WALL));
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    const inBounds = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // ----- Phase 1: DFS perfect maze -----
    const stack = [[0, 0]];
    visited[0][0] = true;
    grid[0][0] = PATH;

    while (stack.length > 0) {
      const [cx, cy] = stack[stack.length - 1];

      const neighbors = shuffle(dirs.slice()).filter(([dx, dy]) => {
        const nx = cx + dx, ny = cy + dy;
        return inBounds(nx, ny) && !visited[ny][nx];
      });

      if (neighbors.length === 0) {
        stack.pop();
        continue;
      }

      const [dx, dy] = neighbors[0];
      const nx = cx + dx, ny = cy + dy;

      visited[ny][nx] = true;
      grid[ny][nx] = PATH;
      stack.push([nx, ny]);
    }

    // Always open start + end
    grid[0][0] = PATH;
    grid[n - 1][n - 1] = PATH;

    // ----- Phase 2: Extra dead-end branches -----
    const EXTRA_BRANCHES = Math.floor(n * 1.2);

    for (let i = 0; i < EXTRA_BRANCHES; i++) {
      const x = (Math.random() * n) | 0;
      const y = (Math.random() * n) | 0;

      if (grid[y][x] === PATH) continue;

      let neighborPaths = 0;
      for (const [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy;
        if (inBounds(nx, ny) && grid[ny][nx] === PATH) {
          neighborPaths++;
        }
      }

      // Safe: only create branch if it touches exactly ONE path
      if (neighborPaths === 1) {
        grid[y][x] = PATH;
      }
    }

    return grid;
  }

  // ==========================================================
  //                    EASY MODE
  // ==========================================================
  function generateEasyMaze(n) {
    const PATH_PROB = 0.35;
    const newMaze = Array(n)
      .fill(null)
      .map(() => Array(n).fill('wall'));

    let current = { x: 0, y: 0 };
    newMaze[0][0] = 'path';

    while (current.x !== n - 1 || current.y !== n - 1) {
      const options = [];
      if (current.x < n - 1) options.push({ x: current.x + 1, y: current.y });
      if (current.y < n - 1) options.push({ x: current.x, y: current.y + 1 });
      const next = options[Math.floor(Math.random() * options.length)];
      current = next;
      newMaze[current.y][current.x] = 'path';
    }

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (newMaze[y][x] !== 'path') {
          newMaze[y][x] = Math.random() < PATH_PROB ? 'path' : 'wall';
        }
      }
    }

    newMaze[0][0] = 'path';
    newMaze[n - 1][n - 1] = 'path';
    return newMaze;
  }

  // ==========================================================
  //                Maze Generator (switch difficulty)
  // ==========================================================
  const generateMaze = useCallback(() => {
    const grid =
      difficulty === "Hard"
        ? generateHardMaze(size)
        : generateEasyMaze(size);

    setMaze(grid);
    setPlayerPos({ x: 0, y: 0 });
    setGoalPos({ x: size - 1, y: size - 1 });
    setRunning(true);
  }, [size, difficulty]);

  useEffect(() => {
    generateMaze();
  }, [generateMaze]);

  // Movement
  const movePlayer = useCallback(
    (dx, dy) => {
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
          return { x: newX, y: newY };
        }
        return pos;
      });
    },
    [maze, size]
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp': e.preventDefault(); movePlayer(0, -1); break;
        case 'ArrowDown': e.preventDefault(); movePlayer(0, 1); break;
        case 'ArrowLeft': e.preventDefault(); movePlayer(-1, 0); break;
        case 'ArrowRight': e.preventDefault(); movePlayer(1, 0); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer]);

  // Size change
  const handleSizeChange = (delta) => {
    const newSize = Math.max(MIN_SIZE, Math.min(MAX_SIZE, size + delta));
    setSize(newSize);
  };

  // Cell size
  const calculateCellSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const minSizePx = Math.min(screenWidth, screenHeight) * SCALE_FACTOR;
    return Math.min(minSizePx / size, 50);
  };
  const cellSize = calculateCellSize();

  const hasWon = playerPos.x === goalPos.x && playerPos.y === goalPos.y;

  // Timer update
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed(Date.now() - startTime), 200);
    return () => clearInterval(id);
  }, [startTime, running]);

  // Win handler
  useEffect(() => {
    if (hasWon && running) {
      const finalTime = Date.now() - startTime;
      const key = bestKey(size, difficulty);

      if (best == null || finalTime < best) {
        localStorage.setItem(key, String(finalTime));
        setBest(finalTime);
      }

      setElapsed(finalTime);
      setRunning(false);
    }
  }, [hasWon, running, startTime, best, size, difficulty]);

  // Reset timer when difficulty/size changes
  useEffect(() => {
    setStartTime(Date.now());
    setElapsed(0);
    setRunning(true);
    const v = localStorage.getItem(bestKey(size, difficulty));
    setBest(v ? Number(v) : null);
  }, [size, difficulty]);

  // Hold to move
  const holdRef = useRef(null);
  const startHoldMove = (dx, dy) => {
    if (holdRef.current) clearInterval(holdRef.current);

    movePlayer(dx, dy);
    holdRef.current = setInterval(() => movePlayer(dx, dy), HOLD_DELAY_MS);

    const stop = () => {
      if (holdRef.current) clearInterval(holdRef.current);
      holdRef.current = null;
    };

    window.addEventListener('mouseup', stop, { once: true });
    window.addEventListener('mouseleave', stop, { once: true });
    window.addEventListener('touchend', stop, { once: true });
  };

  // Restart button
  const restartWithTimer = () => {
    generateMaze();
    setStartTime(Date.now());
    setElapsed(0);
    setRunning(true);
  };

  // UI -------------------------------------------------------
  return (
    <div
      ref={gameRef}
      className="min-h-screen bg-neutral-950 text-gray-200 p-6 flex flex-col items-center"
    >
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-red-500">Maze Game</h1>
      </div>

      <div className="w-full max-w-4xl mt-4 rounded-2xl bg-neutral-900/70 shadow-xl border border-neutral-800">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <button onClick={() => handleSizeChange(-STEP)} className="bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded text-sm">-</button>
            <div className="text-lg font-semibold">{size} × {size}</div>
            <button onClick={() => handleSizeChange(STEP)} className="bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded text-sm">+</button>
            <button onClick={restartWithTimer} className="ml-2 bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-sm">Restart</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Difficulty</span>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="bg-neutral-800 hover:bg-neutral-700 px-2 py-1 rounded text-sm"
              >
                <option>Easy</option>
                <option>Hard</option>
              </select>
            </div>

            <div className="text-sm">
              Time: {(elapsed / 1000).toFixed(1)}s
              {best != null && (
                <span className="ml-3 text-green-400">
                  Best: {(best / 1000).toFixed(1)}s
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Maze Grid */}
        <div className="p-4 flex flex-col items-center">
          {maze.length > 0 && (
            <div
              className="grid rounded-lg shadow-inner"
              style={{
                gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
                background: '#0b0b0b',
              }}
            >
              {maze.map((row, y) =>
                row.map((cell, x) => {
                  const isPlayer = x === playerPos.x && y === playerPos.y;
                  const isGoal = x === goalPos.x && y === goalPos.y;

                  let bg;
                  if (isPlayer) bg = '#60a5fa';
                  else if (isGoal) bg = '#22c55e';
                  else if (cell === 'path') bg = '#525252';
                  else bg = '#171717';

                  return (
                    <div
                      key={`${x}-${y}`}
                      style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        background: bg,
                      }}
                    />
                  );
                })
              )}
            </div>
          )}

          {/* Controls */}
          <div className="mt-4 mb-2 flex flex-col items-center space-y-2">
            <button onClick={() => movePlayer(0, -1)} onMouseDown={() => startHoldMove(0, -1)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-3 rounded text-xl">↑</button>
            <div className="flex space-x-4">
              <button onClick={() => movePlayer(-1, 0)} onMouseDown={() => startHoldMove(-1, 0)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-3 rounded text-xl">←</button>
              <button onClick={() => movePlayer(1, 0)} onMouseDown={() => startHoldMove(1, 0)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-3 rounded text-xl">→</button>
            </div>
            <button onClick={() => movePlayer(0, 1)} onMouseDown={() => startHoldMove(0, 1)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-3 rounded text-xl">↓</button>
          </div>
        </div>
      </div>

      {/* Win Overlay */}
      {hasWon && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 text-center">
            <div className="text-2xl font-bold text-green-400">You Win!</div>
            <div className="mt-2 text-sm text-gray-300">
              Time: {(elapsed / 1000).toFixed(1)}s
              {best != null && (
                <span className="ml-3">
                  Best: <span className="text-green-400">{(best / 1000).toFixed(1)}s</span>
                </span>
              )}
            </div>

            <div className="mt-5 flex justify-center gap-3">
              <button onClick={restartWithTimer} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">Play Again</button>
              <button
                onClick={() => setDifficulty((d) => (d === 'Easy' ? 'Hard' : 'Easy'))}
                className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded"
              >
                Try {difficulty === 'Easy' ? 'Hard' : 'Easy'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default MazeGame;
