'use client';
import { FC, useCallback, useEffect, useSyncExternalStore } from 'react';
import { MdOutlinePrint, MdOutlinePrintDisabled } from 'react-icons/md';
import { event } from '@/ga';

const printStore = {
  getSnapshot() {
    return localStorage.getItem('printMode');
  },
  getServerSnapshot(): string | null {
    return null;
  },
  subscribe(listener: () => void) {
    window.addEventListener('storage', listener);
    return () => void window.removeEventListener('storage', listener);
  },
  setPrintMode(enabled: boolean) {
    window.localStorage.setItem('printMode', enabled.toString());
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'printMode',
        newValue: enabled.toString(),
      })
    );
  },
  togglePrintMode() {
    const current = this.getSnapshot();
    const newValue = current !== 'true';
    this.setPrintMode(newValue);
  },
} as const;

const PrintSwitcher: FC<{ inMenu?: boolean }> = ({ inMenu }) => {
  const printMode = useSyncExternalStore(
    printStore.subscribe,
    printStore.getSnapshot,
    printStore.getServerSnapshot
  );

  const enablePrint = printMode === 'true';

  const handleToggle = useCallback(() => {
    printStore.togglePrintMode();
    event('click', {
      category: 'print',
      label: enablePrint ? 'disable' : 'enable',
    });
  }, [enablePrint]);

  useEffect(() => {
    if (printMode === null) {
      printStore.setPrintMode(false);
    }
  }, [printMode]);

  useEffect(() => {
    if (enablePrint) {
      document.documentElement.classList.remove('print:hidden');
    } else {
      document.documentElement.classList.add('print:hidden');
    }
  }, [enablePrint]);

  if (printMode === null) {
    if (inMenu) return null;
    return (
      <div className="glass-button fixed bottom-4 left-4 rounded-full border p-2 opacity-0 print:hidden dark:border-white/10">
        <div className="size-6" />
      </div>
    );
  }

  if (inMenu) {
    return (
      <button
        onClick={handleToggle}
        className="glass-button group flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white/80 hover:shadow-lg active:scale-95 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-900/80"
        title={enablePrint ? 'Disable printing mode' : 'Enable printing mode'}
      >
        <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
          {enablePrint ? (
            <MdOutlinePrint
              size={24}
              role="button"
              aria-label="Disable printing"
            />
          ) : (
            <MdOutlinePrintDisabled
              size={24}
              role="button"
              aria-label="Enable printing"
            />
          )}
        </div>
      </button>
    );
  }

  return (
    <div
      className="glass-button group fixed bottom-4 left-4 cursor-pointer rounded-full border p-2 text-slate-600 shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 print:hidden dark:border-white/10 dark:text-slate-300"
      onClick={handleToggle}
      title={enablePrint ? 'Disable printing mode' : 'Enable printing mode'}
    >
      <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
        {enablePrint ? (
          <MdOutlinePrint
            size={24}
            role="button"
            aria-label="Disable printing"
          />
        ) : (
          <MdOutlinePrintDisabled
            size={24}
            role="button"
            aria-label="Enable printing"
          />
        )}
      </div>
    </div>
  );
};

export default PrintSwitcher;
