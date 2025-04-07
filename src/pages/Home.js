import React from 'react';
import { Link } from 'react-router-dom';

function Home({ links }) {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="flex items-center justify-center gap-4 mb-8">
        <h1 className="text-red-500 text-5xl font-extrabold text-center">ECaMS Billboard</h1>
        <img className="w-16" src="lewis_logo.png" alt="Lewis Logo" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-2 place-items-center">
        {links.map((link, index) => (
          <div
            key={index}
            className="group w-80 h-[420px] rounded-xl cursor-pointer"
            style={{
              perspective: '1000px',
            }}
          >
            <div
              className="relative w-full h-full rounded-xl transition-all duration-500 shadow-[0_0_25px_rgba(255,0,0,0.4)] group-hover:shadow-[0_0_40px_rgba(255,0,0,0.7)]"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="group-hover:rotate-y-[-8deg] transition-transform duration-500 rounded-xl overflow-hidden w-full h-full bg-gradient-to-b from-red-700 to-black">
                <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_50px_rgba(255,0,0,0.6)] z-0"></div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 space-y-4">
                  <h2 className="text-xl font-bold text-white">{link.title}</h2>
                  <p className="text-sm text-gray-300">
                    {link.description || "Click to learn more about this feature."}
                  </p>
                  <Link
                    to={link.path}
                    className="text-red-400 font-semibold hover:underline"
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
