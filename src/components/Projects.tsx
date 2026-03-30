"use client";

import { motion } from "framer-motion";
import { Sparkles, LineChart, BrainCircuit } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Website Testing AI",
    description: "Performs SEO analysis and website performance checks dynamically.",
    icon: <LineChart className="w-10 h-10 text-[#00f2fe]" />,
    link: "https://ak1-test.netlify.app/"
  },
  {
    title: "AI LinkedIn Post Generator",
    description: "Automatically generates professional LinkedIn content using advanced LLM reasoning.",
    icon: <Sparkles className="w-10 h-10 text-[#a855f7]" />,
    link: "https://incraftai.netlify.app/"
  },
  {
    title: "Automatic Quiz Generator",
    description: "Generates interactive quizzes seamlessly from creative text prompts and PDFs.",
    icon: <BrainCircuit className="w-10 h-10 text-[#00f2fe]" />,
    link: "https://quiz-making-by-akdk.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-24 px-6 sm:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-semibold text-[#00f2fe] tracking-widest uppercase mb-1">My Work</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16">Projects.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              transitionSpeed={2500}
              scale={1.02}
              gyroscope={true}
              className="h-full"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="group relative p-8 md:p-10 rounded-3xl overflow-hidden glass-panel border border-white/5 hover:border-[#00f2fe]/40 transition-colors duration-500 ease-in-out cursor-pointer h-full flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)] no-underline"
              >
                {/* Background glowing blob effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2fe] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#a855f7] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 w-full transform translate-z-10 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:bg-[#00f2fe]/10 transition-colors shadow-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight group-hover:text-[#00f2fe] transition-colors drop-shadow-md">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">{project.description}</p>
                </div>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
