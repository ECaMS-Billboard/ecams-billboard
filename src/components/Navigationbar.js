import React from 'react';
<<<<<<< Updated upstream
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Slides', path: '/slides' },
  { name: 'Upload', path: '/upload' },
  { name: 'Professors', path: '/professor-list' },
  { name: 'Everyday App', path: '/everydayapp' },
  { name: 'Capstone', path: '/capstoneproducts' },
  { name: 'Events', path: '/events' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'Credits', path: '/credits' },
];
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

export default function Navigationbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black shadow-lg">
      <div className="bg-black border-b border-red-500 py-2 flex items-center justify-center">
        <Link to="/" className="flex items-center justify-center text-red-500 font-bold text-xl">
          ECaMS Billboard
          <img
            src="lewis_logo.png"
            alt="home"
            className="w-5 h-5 ml-1"
          />
        </Link>
      </div>
<<<<<<< Updated upstream

      <nav className="bg-black text-sm flex flex-wrap justify-center gap-4 py-2 border-t border-red-500">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="text-red-400 px-3">
            {item.name}
          </NavLink>
        ))}
      </nav>
=======
>>>>>>> Stashed changes
    </header>
  );
}