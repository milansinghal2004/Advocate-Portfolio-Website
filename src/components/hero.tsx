export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 md:pt-44 pb-20 px-6 md:px-10 border-b border-border overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-start max-w-4xl">
          <div className="animate-fade-up">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
              Advocate · Legal Consultant
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
              Adv. Divya Modi
              <span className="italic text-accent block mt-2 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Premier Legal Counsel
              </span>
              <span className="block mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/70">
                in Jaipur
              </span>
            </h1>
            <div className="mt-12 h-px w-full bg-border relative overflow-hidden">
              <div className="absolute inset-0 bg-accent animate-line-reveal [animation-delay:500ms]" />
            </div>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-light text-pretty leading-relaxed">
              Strategic legal representation with a focus on High Court litigation, constitutional
              matters, and judicial research. Dedicated to precision, precedent, and uncompromising
              advocacy in Jaipur and Delhi.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group px-8 py-4 bg-accent text-accent-foreground text-[10px] tracking-[0.3em] font-semibold uppercase hover:bg-foreground transition-colors duration-500"
              >
                Inquire Privately
              </a>
              <span className="h-px w-10 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Available for International Arbitration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
