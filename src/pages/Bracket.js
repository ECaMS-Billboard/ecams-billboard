import { useState, useEffect } from 'react';

const Bracket = () => {
  const items = [
    'Cake', 'Ice Cream', 'Cookies', 'Brownies',
    'Pie', 'Cupcakes', 'Donuts', 'Cheesecake'
  ];

  const ROUND_DURATION_MS = 10_000; // 10 seconds for testing, change to 604_800_000 for 1 week

  const [roundIndex, setRoundIndex] = useState(0);
  const [matchups, setMatchups] = useState([]);
  const [tournamentEnded, setTournamentEnded] = useState(false);

  // Initialize first round
  useEffect(() => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    const initialMatchups = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      const pair = shuffled[i + 1] ? [shuffled[i], shuffled[i + 1]] : [shuffled[i], shuffled[i]];
      initialMatchups.push({ pair, votes: { [pair[0]]: 0, [pair[1]]: 0 } });
    }
    setMatchups(initialMatchups);
  }, []);

  // Advance round automatically
  useEffect(() => {
    if (matchups.length === 0 || tournamentEnded) return;

    const timer = setTimeout(() => {
      // Calculate winners
      const winners = matchups.map((m) => {
        const [a, b] = m.pair;
        return m.votes[a] >= m.votes[b] ? a : b;
      });

      if (winners.length === 1) {
        setTournamentEnded(true);
      } else {
        // Next round matchups
        const nextMatchups = [];
        for (let i = 0; i < winners.length; i += 2) {
          const pair = winners[i + 1] ? [winners[i], winners[i + 1]] : [winners[i], winners[i]];
          nextMatchups.push({ pair, votes: { [pair[0]]: 0, [pair[1]]: 0 } });
        }
        setMatchups(nextMatchups);
        setRoundIndex((prev) => prev + 1);
      }
    }, ROUND_DURATION_MS);

    return () => clearTimeout(timer);
  }, [matchups, tournamentEnded]);

  // Vote function
  const vote = (matchIndex, choice) => {
    if (tournamentEnded) return;
    const newMatchups = [...matchups];
    newMatchups[matchIndex].votes[choice] += 1;
    setMatchups(newMatchups);
  };

  if (matchups.length === 0) {
    return <div className="min-h-screen bg-black text-white text-center p-12">Loading tournament...</div>;
  }

  if (tournamentEnded) {
    const finalMatch = matchups[0].pair;
    const winner = matchups[0].votes[finalMatch[0]] >= matchups[0].votes[finalMatch[1]] ? finalMatch[0] : finalMatch[1];
    return (
      <div className="min-h-screen bg-black text-white text-center p-12">
        <h1 className="text-4xl font-bold text-green-500">Winner: {winner}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-red-700 text-4xl font-bold mb-6">Vote for Your Favorite Dessert!</h1>
        <h2 className="text-2xl mb-6">Round {roundIndex + 1}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {matchups.map((match, i) => {
            const [a, b] = match.pair;
            const totalVotes = match.votes[a] + match.votes[b];
            const aPercent = totalVotes ? Math.round((match.votes[a] / totalVotes) * 100) : 0;
            const bPercent = totalVotes ? 100 - aPercent : 0;

            return (
              <div key={i} className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4">Match {i + 1}</h3>
                <div className="flex flex-col gap-2">
                  <button
                    className={`py-2 px-4 rounded font-semibold ${
                      aPercent >= bPercent ? 'bg-green-600' : 'bg-red-600'
                    } hover:brightness-110 transition`}
                    onClick={() => vote(i, a)}
                  >
                    {a} — {match.votes[a]} votes ({aPercent}%)
                  </button>

                  <button
                    className={`py-2 px-4 rounded font-semibold ${
                      bPercent >= aPercent ? 'bg-green-600' : 'bg-red-600'
                    } hover:brightness-110 transition`}
                    onClick={() => vote(i, b)}
                  >
                    {b} — {match.votes[b]} votes ({bPercent}%)
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
