import React, { useState, useEffect, useCallback } from 'react';

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

  // Show previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto-slide
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  return (
    <main className="h-screen bg-neutral-900 flex items-center justify-center">
      <div className="relative overflow-hidden w-full max-w-6xl bg-neutral-900 rounded-lg shadow-lg">
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

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="control-button absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-neutral-700 text-white shadow-md hover:bg-neutral-600"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="control-button absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-neutral-700 text-white shadow-md hover:bg-neutral-600"
        >
          ❯
        </button>
      </div>
    </main>
  );
}

export default Slides;