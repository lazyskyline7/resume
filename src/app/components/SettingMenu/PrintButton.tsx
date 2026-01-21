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
      className="glass-button group flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white/80 hover:shadow-lg active:scale-95 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-900/80"
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
