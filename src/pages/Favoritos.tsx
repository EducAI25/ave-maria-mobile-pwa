import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Trash2, BookOpen } from 'lucide-react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '@/hooks/useFavorites';

export const Favoritos: React.FC = () => {
  const { favorites, removeFavorite, clearAllFavorites } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <Header title="Favoritos" subtitle="Seus versículos marcados" />
      
      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>

        {/* Header */}
        <Card className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart size={24} className="text-white" />
              <div>
                <h3 className="font-semibold text-white">⭐ Favoritos</h3>
                <p className="text-sm text-white/90">
                  {favorites.length} versículo{favorites.length !== 1 ? 's' : ''} favoritado{favorites.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            {favorites.length > 0 && (
              <Button 
                variant="secondary" 
                size="sm" 
                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                onClick={clearAllFavorites}
              >
                Limpar todos
              </Button>
            )}
          </div>
        </Card>

        {/* Favorites List */}
        {favorites.length === 0 ? (
          <Card className="p-8 text-center">
            <Heart size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum favorito ainda</h3>
            <p className="text-muted-foreground mb-4">
              Marque versículos como favoritos enquanto lê a Bíblia para encontrá-los aqui facilmente.
            </p>
            <Link to="/">
              <Button>
                <BookOpen className="w-4 h-4 mr-2" />
                Explorar a Bíblia
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-3">
            {favorites.map((favorite) => (
              <Card key={favorite.id} className="p-4 hover:shadow-md divine-transition">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {favorite.verseNumber}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {favorite.bookName} {favorite.chapterNumber}:{favorite.verseNumber}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFavorite(favorite.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="verse-text leading-relaxed mb-2">{favorite.text}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Adicionado em {new Date(favorite.dateAdded).toLocaleDateString('pt-BR')}
                      </span>
                      <Link to={`/livro/${favorite.bookId}/capitulo/${favorite.chapterNumber}`}>
                        <Button variant="outline" size="sm">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Ver capítulo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 