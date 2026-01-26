import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative">
              <img 
                src="/images/My pic.jpg" 
                alt="Mihishan Gunasekara" 
                className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent rounded-2xl opacity-60"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">
              Hi There<span className="text-primary">!</span>
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate and motivated undergraduate software engineering student at{' '}
              <a 
                href="https://www.cinec.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                CINEC Campus
              </a>
              . With a strong focus on front-end development and UI/UX design, I specialize in building modern, responsive web and mobile applications using technologies like React.js, Flutter, HTML, CSS, and Figma.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              As a self-driven learner and an active contributor in tech clubs and extracurriculars, I'm always looking to push the boundaries of what's possible in digital development and design. I'm open to exciting opportunities where I can continue to grow, collaborate, and create meaningful software solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass-effect p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>

            <a 
              href="/Mihishan Gunasekara.pdf" 
              download
              className="inline-block btn-outline mt-6"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
