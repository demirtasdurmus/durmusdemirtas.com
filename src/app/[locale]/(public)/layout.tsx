import React from 'react';
import { getTranslations } from 'next-intl/server';

import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { PropsWithChildren } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageToggle } from '@/components/language-toggle';

export default async function MarketingLayout({ children }: PropsWithChildren) {
  const t = await getTranslations();

  const mainNav = [
    {
      title: t('Navigation.about'),
      href: '/about'
    },
    {
      title: t('Navigation.blog'),
      href: '/blog'
    },
    {
      title: t('Navigation.projects'),
      href: '/projects'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background z-40 container mx-auto">
        <div className="flex h-20 items-center justify-between px-6 py-6">
          <MainNav items={mainNav} />

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
