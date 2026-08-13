import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '5+' },
  { label: 'Major Applications', value: '3+' },
  { label: 'AI/ML Projects', value: '1+' },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
