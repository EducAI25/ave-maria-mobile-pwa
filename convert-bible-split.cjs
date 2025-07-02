const fs = require('fs');
const path = require('path');

const bibleJsonPath = path.join(__dirname, 'src/data/bibliaAveMaria-utf8.json');
const outputDir = path.join(__dirname, 'src/data/books');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const bibleData = JSON.parse(fs.readFileSync(bibleJsonPath, 'utf8'));

const allBooks = [
  ...(bibleData.antigoTestamento || []),
  ...(bibleData.novoTestamento || [])
];

allBooks.forEach((book) => {
  const bookId = book.nome.toLowerCase().replace(/\s+/g, '').replace(/[^\w]/g, '');
  const fileName = `${bookId}.ts`;
  const filePath = path.join(outputDir, fileName);

  let ts = `import { Book } from '../bibleTypes';\n\n`;
  ts += `export const ${bookId}: Book = `;
  ts += JSON.stringify({
    id: bookId,
    name: book.nome,
    chapters: (book.capitulos || []).map(chap => ({
      number: chap.capitulo,
      verses: (chap.versiculos || []).map(vers => ({
        book: book.nome,
        chapter: chap.capitulo,
        verse: vers.versiculo,
        text: vers.texto
      }))
    }))
  }, null, 2)
    .replace(/"(\w+)":/g, '$1:') // remove quotes from keys
    .replace(/\"/g, '"'); // fix quotes
  ts += ';\n';

  fs.writeFileSync(filePath, ts, 'utf8');
  console.log(`Livro exportado: ${fileName}`);
});

console.log('Todos os livros foram exportados para src/data/books/'); 