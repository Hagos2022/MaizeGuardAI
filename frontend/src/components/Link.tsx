import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  const baseStyles = 'transition-colors hover:text-green-200';
  return (
    <a href={href} className={`${baseStyles} ${className}`} {...props}>
      {children}
    </a>
  );
}