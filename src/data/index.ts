import { ResumeData } from '../types';
import resumeData from './data.jsonc';

export const EXPERIENCE_NAME_MAP = {
  ntu: 'National Taiwan University',
  nchu: 'National Chung Hsing University',
  linker: 'Linker Networks Inc.',
  appier: 'Appier Inc.',
  cdc: 'Crypto.com',
  cronos: 'Cronos Labs',
} as const;

export const PROJECT_NAME_MAP = {
  azure: 'Factory AI Vision',
} as const;

const DATA = resumeData as unknown as ResumeData;

export default DATA;
