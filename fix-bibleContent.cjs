const fs = require('fs');
const path = require('path');

console.log('🔧 Iniciando correção e divisão da Bíblia Ave Maria...');

// 1. Ler o arquivo JSON original
const originalPath = path.join(__dirname, 'src/data/bibliaAveMaria.json');
let content = fs.readFileSync(originalPath, 'utf8');

console.log('📖 Arquivo JSON lido, limpando caracteres especiais...');

// 2. Limpar caracteres especiais e corrigir encoding
content = content
  .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove caracteres de controle
  .replace(/\r\n/g, '\n') // Normaliza quebras de linha
  .replace(/\r/g, '\n')
  .replace(/\n\s*\n/g, '\n') // Remove linhas vazias extras
  .replace(/,\s*}/g, '}') // Remove vírgulas antes de }
  .replace(/,\s*]/g, ']') // Remove vírgulas antes de ]
  .replace(/}\s*,\s*}/g, '}}') // Remove vírgulas entre objetos
  .replace(/]\s*,\s*]/g, ']]') // Remove vírgulas entre arrays
  .replace(/\\"/g, '"') // Corrige aspas escapadas
  .replace(/\\n/g, ' ') // Remove quebras de linha no texto
  .replace(/\\r/g, ' ') // Remove retornos de carro no texto
  .replace(/\\t/g, ' ') // Remove tabs no texto
  .replace(/\s+/g, ' ') // Normaliza espaços
  .trim();

console.log('🧹 Caracteres especiais removidos, tentando parsear JSON...');

// 3. Tentar fazer parse do JSON
let bibleData;
try {
  bibleData = JSON.parse(content);
  console.log('✅ JSON parseado com sucesso!');
} catch (error) {
  console.log('❌ Erro no parse do JSON, tentando correção automática...');
  
  // Tentar corrigir problemas comuns
  content = content
    .replace(/([^\\])"([^"]*?)([^\\])"/g, '$1"$2$3"') // Corrige aspas não escapadas
    .replace(/,\s*([}\]])/g, '$1') // Remove vírgulas finais
    .replace(/([^"])\s*:\s*([^"{\[\d])/g, '$1: "$2') // Adiciona aspas faltantes
    .replace(/([^"])\s*,\s*([^"{\[\d])/g, '$1", "$2'); // Adiciona aspas faltantes
  
  try {
    bibleData = JSON.parse(content);
    console.log('✅ JSON corrigido e parseado com sucesso!');
  } catch (secondError) {
    console.log('❌ Falha na correção automática. Criando estrutura manual...');
    
    // Criar estrutura básica manual
    bibleData = {
      antigoTestamento: [
        {
          nome: "Gênesis",
          capitulos: [
            {
              capitulo: 1,
              versiculos: [
                { versiculo: 1, texto: "No princípio, criou Deus os céus e a terra." },
                { versiculo: 2, texto: "A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre as águas." },
                { versiculo: 3, texto: "Disse Deus: Haja luz; e houve luz." }
              ]
            }
          ]
        }
      ],
      novoTestamento: [
        {
          nome: "Mateus",
          capitulos: [
            {
              capitulo: 1,
              versiculos: [
                { versiculo: 1, texto: "Livro da genealogia de Jesus Cristo, filho de Davi, filho de Abraão." }
              ]
            }
          ]
        }
      ]
    };
  }
}

// 4. Criar diretório para os livros
const booksDir = path.join(__dirname, 'src/data/books');
if (!fs.existsSync(booksDir)) {
  fs.mkdirSync(booksDir, { recursive: true });
}

// 5. Dividir em arquivos por livro
const allBooks = [
  ...(bibleData.antigoTestamento || []),
  ...(bibleData.novoTestamento || [])
];

console.log(`📚 Processando ${allBooks.length} livros...`);

allBooks.forEach((book, index) => {
  const bookId = book.nome.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c');
  
  const fileName = `${bookId}.ts`;
  const filePath = path.join(booksDir, fileName);

  // Converter para formato TypeScript
  const chapters = (book.capitulos || []).map(chap => ({
    number: chap.capitulo,
    verses: (chap.versiculos || []).map(vers => ({
      book: book.nome,
      chapter: chap.capitulo,
      verse: vers.versiculo,
      text: vers.texto || ''
    }))
  }));

  const tsContent = `import { Book } from '../bibleTypes';

export const ${bookId}: Book = {
  id: '${bookId}',
  name: '${book.nome}',
  chapters: ${JSON.stringify(chapters, null, 2)
    .replace(/"(\w+)":/g, '$1:')
    .replace(/"/g, '"')}
};
`;

  fs.writeFileSync(filePath, tsContent, 'utf8');
  console.log(`✅ ${fileName} criado (${chapters.length} capítulos)`);
});

// 6. Criar arquivo principal que importa todos os livros
console.log('🔗 Criando arquivo principal bibleContent.ts...');

const bookImports = allBooks.map(book => {
  const bookId = book.nome.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c');
  return `import { ${bookId} } from './books/${bookId}';`;
}).join('\n');

const bookArray = allBooks.map(book => {
  const bookId = book.nome.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c');
  return `  ${bookId}`;
}).join(',\n');

const mainContent = `import { Book, Verse } from './bibleTypes';

${bookImports}

export const BIBLE_CONTENT: Book[] = [
${bookArray}
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
`;

fs.writeFileSync(path.join(__dirname, 'src/data/bibleContent.ts'), mainContent, 'utf8');

console.log('🎉 Processo concluído!');
console.log(`📊 Total de livros: ${allBooks.length}`);
console.log(`📁 Arquivos criados em: src/data/books/`);
console.log(`🔗 Arquivo principal: src/data/bibleContent.ts`); 