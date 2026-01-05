import { FC } from 'react';

interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <div className="text-xl lg:text-2xl mb-1.5 border-b border-slate-200 dark:border-slate-700 print:border-slate-300 pb-1 font-bold">
    {children}
  </div>
);

export default Title;
