import React from "react";
import ProfessorCarouselApi from "../components/ProfessorCarouselApi";

const CarouselApi = () => {
  console.log("Rendering CarouselApi");
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-8">
      <ProfessorCarouselApi />
    </div>
  );
};

export default CarouselApi;
