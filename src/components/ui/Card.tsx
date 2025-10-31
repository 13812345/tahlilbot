import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'solid';
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'glass',
  hover = false 
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    glass: 'glass-card',
    solid: 'bg-white shadow-md',
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-[1.02]' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
