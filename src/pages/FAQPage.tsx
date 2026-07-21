import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Mail } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { navigate } from '@/lib/router';

type FAQ = { question: string; answer: string };

const FAQS: FAQ[] = [
  {
    question: 'What is BusinessBuddy AI?',
    answer: 'BusinessBuddy AI is a smart AI assistant designed to help entrepreneurs and small business owners with business guidance. Through a simple chat interface, it provides instant, actionable advice on business ideas, marketing strategy, branding, sales, product descriptions, social media captions, and customer engagement — completely free, available 24/7.',
  },
  {
    question: 'Is it free?',
    answer: 'Yes! BusinessBuddy AI is completely free to use. There are no hidden fees, subscriptions, or credit card requirements. Just open the chat and start asking your business questions — that\'s it. We believe quality business guidance should be accessible to everyone.',
  },
  {
    question: 'What can I ask?',
    answer: 'You can ask anything related to growing a business: business ideas for specific niches or budgets, marketing and advertising strategies, catchy business names, persuasive product descriptions, engaging social media captions, branding advice, sales techniques, startup guidance, and customer engagement tips. If you ask something unrelated, the assistant will kindly let you know it focuses only on business topics.',
  },
  {
    question: 'Can I save chats?',
    answer: 'Absolutely. On the Chat page you\'ll find a "Save" button that downloads your full conversation as a text file (.txt) to your device. This is perfect for keeping a record of advice you received, sharing it with a team member, or reviewing strategies later. You can also use the "Clear" button to start a fresh conversation anytime.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Your privacy matters to us. Your chat conversations are processed locally in your browser and are not permanently stored on our servers. Contact form submissions are stored securely with row-level security policies so only authorized administrators can access them. We never share your information with third parties.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our team through the Contact page on this site — just fill out the form and we\'ll respond within 24 hours. For general business questions, the fastest option is to chat directly with BusinessBuddy AI. We\'re here to help with any questions, feedback, or partnership ideas you may have.',
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-28 lg:pt-36 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-brand-300/30 dark:bg-brand-600/15 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-sm border border-brand-100 dark:border-slate-700 animate-fade-in-up">
            <HelpCircle size={16} className="text-brand-500" /> FAQ
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: '80ms' }}>
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">questions</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Everything you need to know about BusinessBuddy AI. Can't find an answer? Reach out to us.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 animate-fade-in-up ${
                    open
                      ? 'bg-white dark:bg-slate-800 border-brand-200 dark:border-brand-700 shadow-lg shadow-brand-500/10'
                      : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-700'
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-base lg:text-lg font-display font-bold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        open ? 'bg-brand-500 text-white rotate-180' : 'bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-400'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm lg:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-center shadow-xl shadow-brand-500/20">
            <h3 className="font-display text-xl font-bold text-white">Still have questions?</h3>
            <p className="mt-2 text-brand-100 text-sm">
              Our team is happy to help. Reach out and we'll get back to you quickly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Mail size={17} /> Contact Support
              </button>
              <button
                onClick={() => navigate('chat')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-700 text-white font-semibold border border-brand-400/30 hover:bg-brand-800 transition-all"
              >
                <MessageSquare size={17} /> Chat with AI
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
