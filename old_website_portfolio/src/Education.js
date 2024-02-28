import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Education() {
  return (
    <div className="section educations listing">
      <h2 className="section-header">Education</h2>
      <div className="content">
        <div className="education">
          <div className="listing-title">SRM Instutute of Science and Technology</div>
          <div className="dates">
            <span className="start-year">2016 </span>
            <span className="date-separator">- </span>
            <span className="is-current">2020</span>
          </div>
          <div className="listing-stats">81.29%</div>
          <span className="listing-type">Bachelor of Technology (B. Tech), Information Technology</span>
        </div>
        <div className="education">
          <div className="listing-title">Navy Children School</div>
          <div className="dates">
            <span className="start-year">2014 </span>
            <span className="date-separator">- </span>
            <span className="end-year">2016</span>
          </div>
          <div className="listing-stats"></div>
          <span className="listing-type">High School: Physics, Chemistry, Maths, Computer Science</span>
        </div>
      </div>
    </div>
  )
}
export default Education;
