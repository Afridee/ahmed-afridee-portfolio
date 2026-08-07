import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // design.md palette — mapped 1:1
        canvas: '#f0f0f3', // Cloud Gray — primary light canvas
        preto: '#000000', // Preto — dark surface only (never text on white)
        ink: '#1c2024', // Quase Preto — dark surfaces / off-black text
        branco: '#ffffff', // Branco — floating cards
        slate: '#60646c', // Slate Gray — secondary text, borders
        silver: '#b0b4ba', // Silver — decorative
        cobalt: {
          DEFAULT: '#0d74ce', // Cobalt Link — CTAs, links, highlights
          dark: '#0c6abd', // 8% darken for hover
        },
        lavender: '#e0e1e6', // Borda Lavanda — hairline borders
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        hero: [
          'clamp(2.5rem, 5vw, 4rem)',
          { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' },
        ],
        h1: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        pill: '9999px',
      },
      boxShadow: {
        whisper: '0 2px 12px rgba(0, 0, 0, 0.06)',
        'whisper-lift': '0 6px 20px rgba(0, 0, 0, 0.09)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
