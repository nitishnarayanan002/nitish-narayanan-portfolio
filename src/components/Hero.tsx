import { currently, contact, heroParagraph } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Oversized ghost monogram */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-24 select-none font-display text-[26rem] font-black leading-none text-ghost"
      >
        SE
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-36 md:pt-44">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="animate-blink inline-block h-2 w-2 rounded-full bg-primary" />
            Solution Engineering · Bengaluru · Infobip
          </p>
        </Reveal>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
                Nitish
                <br />
                <span className="text-muted-foreground">Narayanan.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Currently
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {currently.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/90">
                {heroParagraph}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#ai-portfolio"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  ✦ Explore AI Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Let's talk ↗
                </a>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  ◎ Bengaluru, India
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="justify-self-end">
            <figure className="relative w-64 border border-border p-2 md:w-80">
              <img
                src={contact.profileImage}
                alt="Nitish Narayanan"
                className="aspect-[6/7] w-full object-cover"
              />
              <span aria-hidden className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-primary" />
              <span aria-hidden className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-primary" />
              <span aria-hidden className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-primary" />
              <span aria-hidden className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-primary" />
              <figcaption className="flex items-center justify-between px-1 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span>Infobip · BLR</span>
                <span className="text-primary">SE Chapter Lead</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={380}>
          <div className="mt-20 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Scroll</span>
            <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
