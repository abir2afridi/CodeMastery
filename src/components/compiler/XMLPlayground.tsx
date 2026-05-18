import { useState, useRef, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { xml } from "@codemirror/lang-xml";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Code2, TreePine, RefreshCw, Download, FileJson,
  Search, CheckCircle, AlertCircle, Wand2
} from "lucide-react";

const DEFAULT_XML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <genre>Computer</genre>
    <price>44.95</price>
    <publish_date>2000-10-01</publish_date>
    <description>An in-depth look at creating applications with XML.</description>
  </book>
  <book id="bk102">
    <author>Ralls, Kim</author>
    <title>Midnight Rain</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-12-16</publish_date>
    <description>A former architect battles corporate zombies.</description>
  </book>
</catalog>`;

function formatXML(xml: string): string {
  const lines = xml.split("\n").map(l => l.trim()).filter(Boolean);
  const result: string[] = [];
  let indent = 0;
  for (const line of lines) {
    if (line.startsWith("</")) indent--;
    result.push("  ".repeat(Math.max(0, indent)) + line);
    if (line.match(/<[^/][^>]*[^/]?>$/) && !line.endsWith("/>")) indent++;
  }
  return result.join("\n");
}

function validateXML(xml: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const tagStack: string[] = [];
  const tagRegex = /<\/?([^\s>/]+)[^>]*\/?>/g;
  let match: RegExpExecArray | null;
  let lastIdx = 0;
  while ((match = tagRegex.exec(xml)) !== null) {
    const full = match[0];
    const tagName = match[1];
    if (full.startsWith("</")) {
      if (tagStack.length === 0) {
        errors.push(`Unexpected closing tag: </${tagName}>`);
      } else {
        const expected = tagStack.pop()!;
        if (expected !== tagName) {
          errors.push(`Mismatched tag: expected </${expected}>, found </${tagName}>`);
        }
      }
    } else if (!full.endsWith("/>") && !full.endsWith("?>")) {
      tagStack.push(tagName);
    }
    lastIdx = match.index + full.length;
  }
  if (tagStack.length > 0) {
    errors.push(`Unclosed tags: ${tagStack.map(t => `<${t}>`).join(", ")}`);
  }
  if (!xml.trim().startsWith("<")) {
    errors.push("XML must start with an element or declaration");
  }
  return { valid: errors.length === 0, errors };
}

function xmlToJson(xml: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const parseNode = (node: Node): unknown => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim() || "";
      return text || null;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      const obj: Record<string, unknown> = {};
      for (const attr of el.attributes) {
        obj[`@${attr.name}`] = attr.value;
      }
      const children: unknown[] = [];
      for (const child of el.childNodes) {
        const parsed = parseNode(child);
        if (parsed !== null) children.push(parsed);
      }
      if (children.length === 1 && typeof children[0] === "string") {
        obj["#text"] = children[0];
      } else if (children.length > 0) {
        obj[el.tagName] = children.length === 1 ? children[0] : children;
      }
      const keys = Object.keys(obj);
      if (keys.length === 0) return el.tagName;
      return obj;
    }
    return null;
  };
  const root = doc.documentElement;
  return JSON.stringify(root ? { [root.tagName]: parseNode(root) } : {}, null, 2);
}

export default function XMLPlayground() {
  const navigate = useNavigate();
  const [xmlInput, setXmlInput] = useState(DEFAULT_XML);
  const [tab, setTab] = useState<"editor" | "tree" | "json">("editor");
  const [treeCollapsed, setTreeCollapsed] = useState<Set<string>>(new Set());

  const validation = useMemo(() => validateXML(xmlInput), [xmlInput]);
  const formatted = useMemo(() => formatXML(xmlInput), [xmlInput]);
  const jsonOutput = useMemo(() => {
    try {
      return xmlToJson(xmlInput);
    } catch {
      return "{ /* Conversion failed: invalid XML */ }";
    }
  }, [xmlInput]);

  const parsedDoc = useMemo(() => {
    try {
      return new DOMParser().parseFromString(xmlInput, "text/xml");
    } catch {
      return null;
    }
  }, [xmlInput]);

  const toggleNode = (path: string) => {
    setTreeCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const renderTree = (node: Node, path = ""): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (!text) return null;
      return <span className="text-zinc-400">"{text}"</span>;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      const isCollapsed = treeCollapsed.has(path);
      const children = Array.from(el.childNodes).filter(n => n.nodeType !== Node.TEXT_NODE || n.textContent?.trim());
      return (
        <div className="ml-4 border-l border-zinc-700/50 pl-3 py-0.5" key={path}>
          <button onClick={() => toggleNode(path)} className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <span className="text-zinc-600 font-mono text-[10px]">{children.length > 0 ? (isCollapsed ? "▶" : "▼") : "•"}</span>
            <span className="text-blue-400 font-mono text-sm">&lt;{el.tagName}</span>
            {Array.from(el.attributes).map(attr => (
              <span key={attr.name} className="text-orange-400 font-mono text-xs">
                {attr.name}=<span className="text-green-400">"{attr.value}"</span>
              </span>
            ))}
            <span className="text-blue-400 font-mono text-sm">&gt;</span>
          </button>
          {!isCollapsed && children.length > 0 && (
            <div className="ml-4">
              {children.map((child, i) => renderTree(child, `${path}/${i}`))}
            </div>
          )}
          {!isCollapsed && (
            <div className="ml-4 text-blue-400 font-mono text-xs opacity-50">&lt;/{el.tagName}&gt;</div>
          )}
        </div>
      );
    }
    return null;
  };

  const handleDownload = (content: string, ext: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `playground.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30 shrink-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Code2 className="h-4 w-4 text-orange-500" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-500">XML_PLAYGROUND</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`flex items-center gap-1.5 px-2 py-1 text-[9px] font-black uppercase ${validation.valid ? "text-green-500" : "text-red-500"}`}>
            {validation.valid ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
            {validation.valid ? "VALID" : `${validation.errors.length} ERROR(S)`}
          </div>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => setXmlInput(formatted)}>
            <Wand2 className="h-3 w-3 mr-1" /> Format
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => handleDownload(xmlInput, "xml")}>
            <Download className="h-3 w-3 mr-1" /> .xml
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => setXmlInput(DEFAULT_XML)}>
            <RefreshCw className="h-3 w-3 mr-1" /> Reset
          </Button>
        </div>
      </header>

      <div className="flex border-b border-border bg-muted/20 shrink-0">
        {(["editor", "tree", "json"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border-r border-border transition-colors ${
              tab === t ? "bg-background text-primary" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {t === "editor" && <><Code2 className="h-3 w-3 inline mr-1.5" /> Editor</>}
            {t === "tree" && <><TreePine className="h-3 w-3 inline mr-1.5" /> Tree View</>}
            {t === "json" && <><FileJson className="h-3 w-3 inline mr-1.5" /> XML → JSON</>}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="overflow-hidden border-r border-border">
          <div style={{ height: "100%" }}>
            <CodeMirror
              value={xmlInput}
              height="100%"
              theme={oneDark}
              extensions={[xml()]}
              onChange={setXmlInput}
              basicSetup={{ lineNumbers: true, foldGutter: true, highlightActiveLine: true }}
              className="text-[13px] font-mono"
            />
          </div>
        </div>

        <div className="overflow-y-auto p-6 bg-surface/20">
          {tab === "editor" && (
            <div className="space-y-4">
              {!validation.valid && (
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-sm">
                  <h3 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">Validation Errors</h3>
                  <ul className="space-y-1">
                    {validation.errors.map((err, i) => (
                      <li key={i} className="text-red-400 text-sm font-mono">• {err}</li>
                    ))}
                  </ul>
                </div>
              )}
              {validation.valid && (
                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-sm">
                  <h3 className="text-[10px] font-black text-green-500 uppercase tracking-widest">Document Valid ✓</h3>
                  <p className="text-green-400 text-sm mt-1">XML is well-formed and valid.</p>
                </div>
              )}
              <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-sm">
                <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">XML Quick Reference</h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  <span><span className="text-blue-400">&lt;element&gt;</span> Open tag</span>
                  <span><span className="text-blue-400">&lt;/element&gt;</span> Close tag</span>
                  <span><span className="text-blue-400">&lt;void/&gt;</span> Self-closing</span>
                  <span><span className="text-green-400">attr="val"</span> Attribute</span>
                  <span><span className="text-zinc-500">&lt;!-- --&gt;</span> Comment</span>
                  <span><span className="text-purple-400">&lt;![CDATA[]]&gt;</span> CDATA section</span>
                </div>
              </div>
            </div>
          )}
          {tab === "tree" && (
            <div className="font-mono text-sm">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4">XML Tree</h3>
              {parsedDoc ? renderTree(parsedDoc.documentElement) : <p className="text-red-400">Cannot parse XML</p>}
            </div>
          )}
          {tab === "json" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">JSON Output</h3>
                <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => handleDownload(jsonOutput, "json")}>
                  <Download className="h-3 w-3 mr-1" /> .json
                </Button>
              </div>
              <pre className="text-xs font-mono text-zinc-300 bg-black/30 p-4 rounded-sm overflow-x-auto whitespace-pre-wrap">
                {jsonOutput}
              </pre>
            </div>
          )}
        </div>
      </div>

      {!validation.valid && (
        <div className="bg-red-500/5 border-t border-red-500/30 px-4 py-2 shrink-0">
          <p className="text-red-400 text-xs font-mono">
            {validation.errors.map((e, i) => <span key={i}>{e} </span>)}
          </p>
        </div>
      )}
    </div>
  );
}
