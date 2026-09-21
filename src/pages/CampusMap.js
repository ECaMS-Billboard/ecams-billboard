import React, { useState } from "react";
import "../components/CampusMap.css";
import Map from "../imgs/campus-map.png";

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

    top: "45%",
    left: "61%",
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

    top: "37%",
    left: "50%",
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

    top: "69%",
    left: "38%",
  },

  {
    id: "science",
    name: "De La Salle Hall (DL) – 45",

    shortDescription:
      "Bookstore, Courtyard Cafe, Mailroom, Marketing and Communications.",

    details: [
      "Ground Floor: Bookstore, Courtyard Cafe, Mailroom, Marketing and Communications",
      "Second Floor: English, Radio/TV Brodcast Studio, Dean/Humanities/Fine Arts and Communications, Damian Auditorium",
      "Third Floor: Education",
    ],

    top: "69%",
    left: "50%",
  },

  {
    id: "social studies",
    name: "Benilde Hall (BE) - 43",

    shortDescription:
      "Justice, Law and Public Safety Studies, Political Science, Psychology, Sociology, Social Work, Dean/Education and Social Sciences",

    details: [
      "Justice, Law and Public Safety Studies, Political Science, Psychology, Sociology, Social Work, Dean/Education and Social Sciences",
    ],

    top: "69%",
    left: "61%",
  },

  {
    id: "Gymnasium",
    name: "JFK Student Recreation and Sports Center (SC) - 23",

    shortDescription:
      "The Gymnasium",

    details: [
      "Justice, Law and Public Safety Studies, Political Science, Psychology, Sociology, Social Work, Dean/Education and Social Sciences",
    ],

    top: "49%",
    left: "36%",
  },

  {
    id: "Fine Arts",
    name: "Oremus Fine Arts Center (FA) 18",

    shortDescription:
      "Arts Center and Theatre",

    details: [
      "First Floor: Art/Design, Caterpillar Gallery, Phillip Lynch Theatre, Wadsworth Family Gallery",
      "Second Floor: Music, Ives Recital Hall, Theatre, Keith White Theatre",
    ],

    top: "35%",
    left: "37%",
  },

  {
    id: "Aviation",
    name: "Brother Neil Kieffe, FSC Aviation Building (HW) - 21",

    shortDescription:
      "Aviation Maintenance and Hangar",

    details: [
      "Aviation Maintenance and Hangar",
    ],

    top: "38%",
    left: "27%",
  },
    
  {
    id: "Aviation",
    name: "Harold E. White Aviation Center (HW) - 19",

    shortDescription:
      "Aviation Dispatch",

    details: [
      "Aviation and Flight Dispatch Center",
    ],

    top: "33%",
    left: "30%",
  },
    
  {
    id: "North Campus_1",
    name: "St. Charles Borromeo (SB) - 1",

    shortDescription:
      "Accessed Via 101 Airport Road",

    details: [
      "Human Resorces, College of Buisness, Convocation Hall, Presidental Gallery, Facilities, Flight Deck, Innovation Hub, Lowell Stahl Center",
    ],

    top: "16%",
    left: "74%",
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
