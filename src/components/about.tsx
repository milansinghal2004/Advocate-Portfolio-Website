const tags = [
  "Constitutional Law",
  "Cross-Border Disputes",
  "M&A Advisory",
  "White-Collar Defense",
  "Judicial Research",
];

export function About() {
  return (
    <section id="advocate" className="px-6 md:px-10 py-24 md:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">The Advocate</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            A practice built on <span className="italic text-accent">discretion</span>, precedent, and
            uncompromising preparation.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-10">
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
            For nearly two decades, the firm has represented sovereign institutions, listed
            corporations, and private individuals across the most consequential matters of our
            generation — from constitutional appeals to billion-dollar arbitration awards.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed font-light mb-12">
            Every brief is drafted personally. Every appearance is led from the front. The result is
            a body of work defined less by volume than by gravity.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-4 py-2 border border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
