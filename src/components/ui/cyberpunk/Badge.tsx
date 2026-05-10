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
    status: 'status-badge',
    protocol: 'protocol-banner',
    encryption: 'bg-success/10 border border-success/30 text-success terminal-text',
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
