import React from 'react';
import './Navbar.css';

function Navbar() {
  const links = ['About', 'Work', 'Certifications', 'Contact'];
  return (
    <nav className="nhds-nav">
      <a href="#top" className="nhds-nav-mark" aria-label="Nihil Hesara home">
        <img src="/nh-logo.svg" alt="" width="34" height="34" />
        <span className="nhds-nav-wordmark">
          Nihil<span className="nhds-nav-dot">.</span>
        </span>
      </a>
      <ul>
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <a className="nhds-nav-cta" href="#contact">Get in touch →</a>
    </nav>
  );
}

export default Navbar;
