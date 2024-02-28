import React from 'react';

const Achievements = () => {
  return (
    <div className="section">
      <h2 className="section-title">Achievements</h2>
      <div className="content">
        <ul className="achievement-list">
          <li>
            <span className="achievement-headings">Silver Medal:</span> Swarm Optimization of Multiple UAVs for Resource Allocation in HADR Operations. <a href="https://anantshukla.com/files/Swarm_Optimization_UAV_HADR.pdf">Paper</a>
          </li>
          <li>
            <span className="achievement-headings">Silver Medal:</span> Design and Architecture of an Amphibious Reconnaissance Vehicle for Aerial & Underwater Operations. The project was funded by DRDO, SRMIST, and won the Most Innovative Solution Award in DRDO Robotics and Unmanned Systems 2018.  <a href="https://anantshukla.com/files/Amphibious_Reconnaissance_Vehicle_DRDO.pdf">Paper</a>
          </li>
          <li>
            <span className="achievement-headings">Best in Technical Design Award:</span> AUVSI Student Unmanned Aerial System 2019 held in Patuxent River Naval Airbase, MD, USA.  <a href="https://anantshukla.com/files/SUAS_2019_CDR_SRM.pdf">Report</a>
          </li>
          <li>
            <span className="achievement-headings">Medical Express Outback Challenge (2018):</span> Shortlisted in the top 20 of 564 teams to compete in MedEx UAV Challenge, Australia 2018.
          </li>
          <li>
            <span className="achievement-headings">Indian Olympic Association (2021):</span> Level 3 Yachting Certification for Wind Sail Boats.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
