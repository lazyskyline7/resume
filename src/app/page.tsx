import ThemeSwitcher from './components/ThemeSwitcher';
import PrintSwitcher from './components/PrintSwitcher';
import Profile from './components/Profile';
import SkillSet from './components/SkillSet';
import TimeLineList from './components/TimeLineList';
import DATA from '@/data';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="relative dark:bg-slate-800 dark:text-slate-50">
      <div className="max-w-[1200px] w-full m-auto">
        <div className="flex flex-col gap-1 py-4 px-8">
          <Profile profile={DATA.profile} />
          <SkillSet skillSet={DATA.skillSet} />
          <TimeLineList title="Work Experience" list={DATA.workExperience} />
          <TimeLineList title="Education" list={DATA.education} />
        </div>
      </div>
      <ThemeSwitcher />
      <PrintSwitcher />
    </div>
  );
};

export default Home;
