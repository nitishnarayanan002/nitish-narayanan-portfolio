import { marqueeItems } from "@/data/content";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="border-y border-border bg-panel py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8">
              <span className="font-display text-xl font-bold text-foreground/90">{item}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
