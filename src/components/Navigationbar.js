import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Slides', path: '/slides' },
  { name: 'Upload', path: '/upload' },
  { name: 'Professors', path: '/professor-list' },
  { name: 'Everyday App', path: '/everydayapp' },
  { name: 'Capstone', path: '/capstoneproducts' },
  { name: 'Events', path: '/events' },
  //{ name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
 // { name: 'Credits', path: '/credits' },
];

export default function Navigationbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black shadow-lg">
      <div className="bg-black text-red-500 text-center font-bold flex items-center justify-center py-2">
        <Link to="/" className="flex items-center justify-center"> ECaMS Billboard
          <img src="lewis_logo.png" alt="home" className="w-4 h-4 ml-1"/>
        </Link>
      </div>

      <nav className="bg-black text-sm flex flex-wrap justify-center gap-4 py-2 border-t border-red-500">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="text-red-500 px-3">
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}