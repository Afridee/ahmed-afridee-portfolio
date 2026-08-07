import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { MotionProvider } from '@/components/motion-provider';
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
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Ahmed Afridee',
    type: 'website',
    images: [
      {
        url: '/profile.png',
        width: 1271,
        height: 1238,
        alt: 'Portrait of Ahmed Afridee',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
    images: ['/profile.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
