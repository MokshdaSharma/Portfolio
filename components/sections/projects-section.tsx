import { SectionHeading } from '@/components/section-heading';
import { ProjectCard } from '@/components/project-card';
import type { ProjectItem } from '@/lib/site';

type Props = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: Props) {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Projects"
        description="Technical implementations and engineering work." 
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}