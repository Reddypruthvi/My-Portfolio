import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ExternalLink, Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-3"
          >
            <Code2 className="text-accent" size={32} />
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A selection of my recent work in web, mobile, and AI/ML development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-secondary relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 font-mono text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  0{idx + 1}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-20">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <span className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white" onClick={(e) => e.stopPropagation()}>
                      <FiGithub size={18} />
                    </span>
                    <span className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={18} />
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-accent transition-colors flex items-center gap-1">
                    Details <span>→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
