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
      <div className="mb-4 last:mb-0 break-inside-avoid">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">
          {info.from} - {info.to}
        </div>
        <div className="text-xs">{info.degree}</div>
      </div>
    );
  }

  return (
    <div className="mb-8 last:mb-0 break-inside-avoid relative pl-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
          {title}
          {info.position && (
            <span className="text-base font-medium text-slate-600 dark:text-slate-400 block sm:inline sm:ml-2">
               — {info.position}
            </span>
          )}
        </h3>
        <div className="text-sm font-mono text-slate-500 whitespace-nowrap shrink-0">
          {info.from} — {info.to}
        </div>
      </div>
      
      <div className="text-sm text-slate-600 dark:text-slate-300 mb-2 italic">
          {info.location}
          {info.degree && ` • ${info.degree}`}
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
