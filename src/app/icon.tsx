import { ImageResponse } from 'next/og';
import { getThemeColors } from '@/theme';

// Ensure this is statically generated at build time
export const dynamic = 'force-static';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Generate separate metadata for Light and Dark modes
export function generateImageMetadata() {
  return [
    {
      id: 'light',
      alt: 'Resume Logo - Light',
      contentType: 'image/png',
      // This tells the browser to use this icon when in Light Mode
      media: '(prefers-color-scheme: light)',
    },
    {
      id: 'dark',
      alt: 'Resume Logo - Dark',
      contentType: 'image/png',
      // This tells the browser to use this icon when in Dark Mode
      media: '(prefers-color-scheme: dark)',
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  const colors = getThemeColors();
  const brandColor = `rgb(${colors.primary600})`;
  const lightColor = '#f8fafc'; // slate-50
  const darkColor = '#1e293b'; // slate-800

  // Customize appearance based on ID
  // Light Mode Icon: Brand Background, White Text
  // Dark Mode Icon: Brand Background, White Text (Brand color usually works on both)
  // But we can invert it if we want:
  
  const isDark = id === 'dark';
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          // Use same brand color for consistency, or adjust for contrast
          background: brandColor,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: lightColor,
          borderRadius: 8,
          fontWeight: 700,
        }}
      >
        L
      </div>
    ),
    {
      ...size,
    }
  );
}
