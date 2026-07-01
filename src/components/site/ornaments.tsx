import { cn } from "@/lib/utils";

function Flower({ className }: { className: string }) {
  return (
    <div className={cn("pointer-events-none absolute", className)}>
      <div className="relative h-24 w-24">
        <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-900/10 bg-white/70 shadow-sm" />
        <span className="absolute left-1/2 top-0 h-12 w-6 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200/55 to-transparent blur-[1px]" />
        <span className="absolute left-1/2 top-1/2 h-12 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-gradient-to-b from-rose-200/70 to-transparent" />
        <span className="absolute left-1/2 top-1/2 h-12 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-gradient-to-b from-rose-200/70 to-transparent" />
        <span className="absolute left-1/2 top-1/2 h-16 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-stone-300/55 to-transparent" />
        <span className="absolute left-1/2 top-1/2 h-5 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-stone-300/55 to-transparent" />
      </div>
    </div>
  );
}

export function FloralDecorations() {
  return (
    <>
      <Flower className="left-6 top-36 opacity-70 sm:left-16" />
      <Flower className="right-8 top-[22rem] scale-75 opacity-45 sm:right-20" />
      <Flower className="left-[8%] top-[62rem] scale-50 opacity-30" />
      <Flower className="right-[12%] top-[98rem] scale-[0.6] opacity-35" />
      <Flower className="left-[4%] top-[168rem] scale-[0.4] opacity-25" />
      <Flower className="right-[4%] top-[214rem] scale-[0.45] opacity-30" />
    </>
  );
}

export function SectionSeparator() {
  return <div className="mx-auto my-0 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-stone-900/10 to-transparent" />;
}