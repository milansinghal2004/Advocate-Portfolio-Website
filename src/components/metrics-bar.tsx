import { AnimatedCounter } from "./animated-counter";

const metrics = [
  { value: 18, suffix: "+", label: "Years Active" },
  { value: 420, label: "Supreme Cases" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 4, prefix: "$", suffix: "B", label: "Value Settled" },
];

export function MetricsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
      {metrics.map((m, i) => (
        <div
          key={m.label}
          className={`p-10 md:p-14 text-center ${i < 3 ? "md:border-r border-border" : ""} ${
            i % 2 === 0 ? "border-r border-border md:border-r" : ""
          } ${i < 2 ? "border-b md:border-b-0 border-border" : ""}`}
        >
          <div className="font-display text-4xl md:text-5xl text-accent mb-3">
            <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
