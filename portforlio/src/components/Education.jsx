import './CardSection.css';

function Education() {
  return (
    <section id="education" className="card-section">
      <h2>Education</h2>
      <div className="card-container">
        <div className="card">
          <h3>BSc in Computer Science</h3>
          <p>University of Westminster</p>
          <p>2021 – 2025 (Expected)</p>
        </div>
        <div className="card">
          <h3>High School</h3>
          <p>Your School Name</p>
          <p>Completed A/Ls in Science Stream</p>
        </div>
      </div>
    </section>
  );
}


export default Education