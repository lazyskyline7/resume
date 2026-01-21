import type { SkillLevel } from '@/types';
import { FC } from 'react';
import clsx from 'clsx';

const SKILL_LEVEL_MAP: Record<SkillLevel, string> = {
  proficiency: 'Proficient in',
  familiar: 'Familiar with',
  knowledge: 'Knowledge of',
} as const;

interface SkillListProps {
  level: SkillLevel;
  skills: string[];
}

const SkillList: FC<SkillListProps> = ({ level, skills }) => {
  return (
    <div className="flex-1 break-inside-avoid">
      <div className="mb-2 text-sm font-semibold capitalize text-slate-700 dark:text-slate-200 print:text-xs print:font-bold print:text-slate-600">
        {SKILL_LEVEL_MAP[level]}
      </div>
      <div className="flex flex-wrap gap-1.5 print:gap-1">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={clsx(
              'rounded-md border px-2.5 py-1 font-mono text-xs transition-all duration-200 hover:scale-105',
              // Print styles
              'print:border-slate-300 print:bg-transparent print:p-0.5 print:px-1.5 print:text-[10px]',
              {
                // Proficiency (Theme Colored)
                [clsx(
                  'bg-gradient-to-br from-gradient-from-light/10 via-gradient-via-light/10 to-gradient-to-light/10',
                  'dark:from-gradient-from-dark/20 dark:via-gradient-via-dark/20 dark:to-gradient-to-dark/20',
                  'border-theme-500/30 hover:shadow-md hover:shadow-theme-500/20',
                  'text-theme-600 dark:text-theme-400 font-semibold',
                  'print:text-theme-600 print:font-semibold print:border-theme-200'
                )]: level === 'proficiency',

                // Familiar (Slate 100)
                [clsx(
                  'bg-slate-100 dark:bg-slate-800',
                  'border-slate-200 dark:border-white/10',
                  'hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-md',
                  'text-slate-700 dark:text-slate-300 font-medium',
                  'print:text-slate-700'
                )]: level === 'familiar',

                // Knowledge (Transparent)
                [clsx(
                  'bg-transparent',
                  'border-slate-200 dark:border-white/5',
                  'hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm',
                  'text-slate-500 dark:text-slate-400 font-normal',
                  'print:text-slate-500 print:border-slate-200'
                )]: level === 'knowledge',
              }
            )}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
