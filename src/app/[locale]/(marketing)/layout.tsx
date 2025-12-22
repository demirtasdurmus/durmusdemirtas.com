import React, { PropsWithChildren } from 'react';

import { Navigation } from '@/components/navigation';
import { SiteFooter } from '@/components/site-footer';

export default async function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
