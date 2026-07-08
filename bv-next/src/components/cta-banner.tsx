import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="glass-card neon-glow-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#e2e8f0" }}
            >
              Start free, then build something real.
            </h2>
            <p style={{ color: "#8b9bb4" }}>
              Join the next ESP8266 Innovation Workshop and experience our live
              mentorship platform first-hand.
            </p>
          </div>
          <Link
            href="/workshop"
            className={cn(
              buttonVariants({ size: "lg" }),
              "btn-glow shrink-0 font-semibold"
            )}
            style={{
              background: "linear-gradient(135deg, #00e5ff, #00b8d4)",
              color: "#06060f",
            }}
          >
            Register Free Workshop
          </Link>
        </div>
      </div>
    </section>
  );
}
