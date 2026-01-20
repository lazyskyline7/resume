import type { SkillLevel } from '@/types';
import { FC } from 'react';
const SKILL_LEVEL_MAP: Record<SkillLevel, string> = {
  proficiency: 'Proficient in',
  familiar: 'Familiar with',
  knowledge: 'Knowledge of',
} as const;
const SKILL_LEVEL_STYLES: Record<
  SkillLevel,
  { container: string; text: string }
> = {
  proficiency: {
    container:
      'bg-violet-500/10 dark:bg-violet-400/10 border-violet-500/30 dark:border-violet-400/30 hover:bg-violet-500/20 dark:hover:bg-violet-400/20 hover:shadow-md hover:shadow-violet-500/20',
    text: 'text-violet-700 dark:text-violet-300 font-semibold',
  },
  familiar: {
    container:
      'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-md',
    text: 'text-slate-700 dark:text-slate-300 font-medium',
  },
  knowledge: {
    container:
      'bg-transparent border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm',
    text: 'text-slate-500 dark:text-slate-400 font-normal',
  },
} as const;
interface SkillListProps {
  level: SkillLevel;
  skills: string[];
}
const SkillList: FC<SkillListProps> = ({ level, skills }) => {
  const styles = SKILL_LEVEL_STYLES[level];
  return (
    <div className="flex-1 break-inside-avoid">
      <div className="mb-2 text-sm font-semibold capitalize text-slate-700 dark:text-slate-200">
        {SKILL_LEVEL_MAP[level]}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`rounded-md border px-2.5 py-1 text-xs font-mono transition-all duration-200 hover:scale-105 print:border-slate-300 print:bg-transparent ${styles.container} ${styles.text}`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillList;
