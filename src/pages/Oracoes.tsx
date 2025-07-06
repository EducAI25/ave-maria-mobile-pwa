import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, Search, BookOpen } from 'lucide-react';

interface Oracao {
  id: string;
  nome: string;
  categoria: string;
  texto: string;
  contexto?: string;
}

const ORACOES: Oracao[] = [
  {
    id: 'ave-maria',
    nome: 'Ave Maria',
    categoria: 'Marianas',
    texto: `Ave Maria, cheia de graça,
o Senhor é convosco,
bendita sois vós entre as mulheres
e bendito é o fruto do vosso ventre, Jesus.

Santa Maria, Mãe de Deus,
rogai por nós pecadores,
agora e na hora da nossa morte.
Amém.`,
    contexto: 'Oração fundamental mariana baseada na saudação do Anjo Gabriel a Maria.'
  },
  {
    id: 'pai-nosso',
    nome: 'Pai Nosso',
    categoria: 'Fundamentais',
    texto: `Pai nosso que estais no céu,
santificado seja o vosso nome,
venha a nós o vosso reino,
seja feita a vossa vontade
assim na terra como no céu.

O pão nosso de cada dia nos dai hoje,
perdoai as nossas ofensas
assim como nós perdoamos
a quem nos tem ofendido,
e não nos deixeis cair em tentação,
mas livrai-nos do mal.
Amém.`,
    contexto: 'Oração ensinada por Jesus Cristo aos seus discípulos.'
  },
  {
    id: 'gloria-pai',
    nome: 'Glória ao Pai',
    categoria: 'Fundamentais',
    texto: `Glória ao Pai e ao Filho
e ao Espírito Santo.
Como era no princípio,
agora e sempre,
pelos séculos dos séculos.
Amém.`,
    contexto: 'Oração de louvor à Santíssima Trindade.'
  },
  {
    id: 'credo',
    nome: 'Credo Apostólico',
    categoria: 'Fundamentais',
    texto: `Creio em Deus Pai todo-poderoso,
criador do céu e da terra;
e em Jesus Cristo, seu único Filho, nosso Senhor;
que foi concebido pelo poder do Espírito Santo;
nasceu da Virgem Maria,
padeceu sob Pôncio Pilatos,
foi crucificado, morto e sepultado;
desceu à mansão dos mortos;
ressuscitou ao terceiro dia;
subiu aos céus,
está sentado à direita de Deus Padre todo-poderoso,
de onde há de vir a julgar os vivos e os mortos;
creio no Espírito Santo,
na santa Igreja Católica,
na comunhão dos santos,
na remissão dos pecados,
na ressurreição da carne,
e na vida eterna.
Amém.`,
    contexto: 'Profissão de fé cristã fundamental.'
  },
  {
    id: 'salve-rainha',
    nome: 'Salve Rainha',
    categoria: 'Marianas',
    texto: `Salve, Rainha, Mãe de misericórdia,
vida, doçura e esperança nossa, salve!
A vós bradamos, os degredados filhos de Eva;
a vós suspiramos, gemendo e chorando
neste vale de lágrimas.

Eia, pois, advogada nossa,
esses vossos olhos misericordiosos a nós volvei;
e depois deste desterro mostrai-nos Jesus,
bendito fruto do vosso ventre.

Ó clemente, ó piedosa, ó doce sempre Virgem Maria!
Rogai por nós, santa Mãe de Deus,
para que sejamos dignos das promessas de Cristo.
Amém.`,
    contexto: 'Antiga oração mariana, tradicionalmente cantada ao final das Completas.'
  },
  {
    id: 'anjo-senhor',
    nome: 'Anjo do Senhor',
    categoria: 'Marianas',
    texto: `O Anjo do Senhor anunciou a Maria.
- E ela concebeu do Espírito Santo.
Ave Maria...

Eis aqui a serva do Senhor.
- Faça-se em mim segundo a vossa palavra.
Ave Maria...

E o Verbo se fez carne.
- E habitou entre nós.
Ave Maria...

Rogai por nós, santa Mãe de Deus.
- Para que sejamos dignos das promessas de Cristo.

Oremos: Infundi, Senhor,
a vossa graça em nossas almas,
para que nós, que conhecemos,
pelo anúncio do Anjo,
a encarnação de vosso Filho Jesus Cristo,
pela sua paixão e cruz
sejamos conduzidos à glória da ressurreição.
Por Cristo nosso Senhor.
Amém.`,
    contexto: 'Oração tradicionalmente rezada três vezes ao dia: 6h, 12h e 18h.'
  },
  {
    id: 'sao-miguel',
    nome: 'Oração de São Miguel Arcanjo',
    categoria: 'Proteção',
    texto: `São Miguel Arcanjo,
defendei-nos no combate,
sede o nosso refúgio contra a maldade
e as ciladas do demônio.

Ordene-lhe Deus, instantemente o pedimos;
e vós, Príncipe da milícia celeste,
pela virtude divina,
precipitai no inferno Satanás
e os outros espíritos malignos
que andam pelo mundo
para perder as almas.
Amém.`,
    contexto: 'Oração composta pelo Papa Leão XIII, tradicionalmente rezada após a Missa.'
  },
  {
    id: 'te-deum',
    nome: 'Te Deum',
    categoria: 'Louvor',
    texto: `A vós, ó Deus, louvamos,
a vós, Senhor, confessamos.
A vós, eterno Pai,
toda a terra venera.

Os Anjos todos, os céus
e todas as potestades,
os Querubins e Serafins
não cessam de aclamar:

Santo, Santo, Santo,
Senhor Deus dos exércitos.
Cheios estão os céus e a terra
da majestade de vossa glória.

O coro glorioso dos apóstolos,
a falange venerável dos profetas,
o exército radiante dos mártires
cantam vossos louvores.

Por toda a terra
a santa Igreja vos confessa:
Pai de imensa majestade,
vosso adorável e verdadeiro Filho,
e o Espírito Santo Consolador.`,
    contexto: 'Hino de louvor tradicionalmente cantado nas Laudes dominicais.'
  }
];

export const Oracoes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(ORACOES.map(o => o.categoria)))];
  
  const filteredOracoes = ORACOES.filter(oracao => {
    const matchesSearch = oracao.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || oracao.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header title="Orações Católicas" subtitle="Tradicionais" />
      
      <div className="p-4 space-y-4">
        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Buscar oração..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category === 'all' ? 'Todas' : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Orações Grid */}
        <div className="grid gap-3">
          {filteredOracoes.map((oracao) => (
            <Link key={oracao.id} to={`/oracao/${oracao.id}`}>
              <Card className="p-4 hover:shadow-md divine-transition cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{oracao.nome}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{oracao.categoria}</p>
                    {oracao.contexto && (
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {oracao.contexto}
                      </p>
                    )}
                  </div>
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredOracoes.length === 0 && (
          <div className="text-center py-8">
            <Heart size={48} className="mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">Nenhuma oração encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export individual prayer data for the detail page
export { ORACOES };