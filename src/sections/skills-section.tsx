"use client";

import { motion } from "framer-motion";
import { Cloud, Database, MonitorSmartphone, Server, Sparkles } from "lucide-react";
import { skillGroups } from "@/lib/site-data";
import { Reveal } from "@/components/site/reveal";

const icons = {
  sparkles: Sparkles,
  server: Server,
  monitor: MonitorSmartphone,
  database: Database,
  cloud: Cloud,
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="section-band">
      <div className="section-shell space-y-10">
        {/* Heading */}
        <Reveal>
          <div className="eyebrow mb-2">04 — Skills</div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title">A galaxy of crafts.</h2>
            <p className="copy-text lg:max-w-sm lg:text-right">
              Languages, frameworks and ideas — orbiting one curious mind.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <motion.article
                key={group.title}
                className="skill-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Icon + title row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="skill-icon-circle">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="font-serif text-2xl font-semibold"
                    style={{ color: "#5a0e25" }}
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}