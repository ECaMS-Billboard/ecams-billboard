import React from 'react';
import { Link } from 'react-router-dom';

function Home({ links }) {
  return (
    <div className="min-h-screen p-8 
                    bg-gradient-to-b from-red-100 via-white to-red-100 
                    text-black
                    dark:from-[#a00000] dark:via-black dark:to-black 
                    dark:text-white
                    transition-colors duration-300">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-x-2 place-items-center">
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
              className="relative w-full h-full rounded-xl transition-all duration-500 transform group-hover:scale-[1.03] shadow-[0_0_25px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_45px_rgba(255,0,0,0.7)]"
              style={{
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d', // For Safari
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden', // For Safari
              }}
              tabIndex="0"
            >
              <div
                className="group-hover:rotate-y-[-8deg] transition-transform duration-500 rounded-xl overflow-hidden w-full h-full
                           bg-gradient-to-b from-white via-gray-100 to-gray-200
                           dark:from-[#a00000] dark:via-black dark:to-black"
              >
                <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.15)] group-hover:shadow-[0_0_50px_rgba(255,0,0,0.4)] z-0"></div>

                <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {link.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {link.description || 'Click to learn more about this feature.'}
                  </p>
                  <span className="text-red-600 dark:text-red-400 font-semibold hover:underline">
                    SEE MORE
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
        Powered by ECaMS • Lewis University
      </p>
    </div>
  );
}

export default Home;
