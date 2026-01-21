import React, { FC } from 'react';
import type { ProfileData } from '@/types';
interface BiosProps {
  profile: ProfileData;
}
const Bios: FC<BiosProps> = ({ profile }) => (
  <div className="flex flex-col gap-4 print:gap-2">
    <div className="flex flex-col">
      <h1 className="gradient-text mb-2 text-4xl font-extrabold uppercase tracking-tighter print:mb-1 print:text-3xl sm:text-5xl lg:text-6xl">
        {profile.name}
      </h1>
      <div className="text-xl font-semibold text-primary-600 print:text-base print:text-slate-700 dark:text-primary-400 sm:text-2xl">
        {profile.target}
      </div>
    </div>
    <div className="max-w-3xl text-base leading-relaxed text-slate-600 print:text-xs print:leading-relaxed dark:text-slate-300">
      {profile.summary}
    </div>
  </div>
);
export default Bios;
