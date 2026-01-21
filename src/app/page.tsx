import { FC } from 'react';
import clsx from 'clsx';
import SettingsMenu from '../components/SettingMenu';
import { Bios } from '../components/Profile';
import TimeLineList from '@/components/TimeLineList';
import { profile, skillSet, workExperience, education } from '@/data';
import Sidebar from '@/components/Sidebar';

const BackgroundBlobs: FC = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
    <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blob-1/5 blur-[100px]" />
    <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blob-2/5 blur-[120px]" />
    <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blob-3/5 blur-[100px]" />
    <div className="absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-blob-4/5 blur-[120px]" />
  </div>
);

const Home: FC = () => {
  return (
    <div
      className={clsx(
        'relative min-h-screen bg-slate-950 text-slate-900',
        'dark:bg-slate-950 dark:text-slate-50',
        'print:min-h-0 print:bg-white'
      )}
    >
      <BackgroundBlobs />

      <div
        className={clsx(
          'm-auto min-h-screen w-full max-w-[1200px] bg-white shadow-xl',
          'dark:bg-slate-900 dark:shadow-none',
          'print:min-h-0 print:w-full print:max-w-none print:shadow-none'
        )}
      >
        {/* Header (Bios) */}
        <header
          className={clsx(
            'animate-fade-in-down border-b border-slate-100 p-6',
            'md:p-12',
            'dark:border-white/5',
            'print:border-b print:border-slate-300 print:p-4 print:pb-3'
          )}
        >
          <Bios profile={profile} />
        </header>

        {/* Main Content Grid */}
        <div
          className={clsx(
            'grid grid-cols-1',
            'md:grid-cols-[300px_1fr]',
            'print:grid-cols-[240px_1fr]'
          )}
        >
          <Sidebar skillSet={skillSet} education={education} />

          {/* Main Content (Work Experience) */}
          <main
            className={clsx(
              'animate-fade-in-up flex flex-col gap-16 p-6',
              'md:p-12',
              'print:gap-4 print:p-4 print:text-[10px]'
            )}
          >
            <TimeLineList title="Work Experience" list={workExperience} />
          </main>
        </div>
      </div>

      <SettingsMenu />
    </div>
  );
};

export default Home;
