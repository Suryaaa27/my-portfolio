import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TEXT_SKILLS = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java (OOP)", "SQL"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB (CRUD)"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Object Oriented Programming"]
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Git", "GitHub", "IntelliJ IDEA", "Eclipse", "Canva", "Antigravity"]
  },
  {
    title: "Soft Skills",
    skills: ["Public Speaking", "Leadership", "Team Work", "Problem Solving"]
  }
];

const SKILLS = [
  { id: "c", label: "C", level: "Proficient", customId: "c", ring: 0 },
  { id: "cpp", label: "C++", level: "Proficient", customId: "cpp", ring: 0 },
  { id: "java", label: "Java", level: "Advanced", customId: "java", ring: 0 },
  { id: "sql", label: "SQL", level: "Advanced", customId: "sql", ring: 0 },
  { id: "mysql", label: "MySQL", level: "Advanced", customId: "mysql", ring: 1 },
  { id: "mongo", label: "MongoDB", level: "Intermediate", customId: "mongodb", ring: 1 },
  { id: "dsa", label: "DSA", level: "Advanced", customId: "dsa", ring: 1 },
  { id: "git", label: "Git", level: "Advanced", customId: "git", ring: 0 },
  { id: "github", label: "GitHub", level: "Advanced", customId: "github", ring: 2 },
  { id: "vscode", label: "VS Code", level: "Daily driver", customId: "vscode", ring: 2 },
  { id: "intellij", label: "IntelliJ IDEA", level: "Proficient", customId: "intellij", ring: 2 },
  { id: "antigravity", label: "Antigravity", level: "Exploring", customId: "antigravity", ring: 1 },
  { id: "eclipse", label: "Eclipse", level: "Familiar", customId: "eclipse", ring: 2 },
  { id: "canva", label: "Canva", level: "Proficient", customId: "canva", ring: 0 },
];

const RINGS = [
  { radius: 120, duration: 30, tilt: 0 },
  { radius: 180, duration: 42, tilt: 10 },
  { radius: 240, duration: 54, tilt: -8 },
];

const RING_COLORS = ["#5FE8FF", "#3FD8F0", "#9FF3FF"];

function CustomGlyph({ id, size = 30 }) {
  if (id === "c") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#044F88" />
        <path d="M26 14 C22 10 15 11 13 16 C11 21 13 27 18 28.5 C22 29.5 25.5 27.5 27 24"
          fill="none" stroke="#A8D6FF" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "cpp") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#00599C" />
        <path d="M23 14 C19 10 12 11 10 16 C8 21 10 27 15 28.5 C19 29.5 22.5 27.5 24 24"
          fill="none" stroke="#A8D6FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M27 16 V22 M24 19 H30" stroke="#A8D6FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M33 16 V22 M30 19 H36" stroke="#A8D6FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "java") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#5382A1" />
        <path d="M13 21 C13 25 16 28 20 28 C24 28 27 25 27 21 V15 C25 17 15 17 13 15 Z"
          fill="#F58219" opacity="0.95" />
        <path d="M13 21 C13 25 16 28 20 28 C24 28 27 25 27 21"
          fill="none" stroke="#E8EFF5" strokeWidth="1.6" />
        <path d="M16 12 C18 10 22 10 24 12" fill="none" stroke="#F58219" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "sql") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0B5A8A" />
        <ellipse cx="20" cy="13" rx="12" ry="5" fill="none" stroke="#8FE8FF" strokeWidth="2" />
        <path d="M8 13 V26 C8 28.8 13.4 31 20 31 C26.6 31 32 28.8 32 26 V13" fill="none" stroke="#8FE8FF" strokeWidth="2" />
        <path d="M8 19.5 C8 22.3 13.4 24.5 20 24.5 C26.6 24.5 32 22.3 32 19.5" fill="none" stroke="#5FC9E0" strokeWidth="2" opacity="0.85" />
      </svg>
    );
  }
  if (id === "mysql") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#00618A" />
        <path d="M9 27 C9 20 12 14 16 10 C15 15 15 20 17 25 C19 22 20 18 20 14 C22 18 23 23 21 27"
          fill="none" stroke="#F2A93B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 27 C24 24 27 22 30 22 C29 25 26 27 22 27 Z" fill="#F2A93B" />
      </svg>
    );
  }
  if (id === "mongodb") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0E2A1E" />
        <path d="M20 6 C26 12 27 19 20 32 C13 19 14 12 20 6 Z" fill="#4FA94A" />
        <path d="M20 6 C26 12 27 19 20 32" fill="none" stroke="#7DD87A" strokeWidth="1.4" opacity="0.7" />
        <line x1="20" y1="27" x2="20" y2="35" stroke="#7DD87A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "dsa") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#2A1B4D" />
        <circle cx="20" cy="10" r="4.5" fill="none" stroke="#B79CFF" strokeWidth="2" />
        <circle cx="10" cy="29" r="4.5" fill="none" stroke="#B79CFF" strokeWidth="2" />
        <circle cx="30" cy="29" r="4.5" fill="none" stroke="#B79CFF" strokeWidth="2" />
        <path d="M17.5 13.5 L12 25 M22.5 13.5 L28 25 M14.5 29 H25.5" stroke="#8B6CFF" strokeWidth="1.8" />
      </svg>
    );
  }
  if (id === "git") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#2B0F08" />
        <circle cx="12" cy="28" r="3.4" fill="none" stroke="#F34F29" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="#F34F29" strokeWidth="2" />
        <circle cx="26" cy="20" r="3.4" fill="none" stroke="#F34F29" strokeWidth="2" />
        <path d="M12 15.4 V24.6 M15.2 20 H22.6 M12 12 C18 12 22.6 14 22.6 17" fill="none" stroke="#F34F29" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "github") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#161B22" />
        <path d="M20 8 C13.4 8 8 13.4 8 20 C8 25.3 11.4 29.7 16.1 31.3 C16.7 31.4 16.9 31 16.9 30.7 C16.9 30.4 16.9 29.6 16.9 28.5 C13.7 29.2 13 27 13 27 C12.5 25.7 11.7 25.3 11.7 25.3 C10.6 24.6 11.8 24.6 11.8 24.6 C13 24.7 13.7 25.8 13.7 25.8 C14.8 27.6 16.5 27.1 17.2 26.8 C17.3 26 17.6 25.5 18 25.2 C15.5 24.9 12.9 24 12.9 19.6 C12.9 18.4 13.3 17.4 14 16.6 C13.9 16.3 13.5 15.1 14.1 13.5 C14.1 13.5 15.1 13.2 16.9 14.4 C17.7 14.2 18.5 14.1 19.3 14.1 C20.1 14.1 20.9 14.2 21.7 14.4 C23.5 13.2 24.5 13.5 24.5 13.5 C25.1 15.1 24.7 16.3 24.6 16.6 C25.3 17.4 25.7 18.4 25.7 19.6 C25.7 24 23.1 24.9 20.6 25.2 C21 25.6 21.4 26.3 21.4 27.4 C21.4 29 21.4 30.2 21.4 30.7 C21.4 31 21.6 31.4 22.2 31.3 C26.9 29.7 30.3 25.3 30.3 20 C30 13.4 25.6 8 20 8 Z"
          fill="#E8EFF5" />
      </svg>
    );
  }
  if (id === "vscode") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0A2A43" />
        <path d="M28 8 L14 20 L28 32 L31 30 L20 20 L31 10 Z" fill="#3FA8F4" />
        <path d="M28 8 L10 17 L10 23 L28 32 V27 L16 20 L28 13 Z" fill="#2C9DE8" opacity="0.9" />
      </svg>
    );
  }
  if (id === "intellij") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <defs>
          <linearGradient id="ideaG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FE315D" />
            <stop offset="50%" stopColor="#F97A12" />
            <stop offset="100%" stopColor="#FCB915" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="url(#ideaG)" />
        <rect x="10" y="10" width="20" height="20" rx="2" fill="none" stroke="#1B1B1B" strokeWidth="1.6" opacity="0.55" />
        <text x="20" y="26" fontSize="16" fontWeight="700" fill="#1B1B1B" textAnchor="middle" fontFamily="Georgia, serif">IJ</text>
      </svg>
    );
  }
  if (id === "eclipse") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#1C1C1C" />
        <circle cx="20" cy="20" r="11" fill="none" stroke="#8560D6" strokeWidth="2.4" strokeDasharray="10 6" />
        <path d="M14 14 C18 10 26 12 27 18 C28 24 22 29 16 27" fill="none" stroke="#A98CE8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "canva") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <defs>
          <linearGradient id="canvaG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="55%" stopColor="#7D2AE8" />
            <stop offset="100%" stopColor="#FF5CA8" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#canvaG)" />
        <path d="M13 24 C13 17 18 13 24 15 C21 16 19 19 19 22 C19 26 22 27 25 25.5 C24.5 27.5 22 29 19.5 29 C16 29 13 27 13 24 Z" fill="#fff" />
      </svg>
    );
  }
  if (id === "antigravity") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40">
        <defs>
          <linearGradient id="agG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7BFBFF" />
            <stop offset="100%" stopColor="#4285F4" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="#0B1B2E" />
        <path d="M20 8 L26 20 L20 32 L14 20 Z" fill="none" stroke="url(#agG)" strokeWidth="2.2" strokeLinejoin="round" />
        <ellipse cx="20" cy="20" rx="13" ry="5.5" fill="none" stroke="#4FD9FF" strokeWidth="1.4" opacity="0.75" />
        <circle cx="20" cy="14" r="2.2" fill="#EAFFFF" />
      </svg>
    );
  }
  return null;
}

function useAngles(count, duration, paused) {
  const [angle, setAngle] = useState(0);
  const rafRef = useRef();
  const lastTimeRef = useRef(performance.now());
  const elapsedRef = useRef(0);

  useEffect(() => {
    lastTimeRef.current = performance.now();
    if (paused) {
      return;
    }
    const tick = (now) => {
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;
      elapsedRef.current += delta;
      
      setAngle((elapsedRef.current / (duration * 1000)) * 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, duration]);

  return angle;
}

function SkillNode({ skill, index, total, radius, tilt, baseAngle, hoveredId, setHoveredId }) {
  const isHovered = hoveredId === skill.id;
  const isDimmed = hoveredId && !isHovered;
  const offset = (360 / total) * index;
  const angle = baseAngle + offset;
  const rad = (angle * Math.PI) / 180;

  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius * 0.55 + tilt;
  const floatPhase = index * 0.7;

  const depth = Math.sin(rad);
  const isBehindCore = depth < 0;
  const depthScale = 0.86 + ((depth + 1) / 2) * 0.26;
  const depthOpacity = isBehindCore ? 0.5 : 1;
  const nodeZIndex = isHovered ? 100 : isBehindCore ? 3 : 20;

  const chipRef = useRef(null);
  const [tiltVal, setTiltVal] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const handleChipMove = (e) => {
    const rect = chipRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltVal({
      rx: -relY * 34,
      ry: relX * 34,
      gx: (relX + 0.5) * 100,
      gy: (relY + 0.5) * 100,
    });
  };
  const resetTilt = () => setTiltVal({ rx: 0, ry: 0, gx: 50, gy: 50 });

  return (
    <div
      className="skill-node"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`,
        zIndex: nodeZIndex,
        perspective: 500,
      }}
      onMouseEnter={() => setHoveredId(skill.id)}
      onMouseLeave={() => {
        setHoveredId(null);
        resetTilt();
      }}
    >
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatPhase,
        }}
      >
        <motion.div
          ref={chipRef}
          className="skill-chip"
          onMouseMove={handleChipMove}
          animate={{
            scale: isHovered ? 1.4 : depthScale,
            opacity: isHovered ? 1 : isDimmed ? 0.3 : depthOpacity,
            rotateX: isHovered ? tiltVal.rx : 0,
            rotateY: isHovered ? tiltVal.ry : 0,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transformStyle: "preserve-3d",
            background: isHovered
              ? "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), rgba(6,20,32,0.92))"
              : "rgba(10,22,34,0.78)",
            border: isHovered ? "1.5px solid rgba(34,211,238,0.95)" : "1px solid rgba(94,234,255,0.2)",
            boxShadow: isHovered
              ? "0 22px 34px -8px rgba(0,0,0,0.55), 0 0 34px 6px rgba(34,211,238,0.6), inset 0 0 16px rgba(34,211,238,0.35)"
              : "0 10px 18px -6px rgba(0,0,0,0.4), 0 0 16px rgba(34,211,238,0.1)",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              transform: "translateZ(14px)",
              filter: isHovered ? "drop-shadow(0 6px 10px rgba(0,0,0,0.5))" : "none",
            }}
          >
            <CustomGlyph id={skill.customId} size={28} />
          </div>

          {isHovered && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: `radial-gradient(circle at ${tiltVal.gx}% ${tiltVal.gy}%, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)`,
                pointerEvents: "none",
                transform: "translateZ(20px)",
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

function OrbitRing({ ring, skills, hoveredId, setHoveredId, color }) {
  const anyHoveredInRing = skills.some((s) => s.id === hoveredId);
  const angle = useAngles(skills.length, ring.duration, anyHoveredInRing);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: ring.radius * 2,
          height: ring.radius * 2 * 0.55,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: `1px solid ${color}33`,
          pointerEvents: "none",
          boxShadow: `0 0 15px ${color}15, inset 0 0 15px ${color}15`,
        }}
      />
      {skills.map((skill, i) => (
        <SkillNode
          key={skill.id}
          skill={skill}
          index={i}
          total={skills.length}
          radius={ring.radius}
          tilt={ring.tilt}
          baseAngle={angle}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </>
  );
}

function ArcHUD({ hoveredSkill, size = 160 }) {
  const r = size / 2 - 6;
  const c = size / 2;
  const ticks = Array.from({ length: 48 });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: size,
        height: size,
        zIndex: 6,
        pointerEvents: "none",
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={c} cy={c} r={r} fill="none" stroke="rgba(94,234,255,0.15)" strokeWidth="1.5" />

        {ticks.map((_, i) => {
          const a = (i / ticks.length) * 360;
          const rad = (a * Math.PI) / 180;
          const inner = r - 6;
          const outer = r;
          const x1 = c + Math.cos(rad) * inner;
          const y1 = c + Math.sin(rad) * inner;
          const x2 = c + Math.cos(rad) * outer;
          const y2 = c + Math.sin(rad) * outer;
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={hoveredSkill ? "#7BFBFF" : "#3FA8C0"}
              strokeWidth={i % 6 === 0 ? 2 : 1}
              opacity={hoveredSkill ? 0.85 : 0.4}
            />
          );
        })}

        {hoveredSkill && (
          <circle
            cx={c} cy={c} r={r}
            fill="none"
            stroke="#7BFBFF"
            strokeWidth="3"
            strokeDasharray={`${Math.PI * 2 * r * 0.22} ${Math.PI * 2 * r}`}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(123,251,255,0.8))" }}
          />
        )}
      </svg>
    </div>
  );
}

function HoloCore({ pointer }) {
  const driftX = pointer.x * 8;
  const driftY = pointer.y * 6;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          width: 120,
          height: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
        animate={{ x: driftX, y: driftY }}
        transition={{ type: "spring", stiffness: 50, damping: 16 }}
      >
        <motion.div
          animate={{ opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 10,
            background: "radial-gradient(circle, rgba(94,234,255,0.28) 0%, rgba(94,234,255,0) 68%)",
            pointerEvents: "none",
          }}
        />

        <svg width="50" height="50" viewBox="0 0 76 76">
          <defs>
            <linearGradient id="bracketG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EAFFFF" />
              <stop offset="100%" stopColor="#5FE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M29 16 L12 38 L29 60 M47 16 L64 38 L47 60 M41 14 L35 62"
            fill="none"
            stroke="url(#bracketG)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 5px rgba(127,251,255,0.55))" }}
          />
        </svg>

        <div
          style={{
            fontSize: 10,
            letterSpacing: 2,
            fontWeight: 700,
            color: "#8FD9E8",
          }}
        >
          SKILLS
        </div>
      </motion.div>
    </div>
  );
}

export default function SkillsOrbit() {
  const [hoveredId, setHoveredId] = useState(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const grouped = useMemo(() => RINGS.map((_, i) => SKILLS.filter((s) => s.ring === i)), []);
  const hoveredSkill = useMemo(() => SKILLS.find((s) => s.id === hoveredId) || null, [hoveredId]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x: x * 2, y: y * 2 });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "64px 20px 48px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(94,234,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,255,0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 10%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider uppercase">
          Skills & Expertise
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="flex flex-col xl:flex-row w-full max-w-7xl mx-auto items-center justify-between z-10 gap-12 xl:gap-8 mt-4">
        
        <div className="flex-1 w-full relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {TEXT_SKILLS.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/20 group-hover:blur-2xl transition-all duration-500 rounded-3xl" />
                <div className="relative h-full bg-[#0a0f18]/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 rounded-md bg-white/5 text-gray-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-200 transition-colors border border-transparent group-hover:border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full xl:w-auto relative z-10">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setPointer({ x: 0, y: 0 })}
            style={{
              position: "relative",
              width: 500,
              height: 500,
              maxWidth: "100%",
            }}
            className="flex items-center justify-center"
          >
            <HoloCore pointer={pointer} />
            <ArcHUD hoveredSkill={hoveredSkill} size={160} />
            {grouped.map((skills, i) => (
              <OrbitRing
                key={i}
                ring={RINGS[i]}
                skills={skills}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                color={RING_COLORS[i]}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", minHeight: "40px", marginTop: "10px", position: "relative", zIndex: 10 }}>
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.15 }}
                >
                  <div style={{ color: "#EAFFFF", fontSize: 16, fontWeight: 700, letterSpacing: 0.5 }}>
                    {hoveredSkill.label}
                  </div>
                  <div style={{ color: "#6FD8E8", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>
                    {hoveredSkill.level}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div style={{ color: "#3FB8D6", fontSize: 12, letterSpacing: 3 }}>
                    {SKILLS.length} SKILLS ONLINE
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p style={{ color: "#4C7484", fontSize: 12, marginTop: 4, position: "relative", zIndex: 10, textAlign: "center" }}>
            Hover a skill to pause orbit · move cursor to shift core
          </p>
        </div>

      </div>
    </div>
  );
}
