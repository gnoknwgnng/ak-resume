"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import Tilt from "react-parallax-tilt";

const achievements = [
  {
    title: "Winner – MSME Idea Hackathon (National Level)",
    description: "Achieved top honors by delivering an immensely innovative, highly actionable product solution that scales practically.",
    icon: <Trophy className="w-16 h-16 text-[#00f2fe]" />
  },
  {
    title: "₹15,00,000 Government Grant",
    description: "Secured extensive federal funding for an AI-powered sustainable alternative-to-wood manufacturing solution.",
    icon: <Award className="w-16 h-16 text-[#a855f7]" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full py-24 px-6 sm:px-16 max-w-7xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold tracking-widest text-[#a855f7] uppercase mb-1">Milestones</p>
        <h2 className="text-4xl md:text-6xl font-black text-white">Achievements.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.03}
              transitionSpeed={2000}
              gyroscope={true}
              className="h-full"
            >
              <div className="group glass-panel p-10 md:p-14 rounded-3xl text-center flex flex-col items-center justify-center border border-white/5 hover:border-[#00f2fe]/40 transition-all duration-500 overflow-hidden relative cursor-default h-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                {/* Glow blobs */}
                 <div className="absolute top-10 right-10 w-40 h-40 bg-[#00f2fe]/20 rounded-full blur-[80px] group-hover:bg-[#00f2fe]/40 transition-opacity duration-1000 -z-10 pointer-events-none" />
                 <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#a855f7]/20 rounded-full blur-[80px] group-hover:bg-[#a855f7]/40 transition-opacity duration-1000 -z-10 pointer-events-none" />

                <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 group-hover:border-[#00f2fe]/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_50px_rgba(0,242,254,0.4)] transition-all transform group-hover:scale-110 duration-500">
                   {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-[#00f2fe] group-hover:to-[#a855f7] transition-all duration-500 mb-6 drop-shadow-md">{item.title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg transition-colors group-hover:text-gray-200">{item.description}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
