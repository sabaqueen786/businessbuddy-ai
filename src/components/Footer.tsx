import { Bot, Mail, MapPin, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { navigate, type Route } from '@/lib/router';

type FooterLink = { label: string; route: Route };

const quickLinks: FooterLink[] = [
  { label: 'Home', route: 'home' },
  { label: 'Chat', route: 'chat' },
  { label: 'About', route: 'about' },
  { label: 'Contact', route: 'contact' },
  { label: 'FAQ', route: 'faq' },
];

const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', route: 'privacy' },
  { label: 'Terms & Conditions', route: 'terms' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Bot size={22} className="text-white" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-display font-extrabold tracking-tight text-white">
                  BusinessBuddy
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                  AI
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your Smart AI Assistant for Business Growth. Get instant advice on ideas,
              marketing, branding, sales, and customer engagement — anytime, anywhere.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  onClick={(e) => { e.preventDefault(); navigate('home'); }}
                  className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={17} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.route}>
                  <button
                    onClick={() => navigate(l.route)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 mb-5">
              {legalLinks.map((l) => (
                <li key={l.route}>
                  <button
                    onClick={() => navigate(l.route)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-400" />
                <span>support@businessbuddy.ai</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-brand-400" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            Copyright &copy; 2026 BusinessBuddy AI. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1.5">
            Developed by <span className="text-white font-medium">YOUR_NAME</span>
            <Heart size={14} className="text-brand-500 fill-brand-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
