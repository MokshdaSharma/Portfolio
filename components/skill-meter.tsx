import { cn } from '@/lib/utils';

type Props = {
  label: string;
  level: number;
  className?: string;
};

export function SkillMeter({ label, level, className }: Props) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-electric via-cobalt to-cyan-300 transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}