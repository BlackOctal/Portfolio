// App.js
import React from 'react';
import Starfield from './components/Starfield';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education.js';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import { Analytics } from '@vercel/analytics/react';

import './App.css';

function App() {
  return (
    <div className="app">
       <Analytics />       
      <Starfield />
      <Hero data={portfolioData} />
      <About data={portfolioData.about} />
      <Education data={portfolioData.education} />
      <Experience data={portfolioData.experience} />
      <Skills />
      <Research data={portfolioData.research} />
      <Projects data={portfolioData.projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
