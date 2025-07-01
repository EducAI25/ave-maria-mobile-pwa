import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Mystery {
  title: string;
  description: string;
  prayer: string;
}

const MYSTERIES = {
  gozosos: [
    {
      title: "A Anunciação",
      description: "O anjo Gabriel anuncia a Maria que ela será a mãe de Jesus",
      prayer: "Jesus, que concebeste do Espírito Santo"
    },
    {
      title: "A Visitação",
      description: "Maria visita sua prima Isabel",
      prayer: "Jesus, que levaste no ventre de Maria à casa de Isabel"
    },
    {
      title: "O Nascimento de Jesus",
      description: "Jesus nasce em Belém",
      prayer: "Jesus, que nasceste em Belém"
    },
    {
      title: "A Apresentação",
      description: "Jesus é apresentado no templo",
      prayer: "Jesus, que foste apresentado no templo por Maria e José"
    },
    {
      title: "O Encontro no Templo",
      description: "Jesus é encontrado no templo entre os doutores",
      prayer: "Jesus, que foste perdido e achado no templo"
    }
  ],
  dolorosos: [
    {
      title: "A Agonia no Horto",
      description: "Jesus reza no jardim das oliveiras",
      prayer: "Jesus, que suaste sangue"
    },
    {
      title: "A Flagelação",
      description: "Jesus é açoitado na coluna",
      prayer: "Jesus, que foste flagelado"
    },
    {
      title: "A Coroação de Espinhos",
      description: "Jesus é coroado com espinhos",
      prayer: "Jesus, que foste coroado de espinhos"
    },
    {
      title: "O Carrego da Cruz",
      description: "Jesus carrega a cruz até o Calvário",
      prayer: "Jesus, que carregaste a cruz"
    },
    {
      title: "A Crucificação",
      description: "Jesus morre na cruz",
      prayer: "Jesus, que morreste na cruz"
    }
  ],
  gloriosos: [
    {
      title: "A Ressurreição",
      description: "Jesus ressuscita dos mortos",
      prayer: "Jesus, que ressuscitaste dos mortos"
    },
    {
      title: "A Ascensão",
      description: "Jesus sobe aos céus",
      prayer: "Jesus, que subiste aos céus"
    },
    {
      title: "A Vinda do Espírito Santo",
      description: "O Espírito Santo desce sobre os apóstolos",
      prayer: "Jesus, que nos enviaste o Espírito Santo"
    },
    {
      title: "A Assunção de Maria",
      description: "Maria é elevada aos céus",
      prayer: "Jesus, que assumiste Maria aos céus"
    },
    {
      title: "A Coroação de Maria",
      description: "Maria é coroada Rainha dos céus",
      prayer: "Jesus, que coroaste Maria no céu"
    }
  ],
  luminosos: [
    {
      title: "O Batismo de Jesus",
      description: "Jesus é batizado por João Batista",
      prayer: "Jesus, que foste batizado no rio Jordão"
    },
    {
      title: "As Bodas de Caná",
      description: "Jesus transforma água em vinho",
      prayer: "Jesus, que te manifestaste nas bodas de Caná"
    },
    {
      title: "O Anúncio do Reino",
      description: "Jesus anuncia o Reino dos céus",
      prayer: "Jesus, que anunciaste o Reino de Deus"
    },
    {
      title: "A Transfiguração",
      description: "Jesus se transfigura no monte Tabor",
      prayer: "Jesus, que te transfiguraste"
    },
    {
      title: "A Eucaristia",
      description: "Jesus institui a Eucaristia",
      prayer: "Jesus, que instituíste a Eucaristia"
    }
  ]
};

type MysteryType = keyof typeof MYSTERIES;

const DAYS_MYSTERIES: Record<number, MysteryType> = {
  0: 'gloriosos', // Domingo
  1: 'gozosos',   // Segunda
  2: 'dolorosos', // Terça
  3: 'gloriosos', // Quarta
  4: 'luminosos', // Quinta
  5: 'dolorosos', // Sexta
  6: 'gozosos'    // Sábado
};

export const Rosario: React.FC = () => {
  const today = new Date().getDay();
  const todayMystery = DAYS_MYSTERIES[today];
  const [selectedMystery, setSelectedMystery] = useState<MysteryType>(todayMystery);
  const [currentBead, setCurrentBead] = useState(0);

  const mysteryTypes = {
    gozosos: { name: 'Mistérios Gozosos', color: 'bg-yellow-500' },
    dolorosos: { name: 'Mistérios Dolorosos', color: 'bg-red-500' },
    gloriosos: { name: 'Mistérios Gloriosos', color: 'bg-blue-500' },
    luminosos: { name: 'Mistérios Luminosos', color: 'bg-green-500' }
  };

  const currentMysteries = MYSTERIES[selectedMystery];

  return (
    <div className="min-h-screen bg-background">
      <Header title="Santo Rosário" subtitle="Oração contemplativa" />
      
      <div className="p-4 space-y-4">
        {/* Today's Mystery */}
        <Card className="p-4 bg-primary text-white">
          <h3 className="font-semibold mb-2">🙏 Mistério de Hoje</h3>
          <Badge variant="secondary" className="mb-2">
            {mysteryTypes[todayMystery].name}
          </Badge>
          <p className="text-sm opacity-90">
            Hoje rezamos os {mysteryTypes[todayMystery].name.toLowerCase()}
          </p>
        </Card>

        {/* Mystery Selection */}
        <div>
          <h3 className="font-semibold mb-3">Escolha o Mistério</h3>
          <div className="grid grid-cols-2 gap-2">
            {(Object.entries(mysteryTypes) as Array<[keyof typeof MYSTERIES, { name: string; color: string }]>).map(([key, mystery]) => (
              <Button
                key={key}
                variant={selectedMystery === key ? 'default' : 'outline'}
                className="h-auto p-3 text-left flex-col items-start"
                onClick={() => setSelectedMystery(key)}
              >
                <span className="font-medium text-sm">{mystery.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Current Mysteries */}
        <div className="space-y-3">
          <h3 className="font-semibold text-primary">
            {mysteryTypes[selectedMystery].name}
          </h3>
          
          {currentMysteries.map((mystery, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full ${mysteryTypes[selectedMystery].color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{mystery.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {mystery.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {mystery.prayer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Prayer Guide */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">📿 Como rezar o Rosário</h3>
          <div className="space-y-2 text-sm">
            <p><strong>1.</strong> Faça o sinal da cruz</p>
            <p><strong>2.</strong> Reze o Credo</p>
            <p><strong>3.</strong> Reze 1 Pai Nosso</p>
            <p><strong>4.</strong> Reze 3 Ave Marias</p>
            <p><strong>5.</strong> Reze 1 Glória ao Pai</p>
            <p><strong>6.</strong> Anuncie o 1º mistério e reze 1 Pai Nosso</p>
            <p><strong>7.</strong> Reze 10 Ave Marias meditando o mistério</p>
            <p><strong>8.</strong> Reze 1 Glória ao Pai</p>
            <p><strong>9.</strong> Repita os passos 6-8 para os outros mistérios</p>
            <p><strong>10.</strong> Termine com a Salve Rainha</p>
          </div>
        </Card>
      </div>
    </div>
  );
};