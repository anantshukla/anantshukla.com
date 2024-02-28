import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="resume">
      <Contact/>
      <Skills/>
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Achievements />
    </div>
  );
}

export default App;
