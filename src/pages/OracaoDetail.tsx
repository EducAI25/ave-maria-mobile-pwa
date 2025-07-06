import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ORACOES } from './Oracoes';

export const OracaoDetail: React.FC = () => {
  const { oracaoId } = useParams<{ oracaoId: string }>();
  
  if (!oracaoId) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Oração não encontrada" subtitle="Ave Maria" />
        <div className="p-4 text-center">
          <p className="text-muted-foreground mb-4">Esta oração não foi encontrada.</p>
          <Link to="/oracoes">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar às Orações
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const oracao = ORACOES.find(o => o.id === oracaoId);

  if (!oracao) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Oração não encontrada" subtitle="Ave Maria" />
        <div className="p-4 text-center">
          <p className="text-muted-foreground mb-4">Esta oração não foi encontrada.</p>
          <Link to="/oracoes">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar às Orações
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title={oracao.nome} subtitle={oracao.categoria} />
      
      <div className="p-4 space-y-4">
        <Link to="/oracoes">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar às Orações
          </Button>
        </Link>

        {/* Contexto da Oração */}
        {oracao.contexto && (
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Sobre esta oração</h3>
                <p className="text-sm text-muted-foreground">{oracao.contexto}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Texto da Oração */}
        <Card className="p-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-primary">{oracao.nome}</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-center">
            <div className="verse-text text-foreground whitespace-pre-line leading-relaxed">
              {oracao.texto}
            </div>
          </div>
        </Card>

        {/* Ações */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: oracao.nome,
                  text: oracao.texto,
                });
              }
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar
          </Button>
        </div>
      </div>
    </div>
  );
};