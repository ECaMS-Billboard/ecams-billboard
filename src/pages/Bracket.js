import { useState } from 'react';

const Bracket = () => {
  // Fixed, even list — no runtime surprises
  const matchups = [
    { a: 'Cake', b: 'Ice Cream' },
    { a: 'Cookies', b: 'Brownies' },
  ];

  const [votes, setVotes] = useState({
    Cake: 0,
    'Ice Cream': 0,
    Cookies: 0,
    Brownies: 0,
  });

  const vote = (item) => {
    setVotes((prev) => ({
      ...prev,
      [item]: prev[item] + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Round label */}
        <h2 className="text-gray-400 text-lg mb-2">Round 1</h2>
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          Dessert Bracket
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {matchups.map((m, index) => {
            const aVotes = votes[m.a];
            const bVotes = votes[m.b];

            const aLeading = aVotes >= bVotes;
            const bLeading = bVotes > aVotes;

            return (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Match {index + 1}
                </h3>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => vote(m.a)}
                    className={`py-2 rounded font-semibold transition ${
                      aLeading ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    {m.a} — {aVotes} votes
                  </button>

                  <button
                    onClick={() => vote(m.b)}
                    className={`py-2 rounded font-semibold transition ${
                      bLeading ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    {m.b} — {bVotes} votes
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bracket;
