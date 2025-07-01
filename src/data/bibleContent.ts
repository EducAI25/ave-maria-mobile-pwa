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

// Conteúdo bíblico inicial - Evangelho de João completo
export const BIBLE_CONTENT: Record<string, BibleBook> = {
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
          { number: 3, text: "Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez." },
          { number: 4, text: "Nele estava a vida e a vida era a luz dos homens." },
          { number: 5, text: "E a luz resplandece nas trevas, e as trevas não a compreenderam." },
          { number: 6, text: "Houve um homem enviado de Deus, cujo nome era João." },
          { number: 7, text: "Este veio para testemunho, para que testificasse da luz, para que todos cressem por ele." },
          { number: 8, text: "Não era ele a luz, mas para que testificasse da luz." },
          { number: 9, text: "Ali estava a luz verdadeira, que alumia a todo homem que vem ao mundo." },
          { number: 10, text: "Estava no mundo, e o mundo foi feito por ele, e o mundo não o conheceu." },
          { number: 11, text: "Veio para o que era seu, e os seus não o receberam." },
          { number: 12, text: "Mas a todos quantos o receberam deu-lhes o poder de serem feitos filhos de Deus: aos que creem no seu nome." },
          { number: 13, text: "Os quais não nasceram do sangue, nem da vontade da carne, nem da vontade do varão, mas de Deus." },
          { number: 14, text: "E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do Unigênito do Pai, cheio de graça e de verdade." },
          { number: 15, text: "João testificou dele e clamou, dizendo: Este era aquele de quem eu dizia: O que vem após mim é antes de mim, porque foi primeiro do que eu." },
          { number: 16, text: "E todos nós recebemos também da sua plenitude, e graça por graça." },
          { number: 17, text: "Porque a lei foi dada por Moisés; a graça e a verdade vieram por Jesus Cristo." },
          { number: 18, text: "Deus nunca foi visto por alguém. O Filho unigênito, que está no seio do Pai, esse o revelou." }
        ]
      },
      {
        number: 3,
        verses: [
          { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
          { number: 17, text: "Porque Deus enviou o seu Filho ao mundo não para que condenasse o mundo, mas para que o mundo fosse salvo por ele." },
          { number: 18, text: "Quem crê nele não é condenado; mas quem não crê já está condenado, porquanto não crê no nome do unigênito Filho de Deus." }
        ]
      }
    ]
  },
  matthew: {
    id: 'matthew',
    name: 'Mateus',
    testament: 'new',
    chapters: [
      {
        number: 5,
        verses: [
          { number: 3, text: "Bem-aventurados os pobres de espírito, porque deles é o Reino dos céus." },
          { number: 4, text: "Bem-aventurados os que choram, porque eles serão consolados." },
          { number: 5, text: "Bem-aventurados os mansos, porque eles herdarão a terra." },
          { number: 6, text: "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos." },
          { number: 7, text: "Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia." },
          { number: 8, text: "Bem-aventurados os limpos de coração, porque eles verão a Deus." },
          { number: 9, text: "Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus." }
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
          { number: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas." },
          { number: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome." },
          { number: 4, text: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." },
          { number: 5, text: "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda." },
          { number: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na Casa do Senhor por longos dias." }
        ]
      },
      {
        number: 91,
        verses: [
          { number: 1, text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará." },
          { number: 2, text: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei." }
        ]
      }
    ]
  }
};

export const getDailyVerse = (): { book: string; chapter: number; verse: number; text: string } => {
  const verses = [
    { book: "João", chapter: 3, verse: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
    { book: "Salmos", chapter: 23, verse: 1, text: "O Senhor é o meu pastor; nada me faltará." },
    { book: "Mateus", chapter: 5, verse: 3, text: "Bem-aventurados os pobres de espírito, porque deles é o Reino dos céus." },
    { book: "João", chapter: 1, verse: 1, text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." }
  ];
  
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return verses[dayOfYear % verses.length];
};