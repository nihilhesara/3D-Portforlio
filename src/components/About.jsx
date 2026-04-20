import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="nhds-section">
      <header className="nhds-section-head nhds-reveal">
        <span className="nhds-section-num">01 — About</span>
        <h2 className="nhds-section-title">A student <em>always learning.</em></h2>
        <span className="nhds-section-rule"></span>
      </header>
      <div className="nhds-about-grid">
        <div className="nhds-reveal">
          <p className="nhds-about-lede">
            I&apos;m a final year Computer Science undergraduate at the
            University of Westminster passionate about <em>machine learning</em>,
            mobile development, and building full stack applications with intent.
          </p>
          <p className="nhds-about-body">
            Skilled across Python, Java, JavaScript, HTML, CSS, MySQL, Spring
            Boot, and GitHub. I enjoy exploring intelligent systems while
            constantly seeking opportunities to learn and innovate.
          </p>
        </div>
        <div className="nhds-about-stats nhds-reveal-stagger">
          <div className="nhds-stat">
            <div className="num">5+</div>
            <div className="lbl">Projects Shipped</div>
          </div>
          <div className="nhds-stat">
            <div className="num">5</div>
            <div className="lbl">Certifications</div>
          </div>
          <div className="nhds-stat">
            <div className="num">2yr</div>
            <div className="lbl">Tutoring A/L</div>
          </div>
          <div className="nhds-stat">
            <div className="num">10+</div>
            <div className="lbl">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
