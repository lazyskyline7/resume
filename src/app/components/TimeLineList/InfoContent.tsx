'use client';
import React, { FC, useCallback } from 'react';
import type { Content } from '@/types';
import { event } from '@/ga';

const InfoContent: FC<Content> = ({ title, url, details }) => {
  const handleClick = useCallback((url?: string) => {
    if (url) {
      event('click', {
        category: 'info',
        label: url,
      });
    }
  }, []);
  return (
    <>
      {title && <InfoTitle title={title} url={url} />}
      <ul>
        {details?.map((detail, i) => (
          <li key={i}>
            {detail.url ? (
              <a
                href={detail.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick(detail.url)}
              >
                <div className="font-semibold text-cyan-600">
                  {detail.title}
                </div>
              </a>
            ) : (
              <div className="font-medium">{detail.title}</div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

interface InfoTitleProps {
  title: string;
  url?: string;
}
const InfoTitle: FC<InfoTitleProps> = ({ title, url }) => {
  const handleClick = useCallback((url: string) => {
    if (url) {
      event('click', {
        category: 'info',
        label: url,
      });
    }
  }, []);
  return url ? (
    <a
      className="no-underline"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      onClick={() => handleClick(url)}
    >
      <div className="font-medium m-0.5 text-cyan-600">{title}</div>
    </a>
  ) : (
    <div className="font-medium m-0.5">{title}</div>
  );
};

export default InfoContent;
