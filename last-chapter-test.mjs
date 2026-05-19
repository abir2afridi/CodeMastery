import fs from 'fs';

const content = fs.readFileSync('src/lib/curriculum/emoji-curriculum.ts', 'utf8');
const lines = content.split('\n');

// Build a file with Chapter 44 only
// Chapter 44 starts around line 1870, ends with `    },` at line 1910

// Extract lines for Chapter 44 (from the `{` that starts it to its `},`)
// Find the opening `{` of ch44
let ch44Start = lines.findIndex(l => l.includes("id: 'emojis-44'"));
// Go back to find the `{` on previous line
for (let i = ch44Start; i >= 0; i--) {
  if (lines[i].trim() === '{') {
    ch44Start = i;
    break;
  }
}

// Find the end of ch44 (line with `    },` after line 1900)
let ch44End = -1;
for (let i = ch44Start + 1; i < lines.length; i++) {
  if (lines[i].trim() === '},') {
    // Check that this looks like the end of a chapter
    // A chapter ends with cheatSheet close `]` then `},`
    // The previous non-empty line should have `]`
    for (let j = i - 1; j >= 0; j--) {
      if (lines[j].trim() && !lines[j].trim().startsWith('//')) {
        if (lines[j].trim() === ']' || lines[j].trim() === '],') {
          ch44End = i;
          break;
        }
        break;
      }
    }
    if (ch44End > 0) break;
  }
}

console.log('Ch44: start line', ch44Start + 1, 'end line', ch44End + 1);

const ch44Lines = lines.slice(ch44Start, ch44End + 1);

const header = [
  "import type { Track } from './types';",
  '',
  'export const emojiTrack: Track = {',
  "  id: 'emojis',",
  "  title: 'Emoji & Unicode',",
  "  tagline: 'test',",
  "  icon: 'test',",
  "  colorVar: 'emojis',",
  "  brandColor: '#FFC107',",
  "  glowColor: 'rgba(255, 193, 7, 0.3)',",
  '  totalChapters: 1,',
  '  estimatedHours: 1,',
  '  chapters: [',
];

const footer = [
  '  ];',
  '};',
];

const testContent = [...header, ...ch44Lines, ...footer].join('\n');
fs.writeFileSync('test-ch44-only.ts', testContent);
console.log('Written test-ch44-only.ts with', testContent.split('\n').length, 'lines');
