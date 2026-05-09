import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { publication } from '@/lib/site';
import { buttonClassName } from '@/components/ui/button';

export const metadata: Metadata = {
  title: publication.title,
  description: publication.abstract
};

export default function PublicationPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-20">
      <Link href="/#research" className={buttonClassName('secondary')}>
        <ArrowLeft className="h-4 w-4" />
        Back to Research
      </Link>

      <article className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <p className="text-xs uppercase tracking-[0.4em] text-sky-300/80">Publication Detail</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{publication.title}</h1>
        <p className="mt-3 text-sm text-slate-300">{publication.journal} ({publication.year})</p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Abstract Preview</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">{publication.abstract}</p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {publication.points.map((point) => (
            <div key={point} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">
              {point}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={publication.readUrl} className={buttonClassName('primary')}>
            <ExternalLink className="h-4 w-4" />
            Read Publication
          </Link>
        </div>
      </article>
    </section>
  );
}