import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CyberpunkInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const CyberpunkInput = React.forwardRef<HTMLInputElement, CyberpunkInputProps>(
  ({ className, icon, type, ...props }, ref) => {
    return (
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground">
            {icon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            'terminal-input w-full',
            icon && 'pl-12',
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);

CyberpunkInput.displayName = 'CyberpunkInput';
