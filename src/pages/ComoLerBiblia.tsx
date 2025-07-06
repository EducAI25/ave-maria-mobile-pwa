import React from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { BookOpen, Lightbulb, MapPin, Clock, Heart, Star } from 'lucide-react';

export const ComoLerBiblia: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Como Ler a Bíblia" subtitle="Guia para Católicos" />
      
      <div className="p-4 space-y-6">
        {/* Introdução */}
        <Card className="p-6 bg-primary text-white">
          <div className="text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-3">Bem-vindo à Palavra de Deus</h2>
            <p className="text-white/90 leading-relaxed">
              A Bíblia é o livro sagrado dos cristãos, contendo a revelação de Deus para a humanidade. 
              Para os católicos, ela é fonte de fé, esperança e orientação espiritual. 
              Este guia ajudará você a começar sua jornada de leitura bíblica.
            </p>
          </div>
        </Card>

        {/* Por onde começar */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Por onde começar?</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-secondary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">1. Comece pelos Evangelhos</h4>
              <p className="text-sm text-muted-foreground">
                Inicie com <strong>Mateus</strong>, depois <strong>Marcos</strong>, <strong>Lucas</strong> e <strong>João</strong>. 
                Eles contam a vida, ensinamentos, morte e ressurreição de Jesus Cristo.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">2. Continue com Atos dos Apóstolos</h4>
              <p className="text-sm text-muted-foreground">
                Descubra como a Igreja primitiva se formou e se espalhou pelo mundo antigo.
              </p>
            </div>
            
            <div className="bg-secondary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">3. Explore os Salmos</h4>
              <p className="text-sm text-muted-foreground">
                Os Salmos são orações e cânticos que expressam toda gama de emoções humanas diante de Deus.
              </p>
            </div>
          </div>
        </Card>

        {/* Plano de Leitura */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Plano de Leitura Sugerido</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-medium">Semanas 1-4: Evangelho de Mateus</h4>
                <p className="text-xs text-muted-foreground">Conheça Jesus através do primeiro Evangelho</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-medium">Semanas 5-8: Evangelho de João</h4>
                <p className="text-xs text-muted-foreground">Aprofunde-se na divindade de Cristo</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-medium">Semanas 9-12: Atos dos Apóstolos</h4>
                <p className="text-xs text-muted-foreground">Veja o nascimento da Igreja</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-medium">Semanas 13-16: Salmos (seleções)</h4>
                <p className="text-xs text-muted-foreground">Ore com as palavras dos salmistas</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Dicas Práticas */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Dicas Práticas</h3>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium text-primary">Estabeleça um horário</h4>
                <p className="text-sm text-muted-foreground">
                  Dedique 15-20 minutos diários, preferencialmente no mesmo horário.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-secondary mt-1" />
              <div>
                <h4 className="font-medium text-primary">Ore antes de ler</h4>
                <p className="text-sm text-muted-foreground">
                  Peça ao Espírito Santo para iluminar sua mente e coração.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium text-primary">Leia devagar</h4>
                <p className="text-sm text-muted-foreground">
                  Prefira qualidade à quantidade. Reflita sobre o que leu.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contexto Histórico */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Contexto Importante</h3>
          </div>
          
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-primary">Antigo Testamento:</strong> Preparação para a vinda de Cristo, 
              contendo a história do povo de Israel, profecias e sabedoria.
            </p>
            
            <p>
              <strong className="text-primary">Novo Testamento:</strong> Vida de Jesus, formação da Igreja 
              e ensinamentos apostólicos para os primeiros cristãos.
            </p>
            
            <p>
              <strong className="text-primary">Para Católicos:</strong> A Bíblia deve ser lida em união com 
              a Tradição da Igreja e o Magistério, que nos ajudam a interpretá-la corretamente.
            </p>
          </div>
        </Card>

        {/* Motivação Final */}
        <Card className="p-6 bg-secondary/10 border-secondary/30">
          <div className="text-center">
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">Lembre-se</h3>
            <p className="text-sm text-muted-foreground">
              A leitura da Bíblia é uma jornada, não uma corrida. Seja paciente consigo mesmo 
              e confie que Deus falará ao seu coração através da Sua Palavra.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};