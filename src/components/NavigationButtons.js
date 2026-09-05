import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationButtons() {
  return (
    <nav className="bg-black flex flex-wrap justify-center gap-3 py-3 px-4">
      <Link to="/slides" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Slides
      </Link>

      <Link to="/upload" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Upload
      </Link>

      <Link to="/professor-list" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Professors
      </Link>

      <Link to="/everydayapp" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Everyday App
      </Link>

      <Link to="/capstoneproducts" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Capstone Products
      </Link>

      <Link to="/events" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Events
      </Link>

      <Link to="/Bracket" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Bracket
      </Link>

      <Link to="/credits" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Credits
      </Link>

      <Link to="/resources" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Resources
      </Link>

      <Link to="/about" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        About
      </Link>

      <Link to="/calendar" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Calendar
      </Link>

      <Link to="/campusmap" className="text-white px-3 py-1 rounded hover:bg-gray-800">
        Campus Map
      </Link>
    </nav>
  );
}