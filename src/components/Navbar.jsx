import React, { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = ['About', 'Work', 'Certifications', 'Contact'];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = '' };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="nhds-nav">
        <a href="#top" className="nhds-nav-mark" aria-label="Nihil Hesara home" onClick={close}>
          <img src="/nh-logo.svg" alt="" width="34" height="34" />
          <span className="nhds-nav-wordmark">
            Nihil<span className="nhds-nav-dot">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul>
          {LINKS.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={`nhds-hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div className={`nhds-mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {LINKS.map((l, i) => (
            <li key={l} style={{ '--i': i }}>
              <a href={`#${l.toLowerCase()}`} onClick={close}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="nhds-mobile-menu-foot">nihilhesa@gmail.com</div>
      </div>

      {/* Backdrop */}
      {open && <div className="nhds-mobile-backdrop" onClick={close} />}
    </>
  );
}

export default Navbar;
