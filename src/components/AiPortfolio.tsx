import { aiProjects, contact } from "@/data/content";
import { SectionHeading } from "@/components/About";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function AiPortfolio() {
  return (
    <section id="ai-portfolio" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="04 · AI Portfolio"
          lines={["Built with curiosity.", "Shipped on GitHub."]}
        />
        <Reveal delay={100}>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A working portfolio from my Executive PG in ML & AI at IIIT Bangalore plus side
            experiments — covering forecasting, RAG, semantic search, NER, computer vision and risk
            analytics.
          </p>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary hover:underline"
          >
            {contact.githubLabel} ↗
          </a>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 70}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border p-6 transition-colors",
                  project.featured
                    ? "border-primary/60 bg-accent/40"
                    : "border-border bg-card hover:border-primary/40",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {project.featured ? "★ Featured" : "/Jupyter-Notebook"}
                  </span>
                  <span className="font-mono text-[10px] text-primary/80">{project.path}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border bg-panel px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-primary hover:underline"
                >
                  View source →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
