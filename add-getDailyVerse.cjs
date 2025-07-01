const fs = require('fs');

const filePath = 'src/data/bibleContent.ts';
const content = fs.readFileSync(filePath, 'utf8');

const getDailyVerseFunction = `

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
`;

fs.writeFileSync(filePath, content + getDailyVerseFunction);
console.log('Função getDailyVerse adicionada com sucesso!'); 