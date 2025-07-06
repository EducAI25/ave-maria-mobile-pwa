import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Heart, MessageSquare, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentPath: string;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const navItems = [
    {
      href: '/',
      icon: BookOpen,
      label: 'Bíblia',
      isActive: currentPath === '/'
    },
    {
      href: '/leitura-hoje',
      icon: Calendar,
      label: 'Hoje',
      isActive: currentPath === '/leitura-hoje'
    },
    {
      href: '/oracoes',
      icon: Heart,
      label: 'Orações',
      isActive: currentPath === '/oracoes' || currentPath.startsWith('/oracao/')
    },
    {
      href: '/como-ler-biblia',
      icon: GraduationCap,
      label: 'Como Ler',
      isActive: currentPath === '/como-ler-biblia'
    },
    {
      href: '/anotacoes',
      icon: MessageSquare,
      label: 'Notas',
      isActive: currentPath === '/anotacoes'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border soft-shadow z-50">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg divine-transition min-w-[56px]",
                item.isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              <Icon size={18} className="mb-1" />
              <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};