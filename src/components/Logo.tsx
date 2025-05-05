
import React from 'react';
import { TreeDeciduous } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 36,
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex items-center justify-center bg-navy-700 text-yellow-400 rounded-full p-2 ${sizeClasses[size]} aspect-square`}>
        <TreeDeciduous 
          size={iconSizes[size]} 
          className="h-full w-full" 
        />
      </div>
      <span className={`font-display font-bold text-navy-700 ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'}`}>
        Let's Thrive Coaching
      </span>
    </div>
  );
};

export default Logo;
