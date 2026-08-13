import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[90vh] bg-secondary rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col pointer-events-auto"
            >
              <div className="relative h-48 sm:h-64 bg-primary flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-10" />
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Code2 size={64} opacity={0.5} />
                </div>
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                <div className="mb-4">
                  <span className="text-accent font-medium tracking-wide text-sm uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mt-2">{project.title}</h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-400">
                          <span className="text-accent mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
                  >
                    <FiGithub size={20} />
                    <span>View Source</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
