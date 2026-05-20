import { translate } from '@vitalets/google-translate-api';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT = resolve(__dirname, '..');

// --- Cache ---
const CACHE_PATH = resolve(PROJECT, 'bn-cache.json');
const cache = existsSync(CACHE_PATH) ? JSON.parse(readFileSync(CACHE_PATH, 'utf-8')) : {};
function saveCache() { writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2)); }

async function t(text) {
  if (!text || text.trim().length === 0) return text;
  if (cache[text]) return cache[text];
  try {
    const result = await translate(text, { to: 'bn' });
    cache[text] = result.text;
    return result.text;
  } catch (err) {
    console.error(`  ✗ Failed: "${text.slice(0, 50)}" – ${err.message}`);
    return text;
  }
}

// --- Read TypeScript file, extract sections via state machine ---
const content = readFileSync(resolve(PROJECT, 'src/lib/curriculum/programming-intro-curriculum.ts'), 'utf-8');

// Find all section JSON strings by state machine
// The file has: sections:["{...}","{...}",...]
// We extract content between [ and ]
const sections = [];
let searchPos = 0;

while (true) {
  const secStart = content.indexOf('sections:[', searchPos);
  if (secStart === -1) break;
  
  let pos = secStart + 10; // skip past 'sections:['
  const arrStart = pos;
  const stack = ['[']; // track bracket nesting
  
  while (stack.length > 0 && pos < content.length) {
    const ch = content[pos];
    if (ch === '[') stack.push('[');
    else if (ch === ']') stack.pop();
    pos++;
  }
  // pos is now after the closing ]
  const arrContent = content.slice(arrStart, pos - 1); // the array content without ]
  
  // Now extract each string from the array
  // Each entry is "..." (TS string)
  let strPos = 0;
  while (strPos < arrContent.length) {
    // Skip whitespace and commas
    while (strPos < arrContent.length && (arrContent[strPos] === ' ' || arrContent[strPos] === ',' || arrContent[strPos] === '\n' || arrContent[strPos] === '\r' || arrContent[strPos] === '\t')) strPos++;
    if (strPos >= arrContent.length) break;
    
    // Expect opening "
    if (arrContent[strPos] !== '"') { strPos++; continue; }
    strPos++; // skip opening "
    
    // Read until unescaped " closing the TS string
    let strContent = '';
    while (strPos < arrContent.length) {
      const c = arrContent[strPos];
      if (c === '\\') {
        // Escaped char: keep both chars
        strContent += c;
        strPos++;
        if (strPos < arrContent.length) {
          strContent += arrContent[strPos];
          strPos++;
        }
        continue;
      }
      if (c === '"') {
        strPos++; // skip closing "
        break; // end of this string
      }
      strContent += c;
      strPos++;
    }
    
    // Now convert TS-escaped JSON to real JSON
    // strContent looks like: {\"id\":\"c1s1\",\"type\":\"lesson\",...}
    // Replace \" with "
    const jsonStr = strContent.replace(/\\"/g, '"');
    try {
      const obj = JSON.parse(jsonStr);
      if (obj.id && (obj.type === 'lesson' || obj.type === 'exercise')) {
        sections.push(obj);
      }
    } catch (e) {
      // Not a valid section JSON, skip
    }
  }
  
  searchPos = pos;
}

console.log(`Extracted ${sections.length} sections`);

// Deduplicate text values
const allTexts = new Map(); // text -> set of section IDs that need it
for (const s of sections) {
  if (s.title) {
    if (!allTexts.has(s.title)) allTexts.set(s.title, []);
    allTexts.get(s.title).push({ id: s.id, field: 'title' });
  }
  if (s.content) {
    if (!allTexts.has(s.content)) allTexts.set(s.content, []);
    allTexts.get(s.content).push({ id: s.id, field: 'content' });
  }
  if (s.description) {
    if (!allTexts.has(s.description)) allTexts.set(s.description, []);
    allTexts.get(s.description).push({ id: s.id, field: 'description' });
  }
}

console.log(`\nUnique texts to translate: ${allTexts.size}`);
console.log('Texts:');
let i = 0;
for (const [text] of allTexts) {
  console.log(`  ${++i}. "${text.slice(0, 80)}${text.length > 80 ? '...' : ''}"`);
}

// Translate
console.log('\nTranslating...');
const translations = {}; // text -> bnText
let done = 0;
for (const [text] of allTexts) {
  translations[text] = await t(text);
  done++;
  if (done % 5 === 0) {
    console.log(`  ${done}/${allTexts.size} (${Math.round(done/allTexts.size*100)}%)`);
    saveCache();
  }
  await new Promise(r => setTimeout(r, 300)); // rate limit
}
saveCache();

// Build section overrides
const overrides = {};
for (const s of sections) {
  const override = {};
  if (s.title && translations[s.title]) override.titleBn = translations[s.title];
  if (s.content && translations[s.content]) override.contentBn = translations[s.content];
  if (s.description && translations[s.description]) override.descriptionBn = translations[s.description];
  overrides[s.id] = override;
}

// Write output
const outputPath = resolve(PROJECT, 'src/lib/curriculum/bn-programming-intro.json');
writeFileSync(outputPath, JSON.stringify(overrides, null, 2));
console.log(`\nWritten ${Object.keys(overrides).length} section overrides to bn-programming-intro.json`);
