import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    { name: 'Portfolio Website', description: 'A personal portfolio built using React.', link: 'https://github.com/yourname/portfolio' },
    { name: 'To-Do App', description: 'A simple to-do app with add/delete functionality.', link: 'https://github.com/yourname/todo-app' }
  ];

  return (
    <section id="projects" className="card-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((proj, index) => (
          <div key={index} className="card">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
