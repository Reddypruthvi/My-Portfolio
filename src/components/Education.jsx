import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/experience';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
            <GraduationCap className="text-accent" size={32} />
            Education
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-xl text-accent font-medium">{edu.major}</p>
                  <p className="text-gray-400 mt-2">{edu.institution}, {edu.location}</p>
                </div>
                <div className="mt-4 md:mt-0 font-mono text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 self-start">
                  {edu.duration}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span key={i} className="px-4 py-2 bg-secondary rounded-lg text-sm text-gray-300">
                      {course}
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

export default Education;
