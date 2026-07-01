import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { awards, beyondCode, education, experiences, projects, skillGroups } from "@/lib/site-data";

export default function ResumePage() {
  return (
    <main className="min-h-screen pb-16 pt-8">
      <div className="section-shell space-y-8">
        <div className="flex items-center justify-between gap-4">
          <Button asChild variant="outline" className="rounded-full border-stone-300 bg-white/75 px-5 text-stone-700 backdrop-blur">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>
          <div className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Resume overview
          </div>
        </div>

        <section className="glass-panel overflow-hidden rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <div className="eyebrow w-fit">Yasmine Najjar</div>
              <h1 className="hero-title max-w-3xl text-[clamp(3rem,8vw,6rem)]">AI & Software Engineering</h1>
              <p className="copy-text max-w-2xl">
                Premium, recruiter-focused summary of experience, projects, skills and education.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-stone-900 px-6 text-white hover:bg-stone-800">
                  <a href="mailto:yasminenajjarb@outlook.com">
                    <ArrowUpRight className="h-4 w-4" />
                    Contact Yasmine
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-stone-500">Projects</div>
                <div className="mt-3 font-serif text-4xl text-stone-900">{projects.length}</div>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-stone-500">Skills</div>
                <div className="mt-3 font-serif text-4xl text-stone-900">{skillGroups.length}</div>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-stone-500">Awards</div>
                <div className="mt-3 font-serif text-4xl text-stone-900">{awards.length}</div>
              </div>
              <div className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-stone-500">Languages</div>
                <div className="mt-3 font-serif text-4xl text-stone-900">3</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="project-card">
            <div className="flex items-center gap-3 text-sm font-medium text-stone-500">
              <BriefcaseBusiness className="h-4 w-4" />
              Experience
            </div>
            <div className="mt-5 space-y-4">
              {experiences.map((experience) => (
                <div key={experience.company} className="rounded-[1.25rem] border border-stone-200/80 bg-white/80 p-4">
                  <div className="font-serif text-2xl text-stone-900">{experience.company}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.26em] text-stone-500">{experience.role}</div>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{experience.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="flex items-center gap-3 text-sm font-medium text-stone-500">
              <GraduationCap className="h-4 w-4" />
              Education and growth
            </div>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="rounded-[1.25rem] border border-stone-200/80 bg-white/80 p-4">
                  <div className="text-xs uppercase tracking-[0.26em] text-stone-500">{item.period}</div>
                  <div className="mt-2 font-serif text-2xl text-stone-900">{item.institution}</div>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{item.program}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.25rem] border border-stone-200/80 bg-white/80 p-4">
              <div className="text-xs uppercase tracking-[0.26em] text-stone-500">Beyond code</div>
              <div className="mt-3 space-y-3">
                {beyondCode.map((item) => (
                  <div key={item.title}>
                    <div className="font-medium text-stone-900">{item.title}</div>
                    <p className="text-sm leading-7 text-stone-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}