import React, { FC } from 'react';
import SkillList from './SkillList';
import type { SkillLevel, SkillSetData } from '@/types';
import Title from '../Title';

interface SkillSetProps {
  skillSet: SkillSetData;
}
const SkillSet: FC<SkillSetProps> = ({ skillSet }) => (
  <div>
    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500 print:break-after-avoid">
      Skills
    </div>
    <div className="flex flex-col gap-6">
      {Object.entries(skillSet).map(([skillType, skills], i) => (
        <SkillList key={i} level={skillType as SkillLevel} skills={skills} />
      ))}
    </div>
  </div>
);

export default SkillSet;
