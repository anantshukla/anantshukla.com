import React from 'react';

const Experience = () => {
  return (
    <div className="section">
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
            <li>Engineered Industrial IoT products for the life science industry, serving as Developer, Site Reliability Engineer & Team Lead.</li>
            <li>Designed REST APIs, PySpark jobs, and services for tasks like IoT telemetry data ingestion, anomaly alarm-alerts, OTA for IoT edge devices, and health check/monitoring services across on-premises & cloud environments using Python, NodeJS, GoLang, and .NET.</li>
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
    </div>
  );
}

export default Experience;
