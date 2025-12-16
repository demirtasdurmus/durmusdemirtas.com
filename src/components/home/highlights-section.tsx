'use client';

import * as React from 'react';
import { Code2, Database, Layers, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack',
    description: 'React, Next.js, Node.js'
  },
  {
    icon: Layers,
    title: 'TypeScript-First',
    description: 'Type-safe, maintainable code'
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, MongoDB, Redis'
  },
  {
    icon: Sparkles,
    title: 'Quality Focused',
    description: 'Clean code, great UX'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export const HighlightsSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="bg-muted/30 border-y py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <motion.div
                className="group flex flex-col items-center gap-3 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-xl transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
