import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Upload from './pages/Upload';
import Slides from './pages/Slides';
import Contact from './pages/Contact';
import About from './pages/About';
import Credits from './pages/Credits';


function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    { title: 'Upload a Poster', path: '/upload' },
    { title: 'View Flyer Slideshow', path: '/slides' },
    //{ title: 'Contact', path: '/contact' },
    //{ title: 'About', path: '/about' },
    //{ title: 'Credits', path: '/credits' },
  ]
 
  // Defines page routing scheme.
  // For example, going to `<URL>/about` will return `./pages/About.js`.
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home links={links}/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/slides" element={<Slides/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/credits" element={<Credits/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
