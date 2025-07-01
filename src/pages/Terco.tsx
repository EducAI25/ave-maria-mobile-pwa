import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const TERCO_PRAYERS = {
  initial: [
    { type: 'Cruz', prayer: 'Pelo sinal da Santa Cruz, livrai-nos Deus, nosso Senhor, dos nossos inimigos...' },
    { type: 'Credo', prayer: 'Creio em Deus Pai todo-poderoso, criador do céu e da terra...' },
    { type: 'Pai Nosso', prayer: 'Pai nosso, que estais nos céus, santificado seja o vosso nome...' },
    { type: 'Ave Maria (3x)', prayer: 'Ave Maria, cheia de graça, o Senhor é convosco...' },
    { type: 'Glória', prayer: 'Glória ao Pai, ao Filho e ao Espírito Santo...' }
  ],
  decade: [
    { type: 'Pai Nosso', prayer: 'Pai nosso, que estais nos céus, santificado seja o vosso nome...' },
    { type: 'Ave Maria (10x)', prayer: 'Ave Maria, cheia de graça, o Senhor é convosco...' },
    { type: 'Glória', prayer: 'Glória ao Pai, ao Filho e ao Espírito Santo...' },
    { type: 'Jaculatória', prayer: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno...' }
  ],
  final: [
    { type: 'Salve Rainha', prayer: 'Salve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve!' }
  ]
};

export const Terco: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<'initial' | 'decade' | 'final'>('initial');
  const [currentDecade, setCurrentDecade] = useState(1);
  const [currentPrayer, setCurrentPrayer] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);

  const getTotalSteps = () => {
    return TERCO_PRAYERS.initial.length + (5 * TERCO_PRAYERS.decade.length) + TERCO_PRAYERS.final.length;
  };

  const getCurrentStepInTotal = () => {
    if (currentStage === 'initial') {
      return currentPrayer;
    } else if (currentStage === 'decade') {
      return TERCO_PRAYERS.initial.length + ((currentDecade - 1) * TERCO_PRAYERS.decade.length) + currentPrayer;
    } else {
      return TERCO_PRAYERS.initial.length + (5 * TERCO_PRAYERS.decade.length) + currentPrayer;
    }
  };

  useEffect(() => {
    const progress = (getCurrentStepInTotal() / getTotalSteps()) * 100;
    setTotalProgress(progress);
  }, [currentStage, currentDecade, currentPrayer]);

  const nextPrayer = () => {
    if (currentStage === 'initial') {
      if (currentPrayer < TERCO_PRAYERS.initial.length - 1) {
        setCurrentPrayer(currentPrayer + 1);
      } else {
        setCurrentStage('decade');
        setCurrentPrayer(0);
        setCurrentDecade(1);
      }
    } else if (currentStage === 'decade') {
      if (currentPrayer < TERCO_PRAYERS.decade.length - 1) {
        setCurrentPrayer(currentPrayer + 1);
      } else if (currentDecade < 5) {
        setCurrentDecade(currentDecade + 1);
        setCurrentPrayer(0);
      } else {
        setCurrentStage('final');
        setCurrentPrayer(0);
      }
    } else if (currentStage === 'final') {
      if (currentPrayer < TERCO_PRAYERS.final.length - 1) {
        setCurrentPrayer(currentPrayer + 1);
      } else {
        // Terço finalizado
        alert('Terço concluído! Que Deus o abençoe! 🙏');
        resetTerco();
      }
    }
  };

  const resetTerco = () => {
    setCurrentStage('initial');
    setCurrentDecade(1);
    setCurrentPrayer(0);
    setTotalProgress(0);
  };

  const getCurrentPrayers = () => {
    return TERCO_PRAYERS[currentStage];
  };

  const currentPrayerData = getCurrentPrayers()[currentPrayer];

  return (
    <div className="min-h-screen bg-background">
      <Header title="Terço Mariano" subtitle="Oração do Rosário" />
      
      <div className="p-4 space-y-4">
        {/* Progress */}
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Progresso do Terço</span>
              <span className="text-muted-foreground">{Math.round(totalProgress)}%</span>
            </div>
            <Progress value={totalProgress} className="h-2" />
            {currentStage === 'decade' && (
              <div className="text-center text-sm text-muted-foreground">
                {currentDecade}ª Dezena
              </div>
            )}
          </div>
        </Card>

        {/* Current Prayer */}
        <Card className="p-6 bible-gradient text-white">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">
              {currentPrayerData.type}
            </h3>
            <p className="leading-relaxed text-white/90">
              {currentPrayerData.prayer}
            </p>
          </div>
        </Card>

        {/* Stage Info */}
        <Card className="p-4">
          <div className="text-center space-y-2">
            <h4 className="font-medium">
              {currentStage === 'initial' && 'Orações Iniciais'}
              {currentStage === 'decade' && `${currentDecade}ª Dezena`}
              {currentStage === 'final' && 'Oração Final'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {currentStage === 'initial' && `Passo ${currentPrayer + 1} de ${TERCO_PRAYERS.initial.length}`}
              {currentStage === 'decade' && `Oração ${currentPrayer + 1} de ${TERCO_PRAYERS.decade.length}`}
              {currentStage === 'final' && 'Finalizando o Terço'}
            </p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={nextPrayer} 
            className="w-full h-12 text-lg font-medium"
          >
            {currentStage === 'final' && currentPrayer === TERCO_PRAYERS.final.length - 1 
              ? 'Finalizar Terço' 
              : 'Próxima Oração'
            }
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetTerco} 
            className="w-full"
          >
            Recomeçar Terço
          </Button>
        </div>

        {/* Instructions */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">📿 Como rezar o Terço</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Orações Iniciais:</strong> Cruz, Credo, Pai Nosso, 3 Ave Marias, Glória</p>
            <p><strong>5 Dezenas:</strong> Cada dezena tem Pai Nosso, 10 Ave Marias, Glória e Jaculatória</p>
            <p><strong>Oração Final:</strong> Salve Rainha</p>
            <p className="text-muted-foreground mt-3">
              <em>O terço corresponde a um terço do Rosário completo (5 dezenas de 1 mistério)</em>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};