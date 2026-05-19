import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  Check,
  ArrowRight,
  Code2,
  Hash,
  Binary,
  Globe,
  Smile,
  Table2,
  TextCursorInput,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BRAND = '#FFC107';

const CATEGORIES = [
  { name: 'Smileys', emojis: ['😀', '😂', '🥲', '😍', '🤩', '😎', '🥳', '🤔', '🤗', '😴', '🥺', '😱', '🤯', '🥶', '🤠', '👻'] },
  { name: 'Gestures', emojis: ['👍', '👎', '👏', '🙌', '🤝', '✌️', '🤞', '🖖', '🤙', '👋', '🫡', '🫶'] },
  { name: 'Animals', emojis: ['🐶', '🐱', '🐼', '🦊', '🐸', '🐨', '🦁', '🐯', '🐮', '🦄', '🐧', '🐝', '🦋', '🐙'] },
  { name: 'Food', emojis: ['🍕', '🍔', '🌮', '🍣', '🍜', '🍩', '🍪', '🧁', '🍫', '🍉', '🥑', '🌶️', '🥩', '🧀'] },
  { name: 'Travel', emojis: ['🚀', '✈️', '🚗', '🚲', '🚢', '🚁', '🛸', '🚃', '🏎️', '🛴', '🏔️', '🏖️', '🌋', '🗽'] },
  { name: 'Symbols', emojis: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '💔', '💯', '🔥', '⭐', '🌈', '☮️'] },
  { name: 'Flags', emojis: ['🇺🇸', '🇬🇧', '🇫🇷', '🇩🇪', '🇯🇵', '🇨🇳', '🇧🇷', '🇮🇳', '🇦🇺', '🇨🇦', '🇪🇸', '🇮🇹', '🇰🇷', '🇷🇺'] },
  { name: 'Objects', emojis: ['💡', '📱', '💻', '⌚', '📷', '🎮', '🔧', '🔬', '📚', '✏️', '🎵', '🎨', '🏆', '💎'] },
];

const DEFAULT_TEXT = 'Hello 🌍! Let\'s learn Unicode 😀🚀';

function toUTF8Bytes(cp: number): number[] {
  if (cp < 0x80) return [cp];
  if (cp < 0x800) return [0xC0 | (cp >> 6), 0x80 | (cp & 0x3F)];
  if (cp < 0x10000) return [0xE0 | (cp >> 12), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F)];
  return [0xF0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3F), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F)];
}

function analyzeText(text: string) {
  const chars: { char: string; cp: number; utf8: number[]; utf16: number[]; isEmoji: boolean; plane: string }[] = [];
  const iter = text[Symbol.iterator]();
  let result = iter.next();
  while (!result.done) {
    const c = result.value;
    const cp = c.codePointAt(0)!;
    const utf8 = toUTF8Bytes(cp);
    const hi = Math.floor((cp - 0x10000) / 0x400) + 0xD800;
    const lo = ((cp - 0x10000) % 0x400) + 0xDC00;
    const utf16 = cp > 0xFFFF ? [hi, lo] : [cp];
    const isEmoji = /\p{Extended_Pictographic}/u.test(c);
    const planeNum = Math.floor(cp / 0x10000);
    const plane = planeNum === 0 ? 'BMP' : planeNum === 1 ? 'SMP' : `Plane ${planeNum}`;
    chars.push({ char: c, cp, utf8, utf16, isEmoji, plane });
    result = iter.next();
  }
  return chars;
}

export function EmojiPlayground() {
  const navigate = useNavigate();
  const [text, setText] = useState(DEFAULT_TEXT);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const analysis = useMemo(() => analyzeText(text), [text]);

  const handleCopy = useCallback(async (value: string, index: number) => {
    await navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }, []);

  const handleCopyAll = useCallback(async () => {
    const rows = analysis.map(c =>
      `${c.char}\tU+${c.cp.toString(16).toUpperCase().padStart(4, '0')}\tUTF-8: ${c.utf8.map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ')}\t${c.isEmoji ? 'Emoji' : 'Text'}\t${c.plane}`
    ).join('\n');
    await navigator.clipboard.writeText(rows);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1500);
  }, [analysis]);

  const emojiCount = analysis.filter(c => c.isEmoji).length;

  const toolbarClass = (active = false) =>
    `h-7 px-2 text-[10px] font-black tracking-wider uppercase rounded transition-all flex items-center gap-1.5 shrink-0 ${
      active
        ? 'bg-amber-500/20 text-amber-500 shadow-sm shadow-amber-500/10'
        : 'text-foreground/50 hover:text-foreground hover:bg-foreground/5'
    }`;

  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <header className="h-11 border-b border-border flex items-center justify-between px-3 bg-muted/30 shrink-0 select-none">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={() => navigate(-1)}
            className="h-7 w-7 p-0 hover:bg-foreground/5 rounded flex items-center justify-center shrink-0"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
          </button>
          <div className="w-px h-3.5 bg-border mx-0.5" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: BRAND }}>
            Emoji & Unicode Playground
          </span>
          <span className="text-[8px] text-foreground/25 font-mono tracking-tight">v1.0</span>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left: Input + Emoji Gallery */}
        <div className="flex flex-col w-1/2 border-r border-border overflow-hidden">
          {/* Input area */}
          <div className="p-4 border-b border-border">
            <label className="text-[9px] font-black tracking-[0.2em] text-foreground/40 uppercase mb-2 block">
              <TextCursorInput className="w-3 h-3 inline mr-1.5" />
              Input Text
            </label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              className="w-full h-24 bg-muted/30 border border-border text-foreground text-sm p-3 font-mono resize-none focus:outline-none focus:border-amber-500/50 transition-colors"
              placeholder="Type or paste text here..."
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-foreground/40 font-mono">
                {analysis.length} chars · {emojiCount} emoji · {text.length} code units
              </span>
              <button onClick={handleCopyAll} className={toolbarClass(copiedAll)}>
                {copiedAll ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copiedAll ? 'Copied' : 'Copy CSV'}
              </button>
            </div>
          </div>

          {/* Emoji Gallery */}
          <div className="flex-1 overflow-y-auto p-4">
            <label className="text-[9px] font-black tracking-[0.2em] text-foreground/40 uppercase mb-3 block">
              <Smile className="w-3 h-3 inline mr-1.5" />
              Emoji Gallery
            </label>
            <div className="space-y-3">
              {CATEGORIES.map(cat => (
                <div key={cat.name}>
                  <div className="text-[10px] font-bold text-foreground/60 uppercase tracking-wider mb-1.5">{cat.name}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.emojis.map((emoji, i) => (
                      <button
                        key={i}
                        onClick={() => setText(prev => prev + emoji)}
                        className="w-9 h-9 flex items-center justify-center text-xl hover:bg-amber-500/10 rounded transition-colors cursor-pointer border border-transparent hover:border-amber-500/30"
                        title={`Click to add ${emoji}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Analysis */}
        <div className="flex flex-col w-1/2 overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/20">
            <label className="text-[9px] font-black tracking-[0.2em] text-foreground/40 uppercase mb-2 block">
              <Table2 className="w-3 h-3 inline mr-1.5" />
              Unicode Analysis
            </label>
            <div className="flex gap-2 text-[9px] text-foreground/30 font-mono">
              <span className="flex items-center gap-1"><Hash className="w-2.5 h-2.5" />Code Point</span>
              <span className="flex items-center gap-1"><Binary className="w-2.5 h-2.5" />UTF-8</span>
              <span className="flex items-center gap-1"><Code2 className="w-2.5 h-2.5" />UTF-16</span>
              <span className="flex items-center gap-1"><Globe className="w-2.5 h-2.5" />Plane</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {analysis.length === 0 ? (
              <div className="p-8 text-center text-foreground/20 text-sm font-mono">No characters to analyze</div>
            ) : (
              <AnimatePresence>
                {analysis.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: i * 0.02 }}
                    className="flex items-center gap-3 px-4 py-2 border-b border-border/40 hover:bg-muted/20 transition-colors group"
                  >
                    <span className="w-8 text-center text-2xl shrink-0">{c.char}</span>
                    <div className="flex-1 min-w-0 grid grid-cols-[1fr_1.5fr_1.5fr_0.8fr] gap-3 text-[11px] font-mono">
                      <div className="text-amber-500/80 font-bold">
                        U+{c.cp.toString(16).toUpperCase().padStart(4, '0')}
                      </div>
                      <div className="text-foreground/60 truncate">
                        {c.utf8.map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ')}
                      </div>
                      <div className="text-foreground/40 truncate">
                        {c.utf16.map(w => w.toString(16).toUpperCase().padStart(4, '0')).join(' ')}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[8px] px-1 py-0.5 rounded font-bold ${c.isEmoji ? 'bg-amber-500/20 text-amber-500' : 'bg-foreground/10 text-foreground/40'}`}>
                          {c.isEmoji ? '😀' : 'T'}
                        </span>
                        <span className="text-[8px] text-foreground/30">{c.plane}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(`U+${c.cp.toString(16).toUpperCase().padStart(4, '0')}`, i)}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 flex items-center justify-center rounded hover:bg-amber-500/10 ${copiedIndex === i ? 'opacity-100' : ''}`}
                    >
                      {copiedIndex === i ? <Check className="w-3 h-3 text-amber-500" /> : <Copy className="w-3 h-3 text-foreground/40" />}
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

      <div className="h-6 border-t border-border bg-muted/20 flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-3 text-[8px] text-foreground/20 font-mono">
          <span>Emoji & Unicode Playground v1.0</span>
          <span className="w-px h-2.5 bg-border" />
          <span>Click emoji to insert · Hover row to copy code point</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-foreground/20 font-mono">
          <span>UTF-8 · UTF-16 · Code Points</span>
        </div>
      </div>
    </div>
  );
}
