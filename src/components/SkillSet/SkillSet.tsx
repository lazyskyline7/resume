import React, { FC } from 'react';
import SkillList from './SkillList';
import type { SkillLevel, SkillSetData } from '@/types';
import clsx from 'clsx';

interface SkillSetProps {
  skillSet: SkillSetData;
}

const SkillSet: FC<SkillSetProps> = ({ skillSet }) => (
  <div>
    <div
      className={clsx(
        'mb-4 text-xs font-bold uppercase tracking-wider text-slate-400',
        'dark:text-slate-500',
        'print:mb-2 print:border-b print:border-slate-300 print:pb-1 print:text-[11px] print:text-slate-600 print:break-after-avoid'
      )}
    >
      Skills
    </div>
    <div className="flex flex-col gap-6 print:gap-2">
      {Object.entries(skillSet).map(([skillType, skills], i) => (
        <SkillList key={i} level={skillType as SkillLevel} skills={skills} />
      ))}
    </div>
  </div>
);

export default SkillSet;
