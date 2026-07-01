"use client";

import { useState } from "react";
import { ArrowUpRight, GitBranch, Link2, Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

type Comment = {
  id: string;
  name: string;
  email?: string;
  message: string;
  date: string;
};

const STORAGE_KEY = "portfolio-guestbook-comments-v2";

const contactItems = [
  {
    label: "Email",
    value: "yasminenajjarb@outlook.com",
    href: "mailto:yasminenajjarb@outlook.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "23330908",
    href: "tel:23330908",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yasmine-najjar-993a1721a",
    href: "https://www.linkedin.com/in/yasmine-najjar-993a1721a/",
    icon: Link2,
  },
  {
    label: "Based in",
    value: "Tunis, Tunisia",
    href: "#",
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "github.com/yasminenajjar",
    href: "#",
    icon: GitBranch,
  },
];

export function ContactSection() {
  const [comments, setComments] = useState<Comment[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const storedComments = window.localStorage.getItem(STORAGE_KEY);

      if (storedComments) {
        const parsed = JSON.parse(storedComments) as Comment[];
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (err) {
      console.error("Error loading comments:", err);
    }

    return [];
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      setStatusMsg("Please enter both name and message.");
      return;
    }
    setLoading(true);
    setStatusMsg("");

    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      email: email || "",
      message,
      date: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];

    try {
      setComments(updatedComments);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedComments));
      setName("");
      setEmail("");
      setMessage("");
      setStatusMsg("Thank you! Your note is saved on this device and appears immediately.");
    } catch (err) {
      void err;
      setStatusMsg("An error occurred while saving locally.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-band pb-24">
      <div className="section-shell space-y-12">
        {/* Heading */}
        <Reveal>
          <div className="eyebrow mb-2">09 — Contact</div>
          <h2 className="section-title">Let&apos;s design something worth remembering.</h2>
          <p className="copy-text mt-4">
            Open to opportunities, collaborations and conversations about AI, cloud and craft.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: contact items */}
          <div className="grid gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "LinkedIn" ? "noreferrer noopener" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-[1.4rem] p-5 transition-transform hover:-translate-y-1"
                  style={{
                    background: "rgba(247,236,240,0.82)",
                    border: "1px solid rgba(200,150,168,0.22)",
                    boxShadow: "0 4px 20px rgba(107,16,48,0.06)",
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Dark maroon circle */}
                    <div className="contact-icon-circle">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-[0.22em]"
                        style={{ color: "#8b4060" }}
                      >
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-base font-medium" style={{ color: "#5a0e25" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 transition group-hover:scale-110"
                    style={{ color: "#8b4060" }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Right: dark maroon contact form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
          >
            <div
              className="text-xs font-bold uppercase tracking-[0.22em] mb-2"
              style={{ color: "rgba(255,200,215,0.7)" }}
            >
              WRITE A NOTE
            </div>
            <h3 className="font-serif text-4xl font-semibold leading-tight text-white mb-8">
              Say hello — elegantly.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-white">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] opacity-80">Name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-sm"
                  />
                </label>
                <label className="flex flex-col gap-2 text-white">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] opacity-80">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email (optional)"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-sm"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] opacity-80">Message</span>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-sm resize-none"
                />
              </label>

              {statusMsg && (
                <div className="text-xs font-medium text-rose-200 mt-2">
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:opacity-80 disabled:opacity-50"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Live Guestbook Wall */}
        <div className="space-y-6 pt-12 border-t" style={{ borderColor: "rgba(107,16,48,0.12)" }}>
          <Reveal>
            <div
              className="text-xs font-bold uppercase tracking-[0.22em] mb-2"
              style={{ color: "#8b4060" }}
            >
              LIVE WALL OF NOTES
            </div>
            <h3 className="font-serif text-3xl font-semibold leading-tight mb-2" style={{ color: "#5a0e25" }}>
              Notes from visitors
            </h3>
            <p className="copy-text text-sm">
              Any message submitted above is stored locally in your browser, so it works on Vercel without a database.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    className="rounded-[1.5rem] border p-6 flex flex-col justify-between"
                    style={{
                      background: "rgba(247,236,240,0.82)",
                      borderColor: "rgba(200,150,168,0.22)",
                      boxShadow: "0 4px 20px rgba(107,16,48,0.04)",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    layout
                  >
                    <div className="space-y-4">
                      <p className="text-sm leading-7 italic font-serif text-stone-800">
                        &ldquo;{comment.message}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-rose-200/40">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-[#6b1030] text-white">
                        {comment.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-rose-950">
                          {comment.name}
                        </div>
                        <div className="text-[10px] text-stone-500 mt-0.5">
                          {new Date(comment.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="md:col-span-2 lg:col-span-3 rounded-[1.5rem] border border-dashed border-rose-200/50 bg-white/55 p-8 text-center text-sm leading-7 text-stone-600">
                  No recommendations yet. Be the first to leave a note.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}