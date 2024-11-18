import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import Credits from './pages/Credits';
import Home from './pages/Home';
import Kiosk from './pages/Kiosk';
import Professors from './pages/Professors';
import Resources from './pages/Resources';
import Slides from './pages/Slides';
import Upload from './pages/Upload';
import LewisMap from './pages/LewisMap';

function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    { title: 'View Poster Slideshow', path: '/slides' },
    { title: 'Upload a Poster', path: '/upload' },
    { title: 'View Map of Lewis', path: '/lewis-map' },
    //{ title: 'Professor Info', path: '/professors' },
    { title: 'About & Contact', path: '/about' },
    { title: 'Other Campus Resources', path: '/resources' },
    //{ title: 'Credits', path: '/credits' },
  ]
 
  // Defines page routing scheme.
  // For example, going to `<URL>/about` will return `./pages/About.js`.
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home links={links}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/acp/" element={<AdminPanel/>}/>
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/kiosk" element={<Kiosk/>}/>
        <Route path="/professors" element={<Professors/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/slides" element={<Slides/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/lewis-map" element={<LewisMap/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
