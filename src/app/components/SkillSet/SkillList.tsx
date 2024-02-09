import React from 'react';
import type { SkillLevel } from '@/types';

const SKILL_LEVEL_MAP: Record<SkillLevel, string> = {
  proficiency: 'Proficient in',
  familiar: 'Familiar with',
  knowledge: 'Knowledge of',
} as const;

interface SkillListProps {
  level: SkillLevel;
  skills: string[];
}
const SkillList: React.FC<SkillListProps> = ({ level, skills }) => (
  <div>
    <div className="font-medium">{SKILL_LEVEL_MAP[level]}</div>
    <div className="gray-300 my-0.5 h-0.5" />
    {skills.map((skill, i) => (
      <div key={i} className="rounded-full bg-cyan-500 m-0.5 p-1">
        {skill}
      </div>
    ))}
  </div>
);

export default SkillList;
