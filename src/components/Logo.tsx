
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const imgSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex items-center justify-center bg-sand-100 rounded-full ${sizeClasses[size]}`}>
        <img 
          src="/lovable-uploads/0b994783-29d7-4b50-b93b-16844e846443.png" 
          alt="Let's Thrive Coaching Tree Logo" 
          className={`${imgSizes[size]} object-contain`}
        />
      </div>
      <span className={`font-display font-bold text-terra-500 ${textSizes[size]}`}>
        Let's Thrive Coaching
      </span>
    </div>
  );
};

export default Logo;
