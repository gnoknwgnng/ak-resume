"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Associate Product Engineer (Intern)",
    company: "SreeVia AI Technologies Pvt Ltd",
    date: "Jan 2026 – Present",
    details: [
      "Working on product design and end-to-end feature implementations",
      "Collaborating with cross-functional agile teams",
      "Writing clean, maintainable, and highly optimized code",
      "Testing, debugging, and drastically improving product software quality",
      "Supporting releases and maintaining complex architecture documentation"
    ]
  },
  {
    role: "Product Developer Intern",
    company: "Zylense.ai",
    date: "May 2025 – Dec 2025",
    details: [
      "Enhanced core SaaS product features to significantly improve UX and performance",
      "Implemented comprehensive automation solutions resulting in a 20% efficiency increase",
      "Built and deployed high-complexity AI workflows using n8n",
      "Developed an AI-powered mass email automation system from scratch",
      "Supported executive client demos and technical proposal formations"
    ]
  },
  {
    role: "Intern",
    company: "Swecha",
    date: "May 2025 – Aug 2025",
    details: [
      "Led an extensive team of interns for various demanding client projects",
      "Built reliable AI workflows for daily productivity and communication",
      "Coordinated strategic planning, technical requirements gathering, and testing operations",
      "Organized and conducted critical project feature reviews"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-6 sm:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-sm font-semibold tracking-widest text-[#a855f7] uppercase mb-1">Career Path</p>
        <h2 className="text-4xl md:text-6xl font-black text-white">Experience.</h2>
      </motion.div>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-16 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#1e1e24] border-4 border-[#a855f7] group-hover:bg-[#a855f7] transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

            <div className="glass-panel p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300 hover:border-[#a855f7]/30 group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-sans text-white flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#00f2fe]" /> 
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-gray-400 mt-1">{exp.company}</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#00f2fe] bg-[#00f2fe]/10 px-4 py-2 rounded-full w-fit whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.details.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300 gap-3">
                    <span className="text-[#a855f7] flex-shrink-0 mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
