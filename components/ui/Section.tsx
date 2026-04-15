import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: 'default' | 'dark' | 'gradient';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, background = 'default', ...props }, ref) => {
    const backgroundStyles = {
      default: 'bg-background',
      dark: 'bg-black/50',
      gradient: 'bg-gradient-to-b from-background to-black/50',
    };

    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', backgroundStyles[background], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
