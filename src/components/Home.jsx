import React from 'react';
import './Home.css';

const MARQUEE_ITEMS = [
  'Flutter', 'React', 'Spring Boot', 'Firebase',
  'Python', 'Java', 'MySQL', 'Machine Learning', 'REST APIs', 'Gemini API',
];

function Home() {
  return (
    <>
      <section id="top" className="nhds-hero">
        <div className="nhds-hero-meta">NIHIL HESARA · 2025 · PORTFOLIO</div>
        <div>
          <div className="nhds-hero-eyebrow">Available for work · Colombo, LK</div>
          <h1>
            <span className="line"><span>Building software</span></span>
            <span className="line"><span>with <em>craft</em> &amp; care.</span></span>
          </h1>
          <p className="nhds-hero-role">
            <span className="caret"></span>
            Full-stack &amp; mobile developer
          </p>
          <div className="nhds-hero-cta">
            <a className="nhds-btn nhds-btn-primary" href="#work">
              See selected work <span className="arrow">→</span>
            </a>
            <a className="nhds-btn nhds-btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="nhds-hero-portrait">
          <div className="nhds-portrait-wrap">
            <img src="/profile.jpeg" alt="Nihil Hesara" />
            <div className="nhds-portrait-badge">
              <span className="dot"></span>
              <span>Nihil Hesara · CS &apos;26</span>
            </div>
          </div>
        </div>
      </section>

      <div className="nhds-marquee">
        <div className="nhds-marquee-track">
          {[...Array(2)].map((_, k) => (
            <React.Fragment key={k}>
              {MARQUEE_ITEMS.map(item => (
                <div key={item + k} className="nhds-marquee-item">
                  {item} <span>◆</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
