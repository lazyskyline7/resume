import { FC } from 'react';
import { ExperienceInfo } from '@/types';
import TimelineListTitle from './TimelineListTitle';
import TimelineListItem from './TimelineListItem';

interface TimelineListProps {
  title: string;
  data: Record<string, ExperienceInfo>;
  nameMap?: Record<string, string>;
  compact?: boolean;
}

const TimelineList: FC<TimelineListProps> = ({
  title,
  data,
  nameMap,
  compact,
}) => {
  return (
    <div
      className={compact ? 'flex flex-col gap-4 print:break-inside-avoid' : ''}
    >
      <TimelineListTitle compact={compact}>{title}</TimelineListTitle>
      {Object.entries(data).map(([key, info]) => {
        const displayTitle = nameMap ? nameMap[key] || key : key;
        return (
          <TimelineListItem
            key={key}
            title={displayTitle}
            info={info}
            compact={compact}
          />
        );
      })}
    </div>
  );
};

export default TimelineList;
