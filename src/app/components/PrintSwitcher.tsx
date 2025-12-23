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
      className="absolute bottom-1.5 left-1.5 print:hidden"
      onClick={handleToggle}
    >
      {enablePrint ? (
        <MdOutlinePrint role="button" aria-label="Disable printing" />
      ) : (
        <MdOutlinePrintDisabled role="button" aria-label="Enable printing" />
      )}
    </div>
  );
};

export default PrintSwitcher;
