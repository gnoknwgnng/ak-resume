"use client";

import { useEffect, useState } from "react";
const TICKS = 60;

export default function Ruler() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => { const m = document.documentElement.scrollHeight - window.innerHeight; setP(m > 0 ? window.scrollY / m : 0); };
    f(); window.addEventListener("scroll", f, { passive: true }); window.addEventListener("resize", f);
    return () => { window.removeEventListener("scroll", f); window.removeEventListener("resize", f); };
  }, []);
  return (
    <div className="ruler" aria-hidden="true">
      {Array.from({ length: TICKS }, (_, i) => { const pct = i / (TICKS - 1); return <span key={i} className={`${i % 5 === 0 ? "major" : "minor"} ${pct <= p ? "lit" : ""}`} style={{ top: `calc(6vh + ${pct * 88}vh)` }} />; })}
    </div>
  );
}
