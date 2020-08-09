import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import FrameworksAndTools from './FrameworksAndTools';
import ResearchPublications from './ResearchPublications';
import ProfessionalExperience from './ProfessionalExperience';
import Honors from './Honors';
import Projects from './Projects';



function App() {
  return (
    <div className="resume">

      <Header />
      <div style={{paddingTop: "10vh"}} />
      <Education />
      <Skills />
      <Languages />
      <FrameworksAndTools />
      <ResearchPublications />
      <ProfessionalExperience />
      <Projects />
      <Honors />

      <div className="section hobbies">
        <h2 className="section-header">Hobbies</h2>
        <div className="content">
          <ul className="hobbies-list">
            <li className="hobby">Rock climbing</li>
            <li className="hobby">Entrepreneurship</li>
            <li className="hobby">Squash</li>
            <li className="hobby">Diving</li>
            <li className="hobby">Open-source</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
