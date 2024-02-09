import React from 'react';
import type { ExperienceInfo } from '@/types';
import InfoContent from './InfoContent';
import { CgShapeCircle } from 'react-icons/cg';

interface TimeLineItemProps {
  title: string;
  info: ExperienceInfo;
}
const TimeLineItem: React.FC<TimeLineItemProps> = ({ title, info }) => (
  <div>
    <div className="flex justify-between gap-8">
      <div className="items-center gap-0.5">
        <CgShapeCircle />
        <div className="font-semibold">
          {title}, {info.location}
        </div>
      </div>
      <div>
        {info.from} - {info.to}
      </div>
    </div>
    <div className="ml-2">
      <div>{info.degree}</div>
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

export default TimeLineItem;
