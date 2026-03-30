import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import FinalSlide from "@/components/FinalSlide";
import StarsCanvas from "@/components/canvas/Stars";

export default function Home() {
  return (
    <main className="relative z-0 bg-[#050510]">
      <div className="relative z-0">
        <div className="bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        
        {/* Swapped Final Slide to be before Contact */}
        <FinalSlide />
        <Contact />
        
        {/* Placing StarsCanvas entirely behind everything for the whole app, 
            or keep it at the end to cover the whole main relative container */}
        <StarsCanvas />
      </div>
    </main>
  );
}
