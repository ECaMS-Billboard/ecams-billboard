import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <nav className="bg-red-700 p-1 w-full fixed top-0 left-0">
      <div className="flex flex-wrap justify-center items-center text-center w-full">
        <Link to="/" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Home</Link>
        <Link to="/Slides" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Slideshow</Link>
        <Link to="/Upload" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Upload</Link>
        <Link to="/Professor-list" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Professors</Link>
        <Link to="/About" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">About</Link>
        <Link to="/Resources" className="text-gray-300 hover:text-white mx-2 flex-grow text-center">Resources</Link>
      </div>
    </nav>
  );
};

export default Navigationbar;