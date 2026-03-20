import { motion } from "framer-motion";

const extracurricularData = [
  {
    role: "Event Manager",
    organization: "Oyster Kode Club, RIT",
    details: [
      "Contributing to event organization, mentoring, and conducting technical and non-technical sessions.",
      "Supported the design team in creating promotional materials and organizing club activities.",
      "Organized Flagship Event Code 404 in collaboration with CodeChef for the first time (Created 500+ impressions).",
    ],
    accentColor: "from-cyan-500 to-blue-500",
    logo: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    role: "Presenter",
    organization: "Domainophile Workshop",
    details: [
      "Delivered a technical presentation on Blockchain Fundamentals to 120+ students.",
      "Explained core blockchain concepts including decentralization, smart contracts, and real-world applications.",
    ],
    accentColor: "from-cyan-500 to-blue-500",
    logo: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    role: "Presenter",
    organization: "C-Marathon Workshop",
    details: [
      "Conducted a hands-on workshop on Conditional Statements in C attended by 160+ students.",
      "Simplified core programming concepts through live coding demonstrations and interactive problem-solving.",
    ],
    accentColor: "from-cyan-500 to-blue-500",
    logo: (
      <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
];

export default function ExtraCurricular() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider">
          LEADERSHIP & ENGAGEMENT
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="space-y-12">
        {extracurricularData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? "md:flex-row-reverse text-left" : "text-left"
            }`}
          >
            {/* The Text Block */}
            <div className="flex-1 w-full bg-[#0a0f18]/60 backdrop-blur-md border border-cyan-500/10 p-8 rounded-3xl hover:border-cyan-400/30 hover:bg-[#0a0f18]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${item.accentColor} text-white text-sm font-bold shadow-lg`}>
                  {item.role}
                </div>
                <div className="p-2 bg-white/5 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                  {item.logo}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors text-left">
                {item.organization}
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm md:text-base text-left">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start flex-row">
                    <span className="text-cyan-500 mt-1 flex-shrink-0 mr-3">
                      ●
                    </span>
                    <span className="leading-relaxed group-hover:text-gray-200 transition-colors">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Visual Divider (Decorative) */}
            <div className="hidden md:flex flex-col items-center justify-center relative w-12 h-full">
              <div className={`w-1 h-32 bg-gradient-to-b ${item.accentColor} rounded-full absolute top-1/2 -translate-y-1/2 opacity-20`} />
              <div className="w-8 h-8 rounded-full bg-[#03060C] border-2 border-cyan-400 z-10 flex items-center justify-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
