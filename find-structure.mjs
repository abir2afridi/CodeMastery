import fs from 'fs';

// Read the existing file
const content = fs.readFileSync('src/lib/curriculum/emoji-curriculum.ts', 'utf8');

// Strategy: rebuild the file from its component parts by extracting line-by-line
// and reassembling with proper TypeScript syntax

const lines = content.split('\n');

// Find all chapter start and end positions
// Chapter start: `{ id: 'emojis-N',` or `{` followed by `id: 'emojis-N',`
// Chapter end: `    },` (for ch1-44) or `    }` (for ch45, the last)

const chapterRanges = [];
let inCommentBlock = false;
let braceDepth = 0;
let currentChStart = -1;
let chCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Track comment blocks
  if (trimmed.startsWith('//')) continue;
  
  // Detect chapter start: line with id: 'emojis-N'
  if (trimmed.includes("id: 'emojis-") && trimmed.includes("number:") && !trimmed.startsWith('//')) {
    // This is a one-liner chapter (ch1-36): { id: 'emojis-N', number: N, ... },
    // Find the start of the chapter by looking for '{' back
    currentChStart = i;
  }
  
  // Detect multi-line chapter start (ch37+): previous line is '{'
  if (trimmed === '{' && i + 1 < lines.length && lines[i+1].includes("id: 'emojis-")) {
    currentChStart = i;
  }
  
  // Detect chapter end: `    },` or `    }` followed by next chapter or end of chapters
  if (currentChStart >= 0 && (trimmed === '},' || trimmed === '}') && i > 0) {
    // Check if this looks like the end of a chapter (preceded by cheatSheet closing)
    // A chapter ends with `      ]` for cheatSheet, then `    },`
    // Let me check if the previous content has cheatSheet
    const prevBlock = lines.slice(Math.max(0, i - 6), i + 1).join('\n');
    if (prevBlock.includes('cheatSheet') || prevBlock.includes('challenge') || prevBlock.includes('Certification')) {
      chapterRanges.push({ start: currentChStart, end: i + 1 });
      chCount++;
      currentChStart = -1;
    }
  }
}

console.log(`Found ${chCount} chapter ranges`);
chapterRanges.forEach((r, idx) => {
  const chLine = lines.slice(r.start, r.start + 3).find(l => l.includes("id: 'emojis-"));
  const idMatch = chLine?.match(/id:\s*'([^']+)'/);
  console.log(`  Chapter ${idx + 1}: lines ${r.start + 1}-${r.end} [${idMatch ? idMatch[1] : 'unknown'}]`);
});

// Now rebuild the file
// Header: import + track metadata + start of chapters array
const headerEnd = lines.findIndex(l => l.trim() === 'chapters: [') + 1;
console.log(`Header ends at line ${headerEnd} (inclusive): "${lines[headerEnd - 1]?.trim()}"`);

// Check header through chapters start
const beforeChapters = lines.slice(0, headerEnd);
console.log(`Before chapters: ${beforeChapters.length} lines`);
console.log(`Last header line: ${beforeChapters[beforeChapters.length - 1].trim()}`);

// Footer: closing `];`, `};` after chapters
const footerStart = lines.findIndex(l => l.trim() === '];' && l.includes('  ')) + 1;
console.log(`Footer starts at line ${footerStart}: "${lines[footerStart - 1]?.trim()}"`);

// Wait, '];' can appear in multiple places (exercises, cheatSheet, etc.)
// The real footer is at the very end of the file (after all chapters)
// Let me find the last `];` that closes chapters array

let lastChapterEnd = 0;
for (const r of chapterRanges) {
  if (r.end > lastChapterEnd) lastChapterEnd = r.end;
}
console.log(`Last chapter ends at line ${lastChapterEnd}`);
console.log(`Line ${lastChapterEnd}: "${lines[lastChapterEnd - 1]?.trim()}"`);
console.log(`Line ${lastChapterEnd}: "${lines[lastChapterEnd]?.trim()}"`);
console.log(`Line ${lastChapterEnd + 1}: "${lines[lastChapterEnd + 1]?.trim()}"`);
console.log(`Line ${lastChapterEnd + 2}: "${lines[lastChapterEnd + 2]?.trim()}"`);
