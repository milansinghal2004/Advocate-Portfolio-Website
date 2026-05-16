import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const quotes = [
  {
    text: "Possesses a rare combination of intellectual rigor and tactical instinct. In the courtroom, the presence is authoritative; in chambers, the counsel is invaluable.",
    name: "Arthur V. Sterling",
    role: "Chief Executive, Sterling Holdings",
  },
  {
    text: "An advocate of remarkable composure. Reads the bench better than anyone I have briefed in twenty years of practice.",
    name: "Hon. Margaret Yeo",
    role: "Retired Justice",
  },
  {
    text: "Quietly the most prepared person in any room. Outcomes follow.",
    name: "Dr. Imran Khoury",
    role: "General Counsel, Meridian Group",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-b border-border bg-white/[0.015]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-12 text-center">
          On Record
        </p>
        <div className="relative min-h-[260px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-center"
            >
              <p className="font-display italic text-2xl md:text-4xl leading-relaxed text-balance">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-10 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-accent" />
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="text-foreground">{q.name}</span> · {q.role}
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-accent" : "w-6 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
