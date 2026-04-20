import React from 'react';
import './Skills.css';

const GROUPS = [
  {
    title: 'Frontend',
    num: '01',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native'],
  },
  {
    title: 'Backend',
    num: '02',
    items: ['Spring Boot', 'Express JS', 'Firebase', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Languages',
    num: '03',
    items: ['Python', 'Java', 'Swift', 'Dart'],
  },
  {
    title: 'Mobile',
    num: '04',
    items: ['Flutter', 'Android', 'iOS', 'App Store Connect'],
  },
  {
    title: 'ERP & Odoo',
    num: '05',
    items: ['Odoo 16', 'Odoo 17', 'Custom Modules', 'OWL Framework', 'QWeb Templates', 'Python (Odoo)'],
  },
  {
    title: 'Tools & Platforms',
    num: '06',
    items: ['Git', 'GitHub', 'Postman', 'n8n', 'Google Colab'],
  },
  {
    title: 'AI & Data',
    num: '07',
    items: ['Machine Learning', 'Scikit-learn', 'Pandas', 'Gemini API', 'WhatsApp Business API'],
  },
];

function Skills() {
  return (
    <section id="skills" className="nhds-section">
      <header className="nhds-section-head nhds-reveal">
        <span className="nhds-section-num">05 — Toolkit</span>
        <h2 className="nhds-section-title">Skills <em>&amp; stack.</em></h2>
        <span className="nhds-section-rule"></span>
      </header>
      <div className="nhds-skills-grid nhds-reveal-stagger">
        {GROUPS.map(g => (
          <div key={g.title} className="nhds-skill-group">
            <div className="nhds-skill-group-head">
              <h3 className="nhds-skill-group-title">{g.title}</h3>
              <span className="nhds-skill-group-num">/ {g.num}</span>
            </div>
            <div className="nhds-skill-chips">
              {g.items.map(name => (
                <span key={name} className="nhds-skill-chip">{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
