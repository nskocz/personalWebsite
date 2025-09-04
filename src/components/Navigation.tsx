import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <a 
            href="/" 
            className="text-2xl font-bold text-lightest-slate hover:text-green transition-colors duration-300"
          >
            NS
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-slate hover:text-green transition-colors duration-300 text-sm relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-slate hover:text-green transition-colors duration-300 text-sm relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#experience" 
              className="text-slate hover:text-green transition-colors duration-300 text-sm relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#projects" 
              className="text-slate hover:text-green transition-colors duration-300 text-sm relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-slate hover:text-green transition-colors duration-300 text-sm relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#resume" 
              className="ml-4 bg-transparent border border-green text-green px-4 py-2 text-sm hover:bg-green hover:bg-opacity-10 transition-all duration-300 rounded"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate hover:text-green transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy border-t border-green border-opacity-20">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <a 
                href="/" 
                className="text-slate hover:text-green transition-colors duration-300 text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-slate hover:text-green transition-colors duration-300 text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="text-slate hover:text-green transition-colors duration-300 text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-slate hover:text-green transition-colors duration-300 text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-slate hover:text-green transition-colors duration-300 text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#resume" 
                className="bg-transparent border border-green text-green px-4 py-2 text-sm hover:bg-green hover:bg-opacity-10 transition-all duration-300 rounded text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;