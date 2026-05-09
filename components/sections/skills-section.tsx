import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SkillMeter } from '@/components/skill-meter';
import { skillGroups } from '@/lib/site';

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="Languages, frameworks, AI specializations, and deployment tools."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {Object.values(skillGroups).map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                  Depth {group.level}%
                </span>
              </div>
              <SkillMeter label={group.title} level={group.level} className="mt-5" />
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}