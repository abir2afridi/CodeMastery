import type { Track } from './types';

export const emojiTrack: Track = {
  id: 'emojis',
  title: 'Emoji & Unicode',
  titleBn: 'ইমোজি ও ইউনিকোড',
  tagline: 'Master the universe of emojis, Unicode, and text encoding',
  taglineBn: 'ইমোজি, ইউনিকোড এবং টেক্সট এনকোডিং আয়ত্ত করুন',
  icon: 'https://img.icons8.com/?size=160&id=YovVPGGEVPMh&format=png',
  colorVar: 'emojis',
  brandColor: '#FFC107',
  glowColor: 'rgba(255, 193, 7, 0.3)',
  totalChapters: 45,
  estimatedHours: 38,
  chapters: [

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
          { id: "empty", type: "easy", title: "placeholder", instructions: "placeholder", hint: "placeholder", starterCode: "placeholder", solution: "placeholder" }
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
          { id: "empty", type: "easy", title: "placeholder", instructions: "placeholder", hint: "placeholder", starterCode: "placeholder", solution: "placeholder" }
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
      number: 45,
      partLabel: 'Part 5: Projects',
      title: 'Unicode Mastery Recap + Certificate Prep',
      subtitle: 'Review and prepare for certification',
      difficulty: 'Expert',
      estimatedMinutes: 40,
      xpReward: 150,
      prerequisites: ['emojis-1', 'emojis-9', 'emojis-19', 'emojis-29'],
      learningObjectives: [
        'Review all core concepts from the Emojis and Unicode track',
        'Identify areas for further study',
        'Prepare for the certification exam',
        'Apply all skills in a comprehensive project'
      ],
      sections: [
        {
          id: 's1',
          title: 'Track Review',
          whyItMatters: 'Consolidating knowledge through review ensures long-term retention and practical ability.',
          content: '## Mastery Review\n\n### Part 1: Unicode Basics\n- Unicode definition, code points, planes\n- ASCII vs Unicode vs UTF-8/16/32\n- Encoding algorithms and byte sequences\n- Character rendering pipeline and font technologies\n\n### Part 2: Emoji Fundamentals\n- Emoji history from Kurita to Unicode 16.0\n- Categories, skin tones, gender variants\n- ZWJ sequences and flag emoji\n- Cross-platform compatibility\n\n### Part 3: Web Development\n- Emoji in HTML (charset, entities, accessibility)\n- Emoji in CSS (content property, fonts)\n- Emoji in JavaScript (codePointAt, fromCodePoint, iteration)\n- Database encoding (MySQL utf8mb4, PostgreSQL UTF8)\n\n### Part 4: Advanced Text Processing\n- Grapheme clusters vs code points\n- Unicode normalization (NFC, NFD, NFKC, NFKD)\n- Bidirectional text and regex with Unicode\n- String length problems and Unicode security\n\n### Part 5: Projects\n- Emoji picker, Unicode converter, search engine\n- Chat system, analytics, inspector, compatibility tester\n- Mini challenges applying all skills'
        }
      ],
      quiz: {
        questions: [
          { id: 'emojis-45-q1', type: 'mcq', question: 'What is the maximum value of a Unicode code point?', options: ['U+10FFFF', 'U+FFFFFF', 'U+FFFF', 'U+1FFFFF'], correctAnswer: 0, explanation: 'The valid range is U+0000 to U+10FFFF.', difficulty: 1 },
          { id: 'emojis-45-q2', type: 'true-false', question: 'UTF-8 is backward compatible with ASCII.', options: ['True', 'False'], correctAnswer: 0, explanation: 'ASCII bytes 0x00-0x7F are valid UTF-8 with the same meaning.', difficulty: 1 },
          { id: 'emojis-45-q3', type: 'mcq', question: 'Which encoding does Windows use internally for strings?', options: ['UTF-16LE', 'UTF-8', 'UTF-32', 'ASCII'], correctAnswer: 0, explanation: 'Windows and .NET use UTF-16LE for internal string representation.', difficulty: 2 },
          { id: 'emojis-45-q4', type: 'true-false', question: 'ZWJ sequences were introduced in Unicode 6.0.', options: ['True', 'False'], correctAnswer: 1, explanation: 'ZWJ sequences for emoji were introduced in Unicode 9.0 (2016).', difficulty: 2 },
          { id: 'emojis-45-q5', type: 'mcq', question: 'What is the regex flag for Unicode property escapes?', options: ['u', 'g', 'i', 'm'], correctAnswer: 0, explanation: 'The u flag enables \\\\p{} and \\\\P{} property escapes.', difficulty: 1 },
          { id: 'emojis-45-q6', type: 'mcq', question: 'What normalization form should be used for security-sensitive comparisons?', options: ['NFKC', 'NFC', 'NFD', 'NFKD'], correctAnswer: 0, explanation: 'NFKC normalizes to a compatible form useful for identifiers.', difficulty: 2 },
          { id: 'emojis-45-q7', type: 'true-false', question: 'The Unicode range is U+0000 to U+10FFFF, providing over 1 million code points.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The valid range is U+0000 to U+10FFFF = 1,114,112 code points.', difficulty: 1 },
          { id: 'emojis-45-q8', type: 'mcq', question: 'What does the term tofu refer to in text rendering?', options: ['The .notdef glyph (blank box)', 'A type of Japanese food', 'An emoji font', 'A rendering error'], correctAnswer: 0, explanation: 'Tofu is the blank rectangle shown when a glyph is missing from the font.', difficulty: 1 }
        ],
        passingScore: 80
      },
      exercises: [
        { id: 'emojis-45-e1', type: 'hard', title: 'Capstone: Full Unicode Inspector', instructions: 'Build the capstone Unicode inspector that accepts any text input and displays: each character with code point (U+XXXX), UTF-8 hex/binary, UTF-16 code units, script detection, category, plane, and emoji properties.', hint: 'Combine TextEncoder, codePointAt, regex property escapes, and range checks.', starterCode: '<textarea id="input" rows="2" placeholder="Type any text...">Hello 😀</textarea>\n<pre id="output"></pre>', solution: '<textarea id="input" rows="2" placeholder="Type any text...">Hello 😀</textarea>\n<pre id="output"></pre>\n<script>\n  function inspect() {\n    const text = document.getElementById("input").value;\n    const lines = [];\n    for (const c of text) {\n      const cp = c.codePointAt(0);\n      const utf8 = new TextEncoder().encode(c);\n      const hex = "U+" + cp.toString(16).toUpperCase().padStart(4, "0");\n      const utf8Hex = Array.from(utf8).map(b => b.toString(16).padStart(2,"0").toUpperCase()).join(" ");\n      const isEmoji = /\\\\p{Extended_Pictographic}/u.test(c);\n      const plane = Math.floor(cp / 0x10000);\n      lines.push(c + " | " + hex + " | UTF-8: " + utf8Hex);\n      lines.push("  Plane: " + plane + " | Emoji: " + (isEmoji ? "Yes" : "No"));\n      lines.push("");\n    }\n    document.getElementById("output").textContent = lines.join("\\n");\n  }\n  document.getElementById("input").addEventListener("input", inspect);\n  inspect();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Unicode range', value: 'U+0000 to U+10FFFF' },
        { label: 'UTF-8', value: '1-4 bytes, backward compatible with ASCII' },
        { label: 'UTF-16', value: '2-4 bytes, used by Windows/Java/C#' },
        { label: 'Emoji standard', value: 'Unicode 6.0+ with skin tones, ZWJ, flags' },
        { label: 'Security', value: 'NFKC normalization, bidi attack awareness' },
        { label: 'Certification', value: 'Capstone project to demonstrate mastery' }
      ]
    }
  

    }
  ];
};