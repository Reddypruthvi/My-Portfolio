import React from 'react';

const technologies = [
  "Python", "JavaScript", "React.js", "Node.js", "MongoDB", "MySQL", "AI/ML", 
  "TensorFlow", "Kotlin", "Firebase", "AWS", "Git", "Docker"
];

const Marquee = () => {
  return (
    <div className="py-6 overflow-hidden bg-accent/10 border-y border-accent/20 flex relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background"></div>
      
      <div className="animate-marquee whitespace-nowrap flex space-x-8 items-center min-w-full">
        {technologies.map((tech, index) => (
          <React.Fragment key={index}>
            <span className="text-2xl font-bold text-gray-300 mx-4">{tech}</span>
            <span className="text-accent">✦</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {technologies.map((tech, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span className="text-2xl font-bold text-gray-300 mx-4">{tech}</span>
            <span className="text-accent">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
