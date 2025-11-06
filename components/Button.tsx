import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition-colors duration-200';
  
  const variantStyles = {
    primary: 'bg-brand hover:bg-brand-700 text-white',
    secondary: 'bg-neutral-200 hover:bg-neutral-600 hover:text-white text-neutral-900',
    ghost: 'bg-transparent hover:bg-neutral-200 text-neutral-700'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
