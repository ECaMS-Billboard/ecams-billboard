import React, { useState } from "react";
import "../components/CampusMap.css";
import Map from '../imgs/lewis_map.png';

const buildings = [
  {
    id: "North Campus_1",
    name: "St. Charles Borromeo (SB) - 1",

    shortDescription:
      "Accessed Via 101 Airport Road",

    details: [
      "Human Resorces, College of Buisness, Convocation Hall, Presidental Gallery, Facilities, Flight Deck, Innovation Hub, Lowell Stahl Center",
    ],

    top: "14%",
    left: "72%",
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
    id: "Fine Arts",
    name: "Oremus Fine Arts Center (FA) 18",

    shortDescription:
      "Arts Center and Theatre",

    details: [
      "First Floor: Art/Design, Caterpillar Gallery, Phillip Lynch Theatre, Wadsworth Family Gallery",
      "Second Floor: Music, Ives Recital Hall, Theatre, Keith White Theatre",
    ],

    top: "35%",
    left: "35%",
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
    left: "28%",
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
    left: "25%",
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
    left: "34.5%",
  },

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

    top: "44%",
    left: "59.5%",
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
    left: "59.5%",
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
    left: "47%",
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
    left: "36.5%",
  },
];

const dormitories = [
  {
    id: "St.Charles_North",
    name: "St. Charles Borromeo Hall North - 2",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper-class",
      "Sectional Style Living",
      "Co-ed by Section",
      "Connected to the College of Business, Convocation Hall",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 54 Students",
    ],

    top: "12%",
    left: "66.5%",
  },

  {
    id: "St.Charles_South",
    name: "St. Charles Borromeo Hall North - 3",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Male Graduate and Veteran Hall",
      "Traditional Style Setting",
      "Single rooms with Couch/Coffee Table/Micro-Fridge",
      "Connected to the College of Business, Convocation Hall",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 52 Students",
    ],

    top: "17%",
    left: "70.5%",
  },

  {
    id: "Sheil",
    name: "Sheil Hall - 26",

    shortDescription:
      "First Year Residence and Oldest Building on Campus",

    details: [
      "First Year Hall",
      "Traditional Style Setting",
      "Double Rooms",
      "Co-ed by Floor",
      "Alcohol Free",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 123 Students",
    ],

    top: "50%",
    left: "41%",
  },

  {
    id: "Founders",
    name: "Founders Hall - 36",

    shortDescription:
      "One First Year Residence Hall",

    details: [
      "First Year Hall",
      "Traditional Style Setting",
      "Double Rooms",
      "Co-ed by Floor",
      "Alcohol Free",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 160 Students"
    ],

    top: "52%",
    left: "60%",
  },

  {
    id: "North_Hall",
    name: "North Hall - 39",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Suite-Style Living",
      "Single/Double Rooms",
      "Co-ed by Section",
      "Kitchenette and common living space within each section",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 125 Students"
    ],

    top: "55%",
    left: "58%",
  },

  {
    id: "De_La_Salle_North",
    name: "De La Salle Hall North - 44",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Traditional Style Setting",
      "Single Rooms",
      "Co-ed by Floor",
      "Intensive Study Hall",
      "Each room has a sink",
      "Connected to the Courtyard Cafeteria, Bookstore, and Mailroom",
      "Building Amenities: common lounge, pool table, ping-pong table, vending machines, TV, kitchen and laundry",
      "Total Occupancy: 58 Students",
    ],

    top: "66%",
    left: "50%",
  },

  {
    id: "De_La_Salle_South",
    name: "De La Salle Hall South - 46",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Traditional Style Setting",
      "Double Rooms",
      "Co-ed by Floor",
      "Intensive Study Hall",
      "Each room has a sink",
      "Connected to the Courtyard Cafeteria, Bookstore, and Mailroom",
      "Building Amenities: common lounge, pool table, ping-pong table, vending machines, TV, kitchen and laundry",
      "Total Occupancy: 61 Students",
    ],

    top: "71.5%",
    left: "50%",
  },

  {
    id: "South_Hall",
    name: "South Hall - 48 and 49",

    shortDescription:
      "Fill in Blanks",

    details: [
      "First Year Hall",
      "Traditional Style Setting",
      "Single Rooms",
      "Co-ed by Floor",
      "Each Room has a sink",
      "Alcohol Free",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 40 Students"
    ],

    top: "69%",
    left: "29%",
  },

  {
    id: "Dorothy Day Hall",
    name: "Dorothy Day Hall - 55",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Suite-Style Living",
      "Single/Double Rooms",
      "Co-ed by Section",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 125 Students"
    ],

    top: "81.5%",
    left: "28.5%",
  },

  {
    id: "Mother_T",
    name: "Mother Teresa Hall - 56",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Suite-Style Living",
      "Single/Double Rooms",
      "Co-ed by Section",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 95 Students",
    ],

    top: "78%",
    left: "34%",
  },

  {
    id: "Pope_John_Paull",
    name: "Pope John Paul II Hall - 58",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Suite-Style Living",
      "Single/Double Rooms",
      "Co-ed by Section",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 95 Students",
    ],

    top: "78%",
    left: "42.75%",
  },

  {
    id: "Ryan",
    name: "Ryan Hall - 59",

    shortDescription:
      "Fill in Blanks",

    details: [
      "Upper Class Hall",
      "Suite-Style Living",
      "Single/Double Rooms",
      "Co-ed by Section",
      "Building Amentities: common lounge, pool table, ping pong table, vending machines, TV, kitchen and laundry,",
      "Total Occupancy: 58 Students",
    ],

    top: "77%",
    left: "59.5%",
  },

  {
    id: "Cody_hall",
    name: "Cody Hall - 61",

    shortDescription:
      "Suite-style living, Single and double rooms, Co-ed by section Building amenities include common lounge, Total occupancy: 95 students",

    details: [
      "Cody Hall is located on the far southeast corner of campus next to Ryan Hall and is near the softball diamond.", 
      "Cody Hall has recently been renovated, giving it a new fresh look for its 58 residents.",
      "It accommodates single occupancy living. This three floor building is co-ed by floor.",
      "Average room dimensions starting at 13' x 10'.",
    ],

    top: "81%",
    left: "69%",
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

        {/*DORMITORY HOTSPOT*/}
        {dormitories.map((dorm) => (
          <div
            key={dorm.id}
            className="hotspot dorm-hotspot"
            style={{
              top: dorm.top,
              left: dorm.left,
            }}
            onClick={() => setActiveBuilding(dorm)}
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

      {/* DORMITORY INFO */}
      <div className="map-info">

        <h2>Dormitories</h2>

        {dormitories.map((dorm) => (
          <div
            key={dorm.id}
            id={dorm.id}
            className="dorm"
          >

            <h3>{dorm.name}</h3>

            <ul>
              {dorm.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
      </div>
    </div>
  );
};

export default CampusMap;
