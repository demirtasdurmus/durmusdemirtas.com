'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { clientProjects, openSourceProjects } from '@/config/projects';
import { ProjectGrid } from './projects-grid';
import { containerVariants, itemVariants } from '@/components/motion';

export const ProjectsContent = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            Projects
          </h1>
          <p className="text-muted-foreground text-xl">
            A collection of professional work and open-source projects.
          </p>
        </motion.div>
      </motion.div>

      <motion.hr className="my-6" variants={itemVariants} initial="hidden" animate="visible" />

      <Tabs defaultValue="work" className="w-full">
        <TabsList>
          <TabsTrigger value="work">Client Projects</TabsTrigger>
          <TabsTrigger value="oss">Open Source</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="pt-4">
          <ProjectGrid
            items={clientProjects}
            isInView={isInView}
            refProp={ref as React.RefObject<HTMLDivElement>}
          />
        </TabsContent>

        <TabsContent value="oss" className="pt-4">
          <ProjectGrid
            items={openSourceProjects}
            isInView={isInView}
            refProp={ref as React.RefObject<HTMLDivElement>}
            showStars
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
