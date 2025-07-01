export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface BibleBook {
  id: string;
  name: string;
  chapters: Chapter[];
  testament: 'old' | 'new';
}

// Versão simplificada para teste
export const BIBLE_CONTENT: Record<string, BibleBook> = {
  genesis: {
    id: 'genesis',
    name: 'Gênesis',
    testament: 'old',
    chapters: [
      {
        number: 1,
        verses: [
          { number: 1, text: "No princípio Deus criou o céu e a terra." },
          { number: 2, text: "A terra, porém, estava informe e vazia; as trevas cobriam o abismo e o Espírito de Deus pairava sobre as águas." },
          { number: 3, text: "Deus disse: 'Haja luz', e houve luz." }
        ]
      }
    ]
  },
  john: {
    id: 'john',
    name: 'João',
    testament: 'new',
    chapters: [
      {
        number: 1,
        verses: [
          { number: 1, text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." },
          { number: 2, text: "Ele estava no princípio com Deus." },
          { number: 3, text: "Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez." }
        ]
      },
      {
        number: 3,
        verses: [
          { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." }
        ]
      }
    ]
  },
  psalms: {
    id: 'psalms',
    name: 'Salmos',
    testament: 'old',
    chapters: [
      {
        number: 23,
        verses: [
          { number: 1, text: "O Senhor é o meu pastor; nada me faltará." },
          { number: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas." }
        ]
      }
    ]
  }
};

export const getDailyVerse = (): { book: string; chapter: number; verse: number; text: string } => {
  const verses = [
    { book: "João", chapter: 3, verse: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
    { book: "Salmos", chapter: 23, verse: 1, text: "O Senhor é o meu pastor; nada me faltará." },
    { book: "Gênesis", chapter: 1, verse: 1, text: "No princípio Deus criou o céu e a terra." }
  ];
  
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return verses[dayOfYear % verses.length];
}; 