import { SectionHeading } from '@/components/section-heading';
import { AchievementTimeline } from '@/components/achievement-timeline';
import type { AchievementItem } from '@/lib/site';

type Props = {
  achievements: AchievementItem[];
};

export function AchievementsSection({ achievements }: Props) {
  return (
    <section id="achievements" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Achievements"
        title="Achievements"
        description="Awards and recognitions."
      />

      <div className="mt-10">
        <AchievementTimeline items={achievements} />
      </div>
    </section>
  );
}