import { ArrowUpRight } from "lucide-react";

const areas = [
  {
    n: "01",
    title: "High Court Litigation",
    body: "Definitive resolution of complex jurisdictional disputes and constitutional challenges.",
  },
  {
    n: "02",
    title: "Supreme Court Matters",
    body: "Appellate advocacy at the highest echelon of the national judicial hierarchy.",
  },
  {
    n: "03",
    title: "Legal Consultation",
    body: "Bespoke advisory for high-net-worth individuals requiring absolute discretion.",
  },
  {
    n: "04",
    title: "Arbitration",
    body: "Private dispute resolution and international mediation across major global hubs.",
  },
  {
    n: "05",
    title: "Corporate Advisory",
    body: "Governance, M&A oversight, and regulatory strategy for global enterprises.",
  },
  {
    n: "06",
    title: "Client Advocacy",
    body: "Public interest litigation and high-stakes personal brand protection strategies.",
  },
];

export function PracticeAreas() {
  return (
    <section id="practice" className="px-6 md:px-10 py-24 md:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">Practice</p>
            <h2 className="font-display text-4xl md:text-5xl italic">Legal Verticals</h2>
          </div>
          <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
            Areas of Excellence
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {areas.map((a) => (
            <div
              key={a.n}
              className="group relative bg-background p-10 md:p-12 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-[10px] tracking-[0.3em] text-accent">{a.n}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent transition-all duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-2xl mb-4">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{a.body}</p>
              <div className="mt-10 h-px w-0 bg-accent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
