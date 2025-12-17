import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '../styles/globals.css';
import { siteConfig } from '@/config/site';
import { Providers } from '@/components/providers';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
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

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
