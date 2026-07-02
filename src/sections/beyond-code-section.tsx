"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, X } from "lucide-react";
import { beyondCode, languages } from "@/lib/site-data";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

type BeyondCodeItem = (typeof beyondCode)[number];

function BeyondCodeModal({
  item,
  onClose,
}: {
  item: BeyondCodeItem | null;
  onClose: () => void;
}) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    if (!item) return;

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
  }, [item, onClose]);

  const media = item?.media ?? [];
  const hasMedia = media.length > 0;
  const activeMedia = media[activeMediaIndex];

  const goPrevious = () => {
    if (!hasMedia) return;
    setActiveMediaIndex((currentIndex) => (currentIndex - 1 + media.length) % media.length);
  };

  const goNext = () => {
    if (!hasMedia) return;
    setActiveMediaIndex((currentIndex) => (currentIndex + 1) % media.length);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close details"
            className="absolute inset-0 cursor-default bg-stone-950/55 backdrop-blur-[8px]"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-rose-200/40 bg-[#faf6f7]/96 shadow-[0_50px_100px_-20px_rgba(107,16,48,0.22)] backdrop-blur-2xl"
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #6b1030, #b96b83)" }} />

            <button
              aria-label="Close"
              className="absolute right-6 top-6 z-20 rounded-full border border-rose-200/60 bg-white/90 p-2.5 text-[#6b1030] shadow-md backdrop-blur-md transition-all hover:scale-105 hover:bg-white active:scale-95"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[85vh] overflow-y-auto scrollbar-thin">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#6b1030] shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Leadership, voice and presence
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-4xl leading-[1.02] tracking-[-0.03em] text-[#3d0f1f] sm:text-5xl">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#5a1f32]">{item.description}</p>
                  </div>

                  {hasMedia ? (
                    <div className="space-y-4 rounded-[2rem] border border-rose-200/40 bg-white/55 p-4 shadow-[0_18px_50px_rgba(107,16,48,0.08)]">
                      <div className="flex items-center justify-between gap-3 px-1">
                        <div>
                          <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#8a4060]">
                            Media
                          </div>
                          <p className="mt-1 text-sm text-[#6b1030]/80">
                            Slide {activeMediaIndex + 1} of {media.length}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={goPrevious}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/70 bg-white/90 text-[#6b1030] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                            aria-label="Previous media"
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={goNext}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/70 bg-white/90 text-[#6b1030] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                            aria-label="Next media"
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
                                sizes="(max-width: 1024px) 100vw, 42rem"
                                className="object-contain bg-white"
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

                      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                        {media.map((mediaItem, index) => {
                          const isActive = index === activeMediaIndex;

                          return (
                            <button
                              key={`${mediaItem.src}-${mediaItem.title}`}
                              type="button"
                              onClick={() => setActiveMediaIndex(index)}
                              className={`relative overflow-hidden rounded-[0.9rem] border bg-white transition ${
                                isActive
                                  ? "border-[#6b1030] ring-2 ring-[#6b1030]/20"
                                  : "border-rose-200/70 hover:-translate-y-0.5 hover:border-rose-300"
                              }`}
                              aria-label={`Open media ${index + 1}: ${mediaItem.title}`}
                              aria-pressed={isActive}
                            >
                              <div className="relative aspect-square bg-[#f8f3f5]">
                                {mediaItem.type === "image" ? (
                                  <Image
                                    src={mediaItem.src}
                                    alt={mediaItem.alt}
                                    fill
                                    sizes="96px"
                                    className="object-cover transition duration-300 hover:scale-[1.03]"
                                  />
                                ) : (
                                  <video src={mediaItem.src} className="h-full w-full object-cover" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-[2rem] border border-dashed border-rose-200/80 bg-white/60 p-6 text-sm leading-relaxed text-[#6b1030]/75">
                      Media placeholders are ready here. Send the photos or videos for this experience one by one and I will plug them into this carousel.
                    </div>
                  )}
                </div>

                <div className="space-y-6 rounded-[2rem] border border-rose-200/30 bg-white/42 p-6 backdrop-blur-md">
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]">
                      Details
                    </div>
                    <div className="mt-3 space-y-3">
                      {(item.details ?? [item.description]).map((detail) => (
                        <div key={detail} className="rounded-[1.25rem] border border-rose-200/50 bg-white/80 p-4 text-sm leading-7 text-[#5a1f32]">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#8a4060]">
                      What this experience shows
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.title
                        .split(" ")
                        .slice(0, 3)
                        .map((tag) => (
                          <span key={tag} className="rounded-full border border-rose-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-[#6b1030] shadow-sm">
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
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

export function BeyondCodeSection() {
  const [activeItem, setActiveItem] = useState<BeyondCodeItem | null>(null);

  return (
    <section className="section-band">
      <div className="section-shell space-y-10">
        <div className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="08 — Beyond Code"
              title="Leadership, voice and presence."
              description="A portfolio is stronger when it shows how someone moves in a room, not just how they ship code."
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {beyondCode.map((item, index) => (
              <motion.article
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveItem(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveItem(item);
                  }
                }}
                className="glass-panel group cursor-pointer rounded-[1.75rem] p-5 sm:p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(107,16,48,0.12)] focus:outline-none focus:ring-2 focus:ring-[#6b1030]/20"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#6b1030]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Experience {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-serif text-2xl leading-[1.05] text-rose-950">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-rose-200/70 bg-white/80 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#6b1030] transition group-hover:bg-white">
                    Open
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-rose-800">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(item.details ?? []).slice(0, 2).map((detail) => (
                    <span key={detail} className="rounded-full border border-rose-200/70 bg-white/70 px-3 py-1 text-[0.72rem] font-medium text-[#6b1030]">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Languages
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {languages.map((language, index) => (
              <motion.article
                key={language.language}
                className="project-card min-h-[10rem]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-rose-700">Language</div>
                <h3 className="mt-4 font-serif text-3xl text-rose-950">{language.language}</h3>
                <div className="mt-2 text-sm uppercase tracking-[0.26em] text-rose-700">{language.level}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <BeyondCodeModal
        key={activeItem?.title ?? "beyond-code-modal"}
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
}