import React, { FC } from 'react';

import type { ProfileData } from '@/types';

interface BiosProps {
  profile: ProfileData;
}
const Bios: FC<BiosProps> = ({ profile }) => (
  <div>
    <div className="text-3xl lg:text-5xl mb-2">{profile.name}</div>
    <div className="text-lg lg:text-xl">{profile.summary}</div>
    {/* <Text className="text-lg lg:text-xl">{profile.target}</Text> */}
  </div>
);

export default Bios;
