import { useState } from 'react';

const Bracket = () => {
  const items = ['Cake', 'Ice Cream', 'Cookies', 'Brownies'];
  const [votes, setVotes] = useState({
    Cake: 0,
    'Ice Cream': 0,
    Cookies: 0,
    Brownies: 0,
  });

  const vote = (item) => {
    setVotes({ ...votes, [item]: votes[item] + 1 });
  };

  const winner = Object.keys(votes).reduce((a, b) =>
    votes[a] >= votes[b] ? a : b
  );

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Vote for Your Favorite Dessert!</h1>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => vote(item)}
          style={{ margin: '0.5rem', padding: '1rem' }}
        >
          {item} ({votes[item]})
        </button>
      ))}
      <h2 style={{ marginTop: '2rem' }}>Current Leader: {winner}</h2>
    </div>
  );
};

export default Bracket;
