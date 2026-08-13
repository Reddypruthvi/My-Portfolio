import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  { name: "Web Development Certification", issuer: "Certification Provider", date: "Recent" },
  { name: "Data Warehousing with Microsoft Azure", issuer: "Microsoft Azure", date: "Recent" },
  { name: "Python Programming Fundamentals", issuer: "Certification Provider", date: "Recent" },
  { name: "SQL and Database Management", issuer: "Certification Provider", date: "Recent" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-3"
          >
            <Award className="text-accent" size={32} />
            Certifications
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors group"
            >
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{cert.date}</span>
                <button className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  View →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
