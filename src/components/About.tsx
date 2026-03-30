"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Settings, LayoutTemplate } from "lucide-react";

const aboutCards = [
  {
    title: "AI Product Development",
    icon: <Cpu className="w-12 h-12" />,
    desc: "Building intelligent scalable SaaS applications from architecture to deployment."
  },
  {
    title: "Workflow Automation",
    icon: <Settings className="w-12 h-12" />,
    desc: "Accelerating efficiency dramatically using complex chained tools like n8n."
  },
  {
    title: "LLM Applications",
    icon: <Zap className="w-12 h-12" />,
    desc: "Seamlessly integrating GenAI, reasoning agents, and custom enterprise chatbots."
  },
  {
    title: "Performant UIs",
    icon: <LayoutTemplate className="w-12 h-12" />,
    desc: "Creating smooth, responsive, beautifully dynamic Next.js/React web apps."
  }
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 sm:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-sm font-semibold text-[#00f2fe] tracking-widest uppercase mb-1">Introduction</p>
        <h2 className="text-4xl md:text-6xl font-black text-white">Overview.</h2>
      </motion.div>
      
      <motion.div 
         initial={{ opacity: 0 }} 
         whileInView={{ opacity: 1 }} 
         transition={{ duration: 1 }} 
         viewport={{ once: true }}
         className="glass-panel p-8 md:p-12 rounded-3xl mb-20 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.05)] border-t border-l border-white/10 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00f2fe]/20 to-[#a855f7]/20 blur-[100px] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-1000" />
        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed relative z-10 font-light">
          <span className="font-semibold text-white">Creative Professional</span> skilled in pure React, Next.js, and cutting-edge web technologies. Absolutely passionate about rapidly building responsive, intensely scalable web apps that boast intuitive UI, brilliant smart automation, and deeply integrated AI-driven logic. Focused strictly on immaculate code, relentless performance optimization, and shipping highly impactful digital products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -12 }}
            className="group glass-panel p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:border-[#00f2fe]/50 border border-white/5"
          >
            <div className="absolute -inset-[50%] bg-[linear-gradient(45deg,transparent,rgba(0,242,254,0.1),transparent)] group-hover:animate-shimmer rotate-45" />

            <div className="text-[#00f2fe] p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 group-hover:text-white group-hover:bg-[#00f2fe]/20 transition-all duration-300 z-10 shadow-lg">
              {card.icon}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 tracking-wide">{card.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
