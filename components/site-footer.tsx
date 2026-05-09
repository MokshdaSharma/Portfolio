import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactDetails, profile } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">AI systems engineering, GenAI product thinking, and recruiter-ready portfolio design.</p>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <Link href={`mailto:${contactDetails.email}`} aria-label="Email">
            <Mail className="h-5 w-5 transition hover:text-white" />
          </Link>
          <Link href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 transition hover:text-white" />
          </Link>
          <Link href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 transition hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}