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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Heading */}
          <div className="animate-fade-up lg:col-span-7">
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

            {/* Mobile Divider */}
            <div className="lg:hidden mt-12 h-px w-full bg-border relative overflow-hidden">
              <div className="absolute inset-0 bg-accent animate-line-reveal [animation-delay:500ms]" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5 flex flex-col justify-end lg:pb-4">
            {/* Desktop Divider */}
            <div className="hidden lg:block h-px w-full bg-border relative overflow-hidden mb-8">
              <div className="absolute inset-0 bg-accent animate-line-reveal [animation-delay:500ms]" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground font-light text-pretty leading-relaxed">
              Strategic legal representation with a focus on High Court litigation, constitutional
              matters, and judicial research. Dedicated to precision, precedent, and uncompromising
              advocacy in Jaipur and Delhi.
            </p>
            <div className="mt-10 flex flex-col xl:flex-row flex-wrap items-start xl:items-center gap-6">
              <a
                href="#contact"
                className="group px-8 py-4 bg-accent text-accent-foreground text-[10px] tracking-[0.3em] font-semibold uppercase hover:bg-foreground transition-colors duration-500 whitespace-nowrap"
              >
                Inquire Privately
              </a>
              <div className="hidden xl:block h-px w-10 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground max-w-[200px]">
                Available for International Arbitration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
