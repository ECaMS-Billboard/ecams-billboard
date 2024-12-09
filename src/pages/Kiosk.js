// This page is displayed on the kiosk. Loops the poster slideshow.

import React, { useState, useEffect, useCallback } from 'react';

function Slides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [professors, setProfessors] = useState([]);

  // Fetch banner data
  useEffect(() => {
    async function fetchBannerData() {
      try {
        const response = await fetch('https://ecams-billboard--api.azurewebsites.net/api/banners');
        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchBannerData();

    async function fetchProfessorData() {
      try {
        const response = await fetch('https://ecamsbb-api.azurewebsites.net/prof-list');
        const data = await response.json();

        if (Array.isArray(data)) {
          setProfessors(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchProfessorData();
  }, []);

 // Show next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  // Show previous slide (unused in /kiosk)
  // const prevSlide = useCallback(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  // }, [items.length]);

  // Auto-slide
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  return (
    <main className="overflow-x-hidden overflow-y-hidden box-border h-screen bg-neutral-900 items-center ">
      <div className="relative overflow-hidden rounded-lg shadow-lg">

        {/* Professor Carousel container */}
        <header className="text-red-500 text-center shadow-lg font-bold">ECaMS Billboard</header>
        <div className="overflow-hidden h-96">

          <div className="vertical-scroll-animation">
          {professors.length > 0 ? (
              professors.map((professor, index) => (
                <div key={index} className="flex justify-center items-center h-16 bg-gray-200 border-b border-gray-300">
                  <h2 className="font-bold mb-2 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {professor.fname} {professor.lname} | Office: {professor.office} |
                  </h2>
                </div>
              ))
            ) : (
              <p>Loading professor information...</p> // Show loading message until data is fetched
            )}
          </div>
        </div>

        {/* Carousel container */}
        <div
          className="carousel flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item w-full h-full flex-shrink-0">
              <img
                src={`https://ecams-billboard--api.azurewebsites.net/uploads/${item.image_name}`}
                alt={item.name || `Slide ${index + 1}`}
                className="w-full max-h-screen object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
        <footer className="text-slate-100 text-center shadow-lg font-bold text-8xl">Access The ECaMS Hub!</footer>
        <footer className="text-red-500 text-center shadow-lg font-bold text-8xl">⇓SCAN ME⇓</footer>
      </div>
      
    </main>
  );
}

export default Slides;
