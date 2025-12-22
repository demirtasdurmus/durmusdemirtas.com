'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { MainNavItem } from '@/types';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { MobileNav } from '@/components/navigation/mobile-nav';

type MainNavProps = {
  items?: MainNavItem[];
  children?: React.ReactNode;
};

export const MainNav: React.FC<MainNavProps> = ({ items, children }) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.SiteLogo size={40} />
      </Link>

      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'hover:text-foreground/80 flex items-center text-lg font-medium transition-colors sm:text-sm',
                item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.Close size={30} /> : <Icons.MenuIcon size={30} />}
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items} onClose={() => setShowMobileMenu(false)}>
          {children}
        </MobileNav>
      )}
    </div>
  );
};
