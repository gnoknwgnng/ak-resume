"use client";

import { motion } from "framer-motion";

const roles = [
  "AI Product Developer",
  "AI Agent Developer",
  "GenAI Engineer",
  "AI Automation Engineer (n8n / workflows)",
  "LLM Application Developer",
  "Product Engineer (AI/ML)",
  "AI Solutions Developer",
  "Conversational AI Developer (Chatbots/Agents)",
  "AI SaaS Developer",
  "Automation & Integration Engineer (AI Tools + APIs)",
  "Prompt Engineer",
  "AI Workflow Engineer",
  "Full Stack AI Developer",
  "Applied AI Engineer",
  "AI Tooling Engineer"
];

const FinalSlide = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 sm:px-16 overflow-hidden">
      {/* Dynamic interactive background gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-tr from-[#00f2fe]/10 to-[#a855f7]/10 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16 relative z-10 w-full"
      >
        <motion.p 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs md:text-sm font-semibold tracking-widest text-[#00f2fe] uppercase mb-4 inline-block px-4 py-2 rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/10 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
        >
          Open to Work
        </motion.p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#00f2fe] drop-shadow-2xl mb-6 pb-2">
          Interested Roles
        </h2>
        <p className="mt-4 text-gray-300 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto text-base sm:text-xl md:text-2xl font-light leading-relaxed px-4 md:px-0">
          Actively seeking bold, high-impact opportunities where I can massively leverage AI, scale workflows, and engineering to build transformative intelligent products.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 max-w-7xl relative z-10 w-full">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -8, rotate: Math.random() > 0.5 ? 2 : -2 }}
            animate={{ y: [0, -5, 0] }}
            className="glass-panel px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full border border-white/10 glow-effect cursor-pointer transition-all duration-300 hover:border-[#a855f7]/80 hover:bg-[#a855f7]/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] backdrop-blur-xl group shadow-[0_4px_30px_rgba(0,0,0,0.3)] w-auto"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: '3s',
              animationIterationCount: 'infinite',
              animationName: 'float',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            <span className="text-xs sm:text-sm md:text-lg font-bold text-gray-200 group-hover:text-white transition-colors tracking-wide text-center">{role}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default FinalSlide;
