import { ResumeData } from '../types';
import resumeData from './data.jsonc';

// not used currently
// export const PROJECT_NAME_MAP = {
//   azure: 'Factory AI Vision',
// } as const;

const { profile, socialLinks, skillSet, workExperience, education } =
  resumeData as unknown as ResumeData;

export { profile, socialLinks, skillSet, workExperience, education };
