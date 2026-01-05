import React, { FC } from 'react';

import type { ProfileData } from '@/types';

interface BiosProps {
  profile: ProfileData;
}
const Bios: FC<BiosProps> = ({ profile }) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col">
       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-2 uppercase">
         {profile.name}
       </h1>
       <div className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium">
          {profile.target}
       </div>
    </div>
    <div className="leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl text-lg">
      {profile.summary}
    </div>
  </div>
);

export default Bios;
