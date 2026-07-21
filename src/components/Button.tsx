import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5',
  secondary:
    'bg-white text-brand-700 border border-brand-200 shadow-sm hover:bg-brand-50 dark:bg-slate-800 dark:text-brand-300 dark:border-slate-700 dark:hover:bg-slate-700',
  ghost:
    'text-brand-700 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-slate-800',
  outline:
    'border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white dark:text-brand-400 dark:border-brand-400 dark:hover:bg-brand-500 dark:hover:text-white',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
