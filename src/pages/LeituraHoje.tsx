import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, MessageSquare } from 'lucide-react';

interface DailyReading {
  date: string;
  liturgicalSeason: string;
  color: string;
  firstReading: {
    title: string;
    reference: string;
    text: string;
  };
  psalm: {
    title: string;
    reference: string;
    text: string;
    response: string;
  };
  secondReading?: {
    title: string;
    reference: string;
    text: string;
  };
  gospel: {
    title: string;
    reference: string;
    text: string;
  };
  reflection: string;
  saint: string;
}

const TODAY_READING: DailyReading = {
  date: new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  liturgicalSeason: 'Tempo Comum',
  color: 'Verde',
  firstReading: {
    title: 'Primeira Leitura',
    reference: '1 João 5,1-6',
    text: 'Caríssimos: Todo aquele que crê que Jesus é o Cristo nasceu de Deus; e todo aquele que ama quem gerou, ama também quem foi gerado por ele. Nisto conhecemos que amamos os filhos de Deus: quando amamos a Deus e observamos os seus mandamentos. Porque o amor de Deus consiste nisto: em observarmos os seus mandamentos. E os seus mandamentos não são pesados, porque todo aquele que nasceu de Deus vence o mundo. E esta é a vitória que vence o mundo: a nossa fé. Quem é que vence o mundo, senão aquele que crê que Jesus é o Filho de Deus? Este é aquele que veio pela água e pelo sangue: Jesus Cristo. Não só pela água, mas pela água e pelo sangue. E o Espírito é que dá testemunho, porque o Espírito é a verdade.'
  },
  psalm: {
    title: 'Salmo Responsorial',
    reference: 'Salmo 23(24)',
    response: 'Senhor, quem habitará em vossa casa?',
    text: 'Senhor, quem habitará em vossa casa e no vosso monte santo descansará? Quem procede corretamente e pratica a justiça, quem fala a verdade que sente no seu coração; quem não fala mal do seu próximo, nem prejudica o companheiro, nem aceita calúnias contra o vizinho; quem despreza aquele que Deus reprova, mas honra os que temem ao Senhor; quem não se desdiz ao fazer juramento, mesmo em prejuízo seu; quem não empresta o seu dinheiro com usura, nem aceita presentes contra o inocente. Quem procede assim ficará sempre firme!'
  },
  gospel: {
    title: 'Evangelho',
    reference: 'João 15,1-8',
    text: 'Naquele tempo, disse Jesus aos seus discípulos: "Eu sou a videira verdadeira, e meu Pai é o agricultor. Todo ramo que não dá fruto em mim, ele o corta; e todo ramo que dá fruto, ele o limpa, para que dê mais fruto ainda. Vós já estais limpos pela palavra que vos anunciei. Permanecei em mim, como eu permaneço em vós. Como o ramo não pode dar fruto por si mesmo, se não permanecer na videira, assim também vós não podeis dar fruto, se não permanecerdes em mim. Eu sou a videira, vós sois os ramos. Quem permanece em mim e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer. Quem não permanece em mim é lançado fora, como o ramo, e seca. Tais ramos são recolhidos, lançados ao fogo e queimados. Se permanecerdes em mim, e as minhas palavras permanecerem em vós, pedi o que quiserdes e vos será feito. Nisto meu Pai é glorificado: que deis muito fruto e vos torneis meus discípulos."'
  },
  reflection: 'Jesus se apresenta como a videira verdadeira e nós como os ramos. Esta imagem nos ensina sobre a importância da união com Cristo. Assim como o ramo precisa permanecer ligado à videira para dar frutos, nós precisamos permanecer unidos a Jesus para que nossa vida produza frutos de amor, paz, justiça e bondade. A permanência em Cristo se dá através da oração, dos sacramentos, da vivência da Palavra de Deus e do amor ao próximo.',
  saint: 'São José Operário'
};

const READING_SECTIONS = [
  { id: 'firstReading', name: '1ª Leitura', icon: '📖' },
  { id: 'psalm', name: 'Salmo', icon: '🎵' },
  { id: 'gospel', name: 'Evangelho', icon: '✝️' },
  { id: 'reflection', name: 'Reflexão', icon: '💭' }
];

export const LeituraHoje: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('firstReading');

  const renderContent = () => {
    switch (selectedSection) {
      case 'firstReading':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-primary">{TODAY_READING.firstReading.title}</h3>
                <p className="text-sm text-muted-foreground">{TODAY_READING.firstReading.reference}</p>
              </div>
            </div>
            <div className="verse-text">
              {TODAY_READING.firstReading.text}
            </div>
          </div>
        );
      
      case 'psalm':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-primary">{TODAY_READING.psalm.title}</h3>
                <p className="text-sm text-muted-foreground">{TODAY_READING.psalm.reference}</p>
              </div>
            </div>
            <Card className="p-3 bg-primary/10">
              <p className="font-medium text-primary text-center">
                {TODAY_READING.psalm.response}
              </p>
            </Card>
            <div className="verse-text">
              {TODAY_READING.psalm.text}
            </div>
          </div>
        );
      
      case 'gospel':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-primary">{TODAY_READING.gospel.title}</h3>
                <p className="text-sm text-muted-foreground">{TODAY_READING.gospel.reference}</p>
              </div>
            </div>
            <div className="verse-text">
              {TODAY_READING.gospel.text}
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
              {TODAY_READING.reflection}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Leitura de Hoje" subtitle="Liturgia diária" />
      
      <div className="p-4 space-y-4">
        {/* Today's Info */}
        <Card className="p-4 bg-primary text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">📅 Liturgia de Hoje</h3>
            <Badge variant="secondary" className="text-primary">
              {TODAY_READING.color}
            </Badge>
          </div>
          <p className="text-sm opacity-90 mb-1">
            {TODAY_READING.date}
          </p>
          <p className="text-xs opacity-75">
            {TODAY_READING.liturgicalSeason}
          </p>
        </Card>

        {/* Saint of the Day */}
        <Card className="p-4 bg-secondary text-white">
          <div className="text-center">
            <h3 className="font-semibold mb-1">👑 Santo do Dia</h3>
            <p className="text-lg font-medium">{TODAY_READING.saint}</p>
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
            "Senhor Jesus, videira verdadeira, ajudai-nos a permanecer sempre unidos a Vós. 
            Que possamos dar frutos abundantes de amor, paz e justiça. 
            Fazei que nossa vida seja sempre um testemunho da vossa presença entre nós. 
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