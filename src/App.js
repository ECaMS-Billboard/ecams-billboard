import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Upload from './pages/Upload';
import Contact from './pages/Contact';
import About from './pages/About';
import Credits from './pages/Credits';


function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    { title: 'Upload a Poster', path: '/upload' },
    //{ title: 'Contact', path: '/contact' },
    //{ title: 'About', path: '/about' },
    //{ title: 'Credits', path: '/credits' },
  ]
 
  // Defines page routing scheme.
  // For example, going to `<URL>/about` will return `./pages/About.js`.
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;
