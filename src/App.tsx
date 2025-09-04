import React from 'react';
import './App.css';
import SocialSidebar from './components/SocialSidebar';
import Spotlight from './components/Spotlight';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-navy text-lightest-slate min-h-screen relative">
      <Spotlight />
      <SocialSidebar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-20 lg:ml-80 border-t border-light-gray border-opacity-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate text-sm font-mono">
            Nathan Skoczkowski 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
