import React from "react";
import "../components/CampusMap.css";
import Map from "../imgs/campus-map.jpg";

const CampusMap = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }
  return (
    <div className="map-page">

      {/* Map */}
      <div className="map-container">
        <img src={Map} alt="Campus Map" className="map-image" />

        <div 
        className="hotspot library"
        onClick={() => scrollToSection("library")}
        >
          <span className="tooltip">Library</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="map-info">
        <h2>Main Campus Buildings</h2>
        <p className="subtext">Access via One University Parkway</p>

        <div className="building">
          <h3>Academic Science Center (AS) – 12</h3>
          <ul>
            <li><strong>Lower Floor:</strong> Physics, Greenhouse</li>
            <li><strong>Ground Floor:</strong> Chemistry, Engineering, Computing & Mathematical Sciences, Cadaver Lab, Likens VR Lab, Dean Office, Charlie’s Place</li>
            <li><strong>Upper Floor:</strong> Biology</li>
          </ul>
        </div>

        <div className="building">
          <h3>Benilde Hall (BE) – 43</h3>
          <ul>
            <li>Justice, Law & Public Safety Studies</li>
            <li>Political Science, Psychology, Sociology, Social Work</li>
            <li>Dean, Education & Social Sciences</li>
          </ul>
        </div>

        <div className="building">
          <h3>Student Center (JG) – 47</h3>
          <ul>
            <li><strong>Lower Level:</strong> Student Engagement, Student Senate, Common Grounds</li>
            <li><strong>First Floor:</strong> Dining Hall</li>
          </ul>
        </div>

        <div className="building">
          <h3>Aviation Building (HW) – 21</h3>
          <ul>
            <li>Aviation Maintenance</li>
            <li>Hangar</li>
          </ul>
        </div>

        <div className="building">
          <h3>Learning Resource Center (LR) – 33</h3>
          <ul>
            <li><strong>Basement:</strong> Office of Technology</li>
            <li><strong>Ground Floor:</strong> Business Office, Financial Aid, Registrar, Career Services, Student Services</li>
            <li><strong>First Floor:</strong> Library, Writing Center</li>
            <li><strong>Third Floor:</strong> Study Abroad, Veterans Affairs, Academic Services</li>
          </ul>
        </div>

        <div className="building">
          <h3>De La Salle Hall (DL) – 45</h3>
          <ul>
            <li><strong>Ground Floor:</strong> Bookstore, Café, Mailroom, Marketing</li>
            <li><strong>Second Floor:</strong> English, Broadcast Studio</li>
            <li><strong>Third Floor:</strong> Education</li>
          </ul>
        </div>

        <div className="building">
          <h3>Oremus Fine Arts Center (FA) – 18</h3>
          <ul>
            <li><strong>First Floor:</strong> Art & Design, Theatre, Galleries</li>
            <li><strong>Second Floor:</strong> Music, Recital Hall</li>
          </ul>
        </div>

        <div className="building">
          <h3>South Hall (SH) – 49</h3>
          <ul>
            <li><strong>Lower Level:</strong> Physical Therapy, Speech Pathology</li>
            <li><strong>Upper Level:</strong> Nursing, Exercise Science, Health Sciences</li>
          </ul>
        </div>

        <div className="building">
          <h3>Stritch Hall (ST) – 10</h3>
          <ul>
            <li>President, Provost, CFO, COO</li>
            <li>Institutional Research</li>
          </ul>
        </div>

        <div className="building">
          <h3>Welcome Center (WC) – 8</h3>
          <ul>
            <li>Admissions</li>
            <li>Alumni Relations</li>
            <li>University Advancement</li>
          </ul>
        </div>

        <div className="building">
          <h3>West Hall (WH) – 50</h3>
          <ul>
            <li>ID Services / Lost & Found</li>
            <li>University Police</li>
          </ul>
        </div>

        {/* Residence Halls */}
        <h2>Residence Halls</h2>

        <div className="building">
          <h3>Cody Hall (CD) – 61</h3>
          <p>Residence Hall</p>
        </div>

        <div className="building">
          <h3>De La Salle North (DL) – 44</h3>
          <p>Residence Hall</p>
        </div>

        <div className="building">
          <h3>De La Salle South (DL) – 46</h3>
          <p>Residence Hall</p>
        </div>

        <div className="building">
          <h3>Mother Teresa Hall (MT) – 56</h3>
          <ul>
            <li>Residence Hall</li>
            <li><strong>Lower Level:</strong> Student Wellness Center</li>
          </ul>
        </div>

        <div className="building">
          <h3>North Hall (NO) – 39</h3>
          <p>Residence Hall</p>
        </div>

        <div className="building">
          <h3>Ryan Hall (RY) – 59</h3>
          <p>Residence Hall</p>
        </div>

        <div className="building">
          <h3>Sheil Hall (SL) – 26</h3>
          <p>Residence Hall</p>
        </div>

        <div className="building">
          <h3>Pope John Paul II Hall (JP) – 58</h3>
          <p>Residence Hall</p>
        </div>

        {/* Sports */}
        <h2>Sports & Recreation</h2>

        <div className="building">
          <h3>Student Recreation Center (SC) – 23</h3>
          <ul>
            <li>Fitness Center</li>
            <li>Fieldhouse</li>
            <li>Swimming Pool</li>
          </ul>
        </div>

        <div className="building">
          <h3>Lewis Stadium – 52</h3>
          <p>Soccer, Track & Field</p>
        </div>

        <div className="building">
          <h3>Powerhouse Fitness Center – 51</h3>
          <p>Flex & Fitness Center</p>
        </div>

      </div>
    </div>
  );
};

export default CampusMap;