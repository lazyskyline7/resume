import React, { useCallback } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Bios from './Bios';
import type { ProfileData } from '@/types';
import { event } from '@/ga';

interface ProfileProps {
  profile: ProfileData;
}
const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const handleClick = useCallback((linkType: string) => {
    event('click', {
      category: 'social',
      label: linkType,
    });
  }, []);
  return (
    <div>
      <Bios profile={profile} />
      <div className="flex flex-row sm:flex-col gap-1 sm:gap-2 mt-1">
        <div className="flex gap-1">
          <a
            className="h-6"
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick('linkedin')}
          >
            <AiFillLinkedin className="fill-[#0072b1] size-6" />
          </a>
          <a
            className="h-6"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick('github')}
          >
            <AiFillGithub className="size-6" />
          </a>
        </div>
        <a
          className="h-6 no-underline w-fit"
          href={`mailto: ${profile.mail}`}
          onClick={() => handleClick('mail')}
        >
          <div className="inline-flex items-center gap-1">
            <AiOutlineMail className="size-6" />
            <div className="font-medium text-cyan-600 sm:hidden">
              {profile.mail}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
