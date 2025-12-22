'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

export const HomeCTA: React.FC = () => {
  const t = useTranslations();

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
                <Icons.Mail className="h-8 w-8" />
              </motion.div>

              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {t('HomePage.homeCTA.title')}
              </motion.h2>

              <motion.p
                className="text-muted-foreground mt-4 max-w-xl text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t('HomePage.homeCTA.description')}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={cn(buttonVariants({ size: 'lg' }), 'group gap-2')}
                  >
                    {t('Shared.getInTouch')}
                    <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
                  >
                    {t('Shared.learnMoreAboutMe')}
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
