"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-band">
      <div className="section-shell">
        {/* Section label */}
        <Reveal>
          <div className="eyebrow mb-4">01 — About</div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.06}>
          <h2 className="section-title mb-12">
            Engineering Beyond
            <br />
            Code.
          </h2>
        </Reveal>

        {/* Two columns */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p
                className="text-xl leading-9 italic font-serif"
                style={{ color: "#5a0e25" }}
              >
                Driven by a pursuit of academic excellence, analytical rigor, and technical intuition. 
                Ranking <span className="font-semibold" style={{ color: "#8b1030" }}>first in my engineering class (Top 3%)</span> with a GPA of 14.99/20, 
                I combine quick analytical reasoning with a dedicated work ethic to solve complex computational problems.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base leading-7" style={{ color: "#8b4060" }}>
                Beyond pure engineering, I leverage strong leadership and interpersonal skills to guide initiatives and coordinate people. 
                Whether managing large-scale logistics for major events, speaking in public forums, or collaborating in agile environments, 
                I bring clarity, structured organization, and a collaborative mindset to every project.
              </p>
            </Reveal>
          </div>

          {/* Right: Results Card and Photo */}
          <motion.div
            className="rounded-[1.5rem] border p-3"
            style={{
              background: "rgba(247,236,240,0.85)",
              borderColor: "rgba(200,150,168,0.22)",
              boxShadow: "0 10px 40px rgba(107,16,48,0.08), inset 0 1px 0 rgba(255,255,255,0.65)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative overflow-hidden rounded-[1.2rem] bg-white p-1">
              <img
                src="/results.png"
                alt="First Year Engineering Results"
                className="w-full h-auto object-cover rounded-[1rem] shadow-sm transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3 px-4 pb-1 text-center flex flex-col items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#8b4060" }}>
                Academic Performance
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] mt-1" style={{ color: "#a56684" }}>
                Top of Class (3A56) • Principal Session
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}