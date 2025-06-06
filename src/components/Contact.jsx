import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:nihilhesa@gmail.com" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
            alt="Email Icon" 
            className="contact-icon"
          />
          <span>nihilhesa@gmail.com</span>
        </a>

        <a href="https://www.linkedin.com/in/nihil-rupasinghe-01746524b/" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn Icon"
            className="contact-icon"
          />
          <span>linkedin.com/in//in/nihil-rupasinghe-01746524b/</span>
        </a>

        <a href="https://github.com/nihilhesara" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub Icon"
            className="contact-icon"
          />
          <span>github.com/nihilhesara</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
