import { useState, useEffect } from 'react';

const Bracket = () => {
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

  const STORAGE_KEY = 'bracketWeeklyState';
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  


  const [state, setState] = useState(null);

  // Initialize tournament
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedState) {
      setState(savedState);
    } else {
      const shuffled = [...items].sort(() => Math.random() - 0.5);
      const matchups = [];
      for (let i = 0; i < shuffled.length; i += 2) {
        const pair = shuffled[i + 1] ? [shuffled[i], shuffled[i + 1]] : [shuffled[i], shuffled[i]];
        matchups.push({
          pair,
          votes: { [pair[0]]: 0, [pair[1]]: 0 },
        });
      }

      const initialState = {
        currentRound: 0,
        roundStart: new Date().toISOString(),
        matchups,
        winners: [],
        tournamentEnded: false,
      };

      setState(initialState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));
    }
  }, []);

  // Save state
  useEffect(() => {
    if (state) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Check if round ended
  useEffect(() => {
    if (!state || state.tournamentEnded) return;

    const now = new Date();
    const roundStart = new Date(state.roundStart);
    if (now - roundStart >= ONE_WEEK_MS) {
      const winners = state.matchups.map((m) => {
        const [a, b] = m.pair;
        const va = m.votes[a] || 0;
        const vb = m.votes[b] || 0;
        return va >= vb ? a : b;
      });

      if (winners.length === 1) {
        setState({ ...state, winners, tournamentEnded: true });
      } else {
        const nextMatchups = [];
        for (let i = 0; i < winners.length; i += 2) {
          const pair = winners[i + 1] ? [winners[i], winners[i + 1]] : [winners[i], winners[i]];
          nextMatchups.push({
            pair,
            votes: { [pair[0]]: 0, [pair[1]]: 0 },
          });
        }

        setState({
          currentRound: state.currentRound + 1,
          roundStart: new Date().toISOString(),
          matchups: nextMatchups,
          winners: [],
          tournamentEnded: false,
        });
      }
    }
  }, [state]);

  const vote = (matchIndex, choice) => {
    if (!state || state.tournamentEnded) return;

    const newMatchups = [...state.matchups];
    newMatchups[matchIndex].votes[choice] += 1;

    setState({ ...state, matchups: newMatchups });
  };

  if (!state) return <div className="min-h-screen bg-black py-12 px-4 text-center text-white">Loading tournament...</div>;

  if (state.tournamentEnded) {
    return (
      <div className="min-h-screen bg-black py-12 px-4 text-center text-white">
        <h1 className="text-4xl font-bold text-green-500 mb-6">🏆 Winner: {state.winners[0]} 🏆</h1>
      </div>
    );
  }

  const now = new Date();
  const roundStart = new Date(state.roundStart);
  const roundEndsIn = ONE_WEEK_MS - (now - roundStart);
  const daysLeft = Math.ceil(roundEndsIn / (24 * 60 * 60 * 1000));

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-red-700 text-4xl font-bold mb-6">Vote for Your Favorite Dessert!</h1>
        <h2 className="text-white text-2xl mb-6">
          Round {state.currentRound + 1} — {daysLeft} day(s) left to vote
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {state.matchups.map((match, index) => {
            const [a, b] = match.pair;
            const totalVotes = match.votes[a] + match.votes[b];
            const aPercent = totalVotes ? Math.round((match.votes[a] / totalVotes) * 100) : 0;
            const bPercent = totalVotes ? 100 - aPercent : 0;

            return (
              <div key={index} className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-white mb-4">Match {index + 1}</h3>

                <div className="flex flex-col gap-2">
                  <button
                    className={`py-2 px-4 rounded text-white font-semibold ${
                      aPercent >= bPercent ? 'bg-green-600' : 'bg-red-600'
                    } hover:brightness-110 transition`}
                    onClick={() => vote(index, a)}
                  >
                    {a} — {match.votes[a]} votes ({aPercent}%)
                  </button>

                  <button
                    className={`py-2 px-4 rounded text-white font-semibold ${
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
