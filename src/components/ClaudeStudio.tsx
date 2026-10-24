import { clientBuilds, studioIntro, studioSkills, studioStats, workspaceChips } from "@/data/content";
import { SectionHeading } from "@/components/About";
import { Counter, Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function ClaudeStudio() {
  return (
    <section id="claude-studio" className="border-y border-border bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            Claude Code Studio · Personal Builds
          </p>
        </Reveal>
        <SectionHeading eyebrow="" lines={["I sell what", "I can build."]} className="sr-only" />
        <Reveal delay={60}>
          <h2 className="mt-3 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            I sell what
            <br />
            <span className="text-muted-foreground">I can build.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {studioIntro}
          </p>
        </Reveal>

        {/* Studio stats */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {studioStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60} className="bg-card">
              <div className="flex h-full flex-col gap-2 p-5">
                <span className="font-display text-3xl font-black text-primary">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Reusable skills */}
        <Reveal>
          <div className="mt-16 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl font-extrabold tracking-tight">
              Reusable Claude Skills
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Each one is an executable agent in my SDLC
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studioSkills.map((skill, i) => (
            <Reveal key={skill.path} delay={(i % 3) * 70}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border p-6 transition-colors",
                  skill.highlight
                    ? "border-primary/60 bg-accent/40"
                    : "border-border bg-card hover:border-primary/40",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {skill.category}
                  </span>
                  {skill.highlight && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      ★ Highlight
                    </span>
                  )}
                </div>
                <p className="mt-3 font-mono text-xs text-primary/80">{skill.path}</p>
                <h4 className="mt-1 font-display text-lg font-bold tracking-tight">{skill.name}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Client deployments */}
        <Reveal>
          <div className="mt-16 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl font-extrabold tracking-tight">
              Client deployments built with Claude Code
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Shipped end-to-end, ready for handoff
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientBuilds.map((build, i) => (
            <Reveal key={build.name} delay={i * 70}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <h4 className="font-display text-lg font-bold tracking-tight">{build.name}</h4>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  {build.meta}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {build.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-7">
            <p className="font-display text-lg font-bold tracking-tight">
              Workspace POCs & Dashboards
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              20+ artefacts · related work
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {workspaceChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-sm border border-border bg-panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
