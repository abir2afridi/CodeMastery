import fs from 'fs';

const content = fs.readFileSync('src/lib/curriculum/emoji-curriculum.ts', 'utf8');
const lines = content.split('\n');

// Try to build a clean file by keeping the structure but replacing
// all string values with safe alternatives

// First, let's identify if the issue is in chapters 1-36 or 37-45
// Test: take only chapters 1-36 and see if esbuild passes

// Find chapter 37 start (first chapter that uses multi-line format)
// Chapter 37 starts around line 1570
const ch37Line = lines.findIndex(l => l.includes("id: 'emojis-37'"));
console.log('Chapter 37 starts at line:', ch37Line + 1);

// Build a file with only chapters 1-36
const ch1Start = lines.findIndex(l => l.includes("id: 'emojis-1'") && l.includes('number:'));
// Find line before chapters start
const headerEnd = lines.findIndex(l => l.trim() === 'chapters: [') + 1;

// Find line of last chapter 36 content
// Find chapter 37 start in the file
// Chapter 37 has `{` on prev line and `id:` on current line
let ch37Start = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("id: 'emojis-37'")) {
    ch37Start = i;
    break;
  }
}

// Go back to find `{` that opens ch37
let braceCount = 0;
let ch37OpenBrace = ch37Start;
for (let i = ch37Start; i >= 0; i--) {
  if (lines[i].trim() === '{') {
    ch37OpenBrace = i;
    break;
  }
}

console.log('Chapter 37 open brace at line:', ch37OpenBrace + 1);

// Build file with chapters 1-36 only
const header = lines.slice(0, headerEnd);
const ch1to36 = lines.slice(headerEnd, ch37OpenBrace);
const footer = [
  '    }',  // close last chapter 36 object
  '  ];',   // close chapters array
  '};',     // close track object
];

const testFile1 = [...header, ...ch1to36, ...footer].join('\n');
fs.writeFileSync('test-ch1-36.ts', testFile1);
console.log('Written test-ch1-36.ts');

// Also build file with chapters 37-45
const ch37to45 = lines.slice(ch37OpenBrace);
// Remove the final closing of the chapters array and track
// The ch37to45 includes from ch37 start to end of file
// We need to remove: the final `];\n};` from the end and replace with our own footer
const ch37to45Content = ch37to45.join('\n');
// Find the last `];` in the content
const lastCloseIdx = ch37to45Content.lastIndexOf('];');
const ch37to45Trimmed = ch37to45Content.substring(0, lastCloseIdx);
const testFile2 = [...header, '\n' + ch37to45Trimmed + '\n', ...footer].join('\n');
// Actually, let me build this more carefully
fs.writeFileSync('test-ch37-45.ts', testFile2);
console.log('Written test-ch37-45.ts');
