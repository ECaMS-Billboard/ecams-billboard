import { useState } from 'react';

const Bracket = () => {
  // Initial desserts
  const desserts = [
    'Cake',
    'Ice Cream',
    'Cookies',
    'Brownies',
    'Pie',
    'Cupcakes',
    'Donuts',
    'Cheesecake',
  ];

  // Helper: pair up an array into matchups
  const createMatchups = (arr) => {
    const matchups = [];
    for (let i = 0; i < arr.length; i += 2) {
      const pair = arr[i + 1] ? [arr[i], arr[i + 1]] : [arr[i], arr[i]];
      matchups.push({ pair, votes: { [pair[0]]: 0, [pair[1]]: 0 } });
    }
    return matchups;
  };

  // State: array of rounds
  const [rounds, setRounds] = useState([
    { matchups: createMatchups(desserts), completed: false },
  ]);

  // Vote handler
  const vote = (roundIndex, matchIndex, choice) => {
    setRounds((prevRounds) => {
      const newRounds = [...prevRounds];
      newRounds[roundIndex] = { ...newRounds[roundIndex] };
      newRounds[roundIndex].matchups = [...newRounds[roundIndex].matchups];
      const match = { ...newRounds[roundIndex].matchups[matchIndex] };
      match.votes = { ...match.votes };
      match.votes[choice] += 1;
      newRounds[roundIndex].matchups[matchIndex] = match;
      return newRounds;
    });
  };

  // Advance round automatically if all matches in the current round have votes > 0
  const advanceRound = () => {
    const currentRound = rounds[rounds.length - 1];
    const winners = currentRound.matchups.map((m) =>
      m.votes[m.pair[0]] >= m.votes[m.pair[1]] ? m.pair[0] : m.pair[1]
    );

    if (winners.length === 1) {
      // Tournament ended
      setRounds((prev) => [
        ...prev.slice(0, prev.length - 1),
        { ...currentRound, completed: true, winners },
      ]);
    } else {
      const nextRound = { matchups: createMatchups(winners), completed: false };
      setRounds((prev) => [
        ...prev.slice(0, prev.length - 1),
        { ...currentRound, completed: true },
        nextRound,
      ]);
    }
  };

  const currentRoundIndex = rounds.findIndex((r) => !r.completed);
  const currentRound =
    currentRoundIndex >= 0 ? rounds[currentRoundIndex] : rounds[rounds.length - 1];
  const tournamentWinner =
    rounds[rounds.length - 1].completed &&
    rounds[rounds.length - 1].matchups.length === 1
      ? rounds[rounds.length - 1].matchups[0].pair[0]
      : null;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-red-600 text-4xl font-bold mb-6">Dessert Bracket</h1>

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
              {currentRound.matchups.map((m, index) => {
                const a = m.pair[0];
                const b = m.pair[1];
                const aVotes = m.votes[a];
                const bVotes = m.votes[b];
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
                        onClick={() => vote(currentRoundIndex, index, a)}
                        className={`py-2 rounded font-semibold ${
                          aLeading ? 'bg-green-600' : 'bg-gray-600'
                        }`}
                      >
                        {a} — {aVotes} votes
                      </button>
                      <button
                        onClick={() => vote(currentRoundIndex, index, b)}
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