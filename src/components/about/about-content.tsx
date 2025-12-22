'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

import { siteConfig } from '@/config/site';
import { getNameInitials } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { avatarVariants, containerVariants, itemVariants } from '@/components/motion';

export const AboutContent: React.FC = () => {
  const t = useTranslations();

  return (
    <motion.div
      className="container mx-auto max-w-6xl px-6 py-6 lg:py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8"
        variants={itemVariants}
      >
        <div className="flex-1 space-x-4">
          <h1 className="font-heading inline-block text-4xl tracking-tight lg:text-5xl">
            {t('AboutPage.title')}
          </h1>
        </div>
      </motion.div>

      <motion.hr className="my-8" variants={itemVariants} />

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <motion.div className="flex max-w-48 min-w-48 flex-col gap-2" variants={itemVariants}>
          <motion.div
            variants={avatarVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Avatar className="h-48 w-48">
              <AvatarImage src="/images/avatars/durmus-demirtas.jpeg" alt={siteConfig.author} />
              <AvatarFallback>{getNameInitials(siteConfig.author)}</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h2
            className="text-center text-2xl font-bold wrap-break-word"
            variants={itemVariants}
          >
            {siteConfig.author}
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-center wrap-break-word"
            variants={itemVariants}
          >
            {t('AboutPage.role')}
          </motion.p>
        </motion.div>

        <motion.div className="py-4" variants={itemVariants}>
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.3 }}
          >
            {t('AboutPage.body.description1')}
          </motion.p>
          <motion.p
            className="text-muted-foreground mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.45 }}
          >
            {t('AboutPage.body.description2')}
          </motion.p>
          <motion.p
            className="text-muted-foreground mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.6 }}
          >
            {t('AboutPage.body.description3')}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
