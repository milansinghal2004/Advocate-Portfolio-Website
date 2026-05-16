import { useEffect, useState } from "react";

const links = [
  { href: "#practice", label: "Practice" },
  { href: "#advocate", label: "Advocate" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-colors duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a href="#top" className="font-display italic text-xl tracking-tight text-foreground">
        Valerius<span className="text-accent">.</span>
      </a>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] font-medium text-muted-foreground">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-accent transition-colors duration-300">
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="px-5 py-2.5 border border-accent/40 text-accent text-[10px] uppercase tracking-[0.25em] hover:bg-accent hover:text-accent-foreground transition-all duration-500"
      >
        Consultation
      </a>
    </nav>
  );
}
