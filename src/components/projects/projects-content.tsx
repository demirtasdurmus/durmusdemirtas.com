'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { motion, Variants, useInView } from 'motion/react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { projects } from '@/config/projects';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

export const ProjectsContent = () => {
  const ref = React.useRef(null);
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
          <h1 className="inline-block text-4xl font-black lg:text-5xl">Projects</h1>
          <p className="text-muted-foreground text-xl">
            A collection of projects I&apos;ve worked on, from e-commerce platforms to blockchain
            applications.
          </p>
        </motion.div>
      </motion.div>

      <motion.hr className="my-8" variants={itemVariants} initial="hidden" animate="visible" />

      <motion.div
        ref={ref}
        className="grid gap-8 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            custom={index}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden">
              <CardContent className="flex h-full flex-col p-0">
                {/* Image container with 16:9 aspect ratio */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <p className="text-muted-foreground mt-2 flex-1">{project.description}</p>

                  {/* Tags */}
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
    </div>
  );
};
