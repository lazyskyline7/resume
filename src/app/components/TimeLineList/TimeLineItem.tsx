import React, { FC } from 'react';
import type { ExperienceInfo } from '@/types';
import InfoContent from './InfoContent';
import { GoDot } from 'react-icons/go';

interface TimeLineItemProps {
  title: string;
  info: ExperienceInfo;
}
const TimeLineItem: FC<TimeLineItemProps> = ({ title, info }) => (
  <div className="mb-1 break-inside-avoid">
    <div className="flex justify-between gap-8">
      <div className="flex items-center gap-0.5">
        <GoDot />
        <div className="mb-0.5 font-semibold text-sm lg:text-base">
          {title}, {info.location}
          {info.position && ` - ${info.position}`}
        </div>
      </div>
      <div className="text-xs lg:text-sm">
        {info.from} - {info.to}
      </div>
    </div>
    <div className="ml-2 text-sm">
      <div className="ml-2 opacity-80 print:opacity-100">{info.degree}</div>
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
