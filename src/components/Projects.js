import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Ceypetco FuelX',
      subtitle: 'Fuel Analytics & Management System',
      description: 'Developed an advanced fuel station management system to streamline inventory tracking, predict fuel stock levels, and automate operational workflows, replacing manual processes to improve efficiency and accuracy.',
      image: '/images/ceypetco.jpg',
      link: '#',
      tags: ['React', 'MySQL', 'Analytics'],
    },
    {
      title: 'Tavola v1.1',
      subtitle: 'Table Reservation Web Application',
      description: 'Designed and implemented a robust table reservation system with customizable features, improving user experience and optimizing restaurant operations.',
      image: '/images/tavola.jpg',
      link: '#',
      tags: ['React', 'Node.js', 'MySQL'],
    },
    {
      title: 'Wildlife Park Management System',
      subtitle: 'Wilpattu Wildlife Mobile Application',
      description: 'Developed a mobile application to digitalize Wilpattu National Park\'s services, enhancing accessibility, operational efficiency, and visitor experience.',
      image: '/images/wildlife.jpg',
      link: 'https://github.com/chamoddhananjaya2000/Wild_Life_Project',
      tags: ['Flutter', 'Firebase', 'Mobile'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-3 font-medium">{project.subtitle}</p>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-dark text-xs rounded-full border border-primary text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
