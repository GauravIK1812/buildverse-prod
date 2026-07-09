"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { id: "students", target: 450, suffix: "+", label: "Students Mentored" },
  { id: "projects", target: 100, suffix: "+", label: "Projects Built" },
  { id: "tech", target: 12, suffix: "+", label: "Technologies Taught" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);

  return value;
}

function StatCard({
  target,
  suffix,
  label,
  active,
}: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(target, 1800, active);
  return (
    <div
      className="glass-card p-8 text-center"
      style={{ border: "1px solid rgba(0,229,255,0.15)" }}
    >
      <div className="font-heading text-5xl font-bold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider" style={{ color: "#8b9bb4" }}>
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((s) => (
            <StatCard
              key={s.id}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              active={active}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
