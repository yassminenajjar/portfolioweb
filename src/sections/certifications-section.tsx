"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/site-data";
import { Reveal } from "@/components/site/reveal";

const certImages: Record<string, string> = {
  "Microsoft PL-300": "/cert-ms.jpg",
  "IBM Big Data Engineering": "/cert-ibm.jpg",
  "Scrum Master": "/cert-scrum.jpg",
};

export function CertificationsSection() {
  const filteredAwards = awards.filter(award => award.title in certImages);

  const cardStyle = {
    background: "rgba(247,236,240,0.85)",
    borderColor: "rgba(200,150,168,0.22)",
    boxShadow: "0 10px 30px rgba(107,16,48,0.06), inset 0 1px 0 rgba(255,255,255,0.65)",
  };

  return (
    <section id="certifications" className="section-band">
      <div className="section-shell space-y-10">
        <Reveal>
          <div className="eyebrow mb-2">05 — Certifications</div>
          <h2 className="section-title">Credentials and professional validation.</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredAwards.map((award, index) => {
            const imagePath = certImages[award.title];
            return (
              <motion.article
                key={award.title}
                className="rounded-[1.5rem] border p-5 flex flex-col justify-between"
                style={cardStyle}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ delay: index * 0.08 }}
              >
                <div>
                  {/* Large Certificate Card Image */}
                  {imagePath && (
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-stone-200/40 bg-white">
                      <img
                        src={imagePath}
                        alt={award.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  <div
                    className="font-serif text-xl font-semibold leading-snug"
                    style={{ color: "#5a0e25" }}
                  >
                    {award.title}
                  </div>
                  <div
                    className="mt-1 text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: "#8b4060" }}
                  >
                    {award.issuer}
                  </div>
                  {award.description && (
                    <p className="mt-3 text-sm leading-6" style={{ color: "#7a3050" }}>
                      {award.description}
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}