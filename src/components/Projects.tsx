import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  category: 'software' | 'hardware';
}

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects: Project[] = [
    // Software Projects
    {
      id: 1,
      title: "SteamMarketPulse",
      description: "Dynamic web platform enabling users to monitor and analyze CSGO in-game item market trends for enhanced investment strategies. Integrated Steam API for real-time inventory data with accurate market insights, featuring interactive web interface with SQL-powered data handling.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Flask"],
      github: "https://github.com/nskocz/steammarketpulse",
      category: 'software'
    },
    {
      id: 2,
      title: "Cmdexec",
      description: "Robust Python application for managing multiple programs via command-line inputs with Docker containerization achieving 99.9% secure execution rate across 1,000+ user programs. Features intuitive Tkinter GUI for enhanced accessibility and seamless user experience.",
      tech: ["Python", "Docker", "Sandboxie", "Tkinter"],
      github: "https://github.com/nskocz/cmdexec",
      category: 'software'
    },
    // Hardware Projects
    {
      id: 3,
      title: "Automated Reservoir System",
      description: "STM32-based irrigation control system with real-time monitoring using ultrasonic sensors, PWM servo control, RTC integration, and custom 2-layer PCB design featuring robust decoupling and test probe points for oscilloscope debugging.",
      tech: ["STM32", "Proteus Tools", "C Programming", "PWM Control", "PCB Design"],
      category: 'hardware'
    },
    {
      id: 4,
      title: "Moisture Zone",
      description: "STM32-based automated soil irrigation system with multi-level moisture detection (high, medium, low) and water release automation. Features LED display interface for real-time monitoring of soil moisture levels and state changes, with complete system architecture design and TinkerCad prototyping.",
      tech: ["CAD", "C++", "Git", "TinkerCad", "STM32", "LED Interface"],
      category: 'hardware'
    }
  ];

  const softwareProjects = projects.filter(project => project.category === 'software');
  const hardwareProjects = projects.filter(project => project.category === 'hardware');

  const renderProjects = (projectList: Project[], startIndex: number) => (
    <div className="grid md:grid-cols-2 gap-12">
      {projectList.map((project, index) => (
        <div
          key={project.id}
          className={`group cursor-pointer border-l-4 border-transparent hover:border-yellow transition-all duration-500 pl-6 hover-lift ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{
            transitionDelay: isVisible ? `${(startIndex + index) * 100}ms` : '0ms'
          }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-off-white group-hover:text-yellow transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-light-gray leading-relaxed mb-6 text-lg">
              {project.description}
            </p>
            <div className="mb-6">
              <p className="text-sm text-light-gray mb-2 uppercase tracking-wider">Technologies</p>
              <p className="text-off-white font-medium">{project.tech.join(' • ')}</p>
            </div>
            <div className="flex gap-6 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white hover:text-yellow transition-colors duration-300 font-medium uppercase tracking-wider"
                >
                  GitHub →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white hover:text-yellow transition-colors duration-300 font-medium uppercase tracking-wider"
                >
                  Live Site →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      id="projects" 
      className="py-20 px-6 md:px-12 lg:px-20 lg:ml-80"
      ref={ref}
    >
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Projects</h2>
        
        {/* Software Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-green">Software Focused</h3>
          {renderProjects(softwareProjects, 0)}
        </div>

        {/* Hardware Projects Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-green">Hardware Focused</h3>
          {renderProjects(hardwareProjects, softwareProjects.length)}
        </div>
      </div>
    </section>
  );
};

export default Projects;