import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Github = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-4"
          >
            Building in public
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore my projects, experiments, and development journey on GitHub.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-2xl p-8 text-center"
        >
          <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
            <FiGithub size={48} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">@pruthvireddyk</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            I regularly contribute to open source and build projects across various domains including web development, AI/ML, and mobile apps.
          </p>
          
          <div className="flex justify-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2"><BookOpen size={20} className="text-accent" /> <span>30+ Repos</span></div>
            <div className="flex items-center gap-2"><Star size={20} className="text-yellow-500" /> <span>10+ Stars</span></div>
            <div className="flex items-center gap-2"><GitFork size={20} className="text-gray-400" /> <span>5+ Forks</span></div>
          </div>
          
          {/* Simulated contribution graph */}
          <div className="flex flex-wrap gap-1 justify-center opacity-70 mb-10 overflow-hidden h-24">
             {Array.from({ length: 150 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${Math.random() > 0.7 ? 'bg-accent' : Math.random() > 0.4 ? 'bg-accent/50' : 'bg-white/10'}`}></div>
             ))}
          </div>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
            <FiGithub size={20} />
            <span>Visit GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Github;
