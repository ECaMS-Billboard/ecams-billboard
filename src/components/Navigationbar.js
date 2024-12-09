import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {

  const [popupStatus, setPopupStatus] = useState(false);
  const togglePopup = () => {setPopupStatus(!popupStatus);}
  return (
    <nav className={`p-1 w-full fixed top-0 left-0 ${popupStatus ? 'bg-red-700' : ''}`}>
      <div className="flex flex-start justify-start">
        <button onClick={togglePopup} className="bg-white text-red-700 px-4 py-2 rounded mx-2 opacity-50 hover:opacity-100">三</button>

        {popupStatus && (
          <div className="flex flex-wrap justify-center items-center text-center w-full">
            <Link to="/" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Home</Link>
            <Link to="/Slides" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Slideshow</Link>
            <Link to="/Upload" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Upload</Link>
            <Link to="/Professor-list" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Professors</Link>
            <Link to="/About" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">About</Link>
            <Link to="/Resources" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Resources</Link>
            <Link to="/Capstoneproducts" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Capstone</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigationbar;