import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "visualizer" | "converter" | "emoji" | "corruption" | "i18n";

const BRAND = "#8B5CF6";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "visualizer", label: "Live Viz", icon: "\u{1F50D}" },
  { id: "converter", label: "Converter", icon: "\u{1F504}" },
  { id: "emoji", label: "Emoji Analyzer", icon: "\u{1F600}" },
  { id: "corruption", label: "Mojibake", icon: "\u{1F4A5}" },
  { id: "i18n", label: "i18n Lab", icon: "\u{1F310}" },
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

// ── Encoding Utilities ──
function toUTF8Bytes(text: string): number[] {
  const encoder = new TextEncoder();
  return Array.from(encoder.encode(text));
}

function toCodePoints(text: string): number[] {
  return Array.from(text).map((ch) => ch.codePointAt(0)!);
}

function toHex(bytes: number[]): string {
  return bytes.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
}

function toBinary(bytes: number[]): string {
  return bytes.map((b) => b.toString(2).padStart(8, "0")).join(" ");
}

function toBase64(text: string): string {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    return btoa(text);
  }
}

function toUTF16(text: string): string {
  const bytes: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    bytes.push((code >> 8) & 0xFF, code & 0xFF);
  }
  return bytes.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
}

function toUTF32(text: string): string {
  const bytes: number[] = [];
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    bytes.push((cp >> 24) & 0xFF, (cp >> 16) & 0xFF, (cp >> 8) & 0xFF, cp & 0xFF);
  }
  return bytes.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
}

function toURLEncoding(text: string): string {
  return encodeURIComponent(text);
}

function toHTMLEntities(text: string): string {
  return Array.from(text).map((ch) => {
    const cp = ch.codePointAt(0)!;
    if (cp > 127) return `&#${cp};`;
    return ch;
  }).join("");
}

// ── Live Encoding Visualizer Tab ──
function LiveVisualizerTab() {
  const [text, setText] = useState("Hello, 世界! 🌍");
  const bytes = useMemo(() => toUTF8Bytes(text), [text]);
  const codePoints = useMemo(() => toCodePoints(text), [text]);

  return (
    <div className="space-y-4">
      <SectionLabel>Text Input</SectionLabel>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-20 bg-black text-violet-300 p-3 text-sm font-mono border border-foreground/10 resize-none"
        spellCheck={false}
        placeholder="Type any text to see its encoding..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">UTF-8 Bytes ({bytes.length} bytes)</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {bytes.map((b, i) => (
              <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono rounded" style={{ backgroundColor: `${BRAND}22`, color: BRAND }}>
                {b.toString(16).toUpperCase().padStart(2, "0")}
              </span>
            ))}
            {bytes.length === 0 && <span className="text-[10px] text-foreground/20 font-mono">No bytes</span>}
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">Binary</span>
          </div>
          <div className="font-mono text-[9px] text-cyan-400/80 break-all leading-relaxed">
            {toBinary(bytes)}
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">Unicode Code Points</span>
          </div>
          <div className="space-y-1">
            {Array.from(text).map((ch, i) => {
              const cp = codePoints[i];
              const hex = cp.toString(16).toUpperCase();
              return (
                <div key={i} className="flex items-center gap-3 text-[10px] font-mono">
                  <span className="text-foreground/70 w-5 text-center">{ch}</span>
                  <span className="text-green-400">U+{hex.padStart(4, "0")}</span>
                  <span className="text-foreground/30">({cp})</span>
                  {cp > 0xFFFF && <span className="text-yellow-500 text-[8px] font-black tracking-wider uppercase">Surrogate</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">Byte-by-Byte Detail</span>
          </div>
          <div className="space-y-1">
            {bytes.map((b, i) => {
              const isContinuation = (b & 0xC0) === 0x80;
              const isLead2 = (b & 0xE0) === 0xC0;
              const isLead3 = (b & 0xF0) === 0xE0;
              const isLead4 = (b & 0xF8) === 0xF0;
              const role = isContinuation ? "Continuation" : isLead4 ? "4B Lead" : isLead3 ? "3B Lead" : isLead2 ? "2B Lead" : "ASCII";
              return (
                <div key={i} className="flex items-center gap-2 text-[10px] font-mono border-b border-foreground/5 py-1 last:border-0">
                  <span className="text-foreground/30 w-8">#{i}</span>
                  <span className="text-foreground/70 w-8">{b.toString(16).toUpperCase().padStart(2, "0")}</span>
                  <span style={{ color: isContinuation ? "#F59E0B" : isLead4 ? "#EF4444" : isLead3 ? "#3B82F6" : isLead2 ? "#22C55E" : "#888" }} className="font-black tracking-wider text-[8px]">{role}</span>
                  <span className="text-foreground/30 text-[8px]">0x{b.toString(2).padStart(8, "0")}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-3 border border-foreground/5 rounded text-[10px] leading-relaxed text-foreground/50">
        <span className="font-black text-foreground/80">Key: </span>
        <span className="text-[#888]">ASCII (1B)</span>
        <span className="mx-1">·</span>
        <span className="text-green-500">2B Lead</span>
        <span className="mx-1">·</span>
        <span className="text-blue-500">3B Lead</span>
        <span className="mx-1">·</span>
        <span className="text-red-500">4B Lead</span>
        <span className="mx-1">·</span>
        <span className="text-yellow-500">Continuation</span>
      </div>
    </div>
  );
}

// ── Encoding Converter Tab ──
function ConverterTab() {
  const [input, setInput] = useState("Hello, 世界!");
  const [fromEnc, setFromEnc] = useState("utf8");

  const results = useMemo(() => {
    if (!input) return null;
    const bytes = toUTF8Bytes(input);
    return {
      ascii: bytes.every((b) => b < 128) ? input : "[Contains non-ASCII]",
      utf8: toHex(bytes),
      utf16: toUTF16(input),
      utf32: toUTF32(input),
      base64: toBase64(input),
      url: toURLEncoding(input),
      html: toHTMLEntities(input),
      cp: Array.from(input).map((ch) => `U+${ch.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}`).join(" "),
    };
  }, [input]);

  const examples = [
    "Hello, 世界!",
    "😀🎉🌍",
    "Café & résumé",
    "{"  + '"name":"José"' + "}",
    "日本語テスト",
    "مرحبا بالعالم",
  ];

  return (
    <div className="space-y-4">
      <SectionLabel>Input Text</SectionLabel>
      <div className="flex gap-2 mb-2">
        {examples.map((ex, i) => (
          <button key={i} onClick={() => setInput(ex)} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
            {ex.length > 12 ? ex.slice(0, 10) + "..." : ex}
          </button>
        ))}
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-16 bg-black text-violet-300 p-3 text-sm font-mono border border-foreground/10 resize-none"
        spellCheck={false}
      />

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { label: "Code Points", value: results.cp, color: "#22C55E" },
            { label: "ASCII", value: results.ascii, color: "#888" },
            { label: "UTF-8 (Hex)", value: results.utf8, color: BRAND },
            { label: "UTF-16 (Hex)", value: results.utf16, color: "#3B82F6" },
            { label: "UTF-32 (Hex)", value: results.utf32, color: "#EF4444" },
            { label: "Base64", value: results.base64, color: "#F59E0B" },
            { label: "URL Encoded", value: results.url, color: "#06B6D4" },
            { label: "HTML Entities", value: results.html, color: "#EC4899" },
          ].map((enc) => (
            <div key={enc.label} className="bg-black border border-foreground/10 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: enc.color }} />
                <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">{enc.label}</span>
              </div>
              <div className="font-mono text-[10px]" style={{ color: enc.color }}>
                <span className="break-all">{enc.value}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Emoji Analyzer Tab ──
function EmojiAnalyzerTab() {
  const [input, setInput] = useState("😀🎉👨‍👩‍👧‍👦👍🏻🇯🇵");

  const analysis = useMemo(() => {
    if (!input) return [];
    return Array.from(input).map((ch) => {
      const cp = ch.codePointAt(0)!;
      const bytes = toUTF8Bytes(ch);
      const isEmoji = cp >= 0x1F000;
      const isSurrogate = cp >= 0xD800 && cp <= 0xDFFF;
      const hexBytes = bytes.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
      return { char: ch, cp, hex: `U+${cp.toString(16).toUpperCase().padStart(4, "0")}`, bytes, hexBytes, isEmoji, isSurrogate };
    });
  }, [input]);

  // Detect ZWJ sequences
  const zwjDetected = input.includes("\u200D");

  return (
    <div className="space-y-4">
      <SectionLabel>Emoji / Character Input</SectionLabel>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-black text-violet-300 p-3 text-base font-mono border border-foreground/10"
        placeholder="Type emojis to analyze..."
      />
      <div className="flex gap-1.5 flex-wrap">
        {["😀🎉🌍", "👨‍👩‍👧‍👦", "👍🏻👩🏿", "🇯🇵🇺🇸", "🧑‍💻", "❤️‍🔥"].map((ex, i) => (
          <button key={i} onClick={() => setInput(ex)} className="px-2 py-1 text-sm border" style={{ borderColor: `${BRAND}33` }}>
            {ex}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">Characters</span>
            <span className="text-[8px] text-foreground/30">({analysis.length} graphemes)</span>
          </div>
          <div className="space-y-2">
            {analysis.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded border border-foreground/5">
                <span className="text-2xl w-8 text-center">{item.char}</span>
                <div className="flex-1 font-mono text-[10px] space-y-0.5">
                  <div className="flex gap-2">
                    <span className="text-green-400">{item.hex}</span>
                    <span className="text-foreground/30">({item.cp})</span>
                  </div>
                  <div className="text-foreground/50">
                    <span className="text-violet-400">{item.hexBytes}</span>
                    <span className="mx-1">·</span>
                    <span>{item.bytes.length} bytes</span>
                  </div>
                  {item.isSurrogate && <span className="text-yellow-500 text-[8px] font-black tracking-wider">SURROGATE PAIR</span>}
                </div>
                <div className="text-[8px] text-foreground/30 font-mono">
                  {item.bytes.map((b) => b.toString(2).padStart(8, "0")).join(" ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-black border border-foreground/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">Structure Info</span>
            </div>
            <div className="space-y-2 text-[10px] font-mono">
              <div className="flex justify-between items-center">
                <span className="text-foreground/50">Total characters</span>
                <span className="text-foreground/80">{input.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50">Grapheme clusters</span>
                <span className="text-foreground/80">{analysis.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50">Total bytes (UTF-8)</span>
                <span className="text-foreground/80">{toUTF8Bytes(input).length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50">ZWJ sequences</span>
                <span className="text-foreground/80">{zwjDetected ? "Detected" : "None"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50">Has skin tone modifiers</span>
                <span className="text-foreground/80">{input.match(/[\u{1F3FB}-\u{1F3FF}]/u) ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/50">Has flags</span>
                <span className="text-foreground/80">{input.match(/[\u{1F1E6}-\u{1F1FF}]/u) ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>

          {zwjDetected && (
            <div className="p-3 border rounded-lg text-[10px]" style={{ borderColor: `${BRAND}44`, backgroundColor: `${BRAND}11` }}>
              <span className="font-black text-violet-400 tracking-wider uppercase text-[9px] block mb-1">ZWJ Sequence Detected</span>
              <span className="text-foreground/70">
                Zero-Width Joiner (U+200D) combines multiple emojis into a single rendered glyph.
                Each part is a separate Unicode character joined together.
              </span>
            </div>
          )}

          <div className="p-3 border border-foreground/5 rounded text-[10px] text-foreground/50">
            <span className="font-black text-foreground/80">Tip: </span>
            Emojis often use 4 bytes in UTF-8. Flags use regional indicator symbols (2 letters = 8 bytes total).
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Corruption Debugger Tab ──
function CorruptionTab() {
  const [input, setInput] = useState("Ã©");
  const [corruptionType, setCorruptionType] = useState<string | null>(null);

  const analyze = useCallback(() => {
    // Simple mojibake detection
    const bytes = toUTF8Bytes(input);
    let result: string | null = null;

    if (input.match(/[ÃÂÀÁÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/)) {
      result = "Likely UTF-8 bytes interpreted as Latin-1 (ISO 8859-1) or Windows-1252. The raw UTF-8 bytes are being displayed as if they were individual characters.";
    } else if (input.match(/[ððŸ]/)) {
      result = "Likely double-encoded UTF-8. The text was UTF-8 encoded twice — the bytes of UTF-8 were themselves treated as characters and re-encoded.";
    } else if (input.includes("ï»¿")) {
      result = "BOM (Byte Order Mark) visible as text. The UTF-8 BOM (EF BB BF) is being displayed as ISO-8859-1 characters instead of being parsed as a BOM.";
    } else if (input.match(/[æøå]/)) {
      result = "Possible encoding mismatch — text contains Scandinavian characters that may be encoded in Latin-1 but interpreted as UTF-8, or vice versa.";
    } else {
      result = "No common mojibake pattern detected. The text appears to be correctly encoded for its current interpretation.";
    }
    setCorruptionType(result);
  }, [input]);

  const corruptions = [
    { label: "UTF-8 as Latin-1", text: "Ã©", desc: "é → Ã©" },
    { label: "Double UTF-8", text: "ð\u009F\u0098\u0080", desc: "😀 → double-encoded" },
    { label: "BOM visible", text: "ï»¿Hello", desc: "BOM as text" },
    { label: "URL encoding", text: "%C3%A9", desc: "URL-encoded é" },
    { label: "HTML entity", text: "&eacute;", desc: "HTML entity é" },
  ];

  return (
    <div className="space-y-4">
      <SectionLabel>Corrupted / Suspicious Text</SectionLabel>
      <div className="flex gap-1.5 flex-wrap">
        {corruptions.map((c) => (
          <button key={c.label} onClick={() => { setInput(c.text); setCorruptionType(null); }} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
            {c.label}
          </button>
        ))}
      </div>
      <textarea
        value={input}
        onChange={(e) => { setInput(e.target.value); setCorruptionType(null); }}
        className="w-full h-16 bg-black text-red-300 p-3 text-sm font-mono border border-foreground/10 resize-none"
        spellCheck={false}
        placeholder="Paste corrupted text or suspicious encoding..."
      />
      <button onClick={analyze} className="px-5 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>
        Analyze Corruption
      </button>

      {corruptionType && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-4 border rounded-lg" style={{ borderColor: `${BRAND}44`, backgroundColor: `${BRAND}11` }}>
          <div className="text-[9px] font-black tracking-widest text-violet-400 uppercase mb-2">Diagnosis</div>
          <p className="text-[10px] text-foreground/80 leading-relaxed">{corruptionType}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-foreground/10 rounded-lg">
        <div>
          <SectionLabel>Your Input (Hex)</SectionLabel>
          <pre className="font-mono text-[10px] text-foreground/50 bg-black p-2 rounded">{toHex(toUTF8Bytes(input)) || "(empty)"}</pre>
        </div>
        <div>
          <SectionLabel>UTF-8 Decoded</SectionLabel>
          <pre className="font-mono text-[10px] text-green-400 bg-black p-2 rounded">{input || "(empty)"}</pre>
        </div>
      </div>

      <div className="p-3 border border-foreground/5 rounded text-[10px] leading-relaxed">
        <span className="font-black text-foreground/80 text-[9px] tracking-widest uppercase block mb-1">Common Encoding Fixes</span>
        <ul className="text-foreground/50 space-y-1 list-disc list-inside">
          <li>UTF-8 bytes shown as Latin-1 → Re-interpret as UTF-8</li>
          <li>Double encoding → Decode UTF-8 twice</li>
          <li>Wrong charset in DB → Convert column/collation to UTF-8</li>
          <li>Mojibake in files → Open with correct encoding in editor</li>
          <li>BOM issues → Strip BOM (EF BB BF) or configure parser</li>
        </ul>
      </div>
    </div>
  );
}

// ── Internationalization Lab Tab ──
function I18nLabTab() {
  const [text, setText] = useState("Hello مرحبا 你好 नमस्ते");

  const scripts = [
    { label: "Latin", text: "The quick brown fox jumps over the lazy dog." },
    { label: "Arabic (RTL)", text: "مرحبا بالعالم! هذه جملة عربية." },
    { label: "CJK", text: "你好世界！日本語テスト中国語。" },
    { label: "Devanagari", text: "नमस्ते दुनिया! यह हिन्दी पाठ है।" },
    { label: "Korean", text: "안녕하세요 세계! 이것은 한국어입니다." },
    { label: "Thai", text: "สวัสดีชาวโลก! นี่คือข้อความภาษาไทย" },
    { label: "Mixed", text: "Hello 你好 مرحبا नमस्ते 한국어 العربية" },
  ];

  return (
    <div className="space-y-4">
      <SectionLabel>Multilingual Text</SectionLabel>
      <div className="flex gap-1.5 flex-wrap">
        {scripts.map((s) => (
          <button key={s.label} onClick={() => setText(s.text)} className="px-2 py-1 text-[8px] font-black tracking-wider uppercase border" style={{ borderColor: `${BRAND}33`, color: BRAND }}>
            {s.label}
          </button>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-20 bg-black text-violet-300 p-3 text-sm font-mono border border-foreground/10 resize-none"
        spellCheck={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="text-[9px] font-black tracking-widest text-green-400 uppercase mb-2">Script Detection</div>
          <div className="space-y-1 text-[10px] font-mono">
            {(() => {
              const detected: { label: string; count: number }[] = [];
              for (const ch of text) {
                const cp = ch.codePointAt(0)!;
                let label = "Unknown";
                if (cp < 0x80) label = "ASCII/Latin";
                else if (cp >= 0x600 && cp <= 0x6FF) label = "Arabic";
                else if (cp >= 0x4E00 && cp <= 0x9FFF) label = "CJK";
                else if (cp >= 0x900 && cp <= 0x97F) label = "Devanagari";
                else if (cp >= 0xAC00 && cp <= 0xD7AF) label = "Korean";
                else if (cp >= 0xE00 && cp <= 0xE7F) label = "Thai";
                else if (cp >= 0x80 && cp <= 0x7FF) label = "Extended Latin";
                else label = "Other Unicode";
                const existing = detected.find((d) => d.label === label);
                if (existing) existing.count++;
                else detected.push({ label, count: 1 });
              }
              return detected.map((d) => (
                <div key={d.label} className="flex justify-between">
                  <span className="text-foreground/50">{d.label}</span>
                  <span className="text-green-400">{d.count}</span>
                </div>
              ));
            })()}
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="text-[9px] font-black tracking-widest text-blue-400 uppercase mb-2">Byte Statistics</div>
          <div className="space-y-1 text-[10px] font-mono">
            {(() => {
              const bytes = toUTF8Bytes(text);
              return (
                <>
                  <div className="flex justify-between"><span className="text-foreground/50">Characters</span><span className="text-blue-400">{text.length}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/50">UTF-8 Bytes</span><span className="text-blue-400">{bytes.length}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/50">Bytes/Char</span><span className="text-blue-400">{(bytes.length / Math.max(1, text.length)).toFixed(1)}</span></div>
                  <div className="flex justify-between"><span className="text-foreground/50">RTL chars</span><span className="text-blue-400">{[...text].filter((c) => { const cp = c.codePointAt(0)!; return cp >= 0x590 && cp <= 0x8FF || cp >= 0xFB1D && cp <= 0xFDFF || cp >= 0xFE70 && cp <= 0xFEFF; }).length}</span></div>
                </>
              );
            })()}
          </div>
        </div>

        <div className="bg-black border border-foreground/10 p-4 rounded-lg">
          <div className="text-[9px] font-black tracking-widest text-yellow-400 uppercase mb-2">Font Fallback Info</div>
          <div className="text-[10px] font-mono text-foreground/50 leading-relaxed">
            <p>Modern browsers use font fallback chains to render multilingual text.</p>
            <p className="mt-2">Missing glyphs trigger fallback to next font in the CSS <code className="text-yellow-400">font-family</code> stack.</p>
            <p className="mt-2">System fonts like Noto, Arial, and Segoe UI Emoji provide broad Unicode coverage.</p>
          </div>
        </div>
      </div>

      <div className="p-4 border border-foreground/10 rounded-lg">
        <div className="text-[9px] font-black tracking-widest text-foreground/40 uppercase mb-2">Rendering Preview</div>
        <div className="text-lg leading-relaxed" style={{ fontFamily: "'Segoe UI', 'Noto Sans', 'Arial Unicode MS', sans-serif" }}>
          {text || "(empty)"}
        </div>
      </div>
    </div>
  );
}

export default function EncodingLab() {
  const [activeTab, setActiveTab] = useState<Tab>("visualizer");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="border-b border-foreground/10 bg-foreground/[0.02] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{"\uD83C\uDF10"}</span>
          <div>
            <h1 className="text-lg font-black tracking-tight uppercase">Encoding Lab</h1>
            <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Unicode · UTF-8 · Emojis · Character Encoding</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Unicode 15.1 (Simulated)</span>
        </div>
      </div>

      <div className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-3 text-xs font-black tracking-widest uppercase border-b-2 transition-all whitespace-nowrap flex items-center gap-2"
              style={tabStyle(activeTab === tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === "visualizer" && <LiveVisualizerTab />}
            {activeTab === "converter" && <ConverterTab />}
            {activeTab === "emoji" && <EmojiAnalyzerTab />}
            {activeTab === "corruption" && <CorruptionTab />}
            {activeTab === "i18n" && <I18nLabTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
