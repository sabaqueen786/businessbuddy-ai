import { useEffect, useState } from 'react';

export type Route = 'home' | 'chat' | 'about' | 'contact' | 'faq' | 'privacy' | 'terms';

const ROUTE_MAP: Record<string, Route> = {
  '': 'home',
  '#': 'home',
  '#home': 'home',
  '#chat': 'chat',
  '#about': 'about',
  '#contact': 'contact',
  '#faq': 'faq',
  '#privacy': 'privacy',
  '#terms': 'terms',
};

function parseHash(): Route {
  const hash = window.location.hash.toLowerCase();
  return ROUTE_MAP[hash] ?? 'home';
}

export function navigate(route: Route): void {
  const hash = route === 'home' ? '#home' : `#${route}`;
  if (window.location.hash !== hash) {
    window.location.hash = hash;
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function useRouter(): Route {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
