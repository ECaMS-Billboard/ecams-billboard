import React from "react";
import "../components/CampusMap.css";
import Map from "../imgs/campus-map.jpg"

const CampusMap = () => {
  return (
    <div className="map-container">
      <img src={Map} alt="Campus Map" className="map-image" />

      {/* Example hotspot */}
      <div className="hotspot library">
        <span className="tooltip">Library - Open 24/7</span>
      </div>
    </div>
  );
};

export default CampusMap;