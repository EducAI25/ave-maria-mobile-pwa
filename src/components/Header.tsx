import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, className }) => {
  return (
    <header className={cn("bg-card soft-shadow sticky top-0 z-40", className)}>
      <div className="px-4 py-4">
        <h1 className="text-xl font-semibold text-primary text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground text-center mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};