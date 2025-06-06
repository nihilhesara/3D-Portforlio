import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      name: 'Smart Sprout (AI-integrated Mobile Application)',
      description:
        'Developed a mobile app to support farmers with a chatbot, plant disease detection through image processing, and an IoT device to monitor soil conditions. Includes a real-time community chat feature for farmer collaboration.',
      technologies: ['Flutter', 'Firebase', 'Express JS', 'Gemini API'],
      github: 'https://github.com/your-username/smart-sprout',
    },
    {
      name: 'Password Manager (GUI Password Manager)',
      description:
        'Generates strong, random passwords and securely saves them in a text file. Includes a search feature to retrieve saved credentials quickly.',
      technologies: ['Python', 'Tkinter'],
      github: 'https://github.com/nihilhesara/Password-Generator.git',
    },
    {
      name: 'Snake Game',
      description:
        'A GUI-based Snake game with a scoreboard. The snake grows upon eating, and the game ends if it hits itself or the wall. High score stored in a text file.',
      technologies: ['Python', 'Tkinter'],
      github: 'https://github.com/your-username/snake-game',
    },
    {
      name: 'Book Store (Backend Application with REST API)',
      description:
        'Built a backend for a bookstore using Java and JAX-RS. Supports full CRUD operations and demonstrates strong understanding of REST principles.',
      technologies: ['Java', 'RESTful API', 'JAX-RS'],
      github: 'https://github.com/your-username/bookstore-api',
    },
    {
      name: 'Machine Learning Model for Breast Cancer Patients',
      description:
        'Implemented multiple ML models on real patient data including Logistic Regression, KNN, Naive Bayes, and Ensemble. Focused on preprocessing, evaluation, and hyperparameter tuning.',
      technologies: [
        'Python',
        'Google Colab',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Scikit-learn',
      ],
      github: 'https://github.com/your-username/breast-cancer-ml',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((proj, index) => (
          <div key={index} className="card">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.technologies.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
            {proj.github && (
              <a
                href={proj.github}
                className="github-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="github-logo"
                />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
