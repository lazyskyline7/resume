import { FC } from 'react';
interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <h2 className="mb-6 w-fit border-b-2 border-slate-900 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 print:break-after-avoid dark:border-slate-100 dark:text-slate-500">
    {children}
  </h2>
);
export default Title;
