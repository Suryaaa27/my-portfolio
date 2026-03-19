import { motion } from "framer-motion";

const achievementsData = [
  "Solved 180+ DSA problems on GeeksforGeeks, demonstrating problem-solving proficiency.",
  "Winner of 'Hire Me' at Dr. Daulatrao Aher College of Engineering, Karad.",
  "Winner of 'Quiz Competition' at Rajarambapu Institute of Technology, Rajaramnagar.",
  "Runner Up of 'Mock Placement' at Walchand College of Engineering, Sangli.",
  "Runner Up of 'Job Quest' at Rajarambapu Institute of Technology, Rajaramnagar.",
];

const certificationsData = [
  {
    title: "10-Week Android Developer Virtual Internship",
    issuer: "AICTE, EduSkills and Google for Developers",
    date: "Jun 2025",
  },
  {
    title: "12-week NPTEL Online Certification in Fundamentals of Artificial Intelligence",
    issuer: "NPTEL",
    date: "Jul–Oct 2024",
  },
];

export default function Achievements() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      
      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
          CERTIFICATIONS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#0a0f18] border border-cyan-500/20 p-8 rounded-2xl hover:bg-cyan-900/10 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-400/20 transition-all duration-500" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors z-10 relative">
              {cert.title}
            </h3>
            <p className="text-gray-400 font-medium mb-4 relative z-10">{cert.issuer}</p>
            <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-lg border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
              {cert.date}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
          ACHIEVEMENTS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 flex items-start space-x-4 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          >
            <div className="mt-1 flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-xl font-bold group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                ✦
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
