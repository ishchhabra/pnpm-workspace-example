import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'underline';
  size?: 'small' | 'medium' | 'large';
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'underline',
  size = 'medium',
  className = '',
  external = false,
  href,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]',
    secondary: 'flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]',
    underline: 'flex items-center gap-2 hover:underline hover:underline-offset-4'
  };

  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <a
      href={href}
      className={`${variantStyles[variant]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}; 