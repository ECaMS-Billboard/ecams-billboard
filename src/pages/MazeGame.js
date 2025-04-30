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
  const gameRef = useRef(null);

  const generateMaze = useCallback(() => {
    const newMaze = Array(size)
      .fill(null)
      .map(() => Array(size).fill('wall'));

    let current = { x: 0, y: 0 };
    newMaze[0][0] = 'path';

    while (current.x !== size - 1 || current.y !== size - 1) {
      const options = [];
      if (current.x < size - 1) options.push({ x: current.x + 1, y: current.y });
      if (current.y < size - 1) options.push({ x: current.x, y: current.y + 1 });
      const next = options[Math.floor(Math.random() * options.length)];
      current = next;
      newMaze[current.y][current.x] = 'path';
    }

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (newMaze[y][x] !== 'path') {
          newMaze[y][x] = Math.random() > 0.3 ? 'wall' : 'path';
        }
      }
    }

    setMaze(newMaze);
    setPlayerPos({ x: 0, y: 0 });
    setGoalPos({ x: size - 1, y: size - 1 });
  }, [size]);

  useEffect(() => {
    generateMaze();
  }, [generateMaze]);

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
          maze[newY][newX] === 'path'
        ) {
          return { x: newX, y: newY };
        }
        return pos;
      });
    },
    [maze, size]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          movePlayer(0, -1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          movePlayer(0, 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          movePlayer(-1, 0);
          break;
        case 'ArrowRight':
          e.preventDefault();
          movePlayer(1, 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movePlayer]);

  const handleSizeChange = (delta) => {
    const newSize = Math.max(MIN_SIZE, Math.min(MAX_SIZE, size + delta));
    setSize(newSize);
  };

  const calculateCellSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const minSize = Math.min(screenWidth, screenHeight) * SCALE_FACTOR;
    return Math.min(minSize / size, 50);
  };

  const cellSize = calculateCellSize();
  const hasWon = playerPos.x === goalPos.x && playerPos.y === goalPos.y;

  const startHoldMove = (dx, dy) => {
    const intervalId = setInterval(() => movePlayer(dx, dy), HOLD_DELAY_MS);

    const stop = () => {
      clearInterval(intervalId);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('mouseleave', stop);
      window.removeEventListener('touchend', stop);
    };

    window.addEventListener('mouseup', stop);
    window.addEventListener('mouseleave', stop);
    window.addEventListener('touchend', stop);
  };

  // Scoped double-tap prevention
  useEffect(() => {
    const container = gameRef.current;
    if (!container) return;

    let lastTap = 0;

    const handleTouchEnd = (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault(); // Prevent zoom on double-tap
      }
      lastTap = currentTime;
    };

    container.addEventListener('touchend', handleTouchEnd);
    return () => {
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={gameRef}
      className="min-h-screen bg-black text-gray-300 p-8 flex flex-col items-center"
      style={{ touchAction: 'manipulation' }} // Scoped style
    >
      {/* Controls */}
      <div className="flex items-center justify-center mb-4 space-x-4">
        <button
          onClick={() => handleSizeChange(-STEP)}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white text-sm"
        >
          -
        </button>
        <div className="text-xl font-semibold w-20 text-center">
          {size} x {size}
        </div>
        <button
          onClick={() => handleSizeChange(STEP)}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white text-sm"
        >
          +
        </button>
        <button
          onClick={generateMaze}
          className="ml-6 bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-white text-sm"
        >
          Restart
        </button>
      </div>

      {/* Maze Grid */}
      <div className="mb-6 overflow-auto">
        {maze.length > 0 && (
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
              width: `100%`,
              height: `auto`,
            }}
          >
            {maze.map((row, y) =>
              row.map((cell, x) => {
                let bg;
                if (hasWon) {
                  bg = 'bg-green-500';
                } else if (x === playerPos.x && y === playerPos.y) {
                  bg = 'bg-blue-400';
                } else if (x === goalPos.x && y === goalPos.y) {
                  bg = 'bg-green-500';
                } else if (cell === 'path') {
                  bg = 'bg-gray-500';
                } else {
                  bg = 'bg-gray-900';
                }

                return (
                  <div
                    key={`${x}-${y}`}
                    style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                    className={`${bg} border border-gray-800`}
                  />
                );
              })
            )}
          </div>
        )}
      </div>

      {/* Arrow Controls */}
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={() => movePlayer(0, -1)}
          onMouseDown={() => startHoldMove(0, -1)}
          onTouchStart={() => startHoldMove(0, -1)}
          className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-600 text-sm"
        >
          ↑
        </button>
        <div className="flex space-x-4">
          <button
            onClick={() => movePlayer(-1, 0)}
            onMouseDown={() => startHoldMove(-1, 0)}
            onTouchStart={() => startHoldMove(-1, 0)}
            className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-600 text-sm"
          >
            ←
          </button>
          <button
            onClick={() => movePlayer(1, 0)}
            onMouseDown={() => startHoldMove(1, 0)}
            onTouchStart={() => startHoldMove(1, 0)}
            className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-600 text-sm"
          >
            →
          </button>
        </div>
        <button
          onClick={() => movePlayer(0, 1)}
          onMouseDown={() => startHoldMove(0, 1)}
          onTouchStart={() => startHoldMove(0, 1)}
          className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-600 text-sm"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default MazeGame;
