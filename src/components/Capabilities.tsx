import { capabilities } from "@/data/content";
import { SectionHeading } from "@/components/About";
import { Reveal } from "@/components/Reveal";

export default function Capabilities() {
  return (
    <section id="skills" className="border-y border-border bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="05 · Capabilities" lines={["The toolkit."]} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-extrabold tracking-tight">{cap.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}/04
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
