import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Clock, Star, MessageSquare } from 'lucide-react';
import { BIBLE_CONTENT } from '@/data/bibleContent';
import { useFavorites } from '@/hooks/useFavorites';

// Create a map for easier access to books by ID
const BIBLE_CONTENT_MAP = BIBLE_CONTENT.reduce((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {} as Record<string, any>);

// Debug: Check if content is loaded
console.log('BIBLE_CONTENT loaded:', BIBLE_CONTENT.length > 0);
console.log('Sample book:', BIBLE_CONTENT[0]?.name);
console.log('Sample chapters:', BIBLE_CONTENT[0]?.chapters?.length);



interface Book {
  id: string;
  name: string;
  chapters: number;
  testament: 'old' | 'new';
}

const BIBLE_BOOKS: Book[] = [
  // Antigo Testamento
  { id: 'gnesis', name: 'Gênesis', chapters: 50, testament: 'old' },
  { id: 'xodo', name: 'Êxodo', chapters: 40, testament: 'old' },
  { id: 'levtico', name: 'Levítico', chapters: 27, testament: 'old' },
  { id: 'nmeros', name: 'Números', chapters: 36, testament: 'old' },
  { id: 'deuteronmio', name: 'Deuteronômio', chapters: 34, testament: 'old' },
  { id: 'josu', name: 'Josué', chapters: 24, testament: 'old' },
  { id: 'juzes', name: 'Juízes', chapters: 21, testament: 'old' },
  { id: 'rute', name: 'Rute', chapters: 4, testament: 'old' },
  { id: 'isamuel', name: '1 Samuel', chapters: 31, testament: 'old' },
  { id: 'iisamuel', name: '2 Samuel', chapters: 24, testament: 'old' },
  { id: 'ireis', name: '1 Reis', chapters: 22, testament: 'old' },
  { id: 'iireis', name: '2 Reis', chapters: 25, testament: 'old' },
  { id: 'icrnicas', name: '1 Crônicas', chapters: 29, testament: 'old' },
  { id: 'iicrnicas', name: '2 Crônicas', chapters: 36, testament: 'old' },
  { id: 'esdras', name: 'Esdras', chapters: 10, testament: 'old' },
  { id: 'neemias', name: 'Neemias', chapters: 13, testament: 'old' },
  { id: 'tobias', name: 'Tobias', chapters: 14, testament: 'old' },
  { id: 'judite', name: 'Judite', chapters: 16, testament: 'old' },
  { id: 'ester', name: 'Ester', chapters: 10, testament: 'old' },
  { id: 'j', name: 'Jó', chapters: 42, testament: 'old' },
  { id: 'salmos', name: 'Salmos', chapters: 150, testament: 'old' },
  { id: 'imacabeus', name: '1 Macabeus', chapters: 16, testament: 'old' },
  { id: 'iimacabeus', name: '2 Macabeus', chapters: 15, testament: 'old' },
  { id: 'provrbios', name: 'Provérbios', chapters: 31, testament: 'old' },
  { id: 'eclesiastes', name: 'Eclesiastes', chapters: 12, testament: 'old' },
  { id: 'cnticodoscnticos', name: 'Cânticos', chapters: 8, testament: 'old' },
  { id: 'sabedoria', name: 'Sabedoria', chapters: 19, testament: 'old' },
  { id: 'eclesistico', name: 'Eclesiástico', chapters: 51, testament: 'old' },
  { id: 'isaas', name: 'Isaías', chapters: 66, testament: 'old' },
  { id: 'jeremias', name: 'Jeremias', chapters: 52, testament: 'old' },
  { id: 'lamentaes', name: 'Lamentações', chapters: 5, testament: 'old' },
  { id: 'baruc', name: 'Baruc', chapters: 6, testament: 'old' },
  { id: 'ezequiel', name: 'Ezequiel', chapters: 48, testament: 'old' },
  { id: 'daniel', name: 'Daniel', chapters: 12, testament: 'old' },
  { id: 'osias', name: 'Oseias', chapters: 14, testament: 'old' },
  { id: 'joel', name: 'Joel', chapters: 3, testament: 'old' },
  { id: 'ams', name: 'Amós', chapters: 9, testament: 'old' },
  { id: 'abdias', name: 'Obadias', chapters: 1, testament: 'old' },
  { id: 'jonas', name: 'Jonas', chapters: 4, testament: 'old' },
  { id: 'miquias', name: 'Miqueias', chapters: 7, testament: 'old' },
  { id: 'naum', name: 'Naum', chapters: 3, testament: 'old' },
  { id: 'habacuc', name: 'Habacuque', chapters: 3, testament: 'old' },
  { id: 'sofonias', name: 'Sofonias', chapters: 3, testament: 'old' },
  { id: 'ageu', name: 'Ageu', chapters: 2, testament: 'old' },
  { id: 'zacarias', name: 'Zacarias', chapters: 14, testament: 'old' },
  { id: 'malaquias', name: 'Malaquias', chapters: 4, testament: 'old' },

  // Novo Testamento
  { id: 'somateus', name: 'Mateus', chapters: 28, testament: 'new' },
  { id: 'somarcos', name: 'Marcos', chapters: 16, testament: 'new' },
  { id: 'solucas', name: 'Lucas', chapters: 24, testament: 'new' },
  { id: 'sojoo', name: 'João', chapters: 21, testament: 'new' },
  { id: 'atosdosapstolos', name: 'Atos', chapters: 28, testament: 'new' },
  { id: 'romanos', name: 'Romanos', chapters: 16, testament: 'new' },
  { id: 'icorntios', name: '1 Coríntios', chapters: 16, testament: 'new' },
  { id: 'iicorntios', name: '2 Coríntios', chapters: 13, testament: 'new' },
  { id: 'glatas', name: 'Gálatas', chapters: 6, testament: 'new' },
  { id: 'efsios', name: 'Efésios', chapters: 6, testament: 'new' },
  { id: 'filipenses', name: 'Filipenses', chapters: 4, testament: 'new' },
  { id: 'colossenses', name: 'Colossenses', chapters: 4, testament: 'new' },
  { id: 'itessalonicenses', name: '1 Tessalonicenses', chapters: 5, testament: 'new' },
  { id: 'iitessalonicenses', name: '2 Tessalonicenses', chapters: 3, testament: 'new' },
  { id: 'itimteo', name: '1 Timóteo', chapters: 6, testament: 'new' },
  { id: 'iitimteo', name: '2 Timóteo', chapters: 4, testament: 'new' },
  { id: 'tito', name: 'Tito', chapters: 3, testament: 'new' },
  { id: 'filmon', name: 'Filemom', chapters: 1, testament: 'new' },
  { id: 'hebreus', name: 'Hebreus', chapters: 13, testament: 'new' },
  { id: 'sotiago', name: 'Tiago', chapters: 5, testament: 'new' },
  { id: 'isopedro', name: '1 Pedro', chapters: 5, testament: 'new' },
  { id: 'iisopedro', name: '2 Pedro', chapters: 3, testament: 'new' },
  { id: 'isojoo', name: '1 João', chapters: 5, testament: 'new' },
  { id: 'iisojoo', name: '2 João', chapters: 1, testament: 'new' },
  { id: 'iiisojoo', name: '3 João', chapters: 1, testament: 'new' },
  { id: 'sojudas', name: 'Judas', chapters: 1, testament: 'new' },
  { id: 'apocalipse', name: 'Apocalipse', chapters: 22, testament: 'new' }
];

export const Bible: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState<'all' | 'old' | 'new'>('all');
  const { favorites } = useFavorites();

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
              A. Testamento
            </Button>
            <Button
              variant={activeTestament === 'new' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTestament('new')}
              className="flex-1"
            >
              N. Testamento
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Link to="/terco">
            <Card className="p-3 bg-secondary text-white hover:opacity-90 divine-transition">
              <div className="text-center">
                <Clock size={20} className="mx-auto mb-2" />
                <h3 className="font-medium text-sm">Terço</h3>
              </div>
            </Card>
          </Link>
          
          <Link to="/oracoes">
            <Card className="p-3 bg-secondary text-white hover:opacity-90 divine-transition">
              <div className="text-center">
                <BookOpen size={20} className="mx-auto mb-2" />
                <h3 className="font-medium text-sm">Orações</h3>
              </div>
            </Card>
          </Link>
          
          <Link to="/anotacoes">
            <Card className="p-3 bg-secondary text-white hover:opacity-90 divine-transition">
              <div className="text-center">
                <MessageSquare size={20} className="mx-auto mb-2" />
                <h3 className="font-medium text-sm">Notas</h3>
              </div>
            </Card>
          </Link>
        </div>

        {/* Favoritos */}
        <Link to="/favoritos">
          <Card className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:opacity-90 divine-transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star size={24} className="text-white" />
                <div>
                  <h3 className="font-semibold text-white">⭐ Favoritos</h3>
                  <p className="text-sm text-white/90">
                    {favorites.length} versículo{favorites.length !== 1 ? 's' : ''} favoritado{favorites.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Ver todos
              </Button>
            </div>
          </Card>
        </Link>

        {/* Old Testament */}
        {(activeTestament === 'all' || activeTestament === 'old') && oldTestamentBooks.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">A. Testamento</h2>
            <div className="grid grid-cols-2 gap-3">
              {oldTestamentBooks.map((book) => (
                <Link key={book.id} to={BIBLE_CONTENT_MAP[book.id] ? `/livro/${book.id}` : '#'}>
                  <Card className={`p-3 hover:shadow-md divine-transition cursor-pointer ${!BIBLE_CONTENT_MAP[book.id] ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-primary" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{book.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {BIBLE_CONTENT_MAP[book.id] 
                            ? `${BIBLE_CONTENT_MAP[book.id].chapters.length} capítulo${BIBLE_CONTENT_MAP[book.id].chapters.length !== 1 ? 's' : ''}`
                            : 'Em breve'
                          }
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* New Testament */}
        {(activeTestament === 'all' || activeTestament === 'new') && newTestamentBooks.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-primary mb-3">N. Testamento</h2>
            <div className="grid grid-cols-2 gap-3">
              {newTestamentBooks.map((book) => (
                <Link key={book.id} to={BIBLE_CONTENT_MAP[book.id] ? `/livro/${book.id}` : '#'}>
                  <Card className={`p-3 hover:shadow-md divine-transition cursor-pointer ${!BIBLE_CONTENT_MAP[book.id] ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-primary" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{book.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {BIBLE_CONTENT_MAP[book.id] 
                            ? `${BIBLE_CONTENT_MAP[book.id].chapters.length} capítulo${BIBLE_CONTENT_MAP[book.id].chapters.length !== 1 ? 's' : ''}`
                            : 'Em breve'
                          }
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
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