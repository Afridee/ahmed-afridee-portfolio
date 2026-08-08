import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Raster version of app/icon.svg for Apple devices (no SVG support).
// Full-bleed background — iOS applies its own corner mask.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0d74ce',
          color: '#ffffff',
          fontSize: 110,
          fontWeight: 700,
          fontFamily: 'monospace',
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
