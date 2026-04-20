import React from 'react';
import './Skills.css';

const GROUPS = [
  { title: 'Frontend', num: '01', items: [['HTML', .95], ['CSS', .9], ['JavaScript', .85], ['React', .8]] },
  { title: 'Backend', num: '02', items: [['Spring Boot', .75], ['Firebase', .85], ['MySQL', .8]] },
  { title: 'Languages', num: '03', items: [['Python', .9], ['Java', .85]] },
  { title: 'Mobile & Tools', num: '04', items: [['Flutter', .85], ['Git', .9], ['Postman', .8]] },
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
            {g.items.map(([name, lvl]) => (
              <div key={name} className="nhds-skill-row">
                <span className="name">{name}</span>
                <span className="bar" style={{ '--lvl': lvl }}></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
