import React, { useEffect } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    n: '01', name: 'Smart Sprout', sub: 'AI-integrated mobile app for farmers',
    desc: 'A mobile application supporting farmers with a chatbot, plant disease detection through image processing, and an IoT soil monitor. Includes real-time community chat.',
    tech: ['Flutter', 'Firebase', 'Express JS', 'Gemini API'],
    href: 'https://github.com/nihilhesara',
  },
  {
    n: '02', name: 'Breast Cancer ML', sub: 'Classification on patient data',
    desc: 'Multiple ML models applied to real patient data — Logistic Regression, KNN, Naive Bayes, and Ensemble. Focus on preprocessing, evaluation, and hyperparameter tuning.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    href: 'https://github.com/nihilhesara',
  },
  {
    n: '03', name: 'Password Manager', sub: 'Python GUI with search',
    desc: 'Generates strong, random passwords and securely saves them. Includes a search feature to retrieve saved credentials quickly.',
    tech: ['Python', 'Tkinter'],
    href: 'https://github.com/nihilhesara/Password-Generator.git',
  },
  {
    n: '04', name: 'Book Store API', sub: 'Java REST backend',
    desc: 'A bookstore backend built with Java and JAX-RS. Supports full CRUD operations and demonstrates REST principles.',
    tech: ['Java', 'REST', 'JAX-RS'],
    href: 'https://github.com/nihilhesara',
  },
  {
    n: '05', name: 'Snake', sub: 'Classic game, scoreboard included',
    desc: 'A GUI Snake game with scoreboard. Snake grows on eating; game ends on wall or self collision. High score persisted to disk.',
    tech: ['Python', 'Tkinter'],
    href: 'https://github.com/nihilhesara',
  },
];

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.nhds-proj');
    const onMove = e => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    cards.forEach(c => c.addEventListener('mousemove', onMove));
    return () => cards.forEach(c => c.removeEventListener('mousemove', onMove));
  }, []);

  return (
    <section id="projects" className="nhds-section">
      <header className="nhds-section-head nhds-reveal">
        <span className="nhds-section-num">03 — Work</span>
        <h2 className="nhds-section-title">Selected <em>projects.</em></h2>
        <span className="nhds-section-rule"></span>
      </header>
      <div className="nhds-projects-grid nhds-reveal-stagger">
        {PROJECTS.map(p => (
          <a key={p.n} href={p.href} target="_blank" rel="noreferrer" className="nhds-proj">
            <div className="nhds-proj-num">PROJECT · {p.n}</div>
            <h3>
              {p.name}
              <span className="sub">{p.sub}</span>
            </h3>
            <p>{p.desc}</p>
            <div className="nhds-proj-tech">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <span className="nhds-proj-link">
              View on GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M10 7h7v7" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
