import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { MotionProvider } from '@/components/motion-provider';
import { SmoothScroll } from '@/components/smooth-scroll';
import { profile } from '@/lib/content';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteTitle = 'Ahmed Afridee — Flutter Developer | AI Engineer';
const siteDescription =
  'Flutter Developer and AI Engineer with 5+ years shipping production Android and iOS apps in Dart. Offline-first mobile systems serving 4,500+ field agents, on-device AI pipelines with LangChain, LangGraph, flutter_gemma, and RAG.';

export const metadata: Metadata = {
  metadataBase: new URL('https://afridee.dev'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Ahmed Afridee', url: 'https://afridee.dev' }],
  creator: 'Ahmed Afridee',
  keywords: [
    'Ahmed Afridee',
    'Flutter Developer',
    'AI Engineer',
    'Dart',
    'on-device AI',
    'RAG',
    'LangChain',
    'LangGraph',
    'flutter_gemma',
    'offline-first',
    'mobile developer',
    'Dhaka',
    'Bangladesh',
  ],
  robots: {
    index: true,
    follow: true,
  },
  // og:image and twitter:image come from app/opengraph-image.tsx (file-based
  // metadata overrides any images listed here).
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Ahmed Afridee',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

// Person schema for Google rich results on name searches.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Flutter Developer and AI Engineer',
  url: 'https://afridee.dev',
  image: 'https://afridee.dev/profile.png',
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  knowsAbout: [
    'Flutter',
    'Dart',
    'On-device AI',
    'Retrieval-Augmented Generation',
    'LangChain',
    'LangGraph',
    'Offline-first architecture',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
