import Link from 'next/link';
import { Github } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { buttonClassName } from '@/components/ui/button';
import type { ProjectItem } from '@/lib/site';

type Props = {
  project: ProjectItem;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-white/8">
        <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonClassName('secondary', 'text-xs')}>
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </article>
    </Reveal>
  );
}