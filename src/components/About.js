import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side - Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About <br />
              <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm a passionate software engineering undergraduate with a love for creating beautiful, functional digital experiences.
            </p>
            <div className="inline-flex flex-col gap-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Based in Sri Lanka
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Available for Freelance
              </div>
            </div>
          </div>

          {/* Right Side - Bento Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Main Bio Card */}
            <div className="md:col-span-2 glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I am currently studying Software Engineering at <a href="https://www.cinec.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">CINEC Campus</a>. My journey in tech started with a curiosity for how things work, which quickly evolved into a passion for building them myself.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in front-end development using React,Next.js,React Native and Full stack developement. I believe that good code should be invisible – users should only experience the seamless functionality and beautiful design it powers.
              </p>
            </div>

            {/* Stats Card */}
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-2">10+</div>
              <div className="text-primary font-medium">Projects Completed</div>
            </div>

            {/* Experience Card */}
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-2">3+</div>
              <div className="text-primary font-medium">Years Experience</div>
            </div>

            {/* Tech Stack/Interests Card */}
            <div className="md:col-span-2 glass-card p-8 bg-gradient-to-r from-primary/10 to-transparent">
              <h3 className="text-xl font-bold mb-6 text-white">What I Do</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'React Native', 'Next.js', 'UI/UX Design', 'Figma', 'Node.js', 'HTML/CSS', 'Spring Boot'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-lg bg-dark border border-white/10 text-sm text-gray-300 hover:text-white hover:border-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
