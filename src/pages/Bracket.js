import { useState } from 'react';

const Bracket = () => {
  // Round 1 fixed matchups
  const round1 = [
    { a: 'Cake', b: 'Ice Cream' },
    { a: 'Cookies', b: 'Brownies' },
  ];

  // Track votes for each dessert
  const [votes, setVotes] = useState({
    Cake: 0,
    'Ice Cream': 0,
    Cookies: 0,
    Brownies: 0,
  });

  // Track which round we’re in
  const [round, setRound] = useState(1);

  // Round 1 winners
  const round1Winners = round1.map((m) =>
    votes[m.a] >= votes[m.b] ? m.a : m.b
  );

  // Round 2 matchups derived from Round 1 winners
  const round2 = round1Winners.length === 2 ? [
    { a: round1Winners[0], b: round1Winners[1] }
  ] : [];

  // Vote handler
  const vote = (item) => {
    setVotes((prev) => ({
      ...prev,
      [item]: prev[item] + 1,
    }));
  };

  // Advance round safely
  const advanceRound = () => {
    if (round === 1) setRound(2);
  };

  // Determine current matchups
  const currentMatchups = round === 1 ? round1 : round2;

  // Tournament winner
  const tournamentWinner =
    round === 2 && round2.length === 1
      ? votes[round2[0].a] >= votes[round2[0].b]
        ? round2[0].a
        : round2[0].b
      : null;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-gray-400 text-lg mb-2">
          Round {round}
        </h2>
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          Dessert Bracket
        </h1>

        {tournamentWinner ? (
          <h2 className="text-green-500 text-3xl font-bold">
            Winner: {tournamentWinner}
          </h2>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {currentMatchups.map((m, index) => {
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

            {round === 1 && (
              <button
                onClick={advanceRound}
                className="bg-blue-500 text-white py-2 px-4 rounded font-semibold"
              >
                Advance to Round 2
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Bracket;
