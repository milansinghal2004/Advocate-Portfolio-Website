import { useState, useRef } from "react";
import chambers from "@/assets/chambers-architecture.jpg";
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_iandffn',
        'template_8oy93xo',
        formRef.current!,
        '7oSYp1H7LsKhOmxvg'
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="grid md:grid-cols-2 border-b border-border">
      <div className="p-10 md:p-20 lg:p-24 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6">Contact</p>
        <h2 className="font-display text-4xl md:text-6xl mb-8 leading-[1.05]">
          Secure a <br />
          <span className="italic text-accent">Consultation</span>
        </h2>
        <p className="text-muted-foreground max-w-md mb-12 font-light leading-relaxed">
          Strictly confidential. Every inquiry is reviewed personally within twenty-four hours.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-md">
          {[
            { id: "name", label: "Full Name", type: "text" },
            { id: "email", label: "Secure Email", type: "email" },
            { id: "matter", label: "Nature of Matter", type: "text" },
          ].map((f) => (
            <div key={f.id} className="relative">
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-border py-4 text-foreground focus:border-accent outline-none transition-colors text-sm"
              />
              <label
                htmlFor={f.id}
                className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-all duration-300 peer-focus:-translate-y-4 peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-translate-y-4 peer-[&:not(:placeholder-shown)]:text-accent"
              >
                {f.label}
              </label>
            </div>
          ))}
          <button
            type="submit"
            disabled={submitted || loading}
            className="w-full py-5 bg-accent text-accent-foreground text-[10px] tracking-[0.3em] font-bold uppercase mt-8 hover:bg-foreground transition-colors disabled:opacity-60"
          >
            {loading ? "Processing..." : submitted ? "Request Received" : "Initiate Review"}
          </button>
        </form>
      </div>
      <div className="relative min-h-[480px] overflow-hidden">
        <img
          src={chambers}
          alt="Law chambers of Adv. Divya Modi at Rajasthan High Court, Jaipur"
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-background/60" />
        <div className="relative h-full flex items-center justify-center p-10">
          <div className="p-10 md:p-12 border border-accent/30 bg-background/60 backdrop-blur-xl max-w-sm w-full">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              Primary Chambers
            </p>
            <address className="not-italic text-sm font-light leading-loose text-foreground/90">
              Rajasthan High Court
              <br />
              Jaipur Bench
              <br />
              Rajasthan, India
            </address>
            <div className="h-px w-full bg-border my-8" />
            <div className="space-y-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <p>
                <span className="text-foreground/80">+91</span> 7976762241
              </p>
              <p>
                <span className="text-foreground/80">singhalmilan92</span>@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
