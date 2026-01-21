/**
 * Theme Configuration System
 *
 * Provides environment-configurable color themes with preset support.
 * Colors are in RGB format (e.g., "109 40 217") for Tailwind opacity utilities.
 */

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
export const THEME_PRESETS: Record<string, ThemeColors> = {
  // Default violet theme
  default: {
    primary500: '139 92 246', // violet-500
    primary600: '124 58 237', // violet-600
    primary400: '167 139 250', // violet-400
    gradientFromLight: '15 23 42', // slate-900
    gradientViaLight: '15 23 42', // slate-900
    gradientToLight: '124 58 237', // violet-600
    gradientFromDark: '248 250 252', // slate-50
    gradientViaDark: '248 250 252', // slate-50
    gradientToDark: '167 139 250', // violet-400
    blob1: '139 92 246', // violet-500
    blob2: '59 130 246', // blue-500
    blob3: '217 70 239', // fuchsia-500
    blob4: '139 92 246', // violet-500
    printAccent: '79 70 229', // indigo-600
    printText: '15 23 42', // slate-900
  },

  // Meta - Blue gradient
  meta: {
    primary500: '24 119 242', // Meta Blue
    primary600: '0 100 224', // Meta Blue darker
    primary400: '66 147 249', // Meta Blue lighter
    gradientFromLight: '0 100 224', // Meta Blue dark
    gradientViaLight: '24 119 242', // Meta Blue
    gradientToLight: '66 147 249', // Meta Blue light
    gradientFromDark: '66 147 249', // Meta Blue light
    gradientViaDark: '24 119 242', // Meta Blue
    gradientToDark: '107 173 252', // Meta Blue very light
    blob1: '24 119 242', // Meta Blue
    blob2: '0 100 224', // Meta Blue dark
    blob3: '66 147 249', // Meta Blue light
    blob4: '24 119 242', // Meta Blue
    printAccent: '0 100 224', // Meta Blue
    printText: '28 30 33', // Meta Gray
  },

  // Amazon - Orange theme
  amazon: {
    primary500: '255 153 0', // Amazon Orange
    primary600: '255 136 0', // Amazon Orange darker
    primary400: '255 180 77', // Amazon Orange lighter
    gradientFromLight: '35 47 62', // Amazon Dark
    gradientViaLight: '35 47 62', // Amazon Dark
    gradientToLight: '255 153 0', // Amazon Orange
    gradientFromDark: '248 250 252', // Light
    gradientViaDark: '248 250 252', // Light
    gradientToDark: '255 180 77', // Amazon Orange light
    blob1: '255 153 0', // Orange
    blob2: '35 47 62', // Dark blue
    blob3: '255 180 77', // Light orange
    blob4: '255 153 0', // Orange
    printAccent: '255 136 0', // Amazon Orange
    printText: '15 17 17', // Amazon Black
  },

  // Apple - Minimalist gray/black
  apple: {
    primary500: '0 0 0', // Black
    primary600: '0 0 0', // Black
    primary400: '142 142 147', // System Gray
    gradientFromLight: '0 0 0', // Black
    gradientViaLight: '28 28 30', // Gray
    gradientToLight: '99 99 102', // System Gray
    gradientFromDark: '255 255 255', // White
    gradientViaDark: '229 229 234', // Light gray
    gradientToDark: '174 174 178', // System Gray
    blob1: '142 142 147', // Gray
    blob2: '174 174 178', // Light gray
    blob3: '199 199 204', // Lighter gray
    blob4: '142 142 147', // Gray
    printAccent: '0 0 0', // Black
    printText: '0 0 0', // Black
  },

  // Microsoft - Blue theme
  microsoft: {
    primary500: '0 120 212', // Microsoft Blue
    primary600: '0 99 177', // Microsoft Blue darker
    primary400: '47 141 217', // Microsoft Blue lighter
    gradientFromLight: '0 99 177', // Blue dark
    gradientViaLight: '0 120 212', // Blue
    gradientToLight: '47 141 217', // Blue light
    gradientFromDark: '96 173 234', // Light blue
    gradientViaDark: '47 141 217', // Blue light
    gradientToDark: '149 199 239', // Very light blue
    blob1: '0 120 212', // Blue
    blob2: '127 186 0', // Green
    blob3: '255 185 0', // Yellow
    blob4: '242 80 34', // Red/Orange
    printAccent: '0 99 177', // Microsoft Blue
    printText: '23 23 23', // Microsoft Gray
  },

  // Netflix - Red theme
  netflix: {
    primary500: '229 9 20', // Netflix Red
    primary600: '185 9 11', // Netflix Red darker
    primary400: '242 78 86', // Netflix Red lighter
    gradientFromLight: '0 0 0', // Black
    gradientViaLight: '20 20 20', // Dark gray
    gradientToLight: '229 9 20', // Netflix Red
    gradientFromDark: '255 255 255', // White
    gradientViaDark: '229 9 20', // Netflix Red
    gradientToDark: '242 78 86', // Netflix Red light
    blob1: '229 9 20', // Red
    blob2: '20 20 20', // Dark
    blob3: '242 78 86', // Light red
    blob4: '229 9 20', // Red
    printAccent: '185 9 11', // Netflix Red
    printText: '0 0 0', // Black
  },

  // Spotify - Green theme
  spotify: {
    primary500: '30 215 96', // Spotify Green
    primary600: '29 185 84', // Spotify Green darker
    primary400: '80 227 137', // Spotify Green lighter
    gradientFromLight: '25 20 20', // Dark
    gradientViaLight: '25 20 20', // Dark
    gradientToLight: '30 215 96', // Spotify Green
    gradientFromDark: '255 255 255', // White
    gradientViaDark: '255 255 255', // White
    gradientToDark: '80 227 137', // Spotify Green light
    blob1: '30 215 96', // Green
    blob2: '29 185 84', // Darker green
    blob3: '80 227 137', // Light green
    blob4: '30 215 96', // Green
    printAccent: '29 185 84', // Spotify Green
    printText: '0 0 0', // Black
  },

  // Canva - Teal/Purple gradient
  canva: {
    primary500: '0 196 180', // Canva Teal #00C4B4
    primary600: '0 158 145', // Canva Teal darker
    primary400: '77 213 200', // Canva Teal lighter
    gradientFromLight: '125 42 232', // Canva Purple #7D2AE8
    gradientViaLight: '0 196 180', // Canva Teal
    gradientToLight: '0 158 145', // Canva Teal dark
    gradientFromDark: '77 213 200', // Canva Teal light
    gradientViaDark: '0 196 180', // Canva Teal
    gradientToDark: '167 139 250', // Purple light
    blob1: '0 196 180', // Teal
    blob2: '125 42 232', // Purple
    blob3: '255 107 107', // Coral
    blob4: '0 196 180', // Teal
    printAccent: '0 158 145', // Canva Teal dark
    printText: '30 41 59', // Slate-800
  },
};

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
