'use client';
import { FC, useState, useRef, useEffect } from 'react';
import { MdSettings, MdClose } from 'react-icons/md';
import ThemeSwitcher from './ThemeSwitcher';
import PrintButton from './PrintButton';
import { event } from '@/ga';

const SettingsMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    event('click', {
      category: 'settings',
      label: newState ? 'open' : 'close',
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="fixed right-4 top-4 z-50 print:hidden">
      <div
        className={`absolute right-0 top-12 flex flex-col gap-3 transition-all duration-300 origin-top-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
      >
        <ThemeSwitcher />
        <PrintButton />
      </div>

      <button
        onClick={toggleMenu}
        className="glass-button group flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white/80 hover:shadow-lg active:scale-95 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-900/80"
        title="Settings"
        aria-label="Settings"
        aria-expanded={isOpen}
      >
        <div className="relative size-6">
            <MdSettings
              className={`absolute inset-0 size-6 transition-all duration-300 hover:text-theme-600 dark:hover:text-theme-400 ${
              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />
          <MdClose
            className={`absolute inset-0 size-6 transition-all duration-300 hover:text-theme-600 ${
              isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            }`}
          />
        </div>
      </button>
    </div>
  );
};

export default SettingsMenu;
