import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h2>Hi, I am a <span className="highlight">Full Stack Developer</span></h2>
          <p>I build modern web apps using React and Spring Boot.</p>
        </div>
        <div className="home-image">
          <img src="/profile.jpeg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
