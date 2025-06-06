import './Certification.css';

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-container">
        <div className="card">
          <h3>Generative AI Fundamentals</h3>
          <p>Microsoft + LinkedIn Learning</p>
          <p><em>Completed: 2024</em></p>
        </div>

        <div className="card">
          <h3>Postman Student Expert</h3>
          <p>Postman</p>
          <p><em>Completed: Nov 2024</em></p>
        </div>

        <div className="card">
          <h3>Python for Beginners</h3>
          <p>University of Moratuwa</p>
          <p><em>Completed: Jan 2024</em></p>
        </div>

        <div className="card">
          <h3>Web Design for Beginners</h3>
          <p>University of Moratuwa</p>
          <p><em>Completed: Jan 2024</em></p>
        </div>

        <div className="card">
          <h3>Web Development</h3>
          <p>Informatics Institute of Technology</p>
          <p><em>Completed: Jan 2024</em></p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
