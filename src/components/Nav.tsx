import { useEffect, useState } from "react";
import { navLinks, contact } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
          Nitish <span className="text-primary">·NN·</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary transition-colors hover:bg-accent"
          >
            ✦ Resume
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.14em] text-primary"
            >
              ✦ Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
