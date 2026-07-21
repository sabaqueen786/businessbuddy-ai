import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
