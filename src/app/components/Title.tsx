import { FC } from 'react';

interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-slate-900 dark:text-slate-100 border-b-2 border-slate-900 dark:border-slate-100 pb-1 w-fit print:break-after-avoid">
    {children}
  </h2>
);

export default Title;
