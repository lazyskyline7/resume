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
    <div className="relative text-slate-900 dark:bg-slate-900 dark:text-slate-50 min-h-screen print:min-h-0 print:bg-white">
      <div className="max-w-[1000px] w-full m-auto bg-white dark:bg-slate-800 shadow-xl dark:shadow-none min-h-screen print:min-h-0 print:shadow-none print:max-w-none print:w-full">
        
        {/* Header - Full Width */}
        <header className="p-6 md:p-12 border-b border-slate-100 dark:border-slate-700 print:p-8 print:border-slate-200">
          <Bios profile={profile} />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] print:grid-cols-[240px_1fr]">
          
          {/* Sidebar */}
          <aside className="bg-slate-50/50 dark:bg-slate-900/20 p-6 md:p-8 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 print:bg-slate-50 print:text-black print:border-r print:border-b-0 print:p-6 print-bg-slate bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] print:bg-none">
             {/* Contact */}
             <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500 print:text-slate-600 print:mb-2">Contact</div>
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
          <main className="p-6 md:p-12 flex flex-col gap-10 print:p-8 print:gap-6">
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
