import './CardSection.css';

function Experience() {
  return (
    <section id="experience" className="card-section">
      <h2>Experience</h2>
      <div className="card-container">
        <div className="card">
          <h3>Full Stack Intern</h3>
          <p className='card-year'>ABC Tech – 2024</p>
          <p>Worked on frontend (React) and backend (Spring Boot) systems.</p>
        </div>
        <div className="card">
          <h3>Freelance Web Developer</h3>
          <p>2023 – Present</p>
          <p>Built portfolio and e-commerce sites for local businesses.</p>
        </div>
      </div>
    </section>
  );
}


export default Experience
