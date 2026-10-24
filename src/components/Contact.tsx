import { contact, contactPitch } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const details = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
  { label: "GitHub", value: contact.githubLabel, href: contact.github },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            07 · Contact
          </p>
          <h2 className="mt-3 font-display text-5xl font-black tracking-tight sm:text-6xl">
            Let's <span className="text-muted-foreground">talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {contactPitch}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              ↓ Download Resume (PDF)
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Email me ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group bg-card p-6 transition-colors hover:bg-accent/40"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary">
                  {d.label}
                </p>
                <p className="mt-2 break-all text-sm font-semibold">{d.value}</p>
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 pb-4 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            © 2026 Nitish Narayanan · Crafted with focus & a lot of coffee.
          </p>
          <div className="flex gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-primary">
              GitHub
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-primary">
              Email
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
