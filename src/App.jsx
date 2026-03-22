import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useMemo } from "react";
import backgroundImage from "./assets/profile.png";

// Import resume sections
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExtraCurricular from "./components/ExtraCurricular";
import Achievements from "./components/Achievements";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";

const getImageVariants = (isMobile) => ({
  initial: { width: "100%", x: "0%", scale: 1.5, y: "15vh", opacity: 0 },
  phase1: { width: "100%", x: "0%", scale: 1.4, y: "10vh", opacity: 0.25, transition: { duration: 2, ease: [0.4, 0, 0.2, 1], opacity: { delay: 0.7, duration: 1.4 } } },
  phase23: { width: isMobile ? "100%" : "55%", x: "0%", scale: 1.5, y: isMobile ? "5vh" : "12vh", opacity: isMobile ? 0.35 : 0.7, transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] } }
});

const getTextWrapperVariants = (isMobile) => ({
  phase1: { width: "100%", transition: { duration: 2, ease: [0.4, 0, 0.2, 1] } },
  phase23: { width: isMobile ? "100%" : "55%", transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] } }
});

const getTitleYVariants = (isMobile) => ({
  phase1: { y: 0, scale: isMobile ? 0.85 : 1, transition: { duration: 2, ease: [0.4, 0, 0.2, 1] } },
  phase23: { y: isMobile ? -180 : -140, scale: isMobile ? 0.6 : 0.85, transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] } }
});

function App() {
  const [phase, setPhase] = useState("phase1");
  // Use stacked layout (isMobile) if screen is narrow *or* if it is in portrait orientation
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768 || window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768 || window.innerHeight > window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      if (!isCancelled) setPhase("phase2");
    };
    sequence();
    
    return () => { isCancelled = true; };
  }, []);

  const IMAGE_VARIANTS = useMemo(() => getImageVariants(isMobile), [isMobile]);
  const TEXT_WRAPPER_VARIANTS = useMemo(() => getTextWrapperVariants(isMobile), [isMobile]);
  const TITLE_Y_VARIANTS = useMemo(() => getTitleYVariants(isMobile), [isMobile]);

  const currentVariant = phase === "phase1" ? "phase1" : "phase23";

  return (
    <div className="bg-[#03060C] font-sans text-white min-h-screen w-full relative overflow-x-hidden">
      <Navbar />
      
      {/* Interactive Ambient Particles (Whole Site) */}
      <ParticleBackground />

      {/* ----------------- HERO INTRO SECTION (100vh) ----------------- */}
      <div id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Ambient Glows Optimized for Mobile */}
        <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-600 opacity-10 md:opacity-[0.12] blur-xl md:blur-3xl rounded-full top-[5%] md:top-[10%] right-[2%] md:right-[5%] z-0 pointer-events-none transform-gpu will-change-transform" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff_1px,transparent_1px),linear-gradient(to_bottom,#0ff_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.03] z-0 pointer-events-none transform-gpu will-change-transform" />

        {/* ----------- THE CINEMATIC IMAGE (Moves Left, Extracted Look) ----------- */}
        <motion.img
          src={backgroundImage}
          alt="Cinematic Background"
          className="absolute top-0 bottom-0 left-0 object-cover brightness-100 contrast-110 transform-gpu"
          variants={IMAGE_VARIANTS}
          initial="initial"
          animate={currentVariant}
          style={{
            zIndex: 1,
            objectPosition: "center top",
            WebkitMaskImage: isMobile 
              ? "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)" 
              : "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskComposite: isMobile ? "source-over" : "source-in",
            maskImage: isMobile 
              ? "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)" 
              : "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            maskComposite: isMobile ? "add" : "intersect"
          }}
        />

        {/* ----------- THE PERSISTENT TEXT CONTAINER (Moves Right) ----------- */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 z-30 flex items-center justify-center px-4 md:px-12 pointer-events-auto overflow-hidden"
          initial={false}
          variants={TEXT_WRAPPER_VARIANTS}
          animate={currentVariant}
        >
          <div className="relative w-full h-full flex items-center justify-center max-w-4xl">

            {/* Section 1: Title (Perfectly centered in phase 1, moves up smoothly in phase 2/3) */}
            <motion.div
              className="absolute flex flex-col items-center text-center w-full"
              initial={false}
              variants={TITLE_Y_VARIANTS}
              animate={currentVariant}
            >
              <motion.p
                className="text-cyan-400 font-light mb-2 lg:mb-4 tracking-[0.15em] md:tracking-[0.4em] uppercase text-[10px] md:text-xl px-4 whitespace-normal md:whitespace-nowrap leading-relaxed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                WELCOME TO THE WORLD OF DESIGNER
              </motion.p>

              <motion.h1
                className={`flex w-full items-center justify-center ${phase === 'phase1' ? 'flex-col md:flex-row gap-0 md:gap-6' : 'flex-col gap-0 md:gap-2'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                layout
              >
                <motion.span
                  layout
                  transition={currentVariant === "phase1" ? IMAGE_VARIANTS.phase1.transition : IMAGE_VARIANTS.phase23.transition}
                  className="font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
                >
                  HII, I'M
                </motion.span>
                <motion.span
                  layout
                  transition={currentVariant === "phase1" ? IMAGE_VARIANTS.phase1.transition : IMAGE_VARIANTS.phase23.transition}
                  className="font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
                >
                  SURYAA
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Section 2 & 3: Flowing Dynamic Content Container */}
            <AnimatePresence mode="wait">
              {/* Phase 2: Main Portfolio Content */}
              {phase === "phase2" && (
                <motion.div
                  key="main-section"
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 90 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute w-full flex flex-col items-center justify-start pointer-events-auto px-4"
                >
                  <div className="h-[60px] mb-8 w-full text-center">
                    <TypeAnimation
                      sequence={[
                        "Designer", 2000,
                        "Frontend Developer", 2000,
                        "Gamer", 2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="font-bold text-cyan-400 text-3xl md:text-5xl tracking-widest inline-block drop-shadow-lg"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full z-10 relative">
                    <motion.a
                      href="https://www.linkedin.com/in/suryakant-koli-0542632bb/"
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-md text-cyan-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-white/10 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:text-cyan-200 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      LET'S CONNECT
                    </motion.a>

                    <motion.a
                      href="/resume.pdf"
                      download="Suryaa_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-md text-cyan-300 text-sm md:text-base font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400/20 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:text-white transition-all duration-300 text-center flex items-center justify-center"
                    >
                      DOWNLOAD RESUME
                    </motion.a>
                  </div>

                  {/* Scroll Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-12 flex flex-col items-center justify-center animate-bounce text-cyan-500/50"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] mb-2 font-bold">Scroll Down</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>

      {/* ----------------- RESUME CONTENT SECTIONS (Scrollable Below Hero) ----------------- */}
      <div className="relative z-20 bg-transparent w-full">
          {/* Subtle separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          <section id="about"><About /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="extracurricular"><ExtraCurricular /></section>
          <section id="achievements"><Achievements /></section>

          {/* Footer */}
          <footer className="w-full flex flex-col items-center justify-center py-12 text-gray-500 text-sm mt-32 border-t border-cyan-900/30 bg-[#020408]/80 backdrop-blur-md">
            <p className="mb-2">© 2026 Suryakant Bajarang Koli. All rights reserved.</p>
            <div className="flex space-x-6 mt-4">
              <a href="https://github.com/Suryaaa27" target="_blank" className="hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/suryakant-koli-0542632bb/" target="_blank" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="mailto:suryaaa0809@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
            </div>
          </footer>
        </div>

    </div>
  );
}

export default App;