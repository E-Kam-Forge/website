import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14'
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo-cropped.png"
        alt="EkamForge Logo"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
      />
    </div>
  );
};
