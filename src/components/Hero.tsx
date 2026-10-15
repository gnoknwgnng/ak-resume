import Skyline from "./Skyline";

const facts = [["₹15 L", "government grant won"], ["2", "AI systems shipped solo"], ["1", "founder platform built"], ["1", "investment memo written"]];

export default function Hero() {
  return (
    <header id="top" className="hero min-h-[100svh] flex flex-col justify-center pt-24 pb-16 overflow-visible">
      <Skyline />
      <div className="relative">
        <div className="relative">
          <div className="label settle"><b>01</b>Profile</div>
          <h1 className="settle settle-1 serif mt-6 text-[clamp(2.8rem,8vw,6.2rem)] leading-[0.98] tracking-[-0.015em]">
            Somavarapu Akash
          </h1>
          <p className="settle settle-2 serif italic mt-5 text-[clamp(1.45rem,3vw,2.2rem)] leading-[1.2] max-w-[34ch]">
            I build AI systems end to end. Now I'm learning to judge which ones to back.
          </p>
          <p className="settle settle-3 mt-7 max-w-[36rem]">
            Recent computer science graduate from Hyderabad. Built VC Friend, a free investor-discovery platform
            covering 2,000+ venture firms; won a national MSME hackathon and a ₹15 lakh government grant, my first
            direct experience of pitching and investor diligence. Looking for an analyst or associate seat at an
            early-stage fund.
          </p>
          <p className="settle settle-4 mt-7 flex flex-wrap gap-x-7 gap-y-2">
            <a className="link" href="#work">See the work</a>
            <a className="link" href="https://vcfriend.online" target="_blank" rel="noreferrer">Open VC Friend</a>
            <a className="link" href="mailto:somavarapuakash26@gmail.com">Email me</a>
          </p>
        </div>

      </div>

      <div className="relative mt-14">
        <div className="draw h-px" style={{ background: "var(--rule)" }} />
        <dl className="settle settle-4 grid grid-cols-2 sm:grid-cols-4 gap-y-4 py-4">
          {facts.map(([n, t]) => (
            <div key={t}>
              <dd className="serif text-[1.8rem] leading-none" style={{ color: "var(--accent)" }}>{n}</dd>
              <dt className="mono mt-1.5 uppercase tracking-[0.08em]" style={{ color: "var(--ink-soft)" }}>{t}</dt>
            </div>
          ))}
        </dl>
        <div className="draw h-px" style={{ background: "var(--rule)" }} />
      </div>

      <a href="#research" aria-label="Scroll to research" className="relative mono nudge mt-10 w-fit" style={{ color: "var(--ink-soft)" }}>↓ scroll</a>
    </header>
  );
}
