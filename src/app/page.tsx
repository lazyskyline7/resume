import ThemeSwitcher from './components/ThemeSwitcher';
import PrintSwitcher from './components/PrintSwitcher';
import Profile from './components/Profile';
import SkillSet from './components/SkillSet';
import TimeLineList from './components/TimeLineList';
import DATA from '@/data';
import { FC } from 'react';

const { profile, skillSet, workExperience, education } = DATA;

const Home: FC = () => {
  return (
    <div className="relative text-slate-900 dark:bg-slate-800 dark:text-slate-50 print:bg-white print:text-slate-900">
      <div className="max-w-[1200px] w-full m-auto">
        <div className="flex flex-col gap-4 py-4 px-8 print:p-0">
          <Profile profile={profile} />
          <SkillSet skillSet={skillSet} />
          <TimeLineList title="Work Experience" list={workExperience} />
          <TimeLineList title="Education" list={education} />
        </div>
      </div>
      <ThemeSwitcher />
      <PrintSwitcher />
    </div>
  );
};

export default Home;
