"use client";

import { useEffect, useRef } from "react";

// A drifting "network map" of nodes and connections behind frosted-glass
// cards — meant to read as a live cloud/infrastructure topology rather than
// a generic blurred blob mesh. Colors track the amber/cyan accent pair and
// re-read the .dark class every frame so the toggle needs no re-init.
const PALETTE = {
  light: { amber: "232, 129, 26", cyan: "8, 145, 168" },
  dark: { amber: "255, 165, 62", cyan: "34, 211, 238" },
};

export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let frameId;

    const isDark = () => document.documentElement.classList.contains("dark");

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(65, Math.round((width * height) / 20000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6,
        type: Math.random() > 0.5 ? "amber" : "cyan",
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const theme = isDark() ? PALETTE.dark : PALETTE.light;
      const lineAlpha = isDark() ? 0.14 : 0.09;
      const dotAlpha = isDark() ? 0.8 : 0.55;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${theme[p.type]}, ${lineAlpha * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${theme[p.type]}, ${dotAlpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      draw();
      frameId = requestAnimationFrame(loop);
    }

    resize();
    draw();
    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none"
    >
      <div className="bg-blueprint-grid absolute inset-0 opacity-60" />
      <div className="animate-drift-a absolute -top-[10%] -left-1/4 h-[60vh] w-[60vh] rounded-full bg-amber/20 blur-[110px]" />
      <div className="animate-drift-b absolute top-[30%] -right-[15%] h-[55vh] w-[55vh] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-cyan/10 blur-[130px]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
