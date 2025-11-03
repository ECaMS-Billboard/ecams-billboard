import React from 'react';
import { Link } from 'react-router-dom';

function Home({ links }) {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-x-2 place-items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="group w-full sm:w-1/2 md:w-64 h-[300px] sm:h-[320px] md:h-[360px] rounded-xl cursor-pointer"
            style={{
              perspective: '1000px',
              WebkitPerspective: '1000px', // For Safari
            }}
          >
            <div
              className="relative w-full h-full rounded-xl transition-transform duration-500 shadow-[0_0_25px_rgba(255,0,0,0.4)] group-hover:shadow-[0_0_40px_rgba(255,0,0,0.7)] focus-within:rotate-y-[-4deg]"
              style={{
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d', // For Safari
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden', // For Safari
              }}
              tabIndex="0"
            >
              <div className="group-hover:rotate-y-[-8deg] transition-transform duration-500 rounded-xl overflow-hidden w-full h-full bg-gradient-to-b from-red-700 to-black">
                <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_50px_rgba(255,0,0,0.6)] z-0"></div>

                <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 space-y-4">
                  <h2 className="text-xl font-bold text-white">{link.title}</h2>
                  <p className="text-sm text-gray-300">
                    {link.description || "Click to learn more about this feature."}
                  </p>
                  <span className="text-red-400 font-semibold hover:underline">SEE MORE</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
