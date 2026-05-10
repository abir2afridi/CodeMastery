import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkButtonProps {
  children: React.ReactNode;
  variant?: 'brutalist' | 'outline' | 'neon' | 'crimson';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
}

export const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({
  children,
  variant = 'brutalist',
  size = 'md',
  className,
  onClick,
  disabled = false,
  asChild = false,
}) => {
  const Component = asChild ? motion.a : motion.button;
  const baseClasses = 'font-black uppercase tracking-[0.2em] transition-all duration-200 border-0';
  
  const sizeClasses = {
    sm: 'text-[9px] px-4 py-2',
    md: 'text-[11px] px-6 py-3',
    lg: 'text-[13px] px-8 py-4',
  };

  const variantClasses = {
    brutalist: 'bg-white text-black hover:bg-neon-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]',
    outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
    neon: 'bg-neon-blue text-black hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]',
    crimson: 'bg-crimson text-white hover:shadow-[0_0_20px_rgba(255,0,110,0.6)]',
  };

  return (
    <Component
      className={cn(
        'font-black uppercase tracking-[0.2em] transition-all duration-200 border-none flex items-center justify-center gap-2 cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </Component>
  );
};
