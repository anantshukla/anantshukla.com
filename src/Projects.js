import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  return (
    <div className="section honors listing">
      <h2 className="section-header">Projects</h2>
      <div className="content">

        <div className="honor">
          <div className="listing-title">End to End Encrypted Chat Application</div>
          <div className="dates">
            <span className="end-month">Present </span>
            <span className="end-year"></span>
          </div>
          <div className="listing-description">
            <p>
              Side project. Working on an end to end web based encrypted chat application that uses ECC and ECC and can be used to chat with people without sharing personal identitied with people.
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Routing Software</div>
          <div className="dates">
            <span className="end-month">April 2019 - </span>
            <span className="end-year">July 2020</span>
          </div>
          <div className="listing-description">
            <p>
              As part of my stint with ZALT Technologies LLP., I developed a routing software which includes a Web Portal and a Mobile App which helps Routing the fleet of riders and optimize their Routes. This software was later bought by Bylane Logistic Pvt Ltd.
            </p>
            <p>
              The Front end of this web application is made using React JS which is used by the delivery station supervisors.
            </p>
            <p>
              The Mobile App is made using React Native and is used by the Delivery Riders, their live location can be tracked by the supervisor.
            </p>
            <p>
              The back-end of this application is written in Flask.
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Academic Credential Verification Using Blockchain</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2020</span>
          </div>
          <div className="listing-type">Part of my Major Project in Engineering at SRM Institute of Science and Technology</div>
          <div className="listing-description">
            <p>
              Developed a Decentralized application on Ethereum Blockchain which stores the student transcript of all the students who have graduated from SRM IST. This application is connected to a Front end which is used by the system administrator and companies/colleges who want to verify the credentials of student.
            </p>
          </div>
        </div>
        {

        <div className="honor">
          <div className="listing-title">AUVSI SUAS 2017, 2018, 2019: Naval Air Station Webster Field, Maryland, USA</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2017, 2018, 2019</span>
          </div>
          <div className="listing-description">
            <p>
              Took part in the prestigious AUVSI SUAS competition held in Naval Air Station Webster Field, Maryland, USA.
            </p>
            <p>
              The problem statement of the competition has various tasks such as Autonomous Takeoff, Autonomous Navigation, Deployment of Rescue UGV from the UAV at the designated GPS Coordinate, Obstacle Avoidance and Image Processing.
            </p>
          </div>
          <div className="listing-description">
            <p>
              In the three years I took part in the competition along with my team SRM UAV; I have been the Safety Pilot, Team Captain, Ground Control Station Operator and Lead Embedded Systems
            </p>
            <p>
              In the SUAS 2019, I was handling the Ground Control Station. Here, I had to work on the path planner, Communication Links, Integration of all the sensors (like LiDAR, Servos, GPS, Microcontroller, etc) with the UAV, and make sure all were working as per requirements and a lot more.
            <br/>
              Moreover, being the team captain I had to overlook the flight pit and made sure all tasks were completed in accordance to the requirements as given in the problem statement.
            </p>
            <p>
              We won the Best in Technical Design award and a cash prize of $1500.
              <br />
              Comprehensive Design Report: <a href="https://anantshukla.com/files/SUAS 2019 CDR SRM.pdf">SUAS 2019-CDR</a>
            </p>
          </div>
        </div>

        }
        <div className="honor">
          <div className="listing-title">Lane Detection and Drive of a Unmanned Ground Vehicle</div>
          <div className="dates">
            <span className="end-month">May </span>
            <span className="end-year">2019</span>
          </div>
          <div className="listing-type">For Intelligent Ground Vehicle Competition (IGVC) 2019, Oakland University, Michigan</div>
          <div className="listing-description">
            <p>
              Developed the control systems, path planner and distributed systems of the Autonomous UGV. Completed Lane Detection using image processing on a stereo vision rig and a steering control based on a PID Controller. An A Star based path planner for the UGV was designed too. The ground station and communication was done using RFD900x and Ubiquiti and the distributed systems was developed according to the requirements of the competition.
            </p>
            Comprehensive Design Report: <a href="https://anantshukla.com/files/IGVC 2019 SRM.pdf">IGVC 2019-CDR</a>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Sensor Glove</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2019</span>
          </div>
          <div className="listing-description">
            <p>
              Made as part of my Multidisciplinary Design Project in my 3rd year of Engineering (Recieved grade 99/100). Made a Sensor Glove using flex sensors that reads American Sign Language to aid people with hearing or speech impairments. The output was displayed on the serial monitor of the connected computer.
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Python based Sudoku Solver GUI (React JS and PyGame)</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2020</span>
          </div>
          <div className="listing-description">
            <p>
              Was practicing UI development on React JS when I developed this. Later on, I also made a Sudoku Solver on PyGame. It uses Backtracking to solve the Sudoku grid.
            </p>
            <p>
              ReactJS GitHub repo: <a href="https://github.com/anantshukla/Sudoku-App/">Link</a> | ReactJS Game: <a href="https://sudoku.anantshukla.tech/">Link</a>
              <br />PyGame GitHub repo: <a href="https://github.com/anantshukla/Sudoku-PyGame/">Link</a>
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Attendance and Inventory Management System</div>
          <div className="dates">
            <span className="end-month">July </span>
            <span className="end-year">2017</span>
          </div>
          <div className="listing-description">
            <p>
              Developed an Employee Attendance System, and an Inventory Management System for Internship in my 2nd year of Engineering.
            </p>
            <p>
              Both the systems were built using Arduino's, that were interfaced with the MFRC522 RFID Sensor and LCD Displays. That was indeed connected to a computer system and interfaced using Python. The attendance was updated on a MySQL database.
            </p>
            <p>
              GitHub repo: <a href="https://github.com/anantshukla/Employee-Attendance-System-Python-and-Arduino-RFID-Sensor/">Link</a>
            </p>
          </div>
        </div>

        <div className="honor">
          <div className="listing-title">Autonomous Car Parking</div>
          <div className="dates">
            <span className="end-month">June </span>
            <span className="end-year">2018</span>
          </div>
          <div className="listing-description">
            <p>
              Made an autonomous parallel car parking with the help of a microcontroller coupled with various other sensors in my 1st year of Engineering.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Projects;
