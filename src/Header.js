import React from 'react';

function Header() {
  return(
    <div>
      <h1 className="name">
        <span className="first-name">Anant </span>
        <span className="last-name">Shukla</span>
        <span className="headline">Software Engineer</span>
      </h1>

      <div className="section contact">
        <h2 className="section-header">Contact</h2>
        <div className="content">
        {
          /*
            <div className="main-address">
              <span className="label">Address</span>
              <span className="content">250 Elm Street, Apt 3</span>
            </div>
          */
        }

          <div className="member-url-resource url-portfolio">
            <span className="label">LinkedIn</span>
            <span className="content"><a href="https://www.linkedin.com/in/theanantshukla/" rel="noopener noreferrer" target="_blank">theanantshukla</a></span>
          </div>

          <div className="member-url-resource url-portfolio">
            <span className="label">GitHub</span>
            <span className="content"><a href="https://github.com/anantshukla" rel="noopener noreferrer" target="_blank">anantshukla</a></span>
          </div>
          {
          	/*
          <div className="phone-number phone-mobile">
            <span className="label">Mobile</span>
            <span className="content">+91 9958330254</span>
          </div>
          */
      }

          <div className="email-address">
            <span className="label">Email</span>
            <span className="content"><a href="mailto:me@anantshukla.com">me@anantshukla.com</a></span>
          </div>


          <div className="member-url-resource url-portfolio">
            <span className="label">Portfolio</span>
            <span className="content"><a href="https://anantshukla.com" rel="noopener noreferrer" target="_blank">anantshukla.com</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;
