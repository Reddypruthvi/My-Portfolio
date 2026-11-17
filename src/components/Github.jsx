import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Github = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl p-8 text-center sm:p-12"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
            <FiGithub size={32} className="text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Open source</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Find me on GitHub</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-gray-400">
              Explore my repositories, source code, and projects.
            </p>
          </div>
          <a
            href="https://github.com/Reddypruthvi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-gray-950 transition hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Explore my repositories
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Github;
