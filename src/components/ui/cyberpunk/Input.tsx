import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberpunkInputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const CyberpunkInput: React.FC<CyberpunkInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  icon,
  disabled = false,
}) => {
  return (
    <motion.div
      className="relative"
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          'terminal-input w-full',
          icon && 'pl-12',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      />
    </motion.div>
  );
};
