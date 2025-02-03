import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { AdminPanel, About, Credits, Home, Kiosk, ProfessorList, ProfessorProfile,
         Resources, Slides, Upload, EverydayApp, /*LewisMap,*/
         CapstoneProducts} from './pages';

function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    { title: 'View Poster Slideshow', path: '/slides' },
    { title: 'Upload a Poster', path: '/upload' },
    /*{ title: 'View Map of Lewis', path: '/lewis-map' },*/
    { title: 'Professor Information', path: '/professor-list' },
    { title: 'Everyday App', path: '/everydayapp' },
    { title: 'Capstone Products', path: '/capstoneproducts' },

    // Keep Resources and the About pages on the bottom of the list
    //{ title: 'Credits', path: '/credits' },
    { title: 'Resources', path: '/resources' },
    { title: 'About & Contact', path: '/about' }
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
        {/*<Route path="/lewis-map" element={<LewisMap/>}/>*/}
        <Route path="/professor-list" element={<ProfessorList/>}/>
        <Route path="/prof/:id" element={<ProfessorProfile/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/slides" element={<Slides/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/everydayapp" element={<EverydayApp/>}/>
        <Route path="/capstoneproducts" element={<CapstoneProducts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
