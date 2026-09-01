import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiC, SiCplusplus, SiMongodb, SiEclipseide, SiIntellijidea 
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaGithub, FaNetworkWired, FaPalette } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { DiDatabase } from 'react-icons/di';
import { X } from 'lucide-react';
import heroHand from '../assets/portfolio_hero_hand.png';

const skills = [
  { name: 'C', icon: SiC, color: '#A8B9CC', prof: 'Advanced', projects: '4 Projects' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', prof: 'Advanced', projects: '6 Projects' },
  { name: 'Java', icon: FaJava, color: '#5382A1', prof: 'Intermediate', projects: '3 Projects' },
  { name: 'SQL', icon: DiDatabase, color: '#E38C00', prof: 'Advanced', projects: '8 Projects' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', prof: 'Intermediate', projects: '2 Projects' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', prof: 'Advanced', projects: '15+ Repos' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff', prof: 'Advanced', projects: '15+ Repos' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', prof: 'Expert', projects: 'Daily Use' },
  { name: 'IntelliJ', icon: SiIntellijidea, color: '#ffffff', prof: 'Intermediate', projects: '3 Projects' },
  { name: 'Eclipse', icon: SiEclipseide, color: '#2C2255', prof: 'Basic', projects: '1 Project' },
  { name: 'Canva', icon: FaPalette, color: '#00C4CC', prof: 'Advanced', projects: 'UI Designs' },
  { name: 'DSA', icon: FaNetworkWired, color: '#06B6D4', prof: 'Intermediate', projects: '100+ Problems' },
];

export default function SkillOrbitSystem() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(250);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 140 : 280);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[800px] flex items-center justify-center overflow-hidden py-10">
      
      {/* Core Background Ambience */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Orbit System */}
      <div 
        className="relative flex items-center justify-center w-full h-full z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* The Central Hand */}
        <motion.div 
          className="absolute z-20 pointer-events-none"
          animate={{
            scale: [1, 1.02, 1],
            rotate: [-1, 1, -1],
            y: [-5, 5, -5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-[200px] md:w-[400px] flex items-center justify-center">
            {/* Holographic Ring on Palm (visible on hover) */}
            <AnimatePresence>
              {hoveredSkill !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotateX: 60 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 60, rotateZ: 360 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, rotateZ: { duration: 3, repeat: Infinity, ease: "linear" } }}
                  className="absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full border-2 border-cyan-400 border-dashed z-30"
                  style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
              )}
            </AnimatePresence>

            {/* Hand Image */}
            <img 
              src={heroHand} 
              alt="Holographic Interface Hand" 
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            />
          </div>
        </motion.div>

        {/* The Orbit Track */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          <div 
            className="rounded-full border border-cyan-500/10"
            style={{ width: radius * 2, height: radius * 2 }}
          />
        </div>

        {/* Orbiting Icons - Pause on hover doesn't work out of box for Framer Motion rotate without controls, so we'll just let it spin slowly or use a state-based animation if needed, but linear continuous is fine and looks better if it doesn't abruptly stop. We'll let it spin continuously. */}
        <motion.div 
          className="absolute flex items-center justify-center z-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ width: 1, height: 1 }}
        >
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;
            const isHovered = hoveredSkill === index;
            
            return (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  rotate: angle,
                  x: radius,
                }}
              >
                {/* Counter-rotation to keep icons upright */}
                <motion.div
                  className="relative cursor-pointer pointer-events-auto"
                  animate={{ rotate: -360 - angle }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.4 : 1,
                      y: isHovered ? [0, -10, 0] : [0, -5, 0],
                      boxShadow: isHovered ? `0 0 25px ${skill.color}80, inset 0 0 15px ${skill.color}40` : '0 0 10px rgba(34,211,238,0.1), inset 0 0 5px rgba(255,255,255,0.05)',
                    }}
                    transition={{
                      scale: { duration: 0.3, type: 'spring', stiffness: 300 },
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      boxShadow: { duration: 0.3 }
                    }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10"
                    style={{
                      borderColor: isHovered ? skill.color : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <skill.icon 
                      size={24} 
                      className="md:w-8 md:h-8"
                      color={isHovered ? skill.color : '#e2e8f0'}
                      style={{ transition: 'color 0.3s ease' }}
                    />
                    
                    {/* Hover particles simulation */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            boxShadow: `0 0 30px ${skill.color}, 0 0 60px ${skill.color}`,
                            filter: 'blur(10px)',
                            zIndex: -1
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Skill Popover Card */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute z-50 bottom-10 md:bottom-20 flex flex-col p-6 rounded-2xl bg-[#03060C]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] max-w-[300px] w-full mx-4"
          >
            <button 
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10"
                style={{ boxShadow: `0 0 15px ${selectedSkill.color}40` }}
              >
                <selectedSkill.icon size={28} color={selectedSkill.color} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">{selectedSkill.name}</h3>
                <div 
                  className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full inline-block mt-1"
                  style={{ backgroundColor: `${selectedSkill.color}20`, color: selectedSkill.color, border: `1px solid ${selectedSkill.color}40` }}
                >
                  {selectedSkill.prof}
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-3" />
            
            <div className="flex justify-between items-center text-gray-300 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                Projects & Experience
              </span>
              <span className="font-bold text-white">{selectedSkill.projects}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
