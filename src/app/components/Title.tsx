import { FC } from 'react';
interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <div className="mb-6 w-fit print:break-after-avoid">
    <h2 className="pb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 print:text-xs">
      {children}
    </h2>
    <div className="h-0.5 w-full bg-gradient-to-r from-gradient-from-light via-gradient-via-light to-gradient-to-light dark:from-gradient-from-dark dark:via-gradient-via-dark dark:to-gradient-to-dark print:!bg-none print:!bg-theme-600" />
  </div>
);
export default Title;
