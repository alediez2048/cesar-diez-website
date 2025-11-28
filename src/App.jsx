import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Blog />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
