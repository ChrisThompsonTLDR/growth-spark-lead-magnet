
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-24 w-24',
    md: 'h-36 w-36',
    lg: 'h-44 w-44',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const imgSizes = {
    sm: 'w-24 h-24', // Increased from w-20 h-20
    md: 'w-36 h-36', // Increased from w-32 h-32
    lg: 'w-44 h-44', // Increased from w-40 h-40
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex items-center justify-center bg-sand-100 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <img 
          src="/lovable-uploads/f51c3b7f-395d-463d-997b-1cfbcd7c12cb.png" 
          alt="Let's Thrive Coaching Tree Logo" 
          className={`${imgSizes[size]} object-cover rounded-full`}
        />
      </div>
      <span className={`font-display font-bold text-sage-700 ${textSizes[size]}`}>
        Let's Thrive Coaching
      </span>
    </div>
  );
};

export default Logo;
