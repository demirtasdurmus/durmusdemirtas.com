import { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import '../../styles/globals.css';

import type { PromiseParams } from '@/types';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing';
import { Providers } from '@/components/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  title: {
    default: siteConfig.author,
    template: `%s | ${siteConfig.author}`
  },
  description: siteConfig.description,
  keywords: [
    'Durmuş Demirtaş',
    'Software Engineer',
    'Full Stack Developer',
    'Web Development',
    'Next.js',
    'React',
    'TypeScript',
    'Portfolio',
    'Blog'
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url
    }
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    url: siteConfig.url,
    title: siteConfig.author,
    description: siteConfig.description,
    siteName: siteConfig.author
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.author,
    description: siteConfig.description,
    creator: '@drmsdmrts'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

/**
 * TODO: try to understand this, or remove it
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

type RootLayoutProps = PropsWithChildren<PromiseParams<{ locale: string }>>;

export default async function RootLayout({ children, params }: Readonly<RootLayoutProps>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
