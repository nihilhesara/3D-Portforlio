import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <section id="contact" className="nhds-contact">
        <div className="nhds-reveal">
          <div className="nhds-contact-eyebrow">// Let&apos;s build something</div>
          <h2>Got an idea?<br />Let&apos;s <em>make it real.</em></h2>
          <a className="nhds-contact-mail" href="mailto:nihilhesa@gmail.com">
            nihilhesa@gmail.com
          </a>
          <div className="nhds-socials">
            <a className="nhds-social" href="https://github.com/nihilhesara" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.91c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 015.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.12 3.04.73.8 1.17 1.82 1.17 3.07 0 4.41-2.7 5.38-5.26 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              GitHub
            </a>
            <a className="nhds-social" href="https://www.linkedin.com/in/nihil-hesara-01746524b/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 013.38-1.86c3.62 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.07 2.07 0 112.07-2.07 2.07 2.07 0 01-2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0z" />
              </svg>
              LinkedIn
            </a>
            <a className="nhds-social" href="mailto:nihilhesa@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>
      <footer className="nhds-foot">
        <div>© 2026 Nihil Hesara</div>
        <div>Designed &amp; built with care</div>
      </footer>
    </>
  );
}

export default Contact;
