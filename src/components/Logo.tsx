import { Bot } from 'lucide-react';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
};

const sizeMap = {
  sm: { box: 'h-8 w-8', icon: 18, text: 'text-lg' },
  md: { box: 'h-10 w-10', icon: 22, text: 'text-xl' },
  lg: { box: 'h-12 w-12', icon: 26, text: 'text-2xl' },
};

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const s = sizeMap[size];
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className={`${s.box} rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30`}
      >
        <Bot size={s.icon} className="text-white" strokeWidth={2.2} />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${s.text} font-display font-extrabold tracking-tight text-gray-900 dark:text-white`}>
            BusinessBuddy
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            AI
          </span>
        </div>
      )}
    </div>
  );
}
