import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume">
      <header className="header">
        <h1 className="header-title">Anant Shukla</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="#contact">Contact</a></li>
            <li className="header-nav-item"><a href="#skills">Skills</a></li>
            <li className="header-nav-item"><a href="#experience">Experience</a></li>
            <li className="header-nav-item"><a href="#education">Education</a></li>
            <li className="header-nav-item"><a href="#projects">Projects</a></li>
            <li className="header-nav-item"><a href="#certifications">Certifications</a></li>
            <li className="header-nav-item"><a href="#achievements">Achievements</a></li>
          </ul>
        </nav>
      </header>
      <section id="contact" className="section contact">
        <h2>Contact Information</h2>
        <div className="content">
          <div className="contact-item">
            <span className="label">Phone:</span>
            <span className="value">(438) 979-3841</span>
          </div>
          <div className="contact-item">
            <span className="label">Location:</span>
            <span className="value">Toronto, ON</span>
          </div>
          <div className="contact-item">
            <span className="label">Email:</span>
            <span className="value"><a href="mailto:me@anantshukla.com">me@anantshukla.com</a></span>
          </div>
          <div className="contact-item">
            <span className="label">LinkedIn:</span>
            <span className="value"><a href="https://linkedin.com/in/theanantshukla">theanantshukla</a></span>
          </div>
          <div className="contact-item">
            <span className="label">GitHub:</span>
            <span className="value"><a href="https://github.com/anantshukla">anantshukla</a></span>
          </div>
          <div className="contact-item">
            <span className="label">Website:</span>
            <span className="value"><a href="https://anantshukla.com">anantshukla.com</a></span>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="content">
          <div className="skills">
            <div className="skill-category">
              <h3>Languages</h3>
              <p>
                Python, Java, JavaScript, TypeScript, Go, C#, Erlang, Bash/Shell, SQL, PHP, Groovy, Erlang, HTML/CSS
              </p>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <p>
                Node.js, Express, React, Angular, .NET Core/Framework, Spring Boot, Flask, React Native
              </p>
            </div>
            <div className="skill-category">
              <h3>Tools and Cloud Platforms</h3>
              <p>
                Azure, AWS, GCP, Kubernetes, Docker, Databricks, Jenkins, Terraform, TFS/Azure DevOps, Git, JIRA, Figma
              </p>
            </div>
            <div className="skill-category">
              <h3>Databases and Other Tools</h3>
              <p>
                SQL Server, Postgres, MySQL, Cassandra, MongoDB, Neo4j, Apache Spark, Dask, Hadoop, REST, gRPC
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        <h2>Technical Experience</h2>
        <div className="content">
          <div className="experience-item">
            <h3>Graduate Teaching Assistant</h3>
            <p>Concordia University | Montréal, QC</p>
            <p className="date">Sep 2023 — Dec 2023</p>
            <ul>
              <li>Assisted with creating lesson plan and instructions for the undergraduate course COMP 348 Principles of Programming Languages.</li>
              <li>Mentored 80+ students on the use of C, Python, and Clojure programming languages through weekly tutorials and assignments.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Systems Engineer</h3>
            <p>Tata Consultancy Services | Bangalore, India</p>
            <p className="date">Aug 2020 — Nov 2022</p>
            <ul>
              <li>Engineered Industrial IoT products for the life science industry, serving as Developer, Site Reliability Engineer and Team Lead.</li>
              <li>Designed REST APIs, PySpark jobs, and services for tasks like IoT telemetry data ingestion, anomaly alarm-alerts, OTA for IoT edge devices, and health check/monitoring services across on-premises and cloud environments using Python, NodeJS, GoLang, and .NET.</li>
              <li>Revamped existing IoT solutions to improve scalability and availability through microservice design using Kafka, Azure IoT PaaS solutions, Kubernetes, and enhanced data management practices like batch processing and cold storage migration.</li>
              <li>Spearheaded a DevOps transformation by implementing CI/CD pipelines through Jenkins and orchestrating deployments on Kubernetes while automating and streamlining processes like DNS and certificate management within Kubernetes.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Co-founder - CTO | Software Solutions Lead</h3>
            <p>ZALT Technologies LLP | Chennai, India</p>
            <p className="date">Jun 2019 — Aug 2020</p>
            <ul>
              <li>ZALT aimed to leverage technology to build an innovative digital infrastructure and integrate it with drones to develop an end-to-end ecosystem for optimizing the e-commerce supply chain.</li>
              <li>Developed a SaaS supply-chain routing solution to automate and optimize delivery manifests and route planning for a fleet of delivery riders in real time. Leveraged IoT, external APIs, and data analytics. The product was acquired by our investor Bylane Logistic.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Team Leader | Software Engineer</h3>
            <p>SRM UAV | Chennai, India</p>
            <p className="date">Jul 2016 — Jun 2020</p>
            <ul>
              <li>Headed an undergraduate student organization specializing in R&D of Unmanned Aerial Systems.</li>
              <li>Developed solutions, managed the team resources, and coordinated with the university and sponsors.</li>
              <li>Designed solutions like the antenna tracker system and ground control system, responsible for transmitting and receiving telemetry and control data between the UAV and ground control station, where this data would be displayed on the path planner interface.</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="content">
          <div className="education-item">
            <h3>Master of Applied Computer Science</h3>
            <p>Concordia University</p>
            <p className="date">Sep 2022 - Jan 2024</p>
            <p className="accomplishments">Accomplishments: Dean's List for Academic Excellence, Golden Key Honour Society. GPA: 3.93</p>
            <p className="courses">Relevant Coursework: Distributed System Design, Advanced Programming Practices, Programming and Problem Solving, Algorithm Design, Computer Networks, Big Data, Applied AI, AI for Networked Multimedia Systems, Comparative Study of Programming Languages.</p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Technology in Information Technology</h3>
            <p>SRM UNIVERSITY</p>
            <p className="date">Jun 2016 - Jul 2020</p>
          </div>
        </div>
      </section>
      <section id="projects" className="section">
        <h2>Academic Projects</h2>
        <div className="content">
          <div className="project">
            <h3>Context-Aware Bitrate Ladder Construction using Deep Reinforcement Learning for Adaptive Video Streaming by OTT Providers</h3>
            <p>
              <span className="label">Paper:</span> <a href="https://anantshukla.com/files/Context_Aware_Bitrate_Ladder.pdf">Link</a>
            </p>
            <p>Solution that considers content and context to create dynamic bitrate ladders. Developed using TensorFlow and trained on a GPU cluster.</p>
          </div>
          <div className="project">
            <h3>Early Identification and Classification of Plant Disease with a Comparative Analysis of Various CNN Models</h3>
            <p>
              <span className="label">Paper:</span> <a href="https://anantshukla.com/files/Classification_Plant_Diseases_CNN.pdf">Link</a>
            </p>
            <p>Application that detects and classifies plant diseases using CNN. Developed using PyTorch and achieved an accuracy of 98%.</p>
          </div>
          <div className="project">
            <h3>Distributed Systems for a Data Ingestion, Curation, and Visualization Pipeline</h3>
            <p>
              <span className="label">Report:</span> <a href="https://anantshukla.com/files/Distributed_Systems_Data_Curation_Pipeline.pdf">Link</a>
            </p>
            <p>Solution demonstrating distributed data processing using Apache Cassandra, Apache Spark deployed on self-hosted Kubernetes on GCP.</p>
          </div>
          <div className="project">
            <h3>Academic Credential Verification Using Blockchain</h3>
            <p>
              <span className="label">Paper:</span> <a href="https://anantshukla.com/files/Academic_Credential_Verification_Using_Blockchain.pdf">Link</a>
            </p>
            <p>Decentralized application developed using the Ethereum blockchain and React that stores immutable, verifiable student transcripts.</p>
          </div>
        </div>
      </section>
      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <div className="content">
          <div className="certification">
            <span className="label">Azure DevOps Engineer Expert: </span>
            <span className="content">
              <a className="certificate-link" href="https://anantshukla.com/certificates/DevOps_Engineer_Expert.pdf">View Certificate</a>
            </span>
          </div>
          <div className="certification">
            <span className="label">Azure IoT Developer Specialty: </span>
            <span className="content">
              <a className="certificate-link" href="https://anantshukla.com/certificates/Azure_IoT_Developer_Specialty.pdf">View Certificate</a>
            </span>
          </div>
          <div className="certification">
            <span className="label">Azure Developer Associate: </span>
            <span className="content">
              <a className="certificate-link" href="https://anantshukla.com/certificates/Azure_Developer_Associate.pdf">View Certificate</a>
            </span>
          </div>
          <div className="certification">
            <span className="label">Azure Fundamentals: </span>
            <span className="content">
              <a className="certificate-link" href="https://anantshukla.com/certificates/Azure_Fundamentals.pdf">View Certificate</a>
            </span>
          </div>
          <div className="certification">
            <span className="label">Architecting with Google Kubernetes Engine: </span>
            <span className="content">
              <a className="certificate-link" href="https://anantshukla.com/certificates/Architecting_GKE.pdf">View Certificate</a>
            </span>
          </div>
          <div className="certification">
            <span className="label">Google Cloud Platform: Core Infrastructure: </span>
            <span className="content">
              <a className="certificate-link" href="https://anantshukla.com/certificates/GCP_Core_Infrastructure.pdf">View Certificate</a>
            </span>
          </div>
        </div>
      </section>
      <section id="achievements" className="section">
        <h2>Achievements</h2>
        <div className="content">
          <ul className="achievement-list">
            <li>
              <span className="achievement-headings">Silver Medal:</span> Swarm Optimization of Multiple UAVs for Resource Allocation in HADR Operations. <a href="https://anantshukla.com/files/Swarm_Optimization_UAV_HADR.pdf">Paper</a>
            </li>
            <li>
              <span className="achievement-headings">Silver Medal:</span> Design and Architecture of an Amphibious Reconnaissance Vehicle for Aerial and Underwater Operations. The project was funded by DRDO, SRMIST, and won the Most Innovative Solution Award in DRDO Robotics and Unmanned Systems 2018.  <a href="https://anantshukla.com/files/Amphibious_Reconnaissance_Vehicle_DRDO.pdf">Paper</a>
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
      </section>
      <footer className="footer">
        <p className="footer-text">Copyright © 2024 Anant Shukla</p>
      </footer>
    </div>
  );
}

export default App;
