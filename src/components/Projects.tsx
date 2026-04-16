import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  ref: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'REINFORCED CONCRETE BRIDGE',
    category: 'STRUCTURAL DESIGN',
    description: 'Complete structural analysis and design of a 45m span RC bridge. Includes seismic assessment, load distribution analysis, and detailed reinforcement drawings.',
    tags: ['SAP2000', 'AutoCAD', 'RC Design', 'Seismic'],
    year: '2024',
    ref: 'PRJ-001',
  },
  {
    id: 2,
    title: 'STEEL FRAME WAREHOUSE',
    category: 'STEEL STRUCTURES',
    description: 'Design of a 2000m² industrial warehouse using portal frame steel construction. Includes portal stability analysis, connection design, and PEB optimization.',
    tags: ['Revit', 'ETABS', 'Steel Design', 'BIM'],
    year: '2024',
    ref: 'PRJ-002',
  },
  {
    id: 3,
    title: 'RESIDENTIAL TOWER BIM',
    category: 'BIM MODELING',
    description: 'Full BIM model of a 12-story residential tower. Coordinated MEP systems, structural model, and architectural design using Revit and Navisworks.',
    tags: ['Revit', 'Navisworks', 'BIM', 'MEP'],
    year: '2023',
    ref: 'PRJ-003',
  },
  {
    id: 4,
    title: 'FOUNDATION ANALYSIS TOOL',
    category: 'COMPUTATIONAL',
    description: 'Python-based tool for shallow foundation design. Automates bearing capacity calculations, settlement analysis, and generates PDF reports.',
    tags: ['Python', 'FEM', 'Geotechnics', 'Automation'],
    year: '2023',
    ref: 'PRJ-004',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border-2 border-concrete-200 bg-white hover:border-orange transition-all duration-300 cursor-crosshair"
    >
      {/* Blueprint wireframe overlay (default state) */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="h-48 p-4 blueprint-bg relative overflow-hidden">
          {/* Wireframe lines */}
          <svg className="w-full h-full" viewBox="0 0 300 160" fill="none">
            {/* Grid */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 11} x2="300" y2={i * 11} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 15} y1="0" x2={i * 15} y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            ))}
            {/* Blueprint shapes */}
            <rect x="40" y="20" width="120" height="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
            <rect x="60" y="40" width="80" height="40" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="40" y1="20" x2="60" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="160" y1="20" x2="140" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <circle cx="220" cy="60" r="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="40" y1="120" x2="260" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            {/* Dimension lines */}
            <line x1="40" y1="140" x2="160" y2="140" stroke="#FF6B00" strokeWidth="0.5" />
            <text x="95" y="152" fill="#FF6B00" fontSize="8" fontFamily="monospace" textAnchor="middle">12000mm</text>
          </svg>
          <div className="absolute top-3 right-3 font-mono text-[9px] text-white/50">
            WIREFRAME VIEW
          </div>
        </div>
      </div>

      {/* Final render overlay (hover state) */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="h-48 bg-gradient-to-br from-concrete-700 via-concrete-600 to-concrete-800 relative overflow-hidden">
          {/* Abstract structure visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-32 border-2 border-orange/60 bg-orange/10" />
              <div className="absolute -right-8 top-4 w-16 h-24 border border-white/30 bg-white/5" />
              <div className="absolute -left-4 -bottom-4 w-20 h-16 border border-white/20 bg-white/5" />
            </div>
          </div>
          {/* Scan lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute left-0 right-0 h-[1px] bg-white/5" style={{ top: `${i * 12.5}%` }} />
          ))}
          <div className="absolute top-3 right-3 font-mono text-[9px] text-orange">
            RENDERED VIEW
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="relative z-20 p-6 mt-48">
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono text-[10px] font-bold tracking-wider text-orange">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-concrete-400">
            {project.ref} | {project.year}
          </span>
        </div>
        <h3 className="font-mono font-bold text-lg text-concrete-900 group-hover:text-orange transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-concrete-500 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider text-concrete-600 px-2 py-1 border border-concrete-300 group-hover:border-orange/50 group-hover:text-orange transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t-2 border-concrete-100 group-hover:border-orange/30 transition-colors">
          <span className="font-mono text-xs font-bold text-concrete-400 group-hover:text-orange transition-colors inline-flex items-center gap-2">
            VIEW DETAILS
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-concrete-50 grid-bg">
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
            <span className="font-mono text-xs tracking-[0.3em] text-concrete-400">SEC.04</span>
          </div>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl tracking-tighter text-concrete-900">
            BUILT<br />
            <span className="text-orange">STRUCTURES</span>
          </h2>
          <p className="mt-4 text-concrete-500 max-w-lg font-mono text-sm">
            // Project portfolio. Hover over cards to switch from blueprint wireframe
            to rendered view. Each project follows rigorous engineering standards.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-concrete-200 border-2 border-concrete-200"
        >
          {[
            { label: 'PROJECTS', value: '04' },
            { label: 'COUNTRIES', value: '02' },
            { label: 'STRUCTURES', value: '12+' },
            { label: 'BIM MODELS', value: '08' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 text-center">
              <div className="font-mono font-bold text-3xl text-concrete-900">{stat.value}</div>
              <div className="font-mono text-[10px] tracking-widest text-concrete-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
