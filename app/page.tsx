import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { ProjectsSection } from '@/components/sections/projects-section';
import { LeadershipSection } from '@/components/sections/leadership-section';
import { PublicationSection } from '@/components/sections/publication-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SectionHeading } from '@/components/section-heading';
import { experience, projects, publications, achievements, leadership } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <section id="experience" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Internships and roles demonstrating technical execution."
        />
        <div className="mt-10">
          <ExperienceTimeline items={experience} />
        </div>
      </section>
      <LeadershipSection items={leadership} />
      <ProjectsSection projects={projects} />
      <PublicationSection publications={publications} />
      <AchievementsSection achievements={achievements} />
      <ContactSection />
    </>
  );
}