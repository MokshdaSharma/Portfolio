import { Reveal } from '@/components/reveal';
import type { ExperienceItem } from '@/lib/site';

type Props = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: Props) {
  return (
    <div className="relative space-y-6">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-electric via-cyan-300 to-transparent md:left-6" />
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
          <div className="relative pl-14 md:pl-16">
            <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-xs font-semibold text-white shadow-glow md:left-1 md:h-12 md:w-12">
              {index + 1}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-sky-300/90">{item.company} · {item.location}</p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                  {item.duration}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-white/8 bg-black/15 p-4">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}