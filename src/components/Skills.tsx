import { motion } from 'framer-motion';

const skills = [
  {
    category: 'STRUCTURAL',
    items: [
      { name: 'AutoCAD', level: 95 },
      { name: 'Revit', level: 88 },
      { name: 'SAP2000', level: 82 },
      { name: 'ETABS', level: 78 },
    ],
  },
  {
    category: 'ANALYSIS',
    items: [
      { name: 'Finite Element', level: 85 },
      { name: 'Structural Design', level: 90 },
      { name: 'Seismic Analysis', level: 75 },
      { name: 'BIM Modeling', level: 80 },
    ],
  },
  {
    category: 'MANAGEMENT',
    items: [
      { name: 'MS Project', level: 85 },
      { name: 'Primavera P6', level: 70 },
      { name: 'Cost Estimation', level: 80 },
      { name: 'Site Supervision', level: 88 },
    ],
  },
  {
    category: 'COMPUTING',
    items: [
      { name: 'Python', level: 75 },
      { name: 'MATLAB', level: 80 },
      { name: 'JavaScript', level: 70 },
      { name: 'Excel/VBA', level: 90 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-mono text-xs font-semibold tracking-wider text-concrete-700 group-hover:text-orange transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-concrete-400 tabular-nums">{level}%</span>
      </div>
      <div className="h-2 bg-concrete-200 border border-concrete-300 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 bg-concrete-800 group-hover:bg-orange transition-colors duration-300"
        />
        {/* Tick marks on the bar */}
        <div className="absolute inset-0 flex">
          {[25, 50, 75].map((tick) => (
            <div
              key={tick}
              className="absolute top-0 bottom-0 w-[1px] bg-concrete-300/50"
              style={{ left: `${tick}%` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-concrete-50 grid-bg">
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
            <span className="font-mono text-xs tracking-[0.3em] text-concrete-400">SEC.02</span>
          </div>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl tracking-tighter text-concrete-900">
            TECHNICAL<br />
            <span className="text-orange">SPECIFICATIONS</span>
          </h2>
          <p className="mt-4 text-concrete-500 max-w-lg font-mono text-sm">
            // Proficiency levels measured on a standardized scale.
            Hover over individual skills for detailed assessment.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-white border-2 border-concrete-200 p-6 hover:border-orange transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-orange" />
                <h3 className="font-mono text-sm font-bold tracking-widest text-concrete-800">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-6 border-t-2 border-concrete-200 flex flex-wrap gap-6 font-mono text-xs text-concrete-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-2 bg-concrete-800" />
            <span>PROFICIENCY LEVEL</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-2 bg-orange" />
            <span>HOVER STATE</span>
          </div>
          <div className="ml-auto">LAST UPDATED: 2024</div>
        </motion.div>
      </div>
    </section>
  );
}
