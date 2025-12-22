import * as React from 'react';
import Link from 'next/link';
import type { MainNavItem } from '@/types';

import { cn } from '@/lib/utils';
import { useLockBody } from '@/hooks/use-lock-body';
import { Icons } from '@/components/ui/icons';

type MobileNavProps = {
  items: MainNavItem[];
  children?: React.ReactNode;
  onClose: () => void;
};

const ANIMATION_DURATION = 300;

export const MobileNav: React.FC<MobileNavProps> = ({ items, children, onClose }) => {
  const [isClosing, setIsClosing] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  useLockBody();

  const handleClose = React.useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION);
  }, [onClose, isClosing]);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto px-6 pb-32 shadow-md transition-all md:hidden',
        isClosing
          ? 'animate-out slide-out-to-right-80 fade-out-0'
          : 'animate-in slide-in-from-bottom-80 fade-in-0'
      )}
      style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
      onClick={handleClose}
    >
      <div
        className="bg-popover text-popover-foreground border-secondary relative z-20 grid gap-4 rounded-md border p-4 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <Link href="/" className="flex items-center space-x-2 px-2" onClick={handleClose}>
          <Icons.SiteLogo />
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              onClick={handleClose}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};
