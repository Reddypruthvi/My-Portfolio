import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-background/90 py-3 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'border-white/5 bg-background/60 py-4 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3" aria-label="Pruthvi Reddy K, home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
            PR
          </span>
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
            Pruthvi Reddy K
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Pruthvi_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-lime-300"
          >
            Résumé
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-gray-200 transition hover:bg-white/10 xl:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-background/95 transition-all duration-300 xl:hidden ${
          mobileMenuOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Pruthvi_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-gray-950"
          >
            View résumé
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
