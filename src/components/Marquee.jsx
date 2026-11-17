import React from 'react';

const technologies = [
  'Python',
  'Java',
  'React.js',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MySQL',
  'MongoDB',
  'Machine Learning',
  'Git',
  'AWS Basics',
];

const Marquee = () => {
  const items = [...technologies, ...technologies];

  return (
    <div className="relative flex overflow-hidden border-y border-accent/15 bg-accent/[0.04] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
      <div className="flex min-w-max animate-marquee items-center gap-8 whitespace-nowrap" aria-label="Technologies">
        {items.map((technology, index) => (
          <React.Fragment key={`${technology}-${index}`}>
            <span className="text-sm font-semibold tracking-wide text-gray-300 sm:text-base">{technology}</span>
            <span className="text-accent" aria-hidden="true">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
