import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkBadgeProps {
  children: React.ReactNode;
  variant?: 'status' | 'protocol' | 'encryption';
  className?: string;
  style?: React.CSSProperties;
}

export const CyberpunkBadge: React.FC<CyberpunkBadgeProps> = ({
  children,
  variant = 'status',
  className,
  style,
}) => {
  const variantClasses = {
    status: 'bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[9px] px-3 py-1 flex items-center',
    protocol: 'bg-transparent border border-primary/30 text-primary font-black uppercase tracking-[0.2em] text-[9px] px-3 py-1 flex items-center backdrop-blur-md',
    encryption: 'bg-muted text-foreground border-border font-mono text-[9px] tracking-[0.3em] uppercase py-2 w-full flex items-center justify-center gap-4',
  };

  return (
    <motion.div
      className={cn(
        variantClasses[variant],
        className
      )}
      style={style}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
