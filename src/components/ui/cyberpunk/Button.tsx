import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkButtonProps {
  children: React.ReactNode;
  variant?: 'brutalist' | 'outline' | 'neon' | 'crimson';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
}

export const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({
  children,
  variant = 'brutalist',
  size = 'md',
  className,
  style,
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
    brutalist: 'bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]',
    outline: 'bg-transparent text-foreground border-border hover:bg-background hover:text-foreground',
    neon: 'bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(var(--primary),0.6)]',
    crimson: 'bg-crimson text-foreground hover:shadow-[0_0_20px_rgba(var(--crimson),0.6)]',
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
      style={style}
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
