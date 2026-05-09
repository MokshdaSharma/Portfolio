import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="text-xs uppercase tracking-[0.4em] text-sky-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </div>
  );
}