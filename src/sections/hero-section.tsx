"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

/* ── Constellation canvas ────────────────────────────────────── */
function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const color = "rgba(90,14,37,0.22)";
    const dotColor = "rgba(90,14,37,0.45)";

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Pt = { x: number; y: number; vx: number; vy: number };
    const pts: Pt[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // move
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      // edges
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.7;
            ctx.globalAlpha = 1 - d / 140;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      // dots
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

/* ── Hero Section ────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Constellation background */}
      <ConstellationCanvas />

      <div className="relative z-10 section-shell flex flex-col items-center gap-8 pt-28 pb-20">
        {/* Badge pill */}
        <Reveal>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] shadow-[0_10px_24px_rgba(107,16,48,0.08)]"
            style={{
              borderColor: "rgba(160,80,100,0.26)",
              background: "linear-gradient(180deg, rgba(255,250,252,0.95), rgba(248,238,241,0.88))",
              color: "#6b1030",
              backdropFilter: "blur(10px)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Aspiring Cloud & AI Engineer
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.08}>
          <h1 className="hero-title">
            Yasmine
            <br />
            <em>Najjar</em>
          </h1>
        </Reveal>

        {/* Specialties inline */}
        <Reveal delay={0.13}>
          <p
            className="text-xs font-bold uppercase tracking-[0.34em] sm:text-[0.72rem]"
            style={{ color: "#8b4060" }}
          >
            Artificial Intelligence&nbsp;&nbsp;•&nbsp;&nbsp;Cloud Computing&nbsp;&nbsp;•&nbsp;&nbsp;Software Engineering
          </p>
        </Reveal>

        {/* Quote */}
        <Reveal delay={0.19}>
          <div className="max-w-3xl rounded-[2rem] border border-rose-200/50 bg-white/55 px-6 py-5 shadow-[0_18px_48px_rgba(107,16,48,0.08)] backdrop-blur-md sm:px-8 sm:py-6">
            <p
              className="mx-auto max-w-2xl text-lg leading-8 italic sm:text-xl sm:leading-9"
              style={{ color: "#6b1030" }}
            >
              Computer Science student specializing in Cloud Computing and Artificial Intelligence, building scalable applications and intelligent systems through modern software engineering.
            </p>
          </div>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
              style={{ background: "#6b1030" }}
            >
              Explore My Journey&nbsp;
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/CV_2026-05-23_Yasmine_Najjar.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-rose-50"
              style={{
                borderColor: "rgba(107,16,48,0.35)",
                color: "#6b1030",
                background: "rgba(255,248,252,0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-rose-50"
              style={{
                borderColor: "rgba(107,16,48,0.35)",
                color: "#6b1030",
              }}
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="text-[0.62rem] uppercase tracking-[0.32em]"
            style={{ color: "#8b4060" }}
          >
            Scroll
          </div>
          <div
            className="h-5 w-px rounded-full"
            style={{ background: "rgba(107,16,48,0.3)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}