import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfessionalExperience() {
  return (
    <div className="section positions listing">
      <h2 className="section-header">Professional experience</h2>
      <div className="content">
        <div className="position first">
          <div className="listing-title">ZALT Technologies LLP</div>
          <div className="dates">
            <span className="start-month">December </span>
            <span className="start-year">2019 </span>
            <span className="date-separator">- </span>
            <span className="end-month">July </span>
            <span className="end-year">2020</span>
          </div>
          <div className="listing-type">Co-Founder, Software Developer Lead</div>
          <div className="listing-description">
            <p>
              ZALT aims to leverage technology to transform the supply chain industry. ZALT is building an innovative digital infrastructure and connecting it with drones to analyze and optimize the movement and delivery of packages.
            </p>
          </div>
          <div className="listing-description">
            <p>
              I was responsible of developing a routing software which includes a Web Portal and a Mobile App which helps Routing the fleet of riders and optimize their Routes. This software was later bought by Bylane Logistic Pvt Ltd.
            </p>
          </div>
        </div>

        <div className="position">
          <div className="listing-title">SRM TEAM ODYSSEY, Chennai, India</div>
          <div className="dates">
            <span className="start-month">December </span>
            <span className="start-year">2017 </span>
            <span className="date-separator">- </span>
            <span className="end-month">June </span>
            <span className="end-year">2020</span>
          </div>
          <div className="listing-type">Team Leader | Lead Embedded Systems | Distributed Systems | Computer Vision | Control Systems Engineer</div>
          <div className="listing-description">
            <p>
              Developed an Amphibious Reconnaissance Vehicle capable of Aerial, Underwater and sea level operations for the Defence Research and Development Organisation (DRDO). Project funded by DRDO and SRM Institute of Science and Technology. 2nd position in DRDO-DRUSE regionals 2018. 5th position in DRDO-DRUSE nationals 2018. Overall cash prize of over 1.5 Lakh Indian Rupees.
            </p>
          </div>
          <div className="listing-description">
            <p>
              Developed systems for an Unmanned Ground Vehicle (UGV) which is capable of autonomous navigation for Intelligent Ground Vehicle Competition 2019 (IGVC) in Oakland, USA
            </p>
          </div>
        </div>


        <div className="position">
          <div className="listing-title">SRM Unmanned Aerial Vehicle (SRM UAV)</div>
          <div className="listing-title">Chennai, India</div>
          <div className="dates">
            <span className="start-month">August </span>
            <span className="start-year">2016 </span>
            <span className="date-separator">- </span>
            <span className="end-month">June </span>
            <span className="end-year">2020</span>
          </div>
          <div className="listing-type">Control Systems Engineer | Embedded Systems Engineer | Team Manager</div>
          <div className="listing-description"><p>Best Technical Design in AUVSI SUAS 2019. Received cash prize 1450 USD. Competed in the 2018 and 2017 editions as well. The competition is held in Patuxent River Naval Airbase in Maryland, USA.</p></div>
          <div className="listing-description"><p>Problem statement requires the team to develop a UAV for a 20 mile mission capable of autonomously taking off and completing a way-point mission followed by obstacle avoidance and an ODLC task which requires image processing, followed by an autonomous detection of a lost hiker, and dropping a payload UGV (Unmanned Ground Vehicle) which is supposed to drive to the lost hiker and deliver relief material. At the end of the mission, the UAV should land back at the designated runway autonomously.</p></div>
        </div>
        <div className="position">
          <div className="listing-title">WESEE : Weapons And Electronics Systems Engineering Establishment, Ministry of Defence: Indian Navy, New Delhi, India</div>
          <div className="listing-type">Intern</div>
          <div className="dates">
            <span className="start-month">December </span>
            <span className="start-year">2017 </span>
            <span className="date-separator">- </span>
            <span className="end-month">January </span>
            <span className="end-year">2018</span>
          </div>
          <div className="listing-description">
            <p>
              Worked on efficient data structures, like Red-Black Trees for the understanding of the Linux Scheduler.
            </p>
            <p>
              Worked on the Lifecycle of development of a Software.
            </p>
            <p>
              Worked on GUI Development of a War Like Simulation Software on QtCreator(C++)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfessionalExperience;
