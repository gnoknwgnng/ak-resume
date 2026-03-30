"use client";

import { motion } from "framer-motion";

const skills = {
  "Technical Skills": [
    "HTML", "CSS", "JavaScript", "React.js", "Next.js", 
    "AI & GenAI Tools", "AI Agent Development", "n8n (Workflow Automation)", 
    "API Integration", "Backend Basics", "Prompt Engineering", 
    "SaaS Product Development", "SEO & Optimization"
  ],
  "AI / Automation": [
    "AI Agent Design & Development", "LLM-based Generation", 
    "n8n Workflows", "AI Email Automation", "Chatbot Integration"
  ],
  "Core Skills": [
    "Project Management", "Teamwork", "Leadership", 
    "Time Management", "Communication", "Critical Thinking"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-6 sm:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-sm font-semibold text-[#00f2fe] tracking-widest uppercase mb-1">Expertise Domain</p>
        <h2 className="text-4xl md:text-6xl font-black text-white">Skills.</h2>
      </motion.div>

      <div className="flex flex-col gap-16">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="flex flex-col relative group z-10">
            {/* Background glowing blob */}
            <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 bg-[#00f2fe]/5 rounded-full filter blur-[100px] pointer-events-none group-hover:bg-[#a855f7]/10 transition-colors duration-1000 -z-10" />
            
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#a855f7] mb-8 w-fit">{category}</h3>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              {items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="glass-panel px-6 py-4 rounded-full border border-white/5 text-gray-300 font-medium cursor-default hover:border-[#00f2fe]/40 hover:bg-[#00f2fe]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300 text-sm md:text-base relative overflow-hidden"
                >
                   <span className="relative z-10">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
