import React from 'react';

const Contact = () => {
  return (
    <div className="section contact">
      <h2>Contact Information</h2>
      <div className="content">
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span className="value">(438) 979-3841</span>
        </div>
        <div className="contact-item">
          <span className="label">Location:</span>
          <span className="value">Toronto, ON</span>
        </div>
        <div className="contact-item">
          <span className="label">Email:</span>
          <span className="value"><a href="mailto:me@anantshukla.com">me@anantshukla.com</a></span>
        </div>
        <div className="contact-item">
          <span className="label">LinkedIn:</span>
          <span className="value"><a href="https://linkedin.com/in/theanantshukla">theanantshukla</a></span>
        </div>
        <div className="contact-item">
          <span className="label">GitHub:</span>
          <span className="value"><a href="https://github.com/anantshukla">anantshukla</a></span>
        </div>
        <div className="contact-item">
          <span className="label">Website:</span>
          <span className="value"><a href="https://anantshukla.com">anantshukla.com</a></span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
