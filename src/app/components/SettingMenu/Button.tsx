import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className = '', children, ...props }) => {
  return (
    <button
      className={`glass-button group flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-theme-600/50 hover:bg-theme-600/20 hover:text-theme-600 hover:shadow-lg hover:shadow-theme-600/20 active:scale-95 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-theme-400/50 dark:hover:bg-theme-400/30 dark:hover:text-theme-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
