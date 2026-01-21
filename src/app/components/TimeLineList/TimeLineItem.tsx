import React, { FC } from 'react';
import type { ExperienceInfo } from '@/types';
import InfoContent from './InfoContent';
interface TimeLineItemProps {
  title: string;
  info: ExperienceInfo;
  compact?: boolean;
}
const TimeLineItem: FC<TimeLineItemProps> = ({ title, info, compact }) => {
  if (compact) {
    return (
      <div className="relative mb-6 break-inside-avoid border-l border-slate-200 pl-4 last:mb-0 last:border-l-0 print:mb-2 dark:border-slate-700">
        <div className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-theme-600 dark:bg-theme-400" />
        <div className="mb-1 text-sm font-semibold leading-none">{title}</div>
        <div className="mb-1 font-mono text-[11px] text-slate-400 dark:text-slate-500">
          {info.from} - {info.to}
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400">
          {info.degree}
        </div>
      </div>
    );
  }
  return (
    <div className="group relative mb-6 break-inside-avoid rounded-lg border border-slate-200 p-6 transition-all duration-200 last:mb-0 hover:scale-[1.01] hover:border-slate-300 hover:shadow-lg hover:shadow-theme-600/10 print:mb-3 print:border-none print:p-0 print:shadow-none dark:border-white/5 dark:bg-slate-800/30 dark:backdrop-blur-sm dark:hover:border-white/10">
      <div className="mb-3 flex flex-col gap-2 print:mb-1 print:flex-row print:items-baseline print:justify-between print:gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex flex-col gap-1 print:gap-0">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-800 print:text-sm print:font-bold dark:text-slate-100">
            {title}
          </h3>
          {info.position && (
            <div className="text-base font-semibold text-theme-600 print:text-xs print:font-semibold dark:text-theme-400">
              {info.position}
            </div>
          )}
        </div>
        <div className="shrink-0 whitespace-nowrap rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-500 print:self-start print:bg-transparent print:p-0 print:text-[10px] print:font-medium print:text-slate-500 dark:bg-slate-700 dark:text-slate-400">
          {info.from} — {info.to}
        </div>
      </div>
      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-slate-500 print:mb-1 print:text-[10px] dark:text-slate-400">
        <span>{info.location}</span>
        {info.degree && (
          <>
            <span className="h-1 w-1 rounded-full bg-slate-300 print:bg-slate-400"></span>
            <span>{info.degree}</span>
          </>
        )}
      </div>
      <div className="space-y-2 text-[13px] leading-relaxed text-slate-700 print:space-y-0.5 print:text-[10px] print:leading-normal dark:text-slate-300">
        {info.content?.map((item, i) => (
          <InfoContent
            key={i}
            title={item.title}
            url={item.url}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};
export default TimeLineItem;
