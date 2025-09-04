import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Founding Engineer",
      company: "Livanu",
      location: "San Jose, California, United States",
      period: "Jan 2025 - Present",
      description: [
        "Leading software infrastructure and hardware engineering initiatives at an early-stage startup",
        "Architecting scalable solutions from the ground up as a founding team member",
        "Building core platform capabilities spanning both software and hardware domains"
      ],
      tech: ["Software Infrastructure", "Hardware Engineering", "System Architecture"]
    },
    {
      id: 2,
      title: "Electrical Engineering Coop",
      company: "Teledyne FLIR",
      location: "Waterloo, Ontario, Canada",
      period: "Sep 2024 - Dec 2024",
      description: [
        "Contributed to hardware engineering projects in thermal imaging and sensing technologies",
        "Designed and developed printed circuit boards (PCBs) for advanced imaging systems",
        "Collaborated with cross-functional teams on product development and testing"
      ],
      tech: ["Hardware Engineering", "Printed Circuit Board (PCB) Design", "Thermal Imaging"]
    },
    {
      id: 3,
      title: "Portfolio Management Co-op Student",
      company: "CIBC",
      location: "Toronto, Ontario, Canada",
      period: "Jan 2024 - May 2024",
      description: [
        "Performed comprehensive risk analysis and portfolio optimization for institutional clients",
        "Developed advanced Excel models for investment performance tracking and reporting",
        "Supported portfolio managers with data analysis and investment research"
      ],
      tech: ["Microsoft Excel", "Risk Analysis", "Financial Modeling", "Data Analysis"]
    },
    {
      id: 4,
      title: "Software Developer",
      company: "Full Circle TMS",
      location: "Halton, Ontario, Canada",
      period: "May 2023 - Sep 2023",
      description: [
        "Developed and maintained web applications using JavaScript and AngularJS frameworks",
        "Collaborated with the development team in a remote work environment",
        "Contributed to transportation management system solutions"
      ],
      tech: ["JavaScript", "AngularJS", "Web Development", "Remote Collaboration"]
    },
    {
      id: 5,
      title: "Software Developer",
      company: "Full Circle TMS",
      location: "Ontario, Canada",
      period: "Jun 2021 - Sep 2021",
      description: [
        "Built foundational experience in software development and web technologies",
        "Worked on transportation management system features and enhancements",
        "Gained exposure to full-stack development practices"
      ],
      tech: ["JavaScript", "Web Development", "Software Engineering"]
    }
  ];


  return (
    <section 
      id="experience" 
      className="py-20 px-6 md:px-12 lg:px-20 lg:ml-80"
      ref={ref}
    >
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience</h2>
        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`border-b border-light-gray border-opacity-20 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="py-6 group">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-off-white group-hover:text-yellow transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-light-gray">{exp.company} • {exp.location}</p>
                    <p className="text-light-gray text-sm">{exp.period}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((desc, index) => (
                      <li key={index} className="text-light-gray leading-relaxed text-lg">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-sm text-light-gray mb-2">Technologies:</p>
                    <p className="text-off-white">{exp.tech.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;