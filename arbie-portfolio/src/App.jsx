import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <IntroScreen key="intro" onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      <Header />
      <main>
        <Welcome />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
