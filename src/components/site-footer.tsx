'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { containerVariants, itemVariants } from '@/components/motion';

export const SiteFooter: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const socialLinks = React.useMemo(
    () => [
      {
        href: `mailto:${siteConfig.email}`,
        icon: <Icons.Mail className="h-6 w-6 transition-transform hover:scale-150" />,
        label: 'Mail'
      },
      {
        href: siteConfig.links.twitter,
        icon: <Icons.X className="h-6 w-6 transition-transform hover:scale-150" />,
        label: 'Twitter'
      },
      {
        href: siteConfig.links.github,
        icon: <Icons.Github className="h-6 w-6 transition-transform hover:scale-150" />,
        label: 'GitHub'
      },
      {
        href: siteConfig.links.linkedin,
        icon: <Icons.Linkedin className="h-6 w-6 transition-transform hover:scale-150" />,
        label: 'LinkedIn'
      }
    ],
    []
  );

  return (
    <footer className={cn(className)}>
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <motion.div
          ref={ref}
          className="mb-3 flex space-x-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {socialLinks.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              <motion.a
                target="_blank"
                rel="noreferrer"
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <span className="sr-only">{link.label}</span>
                {link.icon}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};
