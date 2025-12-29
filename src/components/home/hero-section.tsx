'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

import { siteConfig } from '@/config/site';
import { cn, getNameInitials } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { cardVariants, containerVariants, itemVariants } from '@/components/motion';

const ParticleBackground = dynamic(
  () =>
    import('@/components/particles/particle-background').then((mod) => ({
      default: mod.ParticleBackground
    })),
  {
    ssr: false
  }
);

const skills = ['React/React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'];

export const HeroSection: React.FC = () => {
  const t = useTranslations();

  const expertise = React.useMemo(
    () => [
      {
        value: t('HomePage.heroSection.expertise.yearsExp.value'),
        label: t('HomePage.heroSection.expertise.yearsExp.label')
      },
      {
        value: t('HomePage.heroSection.expertise.projects.value'),
        label: t('HomePage.heroSection.expertise.projects.label')
      }
    ],
    [t]
  );

  return (
    <section className="relative overflow-hidden">
      <ParticleBackground />

      {/* Animated background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="bg-primary/8 absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="bg-primary/10 absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-6 px-4 py-1.5">
                <motion.span
                  className="bg-success mr-2 inline-block h-2 w-2 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {t('HomePage.heroSection.availableForNewProjects')}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t.rich('HomePage.heroSection.title', {
                name: (_chunks) => (
                  <span className="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
                    {siteConfig.name}
                  </span>
                )
              })}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mt-4 text-xl font-medium sm:text-2xl"
            >
              {t('HomePage.heroSection.role')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed"
            >
              {t('HomePage.heroSection.description')}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/projects"
                  className={cn(buttonVariants({ size: 'lg' }), 'group gap-2')}
                >
                  {t('Shared.viewProjects')}
                  <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/blog"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
                >
                  {t('Shared.readBlog')}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
              {[
                { href: siteConfig.links.github, icon: <Icons.Github className="h-5 w-5" /> },
                {
                  href: siteConfig.links.twitter,
                  icon: <Icons.X className="h-5 w-5" />
                },
                {
                  href: siteConfig.links.linkedin,
                  icon: <Icons.Linkedin className="h-5 w-5" />
                }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-card/50 relative rounded-2xl border p-8 shadow-2xl backdrop-blur-sm"
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="from-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br to-transparent" />
              <div className="relative flex flex-col items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Avatar className="ring-primary/20 ring-offset-background h-32 w-32 ring-4 ring-offset-4">
                    <AvatarImage
                      src="/images/avatars/durmus-demirtas.jpeg"
                      alt={siteConfig.author}
                    />
                    <AvatarFallback className="text-2xl">
                      {getNameInitials(siteConfig.author)}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <div className="text-center">
                  <h2 className="text-xl font-semibold">{siteConfig.author}</h2>
                  <p className="text-muted-foreground mt-1">{t('HomePage.heroSection.location')}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="outline">{tech}</Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="text-muted-foreground mt-2 grid w-full grid-cols-2 gap-4 text-center text-sm">
                  {expertise.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-muted/50 rounded-lg p-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-foreground text-2xl font-bold">{stat.value}</p>
                      <p>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
