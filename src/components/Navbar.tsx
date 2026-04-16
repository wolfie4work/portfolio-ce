import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'SKILLS', href: '#skills' },
  { label: 'STUDIES', href: '#studies' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-concrete-900/95 backdrop-blur-sm border-b-2 border-orange'
          : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-xl tracking-tighter text-white">
          PORT<span className="text-orange">FOLIO</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-semibold tracking-widest text-concrete-200 hover:text-orange px-4 py-2 border border-transparent hover:border-concrete-600 transition-all duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 font-mono text-xs font-bold tracking-widest bg-orange text-white px-5 py-2 border-2 border-orange hover:bg-transparent hover:text-orange transition-all duration-200"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white font-mono text-sm border-2 border-concrete-600 px-3 py-1"
        >
          {menuOpen ? '✕ CLOSE' : '☰ MENU'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-concrete-900 border-t-2 border-concrete-700 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm font-semibold tracking-widest text-concrete-200 hover:text-orange py-3 border-b border-concrete-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
