import { motion } from 'framer-motion';
import IBeam from './IBeam';

const milestones = [
  {
    year: '2024 — PRESENT',
    title: 'MASTER OF ENGINEERING',
    institution: 'EHTP — École Hassania des Travaux Publics',
    description: 'Specializing in Structural Engineering & Computational Design. Advanced coursework in finite element analysis, seismic design, and BIM integration.',
    status: 'IN PROGRESS',
    marker: 'M-01',
  },
  {
    year: '2021 — 2023',
    title: 'CPGE — CLASSES PRÉPARATOIRES',
    institution: 'Lycée Al Khawarizmi',
    description: 'Intensive preparatory program in Mathematics, Physics & Engineering Sciences. National competitive exam preparation for Grandes Écoles.',
    status: 'COMPLETED',
    marker: 'M-02',
  },
  {
    year: '2021',
    title: 'BACCALAURÉAT',
    institution: 'Lycée — Sciences Mathématiques',
    description: 'Graduated with honors in Mathematical Sciences. Strong foundation in calculus, mechanics, and analytical thinking.',
    status: 'COMPLETED',
    marker: 'M-03',
  },
];

export default function Studies() {
  return (
    <section id="studies" className="py-24 bg-concrete-900 grid-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-orange" />
            <span className="font-mono text-xs tracking-[0.3em] text-concrete-500">SEC.03</span>
          </div>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl tracking-tighter text-white">
            STRUCTURAL<br />
            <span className="text-orange">FOUNDATION</span>
          </h2>
          <p className="mt-4 text-concrete-400 max-w-lg font-mono text-sm">
            // Academic timeline. Each milestone represents a critical load-bearing
            element in the educational structure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical ruler line */}
            <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-concrete-600" />
            {/* Ruler ticks */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 w-[14px] h-[1px] bg-concrete-600"
                style={{ top: `${i * 5}%` }}
              />
            ))}

            <div className="space-y-8">
              {milestones.map((ms, i) => (
                <motion.div
                  key={ms.marker}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14"
                >
                  {/* Marker dot */}
                  <div className="absolute left-[13px] top-2 w-[18px] h-[18px] border-2 border-orange bg-concrete-900 flex items-center justify-center">
                    <div className={`w-2 h-2 ${ms.status === 'IN PROGRESS' ? 'bg-orange animate-pulse' : 'bg-concrete-400'}`} />
                  </div>

                  {/* Content card */}
                  <div className="border-2 border-concrete-600 p-6 bg-concrete-800/50 hover:border-orange transition-colors duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-mono text-xs text-orange font-bold tracking-wider">
                        {ms.year}
                      </span>
                      <span className={`font-mono text-[10px] px-2 py-1 border ${
                        ms.status === 'IN PROGRESS'
                          ? 'border-orange text-orange'
                          : 'border-concrete-500 text-concrete-500'
                      }`}>
                        {ms.status}
                      </span>
                    </div>
                    <h3 className="font-mono font-bold text-lg text-white group-hover:text-orange transition-colors mb-1">
                      {ms.title}
                    </h3>
                    <p className="font-mono text-xs text-concrete-300 mb-3 tracking-wider">
                      {ms.institution}
                    </p>
                    <p className="text-sm text-concrete-400 leading-relaxed">
                      {ms.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-concrete-700 font-mono text-[10px] text-concrete-500">
                      MARKER: {ms.marker} | INDEX: {String(i).padStart(3, '0')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D I-beam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="font-mono text-xs text-concrete-500 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange animate-pulse" />
                3D VISUALIZATION — ROTATE TO INSPECT
              </div>
              <IBeam />
              {/* Specs table below */}
              <div className="mt-4 border-2 border-concrete-600 bg-concrete-800/50">
                <div className="px-4 py-2 border-b border-concrete-700 font-mono text-xs text-orange font-bold tracking-wider">
                  BEAM PROPERTIES
                </div>
                <div className="grid grid-cols-2 gap-px bg-concrete-700">
                  {[
                    ['Section', 'HEB 200'],
                    ['Material', 'S355 Steel'],
                    ['Height', '200 mm'],
                    ['Width', '200 mm'],
                    ['Web t', '9 mm'],
                    ['Flange t', '15 mm'],
                    ['Weight', '61.3 kg/m'],
                    ['Ix', '5696 cm⁴'],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-concrete-800 px-4 py-2 flex justify-between">
                      <span className="font-mono text-xs text-concrete-400">{label}</span>
                      <span className="font-mono text-xs text-white font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
