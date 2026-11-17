import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Data Warehousing with Microsoft Azure',
    issuer: 'Microsoft Azure',
    area: 'Cloud data engineering',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Professional development</p>
          <h2 className="flex items-center gap-3 text-4xl font-extrabold text-white sm:text-5xl">
            <Award className="text-accent" size={32} />
            Certifications
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass group flex items-start gap-5 rounded-2xl p-6 transition-colors hover:border-accent/30 sm:p-8"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-secondary sm:h-28 sm:w-36">
                <img
                  src="/certificate-illustration.svg"
                  alt="Decorative certificate illustration, not an issued credential"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Award className="mb-3 text-accent" size={20} aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{certification.area}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">{certification.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{certification.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-sm text-gray-500">
          Certification titles are shown from the existing portfolio; credential dates and verification links were not provided. The image is decorative and not a certificate.
        </p>
      </div>
    </section>
  );
};

export default Certifications;
