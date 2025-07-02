export interface Verse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface Book {
  id: string;
  name: string;
  chapters: Chapter[];
}

export const BIBLE_CONTENT: Book[] = [
  {
    id: 'genesis',
    name: 'Gênesis',
    chapters: [
      {
        number: 1,
        verses: [
          { book: 'Gênesis', chapter: 1, verse: 1, text: 'No princípio, criou Deus os céus e a terra.' },
          { book: 'Gênesis', chapter: 1, verse: 2, text: 'A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre as águas.' },
          { book: 'Gênesis', chapter: 1, verse: 3, text: 'Disse Deus: Haja luz; e houve luz.' },
          { book: 'Gênesis', chapter: 1, verse: 4, text: 'Viu Deus que a luz era boa; e fez separação entre a luz e as trevas.' },
          { book: 'Gênesis', chapter: 1, verse: 5, text: 'Chamou Deus à luz Dia e às trevas, Noite. Houve tarde e manhã, o primeiro dia.' }
        ]
      }
    ]
  },
  {
    id: 'john',
    name: 'João',
    chapters: [
      {
        number: 3,
        verses: [
          { book: 'João', chapter: 3, verse: 16, text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.' }
        ]
      }
    ]
  }
];

export const getDailyVerse = (): Verse => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  const allVerses: Verse[] = [];
  BIBLE_CONTENT.forEach(book => {
    book.chapters.forEach(chapter => {
      chapter.verses.forEach(verse => {
        allVerses.push(verse);
      });
    });
  });
  
  const verseIndex = dayOfYear % allVerses.length;
  return allVerses[verseIndex];
}; 