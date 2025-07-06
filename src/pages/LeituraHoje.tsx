import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, MessageSquare, Loader2 } from 'lucide-react';
import { getLiturgyForDate, DailyReading } from '@/data/liturgicalCalendar';

const READING_SECTIONS = [
  { id: 'firstReading', name: '1ª Leitura', icon: '📖' },
  { id: 'psalm', name: 'Salmo', icon: '🎵' },
  { id: 'gospel', name: 'Evangelho', icon: '✝️' },
  { id: 'reflection', name: 'Reflexão', icon: '💭' }
];

export const LeituraHoje: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('firstReading');
  const [todayReading, setTodayReading] = useState<DailyReading | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar a liturgia do dia
    const loadLiturgy = async () => {
      setLoading(true);
      try {
        const liturgy = getLiturgyForDate(new Date());
        setTodayReading(liturgy);
      } catch (error) {
        console.error('Erro ao carregar liturgia:', error);
        // Fallback para dados estáticos
        setTodayReading(getLiturgyForDate(new Date()));
      } finally {
        setLoading(false);
      }
    };

    loadLiturgy();
  }, []);

  const renderContent = () => {
    if (!todayReading) return null;

    switch (selectedSection) {
      case 'firstReading':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-primary">{todayReading.firstReading.title}</h3>
                <p className="text-sm text-muted-foreground">{todayReading.firstReading.reference}</p>
              </div>
            </div>
            <div className="verse-text">
              {todayReading.firstReading.text}
            </div>
          </div>
        );
      
      case 'psalm':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-primary">{todayReading.psalm.title}</h3>
                <p className="text-sm text-muted-foreground">{todayReading.psalm.reference}</p>
              </div>
            </div>
            <Card className="p-3 bg-primary/10">
              <p className="font-medium text-primary text-center">
                {todayReading.psalm.response}
              </p>
            </Card>
            <div className="verse-text">
              {todayReading.psalm.text}
            </div>
          </div>
        );
      
      case 'gospel':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-primary">{todayReading.gospel.title}</h3>
                <p className="text-sm text-muted-foreground">{todayReading.gospel.reference}</p>
              </div>
            </div>
            <div className="verse-text">
              {todayReading.gospel.text}
            </div>
          </div>
        );
      
      case 'reflection':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} className="text-primary" />
              <h3 className="font-semibold text-primary">Reflexão do Dia</h3>
            </div>
            <div className="text-base leading-relaxed text-foreground/90">
              {todayReading.reflection}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Carregando liturgia do dia...</p>
        </div>
      </div>
    );
  }

  if (!todayReading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Erro ao carregar a liturgia do dia</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title="Liturgia de Hoje" subtitle="Leituras do dia" />
      
      <div className="p-4 space-y-4">
        {/* Today's Info */}
        <Card className="p-4 bg-primary text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">📅 Liturgia de Hoje</h3>
            <Badge variant="secondary" className="text-primary">
              {todayReading.color}
            </Badge>
          </div>
          <p className="text-sm opacity-90 mb-1">
            {todayReading.date}
          </p>
          <p className="text-xs opacity-75">
            {todayReading.liturgicalSeason}
          </p>
          {todayReading.feast && (
            <p className="text-xs opacity-75 mt-1">
              🎉 {todayReading.feast}
            </p>
          )}
        </Card>

        {/* Saint of the Day */}
        <Card className="p-4 bg-secondary text-white">
          <div className="text-center">
            <h3 className="font-semibold mb-1">👑 Santo do Dia</h3>
            <p className="text-lg font-medium">{todayReading.saint}</p>
          </div>
        </Card>

        {/* Reading Sections Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Leituras de Hoje</h3>
          <div className="grid grid-cols-4 gap-2">
            {READING_SECTIONS.map((section) => (
              <Button
                key={section.id}
                variant={selectedSection === section.id ? 'default' : 'outline'}
                className="h-auto p-3 flex-col gap-1"
                onClick={() => setSelectedSection(section.id)}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="text-xs font-medium">{section.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Content */}
        <Card className="p-4">
          {renderContent()}
        </Card>

        {/* Prayer for Today */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">🙏 Oração do Dia</h3>
          <div className="verse-text">
            "Senhor Jesus, que nos destes a vossa Palavra como luz para os nossos passos, 
            ajudai-nos a meditar e viver as leituras de hoje. 
            Que a vossa graça nos fortaleça para sermos testemunhas do vosso amor. 
            Amém."
          </div>
        </Card>

        {/* Today's Intention */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">💝 Intenção de Hoje</h3>
          <div className="text-sm space-y-2">
            <p>
              <strong>Pela Igreja:</strong> Para que seja sempre fiel à sua missão de anunciar o Evangelho
            </p>
            <p>
              <strong>Pelas famílias:</strong> Para que encontrem na oração a força para superar as dificuldades
            </p>
            <p>
              <strong>Pelos doentes:</strong> Para que sintam a presença consoladora de Jesus
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};