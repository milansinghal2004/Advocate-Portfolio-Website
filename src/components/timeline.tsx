import { useInView } from "@/hooks/use-in-view";

const items = [
  {
    year: "2025 — Present",
    role: "Associate",
    org: "Additional Solicitor General for India, Rajasthan",
    body: "Representing the Union of India in complex litigation before the Rajasthan High Court.",
  },
  {
    year: "2024 — 2025",
    role: "Judicial Law Researcher",
    org: "Rajasthan & Delhi High Court",
    body: "Worked under Hon'ble Mr. Justice Arun Monga. Research, drafting, and precedent analysis for landmark proceedings.",
  },
  {
    year: "2023 — 2024",
    role: "LL.M.",
    org: "Post-Graduate Law School",
    body: "Specialized in Constitutional and Corporate Law.",
  },
  {
    year: "2018 — 2023",
    role: "BBA.LL.B.(Hons.)",
    org: "University of Law",
    body: "Graduated with Honors, specializing in Business and Legal Studies.",
  },
];

function Row({ item, index }: { item: (typeof items)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`relative pl-12 md:pl-20 py-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute left-[7px] md:left-[15px] top-10 w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(197,163,104,0.6)]" />
      <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
        <span className="md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-accent">
          {item.year}
        </span>
        <div className="md:col-span-9">
          <h4 className="font-display text-2xl md:text-3xl mb-1">{item.role}</h4>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">{item.org}</p>
          <p className="text-base text-foreground/70 font-light leading-relaxed max-w-xl">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="px-6 md:px-10 py-24 md:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">Career</p>
          <h2 className="font-display text-4xl md:text-5xl italic">Distinguished History</h2>
        </div>
        <div className="relative">
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
          {items.map((item, i) => (
            <Row key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
