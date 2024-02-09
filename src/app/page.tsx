"use client"
import React, { useCallback, useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import PrintSwitcher from './components/PrintSwitcher';
import Profile from './components/Profile';
import SkillSet from './components/SkillSet';
import TimeLineList from './components/TimeLineList';
import DATA from '@/data';
import classNames from 'classnames';

const Home: React.FC = () => {
  const [enablePrint, setEnablePrint] = useState(false);
  const toggleEnablePrint = useCallback(
    () => setEnablePrint((prev) => !prev),
    []
  );

  return (
    <div className="max-w-[1200px] w-full m-auto">
      <ThemeSwitcher />

      <div
        className={classNames('flex flex-col gap-1 py-4 px-8', {
          'print:hidden': enablePrint,
        })}
      >
        <Profile profile={DATA.profile} />
        <SkillSet skillSet={DATA.skillSet} />
        <TimeLineList title="Work Experience" list={DATA.workExperience} />
        <TimeLineList title="Education" list={DATA.education} />
      </div>
      <PrintSwitcher enablePrint={enablePrint} onToggle={toggleEnablePrint} />
    </div>
  );
};

export default Home;
