import ts from 'typescript';

const sourceText = ts.sys.readFile('src/lib/curriculum/emoji-curriculum.ts');
if (!sourceText) { console.error('Cannot read file'); process.exit(1); }

// Create source file with full diagnostics
const sf = ts.createSourceFile(
  'emoji-curriculum.ts',
  sourceText,
  ts.ScriptTarget.Latest,
  true, // setParentNodes
  ts.ScriptKind.TS
);

// Get parse diagnostics
const parseDiags = [];
// Check for certain edge cases

// Let's look at the last 100 lines carefully
const lines = sourceText.split('\n');
console.log('=== Last 100 lines (1762-1962) ===');
for (let i = Math.max(0, lines.length - 100); i < lines.length; i++) {
  const lineNum = i + 1;
  const text = lines[i];
  console.log(`${lineNum}: ${text}`);
}

console.log('\n=== Now scanning for specific patterns ===');

// Count opening and closing braces per like, looking for mismatches
// Skip strings and comments
let braceDepth = 0;
let minDepth = 0;
let inStr = false;
let strChar = '';
let inTmpl = false;
let tmplDepth = 0;
let inLineComment = false;
let inBlockComment = false;

for (let i = 0; i < sourceText.length; i++) {
  const c = sourceText[i];
  const n = sourceText[i + 1] || '';

  if (c === '\n') { inLineComment = false; }

  if (inLineComment) continue;
  if (inBlockComment) {
    if (c === '*' && n === '/') { inBlockComment = false; i++; }
    continue;
  }

  if (!inStr && !inTmpl) {
    if (c === '/' && n === '/') { inLineComment = true; i++; continue; }
    if (c === '/' && n === '*') { inBlockComment = true; i++; continue; }
  }

  if (inTmpl) {
    if (c === '$' && n === '{') { tmplDepth++; i++; continue; }
    if (c === '}' && tmplDepth > 0) { tmplDepth--; continue; }
    if (c === '`' && tmplDepth === 0) { inTmpl = false; continue; }
    if (c === '\\') { i++; continue; }
    continue;
  }
  if (!inStr && c === '`') { inTmpl = true; tmplDepth = 0; continue; }

  if (inStr) {
    if (c === '\\') { i++; continue; }
    if (c === strChar) { inStr = false; }
    continue;
  }
  if (!inStr && (c === "'" || c === '"')) { inStr = true; strChar = c; continue; }

  if (c === '{') { braceDepth++; }
  else if (c === '}') { braceDepth--; }
  if (braceDepth < minDepth) minDepth = braceDepth;
}

console.log(`\nBrace depth at end: ${braceDepth}`);
console.log(`Minimum brace depth: ${minDepth}`);

// Now let's look at the specific area near line 1960
// Find the last few objects and see if they're properly closed
// Look for the text between the last comment and the end

// Find the last cheatSheet close
const lastCheatSheetClose = sourceText.lastIndexOf(']');
const afterLastCheatSheet = sourceText.substring(lastCheatSheetClose);
console.log(`\n=== Last 200 chars ===`);
console.log(JSON.stringify(sourceText.slice(-200)));
