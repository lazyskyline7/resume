import React, { FC } from 'react';

import type { ProfileData } from '@/types';

interface BiosProps {
  profile: ProfileData;
}
const Bios: FC<BiosProps> = ({ profile }) => (
  <div>
    <div className="text-3xl sm:text-5xl mb-0.5">{profile.name}</div>
    <div className='text-lg sm:text-xl'>{profile.summary}</div>
    {/* <Text fontSize={{ base: 'lg', sm: 'xl' }}>{profile.target}</Text> */}
  </div>
);

export default Bios;
