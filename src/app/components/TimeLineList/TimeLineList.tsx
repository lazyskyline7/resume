import React from 'react';
import TimeLineItem from './TimeLineItem';
import type { College, Company, ExperienceData, ExperienceInfo } from '@/types';
import Title from '../Title';
import { EXPERIENCE_NAME_MAP } from '@/data';

interface TimeLineListProps<T extends College | Company> {
  title: string;
  list: ExperienceData<T>;
}
function TimeLineList<T extends College | Company>({
  title,
  list,
}: TimeLineListProps<T>): React.ReactElement {
  return (
    <div>
      <Title>{title}</Title>
      {Object.entries(list).map(([name, info]) => (
        <TimeLineItem
          key={name}
          title={EXPERIENCE_NAME_MAP[name as Company | College]}
          info={info as ExperienceInfo}
        />
      ))}
    </div>
  );
}

export default TimeLineList;
