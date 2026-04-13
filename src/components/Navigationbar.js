import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black shadow-lg">
      <div className="bg-black flex items-center justify-center py-2">
        <Link to="/">
          <img src="lewis_logo.png" alt="home" className="w-8 h-8" />
        </Link>
      </div>
    </header>
  );
}