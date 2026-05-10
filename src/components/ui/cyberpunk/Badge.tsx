import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkBadgeProps {
  children: React.ReactNode;
  variant?: 'status' | 'protocol' | 'encryption';
  className?: string;
}

export const CyberpunkBadge: React.FC<CyberpunkBadgeProps> = ({
  children,
  variant = 'status',
  className,
}) => {
  const variantClasses = {
    status: 'bg-neon-blue text-black font-black uppercase tracking-[0.2em] text-[9px] px-3 py-1 flex items-center',
    protocol: 'bg-transparent border border-neon-blue/30 text-neon-blue font-black uppercase tracking-[0.2em] text-[9px] px-3 py-1 flex items-center backdrop-blur-md',
    encryption: 'bg-black/80 border-y border-white/10 text-white/40 font-mono text-[9px] tracking-[0.3em] uppercase py-2 w-full flex items-center justify-center gap-4 backdrop-blur-xl',
  };

  return (
    <motion.div
      className={cn(
        variantClasses[variant],
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
