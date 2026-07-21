import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '@/context/ThemeContext';
import { navigate, type Route } from '@/lib/router';

type NavItem = { label: string; route: Route };

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', route: 'home' },
  { label: 'Chat', route: 'chat' },
  { label: 'About', route: 'about' },
  { label: 'Contact', route: 'contact' },
  { label: 'FAQ', route: 'faq' },
];

type NavbarProps = {
  current: Route;
};

export function Navbar({ current }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (route: Route) => {
    navigate(route);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200/70 dark:border-slate-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <button onClick={() => go('home')} className="flex-shrink-0" aria-label="BusinessBuddy AI home">
            <Logo />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.route}
                onClick={() => go(item.route)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  current === item.route
                    ? 'text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-slate-800'
                    : 'text-gray-700 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-gray-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="h-10 w-10 rounded-lg flex items-center justify-center text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => go('chat')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
            >
              Start Chat
            </button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden h-10 w-10 rounded-lg flex items-center justify-center text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in">
          <div className="absolute inset-0 bg-white dark:bg-slate-900" />
          <div className="relative px-6 py-6 space-y-2">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.route}
                onClick={() => go(item.route)}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all animate-slide-in-left opacity-0 ${
                  current === item.route
                    ? 'text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-slate-800'
                    : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('chat')}
              className="w-full mt-3 px-5 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-base font-semibold shadow-lg shadow-brand-500/30 animate-slide-in-left opacity-0"
              style={{ animationDelay: `${NAV_ITEMS.length * 60}ms` }}
            >
              Start Chat
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
