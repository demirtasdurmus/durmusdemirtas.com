'use client';

import { motion, Variants } from 'motion/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { getNameInitials } from '@/lib/utils';

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

const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

export const AboutContent: React.FC = () => {
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
          <h1 className="inline-block text-4xl font-black lg:text-5xl">About Me</h1>
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
            Software Developer
          </motion.p>
        </motion.div>

        <motion.div className="py-4" variants={itemVariants}>
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.3 }}
          >
            I&apos;m a full-stack software developer with a strong product mindset and a deep
            curiosity for how systems work end to end. I&apos;m known for my ability to quickly
            identify, research, and master the knowledge required to solve complex problems, and for
            translating that knowledge into clean, reliable, and maintainable solutions.
          </motion.p>
          <motion.p
            className="text-muted-foreground mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.45 }}
          >
            I bring a high level of attention to detail, strong ownership, and a self-driven work
            ethic, allowing me to work effectively both independently and within cross-functional
            teams. I&apos;m a dependable team member and a confident collaborator, comfortable
            taking initiative and communicating clearly. I have full professional proficiency in
            both spoken and written English.
          </motion.p>
          <motion.p
            className="text-muted-foreground mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.6 }}
          >
            My technical experience spans modern web technologies including HTML, CSS,
            JavaScript/TypeScript, React, and Node.js. I&apos;ve built and maintained applications
            using RESTful APIs and worked with both relational and non-relational databases such as
            PostgreSQL, MongoDB, and Redis, including caching strategies. Outside of work, I&apos;m
            interested in science, technology, space research, and I enjoy reading, watercolor
            painting, camping, and exploring new places.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
