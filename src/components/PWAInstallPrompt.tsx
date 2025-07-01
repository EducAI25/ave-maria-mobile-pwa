import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppMode = (window.navigator as any).standalone === true;
    
    if (isInStandaloneMode || isInWebAppMode) {
      setIsInstalled(true);
      return;
    }

    // Check if prompt was already dismissed
    const promptDismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (promptDismissed) {
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after a delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 1000);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50">
      <Card className="p-4 bg-primary text-white divine-shadow">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">📱 Instalar App Ave Maria</h3>
            <p className="text-sm opacity-90 mb-3">
              Instale nosso app para ter acesso rápido à Bíblia, orações e leituras diárias!
            </p>
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={handleInstallClick}
                className="bg-white text-primary hover:bg-white/90"
              >
                Instalar
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDismiss}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Agora não
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="text-white hover:bg-white/10 p-1"
          >
            <X size={16} />
          </Button>
        </div>
      </Card>
    </div>
  );
};