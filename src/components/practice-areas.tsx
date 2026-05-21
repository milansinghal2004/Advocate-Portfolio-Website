import { ArrowUpRight } from "lucide-react";

const areas = [
  {
    n: "01",
    title: "High Court Litigation",
    body: "Extensive experience in representing complex jurisdictional disputes, writ petitions, and appellate matters before the Rajasthan High Court (Jaipur Bench) and Delhi High Court.",
  },
  {
    n: "02",
    title: "Government Representation",
    body: "Strategic advocacy for the Union of India in high-stakes litigation, serving as a Junior Associate to the Additional Solicitor General for India.",
  },
  {
    n: "03",
    title: "Judicial Research",
    body: "Deep analytical expertise derived from service as a Judicial Law Researcher, providing authoritative precedent analysis and constitutional drafting.",
  },
  {
    n: "04",
    title: "Constitutional Matters",
    body: "Handling definitive challenges to legislative and administrative actions with a focus on fundamental rights, state policy, and supreme court guidelines.",
  },
  {
    n: "05",
    title: "Civil & Commercial Law",
    body: "Comprehensive advisory and legal representation in contractual disputes, commercial litigation, recovery proceedings, and property law.",
  },
  {
    n: "06",
    title: "Arbitration",
    body: "Private dispute resolution and international mediation, ensuring efficient and binding settlements for high-net-worth individuals and corporate entities.",
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
