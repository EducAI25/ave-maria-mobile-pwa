const fs = require('fs');
const path = require('path');

try {
  // Ler o arquivo JSON da Bíblia Ave Maria
  console.log('Lendo arquivo JSON...');
  const bibleData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/bibliaAveMaria.json'), 'utf8'));
  
  console.log(`Total de livros encontrados: ${bibleData.length}`);
  
  // Pegar apenas os primeiros 10 livros para teste
  const selectedBooks = bibleData.slice(0, 10);
  
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

  // Converter os livros selecionados
  selectedBooks.forEach((book, index) => {
    const bookId = book.name.toLowerCase().replace(/\s+/g, '').replace(/[^\w]/g, '');
    
    console.log(`Processando livro: ${book.name}`);
    
    typescriptContent += `  {
    id: '${bookId}',
    name: '${book.name}',
    chapters: [
`;
    
    // Pegar apenas os primeiros 3 capítulos de cada livro
    const selectedChapters = book.chapters.slice(0, 3);
    
    selectedChapters.forEach((chapter, chapterIndex) => {
      typescriptContent += `      {
        number: ${chapter.number},
        verses: [
`;
      
      // Pegar apenas os primeiros 5 versículos de cada capítulo
      const selectedVerses = chapter.verses.slice(0, 5);
      
      selectedVerses.forEach((verse, verseIndex) => {
        const escapedText = verse.text.replace(/'/g, "\\'").replace(/\n/g, ' ').replace(/\r/g, '');
        typescriptContent += `          {
            book: '${book.name}',
            chapter: ${chapter.number},
            verse: ${verse.number},
            text: '${escapedText}'
          }${verseIndex < selectedVerses.length - 1 ? ',' : ''}
`;
      });
      
      typescriptContent += `        ]
      }${chapterIndex < selectedChapters.length - 1 ? ',' : ''}
`;
    });
    
    typescriptContent += `    ]
  }${index < selectedBooks.length - 1 ? ',' : ''}
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
  console.log(`Livros processados: ${selectedBooks.length}`);
  console.log(`Capítulos processados: ${selectedBooks.reduce((acc, book) => acc + Math.min(book.chapters.length, 3), 0)}`);
  console.log(`Versículos processados: ${selectedBooks.reduce((acc, book) => acc + book.chapters.slice(0, 3).reduce((acc2, chapter) => acc2 + Math.min(chapter.verses.length, 5), 0), 0)}`);

} catch (error) {
  console.error('Erro durante a conversão:', error.message);
} 