"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DAYS = [
  {
    label: "Day 1",
    src: "/assets/curriculum1.jpg",
    alt: "Day 1 - Foundations of Innovation",
  },
  { label: "Day 2", src: "/assets/curriculum2.jpg", alt: "Day 2 - Blink LED" },
  {
    label: "Day 3",
    src: "/assets/curriculum3.jpg",
    alt: "Day 3 - Automatic Traffic Light",
  },
  {
    label: "Day 4",
    src: "/assets/curriculum4.jpg",
    alt: "Day 4 - Smart Digital Ruler",
  },
  {
    label: "Day 5",
    src: "/assets/curriculum5.jpg",
    alt: "Day 5 - Innovation Challenge",
  },
];

export function CurriculumCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="glass-card neon-glow-border rounded-2xl overflow-hidden"
    >
      {/* Tab bar */}
      <div
        className="flex border-b"
        style={{ borderColor: "rgba(0,229,255,0.15)" }}
      >
        {DAYS.map((day, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-all duration-200",
              active === i
                ? "curriculum-tab-active"
                : "text-slate-400 hover:text-slate-200"
            )}
            style={
              active === i
                ? {
                    background: "rgba(0,229,255,0.08)",
                    color: "#00e5ff",
                    borderBottom: "2px solid #00e5ff",
                  }
                : undefined
            }
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="relative h-64 md:h-72">
        {DAYS.map((day, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              active === i ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <Image
              src={day.src}
              alt={day.alt}
              fill
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
