import React, { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../config";

const placeholderImage = "/ProfImages/StaticProfessor.png";

const ProfessorCarouselApi = () => {
  const [professors, setProfessors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/prof-list`);
        const data = await response.json();
        setProfessors(data);
      } catch (error) {
        console.error("Error fetching professor data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfessors();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 2;
    const intervalTime = 50;
    let scrolling = true;
    let isAtTop = true;

    const scroll = () => {
      if (!carousel) return;
      const totalHeight = carousel.scrollHeight;
      const visibleHeight = carousel.clientHeight;

      if (carousel.scrollTop + visibleHeight >= totalHeight - 1) {
        scrolling = false;
        setTimeout(() => {
          carousel.scrollTo({ top: 0, behavior: "instant" });
          isAtTop = true;
          setTimeout(() => {
            scrolling = true;
          }, 2000);
        }, 2000);
      } else if (carousel.scrollTop === 0 && isAtTop) {
        scrolling = false;
        isAtTop = false;
        setTimeout(() => {
          scrolling = true;
        }, 1000);
      } else if (scrolling) {
        carousel.scrollBy({ top: scrollSpeed, behavior: "smooth" });
      }
    };

    const interval = setInterval(scroll, intervalTime);
    return () => clearInterval(interval);
  }, [professors]);

  if (isLoading) {
    return (
      <div className="w-full bg-black text-white text-center py-10">
        Loading professors...
      </div>
    );
  }

  return (
    <div className="w-full bg-black p-4 overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel flex flex-wrap justify-start overflow-y-auto"
        style={{
          height: "92vh",
          scrollBehavior: "smooth",
          paddingRight: "20px",
        }}
      >
        {[...professors]
          .sort((a, b) =>
            a.lname.toLowerCase().localeCompare(b.lname.toLowerCase())
          )
          .map((prof, index) => {
            const imageSrc = prof.imageUrl || placeholderImage;
            return (
              <div
                key={index}
                className="bg-red-900 p-4 rounded-lg text-center min-w-[150px] flex-shrink-0"
                style={{
                  flexBasis: "calc(20% - 16px)",
                  marginBottom: "10px",
                  marginRight: "16px",
                }}
              >
                <img
                  src={imageSrc}
                  alt={`${prof.fname} ${prof.lname}`}
                  className="w-32 h-32 object-cover mx-auto rounded-full border-2 border-red-700"
                  onError={(e) => (e.target.src = placeholderImage)}
                />
                <p className="text-white text-base font-bold mt-2">
                  {prof.fname} {prof.lname}
                </p>
                {prof.title && (
                  <p className="text-white text-sm italic">{prof.title}</p>
                )}
                <p className="text-white text-sm">{prof.office}</p>
                <a
                  href={`mailto:${prof.email}`}
                  className="text-blue-400 text-sm underline"
                >
                  {prof.email}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfessorCarouselApi;
