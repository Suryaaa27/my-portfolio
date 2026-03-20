import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Extra Curricular', id: 'extracurricular' },
    { name: 'Achievements', id: 'achievements' }
  ];

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          timeoutId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const activeLink = navLinks.find(link => link.id === id);
          if (activeLink) setActive(activeLink.name);
        }
      });
    };

    const observerOptions = { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    sections.forEach(el => observer.observe(el));

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) cancelAnimationFrame(timeoutId);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e, id, name) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(name);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 backdrop-blur-md bg-[#03060C]/90 border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, 'home', 'Home')} className="z-50 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-widest uppercase">
          Suryaa
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id, link.name)}
                className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 relative group font-medium ${
                  active === link.name ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-2 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    active === link.name ? 'w-full shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8 pointer-events-none text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#03060C]/40 backdrop-blur-2xl border-t border-b border-cyan-500/20 lg:hidden shadow-[0_30px_60px_rgba(6,182,212,0.15)]"
            >
              <ul className="flex flex-col items-center py-8 space-y-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleClick(e, link.id, link.name)}
                      className={`text-lg tracking-widest uppercase transition-all duration-300 font-medium px-6 py-2 rounded-full ${
                        active === link.name 
                          ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] bg-cyan-500/10 border border-cyan-500/30' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
