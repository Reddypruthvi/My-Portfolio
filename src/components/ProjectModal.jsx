import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const sourceUrl = project?.github && project.github !== '#' ? project.github : null;
  const liveUrl = project?.live && project.live !== '#' ? project.live : null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

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
              className="pointer-events-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-secondary shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
            >
              <div className="relative h-48 flex-shrink-0 bg-primary sm:h-64">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Illustrative project interface for ${project.title}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 via-transparent to-lime-200/10 text-accent/50">
                    <Code2 size={64} />
                  </div>
                )}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary/90 via-transparent to-black/10" />
                
                <button
                  onClick={onClose}
                  aria-label="Close project details"
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
                  <h3 id="project-dialog-title" className="mt-2 text-3xl font-extrabold text-white">{project.title}</h3>
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

                {(sourceUrl || liveUrl) && (
                  <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 pt-6">
                    {sourceUrl && (
                      <a
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
                      >
                        <FiGithub size={20} />
                        <span>{project.repositoryLabel || 'View Repository'}</span>
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
