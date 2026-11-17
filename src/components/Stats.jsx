import React from 'react';
import { motion } from 'framer-motion';
import { education, experience } from '../data/experience';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const stats = [
  { label: 'Featured projects', value: projects.length },
  { label: 'Skill areas', value: skills.length },
  { label: 'Education milestones', value: education.length },
  { label: 'Internship experience', value: experience.length },
];

const Stats = () => {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-12 sm:py-16" aria-label="Portfolio overview">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="text-center"
          >
            <div className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              {String(stat.value).padStart(2, '0')}
            </div>
            <div className="mt-2 text-sm font-medium text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
