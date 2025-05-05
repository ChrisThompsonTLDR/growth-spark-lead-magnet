
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
      <div className={`flex items-center justify-center bg-sand-100 text-terra-400 rounded-full p-2 ${sizeClasses[size]} aspect-square`}>
        <div className="relative">
          {/* Tree trunk in faded copper color */}
          <TreeDeciduous 
            size={iconSizes[size]} 
            className="h-full w-full" 
            color="#c67945" // Terra-500 (faded copper)
            strokeWidth={2.5}
          />
          {/* Foliage overlay in sage green, slightly offset */}
          <TreeDeciduous 
            size={iconSizes[size]} 
            className="h-full w-full absolute top-0 left-0" 
            color="#4d704f" // Sage-600 (green)
            strokeWidth={1.5}
          />
        </div>
      </div>
      <span className={`font-display font-bold text-sage-700 ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'}`}>
        Let's Thrive Coaching
      </span>
    </div>
  );
};

export default Logo;
