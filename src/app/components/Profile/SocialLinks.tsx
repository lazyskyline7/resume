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

  return (
    <div className="flex flex-col gap-2 mt-4">
      {links.map((e) => {
        const Icon = SOCIAL_LINK_ICON_MAP[e.name];
        return (
          <a
            key={e.name}
            className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors no-underline group"
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(e.name)}
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full group-hover:bg-cyan-50 dark:group-hover:bg-slate-600 transition-colors">
              <Icon className="size-5" />
            </div>
            <div className="text-sm break-all print:text-black">
              {e.name === 'Email' ? e.link : e.name}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
