'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export const ModeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="bg-muted/50 h-11 w-11 rounded-full border shadow-sm" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleClick = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="relative z-10 shrink-0">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        className={cn(
          'from-background via-card to-muted relative h-11 w-11 rounded-full border bg-linear-to-br p-2 shadow-inner shadow-black/5',
          'focus-visible:ring-ring/60 focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'transition-all duration-300 hover:shadow-md'
        )}
      >
        {/* subtle shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <motion.div
            className="bg-primary/10 absolute -inset-6 blur-3xl"
            animate={{ opacity: isDark ? 0.12 : 0.25, scale: isDark ? 0.9 : 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Icon (lucide sun/moon) with motion */}
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="text-foreground flex items-center justify-center"
        >
          {isDark ? (
            <motion.div animate={{ rotate: -10 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
              <Icons.moon className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div animate={{ rotate: 15 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
              <Icons.sun className="h-6 w-6" />
            </motion.div>
          )}
        </motion.div>
      </button>
    </div>
  );
};
