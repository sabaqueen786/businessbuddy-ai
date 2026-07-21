import { useEffect, useRef, useState } from 'react';
import {
  Send,
  Trash2,
  Download,
  Sparkles,
  User,
  Bot,
  Clock,
  Check,
} from 'lucide-react';
import { generateReply, replyDelay, SUGGESTED_PROMPTS, type ChatMessage } from '@/lib/aiEngine';

const STORAGE_KEY = 'businessbuddy-chat-history';

const WELCOME: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hello! I'm BusinessBuddy AI, your smart assistant for business growth. I can help you with business ideas, marketing strategy, branding, sales, product descriptions, social media captions, and customer engagement. What would you like to work on today?",
  timestamp: new Date().toISOString(),
};

function loadMessages(): ChatMessage[] {
  if (typeof window === 'undefined') return [WELCOME];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [WELCOME];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return [WELCOME];
    // Validate every message has the required fields
    const valid = parsed.filter(
      (m) =>
        m &&
        typeof m.id === 'string' &&
        typeof m.role === 'string' &&
        typeof m.content === 'string' &&
        typeof m.timestamp === 'string',
    );
    return valid.length > 0 ? (valid as ChatMessage[]) : [WELCOME];
  } catch {
    return [WELCOME];
  }
}

function saveMessages(msgs: ChatMessage[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {
    // ignore quota or serialization errors
  }
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString([], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [now, setNow] = useState(new Date().toISOString());
  const [saved, setSaved] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Live clock
  useEffect(() => {
    const t = setInterval(() => setNow(new Date().toISOString()), 1000);
    return () => clearInterval(t);
  }, []);

  // Auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  // Cleanup pending typing timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, []);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString(),
    };
    const withUser = [...messages, userMsg];
    setMessages(withUser);
    saveMessages(withUser);
    setInput('');
    setIsTyping(true);
    setSaved(false);

    const reply = generateReply(trimmed);
    const delay = replyDelay(reply);

    typingTimer.current = setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: reply,
        timestamp: new Date().toISOString(),
      };
      const withAi = [...withUser, aiMsg];
      setMessages(withAi);
      saveMessages(withAi);
      setIsTyping(false);
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const clearChat = () => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setIsTyping(false);
    const fresh = [{ ...WELCOME, id: 'welcome', timestamp: new Date().toISOString() }];
    setMessages(fresh);
    saveMessages(fresh);
    setSaved(false);
    inputRef.current?.focus();
  };

  const saveChat = () => {
    const lines: string[] = [
      'BusinessBuddy AI - Chat Transcript',
      `Saved: ${formatDateTime(new Date().toISOString())}`,
      '='.repeat(50),
      '',
    ];
    messages.forEach((m) => {
      const who = m.role === 'user' ? 'You' : 'BusinessBuddy AI';
      lines.push(`[${formatTime(m.timestamp)}] ${who}:`);
      lines.push(m.content);
      lines.push('');
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `businessbuddy-chat-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-18 bg-gradient-to-b from-brand-50/40 to-white dark:from-slate-950 dark:to-slate-900 flex flex-col">
      {/* Header bar */}
      <div className="border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-16 lg:top-18 z-30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 flex-shrink-0">
              <Bot size={22} className="text-white" strokeWidth={2.2} />
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white dark:border-slate-900" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-display font-bold text-gray-900 dark:text-white truncate">
                BusinessBuddy AI
              </h1>
              <p className="text-xs text-gray-500 dark:text-slate-400 flex items-center gap-1.5">
                <Clock size={11} />
                {formatDateTime(now)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={saveChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 bg-gray-50 dark:bg-slate-800 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-slate-700 dark:hover:text-brand-300 transition-colors"
              title="Save chat as text file"
            >
              {saved ? <Check size={16} className="text-green-500" /> : <Download size={16} />}
              <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={clearChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 bg-gray-50 dark:bg-slate-800 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400 transition-colors"
              title="Clear chat"
            >
              <Trash2 size={16} />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 space-y-5">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}

          {isTyping && <TypingIndicator />}
        </div>
      </div>

      {/* Suggested prompts */}
      {messages.length <= 1 && !isTyping && (
        <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 pb-3 animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Sparkles size={13} className="text-brand-500" /> Suggested prompts
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => send(p)}
                className="px-3.5 py-2 rounded-full text-sm font-medium bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:border-brand-400 hover:text-brand-700 dark:hover:border-brand-600 dark:hover:text-brand-300 hover:shadow-md transition-all"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-gray-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <div className="relative flex items-end gap-2 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/30 transition-all p-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask about business ideas, marketing, branding, sales…"
              className="flex-1 resize-none bg-transparent px-3 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none max-h-32"
              style={{ minHeight: '44px' }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="h-11 w-11 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-gray-400 dark:text-slate-500">
            BusinessBuddy AI provides business guidance only. Press Enter to send, Shift+Enter for a new line.
          </p>
        </form>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex gap-3 ${isUser ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center shadow-md">
            <User size={18} className="text-white" />
          </div>
        ) : (
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/30">
            <Bot size={18} className="text-white" />
          </div>
        )}
      </div>

      {/* Bubble */}
      <div className={`min-w-0 max-w-[85%] sm:max-w-[75%] ${isUser ? 'order-2' : ''}`}>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {isUser ? 'You' : 'BusinessBuddy AI'}
          </span>
          <span className="text-[11px] text-gray-400 dark:text-slate-500">{formatTime(message.timestamp)}</span>
        </div>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap break-words ${
            isUser
              ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-tr-sm shadow-md shadow-brand-500/20'
              : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 border border-gray-100 dark:border-slate-700 rounded-tl-sm shadow-sm'
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-slide-in-left">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/30 flex-shrink-0">
        <Bot size={18} className="text-white" />
      </div>
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">BusinessBuddy AI</span>
          <span className="text-[11px] text-brand-500 flex items-center gap-1">
            <Sparkles size={10} /> thinking…
          </span>
        </div>
        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl rounded-tl-sm shadow-sm px-4 py-3.5 inline-flex">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400 animate-bounce-dot" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400 animate-bounce-dot" style={{ animationDelay: '0.18s' }} />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400 animate-bounce-dot" style={{ animationDelay: '0.36s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}


