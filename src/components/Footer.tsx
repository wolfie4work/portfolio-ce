import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-concrete-900 border-t-2 border-concrete-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & description */}
          <div>
            <a href="#" className="font-mono font-bold text-xl tracking-tighter text-white">
              PORT<span className="text-orange">FOLIO</span>
            </a>
            <p className="mt-3 text-sm text-concrete-400 leading-relaxed">
              Civil engineering portfolio built with structural integrity.
              Designed to withstand scrutiny and impress stakeholders.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-widest text-orange mb-4">
              NAVIGATION
            </h3>
            <div className="space-y-2">
              {['Skills', 'Studies', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-mono text-sm text-concrete-400 hover:text-orange transition-colors"
                >
                  → {link.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Technical details */}
          <div>
            <h3 className="font-mono text-xs font-bold tracking-widest text-orange mb-4">
              SPECS
            </h3>
            <div className="space-y-2 font-mono text-xs text-concrete-500">
              <div>FRAMEWORK: REACT + VITE</div>
              <div>STYLING: TAILWIND CSS</div>
              <div>3D: THREE.JS / R3F</div>
              <div>ANIMATION: FRAMER MOTION</div>
              <div>DESIGN: BRUTALIST / ENGINEERING</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t-2 border-concrete-700 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-xs text-concrete-500">
            © {currentYear} — ALL RIGHTS RESERVED — DESIGNED WITH STRUCTURAL INTEGRITY
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="font-mono text-xs font-bold text-concrete-400 hover:text-orange border-2 border-concrete-600 hover:border-orange px-4 py-2 transition-all"
          >
            ↑ BACK TO TOP
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
