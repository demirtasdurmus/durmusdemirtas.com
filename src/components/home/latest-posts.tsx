'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion, useInView } from 'motion/react';

import { cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants } from '@/components/motion';

type Post = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

type LatestPostsProps = {
  posts: Post[];
};

export const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            Blog
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Posts</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Thoughts on software development, tutorials, and things I&apos;ve learned along the way.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="divide-y">
            {posts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    x: 8,
                    transition: { type: 'spring', stiffness: 400, damping: 25 }
                  }}
                >
                  <Link
                    href={post.slug}
                    className="group flex flex-col gap-3 py-6 transition-colors first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="flex-1 space-y-2">
                      <motion.h3
                        className="group-hover:text-primary text-lg font-semibold transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {post.title}
                      </motion.h3>
                      {post.description && (
                        <p className="text-muted-foreground line-clamp-2 text-sm">
                          {post.description}
                        </p>
                      )}
                    </div>
                    <div className="text-muted-foreground flex shrink-0 items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/blog"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2')}
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
