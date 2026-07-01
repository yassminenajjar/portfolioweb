"use client";

import { useState } from "react";
import { projects } from "@/lib/site-data";
import { ProjectCard } from "@/components/site/project-card";
import { ProjectModal } from "@/components/site/project-modal";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="section-band">
      <div className="section-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="03 — Selected Work"
            title="Projects, crafted with precision."
            description="A small, curated portfolio. Each piece treated as a couture object."
          />
        </Reveal>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}