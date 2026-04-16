import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-concrete-900 grid-bg-dark flex items-end overflow-hidden">
      {/* Structural grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical measurement lines */}
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0 border-l border-concrete-700/30"
            style={{ left: `${pct}%` }}
          />
        ))}
        {/* Horizontal measurement lines */}
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 border-t border-concrete-700/30"
            style={{ top: `${pct}%` }}
          />
        ))}
        {/* Corner markers */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-orange/60" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-orange/60" />
        <div className="absolute bottom-24 left-8 w-12 h-12 border-b-2 border-l-2 border-orange/60" />
        <div className="absolute bottom-24 right-8 w-12 h-12 border-b-2 border-r-2 border-orange/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
        {/* Reference label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-16 h-[2px] bg-orange" />
          <span className="font-mono text-xs tracking-[0.3em] text-concrete-400 uppercase">
            REF: CE-2024-PORTFOLIO
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono font-extrabold text-5xl sm:text-7xl lg:text-[8rem] leading-[0.9] text-white tracking-tighter"
          >
            CIVIL
            <br />
            <span className="text-orange">ENG</span>
            <span className="text-concrete-300">INEER</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-end gap-6"
          >
            <div className="font-mono text-sm text-concrete-400 max-w-md leading-relaxed">
              <span className="text-orange font-bold">{'//'}</span> Structural analysis, 
              project management & computational design. Building the future, 
              one beam at a time.
            </div>
            <div className="font-mono text-xs text-concrete-500 border border-concrete-700 px-4 py-2 self-start sm:self-auto">
              LAT: 33.5731° N | LON: 7.5898° W
            </div>
          </motion.div>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group font-mono text-sm font-bold tracking-wider bg-orange text-white px-8 py-4 border-2 border-orange hover:bg-transparent hover:text-orange transition-all duration-300 inline-flex items-center gap-3"
          >
            VIEW PROJECTS
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#"
            className="font-mono text-sm font-bold tracking-wider text-concrete-300 px-8 py-4 border-2 border-concrete-600 hover:border-orange hover:text-orange transition-all duration-300 inline-flex items-center gap-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 pt-6 border-t border-concrete-700/50 flex flex-wrap gap-8 font-mono text-xs text-concrete-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 animate-pulse" />
            <span>OPEN TO WORK</span>
          </div>
          <div>SCROLL TO EXPLORE ↓</div>
          <div className="ml-auto hidden sm:block">DESIGNED WITH STRUCTURAL INTEGRITY</div>
        </motion.div>
      </div>
    </section>
  );
}
