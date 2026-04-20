import React from 'react';
import './CardSection.css';

const edu = [
  {
    date: '2023 — Present',
    title: 'BSc (Hons) in Computer Science',
    org: 'University of Westminster',
    bullets: [
      'In-depth full-stack web and mobile application development.',
      'Strong foundations in Object-Oriented Programming.',
      'Fundamental concepts of Machine Learning and Data Science.',
    ],
  },
  {
    date: '2022 — 2023',
    title: 'Foundation Certificate in Higher Education',
    org: 'Informatics Institute of Technology (IIT)',
    bullets: [
      'Completed with a Distinction.',
      'Built foundations in computing, mathematics, and communication.',
    ],
  },
  {
    date: '2009 — 2022',
    title: 'Primary and Secondary Education',
    org: 'Thurstan College',
    bullets: [
      'Completed GCE Advanced Level in the Physical Science stream.',
      'Academic and extracurricular activities throughout.',
    ],
  },
];

const exp = [
  {
    date: 'Jan 2026 — Present',
    title: 'Intern Software Engineer',
    org: 'Nerosoft Solutions · Full-time · Hybrid',
    bullets: [
      'Understanding the Odoo framework and architecture.',
      'Developing custom Odoo applications.',
    ],
  },
  {
    date: 'Jul 2025 — Dec 2025',
    title: 'Intern Software Engineer — Mobile App Development',
    org: 'Overleap · Full-time · On-site',
    bullets: [
      'Meta Developer (WhatsApp Business API) integrations.',
      'n8n automation flows for workflow optimization.',
      'Swift development and release of iOS applications from App Store Connect.',
      'React Native and Flutter application development.',
    ],
  },
  {
    date: 'May 2023 — Sep 2025',
    title: 'Information Technology Tutor',
    org: 'Self-employed · On-site',
    bullets: [
      'Teaching Information Technology to Advanced Level students.',
    ],
  },
];

function TimelineItem({ item }) {
  return (
    <div className="nhds-tl-item">
      <div className="nhds-tl-date">{item.date}</div>
      <h4 className="nhds-tl-title">{item.title}</h4>
      <div className="nhds-tl-org">{item.org}</div>
      <div className="nhds-tl-body">
        {item.bullets.map((b, j) => <p key={j}>— {b}</p>)}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="work" className="nhds-section">
      <header className="nhds-section-head nhds-reveal">
        <span className="nhds-section-num">02 — Journey</span>
        <h2 className="nhds-section-title">Experience <em>&amp; education.</em></h2>
        <span className="nhds-section-rule"></span>
      </header>
      <div className="nhds-dual">
        <div className="nhds-reveal">
          <p className="nhds-tl-col-label">Experience</p>
          <div className="nhds-timeline">
            {exp.map((it, i) => <TimelineItem key={i} item={it} />)}
          </div>
        </div>
        <div className="nhds-reveal">
          <p className="nhds-tl-col-label">Education</p>
          <div className="nhds-timeline">
            {edu.map((it, i) => <TimelineItem key={i} item={it} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
