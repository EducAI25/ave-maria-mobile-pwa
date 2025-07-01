import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Heart } from 'lucide-react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BIBLE_CONTENT } from '@/data/bibleContent';

export const ChapterVerses: React.FC = () => {
  const { bookId, chapterNumber } = useParams<{ bookId: string; chapterNumber: string }>();
  
  if (!bookId || !chapterNumber || !BIBLE_CONTENT[bookId]) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Capítulo não encontrado" subtitle="Ave Maria" />
        <div className="p-4 text-center">
          <p className="text-muted-foreground mb-4">Este capítulo ainda não está disponível.</p>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à Bíblia
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const book = BIBLE_CONTENT[bookId];
  const chapter = book.chapters.find(c => c.number === parseInt(chapterNumber));

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Capítulo não encontrado" subtitle="Ave Maria" />
        <div className="p-4 text-center">
          <p className="text-muted-foreground mb-4">Este capítulo ainda não está disponível.</p>
          <Link to={`/livro/${bookId}`}>
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos capítulos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title={`${book.name} ${chapter.number}`} subtitle="Sagrada Escritura" />
      
      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Bíblia
            </Button>
          </Link>
          <Link to={`/livro/${bookId}`}>
            <Button variant="outline" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Capítulos
            </Button>
          </Link>
        </div>

        {/* Header do Capítulo */}
        <Card className="p-4 bg-primary text-white">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">{book.name}</h2>
            <p className="text-sm opacity-90">Capítulo {chapter.number}</p>
          </div>
        </Card>

        {/* Versículos */}
        <div className="space-y-3">
          {chapter.verses.map((verse) => (
            <Card key={verse.number} className="p-4 hover:shadow-md divine-transition">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {verse.number}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="verse-text leading-relaxed">{verse.text}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Heart className="w-4 h-4 mr-1" />
                      Favoritar
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      {book.name} {chapter.number}:{verse.number}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navegação entre capítulos */}
        <div className="flex justify-between pt-4">
          {chapter.number > 1 && book.chapters.find(c => c.number === chapter.number - 1) && (
            <Link to={`/livro/${bookId}/capitulo/${chapter.number - 1}`}>
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Capítulo {chapter.number - 1}
              </Button>
            </Link>
          )}
          
          {book.chapters.find(c => c.number === chapter.number + 1) && (
            <Link to={`/livro/${bookId}/capitulo/${chapter.number + 1}`} className="ml-auto">
              <Button variant="outline">
                Capítulo {chapter.number + 1}
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};