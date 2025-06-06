import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <h2>Frontend Development</h2>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <h2>Backend Development</h2>
      <ul className="skills-list">
        <li>Spring Boot</li>
        <li>Firebase</li>
        <li>MySQL</li>
      </ul>

      <h2>Programming Languages</h2>
      <ul className="skills-list">
        <li>Python</li>
        <li>Java</li>
      </ul>

      <h2>Mobile Development</h2>
      <ul className="skills-list">
        <li>Flutter</li>
      </ul>

      <h2>Tools & Platforms</h2>
      <ul className="skills-list">
        <li>Git</li>
        <li>Postman</li>
      </ul>
    </section>
  );
}

export default Skills;
