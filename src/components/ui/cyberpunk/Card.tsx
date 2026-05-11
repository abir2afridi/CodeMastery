import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
  grayscale?: boolean;
  aspectRatio?: '3/4' | '16/9' | 'square';
  image?: string;
  showPlayIcon?: boolean;
  primaryColor?: string;
}

export const CyberpunkCard: React.FC<CyberpunkCardProps> = ({
  children,
  className,
  style,
  hover = true,
  grayscale = true,
  aspectRatio = '3/4',
  image,
  showPlayIcon = false,
  primaryColor,
}) => {
  const aspectRatioClasses = {
    '3/4': 'aspect-[3/4]',
    '16/9': 'aspect-video',
    'square': 'aspect-square',
  };

  const primaryStyle = primaryColor ? { backgroundColor: primaryColor } : {};
  const primaryBorderStyle = primaryColor ? { borderColor: primaryColor } : {};
  const primaryAccentStyle = primaryColor ? { backgroundColor: `${primaryColor}4D` } : {}; // 30% opacity (4D in hex)

  return (
    <motion.div
      className={cn(
        'brutalist-card relative group overflow-hidden border border-border bg-surface/80 backdrop-blur-xl',
        aspectRatioClasses[aspectRatio],
        hover && 'cursor-pointer',
        className
      )}
      style={style}
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

      {/* Play Icon Overlay - Sharp Box */}
      {showPlayIcon && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className={cn("w-16 h-16 flex items-center justify-center shadow-glow", !primaryColor && "bg-primary")}
            style={primaryStyle}
          >
            <div className={cn("w-0 h-0 border-l-[15px] border-y-[10px] border-y-transparent ml-1", primaryColor ? "border-l-white" : "border-l-primary-foreground")} />
          </motion.div>
        </div>
      )}

      {/* Brutalist Border Accents */}
      <div className={cn("absolute top-0 left-0 w-4 h-[1px]", !primaryColor && "bg-primary/30")} style={primaryAccentStyle} />
      <div className={cn("absolute top-0 left-0 w-[1px] h-4", !primaryColor && "bg-primary/30")} style={primaryAccentStyle} />
      <div className={cn("absolute bottom-0 right-0 w-4 h-[1px]", !primaryColor && "bg-primary/30")} style={primaryAccentStyle} />
      <div className={cn("absolute bottom-0 right-0 w-[1px] h-4", !primaryColor && "bg-primary/30")} style={primaryAccentStyle} />
      
      {/* AES Status Banner (Corner) */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className={cn("w-1 h-1 rounded-full", !primaryColor && "bg-primary")} style={primaryStyle} />
        <span className="text-[7px] font-mono tracking-tighter uppercase text-foreground/40">SECURE_LINK</span>
      </div>
    </motion.div>
  );
};
