import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../imgs/hero-bg.jpg';


function Home({ links }) {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section
        className="w-full border-b border-red-700"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Blur overlay */}
        <div className="backdrop-blur-sm bg-black/50">
          <div className="h-64 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-6 max-w-lg w-full text-center mx-4">
              <h1 className="text-3xl font-bold mb-2 text-black">
                ECaMS Billboard
              </h1>
              <p className="text-gray-600 mb-4">
                Upload your slides to display on the kiosk
              </p>

              <Link
                to="/upload"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 rounded-xl transition"
              >
                Upload Slides
              </Link>

              <p className="text-sm text-gray-400 mt-3">
                Supported: PDF, PPT, JPG, PNG
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*CARDS SECTION */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {links.map((link, index) => (
              <Link key={index} to={link.path} className="group">
                
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-[260px] flex flex-col justify-between transition duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10">
                  
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800">
                      {link.icon ? (
                        <img 
                          src={link.icon} 
                          alt={link.title} 
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                      )}
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                      {link.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mt-4">
                    {link.description || "Click to learn more about this feature."}
                  </p>

                  {/* Button */}
                  <span className="text-red-500 font-medium group-hover:underline">
                    See More →
                  </span>

                </div>

              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
