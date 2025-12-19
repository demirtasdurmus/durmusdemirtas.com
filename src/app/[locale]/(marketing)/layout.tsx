import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { PropsWithChildren } from 'react';
import { Navigation } from '@/components/navigation';

export default async function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
