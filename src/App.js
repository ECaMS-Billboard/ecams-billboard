import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  AdminPanel, About, Credits, Home, Kiosk, ProfessorList, ProfessorProfile,
  Resources, Slides, Upload, EverydayApp, CarouselApi,
  CapstoneProducts, Carousel, Events, MazeGame, Ad, ContactUs
} from './pages';

import Larry from './pages/Larry';

import Navigationbar from './components/Navigationbar';
function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Load saved theme or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? saved === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-zinc-800 
                 text-sm text-black dark:text-white border dark:border-zinc-600
                 shadow hover:scale-105 active:scale-95 transition"
    >
      {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

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
      description: 'Quick and easy link to the Everyday App.'
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
    },
    {
      title: 'Contact Us',
      path: '/contactus',
      description: 'Submit a form or Email us about questions, feedback, etc.'
    },

    {
      title: 'Larry',
      path: '/larry',
      description: 'Learn more about Larry here.',
    },
  ];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Global light/dark wrapper */}
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

        {/* Toggle bar at the top */}
        <div className="p-4 flex justify-end">
          <ThemeToggle />
        </div>

        <Navigationbar />

        <Routes>
          <Route path="/" element={<Home links={links} />} />
          <Route path="/about" element={<About />} />
          <Route path="/acp/" element={<AdminPanel />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/kiosk" element={<Kiosk />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/carouselApi" element={<CarouselApi />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/professor-list" element={<ProfessorList />} />
          <Route path="/prof/:id" element={<ProfessorProfile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/everydayapp" element={<EverydayApp />} />
          <Route path="/capstoneproducts" element={<CapstoneProducts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mazegame" element={<MazeGame />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="/larry" element={<Larry />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;