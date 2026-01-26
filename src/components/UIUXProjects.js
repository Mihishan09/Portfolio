import React from 'react';

const UIUXProjects = () => {
  const projects = [
    {
      title: 'CINEC Cafe App Ui Kit',
      image: '/images/cafe.png',
      link: 'https://www.figma.com/design/vqMPdLbsqG7vm2AuELsaHw/CINEC-Cafe?node-id=3-112&t=G2s581wNRKVYP8LG-1',
      size: 'large',
    },
    {
      title: 'Music Player App',
      image: '/images/music app.png',
      link: 'https://www.figma.com/design/cVAqA4fatDMzhDUJDzkZcJ/Music--Player-App?node-id=0-1&t=kyRRW9nhumddRk9S-1',
      size: 'small',
    },
    {
      title: 'Movie Streaming App',
      image: '/images/movie app.png',
      link: '#',
      size: 'small',
    },
  ];

  return (
    <section id="uiux-projects" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            UI/UX <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${
                project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-dark-light">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                  >
                    View Design
                  </a>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-primary rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Figma
                </div>
              </div>

              {/* Bottom Info (visible on mobile) */}
              <div className="md:hidden mt-4">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View on Figma →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Want to see more designs?</p>
          <a 
            href="https://www.figma.com/@mihishan09"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Visit My Figma Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default UIUXProjects;
