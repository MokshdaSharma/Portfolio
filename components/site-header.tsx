import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { navigation } from '@/lib/site';
import { buttonClassName } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white shadow-glow transition group-hover:border-electric/40">
            MS
          </div>
          <div>
            <p className="text-sm font-medium text-white">Mokshda Sharma</p>
            <p className="text-xs text-slate-400">ML Engineer · Data Scientist · GenAI Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/resume-placeholder.txt" className={buttonClassName('secondary', 'hidden text-xs md:inline-flex')} download>
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
          <Link href="/#contact" className={buttonClassName('primary', 'text-xs')}>
            Contact Me
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}