import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-xs font-medium"
              style={{
                background: "rgba(57,255,20,0.06)",
                borderColor: "rgba(57,255,20,0.25)",
                color: "#39ff14",
              }}
            >
              <span className="pulse-dot" />
              Next-Gen STEM Learning
            </div>

            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: "#e2e8f0" }}
            >
              Build.<br />
              Compete.<br />
              <span className="gradient-text">Innovate.</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
              style={{ color: "#8b9bb4" }}
            >
              Live mentorship in AI, Robotics, Drones, Electronics, IoT and
              Future Technologies for ages 10–18.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/workshop"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "btn-glow font-semibold text-base"
                )}
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #00b8d4)",
                  color: "#06060f",
                }}
              >
                Join Free ESP8266 Workshop
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {["👨‍💻", "👩‍🔬", "🤖", "🛸"].map((emoji, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full border text-sm"
                    style={{
                      background: "rgba(0,229,255,0.08)",
                      borderColor: "rgba(0,229,255,0.2)",
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <p className="text-sm" style={{ color: "#8b9bb4" }}>
                <strong className="text-slate-200">5 students max</strong> per
                mentor • 100% project-based
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center z-10">
            <div className="relative">
              {/* Glow rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)",
                  transform: "scale(1.4)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
                  transform: "scale(1.8)",
                }}
              />

              {/* Logo */}
              <Image
                src="/assets/logo.jpg"
                alt="BuildVerse"
                width={320}
                height={320}
                className="rounded-full logo-float relative z-10"
                style={{
                  boxShadow:
                    "0 0 60px rgba(0,229,255,0.25), 0 0 100px rgba(57,255,20,0.1)",
                  border: "2px solid rgba(0,229,255,0.3)",
                }}
                priority
              />

              {/* Floating badges */}
              <Badge
                className="absolute -top-4 -right-4 z-20 px-3 py-1 text-xs font-bold"
                style={{
                  background: "rgba(0,229,255,0.15)",
                  borderColor: "rgba(0,229,255,0.4)",
                  color: "#00e5ff",
                }}
              >
                🧠 AI & ML
              </Badge>
              <Badge
                className="absolute -bottom-4 -left-4 z-20 px-3 py-1 text-xs font-bold"
                style={{
                  background: "rgba(57,255,20,0.12)",
                  borderColor: "rgba(57,255,20,0.35)",
                  color: "#39ff14",
                }}
              >
                🛸 Drones
              </Badge>
              <Badge
                className="absolute top-1/2 -right-8 z-20 px-3 py-1 text-xs font-bold -translate-y-1/2"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  borderColor: "rgba(124,58,237,0.4)",
                  color: "#a78bfa",
                }}
              >
                🤖 Robotics
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
