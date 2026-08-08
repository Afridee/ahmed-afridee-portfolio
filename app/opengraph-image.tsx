import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Ahmed Afridee — Flutter Developer | AI Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Palette mirrors tailwind.config.ts (ink, branco, slate, cobalt).
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1c2024',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: '#0d74ce',
            }}
          />
          <div style={{ color: '#b0b4ba', fontSize: 28, letterSpacing: 2 }}>
            afridee.dev
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Ahmed Afridee
          </div>
          <div
            style={{
              marginTop: 20,
              color: '#0d74ce',
              fontSize: 40,
              fontWeight: 600,
            }}
          >
            Flutter Developer | AI Engineer
          </div>
        </div>

        <div
          style={{
            color: '#60646c',
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 980,
          }}
        >
          Offline-first mobile systems and on-device AI pipelines — 5+ years
          shipping production Flutter apps.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
