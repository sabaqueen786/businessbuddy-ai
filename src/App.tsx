import { useEffect } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useRouter } from '@/lib/router';
import { HomePage } from '@/pages/HomePage';
import { ChatPage } from '@/pages/ChatPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { FAQPage } from '@/pages/FAQPage';
import { LegalPage } from '@/pages/LegalPage';

function AppContent() {
  const route = useRouter();

  // Update document title per route for SEO
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'BusinessBuddy AI - Your Smart AI Assistant for Business Growth',
      chat: 'Chat with BusinessBuddy AI - Instant Business Advice',
      about: 'About BusinessBuddy AI - Our Mission & Vision',
      contact: 'Contact BusinessBuddy AI - Get in Touch',
      faq: 'FAQ - BusinessBuddy AI',
      privacy: 'Privacy Policy - BusinessBuddy AI',
      terms: 'Terms & Conditions - BusinessBuddy AI',
    };
    document.title = titles[route] ?? titles.home;
  }, [route]);

  const isChat = route === 'chat';

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
      <Navbar current={route} />

      <main className={`flex-1 flex flex-col ${isChat ? '' : ''}`}>
        {route === 'home' && <HomePage />}
        {route === 'chat' && <ChatPage />}
        {route === 'about' && <AboutPage />}
        {route === 'contact' && <ContactPage />}
        {route === 'faq' && <FAQPage />}
        {route === 'privacy' && <LegalPage type="privacy" />}
        {route === 'terms' && <LegalPage type="terms" />}
      </main>

      {!isChat && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
