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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-effect p-8 rounded-2xl card-hover"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                opacity: 0
              }}
            >
              {/* Skill Name */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              </div>

              {/* Circular Progress */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient-${index})"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={isVisible ? `${2 * Math.PI * 56 * (1 - skill.percentage / 100)}` : `${2 * Math.PI * 56}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className={`text-${skill.color.split('-')[1]}-500`} stopColor="currentColor" />
                      <stop offset="100%" className={`text-${skill.color.split('-')[3]}-500`} stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">
                    {isVisible ? (
                      <span className="gradient-text">{skill.percentage}%</span>
                    ) : (
                      '0%'
                    )}
                  </span>
                </div>
              </div>

              {/* Progress Bar Alternative (for better gradient support) */}
              <div className="relative">
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

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default Skills;
