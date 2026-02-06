import { useState, useEffect } from 'react';

const Bracket = () => {
  const items = ['Cake', 'Ice Cream', 'Cookies', 'Brownies'];

  const STORAGE_KEY = 'simpleBracketState';
  const [votes, setVotes] = useState({});

  // Load votes from localStorage (browser only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      setVotes(saved);
    } else {
      const initialVotes = {};
      items.forEach((item) => (initialVotes[item] = 0));
      setVotes(initialVotes);
    }
  }, []);

  // Save votes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
  }, [votes]);

  const vote = (item) => {
    setVotes({ ...votes, [item]: (votes[item] || 0) + 1 });
  };

  // Find current winner
  const winner = items.reduce((a, b) =>
    (votes[a] || 0) >= (votes[b] || 0) ? a : b
  );

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Vote for Your Favorite Dessert!</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item} style={{ margin: '1rem' }}>
            <button onClick={() => vote(item)}>
              {item} ({votes[item] || 0})
            </button>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: '2rem' }}>Current Leader: {winner}</h2>
    </div>
  );
};

export default Bracket;
