import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProjectsSection } from '@/components/sections/projects-section';
import { buttonClassName } from '@/components/ui/button';
import { projects } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Detailed AI/ML, GenAI, and data science case studies by Mokshda Sharma.'
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sky-300/80">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Case studies built for AI recruiters.</h1>
        </div>
        <Link href="/" className={buttonClassName('secondary')}>
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>
      </div>
      <div className="mt-10">
        <ProjectsSection projects={projects} />
      </div>
    </section>
  );
}