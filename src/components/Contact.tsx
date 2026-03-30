"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-24 px-6 sm:px-16 max-w-7xl mx-auto z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold tracking-widest text-[#a855f7] uppercase mb-1">Get In Touch</p>
        <h2 className="text-4xl md:text-6xl font-black text-white">Contact.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl"
      >
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-[#00f2fe]/50 border border-white/5 transition-all hover:-translate-y-2 group bg-gradient-to-br from-white/[0.02] to-transparent text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="bg-[#00f2fe]/10 p-5 rounded-full group-hover:bg-[#00f2fe]/20 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <MapPin className="text-[#00f2fe] w-8 h-8 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Location</h4>
            <p className="text-gray-400 group-hover:text-gray-300">ECIL, Hyderabad</p>
          </div>
        </a>
        
        <a href="tel:+917416777662" className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-[#a855f7]/50 border border-white/5 transition-all hover:-translate-y-2 group bg-gradient-to-br from-white/[0.02] to-transparent text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="bg-[#a855f7]/10 p-5 rounded-full group-hover:bg-[#a855f7]/20 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Phone className="text-[#a855f7] w-8 h-8 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Phone</h4>
            <p className="text-gray-400 group-hover:text-gray-300 break-words">+91 7416777662</p>
          </div>
        </a>

        <a href="mailto:somavarapuakash26@gmail.com" className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-[#00f2fe]/50 border border-white/5 transition-all hover:-translate-y-2 group bg-gradient-to-br from-white/[0.02] to-transparent text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="bg-[#00f2fe]/10 p-5 rounded-full group-hover:bg-[#00f2fe]/20 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <Mail className="text-[#00f2fe] w-8 h-8 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Email</h4>
            <p className="text-gray-400 group-hover:text-gray-300 break-all text-sm md:text-base">somavarapuakash26@gmail.com</p>
          </div>
        </a>

        <a href="https://somavarapu-akash.surge.sh" target="_blank" rel="noreferrer" className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-[#a855f7]/50 border border-white/5 transition-all hover:-translate-y-2 group bg-gradient-to-br from-white/[0.02] to-transparent text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="bg-[#a855f7]/10 p-5 rounded-full group-hover:bg-[#a855f7]/20 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Globe className="text-[#a855f7] w-8 h-8 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Portfolio</h4>
            <p className="text-gray-400 group-hover:text-gray-300 break-words text-sm md:text-base">somavarapu-akash.surge.sh</p>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
