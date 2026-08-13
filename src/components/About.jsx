import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Where software, data & <span className="text-accent">AI converge</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a B.E. graduate in Computer Science and Data Science Engineering, passionate about solving real-world problems through code.
              </p>
              <p>
                I have hands-on experience building full-stack applications and machine-learning models using Python, Java, and JavaScript. My technical expertise includes React, Node.js, MySQL, and MongoDB.
              </p>
              <p>
                I am currently seeking an entry-level Software Engineer or Software Developer role to apply my development and problem-solving skills while continuing to grow professionally in a dynamic team environment.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/Pruthvi_Reddy_Resume.pdf" download className="px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-2">
                <FileText size={20} />
                <span>Download Resume</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2">
                <FiGithub size={20} />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"></div>
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img src="/profile.jpg" alt="Pruthvi Reddy K" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
