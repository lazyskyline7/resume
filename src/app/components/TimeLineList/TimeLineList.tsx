import React from 'react';
import TimeLineItem from './TimeLineItem';
import type { College, Company, ExperienceData, ExperienceInfo } from '@/types';
import Title from './Title';
import { EXPERIENCE_NAME_MAP } from '@/data';

interface TimeLineListProps<T extends College | Company> {
  title: string;
  list: ExperienceData<T>;
  compact?: boolean;
}
function TimeLineList<T extends College | Company>({
  title,
  list,
  compact = false,
}: TimeLineListProps<T>): React.ReactElement {
  return (
    <div>
      {compact ? (
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500 print:break-after-avoid">
          {title}
        </div>
      ) : (
        <Title>{title}</Title>
      )}
      {Object.entries(list).map(([name, info]) => (
        <TimeLineItem
          key={name}
          title={EXPERIENCE_NAME_MAP[name as Company | College]}
          info={info as ExperienceInfo}
          compact={compact}
        />
      ))}
    </div>
  );
}

export default TimeLineList;
