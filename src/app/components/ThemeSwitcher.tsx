import React, { useCallback } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { event } from '@/ga';

const colorMode = 'light';
const ThemeSwitcher: React.FC = () => {
  const handleToggle = useCallback(() => {
    event('click', {
      category: 'theme',
      label: colorMode === 'light' ? 'dark' : 'light',
    });
    // TODO: color mode switch
  }, []);
  return colorMode === 'light' ? (
    <BsSun
      className="absolute top-1 right-1 print:hidden cursor-pointer"
      onClick={handleToggle}
    />
  ) : (
    <BsMoon
      className="absolute top-1 right-1 print:hidden cursor-pointer"
      onClick={handleToggle}
    />
  );
};

export default ThemeSwitcher;
