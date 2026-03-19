import { motion } from "framer-motion";

const educationData = [
  {
    year: "2023 - 2027",
    degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering (Third Year)",
    institution: "Rajarambapu Institute of Technology, Rajaramnagar",
    score: "CGPA: 8.50",
  },
  {
    year: "2022 - 2023",
    degree: "Higher Secondary Education (Science)",
    institution: "Swami Ramanand Bharti Vidyamandir, Tasgaon",
    score: "77.5%",
  },
  {
    year: "2020 - 2021",
    degree: "Secondary School Education",
    institution: "Mahathma Gandhi Vidyalay, Savalaj",
    score: "83.4%",
  },
];

export default function Education() {
  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
          EDUCATION
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="relative border-l border-cyan-500/30 ml-4 md:ml-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 ml-8 relative group"
          >
            {/* Timeline Node Glow */}
            <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#03060C] shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.9)] transition-all duration-300 z-10" />

            {/* Glowing connecting line on hover */}
            <div className="absolute -left-[32px] top-6 w-[2px] h-0 bg-cyan-400 group-hover:h-full transition-all duration-700 ease-out z-0" />

            <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
              {/* Subtle inner animated gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wide mb-4 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                {edu.year}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-gray-400 font-medium mb-3 md:text-lg">
                {edu.institution}
              </p>
              <div className="inline-flex items-center space-x-2 text-cyan-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
