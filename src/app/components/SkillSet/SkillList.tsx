import type { SkillLevel } from '@/types';
import { FC } from 'react';

const SKILL_LEVEL_MAP: Record<SkillLevel, string> = {
  proficiency: 'Proficient in',
  familiar: 'Familiar with',
  knowledge: 'Knowledge of',
} as const;

interface SkillListProps {
  level: SkillLevel;
  skills: string[];
}
const SkillList: FC<SkillListProps> = ({ level, skills }) => (
  <div className="flex-1">
    <div className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-200 capitalize">{SKILL_LEVEL_MAP[level]}</div>
    <div className="flex flex-wrap gap-1">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="rounded px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium print:bg-transparent print:border print:border-slate-300"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillList;
