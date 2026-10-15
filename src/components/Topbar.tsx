"use client";

import { useEffect, useState } from "react";

const links = [["research", "Research"], ["experience", "Experience"], ["work", "Work"], ["contact", "Contact"]];

export default function Topbar() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <div className="topbar">
      <nav className="mx-auto max-w-[72rem] px-6 sm:px-10 h-12 flex items-center justify-between mono">
        <a href="#top" className="serif italic text-[1.15rem] whitespace-nowrap"><span className="hidden sm:inline">Somavarapu Akash</span><span className="sm:hidden">S. Akash</span></a>
        <div className="flex gap-4 sm:gap-7">
          {links.map(([id, t]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{t}</a>)}
        </div>
      </nav>
    </div>
  );
}
