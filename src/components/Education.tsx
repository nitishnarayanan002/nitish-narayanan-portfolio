import { awards, certifications, education, languages } from "@/data/content";
import { SectionHeading } from "@/components/About";
import { Reveal } from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="06 · Education, Awards & More" lines={["The foundation."]} />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Education */}
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-7">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                🎓 Education
              </p>
              <ul className="mt-6 divide-y divide-border">
                {education.map((ed) => (
                  <li key={ed.title} className="py-5 first:pt-0 last:pb-0">
                    <p className="font-display text-lg font-bold leading-snug tracking-tight">
                      {ed.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{ed.school}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary/80">
                      {ed.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10">
            {/* Certifications */}
            <Reveal delay={80}>
              <div className="rounded-xl border border-border bg-card p-7">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  📜 Certifications
                </p>
                <ul className="mt-6 space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="text-primary">▸</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Awards */}
            <Reveal delay={140}>
              <div className="rounded-xl border border-border bg-card p-7">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  🏆 Awards
                </p>
                <ul className="mt-6 space-y-5">
                  {awards.map((award) => (
                    <li key={`${award.title}-${award.year}`}>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-lg font-bold tracking-tight">{award.title}</p>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                          {award.year}
                        </span>
                      </div>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {award.org}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{award.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Languages */}
        <Reveal delay={80}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((lang) => (
              <div key={lang.name} className="bg-card p-6">
                <p className="font-display text-lg font-bold tracking-tight">{lang.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
