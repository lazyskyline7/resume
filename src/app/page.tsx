import ThemeSwitcher from './components/ThemeSwitcher';
import PrintSwitcher from './components/PrintSwitcher';
import { Bios, SocialLinks } from './components/Profile';
import SkillSet from './components/SkillSet';
import TimeLineList from './components/TimeLineList';
import DATA from '@/data';
import { FC } from 'react';
const { profile, skillSet, workExperience, education } = DATA;
const Home: FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-900 print:min-h-0 print:bg-white dark:bg-slate-950 dark:text-slate-50">
      {/* Gradient Mesh Backgrounds */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
        {/* Blob 1 - Top Left */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-500/5 blur-[100px] dark:bg-violet-400/5" />
        {/* Blob 2 - Top Right */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-400/5" />
        {/* Blob 3 - Bottom Left */}
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-[100px] dark:bg-fuchsia-400/5" />
        {/* Blob 4 - Middle Right */}
        <div className="absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-violet-500/5 blur-[120px] dark:bg-violet-400/5" />
      </div>
      <div className="m-auto min-h-screen w-full max-w-[1200px] bg-white shadow-xl print:min-h-0 print:w-full print:max-w-none print:shadow-none dark:bg-slate-900 dark:shadow-none">
        {/* Header - Full Width */}
        <header className="animate-fade-in-down border-b border-slate-100 p-6 print:border-slate-200 print:p-6 dark:border-white/5 md:p-12">
          <Bios profile={profile} />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] print:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="glass-sidebar animate-fade-in-left flex flex-col gap-8 border-b border-slate-100 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] p-6 print:border-b-0 print:border-r print:bg-slate-50 print:bg-none print:p-6 print:text-black dark:border-white/5 dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] md:border-b-0 md:border-r md:p-8 [background-size:20px_20px]">
            {/* Contact */}
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 print:mb-2 print:text-slate-600 dark:text-slate-500">
                Contact
              </div>
              <SocialLinks links={profile.socialLinks} />
            </div>
            {/* Skills */}
            <div>
              <SkillSet skillSet={skillSet} />
            </div>
            {/* Education */}
            <div className="flex flex-col gap-4">
              <TimeLineList title="Education" list={education} compact />
            </div>
          </aside>
          {/* Main Content */}
          <main className="animate-fade-in-up flex flex-col gap-16 p-6 print:gap-6 print:p-6 md:p-12">
            <TimeLineList title="Work Experience" list={workExperience} />
          </main>
        </div>
      </div>
      <ThemeSwitcher />
      <PrintSwitcher />
    </div>
  );
};
export default Home;
