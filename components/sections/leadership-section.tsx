import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import type { LeadershipItem } from '@/lib/site';

type Props = {
  items: LeadershipItem[];
};

export function LeadershipSection({ items }: Props) {
  return (
    <section id="leadership" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Leadership"
        title="Leadership"
        description="Campus leadership and student organization roles."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.08}>
            <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Leadership Role</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.organization}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">{item.location}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}