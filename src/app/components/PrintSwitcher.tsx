import React, { useCallback } from 'react';
import { MdOutlinePrint, MdOutlinePrintDisabled } from 'react-icons/md';
import { event } from '@/ga';

type PrintSwitcherProps = {
  enablePrint: boolean;
  onToggle: () => void;
};
const PrintSwitcher: React.FC<PrintSwitcherProps> = ({
  enablePrint,
  onToggle,
}) => {
  const handleToggle = useCallback(() => {
    event('click', {
      category: 'print',
      label: enablePrint ? 'disable' : 'enable',
    });
    onToggle();
  }, [enablePrint, onToggle]);
  return enablePrint ? (
    <MdOutlinePrint
      className="absolute, bottom-1 left-1 print:hidden"
      onClick={handleToggle}
    />
  ) : (
    <MdOutlinePrintDisabled
      className="absolute, bottom-1 left-1 print:hidden"
      onClick={handleToggle}
    />
  );
};

export default PrintSwitcher;
