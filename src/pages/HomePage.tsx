import {
  ArrowRight,
  Sparkles,
  Lightbulb,
  Megaphone,
  Tag,
  FileText,
  MessageSquare,
  HeartHandshake,
  Zap,
  Brain,
  MousePointerClick,
  Clock,
  Star,
  Quote,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { navigate } from '@/lib/router';

type Service = {
  icon: typeof Lightbulb;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Lightbulb,
    title: 'Business Ideas',
    description: 'Discover fresh, validated business ideas tailored to your interests, skills, and budget.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy',
    description: 'Build a step-by-step marketing plan to reach the right customers on the right channels.',
  },
  {
    icon: Tag,
    title: 'Business Name Generator',
    description: 'Get catchy, memorable business name ideas that are brandable and available.',
  },
  {
    icon: FileText,
    title: 'Product Description Generator',
    description: 'Generate persuasive product descriptions that convert browsers into buyers.',
  },
  {
    icon: MessageSquare,
    title: 'Social Media Caption Generator',
    description: 'Craft engaging captions for Instagram, Facebook, LinkedIn, and more in seconds.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Engagement Tips',
    description: 'Learn proven tactics to delight customers, build loyalty, and drive repeat sales.',
  },
];

type Feature = {
  icon: typeof Zap;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: 'Instant AI Advice',
    description: 'Get clear, actionable business guidance the moment you need it — no waiting required.',
  },
  {
    icon: Brain,
    title: 'Smart Marketing',
    description: 'Data-informed marketing suggestions tailored to your goals, audience, and budget.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy to Use',
    description: 'A clean, intuitive chat interface anyone can use — no technical skills needed.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description: 'Your AI assistant never sleeps. Get help with your business anytime, day or night.',
  },
];

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ayesha Khan',
    role: 'Bakery Owner, Lahore',
    rating: 5,
    text: 'BusinessBuddy AI helped me name my bakery and write captions that actually got attention. My Instagram engagement doubled in a month!',
  },
  {
    name: 'Daniyal Raza',
    role: 'Startup Founder, Karachi',
    rating: 5,
    text: 'The marketing strategy suggestions were surprisingly practical. I went from confused to having a clear 90-day plan in one chat session.',
  },
  {
    name: 'Fatima Sheikh',
    role: 'Etsy Seller, Islamabad',
    rating: 5,
    text: 'I use the product description generator for every new listing. It saves me hours and the copy genuinely converts better than mine did.',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-28">
        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-300/40 dark:bg-brand-600/20 blur-3xl animate-float" />
          <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-brand-200/50 dark:bg-brand-700/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-200/40 dark:bg-blue-800/15 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-sm border border-brand-100 dark:border-slate-700 animate-fade-in-up">
                <Sparkles size={16} className="text-brand-500" />
                Your Smart AI Assistant
              </span>

              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in-up leading-[1.1]" style={{ animationDelay: '80ms' }}>
                Grow Your Business with{' '}
                <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
                BusinessBuddy AI gives you instant, expert guidance on business ideas, marketing,
                branding, sales, and customer engagement — all through a simple chat. Turn your
                ideas into a thriving business.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '240ms' }}>
                <Button size="lg" onClick={() => navigate('chat')}>
                  Start Chat <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="secondary" onClick={() => navigate('about')}>
                  Learn More
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '320ms' }}>
                <div className="flex -space-x-2">
                  {['bg-brand-400', 'bg-brand-500', 'bg-brand-600', 'bg-brand-700'].map((c, i) => (
                    <div key={i} className={`h-9 w-9 rounded-full ${c} border-2 border-white dark:border-slate-900`} />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-slate-400 mt-0.5">
                    Trusted by 1,000+ entrepreneurs
                  </p>
                </div>
              </div>
            </div>

            {/* Hero illustration */}
            <div className="relative hidden lg:block animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-700 rounded-[2.5rem] blur-2xl opacity-30" />
                <div className="relative bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl shadow-brand-500/20 border border-gray-100 dark:border-slate-700 p-6">
                  {/* Mock chat preview */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-slate-700">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                      <Brain size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">BusinessBuddy AI</p>
                      <p className="text-xs text-green-500 flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-green-500" /> Online
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4">
                    <div className="flex justify-end">
                      <div className="bg-brand-500 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm max-w-[80%]">
                        Give me marketing tips for my new cafe
                      </div>
                    </div>
                    <div className="flex justify-start gap-2">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
                        <Sparkles size={14} className="text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-[80%]">
                        Great! Focus on Instagram-worthy plating, partner with local food bloggers,
                        and run a "first coffee free" launch week...
                      </div>
                    </div>
                    <div className="flex justify-start gap-2">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
                        <Sparkles size={14} className="text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-brand-400 animate-bounce-dot" />
                          <span className="h-2 w-2 rounded-full bg-brand-400 animate-bounce-dot" style={{ animationDelay: '0.16s' }} />
                          <span className="h-2 w-2 rounded-full bg-brand-400 animate-bounce-dot" style={{ animationDelay: '0.32s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -left-8 top-24 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                      <Lightbulb size={16} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">New Ideas</p>
                      <p className="text-[10px] text-gray-500 dark:text-slate-400">Generated daily</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-16 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 p-3 animate-float" style={{ animationDelay: '2.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                      <TrendingUp size={16} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">Growth Plan</p>
                      <p className="text-[10px] text-gray-500 dark:text-slate-400">90-day roadmap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to grow your business"
            subtitle="From your first spark of an idea to a full marketing playbook — BusinessBuddy AI has you covered."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-7 border border-gray-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-14 w-14 p-3 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-950 dark:to-brand-900 text-brand-600 dark:text-brand-400 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white transition-all duration-300">
                  <s.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-display font-bold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  {s.description}
                </p>
                <button
                  onClick={() => navigate('chat')}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-2.5 transition-all"
                >
                  Try it now <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-50/50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why BusinessBuddy AI"
            title="Why choose BusinessBuddy AI"
            subtitle="Built for entrepreneurs and small business owners who want expert guidance without the consulting fees."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300">
                  <f.icon size={26} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-display font-bold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by entrepreneurs"
            subtitle="Real stories from business owners who used BusinessBuddy AI to grow their ventures."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="relative bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-7 border border-brand-100 dark:border-slate-700 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Quote size={36} className="text-brand-200 dark:text-brand-800 absolute top-5 right-5" />
                <div className="flex items-center gap-1 text-amber-400 mb-4 relative">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed relative">
                  "{t.text}"
                </p>
                <div className="mt-6 flex items-center gap-3 relative">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 lg:px-16 lg:py-20 text-center shadow-2xl shadow-brand-500/30">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                Ready to grow your business?
              </h2>
              <p className="mt-4 text-lg text-brand-100 max-w-xl mx-auto">
                Start chatting with BusinessBuddy AI now and get instant, actionable advice for your
                business — completely free.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => navigate('chat')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Start Chatting Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
