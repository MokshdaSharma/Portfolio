import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { buttonClassName } from '@/components/ui/button';
import type { PublicationItem } from '@/lib/site';

type Props = {
  publications: PublicationItem[];
};

export function PublicationSection({ publications }: Props) {
  return (
    <section id="research" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Research"
        title="Research & Publications"
        description="Peer-reviewed papers and research contributions."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {publications.map((publication, index) => (
          <Reveal key={publication.slug} delay={index * 0.08}>
            <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Publication</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{publication.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{publication.journal} ({publication.year})</p>
                </div>
                <Link href={publication.readUrl} className={buttonClassName('secondary', 'w-fit text-xs')}>
                  Read Publication
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300">{publication.abstract}</p>

              <div className="mt-6 grid gap-3">
                {publication.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                    {point}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}