import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:36px_36px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to entry-level opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent"
          >
            Software Developer · Full Stack Developer · Tech Enthusiast
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-accent to-lime-200 bg-clip-text text-transparent">
              Pruthvi Reddy K.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl"
          >
            I am a Computer Science and Data Science graduate with knowledge of Python, Java, React.js, JavaScript, databases, and web technologies. I enjoy building practical applications and learning new technologies. I am looking for an opportunity to start my career and contribute to real-world software development projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-gray-950 transition hover:bg-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore my work
              <ArrowDownRight size={18} />
            </a>
            <a
              href="/Pruthvi_Reddy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/35 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Download Resume
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3.5 font-semibold text-accent transition hover:border-accent/60 hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Contact Me
              <ArrowDownRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="mt-7 flex items-center gap-3"
            aria-label="Social profiles"
          >
            <a
              href="https://github.com/Reddypruthvi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-accent/50 hover:text-accent"
            >
              <FiGithub size={19} />
            </a>
            <a
              href="mailto:pruthvireddyk3@gmail.com"
              aria-label="Email Pruthvi"
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-accent/50 hover:text-accent"
            >
              <Mail size={19} />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-12 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-300"
          >
            <MapPin size={15} />
            Computer Science &amp; Data Science Engineering
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-lime-200/10 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
            <div className="overflow-hidden rounded-[1.25rem] bg-secondary">
              <img
                src="/profile.jpg"
                alt="Portrait of Pruthvi Reddy K"
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-3 py-4">
              <div>
                <p className="font-semibold text-white">Pruthvi Reddy K</p>
                <p className="mt-1 text-sm text-gray-400">Software Developer</p>
              </div>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                Open to work
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-full border border-white/10" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
