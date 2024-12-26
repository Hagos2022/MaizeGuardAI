import React from 'react';

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 4 | 6 | 8;
  className?: string;
}

export function Grid({ 
  children, 
  columns = 2, 
  gap = 8,
  className = '' 
}: GridProps) {
  const columnStyles = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  const gapStyles = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };

  return (
    <div className={`grid ${columnStyles[columns]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}