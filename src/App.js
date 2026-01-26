import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UIUXProjects from './components/UIUXProjects';
import WebProjects from './components/WebProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary font-bold text-2xl">M</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <UIUXProjects />
      <WebProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
