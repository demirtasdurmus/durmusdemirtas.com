'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { getTranslatedFeaturedProjects } from '@/config/projects';
import { containerVariants, cardVariants } from '@/components/motion';
import { Link } from '@/i18n/navigation';

export const FeaturedProjects: React.FC = () => {
  const t = useTranslations();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = React.useMemo(() => getTranslatedFeaturedProjects(t), [t]);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            {t('HomePage.featuredProjectsSection.badge')}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('HomePage.featuredProjectsSection.title')}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {t('HomePage.featuredProjectsSection.description')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full transition-shadow hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="flex gap-2">
                        {project.github && (
                          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Icons.gitHub className="h-5 w-5" />
                            </a>
                          </motion.div>
                        )}
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                          </a>
                        </motion.div>
                      </div>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.div key={tag} whileHover={{ scale: 1.1 }}>
                          <Badge variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2')}
            >
              {t('Shared.viewAllProjects')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
