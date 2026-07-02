"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { education } from "@/lib/site-data";
import { Reveal } from "@/components/site/reveal";

export function EducationSection() {
  return (
    <section id="education" className="section-band">
      <div className="section-shell space-y-12">
        <Reveal>
          <div className="eyebrow mb-2">07 — Education</div>
          <h2 className="section-title">
            The Foundation of
            <br />
            My Journey.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-rose-300/80 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {education.map((item, index) => {
              const isEsprit = item.institution === "ESPRIT";
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.institution}
                  className="relative grid gap-4 pl-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:pl-0"
                >
                  <div className={`${isLeft ? "lg:pr-12" : "lg:col-start-3 lg:pl-12"}`}>
                    {isLeft && (
                      <motion.article
                        className="project-card relative overflow-hidden text-left"
                        style={{
                          background: "rgba(247,236,240,0.86)",
                          borderColor: isEsprit ? "rgba(180,120,145,0.24)" : "rgba(120,145,145,0.24)",
                        }}
                        initial={{ opacity: 0, y: 18, scale: 0.985 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-1"
                            style={{
                              background: isEsprit
                                ? "linear-gradient(90deg, #6b1030, #c07b92)"
                                : "linear-gradient(90deg, #265f9b, #8fb6e8)",
                          }}
                        />
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.2rem] border border-white/60 bg-white shadow-[0_10px_26px_rgba(107,16,48,0.08)]">
                            <Image
                              src={isEsprit ? "/esprit-logo.jpg" : "/istic-logo.jpg"}
                              alt={`${item.institution} logo`}
                              fill
                              sizes="64px"
                              className="object-contain p-2"
                            />
                          </div>

                          <div>
                            <div
                              className="inline-flex items-center gap-2 rounded-full border bg-white/75 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]"
                              style={{
                                  color: isEsprit ? "#6b1030" : "#265f9b",
                                  borderColor: isEsprit ? "rgba(180,120,145,0.22)" : "rgba(120,165,220,0.24)",
                              }}
                            >
                              <Calendar className="h-3.5 w-3.5" />
                              {item.period}
                            </div>
                            <h3 className="mt-3 font-serif text-3xl leading-[1.02] tracking-[-0.04em] text-[#5a0e25]">
                              {item.institution}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#7a3050]">
                          {item.program}
                        </p>
                      </motion.article>
                    )}
                  </div>

                  <div className="relative z-10 hidden lg:flex lg:col-start-2 lg:justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/70 bg-white/95 shadow-[0_10px_28px_rgba(107,16,48,0.12)]">
                      <div className="h-3 w-3 rounded-full" style={{ background: isEsprit ? "#6b1030" : "#4b6c68" }} />
                    </div>
                  </div>

                  <div className={`${isLeft ? "lg:col-start-3 lg:pl-12" : "lg:pr-12"}`}>
                    {!isLeft && (
                      <motion.article
                        className="project-card relative overflow-hidden text-left"
                        style={{
                          background: "rgba(247,236,240,0.86)",
                          borderColor: isEsprit ? "rgba(180,120,145,0.24)" : "rgba(120,145,145,0.24)",
                        }}
                        initial={{ opacity: 0, y: 18, scale: 0.985 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-1"
                          style={{
                            background: isEsprit
                              ? "linear-gradient(90deg, #6b1030, #c07b92)"
                              : "linear-gradient(90deg, #466f6a, #88a9a3)",
                          }}
                        />
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.2rem] border border-white/60 bg-white shadow-[0_10px_26px_rgba(107,16,48,0.08)]">
                            <Image
                              src={isEsprit ? "/esprit-logo.jpg" : "/istic-logo.jpg"}
                              alt={`${item.institution} logo`}
                              fill
                              sizes="64px"
                              className="object-contain p-2"
                            />
                          </div>

                          <div>
                            <div
                              className="inline-flex items-center gap-2 rounded-full border bg-white/75 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]"
                              style={{
                                color: isEsprit ? "#6b1030" : "#4b6c68",
                                borderColor: isEsprit ? "rgba(180,120,145,0.22)" : "rgba(120,145,145,0.22)",
                              }}
                            >
                              <Calendar className="h-3.5 w-3.5" />
                              {item.period}
                            </div>
                            <h3 className="mt-3 font-serif text-3xl leading-[1.02] tracking-[-0.04em] text-[#5a0e25]">
                              {item.institution}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#7a3050]">
                          {item.program}
                        </p>
                      </motion.article>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}