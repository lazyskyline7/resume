'use client';
import React, { FC, useCallback } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Bios from './Bios';
import type { ProfileData, SocialLinkType } from '@/types';
import { event } from '@/ga';
import { IconType } from 'react-icons';

const SOCIAL_LINK_ICON_MAP: Record<SocialLinkType, IconType> = {
  Email: AiOutlineMail,
  LinkedIn: AiFillLinkedin,
  GitHub: AiFillGithub,
} as const;

interface ProfileProps {
  profile: ProfileData;
}
const Profile: FC<ProfileProps> = ({ profile }) => {
  const handleClick = useCallback((linkType: SocialLinkType) => {
    event('click', {
      category: 'social',
      label: linkType,
    });
  }, []);

  return (
    <div>
      <Bios profile={profile} />
      <div className="flex flex-row md:flex-col gap-1 lg:gap-2 mt-1">
        {profile.socialLinks.map((e) => {
          const Icon = SOCIAL_LINK_ICON_MAP[e.name];
          return (
            <a
              key={e.name}
              className="h-6 no-underline w-fit inline-flex items-center gap-1"
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(e.name)}
            >
              <Icon className="size-6" />
              <div className="font-medium text-cyan-600 hidden md:block">
                {e.link}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
