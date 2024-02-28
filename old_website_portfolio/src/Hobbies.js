import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hobbies() {
  return (
    <div className="section hobbies">
      <h2 className="section-header">Hobbies</h2>
      <div className="content">
        <ul className="hobbies-list">
          <li className="hobby">Drone Piloting</li>
          <li className="hobby">Sailing</li>
          <li className="hobby">Swimming</li>
          <li className="hobby">Squash</li>
          <li className="hobby">Scuba Diving</li>
          <li className="hobby">Biking</li>
        </ul>
      </div>
    </div>
  )
}
export default Hobbies;
