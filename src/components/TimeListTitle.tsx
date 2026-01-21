import { FC } from 'react';
import clsx from 'clsx';

interface TimeListTitleProps {
  compact?: boolean;
  children: string;
}

const TimeListTitle: FC<TimeListTitleProps> = ({ compact, children }) => {
  if (compact) {
    return (
      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500 print:break-after-avoid">
        {children}
      </div>
    );
  }

  return (
    <div className="mb-6 w-fit print:break-after-avoid">
      <h2
        className={clsx(
          'pb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500',
          'dark:text-slate-500',
          'print:text-xs'
        )}
      >
        {children}
      </h2>
      <div
        className={clsx(
          'h-0.5 w-full',
          // Light Mode Gradient
          'bg-gradient-to-r from-gradient-from-light via-gradient-via-light to-gradient-to-light',
          // Dark Mode Gradient
          'dark:from-gradient-from-dark dark:via-gradient-via-dark dark:to-gradient-to-dark',
          // Print Override (Solid Color)
          'print:!bg-none print:!bg-theme-600'
        )}
      />
    </div>
  );
};

export default TimeListTitle;
