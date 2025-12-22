'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslations } from 'next-intl';

import { getTranslatedClientProjects, getTranslatedOpenSourceProjects } from '@/config/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { containerVariants, itemVariants } from '@/components/motion';
import { ProjectGrid } from '@/components/projects/projects-grid';

export const ProjectsContent = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations();

  const translatedOpenSourceProjects = React.useMemo(() => getTranslatedOpenSourceProjects(t), [t]);
  const translatedClientProjects = React.useMemo(() => getTranslatedClientProjects(t), [t]);

  return (
    <div className="container mx-auto max-w-6xl px-6 py-6 lg:py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8"
      >
        <motion.div className="flex-1 space-y-4" variants={itemVariants}>
          <h1 className="font-heading inline-block text-4xl tracking-tight lg:text-5xl">
            {t('ProjectsPage.title')}
          </h1>
          <p className="text-muted-foreground text-xl">{t('ProjectsPage.description')}</p>
        </motion.div>
      </motion.div>

      <motion.hr className="my-6" variants={itemVariants} initial="hidden" animate="visible" />

      <Tabs defaultValue="work" className="w-full">
        <TabsList>
          <TabsTrigger value="work">{t('ProjectsPage.clientProjects')}</TabsTrigger>
          <TabsTrigger value="oss">{t('ProjectsPage.openSourceProjects')}</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="pt-4">
          <ProjectGrid
            items={translatedClientProjects}
            isInView={isInView}
            refProp={ref as React.RefObject<HTMLDivElement>}
          />
        </TabsContent>

        <TabsContent value="oss" className="pt-4">
          <ProjectGrid
            items={translatedOpenSourceProjects}
            isInView={isInView}
            refProp={ref as React.RefObject<HTMLDivElement>}
            showStars
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
