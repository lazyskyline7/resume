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
      <div className="mb-6 last:mb-0 break-inside-avoid relative pl-4 border-l border-slate-200 dark:border-slate-700 last:border-l-0">
        <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        <div className="font-semibold text-sm leading-none mb-1">{title}</div>
        <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-1">
          {info.from} - {info.to}
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400">{info.degree}</div>
      </div>
    );
  }

  return (
    <div className="mb-0 pb-10 last:pb-0 break-inside-avoid relative pl-8 group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-700 group-last:bg-transparent" />
      
      {/* Timeline Dot */}
      <div className="absolute -left-[4px] top-2 w-2.5 h-2.5 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 dark:border-primary-400 shadow-[0_0_0_3px_white] dark:shadow-[0_0_0_3px_rgb(30,41,59)] z-10" />
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
          {title}
          {info.position && (
            <span className="text-base font-medium text-slate-600 dark:text-slate-400 block sm:inline sm:ml-2">
               — {info.position}
            </span>
          )}
        </h3>
        <div className="text-xs font-mono text-slate-500 whitespace-nowrap shrink-0 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
          {info.from} — {info.to}
        </div>
      </div>
      
      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
          <span>{info.location}</span>
          {info.degree && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{info.degree}</span>
            </>
          )}
      </div>

      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
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
