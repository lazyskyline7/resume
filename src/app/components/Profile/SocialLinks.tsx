'use client';
import React, { FC } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import type { SocialLinkType, SocialLink } from '@/types';
import { event } from '@/ga';
import { IconType } from 'react-icons';
const SOCIAL_LINK_ICON_MAP: Record<SocialLinkType, IconType> = {
  Email: AiOutlineMail,
  LinkedIn: AiFillLinkedin,
  GitHub: AiFillGithub,
} as const;

const onLinkClick = (linkType: SocialLinkType) => {
  event('click', {
    category: 'social',
    label: linkType,
  });
};
interface SocialLinksProps {
  links: readonly SocialLink[];
}
const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
  const formatDisplayLink = (link: string, name: SocialLinkType) => {
    if (name === 'Email') return link;
    return link.replace(/^https?:\/\/(www\.)?/, '');
  };
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-1 sm:grid-cols-2 md:grid-cols-1">
      {links.map((e) => {
        const Icon = SOCIAL_LINK_ICON_MAP[e.name];
        return (
          <a
            key={e.name}
            className="group flex items-center gap-3 text-slate-600 no-underline transition-all duration-200 hover:text-theme-600 print:text-slate-900 dark:text-slate-400 dark:hover:text-theme-400"
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onLinkClick(e.name)}
          >
            <div className="rounded-full bg-slate-100 p-2 transition-all duration-200 group-hover:scale-110 group-hover:bg-theme-500/10 print:bg-transparent print:p-0 dark:bg-slate-700 dark:group-hover:bg-theme-500/20">
              <Icon className="size-5 print:size-4" />
            </div>
            <div className="break-all text-sm print:text-[11px] print:leading-tight">
              <span className="print:hidden">
                {e.name === 'Email' ? e.link : e.name}
              </span>
              <span className="hidden print:inline">
                {formatDisplayLink(e.link, e.name)}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default SocialLinks;
