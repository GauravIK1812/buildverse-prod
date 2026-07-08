"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

const NODE_COLORS = ["#00e5ff", "#39ff14", "#7c3aed", "#ff6b35"];

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    const particles: Particle[] = [];
    const MAX = 55;
    const CONNECTION_DIST = 140;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }

    function spawnParticle(): Particle {
      return {
        x: Math.random() * (canvas?.width ?? window.innerWidth),
        y: Math.random() * (canvas?.height ?? window.innerHeight),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
        alpha: Math.random() * 0.6 + 0.2,
      };
    }

    resize();
    for (let i = 0; i < MAX; i++) particles.push(spawnParticle());

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "#00e5ff";
            ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animFrameId = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
      aria-hidden="true"
    />
  );
}
