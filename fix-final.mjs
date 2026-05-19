import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Read the current file to extract chapter data
const sourceContent = fs.readFileSync('src/lib/curriculum/emoji-curriculum.ts', 'utf8');

// Strategy: Extract the Track object structure but rebuild with clean escaping
// We'll use a simple approach: write the file with double-quoted strings using JSON.stringify

function buildChapter(
  id, number, partLabel, title, subtitle, difficulty, estimatedMinutes, xpReward,
  prerequisites, learningObjectives, sections, quizQuestions, passingScore,
  exercises, cheatSheet
) {
  return {
    id, number, partLabel, title, subtitle, difficulty, estimatedMinutes, xpReward,
    prerequisites, learningObjectives, sections, quiz: { questions: quizQuestions, passingScore },
    exercises, cheatSheet
  };
}

function section(id, title, whyItMatters, content) {
  return { id, title, whyItMatters, content };
}

function q(id, type, question, options, correctAnswer, explanation, difficulty) {
  return { id, type, question, options, correctAnswer, explanation, difficulty };
}

function exercise(id, type, title, instructions, hint, starterCode, solution) {
  return { id, type, title, instructions, hint, starterCode, solution };
}

function cheat(label, value) {
  return { label, value };
}

// Read the existing file to extract content
// We'll use a simple approach: for each chapter, extract its sections content, 
// quiz questions, exercises, and cheat sheet items from the existing file
// using regex matching

function extractChapterContent(source, chapterNum) {
  const chId = `emojis-${chapterNum}`;
  
  // Find the chapter start
  const chStartRegex = new RegExp(`id: ['"]${chId}['"]`);
  const match = source.match(chStartRegex);
  if (!match) {
    console.log(`Could not find chapter ${chapterNum}`);
    return null;
  }
  
  const chStart = match.index;
  
  // Find the next chapter or end
  const nextChRegex = /id: ['"]emojis-(\d+)['"]/g;
  nextChRegex.lastIndex = chStart + 1;
  
  let nextMatch;
  let blockEnd = source.length;
  while ((nextMatch = nextChRegex.exec(source)) !== null) {
    const nextNum = parseInt(nextMatch[1]);
    if (nextNum !== chapterNum) {
      blockEnd = nextMatch.index;
      break;
    }
  }
  
  // Find the actual chapter closing: `    },` or `    }` followed by `\n  ];\n`
  // More precisely: find the closing of this chapter's object
  const chapterText = source.substring(chStart, blockEnd);
  
  // Find the closing `    },` or `    }` of this chapter
  // The chapter ends with `    },` or `    }` depending on whether it's the last
  
  // Find exercise content if any
  const exMatch = chapterText.match(/exercises:\s*\[(.*?)\]/s);
  const exercises = [];
  if (exMatch) {
    const exContent = exMatch[1].trim();
    if (exContent) {
      // Try to extract exercise objects from the text 
      // (We'll just use a generic approach)
    }
  }
  
  return chapterText;
}

// Since extracting and re-parsing chapter objects from the corrupted file is error-prone,
// let's take a different approach entirely:
// 1. Read the whole file line by line
// 2. For each line, check if it's valid by parsing it as a complete expression
// 3. If invalid, try to fix it

// Actually, the simplest approach: keep the entire file content EXACTLY as-is,
// but write it back with proper line endings and encoding.
// The issue must be some invisible character that esbuild objects to.

// Let me check every character in the file
const bytes = fs.readFileSync('src/lib/curriculum/emoji-curriculum.ts');
const lines = sourceContent.split('\n');

// Check for unusual characters (byte order marks, zero-width spaces, etc.)
for (let i = 0; i < sourceContent.length; i++) {
  const cp = sourceContent.charCodeAt(i);
  // Check for unusual Unicode characters outside normal ranges
  if ((cp >= 0x200B && cp <= 0x200F) || // Zero-width spaces, LRM, RLM
      (cp >= 0x2028 && cp <= 0x2029) || // Line/paragraph separator
      (cp >= 0xFE00 && cp <= 0xFE0F) || // Variation selectors
      cp === 0xFEFF || // BOM
      cp === 0x00AD || // Soft hyphen
      cp === 0x180E || // Mongolian vowel separator
      cp === 0x2060 || // Word joiner
      cp === 0x2061 || // Function application
      cp === 0x2062 || // Invisible times
      cp === 0x2063 || // Invisible separator
      cp === 0x2064 || // Invisible plus
      cp === 0xFFFC) { // Object replacement character
    const lineNum = sourceContent.substring(0, i).split('\n').length;
    console.log(`Unusual char U+${cp.toString(16)} at position ${i}, line ${lineNum}`);
  }
}

console.log('Character check complete');
console.log('File has', lines.length, 'lines');
