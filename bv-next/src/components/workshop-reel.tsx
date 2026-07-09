import Image from "next/image";

const IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/workshop/ws${i + 1}.jpg`,
  alt: `Workshop photo ${i + 1}`,
}));

export function WorkshopReel() {
  return (
    <div
      className="py-8 border-y overflow-hidden"
      style={{ borderColor: "rgba(0,229,255,0.1)" }}
    >
      <div className="flex items-center gap-3 px-4 mb-5 justify-center">
        <div
          className="h-px flex-1 max-w-12"
          style={{ background: "rgba(0,229,255,0.3)" }}
        />
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "#8b9bb4" }}
        >
          From Our Workshops
        </span>
        <div
          className="h-px flex-1 max-w-12"
          style={{ background: "rgba(0,229,255,0.3)" }}
        />
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient fade on edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #06060f, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #06060f, transparent)",
          }}
        />

        <div className="reel-track">
          {/* Original + duplicate for seamless loop */}
          {[...IMAGES, ...IMAGES].map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={i < 12 ? img.alt : ""}
              width={220}
              height={150}
              className="rounded-xl object-cover shrink-0"
              style={{
                border: "1px solid rgba(0,229,255,0.12)",
                height: 150,
                width: 220,
              }}
              loading="lazy"
              aria-hidden={i >= 12}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
