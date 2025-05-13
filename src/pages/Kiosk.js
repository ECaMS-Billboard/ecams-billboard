// This page is displayed on the kiosk. Loops the poster slideshow.

import React, { useState, useEffect, useCallback } from 'react';

function Slides() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

  // Fetch banner data
  useEffect(() => {
    async function fetchBannerData() {
      try {
        const response = await fetch('https://ecams-billboard-api2-avgqcycwghf3fzct.centralus-01.azurewebsites.net/list-approved-images');
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

  // Auto-slide
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  return (
    <main className="overflow-x-hidden overflow-y-hidden box-border h-screen bg-black items-center ">
      <div className="relative overflow-hidden rounded-lg shadow-lg">

        {/* Carousel container */}
        <div
          className="carousel flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((slide, index) => (
            <div key={index} className="carousel-item w-full h-full flex-shrink-0">
              <img
                src={`https://ecams-billboard-api-fkcbd4atbhdwhmat.centralus-01.azurewebsites.net/image/${slide.fileId}`}
                alt={slide.filename || `Slide ${index + 1}`}
                className="w-full max-h-screen object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Footer Section */}
      <div className="flex justify-between items-center w-full p-6 bg-black">
        {/* QR Code Positioned at Bottom Left */}
        <div className="flex-shrink-0">
          <img
            src="/billboard_qr_code.png" // Ensure this file is in the `public` folder
            alt="Scan to access the ECaMS Hub"
            className="w-64 h-64"
          />
        </div>

        {/* Footer Messages Positioned to the Right */}
        <div className="text-right text-slate-100 font-bold">
          <p className="text-5xl">Access The ECaMS Hub!</p>
          <p className="text-5xl text-red-500">⇐SCAN ME⇐</p>
        </div>
      </div>
      </div>
    </main>
  );
}
export default Slides;