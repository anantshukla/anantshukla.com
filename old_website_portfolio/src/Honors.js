import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Honors() {
  return (
    <div className="section honors listing">
      <h2 className="section-header">Honors</h2>
      <div className="content">

        <div className="honor">
          <div className="listing-title">Best in Technical Design: AUVSI SUAS 2019 at Naval Air Station Webster Field, Maryland, USA, Maryland, USA</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2019</span>
          </div>
          <div className="listing-description">
            <p>
              The problem statement of the competition has various tasks such as Autonomous Takeoff, Autonomous Navigation, Deployment of Rescue UGV from the UAV at the designated GPS Coordinate, Obstacle Avoidance and Image Processing.
            </p>
            <p>
              We won the Best in Technical Design award and recieved a cash prize.
              <br />
              Comprehensive Design Report: <a href="https://anantshukla.com/files/SUAS 2019 CDR SRM.pdf">SUAS 2019-CDR</a>
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">
            National Rank 5, DRDO Robotics and Unmanned Systems Exposition (DRUSE) 2018
          </div>
          <div className="dates">
            <span className="end-month">May </span>
            <span className="end-year">2018</span>
          </div>
          <div className="listing-description">
            <p>
              Developed an Amphibious Reconnaissance Vehicle capable of Aerial, Underwater and sea level operations for the Defence Research and Development Organisation (DRDO). Project funded by DRDO and SRM Institute of Science and Technology. 2nd position in DRDO-DRUSE regionals 2018. 5th position in DRDO-DRUSE nationals 2018. Overall cash prize of over 1.5 Lakh India Rupees.
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">
            Silver Medal for Research Paper: Design and Architecture of an Amphibious Reconnaissance Vehicle capable of Aerial and Underwater Operations
          </div>
          <div className="dates">
            <span className="end-month">February </span>
            <span className="end-year">2019</span>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">
            Silver Medal for Research Paper: Swarm Optimization of Multiple UAV’s for Resource Allocation in Humanitarian Aid and Disaster Relief Operations
          </div>
          <div className="dates">
            <span className="end-month">February </span>
            <span className="end-year">2019</span>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">
            Medical Express Outback Challenge, Australia 2018 - Amongst the Top 20 in 564 teams
          </div>
          <div className="dates">
            <span className="end-month">September </span>
            <span className="end-year">2018</span>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">
            First prize in Techproject, SRM Institute of Science and Technology for project titled 'Home Automation'
          </div>
          <div className="dates">
            <span className="end-month">April </span>
            <span className="end-year">2017</span>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Honors;
