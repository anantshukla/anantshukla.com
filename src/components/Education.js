import React from 'react';

const Education = () => {
  return (
    <div className="section">
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
    </div>
  );
}

export default Education;
