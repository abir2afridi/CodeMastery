import fs from 'fs';

const src = fs.readFileSync('src/lib/curriculum/emoji-curriculum.ts', 'utf8');

// Step 1: Extract all string literal ranges from the source
// A string literal is: ' ... ' or " ... " with proper escaping

const stringRanges = [];
let i = 0;
while (i < src.length) {
  const c = src[i];
  const n = src[i + 1];
  
  // Skip comments
  if (c === '/' && n === '/') {
    const eol = src.indexOf('\n', i);
    i = eol >= 0 ? eol + 1 : src.length;
    continue;
  }
  if (c === '/' && n === '*') {
    const end = src.indexOf('*/', i + 2);
    i = end >= 0 ? end + 2 : src.length;
    continue;
  }
  
  // Skip template literals (backticks)
  if (c === '`') {
    i++;
    while (i < src.length) {
      if (src[i] === '\\') { i += 2; continue; }
      if (src[i] === '`') break;
      if (src[i] === '$' && src[i + 1] === '{') {
        // Skip the ${...} interpolation
        let depth = 1;
        i += 2;
        while (i < src.length && depth > 0) {
          if (src[i] === '{') depth++;
          else if (src[i] === '}') depth--;
          else if (src[i] === '`') break;
          else if (src[i] === "'" || src[i] === '"') {
            // Handle nested strings
            const q = src[i];
            i++;
            while (i < src.length && src[i] !== q) {
              if (src[i] === '\\') i++;
              i++;
            }
          }
          i++;
        }
        continue;
      }
      i++;
    }
    i++;
    continue;
  }
  
  // String literal
  if (c === "'" || c === '"') {
    const start = i;
    const quote = c;
    i++;
    while (i < src.length) {
      if (src[i] === '\\') { i += 2; continue; }
      if (src[i] === quote) break;
      i++;
    }
    if (i < src.length) {
      stringRanges.push({ start, end: i + 1, quote });
    }
    i++;
    continue;
  }
  
  i++;
}

console.log(`Found ${stringRanges.length} string literals`);

// Helper: extract raw string value (with TypeScript escaping decoded)
function unescapeTS(s, quote) {
  // s is the content between the quotes (without the quotes)
  let result = '';
  for (let j = 0; j < s.length; j++) {
    if (s[j] === '\\' && j + 1 < s.length) {
      const next = s[j + 1];
      if (next === 'n') { result += '\n'; j++; continue; }
      if (next === 't') { result += '\t'; j++; continue; }
      if (next === 'r') { result += '\r'; j++; continue; }
      if (next === quote) { result += quote; j++; continue; }
      if (next === '\\') { result += '\\'; j++; continue; }
      // Unknown escape - keep as-is
      result += s[j];
    } else {
      result += s[j];
    }
  }
  return result;
}

// Helper: wrap a value in clean TypeScript single-quoted string
function tsString(value) {
  let result = "'";
  for (const ch of value) {
    if (ch === '\\') result += '\\\\';
    else if (ch === "'") result += "\\'";
    else if (ch === '\n') result += '\\n';
    else if (ch === '\r') result += '\\r';
    else if (ch === '\t') result += '\\t';
    else result += ch;
  }
  result += "'";
  return result;
}

// Rebuild the file
let output = '';
let lastPos = 0;
let stringsFixed = 0;

for (const range of stringRanges) {
  // Copy everything before this string literal
  output += src.substring(lastPos, range.start);
  
  // Extract the string content (without quotes)
  const rawContent = src.substring(range.start + 1, range.end - 1);
  const unescaped = unescapeTS(rawContent, range.quote);
  const reEscaped = tsString(unescaped);
  
  // Check if the re-escaped version differs from original
  if (reEscaped !== src.substring(range.start, range.end)) {
    stringsFixed++;
    if (stringsFixed <= 5) {
      const origPreview = src.substring(range.start, range.end).substring(0, 80);
      const newPreview = reEscaped.substring(0, 80);
      console.log(`  Fixed string #${stringsFixed}: "${origPreview}..."`);
      console.log(`    -> "${newPreview}..."`);
    }
  }
  
  output += reEscaped;
  lastPos = range.end;
}

// Copy remaining
output += src.substring(lastPos);

console.log(`\nTotal strings fixed: ${stringsFixed}`);

// Write the fixed file
fs.writeFileSync('src/lib/curriculum/emoji-curriculum.ts', output);
console.log('File written');
