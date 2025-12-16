'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const MotionCard: React.FC<MotionCardProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn('h-full', className)}
      whileHover={{
        y: -8,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};
