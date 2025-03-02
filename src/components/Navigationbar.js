import React from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <Link to="/" className="bg-neutral-900 text-center flex items-center justify-center">
      <header className="bg-neutral-900 text-red-500 text-center shadow-lg font-bold flex items-center">ECaMS Billboard
        <img src='lewis_logo.png' alt='home' className="w-4 h-4 ml-1"></img>
      </header>
    </Link>
  );
};

export default Navigationbar;
