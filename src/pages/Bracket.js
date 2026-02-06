import { useState, useEffect } from 'react';

const Bracket = () => {
  // Items for the tournament
  const items = [
    'Cake',
    'Ice Cream',
    'Cookies',
    'Brownies',
    'Pie',
    'Cupcakes',
    'Donuts',
    'Cheesecake',
  ];

  const ROUND_DURATION_MS = 10_000; // 10 seconds for testing, change to 604_800_000 (1 week) in production

  // Initialize state
  const [state, setState] = useState({
    currentRound: 0,
    roundStart: new Date().toISOString(),
    matchups: [],
    tournamentEnded: false,
    winners: [],
  });

  // Create initial matchups
  useEffect(() => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    const matchups = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      const pair = shuffled[i + 1] ? [shuffled[i], shuffled[i + 1]] : [shuffled[i], shuffled[i]];
      matchups.push({ pair, votes: { [pair[0]]: 0, [pair[1]]: 0 } });
    }
    setState((s) => ({ ...s, matchups }));
  }, []);

  // Timer to advance rounds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      if (state.tournamentEnded || state.matchups.length === 0) return;

      const now = new Date().getTime();
      const roundEnd = new Date(state.roundStart).getTime() + ROUND_DURATION_MS;

      if (now >= roundEnd) {
        const winners = state.matchups.map((m) => {
          const [a, b] = m.pair;
          return m.votes[a] >= m.votes[b] ? a : b;
        });

        if (winners.length === 1) {
          setState({ ...state, winners, tournamentEnded: true });
        } else {
          // create next round matchups
          const nextMatchups = [];
          for (let i = 0; i < winners.length; i += 2) {
            const pair = winners[i + 1] ? [winners[i], winners[i + 1]] : [winners[i], winners[i]];
            nextMatchups.push({ pair, votes: { [pair[0]]: 0, [pair[1]]: 0 } });
          }

          setState({
            currentRound: state.currentRound + 1,
            roundStart: new Date().toISOString(),
            matchups: nextMatchups,
            tournamentEnded: false,
            winners: [],
          });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [state]);

  // Voting function
  const vote = (matchIndex, choice) => {
    if (state.tournamentEnded) return;
    const newMatchups = [...state.matchups];
    newMatchups[matchIndex].votes[choice] += 1;
    setState({ ...state, matchups: newMatchups });
  };

  // Loading state
  if (state.matchups.length === 0) {
    return <div className="min-h-screen bg-black text-white text-center p-12">Loading tournament...</div>;
  }

  // Tournament ended
  if (state.tournamentEnded) {
    return (
      <div className="min-h-screen bg-black text-white text-center p-12">
        <h1 className="text-4xl font-bold text-green-500">Winner: {state.winners[0]}</h1>
      </div>
    );
  }

  // Countdown
  const now = new Date().getTime();
  const roundEnd = new Date(state.roundStart).getTime() + ROUND_DURATION_MS;
  const secondsLeft = Math.ceil((roundEnd - now) / 1000);

  return (
    <div className="min-h-screen bg-black text-white p-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-red-700 text-4xl font-bold mb-6">Vote for Your Favorite Dessert!</h1>
        <h2 className="text-2xl mb-6">
          Round {state.currentRound + 1} — {secondsLeft} second(s) left
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {state.matchups.map((match, index) => {
            const [a, b] = match.pair;
            const totalVotes = (match.votes[a] || 0) + (match.votes[b] || 0);
            const aPercent = totalVotes ? Math.round((match.votes[a] / totalVotes) * 100) : 0;
            const bPercent = totalVotes ? 100 - aPercent : 0;

            return (
              <div key={index} className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4">Match {index + 1}</h3>

                <div className="flex flex-col gap-2">
                  <button
                    className={`py-2 px-4 rounded font-semibold ${
                      aPercent >= bPercent ? 'bg-green-600' : 'bg-red-600'
                    } hover:brightness-110 transition`}
                    onClick={() => vote(index, a)}
                  >
                    {a} — {match.votes[a]} votes ({aPercent}%)
                  </button>

                  <button
                    className={`py-2 px-4 rounded font-semibold ${
                      bPercent >= aPercent ? 'bg-green-600' : 'bg-red-600'
                    } hover:brightness-110 transition`}
                    onClick={() => vote(index, b)}
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
