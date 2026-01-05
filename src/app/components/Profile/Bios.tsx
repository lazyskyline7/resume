import React, { FC } from 'react';

import type { ProfileData } from '@/types';

interface BiosProps {
  profile: ProfileData;
}
const Bios: FC<BiosProps> = ({ profile }) => (
  <div>
    <div className="text-2xl lg:text-3xl mb-2 font-bold print:text-4xl">{profile.name}</div>
    <div className="leading-relaxed">{profile.summary}</div>
  </div>
);

export default Bios;
