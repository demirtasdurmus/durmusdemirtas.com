'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { Project } from '@/types';
import { containerVariants, cardVariants } from '@/components/motion';

type ProjectGridProps = {
  items: Project[];
  isInView: boolean;
  refProp: React.RefObject<HTMLDivElement>;
  showStars?: boolean;
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  items,
  isInView,
  refProp,
  showStars
}) => {
  return (
    <motion.div
      ref={refProp}
      className="grid gap-8 sm:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {items.map((project, index) => (
        <motion.div
          key={project.title}
          variants={cardVariants}
          custom={index}
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Card className="group h-full overflow-hidden">
            <CardContent className="flex h-full flex-col p-0">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>

                  {showStars && project.stars && (
                    <div className="text-muted-foreground bg-muted inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium">
                      <Star className="h-3.5 w-3.5" />
                      {project.stars}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mt-2 flex-1">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {project.github && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'outline' }), 'gap-2')}
                      >
                        <Icons.gitHub className="h-4 w-4" />
                        GitHub
                      </Link>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: 'outline' }), 'w-full gap-2')}
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
