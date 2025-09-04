import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 lg:ml-80 bg-navy"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Desktop Layout */}
        <div className={`hidden lg:flex items-center justify-between transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-3xl">
            <p className="text-green text-base font-mono mb-6 leading-normal">
              Hi I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-2 text-lightest-slate">
              Nathan Skoczkowski.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 text-slate">
              Building the future, better.
            </h2>
            <p className="text-xl text-slate max-w-2xl leading-relaxed mb-12">
              Innovating the electronics world with purpose and precision. As an electrical 
              engineering student, I create accessible, user-friendly solutions that 
              leave a lasting impact.
            </p>
          </div>
          
          <div className="ml-16">
            <div className="w-80 h-80 rounded-full border-4 border-green bg-light-navy flex items-center justify-center relative overflow-hidden">
              <img 
                src="/images/me.jpg" 
                alt="Nathan Skoczkowski" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className={`lg:hidden flex flex-col items-center text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Mobile Portrait Image */}
          <div className="mb-8">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-green bg-light-navy flex items-center justify-center relative overflow-hidden">
              <img 
                src="/images/me.jpg" 
                alt="Nathan Skoczkowski" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="max-w-2xl">
            <p className="text-green text-base font-mono mb-6 leading-normal">
              Hi I'm
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-2 text-lightest-slate">
              Nathan Skoczkowski.
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-8 text-slate">
              Building the future, better.
            </h2>
            <p className="text-lg md:text-xl text-slate leading-relaxed mb-12">
              Innovating the electronics world with purpose and precision. As an electrical 
              engineering student, I create accessible, user-friendly solutions that 
              leave a lasting impact.
            </p>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-8 mt-8">
            <a
              href="https://github.com/nskocz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-light-navy"
              aria-label="GitHub"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nskoczkowski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-light-navy"
              aria-label="LinkedIn"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="https://www.instagram.com/nathan.skocz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-pink-400 transition-colors duration-300 p-3 rounded-full hover:bg-light-navy"
              aria-label="Instagram"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;