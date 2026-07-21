import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, MessageSquare, User } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setError('Please fill in all fields before submitting.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const { error: insertError } = await supabase.from('contact_messages').insert({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      if (insertError) throw new Error(insertError.message);

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-28 lg:pt-36 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-brand-300/30 dark:bg-brand-600/15 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-slate-800 text-brand-700 dark:text-brand-300 shadow-sm border border-brand-100 dark:border-slate-700 animate-fade-in-up">
            <MessageSquare size={16} className="text-brand-500" /> Contact Us
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: '80ms' }}>
            Get in{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">touch</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 dark:text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Have a question, feedback, or partnership idea? We'd love to hear from you. Reach out
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              <ContactInfoCard
                icon={Mail}
                title="Business Email"
                value="support@businessbuddy.ai"
                href="mailto:support@businessbuddy.ai"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Location"
                value="Pakistan"
              />
              <ContactInfoCard
                icon={Clock}
                title="Response Time"
                value="Within 24 hours"
              />
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-xl shadow-brand-500/5 p-7 lg:p-8">
                <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-6">
                  Fill out the form below and we'll respond via email.
                </p>

                {status === 'success' && (
                  <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900 animate-scale-in">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-green-800 dark:text-green-300">Message sent successfully!</p>
                      <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 animate-scale-in">
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-red-800 dark:text-red-300">Couldn't send your message</p>
                      <p className="text-xs text-red-700 dark:text-red-400 mt-0.5">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Name" icon={User}>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 transition-all"
                      required
                    />
                  </Field>

                  <Field label="Email" icon={Mail}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 transition-all"
                      required
                    />
                  </Field>

                  <Field label="Message" icon={MessageSquare}>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Tell us how we can help…"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 transition-all resize-none"
                      required
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={17} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-0.5 transition-all">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 flex-shrink-0">
        <Icon size={22} className="text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">{title}</p>
        <p className="text-base font-medium text-gray-900 dark:text-white truncate mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: typeof Mail;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
        <Icon size={15} className="text-brand-500" />
        {label}
      </label>
      {children}
    </div>
  );
}
