import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-accent" size={32} />
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-accent border-4 border-primary"></div>
              
              <div className="glass p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-xl text-accent font-medium mt-1">{exp.company}</p>
                    <p className="text-gray-400 mt-1">{exp.type}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 inline-block w-max">
                    {exp.date}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary rounded-md text-sm text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
