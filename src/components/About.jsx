import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-wider uppercase">
          ABOUT ME
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative group p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300"
      >
        {/* Subtle inner animated gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

        <div className="text-base md:text-xl text-gray-300 leading-relaxed font-light text-center space-y-6">
          <p>
            I see the web as a canvas and code as my tool. As a Computer Science Engineering student and creative designer, I blend logic with aesthetics to build digital experiences that are both functional and impactful.
          </p>
          <p>
            With a foundation in data structures, problem-solving and software development, I don’t just design interfaces - I engineer them to perform efficiently and scale effectively. I believe great products aren’t just built, they are crafted - where clean code meets intuitive design.
          </p>
          <p>
            Whether it’s developing systems or designing user experiences, I focus on creating solutions that are seamless, engaging and meaningful.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
