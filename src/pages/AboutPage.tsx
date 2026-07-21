import {
  Target,
  Eye,
  Users,
  Gift,
  Sparkles,
  Rocket,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { navigate } from '@/lib/router';

const PILLARS = [
  {
    icon: Target,
    title: 'What is BusinessBuddy AI?',
    body: 'BusinessBuddy AI is an intelligent assistant designed to help entrepreneurs, small business owners, and aspiring founders make smarter business decisions. It provides instant, actionable guidance on ideas, marketing, branding, sales, and customer engagement through a simple chat interface — no consulting fees, no appointments, no waiting.',
  },
  {
    icon: Sparkles,
    title: 'Our Mission',
    body: 'To democratize access to expert business guidance. We believe every entrepreneur — regardless of budget, background, or location — deserves clear, practical advice to turn their ideas into thriving businesses. BusinessBuddy AI puts a knowledgeable business companion in your pocket, available whenever inspiration or a challenge strikes.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'To become the most trusted AI companion for business growth worldwide — empowering millions of entrepreneurs to start, grow, and sustain successful ventures with confidence. We envision a world where starting a business feels less overwhelming because intelligent guidance is always one message away.',
  },
  {
    icon: Users,
    title: 'Who can use it?',
    body: 'BusinessBuddy AI is built for anyone on a business journey: aspiring entrepreneurs exploring their first idea, small business owners looking to grow, freelancers building a personal brand, students learning entrepreneurship, side-hustlers testing the waters, and even seasoned founders seeking a quick sounding board for strategy.',
  },
  {
    icon: Gift,
    title: 'Benefits',
    body: 'Save hours of research with instant answers, get tailored advice for your specific situation, avoid costly beginner mistakes, build a clear step-by-step growth plan, generate creative content like names and captions in seconds, and gain the confidence that comes from having an expert advisor on call 24/7 — all completely free.',
  },
];

const STATS = [
  { value: '1,000+', label: 'Active Entrepreneurs', icon: Users },
  { value: '50K+', label: 'Conversations Had', icon: Sparkles },
  { value: '24/7', label: 'Always Available', icon: TrendingUp },
  { value: '100%', label: 'Free to Use', icon: Gift },
];

export function AboutPage() {
  return (
    <div className="pt-28 lg:pt-36 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-brand-300/30 dark:bg-brand-600/15 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-sm border border-brand-100 dark:border-slate-700 animate-fade-in-up">
            <Sparkles size={16} className="text-brand-500" /> About Us
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: '80ms' }}>
            Empowering entrepreneurs with{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              AI guidance
            </span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            BusinessBuddy AI is your smart assistant for business growth — built to make expert
            advice accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:shadow-brand-500/10 transition-all animate-scale-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 mb-3">
                  <s.icon size={20} className="text-white" />
                </div>
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 dark:text-white">{s.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="What makes BusinessBuddy AI different"
            subtitle="We're not just another chatbot. We're a focused business companion built with a clear mission."
          />

          <div className="mt-14 space-y-6">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`flex flex-col md:flex-row gap-6 p-7 lg:p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:shadow-brand-500/10 transition-all animate-fade-in-up ${
                  i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-800/50'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <p.icon size={26} className="text-white" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="mt-3 text-gray-600 dark:text-slate-300 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-14 bg-gradient-to-b from-brand-50/50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: 'Actionable', text: 'Advice you can apply today, not vague theory.' },
              { icon: ShieldCheck, title: 'Trustworthy', text: 'Grounded in proven business fundamentals.' },
              { icon: TrendingUp, title: 'Growth-Focused', text: 'Every suggestion aims to move your business forward.' },
            ].map((v, i) => (
              <div
                key={v.title}
                className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                  <v.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Ready to start your business journey?
          </h2>
          <p className="mt-3 text-gray-600 dark:text-slate-300">
            Chat with BusinessBuddy AI now and get your first piece of actionable advice in seconds.
          </p>
          <div className="mt-6">
            <Button size="lg" onClick={() => navigate('chat')}>
              Start Chatting <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
