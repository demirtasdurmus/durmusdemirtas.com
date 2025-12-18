'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { LanguageToggle } from './language-toggle';
import { MainNav } from './main-nav';
import { ModeToggle } from './mode-toggle';

export const Navigation: React.FC = () => {
  const t = useTranslations('Navigation');

  const mainNav = [
    {
      title: t('about'),
      href: '/about'
    },
    {
      title: t('blog'),
      href: '/blog'
    },
    {
      title: t('projects'),
      href: '/projects'
    }
  ];

  return (
    <header className="bg-background z-40 container mx-auto">
      <div className="flex h-16 items-center justify-between px-6 py-6">
        <MainNav items={mainNav} />

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
