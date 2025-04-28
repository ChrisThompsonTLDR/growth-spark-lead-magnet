
import React from 'react';

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

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/lovable-uploads/bef0c0f8-016d-447a-9074-1d156cab8c5b.png" 
        alt="Let's Thrive Coaching Logo" 
        className={`${sizeClasses[size]} aspect-square`}
      />
      <span className={`font-display font-bold text-thrive-700 ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'}`}>
        Let's Thrive Coaching
      </span>
    </div>
  );
};

export default Logo;
