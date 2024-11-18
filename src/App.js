import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { AdminPanel, About, Credits, Home, Kiosk, LewisMap, ProfessorList, ProfessorProfile,
         Resources, Slides, Upload } from './pages';

function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    { title: 'View Poster Slideshow', path: '/slides' },
    { title: 'Upload a Poster', path: '/upload' },
    { title: 'View Map of Lewis', path: '/lewis-map' },
    { title: 'Professor Info', path: '/professor-list' },
    { title: 'About & Contact', path: '/about' },
    { title: 'Other Campus Resources', path: '/resources' },
    //{ title: 'Credits', path: '/credits' },
    { title: 'Everyday App', path: '/EverydayApp' },
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
        <Route path="/lewis-map" element={<LewisMap/>}/>
        <Route path="/professor-list" element={<ProfessorList/>}/>
        <Route path="/prof/:id" element={<ProfessorProfile/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/slides" element={<Slides/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/everydayapp" element={<EverydayApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
