import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Download } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { TypingText } from '@/components/typing-text';
import { anchorButtonClassName } from '@/components/ui/button';
import { profile, profilePhotoPath, typingPhrases } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(138,92,255,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(27,79,217,0.24),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(55,208,255,0.14),transparent_32%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-24">
        <div className="space-y-8">
          <Reveal>
            <TypingText phrases={typingPhrases} />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.45em] text-sky-300/80">{profile.location}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{profile.role}</p>
              <p className="max-w-3xl text-sm leading-7 text-slate-400 md:text-base">{profile.headline}</p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap gap-3">
              <Link href="/#projects" className={anchorButtonClassName('primary')}>
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/resume-placeholder.txt" className={anchorButtonClassName('secondary')} download>
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
              <Link href="/#contact" className={anchorButtonClassName('ghost')}>
                Contact Me
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Degree</p>
                <p className="mt-3 text-base font-medium text-white">{profile.degree}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">CGPA</p>
                <p className="mt-3 text-base font-medium text-white">{profile.cgpa}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Focus</p>
                <p className="mt-3 text-base font-medium text-white">AI systems + product engineering</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-glow backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(138,92,255,0.10),transparent_45%,rgba(55,208,255,0.10))]" />
            <div className="relative space-y-5">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60">
                <Image
                  src={profilePhotoPath}
                  alt={`${profile.name} portrait`}
                  width={1200}
                  height={1200}
                  className="h-[22rem] w-full object-cover object-center"
                  unoptimized
                />
              </div>
              {/* Portrait only - trimmed per design refinement */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}