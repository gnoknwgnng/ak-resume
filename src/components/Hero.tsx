"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-center gap-8">
        {/* Animated tracking line */}
        <div className="flex flex-col justify-center items-center relative h-[60%]">
          <div className="w-6 h-6 rounded-full bg-[#00f2fe] border-4 border-[#0a0a0f] shadow-[0_0_20px_rgba(0,242,254,0.6)] z-10 animate-pulse" />
          <div className="w-1.5 h-full bg-gradient-to-b from-[#00f2fe] via-[#a855f7] to-transparent rounded-full shadow-[0_0_15px_rgba(0,242,254,0.4)]" />
        </div>

        <div className="z-10 mt-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-sm md:text-md uppercase tracking-[0.2em] font-bold text-[#a855f7] px-4 py-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 flex w-fit glow-effect">AI & Automation Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-[max(40px,5vw)] font-black leading-tight drop-shadow-2xl"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-white to-[#a855f7]">Somavarapu Akash</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 font-medium text-[max(20px,2vw)] mt-6 max-w-3xl leading-relaxed"
          >
            I relentlessly architect <span className="text-white font-extrabold border-b-2 border-[#00f2fe]">AI-driven solutions</span>, 
            powerful <span className="text-[#00f2fe] font-extrabold drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">workflow automations</span>, 
            and enterprise <span className="text-[#a855f7] font-extrabold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">digital products</span>.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="mt-12 max-w-lg flex items-center gap-6"
          >
             <a href="#about" className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all font-extrabold select-none group text-lg">
               Explore My Multiverse
               <MoveRight className="w-6 h-6 group-hover:translate-x-3 group-hover:scale-110 transition-transform duration-300" />
             </a>
             <a href="#contact" className="hidden sm:inline-flex items-center gap-3 glass-panel px-8 py-4 rounded-full hover:bg-white/10 hover:border-[#a855f7]/50 transition-all font-semibold select-none text-gray-300 hover:text-white text-lg border border-white/5">
               Get In Touch
             </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center pt-8 z-10">
        <a href="#about">
          <div className="w-[40px] h-[75px] rounded-full border-4 border-[#00f2fe]/50 flex justify-center items-start p-2 hover:border-[#00f2fe] transition-colors bg-[#050510]/50 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 28, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="w-4 h-4 rounded-full bg-[#00f2fe] mb-1 shadow-[0_0_15px_rgba(0,242,254,0.8)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
