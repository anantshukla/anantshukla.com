import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResearchPublications() {
  return (
    <div className="section positions listing">
      <h2 className="section-header">Research Publications</h2>
      <div className="content">
        <div className="position first">
          <div className="listing-title">Academic Credential Verification Technique Using Blockchain</div>
          <div className="dates">
            <span className="start-month">May 2020</span>
          </div>

          <div className="listing-type">as part of my B.Tech Major Project at SRM IST</div>

          <div className="listing-description"><p>
            Built a Decentralized application which securely saves student grades and credentials who have graduated from the university into the Blockchain which is retrievable by verification authorities.
            <br />
            Any forgery / modifications to the grades or credentials submitted by the student are easily detected as the original credentials are stored in the Blockchain which are immutable records.
            <br />
            <a href="https://anantshukla.com/files/Academic Credential Verification Technique Using Blockchain.pdf">Link</a>
          </p></div>
        </div>


        <div className="position">
          <div className="listing-title">Design and Architecture of an Amphibious Reconnaissance Vehicle capable of Aerial and Underwater Operations</div>

          <div className="dates">
            <span className="start-month">February 2019</span>
          </div>

          <div className="listing-type">Silver Medal, SRM Research Day 2019</div>

          <div className="listing-description"><p>
            Built an Amphibious Reconnaissance Drone capable Aerial, Underwater surveillance. The vehicle was sucessfully made for a project for the DRDO (Defence Research Development Organisation), Ministry of Defence, Govt. of India with a grant / cash prize of Rupees 5,00,000 from SRM IST and DRDO.
            <br />
            Two iterations for the robot were Designed, more details in the paper: <a href="https://anantshukla.com/files/Design and Architecture of an Amphibious Reconnaissance Vehicle capable of Aerial and Underwater Operations.pdf">Link</a>
          </p></div>
        </div>
        <div className="position">
          <div className="listing-title">Swarm Optimization of Multiple UAV’s for Resource Allocation in Humanitarian Aid and Disaster Relief Operations</div>
          <div className="dates">
            <span className="start-month">February 2019</span>
          </div>

          <div className="listing-type">Silver Medal, SRM Research Day 2019</div>

          <div className="listing-description"><p>
            Developed an end-to-end solution for resource allocation for a Swarm of UAV's deployed in HADR (Humanitarian  Aid and Disaster Relief Operations) along with a modified hybrid VTOL airframe which is used for Delivery of Relief Packages.
            <br />This was developed for Indian Air Force Swarm Competition (Mehar Baba prize competition). We cleared the first two stages, but dropped out due to unavailibility of funds.
            <br />
            Paper: <a href="https://anantshukla.com/files/Swarm Optimization of Multiple UAV’s for Resource Allocation in Humanitarian Aid and Disaster Relief Operations.pdf">Link</a>.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResearchPublications;
