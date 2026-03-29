import { useState, useEffect } from 'react';

const Bracket = () => {
  const [bracket, setBracket] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE =
    'https://ecams-bb-main-api-b5eebnawg4efapek.centralus-01.azurewebsites.net';

  // Fetch bracket on load
  useEffect(() => {
    fetch(`${API_BASE}/api/bracket`)
      .then((res) => res.json())
      .then((data) => {
        setBracket(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch bracket:', err);
        setLoading(false);
      });
  }, []);

  // Vote handler
  const vote = (matchIndex, choice) => {
    fetch(`${API_BASE}/api/bracket/vote`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        matchupIndex: matchIndex,
        choice: choice,
      }),
    })
      .then((res) => res.json())
      .then((updatedBracket) => {
        setBracket(updatedBracket);
      })
      .catch((err) => console.error('Vote failed:', err));
  };

  // Advance round
  const advanceRound = () => {
    fetch(`${API_BASE}/api/bracket/advance`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((updatedBracket) => {
        setBracket(updatedBracket);
      })
      .catch((err) => console.error('Advance round failed:', err));
  };

  if (loading)
    return (
      <div className="text-center text-white mt-12">
        Loading bracket...
      </div>
    );

  if (!bracket)
    return (
      <div className="text-center text-white mt-12">
        No bracket found.
      </div>
    );

  const currentRoundIndex = bracket.currentRound;
  const currentRound = bracket.matchups || [];

  const tournamentWinner =
    bracket.tournamentEnded && currentRound.length === 1
      ? currentRound[0].pair[0]
      : null;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-red-600 text-4xl font-bold mb-6">
          Dessert Bracket
        </h1>

        {tournamentWinner ? (
          <h2 className="text-green-500 text-3xl font-bold">
            Winner: {tournamentWinner}
          </h2>
        ) : (
          <>
            <h2 className="text-gray-400 text-lg mb-4">
              Round {currentRoundIndex + 1}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {currentRound.map((m, index) => {
                const a = m.pair[0];
                const b = m.pair[1];

                const aVotes = m.votes?.[a] || 0;
                const bVotes = m.votes?.[b] || 0;

                const aLeading = aVotes >= bVotes;
                const bLeading = bVotes > aVotes;

                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Match {index + 1}
                    </h3>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => vote(index, a)}
                        className={`py-2 rounded font-semibold ${
                          aLeading ? 'bg-green-600' : 'bg-gray-600'
                        }`}
                      >
                        {a} — {aVotes} votes
                      </button>

                      <button
                        onClick={() => vote(index, b)}
                        className={`py-2 rounded font-semibold ${
                          bLeading ? 'bg-green-600' : 'bg-gray-600'
                        }`}
                      >
                        {b} — {bVotes} votes
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={advanceRound}
              className="bg-blue-500 text-white py-2 px-4 rounded font-semibold"
            >
              Advance Round
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Bracket;