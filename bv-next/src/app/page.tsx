import { CanvasBackground } from "@/components/canvas-background";
import { Hero } from "@/components/hero";
import { WorkshopReel } from "@/components/workshop-reel";
import { StatsSection } from "@/components/stats-section";
import { TechSection } from "@/components/tech-section";
import { CtaBanner } from "@/components/cta-banner";

export default function HomePage() {
  return (
    <div className="relative">
      <CanvasBackground />
      <div className="relative z-10">
        <Hero />
        <WorkshopReel />
        <StatsSection />
        <TechSection />
        <CtaBanner />
      </div>
    </div>
  );
}
