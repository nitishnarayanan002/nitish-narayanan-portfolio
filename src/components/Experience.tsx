import { useState } from "react";
import { roles } from "@/data/content";
import { SectionHeading } from "@/components/About";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [active, setActive] = useState(0);
  const role = roles[active];

  return (
    <section id="experience" className="border-y border-border bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="02 · Experience"
          lines={["A career compounding", "in customer value."]}
        />
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Six roles. One throughline — building frameworks that turn enterprise complexity into
            measurable outcomes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Role switcher */}
          <Reveal className="lg:border-r lg:border-border lg:pr-10">
            <ol className="flex flex-col">
              {roles.map((r, i) => (
                <li key={`${r.title}-${i}`}>
                  <button
                    onClick={() => setActive(i)}
                    className={cn(
                      "group w-full border-b border-border py-5 text-left transition-colors",
                      i === active ? "border-primary/50" : "hover:border-muted-foreground/40",
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span
                        className={cn(
                          "font-display text-lg font-bold transition-colors",
                          i === active ? "text-primary" : "text-foreground group-hover:text-primary",
                        )}
                      >
                        {r.title}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span>{r.company}</span>
                      <span>·</span>
                      <span>{r.period}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Active role detail */}
          <Reveal delay={120}>
            <article className="rounded-xl border border-border bg-card p-7 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {role.company}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  ◎ {role.location}
                </p>
              </div>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                {role.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {role.period}
              </p>

              <ul className="mt-6 space-y-4">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-2 h-px w-5 shrink-0 bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border bg-panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
