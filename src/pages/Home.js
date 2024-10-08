import { Link } from 'react-router-dom';

function Home({ links }) {
  return (
    <main className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className="text-red-700 text-3xl font-extrabold mb-8" style={{ marginRight: '10px' }}>ECaMS Billboard</h1>
        <img src="lewis_logo.png" alt="Lewis Title Logo" style={{ width: '50px', height: 'auto', marginTop: '-30px' }} />
      </div>
      <nav className="w-full max-w-md flex flex-col gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="block text-white bg-neutral-700 hover:bg-neutral-600 py-3 px-4 rounded-lg shadow text-center transition hover:-translate-y-1"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}

export default Home;
