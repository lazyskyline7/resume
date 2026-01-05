'use client';
import React, { FC, useCallback } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import type { SocialLinkType, SocialLink } from '@/types';
import { event } from '@/ga';
import { IconType } from 'react-icons';

const SOCIAL_LINK_ICON_MAP: Record<SocialLinkType, IconType> = {
  Email: AiOutlineMail,
  LinkedIn: AiFillLinkedin,
  GitHub: AiFillGithub,
} as const;

interface SocialLinksProps {
  links: readonly SocialLink[];
}

const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
  const handleClick = useCallback((linkType: SocialLinkType) => {
    event('click', {
      category: 'social',
      label: linkType,
    });
  }, []);

  const formatDisplayLink = (link: string, name: SocialLinkType) => {
    if (name === 'Email') return link;
    return link.replace(/^https?:\/\/(www\.)?/, '');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 mt-4 print:grid-cols-1 print:gap-1">
      {links.map((e) => {
        const Icon = SOCIAL_LINK_ICON_MAP[e.name];
        return (
          <a
            key={e.name}
            className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline group print:text-slate-900"
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(e.name)}
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full group-hover:bg-primary-50 dark:group-hover:bg-slate-600 transition-colors print:p-0 print:bg-transparent">
              <Icon className="size-5 print:size-4" />
            </div>
            <div className="text-sm break-all print:text-[11px] print:leading-tight">
              <span className="print:hidden">{e.name === 'Email' ? e.link : e.name}</span>
              <span className="hidden print:inline">{formatDisplayLink(e.link, e.name)}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
