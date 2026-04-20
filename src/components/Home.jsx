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
        <div className="nhds-hero-meta">NIHIL HESARA · 2026 · PORTFOLIO</div>
        <div>
          <div className="nhds-hero-status-row">
            <div className="nhds-hero-eyebrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z"/></svg>
              Colombo, LK · On-site
            </div>
            <div className="nhds-hero-eyebrow nhds-hero-eyebrow--rust">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              Open to Freelance
            </div>
          </div>
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
