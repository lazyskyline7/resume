'use client';

import { FC } from 'react';
import { MdPrint } from 'react-icons/md';
import { event } from '@/ga';

const relock = () => {
  document.documentElement.classList.add('print:hidden');
  window.removeEventListener('afterprint', relock);
};

const PrintButton: FC = () => {
  const handlePrint = () => {
    event('click', {
      category: 'print',
      label: 'open_print_dialog',
    });
    document.documentElement.classList.remove('print:hidden');

    window.addEventListener('afterprint', relock);
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="glass-button group flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-theme-600/50 hover:bg-theme-600/20 hover:text-theme-600 hover:shadow-lg hover:shadow-theme-600/20 active:scale-95 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-theme-400/50 dark:hover:bg-theme-400/30 dark:hover:text-theme-400"
      title="Print Resume"
      aria-label="Print Resume"
    >
      <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
        <MdPrint size={24} />
      </div>
    </button>
  );
};

export default PrintButton;
