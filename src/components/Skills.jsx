import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Java (OOP)", "SQL"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB (CRUD)"],
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Object Oriented Programming"],
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "GitHub", "Canva"],
  },
  {
    category: "Soft Skills",
    skills: ["Public Speaking", "Leadership", "Team Work", "Problem Solving"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
          SKILLS & EXPERTISE
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative bg-[#060B14] rounded-2xl p-6 border border-cyan-500/10 overflow-hidden hover:border-cyan-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500"
          >
            {/* Top glowing line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors tracking-wide">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-4 py-2 bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-white rounded-xl text-sm font-medium border border-white/5 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Background gentle glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-600/10 blur-[40px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
