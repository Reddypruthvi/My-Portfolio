import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 font-sans selection:bg-accent/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Github />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
