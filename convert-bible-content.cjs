const fs = require('fs');
const path = require('path');

// Ler o arquivo JSON da Bíblia Ave Maria
const bibleData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/bibliaAveMaria.json'), 'utf8'));

// Converter para o formato TypeScript
let typescriptContent = `export interface Verse {
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
`;

// Converter os livros
bibleData.forEach((book, index) => {
  const bookId = book.name.toLowerCase().replace(/\s+/g, '').replace(/[^\w]/g, '');
  
  typescriptContent += `  {
    id: '${bookId}',
    name: '${book.name}',
    chapters: [
`;
  
  book.chapters.forEach((chapter, chapterIndex) => {
    typescriptContent += `      {
        number: ${chapter.number},
        verses: [
`;
    
    chapter.verses.forEach((verse, verseIndex) => {
      const escapedText = verse.text.replace(/'/g, "\\'").replace(/\n/g, ' ');
      typescriptContent += `          {
            book: '${book.name}',
            chapter: ${chapter.number},
            verse: ${verse.number},
            text: '${escapedText}'
          }${verseIndex < chapter.verses.length - 1 ? ',' : ''}
`;
    });
    
    typescriptContent += `        ]
      }${chapterIndex < book.chapters.length - 1 ? ',' : ''}
`;
  });
  
  typescriptContent += `    ]
  }${index < bibleData.length - 1 ? ',' : ''}
`;
});

typescriptContent += `];

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
`;

// Salvar o arquivo TypeScript
fs.writeFileSync(path.join(__dirname, 'src/data/bibleContent.ts'), typescriptContent, 'utf8');

console.log('Conversão concluída! Arquivo bibleContent.ts criado com sucesso.');
console.log(`Total de livros: ${bibleData.length}`);
console.log(`Total de capítulos: ${bibleData.reduce((acc, book) => acc + book.chapters.length, 0)}`);
console.log(`Total de versículos: ${bibleData.reduce((acc, book) => acc + book.chapters.reduce((acc2, chapter) => acc2 + chapter.verses.length, 0), 0)}`); 