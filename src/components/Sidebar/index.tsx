import { FC } from 'react';
import clsx from 'clsx';
import SocialLinks from './SocialLinks';
import SkillSet from '@/components/SkillSet';

import TimeLineList from '../TimeLineList';
import { College, ExperienceData, SkillSetData } from '@/types';
import { socialLinks } from '@/data';

interface SidebarProps {
  skillSet: SkillSetData;
  education: ExperienceData<College>;
}
const Sidebar: FC<SidebarProps> = ({ skillSet, education }) => (
  <aside
    className={clsx(
      'glass-sidebar animate-fade-in-left flex flex-col gap-8 p-6',
      // Borders & Background
      'border-b border-slate-100 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]',
      'dark:border-white/5 dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]',
      // Responsive (MD)
      'md:border-b-0 md:border-r md:p-8',
      // Print Styles
      'print:gap-2 print:border-b-0 print:border-r print:border-slate-300',
      'print:bg-slate-50 print:bg-none print:p-4 print:text-[10px] print:text-slate-900'
    )}
  >
    {/* Contact Section */}
    <div>
      <div
        className={clsx(
          'mb-4 text-xs font-bold uppercase tracking-wider text-slate-400',
          'dark:text-slate-500',
          'print:mb-2 print:border-b print:border-slate-300 print:pb-1 print:text-[11px] print:text-slate-600'
        )}
      >
        Contact
      </div>
      <SocialLinks links={socialLinks} />
    </div>

    {/* Skills Section */}
    <div>
      <SkillSet skillSet={skillSet} />
    </div>

    {/* Education Section (Compact) */}
    <div className="flex flex-col gap-4 print:break-inside-avoid">
      <TimeLineList title="Education" list={education} compact />
    </div>
  </aside>
);

export default Sidebar;
