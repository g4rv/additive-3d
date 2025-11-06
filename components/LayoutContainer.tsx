import React from 'react';

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutContainer({ children, className = '' }: LayoutContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
