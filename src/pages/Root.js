import { Link } from 'react-router-dom';

function Root({ links }) {
  return (
    <main className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">ECaMS Billboard</h1>
      <nav className="w-full max-w-md flex flex-col gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="block bg-white hover:bg-gray-50 py-3 px-4 rounded-lg shadow text-center transition hover:-translate-y-1"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}

export default Root;