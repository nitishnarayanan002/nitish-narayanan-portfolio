import { aboutIntro, stats } from "@/data/content";
import { Counter, Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  lines,
  className,
}: {
  eyebrow: string;
  lines: string[];
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
        {lines.map((line, i) => (
          <span key={line} className="block">
            {i === lines.length - 1 ? <span className="text-muted-foreground">{line}</span> : line}
          </span>
        ))}
      </h2>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="01 · About" lines={["Hands on the keyboard.", "Eyes on the outcome."]} />

        <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          {aboutIntro.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="bg-card">
              <div className="flex h-full flex-col gap-3 p-7">
                <div className="font-display text-5xl font-black text-primary">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-semibold leading-snug">{stat.label}</p>
                <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {stat.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
