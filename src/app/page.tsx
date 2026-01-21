import SettingsMenu from './components/SettingMenu';
import { Bios, SocialLinks } from './components/Profile';
import SkillSet from './components/SkillSet';
import TimeLineList from './components/TimeLineList';
import DATA from '@/data';
import { FC } from 'react';
const { profile, skillSet, workExperience, education } = DATA;
const Home: FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-900 print:min-h-0 print:bg-white dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blob-1/5 blur-[100px]" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blob-2/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blob-3/5 blur-[100px]" />
        <div className="absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-blob-4/5 blur-[120px]" />
      </div>
      <div className="m-auto min-h-screen w-full max-w-[1200px] bg-white shadow-xl print:min-h-0 print:w-full print:max-w-none print:shadow-none dark:bg-slate-900 dark:shadow-none">
        <header className="animate-fade-in-down border-b border-slate-100 p-6 print:border-b print:border-slate-300 print:p-4 print:pb-3 dark:border-white/5 md:p-12">
          <Bios profile={profile} />
        </header>
        <div className="grid grid-cols-1 print:grid-cols-[240px_1fr] md:grid-cols-[300px_1fr]">
          <aside className="glass-sidebar animate-fade-in-left flex flex-col gap-8 border-b border-slate-100 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] p-6 print:gap-2 print:border-b-0 print:border-r print:border-slate-300 print:bg-slate-50 print:bg-none print:p-4 print:text-[10px] print:text-slate-900 dark:border-white/5 dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] md:border-b-0 md:border-r md:p-8 [background-size:20px_20px]">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 print:mb-2 print:border-b print:border-slate-300 print:pb-1 print:text-[11px] print:text-slate-600 dark:text-slate-500">
                Contact
              </div>
              <SocialLinks links={profile.socialLinks} />
            </div>
            <div>
              <SkillSet skillSet={skillSet} />
            </div>
            <div className="flex flex-col gap-4 print:break-inside-avoid">
              <TimeLineList title="Education" list={education} compact />
            </div>
          </aside>
          <main className="animate-fade-in-up flex flex-col gap-16 p-6 print:gap-4 print:p-4 print:text-[10px] md:p-12">
            <TimeLineList title="Work Experience" list={workExperience} />
          </main>
        </div>
      </div>
      <SettingsMenu />
    </div>
  );
};
export default Home;
