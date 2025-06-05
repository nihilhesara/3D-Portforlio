import './CardSection.css';

function Certifications() {
  return (
    <section id="certifications" className="card-section">
      <h2>Certifications</h2>
      <div className="card-container">
        <div className="card">
          <h3>Generative AI Fundamentals</h3>
          <p>Microsoft + LinkedIn Learning</p>
        </div>
        <div className="card">
          <h3>Postman Student Expert</h3>
          <p>Postman</p>
        </div>
        <div className="card">
          <h3>Responsive Web Design</h3>
          <p>freeCodeCamp</p>
        </div>
      </div>
    </section>
  );
}


export default Certifications