import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-ink';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-electric via-cobalt to-[#37d0ff] text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(59,130,246,0.35)]',
  secondary:
    'border border-white/12 bg-white/6 text-white backdrop-blur-md hover:border-electric/45 hover:bg-white/10',
  ghost: 'text-slate-200 hover:bg-white/8 hover:text-white'
};

export function buttonClassName(variant: Variant = 'primary', className?: string) {
  return cn(baseClasses, variants[variant], className);
}

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({ className, variant = 'primary', ...props }: NativeButtonProps & { variant?: Variant }) {
  return <button className={buttonClassName(variant, className)} {...props} />;
}

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function anchorButtonClassName(variant: Variant = 'primary', className?: string) {
  return buttonClassName(variant, className);
}

export type { Variant as ButtonVariant, AnchorProps };