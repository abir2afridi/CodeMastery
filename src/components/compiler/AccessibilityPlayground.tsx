import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "audit" | "contrast" | "keyboard" | "reader" | "aria";

const BRAND = "#0EA5E9";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "audit", label: "Accessibility Audit", icon: "\u{1F50D}" },
  { id: "contrast", label: "Contrast Checker", icon: "\u{1F3A8}" },
  { id: "keyboard", label: "Keyboard Test", icon: "\u{2328}\u{FE0F}" },
  { id: "reader", label: "Screen Reader", icon: "\u{1F50A}" },
  { id: "aria", label: "ARIA Validator", icon: "\u{1F4CB}" },
];

function tabStyle(active: boolean) {
  return {
    borderColor: active ? BRAND : "transparent",
    color: active ? BRAND : "hsl(var(--foreground)/0.5)",
  };
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="h-px w-4 bg-foreground/20" />
      <span className="text-[9px] font-black tracking-[0.3em] text-foreground/40 uppercase">{children}</span>
    </div>
  );
}

function GlowingDot({ color, pulse }: { color: string; pulse?: boolean }) {
  return (
    <motion.span
      className="inline-block w-2 h-2 rounded-full"
      style={{ backgroundColor: color }}
      animate={pulse ? { opacity: [1, 0.3, 1], scale: [1, 0.8, 1] } : undefined}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── Audit Issues ──
interface AuditIssue {
  id: string;
  type: "error" | "warning" | "info";
  category: string;
  message: string;
  wcagRef: string;
  fix: string;
}

// ── Tab 1: Accessibility Audit ──
function AuditTab() {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
<head><title>My Page</title></head>
<body>
  <div class="header">
    <div class="logo" onclick="goHome()">Logo</div>
    <div class="nav">
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  </div>
  <div class="main">
    <div class="section">
      <div class="title">Welcome!</div>
      <div class="content">This is a sample page.</div>
      <div class="btn" onclick="submit()">Click Here</div>
    </div>
    <img src="hero.jpg" />
    <form>
      <div>Name</div>
      <input type="text" />
      <div>Email</div>
      <input type="email" />
      <div class="btn" onclick="save()">Submit</div>
    </form>
  </div>
  <div class="footer">Copyright 2024</div>
</body>
</html>`);
  const [auditResults, setAuditResults] = useState<AuditIssue[]>([]);
  const [score, setScore] = useState(100);
  const [audited, setAudited] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runAudit = useCallback(() => {
    const issues: AuditIssue[] = [];
    let id = 0;

    // Check for landmark elements
    if (!/<header[\s>]/i.test(html) && !/<nav[\s>]/i.test(html) && !/<main[\s>]/i.test(html) && !/<footer[\s>]/i.test(html)) {
      issues.push({ id: `a${id++}`, type: "error", category: "Semantic Structure", message: "No semantic landmarks found. Use <header>, <nav>, <main>, <footer>.", wcagRef: "WCAG 1.3.1", fix: "Replace <div> containers with semantic elements like <header>, <nav>, <main>, <footer>." });
    }
    // Check for missing lang attribute
    if (!/lang=["']/i.test(html)) {
      issues.push({ id: `a${id++}`, type: "error", category: "Semantic Structure", message: "Missing lang attribute on <html>.", wcagRef: "WCAG 3.1.1", fix: 'Add lang="en" to the <html> tag.' });
    }
    // Check for alt text
    const imgMatches = html.match(/<img[^>]*>/gi) || [];
    imgMatches.forEach((img) => {
      if (!/alt\s*=/i.test(img)) {
        issues.push({ id: `a${id++}`, type: "error", category: "Images", message: "Image missing alt attribute.", wcagRef: "WCAG 1.1.1", fix: "Add descriptive alt text to the <img> tag." });
      } else if (/alt\s*=\s*["']\s*["']/i.test(img)) {
        issues.push({ id: `a${id++}`, type: "warning", category: "Images", message: "Image has empty alt text (ok for decorative images, verify intent).", wcagRef: "WCAG 1.1.1", fix: "Ensure empty alt is intentional for decorative images." });
      }
    });
    // Check for heading hierarchy
    if (!/<h1[\s>]/i.test(html)) {
      issues.push({ id: `a${id++}`, type: "warning", category: "Semantic Structure", message: "No <h1> heading found. Pages should have exactly one <h1>.", wcagRef: "WCAG 1.3.1", fix: "Add an <h1> heading that describes the page content." });
    }
    // Check for form labels
    const formInputs = html.match(/<input[^>]*>/gi) || [];
    formInputs.forEach((input) => {
      const hasLabel = new RegExp(`<label[^>]*for=["']${input.match(/id=["']([^"']*)["']/)?.[1] || "none"}["']`, "i").test(html);
      const hasAriaLabel = /aria-label\s*=/i.test(input);
      if (!hasLabel && !hasAriaLabel) {
        issues.push({ id: `a${id++}`, type: "error", category: "Forms", message: "Form input missing accessible label.", wcagRef: "WCAG 1.3.1 / 4.1.2", fix: "Add a <label> element with a matching for attribute, or use aria-label." });
      }
    });
    // Check for button text
    const buttonLike = html.match(/<div[^>]*class=["'][^"']*\b(btn|button)\b[^"']*["'][^>]*onclick/i);
    if (buttonLike) {
      issues.push({ id: `a${id++}`, type: "warning", category: "Keyboard", message: "Clickable <div> found. Use <button> elements for actions.", wcagRef: "WCAG 4.1.2", fix: "Replace <div onclick> with <button> or add role='button' and keyboard handlers." });
    }
    // Check for focusable elements
    if (!/<button[\s>]/i.test(html) && !/<a[\s>]/i.test(html)) {
      issues.push({ id: `a${id++}`, type: "info", category: "Keyboard", message: "No focusable interactive elements (buttons, links) found.", wcagRef: "WCAG 2.1.1", fix: "Add interactive elements like <button> or <a> for user actions." });
    }
    // Check viewport
    if (!/name=["']viewport["']/i.test(html)) {
      issues.push({ id: `a${id++}`, type: "warning", category: "Mobile", message: "Missing viewport meta tag for responsive accessibility.", wcagRef: "WCAG 1.4.4", fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">' });
    }
    // Check for skip link
    if (!/skip/i.test(html)) {
      issues.push({ id: `a${id++}`, type: "info", category: "Keyboard", message: "No skip navigation link found.", wcagRef: "WCAG 2.4.1", fix: 'Add a "Skip to content" link as the first focusable element.' });
    }
    // Check tabindex > 0
    const tabIndexMatches = html.match(/tabindex\s*=\s*["'](\d+)["']/gi) || [];
    tabIndexMatches.forEach((ti) => {
      const val = parseInt(ti.match(/\d+/)?.[0] || "0");
      if (val > 0) {
        issues.push({ id: `a${id++}`, type: "warning", category: "Keyboard", message: `Positive tabindex value (${val}) found. Use document order instead.`, wcagRef: "WCAG 2.4.3", fix: "Remove tabindex or set to 0 to follow DOM order." });
      }
    });

    setAuditResults(issues);
    const errorCount = issues.filter((i) => i.type === "error").length;
    const warningCount = issues.filter((i) => i.type === "warning").length;
    const infoCount = issues.filter((i) => i.type === "info").length;
    const newScore = Math.max(0, 100 - errorCount * 15 - warningCount * 7 - infoCount * 3);
    setScore(newScore);
    setAudited(true);
  }, [html]);

  const defaultExamples = [
    { label: "Broken Page", html: `<!DOCTYPE html>\n<html>\n<head><title>Page</title></head>\n<body>\n<div class="header"><div onclick="go()">Logo</div></div>\n<div class="main"><div class="title">Welcome</div>\n<img src="photo.jpg" />\n<div>Name</div>\n<input type="text" />\n<div class="btn" onclick="save()">Go</div></div>\n</body>\n</html>` },
    { label: "Fixed Page", html: `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Accessible Page</title></head>\n<body>\n<a href="#main" class="skip-link">Skip to content</a>\n<header><nav aria-label="Main"><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li></ul></nav></header>\n<main id="main"><h1>Welcome</h1><p>This is an accessible page.</p>\n<img src="photo.jpg" alt="Description of photo" />\n<form><label for="name">Name</label><input id="name" type="text" /><button type="submit">Submit</button></form></main>\n<footer>&copy; 2024</footer>\n</body>\n</html>` },
  ];

  const scoreColor = score >= 90 ? "#10b981" : score >= 70 ? "#f59e0b" : "#ef4444";

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4 flex flex-col min-h-0">
        <SectionLabel>HTML Editor</SectionLabel>

        <div className="flex gap-2 mb-2">
          {defaultExamples.map((ex, i) => (
            <button key={i} onClick={() => { setHtml(ex.html); setAudited(false); setAuditResults([]); }}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold bg-foreground/5 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all">
              {ex.label}
            </button>
          ))}
        </div>

        <textarea
          className="w-full h-48 bg-foreground/5 border border-foreground/10 rounded-xl p-4 text-[10px] font-mono resize-none outline-none focus:border-sky-500/50 transition-colors"
          value={html}
          onChange={(e) => { setHtml(e.target.value); setAudited(false); }}
          spellCheck={false}
        />

        <button onClick={runAudit}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all w-fit"
          style={{ backgroundColor: BRAND }}>
          {"\u{1F50D}"} Run Accessibility Audit
        </button>

        {/* Preview */}
        <div className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden min-h-[150px]">
          <div className="px-3 py-1.5 bg-foreground/5 border-b border-foreground/10 text-[9px] font-bold text-foreground/40">Live Preview</div>
          <iframe ref={iframeRef} srcDoc={html} className="w-full h-[200px] bg-white" title="Preview" />
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Audit Results</SectionLabel>

        {!audited ? (
          <p className="text-xs text-foreground/30 italic px-3">Click "Run Accessibility Audit" to check the HTML.</p>
        ) : (
          <>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white"
                style={{ backgroundColor: scoreColor }}>
                {score}
              </div>
              <div>
                <p className="text-xs font-bold" style={{ color: scoreColor }}>
                  {score >= 90 ? "Great!" : score >= 70 ? "Needs Work" : "Poor"}
                </p>
                <p className="text-[10px] text-foreground/40">Accessibility Score</p>
              </div>
            </div>

            <div className="flex gap-2 text-[10px]">
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-red-500/10 text-red-400">
                <span className="font-bold">{auditResults.filter((i) => i.type === "error").length}</span> errors
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-amber-500/10 text-amber-400">
                <span className="font-bold">{auditResults.filter((i) => i.type === "warning").length}</span> warnings
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                <span className="font-bold">{auditResults.filter((i) => i.type === "info").length}</span> info
              </div>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {auditResults.map((issue) => (
                <div key={issue.id} className={`px-3 py-2.5 rounded-xl border ${
                  issue.type === "error" ? "border-red-500/20 bg-red-500/5" :
                  issue.type === "warning" ? "border-amber-500/20 bg-amber-500/5" :
                  "border-blue-500/20 bg-blue-500/5"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase ${
                      issue.type === "error" ? "text-red-400" :
                      issue.type === "warning" ? "text-amber-400" :
                      "text-blue-400"
                    }`}>
                      {issue.type}
                    </span>
                    <span className="text-[9px] text-foreground/30">{issue.category}</span>
                    <span className="ml-auto text-[8px] font-mono text-foreground/30">{issue.wcagRef}</span>
                  </div>
                  <p className="text-[11px] text-foreground/70 mb-1">{issue.message}</p>
                  <p className="text-[9px] text-emerald-500/70 leading-relaxed">
                    <strong>Fix:</strong> {issue.fix}
                  </p>
                </div>
              ))}
              {auditResults.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-emerald-500 text-xs font-bold">{"\u{2705} No issues found!"}</p>
                  <p className="text-[10px] text-foreground/40 mt-1">This page meets basic accessibility checks.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Tab 2: Contrast Checker ──
function ContrastTab() {
  const [fgColor, setFgColor] = useState("#333333");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [fontSize, setFontSize] = useState(16);

  const hexToRgb = (hex: string) => {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return { r, g, b };
  };

  const luminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const contrastRatio = useMemo(() => {
    const fg = hexToRgb(fgColor);
    const bg = hexToRgb(bgColor);
    const l1 = luminance(fg.r, fg.g, fg.b);
    const l2 = luminance(bg.r, bg.g, bg.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }, [fgColor, bgColor]);

  const aaNormal = contrastRatio >= 4.5;
  const aaLarge = contrastRatio >= 3;
  const aaaNormal = contrastRatio >= 7;
  const aaaLarge = contrastRatio >= 4.5;

  const presets = [
    { label: "Black on White", fg: "#000000", bg: "#FFFFFF" },
    { label: "White on Black", fg: "#FFFFFF", bg: "#000000" },
    { label: "Blue on White", fg: "#0000FF", bg: "#FFFFFF" },
    { label: "Gray on White", fg: "#999999", bg: "#FFFFFF" },
    { label: "White on Blue", fg: "#FFFFFF", bg: "#0000FF" },
    { label: "Green on White", fg: "#008000", bg: "#FFFFFF" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Color Contrast Checker</SectionLabel>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] text-foreground/50 mb-1 block">Foreground Color</label>
            <div className="flex gap-2">
              <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-foreground/10" />
              <input className="flex-1 bg-foreground/5 border border-foreground/10 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-sky-500/50"
                value={fgColor} onChange={(e) => setFgColor(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-[10px] text-foreground/50 mb-1 block">Background Color</label>
            <div className="flex gap-2">
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-foreground/10" />
              <input className="flex-1 bg-foreground/5 border border-foreground/10 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-sky-500/50"
                value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="rounded-xl p-8 text-center border border-foreground/10 transition-all"
          style={{ backgroundColor: bgColor, color: fgColor }}>
          <p className="text-sm font-bold" style={{ fontSize: `${fontSize}px` }}>
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs mt-2 opacity-80" style={{ fontSize: `${fontSize - 2}px` }}>
            This is how your text will look to users.
          </p>
        </div>

        <div>
          <label className="text-[10px] text-foreground/50 mb-1 block">Font Size: {fontSize}px</label>
          <input type="range" min="10" max="32" value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: BRAND }} />
        </div>

        <SectionLabel>Presets</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button key={p.label} onClick={() => { setFgColor(p.fg); setBgColor(p.bg); }}
              className="px-3 py-2 rounded-lg text-[10px] font-bold border border-foreground/10 hover:bg-foreground/5 transition-all">
              <span className="inline-block w-3 h-3 rounded-full mr-1.5 align-middle"
                style={{ backgroundColor: p.fg }} />
              <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle"
                style={{ backgroundColor: p.bg, border: "1px solid rgba(0,0,0,0.1)" }} />
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Contrast Ratio</SectionLabel>
        <div className="text-center px-4 py-6 rounded-xl bg-foreground/5 border border-foreground/10">
          <div className="text-4xl font-black font-mono" style={{ color: contrastRatio >= 4.5 ? "#10b981" : "#ef4444" }}>
            {contrastRatio.toFixed(1)}:1
          </div>
          <p className="text-[10px] text-foreground/40 mt-1">WCAG Contrast Ratio</p>
        </div>

        <div className="space-y-2">
          {[
            { label: "AA Normal", pass: aaNormal, min: 4.5 },
            { label: "AA Large (18px+)", pass: aaLarge, min: 3.0 },
            { label: "AAA Normal", pass: aaaNormal, min: 7.0 },
            { label: "AAA Large (18px+)", pass: aaaLarge, min: 4.5 },
          ].map((level) => (
            <div key={level.label} className={`flex items-center justify-between px-4 py-2.5 rounded-xl border ${
              level.pass ? "border-emerald-500/20 bg-emerald-500/5" : "border-red-500/20 bg-red-500/5"
            }`}>
              <div>
                <p className="text-xs font-bold text-foreground/70">{level.label}</p>
                <p className="text-[9px] text-foreground/40">{level.min}:1 minimum</p>
              </div>
              <span className={`text-sm font-bold ${level.pass ? "text-emerald-500" : "text-red-400"}`}>
                {level.pass ? "\u{2705}" : "\u{274C}"}
              </span>
            </div>
          ))}
        </div>

        <SectionLabel>WCAG Reference</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed px-2">
          <p><strong className="text-foreground/70">AA:</strong> Minimum contrast for normal text (4.5:1) and large text (3:1).</p>
          <p className="mt-1"><strong className="text-foreground/70">AAA:</strong> Enhanced contrast for normal text (7:1) and large text (4.5:1).</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 3: Keyboard Test ──
function KeyboardTab() {
  const [focusOrder, setFocusOrder] = useState<string[]>([]);
  const [simulating, setSimulating] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);

  const elements = useMemo(() => [
    { id: "skip", label: "Skip to Content", type: "link", tabIndex: 0 },
    { id: "nav1", label: "Home", type: "link", tabIndex: 0 },
    { id: "nav2", label: "About", type: "link", tabIndex: 0 },
    { id: "nav3", label: "Contact", type: "link", tabIndex: 0 },
    { id: "search", label: "Search Input", type: "input", tabIndex: 0 },
    { id: "btn1", label: "Submit Search", type: "button", tabIndex: 0 },
    { id: "content", label: "Main Content Area", type: "region", tabIndex: -1 },
    { id: "link1", label: "Read More", type: "link", tabIndex: 0 },
    { id: "btn2", label: "Download PDF (tabindex=3)", type: "button", tabIndex: 3 },
    { id: "btn3", label: "Contact Sales", type: "button", tabIndex: 0 },
    { id: "btn4", label: "Newsletter Signup", type: "button", tabIndex: 0 },
    { id: "footer", label: "Footer Link", type: "link", tabIndex: 0 },
  ], []);

  // Sort by tabindex (0 first, then positive) to simulate focus order
  const sortedElements = useMemo(() => {
    return [...elements].sort((a, b) => {
      if (a.tabIndex <= 0 && b.tabIndex <= 0) return 0;
      if (a.tabIndex > 0 && b.tabIndex <= 0) return 1;
      if (a.tabIndex <= 0 && b.tabIndex > 0) return -1;
      return a.tabIndex - b.tabIndex;
    });
  }, [elements]);

  const simulateTab = useCallback(() => {
    if (simulating) return;
    setSimulating(true);
    setFocusIndex(-1);
    setFocusOrder([]);

    let i = 0;
    const interval = setInterval(() => {
      if (i < sortedElements.length) {
        const el = sortedElements[i];
        setFocusOrder((prev) => [...prev, el.label]);
        setFocusIndex(i);
        i++;
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 600);
  }, [simulating, sortedElements]);

  const hasTabindexIssue = elements.some((e) => e.tabIndex > 0);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Keyboard Navigation Simulation {simulating && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[250px]">
          <div className="space-y-2">
            {elements.map((el, i) => (
              <div
                key={el.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                  i === focusIndex
                    ? "border-sky-500 bg-sky-500/10 shadow-lg shadow-sky-500/20"
                    : "border-transparent bg-foreground/5"
                } ${focusOrder.includes(el.label) && i !== focusIndex ? "opacity-40" : ""}`}
                tabIndex={-1}
                style={i === focusIndex ? { outline: `3px solid ${BRAND}`, outlineOffset: "2px" } : {}}
              >
                <div className={`w-3 h-3 rounded-full ${el.type === "link" ? "bg-blue-500" : el.type === "input" ? "bg-emerald-500" : el.type === "button" ? "bg-amber-500" : "bg-purple-500"}`} />
                <span className="text-xs font-mono font-bold text-foreground/70 flex-1">{el.label}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono ${
                  el.tabIndex > 0 ? "bg-red-500/10 text-red-400" : "text-foreground/30"
                }`}>
                  tabindex={el.tabIndex}
                </span>
                {i === focusIndex && (
                  <span className="text-[9px] font-bold text-sky-500 animate-pulse">{"\u{25B6}"} FOCUSED</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <button onClick={simulateTab} disabled={simulating}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
          style={{ backgroundColor: BRAND }}>
          {simulating ? "\u{23F3} Simulating..." : "\u{2328}\u{FE0F} Simulate Tab Navigation"}
        </button>

        {hasTabindexIssue && (
          <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-[11px] text-red-400 font-bold">{"\u{26A0}\u{FE0F}"} Positive tabindex values detected!</p>
            <p className="text-[10px] text-red-400/70 mt-1">Elements with tabindex &gt; 0 disrupt the natural focus order. Use document order instead.</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Focus Order</SectionLabel>
        {focusOrder.length > 0 ? (
          <div className="space-y-1">
            {focusOrder.map((label, i) => (
              <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono ${
                i === focusIndex ? "text-sky-500 font-bold bg-sky-500/10" : "text-foreground/50"
              }`}>
                <span className="text-foreground/30 w-4">{i + 1}.</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-foreground/30 italic px-3">Click simulate to see the tab order.</p>
        )}

        <SectionLabel>Element Types</SectionLabel>
        <div className="space-y-1 text-[10px] text-foreground/50">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>Link</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Input</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Button</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span>Region</span>
          </div>
        </div>

        <SectionLabel>Best Practices</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>{"\u{2714}"} Use tabindex="0" for focusable elements</p>
          <p>{"\u{2714}"} Never use tabindex &gt; 0</p>
          <p>{"\u{2714}"} Ensure visible focus indicators</p>
          <p>{"\u{2714}"} Follow a logical DOM order</p>
          <p>{"\u{2714}"} Provide skip navigation links</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 4: Screen Reader ──
function ReaderTab() {
  const [mode, setMode] = useState<"visual" | "text" | "both">("both");
  const [reading, setReading] = useState(false);
  const [currentElement, setCurrentElement] = useState(-1);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const pageStructure = useMemo(() => [
    { role: "banner", label: "Site header", content: "My Accessible Site", level: "landmark" },
    { role: "navigation", label: "Main navigation", content: "Home, About, Contact, Blog", level: "landmark" },
    { role: "main", label: "Main content", content: "", level: "landmark" },
    { role: "heading", label: "Page heading", content: "Welcome to our site!", level: 1 },
    { role: "paragraph", label: "", content: "This is a sample paragraph demonstrating how screen readers interpret web content.", level: "text" },
    { role: "img", label: "Photo of team", content: "Our team working together in the office", level: "text" },
    { role: "form", label: "Contact form", content: "", level: "landmark" },
    { role: "textbox", label: "Your name", content: "John Doe", level: "interactive" },
    { role: "button", label: "Submit form", content: "Submit", level: "interactive" },
    { role: "alert", label: "", content: "Form submitted successfully!", level: "live" },
    { role: "contentinfo", label: "Footer", content: "Copyright 2024", level: "landmark" },
  ], []);

  const startReading = useCallback(() => {
    if (reading) return;
    setReading(true);
    setCurrentElement(-1);
    setAnnouncements([]);

    let i = 0;
    const interval = setInterval(() => {
      if (i < pageStructure.length) {
        const el = pageStructure[i];
        let announcement = "";

        if (el.level === "landmark") {
          announcement = `${el.role} landmark: ${el.label}. ${el.content}`;
        } else if (el.level === 1) {
          announcement = `Heading level 1: ${el.content}`;
        } else if (el.level === "text") {
          announcement = el.role === "img" ? `Image: ${el.content}` : el.content;
        } else if (el.level === "interactive") {
          announcement = `${el.label}, ${el.role}: ${el.content}`;
        } else if (el.level === "live") {
          announcement = `Alert: ${el.content}`;
        }

        setCurrentElement(i);
        setAnnouncements((prev) => [...prev, announcement]);
        i++;
      } else {
        clearInterval(interval);
        setReading(false);
      }
    }, 800);
  }, [reading, pageStructure]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Screen Reader Simulation {reading && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        <div className="flex gap-2 mb-2">
          {(["visual", "text", "both"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                mode === m ? "text-white shadow-lg" : "text-foreground/50 hover:text-foreground bg-foreground/5"
              }`}
              style={mode === m ? { backgroundColor: BRAND } : {}}>
              {m === "visual" ? "\u{1F5BC}\u{FE0F} Visual" : m === "text" ? "\u{1F521} Text" : "\u{1F50A} Both"}
            </button>
          ))}
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[250px]">
          <div className="space-y-1">
            {pageStructure.map((el, i) => {
              const isActive = i === currentElement;
              const isDone = announcements.length > i && !isActive;

              if (mode === "text" && el.level !== "landmark" && el.level !== 1 && el.level !== "text") return null;

              return (
                <div key={i}
                  className={`px-3 py-2 rounded-lg text-xs transition-all ${
                    isActive
                      ? "text-white font-bold"
                      : isDone ? "text-foreground/40" : "text-foreground/60"
                  }`}
                  style={{
                    backgroundColor: isActive ? BRAND : isDone ? "hsl(var(--foreground)/0.03)" : "transparent",
                    borderLeft: `3px solid ${
                      el.level === "landmark" ? "#10b981" :
                      el.level === 1 ? "#f59e0b" :
                      el.level === "interactive" ? "#3b82f6" :
                      el.level === "live" ? "#ef4444" :
                      "#6b7280"
                    }`,
                  }}>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-bold uppercase ${isActive ? "text-white/70" : "text-foreground/30"}`}>
                      {el.role}
                    </span>
                    {el.label && <span className="text-foreground/40">|</span>}
                    {el.label && <span className={`text-[10px] ${isActive ? "text-white/80" : "text-foreground/50"}`}>{el.label}</span>}
                  </div>
                  {(mode === "visual" || mode === "both") && el.content && (
                    <div className={`mt-0.5 text-[10px] ${isActive ? "text-white/70" : "text-foreground/40"}`}>
                      {el.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Controls</SectionLabel>
        <button onClick={startReading} disabled={reading}
          className="w-full px-5 py-3 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
          style={{ backgroundColor: BRAND }}>
          {reading ? "\u{23F3} Reading..." : "\u{25B6} Start Screen Reader"}
        </button>

        <SectionLabel>Announcements</SectionLabel>
        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-3 max-h-[300px] overflow-y-auto space-y-1">
          {announcements.length === 0 ? (
            <p className="text-[10px] text-foreground/30 italic">Click start to hear the screen reader output.</p>
          ) : (
            announcements.map((a, i) => (
              <div key={i} className={`px-2 py-1.5 rounded text-[10px] ${
                i === announcements.length - 1 && reading
                  ? "bg-sky-500/10 text-sky-500 font-bold"
                  : "text-foreground/60"
              }`}>
                <span className="text-foreground/20 mr-1">{i + 1}.</span>
                {a}
              </div>
            ))
          )}
        </div>

        <SectionLabel>Tips</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>{"\u{2714}"} Use semantic HTML for better screen reader support</p>
          <p>{"\u{2714}"} Provide descriptive alt text for images</p>
          <p>{"\u{2714}"}" Use ARIA landmarks to define page regions</p>
          <p>{"\u{2714}"} Test with real screen readers (NVDA, VoiceOver, JAWS)</p>
        </div>
      </div>
    </div>
  );
}

// ── Tab 5: ARIA Validator ──
function AriaTab() {
  const [ariaHtml, setAriaHtml] = useState(`<div role="button" tabindex="0" onclick="submit()">Submit</div>
<div role="alert" aria-live="polite">Loading...</div>
<div role="navigation" aria-label="Main">
  <a href="/">Home</a>
  <a href="/about">About</a>
</div>
<div role="textbox" contenteditable>Edit me</div>
<div aria-hidden="true">Hidden content</div>
<button aria-pressed="false">Toggle</button>`);
  const [ariaIssues, setAriaIssues] = useState<AuditIssue[]>([]);
  const [ariaValidated, setAriaValidated] = useState(false);

  const validateAria = useCallback(() => {
    const issues: AuditIssue[] = [];
    let id = 0;

    // Check for valid ARIA roles
    const validRoles = ["button", "link", "navigation", "main", "banner", "contentinfo", "alert", "dialog", "tablist", "tab", "tabpanel", "textbox", "img", "region", "list", "listitem", "presentation", "none", "search", "form", "complementary", "status", "timer", "progressbar", "slider", "switch", "tooltip"];
    const roleMatches = ariaHtml.match(/role=["']([^"']+)["']/gi) || [];
    roleMatches.forEach((r) => {
      const role = r.match(/["']([^"']+)["']/)?.[1];
      if (role && !validRoles.includes(role)) {
        issues.push({ id: `ar${id++}`, type: "warning", category: "ARIA", message: `Unknown ARIA role "${role}".`, wcagRef: "WCAG 4.1.2", fix: `Use a valid role: ${validRoles.slice(0, 5).join(", ")}...` });
      }
    });

    // Check for role=button without keyboard handler
    const buttonNoKey = ariaHtml.match(/role=["']button["'][^>]*(?!tabindex)/i);
    if (buttonNoKey) {
      issues.push({ id: `ar${id++}`, type: "error", category: "Keyboard", message: "Element with role='button' missing tabindex or keydown handler.", wcagRef: "WCAG 4.1.2", fix: 'Add tabindex="0" and handle Enter/Space keydown events.' });
    }

    // Check aria-live values
    const liveMatches = ariaHtml.match(/aria-live=["']([^"']+)["']/gi) || [];
    liveMatches.forEach((l) => {
      const val = l.match(/["']([^"']+)["']/)?.[1];
      if (val && !["off", "polite", "assertive"].includes(val)) {
        issues.push({ id: `ar${id++}`, type: "error", category: "ARIA", message: `Invalid aria-live value "${val}".`, wcagRef: "WCAG 4.1.2", fix: 'Use "polite", "assertive", or "off".' });
      }
    });

    // Check aria-pressed on non-button
    const pressedNonButton = ariaHtml.match(/aria-pressed=["']\w+["'][^>]*(?!role=["']button["'])/i);
    if (pressedNonButton) {
      issues.push({ id: `ar${id++}`, type: "info", category: "ARIA", message: "aria-pressed is typically used on toggle buttons (role='button').", wcagRef: "WCAG 4.1.2", fix: 'Add role="button" or use on a <button> element.' });
    }

    // Check for interactive children in aria-hidden
    const hiddenParent = ariaHtml.match(/aria-hidden=["']true["'][^>]*>([\s\S]*?)<\/div>/i);
    if (hiddenParent) {
      const hasInteractive = /<button|<a\s|<input|<select/i.test(hiddenParent[1]);
      if (hasInteractive) {
        issues.push({ id: `ar${id++}`, type: "warning", category: "ARIA", message: "Interactive content inside aria-hidden='true' is still focusable.", wcagRef: "WCAG 4.1.2", fix: "Remove focusable interactive elements from hidden containers." });
      }
    }

    setAriaIssues(issues);
    setAriaValidated(true);
  }, [ariaHtml]);

  const validCount = ariaIssues.filter((i) => i.type !== "error" && i.type !== "warning").length;
  const totalChecks = ariaIssues.length;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>ARIA Usage Checker</SectionLabel>

        <textarea
          className="w-full h-36 bg-foreground/5 border border-foreground/10 rounded-xl p-4 text-[10px] font-mono resize-none outline-none focus:border-sky-500/50 transition-colors"
          value={ariaHtml}
          onChange={(e) => { setAriaHtml(e.target.value); setAriaValidated(false); }}
          spellCheck={false}
        />

        <button onClick={validateAria}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all"
          style={{ backgroundColor: BRAND }}>
          {"\u{1F50D}"} Validate ARIA
        </button>

        {ariaValidated && (
          <div className="space-y-2">
            {ariaIssues.map((issue) => (
              <div key={issue.id} className={`px-3 py-2.5 rounded-xl border ${
                issue.type === "error" ? "border-red-500/20 bg-red-500/5" :
                issue.type === "warning" ? "border-amber-500/20 bg-amber-500/5" :
                "border-blue-500/20 bg-blue-500/5"
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase ${
                    issue.type === "error" ? "text-red-400" :
                    issue.type === "warning" ? "text-amber-400" : "text-blue-400"
                  }`}>{issue.type}</span>
                  <span className="text-[9px] text-foreground/30">{issue.category}</span>
                  <span className="ml-auto text-[8px] font-mono text-foreground/30">{issue.wcagRef}</span>
                </div>
                <p className="text-[11px] text-foreground/70 mb-1">{issue.message}</p>
                <p className="text-[9px] text-emerald-500/70"><strong>Fix:</strong> {issue.fix}</p>
              </div>
            ))}
            {ariaIssues.length === 0 && (
              <div className="text-center py-6">
                <p className="text-emerald-500 text-xs font-bold">{"\u{2705} All ARIA usage looks correct!"}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Summary</SectionLabel>
        {ariaValidated && (
          <div className="px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white"
                style={{ backgroundColor: totalChecks === 0 ? "#10b981" : "#f59e0b" }}>
                {totalChecks}
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/70">
                  {totalChecks === 0 ? "Perfect!" : `${ariaIssues.filter(i => i.type === 'error').length} errors`}
                </p>
                <p className="text-[10px] text-foreground/40">Issues found</p>
              </div>
            </div>
          </div>
        )}

        <SectionLabel>Valid ARIA Roles</SectionLabel>
        <div className="flex flex-wrap gap-1 text-[9px] font-mono text-foreground/50">
          {["button", "link", "navigation", "main", "banner", "alert", "dialog", "tab", "textbox", "img", "region", "search", "form", "complementary", "status"].map((r) => (
            <span key={r} className="px-1.5 py-0.5 rounded bg-foreground/5">{r}</span>
          ))}
        </div>

        <SectionLabel>Best Practices</SectionLabel>
        <div className="text-[10px] text-foreground/50 leading-relaxed space-y-1.5 px-1">
          <p>{"\u{2714}"} Use semantic HTML over ARIA when possible</p>
          <p>{"\u{2714}"} Don't change native semantics (e.g., <code>&lt;h1 role="button"&gt;</code>)</p>
          <p>{"\u{2714}"} Keep aria-hidden off focusable elements</p>
          <p>{"\u{2714}"} Use aria-label for elements without visible text</p>
          <p>{"\u{2714}"} Reference: ARIA Authoring Practices Guide (APG)</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export function AccessibilityPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("audit");

  const renderTab = () => {
    switch (activeTab) {
      case "audit": return <AuditTab />;
      case "contrast": return <ContrastTab />;
      case "keyboard": return <KeyboardTab />;
      case "reader": return <ReaderTab />;
      case "aria": return <AriaTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ isolation: "isolate" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
      />

      <div className="flex border-b border-foreground/10 shrink-0">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className="flex items-center gap-1.5 px-4 py-3 text-xs font-bold border-b-2 transition-all"
            style={tabStyle(activeTab === tab.id)}>
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6" style={{ minHeight: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0.6, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.4, y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full">
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
