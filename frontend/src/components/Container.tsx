import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 py-16 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}