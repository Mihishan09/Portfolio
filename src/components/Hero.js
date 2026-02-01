import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full animate-pulse animation-delay-400"></div>
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
          <div className="inline-flex items-center px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Available for projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
            Software <br />
            <span className="gradient-text text-glow">Engineer</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            I craft digital experiences that combine innovative design with robust engineering. Specialized in building modern web and mobile applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </button>
            <a
              href="/Mihishan Gunasekara.pdf"
              download
              className="px-8 py-3 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Download CV</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">3+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
            </div>
          </div>
        </div>

        {/* Visual/Image Side */}
        <div className={`relative hidden md:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
          {/* Profile Composition */}
          <div className="relative w-full aspect-square max-w-lg mx-auto z-10">
            {/* Animated Sphere Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[80px] animate-pulse"></div>

            {/* Spinning Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow animation-delay-400" style={{ animationDirection: 'reverse' }}></div>

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 shadow-2xl group z-20">
              <div className="absolute inset-0 bg-dark-lighter/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge 1 - Top Right */}
            <div className="absolute top-[15%] -right-4 md:-right-8 bg-dark/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-float z-30">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Expertise</p>
                  <p className="text-sm font-bold text-white">Frontend</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 - Bottom Left */}
            <div className="absolute bottom-[20%] -left-4 md:-left-8 bg-dark/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl animate-float animation-delay-200 z-30">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Design</p>
                  <p className="text-sm font-bold text-white">UI/UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-gray-500 text-xs mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
