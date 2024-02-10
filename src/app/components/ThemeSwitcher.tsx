'use client';
import { FC, useCallback, useEffect, useSyncExternalStore } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { event } from '@/ga';

type Theme = 'light' | 'dark';
const store = {
  getSnapshot() {
    return localStorage.getItem('theme');
  },
  getServerSnapshot() {
    return '';
  },
  subscribe(listener: () => void) {
    window.addEventListener('storage', listener);
    return () => void window.removeEventListener('storage', listener);
  },
  setTheme(theme: Theme) {
    window.localStorage.setItem('theme', theme);
    window.dispatchEvent(
      new StorageEvent('storage', { key: 'theme', newValue: theme })
    );
  },
  toggleTheme() {
    const theme = this.getSnapshot();
    if (!theme) return;
    let newTheme: Theme;
    if (theme === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = 'light';
    }
    this.setTheme(newTheme);
  },
} as const;

const colorMode = 'light';
const ThemeSwitcher: FC = () => {
  const theme = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

  const handleToggle = useCallback(() => {
    store.toggleTheme();
    event('click', {
      category: 'theme',
      label: colorMode === 'light' ? 'dark' : 'light',
    });
  }, []);

  useEffect(() => {
    if (!theme) {
      // initialization
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        store.setTheme('dark');
      } else {
        store.setTheme('light');
      }
    } else {
      if (theme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return theme === 'dark' ? (
    <BsMoon
      className="absolute top-1 right-1 print:hidden cursor-pointer"
      onClick={handleToggle}
    />
  ) : (
    <BsSun
      className="absolute top-1 right-1 print:hidden cursor-pointer"
      onClick={handleToggle}
    />
  );
};

export default ThemeSwitcher;
