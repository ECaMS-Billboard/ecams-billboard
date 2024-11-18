import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <nav className="bg-red-700 p-1">
      <div className="container mx-auto flex flex-wrap justify-center items-center text-center">
        <Link to="/" className="text-gray-300 hover:text-white mx-1 flex-grow">Home</Link>
        <Link to="/Upload" className="text-gray-300 hover:text-white mx-1 flex-grow">Upload</Link>
        <Link to="/Slides" className="text-gray-300 hover:text-white mx-1 flex-grow">Slideshow</Link>
        <Link to="/About" className="text-gray-300 hover:text-white mx-1 flex-grow">About</Link>
        <Link to="/Professors" className="text-gray-300 hover:text-white mx-1 flex-grow">Professors</Link>
        <Link to="/Resources" className="text-gray-300 hover:text-white mx-1 flex-grow">Resources</Link>
      </div>
    </nav>
  );
};

export default Navigationbar;