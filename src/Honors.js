import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Honors() {
  return (
    <div className="section honors listing">
      <h2 className="section-header">Honors</h2>
      <div className="content">

        <div className="honor">
          <div className="listing-title">Best in Technical Design, AUVSI SUAS 2019</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2019</span>
          </div>
          <div className="listing-description">
            <p>For the presentation of
              <a href="https://jon.tsp.io/papers/mobicom14-phaser.pdf">
                Phaser: Enabling Phased Array Signal Processing on Commodity WiFi Access Points
              </a> at MobiCom '14 in Maui, Hawaii
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
              For
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Medical Express Outback Challenge, Australia 2018 - Amongst the Top 20 in 564 teams</div>
          <div className="dates">
            <span className="end-month">September </span>
            <span className="end-year">2018</span>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">First prize in Techproject, SRM Institute of Science and Technology for project titled 'Home Automation'</div>
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
