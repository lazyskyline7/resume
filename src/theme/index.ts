/**
 * Theme Configuration System
 *
 * Provides environment-configurable color themes with preset support.
 * Colors are in RGB format (e.g., "109 40 217") for Tailwind opacity utilities.
 */

import themesData from './themes.json';

export interface ThemeColors {
  // Primary accent colors (for positions, links, highlights)
  primary500: string;
  primary600: string;
  primary400: string;

  // Gradient text colors (light mode)
  gradientFromLight: string;
  gradientViaLight: string;
  gradientToLight: string;

  // Gradient text colors (dark mode)
  gradientFromDark: string;
  gradientViaDark: string;
  gradientToDark: string;

  // Background blob colors
  blob1: string;
  blob2: string;
  blob3: string;
  blob4: string;

  // Print mode colors
  printAccent: string;
  printText: string;
}

/**
 * Predefined theme presets for common companies
 */
const { $schema, ...themePresets } = themesData as Record<string, unknown>;
export const THEME_PRESETS: Record<string, ThemeColors> = themePresets as Record<string, ThemeColors>;

/**
 * Default fallback colors (violet theme)
 */
const DEFAULT_COLORS: ThemeColors = THEME_PRESETS.default;

export function getThemePreset(): string {
  return process.env.NEXT_PUBLIC_THEME_PRESET || 'default';
}

/**
 * Get theme colors from environment variables or preset
 * @returns ThemeColors object with all color values
 */
export function getThemeColors(): ThemeColors {
  // Check if a preset is specified
  const presetName = process.env.NEXT_PUBLIC_THEME_PRESET;
  if (presetName && THEME_PRESETS[presetName]) {
    return THEME_PRESETS[presetName];
  }

  // Otherwise, read individual env vars with fallbacks
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

/**
 * Generate CSS custom properties string from theme colors
 * @returns CSS string with all theme variables
 */
export function generateThemeCSSVariables(): string {
  const colors = getThemeColors();

  return `
    --color-primary-500: ${colors.primary500};
    --color-primary-600: ${colors.primary600};
    --color-primary-400: ${colors.primary400};
    --gradient-from-light: ${colors.gradientFromLight};
    --gradient-via-light: ${colors.gradientViaLight};
    --gradient-to-light: ${colors.gradientToLight};
    --gradient-from-dark: ${colors.gradientFromDark};
    --gradient-via-dark: ${colors.gradientViaDark};
    --gradient-to-dark: ${colors.gradientToDark};
    --blob-color-1: ${colors.blob1};
    --blob-color-2: ${colors.blob2};
    --blob-color-3: ${colors.blob3};
    --blob-color-4: ${colors.blob4};
    --print-accent: ${colors.printAccent};
    --print-text: ${colors.printText};
  `.trim();
}

/**
 * Get Tailwind-compatible color config
 * @returns Object for tailwind.config.ts colors extension
 */
export function getTailwindThemeColors() {
  const colors = getThemeColors();

  return {
    theme: {
      500: `rgb(${colors.primary500} / <alpha-value>)`,
      600: `rgb(${colors.primary600} / <alpha-value>)`,
      400: `rgb(${colors.primary400} / <alpha-value>)`,
    },
    blob: {
      1: `rgb(${colors.blob1} / <alpha-value>)`,
      2: `rgb(${colors.blob2} / <alpha-value>)`,
      3: `rgb(${colors.blob3} / <alpha-value>)`,
      4: `rgb(${colors.blob4} / <alpha-value>)`,
    },
  };
}
