import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Flutter', percentage: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'HTML/CSS', percentage: 96, color: 'from-orange-500 to-red-500' },
    { name: 'Figma', percentage: 95, color: 'from-purple-500 to-pink-500' },
    { name: 'React.js', percentage: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'MySQL', percentage: 85, color: 'from-blue-600 to-indigo-600' },
    { name: 'Python', percentage: 80, color: 'from-yellow-500 to-green-500' },
  ];

  useEffect(() => {
    // FIX 1: Copy sectionRef.current to a local variable for cleanup
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-dark overflow-hidden">
      {/* FIX 2: Replace <style jsx> with a standard <style> tag to avoid DOM warnings */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`glass-effect p-8 rounded-2xl card-hover ${isVisible ? 'animate-fade-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              </div>

              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64" cy="64" r="56"
                    stroke="currentColor" strokeWidth="8" fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="64" cy="64" r="56"
                    // FIX 3: Ensure URL template strings are clean
                    stroke={`url(#grad-${index})`}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 56}
                    strokeDashoffset={isVisible ? 2 * Math.PI * 56 * (1 - skill.percentage / 100) : 2 * Math.PI * 56}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  />
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {isVisible ? `${skill.percentage}%` : '0%'}
                  </span>
                </div>
              </div>

              <div className="relative mt-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;