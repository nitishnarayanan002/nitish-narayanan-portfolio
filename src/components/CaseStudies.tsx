import { caseStudies } from "@/data/content";
import { SectionHeading } from "@/components/About";
import { Reveal } from "@/components/Reveal";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{value}</p>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="03 · Featured Enterprise Work"
          lines={["Solutions deployed.", "Outcomes delivered."]}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.name} delay={(i % 2) * 80}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-3xl font-black text-muted-foreground/40 transition-colors group-hover:text-primary/70">
                    {cs.index}
                  </span>
                  {cs.logo ? (
                    <img
                      src={cs.logo}
                      alt={`${cs.name} logo`}
                      className="h-9 w-auto rounded-sm object-contain"
                    />
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-panel font-display text-lg font-black text-muted-foreground">
                      {cs.mark}
                    </span>
                  )}
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {cs.industry}
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight">
                  {cs.name}
                </h3>

                <div className="mt-5 flex flex-1 flex-col gap-4">
                  <Row label="Challenge" value={cs.challenge} />
                  <Row label="Solution" value={cs.solution} />
                  <Row label="Outcome" value={cs.outcome} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 rounded-xl border border-dashed border-border bg-panel p-8 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              And counting
            </p>
            <p className="mt-2 font-display text-4xl font-black text-muted-foreground/50">
              many more…
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Hundreds of deployments across healthcare, retail, automotive and BFSI — happy to walk
              you through the ones most relevant to your business.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary hover:underline"
            >
              Ask me about more →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
