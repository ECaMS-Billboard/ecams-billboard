import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Upload from './pages/Upload';
import Slides from './pages/Slides';
import About from './pages/About';
import Credits from './pages/Credits';
import Professors from './pages/Professors';
import Resources from './pages/Resources';
import Kiosk from './pages/Kiosk';

function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    { title: 'Upload a Poster', path: '/upload' },
    { title: 'View Poster Slideshow', path: '/slides' },
    { title: 'About & Contact', path: '/about' },
    { title: 'Professors List', path: '/professors' },
    { title: 'Other Resources', path: '/resources' },
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
        <Route path="/about" element={<About/>}/>
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/professors" element={<Professors/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/kiosk" element={<Kiosk/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
