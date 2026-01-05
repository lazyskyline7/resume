'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { MdOutlinePrint, MdOutlinePrintDisabled } from 'react-icons/md';
import { event } from '@/ga';

const PrintSwitcher: FC = () => {
  const [enablePrint, setEnablePrint] = useState(false);
  const handleToggle = useCallback(() => {
    setEnablePrint((prev) => !prev);
    event('click', {
      category: 'print',
      label: enablePrint ? 'disable' : 'enable',
    });
  }, [enablePrint]);

  useEffect(() => {
    if (enablePrint) {
      document.documentElement.classList.remove('print:hidden');
    } else {
      document.documentElement.classList.add('print:hidden');
    }
  }, [enablePrint]);

  return (
    <div
      className="fixed bottom-4 left-4 print:hidden cursor-pointer p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-md hover:shadow-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 group active:scale-95"
      onClick={handleToggle}
      title={enablePrint ? "Disable printing mode" : "Enable printing mode"}
    >
      <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
        {enablePrint ? (
          <MdOutlinePrint size={24} role="button" aria-label="Disable printing" />
        ) : (
          <MdOutlinePrintDisabled size={24} role="button" aria-label="Enable printing" />
        )}
      </div>
    </div>
  );
};

export default PrintSwitcher;
