const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'data', 'bibliaAveMaria.json');
const outputPath = path.join(__dirname, 'src', 'data', 'bibleContent.ts');

// Mapeamento dos nomes dos livros para os IDs usados no projeto
const bookIdMap = {
  'Gênesis': 'genesis',
  'Êxodo': 'exodus',
  'Levítico': 'leviticus',
  'Números': 'numbers',
  'Deuteronômio': 'deuteronomy',
  'Josué': 'joshua',
  'Juízes': 'judges',
  'Rute': 'ruth',
  '1 Samuel': '1samuel',
  '2 Samuel': '2samuel',
  '1 Reis': '1kings',
  '2 Reis': '2kings',
  '1 Crônicas': '1chronicles',
  '2 Crônicas': '2chronicles',
  'Esdras': 'ezra',
  'Neemias': 'nehemiah',
  'Ester': 'esther',
  'Jó': 'job',
  'Salmos': 'psalms',
  'Provérbios': 'proverbs',
  'Eclesiastes': 'ecclesiastes',
  'Cânticos': 'song',
  'Isaías': 'isaiah',
  'Jeremias': 'jeremiah',
  'Lamentações': 'lamentations',
  'Ezequiel': 'ezekiel',
  'Daniel': 'daniel',
  'Oseias': 'hosea',
  'Joel': 'joel',
  'Amós': 'amos',
  'Obadias': 'obadiah',
  'Jonas': 'jonah',
  'Miqueias': 'micah',
  'Naum': 'nahum',
  'Habacuque': 'habakkuk',
  'Sofonias': 'zephaniah',
  'Ageu': 'haggai',
  'Zacarias': 'zechariah',
  'Malaquias': 'malachi',
  'Mateus': 'matthew',
  'Marcos': 'mark',
  'Lucas': 'luke',
  'João': 'john',
  'Atos': 'acts',
  'Romanos': 'romans',
  '1 Coríntios': '1corinthians',
  '2 Coríntios': '2corinthians',
  'Gálatas': 'galatians',
  'Efésios': 'ephesians',
  'Filipenses': 'philippians',
  'Colossenses': 'colossians',
  '1 Tessalonicenses': '1thessalonians',
  '2 Tessalonicenses': '2thessalonians',
  '1 Timóteo': '1timothy',
  '2 Timóteo': '2timothy',
  'Tito': 'titus',
  'Filemom': 'philemon',
  'Hebreus': 'hebrews',
  'Tiago': 'james',
  '1 Pedro': '1peter',
  '2 Pedro': '2peter',
  '1 João': '1john',
  '2 João': '2john',
  '3 João': '3john',
  'Judas': 'jude',
  'Apocalipse': 'revelation',
};

const testamentMap = {
  'antigoTestamento': 'old',
  'novoTestamento': 'new',
};

function normalizeBookName(name) {
  // Remove "São " do início, se houver
  return name.replace(/^São /, '');
}

function main() {
  const raw = fs.readFileSync(inputPath, 'utf8');
  const json = JSON.parse(raw);
  const bibleContent = {};

  for (const testamentKey of ['antigoTestamento', 'novoTestamento']) {
    const testament = testamentMap[testamentKey];
    const books = json[testamentKey];
    for (const book of books) {
      const normalized = normalizeBookName(book.nome);
      const id = bookIdMap[normalized];
      if (!id) continue;
      bibleContent[id] = {
        id,
        name: normalized,
        testament,
        chapters: book.capitulos.map((cap) => ({
          number: cap.capitulo,
          verses: cap.versiculos.map((verse, vIdx) => ({
            number: vIdx + 1,
            text: verse
          }))
        }))
      };
    }
  }

  const ts = `// Conteúdo gerado automaticamente a partir de bibliaAveMaria.json\n` +
    `import { BibleBook } from './bibleContent';\n\n` +
    `export const BIBLE_CONTENT: Record<string, BibleBook> = ${JSON.stringify(bibleContent, null, 2)};\n`;

  fs.writeFileSync(outputPath, ts, 'utf8');
  console.log('Arquivo bibleContent.ts gerado com sucesso!');
}

main(); 