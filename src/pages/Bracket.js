import { useState } from 'react';

const Bracket = () => {
  const matchups = [
    ['Cake', 'Ice Cream'],
    ['Cookies', 'Brownies'],
    ['Pie', 'Cupcakes'],
    ['Donuts', 'Cheesecake'],
  ];

  const [votes, setVotes] = useState(
    matchups.map(() => ({ a: 0, b: 0 }))
  );

  const vote = (index, side) => {
    const newVotes = [...votes];
    newVotes[index][side] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Vote for Your Favorite Dessert
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {matchups.map(([a, b], index) => (
          <div key={index} className="bg-gray-800 p-6 rounded">
            <button
              className="w-full bg-red-600 py-2 mb-2 rounded"
              onClick={() => vote(index, 'a')}
            >
              {a} — {votes[index].a}
            </button>

            <button
              className="w-full bg-green-600 py-2 rounded"
              onClick={() => vote(index, 'b')}
            >
              {b} — {votes[index].b}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bracket;
