import React from 'react';

const WebProjects = () => {
  const projects = [
    {
      title: 'Pet Care Website',
      image: '/images/pet care.png',
      description: 'A comprehensive pet care website with service booking and information',
      link: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Table Reservation System',
      image: '/images/table res.png',
      description: 'Restaurant table reservation system with real-time availability',
      link: '#',
      technologies: ['React', 'Node.js', 'MySQL'],
    },
  ];

  return (
    <section id="web-projects" className="section-padding bg-dark-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Web <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative glass-effect rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-dark text-xs rounded-full border border-primary text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-white transition-colors duration-300 group/link"
                >
                  View Project
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">Interested in working together?</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebProjects;
