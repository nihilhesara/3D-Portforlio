import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="nhds-aurora" />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
