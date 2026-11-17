import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative bg-primary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Selected work</p>
            <h2 className="flex items-center gap-3 text-4xl font-extrabold text-white sm:text-5xl">
              <Code2 className="text-accent" size={32} />
              Projects
            </h2>
          </div>
          <p className="max-w-xl text-gray-400">
            A selection of applications and data projects across full-stack development, analytics, and machine learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Illustrative project interface for ${project.title}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/10 via-secondary to-black">
                    <Code2 className="text-accent/50 transition-colors group-hover:text-accent" size={40} strokeWidth={1.4} />
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:border-accent/40 hover:text-accent"
                    >
                      <FiGithub size={15} />
                      {project.repositoryLabel || 'GitHub'}
                      <ArrowUpRight size={13} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:border-accent/40 hover:text-accent"
                      >
                        Live demo
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="shrink-0 rounded-full px-3 py-2 text-xs font-semibold text-accent transition hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`View details for ${project.title}`}
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.article>
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
