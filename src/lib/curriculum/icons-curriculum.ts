import { Track } from "./types";

export const iconsTrack: Track = {
  id: "icons",
  title: "Icons",
  titleBn: "আইকন",
  tagline: "Master modern icon systems and scalable UI graphics",
  taglineBn: "আধুনিক আইকন সিস্টেম এবং স্কেলেবল ইউআই গ্রাফিক্স আয়ত্ত করুন",
  icon: "https://img.icons8.com/?size=160&id=85552&format=png",
  colorVar: "icons",
  brandColor: "#F59E0B",
  glowColor: "rgba(245, 158, 11, 0.3)",
  totalChapters: 50,
  estimatedHours: 75,
  chapters: [
    // ============ PART 1: INTRODUCTION TO ICONS (CHAPTERS 1-8) ============
    {
      id: "ic-1", number: 1, partLabel: "Part 1: Introduction to Icons", title: "What Are Icons?", subtitle: "Understanding icon systems and their role in UI", difficulty: "Absolute Beginner", estimatedMinutes: 40, xpReward: 55, prerequisites: [], learningObjectives: ["Understand what icons are", "Know icon history and evolution", "See icons' role in modern UI"],
      sections: [
        {
          id: "s1", title: "Icon Basics",
          whyItMatters: "Icons are universal visual language — they transcend text and culture, making interfaces intuitive and accessible.",
          content: "**Core Concepts:**\n\nIcons are simplified visual representations of actions, objects, or concepts. They range from simple glyphs to detailed illustrations.\n\n**Types of Icons:**\n- **UI Icons**: Navigation, actions, status (hamburger menu, search)\n- **App Icons**: Application logos and branding\n- **Social Icons**: Social media presence\n- **System Icons**: OS-level symbols (volume, wifi, battery)\n- **Emoji/Emoticons**: Expressive digital glyphs\n\n**Icon Qualities:**\n- Recognizable at small sizes (16-24px)\n- Consistent visual weight\n- Clear silhouette\n- Accessible with proper labels\n\n**Key Takeaways:**\n- Icons communicate instantly when designed well\n- Consistency is more important than creativity\n- Always pair icons with text labels for clarity",
          codeExamples: [
            { id: "ex1", title: "Basic Icon Types", description: "Common icon examples in HTML", code: { icons: "<!-- UI icons in HTML -->\n<button aria-label=\"Search\">\n  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n    <circle cx=\"11\" cy=\"11\" r=\"8\"/>\n    <path d=\"m21 21-4.35-4.35\"/>\n  </svg>\n</button>\n<a href=\"#\" aria-label=\"Home\">\n  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\">\n    <path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>\n    <polyline points=\"9 22 9 12 15 12 15 22\"/>\n  </svg>\n</a>" }, explanation: "Icons use SVG for crisp rendering at any size. Always include aria-label for accessibility." }
          ]
        }
      ],
      quiz: { questions: [{ id: "ic-q1", type: "mcq", question: "Why are icons important in UI design?", options: ["They communicate instantly", "They replace all text", "They make pages load faster", "They are decorative only"], correctAnswer: 0, explanation: "Icons communicate concepts quickly and transcend language barriers when designed well.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Icon", value: "Visual representation of action/concept" }, { label: "UI Icon", value: "Interface elements under 24px" }, { label: "SVG Icon", value: "Vector icon, scales infinitely" }]
    },
    {
      id: "ic-2", number: 2, title: "History of UI Icons", subtitle: "From Xerox Star to modern vector systems", difficulty: "Absolute Beginner", estimatedMinutes: 35, xpReward: 50, prerequisites: ["ic-1"], learningObjectives: ["Trace icon history from 1980s", "Understand skeuomorphism vs flat design", "See the evolution of icon technology"],
      sections: [
        {
          id: "s1", title: "The Birth of UI Icons",
          whyItMatters: "Understanding icon history reveals why we design icons the way we do today.",
          content: "**1981: Xerox Star** — First GUI with icons (desktop, folder, file). 24x24 pixel monochrome bitmap icons.\n\n**1984: Macintosh** — Susan Kare designed the original Mac icons. Trash can, paint bucket, watch cursor. Pixel art at 32x32.\n\n**1985: Windows 1.0** — 16-color icons, program manager, file manager.\n\n**2000s: Web 2.0** — Glossy, rounded, 3D-style icons with gradients and drop shadows.\n\n**2010s: Flat Design** — Microsoft Metro, iOS 7, Material Design. Simplified shapes, bold colors, no gradients.\n\n**2020s: Modern Vector** — SVG icons, variable fonts, design tokens, component-based systems."
        }
      ],
      quiz: { questions: [{ id: "ic2-q1", type: "mcq", question: "Who designed the original Macintosh icons?", options: ["Steve Jobs", "Susan Kare", "Jony Ive", "Bill Gates"], correctAnswer: 1, explanation: "Susan Kare designed the iconic Macintosh interface icons including the trash can and watch cursor.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Xerox Star", value: "First GUI with icons (1981)" }, { label: "Susan Kare", value: "Original Mac icon designer" }, { label: "Flat Design", value: "Post-2010 simplified icon style" }]
    },
    {
      id: "ic-3", number: 3, title: "Icon Design Fundamentals", subtitle: "Grid, stroke weight, corner radius, optical alignment", difficulty: "Absolute Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: ["ic-1"], learningObjectives: ["Understand icon grid systems", "Apply consistent stroke weights", "Use optical alignment for visual balance"],
      sections: [
        {
          id: "s1", title: "The Icon Grid",
          whyItMatters: "A consistent grid ensures all icons feel cohesive regardless of shape complexity.",
          content: "Most icon systems use a 24x24 grid. The grid defines:\n- **Safe zone**: Center 22x22 area (1px padding)\n- **Keylines**: Circle, square, horizontal/vertical rectangle, diagonal\n- **Corner radius**: Standard 2px for sharp icons, variable for brand\n\nA 24x24 grid with 1px padding means the icon content stays inside a 22x22 area. Circles touch the keyline at diameter 22, squares at 20x20 to appear visually equal."
        },
        {
          id: "s2", title: "Stroke Weight Consistency",
          whyItMatters: "Mixed stroke weights make an icon set look unprofessional and disjointed.",
          content: "Standard stroke weights: 1.5px (detailed), 2px (default), 2.5px (bold). All icons in a set must use identical stroke weight. If mixing outline and filled variants, maintain the same visual weight. Outline icons need slightly thicker strokes (2px) to match filled icon weight."
        }
      ],
      quiz: { questions: [{ id: "ic3-q1", type: "mcq", question: "What is the most common icon grid size?", options: ["16x16", "24x24", "32x32", "48x48"], correctAnswer: 1, explanation: "24x24 is the standard grid for modern icon systems like Material and Heroicons.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "24x24 Grid", value: "Standard icon canvas size" }, { label: "Safe Zone", value: "Center 22x22 area" }, { label: "Stroke 2px", value: "Default stroke weight" }]
    },
    {
      id: "ic-4", number: 4, title: "Icon Libraries Overview", subtitle: "Survey of major libraries and the ecosystem", difficulty: "Absolute Beginner", estimatedMinutes: 30, xpReward: 45, prerequisites: ["ic-1"], learningObjectives: ["List major icon libraries", "Compare library strengths and weaknesses", "Choose the right library for a project"],
      sections: [
        {
          id: "s1", title: "Icon Library Landscape",
          whyItMatters: "Choosing the right icon library saves development time and ensures design consistency.",
          content: "**Major Libraries:**\n- **Font Awesome**: 7800+ icons, free + pro tiers, brands\n- **Material Icons**: 2500+, variable font, Google ecosystem\n- **Heroicons**: 450+, Tailwind CSS official, outline + solid\n- **Lucide**: 900+, Feather fork, tree-shakeable\n- **Feather**: 280+, minimalist, open source\n- **Remix Icons**: 2000+, neutral style\n- **Tabler Icons**: 4000+, pixel-perfect line style\n- **Bootstrap Icons**: 1500+, Bootstrap ecosystem\n\n**Selection Criteria:** Style consistency, license, bundle size, React/Vue support, customization."
        }
      ],
      quiz: { questions: [{ id: "ic4-q1", type: "mcq", question: "Which library has the most icons?", options: ["Feather", "Heroicons", "Font Awesome", "Lucide"], correctAnswer: 2, explanation: "Font Awesome offers 7800+ icons across free and pro tiers.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Font Awesome", value: "7800+ icons, free + pro" }, { label: "Heroicons", value: "Tailwind's official icons" }, { label: "Lucide", value: "Tree-shakeable Feather fork" }]
    },
    {
      id: "ic-5", number: 5, title: "Font Icons vs SVG Icons", subtitle: "Pros, cons, performance, rendering", difficulty: "Absolute Beginner", estimatedMinutes: 40, xpReward: 55, prerequisites: ["ic-4"], learningObjectives: ["Understand font icon technology", "Compare font vs SVG rendering", "Make informed format decisions"],
      sections: [
        {
          id: "s1", title: "How Font Icons Work",
          whyItMatters: "Font icons were the standard for a decade — understanding them explains current SVG adoption.",
          content: "Font icons map glyphs to Unicode private use area characters. A single font file contains all icons. Usage: `<i class=\"fa fa-search\"></i>` renders the search glyph.\n\n**Pros:** Easy to color via CSS `color`, easy to size via `font-size`, single HTTP request for all icons.\n\n**Cons:** Anti-aliasing issues at small sizes, limited to monochrome (single color), font rendering varies by OS, no multi-color support, CSS `color` only applies one color."
        },
        {
          id: "s2", title: "Why SVG Wins",
          whyItMatters: "SVG is the modern standard — better rendering, multi-color, accessible.",
          content: "**Pros:** Crisp rendering at any size, multi-color support, accessible with proper labels, animatable, styleable per-element, tree-shakeable (import only what you use), no FOUT/FOIT.\n\n**Cons:** More DOM nodes, harder to color globally without CSS variables, inline SVG increases HTML size.\n\nModern recommendation: SVG for new projects, font icons for legacy or simple monochrome needs."
        }
      ],
      quiz: { questions: [{ id: "ic5-q1", type: "mcq", question: "What is a disadvantage of font icons?", options: ["Large file size", "Monochrome only", "No browser support", "Requires JavaScript"], correctAnswer: 1, explanation: "Font icons are limited to a single color via CSS color property.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Font Icons", value: "Glyphs in font files, single color" }, { label: "SVG Icons", value: "Vector elements, multi-color" }, { label: "FOUT/FOIT", value: "Flash of unstyled text (fonts only)" }]
    },
    {
      id: "ic-6", number: 6, title: "Icon Accessibility Basics", subtitle: "aria-hidden, aria-label, screen readers", difficulty: "Absolute Beginner", estimatedMinutes: 35, xpReward: 50, prerequisites: ["ic-5"], learningObjectives: ["Hide decorative icons from screen readers", "Label meaningful icons properly", "Test icon accessibility"],
      sections: [
        {
          id: "s1", title: "Decorative vs Meaningful Icons",
          whyItMatters: "Screen readers announce everything — unchecked icons create confusing audio experiences.",
          content: "**Decorative icons** (redundant with adjacent text): `aria-hidden=\"true\"` or `role=\"presentation\"`.\n\n**Meaningful icons** (standalone without text): Must have accessible label via `aria-label`, `aria-labelledby`, or `<title>` inside SVG.\n\n```svg\n<!-- Decorative icon next to 'Search' text -->\n<svg aria-hidden=\"true\" width=\"16\" height=\"16\">...</svg>\n<span>Search</span>\n\n<!-- Meaningful icon (no text) -->\n<button aria-label=\"Search\">\n  <svg width=\"24\" height=\"24\">...</svg>\n</button>\n```"
        }
      ],
      quiz: { questions: [{ id: "ic6-q1", type: "mcq", question: "Which attribute hides an icon from screen readers?", options: ["aria-hidden", "aria-label", "role=\"icon\"", "hidden"], correctAnswer: 0, explanation: "aria-hidden=\"true\" removes the element from the accessibility tree.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "aria-hidden", value: "Hides decorative icons" }, { label: "aria-label", value: "Labels meaningful icons" }, { label: "role=\"img\"", value: "Marks SVG as image" }]
    },
    {
      id: "ic-7", number: 7, title: "Modern Icon Systems", subtitle: "Component-based, tree-shaking, sprites", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 65, prerequisites: ["ic-5"], learningObjectives: ["Understand component-based icons", "Implement tree-shaking with icon imports", "Use SVG sprite systems"],
      sections: [
        {
          id: "s1", title: "Component-Based Icons",
          whyItMatters: "Component icons integrate with framework tooling for type safety and tree-shaking.",
          content: "Modern frameworks use icon components:\n\n```jsx\n// React icon component\nimport { SearchIcon } from '@heroicons/react/outline'\n\nfunction Navbar() {\n  return <SearchIcon className=\"w-5 h-5 text-gray-500\" />\n}\n```\n\nBenefits: TypeScript autocomplete, tree-shaking (only imported icons bundled), props-driven styling, SSR compatible."
        },
        {
          id: "s2", title: "SVG Sprite Technique",
          whyItMatters: "Sprites consolidate icons into one file, reducing HTTP requests.",
          content: "An SVG sprite defines all icons as `<symbol>` elements, then references them with `<use>`:\n\n```svg\n<svg>\n  <use href=\"/icons/sprite.svg#search\" />\n</svg>\n```\n\nModern build tools (Vite, Webpack) can auto-generate sprites from individual SVG files."
        }
      ],
      quiz: { questions: [{ id: "ic7-q1", type: "mcq", question: "What is tree-shaking in icon libraries?", options: ["Shaking trees", "Bundling only imported icons", "Removing duplicates", "Minifying SVG"], correctAnswer: 1, explanation: "Tree-shaking bundles only the icon components you actually import, keeping bundles small.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Icon Component", value: "Framework wrapper for SVG" }, { label: "Tree-shaking", value: "Import only used icons" }, { label: "SVG Sprite", value: "Symbol definitions + use tags" }]
    },
    {
      id: "ic-8", number: 8, title: "Real-World UI Icon Patterns", subtitle: "Navigation, actions, empty states, notifications", difficulty: "Beginner", estimatedMinutes: 40, xpReward: 60, prerequisites: ["ic-7"], learningObjectives: ["Apply icons in navigation patterns", "Use icons for actions and CTAs", "Design empty states with icons"],
      sections: [
        {
          id: "s1", title: "Navigation Icons",
          whyItMatters: "Navigation icons are the most common icon pattern — users rely on them for orientation.",
          content: "**Patterns:**\n- **Sidebar nav**: Icon + label (collapsible to icon-only)\n- **Bottom tab bar**: Mobile navigation with filled/outlined state\n- **Breadcrumb separators**: Chevron or slash icons\n- **Hamburger menu**: Mobile menu toggle\n\n**Best Practices:** Always pair with text labels on first visit. Active state = filled icon, inactive = outlined. Use aria-current=\"page\" for current location."
        },
        {
          id: "s2", title: "Empty States",
          whyItMatters: "Empty states with thoughtful icons turn frustration into delight.",
          content: "Empty state icons should: Illustrate the missing content (empty inbox = no mail icon), suggest an action (add button nearby), maintain brand tone (friendly illustrations vs minimal icons). Use 48-96px for empty state icons — larger than UI icons."
        }
      ],
      quiz: { questions: [{ id: "ic8-q1", type: "mcq", question: "What size range is recommended for empty state icons?", options: ["16-24px", "24-32px", "48-96px", "100-200px"], correctAnswer: 2, explanation: "Empty state icons are typically 48-96px, larger than standard UI icons.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Nav Icons", value: "Always pair with text labels" }, { label: "Active State", value: "Filled icon = active" }, { label: "Empty State", value: "48-96px illustrative icons" }]
    },
    // ============ PART 2: POPULAR ICON LIBRARIES (CHAPTERS 9-18) ============
    {
      id: "ic-9", number: 9, partLabel: "Part 2: Popular Icon Libraries", title: "Font Awesome", subtitle: "FA Free/Pro, usage, classes, brands", difficulty: "Beginner", estimatedMinutes: 40, xpReward: 60, prerequisites: ["ic-4"], learningObjectives: ["Use Font Awesome via CDN and npm", "Understand FA class naming", "Access brand icons"],
      sections: [
        {
          id: "s1", title: "Font Awesome Setup",
          whyItMatters: "Font Awesome powers millions of sites — knowing it is essential for any web developer.",
          content: "**CDN Setup:** `<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">`\n\n**npm Setup:** `npm i @fortawesome/fontawesome-free`\n\n**Usage:** `<i class=\"fas fa-search\"></i>` (fas = solid, far = regular, fab = brand)\n\n**FA 6 Categories:** Solid (fas), Regular (far), Light (fal, pro), Thin (fat, pro), Duotone (fad, pro), Sharp (fass, pro), Brands (fab)."
        },
        {
          id: "s2", title: "Brand Icons",
          whyItMatters: "Brand icons are critical for social proof, footers, and sharing features.",
          content: "Font Awesome's brand set includes 500+ brand icons: Twitter, GitHub, LinkedIn, YouTube, Discord, etc. Always use fab prefix. Brand icons follow the brand's color guidelines when applicable.\n\n```html\n<a href=\"https://github.com\" aria-label=\"GitHub\">\n  <i class=\"fab fa-github fa-2x\"></i>\n</a>\n```"
        }
      ],
      quiz: { questions: [{ id: "ic9-q1", type: "mcq", question: "What prefix does Font Awesome use for brand icons?", options: ["fas", "far", "fab", "fal"], correctAnswer: 2, explanation: "fab (Font Awesome Brand) is the prefix for brand icons.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "fas", value: "Font Awesome Solid" }, { label: "far", value: "Font Awesome Regular" }, { label: "fab", value: "Font Awesome Brand" }]
    },
    {
      id: "ic-10", number: 10, title: "Material Icons", subtitle: "Google's system, variable font, filled/outlined", difficulty: "Beginner", estimatedMinutes: 35, xpReward: 55, prerequisites: ["ic-4"], learningObjectives: ["Use Material Icons via font and SVG", "Configure variable font weights", "Switch between filled and outlined styles"],
      sections: [
        {
          id: "s1", title: "Material Icons Overview",
          whyItMatters: "Material Icons are the standard for Android and Google-integrated web apps.",
          content: "Material Icons offers 2500+ icons designed by Google. Available as:\n- **Icon Font**: Variable font with weight (100-700) and fill (0 or 1) axes\n- **SVG**: Individual SVG files for each icon\n- **React Components**: @mui/icons-material\n\n**Font Usage:** `<span class=\"material-symbols-outlined\">search</span>`\n\n**Variable Font Axes:** `font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48`"
        }
      ],
      quiz: { questions: [{ id: "ic10-q1", type: "mcq", question: "How do you use a Material Icon as a font?", options: ["<i class=\"mi-search\">", "<span class=\"material-symbols-outlined\">search</span>", "<icon name=\"search\">", "<material-icon=\"search\">"], correctAnswer: 1, explanation: "Material Symbols use <span> with the icon name as text content.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Material Symbols", value: "Variable font icon system" }, { label: "FILL axis", value: "0=outlined, 1=filled" }, { label: "wght axis", value: "Weight 100-700" }]
    },
    {
      id: "ic-11", number: 11, title: "Heroicons", subtitle: "Tailwind's official icons, outline/solid, React", difficulty: "Beginner", estimatedMinutes: 35, xpReward: 55, prerequisites: ["ic-4"], learningObjectives: ["Integrate Heroicons with Tailwind", "Switch between outline and solid", "Use Heroicons in React projects"],
      sections: [
        {
          id: "s1", title: "Heroicons Overview",
          whyItMatters: "Heroicons are the official Tailwind CSS icons — perfectly sized and styled for utility-first workflows.",
          content: "Heroicons provide 450+ icons in two styles:\n- **Outline**: 24x24, 1.5px stroke\n- **Solid**: 24x24, filled\n\n**npm:** `npm i @heroicons/react` (React) or `@heroicons/vue` (Vue)\n\n**Usage:**\n```jsx\nimport { BeakerIcon } from '@heroicons/react/24/outline'\n\nfunction Demo() {\n  return <BeakerIcon className=\"h-6 w-6 text-blue-500\" />\n}\n```\n\nTree-shakeable by default — only imported icons end up in bundle."
        }
      ],
      quiz: { questions: [{ id: "ic11-q1", type: "mcq", question: "What stroke weight do Heroicons outline style use?", options: ["1px", "1.5px", "2px", "2.5px"], correctAnswer: 1, explanation: "Heroicons outline uses 1.5px stroke on a 24x24 grid.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Heroicons", value: "Tailwind CSS official icons" }, { label: "Outline", value: "24x24, 1.5px stroke" }, { label: "Solid", value: "24x24, filled style" }]
    },
    {
      id: "ic-12", number: 12, title: "Lucide Icons", subtitle: "Fork of Feather, tree-shakeable, consistent", difficulty: "Beginner", estimatedMinutes: 30, xpReward: 50, prerequisites: ["ic-4"], learningObjectives: ["Install and use Lucide icons", "Understand tree-shaking benefits", "Customize Lucide icon props"],
      sections: [
        {
          id: "s1", title: "Lucide Overview",
          whyItMatters: "Lucide is a modern, community-driven fork of Feather icons with better tooling.",
          content: "Lucide is fully tree-shakeable with ESM support. Every icon is a separate module.\n\n**npm:** `npm i lucide-react` (React), `lucide-vue-next` (Vue 3), `lucide` (vanilla)\n\n**React Usage:**\n```jsx\nimport { ArrowRight } from 'lucide-react'\n\n<ArrowRight className=\"w-4 h-4\" />\n```\n\n**Customization:** All icons accept size, color, strokeWidth props. Default strokeWidth is 1.5. 900+ icons, all consistent 24x24 grid."
        }
      ],
      quiz: { questions: [{ id: "ic12-q1", type: "mcq", question: "What project is Lucide forked from?", options: ["Font Awesome", "Material Icons", "Feather", "Heroicons"], correctAnswer: 2, explanation: "Lucide is a community fork of Feather Icons.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Lucide", value: "Tree-shakeable Feather fork" }, { label: "Default stroke", value: "1.5px on 24x24" }, { label: "lucide-react", value: "React package name" }]
    },
    {
      id: "ic-13", number: 13, title: "Bootstrap Icons", subtitle: "Bootstrap ecosystem, SVG/font, CDN", difficulty: "Beginner", estimatedMinutes: 35, xpReward: 55, prerequisites: ["ic-4"], learningObjectives: ["Use Bootstrap Icons CDN and npm", "Switch between SVG and font", "Style with Bootstrap utilities"],
      sections: [
        {
          id: "s1", title: "Bootstrap Icons Setup",
          whyItMatters: "Bootstrap Icons are first-class citizens in the Bootstrap ecosystem with seamless integration.",
          content: "Bootstrap Icons offers 1500+ MIT-licensed icons. Available as SVG and icon font.\n\n**CDN:** `<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css\">`\n\n**npm:** `npm i bootstrap-icons`\n\n**Font Usage:** `<i class=\"bi bi-search\"></i>`\n\n**SVG Usage:** Download individual SVGs or use the sprite: `<svg class=\"bi\" width=\"16\" height=\"16\"><use xlink:href=\"bootstrap-icons.svg#search\"/></svg>`"
        }
      ],
      quiz: { questions: [{ id: "ic13-q1", type: "mcq", question: "What class prefix do Bootstrap Icons use?", options: ["fa-", "bi-", "mi-", "hi-"], correctAnswer: 1, explanation: "Bootstrap Icons use the 'bi-' prefix (e.g., bi-search).", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "bootstrap-icons", value: "npm package name" }, { label: "bi prefix", value: "Class prefix (bi-search)" }, { label: "1500+ icons", value: "MIT licensed" }]
    },
    {
      id: "ic-14", number: 14, title: "Feather Icons", subtitle: "Minimal, open-source, simple API", difficulty: "Beginner", estimatedMinutes: 30, xpReward: 45, prerequisites: ["ic-4"], learningObjectives: ["Use Feather's simple API", "Customize icon attributes", "Understand Feather's design philosophy"],
      sections: [
        {
          id: "s1", title: "Feather Icons Philosophy",
          whyItMatters: "Feather pioneered the minimalist icon movement that influenced modern libraries.",
          content: "Feather is a collection of 280+ open-source icons designed to be simple, consistent, and recognizable. Each icon is 24x24 with 2px stroke weight, round caps, and round joins.\n\n**npm:** `npm i feather-icons`\n\n**Usage:**\n```html\n<i data-feather=\"circle\"></i>\n<script src=\"feather-icons/dist/feather.min.js\"></script>\n<script>feather.replace()</script>\n```\n\nFeather pioneered many icons now standard: search, menu, x, chevron, sun/moon. Its fork Lucide continues the legacy with more icons."
        }
      ],
      quiz: { questions: [{ id: "ic14-q1", type: "mcq", question: "What stroke weight do Feather icons use?", options: ["1px", "1.5px", "2px", "2.5px"], correctAnswer: 2, explanation: "Feather uses 2px stroke with round caps and round joins.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Feather", value: "Minimal open-source icons" }, { label: "2px stroke", value: "Round caps, round joins" }, { label: "feather.replace()", value: "JavaScript init call" }]
    },
    {
      id: "ic-15", number: 15, title: "Remix Icons", subtitle: "Neutral style, 2000+ icons, categories", difficulty: "Beginner", estimatedMinutes: 30, xpReward: 50, prerequisites: ["ic-4"], learningObjectives: ["Browse Remix icon categories", "Use Remix as font and SVG", "Apply Remix's neutral design"],
      sections: [
        {
          id: "s1", title: "Remix Icons Overview",
          whyItMatters: "Remix Icons offer the largest free collection with a neutral, brand-agnostic style.",
          content: "Remix Icons provides 2000+ icons in a neutral style that works with any brand. Every icon has two variants:\n- **Line (Ri-)**: Outlined 2px stroke\n- **Fill (Ri-fill)**: Solid filled\n\n**CDN:** `<link href=\"https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css\" rel=\"stylesheet\">`\n\n**Usage:** `<i class=\"ri-search-line\"></i>` or `<i class=\"ri-search-fill\"></i>`\n\nOrganized into categories: Buildings, Business, Communication, Design, Development, Device, Document, Editor, Finance, Health, Logos, Map, Media, System, User, Weather."
        }
      ],
      quiz: { questions: [{ id: "ic15-q1", type: "mcq", question: "What suffix do outlined Remix icons use?", options: ["-outline", "-line", "-regular", "-stroked"], correctAnswer: 1, explanation: "Outlined Remix icons use the '-line' suffix (e.g., ri-search-line).", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Remix Icons", value: "2000+ neutral icons" }, { label: "-line", value: "Outlined variant suffix" }, { label: "-fill", value: "Filled variant suffix" }]
    },
    {
      id: "ic-16", number: 16, title: "Tabler Icons", subtitle: "4000+ icons, line style, pixel-perfect", difficulty: "Beginner", estimatedMinutes: 30, xpReward: 50, prerequisites: ["ic-4"], learningObjectives: ["Navigate Tabler's large library", "Understand pixel-perfect design", "Use Tabler with Figma and code"],
      sections: [
        {
          id: "s1", title: "Tabler Icons Overview",
          whyItMatters: "Tabler Icons has the largest free collection with meticulous pixel-perfect design.",
          content: "Tabler Icons offers 4000+ icons with a consistent line style — 24x24 grid, 2px stroke, rounded corners, pixel-snapped.\n\n**npm:** `npm i @tabler/icons-react` (React), `@tabler/icons-vue` (Vue)\n\n**Usage:**\n```jsx\nimport { IconSearch } from '@tabler/icons-react'\n\n<IconSearch size={24} />\n```\n\n**Figma:** Official Figma plugin with auto-update. All icons available in a single Figma component set."
        }
      ],
      quiz: { questions: [{ id: "ic16-q1", type: "mcq", question: "How many icons does Tabler provide?", options: ["500+", "2000+", "4000+", "8000+"], correctAnswer: 2, explanation: "Tabler Icons offers over 4000 free, pixel-perfect icons.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Tabler Icons", value: "4000+ pixel-perfect icons" }, { label: "24x24 grid", value: "2px stroke, rounded" }, { label: "@tabler/icons-react", value: "React package" }]
    },
    {
      id: "ic-17", number: 17, title: "React Icons Ecosystem", subtitle: "react-icons package, importing, tree-shaking", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 70, prerequisites: ["ic-4"], learningObjectives: ["Use the react-icons package", "Import from multiple libraries", "Optimize bundle with tree-shaking"],
      sections: [
        {
          id: "s1", title: "The react-icons Package",
          whyItMatters: "react-icons provides a unified API for 20+ icon libraries — switch libraries without changing import syntax.",
          content: "react-icons bundles icons from Font Awesome, Material, Heroicons, Feather, Lucide, Tabler, Bootstrap, Remix, and more into one package with consistent API.\n\n**npm:** `npm i react-icons`\n\n**Usage:**\n```jsx\nimport { FaSearch } from 'react-icons/fa'  // Font Awesome\nimport { HiSearch } from 'react-icons/hi2'  // Heroicons v2\nimport { MdSearch } from 'react-icons/md'   // Material\nimport { FiSearch } from 'react-icons/fi'   // Feather\n\n<FaSearch className=\"text-gray-500\" />\n```\n\n**Prefix conventions:** Fa=FontAwesome, Hi=Heroicons, Md=Material, Fi=Feather, Lu=Lucide, Ri=Remix, Tb=Tabler, Bi=Bootstrap, Ai=Ant Design, Io=Ionicons."
        },
        {
          id: "s2", title: "Tree-Shaking in react-icons",
          whyItMatters: "Without tree-shaking, importing from react-icons could bundle thousands of unused icons.",
          content: "react-icons supports ESM tree-shaking. Import specificaly from subpaths: `import { FaSearch } from 'react-icons/fa'` — this only bundles the FaSearch component, not the entire FA library.\n\n**Pro tip:** Use a linter rule to prevent wildcard imports like `import * as FaIcons from 'react-icons/fa'` which defeats tree-shaking."
        }
      ],
      quiz: { questions: [{ id: "ic17-q1", type: "mcq", question: "What prefix does Feather use in react-icons?", options: ["Fe", "Fi", "Fh", "Fr"], correctAnswer: 1, explanation: "Feather icons use the 'Fi' prefix (e.g., FiSearch) in react-icons.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "react-icons", value: "Unified icon library API" }, { label: "Tree-shaking", value: "Import per-library subpaths" }, { label: "Fi prefix", value: "Feather icons in react-icons" }]
    },
    {
      id: "ic-18", number: 18, title: "Building Unified Icon Systems", subtitle: "Single API across libraries", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 75, prerequisites: ["ic-17"], learningObjectives: ["Create a unified icon wrapper", "Abstract library differences", "Build design-system icon components"],
      sections: [
        {
          id: "s1", title: "Why a Unified Icon Component",
          whyItMatters: "A unified icon component prevents vendor lock-in and enforces design consistency.",
          content: "Building an Icon component that wraps any library:\n\n```tsx\ninterface IconProps {\n  name: string\n  library: 'heroicons' | 'lucide' | 'material'\n  size?: number\n  className?: string\n}\n\nexport function Icon({ name, library, size = 24, className }: IconProps) {\n  // Map to specific library component\n}\n```\n\nBenefits: Swap libraries without touching every file, enforce consistent sizing, add accessibility defaults, support runtime theme switching."
        },
        {
          id: "s2", title: "Design Token Integration",
          whyItMatters: "Linking icons to design tokens ensures they respond to theming automatically.",
          content: "Use CSS custom properties for icon colors: `stroke: var(--icon-color)`, `fill: var(--icon-fill)`. Map design tokens (size, weight, color) to icon props. Create an IconProvider context that sets defaults for the entire app."
        }
      ],
      quiz: { questions: [{ id: "ic18-q1", type: "mcq", question: "What is the main advantage of a unified icon component?", options: ["Faster rendering", "Library abstraction and consistency", "Smaller bundles", "More icons"], correctAnswer: 1, explanation: "A unified component abstracts library differences and enforces consistent sizing, styling, and accessibility.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Icon Component", value: "Wrapper abstracting icon library" }, { label: "Design Tokens", value: "CSS vars for icon theming" }, { label: "IconProvider", value: "Context for global defaults" }]
    },
    // ============ PART 3: SVG ICON ENGINEERING (CHAPTERS 19-30) ============
    {
      id: "ic-19", number: 19, partLabel: "Part 3: SVG Icon Engineering", title: "SVG Basics for Icons", subtitle: "viewBox, paths, currentColor, fill-rule", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 65, prerequisites: ["ic-5"], learningObjectives: ["Understand SVG viewBox for icons", "Use currentColor for theme support", "Apply fill-rule for complex icons"],
      sections: [
        {
          id: "s1", title: "SVG Elements for Icons",
          whyItMatters: "SVG is the foundation of modern icon systems — mastering its basics unlocks full icon control.",
          content: "**Essential SVG for icons:**\n- `viewBox=\"0 0 24 24\"` — Standard 24x24 icon coordinate system\n- `fill=\"none\"` — Outline icons\n- `stroke=\"currentColor\"` — Inherits text color for theming\n- `stroke-width=\"2\"` — Standard stroke\n- `stroke-linecap=\"round\"` — Rounded ends\n- `stroke-linejoin=\"round\"` — Rounded corners\n\n```svg\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n  <path d=\"M12 5v14M5 12h14\"/>\n</svg>\n```"
        }
      ],
      quiz: { questions: [{ id: "ic19-q1", type: "mcq", question: "What value of currentColor does for icon SVG?", options: ["Sets a specific color", "Inherits parent CSS color", "Makes icon rainbow", "Disables color"], correctAnswer: 1, explanation: "currentColor makes the stroke inherit the parent element's CSS color property.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "viewBox", value: '"0 0 24 24" for icons' }, { label: "currentColor", value: "Inherits CSS color" }, { label: "stroke-width", value: "Standard 2px for icons" }]
    },
    {
      id: "ic-20", number: 20, title: "SVG Paths Explained", subtitle: "M/L/C commands for icons", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 70, prerequisites: ["ic-19"], learningObjectives: ["Read and write SVG path data", "Use M, L, C, Q commands", "Optimize path data for icons"],
      sections: [
        {
          id: "s1", title: "Path Commands for Icons",
          whyItMatters: "Path commands define icon shapes — understanding them lets you create custom icons and debug existing ones.",
          content: "**Common commands in icon paths:**\n- `M` (Move to): Pen up, move to start position\n- `L` (Line to): Straight line segment\n- `C` (Cubic curve): Smooth curve with two control points\n- `Q` (Quadratic curve): Simpler curve with one control point\n- `Z` (Close): Close path back to start\n\n**Example — Search icon path:**\n`M11 11l4 4M11 6a5 5 0 110 10 5 5 0 010-10`\n\nCircle: `M` to start, `a` (elliptical arc) for the ring. Lens/Loupe part: `M` then `l` for the handle. Always optimize path data by removing redundant commands."
        }
      ],
      quiz: { questions: [{ id: "ic20-q1", type: "mcq", question: "What does the 'M' command do in SVG path data?", options: ["Draw a line", "Move pen to coordinate", "Measure distance", "Mirror the path"], correctAnswer: 1, explanation: "M (move to) lifts the pen and moves to the specified coordinate without drawing.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "M", value: "Move to (pen up)" }, { label: "C", value: "Cubic Bézier curve" }, { label: "Z", value: "Close path" }]
    },
    {
      id: "ic-21", number: 21, title: "ViewBox and Coordinate Systems", subtitle: "0 0 24 24 standard, sizing", difficulty: "Beginner", estimatedMinutes: 40, xpReward: 60, prerequisites: ["ic-19"], learningObjectives: ["Master icon viewBox standards", "Understand coordinate mapping", "Scale icons correctly"],
      sections: [
        {
          id: "s1", title: "The 24x24 ViewBox Standard",
          whyItMatters: "The 24x24 viewBox is the universal standard — adhering to it ensures icon compatibility.",
          content: "Most modern icon libraries use `viewBox=\"0 0 24 24\"`. This means:\n- Coordinates range from (0,0) top-left to (24,24) bottom-right\n- Icon content typically fits within 2px padding (center 20x20 area)\n- Strokes centered on coordinate lines\n\n**Other standards:**\n- 16x16: Legacy, system icons, favicons\n- 20x20: Smaller UI icons\n- 32x32: Expanded detail for larger display\n- 48x48: App icons, touch icons\n\n**Scaling formula:** Icons scale proportionally. Set width/height in CSS, viewBox maintains aspect ratio."
        }
      ],
      quiz: { questions: [{ id: "ic21-q1", type: "mcq", question: "What is the most common viewBox for icon libraries?", options: ["0 0 16 16", "0 0 24 24", "0 0 32 32", "0 0 48 48"], correctAnswer: 1, explanation: "24x24 is the universal standard for modern icon libraries.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "24x24", value: "Standard icon viewBox" }, { label: "Padding", value: "2px on each side" }, { label: "viewBox", value: "Defines coordinate space" }]
    },
    {
      id: "ic-22", number: 22, title: "Stroke vs Fill Icons", subtitle: "Outline vs solid, use cases", difficulty: "Beginner", estimatedMinutes: 35, xpReward: 55, prerequisites: ["ic-19"], learningObjectives: ["Distinguish outline vs filled icons", "Choose appropriate style per context", "Combine stroke and fill in one icon"],
      sections: [
        {
          id: "s1", title: "Outline (Stroke) Icons",
          whyItMatters: "Outline icons dominate modern UI — they're lighter, modern, and work in dense layouts.",
          content: "Outline icons use `fill=\"none\"` and `stroke=\"currentColor\"` with `stroke-width=\"2\"`.\n\n**Best for:** Navigation bars, toolbar buttons, table actions, dense interfaces, when icons need to be subtle.\n\n**Advantages:** Modern look, less visual weight, work well in groups, easy to see at small sizes."
        },
        {
          id: "s2", title: "Filled Icons",
          whyItMatters: "Filled icons provide emphasis and are essential for active states.",
          content: "Filled icons use `fill=\"currentColor\"` with no stroke (or minimal stroke).\n\n**Best for:** Active/selected states, empty state illustrations, social media icons, app icons, when emphasis is needed.\n\n**Mixed approach:** Many libraries (Heroicons, Material) offer both variants. Use outline for inactive, filled for active states."
        }
      ],
      quiz: { questions: [{ id: "ic22-q1", type: "mcq", question: "When should you use filled icons over outline?", options: ["Always", "For active/selected states", "Never", "Only on mobile"], correctAnswer: 1, explanation: "Filled icons are ideal for active states and when emphasis is needed.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Outline", value: "fill=none, stroke used" }, { label: "Filled", value: "fill=currentColor, no stroke" }, { label: "Active State", value: "Outline → filled on selection" }]
    },
    {
      id: "ic-23", number: 23, title: "Responsive SVG Icons", subtitle: "Fluid sizing, container-aware", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 65, prerequisites: ["ic-21"], learningObjectives: ["Make icons responsive with CSS", "Use container queries for sizing", "Handle icon density in layouts"],
      sections: [
        {
          id: "s1", title: "CSS for Responsive Icons",
          whyItMatters: "Icons must adapt to different viewports, containers, and device densities without manual overrides.",
          content: "**Responsive icon techniques:**\n```css\n/* Fluid icon sizing */\n.icon { width: 1em; height: 1em; }\n\n/* Container query based sizing */\n@container (min-width: 400px) {\n  .nav-icon { width: 24px; height: 24px; }\n}\n@container (max-width: 399px) {\n  .nav-icon { width: 20px; height: 20px; }\n}\n\n/* High DPI displays */\n@media (-webkit-min-device-pixel-ratio: 2) {\n  .icon { stroke-width: 1.5; } /* Thinner stroke on retina */\n}\n```\n\nUse relative units (em) so icons scale with parent font-size. Set `min-width`/`max-width` to prevent extreme sizing."
        }
      ],
      quiz: { questions: [{ id: "ic23-q1", type: "mcq", question: "What CSS unit makes icons scale with surrounding text?", options: ["px", "em", "vw", "%"], correctAnswer: 1, explanation: "em units scale icons relative to the parent element's font-size.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "1em", value: "Icon size matching font-size" }, { label: "@container", value: "Container query for sizing" }, { label: "Retina", value: "Thinner stroke on 2x displays" }]
    },
    {
      id: "ic-24", number: 24, title: "Animated SVG Icons", subtitle: "Rotate, draw, morph, pulse animations", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 75, prerequisites: ["ic-22"], learningObjectives: ["Create CSS icon animations", "Use SVG morph animations", "Implement loading spinner icons"],
      sections: [
        {
          id: "s1", title: "CSS Icon Animations",
          whyItMatters: "Animated icons provide feedback, delight users, and communicate state changes effectively.",
          content: "**Common animation types:**\n\n**Rotate (loading):**\n```css\n@keyframes spin { to { transform: rotate(360deg); } }\n.spinner { animation: spin 1s linear infinite; }\n```\n\n**Draw (stroke reveal):**\n```css\n@keyframes draw { to { stroke-dashoffset: 0; } }\n.draw-icon path {\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: draw 1s ease forwards;\n}\n```\n\n**Morph (shape change):** Use SVG `<animate>` or FLIP technique. CSS transitions on `d` attribute work in modern browsers."
        },
        {
          id: "s2", title: "State Transition Animations",
          whyItMatters: "Smooth icon transitions make UI feel polished and responsive.",
          content: "**Hamburger to X:**\n```css\n.menu-icon path:nth-child(1) { transform-origin: center; transition: transform 0.3s; }\n.menu-icon.active path:nth-child(1) { transform: rotate(45deg) translateY(2px); }\n```\n\n**Sun to Moon (theme toggle):** Mask-based morph animation or opacity crossfade between two icon SVGs."
        }
      ],
      quiz: { questions: [{ id: "ic24-q1", type: "mcq", question: "What CSS property animates the drawing of an SVG stroke?", options: ["stroke-color", "stroke-dashoffset", "stroke-width", "stroke-linecap"], correctAnswer: 1, explanation: "Animating stroke-dashoffset from the path length to 0 creates a draw effect.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "stroke-dashoffset", value: "Animate for draw effect" }, { label: "Morph", value: "Animate d attribute" }, { label: "Hamburger→X", value: "Rotate path transforms" }]
    },
    {
      id: "ic-25", number: 25, title: "SVG Optimization Techniques", subtitle: "SVGO, path simplification", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 65, prerequisites: ["ic-20"], learningObjectives: ["Use SVGO for icon optimization", "Simplify path data", "Reduce icon file size"],
      sections: [
        {
          id: "s1", title: "SVGO — The SVG Optimizer",
          whyItMatters: "Optimized SVGs load faster, reduce bandwidth, and improve rendering performance.",
          content: "**SVGO (SVG Optimizer)** is the standard tool for optimizing SVG icons. Typical optimizations:\n- Remove unnecessary attributes (xmlns, version, metadata)\n- Round coordinates (1.23456 → 1.25)\n- Merge paths\n- Remove empty groups\n- Apply transforms\n- Convert colors to shorthand #06B6D4 → #0BD\n- Remove hidden elements\n\n**Install:** `npm i -g svgo`\n**Usage:** `svgo icon.svg -o icon.min.svg`\n\nTypical reduction: 40-70% file size. Most icon libraries run SVGO during build."
        },
        {
          id: "s2", title: "Manual Optimization Tips",
          whyItMatters: "Understanding manual techniques helps when you don't have automation tools.",
          content: "**Manual tips:** Use H/V instead of L for straight lines, combine adjacent paths, remove redundant Z commands, use relative coordinates where shorter, round to 1-2 decimal places, remove empty `g` tags, inline CSS instead of class references."
        }
      ],
      quiz: { questions: [{ id: "ic25-q1", type: "mcq", question: "What does SVGO stand for?", options: ["SVG Optimizer", "SVG Generator", "SVG Object", "SVG Output"], correctAnswer: 0, explanation: "SVGO stands for SVG Optimizer, the standard Node.js tool for optimizing SVG files.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "SVGO", value: "SVG Optimizer tool" }, { label: "Reduce size", value: "40-70% typical" }, { label: "svgo icon.svg", value: "CLI usage" }]
    },
    {
      id: "ic-26", number: 26, title: "SVG Sprites", subtitle: "Symbol definitions, use tags, sprite sheets", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 70, prerequisites: ["ic-19"], learningObjectives: ["Create SVG sprite sheets", "Use symbol and use elements", "Optimize sprite loading"],
      sections: [
        {
          id: "s1", title: "Building an SVG Sprite",
          whyItMatters: "SVG sprites consolidate all icons into one file, reducing HTTP requests and enabling caching.",
          content: "**Sprite structure:**\n```svg\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\">\n  <symbol id=\"search\" viewBox=\"0 0 24 24\">\n    <path d=\"M21 21l-4.35-4.35M11 6a5 5 0 110 10 5 5 0 010-10\"/>\n  </symbol>\n  <symbol id=\"menu\" viewBox=\"0 0 24 24\">\n    <path d=\"M4 6h16M4 12h16M4 18h16\"/>\n  </symbol>\n</svg>\n```\n\n**Usage:** `<svg><use href=\"sprite.svg#search\"/></svg>`\n\n**Build tool plugins:**\n- Vite: `vite-plugin-svg-sprite`\n- Webpack: `svg-sprite-loader`\n- Rollup: `@svg-rollup/sprite`"
        }
      ],
      quiz: { questions: [{ id: "ic26-q1", type: "mcq", question: "Which SVG element defines a reusable icon in a sprite?", options: ["<g>", "<symbol>", "<template>", "<defs>"], correctAnswer: 1, explanation: "<symbol> defines reusable icon templates with their own viewBox.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "symbol", value: "Defines reusable icon" }, { label: "use", value: "Instantiates a symbol" }, { label: "Sprite file", value: "Single file, many icons" }]
    },
    {
      id: "ic-27", number: 27, title: "Dynamic SVG Systems", subtitle: "Color swapping, size variants, props", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 70, prerequisites: ["ic-26"], learningObjectives: ["Build dynamic icon components", "Implement color prop variants", "Create size variant system"],
      sections: [
        {
          id: "s1", title: "Props-Driven Icon Components",
          whyItMatters: "Dynamic icons adapt to context without requiring multiple SVG variants.",
          content: "**Dynamic props:**\n```tsx\ninterface DynamicIconProps {\n  size?: 'sm' | 'md' | 'lg'\n  variant?: 'outline' | 'solid'\n  color?: 'default' | 'primary' | 'danger'\n  animated?: boolean\n}\n\nconst sizeMap = { sm: 16, md: 24, lg: 32 }\nconst colorMap = {\n  default: 'currentColor',\n  primary: 'var(--color-primary)',\n  danger: 'var(--color-danger)'\n}\n```\n\nUse React context for global defaults. Set stroke/fill via CSS variables for runtime theming."
        }
      ],
      quiz: { questions: [{ id: "ic27-q1", type: "mcq", question: "What technique enables runtime color theming in SVG icons?", options: ["Inline styles", "CSS custom properties", "JavaScript color picker", "Server-side rendering"], correctAnswer: 1, explanation: "CSS custom properties (variables) allow runtime color changes without re-rendering.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "CSS Variables", value: "Runtime icon color theming" }, { label: "size prop", value: "Map to pixel dimensions" }, { label: "variant", value: "Outline vs solid toggle" }]
    },
    {
      id: "ic-28", number: 28, title: "Accessible SVG Icons", subtitle: "title, desc, role=\"img\", focusable", difficulty: "Intermediate", estimatedMinutes: 35, xpReward: 60, prerequisites: ["ic-6", "ic-19"], learningObjectives: ["Add accessible titles to SVG", "Use desc for complex icons", "Handle focus for interactive icons"],
      sections: [
        {
          id: "s1", title: "SVG Accessibility Attributes",
          whyItMatters: "Accessible SVGs ensure all users, including screen reader users, understand icon meaning.",
          content: "**Essential accessibility for SVG icons:**\n```svg\n<svg role=\"img\" aria-labelledby=\"title-id\" focusable=\"false\">\n  <title id=\"title-id\">Search</title>\n  <desc>Magnifying glass icon for search</desc>\n  <path d=\"...\"/>\n</svg>\n```\n\n**Rules:**\n- `role=\"img\"` — identifies SVG as an image\n- `focusable=\"false\"` — prevents focus in IE/Edge\n- `<title>` — concise label for screen readers\n- `<desc>` — detailed description for complex icons\n- `aria-hidden=\"true\"` — for purely decorative icons\n- Never use `aria-label` on `<svg>` without `role=\"img\"`"
        }
      ],
      quiz: { questions: [{ id: "ic28-q1", type: "mcq", question: "What role attribute should be set on SVG icons for accessibility?", options: ["role=\"icon\"", "role=\"img\"", "role=\"graphic\"", "role=\"svg\""], correctAnswer: 1, explanation: "role=\"img\" identifies the SVG as an image for screen readers.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "role=\"img\"", value: "Marks SVG as image" }, { label: "title", value: "Accessible icon label" }, { label: "focusable=\"false\"", value: "Removes focus in IE/Edge" }]
    },
    {
      id: "ic-29", number: 29, title: "Interactive SVG Components", subtitle: "Hover, click, state-driven icons", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 80, prerequisites: ["ic-27", "ic-28"], learningObjectives: ["Build hover-aware icon components", "Handle click events on SVG paths", "Create state-driven icon animations"],
      sections: [
        {
          id: "s1", title: "Interactive Icon States",
          whyItMatters: "Interactive icons provide feedback — hover, active, disabled states communicate affordance.",
          content: "**States to handle:**\n- **Default**: Normal appearance\n- **Hover**: Scale up, color change, glow\n- **Active/Pressed**: Scale down briefly\n- **Disabled**: Reduced opacity, no pointer events\n- **Selected**: Filled variant, accent color\n\n```css\n.icon-btn { transition: transform 0.15s, color 0.15s; }\n.icon-btn:hover { transform: scale(1.1); }\n.icon-btn:active { transform: scale(0.95); }\n.icon-btn:disabled { opacity: 0.4; pointer-events: none; }\n```"
        },
        {
          id: "s2", title: "Path-Level Interactivity",
          whyItMatters: "Interactive paths enable hover effects on specific icon parts (like highlighting a star).",
          content: "Use CSS pointer-events on path groups. Add hover styles to individual path elements. For complex interactions, use JavaScript to track which path segment was clicked. Use `<g>` elements with hover/click handlers for multi-part icon interactions."
        }
      ],
      quiz: { questions: [{ id: "ic29-q1", type: "mcq", question: "What CSS property shows an icon is clickable on hover?", options: ["opacity", "cursor: pointer", "color", "scale"], correctAnswer: 1, explanation: "Setting cursor: pointer on hover indicates the icon is interactive.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Hover state", value: "scale(1.1) + color change" }, { label: "Active state", value: "scale(0.95) on click" }, { label: "Disabled", value: "opacity 0.4, no events" }]
    },
    {
      id: "ic-30", number: 30, title: "Advanced SVG Performance", subtitle: "will-change, hardware acceleration", difficulty: "Advanced", estimatedMinutes: 45, xpReward: 75, prerequisites: ["ic-25", "ic-29"], learningObjectives: ["Optimize icon rendering performance", "Use GPU acceleration for animations", "Profile and debug icon performance"],
      sections: [
        {
          id: "s1", title: "Rendering Performance",
          whyItMatters: "Poorly optimized icons cause jank, especially on low-end devices and animation-heavy pages.",
          content: "**Performance tips:**\n- Use `will-change: transform` on animated icons (creates compositor layer)\n- Prefer `transform` and `opacity` for animations (GPU accelerated)\n- Avoid animating `d` attribute on many paths simultaneously\n- Use `contain: layout style paint` on icon containers\n- Limit SVG complexity: fewer paths = faster paint\n\n**Profiling:** Use Chrome DevTools Performance tab. Look for Paint events. SVG with >100 paths may cause layout thrashing."
        }
      ],
      quiz: { questions: [{ id: "ic30-q1", type: "mcq", question: "Which CSS property creates a compositor layer for smooth SVG animations?", options: ["transform", "will-change", "animation", "contain"], correctAnswer: 1, explanation: "will-change: transform hints the browser to create a separate compositor layer.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "will-change", value: "GPU layer hint" }, { label: "transform/opacity", value: "GPU-accelerated props" }, { label: "contain", value: "Isolates icon rendering" }]
    },
    // ============ PART 4: ICON DESIGN SYSTEMS (CHAPTERS 31-40) ============
    {
      id: "ic-31", number: 31, partLabel: "Part 4: Icon Design Systems", title: "Building a Design System", subtitle: "Icon principles, guidelines, grid", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 75, prerequisites: ["ic-3", "ic-27"], learningObjectives: ["Define icon design principles", "Create icon design guidelines", "Establish grid and sizing standards"],
      sections: [
        {
          id: "s1", title: "Icon Design Principles",
          whyItMatters: "Design principles ensure every icon in the system feels like it belongs to the same family.",
          content: "**Core principles for icon systems:**\n1. **Clarity** — Icon communicates its meaning at first glance\n2. **Consistency** — Same stroke, same weight, same rounding, same style\n3. **Simplicity** — Remove unnecessary detail; the simplest version is usually best\n4. **Accessibility** — Works at small sizes, with screen readers, and for colorblind users\n5. **Scalability** — Looks good at 16px, 24px, 48px, and 96px\n\n**Design guidelines document:** Grid definition, stroke weights, corner radii, color palette, do/don't examples."
        },
        {
          id: "s2", title: "Setting Up the Grid System",
          whyItMatters: "A standardized grid creates visual harmony across hundreds of icons.",
          content: "**Grid setup (24x24):**\n- Keyline shapes: circle (22px), square (20x20), horizontal rect (20x16), vertical rect (16x20)\n- Corner radius: 2px (default), 4px (softer), 0px (sharp)\n- Padding: 1px minimum from edge\n- Stroke: 1.5-2px center-aligned\n- Export: SVG optimized with SVGO, 24x24 viewBox"
        }
      ],
      quiz: { questions: [{ id: "ic31-q1", type: "mcq", question: "What is the most important principle of icon design?", options: ["Creativity", "Clarity", "Complexity", "Trendiness"], correctAnswer: 1, explanation: "Clarity — the icon must communicate its meaning instantly.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Clarity", value: "Communicates meaning instantly" }, { label: "Consistency", value: "Same stroke, weight, style" }, { label: "Keylines", value: "Circle, square, rect guides" }]
    },
    {
      id: "ic-32", number: 32, title: "Consistent Iconography", subtitle: "Same stroke, same corner radius, same alignment", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 65, prerequisites: ["ic-31"], learningObjectives: ["Maintain visual consistency across icons", "Standardize stroke and corner values", "Use optical alignment techniques"],
      sections: [
        {
          id: "s1", title: "Visual Consistency Rules",
          whyItMatters: "Inconsistent stroke, radius, or alignment makes an icon set look amateurish.",
          content: "**Rules for consistency:**\n- **Stroke weight**: Fixed value (1.5px, 2px, or 2.5px) for ALL icons\n- **Corner radius**: Same for all outer corners, same for all inner corners\n- **Cap style**: All round (`stroke-linecap=\"round\"`) or all butt — never mixed\n- **Join style**: All round (`stroke-linejoin=\"round\"`) or all miter\n- **Optical alignment**: Vertically align icons visually, not mathematically\n\n**Common mistakes:** Mixing 2px strokes with 1.5px strokes, mixing round and sharp corners, inconsistent padding within the grid."
        }
      ],
      quiz: { questions: [{ id: "ic32-q1", type: "mcq", question: "What happens when you mix stroke weights in an icon set?", options: ["Nothing", "Looks inconsistent and unprofessional", "Faster rendering", "Better accessibility"], correctAnswer: 1, explanation: "Mixed stroke weights create visual inconsistency that makes the set feel disjointed.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Stroke weight", value: "Same value for all icons" }, { label: "Corner radius", value: "Same rx for all corners" }, { label: "Cap/Join", value: "All round or all miter" }]
    },
    {
      id: "ic-33", number: 33, title: "Icon Sizing Standards", subtitle: "16/20/24/32/48px, scaling, density", difficulty: "Intermediate", estimatedMinutes: 35, xpReward: 60, prerequisites: ["ic-31"], learningObjectives: ["Use standard icon size tiers", "Scale icons across densities", "Handle icon sizing in responsive layouts"],
      sections: [
        {
          id: "s1", title: "Icon Size Hierarchy",
          whyItMatters: "Standard size tiers create predictable spacing and visual rhythm in interfaces.",
          content: "**Standard icon sizes:**\n- **12px**: Inline with small text, badges, indicators\n- **16px**: Small UI, table actions, compact nav\n- **20px**: Dense toolbars, settings\n- **24px**: Default, standard UI icons, buttons\n- **32px**: Section headers, medium illustrations\n- **48px**: Empty states, feature icons\n- **64px+**: Hero sections, large illustrations\n\n**Density scaling:** For high-DPI displays, use the same pixel size but thinner strokes (1.5px instead of 2px) for visual consistency."
        }
      ],
      quiz: { questions: [{ id: "ic33-q1", type: "mcq", question: "What is the default icon size for most UI systems?", options: ["16px", "20px", "24px", "32px"], correctAnswer: 2, explanation: "24px is the standard default size for UI icons in most design systems.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "24px", value: "Default icon size" }, { label: "16px", value: "Compact/small UI size" }, { label: "48px", value: "Empty state size" }]
    },
    {
      id: "ic-34", number: 34, title: "Visual Hierarchy with Icons", subtitle: "Emphasis, size weight, color contrast", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 65, prerequisites: ["ic-33"], learningObjectives: ["Use icons to establish hierarchy", "Apply size and weight for emphasis", "Use color contrast effectively"],
      sections: [
        {
          id: "s1", title: "Icon Hierarchy Principles",
          whyItMatters: "Icons guide user attention — proper hierarchy ensures users process information in the right order.",
          content: "**Hierarchy techniques:**\n- **Size**: Primary actions get 24px icons, secondary 20px, tertiary 16px\n- **Weight**: Filled = more emphasis than outline\n- **Color**: Brand color = primary, neutral = secondary, red = alert\n- **Position**: Top/left = higher importance\n- **Animation**: Animated icons draw attention (use sparingly)\n\n**Example:** In a dashboard sidebar, navigation section headers use 24px filled icons, items use 20px outline icons, badges use 12px."
        }
      ],
      quiz: { questions: [{ id: "ic34-q1", type: "mcq", question: "Which icon variant provides the most visual emphasis?", options: ["Outline 16px", "Outline 24px", "Filled 24px", "Filled 12px"], correctAnswer: 2, explanation: "Filled icons at larger sizes carry the most visual weight and emphasis.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Size hierarchy", value: "Larger = more important" }, { label: "Filled > Outline", value: "Filled = more emphasis" }, { label: "Color contrast", value: "Accent color = attention" }]
    },
    {
      id: "ic-35", number: 35, title: "Dark Mode Icon Systems", subtitle: "Stroke color, fill, opacity adjustments", difficulty: "Advanced", estimatedMinutes: 40, xpReward: 70, prerequisites: ["ic-27"], learningObjectives: ["Adapt icons for dark mode", "Use CSS variables for theme switching", "Handle icon opacity in dark themes"],
      sections: [
        {
          id: "s1", title: "Icon Theming for Dark Mode",
          whyItMatters: "Icons designed only for light mode look harsh or invisible in dark mode.",
          content: "**Dark mode adjustments:**\n- **Stroke color**: Dark backgrounds need lighter strokes (#E5E7EB vs #374151)\n- **Opacity**: Reduce icon opacity from 100% to 85-90% on dark backgrounds\n- **Fill**: Filled backgrounds need darker tint on dark mode\n- **Glow**: Subtle glow effect on dark mode adds depth\n\n```css\n:root { --icon-color: #374151; --icon-opacity: 1; }\n[data-theme=\"dark\"] {\n  --icon-color: #E5E7EB;\n  --icon-opacity: 0.9;\n}\n.icon { stroke: var(--icon-color); opacity: var(--icon-opacity); }\n```"
        }
      ],
      quiz: { questions: [{ id: "ic35-q1", type: "mcq", question: "How should icon stroke color change in dark mode?", options: ["Darker", "Lighter", "Same", "Rainbow"], correctAnswer: 1, explanation: "Dark backgrounds need lighter stroke colors for sufficient contrast.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Dark mode stroke", value: "Lighter stroke colors" }, { label: "Opacity", value: "85-90% in dark mode" }, { label: "CSS variables", value: "Theme switching mechanism" }]
    },
    {
      id: "ic-36", number: 36, title: "Mobile UI Icons", subtitle: "Touch targets, finger-friendly, gesture icons", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 65, prerequisites: ["ic-33"], learningObjectives: ["Design icons for touch interfaces", "Meet accessibility touch target sizes", "Communicate gestures with icons"],
      sections: [
        {
          id: "s1", title: "Touch Target Standards",
          whyItMatters: "Icons on mobile must be tappable — undersized targets frustrate users and cause errors.",
          content: "**Touch target guidelines:**\n- Minimum 44x44px touch target (Apple HIG, Material Design)\n- Icon can be 24px inside a 44x44 padded area\n- Use `::before` pseudo-element for invisible hit area expansion\n- Space icons minimum 8px apart\n\n**Mobile icon sizing:**\n- Tab bar: 24px icons in 48x48 touch targets\n- Toolbar: 24px icons in 44x44 targets\n- Navigation drawer: 24px icons with 16px right margin\n- Floating action button: 24px icon on 56px circular button"
        },
        {
          id: "s2", title: "Gesture and Affordance Icons",
          whyItMatters: "Gesture icons teach users how to interact with touch interfaces.",
          content: "**Common gesture icons:** Swipe (horizontal arrow), Pull to refresh (down arrow curving up), Pinch (arrows pointing inward/outward), Drag handle (6 dots grid), Long press (finger with dotted circle). Use simple, universally understood representations."
        }
      ],
      quiz: { questions: [{ id: "ic36-q1", type: "mcq", question: "What is the minimum touch target size for mobile?", options: ["24x24", "32x32", "44x44", "60x60"], correctAnswer: 2, explanation: "44x44px is the minimum touch target per Apple HIG and Material Design guidelines.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Touch target", value: "Minimum 44x44px" }, { label: "Tab bar icon", value: "24px in 48x48 target" }, { label: "Gesture icons", value: "Swipe, pinch, drag" }]
    },
    {
      id: "ic-37", number: 37, title: "Dashboard Icon Systems", subtitle: "Navigation, analytics, status, notifications", difficulty: "Advanced", estimatedMinutes: 45, xpReward: 75, prerequisites: ["ic-34", "ic-36"], learningObjectives: ["Design icons for data dashboards", "Use status indicator icons", "Handle notification badge icons"],
      sections: [
        {
          id: "s1", title: "Dashboard Iconography",
          whyItMatters: "Dashboard icons convey data meaning at a glance — clarity directly impacts decision-making.",
          content: "**Dashboard icon categories:**\n- **Navigation**: Sidebar section icons (Dashboard, Analytics, Users, Settings)\n- **Data status**: Up trend (green up arrow), Down trend (red down arrow), Neutral (flat dash)\n- **Alert levels**: Info (i circle), Warning (triangle !), Error (x circle), Success (check circle)\n- **Notifications**: Bell (new alerts), Bell off (muted), Dot (unread indicator)\n\n**Best practices:**\n- Status icons should be immediately color-coded (green=good, red=bad, yellow=warning)\n- Use filled variants for active states, outline for inactive\n- Notification badges: number overlay on top-right of bell icon"
        }
      ],
      quiz: { questions: [{ id: "ic37-q1", type: "mcq", question: "What color is typically used for warning status icons?", options: ["Green", "Red", "Yellow/Amber", "Blue"], correctAnswer: 2, explanation: "Yellow/amber is the standard color for warning/caution status icons.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Status icons", value: "Color-coded alerts" }, { label: "Trend icons", value: "Up/down arrows for data" }, { label: "Badge", value: "Number overlay on bell" }]
    },
    {
      id: "ic-38", number: 38, title: "Animated Microinteractions", subtitle: "Loading spinners, toggle anims, hover feedback", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 80, prerequisites: ["ic-24", "ic-29"], learningObjectives: ["Design loading spinner icons", "Animate toggle switches", "Implement hover microfeedback"],
      sections: [
        {
          id: "s1", title: "Loading and Progress Icons",
          whyItMatters: "Well-designed loading animations reduce perceived wait time and prevent user frustration.",
          content: "**Loading spinner variants:**\n- **Circular spinner**: Rotating stroke circle (most common)\n- **Pulsing dots**: Three dots bouncing in sequence\n- **Skeleton icons**: Outlined icon shape with shimmer gradient\n- **Determinate progress**: Circle arc that fills to 100%\n\n```css\n@keyframes spin { to { transform: rotate(360deg); } }\n.spinner {\n  width: 24px; height: 24px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n```"
        },
        {
          id: "s2", title: "Toggle and Switch Animations",
          whyItMatters: "Smooth toggle animations provide clear state feedback and feel polished.",
          content: "**Toggle icon transitions:**\n- Checkbox: Unchecked → checked with scale + color fill\n- Star/favorite: Outline → filled with bounce effect\n- Eye (password): Open eye → closed eye crossfade\n- Play/Pause: Play triangle morphs to pause bars\n\nUse CSS transitions for simple operations, requestAnimationFrame for complex morph animations. Duration: 150-300ms for microinteractions."
        }
      ],
      quiz: { questions: [{ id: "ic38-q1", type: "mcq", question: "What duration range is appropriate for icon microinteractions?", options: ["10-50ms", "150-300ms", "1-2s", "5-10s"], correctAnswer: 1, explanation: "Microinteractions should complete in 150-300ms — fast enough to feel responsive, slow enough to perceive.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Spinner", value: "Rotating circle animation" }, { label: "Toggle", value: "150-300ms transition" }, { label: "Favorite", value: "Outline→filled with bounce" }]
    },
    {
      id: "ic-39", number: 39, title: "Accessibility and Semantics", subtitle: "aria-current, aria-selected, focus indicators", difficulty: "Advanced", estimatedMinutes: 40, xpReward: 70, prerequisites: ["ic-28", "ic-29"], learningObjectives: ["Use ARIA states with icon buttons", "Implement focus indicators", "Handle icon semantics in lists"],
      sections: [
        {
          id: "s1", title: "ARIA States on Icon Buttons",
          whyItMatters: "Screen readers need ARIA states to communicate icon button status.",
          content: "**ARIA states for icon buttons:**\n```html\n<!-- Current page in navigation -->\n<button aria-current=\"page\" aria-label=\"Dashboard\">\n  <svg>...</svg>\n</button>\n\n<!-- Selected toggle state -->\n<button aria-pressed=\"true\" aria-label=\"Mute notifications\">\n  <svg>...</svg>\n</button>\n\n<!-- Expanded/collapsed -->\n<button aria-expanded=\"false\" aria-label=\"Open menu\">\n  <svg>...</svg>\n</button>\n```\n**Focus indicators:** Always provide visible focus ring for keyboard navigation. Use `outline: 2px solid` or `box-shadow` on `:focus-visible`."
        }
      ],
      quiz: { questions: [{ id: "ic39-q1", type: "mcq", question: "Which ARIA attribute indicates the current page in navigation?", options: ["aria-selected", "aria-current", "aria-active", "aria-location"], correctAnswer: 1, explanation: "aria-current=\"page\" indicates the current page in navigation elements.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "aria-current", value: "Current page indicator" }, { label: "aria-pressed", value: "Toggle button state" }, { label: "focus-visible", value: "Keyboard focus ring" }]
    },
    {
      id: "ic-40", number: 40, title: "Enterprise Icon Architectures", subtitle: "Scale, governance, icon committees", difficulty: "Expert", estimatedMinutes: 50, xpReward: 85, prerequisites: ["ic-31", "ic-37"], learningObjectives: ["Design scalable icon governance", "Set up icon review processes", "Manage icon usage across teams"],
      sections: [
        {
          id: "s1", title: "Icon Governance at Scale",
          whyItMatters: "Without governance, enterprise icon systems become inconsistent, duplicated, and unmaintainable.",
          content: "**Governance structure:**\n- **Icon Committee**: Cross-team group that reviews new icon requests\n- **Request process**: Submit new icon request → Review → Design → Approve → Publish\n- **Naming conventions**: `action/search`, `nav/arrow-right`, `status/check-circle`\n- **Deprecation policy**: Mark old icons as deprecated, remove after 2 major versions\n\n**Tooling:** Version-controlled icon repository, automated build pipeline, Figma plugin for design → code sync, usage analytics to track adoption."
        },
        {
          id: "s2", title: "Enterprise Distribution",
          whyItMatters: "Enterprise teams need reliable, versioned, documented icon packages.",
          content: "**Distribution methods:**\n- **npm package**: `@company/icons` with semver\n- **CDN**: Versioned CDN URL for non-JS projects\n- **Figma library**: Shared component library with auto-updates\n- **Documentation site**: Searchable catalog with usage guidelines\n\nAutomate with: PR reviews for new icons, snapshot tests for visual regression, bundle size monitoring."
        }
      ],
      quiz: { questions: [{ id: "ic40-q1", type: "mcq", question: "What is the purpose of an icon committee?", options: ["Design all icons", "Review and approve icons cross-team", "Code the icon library", "Write documentation"], correctAnswer: 1, explanation: "An icon committee reviews and approves new icon requests to maintain consistency across teams.", difficulty: 3 }], passingScore: 70 },
      cheatSheet: [{ label: "Governance", value: "Review process for icons" }, { label: "Naming", value: "category/icon-name format" }, { label: "Monorepo", value: "Version-controlled icons" }]
    },
    // ============ PART 5: REAL PROJECTS + ADVANCED SYSTEMS (CHAPTERS 41-50) ============
    {
      id: "ic-41", number: 41, partLabel: "Part 5: Real Projects + Advanced Systems", title: "Build a Custom Icon Library", subtitle: "Design, export, document, distribute", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 90, prerequisites: ["ic-31", "ic-32", "ic-40"], learningObjectives: ["Design a cohesive icon set", "Export and optimize icon SVGs", "Create documentation and distribute"],
      sections: [
        {
          id: "s1", title: "Planning Your Icon Library",
          whyItMatters: "A well-planned icon library saves thousands of hours across your organization.",
          content: "**Planning steps:**\n1. Audit existing icons (inventory what exists)\n2. Define categories: Navigation, Actions, Status, Media, Communication, Commerce, Social\n3. Establish design tokens: grid 24x24, stroke 2px, corner 2px, cap round\n4. Create keyline templates in Figma/Illustrator\n5. Build 10-20 core icons first, then expand\n\n**Tools:** Figma (design), SVGO (optimize), svg-sprite (bundle), TypeScript (types), Storybook (documentation)."
        },
        {
          id: "s2", title: "Distribution and Documentation",
          whyItMatters: "A library nobody can find or use is worthless — documentation and distribution matter.",
          content: "**Package structure:**\n```\nicons/\n├── src/          # Individual SVGs\n├── sprite.svg    # Sprite bundle\n├── react/        # React components\n├── vue/          # Vue components\n├── types.ts      # TypeScript types\n├── icons.json    # Metadata\n└── docs/         # Usage examples\n```\n\nPublish to npm, create a searchable documentation site with usage examples, and provide Figma plugin for designers."
        }
      ],
      quiz: { questions: [{ id: "ic41-q1", type: "mcq", question: "What is the first step in building a custom icon library?", options: ["Design icons", "Audit existing icons", "Publish to npm", "Create documentation"], correctAnswer: 1, explanation: "Start by auditing existing icons to understand what's needed and avoid duplication.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Audit", value: "Inventory existing icons first" }, { label: "Design tokens", value: "Grid, stroke, radius specs" }, { label: "Storybook", value: "Documentation tool" }]
    },
    {
      id: "ic-42", number: 42, title: "Create an SVG Icon Editor", subtitle: "Drawing, path editing, export tools", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 90, prerequisites: ["ic-20", "ic-25", "ic-29"], learningObjectives: ["Build a browser-based SVG editor", "Implement path drawing tools", "Add export and optimization features"],
      sections: [
        {
          id: "s1", title: "Building the Editor Canvas",
          whyItMatters: "An SVG editor lets designers and developers create icons without external tools.",
          content: "**Core features:**\n- **Canvas**: SVG element with grid overlay and snap-to-grid\n- **Shape tools**: Rectangle, circle, line, polygon, freehand path\n- **Selection**: Click to select, drag to move, handles to resize\n- **Path editing**: Point drag, bezier handle adjustment\n- **Inspector panel**: Edit coordinates, stroke, fill, opacity\n\n**Tech stack:** Vanilla SVG DOM manipulation or library like Fabric.js or Rough.js. Use Pointer Events API for cross-browser drawing."
        },
        {
          id: "s2", title: "Export Pipeline",
          whyItMatters: "One-click export with proper optimization saves hours of manual work.",
          content: "**Export features:**\n- Export as: SVG, React component, Vue component\n- Optimization: Run SVGO on export\n- Naming: Auto-generate icon name from content\n- Preview: Show icon at 16, 24, 32, 48px sizes\n- Batch export: Export multiple icons with consistent settings"
        }
      ],
      quiz: { questions: [{ id: "ic42-q1", type: "mcq", question: "What is a key feature of an SVG icon editor?", options: ["Video editing", "Path drawing and manipulation", "Email sending", "Database management"], correctAnswer: 1, explanation: "Path drawing and manipulation is the core feature of an SVG icon editor.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Canvas", value: "SVG element with grid" }, { label: "Path editing", value: "Point drag, bezier handles" }, { label: "Export", value: "SVG, React, Vue formats" }]
    },
    {
      id: "ic-43", number: 43, title: "Build an Icon Search Platform", subtitle: "Search, categories, copy, preview", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 85, prerequisites: ["ic-41"], learningObjectives: ["Build icon search functionality", "Implement category filtering", "Add copy-to-clipboard features"],
      sections: [
        {
          id: "s1", title: "Search and Discovery",
          whyItMatters: "A searchable icon library saves developers and designers hours of browsing time.",
          content: "**Search features:**\n- **Full-text search**: Search by name, category, tags, keywords\n- **Fuzzy matching**: Typo-tolerant search\n- **Category filters**: Sidebar with icon category counts\n- **Recent searches**: LocalStorage persistence\n\n```typescript\ninterface IconMeta {\n  id: string\n  name: string\n  category: string\n  tags: string[]\n  keywords: string[]\n  variants: ('outline' | 'solid')[]\n}\n```\n\nUse Fuse.js or Lunr.js for client-side search. Index icons in a JSON manifest loaded at build time."
        },
        {
          id: "s2", title: "Copy and Preview UX",
          whyItMatters: "Quick copy functionality reduces friction and increases icon adoption.",
          content: "**Icon interaction:**\n- Click icon: Copy SVG or JSX to clipboard\n- Hover: Larger preview with name and category\n- Size toggle: Preview at multiple sizes\n- Format toggle: SVG / JSX / HTML\n- Color picker: Preview with different colors\n\nImplement clipboard API: `navigator.clipboard.writeText(svgString)`"
        }
      ],
      quiz: { questions: [{ id: "ic43-q1", type: "mcq", question: "What JavaScript API copies text to clipboard?", options: ["Clipboard.copy()", "navigator.clipboard.writeText()", "document.copy()", "window.clipboard()"], correctAnswer: 1, explanation: "navigator.clipboard.writeText() is the modern async clipboard API.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Search", value: "Full-text + fuzzy matching" }, { label: "Category filter", value: "Group icons by type" }, { label: "Clipboard API", value: "navigator.clipboard.writeText" }]
    },
    {
      id: "ic-44", number: 44, title: "Design System Icon Manager", subtitle: "Versioning, approval, usage tracking", difficulty: "Expert", estimatedMinutes: 55, xpReward: 90, prerequisites: ["ic-40", "ic-43"], learningObjectives: ["Implement icon versioning system", "Build approval workflows", "Track icon usage analytics"],
      sections: [
        {
          id: "s1", title: "Icon Versioning and Lifecycle",
          whyItMatters: "Versioning prevents breaking changes and allows gradual migration across projects.",
          content: "**Icon lifecycle stages:**\n1. **Draft**: In design review\n2. **Beta**: Available but API may change\n3. **Stable**: Published, fully supported\n4. **Deprecated**: Replaced by newer icon, kept for migration\n5. **Removed**: Deleted in major version\n\n**Versioning strategy:**\n- Semver for the icon package\n- Codemods for breaking icon renames\n- Migration guides for deprecated icons\n- Automated changelog generation from git history"
        },
        {
          id: "s2", title: "Usage Analytics",
          whyItMatters: "Data-driven decisions prevent wasted effort on unused icons.",
          content: "**Track:**\n- Most/least used icons (remove unused ones)\n- Most searched terms (identify gaps)\n- Adoption rate per project\n- Error reports (icons not found, wrong names)\n\nImplement via: Build-time plugin that logs imports, or runtime telemetry. Use this data to prioritize new icon requests."
        }
      ],
      quiz: { questions: [{ id: "ic44-q1", type: "mcq", question: "What stage comes after 'Stable' in icon lifecycle?", options: ["Draft", "Beta", "Deprecated", "Removed"], correctAnswer: 2, explanation: "After Stable, icons may become Deprecated before eventual removal.", difficulty: 3 }], passingScore: 70 },
      cheatSheet: [{ label: "Lifecycle", value: "Draft→Beta→Stable→Deprecated" }, { label: "Semver", value: "Versioning icon package" }, { label: "Analytics", value: "Track usage, remove unused" }]
    },
    {
      id: "ic-45", number: 45, title: "Animated SVG Dashboard", subtitle: "Real-time animated icon dashboard", difficulty: "Expert", estimatedMinutes: 65, xpReward: 100, prerequisites: ["ic-30", "ic-38"], learningObjectives: ["Build real-time animated dashboards", "Combine data with animated icons", "Optimize animation performance"],
      sections: [
        {
          id: "s1", title: "Dashboard Architecture",
          whyItMatters: "Real-time animated dashboards deliver live data with engaging visual feedback.",
          content: "**Architecture:**\n- **Data layer**: WebSocket or Server-Sent Events for real-time data\n- **Icon components**: Animated SVG components that react to data changes\n- **Animation engine**: requestAnimationFrame loop with delta time\n- **Performance**: Offscreen canvas for heavy icons, will-change for GPU layers\n\n**Example widgets:**\n- Live user counter: Number animates with icon pulse on change\n- Server status: Green (healthy) → yellow (warning) → red (down) with color transition\n- Bandwidth gauge: Arc fills in real-time, arrow icon rotates"
        },
        {
          id: "s2", title: "Animation Patterns",
          whyItMatters: "Consistent animation patterns create a cohesive dashboard experience.",
          content: "**Animation patterns for dashboards:**\n- **Entrance**: Icons fade in + slide up when data loads\n- **Update**: Data change triggers subtle pulse or color shift\n- **Alert**: Red flash + shake for error conditions\n- **Idle**: Subtle breathing animation (scale 1→1.02→1)\n\nUse CSS animations for simple transitions, WAAPI (Web Animations API) for scripted sequences, WebGL for complex particle effects."
        }
      ],
      quiz: { questions: [{ id: "ic45-q1", type: "mcq", question: "What API is best for scripted, sequenced animations?", options: ["CSS transitions", "CSS animations", "Web Animations API", "jQuery animate"], correctAnswer: 2, explanation: "The Web Animations API provides programmatic control for sequenced and synchronized animations.", difficulty: 3 }], passingScore: 70 },
      cheatSheet: [{ label: "WebSocket", value: "Real-time data source" }, { label: "WAAPI", value: "Web Animations API" }, { label: "Delta time", value: "Frame-independent animation" }]
    },
    {
      id: "ic-46", number: 46, title: "AI Icon Recommendation Engine", subtitle: "Suggest icons by context/action", difficulty: "Expert", estimatedMinutes: 60, xpReward: 95, prerequisites: ["ic-43"], learningObjectives: ["Build AI-powered icon suggestions", "Create icon embeddings", "Implement similarity search"],
      sections: [
        {
          id: "s1", title: "Icon Embeddings and Search",
          whyItMatters: "AI recommendation helps developers find the right icon without knowing its name.",
          content: "**Approach:**\n1. Create icon embeddings: Map each icon to a vector based on name, tags, category, visual features\n2. User types a description: \"upload a file to cloud\" → embed query\n3. Find nearest neighbors: Cosine similarity between query embedding and icon embeddings\n4. Return top N results\n\n**Implementation:** Use OpenAI embeddings or a smaller model like all-MiniLM-L6-v2. Store embeddings in a vector database (Pinecone, Chroma) or in-memory for smaller sets."
        },
        {
          id: "s2", title: "Context-Aware Suggestions",
          whyItMatters: "Context matters — the same action needs different icons in different interfaces.",
          content: "**Context signals:**\n- Component type: Button, menu item, empty state, notification\n- Adjacent icons: Suggest icons that pair well together\n- Design system: Match the icon style (outline vs filled)\n- User history: Suggest icons the team commonly uses\n\nBuild a recommendation API that takes (query, context) and returns ranked icon suggestions."
        }
      ],
      quiz: { questions: [{ id: "ic46-q1", type: "mcq", question: "What technique finds similar icons from a user's text description?", options: ["Regex search", "Vector embeddings + similarity", "Exact string match", "Random selection"], correctAnswer: 1, explanation: "Vector embeddings map text and icons to the same space, enabling semantic similarity search.", difficulty: 3 }], passingScore: 70 },
      cheatSheet: [{ label: "Embeddings", value: "Vector representation of icons" }, { label: "Cosine similarity", value: "Measure of embedding closeness" }, { label: "Vector DB", value: "Pinecone, Chroma for storage" }]
    },
    {
      id: "ic-47", number: 47, title: "Dynamic Themeable Icons", subtitle: "Multi-theme, color tokens, CSS vars", difficulty: "Expert", estimatedMinutes: 55, xpReward: 90, prerequisites: ["ic-27", "ic-35"], learningObjectives: ["Implement multi-theme icon systems", "Use color tokens for theming", "Build runtime theme switching"],
      sections: [
        {
          id: "s1", title: "Multi-Theme Icon Architecture",
          whyItMatters: "Products with white-label or multi-brand support need icons that adapt to each theme.",
          content: "**Theme architecture:**\n```css\n/* Theme tokens */\n:root {\n  --icon-primary: #374151;\n  --icon-secondary: #6B7280;\n  --icon-accent: #6366F1;\n  --icon-danger: #EF4444;\n  --icon-success: #10B981;\n}\n\n[data-theme=\"dark\"] {\n  --icon-primary: #F3F4F6;\n  --icon-secondary: #9CA3AF;\n  --icon-accent: #818CF8;\n  --icon-danger: #F87171;\n  --icon-success: #34D399;\n}\n\n[data-theme=\"brand-x\"] {\n  --icon-accent: #FF5722;\n}\n```\n\nApply via `stroke=\"var(--icon-primary)\"` and `fill=\"var(--icon-accent)\"` in SVGs."
        },
        {
          id: "s2", title: "Theme-Aware Icon Components",
          whyItMatters: "Components should respond to themes without manual prop passing.",
          content: "**Implementation:**\n- Accept `theme` prop or read from context\n- Map theme to CSS class on root element\n- Use CSS variables for all icon colors\n- Support component-level theme override\n- Animate theme transitions with CSS `transition`\n\n```tsx\n<Icon name=\"search\" theme=\"dark\" />\n// or via context:\n<ThemeProvider theme=\"dark\">\n  <Icon name=\"search\" />\n</ThemeProvider>\n```"
        }
      ],
      quiz: { questions: [{ id: "ic47-q1", type: "mcq", question: "What is the best approach for multi-theme icon colors?", options: ["Inline styles per theme", "CSS custom properties", "JavaScript color computation", "Separate SVG per theme"], correctAnswer: 1, explanation: "CSS custom properties enable runtime theme switching without re-rendering or multiple SVG variants.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "CSS vars", value: "Runtime theme tokens" }, { label: "Theme context", value: "React/Vue theme provider" }, { label: "Transition", value: "Animate between themes" }]
    },
    {
      id: "ic-48", number: 48, title: "Icon CDN and Delivery Optimization", subtitle: "Cache, compression, SRI", difficulty: "Expert", estimatedMinutes: 50, xpReward: 85, prerequisites: ["ic-25", "ic-26"], learningObjectives: ["Set up an icon CDN", "Optimize delivery with caching", "Implement SRI for security"],
      sections: [
        {
          id: "s1", title: "CDN Architecture for Icons",
          whyItMatters: "Fast icon delivery is critical for page load performance worldwide.",
          content: "**CDN strategy:**\n- **Multi-region CDN**: CloudFront, Cloudflare, Fastly\n- **Cache headers**: `Cache-Control: public, max-age=31536000, immutable`\n- **Versioned URLs**: `/icons/v1.2.3/search.svg` for cache busting\n- **Compression**: Serve SVG with Brotli or gzip\n- **Format negotiation**: Serve `.svgz` (gzipped SVG) for compatible browsers\n\n**Optimization:**\n- **Sprite CDN**: Single sprite.svg for all icons, cached forever\n- **Subset CDN**: Dynamic sprite with only requested icons\n- **Preconnect**: `<link rel=\"preconnect\" href=\"https://icons.cdn.com\">`"
        },
        {
          id: "s2", title: "Security and Integrity",
          whyItMatters: "CDN-delivered icons must be protected from tampering and MITM attacks.",
          content: "**Security measures:**\n- **SRI (Subresource Integrity)**: `integrity=\"sha384-...\"` ensures the file hasn't been modified\n- **CSP (Content Security Policy)**: Restrict which CDN domains can serve icons\n- **HTTPS only**: Always serve icons over HTTPS\n- **Signed URLs**: For private icon packages\n\n```html\n<link rel=\"preload\" href=\"/sprite.svg\" as=\"image\"\n      integrity=\"sha384-abc123...\" crossorigin=\"anonymous\">\n```"
        }
      ],
      quiz: { questions: [{ id: "ic48-q1", type: "mcq", question: "What cache header value indicates a file can be cached forever?", options: ["no-cache", "max-age=3600", "max-age=31536000, immutable", "private"], correctAnswer: 2, explanation: "max-age=31536000 (1 year) with immutable tells the browser the file will never change.", difficulty: 3 }], passingScore: 70 },
      cheatSheet: [{ label: "CDN", value: "Multi-region delivery" }, { label: "Immutable cache", value: "1 year cache, versioned URLs" }, { label: "SRI", value: "sha384 integrity hash" }]
    },
    {
      id: "ic-49", number: 49, title: "Enterprise Icon Infrastructure", subtitle: "Pipeline, automation, QA", difficulty: "Expert", estimatedMinutes: 60, xpReward: 95, prerequisites: ["ic-40", "ic-44", "ic-48"], learningObjectives: ["Build icon CI/CD pipeline", "Implement automated QA checks", "Set up visual regression testing"],
      sections: [
        {
          id: "s1", title: "Icon CI/CD Pipeline",
          whyItMatters: "Automated pipelines ensure icon quality, consistency, and timely delivery across teams.",
          content: "**Pipeline stages:**\n1. **Design submit**: Designer uploads SVG to Figma\n2. **Auto-export**: Figma plugin pushes SVG to GitHub repo\n3. **Lint**: Check grid, stroke, naming conventions\n4. **Optimize**: Run SVGO, minify\n5. **Build**: Generate sprite, React/Vue components, types\n6. **Test**: Visual regression, bundle size check\n7. **Release**: npm publish, CDN update, changelog\n\n**Tools:** GitHub Actions, Figma API, SVGO, Percy/Chromatic for visual testing."
        },
        {
          id: "s2", title: "Automated QA Checks",
          whyItMatters: "Automated QA catches inconsistencies before they reach production.",
          content: "**QA checks:**\n- **Grid compliance**: Icon fits within 24x24, has proper padding\n- **Stroke consistency**: All paths use correct stroke-width\n- **Naming**: Follows naming convention, no duplicates\n- **Size**: File size under threshold (typically < 1KB)\n- **Color**: No hardcoded colors (must use currentColor)\n- **Accessibility**: Includes title or proper aria attributes\n- **SVG validity**: Parses without errors\n\nImplement as ESLint plugin for SVGs or custom Node.js script."
        }
      ],
      quiz: { questions: [{ id: "ic49-q1", type: "mcq", question: "What should an automated icon QA check verify?", options: ["Icon is aesthetically pleasing", "Grid compliance and stroke consistency", "Icon popularity", "Color of the icon"], correctAnswer: 1, explanation: "Automated QA verifies technical requirements like grid compliance, stroke consistency, and naming conventions.", difficulty: 3 }], passingScore: 70 },
      cheatSheet: [{ label: "CI/CD", value: "Design→Lint→Build→Release" }, { label: "Lint check", value: "Grid, stroke, naming" }, { label: "Visual regression", value: "Percy/Chromatic tests" }]
    },
    {
      id: "ic-50", number: 50, title: "Icons Mastery + Certificate", subtitle: "Final project, comprehensive review", difficulty: "Expert", estimatedMinutes: 90, xpReward: 150, prerequisites: ["ic-41", "ic-45", "ic-49"], learningObjectives: ["Complete a comprehensive icon project", "Demonstrate mastery of icon systems", "Build a production-ready icon solution"],
      sections: [
        {
          id: "s1", title: "Final Project Overview",
          whyItMatters: "The final project proves you can design, build, and deploy a complete icon system end-to-end.",
          content: "**Final project options:**\n\n**Option A: Build a Complete Icon Library**\n- Design 20+ cohesive icons on a 24x24 grid\n- Create outline + solid variants\n- Build React and Vue components\n- Set up npm package with build pipeline\n- Create documentation site with search\n- Configure CDN delivery with SRI\n\n**Option B: Build an Icon Management Dashboard**\n- Real-time dashboard with animated SVG icons\n- AI-powered search and recommendation\n- Theme switching (light/dark/custom)\n- Usage analytics and reporting\n\n**Option C: Enterprise Icon Infrastructure**\n- Full CI/CD pipeline for icon delivery\n- Automated QA and visual regression\n- Multi-team governance workflow\n- Figma plugin for design→code sync"
        },
        {
          id: "s2", title: "Review and Certification",
          whyItMatters: "Certification validates your expertise for professional advancement.",
          content: "**Comprehensive review covers:**\n- Icon design principles and grid systems\n- All major icon libraries and their ecosystems\n- SVG engineering and optimization\n- Accessibility and ARIA\n- Animation and interactivity\n- Design systems and governance\n- Enterprise delivery and CDN\n- AI and modern icon workflows\n\nComplete the final project and pass the comprehensive exam to earn your Icons Mastery Certificate."
        }
      ],
      quiz: { questions: [{ id: "ic50-q1", type: "mcq", question: "What is the first milestone in building a complete icon library?", options: ["Creating the npm package", "Designing icons on a consistent grid", "Setting up CDN", "Writing documentation"], correctAnswer: 1, explanation: "Everything starts with the icon designs — a consistent grid and design system is the foundation.", difficulty: 2 }], passingScore: 80 },
      cheatSheet: [{ label: "Final Project", value: "Complete icon system" }, { label: "Certificate", value: "Icons Mastery certification" }, { label: "Portfolio", value: "Demonstrates end-to-end skill" }]
    }
  ]
};
