import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Attendance Management System",
    date: "Feb 2026",
    techStack: ["Java Swing", "JDBC", "MySQL", "GUI"],
    description: [
      "Developed a GUI-based attendance system using Java Swing for user interaction and MySQL for robust data storage.",
      "Implemented CRUD operations using JDBC to securely manage student records and track attendance data.",
      "Designed highly relational database tables with proper primary and foreign keys, strictly ensuring data integrity.",
      "Automated attendance percentage calculations and integrated features to generate comprehensive, structured reports.",
    ],
  },
  {
    title: "Tours Travels Website",
    date: "Nov 2025",
    techStack: ["Responsive UI", "Routing", "Forms Validation"],
    description: [
      "Built a highly responsive travel booking platform featuring dynamic package displays and structured routing.",
      "Integrated complex interactive forms enriched with validation logic to guarantee accurate user input handling.",
      "Optimized overall layout and core UI components, significantly improving accessibility and driving a seamless user experience.",
    ],
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
          PROJECTS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative"
          >
            {/* Ambient Background Glow for Card */}
            <div className="absolute inset-0 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/20 group-hover:blur-2xl transition-all duration-500 rounded-3xl" />
            
            <div className="relative h-full bg-[#0a0f18]/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400 p-8 rounded-3xl shadow-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-300">
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm font-medium px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full border border-cyan-500/30 whitespace-nowrap ml-4">
                  {project.date}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-bold px-3 py-1 rounded-md bg-white/5 text-gray-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start text-gray-400 text-sm md:text-base leading-relaxed">
                    <span className="mr-3 text-cyan-500 mt-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </span>
                    <span className="group-hover:text-gray-200 transition-colors">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
