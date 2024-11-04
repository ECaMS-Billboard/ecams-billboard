// This page is displayed on the kiosk. Loops the poster slideshow.

import React, { useState, useEffect, useCallback } from 'react';
import professorInfo from '../professorInfo.json';

function Slides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

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
    <main className="overflow-x-hidden overflow-y-hidden box-border min-h-screen min-w-full bg-neutral-900 flex items-center justify-center ">
      <div className="relative overflow-hidden rounded-lg shadow-lg">

        {/* Professor Carousel container */}

        <header className="text-red-500 text-center shadow-lg font-bold">ECaMS Billboard</header>
        <div className="overflow-hidden h-56">

          <div className="vertical-scroll-animation">
            {professorInfo.map((slide, index) => (
              <div 
              key={index} 
              className="flex justify-center items-center h-16 bg-gray-200 border-b border-gray-300"
              >
                  <h2 className="font-bold mb-2 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {slide.First} {slide.Last} | Office: {slide.Office} |
                  </h2>
              </div>
            ))}
          </div>
        </div>


        {/* Carousel container */}
        <div
          className="carousel flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item w-full flex-shrink-0">
              <img
                src={`https://ecams-billboard--api.azurewebsites.net/uploads/${item.image_name}`}
                alt={item.name || `Slide ${index + 1}`}
                className="w-full max-h-screen object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Slides;
