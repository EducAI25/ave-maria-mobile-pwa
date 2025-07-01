import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BIBLE_CONTENT } from '@/data/bibleContent';

// Create a map for easier access to books by ID
const BIBLE_CONTENT_MAP = BIBLE_CONTENT.reduce((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {} as Record<string, any>);

export const BookChapters: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  
  if (!bookId || !BIBLE_CONTENT_MAP[bookId]) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Livro não encontrado" subtitle="Ave Maria" />
        <div className="p-4 text-center">
          <p className="text-muted-foreground mb-4">Este livro ainda não está disponível.</p>
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

  const book = BIBLE_CONTENT_MAP[bookId];

  return (
    <div className="min-h-screen bg-background">
      <Header title={book.name} subtitle="Capítulos" />
      
      <div className="p-4 space-y-4">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Bíblia
          </Button>
        </Link>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {book.chapters.map((chapter) => (
            <Link key={chapter.number} to={`/livro/${bookId}/capitulo/${chapter.number}`}>
              <Card className="p-4 hover:shadow-md divine-transition cursor-pointer text-center">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold text-sm">Cap. {chapter.number}</h3>
                <p className="text-xs text-muted-foreground">
                  {chapter.verses.length} versículos
                </p>
              </Card>
            </Link>
          ))}
        </div>

        {book.chapters.length === 0 && (
          <div className="text-center py-8">
            <BookOpen size={48} className="mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">
              Os capítulos deste livro serão adicionados em breve.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};