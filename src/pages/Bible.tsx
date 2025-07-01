import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Clock } from 'lucide-react';

interface Book {
  id: string;
  name: string;
  chapters: number;
  testament: 'old' | 'new';
}

const BIBLE_BOOKS: Book[] = [
  // Antigo Testamento
  { id: 'genesis', name: 'Gênesis', chapters: 50, testament: 'old' },
  { id: 'exodus', name: 'Êxodo', chapters: 40, testament: 'old' },
  { id: 'leviticus', name: 'Levítico', chapters: 27, testament: 'old' },
  { id: 'numbers', name: 'Números', chapters: 36, testament: 'old' },
  { id: 'deuteronomy', name: 'Deuteronômio', chapters: 34, testament: 'old' },
  { id: 'joshua', name: 'Josué', chapters: 24, testament: 'old' },
  { id: 'judges', name: 'Juízes', chapters: 21, testament: 'old' },
  { id: 'ruth', name: 'Rute', chapters: 4, testament: 'old' },
  { id: '1samuel', name: '1 Samuel', chapters: 31, testament: 'old' },
  { id: '2samuel', name: '2 Samuel', chapters: 24, testament: 'old' },
  { id: '1kings', name: '1 Reis', chapters: 22, testament: 'old' },
  { id: '2kings', name: '2 Reis', chapters: 25, testament: 'old' },
  { id: '1chronicles', name: '1 Crônicas', chapters: 29, testament: 'old' },
  { id: '2chronicles', name: '2 Crônicas', chapters: 36, testament: 'old' },
  { id: 'ezra', name: 'Esdras', chapters: 10, testament: 'old' },
  { id: 'nehemiah', name: 'Neemias', chapters: 13, testament: 'old' },
  { id: 'esther', name: 'Ester', chapters: 10, testament: 'old' },
  { id: 'job', name: 'Jó', chapters: 42, testament: 'old' },
  { id: 'psalms', name: 'Salmos', chapters: 150, testament: 'old' },
  { id: 'proverbs', name: 'Provérbios', chapters: 31, testament: 'old' },
  { id: 'ecclesiastes', name: 'Eclesiastes', chapters: 12, testament: 'old' },
  { id: 'song', name: 'Cânticos', chapters: 8, testament: 'old' },
  { id: 'isaiah', name: 'Isaías', chapters: 66, testament: 'old' },
  { id: 'jeremiah', name: 'Jeremias', chapters: 52, testament: 'old' },
  { id: 'lamentations', name: 'Lamentações', chapters: 5, testament: 'old' },
  { id: 'ezekiel', name: 'Ezequiel', chapters: 48, testament: 'old' },
  { id: 'daniel', name: 'Daniel', chapters: 12, testament: 'old' },
  { id: 'hosea', name: 'Oseias', chapters: 14, testament: 'old' },
  { id: 'joel', name: 'Joel', chapters: 3, testament: 'old' },
  { id: 'amos', name: 'Amós', chapters: 9, testament: 'old' },
  { id: 'obadiah', name: 'Obadias', chapters: 1, testament: 'old' },
  { id: 'jonah', name: 'Jonas', chapters: 4, testament: 'old' },
  { id: 'micah', name: 'Miqueias', chapters: 7, testament: 'old' },
  { id: 'nahum', name: 'Naum', chapters: 3, testament: 'old' },
  { id: 'habakkuk', name: 'Habacuque', chapters: 3, testament: 'old' },
  { id: 'zephaniah', name: 'Sofonias', chapters: 3, testament: 'old' },
  { id: 'haggai', name: 'Ageu', chapters: 2, testament: 'old' },
  { id: 'zechariah', name: 'Zacarias', chapters: 14, testament: 'old' },
  { id: 'malachi', name: 'Malaquias', chapters: 4, testament: 'old' },

  // Novo Testamento
  { id: 'matthew', name: 'Mateus', chapters: 28, testament: 'new' },
  { id: 'mark', name: 'Marcos', chapters: 16, testament: 'new' },
  { id: 'luke', name: 'Lucas', chapters: 24, testament: 'new' },
  { id: 'john', name: 'João', chapters: 21, testament: 'new' },
  { id: 'acts', name: 'Atos', chapters: 28, testament: 'new' },
  { id: 'romans', name: 'Romanos', chapters: 16, testament: 'new' },
  { id: '1corinthians', name: '1 Coríntios', chapters: 16, testament: 'new' },
  { id: '2corinthians', name: '2 Coríntios', chapters: 13, testament: 'new' },
  { id: 'galatians', name: 'Gálatas', chapters: 6, testament: 'new' },
  { id: 'ephesians', name: 'Efésios', chapters: 6, testament: 'new' },
  { id: 'philippians', name: 'Filipenses', chapters: 4, testament: 'new' },
  { id: 'colossians', name: 'Colossenses', chapters: 4, testament: 'new' },
  { id: '1thessalonians', name: '1 Tessalonicenses', chapters: 5, testament: 'new' },
  { id: '2thessalonians', name: '2 Tessalonicenses', chapters: 3, testament: 'new' },
  { id: '1timothy', name: '1 Timóteo', chapters: 6, testament: 'new' },
  { id: '2timothy', name: '2 Timóteo', chapters: 4, testament: 'new' },
  { id: 'titus', name: 'Tito', chapters: 3, testament: 'new' },
  { id: 'philemon', name: 'Filemom', chapters: 1, testament: 'new' },
  { id: 'hebrews', name: 'Hebreus', chapters: 13, testament: 'new' },
  { id: 'james', name: 'Tiago', chapters: 5, testament: 'new' },
  { id: '1peter', name: '1 Pedro', chapters: 5, testament: 'new' },
  { id: '2peter', name: '2 Pedro', chapters: 3, testament: 'new' },
  { id: '1john', name: '1 João', chapters: 5, testament: 'new' },
  { id: '2john', name: '2 João', chapters: 1, testament: 'new' },
  { id: '3john', name: '3 João', chapters: 1, testament: 'new' },
  { id: 'jude', name: 'Judas', chapters: 1, testament: 'new' },
  { id: 'revelation', name: 'Apocalipse', chapters: 22, testament: 'new' }
];

export const Bible: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState<'all' | 'old' | 'new'>('all');

  const filteredBooks = BIBLE_BOOKS.filter(book => {
    const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTestament = activeTestament === 'all' || book.testament === activeTestament;
    return matchesSearch && matchesTestament;
  });

  const oldTestamentBooks = filteredBooks.filter(book => book.testament === 'old');
  const newTestamentBooks = filteredBooks.filter(book => book.testament === 'new');

  return (
    <div className="min-h-screen bg-background">
      <Header title="Bíblia Sagrada" subtitle="Ave Maria" />
      
      <div className="p-4 space-y-4">
        {/* Search and Filter */}
        <div className="space-y-3">
          <Input
            placeholder="Buscar livro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          
          <div className="flex gap-2">
            <Button
              variant={activeTestament === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTestament('all')}
              className="flex-1"
            >
              Todos
            </Button>
            <Button
              variant={activeTestament === 'old' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTestament('old')}
              className="flex-1"
            >
              Antigo Testamento
            </Button>
            <Button
              variant={activeTestament === 'new' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTestament('new')}
              className="flex-1"
            >
              Novo Testamento
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Link to="/leitura-hoje">
            <Card className="p-3 bible-gradient text-white hover:opacity-90 divine-transition">
              <div className="text-center">
                <Calendar size={20} className="mx-auto mb-2" />
                <h3 className="font-medium text-sm">Leitura de Hoje</h3>
              </div>
            </Card>
          </Link>
          
          <Link to="/terco">
            <Card className="p-3 gold-gradient text-white hover:opacity-90 divine-transition">
              <div className="text-center">
                <Clock size={20} className="mx-auto mb-2" />
                <h3 className="font-medium text-sm">Terço</h3>
              </div>
            </Card>
          </Link>
          
          <Link to="/missa">
            <Card className="p-3 bg-divine text-white hover:opacity-90 divine-transition">
              <div className="text-center">
                <BookOpen size={20} className="mx-auto mb-2" />
                <h3 className="font-medium text-sm">Missa</h3>
              </div>
            </Card>
          </Link>
        </div>

        {/* Leitura do Dia */}
        <Card className="p-4 bible-gradient text-white">
          <h3 className="font-semibold mb-2">📖 Versículo do Dia</h3>
          <p className="text-sm opacity-90 mb-3">
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
          </p>
          <p className="text-xs font-medium">João 3:16</p>
          <Link to="/leitura-hoje">
            <Button variant="secondary" size="sm" className="mt-3 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Ver leitura completa
            </Button>
          </Link>
        </Card>

        {/* Old Testament */}
        {(activeTestament === 'all' || activeTestament === 'old') && oldTestamentBooks.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Antigo Testamento</h2>
            <div className="grid grid-cols-2 gap-3">
              {oldTestamentBooks.map((book) => (
                <Card key={book.id} className="p-3 hover:shadow-md divine-transition cursor-pointer">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{book.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {book.chapters} capítulo{book.chapters !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* New Testament */}
        {(activeTestament === 'all' || activeTestament === 'new') && newTestamentBooks.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">Novo Testamento</h2>
            <div className="grid grid-cols-2 gap-3">
              {newTestamentBooks.map((book) => (
                <Card key={book.id} className="p-3 hover:shadow-md divine-transition cursor-pointer">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{book.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {book.chapters} capítulo{book.chapters !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredBooks.length === 0 && (
          <div className="text-center py-8">
            <BookOpen size={48} className="mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">Nenhum livro encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
};