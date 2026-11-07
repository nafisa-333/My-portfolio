import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  const apply = useCallback((next: Theme, persist: boolean) => {
    const root = document.documentElement;
    root.classList.add('theme-anim');
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove('theme-anim'), 600);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable — the choice simply won't persist */
      }
    }
    setTheme(next);
  }, []);

  // Follow system changes only while the visitor hasn't chosen a theme explicitly.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (!readStored()) apply(e.matches ? 'dark' : 'light', false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [apply]);

  const toggle = useCallback(() => {
    apply(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
  }, [apply]);

  return { theme, toggle };
}
