"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Database, BarChart3, Users } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const bootcampSkills = [
  {
    title: "Python",
    description: "Gained hands-on expertise in Python for data processing, analysis, and building predictive models.",
    icon: Code2,
  },
  {
    title: "Data Science",
    description: "Explored machine learning and deep learning techniques, developing skills to create and deploy models that drive data-driven decisions.",
    icon: Brain,
  },
  {
    title: "SQL",
    description: "Mastered SQL for efficient data extraction, querying, and manipulation, crucial for managing and analyzing large datasets.",
    icon: Database,
  },
  {
    title: "Power BI",
    description: "Developed proficiency in crafting interactive dashboards and visualizations, enhancing data representation and business intelligence.",
    icon: BarChart3,
  },
  {
    title: "Scrum",
    description: "Achieved Scrum certification through comprehensive training, boosting my project management and agile development skills.",
    icon: Users,
  },
];

export function BootcampSection() {
  const cardStyle = {
    background: "rgba(247,236,240,0.85)",
    borderColor: "rgba(200,150,168,0.22)",
    boxShadow: "0 10px 30px rgba(107,16,48,0.06), inset 0 1px 0 rgba(255,255,255,0.65)",
  };

  return (
    <section id="bootcamp" className="section-band">
      <div className="section-shell space-y-10">
        <Reveal>
          <div className="eyebrow mb-2">06 — Bootcamp</div>
          <h2 className="section-title">Business Analytics & Data Science Bootcamp</h2>
          <p className="copy-text mt-4">
            An intensive 4-month professional program at Bi Geek designed to bridge business needs with data-driven technologies.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Column: Context & Overview */}
          <div className="space-y-6">
            <motion.div
              className="rounded-[1.5rem] border p-8 space-y-6"
              style={cardStyle}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center p-2 shadow-sm shrink-0">
                  <img src="/bi-geek.png" alt="Bi Geek Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight" style={{ color: "#5a0e25" }}>
                    BI-Geek Training
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] mt-0.5" style={{ color: "#8b4060" }}>
                    4-Month Intensive Program
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-7 text-stone-700">
                <p>
                  Completed a rigorous, practical training path focused on turning raw telemetry and corporate databases into actionable business intelligence.
                </p>
                <p>
                  The bootcamp offered a nurturing, hands-on learning environment guided by expert instructors, culminating in collaborative projects that modeled real-world industry scenarios.
                </p>
                <p className="italic font-serif text-base" style={{ color: "#8b4060" }}>
                  "I am grateful to the BI-Geek team and my fellow participants for their guidance and collaboration throughout this journey. It has marked a pivotal moment in my path toward professional excellence."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {bootcampSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  className="rounded-[1.25rem] border p-5 flex flex-col justify-between"
                  style={{
                    background: "rgba(247,236,240,0.55)",
                    borderColor: "rgba(200,150,168,0.18)",
                    boxShadow: "0 6px 20px rgba(107,16,48,0.03)",
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white" style={{ background: "#8b1030" }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-lg font-semibold" style={{ color: "#5a0e25" }}>
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-xs leading-6 text-stone-600">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
