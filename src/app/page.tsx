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
    <div className="relative text-slate-900 dark:bg-slate-900 dark:text-slate-50 min-h-screen">
      <div className="max-w-[1000px] w-full m-auto bg-white dark:bg-slate-800 shadow-xl dark:shadow-none min-h-screen print:shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] min-h-screen">
          
          {/* Sidebar */}
          <aside className="bg-slate-50 dark:bg-slate-900/50 p-8 flex flex-col gap-8 border-r border-slate-100 dark:border-slate-700 print:bg-slate-50 print:text-black">
             {/* Contact */}
             <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500">Contact</div>
                <SocialLinks links={profile.socialLinks} />
             </div>

             {/* Education */}
             <div className="flex flex-col gap-4">
                <TimeLineList title="Education" list={education} compact />
             </div>

             {/* Skills */}
             <div>
               <SkillSet skillSet={skillSet} />
             </div>
          </aside>

          {/* Main Content */}
          <main className="p-8 md:p-12 flex flex-col gap-10">
            <Bios profile={profile} />
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
