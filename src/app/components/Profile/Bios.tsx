import React, { FC } from 'react';
import type { ProfileData } from '@/types';
interface BiosProps {
  profile: ProfileData;
}
const Bios: FC<BiosProps> = ({ profile }) => (
  <div className="flex flex-col gap-4 print:gap-2">
    <div className="flex flex-col">
      <h1 className="mb-2 text-4xl font-extrabold uppercase tracking-tighter text-slate-900 dark:text-slate-50 print:mb-0.5 print:text-3xl print:leading-[1.1] sm:text-5xl lg:text-6xl">
        {profile.name}
      </h1>
      <div className="text-xl font-semibold text-theme-600 print:text-base print:font-medium dark:text-theme-400 sm:text-2xl">
        {profile.target}
      </div>
    </div>
    <div className="max-w-3xl text-base leading-relaxed text-slate-600 print:text-[10px] print:leading-normal dark:text-slate-300">
      {profile.summary}
    </div>
  </div>
);
export default Bios;
