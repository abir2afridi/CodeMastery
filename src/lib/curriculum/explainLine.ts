// Heuristic per-line explainer for HTML / CSS / JS, with English & Bangla output.
export type Lang = "html" | "css" | "javascript";
export type UILang = "en" | "bn";

const trim = (s: string) => s.replace(/\s+$/g, "").replace(/^\s+/, "");

const T = {
  blank: { en: "Blank line — used for spacing/readability.", bn: "ফাঁকা লাইন — পঠনযোগ্যতার জন্য।" },
  htmlComment: { en: "HTML comment — ignored by the browser, used for notes.", bn: "HTML মন্তব্য — ব্রাউজার এড়িয়ে যায়, শুধু নোট রাখার জন্য।" },
  doctype: { en: "Declares the document type so the browser uses modern HTML rules.", bn: "ডকুমেন্ট টাইপ ঘোষণা করে যাতে ব্রাউজার আধুনিক HTML নিয়ম ব্যবহার করে।" },
  textNode: { en: "Text content displayed inside the surrounding element.", bn: "ভেতরে দেখানো টেক্সট কনটেন্ট।" },
  someTag: { en: "An HTML tag.", bn: "একটি HTML ট্যাগ।" },
  cssComment: { en: "CSS comment — ignored by the browser.", bn: "CSS মন্তব্য — ব্রাউজার এড়িয়ে যায়।" },
  closeBlock: { en: "Closes the current rule or block.", bn: "বর্তমান ব্লক বন্ধ করে।" },
  cssDecl: { en: "CSS declaration.", bn: "CSS ডিক্লারেশন।" },
  jsComment: { en: "JavaScript comment — ignored at runtime.", bn: "JavaScript মন্তব্য — রানটাইমে এড়িয়ে যাওয়া হয়।" },
  jsBlockComment: { en: "JavaScript block comment.", bn: "JavaScript ব্লক মন্তব্য।" },
  jsImport: { en: "Imports values from another module.", bn: "অন্য মডিউল থেকে মান আমদানি করে।" },
  jsExport: { en: "Exports a value so other modules can import it.", bn: "মান এক্সপোর্ট করে যাতে অন্য মডিউল ব্যবহার করতে পারে।" },
  ifLine: { en: "Conditional — runs the block only if the expression is truthy.", bn: "শর্তসাপেক্ষ — শুধু সত্য হলে ব্লক চালায়।" },
  elseLine: { en: "Runs when the previous `if` was false.", bn: "আগের `if` মিথ্যা হলে চলে।" },
  forLine: { en: "Loop — repeats the block while the condition holds.", bn: "লুপ — শর্ত সত্য থাকা পর্যন্ত পুনরাবৃত্তি করে।" },
  whileLine: { en: "Loop — repeats while the condition is truthy.", bn: "লুপ — শর্ত সত্য থাকা পর্যন্ত চলে।" },
  returnLine: { en: "Returns a value from the surrounding function.", bn: "চারপাশের ফাংশন থেকে একটি মান ফেরত দেয়।" },
  consoleLog: { en: "Prints a value to the developer console.", bn: "ডেভেলপার কনসোলে মান প্রিন্ট করে।" },
  qsel: { en: "Finds the first element matching a CSS selector.", bn: "CSS সিলেক্টরের সাথে মেলে এমন প্রথম এলিমেন্ট খুঁজে।" },
  byId: { en: "Finds the element with the given id.", bn: "প্রদত্ত id-যুক্ত এলিমেন্ট খুঁজে।" },
  addEvt: { en: "Attaches an event handler that runs on user interaction.", bn: "ইউজার ইন্টারঅ্যাকশনে চালু হবে এমন ইভেন্ট হ্যান্ডলার যুক্ত করে।" },
  innerHTML: { en: "Replaces the element's HTML contents.", bn: "এলিমেন্টের HTML কনটেন্ট প্রতিস্থাপন করে।" },
  textContent: { en: "Replaces the element's text contents (safe from HTML injection).", bn: "এলিমেন্টের টেক্সট কনটেন্ট প্রতিস্থাপন করে (HTML ইনজেকশন থেকে নিরাপদ)।" },
  throwLine: { en: "Throws an error, interrupting execution.", bn: "একটি এরর থ্রো করে, এক্সিকিউশন বন্ধ করে।" },
  tryLine: { en: "Starts a block whose errors will be caught.", bn: "এমন ব্লক শুরু করে যার এরর ধরা হবে।" },
  catchLine: { en: "Handles an error thrown in the matching `try`.", bn: "মিল থাকা `try` ব্লকের এরর হ্যান্ডল করে।" },
  jsCloseBlock: { en: "Closes the current block.", bn: "বর্তমান ব্লক বন্ধ করে।" },
  openBlock: { en: "Opens a new block.", bn: "নতুন ব্লক শুরু করে।" },
  callFn: { en: "Calls a function with the given arguments.", bn: "প্রদত্ত আর্গুমেন্ট দিয়ে ফাংশন কল করে।" },
  jsStmt: { en: "JavaScript statement.", bn: "JavaScript স্টেটমেন্ট।" },
};

const HTML_TAGS_EN: Record<string, string> = {
  html: "Root element — wraps the entire page.",
  head: "Holds metadata (title, links, scripts) — not visible content.",
  body: "Holds everything the user actually sees on the page.",
  title: "Sets the browser tab title and is used by search engines.",
  meta: "Metadata about the page (charset, viewport, description, etc.).",
  link: "Links an external resource, usually a stylesheet or icon.",
  script: "Loads or runs JavaScript code.",
  style: "Embeds CSS rules directly in the page.",
  h1: "Top-level heading — the main title of this section.",
  h2: "Second-level heading — a major subsection.",
  h3: "Third-level heading.",
  p: "A paragraph of text.",
  a: "A hyperlink — clicking navigates somewhere.",
  img: "An image embedded in the page.",
  ul: "An unordered (bulleted) list.",
  ol: "An ordered (numbered) list.",
  li: "A single item inside a list.",
  div: "A generic container used for grouping and styling.",
  span: "A generic inline container, typically for styling part of a line.",
  header: "Page or section header (intro content, nav, branding).",
  nav: "A block of navigation links.",
  main: "The dominant content of the page (only one per page).",
  section: "A thematic grouping of content with its own heading.",
  article: "Self-contained content (post, card, article).",
  aside: "Tangential content (sidebar, callout).",
  footer: "Footer for a page or section (credits, links).",
  button: "An interactive button the user can click.",
  input: "A form field for user input.",
  form: "Groups inputs and submits them as a request.",
  label: "A caption tied to a form input — improves accessibility.",
  br: "A line break inside text.",
  hr: "A horizontal rule — a thematic divider.",
};

const HTML_TAGS_BN: Record<string, string> = {
  html: "মূল এলিমেন্ট — পুরো পেজকে ঘিরে রাখে।",
  head: "মেটাডেটা (টাইটেল, লিংক, স্ক্রিপ্ট) ধারণ করে — দৃশ্যমান নয়।",
  body: "ইউজার যা দেখে সব কিছু এর ভেতরে থাকে।",
  title: "ব্রাউজার ট্যাবের শিরোনাম সেট করে এবং সার্চ ইঞ্জিনে ব্যবহৃত হয়।",
  meta: "পেজ সম্পর্কিত মেটাডেটা (charset, viewport, description ইত্যাদি)।",
  link: "বাহ্যিক রিসোর্স লিংক করে, সাধারণত স্টাইলশিট বা আইকন।",
  script: "JavaScript কোড লোড বা চালায়।",
  style: "পেজে সরাসরি CSS রুল যোগ করে।",
  h1: "সর্বোচ্চ স্তরের হেডিং — সেকশনের মূল শিরোনাম।",
  h2: "দ্বিতীয় স্তরের হেডিং — বড় সাব-সেকশন।",
  h3: "তৃতীয় স্তরের হেডিং।",
  p: "একটি প্যারাগ্রাফ।",
  a: "হাইপারলিংক — ক্লিক করলে অন্য পেজে যায়।",
  img: "পেজে যুক্ত একটি ছবি।",
  ul: "বুলেট তালিকা।",
  ol: "সংখ্যাযুক্ত তালিকা।",
  li: "তালিকার একটি আইটেম।",
  div: "গ্রুপিং ও স্টাইলিং-এর জন্য জেনেরিক কন্টেইনার।",
  span: "ইনলাইন জেনেরিক কন্টেইনার, সাধারণত লাইনের একটি অংশ স্টাইল করার জন্য।",
  header: "পেজ বা সেকশনের হেডার (পরিচিতি, নেভ, ব্র্যান্ডিং)।",
  nav: "নেভিগেশন লিংকের একটি ব্লক।",
  main: "পেজের প্রধান কনটেন্ট (প্রতি পেজে একটি)।",
  section: "নিজস্ব হেডিং সহ থিমভিত্তিক কনটেন্ট গ্রুপ।",
  article: "স্বয়ংসম্পূর্ণ কনটেন্ট (পোস্ট, কার্ড)।",
  aside: "সম্পূরক কনটেন্ট (সাইডবার, কলআউট)।",
  footer: "পেজ বা সেকশনের ফুটার (ক্রেডিট, লিংক)।",
  button: "ক্লিক করার মতো একটি বোতাম।",
  input: "ইউজার ইনপুট নেওয়ার ফর্ম ফিল্ড।",
  form: "ইনপুটগুলো গ্রুপ করে এবং রিকোয়েস্ট হিসেবে পাঠায়।",
  label: "ফর্ম ইনপুটের সাথে যুক্ত ক্যাপশন — অ্যাক্সেসিবিলিটি বাড়ায়।",
  br: "লাইন ব্রেক।",
  hr: "অনুভূমিক রেখা — থিমভিত্তিক বিভাজক।",
};

function pick<T extends { en: string; bn: string }>(t: T, ui: UILang) { return t[ui]; }

function explainHtml(line: string, ui: UILang): string {
  const l = trim(line);
  if (!l) return pick(T.blank, ui);
  if (l.startsWith("<!--")) return pick(T.htmlComment, ui);
  if (l.startsWith("<!DOCTYPE")) return pick(T.doctype, ui);
  const closeTag = l.match(/^<\/([a-zA-Z0-9-]+)>/);
  if (closeTag) return ui === "bn"
    ? `আগে খোলা <${closeTag[1]}> এলিমেন্ট বন্ধ করে।`
    : `Closes the <${closeTag[1]}> element opened earlier.`;
  const selfClose = l.match(/^<([a-zA-Z0-9-]+)([^>]*)\/?>$/);
  if (selfClose) {
    const tag = selfClose[1];
    const attrs = selfClose[2].trim();
    const map = ui === "bn" ? HTML_TAGS_BN : HTML_TAGS_EN;
    const base = map[tag] || (ui === "bn" ? `<${tag}> এলিমেন্ট খোলে।` : `Opens a <${tag}> element.`);
    if (!attrs) return base;
    return ui === "bn" ? `${base} অ্যাট্রিবিউট: ${attrs}.` : `${base} Attributes set: ${attrs}.`;
  }
  if (l.startsWith("<")) return pick(T.someTag, ui);
  return pick(T.textNode, ui);
}

function explainCss(line: string, ui: UILang): string {
  const l = trim(line);
  if (!l) return pick(T.blank, ui);
  if (l.startsWith("/*") || l.endsWith("*/") || l.startsWith("*")) return pick(T.cssComment, ui);
  if (l.startsWith("@media")) return ui === "bn" ? "মিডিয়া কুয়েরি — স্ক্রিন মিল গেলেই ভেতরের রুল প্রয়োগ হয়।" : "Media query — applies the inner rules only when the screen matches.";
  if (l.startsWith("@keyframes")) return ui === "bn" ? "অ্যানিমেশন টাইমলাইন সংজ্ঞায়িত করে যা `animation` দিয়ে রেফার করা যায়।" : "Defines an animation timeline you can reference with `animation`.";
  if (l.startsWith("@import")) return ui === "bn" ? "আরেকটি স্টাইলশিট আমদানি করে।" : "Imports another stylesheet into this one.";
  if (l.startsWith(":root")) return ui === "bn" ? "ডকুমেন্টের রুট টার্গেট করে — CSS ভ্যারিয়েবল ঘোষণার জন্য আদর্শ।" : "Targets the document root — perfect for declaring CSS variables.";
  if (l.endsWith("{")) {
    const sel = l.replace(/\s*\{$/, "");
    if (sel.startsWith(".")) return ui === "bn"
      ? `সিলেক্টর — "${sel.slice(1)}" ক্লাসের সব এলিমেন্ট স্টাইল করে।`
      : `Selector — styles every element with the class "${sel.slice(1)}".`;
    if (sel.startsWith("#")) return ui === "bn"
      ? `সিলেক্টর — "${sel.slice(1)}" id-যুক্ত একক এলিমেন্ট স্টাইল করে।`
      : `Selector — styles the single element with id "${sel.slice(1)}".`;
    if (/^[a-zA-Z]/.test(sel)) return ui === "bn"
      ? `সিলেক্টর — পেজের সব <${sel}> এলিমেন্ট স্টাইল করে।`
      : `Selector — styles every <${sel}> element on the page.`;
    return ui === "bn" ? `\`${sel}\` সিলেক্টরের রুল ব্লক খোলে।` : `Opens a rule block for selector \`${sel}\`.`;
  }
  if (l === "}") return pick(T.closeBlock, ui);
  const decl = l.match(/^([a-zA-Z-]+)\s*:\s*(.+);?$/);
  if (decl) {
    const [, prop, raw] = decl;
    const val = raw.replace(/;$/, "");
    const en = (s: string) => s;
    const bn = (s: string) => s;
    const dict: Record<string, { en: string; bn: string }> = {
      color: { en: en(`Sets the text color to ${val}.`), bn: bn(`টেক্সটের রঙ ${val} করে।`) },
      "background-color": { en: `Fills the element's background with ${val}.`, bn: `এলিমেন্টের ব্যাকগ্রাউন্ড ${val} করে।` },
      background: { en: `Sets the background (color/image/gradient) to ${val}.`, bn: `ব্যাকগ্রাউন্ড ${val} করে।` },
      "font-size": { en: `Sets the text size to ${val}.`, bn: `টেক্সটের সাইজ ${val} করে।` },
      "font-family": { en: `Uses ${val} for the text typeface (with fallbacks).`, bn: `টেক্সটের ফন্ট হিসেবে ${val} ব্যবহার করে।` },
      "font-weight": { en: `Sets the text weight (boldness) to ${val}.`, bn: `টেক্সটের মোটাত্ব ${val} করে।` },
      margin: { en: `Adds ${val} of empty space outside the element.`, bn: `এলিমেন্টের বাইরে ${val} ফাঁকা স্পেস যোগ করে।` },
      padding: { en: `Adds ${val} of empty space inside the element, around its content.`, bn: `কনটেন্টের চারপাশে ভেতরে ${val} ফাঁকা স্পেস যোগ করে।` },
      border: { en: `Draws a border: ${val}.`, bn: `বর্ডার আঁকে: ${val}.` },
      "border-radius": { en: `Rounds the corners by ${val}.`, bn: `কোণ ${val} পরিমাণে গোলাকার করে।` },
      width: { en: `Sets the element's width to ${val}.`, bn: `এলিমেন্টের প্রস্থ ${val} করে।` },
      height: { en: `Sets the element's height to ${val}.`, bn: `এলিমেন্টের উচ্চতা ${val} করে।` },
      display: { en: `Changes the layout mode to \`${val}\` (controls how the element flows).`, bn: `লেআউট মোড \`${val}\` করে।` },
      position: { en: `Sets positioning mode to \`${val}\`.`, bn: `পজিশনিং মোড \`${val}\` করে।` },
      "z-index": { en: `Sets stacking order to ${val} (higher draws on top).`, bn: `স্ট্যাকিং অর্ডার ${val} করে (বেশি মান উপরে থাকে)।` },
      flex: { en: `Flex shorthand: ${val} (grow / shrink / basis).`, bn: `Flex শর্টহ্যান্ড: ${val}.` },
      "justify-content": { en: `Aligns flex/grid items along the main axis: ${val}.`, bn: `মেইন অক্ষ বরাবর আইটেম সাজায়: ${val}.` },
      "align-items": { en: `Aligns flex/grid items along the cross axis: ${val}.`, bn: `ক্রস অক্ষ বরাবর আইটেম সাজায়: ${val}.` },
      gap: { en: `Adds ${val} of space between flex/grid children.`, bn: `চাইল্ডগুলির মাঝে ${val} স্পেস যোগ করে।` },
      transition: { en: `Animates property changes smoothly: ${val}.`, bn: `প্রপার্টি পরিবর্তনে মসৃণ অ্যানিমেশন: ${val}.` },
      transform: { en: `Applies a visual transform: ${val}.`, bn: `ভিজ্যুয়াল ট্রান্সফর্ম প্রয়োগ করে: ${val}.` },
      opacity: { en: `Sets transparency to ${val} (1 = solid, 0 = invisible).`, bn: `স্বচ্ছতা ${val} করে (1 = পূর্ণ, 0 = অদৃশ্য)।` },
      "box-shadow": { en: `Adds a drop shadow: ${val}.`, bn: `ড্রপ শ্যাডো যোগ করে: ${val}.` },
    };
    const found = dict[prop];
    if (found) return ui === "bn" ? found.bn : found.en;
    return ui === "bn" ? `\`${prop}\` কে \`${val}\` সেট করে।` : `Sets \`${prop}\` to \`${val}\`.`;
  }
  return pick(T.cssDecl, ui);
}

function explainJs(line: string, ui: UILang): string {
  const l = trim(line);
  if (!l) return pick(T.blank, ui);
  if (l.startsWith("//")) return pick(T.jsComment, ui);
  if (l.startsWith("/*") || l.startsWith("*") || l.endsWith("*/")) return pick(T.jsBlockComment, ui);
  if (/^import\s/.test(l)) return pick(T.jsImport, ui);
  if (/^export\s/.test(l)) return pick(T.jsExport, ui);
  const decl = l.match(/^(const|let|var)\s+([a-zA-Z_$][\w$]*)\s*=\s*(.+?);?$/);
  if (decl) {
    const [, kind, name, val] = decl;
    if (ui === "bn") {
      const mut = kind === "const" ? "ধ্রুবক (পুনরায় বরাদ্দ যায় না)" : kind === "let" ? "ভ্যারিয়েবল (ব্লক-স্কোপড)" : "ভ্যারিয়েবল (ফাংশন-স্কোপড)";
      if (/^function\b|^\(.*\)\s*=>/.test(val)) return `\`${name}\` নামে একটি ${mut} সংজ্ঞায়িত করে যা একটি ফাংশন ধারণ করে।`;
      if (val.startsWith("[")) return `\`${name}\` নামে একটি ${mut} তৈরি করে যা একটি অ্যারে।`;
      if (val.startsWith("{")) return `\`${name}\` নামে একটি ${mut} তৈরি করে যা একটি অবজেক্ট।`;
      return `\`${name}\` নামে একটি ${mut} ঘোষণা করে এবং \`${val.replace(/;$/, "")}\` বরাদ্দ করে।`;
    }
    const mut = kind === "const" ? "constant (cannot be reassigned)" : kind === "let" ? "variable (block-scoped)" : "variable (function-scoped)";
    if (/^function\b|^\(.*\)\s*=>/.test(val)) return `Defines a ${mut} \`${name}\` holding a function.`;
    if (val.startsWith("[")) return `Creates a ${mut} \`${name}\` set to an array.`;
    if (val.startsWith("{")) return `Creates a ${mut} \`${name}\` set to an object.`;
    return `Declares a ${mut} \`${name}\` and assigns it \`${val.replace(/;$/, "")}\`.`;
  }
  const fn = l.match(/^function\s+([a-zA-Z_$][\w$]*)\s*\(/);
  if (fn) return ui === "bn" ? `\`${fn[1]}\` নামে একটি ফাংশন সংজ্ঞায়িত করে।` : `Defines a function named \`${fn[1]}\`.`;
  if (/^if\s*\(/.test(l)) return pick(T.ifLine, ui);
  if (/^else\b/.test(l)) return pick(T.elseLine, ui);
  if (/^for\s*\(/.test(l)) return pick(T.forLine, ui);
  if (/^while\s*\(/.test(l)) return pick(T.whileLine, ui);
  if (/^return\b/.test(l)) return pick(T.returnLine, ui);
  if (/console\.log\(/.test(l)) return pick(T.consoleLog, ui);
  if (/document\.querySelector\(/.test(l)) return pick(T.qsel, ui);
  if (/document\.getElementById\(/.test(l)) return pick(T.byId, ui);
  if (/\.addEventListener\(/.test(l)) return pick(T.addEvt, ui);
  if (/\.innerHTML\s*=/.test(l)) return pick(T.innerHTML, ui);
  if (/\.textContent\s*=/.test(l)) return pick(T.textContent, ui);
  if (/^throw\b/.test(l)) return pick(T.throwLine, ui);
  if (/^try\b/.test(l)) return pick(T.tryLine, ui);
  if (/^catch\b/.test(l)) return pick(T.catchLine, ui);
  if (l === "}" || l === "};") return pick(T.jsCloseBlock, ui);
  if (l === "{") return pick(T.openBlock, ui);
  if (/^[a-zA-Z_$][\w$]*\(.*\);?$/.test(l)) return pick(T.callFn, ui);
  return pick(T.jsStmt, ui);
}

export function explainLine(line: string, lang: Lang, ui: UILang = "en"): string {
  if (lang === "html") return explainHtml(line, ui);
  if (lang === "css") return explainCss(line, ui);
  return explainJs(line, ui);
}
