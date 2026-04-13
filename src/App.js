import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import MainLayout from './components/MainLayout';*/
import Footer from './components/Footer';



import {
  AdminPanel, About, Credits, Home, Kiosk, ProfessorList, ProfessorProfile,
  Resources, Slides, Upload, EverydayApp, CarouselApi,/*LewisMap,*/
  CapstoneProducts, Carousel, Tutorial, Events, Bracket, Calendar, CampusMap /*MazeGame,*/ /*Ad*/
} from './pages';

import Navigationbar from './components/Navigationbar';

function App() {
  // Defines what links will be displayed by `./pages/Home.js`.
  const links = [
    {
      title: 'View Poster Slideshow',
      path: '/slides',
      description: 'The slideshow that is currently present on the Kiosk.',
      icon: "icons/slideshow.png"
    },
    {
      title: 'Upload a Poster',
      path: '/upload',
      description: 'Share your academic or event poster with the campus.',
      icon: "icons/upload.png"
    },
    // { title: 'View Map of Lewis', path: '/lewis-map' },
    {
      title: 'Professor Information',
      path: '/professor-list',
      description: 'Find contact details and office hours for ECaMS faculty.',
      icon: "icons/prof-info.png"
    },
    {
      title: 'Everyday App',
      path: '/everydayapp',
      description: 'Quick and easy link to the Everyday App.',
      icon: "icons/everyday-app.png"
    },
    {
      title: 'Capstone Products',
      path: '/capstoneproducts',
      description: 'Visit other student projects from capstone courses.',
      icon: "icons/capstone.png"
    },
    {
      title: 'Student Events',
      path: '/events',
      description: 'Stay in the loop with upcoming campus events and activities.',
      icon: "icons/events.png"
    },

    {
      title: 'Vote Monthly Bracket',
      path: '/Bracket',
      description: "Vote for the best Disney Movie",
      icon: "icons/bracket.png"
    },
/*
    {
      title: 'Maze Game',
      path: '/mazegame',
      description: 'Play a fun customizable Maze Game.'
    },
    */
    {
      title: 'Credits',
      path: '/credits',
      description: 'See who contributed to the creation and success of this platform.',
      icon: "icons/credits.png"
    },
    {
      title: 'Resources',
      path: '/resources',
      description: 'Access academic support services and essential campus resources.',
      icon: "icons/resources.png"
    },
    {
      title: 'About & Contact',
      path: '/about',
      description: 'Learn about the ECaMS Billboard project and how to get in touch.',
      icon: "icons/about.png"
    },
    {
      title: 'Calendar',
      path: '/calendar',
      description: 'View Lewis Events on the Calendar',
      icon: "icons/calendar.png"
    },
    {
      title: 'Campus Map',
      path: '/campusmap',
      description: 'View the Campus Map',
      icon: "icons/calendar.png"
    },
  ];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/about" element={<About />} />
        <Route path="/acp/" element={<AdminPanel />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/carouselApi" element={<CarouselApi />} />
        <Route path="/professor-list" element={<ProfessorList />} />
        <Route path="/prof/:id" element={<ProfessorProfile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/slides" element={<Slides />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/everydayapp" element={<EverydayApp />} />
        <Route path="/capstoneproducts" element={<CapstoneProducts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Bracket" element={<Bracket />} />
        {/*<Route path="/ad" element={<Ad />} />*/}
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/campusmap" element={<CampusMap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
