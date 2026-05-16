import portrait from "@/assets/advocate-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-20 px-6 md:px-10 border-b border-border overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-end">
          <div className="md:col-span-8 animate-fade-up">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
              Advocate · Legal Consultant
            </p>
            <h1 className="font-display text-[3.5rem] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] text-balance">
              The Quiet <span className="italic text-accent">Authority</span>
              <br />
              of Justice
            </h1>
            <div className="mt-12 h-px w-full bg-border relative overflow-hidden">
              <div className="absolute inset-0 bg-accent animate-line-reveal [animation-delay:500ms]" />
            </div>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-light text-pretty leading-relaxed">
              Strategic legal representation for elite private clients and international
              corporate entities. Refined. Resolute. Relentless.
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

          <div className="md:col-span-4 animate-fade-up [animation-delay:200ms]">
            <div className="relative">
              <img
                src={portrait}
                alt="Portrait of the advocate"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover border border-border grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-px left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
