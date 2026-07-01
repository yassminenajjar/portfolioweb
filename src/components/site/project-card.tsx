"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/site-data";

export function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      className="project-card group text-left w-full"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
    >
      {/* Accent top strip */}
      <div
        className="absolute inset-x-0 top-0 h-1 rounded-t-[1.5rem]"
        style={{ background: project.accent }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 pt-1">
          {/* Category badge */}
          <div
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]"
            style={{
              borderColor: "rgba(180,120,145,0.3)",
              background: "rgba(247,236,240,0.75)",
              color: "#6b1030",
            }}
          >
            {project.category}
          </div>
          <h3
            className="font-serif text-[2rem] leading-[0.96] tracking-[-0.04em]"
            style={{ color: "#5a0e25" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Arrow button */}
        <span
          className="mt-1 rounded-full border p-2 transition group-hover:text-white"
          style={{
            borderColor: "rgba(180,120,145,0.35)",
            color: "#6b1030",
          }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-4 text-sm leading-7" style={{ color: "#7a3050" }}>
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div
        className="mt-7 flex items-center justify-between text-xs font-bold uppercase tracking-[0.28em]"
        style={{ color: "#8b4060" }}
      >
        <span>Case study</span>
        <span className="transition group-hover:translate-x-1" style={{ color: "#5a0e25" }}>
          Open details
        </span>
      </div>
    </motion.button>
  );
}