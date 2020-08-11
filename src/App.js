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
import Hobbies from './Hobbies';

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
      <Hobbies />
    </div>
  );
}

export default App;
