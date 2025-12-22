'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslations } from 'next-intl';

import { Icons } from '@/components/ui/icons';
import { containerVariants, itemVariants } from '@/components/motion';

export const HighlightsSection: React.FC = () => {
  const t = useTranslations();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const highlights = React.useMemo(
    () => [
      {
        icon: Icons.Code2,
        title: t('HomePage.highlightsSection.fullStack.title'),
        description: t('HomePage.highlightsSection.fullStack.description')
      },
      {
        icon: Icons.Layers,
        title: t('HomePage.highlightsSection.typeScriptFirst.title'),
        description: t('HomePage.highlightsSection.typeScriptFirst.description')
      },
      {
        icon: Icons.Database,
        title: t('HomePage.highlightsSection.databases.title'),
        description: t('HomePage.highlightsSection.databases.description')
      },
      {
        icon: Icons.Sparkles,
        title: t('HomePage.highlightsSection.qualityFocused.title'),
        description: t('HomePage.highlightsSection.qualityFocused.description')
      }
    ],
    [t]
  );

  return (
    <section className="bg-muted/30 border-y py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <motion.div
                className="group flex flex-col items-center gap-3 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
