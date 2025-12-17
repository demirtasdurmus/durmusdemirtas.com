import { marketingConfig } from '@/config/marketing';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { PropsWithChildren } from 'react';
import { ModeToggle } from '@/components/mode-toggle';

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 py-6">
          <MainNav items={marketingConfig.mainNav} />

          <ModeToggle />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
