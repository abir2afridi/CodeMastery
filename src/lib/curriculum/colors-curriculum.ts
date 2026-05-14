import type { Track, Chapter } from "./types";

// Bengali translations for Colors content
const colorsContentBn: Record<string, string> = {
  "colors-1-1": `আলো তরঙ্গদৈর্ঘ্যের একটি তড়িৎচুম্বকীয় বিকিরণ। দৃশ্যমীয় স্পেকট্রাম 380nm (বেগুনি) থেকে 700nm (লাল) পর্যন্ত চলে।

আপনার চোখে রড (উজ্জ্বলতা সনাক্ত করে) এবং কোন (রঙ সনাক্ত করে) থাকে:
• L কোন: দীর্ঘ তরঙ্গদৈর্ঘ্য = লাল সংবেদনশীলতা
• M কোন: মাঝারি তরঙ্গদৈর্ঘ্য = সবুজ সংবেদনশীলতা
• S কোন: সংক্ষিপ্ত তরঙ্গদৈর্ঘ্য = নীল সংবেদনশীলতা

বাস্তব উদাহরণ: সন্ধ্যায় চোখের রড সক্রিয় হয় (দেখতে পাওয়া যায় কিন্তু রঙ কম)। দিনে কোন সক্রিয় হয় (রঙ দেখা যায়)।`,

  "colors-1-2": `স্ক্রিন পিক্সেলে RGB মডেল ব্যবহার করে রঙ তৈরি করে:
• R (লাল): 0-255 মান
• G (সবুজ): 0-255 মান
• B (নীল): 0-255 মান

সম্পূর্ণ সাদা = rgb(255,255,255) — সব কোন সক্রিয়
সম্পূর্ণ কালো = rgb(0,0,0) — কোনটি সক্রিয় নয়
মিশ্রণের উদাহরণ:
• হলুদ = লাল + সবুজ
• সায়ান = সবুজ + নীল
• ম্যাজেন্টা = লাল + নীল`,

  "colors-1-3": `CSS-এ পাঁচটি রঙ ফরম্যাট:

1. হেক্সাডেসিমেল: #RRGGBB (প্রস্তাবিত)
2. RGB: rgb(r, g, b)
3. RGBA: rgba(r, g, b, alpha)
4. HSL: hsl(hue, saturation, lightness)
5. HSLA: hsla(hue, saturation, lightness, alpha)

প্রতিটির সুবিধা:
• হেক্স: সংক্ষিপ্ত, ওয়েবে সবচেয়ে জনপ্রিয়
• RGB: সহজে বোঝা যায়
• HSL: রঙ পরিবর্তন সবচেয়ে সহজ`,

  "colors-1-4": `RGB vs CMYK:
• RGB: স্ক্রিনের জন্য — যোগমূলক রঙ (লাল+সবুজ+সাদা)
• CMYK: প্রিন্টের জন্য — বিয়োগমূলক রঙ (সায়ান+ম্যাজেন্টা+হলুদ+কালো)

সমস্যা: স্ক্রিনে দেখা রঙ প্রিন্টে আসে না। সলিউশন: প্রিন্টের জন্য CMYK প্রোফাইল ব্যবহার করুন।

ওয়েব রঙ: sRGB মান ব্যবহার করে যা সব ব্রাউজারে সামঞ্জস্যপূর্ণ।`,

  "colors-2-1": `রঙের মূল্য নির্ধারণ:
• Hue (আভা): 0-360 ডিগ্রি — রঙের ধরন
• Saturation (স্যাচুরেশন): 0-100% — রঙের তীব্রতা
• Lightness (লাইটনেস): 0-100% — উজ্জ্বলতা

HSL ব্যবহার করে সহজে রঙ পরিবর্তন:
• Hue বাড়ালে রঙ ঘোরে
• Saturation কমালে ধূসর হয়
• Lightness বাড়ালে উজ্জ্বল হয়, কমালে কালো হয়`,

  "colors-2-2": `রঙ প্যালেট তৈরির নিয়ম:
• 60-30-10 নিয়ম: প্রধান 60%, গৌণ 30%, একসেন্ট 10%
• বর্ণালী: সংখ্যা বাড়ালে রঙ পরিবর্তন
• স্যাচুরেশন: একই রঙের বিভিন্ন সংস্করণ
• কমপ্লিমেন্টারি: বিপরীত আভা (উদাহরণ: নীল + কমলা)

টুল: Adobe Color, Coolors, CSS Gradient Generator`,

  // Generated chapters (ch 3-50 will use fallback)
};

const colorsChapters: Chapter[] = [
  // Part 1: Understanding Color (Chapters 1-6)
  {
    id: "colors-1",
    number: 1,
    partLabel: "Part 1: Understanding Color",
    title: "What Is Color? Physics, Vision, and the Web",
    subtitle: "From light wavelengths to screen pixels — the science of color",
    difficulty: "Absolute Beginner",
    estimatedMinutes: 25,
    xpReward: 80,
    prerequisites: [],
    learningObjectives: [
      "Understand how humans perceive color",
      "Know how screens create color (RGB model)",
      "Understand the difference between screen and print color",
      "Learn the five CSS color formats"
    ],
    sections: [
      {
        id: "colors-1-1",
        title: "How Humans See Color",
        whyItMatters: "Understanding human vision helps you design for the right audience.",
        content: `Light is electromagnetic radiation. The visible spectrum runs from 380nm (violet) to 700nm (red).

Your eyes contain rods (detect brightness) and cones (detect color):
• L cones: long wavelength = red sensitivity
• M cones: medium wavelength = green sensitivity
• S cones: short wavelength = blue sensitivity

The brain combines signals from these three cone types to create the millions of colors we see.

Key insight: Color is not a fixed physical property — it's a perceptual experience. The same wavelength can look different depending on surrounding colors (simultaneous contrast) and your eyes' adaptation state.`,
        codeExamples: [
          {
            id: "colors-vision-1",
            title: "Color Wavelengths",
            description: "The visible spectrum",
            code: {
              css: `/* Visible spectrum approximate ranges */
/* Violet: 380-450nm */
/* Blue: 450-495nm */
/* Green: 495-570nm */
/* Yellow: 570-590nm */
/* Orange: 590-620nm */
/* Red: 620-700nm */`
            },
            explanation: "Humans can only see this narrow band of the electromagnetic spectrum."
          }
        ],
        contentBn: colorsContentBn["colors-1-1"]
      },
      {
        id: "colors-1-2",
        title: "How Screens Make Color",
        whyItMatters: "Every pixel on your screen is built from red, green, and blue light.",
        content: `Screens use additive color mixing:
• Red + Green + Blue = White
• No light = Black

Each pixel has three sub-pixels (examine with a loupe!). Each sub-pixel brightness ranges from 0-255 (8-bit).

8 bits per channel × 3 channels = 24-bit "true color" = 16.7 million possible colors!

sRGB is the standard color space for web — it's the guaranteed-safe gamut that works on all screens.

Display P3 offers a wider gamut on modern Apple/Samsung devices — more vibrant colors for photography and video.`,
        codeExamples: [
          {
            id: "colors-screen-1",
            title: "RGB in Action",
            description: "Creating colors with RGB values",
            code: {
              css: `/* Primary colors */
.red { background-color: rgb(255, 0, 0); }
.green { background-color: rgb(0, 255, 0); }
.blue { background-color: rgb(0, 0, 255); }

/* Secondary colors */
.yellow { background-color: rgb(255, 255, 0); }
.cyan { background-color: rgb(0, 255, 255); }
.magenta { background-color: rgb(255, 0, 255); }

/* White */
.white { background-color: rgb(255, 255, 255); }

/* Black */
.black { background-color: rgb(0, 0, 0); }`
            },
            explanation: "Every color on screen is some combination of red, green, and blue light."
          }
        ],
        contentBn: colorsContentBn["colors-1-2"]
      },
      {
        id: "colors-1-3",
        title: "Print vs Screen Color",
        whyItMatters: "The same color looks different on paper vs screen.",
        content: `Print uses CMYK — subtractive color mixing:
• Cyan + Magenta + Yellow + Black = all colors
• No ink = White (paper)

Screen uses RGB — additive color mixing:
• Red + Green + Blue = all colors
• No light = Black

Why this matters: You cannot directly convert a print brand color to screen without adjustment. CMYK colors often look muted on screen because the gamuts don't perfectly overlap.

Pantone to hex conversion is not exact science — use Pantone's official color lookup for the closest screen match.`,
        codeExamples: [
          {
            id: "colors-print-1",
            title: "CMYK vs RGB",
            description: "Comparing color systems",
            code: {
              css: `/* Screen (RGB) - bright, emissive */
/* Print (CMYK) - subtractive, absorbs light */

/* A color that looks vibrant on screen */
/* may look dull when printed */`
            },
            explanation: "Design for the medium: RGB for web, CMYK for print."
          }
        ],
        contentBn: colorsContentBn["colors-1-3"]
      },
      {
        id: "colors-1-4",
        title: "Color in CSS — The Five Formats",
        whyItMatters: "CSS supports five ways to specify the same color.",
        content: `All five ways to specify red in CSS:

1. Named: color: red;
2. Hex: color: #ff0000;
3. RGB: color: rgb(255, 0, 0);
4. HSL: color: hsl(0, 100%, 50%);
5. OKLCH: color: oklch(0.63 0.26 29.23);

This chapter gives you the overview. Each subsequent chapter covers one format in depth.

Why so many formats? Historical reasons (named colors, hex), developer preference (RGB vs HSL), and modern needs (OKLCH for perceptually uniform colors).`,
        codeExamples: [
          {
            id: "colors-formats-1",
            title: "All Formats for One Color",
            description: "Same color, different syntax",
            code: {
              css: `/* All of these are the same color: red */
.color-named { color: red; }
.color-hex { color: #ff0000; }
.color-rgb { color: rgb(255, 0, 0); }
.color-hsl { color: hsl(0, 100%, 50%); }
.color-oklch { color: oklch(0.63 0.26 29.23); }

/* Shorthand hex */
.color-hex-short { color: #f00; }`
            },
            explanation: "Choose the format that makes your code most readable."
          }
        ],
        contentBn: colorsContentBn["colors-1-4"]
      }
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "RGB Color Mixer",
        difficulty: 1,
        description: "Create three divs with pure red, pure green, and pure blue using rgb().",
        requirements: ["Use rgb() syntax", "Three colored boxes"],
        starterCode: { css: `.red-box { }\n.green-box { }\n.blue-box { }` },
        hints: ["rgb(255, 0, 0) is red", "rgb(0, 255, 0) is green"],
        solution: { css: `.red-box { background-color: rgb(255, 0, 0); }\n.green-box { background-color: rgb(0, 255, 0); }\n.blue-box { background-color: rgb(0, 0, 255); }` },
        solutionExplanation: "Used rgb() with max values for each primary color."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq", question: "What range of wavelengths is visible light?", options: ["100-200nm", "380-700nm", "1000-2000nm", "50-500nm"], correctAnswer: 1, explanation: "Visible light spans approximately 380nm (violet) to 700nm (red).", difficulty: 1 },
        { id: "q2", type: "mcq", question: "What color model do screens use?", options: ["CMYK", "RGB", "Pantone", "Lab"], correctAnswer: 1, explanation: "Screens use additive RGB color mixing.", difficulty: 1 },
        { id: "q3", type: "true-false", question: "Red + Green + Blue = White in additive mixing.", correctAnswer: true, explanation: "In additive color (screens), combining all three primary colors at full intensity creates white.", difficulty: 1 },
        { id: "q4", type: "fill-blank", question: "The CSS function for green with max intensity is rgb(___).", correctAnswer: "0, 255, 0", explanation: "rgb(0, 255, 0) is pure green.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "RGB syntax", value: "rgb(R, G, B)" },
      { label: "Pure red", value: "rgb(255, 0, 0)" },
      { label: "Pure green", value: "rgb(0, 255, 0)" },
      { label: "Pure blue", value: "rgb(0, 0, 255)" },
      { label: "White", value: "rgb(255, 255, 255)" },
      { label: "Black", value: "rgb(0, 0, 0)" }
    ]
  },
  // Chapter 2: Named Colors
  {
    id: "colors-2",
    number: 2,
    title: "Named Colors — All 140+ HTML Color Names",
    subtitle: "Every CSS named color with hex, RGB, HSL values and WCAG contrast scores",
    difficulty: "Absolute Beginner",
    estimatedMinutes: 40,
    xpReward: 100,
    prerequisites: ["colors-1"],
    learningObjectives: ["Learn all 140+ CSS named colors", "Understand color families", "Know contrast ratios for accessibility"],
    sections: [
      {
        id: "colors-2-1",
        title: "Red Family Colors",
        whyItMatters: "Red is the most attention-grabbing color — know your options.",
        content: `CSS provides 12 red family colors from deep crimson to light salmon:

DarkRed (#8B0000), Red (#FF0000), Crimson (#DC143C), FireBrick (#B22222), IndianRed (#CD5C5C), LightCoral (#F08080), Salmon (#FA8072), DarkSalmon (#E9967A), LightSalmon (#FFA07A), Tomato (#FF6347), OrangeRed (#FF4500), Coral (#FF7F50)

Each has different saturation and brightness — choose based on the emotion you want to convey. Darker reds feel more serious and expensive; lighter reds feel friendlier and more casual.`,
        codeExamples: [
          {
            id: "colors-red-1",
            title: "Red Family",
            description: "All red family named colors",
            code: {
              css: `.darkred { color: darkred; }
.red { color: red; }
.crimson { color: crimson; }
.firebrick { color: firebrick; }
.indianred { color: indianred; }
.lightcoral { color: lightcoral; }`
            },
            explanation: "Pick the shade that matches your design's mood."
          }
        ],
        contentBn: colorsContentBn["colors-2-1"]
      },
      {
        id: "colors-2-2",
        title: "Blue Family Colors",
        whyItMatters: "Blue is the most popular web color — trust, stability, technology.",
        content: `The blue family includes 20+ colors from deep navy to pale sky blue:

MidnightBlue (#191970), Navy (#000080), DarkBlue (#00008B), MediumBlue (#0000CD), Blue (#0000FF), RoyalBlue (#4169E1), DodgerBlue (#1E90FF), CornflowerBlue (#6495ED), DeepSkyBlue (#00BFFF), LightSkyBlue (#87CEFA), SkyBlue (#87CEEB), LightBlue (#ADD8E6), PowderBlue (#B0E0E6), LightSteelBlue (#B0C4DE), SteelBlue (#4682B4), CadetBlue (#5F9EA0), DarkTurquoise (#00CED1), MediumTurquoise (#48D1CC), Turquoise (#40E0D0), Aquamarine (#7FFFD4), LightCyan (#E0FFFF), Cyan (#00FFFF), Aqua (#00FFFF)

Blue is universally liked and conveys trust — it's the default color for links and primary buttons.`,
        codeExamples: [
          {
            id: "colors-blue-1",
            title: "Blue Family",
            description: "Popular blue colors for web design",
            code: {
              css: `.navy { color: navy; }
.royalblue { color: royalblue; }
.dodgerblue { color: dodgerblue; }
.skyblue { color: skyblue; }
.lightblue { color: lightblue; }`
            },
            explanation: "Blue's versatility makes it the #1 web color."
          }
        ],
        contentBn: colorsContentBn["colors-2-2"]
      }
    ],
    exercises: [
      {
        id: "ex-2-1",
        title: "Color Family Grid",
        difficulty: 1,
        description: "Create a grid of 4 red family colors.",
        requirements: ["Use 4 different named colors", "Each in its own div"],
        starterCode: { html: `<div class="box"></div>`.repeat(4) },
        hints: ["Try darkred, red, crimson, firebrick"],
        solution: { css: `.box1 { background: darkred; }\n.box2 { background: red; }\n.box3 { background: crimson; }\n.box4 { background: firebrick; }` },
        solutionExplanation: "Used red family named colors."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq", question: "Which blue is the darkest?", options: ["navy", "royalblue", "dodgerblue", "skyblue"], correctAnswer: 0, explanation: "Navy (#000080) is the darkest blue.", difficulty: 1 },
        { id: "q2", type: "true-false", question: "red and darkred are the same color.", correctAnswer: false, explanation: "red is #FF0000, darkred is #8B0000.", difficulty: 1 },
        { id: "q3", type: "mcq", question: "Which is NOT a blue family color?", options: ["cyan", "teal", "magenta", "aquamarine"], correctAnswer: 2, explanation: "Magenta is purple family, not blue.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Most popular web color", value: "Blue (#0000FF)" },
      { label: "Link default", value: "blue" },
      { label: "Navy", value: "#000080" },
      { label: "Royal", value: "#4169E1" }
    ]
  }
];

// Generate remaining chapters 3-50
for (let ch = 3; ch <= 50; ch++) {
  const prevNum = ch - 1;
  const partLabel = ch <= 6 ? "Part 1: Understanding Color" :
                   ch <= 16 ? "Part 2: Color Theory" :
                   ch <= 22 ? "Part 3: Color Accessibility" :
                   ch <= 36 ? "Part 4: Practical Color in CSS" :
                   ch <= 44 ? "Part 5: Color Systems and Palettes" :
                   "Part 6: Tools and Advanced";

  const chapterTitles: Record<number, string> = {
    3: "Hex Colors — Complete Guide",
    4: "RGB and RGBA Colors",
    5: "HSL and HSLA Colors",
    6: "Modern Color Formats (OKLCH, LAB)",
    7: "The Color Wheel — Hue Relationships",
    8: "Color Temperature — Warm vs Cool",
    9: "Tints, Shades, and Tones",
    10: "Monochromatic Color Schemes",
    11: "Complementary Colors",
    12: "Analogous Colors",
    13: "Triadic Color Schemes",
    14: "Split-Complementary Schemes",
    15: "Tetradic Color Schemes",
    16: "Color Psychology",
    17: "WCAG Color Contrast",
    18: "Color Blindness Types",
    19: "High Contrast Mode",
    20: "Color and Typography",
    21: "Dark Mode Colors",
    22: "Accessible Color Palettes",
    23: "CSS currentColor Keyword",
    24: "CSS Color Inheritance",
    25: "CSS Gradients",
    26: "CSS color-mix()",
    27: "CSS Relative Colors",
    28: "CSS Custom Properties",
    29: "Design Token Color System",
    30: "Color in Animations",
    31: "Color in SVG",
    32: "Color in Canvas API",
    33: "Color in Images",
    34: "Color in Shadows",
    35: "Advanced Gradients",
    36: "Color in Filters",
    37: "Brand Color Palette",
    38: "Material Design Colors",
    39: "Tailwind CSS Colors",
    40: "Open Color System",
    41: "Color Naming Conventions",
    42: "Generating Color Scales",
    43: "Color in Data Viz",
    44: "Color Trends 2025",
    45: "Browser DevTools Colors",
    46: "Color Picker API",
    47: "Contrast Checkers",
    48: "Extracting Colors from Images",
    49: "Color in Fonts",
    50: "Colors Mastery Recap"
  };

  colorsChapters.push({
    id: `colors-${ch}`,
    number: ch,
    partLabel,
    title: chapterTitles[ch] || `Color Chapter ${ch}`,
    subtitle: `Learn ${chapterTitles[ch] || "color concepts"}`,
    difficulty: ch <= 6 ? "Absolute Beginner" :
                ch <= 22 ? "Beginner" :
                ch <= 36 ? "Intermediate" :
                "Advanced",
    estimatedMinutes: 30,
    xpReward: Math.min(100, 50 + ch),
    prerequisites: [`colors-${prevNum}`],
    learningObjectives: [`Master ${chapterTitles[ch] || "color"}`],
    sections: [
      {
        id: `colors-${ch}-1`,
        title: chapterTitles[ch] || `Topic ${ch}`,
        whyItMatters: "Understanding this color concept is essential for web design.",
        content: `This chapter covers ${chapterTitles[ch] || "color theory"}. Color is one of the most powerful tools in a designer's toolkit.

Key points:
• Every color has meaning and emotional impact
• Accessibility requires careful contrast consideration
• Modern CSS offers powerful color manipulation`,
        codeExamples: [
          {
            id: `colors-${ch}-ex1`,
            title: "Example",
            description: "Color demo",
            code: {
              css: `.example { color: #e91e63; background: linear-gradient(45deg, #e91e63, #9c27b0); }`
            },
            explanation: "Colors create visual hierarchy and emotion."
          }
        ],
        contentBn: colorsContentBn[`colors-${ch}-1`]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: `q1-${ch}`, type: "mcq", question: "What is the best color for accessibility?", options: ["Any color", "High contrast combinations", "Only black and white", "Random selection"], correctAnswer: 1, explanation: "High contrast ensures readability for all users.", difficulty: 1 },
        { id: `q2-${ch}`, type: "true-false", question: "Colors affect user emotion.", correctAnswer: true, explanation: "Color psychology is well-documented in design.", difficulty: 1 },
        { id: `q3-${ch}`, type: "fill-blank", question: "The three RGB channels are R, G, and ___.", correctAnswer: "B", explanation: "Red, Green, Blue.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Format", value: "rgb(R, G, B)" },
      { label: "Contrast", value: "WCAG 4.5:1" },
      { label: "Named", value: "140+ colors" }
    ]
  });
}

export const colorsTrack: Track = {
  id: "colors",
  title: "Web Colors",
  titleBn: "ওয়েব রঙ",
  tagline: "From hex codes to harmony — master color for the web",
  taglineBn: "হেক্স কোড থেকে হারমনি — ওয়েবের জন্য রঙ মাস্টার করুন",
  icon: "https://img.icons8.com/color/144/color-palette.png",
  colorVar: "colors",
  totalChapters: 50,
  estimatedHours: 40,
  chapters: colorsChapters,
  brandColor: "#E91E63",
  glowColor: "rgba(233, 30, 99, 0.4)"
};