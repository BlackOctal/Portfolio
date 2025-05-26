// App.js
import React from 'react';
import Starfield from './components/Starfield';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';
import Footer from './components/Footer';
import './App.css';

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

function App() {
  return (
    <div className="app">
      <Starfield />
      <Hero data={portfolioData} />
      <About data={portfolioData.about} />
      <Experience data={portfolioData.experience} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Contact webFormAccessKey={WEB3FORMS_ACCESS_KEY} />
      <Footer />
    </div>
  );
}

export default App;