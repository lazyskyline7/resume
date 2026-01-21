import themesData from './themes.json';

export interface ThemeColors {
  primary500: string;
  primary600: string;
  primary400: string;
  gradientFromLight: string;
  gradientViaLight: string;
  gradientToLight: string;
  gradientFromDark: string;
  gradientViaDark: string;
  gradientToDark: string;
  blob1: string;
  blob2: string;
  blob3: string;
  blob4: string;
  printAccent: string;
  printText: string;
}

const { $schema, ...themePresets } = themesData as Record<string, unknown>;
export const THEME_PRESETS: Record<string, ThemeColors> =
  themePresets as Record<string, ThemeColors>;

const DEFAULT_COLORS: ThemeColors = THEME_PRESETS.default;

export function getThemePreset(): string {
  return process.env.NEXT_PUBLIC_THEME_PRESET || 'default';
}

export function getThemeColors(): ThemeColors {
  const presetName = process.env.NEXT_PUBLIC_THEME_PRESET;
  if (presetName && THEME_PRESETS[presetName]) {
    return THEME_PRESETS[presetName];
  }

  return {
    primary500:
      process.env.NEXT_PUBLIC_COLOR_PRIMARY_500 || DEFAULT_COLORS.primary500,
    primary600:
      process.env.NEXT_PUBLIC_COLOR_PRIMARY_600 || DEFAULT_COLORS.primary600,
    primary400:
      process.env.NEXT_PUBLIC_COLOR_PRIMARY_400 || DEFAULT_COLORS.primary400,

    gradientFromLight:
      process.env.NEXT_PUBLIC_GRADIENT_FROM_LIGHT ||
      DEFAULT_COLORS.gradientFromLight,
    gradientViaLight:
      process.env.NEXT_PUBLIC_GRADIENT_VIA_LIGHT ||
      DEFAULT_COLORS.gradientViaLight,
    gradientToLight:
      process.env.NEXT_PUBLIC_GRADIENT_TO_LIGHT ||
      DEFAULT_COLORS.gradientToLight,

    gradientFromDark:
      process.env.NEXT_PUBLIC_GRADIENT_FROM_DARK ||
      DEFAULT_COLORS.gradientFromDark,
    gradientViaDark:
      process.env.NEXT_PUBLIC_GRADIENT_VIA_DARK ||
      DEFAULT_COLORS.gradientViaDark,
    gradientToDark:
      process.env.NEXT_PUBLIC_GRADIENT_TO_DARK || DEFAULT_COLORS.gradientToDark,

    blob1: process.env.NEXT_PUBLIC_BLOB_COLOR_1 || DEFAULT_COLORS.blob1,
    blob2: process.env.NEXT_PUBLIC_BLOB_COLOR_2 || DEFAULT_COLORS.blob2,
    blob3: process.env.NEXT_PUBLIC_BLOB_COLOR_3 || DEFAULT_COLORS.blob3,
    blob4: process.env.NEXT_PUBLIC_BLOB_COLOR_4 || DEFAULT_COLORS.blob4,

    printAccent:
      process.env.NEXT_PUBLIC_PRINT_ACCENT || DEFAULT_COLORS.printAccent,
    printText: process.env.NEXT_PUBLIC_PRINT_TEXT || DEFAULT_COLORS.printText,
  };
}

export function getTailwindThemeColors() {
  const colors = getThemeColors();

  return {
    primary: {
      400: `rgb(${colors.primary400} / <alpha-value>)`,
      500: `rgb(${colors.primary500} / <alpha-value>)`,
      600: `rgb(${colors.primary600} / <alpha-value>)`,
    },
    theme: {
      400: `rgb(${colors.primary400} / <alpha-value>)`,
      500: `rgb(${colors.primary500} / <alpha-value>)`,
      600: `rgb(${colors.primary600} / <alpha-value>)`,
    },
    blob: {
      1: `rgb(${colors.blob1} / <alpha-value>)`,
      2: `rgb(${colors.blob2} / <alpha-value>)`,
      3: `rgb(${colors.blob3} / <alpha-value>)`,
      4: `rgb(${colors.blob4} / <alpha-value>)`,
    },
    gradient: {
      'from-light': `rgb(${colors.gradientFromLight} / <alpha-value>)`,
      'via-light': `rgb(${colors.gradientViaLight} / <alpha-value>)`,
      'to-light': `rgb(${colors.gradientToLight} / <alpha-value>)`,
      'from-dark': `rgb(${colors.gradientFromDark} / <alpha-value>)`,
      'via-dark': `rgb(${colors.gradientViaDark} / <alpha-value>)`,
      'to-dark': `rgb(${colors.gradientToDark} / <alpha-value>)`,
    },
    print: {
      accent: `rgb(${colors.printAccent})`,
      text: `rgb(${colors.printText})`,
    },
  };
}
