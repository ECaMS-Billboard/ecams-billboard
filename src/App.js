import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  AdminPanel, About, Credits, Home, Kiosk, ProfessorList, ProfessorProfile,
  Resources, Slides, Upload, EverydayApp, /*LewisMap,*/
  CapstoneProducts, Carousel, Events
} from './pages';

import Navigationbar from './components/Navigationbar';

function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    {
      title: 'View Poster Slideshow',
      path: '/slides',
      description: 'The slideshow that is currently present on the Kiosk.'
    },
    {
      title: 'Upload a Poster',
      path: '/upload',
      description: 'Share your academic or event poster with the ECaMS community.'
    },
    // { title: 'View Map of Lewis', path: '/lewis-map' },
    {
      title: 'Professor Information',
      path: '/professor-list',
      description: 'Find contact details and office hours for ECaMS faculty.'
    },
    {
      title: 'Everyday App',
      path: '/everydayapp',
      description: 'Discover helpful tools to simplify your day-to-day campus life.'
    },
    {
      title: 'Capstone Products',
      path: '/capstoneproducts',
      description: 'Explore innovative student projects from capstone courses.'
    },
    {
      title: 'Student Events',
      path: '/events',
      description: 'Stay in the loop with upcoming student-led events and activities.'
    },
    {
      title: 'Credits',
      path: '/credits',
      description: 'See who contributed to the creation and success of this platform.'
    },
    {
      title: 'Resources',
      path: '/resources',
      description: 'Access academic support services and essential campus resources.'
    },
    {
      title: 'About & Contact',
      path: '/about',
      description: 'Learn about the ECaMS Billboard project and how to get in touch.'
    }
  ];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/about" element={<><Navigationbar /><About /></>} />
        <Route path="/acp/" element={<AdminPanel />} />
        <Route path="/credits" element={<><Navigationbar /><Credits /></>} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/professor-list" element={<><Navigationbar /><ProfessorList /></>} />
        <Route path="/prof/:id" element={<ProfessorProfile />} />
        <Route path="/resources" element={<><Navigationbar /><Resources /></>} />
        <Route path="/slides" element={<><Navigationbar /><Slides /></>} />
        <Route path="/upload" element={<><Navigationbar /><Upload /></>} />
        <Route path="/everydayapp" element={<><Navigationbar /><EverydayApp /></>} />
        <Route path="/capstoneproducts" element={<><Navigationbar /><CapstoneProducts /></>} />
        <Route path="/events" element={<><Navigationbar /><Events /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
