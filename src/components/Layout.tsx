import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { PWAInstallPrompt } from './PWAInstallPrompt';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20 min-h-screen">
        {children}
      </main>
      <Navigation currentPath={location.pathname} />
      <PWAInstallPrompt />
    </div>
  );
};