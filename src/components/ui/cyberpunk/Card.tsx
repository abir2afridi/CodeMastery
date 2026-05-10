import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  grayscale?: boolean;
  aspectRatio?: '3/4' | '16/9' | 'square';
}

export const CyberpunkCard: React.FC<CyberpunkCardProps> = ({
  children,
  className,
  hover = true,
  grayscale = true,
  aspectRatio = '3/4',
}) => {
  const aspectRatioClasses = {
    '3/4': 'aspect-[3/4]',
    '16/9': 'aspect-video',
    'square': 'aspect-square',
  };

  return (
    <motion.div
      className={cn(
        'brutalist-card relative overflow-hidden',
        aspectRatioClasses[aspectRatio],
        grayscale && 'grayscale hover:grayscale-0',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {/* Glass border effect */}
      <div className="absolute inset-0 border border-white/10 pointer-events-none" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial-leak opacity-20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Play button overlay for hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-white flex items-center justify-center">
            <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
