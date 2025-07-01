import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, BookOpen } from 'lucide-react';

interface MissaPart {
  title: string;
  content: string;
  reference?: string;
}

const TODAY_MASS = {
  date: new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  liturgicalColor: 'Verde',
  season: 'Tempo Comum',
  parts: {
    entrance: {
      title: 'Antífona de Entrada',
      content: 'Cantai ao Senhor um cântico novo, porque ele fez maravilhas. Aleluia.',
      reference: 'Sl 98,1'
    },
    firstReading: {
      title: 'Primeira Leitura',
      content: 'Leitura da Primeira Carta de São João: Caríssimos, todo aquele que crê que Jesus é o Cristo nasceu de Deus; e todo aquele que ama quem gerou, ama também quem foi gerado por ele.',
      reference: '1Jo 5,1-6'
    },
    psalm: {
      title: 'Salmo Responsorial',
      content: 'Senhor, quem habitará em vossa casa e no vosso monte santo descansará?',
      reference: 'Sl 15'
    },
    gospel: {
      title: 'Evangelho',
      content: 'Proclamação do Evangelho de Jesus Cristo segundo São João: Naquele tempo, disse Jesus aos seus discípulos: "Eu sou a videira verdadeira, e meu Pai é o agricultor."',
      reference: 'Jo 15,1-8'
    },
    offertory: {
      title: 'Antífona do Ofertório',
      content: 'O Senhor disse: Eu penso pensamentos de paz e não de aflição; invocar-me-eis e eu vos ouvirei.',
      reference: 'Jr 29,11.12.14'
    },
    communion: {
      title: 'Antífona da Comunhão',
      content: 'Eu sou a videira, vós sois os ramos, diz o Senhor; quem permanece em mim e eu nele, este dá muito fruto.',
      reference: 'Jo 15,5'
    }
  }
};

const MASS_PARTS = [
  { id: 'entrance', name: 'Entrada', icon: '🚪' },
  { id: 'firstReading', name: '1ª Leitura', icon: '📖' },
  { id: 'psalm', name: 'Salmo', icon: '🎵' },
  { id: 'gospel', name: 'Evangelho', icon: '✝️' },
  { id: 'offertory', name: 'Ofertório', icon: '🍞' },
  { id: 'communion', name: 'Comunhão', icon: '🍷' }
];

export const Missa: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string>('entrance');

  const currentPart = TODAY_MASS.parts[selectedPart as keyof typeof TODAY_MASS.parts];

  return (
    <div className="min-h-screen bg-background">
      <Header title="Santa Missa" subtitle="Liturgia de hoje" />
      
      <div className="p-4 space-y-4">
        {/* Today's Info */}
        <Card className="p-4 bible-gradient text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">🙏 Missa de Hoje</h3>
            <Badge variant="secondary" className="text-primary">
              {TODAY_MASS.liturgicalColor}
            </Badge>
          </div>
          <p className="text-sm opacity-90 mb-1">
            {TODAY_MASS.date}
          </p>
          <p className="text-xs opacity-75">
            {TODAY_MASS.season}
          </p>
        </Card>

        {/* Mass Parts Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Partes da Missa</h3>
          <div className="grid grid-cols-3 gap-2">
            {MASS_PARTS.map((part) => (
              <Button
                key={part.id}
                variant={selectedPart === part.id ? 'default' : 'outline'}
                className="h-auto p-3 flex-col gap-1"
                onClick={() => setSelectedPart(part.id)}
              >
                <span className="text-lg">{part.icon}</span>
                <span className="text-xs font-medium">{part.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Selected Part Content */}
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <h3 className="font-semibold text-primary">{currentPart.title}</h3>
            </div>
            
            <div className="verse-text">
              {currentPart.content}
            </div>
            
            {currentPart.reference && (
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground">
                  {currentPart.reference}
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Mass Schedule */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">📅 Horários das Missas</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span className="text-sm">Segunda a Sexta</span>
              </div>
              <span className="text-sm font-medium">6h30, 12h00, 19h00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span className="text-sm">Sábado</span>
              </div>
              <span className="text-sm font-medium">6h30, 19h00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span className="text-sm">Domingo</span>
              </div>
              <span className="text-sm font-medium">7h00, 9h00, 11h00, 19h00</span>
            </div>
          </div>
        </Card>

        {/* Prayer Intentions */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">🕯️ Intenções da Missa</h3>
          <div className="space-y-2 text-sm">
            <p>• Pelas famílias do mundo, para que encontrem paz e união</p>
            <p>• Pelos doentes, para que encontrem cura e conforto</p>
            <p>• Pelas vocações religiosas, para que cresçam em santidade</p>
            <p>• Pela paz mundial e pela justiça social</p>
            <p>• Pelos que partiram desta vida, para que descansem em paz</p>
          </div>
        </Card>

        {/* Mass Guide */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">📚 Como participar da Missa</h3>
          <div className="space-y-2 text-sm">
            <p><strong>1. Preparação:</strong> Chegar alguns minutos antes para se recolher</p>
            <p><strong>2. Escuta:</strong> Prestar atenção às leituras e homilia</p>
            <p><strong>3. Participação:</strong> Responder às orações e cantar</p>
            <p><strong>4. Oferenda:</strong> Oferecer suas intenções com o pão e vinho</p>
            <p><strong>5. Comunhão:</strong> Receber o Corpo de Cristo com devoção</p>
            <p><strong>6. Ação de Graças:</strong> Agradecer após a missa</p>
          </div>
        </Card>
      </div>
    </div>
  );
};