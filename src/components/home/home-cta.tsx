'use client';

import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export const HomeCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <motion.div
            className="from-primary/5 via-background to-primary/10 relative mx-auto max-w-4xl overflow-hidden rounded-3xl border bg-linear-to-br p-8 sm:p-12 lg:p-16"
            whileHover={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated decorative elements */}
            <motion.div
              className="bg-primary/10 pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="bg-primary/5 pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            <div className="relative flex flex-col items-center text-center">
              <motion.div
                className="bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Mail className="h-8 w-8" />
              </motion.div>

              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let&apos;s Work Together
              </motion.h2>

              <motion.p
                className="text-muted-foreground mt-4 max-w-xl text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Have a project in mind or just want to chat? I&apos;m always open to discussing new
                opportunities, creative ideas, or ways to help bring your vision to life.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className={cn(buttonVariants({ size: 'lg' }), 'group gap-2')}
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
                  >
                    Learn More About Me
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
