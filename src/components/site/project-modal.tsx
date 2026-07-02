"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, X } from "lucide-react";
import type { Project, ProjectMedia } from "@/lib/site-data";

function ProjectCarousel({ media }: { media: ProjectMedia[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMedia = media[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + media.length) % media.length);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % media.length);
  };

  return (
    <div className="space-y-4 rounded-[2rem] border border-rose-200/40 bg-white/55 p-4 shadow-[0_18px_50px_rgba(107,16,48,0.08)]">
      <div className="flex items-center justify-between gap-3 px-1">
        <div>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#8a4060]">
            Visual Walkthrough
          </div>
          <p className="mt-1 text-sm text-[#6b1030]/80">
            Slide {activeIndex + 1} of {media.length}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/70 bg-white/90 text-[#6b1030] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/70 bg-white/90 text-[#6b1030] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-rose-200/50 bg-[#f8f3f5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMedia.src}
            className="relative aspect-[16/10] w-full"
            initial={{ opacity: 0, x: 18, scale: 0.99 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -18, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeMedia.type === "image" ? (
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 56rem"
                className="object-contain bg-white"
                priority={activeIndex === 0}
              />
            ) : (
              <video
                src={activeMedia.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain bg-black"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2c0a18]/70 to-transparent" />
        
      </div>

      <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-10">
        {media.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={`${item.src}-${item.title}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-[1rem] border bg-white transition ${
                isActive
                  ? "border-[#6b1030] ring-2 ring-[#6b1030]/20"
                  : "border-rose-200/70 hover:-translate-y-0.5 hover:border-rose-300"
              }`}
              aria-label={`Open slide ${index + 1}: ${item.title}`}
              aria-pressed={isActive}
            >
              <div className="relative aspect-square bg-[#f8f3f5]">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <video src={item.src} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2c0a18]/80 to-transparent px-2 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100">
                {index + 1}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const hasGallery = Boolean(project?.media?.length);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close case study"
            className="absolute inset-0 cursor-default bg-stone-950/50 backdrop-blur-[8px]"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-rose-200/40 bg-[#faf6f7]/95 shadow-[0_50px_100px_-20px_rgba(107,16,48,0.2)] backdrop-blur-2xl"
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Accent Strip */}
            <div className="h-2 w-full shrink-0" style={{ background: project.accent }} />

            {/* Pinned Close Button */}
            <button
              aria-label="Close"
              className="absolute right-6 top-6 z-50 rounded-full border border-rose-200/60 bg-white/90 p-2.5 text-[#6b1030] shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 cursor-pointer"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Container */}
            <div className="max-h-[85vh] overflow-y-auto w-full scrollbar-thin">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_0.85fr] lg:p-12">
                
                {/* Main Content Column */}
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#6b1030] shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-[#6b1030]" />
                      {project.category}
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-[-0.03em] text-[#3d0f1f]">
                      {project.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-base leading-relaxed text-[#5a1f32]">
                    {project.summary}
                  </p>

                  {hasGallery && (
                    <ProjectCarousel key={project.id} media={project.media ?? []} />
                  )}

                  {/* Project Video Section */}
                  {project.videoUrl && (
                    <div className="my-8 space-y-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]/75">
                        Project Demonstration
                      </span>
                      <div className="relative overflow-hidden rounded-[1.5rem] border border-rose-200/50 bg-[#0d090a] shadow-[0_20px_50px_rgba(107,16,48,0.15)] w-full">
                        <div className="flex items-center justify-between border-b border-[#2d1c20] bg-[#160f11] px-4 py-3 select-none">
                          <div className="flex gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          <span className="max-w-[200px] truncate text-[10px] font-mono uppercase tracking-[0.3em] text-[#a4888e]">
                            {project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.mp4
                          </span>
                          <div className="w-10" />
                        </div>

                        <div className="relative aspect-video w-full bg-black">
                          <video
                            src={project.videoUrl}
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Outcome and Impact Cards */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-rose-200/40 bg-white/50 p-6 shadow-[0_4px_24px_rgba(107,16,48,0.02)]">
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]">
                        Outcome
                      </div>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#5a1f32]">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-rose-200/40 bg-white/50 p-6 shadow-[0_4px_24px_rgba(107,16,48,0.02)]">
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]">
                        Impact
                      </div>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-[#5a1f32]">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar Details Column */}
                <div className="space-y-6 rounded-[2rem] border border-rose-200/30 bg-white/40 p-6 backdrop-blur-md">
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]">
                      Challenge
                    </div>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-[#5a1f32]">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]">
                      Focus Areas
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-rose-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-[#6b1030] shadow-sm transition hover:bg-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6b1030] hover:bg-[#580d28] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 duration-300"
                  >
                    Discuss a similar build
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}