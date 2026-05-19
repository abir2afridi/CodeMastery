import { Track } from './types';

export const emojiTrack: Track = {
  id: 'emojis',
  title: 'Emoji & Unicode',
  titleBn: 'ইমোজি ও ইউনিকোড',
  tagline: 'Master the universe of emojis, Unicode, and text encoding',
  taglineBn: 'ইমোজি, ইউনিকোড এবং টেক্সট এনকোডিং আয়ত্ত করুন',
  icon: 'https://img.icons8.com/?size=160&id=YovVPGGEVPMh&format=png',
  colorVar: 'emojis',
  brandColor: '#E91E63',
  glowColor: 'rgba(233, 30, 99, 0.3)',
  totalChapters: 45,
  estimatedHours: 38,
  chapters: [
    // ====================================================================
    // PART 1: UNICODE BASICS (Chapters 1-8)
    // ====================================================================
    {
      id: 'emojis-1', number: 1, partLabel: 'Part 1: Unicode Basics', title: 'What Is Unicode?', subtitle: 'The universal standard for text encoding', difficulty: 'Absolute Beginner', estimatedMinutes: 40, xpReward: 55, prerequisites: [],
      learningObjectives: [
        'Understand what Unicode is and why it was created',
        'Explain the role of the Unicode Consortium',
        'Distinguish between code points and planes',
        'Compare the Basic Multilingual Plane with supplementary planes'
      ],
      sections: [
        {
          id: 's1', title: 'The Universal Text Standard',
          whyItMatters: 'Unicode is the foundation of all modern text processing. Every emoji, every character, every script on your screen is made possible by this single standard.',
          content: "### What Is Unicode?\n\nUnicode is a universal character encoding standard that assigns a unique number (called a code point) to every character used in written languages worldwide. Before Unicode, different systems used incompatible encodings, causing text to display as garbled garbage when moved between platforms.\n\n### The Unicode Consortium\n\nThe Unicode Consortium is a non-profit organization that develops and maintains the Unicode Standard. Founded in 1991, it includes major technology companies like Apple, Google, Microsoft, IBM, and Oracle. The Consortium meets regularly to vote on new characters, emoji proposals, and encoding rules. The current version (Unicode 16.0 as of 2025) defines over 150,000 characters covering 168 scripts.\n\n### Why Unicode Matters\n\nWithout Unicode, you could not send an email with emoji, view a website in Japanese, or use mathematical symbols in a document."
        },
        {
          id: 's2', title: 'Code Points and Planes',
          whyItMatters: 'Understanding code points and planes is essential for grasping how Unicode organizes its vast character repertoire.',
          content: "### Code Points\n\nA code point is a unique integer assigned to each Unicode character. Code points are written in hexadecimal notation with a U+ prefix. For example: U+0041 = Latin capital letter A, U+1F600 = grinning face emoji, U+4E00 = CJK unified ideograph.\n\n### Planes\n\nUnicode is divided into 17 planes, each containing 65,536 code points:\n\n- **Plane 0 (BMP)**: U+0000 to U+FFFF. Contains most common characters.\n- **Plane 1 (SMP)**: U+10000 to U+1FFFF. Contains historic scripts and most modern emoji.\n- **Plane 2 (SIP)**: U+20000 to U+2FFFF. Contains rare CJK ideographs.\n- **Planes 14 (SSP)**: U+E0000 to U+EFFFF. Contains language tags.\n- **Planes 15-16 (PUA)**: Available for custom characters.\n\n### BMP vs SMP\n\nThe BMP covers U+0000 to U+FFFF and handles most everyday text. The SMP (U+10000 to U+1FFFF) is where most emoji live — including smileys, animals, food, and activities. Characters in the SMP require more than 16 bits to represent and are encoded using surrogate pairs in UTF-16."
        },
        {
          id: 's3', title: 'Encoding Forms',
          whyItMatters: 'Unicode defines multiple encoding forms (UTF-8, UTF-16, UTF-32) that convert code points into bytes for storage and transmission.',
          content: "### Unicode Encoding Forms\n\nUnicode code points are abstract numbers. To store or transmit them, they must be encoded as bytes. Unicode defines three encoding forms:\n\n- **UTF-8**: Variable-length (1-4 bytes). Dominant on the web. Backward compatible with ASCII.\n- **UTF-16**: Variable-length (2 or 4 bytes). Used by Windows, Java, JavaScript internally.\n- **UTF-32**: Fixed-length (4 bytes). Simple but space-inefficient.\n\n### Compatibility\n\nAll three encodings can represent every Unicode code point. The choice depends on factors like storage efficiency, processing speed, and compatibility.\n\n### The Unicode Character Database (UCD)\n\nThe UCD is a set of files that define properties for each Unicode character. These include General Category, Bidirectional Class, Combining Class, and Script."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-1-q1', type: 'mcq', question: 'What is a Unicode code point?', options: ['A unique number assigned to each character', 'A font file', 'A type of encoding algorithm', 'A keyboard shortcut'], correctAnswer: 0, explanation: 'A code point is a unique integer assigned to each character in the Unicode standard.', difficulty: 1 },
          { id: 'emojis-1-q2', type: 'mcq', question: 'How many planes does Unicode define?', options: ['8', '17', '16', '256'], correctAnswer: 1, explanation: 'Unicode defines 17 planes.', difficulty: 1 },
          { id: 'emojis-1-q3', type: 'mcq', question: 'What does BMP stand for?', options: ['Basic Multilingual Plane', 'Binary Message Protocol', 'Byte Mark Position', 'Base Mapping Plane'], correctAnswer: 0, explanation: 'BMP stands for Basic Multilingual Plane.', difficulty: 1 },
          { id: 'emojis-1-q4', type: 'true-false', question: 'Unicode can only represent characters from the English alphabet.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Unicode supports over 168 scripts.', difficulty: 1 },
          { id: 'emojis-1-q5', type: 'mcq', question: 'Which organization maintains the Unicode Standard?', options: ['W3C', 'Unicode Consortium', 'ISO', 'IEEE'], correctAnswer: 1, explanation: 'The Unicode Consortium develops and maintains the Unicode Standard.', difficulty: 1 },
          { id: 'emojis-1-q6', type: 'mcq', question: 'Most modern emoji are found in which plane?', options: ['Plane 0 (BMP)', 'Plane 1 (SMP)', 'Plane 2 (SIP)', 'Plane 14 (SSP)'], correctAnswer: 1, explanation: 'Most modern emoji are in the SMP.', difficulty: 2 },
          { id: 'emojis-1-q7', type: 'true-false', question: 'The Unicode Standard is backward compatible with ASCII.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The first 128 code points of Unicode match ASCII exactly.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-1-e1', type: 'easy', title: 'Explore Unicode Code Points', instructions: 'Open your browser console and use String.fromCodePoint() and codePointAt() to explore Unicode characters.', hint: 'Use String.fromCodePoint(0x1F600) and "A".codePointAt(0).toString(16).', starterCode: '<script>\n  // your code here\n</script>', solution: '<script>\n  console.log(String.fromCodePoint(0x1F600));\n  console.log("A".codePointAt(0).toString(16));\n</script>' },
        { id: 'emojis-1-e2', type: 'medium', title: 'Identify the Plane', instructions: 'Write a function that takes a hex code point and returns which Unicode plane it belongs to.', hint: 'Convert hex to number and check ranges.', starterCode: '<script>\n  function getPlane(hexCodePoint) {\n    // your code here\n  }\n  console.log(getPlane("1F600"));\n  console.log(getPlane("0041"));\n</script>', solution: '<script>\n  function getPlane(hexCodePoint) {\n    const cp = parseInt(hexCodePoint, 16);\n    if (cp <= 0xFFFF) return "BMP (Plane 0)";\n    if (cp <= 0x1FFFF) return "SMP (Plane 1)";\n    if (cp <= 0x2FFFF) return "SIP (Plane 2)";\n    if (cp <= 0xE0000) return "Unassigned";\n    if (cp <= 0xEFFFF) return "SSP (Plane 14)";\n    if (cp <= 0x10FFFF) return "PUA (Planes 15-16)";\n    return "Invalid";\n  }\n  console.log(getPlane("1F600"));\n  console.log(getPlane("0041"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Unicode', value: 'Universal character encoding standard' },
        { label: 'Code Point', value: 'Unique integer per character, written U+XXXX' },
        { label: 'BMP', value: 'Basic Multilingual Plane (U+0000-U+FFFF)' },
        { label: 'SMP', value: 'Supplementary Multilingual Plane (U+10000-U+1FFFF)' },
        { label: 'Unicode Consortium', value: 'Organization maintaining Unicode since 1991' }
      ]
    },
    {
      id: 'emojis-2', number: 2, partLabel: 'Part 1: Unicode Basics', title: 'Character Encoding History', subtitle: 'From telegraph codes to Unicode', difficulty: 'Absolute Beginner', estimatedMinutes: 35, xpReward: 50, prerequisites: ['emojis-1'],
      learningObjectives: [
        'Trace the evolution of character encoding from telegraph to Unicode',
        'Understand ASCII and its limitations',
        'Explain code pages and ISO standards',
        'Recognize why Unicode was necessary'
      ],
      sections: [
        {
          id: 's1', title: 'Before Unicode: Telegraph Codes and ASCII',
          whyItMatters: 'Understanding encoding history explains why Unicode was created and why legacy encodings still cause problems today.',
          content: "### Telegraph Codes (1840s-1960s)\n\nThe first character encodings were invented for telegraph systems. Morse code used patterns of dots and dashes. The Baudot code (1870s) used 5 bits per character, supporting only 32 symbols. These early systems were designed for minimal transmission.\n\n### ASCII (1963)\n\nThe American Standard Code for Information Interchange (ASCII) was developed to standardize text encoding across early computers. ASCII uses 7 bits, providing 128 code points: 0-31 are control characters, 32-47 punctuation, 48-57 digits, 65-90 uppercase A-Z, 97-122 lowercase a-z.\n\nASCII was a breakthrough because it allowed different computer systems to exchange text reliably. However, its 128-character limit could only handle unaccented English."
        },
        {
          id: 's2', title: 'Extended ASCII and Code Pages',
          whyItMatters: 'Code pages were the messy solution to represent non-English text before Unicode, and their legacy still causes mojibake today.',
          content: "### Extended ASCII (8-bit encodings)\n\nAs computers spread globally, ASCII was extended from 7 bits to 8 bits, adding 128 more characters (128-255). Different regions assigned different characters to these 128 slots, creating incompatible code pages.\n\n### Code Pages\n\nA code page maps byte values 128-255 to specific characters. Examples include Windows-1252 (Western European), ISO 8859-1 (Latin-1), Windows-1251 (Cyrillic), Shift JIS (Japanese), and Big5 (Traditional Chinese).\n\n### The Code Page Problem\n\nIf you opened a Shift JIS file on a Western European system, the text would appear as gibberish — a phenomenon called mojibake. Every document had to be tagged with its encoding, and conversion between code pages was lossy."
        },
        {
          id: 's3', title: 'ISO Standards and the Path to Unicode',
          whyItMatters: 'The fragmented landscape of competing standards led directly to Unicode creation as the universal solution.',
          content: "### ISO/IEC 8859 Series\n\nISO tried to create order with the ISO/IEC 8859 series: 8859-1 for Western Europe, 8859-2 for Central Europe, 8859-5 for Cyrillic, 8859-6 for Arabic, 8859-7 for Greek, and 8859-8 for Hebrew.\n\n### The Unicode Solution\n\nIn 1987, Joe Becker (Xerox), Lee Collins (Apple), and Mark Davis (Apple) began work on a universal encoding. In 1991, the Unicode Consortium published Unicode 1.0. Key innovations: a single character set covering all scripts, multiple encoding forms (UTF-8, UTF-16, UTF-32), character properties for algorithmic processing, and forward-looking design with 1.1 million possible code points."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-2-q1', type: 'mcq', question: 'How many characters does ASCII define?', options: ['128', '256', '255', '64'], correctAnswer: 0, explanation: 'ASCII uses 7 bits and defines 128 characters.', difficulty: 1 },
          { id: 'emojis-2-q2', type: 'mcq', question: 'What is a code page?', options: ['A mapping of byte values to characters for a specific region', 'A page in a programming textbook', 'A page of source code', 'A type of font file'], correctAnswer: 0, explanation: 'A code page maps byte values 128-255 to characters for specific regions.', difficulty: 1 },
          { id: 'emojis-2-q3', type: 'true-false', question: 'ASCII can represent Chinese characters.', options: ['True', 'False'], correctAnswer: 1, explanation: 'ASCII only has 128 characters, not enough for Chinese.', difficulty: 1 },
          { id: 'emojis-2-q4', type: 'mcq', question: 'What is the term for garbled text caused by wrong encoding?', options: ['Mojibake', 'Gibberish', 'Corruption', 'Encoding rot'], correctAnswer: 0, explanation: 'Mojibake is the Japanese term for garbled text from incorrect encoding.', difficulty: 2 },
          { id: 'emojis-2-q5', type: 'mcq', question: 'Who were the original creators of Unicode?', options: ['Joe Becker, Lee Collins, Mark Davis', 'Tim Berners-Lee, Vint Cerf, Bob Kahn', 'Bill Gates, Steve Jobs, Mark Zuckerberg', 'Dennis Ritchie, Ken Thompson, Brian Kernighan'], correctAnswer: 0, explanation: 'Unicode was created by Joe Becker, Lee Collins, and Mark Davis.', difficulty: 2 },
          { id: 'emojis-2-q6', type: 'true-false', question: 'ISO 8859-1 can represent both English and Arabic text.', options: ['True', 'False'], correctAnswer: 1, explanation: 'ISO 8859-1 covers Western European scripts only.', difficulty: 1 },
          { id: 'emojis-2-q7', type: 'mcq', question: 'What year was Unicode 1.0 published?', options: ['1987', '1991', '1995', '2000'], correctAnswer: 1, explanation: 'Unicode 1.0 was published in 1991.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-2-e1', type: 'easy', title: 'ASCII Table Explorer', instructions: 'Create an HTML page that displays the ASCII table (characters 32-126) in a grid format.', hint: 'Use a for loop from 32 to 126 and String.fromCharCode().', starterCode: '<table border="1"><thead><tr><th>Dec</th><th>Hex</th><th>Char</th></tr></thead><tbody id="asciiBody"></tbody></table>\n<script>\n  // your code here\n</script>', solution: '<table border="1"><thead><tr><th>Dec</th><th>Hex</th><th>Char</th></tr></thead><tbody id="asciiBody"></tbody></table>\n<script>\n  const tbody = document.getElementById("asciiBody");\n  for (let i = 32; i <= 126; i++) {\n    const tr = document.createElement("tr");\n    tr.innerHTML = `<td>${i}</td><td>${i.toString(16).toUpperCase()}</td><td>${String.fromCharCode(i)}</td>`;\n    tbody.appendChild(tr);\n  }\n</script>' }
      ],
      cheatSheet: [
        { label: 'ASCII', value: '7-bit, 128 characters (1963)' },
        { label: 'Extended ASCII', value: '8-bit, 256 characters using code pages' },
        { label: 'Code Page', value: 'Regional byte-to-character mapping' },
        { label: 'Mojibake', value: 'Garbled text from wrong encoding' },
        { label: 'ISO 8859', value: 'ISO standard for 8-bit encodings' }
      ]
    },
    {
      id: 'emojis-3', number: 3, partLabel: 'Part 1: Unicode Basics', title: 'ASCII vs Unicode', subtitle: 'Comparison, backward compatibility, and encoding differences', difficulty: 'Absolute Beginner', estimatedMinutes: 35, xpReward: 50, prerequisites: ['emojis-2'],
      learningObjectives: [
        'Compare ASCII and Unicode capabilities',
        'Explain how Unicode maintains backward compatibility with ASCII',
        'Understand the encoding size differences',
        'Recognize scenarios where each encoding is appropriate'
      ],
      sections: [
        {
          id: 's1', title: 'Comparing ASCII and Unicode',
          whyItMatters: 'Knowing the differences helps you make informed decisions about character encoding in your projects.',
          content: "### Scope and Scale\n\nASCII defines 128 characters — enough for unaccented English. Unicode defines over 150,000 characters covering 168 scripts, plus thousands of symbols, emoji, and special-purpose characters.\n\n### Character Coverage\n\n- **ASCII**: English letters (A-Z, a-z), digits (0-9), punctuation, control characters.\n- **Unicode**: Everything in ASCII plus Greek, Cyrillic, Arabic, Hebrew, Chinese, Japanese, Korean, Devanagari, Thai, emoji, mathematical symbols, musical notation, and hundreds more.\n\n### Backward Compatibility\n\nUnicode was designed to be backward compatible with ASCII. The first 128 code points (U+0000 to U+007F) are identical to ASCII. In UTF-8, any valid ASCII file is also valid UTF-8."
        },
        {
          id: 's2', title: 'When to Use ASCII vs Unicode',
          whyItMatters: 'Using the right encoding for your use case saves space, ensures compatibility, and avoids bugs.',
          content: "### When ASCII Is Sufficient\n\nASCII is only safe when your text contains only unaccented English. Examples: programming source code, internal logs, simple config files, network protocol headers.\n\n### When Unicode Is Required\n\nUnicode is necessary for non-English characters, emoji, mathematical symbols, user-generated content from a global audience, and multi-language applications.\n\n### Best Practice\n\nAlways use Unicode (UTF-8) unless you have a specific, documented reason not to."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-3-q1', type: 'mcq', question: 'How many characters does ASCII support?', options: ['128', '256', '512', '65536'], correctAnswer: 0, explanation: 'ASCII defines 128 characters.', difficulty: 1 },
          { id: 'emojis-3-q2', type: 'true-false', question: 'Every valid ASCII file is also valid UTF-8.', options: ['True', 'False'], correctAnswer: 0, explanation: 'ASCII is a subset of UTF-8.', difficulty: 1 },
          { id: 'emojis-3-q3', type: 'mcq', question: 'Which encoding is considered the modern standard for most applications?', options: ['ASCII', 'UTF-8', 'UTF-32', 'Extended ASCII'], correctAnswer: 1, explanation: 'UTF-8 is the dominant encoding on the web.', difficulty: 1 },
          { id: 'emojis-3-q4', type: 'mcq', question: 'What is the maximum bytes per character in UTF-8?', options: ['2', '3', '4', '1'], correctAnswer: 2, explanation: 'UTF-8 uses 1-4 bytes per character.', difficulty: 1 },
          { id: 'emojis-3-q5', type: 'true-false', question: 'ASCII can represent accented characters used in French and German.', options: ['True', 'False'], correctAnswer: 1, explanation: 'ASCII only covers unaccented English.', difficulty: 1 },
          { id: 'emojis-3-q6', type: 'mcq', question: 'What was a key design goal of Unicode regarding ASCII?', options: ['Backward compatibility', 'Faster processing', 'Smaller file sizes', 'Encryption support'], correctAnswer: 0, explanation: 'Unicode was designed to be backward compatible with ASCII.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-3-e1', type: 'easy', title: 'Text Encoding Detective', instructions: 'Write a function that detects if a string contains only ASCII characters.', hint: 'Check if every character has a code point less than 128.', starterCode: '<script>\n  function isAsciiOnly(str) {\n    // your code here\n  }\n  console.log(isAsciiOnly("Hello World"));\n  console.log(isAsciiOnly("Café"));\n  console.log(isAsciiOnly("Hello 👋"));\n</script>', solution: '<script>\n  function isAsciiOnly(str) {\n    for (let i = 0; i < str.length; i++) {\n      if (str.charCodeAt(i) > 127) return false;\n    }\n    return true;\n  }\n  console.log(isAsciiOnly("Hello World"));\n  console.log(isAsciiOnly("Café"));\n  console.log(isAsciiOnly("Hello 👋"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'ASCII', value: '128 chars, 7-bit, English only' },
        { label: 'Unicode', value: '150K+ chars, all scripts, emoji' },
        { label: 'UTF-8 vs ASCII', value: 'ASCII = valid UTF-8 (1 byte each)' },
        { label: 'UTF-8 Range', value: '1-4 bytes per code point' },
        { label: 'Best Practice', value: 'Use UTF-8 for all modern apps' }
      ]
    },
    {
      id: 'emojis-4', number: 4, partLabel: 'Part 1: Unicode Basics', title: 'UTF-8 Explained', subtitle: 'Encoding algorithm, byte patterns, and self-synchronization', difficulty: 'Beginner', estimatedMinutes: 45, xpReward: 65, prerequisites: ['emojis-3'],
      learningObjectives: [
        'Understand the UTF-8 encoding algorithm',
        'Recognize UTF-8 byte patterns',
        'Explain self-synchronization',
        'Identify and avoid overlong sequences'
      ],
      sections: [
        {
          id: 's1', title: 'The UTF-8 Encoding Algorithm',
          whyItMatters: 'UTF-8 is the dominant encoding on the web. Understanding how it works helps you debug encoding issues.',
          content: "### How UTF-8 Works\n\nUTF-8 is a variable-length encoding using 1 to 4 bytes per code point. Invented by Ken Thompson and Rob Pike in 1992.\n\n### The Encoding Rules\n\n**1 byte (U+0000 to U+007F)**: `0xxxxxxx` (7 bits of data) — identical to ASCII.\n\n**2 bytes (U+0080 to U+07FF)**: `110xxxxx 10xxxxxx` (11 bits of data)\n\n**3 bytes (U+0800 to U+FFFF)**: `1110xxxx 10xxxxxx 10xxxxxx` (16 bits of data)\n\n**4 bytes (U+10000 to U+10FFFF)**: `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` (21 bits of data)\n\n### Example: Encoding the Euro Sign (U+20AC)\n\nU+20AC is in the 3-byte range. The code point in binary is 0010 0000 1010 1100. Distributed across 3 bytes: 11100010 10000010 10101100 = 0xE2 0x82 0xAC."
        },
        {
          id: 's2', title: 'Byte Patterns and Self-Synchronization',
          whyItMatters: 'Self-synchronization allows UTF-8 to recover from corrupted data and makes it safe to search within byte streams.',
          content: "### Byte Pattern Summary\n\n| Range | Pattern | Meaning |\n|---|---|---|\n| 0x00-0x7F | 0xxxxxxx | Single-byte (ASCII) |\n| 0x80-0xBF | 10xxxxxx | Continuation byte |\n| 0xC0-0xDF | 110xxxxx | Start of 2-byte sequence |\n| 0xE0-0xEF | 1110xxxx | Start of 3-byte sequence |\n| 0xF0-0xF7 | 11110xxx | Start of 4-byte sequence |\n\n### Self-Synchronization\n\nUTF-8 is self-synchronizing: any byte outside 0x80-0xBF is the start of a character. You never need to scan backward to find character boundaries."
        },
        {
          id: 's3', title: 'Overlong Sequences and Security',
          whyItMatters: 'Overlong sequences are a security risk and must always be rejected by UTF-8 decoders.',
          content: "### What Are Overlong Sequences?\n\nAn overlong sequence encodes a code point using more bytes than necessary. For example, encoding ASCII '/' (U+002F) as a 2-byte sequence instead of a single byte.\n\n### Security Implications\n\nOverlong sequences can bypass security filters — a firewall might check for ASCII '/' while the application interprets an overlong encoding as '/'.\n\n### RFC 3629 Requirements\n\nUTF-8 decoders MUST reject overlong sequences. Always use a conforming UTF-8 decoder."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-4-q1', type: 'mcq', question: 'Who invented UTF-8?', options: ['Ken Thompson and Rob Pike', 'Tim Berners-Lee', 'Larry Wall', 'Guido van Rossum'], correctAnswer: 0, explanation: 'UTF-8 was invented by Ken Thompson and Rob Pike in 1992.', difficulty: 2 },
          { id: 'emojis-4-q2', type: 'mcq', question: 'How many bytes does an emoji (U+1F600) use in UTF-8?', options: ['2', '3', '4', '1'], correctAnswer: 2, explanation: 'Code points above U+FFFF require 4 bytes in UTF-8.', difficulty: 2 },
          { id: 'emojis-4-q3', type: 'true-false', question: 'UTF-8 is self-synchronizing.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Any byte outside 0x80-0xBF is a start byte.', difficulty: 2 },
          { id: 'emojis-4-q4', type: 'mcq', question: 'What is an overlong UTF-8 sequence?', options: ['A sequence using more bytes than necessary', 'A sequence that is too long for the file', 'A sequence with too many characters', 'A sequence that breaks the file system'], correctAnswer: 0, explanation: 'An overlong sequence uses more bytes than the minimum required.', difficulty: 2 },
          { id: 'emojis-4-q5', type: 'mcq', question: 'What is the maximum valid code point in Unicode?', options: ['U+FFFF', 'U+10FFFF', 'U+1FFFFF', 'U+FFFFFF'], correctAnswer: 1, explanation: 'Code points range from U+0000 to U+10FFFF.', difficulty: 2 },
          { id: 'emojis-4-q6', type: 'true-false', question: 'All UTF-8 decoders are required to reject overlong sequences.', options: ['True', 'False'], correctAnswer: 0, explanation: 'RFC 3629 mandates rejection.', difficulty: 2 },
          { id: 'emojis-4-q7', type: 'mcq', question: 'What byte value always indicates a continuation byte in UTF-8?', options: ['0x00-0x7F', '0x80-0xBF', '0xC0-0xDF', '0xE0-0xEF'], correctAnswer: 1, explanation: 'Bytes 0x80-0xBF are continuation bytes.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-4-e1', type: 'easy', title: 'UTF-8 Byte Inspector', instructions: 'Create a function that shows how a string is encoded in UTF-8.', hint: 'Use TextEncoder to get UTF-8 bytes.', starterCode: '<script>\n  function inspectUTF8(str) {\n    // your code here\n  }\n  inspectUTF8("A€😀");\n</script>', solution: '<script>\n  function inspectUTF8(str) {\n    const encoder = new TextEncoder();\n    for (const char of str) {\n      const cp = char.codePointAt(0);\n      const bytes = encoder.encode(char);\n      const hex = Array.from(bytes).map(b => "0x" + b.toString(16).toUpperCase()).join(" ");\n      console.log(`"${char}" U+${cp.toString(16).toUpperCase()} => ${hex}`);\n    }\n  }\n  inspectUTF8("A€😀");\n</script>' }
      ],
      cheatSheet: [
        { label: 'UTF-8', value: 'Variable-length (1-4 bytes), dominant web encoding' },
        { label: 'Byte Pattern', value: '0xxxxxxx (1B), 110xxxxx (2B), 1110xxxx (3B), 11110xxx (4B)' },
        { label: 'Continuation Byte', value: '10xxxxxx (0x80-0xBF)' },
        { label: 'Self-Synchronizing', value: 'Any byte outside 0x80-0xBF is a start byte' },
        { label: 'Overlong', value: 'More bytes than needed, MUST be rejected' }
      ]
    },
    {
      id: 'emojis-5', number: 5, partLabel: 'Part 1: Unicode Basics', title: 'UTF-16 and UTF-32', subtitle: 'Surrogate pairs, endianness, BOM, and comparison', difficulty: 'Beginner', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-4'],
      learningObjectives: [
        'Understand how UTF-16 uses surrogate pairs',
        'Explain endianness and byte order marks',
        'Compare UTF-8, UTF-16, and UTF-32 trade-offs',
        'Recognize when each encoding is used'
      ],
      sections: [
        {
          id: 's1', title: 'UTF-16 Encoding',
          whyItMatters: 'UTF-16 is used internally by JavaScript, Java, .NET, and Windows. Many bugs stem from misunderstanding surrogate pairs.',
          content: "### How UTF-16 Works\n\nUTF-16 encodes BMP characters (U+0000 to U+FFFF) as a single 16-bit unit. Supplementary characters (U+10000 to U+10FFFF) use a surrogate pair — two 16-bit units: a high surrogate (U+D800 to U+DBFF) and a low surrogate (U+DC00 to U+DFFF).\n\n### Surrogate Pair Algorithm\n\nTo encode: CP = CP - 0x10000. High = 0xD800 + (CP >> 10). Low = 0xDC00 + (CP & 0x3FF).\n\n### Why Surrogate Pairs Matter\n\nJavaScript's string.length counts UTF-16 code units, not code points. An emoji like 😀 (U+1F600) is 2 code units, so \"😀\".length returns 2, not 1."
        },
        {
          id: 's2', title: 'Endianness and BOM',
          whyItMatters: 'Endianness confuses developers when data moves between systems.',
          content: "### Endianness\n\nUTF-16 stores 16-bit values as two bytes. Big-endian stores MSB first (0x00 0x41). Little-endian stores LSB first (0x41 0x00). Intel/AMD are little-endian. Network protocols use big-endian.\n\n### Byte Order Mark (BOM)\n\nThe BOM is U+FEFF at the start of a text stream: UTF-16 BE = 0xFE 0xFF, UTF-16 LE = 0xFF 0xFE, UTF-8 BOM = 0xEF 0xBB 0xBF."
        },
        {
          id: 's3', title: 'Comparison and When to Use Each',
          whyItMatters: 'Choosing the right encoding affects file size, performance, and compatibility.',
          content: "### Comparison\n\n| Feature | UTF-8 | UTF-16 | UTF-32 |\n|---|---|---|---|\n| Min bytes | 1 | 2 | 4 |\n| Max bytes | 4 | 4 | 4 |\n| ASCII | 1 byte | 2 bytes | 4 bytes |\n| Emoji | 4 bytes | 4 bytes | 4 bytes |\n| Self-sync | Yes | No | No |\n\n- **UTF-8**: Web, file storage, network protocols\n- **UTF-16**: Windows internals, Java, JavaScript strings\n- **UTF-32**: Rare; some databases, ICU"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-5-q1', type: 'mcq', question: 'What is a surrogate pair in UTF-16?', options: ['Two 16-bit units encoding one character', 'Two characters sharing one code point', 'A pair of encoding schemes', 'A type of font file'], correctAnswer: 0, explanation: 'A surrogate pair uses two 16-bit units for one character.', difficulty: 2 },
          { id: 'emojis-5-q2', type: 'true-false', question: 'JavaScript string.length counts Unicode code points.', options: ['True', 'False'], correctAnswer: 1, explanation: '.length counts UTF-16 code units, not code points.', difficulty: 2 },
          { id: 'emojis-5-q3', type: 'mcq', question: 'What character is used as the BOM?', options: ['U+FEFF', 'U+FFFE', 'U+FFFF', 'U+0000'], correctAnswer: 0, explanation: 'U+FEFF is the BOM.', difficulty: 2 },
          { id: 'emojis-5-q4', type: 'mcq', question: 'Which UTF encoding uses exactly 4 bytes per character?', options: ['UTF-32', 'UTF-16', 'UTF-8', 'UTF-7'], correctAnswer: 0, explanation: 'UTF-32 uses 4 bytes per code point.', difficulty: 1 },
          { id: 'emojis-5-q5', type: 'true-false', question: 'The BOM is required for UTF-16 files.', options: ['True', 'False'], correctAnswer: 0, explanation: 'UTF-16 files should include a BOM.', difficulty: 1 },
          { id: 'emojis-5-q6', type: 'mcq', question: 'What is the byte order of Intel/AMD processors?', options: ['Little-endian', 'Big-endian', 'Mixed-endian', 'Network order'], correctAnswer: 0, explanation: 'Intel/AMD use little-endian.', difficulty: 1 },
          { id: 'emojis-5-q7', type: 'mcq', question: 'For ASCII text, which encoding is most space-efficient?', options: ['UTF-8', 'UTF-16', 'UTF-32', 'UCS-2'], correctAnswer: 0, explanation: 'UTF-8 uses 1 byte per ASCII character.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-5-e1', type: 'easy', title: 'Surrogate Pair Detection', instructions: 'Write a function that detects whether a string contains surrogate pairs.', hint: 'Use for...of to iterate by code points.', starterCode: '<script>\n  function countCodePoints(str) {\n    // your code here\n  }\n  console.log(countCodePoints("Hello"));\n  console.log(countCodePoints("😀🌍"));\n</script>', solution: '<script>\n  function countCodePoints(str) {\n    let count = 0;\n    for (const _ of str) {\n      count++;\n    }\n    return count;\n  }\n  console.log(countCodePoints("Hello"));\n  console.log(countCodePoints("😀🌍"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'UTF-16', value: '2 or 4 bytes per code point' },
        { label: 'Surrogate Pair', value: 'U+D800-U+DBFF (high) + U+DC00-U+DFFF (low)' },
        { label: 'BOM', value: 'U+FEFF at start of text stream' },
        { label: 'UTF-32', value: 'Fixed 4 bytes per code point' },
        { label: 'Endianness', value: 'BE (MSB first) vs LE (LSB first)' }
      ]
    },
    {
      id: 'emojis-6', number: 6, partLabel: 'Part 1: Unicode Basics', title: 'Code Points', subtitle: 'Notation, hex, UCD properties, and general categories', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-1'],
      learningObjectives: [
        'Read and write Unicode code point notation',
        'Understand hex representation',
        'Use Unicode Character Database properties',
        'Classify characters by general category'
      ],
      sections: [
        {
          id: 's1', title: 'Code Point Notation',
          whyItMatters: 'Code point notation is the universal language for discussing Unicode characters.',
          content: "### Standard Notation\n\nUnicode code points use hexadecimal with the prefix U+: U+0041 = A, U+1F600 = 😀, U+00E9 = é, U+4E00 = one (CJK).\n\n### Alternative Notations\n\n- **HTML**: `&#x41;` = A, `&#x1F600;` = 😀\n- **C/Java/JS string**: `\\u0041` = A, `\\u{1F600}` = 😀\n- **Python**: `\\u0041` = A, `\\U0001F600` = 😀\n- **CSS**: `\\0041` = A"
        },
        {
          id: 's2', title: 'Unicode Character Database (UCD) Properties',
          whyItMatters: 'UCD properties enable sophisticated text processing.',
          content: "### Important UCD Properties\n\n- **General Category**: Letter, Number, Punctuation, Symbol, etc.\n- **Bidirectional Class**: L, R, AL, AN, etc.\n- **Combining Class**: How characters combine\n- **Script**: Latin, Arabic, Han, etc.\n- **Age**: Which Unicode version introduced the character\n- **Block**: Contiguous range of characters\n\n### Unicode Property Escapes\n\nModern regex: `\\p{L}` (letter), `\\p{N}` (number), `\\p{Emoji}` (emoji), `\\p{Script=Latin}` (Latin script)."
        },
        {
          id: 's3', title: 'General Categories Explained',
          whyItMatters: 'General categories form the basis for text classification in every programming language.',
          content: "### Key Categories\n\n- **L**: Letters (Lu=uppercase, Ll=lowercase, Lt=titlecase, Lo=other)\n- **M**: Marks (Mn=non-spacing, Mc=spacing, Me=enclosing)\n- **N**: Numbers (Nd=decimal, Nl=letter, No=other)\n- **P**: Punctuation (Pc=connector, Pd=dash, Ps=open, Pe=close, Po=other)\n- **S**: Symbols (Sm=math, Sc=currency, Sk=modifier, So=other — most emoji are So)\n- **Z**: Separators\n- **C**: Other (Cc=control, Cf=format, Cs=surrogate, Co=private use)"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-6-q1', type: 'mcq', question: 'What prefix is used for Unicode code point notation?', options: ['U+', 'U-', 'CP_', 'UNI+'], correctAnswer: 0, explanation: 'Code points are written as U+XXXX.', difficulty: 1 },
          { id: 'emojis-6-q2', type: 'mcq', question: 'What general category do most emoji belong to?', options: ['So (Other Symbol)', 'Sm (Math Symbol)', 'Po (Other Punctuation)', 'Lo (Other Letter)'], correctAnswer: 0, explanation: 'Most emoji are So (Other Symbol).', difficulty: 2 },
          { id: 'emojis-6-q3', type: 'true-false', question: 'The UCD stands for Unicode Character Database.', options: ['True', 'False'], correctAnswer: 0, explanation: 'UCD is the Unicode Character Database.', difficulty: 1 },
          { id: 'emojis-6-q4', type: 'mcq', question: 'Which regex pattern matches any Unicode letter?', options: ['\\p{L}', '\\w', '[A-Za-z]', '\\p{Letter}'], correctAnswer: 0, explanation: '\\p{L} matches any Unicode letter.', difficulty: 2 },
          { id: 'emojis-6-q5', type: 'mcq', question: 'What is the maximum Unicode code point value?', options: ['0x10FFFF', '0xFFFF', '0xFFFFFF', '0x1FFFFF'], correctAnswer: 0, explanation: 'Maximum is U+10FFFF.', difficulty: 1 },
          { id: 'emojis-6-q6', type: 'true-false', question: 'Every Unicode character has exactly one general category.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Each code point has exactly one general category.', difficulty: 1 },
          { id: 'emojis-6-q7', type: 'mcq', question: 'Which general category represents decimal digits?', options: ['Nd', 'Nl', 'No', 'N'], correctAnswer: 0, explanation: 'Nd covers decimal digits.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-6-e1', type: 'medium', title: 'Category Classifier', instructions: 'Write a function that takes a character and returns its Unicode general category.', hint: 'Check code point ranges for common categories.', starterCode: '<script>\n  function getCategory(char) {\n    // your code here\n  }\n  console.log(getCategory("A"));\n  console.log(getCategory("3"));\n  console.log(getCategory("😀"));\n</script>', solution: '<script>\n  function getCategory(char) {\n    const cp = char.codePointAt(0);\n    if (cp >= 0x41 && cp <= 0x5A) return "Lu (Uppercase)";\n    if (cp >= 0x61 && cp <= 0x7A) return "Ll (Lowercase)";\n    if (cp >= 0x30 && cp <= 0x39) return "Nd (Decimal Number)";\n    if ((cp >= 0x1F600 && cp <= 0x1F64F) || (cp >= 0x1F300 && cp <= 0x1F5FF)) return "So (Other Symbol)";\n    return "Unknown";\n  }\n  console.log(getCategory("A"));\n  console.log(getCategory("3"));\n  console.log(getCategory("😀"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Code Point', value: 'U+XXXX hexadecimal notation' },
        { label: 'UCD', value: 'Unicode Character Database' },
        { label: 'General Category', value: 'L, N, P, S, M, Z, C groups' },
        { label: 'Emoji Category', value: 'Mostly So (Other Symbol)' },
        { label: '\\p{}', value: 'Regex Unicode property escape' }
      ]
    },
    {
      id: 'emojis-7', number: 7, partLabel: 'Part 1: Unicode Basics', title: 'Bytes and Binary', subtitle: 'Byte representation, bit patterns, and endianness', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-5'],
      learningObjectives: [
        'Understand how code points map to bytes',
        'Read and write bit patterns for UTF encodings',
        'Explain endianness at the byte level',
        'Calculate storage requirements for different encodings'
      ],
      sections: [
        {
          id: 's1', title: 'From Code Points to Bytes',
          whyItMatters: 'Understanding the byte level is essential for debugging encoding issues.',
          content: "### How Characters Become Bytes\n\nA code point is an abstract number converted to bytes via an encoding algorithm. For U+1F600 (😀):\n\n**UTF-8 (4 bytes)**: 0xF0 0x9F 0x98 0x80\n\n**UTF-16 (surrogate pair, LE)**: 0x3D 0xD8 0x00 0xDE\n\n**UTF-32 (BE)**: 0x00 0x01 0xF6 0x00\n\n### Bit Masking and Shifting\n\nEncoding algorithms use bit masking to distribute code point bits across bytes. For UTF-8 2-byte: take bits 6-10 for the first byte and bits 0-5 for the second, applying 110xxxxx and 10xxxxxx patterns."
        },
        {
          id: 's2', title: 'Endianness in Practice',
          whyItMatters: 'Endianness errors are subtle and hard to debug.',
          content: "### Big-Endian vs Little-Endian\n\nBig-endian stores the most significant byte first (network order). Little-endian stores the least significant byte first (x86/x64).\n\n### Detecting Endianness\n\nIn JavaScript: `const isLE = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;`\n\nProblems occur when a big-endian system writes a file and a little-endian system reads it without conversion."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-7-q1', type: 'mcq', question: 'How many bytes does U+1F600 take in UTF-8?', options: ['4', '3', '2', '1'], correctAnswer: 0, explanation: 'Code points above U+FFFF require 4 bytes in UTF-8.', difficulty: 2 },
          { id: 'emojis-7-q2', type: 'true-false', question: 'Little-endian stores the most significant byte first.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Big-endian stores MSB first.', difficulty: 1 },
          { id: 'emojis-7-q3', type: 'mcq', question: 'How many bits are in a UTF-8 continuation byte data portion?', options: ['6', '7', '5', '8'], correctAnswer: 0, explanation: 'Continuation bytes have pattern 10xxxxxx providing 6 bits.', difficulty: 2 },
          { id: 'emojis-7-q4', type: 'mcq', question: 'What does 0xF0 in UTF-8 indicate?', options: ['Start of a 4-byte sequence', 'Start of a 3-byte sequence', 'A continuation byte', 'A single-byte character'], correctAnswer: 0, explanation: '0xF0 (11110xxx) starts a 4-byte sequence.', difficulty: 2 },
          { id: 'emojis-7-q5', type: 'true-false', question: 'The BOM is required for UTF-8 files.', options: ['True', 'False'], correctAnswer: 1, explanation: 'The BOM is optional in UTF-8.', difficulty: 1 },
          { id: 'emojis-7-q6', type: 'mcq', question: 'Which JavaScript type is useful for inspecting byte-level data?', options: ['Uint8Array', 'Array', 'String', 'Object'], correctAnswer: 0, explanation: 'Uint8Array provides access to individual bytes.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-7-e1', type: 'medium', title: 'Byte-Level Inspector', instructions: 'Create a function that shows the UTF-8 byte breakdown of any string.', hint: 'Use TextEncoder and display each byte in binary and hex.', starterCode: '<script>\n  function byteInspector(str) {\n    // your code here\n  }\n  byteInspector("A¢😀");\n</script>', solution: '<script>\n  function byteInspector(str) {\n    const encoder = new TextEncoder();\n    for (const char of str) {\n      const cp = char.codePointAt(0);\n      const bytes = encoder.encode(char);\n      console.log(`Char: "${char}"`);\n      console.log(`  CP: U+${cp.toString(16).toUpperCase()}`);\n      bytes.forEach((b, i) => {\n        console.log(`  Byte ${i}: ${b.toString(2).padStart(8, "0")}b = 0x${b.toString(16).toUpperCase()} = ${b}`);\n      });\n    }\n  }\n  byteInspector("A¢😀");\n</script>' }
      ],
      cheatSheet: [
        { label: 'UTF-8 4-byte', value: '11110xxx 10xxxxxx 10xxxxxx 10xxxxxx' },
        { label: 'Big-Endian', value: 'MSB first (network order)' },
        { label: 'Little-Endian', value: 'LSB first (x86/x64)' },
        { label: 'BOM U+FEFF', value: '0xFE 0xFF (BE) or 0xFF 0xFE (LE)' },
        { label: 'Byte Masking', value: '0x3F (6 bits), 0x7F (7 bits), 0x1F (5 bits)' }
      ]
    },
    {
      id: 'emojis-8', number: 8, partLabel: 'Part 1: Unicode Basics', title: 'Character Rendering', subtitle: 'Rendering pipeline, font technologies, and emoji font challenges', difficulty: 'Beginner', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-1'],
      learningObjectives: [
        'Understand the text rendering pipeline',
        'Explain font technologies used for text rendering',
        'Distinguish color fonts from traditional fonts',
        'Identify challenges in emoji rendering'
      ],
      sections: [
        {
          id: 's1', title: 'The Text Rendering Pipeline',
          whyItMatters: 'Understanding how text becomes pixels helps you diagnose rendering issues.',
          content: "### From Code to Screen\n\n1. **Text Input**: String of code points\n2. **Font Selection**: Choose fonts via fallback chain\n3. **Shaping**: OpenType rules — ligatures, kerning (via HarfBuzz, DirectWrite, CoreText)\n4. **Glyph Selection**: Map code points to glyph indices\n5. **Rasterization**: Convert outlines to pixels\n6. **Compositing**: Place glyphs on the output buffer\n\n### Key Players\n\n- **OS**: DirectWrite (Windows), CoreText (macOS)\n- **Font Engine**: FreeType, Windows GDI\n- **Shaper**: HarfBuzz (industry standard)\n- **Graphics**: Skia, Cairo, Direct2D"
        },
        {
          id: 's2', title: 'Font Technologies and Color Fonts',
          whyItMatters: 'Color fonts are essential for rendering emoji.',
          content: "### Traditional Fonts\n\nTrueType/OpenType define glyph outlines as paths filled with a single color.\n\n### Color Font Technologies\n\n- **CBDT/CBLC**: Embedded PNG images (Android). Large files.\n- **COLR/CPAL**: Vector shapes with color palettes (Windows, macOS). Scalable.\n- **SVG in OpenType**: SVG graphics as glyphs.\n- **SBIX**: Embedded PNG/JPEG (Apple).\n\n### Emoji Font Files\n\n- **Apple**: Apple Color Emoji.ttc\n- **Google**: Noto Color Emoji.ttf\n- **Windows**: Segoe UI Emoji.ttf\n- **Twitter**: Twemoji (SVG)"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-8-q1', type: 'mcq', question: 'What is the first stage of the text rendering pipeline?', options: ['Text Input', 'Font Selection', 'Shaping', 'Rasterization'], correctAnswer: 0, explanation: 'The pipeline starts with text input.', difficulty: 2 },
          { id: 'emojis-8-q2', type: 'mcq', question: 'Which color font uses vector shapes with palettes?', options: ['COLR/CPAL', 'CBDT/CBLC', 'SBIX', 'SVG in OpenType'], correctAnswer: 0, explanation: 'COLR/CPAL uses vector shapes and is scalable.', difficulty: 2 },
          { id: 'emojis-8-q3', type: 'true-false', question: 'Traditional TrueType fonts support multiple colors per glyph.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Traditional fonts only support a single fill color.', difficulty: 1 },
          { id: 'emojis-8-q4', type: 'mcq', question: 'Which library is the industry standard for text shaping?', options: ['HarfBuzz', 'FreeType', 'Skia', 'OpenGL'], correctAnswer: 0, explanation: 'HarfBuzz is used by Chrome, Firefox, Android.', difficulty: 2 },
          { id: 'emojis-8-q5', type: 'mcq', question: 'Which platform uses SBIX for emoji?', options: ['Apple', 'Windows', 'Android', 'Linux'], correctAnswer: 0, explanation: 'Apple uses SBIX for emoji rendering.', difficulty: 2 },
          { id: 'emojis-8-q6', type: 'true-false', question: 'All color font technologies are equally supported across platforms.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Support varies by platform.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-8-e1', type: 'easy', title: 'System Font Inspector', instructions: 'Create an HTML page that lists available emoji fonts and displays sample emoji.', hint: 'Use document.fonts.load() to detect font availability.', starterCode: '<div id="output"></div>\n<script>\n  // your code here\n</script>', solution: '<div id="output"></div>\n<script>\n  const fonts = ["Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"];\n  const output = document.getElementById("output");\n  const testEmoji = "😀🎉🚀";\n  async function checkFonts() {\n    for (const font of fonts) {\n      try {\n        await document.fonts.load(`48px "${font}"`);\n        const div = document.createElement("div");\n        div.style.fontFamily = `"${font}", sans-serif`;\n        div.style.fontSize = "32px";\n        div.textContent = `${font}: ${testEmoji}`;\n        output.appendChild(div);\n      } catch {}\n    }\n  }\n  checkFonts();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Rendering Pipeline', value: 'Input -> Shaping -> Glyphs -> Raster -> Composite' },
        { label: 'COLR/CPAL', value: 'Vector color font (scalable)' },
        { label: 'CBDT/CBLC', value: 'Bitmap color font (PNG embedded)' },
        { label: 'HarfBuzz', value: 'Industry-standard text shaper' },
        { label: 'Color Font', value: 'Font with embedded color info for emoji' }
      ]
    },
    // ====================================================================
    // PART 2: EMOJI FUNDAMENTALS (Chapters 9-18)
    // ====================================================================
    {
      id: 'emojis-9', number: 9, partLabel: 'Part 2: Emoji Fundamentals', title: 'What Are Emojis?', subtitle: 'Definitions, emoticons vs stickers, encoding, and categories', difficulty: 'Absolute Beginner', estimatedMinutes: 35, xpReward: 50, prerequisites: ['emojis-1'],
      learningObjectives: [
        'Define what emoji are and how they differ from emoticons',
        'Understand how emoji are encoded in Unicode',
        'Identify the main emoji categories',
        'Recognize the difference between emoji and stickers'
      ],
      sections: [
        {
          id: 's1', title: 'Emojis Defined',
          whyItMatters: 'Understanding what emoji are is the foundation for working with them correctly.',
          content: "### What Are Emojis?\n\nThe word emoji comes from Japanese: e (picture) + moji (character). Emoji are pictographs — small digital images or icons used to express ideas, emotions, and concepts in electronic communication.\n\n### Emoticons vs Emoji vs Stickers\n\n**Emoticons (1982)**: Text-based facial expressions like :-) or ;-). These are not Unicode characters.\n\n**Emoji (1999)**: Unicode-encoded pictographs like 😀 or 🎉. These are real characters with assigned code points.\n\n**Stickers (2010s)**: Large illustrated images in messaging apps. Not standardized — each platform creates its own."
        },
        {
          id: 's2', title: 'Emoji Encoding Basics',
          whyItMatters: 'Emoji are text characters, not images. They are encoded like any other Unicode character.',
          content: "### How Emoji Are Encoded\n\nEmoji are assigned Unicode code points: U+1F600 (😀), U+2764 (❤), U+1F389 (🎉).\n\n### Text vs Emoji Presentation\n\nVariation selectors control presentation: U+FE0E (VS-15) for text, U+FE0F (VS-16) for emoji. For example, U+2764 can appear as ❤ (text) or ❤️ (emoji).\n\n### Emoji Composition\n\nModern emoji can be complex: single code point, with variation selector, with skin tone, ZWJ sequences (👨‍👩‍👧), or flag sequences (🇯🇵)."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-9-q1', type: 'mcq', question: 'What does the word emoji literally mean in Japanese?', options: ['Picture character', 'Emotion icon', 'Happy face', 'Digital sticker'], correctAnswer: 0, explanation: 'E means picture, moji means character.', difficulty: 1 },
          { id: 'emojis-9-q2', type: 'true-false', question: 'Emoticons and emoji are the same thing.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoticons are text-based, emoji are Unicode-encoded.', difficulty: 1 },
          { id: 'emojis-9-q3', type: 'mcq', question: 'Which Unicode character controls emoji presentation?', options: ['U+FE0F (VS-16)', 'U+FE0E (VS-15)', 'U+200D (ZWJ)', 'U+200C (ZWNJ)'], correctAnswer: 0, explanation: 'U+FE0F requests emoji presentation.', difficulty: 2 },
          { id: 'emojis-9-q4', type: 'mcq', question: 'What is the difference between emoji and stickers?', options: ['Emoji are encoded text, stickers are images', 'Stickers are Unicode-encoded', 'Emoji are larger images', 'There is no difference'], correctAnswer: 0, explanation: 'Emoji are Unicode characters, stickers are platform-specific images.', difficulty: 1 },
          { id: 'emojis-9-q5', type: 'true-false', question: 'Emoji can only be represented as single Unicode code points.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Many emoji use ZWJ sequences, skin tones, and flags.', difficulty: 2 },
          { id: 'emojis-9-q6', type: 'mcq', question: 'When were the first emoji created?', options: ['1999', '1982', '2005', '2010'], correctAnswer: 0, explanation: 'Shigetaka Kurita created the first 176 emoji in 1999.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-9-e1', type: 'easy', title: 'Emoji vs Emoticon Detector', instructions: 'Write a function that detects if text contains emoji or emoticons.', hint: 'Use regex for emoticons and code point ranges for emoji.', starterCode: '<script>\n  function detectType(str) {\n    // your code here\n  }\n  console.log(detectType("Hello :)"));\n  console.log(detectType("Hello 😀"));\n</script>', solution: '<script>\n  function detectType(str) {\n    if (/[:;][-o]?[)D(|\\\\Pp@]/.test(str)) return "Emoticon";\n    for (const char of str) {\n      const cp = char.codePointAt(0);\n      if (cp >= 0x1F000 && cp <= 0x1FFFF) return "Emoji";\n    }\n    return "Plain text";\n  }\n  console.log(detectType("Hello :)"));\n  console.log(detectType("Hello 😀"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Emoji', value: 'Unicode-encoded pictograph (e.g., 😀)' },
        { label: 'Emoticon', value: 'Text-based expression (e.g., :-))' },
        { label: 'Sticker', value: 'Platform-specific image, not text' },
        { label: 'VS-16', value: 'U+FE0F forces emoji style' },
        { label: 'VS-15', value: 'U+FE0E forces text style' }
      ]
    },
    {
      id: 'emojis-10', number: 10, partLabel: 'Part 2: Emoji Fundamentals', title: 'Emoji History', subtitle: 'Kurita, DoCoMo, Unicode standardization, and the proposal process', difficulty: 'Absolute Beginner', estimatedMinutes: 30, xpReward: 45, prerequisites: ['emojis-9'],
      learningObjectives: [
        'Trace the history of emoji from 1999 to today',
        'Understand Shigetaka Kurita contributions',
        'Explain how emoji become standardized through proposals',
        'Describe the rapid expansion of the emoji set'
      ],
      sections: [
        {
          id: 's1', title: 'The Birth of Emoji',
          whyItMatters: 'History gives context for modern emoji design and compatibility issues.',
          content: "### 1999: The First Emoji\n\nShigetaka Kurita created the first 176 emoji for NTT DoCoMo i-mode. They were 12x12 pixels and included weather symbols, emotions, and everyday objects.\n\n### 2000-2007: Japanese Carriers\n\nKDDI and SoftBank created their own emoji sets with proprietary encoding. A heart from DoCoMo appeared blank on SoftBank.\n\n### 2010: Unicode Standardization\n\nUnicode 6.0 included 722 emoji based on Japanese carrier sets, making emoji universal and portable."
        },
        {
          id: 's2', title: 'The Emoji Proposal Process',
          whyItMatters: 'Anyone can propose a new emoji. Understanding the process helps you know how new emoji get added.',
          content: "### How Emoji Are Proposed\n\nThe Unicode Emoji Subcommittee reviews proposals requiring: expected usage level, multiple usages, image distinctiveness, completeness, and compatibility.\n\n### The Review Process\n\nProposals are submitted, evaluated, revised if needed, approved for future Unicode versions, designed by font vendors, and released. The process takes 12-24 months.\n\n### Timeline\n\nUnicode 6.0 (2010): 722 emoji. 8.0 (2015): skin tones. 9.0 (2016): ZWJ sequences. 10.0-16.0: hundreds more added."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-10-q1', type: 'mcq', question: 'Who created the first emoji?', options: ['Shigetaka Kurita', 'Steve Jobs', 'Mark Davis', 'Larry Page'], correctAnswer: 0, explanation: 'Kurita designed the first 176 emoji in 1999.', difficulty: 1 },
          { id: 'emojis-10-q2', type: 'mcq', question: 'Which Unicode version standardized emoji?', options: ['6.0', '4.0', '8.0', '5.0'], correctAnswer: 0, explanation: 'Unicode 6.0 included 722 emoji.', difficulty: 2 },
          { id: 'emojis-10-q3', type: 'true-false', question: 'Before Unicode standardization, emoji worked across all Japanese carriers.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Each carrier used proprietary encoding.', difficulty: 1 },
          { id: 'emojis-10-q4', type: 'mcq', question: 'How long does the emoji proposal process take?', options: ['12-24 months', '1-2 months', '3-5 years', '24-48 hours'], correctAnswer: 0, explanation: 'The process takes 12-24 months.', difficulty: 2 },
          { id: 'emojis-10-q5', type: 'true-false', question: 'The first emoji set was 12x12 pixels.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The original emoji were 12x12 pixels.', difficulty: 2 },
          { id: 'emojis-10-q6', type: 'mcq', question: 'Which Unicode version introduced skin tone modifiers?', options: ['8.0', '6.0', '10.0', '12.0'], correctAnswer: 0, explanation: 'Unicode 8.0 added skin tone modifiers.', difficulty: 2 },
          { id: 'emojis-10-q7', type: 'mcq', question: 'How many emoji were in Unicode 6.0?', options: ['722', '176', '1500', '300'], correctAnswer: 0, explanation: 'Unicode 6.0 included 722 emoji.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-10-e1', type: 'easy', title: 'Emoji Timeline', instructions: 'Create a timeline showing major milestones in emoji history.', hint: 'Create milestone objects and render as styled list.', starterCode: '<style>.m{ margin:10px 0; padding:10px; border-left:3px solid #E91E63; }.y{ font-weight:bold; color:#E91E63; }</style>\n<div id="t"></div>\n<script>\n  const milestones = [\n    { year: 1999, text: "First 176 emoji by Kurita for NTT DoCoMo" },\n    { year: 2010, text: "Unicode 6.0 standardizes 722 emoji" },\n    { year: 2015, text: "Unicode 8.0 adds skin tones" },\n    { year: 2016, text: "Unicode 9.0 adds ZWJ sequences" }\n  ];\n  // your code here\n</script>', solution: '<style>.m{ margin:10px 0; padding:10px; border-left:3px solid #E91E63; }.y{ font-weight:bold; color:#E91E63; }</style>\n<div id="t"></div>\n<script>\n  const milestones = [\n    { year: 1999, text: "First 176 emoji by Kurita for NTT DoCoMo" },\n    { year: 2010, text: "Unicode 6.0 standardizes 722 emoji" },\n    { year: 2015, text: "Unicode 8.0 adds skin tones" },\n    { year: 2016, text: "Unicode 9.0 adds ZWJ sequences" }\n  ];\n  const t = document.getElementById("t");\n  milestones.forEach(m => {\n    const div = document.createElement("div");\n    div.className = "m";\n    div.innerHTML = `<span class="y">${m.year}</span>: ${m.text}`;\n    t.appendChild(div);\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Shigetaka Kurita', value: 'Created first emoji set (1999)' },
        { label: 'Unicode 6.0', value: 'Standardized 722 emoji (2010)' },
        { label: 'Unicode 8.0', value: 'Skin tone modifiers (2015)' },
        { label: 'Unicode 9.0', value: 'ZWJ sequences (2016)' },
        { label: 'Proposal Process', value: '12-24 months' }
      ]
    },
    {
      id: 'emojis-11', number: 11, partLabel: 'Part 2: Emoji Fundamentals', title: 'Emoji Categories', subtitle: 'Taxonomy, Unicode categories, and subcategories', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 50, prerequisites: ['emojis-9'],
      learningObjectives: [
        'Understand the emoji category system',
        'Navigate the Unicode emoji taxonomy',
        'Identify subcategories within each main category',
        'Use emoji categories for searching and filtering'
      ],
      sections: [
        {
          id: 's1', title: 'The Emoji Taxonomy',
          whyItMatters: 'Emoji categories help users find the right emoji. Understanding them helps build better emoji pickers.',
          content: "### Unicode Emoji Categories\n\nUnicode defines 10 main categories: Smileys and People, Animals and Nature, Food and Drink, Travel and Places, Activities, Objects, Symbols, Flags, Smileys (subcategory), and Components.\n\n### Subcategories\n\nSmileys includes: face smiling, face affection, face tongue, face hand, face neutral skeptical, face sleep, face unwell, face hat, face glasses, face medical mask, and emotion."
        },
        {
          id: 's2', title: 'Using Emoji Categories in Practice',
          whyItMatters: 'Category knowledge is essential for building emoji pickers and implementing search.',
          content: "### CLDR Short Names\n\nEach emoji has a CLDR short name used for search: U+1F600 is grinning face, U+1F389 is party popper. These are locale-specific.\n\n### Emoji Frequency\n\nSmileys account for over 50% of usage, followed by hearts, food, animals, and travel. This knowledge helps optimize picker layouts."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-11-q1', type: 'mcq', question: 'How many main emoji categories does Unicode define?', options: ['10', '5', '8', '12'], correctAnswer: 0, explanation: 'Unicode defines 10 main emoji categories.', difficulty: 1 },
          { id: 'emojis-11-q2', type: 'true-false', question: 'CLDR provides locale-specific short names for emoji.', options: ['True', 'False'], correctAnswer: 0, explanation: 'CLDR provides translated short names.', difficulty: 2 },
          { id: 'emojis-11-q3', type: 'mcq', question: 'Which emoji category accounts for over 50% of usage?', options: ['Smileys and People', 'Food and Drink', 'Animals and Nature', 'Travel and Places'], correctAnswer: 0, explanation: 'Smileys account for over half of all emoji usage.', difficulty: 1 },
          { id: 'emojis-11-q4', type: 'mcq', question: 'Which is NOT a Unicode emoji main category?', options: ['Weather', 'Smileys and People', 'Objects', 'Symbols'], correctAnswer: 0, explanation: 'Weather is a subcategory, not main.', difficulty: 2 },
          { id: 'emojis-11-q5', type: 'true-false', question: 'Emoji categories are defined by the Unicode Emoji Subcommittee.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The Emoji Subcommittee defines categories.', difficulty: 1 },
          { id: 'emojis-11-q6', type: 'mcq', question: 'What does CLDR stand for?', options: ['Common Locale Data Repository', 'Character Language Data Registry', 'Centralized Language Data Resource', 'Common Linguistic Database Reference'], correctAnswer: 0, explanation: 'CLDR is the Common Locale Data Repository.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-11-e1', type: 'medium', title: 'Emoji Category Explorer', instructions: 'Build a category browser displaying all main categories with sample emoji.', hint: 'Create a data structure mapping category names to emoji arrays.', starterCode: '<style>.c{margin:20px 0}.ct{font-weight:bold}.eg{display:flex;gap:5px;flex-wrap:wrap;font-size:32px}</style>\n<div id="ex"></div>\n<script>\n  const cats = {\n    "Smileys": ["😀","😂","🥹"],\n    "Animals": ["🐶","🐱","🐼"],\n    "Food": ["🍎","🍕","🍔"],\n    "Travel": ["🚗","✈️","🚀"]\n  };\n  // your code here\n</script>', solution: '<style>.c{margin:20px 0}.ct{font-weight:bold;color:#E91E63}.eg{display:flex;gap:10px;flex-wrap:wrap;font-size:36px}</style>\n<div id="ex"></div>\n<script>\n  const cats = {\n    "Smileys": ["😀","😂","🥹"],\n    "Animals": ["🐶","🐱","🐼"],\n    "Food": ["🍎","🍕","🍔"],\n    "Travel": ["🚗","✈️","🚀"]\n  };\n  const ex = document.getElementById("ex");\n  for (const [name, emojis] of Object.entries(cats)) {\n    const div = document.createElement("div");\n    div.className = "c";\n    div.innerHTML = `<div class="ct">${name}</div><div class="eg">${emojis.join("")}</div>`;\n    ex.appendChild(div);\n  }\n</script>' }
      ],
      cheatSheet: [
        { label: 'Main Categories', value: '10 categories including Smileys, Animals, Food, Travel' },
        { label: 'CLDR', value: 'Locale-specific emoji names for search' },
        { label: 'Most Used', value: 'Smileys and People > 50% of usage' },
        { label: 'Subcategories', value: 'Finer groupings within main categories' },
        { label: 'Emoji Picker', value: 'Categories enable navigation and filtering' }
      ]
    },
    {
      id: 'emojis-12', number: 12, partLabel: 'Part 2: Emoji Fundamentals', title: 'Emoji Encoding', subtitle: 'Code points, variation selectors, text vs emoji presentation', difficulty: 'Beginner', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-9', 'emojis-6'],
      learningObjectives: [
        'Understand how emoji code points are assigned',
        'Use variation selectors for presentation control',
        'Distinguish text presentation from emoji presentation',
        'Handle emoji encoding in JavaScript'
      ],
      sections: [
        {
          id: 's1', title: 'Emoji Code Point Ranges',
          whyItMatters: 'Emoji are scattered across multiple Unicode blocks. Knowing where they live helps with detection.',
          content: "### Major Emoji Blocks\n\n- **Miscellaneous Symbols**: U+2600-U+26FF (☀, ☎)\n- **Dingbats**: U+2700-U+27BF (✈, ✉)\n- **Misc Symbols and Pictographs**: U+1F300-U+1F5FF (🌀, 🌍)\n- **Emoticons**: U+1F600-U+1F64F (😀, 😂)\n- **Transport and Map Symbols**: U+1F680-U+1F6FF (🚀, 🚗)\n- **Supplemental Symbols**: U+1F900-U+1F9FF (🤩, 🧠)\n\n### Emoji Properties\n\nUnicode defines Emoji, Emoji_Presentation, Emoji_Modifier, Emoji_Modifier_Base, Emoji_Component, and Extended_Pictographic properties."
        },
        {
          id: 's2', title: 'Text vs Emoji Presentation',
          whyItMatters: 'Some characters can appear either way. Controlling presentation is essential for consistent rendering.',
          content: "### Default Presentation\n\nSome characters default to emoji (😀), others to text (©).\n\n### Variation Selectors\n\n- **U+FE0E (VS-15)**: Request text presentation\n- **U+FE0F (VS-16)**: Request emoji presentation\n\n### Emoji_Presentation Property\n\nCharacters with Emoji_Presentation=Yes default to emoji style. Those without need U+FE0F to appear as emoji.\n\n### In JavaScript\n\n```javascript\nconst text = \"\\u00A9\"; // © text\nconst emoji = \"\\u00A9\\uFE0F\"; // ©️ emoji\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-12-q1', type: 'mcq', question: 'Which Unicode block contains Emoticons?', options: ['U+1F600-U+1F64F', 'U+2600-U+26FF', 'U+1F300-U+1F5FF', 'U+2700-U+27BF'], correctAnswer: 0, explanation: 'Emoticons block is U+1F600-U+1F64F.', difficulty: 2 },
          { id: 'emojis-12-q2', type: 'true-false', question: 'All emoji are in a single contiguous range.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji are spread across multiple blocks.', difficulty: 1 },
          { id: 'emojis-12-q3', type: 'mcq', question: 'What does U+FE0F do?', options: ['Forces emoji presentation', 'Forces text presentation', 'Joins emoji sequences', 'Adds skin tone'], correctAnswer: 0, explanation: 'U+FE0F requests emoji presentation.', difficulty: 1 },
          { id: 'emojis-12-q4', type: 'mcq', question: 'Which character has Emoji_Presentation=Yes?', options: ['😀 (U+1F600)', '© (U+00A9)', '® (U+00AE)', '♻ (U+267B)'], correctAnswer: 0, explanation: '😀 defaults to emoji style.', difficulty: 2 },
          { id: 'emojis-12-q5', type: 'true-false', question: 'Emoji_Modifier applies to skin tone modifier characters.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Emoji_Modifier is true for U+1F3FB-U+1F3FF.', difficulty: 2 },
          { id: 'emojis-12-q6', type: 'mcq', question: 'How many skin tone modifiers are defined?', options: ['5', '6', '4', '3'], correctAnswer: 0, explanation: 'Five modifiers U+1F3FB through U+1F3FF.', difficulty: 1 },
          { id: 'emojis-12-q7', type: 'mcq', question: 'What property indicates a character accepts skin tones?', options: ['Emoji_Modifier_Base', 'Emoji_Modifier', 'Emoji_Presentation', 'Extended_Pictographic'], correctAnswer: 0, explanation: 'Emoji_Modifier_Base characters accept skin tones.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-12-e1', type: 'easy', title: 'Emoji Presentation Toggler', instructions: 'Write a function that toggles between text and emoji presentation.', hint: 'Add or remove U+FE0F or U+FE0E.', starterCode: '<script>\n  function togglePresentation(str) {\n    // your code here\n  }\n  console.log(togglePresentation("\\u00A9"));\n  console.log(togglePresentation("\\u00A9\\uFE0F"));\n</script>', solution: '<script>\n  function togglePresentation(str) {\n    if (str.endsWith("\\uFE0F")) {\n      return str.slice(0, -1) + "\\uFE0E";\n    } else if (str.endsWith("\\uFE0E")) {\n      return str.slice(0, -1);\n    } else {\n      return str + "\\uFE0F";\n    }\n  }\n  console.log(togglePresentation("\\u00A9"));\n  console.log(togglePresentation("\\u00A9\\uFE0F"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Emoji Blocks', value: 'U+1F300+, U+2600+, U+2700+, and more' },
        { label: 'VS-16 (U+FE0F)', value: 'Forces emoji presentation' },
        { label: 'VS-15 (U+FE0E)', value: 'Forces text presentation' },
        { label: 'Emoji_Presentation', value: 'Property: defaults to emoji style' },
        { label: 'Skin Tone Range', value: 'U+1F3FB to U+1F3FF (5 modifiers)' }
      ]
    },
    {
      id: 'emojis-13', number: 13, partLabel: 'Part 2: Emoji Fundamentals', title: 'Emoji Rendering Systems', subtitle: 'Platform rendering and font differences', difficulty: 'Beginner', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-8', 'emojis-12'],
      learningObjectives: [
        'Understand how different platforms render emoji',
        'Compare emoji designs across platforms',
        'Explain font fallback for emoji',
        'Handle cross-platform emoji differences'
      ],
      sections: [
        {
          id: 's1', title: 'How Platforms Render Emoji',
          whyItMatters: 'Emoji look different on every platform. These differences affect user experience.',
          content: "### Platform Emoji Fonts\n\n- **Apple**: Apple Color Emoji — glossy, rounded, polished\n- **Google**: Noto Color Emoji — blob-style, now rounded and flat\n- **Microsoft**: Segoe UI Emoji — flat, clean, monoline\n- **Samsung**: One UI Emoji — expressive, bold colors\n- **Twitter**: Twemoji — open-source SVG\n\n### Rendering Differences\n\nPlatforms differ in color palette, proportions, detail level, animation support, and ZWJ sequence rendering."
        },
        {
          id: 's2', title: 'Cross-Platform Compatibility',
          whyItMatters: 'Emoji you send may look very different to recipients on other platforms.',
          content: "### The Compatibility Challenge\n\nEmoji are interoperable at the code point level but visually platform-dependent. Famous differences include the pistol emoji (🔫 Apple renders as water gun) and the bagel emoji (🥯).\n\n### Best Practices\n\nNever assume emoji look the same everywhere. Test emoji rendering if central to your app. For brand-critical use, consider replacing emoji with images using Twemoji.\n\n### Emoji Styling on the Web\n\nCSS font-family cannot reliably override system emoji fonts. Most browsers prioritize system emoji regardless of CSS."
        }
      ],
      quiz: [
        { id: 'emojis-13-q1', type: 'mcq', question: 'Which company uses Noto Color Emoji?', options: ['Google', 'Apple', 'Microsoft', 'Samsung'], correctAnswer: 0, explanation: 'Google emoji font is Noto Color Emoji.', difficulty: 1 },
        { id: 'emojis-13-q2', type: 'true-false', question: 'Emoji look identical on all platforms because they use the same code points.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Design differs by platform.', difficulty: 1 },
        { id: 'emojis-13-q3', type: 'mcq', question: 'Which open-source emoji set does Twitter use?', options: ['Twemoji', 'Noto Emoji', 'EmojiOne', 'OpenMoji'], correctAnswer: 0, explanation: 'Twitter uses Twemoji.', difficulty: 1 },
        { id: 'emojis-13-q4', type: 'mcq', question: 'How does Apple render the pistol emoji (U+1F52B)?', options: ['As a water gun', 'As a pistol', 'As a laser gun', 'As a toy gun'], correctAnswer: 0, explanation: 'Apple renders it as a water gun.', difficulty: 2 },
        { id: 'emojis-13-q5', type: 'true-false', question: 'CSS font-family can reliably override emoji rendering.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Browsers prioritize system emoji fonts.', difficulty: 2 },
        { id: 'emojis-13-q6', type: 'mcq', question: 'Which library replaces emoji with images for consistent rendering?', options: ['Twemoji', 'jQuery', 'Bootstrap', 'React'], correctAnswer: 0, explanation: 'Twemoji converts emoji to SVG/PNG images.', difficulty: 1 }
      ],
      exercises: [
        { id: 'emojis-13-e1', type: 'easy', title: 'Emoji Platform Comparison', instructions: 'Create a page showing emoji rendered by your system font.', hint: 'Use a table with emoji characters.', starterCode: '<table border="1"><tr><th>Emoji</th><th>Code</th><th>Name</th></tr></table>\n<script>\n  const data = [["😀","U+1F600","Grinning"],["😂","U+1F602","Tears of Joy"],["❤️","U+2764","Heart"],["🎉","U+1F389","Party"]];\n  // your code here\n</script>', solution: '<table border="1"><tr><th>Emoji</th><th>Code</th><th>Name</th></tr></table>\n<script>\n  const data = [["😀","U+1F600","Grinning"],["😂","U+1F602","Tears of Joy"],["❤️","U+2764","Heart"],["🎉","U+1F389","Party"]];\n  const t = document.querySelector("table");\n  data.forEach(r => {\n    const tr = document.createElement("tr");\n    tr.innerHTML = `<td style="font-size:32px">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td>`;\n    t.appendChild(tr);\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Apple', value: 'Apple Color Emoji (glossy, round)' },
        { label: 'Google', value: 'Noto Color Emoji (friendly, flat)' },
        { label: 'Microsoft', value: 'Segoe UI Emoji (flat, clean)' },
        { label: 'Twitter', value: 'Twemoji (open-source SVG)' },
        { label: 'Twemoji Library', value: 'Consistent emoji via image replacement' }
      ]
    },
    {
      id: 'emojis-14', number: 14, partLabel: 'Part 2: Emoji Fundamentals', title: 'Skin Tone Modifiers', subtitle: 'Fitzpatrick scale, modifier system, and combination rules', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-12'],
      learningObjectives: [
        'Understand the Fitzpatrick scale for skin tones',
        'Apply skin tone modifiers to compatible emoji',
        'Explain the modifier combination rules',
        'Handle skin tone variations programmatically'
      ],
      sections: [
        {
          id: 's1', title: 'The Fitzpatrick Scale',
          whyItMatters: 'Skin tone modifiers were a major step for emoji inclusivity.',
          content: "### The Fitzpatrick Scale\n\nOriginally a dermatological classification (Types I-VI), Unicode adopted it for emoji skin tones.\n\n### The Five Modifiers\n\n- U+1F3FB (Light), U+1F3FC (Medium-Light), U+1F3FD (Medium), U+1F3FE (Medium-Dark), U+1F3FF (Dark)\n\n### How They Work\n\nA modifier follows an Emoji_Modifier_Base character: 👋 + U+1F3FD = 👋🏽. Only characters with Emoji_Modifier_Base property accept modifiers."
        },
        {
          id: 's2', title: 'Combination Rules and Limitations',
          whyItMatters: 'Not all emoji can take skin tones. Knowing the rules prevents incorrect usage.',
          content: "### Rules\n\n1. Modifier must immediately follow the base character\n2. Only one modifier per base\n3. Modifiers cannot be combined\n4. Modifiers only apply to the immediately preceding base\n\n### ZWJ Sequences with Skin Tones\n\nComplex sequences like family emoji can have skin tones on each member. Default non-modified emoji display as yellow/orange (race-neutral)."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-14-q1', type: 'mcq', question: 'How many skin tone modifiers does Unicode define?', options: ['5', '6', '4', '10'], correctAnswer: 0, explanation: 'Five modifiers based on the Fitzpatrick scale.', difficulty: 1 },
          { id: 'emojis-14-q2', type: 'mcq', question: 'What range covers skin tone modifiers?', options: ['U+1F3FB-U+1F3FF', 'U+1F3F0-U+1F3F4', 'U+FE00-U+FE0F', 'U+200D-U+200F'], correctAnswer: 0, explanation: 'U+1F3FB through U+1F3FF.', difficulty: 2 },
          { id: 'emojis-14-q3', type: 'true-false', question: 'All emoji accept skin tone modifiers.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Only Emoji_Modifier_Base characters.', difficulty: 1 },
          { id: 'emojis-14-q4', type: 'mcq', question: 'What color do emoji display as without a skin tone modifier?', options: ['Default yellow/orange', 'White', 'Transparent', 'Gray'], correctAnswer: 0, explanation: 'Default is yellow/orange (race-neutral).', difficulty: 1 },
          { id: 'emojis-14-q5', type: 'true-false', question: 'Skin tone modifiers were introduced in Unicode 8.0.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Unicode 8.0 (2015) introduced skin tones.', difficulty: 2 },
          { id: 'emojis-14-q6', type: 'mcq', question: 'What property identifies emoji that accept skin tones?', options: ['Emoji_Modifier_Base', 'Emoji_Modifier', 'Emoji_Presentation', 'Extended_Pictographic'], correctAnswer: 0, explanation: 'Emoji_Modifier_Base characters accept modifiers.', difficulty: 2 },
          { id: 'emojis-14-q7', type: 'mcq', question: 'What is the Fitzpatrick scale originally used for?', options: ['Classifying human skin color', 'Measuring temperature', 'Rating sun intensity', 'Classifying eye color'], correctAnswer: 0, explanation: 'It classifies human skin color Types I-VI.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-14-e1', type: 'medium', title: 'Skin Tone Modifier Applier', instructions: 'Write a function that applies a skin tone modifier to compatible emoji.', hint: 'Check if the character is Emoji_Modifier_Base using code point ranges.', starterCode: '<script>\n  function applySkinTone(emoji, level) {\n    // your code here\n  }\n  console.log(applySkinTone("👋", 3));\n  console.log(applySkinTone("👍", 5));\n  console.log(applySkinTone("😀", 2));\n</script>', solution: '<script>\n  const modifiers = ["\\u{1F3FB}","\\u{1F3FC}","\\u{1F3FD}","\\u{1F3FE}","\\u{1F3FF}"];\n  function isBase(char) {\n    const cp = char.codePointAt(0);\n    return (cp >= 0x1F44B && cp <= 0x1F450) ||\n           (cp >= 0x1F64B && cp <= 0x1F64F) ||\n           (cp >= 0x1F9D1 && cp <= 0x1F9DD);\n  }\n  function applySkinTone(emoji, level) {\n    if (level < 1 || level > 5) return emoji;\n    if (!isBase(emoji)) return emoji;\n    return emoji + modifiers[level - 1];\n  }\n  console.log(applySkinTone("👋", 3));\n  console.log(applySkinTone("👍", 5));\n  console.log(applySkinTone("😀", 2));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Skin Tone Modifiers', value: 'U+1F3FB (light) to U+1F3FF (dark)' },
        { label: 'Fitzpatrick Scale', value: 'Types I-VI for skin classification' },
        { label: 'Modifier Base', value: 'Emoji_Modifier_Base characters' },
        { label: 'Default Color', value: 'Yellow/orange (race-neutral)' },
        { label: 'Unicode Version', value: 'Introduced in Unicode 8.0 (2015)' }
      ]
    },
    {
      id: 'emojis-15', number: 15, partLabel: 'Part 2: Emoji Fundamentals', title: 'Gender Variations', subtitle: 'ZWJ gender sequences, person emoji, and representation', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-14'],
      learningObjectives: [
        'Understand how gender is represented in emoji',
        'Use ZWJ sequences for gender variations',
        'Recognize the person emoji system',
        'Implement gender-inclusive emoji practices'
      ],
      sections: [
        {
          id: 's1', title: 'Gender in Emoji',
          whyItMatters: 'Gender representation in emoji affects how people see themselves in digital communication.',
          content: "### The Gender Problem\n\nBefore Unicode 8.0, profession emoji used gendered defaults — police officer 👮 was always male. This excluded non-binary people.\n\n### The Person Emoji Solution\n\nUnicode introduced gender-neutral base character U+1F9D1 (🧑). Profession emoji now use ZWJ sequences:\n- 🧑‍⚕️ (health worker, neutral)\n- 👨‍⚕️ (man health worker)\n- 👩‍⚕️ (woman health worker)"
        },
        {
          id: 's2', title: 'Common Gender Sequences',
          whyItMatters: 'Practical knowledge enables proper rendering and selection in user interfaces.',
          content: "### Key Sequences\n\n| Role | Neutral | Man | Woman |\n|---|---|---|---|\n| Health | 🧑‍⚕️ | 👨‍⚕️ | 👩‍⚕️ |\n| Student | 🧑‍🎓 | 👨‍🎓 | 👩‍🎓 |\n| Teacher | 🧑‍🏫 | 👨‍🏫 | 👩‍🏫 |\n| Judge | 🧑‍⚖️ | 👨‍⚖️ | 👩‍⚖️ |\n| Pilot | 🧑‍✈️ | 👨‍✈️ | 👩‍✈️ |\n\n### Inclusivity\n\nAlways offer the gender-neutral option as the default. Allow users to choose their preferred representation."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-15-q1', type: 'mcq', question: 'What Unicode character is the gender-neutral person base?', options: ['U+1F9D1 (🧑)', 'U+1F468 (👨)', 'U+1F469 (👩)', 'U+1F600 (😀)'], correctAnswer: 0, explanation: 'U+1F9D1 is the gender-neutral adult.', difficulty: 2 },
          { id: 'emojis-15-q2', type: 'true-false', question: 'All profession emoji now support gender-neutral variants.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Most profession emoji have neutral, man, and woman variants.', difficulty: 1 },
          { id: 'emojis-15-q3', type: 'mcq', question: 'What character joins person and profession in gender sequences?', options: ['U+200D (ZWJ)', 'U+FE0F (VS-16)', 'U+200C (ZWNJ)', 'U+2060 (WJ)'], correctAnswer: 0, explanation: 'ZWJ (Zero Width Joiner) combines person and profession.', difficulty: 2 },
          { id: 'emojis-15-q4', type: 'true-false', question: 'Gender-neutral person emoji were introduced in Unicode 6.0.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Gender-neutral person (🧑) came in Unicode 9.0/10.0.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-15-e1', type: 'medium', title: 'Gender Sequence Builder', instructions: 'Build an interactive tool that lets users select a profession and gender and displays the resulting emoji.', hint: 'Combine person emoji + ZWJ + profession symbol.', starterCode: '<select id="role"><option>health</option><option>student</option><option>teacher</option></select>\n<select id="gender"><option>neutral</option><option>man</option><option>woman</option></select>\n<div id="result" style="font-size:64px;margin-top:20px"></div>\n<script>\n  const map = {\n    health: { man: "👨‍⚕️", woman: "👩‍⚕️", neutral: "🧑‍⚕️" },\n    student: { man: "👨‍🎓", woman: "👩‍🎓", neutral: "🧑‍🎓" },\n    teacher: { man: "👨‍🏫", woman: "👩‍🏫", neutral: "🧑‍🏫" }\n  };\n  // your code here\n</script>', solution: '<select id="role"><option>health</option><option>student</option><option>teacher</option></select>\n<select id="gender"><option>neutral</option><option>man</option><option>woman</option></select>\n<div id="result" style="font-size:64px;margin-top:20px"></div>\n<script>\n  const map = {\n    health: { man: "👨‍⚕️", woman: "👩‍⚕️", neutral: "🧑‍⚕️" },\n    student: { man: "👨‍🎓", woman: "👩‍🎓", neutral: "🧑‍🎓" },\n    teacher: { man: "👨‍🏫", woman: "👩‍🏫", neutral: "🧑‍🏫" }\n  };\n  function update() {\n    const role = document.getElementById("role").value;\n    const gender = document.getElementById("gender").value;\n    document.getElementById("result").textContent = map[role][gender];\n  }\n  document.getElementById("role").onchange = update;\n  document.getElementById("gender").onchange = update;\n  update();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Gender-Neutral', value: 'U+1F9D1 (🧑) person base' },
        { label: 'Man', value: 'U+1F468 (👨)' },
        { label: 'Woman', value: 'U+1F469 (👩)' },
        { label: 'ZWJ Pattern', value: 'Person + ZWJ + Profession Symbol' },
        { label: 'Inclusivity', value: 'Offer neutral option as default' }
      ]
    },
    {
      id: 'emojis-16', number: 16, partLabel: 'Part 2: Emoji Fundamentals', title: 'ZWJ Sequences', subtitle: 'Zero Width Joiner, compound emoji, family sequences, profession sequences', difficulty: 'Intermediate', estimatedMinutes: 45, xpReward: 70, prerequisites: ['emojis-15'],
      learningObjectives: [
        'Understand how the Zero Width Joiner works',
        'Construct and deconstruct ZWJ compound emoji',
        'Recognize family and profession sequences',
        'Handle ZWJ sequences in JavaScript'
      ],
      sections: [
        {
          id: 's1', title: 'The Zero Width Joiner',
          whyItMatters: 'ZWJ sequences are how modern emoji create complex compound characters from simpler parts.',
          content: "### What Is ZWJ?\n\nThe Zero Width Joiner (U+200D) is a Unicode control character that joins two or more characters into a single glyph. When a ZWJ appears between emoji, the rendering system should display them as a single combined emoji.\n\n### How ZWJ Works\n\nPattern: `BaseEmoji + ZWJ + BaseEmoji + ZWJ + BaseEmoji...`\n\nExample: 👨 + ZWJ + 🩺 = 👨‍⚕️ (man health worker)\n\n### Platform Support\n\nNot all platforms support all ZWJ sequences. Unsupported sequences should fall back to displaying the individual characters side by side."
        },
        {
          id: 's2', title: 'Common ZWJ Sequences',
          whyItMatters: 'Knowing common ZWJ patterns helps you recognize valid emoji and detect unsupported sequences.',
          content: "### Family Sequences\n\n- 👨‍👩‍👧 (man + woman + girl)\n- 👨‍👩‍👧‍👦 (man + woman + girl + boy)\n- 👨‍👨‍👧 (two men + girl)\n- 👩‍👩‍👦 (two women + boy)\n\n### Profession Sequences\n\n- 🧑‍💻 (technologist)\n- 🧑‍🎤 (singer)\n- 🧑‍🌾 (farmer)\n- 🧑‍🍳 (cook)\n- 🧑‍🏭 (factory worker)\n\n### Heart Sequences\n\n- ❤️‍🔥 (heart on fire)\n- ❤️‍🩹 (mending heart)\n- 🫶 (heart hands)"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-16-q1', type: 'mcq', question: 'What does ZWJ stand for?', options: ['Zero Width Joiner', 'Zero Width Joker', 'Zero Width Justifier', 'Zero Width Jumper'], correctAnswer: 0, explanation: 'ZWJ = Zero Width Joiner (U+200D).', difficulty: 1 },
          { id: 'emojis-16-q2', type: 'true-false', question: 'All platforms support all ZWJ sequences.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Support varies by platform and version.', difficulty: 1 },
          { id: 'emojis-16-q3', type: 'mcq', question: 'What is the code point for ZWJ?', options: ['U+200D', 'U+200C', 'U+200E', 'U+200F'], correctAnswer: 0, explanation: 'ZWJ is U+200D.', difficulty: 2 },
          { id: 'emojis-16-q4', type: 'mcq', question: 'What should happen when a ZWJ sequence is not supported?', options: ['Fall back to individual characters', 'Show a blank', 'Show an error', 'Skip the character'], correctAnswer: 0, explanation: 'Unsupported sequences display individual characters side by side.', difficulty: 2 },
          { id: 'emojis-16-q5', type: 'true-false', question: 'ZWJ sequences can combine more than two characters.', options: ['True', 'False'], correctAnswer: 0, explanation: 'ZWJ can join multiple characters in a sequence.', difficulty: 1 },
          { id: 'emojis-16-q6', type: 'mcq', question: 'Which version introduced ZWJ emoji sequences?', options: ['Unicode 9.0', 'Unicode 6.0', 'Unicode 8.0', 'Unicode 11.0'], correctAnswer: 0, explanation: 'Unicode 9.0 (2016) added ZWJ sequences.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-16-e1', type: 'hard', title: 'ZWJ Sequence Analyzer', instructions: 'Create a function that takes a string and identifies all ZWJ sequences within it, showing the component parts.', hint: 'Split on ZWJ (U+200D) and show each component.', starterCode: '<script>\n  function analyzeZWJ(str) {\n    // your code here\n  }\n  console.log(analyzeZWJ("👨‍👩‍👧"));\n  console.log(analyzeZWJ("🧑‍💻"));\n  console.log(analyzeZWJ("😀👍"));\n</script>', solution: '<script>\n  function analyzeZWJ(str) {\n    const seq = str.split("\\u200D");\n    if (seq.length > 1) {\n      return {\n        isZWJ: true,\n        parts: seq.map(c => ({ char: c, cp: "U+" + c.codePointAt(0).toString(16).toUpperCase() })),\n        totalChars: seq.length\n      };\n    }\n    return { isZWJ: false, parts: [{ char: str, cp: "U+" + str.codePointAt(0).toString(16).toUpperCase() }] };\n  }\n  console.log(analyzeZWJ("👨‍👩‍👧"));\n  console.log(analyzeZWJ("🧑‍💻"));\n  console.log(analyzeZWJ("😀👍"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'ZWJ', value: 'U+200D, joins emoji into compound glyph' },
        { label: 'Family Sequences', value: 'Person + ZWJ + Person + ZWJ + Child' },
        { label: 'Profession', value: 'Person + ZWJ + Profession Symbol' },
        { label: 'Pattern', value: 'Base + ZWJ + Base + ZWJ + ...' },
        { label: 'Fallback', value: 'Individual chars shown if unsupported' }
      ]
    },
    {
      id: 'emojis-17', number: 17, partLabel: 'Part 2: Emoji Fundamentals', title: 'Flag Emojis', subtitle: 'Regional indicators, country flags, subdivision flags, and special flags', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-12'],
      learningObjectives: [
        'Understand how flag emoji use regional indicator symbols',
        'Construct country flag sequences',
        'Identify subdivision and special flags',
        'Handle flag emoji limitations'
      ],
      sections: [
        {
          id: 's1', title: 'How Flag Emoji Work',
          whyItMatters: 'Flag emoji use a unique encoding mechanism different from other emoji.',
          content: "### Regional Indicator Symbols\n\nCountry flags are encoded as sequences of two Regional Indicator Symbols (RIS) representing the ISO 3166-1 alpha-2 country code. The 26 RIS characters are U+1F1E6 (A) through U+1F1FF (Z).\n\n### Example: Japan Flag 🇯🇵\n\nJP is the ISO code for Japan. J = U+1F1EF, P = U+1F1F5. Combined: 🇯 + 🇵 = 🇯🇵.\n\n### Supported Countries\n\nEvery ISO 3166-1 country code can form a flag emoji, but platform support varies. Not all 250+ codes render as flags on all platforms."
        },
        {
          id: 's2', title: 'Special Flags',
          whyItMatters: 'Special flags like rainbow flag and pirate flag have important cultural significance.',
          content: "### Subdivision Flags\n\nSome countries support subdivision flags using black flag (🏴 U+1F3F4) + ZWJ + tag sequence. Examples: Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿, Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿.\n\n### Special Flags\n\n- 🏳️‍🌈 (rainbow flag): White flag + ZWJ + rainbow\n- 🏳️‍⚧️ (transgender flag): White flag + ZWJ + transgender symbol\n- 🏴‍☠️ (pirate flag): Black flag + ZWJ + skull and crossbones\n- 🚩 (triangular flag on post)"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-17-q1', type: 'mcq', question: 'How are country flag emoji encoded?', options: ['Two Regional Indicator Symbols', 'Single code point per flag', 'ZWJ sequence of letters', 'SVG image in font'], correctAnswer: 0, explanation: 'Two RIS characters represent the ISO country code.', difficulty: 2 },
          { id: 'emojis-17-q2', type: 'mcq', question: 'What range covers Regional Indicator Symbols?', options: ['U+1F1E6-U+1F1FF', 'U+1F300-U+1F3FF', 'U+2600-U+26FF', 'U+1F600-U+1F6FF'], correctAnswer: 0, explanation: 'U+1F1E6 (A) through U+1F1FF (Z).', difficulty: 2 },
          { id: 'emojis-17-q3', type: 'true-false', question: 'Every ISO 3166-1 country code produces a valid flag emoji on all platforms.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Platform support varies.', difficulty: 1 },
          { id: 'emojis-17-q4', type: 'mcq', question: 'How many Regional Indicator Symbols are there?', options: ['26', '10', '52', '100'], correctAnswer: 0, explanation: 'One for each letter A-Z.', difficulty: 2 },
          { id: 'emojis-17-q5', type: 'true-false', question: 'The rainbow flag uses a ZWJ sequence.', options: ['True', 'False'], correctAnswer: 0, explanation: 'White flag + ZWJ + rainbow.', difficulty: 2 },
          { id: 'emojis-17-q6', type: 'mcq', question: 'What standard defines country codes used for flag emoji?', options: ['ISO 3166-1', 'ISO 8859-1', 'ISO 639-1', 'ISO 4217'], correctAnswer: 0, explanation: 'ISO 3166-1 defines two-letter country codes.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-17-e1', type: 'easy', title: 'Country Code to Flag', instructions: 'Write a function that converts a two-letter country code to a flag emoji.', hint: 'Add 0x1F1E6 to the letter position (0-25).', starterCode: '<script>\n  function countryToFlag(code) {\n    // your code here\n  }\n  console.log(countryToFlag("JP"));\n  console.log(countryToFlag("US"));\n  console.log(countryToFlag("GB"));\n</script>', solution: '<script>\n  function countryToFlag(code) {\n    const base = 0x1F1E6;\n    const a = code.charCodeAt(0) - 65;\n    const b = code.charCodeAt(1) - 65;\n    return String.fromCodePoint(base + a) + String.fromCodePoint(base + b);\n  }\n  console.log(countryToFlag("JP"));\n  console.log(countryToFlag("US"));\n  console.log(countryToFlag("GB"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'RIS Range', value: 'U+1F1E6-U+1F1FF (A-Z)' },
        { label: 'Flag Encoding', value: 'Two RIS = ISO country code' },
        { label: 'Rainbow Flag', value: '🏳 + ZWJ + 🌈' },
        { label: 'Subdivision', value: '🏴 + ZWJ + tag sequence' },
        { label: 'ISO 3166-1', value: 'Standard for country codes' }
      ]
    },
    {
      id: 'emojis-18', number: 18, partLabel: 'Part 2: Emoji Fundamentals', title: 'Emoji Compatibility', subtitle: 'Cross-platform differences, historical compatibility, and fallback behavior', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-13'],
      learningObjectives: [
        'Understand cross-platform emoji compatibility issues',
        'Handle historical emoji differences',
        'Implement proper fallback behavior',
        'Manage emoji support across browser versions'
      ],
      sections: [
        {
          id: 's1', title: 'Cross-Platform Compatibility Issues',
          whyItMatters: 'Inconsistent emoji rendering can confuse users and create communication problems.',
          content: "### Rendering Differences\n\nSame code point, different appearance. Key examples:\n- 🔫 (pistol): water gun vs firearm\n- 🥯 (bagel): bagel vs donut shape\n- 😷 (mask): medical vs cloth mask\n\n### Support Differences\n\nNewer emoji may not render on older devices. A ZWJ sequence released in Unicode 14 may show as individual characters on a phone running Android 10."
        },
        {
          id: 's2', title: 'Handling Compatibility',
          whyItMatters: 'Proper fallback handling ensures good user experience regardless of device or platform.',
          content: "### Fallback Behavior\n\nWhen a character is not supported, the system shows a .notdef glyph (tofu — blank rectangle). This is why missing glyphs are called tofu.\n\n### Best Practices\n\n- Test emoji on target platforms\n- Use Twemoji for consistent rendering\n- Provide text alternatives for critical emoji\n- Gracefully handle unsupported sequences\n- Detect emoji support with canvas measureText\n\n### Emoji Version Detection\n\n```javascript\n// Check if an emoji is supported\nconst canvas = document.createElement(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nctx.font = \"48px sans-serif\";\nconst m1 = ctx.measureText(\"😀\");\nconst m2 = ctx.measureText(\"\\uFFFF\"); // typically unsupported\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-18-q1', type: 'mcq', question: 'What is a .notdef glyph commonly called?', options: ['Tofu', 'Blank', 'Missing', 'Error'], correctAnswer: 0, explanation: 'Missing glyph boxes are called tofu.', difficulty: 1 },
          { id: 'emojis-18-q2', type: 'true-false', question: 'New emoji render identically on all device ages.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Older devices may not support new emoji.', difficulty: 1 },
          { id: 'emojis-18-q3', type: 'mcq', question: 'Which library provides consistent emoji across platforms?', options: ['Twemoji', 'jQuery', 'Bootstrap', 'React'], correctAnswer: 0, explanation: 'Twemoji replaces emoji with consistent images.', difficulty: 1 },
          { id: 'emojis-18-q4', type: 'mcq', question: 'How can you detect emoji support in the browser?', options: ['canvas measureText', 'typeof emoji', 'CSS supports()', 'media queries'], correctAnswer: 0, explanation: 'Compare rendered width of emoji vs unknown character.', difficulty: 2 },
          { id: 'emojis-18-q5', type: 'true-false', question: 'A ZWJ sequence unsupported on a platform should crash the app.', options: ['True', 'False'], correctAnswer: 1, explanation: 'It should gracefully fall back to individual characters.', difficulty: 1 },
          { id: 'emojis-18-q6', type: 'mcq', question: 'What causes the tofu display?', options: ['Missing font glyph', 'Network error', 'Browser bug', 'User setting'], correctAnswer: 0, explanation: 'Tofu appears when a glyph is missing from the font.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-18-e1', type: 'medium', title: 'Emoji Support Detector', instructions: 'Write a function that detects if a specific emoji is supported on the current browser.', hint: 'Use canvas measureText and compare width with a known-unsupported character.', starterCode: '<script>\n  function isEmojiSupported(emoji) {\n    // your code here\n  }\n  console.log(isEmojiSupported("😀"));\n  console.log(isEmojiSupported("🫠"));\n</script>', solution: '<script>\n  function isEmojiSupported(emoji) {\n    const canvas = document.createElement("canvas");\n    const ctx = canvas.getContext("2d");\n    ctx.font = "48px sans-serif";\n    const m1 = ctx.measureText(emoji);\n    const m2 = ctx.measureText("\\uFFFF");\n    return m1.width > 0 && m1.width !== m2.width;\n  }\n  console.log(isEmojiSupported("😀"));\n  console.log(isEmojiSupported("🫠"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Tofu', value: 'Blank rectangle for missing glyph' },
        { label: 'Twemoji', value: 'Consistent emoji via image replacement' },
        { label: 'canvas measureText', value: 'Detect emoji support' },
        { label: 'Fallback', value: 'Graceful degradation for unsupported emoji' },
        { label: 'Version Gaps', value: 'Newer emoji need newer OS/browser' }
      ]
    },
    // ====================================================================
    // PART 3: WEB DEVELOPMENT (Chapters 19-28)
    // ====================================================================
    {
      id: 'emojis-19', number: 19, partLabel: 'Part 3: Web Development', title: 'Emojis in HTML', subtitle: 'Charset meta, HTML entities, and accessibility', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-9'],
      learningObjectives: [
        'Use proper charset meta tags for emoji support',
        'Insert emoji using HTML entities',
        'Ensure emoji accessibility with ARIA',
        'Handle emoji in HTML attributes'
      ],
      sections: [
        {
          id: 's1', title: 'Setting Up HTML for Emoji',
          whyItMatters: 'Without proper charset declaration, emoji may display incorrectly or not at all.',
          content: "### Charset Meta Tag\n\nThe HTML document must declare UTF-8 encoding: `<meta charset=\"UTF-8\">`. This should be the first meta tag in the `<head>`. Without it, browsers may interpret the page as ASCII or Latin-1, causing emoji to appear as garbled characters.\n\n### Emoji as Text\n\nEmoji can be placed directly in HTML: `<p>Hello 😀!</p>`. No special markup needed. Ensure your editor saves the file as UTF-8.\n\n### HTML Entities\n\nEmoji can also use HTML entities: `&#x1F600;` (hex) or `&#128512;` (decimal). Useful when the emoji source character might get lost in transit."
        },
        {
          id: 's2', title: 'Emoji Accessibility',
          whyItMatters: 'Screen readers need textual descriptions of emoji to provide equal access.',
          content: "### ARIA Labels\n\nFor emoji that convey meaning, add an aria-label or use an accessible emoji replacement:\n\n```html\n<span role=\"img\" aria-label=\"grinning face\">😀</span>\n```\n\n### Emoji in Alt Text\n\nEmoji in images should be described: `<img src=\"logo.png\" alt=\"Company logo with rocket emoji 🚀\">`\n\n### Best Practices\n\n- Do not use emoji as the sole indicator of meaning\n- Provide text alternatives with aria-label\n- Avoid decorative emoji inline without descriptions\n- Test with screen readers"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-19-q1', type: 'mcq', question: 'What meta tag enables emoji in HTML?', options: ['<meta charset=\"UTF-8\">', '<meta emoji=\"true\">', '<meta http-equiv=\"Emoji\">', '<meta content=\"emoji\">'], correctAnswer: 0, explanation: 'UTF-8 charset enables emoji support.', difficulty: 1 },
          { id: 'emojis-19-q2', type: 'true-false', question: 'Emoji in HTML need special JavaScript to render.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji render natively in HTML with UTF-8 charset.', difficulty: 1 },
          { id: 'emojis-19-q3', type: 'mcq', question: 'What is the hex HTML entity for 😀?', options: ['&#x1F600;', '&#128512;', '&#x1F601;', '&#x1F500;'], correctAnswer: 0, explanation: '&#x1F600; is the hex entity for 😀.', difficulty: 2 },
          { id: 'emojis-19-q4', type: 'mcq', question: 'How do you make emoji accessible to screen readers?', options: ['role=\"img\" with aria-label', 'alt attribute', 'title attribute', 'Emoji are always accessible'], correctAnswer: 0, explanation: 'Use role=\"img\" and aria-label for accessibility.', difficulty: 2 },
          { id: 'emojis-19-q5', type: 'true-false', question: 'Emoji should be used as the sole indicator of meaning.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Always provide text alternatives.', difficulty: 1 },
          { id: 'emojis-19-q6', type: 'mcq', question: 'What happens if the charset is not UTF-8?', options: ['Emoji may appear garbled', 'Nothing changes', 'Page fails to load', 'Emoji become larger'], correctAnswer: 0, explanation: 'Wrong charset causes emoji garbling.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-19-e1', type: 'easy', title: 'Accessible Emoji Page', instructions: 'Create an HTML page with 10 emoji, each properly labeled with ARIA attributes for accessibility.', hint: 'Use role=\"img\" and aria-label on each emoji.', starterCode: '<!DOCTYPE html>\n<html>\n<head><meta charset=\"UTF-8\"><title>Accessible Emojis</title></head>\n<body>\n  <!-- your code here -->\n</body>\n</html>', solution: '<!DOCTYPE html>\n<html>\n<head><meta charset=\"UTF-8\"><title>Accessible Emojis</title></head>\n<body>\n  <span role="img" aria-label="grinning face">😀</span>\n  <span role="img" aria-label="rocket">🚀</span>\n  <span role="img" aria-label="heart">❤️</span>\n  <span role="img" aria-label="party popper">🎉</span>\n  <span role="img" aria-label="dog face">🐶</span>\n  <span role="img" aria-label="pizza">🍕</span>\n  <span role="img" aria-label="globe">🌍</span>\n  <span role="img" aria-label="star">⭐</span>\n  <span role="img" aria-label="fire">🔥</span>\n  <span role="img" aria-label="clapping hands">👏</span>\n</body>\n</html>' }
      ],
      cheatSheet: [
        { label: 'Meta Charset', value: '<meta charset=\"UTF-8\">' },
        { label: 'HTML Entity (hex)', value: '&#x1F600;' },
        { label: 'HTML Entity (dec)', value: '&#128512;' },
        { label: 'Accessibility', value: 'role=\"img\" + aria-label' },
        { label: 'File Saving', value: 'Always save HTML as UTF-8' }
      ]
    },
    {
      id: 'emojis-20', number: 20, partLabel: 'Part 3: Web Development', title: 'Emojis in CSS', subtitle: 'Content property, emoji fonts, and styling', difficulty: 'Beginner', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-19'],
      learningObjectives: [
        'Use emoji in CSS content property',
        'Configure emoji fonts with CSS',
        'Style emoji with font-size and color',
        'Apply emoji as decorative elements'
      ],
      sections: [
        {
          id: 's1', title: 'Emoji in Generated Content',
          whyItMatters: 'CSS generated content with emoji enhances UI without cluttering HTML.',
          content: "### Using Emoji in ::before and ::after\n\n```css\n.icon-star::before {\n  content: \"⭐\";\n  margin-right: 0.5em;\n}\n```\n\nEmoji can be used as bullet points, status indicators, or decorative elements. They scale with font-size and inherit color.\n\n### Property Values\n\n- content: accepts emoji strings\n- Use Unicode escapes: `content: \"\\1F600\";` (CSS escape syntax)\n- Note: CSS escapes use hex without U+ prefix"
        },
        {
          id: 's2', title: 'Styling Emoji',
          whyItMatters: 'CSS can style emoji just like text, but with some platform limitations.',
          content: "### CSS Properties\n\n- `font-size`: Controls emoji size (native emoji scale well)\n- `color`: Most emoji ignore color (they use embedded color fonts)\n- `text-shadow`, `opacity`, `transform`: Work on emoji\n- `filter`: Works (hue-rotate, brightness)\n\n### Emoji Font Control\n\n```css\n.emoji-text {\n  font-family: \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Noto Color Emoji\", sans-serif;\n}\n```\n\nNote: Browsers prioritize system emoji fonts regardless of font-family."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-20-q1', type: 'mcq', question: 'Which CSS property uses emoji for generated content?', options: ['content', 'display', 'list-style', 'background'], correctAnswer: 0, explanation: 'The content property can include emoji strings.', difficulty: 1 },
          { id: 'emojis-20-q2', type: 'mcq', question: 'Does CSS color property work on most emoji?', options: ['No, emoji use embedded colors', 'Yes, color works on all emoji', 'Only on certain platforms', 'Only on Android'], correctAnswer: 0, explanation: 'Most emoji use color font data and ignore CSS color.', difficulty: 2 },
          { id: 'emojis-20-q3', type: 'true-false', question: 'Emoji scale correctly when font-size is increased.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Emoji are vector glyphs that scale with font-size.', difficulty: 1 },
          { id: 'emojis-20-q4', type: 'mcq', question: 'How do you escape emoji in CSS content?', options: ['\\1F600', '\\u{1F600}', '#1F600;', 'U+1F600'], correctAnswer: 0, explanation: 'CSS uses hex escape without U+.', difficulty: 2 },
          { id: 'emojis-20-q5', type: 'true-false', question: 'CSS font-family can reliably override system emoji fonts.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Browsers prioritize system fonts for emoji.', difficulty: 2 },
          { id: 'emojis-20-q6', type: 'mcq', question: 'Which CSS filter works on emoji?', options: ['hue-rotate', 'All of these work', 'brightness', 'opacity'], correctAnswer: 1, explanation: 'All CSS filters work on emoji.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-20-e1', type: 'easy', title: 'Emoji List Styling', instructions: 'Create a styled list using emoji as custom bullet points via CSS ::before.', hint: 'Use li::before with content emoji.', starterCode: '<ul class="emoji-list">\n  <li>Task one</li>\n  <li>Task two</li>\n  <li>Task three</li>\n</ul>\n<style>\n  /* your code here */\n</style>', solution: '<ul class="emoji-list">\n  <li>Task one</li>\n  <li>Task two</li>\n  <li>Task three</li>\n</ul>\n<style>\n  .emoji-list { list-style: none; padding: 0; }\n  .emoji-list li::before {\n    content: "✅ ";\n    font-size: 1.2em;\n  }\n  .emoji-list li:nth-child(2)::before { content: "⏳ "; }\n  .emoji-list li:nth-child(3)::before { content: "❌ "; }\n</style>' }
      ],
      cheatSheet: [
        { label: 'CSS Content Emoji', value: 'content: \"😀\";' },
        { label: 'CSS Escape', value: '\\1F600 (hex without U+)' },
        { label: 'Emoji Size', value: 'font-size controls scaling' },
        { label: 'Emoji Color', value: 'Embedded in font, color CSS ignored' },
        { label: 'Font Stack', value: 'Emoji font names for fallback' }
      ]
    },
    {
      id: 'emojis-21', number: 21, partLabel: 'Part 3: Web Development', title: 'Emojis in JavaScript', subtitle: 'String methods, codePointAt, fromCodePoint, and iteration', difficulty: 'Intermediate', estimatedMinutes: 45, xpReward: 65, prerequisites: ['emojis-19'],
      learningObjectives: [
        'Use codePointAt and fromCodePoint correctly',
        'Iterate over emoji by code point not code unit',
        'Handle string length with emoji',
        'Manipulate emoji strings safely'
      ],
      sections: [
        {
          id: 's1', title: 'JavaScript and Emoji: The Pitfalls',
          whyItMatters: 'JavaScript strings are UTF-16, causing many emoji operations to produce wrong results.',
          content: "### The UTF-16 Problem\n\nJavaScript strings are sequences of UTF-16 code units. An emoji like 😀 (U+1F600) uses two code units (a surrogate pair), so \"😀\".length === 2, not 1. Many methods work on code units:\n- `.length` — counts UTF-16 code units\n- `.charCodeAt()` — returns UTF-16 code units\n- `.charAt()` — returns a single UTF-16 code unit\n\n### The Solution: ES6 Methods\n\n- `.codePointAt(0)` — returns the full code point\n- `String.fromCodePoint(0x1F600)` — creates character from code point\n- `for...of` — iterates by code points\n- `Array.from()` — creates array of code points"
        },
        {
          id: 's2', title: 'Practical Emoji Operations in JavaScript',
          whyItMatters: 'Correct emoji handling prevents bugs in user-facing features like character counters and text processing.',
          content: "### Counting Characters\n\n```javascript\n// Wrong: counts UTF-16 code units\n\"Hello 😀\".length; // 8 (not 7!)\n\n// Correct: counts code points\n[...\"Hello 😀\"].length; // 7\nArray.from(\"Hello 😀\").length; // 7\n```\n\n### Splitting Emoji Strings\n\n```javascript\nconst text = \"Hello 😀👋🌍\";\nconst chars = Array.from(text);\n// [\"H\",\"e\",\"l\",\"l\",\"o\",\" \",\"😀\",\"👋\",\"🌍\"]\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-21-q1', type: 'mcq', question: 'Why does "😀".length return 2?', options: ['JavaScript uses UTF-16, emoji uses surrogate pair', 'Bug in JavaScript', 'Emoji count as two characters', 'It returns 1, not 2'], correctAnswer: 0, explanation: 'JavaScript strings count UTF-16 code units.', difficulty: 2 },
          { id: 'emojis-21-q2', type: 'mcq', question: 'Which method returns the full Unicode code point?', options: ['codePointAt()', 'charCodeAt()', 'charAt()', 'at()'], correctAnswer: 0, explanation: 'codePointAt returns the full code point.', difficulty: 1 },
          { id: 'emojis-21-q3', type: 'true-false', question: 'Array.from(str) correctly iterates by code points.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Array.from uses the string iterator which iterates by code points.', difficulty: 1 },
          { id: 'emojis-21-q4', type: 'mcq', question: 'How do you create 😀 from code point 0x1F600?', options: ['String.fromCodePoint(0x1F600)', 'String.fromCharCode(0x1F600)', 'new String(0x1F600)', '\\.fromCodePoint(0x1F600)'], correctAnswer: 0, explanation: 'String.fromCodePoint creates a character from a code point.', difficulty: 2 },
          { id: 'emojis-21-q5', type: 'true-false', question: 'The for...of loop iterates over JavaScript strings by code point.', options: ['True', 'False'], correctAnswer: 0, explanation: 'for...of uses the string @@iterator which yields code points.', difficulty: 2 },
          { id: 'emojis-21-q6', type: 'mcq', question: 'What does "Hello 😀".length return?', options: ['8', '7', '6', '9'], correctAnswer: 0, explanation: 'Hello (5) + space (1) + 😀 (2 UTF-16 units) = 8.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-21-e1', type: 'easy', title: 'Emoji String Analyzer', instructions: 'Write a function that correctly counts characters, code points, and UTF-16 code units in a string containing emoji.', hint: 'Use length for code units and Array.from().length for code points.', starterCode: '<script>\n  function analyzeString(str) {\n    // your code here\n  }\n  console.log(analyzeString("Hello 😀👋"));\n</script>', solution: '<script>\n  function analyzeString(str) {\n    return {\n      utf16Units: str.length,\n      codePoints: Array.from(str).length,\n      chars: Array.from(str).map(c => ({ char: c, cp: "U+" + c.codePointAt(0).toString(16).toUpperCase() }))\n    };\n  }\n  console.log(analyzeString("Hello 😀👋"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'length', value: 'Counts UTF-16 code units (wrong for emoji)' },
        { label: 'codePointAt()', value: 'Returns full code point' },
        { label: 'fromCodePoint()', value: 'Creates char from code point' },
        { label: 'Array.from()', value: 'Correct iteration by code point' },
        { label: 'for...of', value: 'Iterates by code point' }
      ]
    },
    {
      id: 'emojis-22', number: 22, partLabel: 'Part 3: Web Development', title: 'Unicode Escapes', subtitle: '\\uXXXX, \\u{X...}, HTML entities, and URL encoding', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-21'],
      learningObjectives: [
        'Use JavaScript Unicode escape sequences',
        'Distinguish \\uXXXX from \\u{X...} syntax',
        'Apply HTML entity encoding for emoji',
        'Handle URL encoding of emoji characters'
      ],
      sections: [
        {
          id: 's1', title: 'JavaScript Unicode Escapes',
          whyItMatters: 'Correct escape syntax is essential for generating emoji programmatically and debugging.',
          content: "### Escape Types\n\n**\\uXXXX (4-digit hex)**: For BMP characters (U+0000-U+FFFF). Example: `\"\\u00A9\"` = ©.\n\n**\\u{X...} (variable hex)**: For all code points (ES6+). Example: `\"\\u{1F600}\"` = 😀.\n\n### Surrogate Pairs in Old Syntax\n\nFor supplementary characters before ES6, you needed surrogate pairs: `\"\\uD83D\\uDE00\"` = 😀. This is error-prone and hard to read.\n\n### Template Literals\n\nBacktick strings allow embedded expressions: ``console.log(`😀 has code point ${String.fromCodePoint(0x1F600)}`)``"
        },
        {
          id: 's2', title: 'HTML Entities and URL Encoding',
          whyItMatters: 'Emoji in URLs and HTML need proper encoding to function correctly.',
          content: "### HTML Entities\n\n- Hex: `&#x1F600;`\n- Decimal: `&#128512;`\n\nUseful in XML contexts or when direct emoji insertion is problematic.\n\n### URL Encoding (Percent Encoding)\n\nEmoji in URLs must be percent-encoded. UTF-8 bytes of the emoji are encoded as %xx sequences:\n- 😀 UTF-8: F0 9F 98 80\n- URL: `%F0%9F%98%80`\n\n```javascript\nencodeURIComponent(\"😀\"); // \"%F0%9F%98%80\"\ndecodeURIComponent(\"%F0%9F%98%80\"); // \"😀\"\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-22-q1', type: 'mcq', question: 'Which JS escape supports code points above U+FFFF?', options: ['\\u{X...}', '\\uXXXX', '\\xXX', '\\UXXXXXXXX'], correctAnswer: 0, explanation: '\\u{...} supports all code points (ES6+).', difficulty: 2 },
          { id: 'emojis-22-q2', type: 'mcq', question: 'How was 😀 escaped before ES6?', options: ['\\uD83D\\uDE00', '\\u{1F600}', '\\x1F600', '\\U0001F600'], correctAnswer: 0, explanation: 'Pre-ES6 required surrogate pair escapes.', difficulty: 2 },
          { id: 'emojis-22-q3', type: 'true-false', question: 'HTML entities work in all HTML versions.', options: ['True', 'False'], correctAnswer: 1, explanation: 'HTML entities work in HTML4+ and XHTML.', difficulty: 1 },
          { id: 'emojis-22-q4', type: 'mcq', question: 'What does encodeURIComponent("😀") return?', options: ['%F0%9F%98%80', '%1F600', '😀', '%u1F600'], correctAnswer: 0, explanation: 'UTF-8 bytes encoded as %xx.', difficulty: 2 },
          { id: 'emojis-22-q5', type: 'true-false', question: 'Emoji can be used directly in URLs without encoding.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji must be percent-encoded in URLs.', difficulty: 1 },
          { id: 'emojis-22-q6', type: 'mcq', question: 'What is the decimal HTML entity for 😀?', options: ['&#128512;', '&#1F600;', '&#xD83D;&#xDE00;', '&#1000;'], correctAnswer: 0, explanation: '128512 is the decimal code point for U+1F600.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-22-e1', type: 'medium', title: 'Unicode Escape Converter', instructions: 'Build a tool that converts between different Unicode representations: code point (U+XXXX), JS escape (\\u{XXXX}), HTML entity (&#xXXXX;), and URL encoding.', hint: 'Use codePointAt, toString(16), and encodeURIComponent.', starterCode: '<div>\n  <input id="input" placeholder="Enter emoji" value="😀">\n  <pre id="output"></pre>\n</div>\n<script>\n  function convert(emoji) {\n    // your code here\n  }\n  document.getElementById("input").oninput = function() {\n    document.getElementById("output").textContent = convert(this.value);\n  };\n  document.getElementById("output").textContent = convert("😀");\n</script>', solution: '<div>\n  <input id="input" placeholder="Enter emoji" value="😀">\n  <pre id="output"></pre>\n</div>\n<script>\n  function convert(emoji) {\n    const results = [];\n    for (const char of emoji) {\n      const cp = char.codePointAt(0);\n      const hex = cp.toString(16).toUpperCase();\n      results.push(`Char: ${char}`);\n      results.push(`U+: U+${hex}`);\n      results.push(`JS: \\\\u{${hex}}`);\n      results.push(`HTML hex: &#x${hex};`);\n      results.push(`HTML dec: &#${cp};`);\n      results.push(`URL: ${encodeURIComponent(char)}`);\n      results.push(\"\");\n    }\n    return results.join(\"\\n\");\n  }\n  document.getElementById("input").oninput = function() {\n    document.getElementById("output").textContent = convert(this.value);\n  };\n  document.getElementById("output").textContent = convert("😀");\n</script>' }
      ],
      cheatSheet: [
        { label: 'JS \\u{...}', value: 'ES6+ escape for all code points' },
        { label: 'JS \\uXXXX', value: '4-digit hex (BMP only)' },
        { label: 'HTML Entity', value: '&#x1F600; (hex) or &#128512; (dec)' },
        { label: 'URL Encoding', value: '%F0%9F%98%80 for 😀' },
        { label: 'encodeURIComponent', value: 'JS function for URL encoding' }
      ]
    },
    {
      id: 'emojis-23', number: 23, partLabel: 'Part 3: Web Development', title: 'UTF-8 in Web Servers', subtitle: 'Content-Type, charset, headers, and server configuration', difficulty: 'Intermediate', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-19'],
      learningObjectives: [
        'Configure web server to serve UTF-8 content',
        'Set correct Content-Type headers with charset',
        'Handle encoding in HTTP requests and responses',
        'Debug charset-related issues'
      ],
      sections: [
        {
          id: 's1', title: 'Server Configuration for UTF-8',
          whyItMatters: 'Even with correct HTML meta tags, wrong server headers override them and break emoji.',
          content: "### Content-Type Header\n\nThe server must send `Content-Type: text/html; charset=UTF-8` (or equivalent). If the server sends a different charset, the browser ignores the HTML meta tag.\n\n### Server Examples\n\n**Apache**: `AddDefaultCharset UTF-8` in .htaccess or httpd.conf\n\n**Nginx**: `charset utf-8;` in server block\n\n**Node.js/Express**: `res.setHeader(\"Content-Type\", \"text/html; charset=UTF-8\");`\n\n**IIS**: Add UTF-8 encoding in web.config or Response Headers"
        },
        {
          id: 's2', title: 'Request Encoding and Forms',
          whyItMatters: 'Form submissions with emoji need proper encoding to avoid data corruption.',
          content: "### Form Encoding\n\nHTML forms should specify `accept-charset=\"UTF-8\"` or rely on the page charset. POST forms with `application/x-www-form-urlencoded` or `multipart/form-data` both support emoji when using UTF-8.\n\n### AJAX and Fetch\n\nFetch API and XMLHttpRequest handle UTF-8 correctly by default. Ensure the server parses request bodies as UTF-8.\n\n### Database Connection\n\nEven with correct HTTP headers, emoji will be corrupted if the database connection does not use UTF-8. Always set connection charset explicitly."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-23-q1', type: 'mcq', question: 'Which HTTP header specifies character encoding?', options: ['Content-Type', 'Accept-Charset', 'Content-Encoding', 'Transfer-Encoding'], correctAnswer: 0, explanation: 'Content-Type header includes charset parameter.', difficulty: 1 },
          { id: 'emojis-23-q2', type: 'true-false', question: 'Server charset headers override HTML meta charset.', options: ['True', 'False'], correctAnswer: 0, explanation: 'HTTP headers take precedence over meta tags.', difficulty: 2 },
          { id: 'emojis-23-q3', type: 'mcq', question: 'What Nginx directive sets UTF-8?', options: ['charset utf-8;', 'encoding utf-8;', 'default_charset utf-8;', 'utf8 on;'], correctAnswer: 0, explanation: 'Nginx uses charset directive.', difficulty: 2 },
          { id: 'emojis-23-q4', type: 'true-false', question: 'Database encoding is irrelevant when serving emoji over HTTP.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Database encoding must also be UTF-8.', difficulty: 1 },
          { id: 'emojis-23-q5', type: 'mcq', question: 'Which form attribute specifies accepted charset?', options: ['accept-charset', 'charset', 'encoding', 'content-type'], correctAnswer: 0, explanation: 'accept-charset specifies form encoding.', difficulty: 2 },
          { id: 'emojis-23-q6', type: 'mcq', question: 'What Apache directive sets default charset?', options: ['AddDefaultCharset', 'DefaultCharset', 'CharsetDefault', 'SetCharset'], correctAnswer: 0, explanation: 'AddDefaultCharset UTF-8 in Apache.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-23-e1', type: 'easy', title: 'Server Header Inspector', instructions: 'Create a page that fetches itself and displays the Content-Type header to verify UTF-8.', hint: 'Use fetch() and inspect response headers.', starterCode: '<div id="output"></div>\n<script>\n  // your code here\n</script>', solution: '<div id="output"></div>\n<script>\n  fetch(window.location.href).then(res => {\n    document.getElementById("output").textContent = "Content-Type: " + res.headers.get("Content-Type");\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Content-Type', value: 'text/html; charset=UTF-8' },
        { label: 'Apache', value: 'AddDefaultCharset UTF-8' },
        { label: 'Nginx', value: 'charset utf-8;' },
        { label: 'HTML Meta', value: '<meta charset=\"UTF-8\">' },
        { label: 'Form Encoding', value: 'accept-charset=\"UTF-8\"' }
      ]
    },
    {
      id: 'emojis-24', number: 24, partLabel: 'Part 3: Web Development', title: 'Database Encoding', subtitle: 'MySQL utf8mb4, PostgreSQL UTF8, MongoDB, and encoding pitfalls', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-23'],
      learningObjectives: [
        'Configure MySQL/MariaDB for proper emoji storage',
        'Use PostgreSQL UTF8 encoding correctly',
        'Handle emoji in MongoDB documents',
        'Debug common database encoding pitfalls'
      ],
      sections: [
        {
          id: 's1', title: 'MySQL and utf8mb4',
          whyItMatters: 'MySQL utf8 only supports BMP characters, corrupting emoji silently.',
          content: "### MySQL utf8 vs utf8mb4\n\nMySQL utf8 charset is limited to 3 bytes per character, which only covers the BMP (U+0000-U+FFFF). Emoji need 4 bytes. Use utf8mb4 instead:\n\n```sql\nCREATE DATABASE mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\nALTER TABLE mytable CONVERT TO CHARACTER SET utf8mb4;\n```\n\n### Connection Charset\n\nEven with utf8mb4 tables, the connection must use utf8mb4:\n```php\n$pdo = new PDO($dsn, $user, $pass, [PDO::MYSQL_ATTR_INIT_COMMAND => \"SET NAMES utf8mb4\"]);\n```"
        },
        {
          id: 's2', title: 'PostgreSQL, MongoDB, and Best Practices',
          whyItMatters: 'Each database handles encoding differently. Misconfiguration leads to silent data loss.',
          content: "### PostgreSQL\n\nPostgreSQL supports UTF-8 natively. Create databases with UTF8 encoding:\n```sql\nCREATE DATABASE mydb ENCODING 'UTF8';\n```\n\nCheck client_encoding: `SHOW client_encoding;` — should be UTF8.\n\n### MongoDB\n\nMongoDB stores strings as UTF-8 internally. However, BSON has a string length limit and some drivers may have issues with very long emoji sequences.\n\n### Common Pitfalls\n\n- Using varchar without utf8mb4 in MySQL\n- Wrong connection charset (client sends utf8, server expects latin1)\n- Column-level charset not matching table-level\n- phpMyAdmin or other tools that don't display 4-byte characters"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-24-q1', type: 'mcq', question: 'Why does MySQL utf8 fail for emoji?', options: ['utf8 is only 3 bytes, emoji need 4', 'MySQL does not support Unicode', 'utf8 is deprecated', 'utf8 is only for ASCII'], correctAnswer: 0, explanation: 'MySQL utf8 max 3 bytes, emoji need 4 (utf8mb4).', difficulty: 2 },
          { id: 'emojis-24-q2', type: 'mcq', question: 'What MySQL charset supports emoji?', options: ['utf8mb4', 'utf8', 'utf16', 'latin1'], correctAnswer: 0, explanation: 'utf8mb4 is MySQL 4-byte UTF-8.', difficulty: 1 },
          { id: 'emojis-24-q3', type: 'true-false', question: 'PostgreSQL needs special configuration for emoji.', options: ['True', 'False'], correctAnswer: 1, explanation: 'PostgreSQL handles UTF-8 natively.', difficulty: 1 },
          { id: 'emojis-24-q4', type: 'mcq', question: 'Which command checks PostgreSQL client encoding?', options: ['SHOW client_encoding;', 'SELECT encoding;', 'SHOW charset;', 'SELECT charset();'], correctAnswer: 0, explanation: 'SHOW client_encoding; checks the connection encoding.', difficulty: 2 },
          { id: 'emojis-24-q5', type: 'true-false', question: 'MongoDB stores strings as UTF-8 internally.', options: ['True', 'False'], correctAnswer: 0, explanation: 'MongoDB uses UTF-8 for string storage.', difficulty: 1 },
          { id: 'emojis-24-q6', type: 'mcq', question: 'How do you convert a MySQL table to utf8mb4?', options: ['ALTER TABLE t CONVERT TO CHARACTER SET utf8mb4', 'ALTER TABLE t SET utf8mb4', 'UPDATE TABLE t SET charset=utf8mb4', 'CONVERT TABLE t TO utf8mb4'], correctAnswer: 0, explanation: 'ALTER TABLE ... CONVERT TO CHARACTER SET.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-24-e1', type: 'medium', title: 'Encoding Compatibility Checker', instructions: 'Write a function that checks whether a string contains 4-byte characters that would exceed MySQL utf8 limits.', hint: '4-byte UTF-8 characters have code points above U+FFFF.', starterCode: '<script>\n  function needsUtf8mb4(str) {\n    // your code here\n  }\n  console.log(needsUtf8mb4("Hello"));\n  console.log(needsUtf8mb4("Café"));\n  console.log(needsUtf8mb4("Hello 😀"));\n</script>', solution: '<script>\n  function needsUtf8mb4(str) {\n    for (const char of str) {\n      if (char.codePointAt(0) > 0xFFFF) return true;\n    }\n    return false;\n  }\n  console.log(needsUtf8mb4("Hello"));\n  console.log(needsUtf8mb4("Café"));\n  console.log(needsUtf8mb4("Hello 😀"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'MySQL utf8mb4', value: '4-byte UTF-8 for emoji storage' },
        { label: 'MySQL utf8', value: '3-byte, BMP only (no emoji)' },
        { label: 'PostgreSQL', value: 'CREATE DATABASE ENCODING UTF8' },
        { label: 'MongoDB', value: 'Native UTF-8 string storage' },
        { label: 'Connection Charset', value: 'Must match database charset' }
      ]
    },
    {
      id: 'emojis-25', number: 25, partLabel: 'Part 3: Web Development', title: 'Emoji APIs', subtitle: 'Twemoji, Noto Emoji, EmojiOne, and emoji-data libraries', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-21'],
      learningObjectives: [
        'Use Twemoji for cross-platform emoji consistency',
        'Integrate Noto Emoji in web projects',
        'Access emoji data from emoji-data libraries',
        'Choose the right emoji library for your project'
      ],
      sections: [
        {
          id: 's1', title: 'Twemoji: Cross-Platform Consistency',
          whyItMatters: 'Twemoji ensures emoji look the same on every browser, regardless of OS.',
          content: "### What Is Twemoji?\n\nTwemoji is Twitter's open-source emoji set, available as SVG or PNG. It replaces browser-rendered emoji with consistent images.\n\n### Using Twemoji\n\n```javascript\n// Load Twemoji library\n<script src=\"https://twemoji.maxcdn.com/v/latest/twemoji.min.js\"></script>\n\n// Parse emoji in the page\ntwemoji.parse(document.body);\n\n// Options\ntwemoji.parse(emojiString, {\n  folder: 'svg',\n  ext: '.svg'\n});\n```"
        },
        {
          id: 's2', title: 'Noto Emoji and emoji-data Libraries',
          whyItMatters: 'Emoji-data libraries provide structured information needed for building emoji pickers and tools.',
          content: "### Noto Emoji\n\nGoogle's Noto Color Emoji font can be used via Google Fonts or self-hosted. It provides consistent emoji rendering across platforms using @font-face.\n\n### emoji-data Libraries\n\n- **emoji-datasource**: Provides emoji data (code points, short names, categories) in JSON\n- **emoji-mart**: React emoji picker component\n- **emoji-picker-element**: Web component emoji picker\n- **node-emoji**: Node.js emoji handling\n\n### Emoji Data Format\n\nTypical emoji data entry includes: code points, short name, category, subcategory, keywords, skin tone variants, and platform renderings."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-25-q1', type: 'mcq', question: 'What does Twemoji do?', options: ['Replaces emoji with consistent images', 'Creates new emoji', 'Speeds up emoji rendering', 'Removes emoji from pages'], correctAnswer: 0, explanation: 'Twemoji replaces emoji with platform-independent images.', difficulty: 1 },
          { id: 'emojis-25-q2', type: 'true-false', question: 'Twemoji is an open-source library.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Twitter open-sourced Twemoji under MIT license.', difficulty: 1 },
          { id: 'emojis-25-q3', type: 'mcq', question: 'What formats does Twemoji support?', options: ['SVG and PNG', 'Only SVG', 'Only PNG', 'WebP'], correctAnswer: 0, explanation: 'Twemoji offers both SVG and PNG formats.', difficulty: 1 },
          { id: 'emojis-25-q4', type: 'mcq', question: 'Which company created Noto Color Emoji?', options: ['Google', 'Apple', 'Microsoft', 'Twitter'], correctAnswer: 0, explanation: 'Google created the Noto font family including Noto Color Emoji.', difficulty: 1 },
          { id: 'emojis-25-q5', type: 'true-false', question: 'emoji-mart is a React emoji picker component.', options: ['True', 'False'], correctAnswer: 0, explanation: 'emoji-mart provides a React-based emoji picker.', difficulty: 1 },
          { id: 'emojis-25-q6', type: 'mcq', question: 'Which method on twemoji replaces emoji in HTML?', options: ['twemoji.parse()', 'twemoji.render()', 'twemoji.convert()', 'twemoji.emoji()'], correctAnswer: 0, explanation: 'twemoji.parse() finds and replaces emoji.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-25-e1', type: 'medium', title: 'Twemoji Integration', instructions: 'Create a page that loads Twemoji and converts all emoji to Twemoji images.', hint: 'Include the Twemoji CDN script and call parse on document.body.', starterCode: '<script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"></script>\n<div id="content">\n  <p>Hello 😀! Let us celebrate 🎉 with a rocket 🚀</p>\n</div>\n<script>\n  // your code here\n</script>', solution: '<script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"></script>\n<div id="content">\n  <p>Hello 😀! Let us celebrate 🎉 with a rocket 🚀</p>\n</div>\n<script>\n  twemoji.parse(document.getElementById("content"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Twemoji', value: 'Open-source SVG/PNG emoji by Twitter' },
        { label: 'Noto Emoji', value: 'Google color emoji font' },
        { label: 'emoji-datasource', value: 'JSON emoji data (code points, names)' },
        { label: 'emoji-mart', value: 'React emoji picker' },
        { label: 'twemoji.parse()', value: 'Replaces emoji with images' }
      ]
    },
    {
      id: 'emojis-26', number: 26, partLabel: 'Part 3: Web Development', title: 'Text Rendering Engines', subtitle: 'HarfBuzz, ICU, and platform text engines', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-8'],
      learningObjectives: [
        'Understand how text shaping engines work',
        'Explain HarfBuzz role in text rendering',
        'Compare platform text engines',
        'Know how ICU supports Unicode operations'
      ],
      sections: [
        {
          id: 's1', title: 'HarfBuzz: The Universal Text Shaper',
          whyItMatters: 'HarfBuzz is the most widely used text shaping library, powering Chrome, Firefox, Android, and more.',
          content: "### What Is HarfBuzz?\n\nHarfBuzz is an open-source text shaping engine that converts Unicode text into positioned glyphs. It handles:\n- Complex script shaping (Arabic, Devanagari, Thai)\n- OpenType feature application (ligatures, kerning)\n- Emoji ZWJ sequence processing\n\n### How HarfBuzz Works\n\n1. Input Unicode string and font data\n2. Break text into segments per script and direction\n3. Apply OpenType GSUB (glyph substitution) tables\n4. Apply GPOS (glyph positioning) tables\n5. Output positioned glyphs"
        },
        {
          id: 's2', title: 'ICU and Platform Engines',
          whyItMatters: 'ICU provides the Unicode support that applications rely on for internationalization.',
          content: "### ICU (International Components for Unicode)\n\nICU is a mature, widely-used library providing:\n- Unicode property access (UCD data)\n- Collation (sorting) per locale\n- Normalization (NFC, NFD, NFKC, NFKD)\n- Bidirectional text algorithm\n- Break iteration (word, line, sentence)\n- Charset conversion\n\n### Platform Text Engines\n\n- **DirectWrite** (Windows): Microsoft modern text API, uses HarfBuzz in Edge\n- **Core Text** (macOS/iOS): Apple text engine\n- **Pango** (Linux): Uses HarfBuzz for shaping\n- **Skia** (Chrome/Android): Graphics library with text shaping"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-26-q1', type: 'mcq', question: 'What is HarfBuzz primarily used for?', options: ['Text shaping (glyph positioning)', 'Font rendering', 'Image processing', 'Audio encoding'], correctAnswer: 0, explanation: 'HarfBuzz shapes text — converts characters to positioned glyphs.', difficulty: 2 },
          { id: 'emojis-26-q2', type: 'true-false', question: 'HarfBuzz is used by Chrome and Firefox.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Both major browsers use HarfBuzz for text shaping.', difficulty: 1 },
          { id: 'emojis-26-q3', type: 'mcq', question: 'Which library provides Unicode normalization and collation?', options: ['ICU', 'HarfBuzz', 'FreeType', 'OpenGL'], correctAnswer: 0, explanation: 'ICU provides comprehensive Unicode support.', difficulty: 2 },
          { id: 'emojis-26-q4', type: 'mcq', question: 'What is the Windows text rendering API?', options: ['DirectWrite', 'Core Text', 'Pango', 'Skia'], correctAnswer: 0, explanation: 'DirectWrite is Microsoft modern text API.', difficulty: 2 },
          { id: 'emojis-26-q5', type: 'true-false', question: 'HarfBuzz handles OpenType feature application.', options: ['True', 'False'], correctAnswer: 0, explanation: 'HarfBuzz applies GSUB and GPOS OpenType tables.', difficulty: 2 },
          { id: 'emojis-26-q6', type: 'mcq', question: 'Which macOS/ iOS text engine shapes text?', options: ['Core Text', 'DirectWrite', 'Pango', 'Skia'], correctAnswer: 0, explanation: 'Core Text is Apple text engine.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-26-e1', type: 'easy', title: 'Text Shaping Visualization', instructions: 'Research and write a brief summary of how your current browser shapes emoji text. Check if HarfBuzz is in use.', hint: 'Check browser documentation or about:blank flags.', starterCode: '<p>Investigate your browser text shaping engine and write your findings below.</p>\n<textarea rows="6" cols="60" placeholder="Your findings..."></textarea>', solution: '<p>Most modern browsers use HarfBuzz for text shaping. Chrome uses Skia + HarfBuzz, Firefox uses HarfBuzz directly, Edge uses DirectWrite with HarfBuzz on Windows. HarfBuzz converts text strings to positioned glyphs, handling complex scripts, ligatures, and emoji ZWJ sequences.</p>' }
      ],
      cheatSheet: [
        { label: 'HarfBuzz', value: 'Open-source text shaping engine' },
        { label: 'ICU', value: 'Unicode support library (collation, normalization)' },
        { label: 'DirectWrite', value: 'Windows text rendering API' },
        { label: 'Core Text', value: 'macOS/iOS text rendering API' },
        { label: 'OpenType', value: 'Font format with GSUB and GPOS tables' }
      ]
    },
    {
      id: 'emojis-27', number: 27, partLabel: 'Part 3: Web Development', title: 'Fonts and Fallbacks', subtitle: 'Web fonts, system fonts, fallback chains, and @font-face', difficulty: 'Intermediate', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-8'],
      learningObjectives: [
        'Build effective font fallback chains for emoji',
        'Use @font-face for custom emoji fonts',
        'Understand font loading and swap strategies',
        'Handle emoji font availability across platforms'
      ],
      sections: [
        {
          id: 's1', title: 'Building Font Fallback Chains',
          whyItMatters: 'Proper fallback chains ensure every character renders, even when specific fonts are missing.',
          content: "### Font Stack for Emoji\n\n```css\nfont-family: \"Noto Color Emoji\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Twemoji Mozilla\", \"EmojiOne Color\", sans-serif;\n```\n\nThe browser tries each font in order, using the first that contains the glyph.\n\n### How Fallback Works\n\nFor each character, the browser walks the font-family list, checking if the font has a glyph for that code point. If no font has it, the browser uses its last-resort fallback font."
        },
        {
          id: 's2', title: 'Custom Emoji Fonts with @font-face',
          whyItMatters: 'Self-hosting emoji fonts ensures consistent rendering regardless of the user OS.',
          content: "### Using @font-face\n\n```css\n@font-face {\n  font-family: 'MyEmoji';\n  src: url('/fonts/NotoColorEmoji.ttf') format('truetype');\n  font-display: swap;\n}\n\n.emoji-text {\n  font-family: 'MyEmoji', 'Apple Color Emoji', sans-serif;\n}\n```\n\n### Performance Considerations\n\nEmoji font files are large (5-20MB). Use font-display: swap to avoid invisible text during load. Consider subsetting the font if you only need specific emoji.\n\n### variable fonts\n\nNoto Color Emoji is exploring variable font technology for more compact emoji fonts."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-27-q1', type: 'mcq', question: 'How does the browser choose which font to use for an emoji?', options: ['Walks the font-family list for a glyph match', 'Uses the first font listed always', 'Picks the smallest font', 'Uses the system default only'], correctAnswer: 0, explanation: 'Browser checks each font for the glyph, using the first match.', difficulty: 2 },
          { id: 'emojis-27-q2', type: 'true-false', question: 'Emoji font files are typically small and fast to load.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji fonts are 5-20MB, very large.', difficulty: 1 },
          { id: 'emojis-27-q3', type: 'mcq', question: 'Which CSS property controls invisible text during font load?', options: ['font-display', 'font-load', 'font-render', 'text-rendering'], correctAnswer: 0, explanation: 'font-display: swap shows fallback text immediately.', difficulty: 2 },
          { id: 'emojis-27-q4', type: 'true-false', question: '@font-face can be used to load custom emoji fonts.', options: ['True', 'False'], correctAnswer: 0, explanation: '@font-face loads custom fonts including emoji fonts.', difficulty: 1 },
          { id: 'emojis-27-q5', type: 'mcq', question: 'What is font subsetting?', options: ['Including only needed characters', 'Smaller font size', 'Font compression', 'Font splitting across files'], correctAnswer: 0, explanation: 'Subsetting removes unused characters to reduce file size.', difficulty: 2 },
          { id: 'emojis-27-q6', type: 'mcq', question: 'Which emoji font is exploring variable font technology?', options: ['Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', 'Twemoji'], correctAnswer: 0, explanation: 'Google is exploring variable font for Noto Color Emoji.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-27-e1', type: 'easy', title: 'Font Fallback Test', instructions: 'Create a page that tests how your browser handles emoji when different fonts are specified.', hint: 'Use different font-family values and compare rendering.', starterCode: '<div style="font-family: serif; font-size: 32px;">😀 🎉 🚀 serif</div>\n<div style="font-family: sans-serif; font-size: 32px;">😀 🎉 🚀 sans-serif</div>\n<div style="font-family: monospace; font-size: 32px;">😀 🎉 🚀 monospace</div>\n<div style="font-family: cursive; font-size: 32px;">😀 🎉 🚀 cursive</div>', solution: '<div style="font-family: serif; font-size: 32px;">😀 🎉 🚀 serif</div>\n<div style="font-family: sans-serif; font-size: 32px;">😀 🎉 🚀 sans-serif</div>\n<div style="font-family: monospace; font-size: 32px;">😀 🎉 🚀 monospace</div>\n<div style="font-family: cursive; font-size: 32px;">😀 🎉 🚀 cursive</div>\n<div style="font-family: \"Noto Color Emoji\", \"Apple Color Emoji\", \"Segoe UI Emoji\", sans-serif; font-size: 32px;">😀 🎉 🚀 emoji stack</div>' }
      ],
      cheatSheet: [
        { label: 'Font Fallback', value: 'Browser walks font list for glyph match' },
        { label: 'Emoji Font Stack', value: '"Noto", "Apple", "Segoe", sans-serif' },
        { label: '@font-face', value: 'CSS rule for custom fonts' },
        { label: 'font-display', value: 'Controls behavior during font load' },
        { label: 'Subsetting', value: 'Removing unused chars for smaller files' }
      ]
    },
    {
      id: 'emojis-28', number: 28, partLabel: 'Part 3: Web Development', title: 'Internationalization', subtitle: 'i18n, l10n, locale-aware text, and collation', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-21'],
      learningObjectives: [
        'Understand i18n and l10n concepts',
        'Implement locale-aware text handling',
        'Handle Unicode collation for sorting',
        'Manage multilingual text with emoji support'
      ],
      sections: [
        {
          id: 's1', title: 'i18n and l10n Fundamentals',
          whyItMatters: 'Global applications must handle text in any language, including emoji, correctly.',
          content: "### Internationalization (i18n)\n\nDesigning applications to support multiple languages and regions without code changes. This includes:\n- UTF-8 everywhere\n- Locale-aware formatting (dates, numbers, currencies)\n- Unicode-compliant text processing\n- Bidirectional text support\n\n### Localization (l10n)\n\nTranslating content and adapting to local conventions. Emoji play a role in localization because:\n- Emoji meanings vary by culture\n- Some gestures are offensive in certain regions\n- Emoji usage frequency differs by country"
        },
        {
          id: 's2', title: 'Collation and Locale-Aware Sorting',
          whyItMatters: 'Sorting text correctly across languages is complex and requires Unicode collation.',
          content: "### Unicode Collation Algorithm (UCA)\n\nThe UCA defines how to compare and sort Unicode strings. JavaScript Intl API provides locale-aware collation:\n\n```javascript\nconst collator = new Intl.Collator('de-DE');\n['ä', 'z', 'a'].sort(collator.compare);\n// ['a', 'ä', 'z'] in German\n```\n\n### Emoji in Sorting\n\nEmoji sort by their code point value, which may not produce user-friendly ordering. Use CLDR short names for user-facing emoji sorting.\n\n### Intl API for i18n\n\n```javascript\n// Date formatting\nnew Intl.DateTimeFormat('ja-JP').format(new Date());\n\n// Number formatting\nnew Intl.NumberFormat('de-DE').format(1234.5);\n\n// List formatting\nnew Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(['A', 'B', 'C']);\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-28-q1', type: 'mcq', question: 'What does i18n stand for?', options: ['Internationalization', 'Internalization', 'Internet Engineering', 'International Network'], correctAnswer: 0, explanation: 'i18n = internationalization (18 letters between i and n).', difficulty: 1 },
          { id: 'emojis-28-q2', type: 'true-false', question: 'Emoji meanings are the same in all cultures.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji meanings vary by culture.', difficulty: 1 },
          { id: 'emojis-28-q3', type: 'mcq', question: 'Which JavaScript API provides locale-aware comparison?', options: ['Intl.Collator', 'String.localeCompare', 'Array.sort', 'All of these'], correctAnswer: 3, explanation: 'Intl.Collator, localeCompare, and sort all support locale-aware comparison.', difficulty: 2 },
          { id: 'emojis-28-q4', type: 'mcq', question: 'What algorithm defines Unicode string sorting?', options: ['Unicode Collation Algorithm', 'Unicode Sorting Algorithm', 'String Comparison Standard', 'UTF Sort Algorithm'], correctAnswer: 0, explanation: 'UCA = Unicode Collation Algorithm.', difficulty: 2 },
          { id: 'emojis-28-q5', type: 'true-false', question: 'Emoji sort in a user-friendly order by default.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji sort by code point, not user-friendly order.', difficulty: 2 },
          { id: 'emojis-28-q6', type: 'mcq', question: 'How should emoji be sorted for user-facing displays?', options: ['By CLDR short name', 'By code point', 'By Unicode version', 'By category then code point'], correctAnswer: 0, explanation: 'Sorting by CLDR short name produces more user-friendly order.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-28-e1', type: 'medium', title: 'Locale-Aware Emoji Sorter', instructions: 'Create a function that sorts an array of emoji by their CLDR short names for better user experience.', hint: 'Use Intl.Collator with locale and sensitivity settings.', starterCode: '<script>\n  function sortEmoji(emojis) {\n    // your code here\n  }\n  const data = [\n    { char: "😀", name: "grinning face" },\n    { char: "😂", name: "face with tears of joy" },\n    { char: "❤️", name: "red heart" },\n    { char: "🎉", name: "party popper" }\n  ];\n  console.log(sortEmoji(data));\n</script>', solution: '<script>\n  function sortEmoji(emojis) {\n    const collator = new Intl.Collator(\"en\");\n    return [...emojis].sort((a, b) => collator.compare(a.name, b.name));\n  }\n  const data = [\n    { char: "😀", name: "grinning face" },\n    { char: "😂", name: "face with tears of joy" },\n    { char: "❤️", name: "red heart" },\n    { char: "🎉", name: "party popper" }\n  ];\n  console.log(sortEmoji(data).map(e => e.char + \" \" + e.name));\n</script>' }
      ],
      cheatSheet: [
        { label: 'i18n', value: 'Internationalization (design for all languages)' },
        { label: 'l10n', value: 'Localization (translate and adapt)' },
        { label: 'Intl.Collator', value: 'Locale-aware string comparison' },
        { label: 'UCA', value: 'Unicode Collation Algorithm' },
        { label: 'CLDR', value: 'Common Locale Data Repository' }
      ]
    },
    // ====================================================================
    // PART 4: ADVANCED TEXT PROCESSING (Chapters 29-36)
    // ====================================================================
    {
      id: 'emojis-29', number: 29, partLabel: 'Part 4: Advanced Text Processing', title: 'Grapheme Clusters', subtitle: 'What they are, combining characters, and emoji as grapheme clusters', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 65, prerequisites: ['emojis-21'],
      learningObjectives: [
        'Define grapheme clusters and their importance',
        'Understand how combining characters form grapheme clusters',
        'Recognize emoji as extended grapheme clusters',
        'Count grapheme clusters correctly in JavaScript'
      ],
      sections: [
        {
          id: 's1', title: 'What Are Grapheme Clusters?',
          whyItMatters: 'Users think in terms of grapheme clusters, not code points. A grapheme cluster is what looks like one character.',
          content: "### Definition\n\nA grapheme cluster is a sequence of one or more Unicode code points that display as a single, perceivable character. The simplest example is a base letter plus a combining accent: é (e + combining acute accent U+0301).\n\n### Why It Matters\n\nCounting characters by code points gives wrong results for languages with combining marks. \"e\u0301\" has 2 code points but looks like 1 character.\n\n### Emoji Grapheme Clusters\n\nEmoji are extended grapheme clusters. A ZWJ sequence like 👨‍👩‍👧‍👦 (family) has 7 code points but displays as 1 glyph. To count correctly, you must use grapheme cluster segmentation."
        },
        {
          id: 's2', title: 'Grapheme Clusters in JavaScript',
          whyItMatters: 'JavaScript does not have built-in grapheme cluster support, requiring libraries for correct handling.',
          content: "### The Intl.Segmenter API\n\n```javascript\nconst segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });\nconst segments = segmenter.segment('👨‍👩‍👧‍👦');\nconsole.log([...segments].length); // 1 grapheme\n```\n\n### Libraries\n\n- **grapheme-splitter**: JavaScript library for grapheme cluster splitting\n- **runes**: Unicode-aware string length\n- **stringz**: Unicode-aware string operations\n\n### Without Libraries\n\nArray.from() splits by code points, not grapheme clusters. For ZWJ sequences, you need proper Unicode segmentation."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-29-q1', type: 'mcq', question: 'What is a grapheme cluster?', options: ['Sequence of code points that appears as one character', 'A single code point', 'A font glyph', 'A Unicode plane'], correctAnswer: 0, explanation: 'A grapheme cluster is what users perceive as one character.', difficulty: 2 },
          { id: 'emojis-29-q2', type: 'true-false', question: 'A family emoji (👨‍👩‍👧‍👦) is one grapheme cluster.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Despite having 7 code points, it displays as one glyph.', difficulty: 2 },
          { id: 'emojis-29-q3', type: 'mcq', question: 'Which JavaScript API segments by grapheme clusters?', options: ['Intl.Segmenter', 'String.split', 'Array.from', 'String.slice'], correctAnswer: 0, explanation: 'Intl.Segmenter with granularity grapheme.', difficulty: 2 },
          { id: 'emojis-29-q4', type: 'mcq', question: 'How many grapheme clusters does \"é\" (e + combining acute) have?', options: ['1', '2', '3', '0'], correctAnswer: 0, explanation: 'e + combining accent = 1 grapheme cluster.', difficulty: 2 },
          { id: 'emojis-29-q5', type: 'true-false', question: 'Array.from(str).length returns grapheme cluster count.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Array.from splits by code point, not grapheme.', difficulty: 2 },
          { id: 'emojis-29-q6', type: 'mcq', question: 'How many code points are in 👨‍👩‍👧‍👦?', options: ['7', '1', '4', '3'], correctAnswer: 0, explanation: 'Family: man + ZWJ + woman + ZWJ + girl + ZWJ + boy = 7 code points.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-29-e1', type: 'medium', title: 'Grapheme Cluster Counter', instructions: 'Write a function that correctly counts grapheme clusters using Intl.Segmenter.', hint: 'Use the Intl.Segmenter API with grapheme granularity.', starterCode: '<script>\n  function countGraphemes(str) {\n    // your code here\n  }\n  console.log(countGraphemes("Hello"));\n  console.log(countGraphemes("é"));\n  console.log(countGraphemes("👨‍👩‍👧‍👦"));\n  console.log(countGraphemes("A👨‍👩‍👧‍👦B"));\n</script>', solution: '<script>\n  function countGraphemes(str) {\n    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });\n    return [...segmenter.segment(str)].length;\n  }\n  console.log(countGraphemes("Hello"));\n  console.log(countGraphemes("é"));\n  console.log(countGraphemes("👨‍👩‍👧‍👦"));\n  console.log(countGraphemes("A👨‍👩‍👧‍👦B"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Grapheme Cluster', value: 'User-perceived character (may be multiple code points)' },
        { label: 'Intl.Segmenter', value: 'JS API for grapheme/word/sentence segmentation' },
        { label: 'e\u0301', value: 'Example: 2 code points, 1 grapheme' },
        { label: 'ZWJ Family', value: '7 code points, 1 grapheme' },
        { label: 'grapheme-splitter', value: 'NPM library for client-side splitting' }
      ]
    },
    {
      id: 'emojis-30', number: 30, partLabel: 'Part 4: Advanced Text Processing', title: 'Unicode Normalization', subtitle: 'NFC, NFD, NFKC, NFKD, and when to use each', difficulty: 'Intermediate', estimatedMinutes: 40, xpReward: 60, prerequisites: ['emojis-29'],
      learningObjectives: [
        'Understand the four Unicode normalization forms',
        'Distinguish canonical from compatibility normalization',
        'Apply the correct normalization for different use cases',
        'Handle normalization in JavaScript'
      ],
      sections: [
        {
          id: 's1', title: 'What Is Unicode Normalization?',
          whyItMatters: 'Same text can have different byte representations. Normalization ensures consistent comparison.',
          content: "### The Problem\n\nMany Unicode characters can be represented in multiple ways. For example, é can be:\n- Precomposed: U+00E9 (single code point)\n- Decomposed: U+0065 (e) + U+0301 (combining acute accent)\n\nBoth look identical but have different byte representations. Normalization converts to a standard form.\n\n### The Four Forms\n\n- **NFC** (Normalization Form C): Canonical composition. Prefer precomposed characters. Most common on the web.\n- **NFD** (Normalization Form D): Canonical decomposition. Breaks characters into base + combining marks.\n- **NFKC** (Normalization Form KC): Compatibility composition. Also replaces stylistic variants.\n- **NFKD** (Normalization Form KD): Compatibility decomposition. Like NFD but also decomposes compatibility characters."
        },
        {
          id: 's2', title: 'When to Use Each Form',
          whyItMatters: 'Using the wrong normalization can break security checks, search, or display.',
          content: "### NFC (Recommended for most text)\n- HTML/XML content\n- User input storage\n- General text processing\n- URL normalization\n\n### NFD (Use for text processing)\n- Sorting and searching\n- Accent-insensitive comparison\n- Keyboard input processing\n\n### NFKC/NFKD (Use with caution)\n- Identifier comparison (variable names, domain names)\n- Security checks (detect homoglyph attacks)\n- Search indexing\n- Caution: may change display (e.g., fi ligature → fi)"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-30-q1', type: 'mcq', question: 'How many Unicode normalization forms are there?', options: ['4', '2', '3', '6'], correctAnswer: 0, explanation: 'NFC, NFD, NFKC, NFKD — four forms.', difficulty: 2 },
          { id: 'emojis-30-q2', type: 'mcq', question: 'Which normalization form uses canonical composition?', options: ['NFC', 'NFD', 'NFKC', 'NFKD'], correctAnswer: 0, explanation: 'NFC composes to precomposed characters.', difficulty: 2 },
          { id: 'emojis-30-q3', type: 'true-false', question: 'NFKC is safe to use for display without changing appearance.', options: ['True', 'False'], correctAnswer: 1, explanation: 'NFKC may change display (e.g., fi ligature becomes fi).', difficulty: 2 },
          { id: 'emojis-30-q4', type: 'mcq', question: 'Which normalization is recommended for general web content?', options: ['NFC', 'NFD', 'NFKC', 'NFKD'], correctAnswer: 0, explanation: 'NFC is recommended for most text content.', difficulty: 1 },
          { id: 'emojis-30-q5', type: 'mcq', question: 'Which JavaScript method performs normalization?', options: ['str.normalize()', 'str.norm()', 'Normalizer.normalize()', 'str.toNFC()'], correctAnswer: 0, explanation: 'String.prototype.normalize() performs normalization.', difficulty: 1 },
          { id: 'emojis-30-q6', type: 'true-false', question: 'é can be represented as one code point or two.', options: ['True', 'False'], correctAnswer: 0, explanation: 'é = U+00E9 (precomposed) or U+0065 + U+0301 (decomposed).', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-30-e1', type: 'easy', title: 'Normalization Explorer', instructions: 'Create a function that shows the different normalization forms of a string and their byte representations.', hint: 'Use Buffer from (TextEncoder) to show bytes.', starterCode: '<script>\n  function showNormalizations(str) {\n    // your code here\n  }\n  showNormalizations("\\u00E9");\n  showNormalizations("e\\u0301");\n  showNormalizations("\\uFB01"); // fi ligature\n</script>', solution: '<script>\n  function showNormalizations(str) {\n    const forms = ["NFC", "NFD", "NFKC", "NFKD"];\n    const encoder = new TextEncoder();\n    for (const form of forms) {\n      const normalized = str.normalize(form);\n      const bytes = Array.from(encoder.encode(normalized)).map(b => b.toString(16).toUpperCase());\n      console.log(`${form}: "${normalized}" (${normalized.length} CPs, bytes: ${bytes.join(" ")})`);\n    }\n  }\n  showNormalizations("\\u00E9");\n  showNormalizations("e\\u0301");\n  showNormalizations("\\uFB01");\n</script>' }
      ],
      cheatSheet: [
        { label: 'NFC', value: 'Canonical composition (precomposed)' },
        { label: 'NFD', value: 'Canonical decomposition (base + combining)' },
        { label: 'NFKC', value: 'Compatibility composition' },
        { label: 'NFKD', value: 'Compatibility decomposition' },
        { label: 'str.normalize()', value: 'JS method for normalization' }
      ]
    },
    {
      id: 'emojis-31', number: 31, partLabel: 'Part 4: Advanced Text Processing', title: 'Bidirectional Text', subtitle: 'Bidi algorithm, LTR/RTL, and Unicode bidi classes', difficulty: 'Intermediate', estimatedMinutes: 45, xpReward: 65, prerequisites: ['emojis-30'],
      learningObjectives: [
        'Understand the bidirectional text algorithm',
        'Handle LTR and RTL text mixing',
        'Apply Unicode bidi classes correctly',
        'Manage emoji in bidirectional text contexts'
      ],
      sections: [
        {
          id: 's1', title: 'The Bidirectional Algorithm',
          whyItMatters: 'Mixing left-to-right and right-to-left text is complex. The bidi algorithm handles it automatically.',
          content: "### What Is Bidi?\n\nBidirectional text contains both left-to-right (LTR) scripts like English and right-to-left (RTL) scripts like Arabic or Hebrew. The Unicode Bidirectional Algorithm (UAX #9) defines how to display mixed text.\n\n### Directional Characters\n\n- LTR characters: Latin, Greek, Cyrillic, CJK, emoji\n- RTL characters: Arabic, Hebrew, Thaana, Syriac\n- Neutral characters: spaces, punctuation, digits\n\n### The Bidi Algorithm in Practice\n\nBrowsers handle bidi automatically based on the character properties. For correct display, use the dir attribute on HTML elements."
        },
        {
          id: 's2', title: 'Emoji in Bidirectional Text',
          whyItMatters: 'Emoji behavior in RTL contexts can be surprising and requires understanding of bidi rules.',
          content: "### Emoji Direction\n\nEmoji are treated as LTR characters by default. When inserted into RTL text, they may appear in unexpected positions. Use explicit directional marks to control placement.\n\n### Directional Marks\n\n- LRM (U+200E): Left-to-right mark\n- RLM (U+200F): Right-to-left mark\n- LRE/RLE (U+202A/U+202B): Directional overrides\n- PDF (U+202C): Pop directional formatting\n\n### Best Practices\n\n- Use HTML dir attribute rather than Unicode controls when possible\n- Test emoji placement in both LTR and RTL contexts\n- Avoid complex directional formatting in user-generated text"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-31-q1', type: 'mcq', question: 'What is bidirectional text?', options: ['Mixed LTR and RTL scripts', 'Text that can be read both ways', 'Text with two columns', 'Vertical text'], correctAnswer: 0, explanation: 'Bidi text contains both left-to-right and right-to-left scripts.', difficulty: 1 },
          { id: 'emojis-31-q2', type: 'mcq', question: 'Emoji have which default direction?', options: ['LTR', 'RTL', 'Neutral', 'Context-dependent'], correctAnswer: 0, explanation: 'Emoji are treated as LTR characters.', difficulty: 2 },
          { id: 'emojis-31-q3', type: 'true-false', question: 'HTML dir attribute can control text direction.', options: ['True', 'False'], correctAnswer: 0, explanation: 'dir=\\\"rtl\\\" or dir=\\\"ltr\\\" on HTML elements.', difficulty: 1 },
          { id: 'emojis-31-q4', type: 'mcq', question: 'What is U+200E?', options: ['Left-to-right mark (LRM)', 'Right-to-left mark (RLM)', 'Zero-width joiner (ZWJ)', 'Zero-width space'], correctAnswer: 0, explanation: 'U+200E is the left-to-right mark.', difficulty: 2 },
          { id: 'emojis-31-q5', type: 'true-false', question: 'RTL text containing emoji always displays correctly.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Emoji in RTL text may appear in unexpected positions.', difficulty: 1 },
          { id: 'emojis-31-q6', type: 'mcq', question: 'Which HTML attribute sets text direction?', options: ['dir', 'lang', 'align', 'direction'], correctAnswer: 0, explanation: 'The dir attribute controls text direction.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-31-e1', type: 'easy', title: 'Bidirectional Text Tester', instructions: 'Create an HTML page that lets users enter text with emoji and toggle between LTR and RTL display.', hint: 'Use the dir attribute on a div.', starterCode: '<input id="input" value="Hello 😀 مرحبا 🚀" style="width:100%">\n<button onclick="document.getElementById(\"display\").dir=\\\"ltr\\\"">LTR</button>\n<button onclick="document.getElementById(\"display\").dir=\\\"rtl\\\"">RTL</button>\n<div id="display" style="font-size:24px; border:1px solid #ccc; padding:10px; margin-top:10px"></div>\n<script>\n  document.getElementById("input").oninput = function() {\n    document.getElementById("display").textContent = this.value;\n  };\n  document.getElementById("display").textContent = document.getElementById("input").value;\n</script>', solution: '<input id="input" value="Hello 😀 مرحبا 🚀" style="width:100%">\n<button onclick="document.getElementById(\"display\").dir=\"ltr\"">LTR</button>\n<button onclick="document.getElementById(\"display\").dir=\"rtl\"">RTL</button>\n<div id="display" style="font-size:24px; border:1px solid #ccc; padding:10px; margin-top:10px"></div>\n<script>\n  document.getElementById("input").oninput = function() {\n    document.getElementById("display").textContent = this.value;\n  };\n  document.getElementById("display").textContent = document.getElementById("input").value;\n</script>' }
      ],
      cheatSheet: [
        { label: 'Bidi Algorithm', value: 'Handles LTR/RTL text mixing' },
        { label: 'LRM (U+200E)', value: 'Left-to-right mark' },
        { label: 'RLM (U+200F)', value: 'Right-to-left mark' },
        { label: 'dir attribute', value: 'HTML dir=\"ltr\" or \"rtl\"' },
        { label: 'Emoji Direction', value: 'Default LTR in bidi contexts' }
      ]
    },
    {
      id: 'emojis-32', number: 32, partLabel: 'Part 4: Advanced Text Processing', title: 'Regex with Unicode', subtitle: '\\p{}, \\P{}, u flag, and Unicode property escapes', difficulty: 'Intermediate', estimatedMinutes: 45, xpReward: 65, prerequisites: ['emojis-21'],
      learningObjectives: [
        'Use Unicode property escapes in regex',
        'Apply the u flag for correct Unicode handling',
        'Match emoji with regex patterns',
        'Build Unicode-aware validation patterns'
      ],
      sections: [
        {
          id: 's1', title: 'Unicode Property Escapes',
          whyItMatters: 'Traditional regex character classes fail with Unicode. Property escapes handle all scripts correctly.',
          content: "### The u Flag\n\nThe `u` flag enables proper Unicode matching: `/😀/u.test(str)`. Without it, regex treats the string as UTF-16 code units.\n\n### \\\\p{} and \\\\P{} Escapes\n\n- `\\\\p{L}`: Any Unicode letter\n- `\\\\p{N}`: Any Unicode number\n- `\\\\p{P}`: Punctuation\n- `\\\\p{Emoji}`: Any emoji character\n- `\\\\p{Script=Latin}`: Latin script characters\n- `\\\\P{ASCII}`: Negation (not ASCII)\n\n### General vs Specific Properties\n\n```javascript\n/\\\\p{L}/u.test(\"A\"); // true\n/\\\\p{L}/u.test(\"あ\"); // true (Japanese hiragana)\n/\\\\p{Emoji}/u.test(\"😀\"); // true\n/\\\\p{Script=Han}/u.test(\"中\"); // true (Chinese character)\n```"
        },
        {
          id: 's2', title: 'Matching Emoji with Regex',
          whyItMatters: 'Correct emoji regex patterns are needed for validation, extraction, and filtering.',
          content: "### Emoji Regex Patterns\n\n```javascript\n// Match any emoji character\nconst emojiRegex = /\\\\p{Emoji}/u;\n\n// Match emoji including sequences\nconst emojiSeqRegex = /\\\\p{Emoji}(\\\\u200D\\\\p{Emoji})*|\\\\p{Emoji_Presentation}|\\\\p{Emoji_Modifier_Base}/u;\n\n// Match specific categories\nconst smileyRegex = /[\\\\u{1F600}-\\\\u{1F64F}]/u;\n```\n\n### Practical Use Cases\n\n- Validating emoji-only input\n- Extracting emoji from text\n- Counting emoji occurrences\n- Replacing or filtering emoji\n- Category detection"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-32-q1', type: 'mcq', question: 'Which flag enables Unicode property escapes in regex?', options: ['u', 'g', 'i', 'm'], correctAnswer: 0, explanation: 'The u flag enables Unicode mode and property escapes.', difficulty: 1 },
          { id: 'emojis-32-q2', type: 'mcq', question: 'What regex pattern matches any Unicode letter?', options: ['\\\\p{L}', '\\\\w', '[A-Za-z]', '\\\\p{Letter}'], correctAnswer: 0, explanation: '\\\\p{L} matches any letter in any script.', difficulty: 1 },
          { id: 'emojis-32-q3', type: 'true-false', question: '\\\\p{Emoji} matches all emoji including sequences.', options: ['True', 'False'], correctAnswer: 1, explanation: '\\\\p{Emoji} matches base emoji only, not all ZWJ sequences.', difficulty: 2 },
          { id: 'emojis-32-q4', type: 'mcq', question: 'What does \\\\P{ASCII} match?', options: ['Any non-ASCII character', 'ASCII characters', 'Punctuation', 'All characters'], correctAnswer: 0, explanation: '\\\\P{...} is negation of \\\\p{...}.', difficulty: 2 },
          { id: 'emojis-32-q5', type: 'true-false', question: 'Regex without the u flag handles surrogate pairs correctly.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Without u flag, regex operates on UTF-16 code units.', difficulty: 2 },
          { id: 'emojis-32-q6', type: 'mcq', question: 'Which pattern matches Chinese characters?', options: ['\\\\p{Script=Han}', '\\\\p{Chinese}', '\\\\p{CJK}', '\\\\p{Ideograph}'], correctAnswer: 0, explanation: '\\\\p{Script=Han} matches CJK characters.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-32-e1', type: 'medium', title: 'Emoji Extractor', instructions: 'Write a function that extracts all emoji from a string using Unicode property escapes.', hint: 'Use match() with \\\\p{Emoji} and the u flag.', starterCode: '<script>\n  function extractEmoji(str) {\n    // your code here\n  }\n  console.log(extractEmoji("Hello 😀! Party 🎉 and rocket 🚀"));\n  console.log(extractEmoji("No emoji here"));\n</script>', solution: '<script>\n  function extractEmoji(str) {\n    const matches = str.match(/\\\\p{Emoji}/gu);\n    return matches || [];\n  }\n  console.log(extractEmoji("Hello 😀! Party 🎉 and rocket 🚀"));\n  console.log(extractEmoji("No emoji here"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'u flag', value: 'Unicode mode for regex' },
        { label: '\\\\p{L}', value: 'Match any Unicode letter' },
        { label: '\\\\p{Emoji}', value: 'Match emoji characters' },
        { label: '\\\\p{Script=...}', value: 'Match by writing system' },
        { label: '\\\\P{...}', value: 'Negation of \\\\p{...}' }
      ]
    },
    {
      id: 'emojis-33', number: 33, partLabel: 'Part 4: Advanced Text Processing', title: 'String Length Problems', subtitle: 'Length vs count vs visual width, and grapheme counting', difficulty: 'Intermediate', estimatedMinutes: 35, xpReward: 55, prerequisites: ['emojis-29'],
      learningObjectives: [
        'Understand why string length is problematic with emoji',
        'Distinguish between code units, code points, and grapheme clusters',
        'Calculate visual width of emoji strings',
        'Implement correct character counting for social media constraints'
      ],
      sections: [
        {
          id: 's1', title: 'The Length Confusion',
          whyItMatters: 'Social media character counts, form validation, and database limits all rely on correct length calculation.',
          content: "### Three Ways to Measure Length\n\n1. **UTF-16 code units** (str.length): \"😀\" = 2\n2. **Code points** (Array.from(str).length): \"😀\" = 1\n3. **Grapheme clusters** (Intl.Segmenter): \"👨‍👩‍👧‍👦\" = 1\n\n### Real-World Impact\n\nTwitter counts by code points (codepoints). Instagram counts by grapheme clusters. MySQL utf8mb4 limits by bytes. Using the wrong measurement leads to data truncation or user frustration.\n\n### Visual Width\n\nEmoji may display at different widths. Some emoji are double-width (CJK) or have variable width (flags, ZWJ sequences). The Intl.Segmenter does not measure visual width."
        },
        {
          id: 's2', title: 'Implementing Correct Counting',
          whyItMatters: 'Database columns, API limits, and UI components need correct character counting with emoji.',
          content: "### Code Point Counting (Twitter-style)\n\n```javascript\nconst count = [...str].length;\n```\n\n### Grapheme Counting (Instagram-style)\n\n```javascript\nconst segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });\nconst count = [...segmenter.segment(str)].length;\n```\n\n### Byte Counting (MySQL-style)\n\n```javascript\nconst encoder = new TextEncoder();\nconst bytes = encoder.encode(str).length;\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-33-q1', type: 'mcq', question: 'What does "😀".length return in JavaScript?', options: ['2', '1', '4', '0'], correctAnswer: 0, explanation: 'length counts UTF-16 code units.', difficulty: 1 },
          { id: 'emojis-33-q2', type: 'true-false', question: 'Grapheme cluster count is always less than or equal to code point count.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Multiple code points can form one grapheme cluster.', difficulty: 2 },
          { id: 'emojis-33-q3', type: 'mcq', question: 'How does Twitter count characters?', options: ['By code points', 'By UTF-16 units', 'By grapheme clusters', 'By bytes'], correctAnswer: 0, explanation: 'Twitter counts Unicode code points.', difficulty: 2 },
          { id: 'emojis-33-q4', type: 'mcq', question: 'Which API counts UTF-8 bytes?', options: ['TextEncoder', 'Intl.Segmenter', 'String.length', 'Array.from'], correctAnswer: 0, explanation: 'TextEncoder encodes to UTF-8 bytes.', difficulty: 2 },
          { id: 'emojis-33-q5', type: 'true-false', question: 'All emoji have the same visual width.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Flag emoji and ZWJ sequences may have different widths.', difficulty: 1 },
          { id: 'emojis-33-q6', type: 'mcq', question: 'How many bytes does 😀 use in UTF-8?', options: ['4', '2', '3', '1'], correctAnswer: 0, explanation: 'U+1F600 encodes to 4 bytes in UTF-8.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-33-e1', type: 'easy', title: 'Multi-Method String Length', instructions: 'Write a function that returns the length of a string in code units, code points, grapheme clusters, and UTF-8 bytes.', hint: 'Use .length, Array.from, Intl.Segmenter, and TextEncoder.', starterCode: '<script>\n  function analyzeLength(str) {\n    // your code here\n  }\n  console.log(analyzeLength("Hello"));\n  console.log(analyzeLength("😀"));\n  console.log(analyzeLength("👨‍👩‍👧‍👦"));\n</script>', solution: '<script>\n  function analyzeLength(str) {\n    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });\n    return {\n      utf16Units: str.length,\n      codePoints: Array.from(str).length,\n      graphemeClusters: [...segmenter.segment(str)].length,\n      utf8Bytes: new TextEncoder().encode(str).length\n    };\n  }\n  console.log(analyzeLength("Hello"));\n  console.log(analyzeLength("😀"));\n  console.log(analyzeLength("👨‍👩‍👧‍👦"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'str.length', value: 'UTF-16 code units (wrong for emoji)' },
        { label: 'Array.from().length', value: 'Code point count' },
        { label: 'Intl.Segmenter', value: 'Grapheme cluster count' },
        { label: 'TextEncoder', value: 'Byte count in UTF-8' },
        { label: 'Visual Width', value: 'Not directly measurable in JS' }
      ]
    },
    {
      id: 'emojis-34', number: 34, partLabel: 'Part 4: Advanced Text Processing', title: 'Emoji Parsing', subtitle: 'Detecting emoji, extracting emoji, and emoji sequences', difficulty: 'Advanced', estimatedMinutes: 45, xpReward: 70, prerequisites: ['emojis-32'],
      learningObjectives: [
        'Detect emoji in text with regex and Unicode properties',
        'Extract emoji sequences including ZWJ and flags',
        'Parse emoji modifiers and skin tones',
        'Build an emoji lexer for text processing'
      ],
      sections: [
        {
          id: 's1', title: 'Emoji Detection and Extraction',
          whyItMatters: 'Applications need to detect emoji for analytics, filtering, and processing.',
          content: "### Basic Detection\n\n```javascript\nconst hasEmoji = /\\\\p{Emoji}/u.test(text);\n```\n\n### Full Emoji Sequence Detection\n\nModern emoji include ZWJ sequences, modifiers, and flag pairs. A complete emoji regex must handle:\n- Single emoji: 😀\n- With variation selector: ❤️\n- With skin tone: 👋🏽\n- ZWJ sequences: 👨‍👩‍👧\n- Flag sequences: 🇯🇵\n- Keycap sequences: #️⃣"
        },
        {
          id: 's2', title: 'Building an Emoji Parser',
          whyItMatters: 'Proper emoji parsing enables analytics, content filtering, and emoji-aware text manipulation.',
          content: "### Parser Strategy\n\n1. Walk the string using the Unicode segmentation algorithm\n2. For each grapheme cluster, check if it contains emoji\n3. If it contains only emoji, classify as emoji grapheme\n4. Return segments with type annotations\n\n### Emoji Lexer Example\n\n```javascript\nfunction tokenize(str) {\n  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });\n  const tokens = [];\n  for (const { segment } of segmenter.segment(str)) {\n    tokens.push({\n      text: segment,\n      isEmoji: /\\\\p{Emoji}/u.test(segment),\n      length: segment.length\n    });\n  }\n  return tokens;\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-34-q1', type: 'mcq', question: 'What is the simplest way to detect emoji in a string?', options: ['/\\\\p{Emoji}/u.test(str)', '/[😀-😎]/.test(str)', 'emoji.length > 1', 'str.includes("😀")'], correctAnswer: 0, explanation: '\\\\p{Emoji} with u flag detects any emoji.', difficulty: 1 },
          { id: 'emojis-34-q2', type: 'true-false', question: 'A simple /\\\\p{Emoji}/u pattern catches all emoji including ZWJ sequences.', options: ['True', 'False'], correctAnswer: 0, explanation: '\\\\p{Emoji} matches the base emoji in ZWJ sequences.', difficulty: 2 },
          { id: 'emojis-34-q3', type: 'mcq', question: 'What does Intl.Segmenter segment by default?', options: ['Grapheme clusters', 'Code points', 'UTF-16 units', 'Words'], correctAnswer: 0, explanation: 'Intl.Segmenter can segment by grapheme, word, or sentence.', difficulty: 1 },
          { id: 'emojis-34-q4', type: 'mcq', question: 'Which of these is NOT an emoji sequence type?', options: ['HTML sequence', 'ZWJ sequence', 'Flag sequence', 'Keycap sequence'], correctAnswer: 0, explanation: 'HTML sequences are not a Unicode emoji sequence type.', difficulty: 2 },
          { id: 'emojis-34-q5', type: 'true-false', question: 'All emoji in a string can be extracted with a single regex.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A well-formed regex with \\\\p{Emoji} can extract emoji.', difficulty: 1 },
          { id: 'emojis-34-q6', type: 'mcq', question: 'How would you classify a segment as emoji?', options: ['Check if it matches \\\\p{Emoji}', 'Check if it has a code point above U+FFFF', 'Check if it is a surrogate pair', 'Check font support'], correctAnswer: 0, explanation: '\\\\p{Emoji} property escape classifies as emoji.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-34-e1', type: 'hard', title: 'Emoji Tokenizer', instructions: 'Build a tokenizer that breaks text into tokens, classifying each as emoji or text.', hint: 'Use Intl.Segmenter for grapheme segmentation and regex for emoji detection.', starterCode: '<script>\n  function tokenize(text) {\n    // your code here\n  }\n  console.log(tokenize("Hello 😀! Let us go 🚀"));\n  console.log(tokenize("Family: 👨‍👩‍👧‍👦"));\n</script>', solution: '<script>\n  function tokenize(text) {\n    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });\n    const tokens = [];\n    for (const { segment } of segmenter.segment(text)) {\n      if (/\\\\p{Emoji}/u.test(segment)) {\n        tokens.push({ type: "emoji", value: segment, cps: [...segment].map(c => "U+" + c.codePointAt(0).toString(16).toUpperCase()).join(" ") });\n      } else if (/\\\\s/u.test(segment)) {\n        tokens.push({ type: "whitespace", value: segment });\n      } else {\n        tokens.push({ type: "text", value: segment });\n      }\n    }\n    return tokens;\n  }\n  console.log(tokenize("Hello 😀! Let us go 🚀"));\n  console.log(tokenize("Family: 👨‍👩‍👧‍👦"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Emoji Detection', value: '/\\\\p{Emoji}/u.test(str)' },
        { label: 'Emoji Sequences', value: 'Single, ZWJ, flag, keycap, modifier' },
        { label: 'Intl.Segmenter', value: 'Grapheme cluster segmentation' },
        { label: 'Tokenizer', value: 'Classify segments as emoji/text' },
        { label: 'Variation Selector', value: 'U+FE0E/U+FE0F in sequences' }
      ]
    },
    {
      id: 'emojis-35', number: 35, partLabel: 'Part 4: Advanced Text Processing', title: 'Text Sanitization', subtitle: 'Encoding validation, normalization, and security best practices', difficulty: 'Advanced', estimatedMinutes: 40, xpReward: 65, prerequisites: ['emojis-30', 'emojis-34'],
      learningObjectives: [
        'Validate UTF-8 encoding properly',
        'Normalize text for consistent storage',
        'Sanitize user input containing emoji',
        'Apply security best practices for text processing'
      ],
      sections: [
        {
          id: 's1', title: 'Encoding Validation',
          whyItMatters: 'Invalid UTF-8 sequences can cause security vulnerabilities and data corruption.',
          content: "### UTF-8 Validation Rules\n\n- Every non-ASCII byte must be valid UTF-8\n- Overlong sequences must be rejected\n- Surrogate code points (U+D800-U+DFFF) must be rejected\n- Code points must not exceed U+10FFFF\n\n### Validation in JavaScript\n\n```javascript\nconst encoder = new TextEncoder();\nconst decoder = new TextDecoder('utf-8', { fatal: true });\ntry {\n  decoder.decode(encoder.encode(input));\n} catch {\n  // Invalid UTF-8\n}\n```"
        },
        {
          id: 's2', title: 'Sanitization Best Practices',
          whyItMatters: 'Proper sanitization prevents injection attacks, data corruption, and security vulnerabilities.',
          content: "### Emoji in User Input\n\n- Normalize to NFC for storage consistency\n- Validate emoji length against limits\n- Reject or escape control characters (except line breaks)\n- Beware of bidi override characters that can hide code\n\n### Security Checks\n\n- Watch for overly long emoji sequences that bypass length limits\n- Detect and reject invalid ZWJ sequences\n- Strip variation selectors from text-only contexts\n- Validate against known Unicode security issues (UTR #36)"
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-35-q1', type: 'mcq', question: 'Which code points must be rejected in valid UTF-8?', options: ['U+D800-U+DFFF (surrogates)', 'U+0000-U+007F (ASCII)', 'U+1F600-U+1F64F (emoji)', 'U+2000-U+206F (punctuation)'], correctAnswer: 0, explanation: 'Surrogate code points are invalid in UTF-8.', difficulty: 2 },
          { id: 'emojis-35-q2', type: 'true-false', question: 'Overlong UTF-8 sequences should be accepted.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Overlong sequences must be rejected per RFC 3629.', difficulty: 2 },
          { id: 'emojis-35-q3', type: 'mcq', question: 'Which normalization is recommended for storage?', options: ['NFC', 'NFD', 'NFKC', 'NFKD'], correctAnswer: 0, explanation: 'NFC is recommended for consistent storage.', difficulty: 1 },
          { id: 'emojis-35-q4', type: 'mcq', question: 'What TextDecoder option makes invalid UTF-8 throw?', options: ['fatal: true', 'strict: true', 'validate: true', 'error: true'], correctAnswer: 0, explanation: 'fatal: true causes TextDecoder to throw on invalid input.', difficulty: 2 },
          { id: 'emojis-35-q5', type: 'true-false', question: 'Bidi override characters are safe in user input.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Bidi overrides can be used for homoglyph attacks.', difficulty: 2 },
          { id: 'emojis-35-q6', type: 'mcq', question: 'Which Unicode Technical Report covers security issues?', options: ['UTR #36', 'UTR #39', 'UTR #51', 'UTR #29'], correctAnswer: 0, explanation: 'UTR #36 = Unicode Security Considerations.', difficulty: 3 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-35-e1', type: 'hard', title: 'UTF-8 Validator', instructions: 'Build a function that validates whether a byte sequence is valid UTF-8, checking for overlong sequences, surrogates, and out-of-range code points.', hint: 'Use TextDecoder with fatal: true or implement the validation algorithm manually.', starterCode: '<script>\n  function isValidUTF8(bytes) {\n    // your code here\n  }\n  const encoder = new TextEncoder();\n  console.log(isValidUTF8(encoder.encode("Hello")));\n  console.log(isValidUTF8(encoder.encode("😀")));\n</script>', solution: '<script>\n  function isValidUTF8(bytes) {\n    try {\n      new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes));\n      return true;\n    } catch {\n      return false;\n    }\n  }\n  const encoder = new TextEncoder();\n  console.log(isValidUTF8(encoder.encode("Hello")));\n  console.log(isValidUTF8(encoder.encode("😀")));\n</script>' }
      ],
      cheatSheet: [
        { label: 'UTF-8 Validation', value: 'Reject overlong, surrogates, >U+10FFFF' },
        { label: 'TextDecoder', value: 'fatal: true for strict validation' },
        { label: 'Normalization', value: 'NFC recommended for storage' },
        { label: 'Bidi Overrides', value: 'Potential security risk, sanitize carefully' },
        { label: 'UTR #36', value: 'Unicode Security Considerations' }
      ]
    },
    {
      id: 'emojis-36', number: 36, partLabel: 'Part 4: Advanced Text Processing', title: 'Unicode Security Issues', subtitle: 'Homoglyph attacks, bidi attacks, and normalization attacks', difficulty: 'Advanced', estimatedMinutes: 45, xpReward: 75, prerequisites: ['emojis-35'],
      learningObjectives: [
        'Recognize homoglyph attack vectors',
        'Understand bidirectional text attacks',
        'Defend against normalization-based attacks',
        'Implement Unicode security best practices'
      ],
      sections: [
        {
          id: 's1', title: 'Homoglyph Attacks',
          whyItMatters: 'Attackers use visually similar Unicode characters to trick users and bypass filters.',
          content: "### What Are Homoglyphs?\n\nHomoglyphs are characters that look similar or identical but have different code points. Examples:\n- Latin 'A' (U+0041) vs Cyrillic 'А' (U+0410)\n- Latin 'e' (U+0065) vs Cyrillic 'е' (U+0435)\n\n### Attack Vectors\n\n- Phishing: registering domains with Cyrillic characters (арple.com instead of apple.com)\n- Code injection: using homoglyphs to bypass filters\n- Username impersonation: creating accounts with visually identical names\n\n### Defense\n\n- Use NFKC normalization for identifiers\n- Display punycode for internationalized domain names\n- Block mixed-script confusables"
        },
        {
          id: 's2', title: 'Bidi and Normalization Attacks',
          whyItMatters: 'These attacks can hide malicious code or break security checks.',
          content: "### Bidi Attacks\n\nBidi override characters (U+202E, etc.) can reverse text direction, hiding malicious code in otherwise innocent-looking text. Example: a comment containing `if (false) {` followed by bidi override that reverses the code structure.\n\n### Defense\n\n- Reject or escape bidi control characters in user input\n- Use confusable detection libraries\n- Apply strict input validation on identifiers\n\n### Normalization Attacks\n\nAttackers exploit normalization differences between systems. A string may pass security checks on input but transform to dangerous characters after normalization."
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-36-q1', type: 'mcq', question: 'What are homoglyphs?', options: ['Characters that look similar but differ in code point', 'Same character in multiple scripts', 'Emoji that look alike', 'Font variations'], correctAnswer: 0, explanation: 'Homoglyphs are visually similar characters with different code points.', difficulty: 2 },
          { id: 'emojis-36-q2', type: 'true-false', question: 'Homoglyph attacks are primarily a phishing technique.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Homoglyphs are commonly used in domain spoofing.', difficulty: 1 },
          { id: 'emojis-36-q3', type: 'mcq', question: 'Which normalization helps defend against homoglyphs?', options: ['NFKC', 'NFC', 'NFD', 'NFKD'], correctAnswer: 0, explanation: 'NFKC normalizes many confusable characters.', difficulty: 2 },
          { id: 'emojis-36-q4', type: 'mcq', question: 'What character can reverse text direction?', options: ['U+202E (RIGHT-TO-LEFT OVERRIDE)', 'U+200B (zero-width space)', 'U+FEFF (BOM)', 'U+2060 (word joiner)'], correctAnswer: 0, explanation: 'U+202E reverses text direction.', difficulty: 2 },
          { id: 'emojis-36-q5', type: 'true-false', question: 'All Unicode characters are safe to accept in user input.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Control characters, bidi overrides, and homoglyphs pose security risks.', difficulty: 1 },
          { id: 'emojis-36-q6', type: 'mcq', question: 'How should internationalized domain names be displayed?', options: ['As punycode when they contain non-ASCII', 'Always as Unicode', 'Only as ASCII', 'With emoji'], correctAnswer: 0, explanation: 'Show punycode for domains with mixed-script confusables.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-36-e1', type: 'hard', title: 'Homoglyph Detector', instructions: 'Write a function that detects if a string contains homoglyph characters by identifying mixed scripts that should not appear together.', hint: 'Use \\\\p{Script} property escapes and check for unexpected script mixing.', starterCode: '<script>\n  function hasHomoglyphs(str) {\n    // your code here\n  }\n  console.log(hasHomoglyphs("apple")); // Latin a only\n  console.log(hasHomoglyphs("арple")); // Cyrillic а\n</script>', solution: '<script>\n  function hasHomoglyphs(str) {\n    if (str.length < 2) return false;\n    const scripts = new Set();\n    for (const char of str) {\n      const cp = char.codePointAt(0);\n      if (cp < 0x80) continue;\n      if (/\\\\p{Script=Latin}/u.test(char)) scripts.add("Latin");\n      if (/\\\\p{Script=Cyrillic}/u.test(char)) scripts.add("Cyrillic");\n      if (/\\\\p{Script=Greek}/u.test(char)) scripts.add("Greek");\n    }\n    return scripts.size > 1;\n  }\n  console.log(hasHomoglyphs("apple"));\n  console.log(hasHomoglyphs("арple"));\n</script>' }
      ],
      cheatSheet: [
        { label: 'Homoglyph', value: 'Characters that look alike but differ in code point' },
        { label: 'Bidi Override', value: 'U+202E reverses text direction' },
        { label: 'NFKC Defense', value: 'Normalize identifiers to prevent spoofing' },
        { label: 'Mixed Scripts', value: 'Detect unexpected script mixing' },
        { label: 'UTR #36', value: 'Security considerations for Unicode' }
      ]
    },
    {
      id: 'emojis-37',
      number: 37,
      partLabel: 'Part 5: Projects',
      title: 'Project: Emoji Picker App',
      subtitle: 'Build an interactive emoji picker widget',
      difficulty: 'Intermediate',
      estimatedMinutes: 60,
      xpReward: 100,
      prerequisites: ['emojis-9', 'emojis-11'],
      learningObjectives: [
        'Build a complete emoji picker component from scratch',
        'Implement search and category filtering',
        'Handle emoji selection and insertion',
        'Ensure accessibility with ARIA labels'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'An emoji picker is a practical UI component used in messaging apps, email clients, and social media platforms.',
          content: '## Emoji Picker Requirements\n\nBuild a fully functional emoji picker with these features:\n\n### Core Features\n- Grid display of emoji by category\n- Search bar for finding emoji by name\n- Category tabs (Smileys, Animals, Food, etc.)\n- Click to select/copy emoji\n- Recently used section\n\n### Technical Requirements\n- Render from emoji data (hardcoded set of 100+ emoji)\n- Keyboard navigation (arrow keys, tab, enter)\n- ARIA labels for screen readers\n- Responsive design\n- Click outside to close'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-37-q1', type: 'mcq', question: 'What ARIA role should an emoji picker use?', options: ['listbox', 'dialog', 'menu', 'grid'], correctAnswer: 0, explanation: 'A listbox role is appropriate for selecting from a list of emoji.', difficulty: 1 },
          { id: 'emojis-37-q2', type: 'mcq', question: 'Which is the best event to listen for emoji selection?', options: ['click', 'mouseover', 'focus', 'change'], correctAnswer: 0, explanation: 'Click is the standard selection event.', difficulty: 1 },
          { id: 'emojis-37-q3', type: 'true-false', question: 'Emoji pickers should use aria-label for each emoji.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Each emoji needs an accessible name.', difficulty: 1 },
          { id: 'emojis-37-q4', type: 'mcq', question: 'How should recently used emoji be stored?', options: ['localStorage', 'sessionStorage', 'cookies', 'IndexedDB'], correctAnswer: 0, explanation: 'localStorage persists across sessions and is simple to use.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
          { id: 'emojis-37-e1', type: 'hard', title: 'Build a Complete Emoji Picker', instructions: 'Build a working emoji picker that displays emoji by category, supports search, keyboard navigation, and copies selected emoji to the clipboard. Include at least 50 emoji across 5 categories.', hint: 'Use navigator.clipboard.writeText for copying emoji.', starterCode: '<div id="picker"></div>\n<script>\n  const emojis = [\n    { char: "😀", name: "grinning face", cat: "smileys" },\n    { char: "😂", name: "tears of joy", cat: "smileys" },\n    { char: "👍", name: "thumbs up", cat: "people" },\n    { char: "🎉", name: "party popper", cat: "activities" },\n    { char: "❤️", name: "red heart", cat: "symbols" }\n  ];\n</script>', solution: `<div id="picker"></div>\n<script>\n  const emojis = [\n    { char: "😀", name: "grinning face", cat: "smileys" },\n    { char: "😂", name: "tears of joy", cat: "smileys" },\n    { char: "😍", name: "heart eyes", cat: "smileys" },\n    { char: "👍", name: "thumbs up", cat: "people" },\n    { char: "🎉", name: "party popper", cat: "activities" },\n    { char: "❤️", name: "red heart", cat: "symbols" },\n    { char: "🐶", name: "dog face", cat: "animals" },\n    { char: "🍕", name: "pizza", cat: "food" },\n    { char: "🚀", name: "rocket", cat: "travel" },\n    { char: "💡", name: "light bulb", cat: "objects" }\n  ];\n  const cats = [...new Set(emojis.map(e => e.cat))];\n  let html = '<input id="search" placeholder="Search..."><div id="tabs">';\n  cats.forEach(c => { html += '<button class="tab" data-cat="' + c + '">' + c + '</button>'; });\n  html += '</div><div id="grid"></div>';\n  document.getElementById("picker").innerHTML = html;\n  function render(cat) {\n    const items = cat ? emojis.filter(e => e.cat === cat) : emojis;\n    document.getElementById("grid").innerHTML = items.map(e =>\n      '<span class="emoji" role="option" aria-label="' + e.name + '">' + e.char + '</span>'\n    ).join("");\n  }\n  render(null);\n  document.querySelectorAll(".tab").forEach(btn => {\n    btn.onclick = () => render(btn.dataset.cat);\n  });\n  document.getElementById("grid").onclick = (e) => {\n    if (e.target.classList.contains("emoji")) {\n      navigator.clipboard.writeText(e.target.textContent);\n    }\n  };\n</script>` }
      ],
      cheatSheet: [
        { label: 'ARIA role', value: 'listbox for emoji grid' },
        { label: 'Clipboard API', value: 'navigator.clipboard.writeText()' },
        { label: 'Keyboard nav', value: 'Arrow keys, Tab, Enter' },
        { label: 'Persistence', value: 'localStorage for recent emoji' },
        { label: 'Accessibility', value: 'aria-label on each emoji' }
      ]
    },
    {
      id: 'emojis-38',
      number: 38,
      partLabel: 'Part 5: Projects',
      title: 'Project: Unicode Converter',
      subtitle: 'Build a tool to convert between Unicode encodings',
      difficulty: 'Intermediate',
      estimatedMinutes: 45,
      xpReward: 90,
      prerequisites: ['emojis-4', 'emojis-5', 'emojis-7'],
      learningObjectives: [
        'Build a real-time Unicode encoding converter',
        'Display UTF-8, UTF-16, and UTF-32 byte representations',
        'Implement encoding detection from byte sequences',
        'Create an accessible educational tool'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'A Unicode converter helps developers debug encoding issues and understand how text is stored.',
          content: '## Unicode Converter Requirements\n\nBuild a tool that converts input text into multiple encodings:\n\n### Input/Output\n- Text input area\n- UTF-8 byte display (hex and binary)\n- UTF-16LE and UTF-16BE byte display\n- Code point display (U+XXXX for each character)\n- Character breakdown showing each char\n\n### Features\n- Real-time conversion as user types\n- Hex and binary toggle\n- Color-coded byte sequences\n- Copy bytes as hex string\n- Support for BMP and supplementary characters'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-38-q1', type: 'mcq', question: 'What does TextEncoder.encode() return?', options: ['Uint8Array', 'ArrayBuffer', 'string', 'Blob'], correctAnswer: 0, explanation: 'TextEncoder returns a Uint8Array of UTF-8 bytes.', difficulty: 1 },
          { id: 'emojis-38-q2', type: 'true-false', question: 'DataView can specify endianness for multi-byte values.', options: ['True', 'False'], correctAnswer: 0, explanation: 'DataView methods like getUint16 accept an endianness parameter.', difficulty: 1 },
          { id: 'emojis-38-q3', type: 'mcq', question: 'How do you convert a string to UTF-16 bytes in JavaScript?', options: ['Use DataView with charCodeAt', 'Use TextEncoder', 'Use btoa', 'Use JSON.stringify'], correctAnswer: 0, explanation: 'Iterate characters, use charCodeAt/codePointAt, write to DataView.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-38-e1', type: 'hard', title: 'Build a Unicode Converter', instructions: 'Create a Unicode converter that shows input text as UTF-8 hex, UTF-16 hex, code points, and binary. Update in real-time as the user types.', hint: 'Use TextEncoder for UTF-8, DataView for UTF-16.', starterCode: '<textarea id="input" rows="3">Hello</textarea>\n<pre id="output"></pre>', solution: '<textarea id="input" rows="3">Hello 😀</textarea>\n<pre id="output"></pre>\n<script>\n  function convert() {\n    const text = document.getElementById("input").value;\n    const out = [];\n    for (const c of text) {\n      const cp = c.codePointAt(0);\n      out.push("Char: " + c + "  U+" + cp.toString(16).toUpperCase().padStart(4, "0") + "  Dec: " + cp);\n    }\n    const utf8 = new TextEncoder().encode(text);\n    out.push("");\n    out.push("UTF-8 (" + utf8.length + " bytes):");\n    out.push(Array.from(utf8).map(b => b.toString(16).padStart(2,"0").toUpperCase()).join(" "));\n    out.push("Text length: " + text.length + ", Code points: " + [...text].length);\n    document.getElementById("output").textContent = out.join("\\n");\n  }\n  document.getElementById("input").addEventListener("input", convert);\n  convert();\n</script>' }
      ],
      cheatSheet: [
        { label: 'TextEncoder', value: 'UTF-8 encoding in browser' },
        { label: 'codePointAt()', value: 'Get code point from character' },
        { label: 'fromCodePoint()', value: 'Create character from code point' },
        { label: 'DataView', value: 'Read/write with specific endianness' },
        { label: 'Uint8Array', value: 'Byte array for encoding output' }
      ]
    },
    {
      id: 'emojis-39',
      number: 39,
      partLabel: 'Part 5: Projects',
      title: 'Project: Emoji Search Engine',
      subtitle: 'Build a full-text emoji search tool',
      difficulty: 'Intermediate',
      estimatedMinutes: 45,
      xpReward: 90,
      prerequisites: ['emojis-11', 'emojis-21'],
      learningObjectives: [
        'Build a search index for emoji by name and keywords',
        'Implement fuzzy search with scoring',
        'Handle international emoji names',
        'Optimize search performance for large datasets'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'Searching emoji by name is a common feature in messaging apps and operating systems.',
          content: '## Emoji Search Engine\n\nBuild a search engine that indexes emoji by name, keywords, and category:\n\n### Data\n- Index at least 200 emoji with names and keywords\n- Use CLDR (Common Locale Data Repository) names\n- Map English names to emoji characters\n\n### Search Features\n- Full-text search across names and keywords\n- Fuzzy matching for typos\n- Results sorted by relevance\n- Category filters\n- Keyboard shortcuts'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-39-q1', type: 'mcq', question: 'What is the best data structure for full-text search?', options: ['Inverted index', 'Hash map', 'Linked list', 'Binary tree'], correctAnswer: 0, explanation: 'Inverted indexes map terms to documents for fast lookup.', difficulty: 2 },
          { id: 'emojis-39-q2', type: 'true-false', question: 'Debouncing input improves search performance.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Debouncing prevents searching on every keystroke.', difficulty: 1 },
          { id: 'emojis-39-q3', type: 'mcq', question: 'Which Levenshtein distance is best for typo tolerance?', options: ['1-2', '5-10', '0', '20+'], correctAnswer: 0, explanation: 'A distance of 1-2 catches common typos without false positives.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-39-e1', type: 'hard', title: 'Build Emoji Search', instructions: 'Create a search engine that searches through emoji by name and keyword. Include fuzzy matching and display results with relevance scores.', hint: 'Build an inverted index and use simple substring matching with scoring.', starterCode: '<input id="search" placeholder="Search emoji...">\n<div id="results"></div>\n<script>\n  const emojiDB = [\n    { char: "😀", name: "grinning face", keywords: ["happy", "smile", "face"] },\n    { char: "😂", name: "face with tears of joy", keywords: ["laugh", "cry", "happy"] },\n    { char: "👍", name: "thumbs up", keywords: ["like", "approve", "good"] },\n    { char: "🎉", name: "party popper", keywords: ["party", "celebration"] }\n  ];\n</script>', solution: '<input id="search" placeholder="Search emoji...">\n<div id="results"></div>\n<script>\n  const emojiDB = [\n    { char: "😀", name: "grinning face", keywords: ["happy", "smile", "face"] },\n    { char: "😂", name: "face with tears of joy", keywords: ["laugh", "cry", "happy"] },\n    { char: "😍", name: "heart eyes", keywords: ["love", "heart"] },\n    { char: "👍", name: "thumbs up", keywords: ["like", "approve", "good"] },\n    { char: "🎉", name: "party popper", keywords: ["party", "celebration"] },\n    { char: "🐶", name: "dog face", keywords: ["dog", "pet"] },\n    { char: "🍕", name: "pizza", keywords: ["food", "italian"] },\n    { char: "🚀", name: "rocket", keywords: ["space", "launch"] },\n    { char: "❤️", name: "red heart", keywords: ["love", "heart"] },\n    { char: "💡", name: "light bulb", keywords: ["idea", "light"] }\n  ];\n  function search(q) {\n    q = q.toLowerCase();\n    if (!q) return [];\n    return emojiDB.filter(e => {\n      const name = e.name.toLowerCase();\n      const kws = e.keywords.join(" ").toLowerCase();\n      return name.includes(q) || kws.includes(q);\n    }).slice(0, 20);\n  }\n  document.getElementById("search").addEventListener("input", function() {\n    const results = search(this.value);\n    document.getElementById("results").innerHTML = results.map(r =>\n      \'<div class="result">\' + r.char + " " + r.name + "</div>"\n    ).join("") || (this.value ? "<div>No results</div>" : "");\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Inverted index', value: 'Term to document mapping for fast search' },
        { label: 'Debounce', value: 'Delay search until user stops typing' },
        { label: 'Fuzzy match', value: 'Levenshtein distance for typos' },
        { label: 'Relevance', value: 'Score results by match quality' },
        { label: 'CLDR', value: 'Common Locale Data Repository for names' }
      ]
    },
    {
      id: 'emojis-40',
      number: 40,
      partLabel: 'Part 5: Projects',
      title: 'Project: Chat Emoji System',
      subtitle: 'Integrate emoji into a chat application',
      difficulty: 'Advanced',
      estimatedMinutes: 60,
      xpReward: 100,
      prerequisites: ['emojis-37', 'emojis-34'],
      learningObjectives: [
        'Build emoji auto-complete for chat input',
        'Handle emoji rendering in messages',
        'Implement emoji reactions',
        'Store and display emoji across users'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'Modern chat applications rely heavily on emoji for expression.',
          content: '## Chat Emoji System\n\nBuild a chat interface with integrated emoji support:\n\n### Auto-Complete\n- Type : followed by text triggers emoji suggestions\n- Suggestions appear in a popup\n- Tab or Enter to select\n\n### Emoji Reactions\n- Click messages to toggle reaction\n- Display reaction badges\n\n### Rendering\n- Emoji render with consistent size\n- Support for ZWJ sequences and skin tones'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-40-q1', type: 'mcq', question: 'What character typically triggers emoji auto-complete?', options: [':', '@', '#', '/'], correctAnswer: 0, explanation: 'Colon (:) is the standard trigger for emoji autocomplete.', difficulty: 1 },
          { id: 'emojis-40-q2', type: 'true-false', question: 'Emoji reactions use a separate data model from messages.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Reactions are typically stored as metadata on messages.', difficulty: 1 },
          { id: 'emojis-40-q3', type: 'mcq', question: 'How should long-press be implemented for mobile?', options: ['touchstart + timer', 'onclick', 'ondblclick', 'onhover'], correctAnswer: 0, explanation: 'Use touchstart with a timer to detect long-press.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-40-e1', type: 'hard', title: 'Build Chat Emoji System', instructions: 'Create a mini chat application with emoji auto-complete and emoji reactions on messages.', hint: 'Use contenteditable div for the input to handle emoji inline.', starterCode: '<div id="chat">\n  <div id="messages"></div>\n  <input id="chat-input" placeholder="Type : for emoji...">\n</div>', solution: '<div id="chat">\n  <div id="messages"></div>\n  <input id="chat-input" placeholder="Type : for emoji...">\n  <div id="suggestions" style="display:none"></div>\n</div>\n<script>\n  const emojiMap = {\n    "smile": "😀", "happy": "😊", "heart": "❤️",\n    "thumbsup": "👍", "party": "🎉", "fire": "🔥"\n  };\n  const messages = document.getElementById("messages");\n  const input = document.getElementById("chat-input");\n  const suggestions = document.getElementById("suggestions");\n  function sendMessage(text) {\n    const div = document.createElement("div");\n    div.textContent = text;\n    div.innerHTML += \' <span class="reactions" style="cursor:pointer;font-size:14px">👍 0</span>\';\n    div.querySelector(".reactions").onclick = function() {\n      const parts = this.textContent.split(" ");\n      this.textContent = "👍 " + (parseInt(parts[1]) + 1);\n    };\n    messages.appendChild(div);\n  }\n  input.oninput = function() {\n    const val = this.value;\n    const ci = val.lastIndexOf(":");\n    if (ci >= 0) {\n      const q = val.substring(ci + 1).toLowerCase();\n      const matches = Object.keys(emojiMap).filter(k => k.startsWith(q));\n      if (matches.length > 0) {\n        suggestions.style.display = "block";\n        suggestions.innerHTML = matches.slice(0, 5).map(m =>\n          \'<div data-key="\' + m + \'">\' + emojiMap[m] + " :" + m + "</div>"\n        ).join("");\n        suggestions.querySelectorAll("div").forEach(el => {\n          el.onclick = function() {\n            input.value = val.substring(0, ci) + emojiMap[this.dataset.key] + " ";\n            suggestions.style.display = "none";\n            input.focus();\n          };\n        });\n      } else { suggestions.style.display = "none"; }\n    } else { suggestions.style.display = "none"; }\n  };\n  input.onkeydown = function(e) {\n    if (e.key === "Enter" && this.value.trim()) {\n      sendMessage(this.value.trim());\n      this.value = "";\n      suggestions.style.display = "none";\n    }\n  };\n</script>' }
      ],
      cheatSheet: [
        { label: 'Auto-complete', value: 'Trigger on ":", filter emoji names' },
        { label: 'Reactions', value: 'Click message to toggle reaction' },
        { label: 'Data model', value: 'Store reactions per message' },
        { label: 'Long-press', value: 'touchstart + timer for mobile' }
      ]
    },
    {
      id: 'emojis-41',
      number: 41,
      partLabel: 'Part 5: Projects',
      title: 'Project: Emoji Analytics Tool',
      subtitle: 'Analyze emoji usage patterns in text',
      difficulty: 'Advanced',
      estimatedMinutes: 45,
      xpReward: 90,
      prerequisites: ['emojis-34', 'emojis-11'],
      learningObjectives: [
        'Extract and count emoji from text',
        'Build analytics dashboards for emoji usage',
        'Implement sentiment analysis from emoji',
        'Visualize emoji distribution with charts'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'Emoji analytics helps understand user sentiment and engagement.',
          content: '## Emoji Analytics Tool\n\nBuild an analytics dashboard that analyzes emoji from input text:\n\n### Features\n- Extract all emoji from text\n- Count frequency of each emoji\n- Sentiment scoring (positive/neutral/negative)\n- Category distribution\n- Most used emoji ranking\n\n### Data Processing\n- Handle large text inputs\n- Deduplicate ZWJ sequences\n- Group skin tone variants'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-41-q1', type: 'mcq', question: 'Which regex flag enables Unicode property escapes?', options: ['u', 'g', 'i', 'm'], correctAnswer: 0, explanation: 'The u (unicode) flag enables \\\\p{} escapes.', difficulty: 1 },
          { id: 'emojis-41-q2', type: 'true-false', question: 'Emoji analytics should group skin tone variants together.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Grouping variants provides cleaner analytics.', difficulty: 1 },
          { id: 'emojis-41-q3', type: 'mcq', question: 'How should sentiment be calculated from emoji?', options: ['Weighted scoring per emoji', 'Simple count', 'Random assignment', 'User input only'], correctAnswer: 0, explanation: 'Each emoji has a sentiment weight; sum for overall score.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-41-e1', type: 'hard', title: 'Build Emoji Analytics Dashboard', instructions: 'Create an analytics tool that takes text input and shows emoji frequency, sentiment score, category distribution, and a top emoji list.', hint: 'Use regex /\\\\p{Extended_Pictographic}/u to detect emoji.', starterCode: '<textarea id="text" rows="5">I love pizza! 🍕😀🎉</textarea>\n<button id="analyze">Analyze</button>\n<pre id="output"></pre>', solution: '<textarea id="text" rows="5">I love pizza! 🍕😀🎉 This is amazing! 😍👍❤️</textarea>\n<button id="analyze">Analyze</button>\n<pre id="output"></pre>\n<script>\n  const sentiment = { "😀":2, "😂":2, "😍":2, "🎉":2, "❤️":2, "👍":1, "😢":-2, "😡":-3, "😞":-2 };\n  document.getElementById("analyze").onclick = function() {\n    const text = document.getElementById("text").value;\n    const freq = {};\n    let total = 0, count = 0;\n    for (const c of text) {\n      if (/\\\\p{Extended_Pictographic}/u.test(c)) {\n        freq[c] = (freq[c] || 0) + 1;\n        total += sentiment[c] || 0;\n        count++;\n      }\n    }\n    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);\n    const avg = count > 0 ? (total / count).toFixed(2) : 0;\n    const lines = [\n      "Total emoji: " + count,\n      "Unique emoji: " + Object.keys(freq).length,\n      "Avg sentiment: " + avg + " (" + (avg > 0.5 ? "Positive" : avg < -0.5 ? "Negative" : "Neutral") + ")",\n      "", "Top Emoji:",\n      ...sorted.slice(0, 10).map(([e, c], i) => (i + 1) + ". " + e + " x" + c)\n    ];\n    document.getElementById("output").textContent = lines.join("\\n");\n  };\n</script>' }
      ],
      cheatSheet: [
        { label: 'Emoji regex', value: '\\\\p{Extended_Pictographic} with u flag' },
        { label: 'Sentiment', value: 'Weighted scoring per emoji type' },
        { label: 'Frequency', value: 'Count and sort by usage' },
        { label: 'Categories', value: 'Group by Unicode emoji category' }
      ]
    },
    {
      id: 'emojis-42',
      number: 42,
      partLabel: 'Part 5: Projects',
      title: 'Project: Unicode Inspector',
      subtitle: 'Build a comprehensive Unicode character inspector',
      difficulty: 'Advanced',
      estimatedMinutes: 60,
      xpReward: 100,
      prerequisites: ['emojis-6', 'emojis-8', 'emojis-29'],
      learningObjectives: [
        'Inspect individual Unicode characters in detail',
        'Display character properties from the Unicode Character Database',
        'Visualize byte sequences across encodings',
        'Analyze grapheme clusters and combining sequences'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'A Unicode inspector is an essential debugging tool for developers.',
          content: '## Unicode Inspector\n\nBuild a comprehensive character inspector:\n\n### Character Analysis\n- Code point (hex, decimal, binary)\n- Unicode block and script\n- General category\n- Age (Unicode version)\n\n### Encoding View\n- UTF-8 bytes with bit pattern breakdown\n- UTF-16 code units\n- URL encoding (%XX format)\n\n### Grapheme Analysis\n- Detect grapheme clusters\n- Show combining characters\n- Highlight ZWJ sequences'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-42-q1', type: 'mcq', question: 'Which method returns the Unicode code point of a character?', options: ['codePointAt(0)', 'charCodeAt(0)', 'charAt(0)', 'fromCodePoint()'], correctAnswer: 0, explanation: 'codePointAt(0) returns the full code point including supplementary characters.', difficulty: 1 },
          { id: 'emojis-42-q2', type: 'true-false', question: 'URL encoding uses % followed by two hex digits per byte.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Percent-encoding encodes bytes as %XX.', difficulty: 1 },
          { id: 'emojis-42-q3', type: 'mcq', question: 'What property identifies the Unicode version that added a character?', options: ['Age', 'Version', 'Since', 'Added'], correctAnswer: 0, explanation: 'The Age property in UCD indicates when a character was added.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-42-e1', type: 'hard', title: 'Build Unicode Inspector', instructions: 'Create a tool that takes a single character input and displays code point info, UTF-8 bytes, URL encoding, Unicode block, and general category.', hint: 'Use codePointAt, TextEncoder, and Unicode range checks.', starterCode: '<input id="charInput" maxlength="2" placeholder="Type a character">\n<pre id="output"></pre>', solution: '<input id="charInput" maxlength="2" placeholder="Type a character">\n<pre id="output"></pre>\n<script>\n  document.getElementById("charInput").oninput = function() {\n    const c = this.value;\n    if (!c) { document.getElementById("output").textContent = ""; return; }\n    const cp = c.codePointAt(0);\n    const utf8 = new TextEncoder().encode(c);\n    const urlEnc = Array.from(utf8).map(b => "%" + b.toString(16).toUpperCase().padStart(2, "0")).join("");\n    const isEmoji = /\\\\p{Extended_Pictographic}/u.test(c);\n    const lines = [\n      "Char: " + c,\n      "Code point: U+" + cp.toString(16).toUpperCase().padStart(4, "0"),\n      "Decimal: " + cp, "Binary: " + cp.toString(2),\n      "", "UTF-8: " + Array.from(utf8).map(b => "0x" + b.toString(16).toUpperCase().padStart(2, "0")).join(" "),\n      "URL: " + urlEnc,\n      "Text length: " + c.length + ", Code points: " + [...c].length,\n      "", "ASCII: " + (cp < 128 ? "Yes" : "No"),\n      "Emoji: " + (isEmoji ? "Yes" : "No")\n    ];\n    document.getElementById("output").textContent = lines.join("\\n");\n  };\n</script>' }
      ],
      cheatSheet: [
        { label: 'codePointAt(0)', value: 'Get Unicode code point' },
        { label: 'TextEncoder', value: 'UTF-8 encoding in browser' },
        { label: 'URL encoding', value: '%XX format for each byte' },
        { label: 'Unicode block', value: 'Range-based script detection' }
      ]
    },
    {
      id: 'emojis-43',
      number: 43,
      partLabel: 'Part 5: Projects',
      title: 'Mini Challenges',
      subtitle: 'Five quick Unicode and emoji challenges',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 60,
      prerequisites: ['emojis-1', 'emojis-9'],
      learningObjectives: [
        'Apply Unicode knowledge to practical problems',
        'Solve encoding and decoding challenges',
        'Practice emoji parsing and manipulation',
        'Demonstrate understanding of core concepts'
      ],
      sections: [
        {
          id: 's1',
          title: 'Challenge Overview',
          whyItMatters: 'Mini challenges reinforce learning through hands-on problem solving.',
          content: '## Five Mini Challenges\n\n### Challenge 1: UTF-8 Decoder\nDecode bytes 48 65 6C 6C 6F 20 F0 9F 98 80 into text.\n\n### Challenge 2: Emoji Counter\nCount how many emoji are in a string using regex.\n\n### Challenge 3: Skin Tone Normalizer\nGiven a thumbs up + skin tone emoji, extract just the base emoji.\n\n### Challenge 4: URL Encode\nEncode a string for use in a URL.\n\n### Challenge 5: BOM Detector\nDetect whether a byte sequence starts with a UTF-8, UTF-16BE, or UTF-16LE BOM.'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-43-q1', type: 'mcq', question: 'What does the byte sequence F0 9F 98 80 decode to?', options: ['😀 (U+1F600)', 'A', 'e', 'BOM'], correctAnswer: 0, explanation: 'F0 9F 98 80 is the UTF-8 encoding of U+1F600 (grinning face).', difficulty: 2 },
          { id: 'emojis-43-q2', type: 'true-false', question: 'The BOM for UTF-8 is EF BB BF.', options: ['True', 'False'], correctAnswer: 0, explanation: 'UTF-8 BOM is the 3-byte sequence 0xEF 0xBB 0xBF.', difficulty: 1 },
          { id: 'emojis-43-q3', type: 'mcq', question: 'UTF-16BE BOM byte sequence is?', options: ['FE FF', 'FF FE', 'EF BB BF', '00 FF'], correctAnswer: 0, explanation: 'UTF-16BE BOM is 0xFE 0xFF.', difficulty: 1 },
          { id: 'emojis-43-q4', type: 'true-false', question: 'Skin tone modifier range is U+1F3FB to U+1F3FF.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The five skin tone modifiers span U+1F3FB to U+1F3FF.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'emojis-43-e1', type: 'hard', title: 'Solve All 5 Mini Challenges', instructions: 'Implement all 5 mini challenges as functions and test them with the provided inputs.', hint: 'Use TextDecoder for challenge 1, regex for challenge 2.', starterCode: 'function ch1(bytes) { return new TextDecoder().decode(new Uint8Array(bytes)); }\nfunction ch2(text) { return [...text].filter(c => /\\\\p{Extended_Pictographic}/u.test(c)).length; }\nfunction ch3(emoji) { return emoji.replace(/[\\\\u{1F3FB}-\\\\u{1F3FF}]/gu, ""); }\nfunction ch4(text) { return encodeURIComponent(text); }\nfunction ch5(bytes) {\n  if (bytes[0]===0xEF&&bytes[1]===0xBB&&bytes[2]===0xBF) return "UTF-8";\n  if (bytes[0]===0xFE&&bytes[1]===0xFF) return "UTF-16BE";\n  if (bytes[0]===0xFF&&bytes[1]===0xFE) return "UTF-16LE";\n  return "None";\n}\nconsole.log(ch1([0x48,0x65,0x6C,0x6C,0x6F]));\nconsole.log(ch2("Hello 😀🎉!"));\nconsole.log(ch3("👍🏿"));\nconsole.log(ch4("Cafe"));\nconsole.log(ch5([0xEF,0xBB,0xBF]));', solution: 'Same as starter code — all functions are complete.' }
      ],
      cheatSheet: [
        { label: 'UTF-8 decode', value: 'TextDecoder().decode()' },
        { label: 'Emoji regex', value: '\\\\p{Extended_Pictographic}' },
        { label: 'Skin tones', value: 'U+1F3FB to U+1F3FF' },
        { label: 'URL encode', value: 'encodeURIComponent()' },
        { label: 'BOM detection', value: 'First 2-3 bytes identify encoding' }
      ]
    },
    {
      id: 'emojis-44',
      number: 44,
      partLabel: 'Part 5: Projects',
      title: 'Emoji Compatibility Tester',
      subtitle: 'Test and document emoji support across platforms',
      difficulty: 'Advanced',
      estimatedMinutes: 45,
      xpReward: 90,
      prerequisites: ['emojis-18', 'emojis-13'],
      learningObjectives: [
        'Test emoji rendering across platforms',
        'Document compatibility differences',
        'Build a compatibility testing tool',
        'Understand the emoji support lifecycle'
      ],
      sections: [
        {
          id: 's1',
          title: 'Project Overview',
          whyItMatters: 'Knowing which emoji are supported on which platforms is essential for cross-platform development.',
          content: '## Compatibility Tester\n\nBuild a tool that tests and displays emoji compatibility:\n\n### Test Categories\n- Basic smileys and gestures\n- Skin tone variants\n- ZWJ sequences (families, professions)\n- Flags (country and subdivision)\n- Newly released emoji\n\n### Display\n- Checkmark or X for each emoji\n- Platform name column\n- Notes on known differences'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-44-q1', type: 'mcq', question: 'How can you test if a platform supports a given emoji?', options: ['Canvas measureText comparison', 'Check the Unicode version', 'Try to render it', 'Ask the browser'], correctAnswer: 0, explanation: 'Compare width of the emoji text to a known unsupported character width.', difficulty: 2 },
          { id: 'emojis-44-q2', type: 'true-false', question: 'ZWJ sequences are more likely supported on newer platforms.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Newer platforms and OS versions add ZWJ support progressively.', difficulty: 1 },
          { id: 'emojis-44-q3', type: 'mcq', question: 'What does canvas measureText return for unsupported characters?', options: ['Width of the tofu glyph', '0', 'Negative value', 'Error'], correctAnswer: 0, explanation: 'Unsupported chars render as tofu with a measurable width.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
          { id: 'emojis-44-e1', type: 'hard', title: 'Build Compatibility Tester', instructions: 'Create a tool that tests emoji support using canvas measureText. Display results in a table with pass/fail status.', hint: 'Use a hidden canvas and compare emoji width to U+FFFF width.', starterCode: '<div id="results"></div>\n<script>\n  const testEmoji = ["😀", "👍🏿", "👨‍👩‍👧‍👦", "🇺🇸", "🏳️‍🌈"];\n</script>', solution: `<div id="results"></div>\n<script>\n  const testEmoji = ["😀", "👍🏿", "👨‍👩‍👧‍👦", "🇺🇸", "🏳️‍🌈", "🫠", "🧑‍💻"];\n  const canvas = document.createElement("canvas");\n  const ctx = canvas.getContext("2d");\n  ctx.font = "32px sans-serif";\n  const tofu = ctx.measureText("\\\\uFFFF").width;\n  let html = "<table border=1><tr><th>Emoji</th><th>Status</th></tr>";\n  testEmoji.forEach(e => {\n    const w = ctx.measureText(e).width;\n    const supported = Math.abs(w - tofu) > 1;\n    html += '<tr><td style="font-size:32px">' + e + '</td><td>' + (supported ? "Supported" : "Not Supported") + '</td></tr>';\n  });\n  document.getElementById("results").innerHTML = html;\n</script>` }
      ],
      cheatSheet: [
        { label: 'Support test', value: 'Canvas measureText comparison' },
        { label: 'Tofu width', value: 'Reference width for unsupported chars' },
        { label: 'Test categories', value: 'Basic, skin tones, ZWJ, flags' },
        { label: 'Version tracking', value: 'Map emoji to Unicode version' }
      ]
    },
    {
      id: 'emojis-45',
