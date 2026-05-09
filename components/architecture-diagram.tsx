import { cn } from '@/lib/utils';

type Props = {
  nodes: string[];
  className?: string;
};

export function ArchitectureDiagram({ nodes, className }: Props) {
  return (
    <div className={cn('rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl', className)}>
      <div className="grid gap-3 md:grid-cols-5">
        {nodes.map((node, index) => (
          <div key={node} className="relative flex flex-col items-center gap-3">
            <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 px-3 text-center text-sm font-medium text-white shadow-glow">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <div className="hidden h-0.5 w-full bg-gradient-to-r from-electric/80 via-cyan-300/60 to-transparent md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}