import { ShieldCheck, FileText } from 'lucide-react';

type LegalPageProps = {
  type: 'privacy' | 'terms';
};

type Section = { heading: string; body: string };

const PRIVACY: Section[] = [
  {
    heading: 'Introduction',
    body: 'This Privacy Policy explains how BusinessBuddy AI ("we", "us") handles information you provide when using our website and chat assistant. By using our services, you agree to the practices described in this policy.',
  },
  {
    heading: 'Information We Collect',
    body: 'When you use the chat assistant, your conversations are processed in your browser to generate responses. We do not permanently store your chat transcripts. When you submit the contact form, we collect your name, email, and message so we can respond to your inquiry.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'Contact form submissions are used solely to respond to your questions, feedback, or support requests. We never sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    heading: 'Data Security',
    body: 'Contact messages are stored with row-level security policies so only authorized administrators can access them. We use industry-standard practices to protect your information from unauthorized access.',
  },
  {
    heading: 'Cookies & Local Storage',
    body: 'We use local storage to remember your theme preference (light or dark mode). No tracking cookies are used, and no personal data is stored in your browser.',
  },
  {
    heading: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your contact form submissions at any time by emailing us. Since chat conversations are not permanently stored, no deletion is required for chat data.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the service after changes constitutes acceptance of the updated policy.',
  },
];

const TERMS: Section[] = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing and using BusinessBuddy AI, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.',
  },
  {
    heading: 'Service Description',
    body: 'BusinessBuddy AI provides an AI-powered chat assistant that offers general business guidance on topics such as ideas, marketing, branding, sales, and customer engagement. The service is provided free of charge.',
  },
  {
    heading: 'Professional Advice Disclaimer',
    body: 'The guidance provided by BusinessBuddy AI is for informational and educational purposes only. It does not constitute legal, financial, tax, or professional advice. Always consult qualified professionals before making important business decisions.',
  },
  {
    heading: 'Acceptable Use',
    body: 'You agree to use the service only for lawful purposes and to ask business-related questions. You will not attempt to misuse, disrupt, or reverse-engineer the service, or use it to engage in any unlawful or harmful activity.',
  },
  {
    heading: 'Intellectual Property',
    body: 'All content, design, branding, and software on BusinessBuddy AI are the property of their respective owners. You may not copy, reproduce, or distribute our materials without permission.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'BusinessBuddy AI is provided "as is" without warranties of any kind. We are not liable for any direct, indirect, or consequential damages resulting from the use of, or reliance on, advice provided by the assistant.',
  },
  {
    heading: 'Changes to Terms',
    body: 'We reserve the right to modify these Terms & Conditions at any time. Continued use of the service after changes are posted constitutes acceptance of the revised terms.',
  },
];

export function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === 'privacy';
  const sections = isPrivacy ? PRIVACY : TERMS;
  const meta = isPrivacy
    ? { icon: ShieldCheck, eyebrow: 'Privacy', title: 'Privacy Policy' }
    : { icon: FileText, eyebrow: 'Legal', title: 'Terms & Conditions' };

  return (
    <div className="pt-28 lg:pt-36 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-brand-300/30 dark:bg-brand-600/15 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-sm border border-brand-100 dark:border-slate-700 animate-fade-in-up">
            <meta.icon size={16} className="text-brand-500" /> {meta.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: '80ms' }}>
            {meta.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500 dark:text-slate-400 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Last updated: July 2026
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <div
                key={s.heading}
                className="p-6 lg:p-7 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  {s.heading}
                </h2>
                <p className="mt-3 text-sm lg:text-base text-gray-600 dark:text-slate-300 leading-relaxed pl-10">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
