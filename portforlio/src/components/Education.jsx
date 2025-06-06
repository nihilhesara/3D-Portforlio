import './CardSection.css';

function Education() {
  return (
    <section id="education" className="card-section">
      <h2>Education</h2>
      <div className="card-container">
        <div className="card">
          <h3>BSc (Hons) in Computer Science</h3>
          <p>University of Westminster</p>
          <p>2023 – Present</p>
          <p>&bull; Gaining in-depth knowledge in full-stack web and mobile application development.</p>
          <p>&bull; Developing strong foundations in Object-Oriented Programming (OOP).</p>
          <p>&bull; Exploring fundamental concepts of Machine Learning and Data Science.</p>
        </div>

        <div className="card">
          <h3>Foundation Certificate in Higher Education</h3>
          <p>Informatics Institute of Technology (IIT)</p>
          <p>2022 – 2023</p>
          <p>&bull; Successfully completed with a Distinction.</p>
          <p>&bull; Built foundational skills in computing, mathematics, and communication.</p>
        </div>

        <div className="card">
          <h3>Primary and Secondary Education</h3>
          <p>Thurstan College</p>
          <p>2009 – 2022</p>
          <p>&bull; Completed GCE Advanced Level in the Physical Science stream.</p>
          <p>&bull; Participated in academic and extracurricular activities throughout school years.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
