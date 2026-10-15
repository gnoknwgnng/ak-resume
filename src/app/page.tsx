import Topbar from "@/components/Topbar";
import Ruler from "@/components/Ruler";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { research, experience, projects, skills } from "@/components/content";

export default function Home() {
  return (
    <>
      <Topbar />
      <Ruler />
      <main className="mx-auto max-w-[72rem] px-6 sm:px-10">
        <Hero />

        <Section id="research" n="02" tag="Research" title="Investment & research work">
          {research.map((r, i) => (
            <Reveal key={r.title} className={`row d${Math.min(i, 3)}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="serif">{r.title}</h3>
                <span className="date">{r.date}</span>
              </div>
              <p className="mt-2 max-w-[40rem]">{r.body}</p>
            </Reveal>
          ))}
        </Section>

        <Section id="experience" n="03" tag="Experience" title="Where I've worked">
          {experience.map((e, i) => (
            <Reveal key={e.title} className={`row d${Math.min(i, 3)}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="serif">{e.title} <span className="text-[1.05rem]" style={{ color: "var(--ink-soft)", fontFamily: "var(--font-sans)" }}>{e.org}</span></h3>
                <span className="date">{e.date}</span>
              </div>
              <ul className="marks max-w-[40rem]">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </Reveal>
          ))}
        </Section>

        <Section id="work" n="04" tag="Work" title="What I've built">
          {projects.map((p, i) => (
            <Reveal key={p.title} as="a" href={p.href} target="_blank" rel="noreferrer" className={`row d${Math.min(i, 3)}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="serif">{p.title} <span className="arrow">→</span></h3>
                <span className="date">{p.domain}</span>
              </div>
              <p className="mt-2 max-w-[40rem]">{p.body}</p>
              {p.facts && (
                <dl className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-y-3 max-w-[40rem]">
                  {p.facts.map(([k, v]) => (
                    <div key={k}>
                      <dd className="serif text-[1.6rem] leading-none" style={{ color: "var(--accent)" }}>{v}</dd>
                      <dt className="mono mt-1 uppercase tracking-[0.08em]" style={{ color: "var(--ink-soft)" }}>{k}</dt>
                    </div>
                  ))}
                </dl>
              )}
            </Reveal>
          ))}
        </Section>

        <Section id="award" n="05" tag="Award" title="Recognition">
          <Reveal className="row">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <h3 className="serif">Winner, MSME Idea Hackathon</h3>
              <span className="date">NATIONAL LEVEL · ₹15,00,000 GRANT</span>
            </div>
            <p className="mt-2 max-w-[40rem]">
              Government grant for an alternative-to-wood solution built on sustainable materials, recognised by MSME
              authorities for its potential to reduce deforestation and support eco-friendly manufacturing.
            </p>
          </Reveal>
        </Section>

        <Section id="skills" n="06" tag="Skills" title="Skills & education">
          <div className="grid gap-10 sm:grid-cols-3">
            {skills.map(([name, items], i) => (
              <Reveal key={name} className={`d${i}`}>
                <h3 className="serif text-[1.35rem]">{name}</h3>
                <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-snug">{items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" n="07" tag="Contact" title="Get in touch">
          <Reveal>
            <p className="max-w-[36rem]">
              I'm looking for an analyst, fellow or associate seat at an early-stage fund, and open to applied AI
              engineering roles. The Robocurve memo is available on request.
            </p>
            <dl className="mt-8 grid gap-y-3 sm:grid-cols-[8rem_1fr] max-w-[36rem]">
              <dt style={{ color: "var(--ink-soft)" }}>Email</dt>
              <dd><a className="link" href="mailto:somavarapuakash26@gmail.com">somavarapuakash26@gmail.com</a></dd>
              <dt style={{ color: "var(--ink-soft)" }}>Phone</dt>
              <dd><a className="link" href="tel:+917416777662">+91 7416777662</a></dd>
              <dt style={{ color: "var(--ink-soft)" }}>VC Friend</dt>
              <dd><a className="link" href="https://vcfriend.online" target="_blank" rel="noreferrer">vcfriend.online</a></dd>
              <dt style={{ color: "var(--ink-soft)" }}>Location</dt>
              <dd>ECIL, Hyderabad, India</dd>
            </dl>
            <p className="mono mt-20 pb-10" style={{ color: "var(--ink-soft)" }}>FIELD LEDGER · SOMAVARAPU AKASH · 2026</p>
          </Reveal>
        </Section>
      </main>
    </>
  );
}
