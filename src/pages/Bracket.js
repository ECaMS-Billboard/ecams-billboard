import { useState } from 'react';

const Bracket = () => {
  const items = ['Cake', 'Ice Cream', 'Cookies', 'Brownies'];

  // Create first round matchups
  const initialMatchups = [];
  for (let i = 0; i < items.length; i += 2) {
    initialMatchups.push({
      pair: [items[i], items[i + 1]],
      votes: {
        [items[i]]: 0,
        [items[i + 1]]: 0,
      },
    });
  }

  const [round, setRound] = useState(1);
  const [matchups, setMatchups] = useState(initialMatchups);

  const vote = (matchIndex, choice) => {
    const updated = [...matchups];
    updated[matchIndex].votes[choice] += 1;
    setMatchups(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Dessert Bracket
      </h1>

      {/* ROUND LABEL */}
      <h2 className="text-xl text-center text-gray-300 mb-8">
        Round {round}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {matchups.map((match, index) => {
          const [a, b] = match.pair;
          const aVotes = match.votes[a];
          const bVotes = match.votes[b];

          const aLeading = aVotes >= bVotes;
          const bLeading = bVotes > aVotes;

          return (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold mb-4">
                Match {index + 1}
              </h3>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => vote(index, a)}
                  className={`py-2 px-4 rounded font-semibold transition
                    ${aLeading ? 'bg-green-600' : 'bg-red-600'}
                    hover:brightness-110`}
                >
                  {a} — {aVotes} vote(s)
                </button>

                <button
                  onClick={() => vote(index, b)}
                  className={`py-2 px-4 rounded font-semibold transition
                    ${bLeading ? 'bg-green-600' : 'bg-red-600'}
                    hover:brightness-110`}
                >
                  {b} — {bVotes} vote(s)
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bracket;
