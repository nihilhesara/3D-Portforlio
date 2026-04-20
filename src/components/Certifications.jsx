import React from 'react';
import './Certification.css';

const CERTS = [
  { h: 'The Complete Odoo 16/17 Technical Course: From Zero to Hero', org: 'Udemy', date: 'Apr 2026' },
  { h: 'Postman Student Expert', org: 'Postman', date: 'Nov 2024' },
  { h: 'Generative AI Fundamentals', org: 'Microsoft + LinkedIn Learning', date: 'Sep 2024' },
  { h: 'Python for Beginners', org: 'University of Moratuwa', date: 'Jan 2024' },
  { h: 'Web Design for Beginners', org: 'University of Moratuwa', date: 'Jan 2024' },
  { h: 'Web Development', org: 'Informatics Institute of Technology', date: 'Jan 2024' },
];

function Certifications() {
  return (
    <section id="certifications" className="nhds-section">
      <header className="nhds-section-head nhds-reveal">
        <span className="nhds-section-num">04 — Credentials</span>
        <h2 className="nhds-section-title">Certifications <em>earned.</em></h2>
        <span className="nhds-section-rule"></span>
      </header>
      <div className="nhds-certs nhds-reveal-stagger">
        {CERTS.map((c, i) => (
          <div key={i} className="nhds-cert">
            <h3>{c.h}</h3>
            <p className="org">{c.org}</p>
            <p className="date">{c.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
