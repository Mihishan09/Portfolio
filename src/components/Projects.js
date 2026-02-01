import React from 'react';

const Projects = () => {
  const groupProjects = [
    {
      title: 'Ceypetco FuelX',
      subtitle: 'Fuel Analytics System',
      description: 'Advanced management system to streamline inventory tracking, predict fuel stock levels, and automate operational workflows.',
      image: '/images/ceypetco.jpg',
      link: '#',
      tags: ['React', 'MySQL', 'Analytics'],
    },
    {
      title: 'Tavola v1.1',
      subtitle: 'Table Reservation',
      description: 'Robust reservation system with customizable features, improving user experience and optimizing restaurant operations.',
      image: '/images/tavola.jpg',
      link: '#',
      tags: ['React', 'Node.js', 'MySQL'],
    },
    {
      title: 'Wildlife Park',
      subtitle: 'Mobile Application',
      description: 'Digitalizing Wilpattu National Park\'s services, enhancing accessibility, operational efficiency, and visitor experience.',
      image: '/images/wildlife.jpg',
      link: 'https://github.com/chamoddhananjaya2000/Wild_Life_Project',
      tags: ['Flutter', 'Firebase', 'Mobile'],
    },
  ];

  const myProjects = [
    {
      title: 'Ikman.lk Clone',
      subtitle: 'Marketplace Clone',
      description: 'A fully functional clone of the popular classifieds site, featuring real-time listings, user authentication, and advanced search filtering.',
      image: null, // No image provided yet
      link: 'https://github.com/Mihishan09/Ikman.lk-Cloneapp',
      tags: ['React', 'Redux', 'Node.js'],
    },
    {
      title: 'Library System',
      subtitle: 'Management Platform',
      description: 'Comprehensive solution for library operations including book tracking, member management, and fine calculation.',
      image: null, // No image provided yet
      link: 'https://github.com/Mihishan09/library-management-system-frontend',
      tags: ['React', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'AgriLink SL',
      subtitle: 'Research Project',
      description: 'Innovative platform connecting farmers with markets. Currently under development as part of final year research.',
      image: null, // No image provided yet
      link: 'https://github.com/Mihishan09/AgriLink-SL',
      tags: ['Next.js', 'Machine Learning', 'MongoDB'],
    },
    {
      title: 'Expense Tracker',
      subtitle: 'Finance Manager',
      description: 'Full-stack application for tracking personal income and expenses with visual analytics and report generation.',
      image: '/images/expence tracker dashboard.png',
      link: 'https://github.com/Mihishan09/Expense-tracker-client-side',
      tags: ['MERN Stack', 'Chart.js'],
    },
    {
      title: 'Task Manager',
      subtitle: 'Productivity Tool',
      description: 'Efficient task organizer with project grouping, deadline tracking, and collaboration features.',
      image: '/images/task manager home.png',
      link: 'https://github.com/Mihishan09/task-manager',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="group glass-card overflow-hidden hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-dark-lighter animate-pulse">
          {/* Fallback gradient if no image */}
          {!project.image && <div className="w-full h-full bg-gradient-to-br from-dark-lighter to-dark"></div>}
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Floating Action Badge */}
        <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors cursor-pointer shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 relative flex flex-col grow">
        {/* Decorative Line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-white/10"></div>

        <div className="mb-4">
          <span className="text-xs font-bold tracking-wider text-primary uppercase mb-2 block">{project.subtitle}</span>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-white/5 text-xs font-medium rounded-full text-gray-300 border border-white/5 group-hover:border-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-dark relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-xl">
              A collection of my work, ranging from collaborative team efforts to individual explorations.
            </p>
          </div>
          <a href="https://github.com/Mihishan09" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors group">
            <span>View GitHub</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* My Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">My Projects</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {myProjects.map((project, index) => (
              <ProjectCard key={`my-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Group Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-secondary pl-4">Group Projects</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {groupProjects.map((project, index) => (
              <ProjectCard key={`group-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile View GitHub Link */}
        <div className="mt-16 text-center md:hidden">
          <a href="https://github.com/Mihishan09" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary">
            <span>View GitHub</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
