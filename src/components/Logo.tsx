
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-20 w-20',
    md: 'h-32 w-32',
    lg: 'h-40 w-40',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const imgSizes = {
    sm: 'w-14 h-14',
    md: 'w-24 h-24',
    lg: 'w-30 h-30',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex items-center justify-center bg-sand-100 rounded-full ${sizeClasses[size]}`}>
        <img 
          src="/lovable-uploads/0b994783-29d7-4b50-b93b-16844e846443.png" 
          alt="Let's Thrive Coaching Tree Logo" 
          className={`${imgSizes[size]} object-contain p-1`}
        />
      </div>
      <span className={`font-display font-bold text-terra-500 ${textSizes[size]}`}>
        Let's Thrive Coaching
      </span>
    </div>
  );
};

export default Logo;
