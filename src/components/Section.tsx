import Reveal from "./Reveal";

export default function Section({ id, n, tag, title, children }: { id: string; n: string; tag: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section grid gap-8 md:grid-cols-[16rem_1fr] md:gap-x-14">
      <Reveal className="section-head self-start">
        <div className="label"><b>{n}</b>{tag}</div>
        <h2 className="serif">{title}</h2>
      </Reveal>
      <div>{children}</div>
    </section>
  );
}
