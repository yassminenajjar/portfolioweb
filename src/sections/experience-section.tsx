"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseBusiness, X, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/site-data";
import { Reveal } from "@/components/site/reveal";

const companyLogos: Record<string, string> = {
  "Sofiatech": "/sofiatech.jpg",
  "COFICAB — Center of Excellence": "/coficab.jpg",
  "Bi Geek": "/bi-geek.png",
  "OACA": "/oaca.jpg",
};

const experienceDetails: Record<string, string[]> = {
  "Sofiatech": [
    "Discover cloud and AI concepts and tools integrated with AWS services.",
    "Designing and implementing a technical project leveraging AWS cloud infrastructure and AI models."
  ],
  "COFICAB — Center of Excellence": [
    "Designed and built predictive AI workflows for production operators, reducing manual diagnostic times.",
    "Integrated real-time telemetry pipelines with decision support and virtual assistant guidance.",
    "Deployed scalable Flask/Docker services connecting production floor data with Power BI interfaces."
  ],
  "Bi Geek": [
    "Architected reusable web components and dashboards in Angular under clean architecture practices.",
    "Developed robust REST API endpoints in Spring Boot with enterprise-grade error handling.",
    "Participated in agile ceremonies (scrum, sprint planning) to coordinate development and deployment tasks."
  ],
  "OACA": [
    "Monitored and maintained relational databases (SQL Server) to ensure high availability of critical flight statistics.",
    "Assisted senior administrators in local network optimization and diagnostic checks.",
    "Authored SQL stored procedures and scripts to automate routine reporting and data verification."
  ]
};

export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[number] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const cardStyle = {
    background: "rgba(247,236,240,0.85)",
    borderColor: "rgba(200,150,168,0.22)",
    boxShadow: "0 10px 30px rgba(107,16,48,0.06), inset 0 1px 0 rgba(255,255,255,0.65)",
  };

  return (
    <section id="experience" className="section-band">
      <div className="section-shell space-y-10">
        {/* Heading */}
        <Reveal>
          <div className="eyebrow mb-2">02 — Experience</div>
          <h2 className="section-title mb-3">Selected chapters of a young career.</h2>
          <p className="copy-text">Professional growth, engineering roles, and contributions in full-stack dev and AI.</p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((experience, index) => {
            const logoUrl = companyLogos[experience.company] || "/next.svg";
            return (
              <motion.article
                key={experience.company}
                onClick={() => setSelectedExp(experience)}
                className="rounded-[1.5rem] border p-6 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                style={cardStyle}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="space-y-5">
                  <div className="flex flex-col gap-4">
                    <div className="w-20 h-20 rounded-2xl border flex items-center justify-center p-3 bg-white overflow-hidden shadow-sm shrink-0">
                      <img src={logoUrl} alt={experience.company} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3
                        className="font-serif text-xl font-semibold leading-tight"
                        style={{ color: "#5a0e25" }}
                      >
                        {experience.company}
                      </h3>
                      <div
                        className="mt-1 text-xs font-bold uppercase tracking-[0.15em]"
                        style={{ color: "#8b4060" }}
                      >
                        {experience.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-7" style={{ color: "#7a3050" }}>
                    {experience.summary}
                  </p>
                </div>
                <div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {experience.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-[10px] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-6 w-full text-center py-2.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border hover:bg-stone-50"
                    style={{
                      borderColor: "rgba(107, 16, 48, 0.15)",
                      color: "#5a0e25",
                      background: "rgba(255,255,255,0.4)"
                    }}
                  >
                    View Details ↗
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedExp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExp(null)}
                className="absolute inset-0 bg-stone-950/70 backdrop-blur-md"
              />
              
              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border p-8 md:p-10 shadow-2xl bg-[#faf5f6] text-[#5a0e25]"
                style={{
                  borderColor: "rgba(107, 16, 48, 0.15)",
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
  
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-2xl border flex items-center justify-center p-4 bg-white overflow-hidden shadow-sm shrink-0">
                    <img
                      src={companyLogos[selectedExp.company]}
                      alt={selectedExp.company}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-semibold leading-tight">
                      {selectedExp.company}
                    </h3>
                    <div className="text-sm font-bold uppercase tracking-[0.2em] mt-1" style={{ color: "#8b4060" }}>
                      {selectedExp.role}
                    </div>
                  </div>
                </div>
  
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4060" }}>
                      Overview
                    </h4>
                    <p className="text-base leading-8 text-stone-700">
                      {selectedExp.summary}
                    </p>
                  </div>
  
                  {/* Local extended details */}
                  {experienceDetails[selectedExp.company] && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4060" }}>
                        Key Responsibilities & Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {experienceDetails[selectedExp.company].map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-stone-700 leading-relaxed text-sm">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4060" }}>
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.tags.map((tag) => (
                        <span key={tag} className="tag-pill text-xs px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}