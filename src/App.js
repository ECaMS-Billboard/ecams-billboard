import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  AdminPanel, About, Credits, Home, Kiosk, ProfessorList, ProfessorProfile,
  Resources, Slides, Upload, EverydayApp, /*LewisMap,*/
  CapstoneProducts, Carousel, Events, MazeGame,
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
      description: 'Share your academic or event poster with the campus.'
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
      description: 'Qucik and easy link to the Everyday App.'
    },
    {
      title: 'Capstone Products',
      path: '/capstoneproducts',
      description: 'Visit other student projects from capstone courses.'
    },
    {
      title: 'Student Events',
      path: '/events',
      description: 'Stay in the loop with upcoming campus events and activities.'
    },
    {
      title: 'Maze Game',
      path: '/mazegame',
      description: 'Play a fun customizable Maze Game.'
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
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/about" element={<About />} />
        <Route path="/acp/" element={<AdminPanel />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/professor-list" element={<ProfessorList />} />
        <Route path="/prof/:id" element={<ProfessorProfile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/slides" element={<Slides />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/everydayapp" element={<EverydayApp />} />
        <Route path="/capstoneproducts" element={<CapstoneProducts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mazegame" element={<MazeGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
