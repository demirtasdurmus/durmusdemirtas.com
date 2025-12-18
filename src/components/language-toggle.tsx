'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Icons } from './icons';
import { languages } from '@/config/i18n';

export const LanguageToggle: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="bg-muted/50 h-11 w-11 rounded-full border shadow-sm" aria-hidden="true" />
    );
  }

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative z-10 shrink-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Change language"
            className={cn(
              'from-background via-card to-muted relative h-10 w-10 rounded-full border bg-linear-to-br p-2 shadow-inner shadow-black/5',
              'focus-visible:ring-ring/60 focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
              'transition-all duration-300 hover:shadow-md'
            )}
          >
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <motion.div
                className="bg-primary/10 absolute -inset-6 blur-3xl"
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Globe Icon with motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="text-foreground flex items-center justify-center"
            >
              <Icons.globe className="h-6 w-6" />
            </motion.div>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-[140px]">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn('cursor-pointer', locale === language.code && 'bg-accent')}
            >
              <span className="mr-2 text-lg">{language.flag}</span>
              <span>{language.label}</span>
              {locale === language.code && (
                <span className="text-success ml-auto font-bold">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
