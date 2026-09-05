import React, { useState } from "react";
import "../components/CampusMap.css";
import Map from "../imgs/campus-map.jpg";

const buildings = [
  {
    id: "library",
    name: "Learning Resource Center (LR) – 33",

    shortDescription:
      "Library, Writing Center, Financial Aid, and Student Services.",

    details: [
      "Basement: Office of Technology",
      "Ground Floor: Financial Aid, Registrar, Career Services",
      "First Floor: Library, Writing Center",
      "Third Floor: Veterans Affairs, Academic Services",
    ],

    top: "42%",
    left: "57%",
  },

  {
    id: "science",
    name: "Academic Science Center (AS) – 12",

    shortDescription:
      "Engineering, Computing, Biology, Chemistry, and Physics.",

    details: [
      "Lower Floor: Physics, Greenhouse",
      "Ground Floor: Chemistry, Engineering",
      "Upper Floor: Biology",
    ],

    top: "35%",
    left: "48%",
  },

  {
    id: "student-center",
    name: "Student Center (JG) – 47",

    shortDescription:
      "Dining Hall, Student Engagement, and Student Senate.",

    details: [
      "Lower Level: Student Engagement",
      "First Floor: Dining Hall",
    ],

    top: "60%",
    left: "63%",
  },
];

const CampusMap = () => {
  const [activeBuilding, setActiveBuilding] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="map-page">

      {/* MAP */}
      <div className="map-container">

        <img
          src={Map}
          alt="Campus Map"
          className="map-image"
        />

        {/* HOTSPOTS */}
        {buildings.map((building) => (
          <div
            key={building.id}
            className="hotspot"
            style={{
              top: building.top,
              left: building.left,
            }}
            onClick={() => setActiveBuilding(building)}
          >
            <div className="hotspot-marker"></div>
          </div>
        ))}

        {/* POPUP */}
        {activeBuilding && (
          <div className="popup-card">

            <button
              className="close-popup"
              onClick={() => setActiveBuilding(null)}
            >
              ×
            </button>

            <h3>{activeBuilding.name}</h3>

            <p>{activeBuilding.shortDescription}</p>

            <button
              className="popup-btn"
              onClick={() => {
                scrollToSection(activeBuilding.id);
                setActiveBuilding(null);
              }}
            >
              View Building Info
            </button>

          </div>
        )}

      </div>

      {/* BUILDING INFO */}
      <div className="map-info">

        <h2>Main Campus Buildings</h2>

        {buildings.map((building) => (
          <div
            key={building.id}
            id={building.id}
            className="building"
          >

            <h3>{building.name}</h3>

            <ul>
              {building.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CampusMap;