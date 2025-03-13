import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { AdminPanel, About, Credits, Home, Kiosk, ProfessorList, ProfessorProfile,
         Resources, Slides, Upload, EverydayApp, /*LewisMap,*/
         CapstoneProducts, Carousel,} from './pages';



import Navigationbar from './components/Navigationbar';


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
    { title: 'Credits', path: '/credits' },
    { title: 'Resources', path: '/resources' },
    { title: 'About & Contact', path: '/about' }
  ]
 
  // Defines page routing scheme.
  // For example, going to `<URL>/about` will return `./pages/About.js`.
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home links={links}/>}/>
        <Route path="/about" element={<><Navigationbar/><About/></>}/>
        <Route path="/acp/" element={<AdminPanel/>}/>
        <Route path="/credits" element={<><Navigationbar/><Credits/></>}/>
        <Route path="/kiosk" element={<Kiosk/>}/>
        <Route path="/carousel" element={<Carousel/>}/>
        <Route path="/professor-list" element={<><Navigationbar/><ProfessorList/></>}/>
        <Route path="/prof/:id" element={<ProfessorProfile/>}/>
        <Route path="/resources" element={<><Navigationbar/><Resources/></>}/>
        <Route path="/slides" element={<><Navigationbar/><Slides/></>}/>
        <Route path="/upload" element={<><Navigationbar/><Upload/></>}/>
        <Route path="/everydayapp" element={<><Navigationbar/><EverydayApp/></>}/>
        <Route path="/capstoneproducts" element={<><Navigationbar/><CapstoneProducts/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
