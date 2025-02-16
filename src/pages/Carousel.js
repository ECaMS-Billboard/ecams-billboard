import ProfessorCarousel from '../components/Professorcarousel';
import React from "react";

const Carousel = () => {
  console.log("Rendering Carousel");
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-8">
      <ProfessorCarousel />
    </div>
  );
};

export default Carousel;