'use client';
import { FC, useCallback, useEffect, useSyncExternalStore } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
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
  const theme = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );
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
  const iconClasses =
    'size-6 transition-all duration-300 group-hover:rotate-12 group-active:scale-90';
  return (
    <div
      className="glass-button group fixed right-4 top-4 cursor-pointer rounded-full border p-2 text-slate-600 shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 print:hidden dark:border-white/10 dark:text-slate-300"
      onClick={handleToggle}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <MdLightMode className={iconClasses} />
      ) : (
        <MdDarkMode className={iconClasses} />
      )}
    </div>
  );
};
export default ThemeSwitcher;
