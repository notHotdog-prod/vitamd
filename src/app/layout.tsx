// src/app/layout.tsx
import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import '../styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MaxLifeMD — Longevity & Precision Medicine',
    template: '%s | MaxLifeMD',
  },
  description:
    'MaxLifeMD is a telehealth platform delivering personalized longevity protocols, GLP-1 weight loss, hormone optimization, and precision medicine — powered by physician expertise and community.',
  keywords: [
    'longevity medicine', 'telehealth', 'GLP-1', 'weight loss', 'hormone therapy',
    'NAD+', 'precision medicine', 'anti-aging', 'MaxLifeMD',
  ],
  authors: [{ name: 'MaxLifeMD' }],
  creator: 'MaxLifeMD',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://maxlifemd.com',
    siteName: 'MaxLifeMD',
    title: 'MaxLifeMD — Longevity & Precision Medicine',
    description: 'Personalized longevity protocols powered by physician expertise.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaxLifeMD — Longevity & Precision Medicine',
    description: 'Personalized longevity protocols powered by physician expertise.',
  },
  icons: {
    icon: '/images/icon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-body bg-navy-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
