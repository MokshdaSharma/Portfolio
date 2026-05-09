import { Reveal } from '@/components/reveal';
import type { AchievementItem } from '@/lib/site';

type Props = {
  items: AchievementItem[];
};

export function AchievementTimeline({ items }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.detail} delay={index * 0.08}>
          <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-cyan-300 to-fuchsia-400" />
            <p className="text-xs uppercase tracking-[0.4em] text-sky-300/80">Achievement {index + 1}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-base text-slate-200">{item.detail}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}