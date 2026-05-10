import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  grayscale?: boolean;
  aspectRatio?: '3/4' | '16/9' | 'square';
  image?: string;
  showPlayIcon?: boolean;
}

export const CyberpunkCard: React.FC<CyberpunkCardProps> = ({
  children,
  className,
  hover = true,
  grayscale = true,
  aspectRatio = '3/4',
  image,
  showPlayIcon = false,
}) => {
  const aspectRatioClasses = {
    '3/4': 'aspect-[3/4]',
    '16/9': 'aspect-video',
    'square': 'aspect-square',
  };

  return (
    <motion.div
      className={cn(
        'brutalist-card relative group overflow-hidden border border-white/10 bg-black/80 backdrop-blur-xl',
        aspectRatioClasses[aspectRatio],
        hover && 'cursor-pointer',
        className
      )}
      initial={{ scale: 0.99, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={hover ? { scale: 1.00 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Background Image Container with grayscale hover */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={image} 
            alt="Card background"
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              grayscale && "grayscale group-hover:grayscale-0 group-hover:scale-105"
            )}
          />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full p-6 flex flex-col">
        {children}
      </div>

      {/* Play Icon Overlay - Sharp White Box */}
      {showPlayIcon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <div className="w-0 h-0 border-l-[15px] border-l-black border-y-[10px] border-y-transparent ml-1" />
          </motion.div>
        </div>
      )}

      {/* Brutalist Border Accents */}
      <div className="absolute top-0 left-0 w-4 h-[1px] bg-white/20" />
      <div className="absolute top-0 left-0 w-[1px] h-4 bg-white/20" />
      <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white/20" />
      <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-white/20" />
      
      {/* AES Status Banner (Corner) */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-neon-blue rounded-full" />
        <span className="text-[7px] font-mono tracking-tighter uppercase">SECURE_LINK</span>
      </div>
    </motion.div>
  );
};
