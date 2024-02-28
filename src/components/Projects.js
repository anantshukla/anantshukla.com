import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <h2>Academic Projects</h2>
      <div className="content">
        <div className="project">
          <h3>Context-Aware Bitrate Ladder Construction using Deep Reinforcement Learning for Adaptive Video Streaming by OTT Providers</h3>
          <p>
            <span className="label">Paper:</span> <a href="https://anantshukla.com/files/Context_Aware_Bitrate_Ladder.pdf">Link</a>
          </p>
          <p>Solution that considers content & context to create dynamic bitrate ladders. Developed using TensorFlow and trained on a GPU cluster.</p>
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
    </div>
  );
}

export default Projects;
