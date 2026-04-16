import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IBeam() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setRotation((r) => r + 0.5);
    }, 30);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastX(e.clientX);
    setAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - lastX;
    setRotation((r) => r + delta * 0.5);
    setLastX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scaleX = Math.cos((rotation * Math.PI) / 180);
  const sideVisible = scaleX > 0;

  return (
    <div
      className="w-full h-[400px] lg:h-[500px] bg-concrete-800 border-2 border-concrete-600 cursor-crosshair relative overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      {/* Corner reference marks */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-orange/50 z-10" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-orange/50 z-10" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-orange/50 z-10" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-orange/50 z-10" />

      {/* 3D I-beam */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            transform: `perspective(800px) rotateY(${rotation}deg) rotateX(-15deg)`,
            transformStyle: 'preserve-3d',
          }}
          className="relative"
        >
          {/* Front face */}
          <div style={{ transform: 'translateZ(60px)' }} className="absolute inset-0">
            <svg width="200" height="280" viewBox="-10 -10 220 300" className="drop-shadow-none">
              {/* I-beam cross section - filled */}
              <path
                d="M0,0 L200,0 L200,25 L110,25 L110,255 L200,255 L200,280 L0,280 L0,255 L90,255 L90,25 L0,25 Z"
                fill={sideVisible ? '#606060' : '#505050'}
                stroke="#FF6B00"
                strokeWidth="2"
              />
              {/* Center line */}
              <line x1="100" y1="0" x2="100" y2="280" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="4 4" />
              {/* Dimension annotations */}
              <line x1="-5" y1="0" x2="-5" y2="280" stroke="rgba(255,107,0,0.3)" strokeWidth="0.5" />
              <text x="-8" y="145" fill="#FF6B00" fontSize="8" fontFamily="monospace" textAnchor="end" transform="rotate(-90 -8 145)">200mm</text>
            </svg>
          </div>

          {/* Back face */}
          <div style={{ transform: 'translateZ(-60px)' }} className="absolute inset-0">
            <svg width="200" height="280" viewBox="-10 -10 220 300">
              <path
                d="M0,0 L200,0 L200,25 L110,25 L110,255 L200,255 L200,280 L0,280 L0,255 L90,255 L90,25 L0,25 Z"
                fill="#404040"
                stroke="#808080"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Top flange side */}
          <div style={{
            transform: 'rotateX(90deg) translateZ(0px)',
            transformOrigin: 'center top',
            width: '200px',
            height: '120px',
            position: 'absolute',
            top: '0px',
            left: '0px',
          }}>
            <div className="w-full h-[25px] bg-concrete-500 border border-orange/40 relative">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,107,0,0.15) 8px, rgba(255,107,0,0.15) 9px)'
              }} />
            </div>
          </div>

          {/* Bottom flange side */}
          <div style={{
            transform: 'rotateX(-90deg) translateZ(0px)',
            transformOrigin: 'center bottom',
            width: '200px',
            height: '120px',
            position: 'absolute',
            bottom: '0px',
            left: '0px',
          }}>
            <div className="w-full h-[25px] bg-concrete-500 border border-orange/40 relative">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,107,0,0.15) 8px, rgba(255,107,0,0.15) 9px)'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating measurement annotations */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-orange/60 z-10"
      >
        Y-ROTATION: {rotation.toFixed(1)}°
      </motion.div>

      {/* Label overlay */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-concrete-400 z-10">
        <div>HEB 200 — STEEL I-BEAM</div>
        <div className="text-orange">DRAG TO ROTATE | {autoRotate ? 'AUTO-ROTATING' : 'MANUAL CONTROL'}</div>
      </div>

      {/* Auto-rotate toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setAutoRotate(!autoRotate);
        }}
        className="absolute bottom-4 right-4 font-mono text-[10px] text-concrete-400 border border-concrete-600 px-2 py-1 hover:border-orange hover:text-orange transition-colors z-10"
      >
        {autoRotate ? '⟲ AUTO' : '⟲ MANUAL'}
      </button>
    </div>
  );
}
