import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { ArchitectureDiagram } from '@/components/architecture-diagram';
import { Reveal } from '@/components/reveal';
import { buttonClassName } from '@/components/ui/button';
import { getProjectBySlug, projects } from '@/lib/site';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/projects" className={buttonClassName('secondary')}>
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>
        <div className="flex flex-wrap gap-3">
          <Link href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonClassName('secondary')}>
            <Github className="h-4 w-4" />
            GitHub Button
          </Link>
          <Link href={project.liveDemoUrl} className={buttonClassName('primary')}>
            <ExternalLink className="h-4 w-4" />
            Live Demo Button
          </Link>
        </div>
      </div>

      <Reveal className="mt-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-sky-300/80">Project Detail</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">{project.tagline}</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Problem Statement</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.problemStatement}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Tech Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Key Features</p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ArchitectureDiagram nodes={project.architecture} />
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Challenges & Solutions</p>
            <ul className="mt-4 flex-1 space-y-3 text-sm leading-7 text-slate-300">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Impact</p>
            <ul className="mt-4 flex-1 space-y-3 text-sm leading-7 text-slate-300">
              {project.impact.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}