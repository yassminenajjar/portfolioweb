"use client";

import { useState, useEffect } from "react";
import { navItems } from "../lib/site-data";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ExperienceSection } from "./experience-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { CertificationsSection } from "./certifications-section";
import { BootcampSection } from "./bootcamp-section";
import { EducationSection } from "./education-section";
import { BeyondCodeSection } from "./beyond-code-section";
import { ContactSection } from "./contact-section";

export function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* ── Floating pill navigation (Lovable style) ── */}
      <header
        className="fixed inset-x-0 top-0 z-40 flex justify-center py-4 px-6 pointer-events-none"
      >
        <div
          className="pointer-events-auto flex items-center gap-8 rounded-full border border-rose-200/60 bg-white/80 backdrop-blur-2xl px-6 py-3 shadow-[0_8px_32px_rgba(107,16,48,0.10)]"
          style={{ transition: "box-shadow 250ms" }}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-[0.75rem] font-semibold"
              style={{ borderColor: "#6b1030", color: "#6b1030" }}
            >
              YN
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-base font-semibold italic" style={{ color: "#5a0e25" }}>
                Yasmine
              </div>
              <div className="font-serif text-base font-semibold italic" style={{ color: "#5a0e25" }}>
                Najjar
              </div>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "#6b1030" }}
          >
            LET'S TALK
            <span className="text-sm">↗</span>
          </a>
        </div>
      </header>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <BootcampSection />
      <EducationSection />
      <BeyondCodeSection />
      <ContactSection />

      {/* ── Footer ── */}
      <footer
        className="section-shell flex items-center justify-between gap-4 border-t py-8"
        style={{ borderColor: "rgba(107,16,48,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-[0.75rem] font-semibold"
            style={{ borderColor: "#6b1030", color: "#6b1030" }}
          >
            YN
          </div>
          <div>
            <div className="font-serif text-base font-semibold italic" style={{ color: "#5a0e25" }}>
              Yasmine Najjar
            </div>
            <div className="text-xs uppercase tracking-[0.22em] mt-0.5" style={{ color: "#8b4060" }}>
              AI · CLOUD · CRAFT
            </div>
          </div>
        </div>
        <div className="text-xs uppercase tracking-[0.22em]" style={{ color: "#8b4060" }}>
          © 2026 — DESIGNED WITH CARE
        </div>
      </footer>
    </main>
  );
}