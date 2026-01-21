'use client';
import React, { FC } from 'react';
import type { Content } from '@/types';
import { event } from '@/ga';
import { BsDot } from 'react-icons/bs';

const onInfoLinkClick = (url: string) => {
  event('click', {
    category: 'info',
    label: url,
  });
};

const InfoContent: FC<Content> = ({ title, url, details }) => {
  const handleClick = (url: string) => {
    if (url) onInfoLinkClick(url);
  };
  return (
    <>
      {title && <InfoTitle title={title} url={url} />}
      <ul>
        {details?.map((detail, i) => {
          const detailUrl = detail.url;
          return (
            <li key={i} className="flex gap-0.5">
              <div className="w-[18px] h-[24px] flex items-center justify-center">
                <BsDot size="18px" />
              </div>
              {detailUrl ? (
                <a
                  href={detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick(detailUrl)}
                >
                  <div className="text-primary-600 opacity-80 print:opacity-100">
                    {detail.title}
                  </div>
                </a>
              ) : (
                <div className="opacity-80 print:opacity-100">
                  {detail.title}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

interface InfoTitleProps {
  title: string;
  url?: string;
}
const InfoTitle: FC<InfoTitleProps> = ({ title, url }) => {
  const handleClick = () => onInfoLinkClick(url!);
  return url ? (
    <a
      className="no-underline"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      onClick={handleClick}
    >
      <div className="font-medium m-0.5 text-primary-600">{title}</div>
    </a>
  ) : (
    <div className="font-medium m-0.5">{title}</div>
  );
};

export default InfoContent;
