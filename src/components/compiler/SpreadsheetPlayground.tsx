import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Table,
  Sigma,
  ChartBar,
  Code2,
  LayoutDashboard,
  Plus,
  Trash2,
  Copy,
  Download,
  Upload,
} from "lucide-react";

const COL_COUNT = 10;
const ROW_COUNT = 20;
const COL_LETTERS = Array.from({ length: COL_COUNT }, (_, i) =>
  String.fromCharCode(65 + i)
);

function colLetter(index: number): string {
  return COL_LETTERS[index];
}

function colIndex(letter: string): number {
  return COL_LETTERS.indexOf(letter.toUpperCase());
}

function cellId(col: number, row: number): string {
  return `${colLetter(col)}${row + 1}`;
}

function parseCellRef(ref: string): { col: number; row: number } | null {
  const m = ref.match(/^([A-Z])(\d+)$/i);
  if (!m) return null;
  const c = colIndex(m[1]);
  const r = parseInt(m[2], 10) - 1;
  if (c < 0 || r < 0) return null;
  return { col: c, row: r };
}

function parseRange(range: string): string[] | null {
  const m = range.match(/^([A-Z]\d+):([A-Z]\d+)$/i);
  if (!m) return null;
  const start = parseCellRef(m[1]);
  const end = parseCellRef(m[2]);
  if (!start || !end) return null;
  const cells: string[] = [];
  for (let r = start.row; r <= end.row; r++) {
    for (let c = start.col; c <= end.col; c++) {
      cells.push(cellId(c, r));
    }
  }
  return cells;
}

function resolveCellValue(
  ref: string,
  cells: Record<string, string>,
  visited: Set<string>
): string {
  if (visited.has(ref)) return "#REF!";
  const raw = cells[ref];
  if (raw === undefined || raw === "") return "";
  if (raw.startsWith("=")) {
    visited.add(ref);
    return evaluateFormula(raw, cells, visited);
  }
  return raw;
}

function tokenize(expr: string): string[] {
  const tokens: string[] = [];
  let i = 0;
  while (i < expr.length) {
    if (expr[i] === " ") {
      i++;
      continue;
    }
    if (expr[i] === '"') {
      let j = i + 1;
      while (j < expr.length && expr[j] !== '"') j++;
      tokens.push(expr.slice(i, j + 1));
      i = j + 1;
      continue;
    }
    if (/[A-Za-z]/.test(expr[i])) {
      let j = i + 1;
      while (j < expr.length && /[A-Za-z0-9_]/.test(expr[j])) j++;
      tokens.push(expr.slice(i, j));
      i = j;
      continue;
    }
    if (/\d/.test(expr[i]) || (expr[i] === "." && i + 1 < expr.length && /\d/.test(expr[i + 1]))) {
      let j = i + 1;
      while (j < expr.length && /[\d.]/.test(expr[j])) j++;
      tokens.push(expr.slice(i, j));
      i = j;
      continue;
    }
    if (",()".includes(expr[i])) {
      tokens.push(expr[i]);
      i++;
      continue;
    }
    if ("+-*/<>=".includes(expr[i])) {
      if (i + 1 < expr.length && expr[i + 1] === "=") {
        tokens.push(expr.slice(i, i + 2));
        i += 2;
      } else {
        tokens.push(expr[i]);
        i++;
      }
      continue;
    }
    i++;
  }
  return tokens;
}

function evaluateFormula(
  formula: string,
  cells: Record<string, string>,
  visited: Set<string> = new Set()
): string {
  const expr = formula.startsWith("=") ? formula.slice(1) : formula;

  const tokens = tokenize(expr);
  if (tokens.length === 0) return "";

  const tokenStrings = tokens.map((t) => {
    if (t.startsWith('"') && t.endsWith('"')) return t;
    const cr = parseCellRef(t);
    if (cr) {
      const resolved = resolveCellValue(t, cells, visited);
      const num = parseFloat(resolved);
      return isNaN(num) ? `"${resolved}"` : String(num);
    }
    const rng = parseRange(t);
    if (rng) {
      const vals = rng.map((r) => {
        const v = resolveCellValue(r, cells, visited);
        const n = parseFloat(v);
        return isNaN(n) ? `"${v}"` : String(n);
      });
      return `[${vals.join(",")}]`;
    }
    return t;
  });

  const parsed = parseExpression(tokenStrings);
  if (parsed === null || parsed === undefined) return "#ERROR!";
  if (typeof parsed === "string" && parsed.startsWith("#")) return parsed;
  return String(parsed);
}

function parseExpression(tokens: string[]): any {
  if (tokens.length === 0) return "";
  const first = tokens[0].toUpperCase();

  if (["SUM", "AVERAGE", "COUNT", "COUNTA", "MIN", "MAX"].includes(first)) {
    if (tokens.length < 3 || tokens[1] !== "(") return "#ERROR!";
    const closeIdx = tokens.lastIndexOf(")");
    if (closeIdx < 0) return "#ERROR!";
    const args = tokens.slice(2, closeIdx);
    const values = parseArguments(args);
    if (first === "SUM") {
      const nums = values.map((v) => {
        if (Array.isArray(v)) return v.reduce((s: number, x: any) => s + (parseFloat(x) || 0), 0);
        return parseFloat(v) || 0;
      });
      return nums.reduce((a: number, b: number) => a + b, 0);
    }
    if (first === "AVERAGE") {
      const flat: number[] = [];
      values.forEach((v) => {
        if (Array.isArray(v)) v.forEach((x: any) => { const n = parseFloat(x); if (!isNaN(n)) flat.push(n); });
        else { const n = parseFloat(v); if (!isNaN(n)) flat.push(n); }
      });
      return flat.length ? flat.reduce((a, b) => a + b, 0) / flat.length : "#DIV/0!";
    }
    if (first === "COUNT") {
      let count = 0;
      values.forEach((v) => {
        if (Array.isArray(v)) v.forEach((x: any) => { if (!isNaN(parseFloat(x))) count++; });
        else if (!isNaN(parseFloat(v))) count++;
      });
      return count;
    }
    if (first === "COUNTA") {
      let count = 0;
      values.forEach((v) => {
        if (Array.isArray(v)) v.forEach((x: any) => { if (x !== "" && x !== undefined) count++; });
        else if (v !== "" && v !== undefined) count++;
      });
      return count;
    }
    if (first === "MIN") {
      const flat: number[] = [];
      values.forEach((v) => {
        if (Array.isArray(v)) v.forEach((x: any) => { const n = parseFloat(x); if (!isNaN(n)) flat.push(n); });
        else { const n = parseFloat(v); if (!isNaN(n)) flat.push(n); }
      });
      return flat.length ? Math.min(...flat) : "#NUM!";
    }
    if (first === "MAX") {
      const flat: number[] = [];
      values.forEach((v) => {
        if (Array.isArray(v)) v.forEach((x: any) => { const n = parseFloat(x); if (!isNaN(n)) flat.push(n); });
        else { const n = parseFloat(v); if (!isNaN(n)) flat.push(n); }
      });
      return flat.length ? Math.max(...flat) : "#NUM!";
    }
  }

  if (first === "IF") {
    if (tokens.length < 6) return "#ERROR!";
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const comma1 = findComma(args);
    if (comma1 < 0) return "#ERROR!";
    const condition = args.slice(0, comma1).join(" ");
    const comma2 = findComma(args.slice(comma1 + 1));
    const trueVal = comma2 >= 0 ? args.slice(comma1 + 1, comma1 + 1 + comma2).join(" ") : args.slice(comma1 + 1).join(" ");
    const falseVal = comma2 >= 0 ? args.slice(comma1 + 1 + comma2 + 1).join(" ") : "";
    const condResult = evaluateCondition(condition);
    if (condResult) return stripQuotes(trueVal);
    return stripQuotes(falseVal || "");
  }

  if (first === "AND" || first === "OR") {
    if (tokens.length < 3 || tokens[1] !== "(") return "#ERROR!";
    const closeIdx = tokens.lastIndexOf(")");
    if (closeIdx < 0) return "#ERROR!";
    const args = tokens.slice(2, closeIdx);
    const conditions = splitByComma(args);
    const results = conditions.map((c) => evaluateCondition(c.join(" ")));
    if (first === "AND") return results.every(Boolean);
    return results.some(Boolean);
  }

  if (first === "CONCATENATE") {
    if (tokens.length < 3 || tokens[1] !== "(") return "#ERROR!";
    const closeIdx = tokens.lastIndexOf(")");
    if (closeIdx < 0) return "#ERROR!";
    const args = tokens.slice(2, closeIdx);
    const values = parseArguments(args);
    return values.map((v) => (Array.isArray(v) ? v.join("") : stripQuotes(String(v)))).join("");
  }

  if (first === "VLOOKUP") {
    if (tokens.length < 8) return "#ERROR!";
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const parts = splitByComma(args);
    if (parts.length < 4) return "#ERROR!";
    const lookupVal = stripQuotes(parts[0].join(" "));
    const rangeCells = parseRange(stripBrackets(parts[1].join(" ")));
    const colIdx = parseInt(parts[2].join(" "), 10);
    if (!rangeCells || isNaN(colIdx)) return "#ERROR!";
    const rangeRows: string[][] = [];
    const rowSet = new Set<number>();
    rangeCells.forEach((ref) => {
      const p = parseCellRef(ref);
      if (p) rowSet.add(p.row);
    });
    const sortedRows = Array.from(rowSet).sort((a, b) => a - b);
    sortedRows.forEach((r) => {
      const rowCells: string[] = [];
      let minCol = Infinity, maxCol = -Infinity;
      rangeCells.forEach((ref) => {
        const p = parseCellRef(ref);
        if (p && p.row === r) {
          if (p.col < minCol) minCol = p.col;
          if (p.col > maxCol) maxCol = p.col;
        }
      });
      for (let c = minCol; c <= maxCol; c++) {
        rowCells.push(resolveCellValue(cellId(c, r), cells, new Set()));
      }
      rangeRows.push(rowCells);
    });
    for (const row of rangeRows) {
      if (String(row[0]).toLowerCase() === String(lookupVal).toLowerCase()) {
        const idx = colIdx - 1;
        return idx >= 0 && idx < row.length ? row[idx] : "#REF!";
      }
    }
    return "#N/A";
  }

  if (first === "XLOOKUP") {
    if (tokens.length < 6) return "#ERROR!";
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const parts = splitByComma(args);
    if (parts.length < 3) return "#ERROR!";
    const lookupVal = stripQuotes(parts[0].join(" "));
    const lookupRange = parseRange(stripBrackets(parts[1].join(" ")));
    const returnRange = parseRange(stripBrackets(parts[2].join(" ")));
    if (!lookupRange || !returnRange) return "#ERROR!";
    const lookupMap: Map<string, string> = new Map();
    lookupRange.forEach((ref, i) => {
      const val = resolveCellValue(ref, cells, new Set());
      const returnVal = i < returnRange.length ? resolveCellValue(returnRange[i], cells, new Set()) : "";
      lookupMap.set(String(val).toLowerCase(), returnVal);
    });
    return lookupMap.get(String(lookupVal).toLowerCase()) || "#N/A";
  }

  if (first === "TODAY") {
    return new Date().toLocaleDateString("en-US");
  }

  if (first === "NOW") {
    return new Date().toLocaleString("en-US");
  }

  if (first === "DATEDIF") {
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const parts = splitByComma(args);
    if (parts.length < 3) return "#ERROR!";
    const startStr = stripQuotes(parts[0].join(" "));
    const endStr = stripQuotes(parts[1].join(" "));
    const unit = stripQuotes(parts[2].join(" ")).toUpperCase();
    const start = new Date(startStr);
    const end = new Date(endStr);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return "#VALUE!";
    const diffMs = end.getTime() - start.getTime();
    if (unit === "D") return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (unit === "M") {
      return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    }
    if (unit === "Y") {
      let years = end.getFullYear() - start.getFullYear();
      if (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) years--;
      return years;
    }
    return "#VALUE!";
  }

  if (first === "LEFT") {
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const parts = splitByComma(args);
    if (parts.length < 2) return "#ERROR!";
    const text = stripQuotes(parts[0].join(" "));
    const n = parseInt(parts[1].join(" "), 10);
    return text.slice(0, n);
  }

  if (first === "RIGHT") {
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const parts = splitByComma(args);
    if (parts.length < 2) return "#ERROR!";
    const text = stripQuotes(parts[0].join(" "));
    const n = parseInt(parts[1].join(" "), 10);
    return text.slice(-n);
  }

  if (first === "LEN") {
    const closeIdx = tokens.lastIndexOf(")");
    const args = tokens.slice(2, closeIdx);
    const parts = splitByComma(args);
    if (parts.length < 1) return "#ERROR!";
    const text = stripQuotes(parts[0].join(" "));
    return text.length;
  }

  const mathResult = evaluateMathExpression(tokens);
  if (mathResult !== null) return mathResult;

  return "";
}

function evaluateCondition(expr: string): boolean {
  const comparisonMatch = expr.match(/^([^<>=!]+)\s*(<=|>=|!=|==|<>|<|>)\s*(.+)$/);
  if (comparisonMatch) {
    const left = stripQuotes(comparisonMatch[1].trim());
    const op = comparisonMatch[2];
    const right = stripQuotes(comparisonMatch[3].trim());
    const lNum = parseFloat(left);
    const rNum = parseFloat(right);
    const l = isNaN(lNum) ? left : lNum;
    const r = isNaN(rNum) ? right : rNum;
    if (typeof l === "number" && typeof r === "number") {
      switch (op) {
        case ">": return l > r;
        case "<": return l < r;
        case ">=": return l >= r;
        case "<=": return l <= r;
        case "==": case "=": return l === r;
        case "!=": case "<>": return l !== r;
      }
    }
    const sLeft = String(l).toLowerCase();
    const sRight = String(r).toLowerCase();
    switch (op) {
      case ">": return sLeft > sRight;
      case "<": return sLeft < sRight;
      case ">=": return sLeft >= sRight;
      case "<=": return sLeft <= sRight;
      case "==": case "=": return sLeft === sRight;
      case "!=": case "<>": return sLeft !== sRight;
    }
  }
  const trimmed = expr.trim().toLowerCase();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  const num = parseFloat(trimmed);
  if (!isNaN(num)) return num !== 0;
  return trimmed !== "" && trimmed !== "0";
}

function evaluateMathExpression(tokens: string[]): number | null {
  let ex = tokens.join(" ");
  const cellRefs = ex.match(/[A-Z]\d+/gi);
  if (cellRefs) {
    for (const ref of cellRefs) {
      const val = parseFloat(ex.match(ref)?.[0] || "0");
      ex = ex.replace(ref, String(val));
    }
  }
  try {
    const sanitized = ex.replace(/"[^"]*"/g, "0").replace(/[^0-9+\-*/().%\s]/g, "");
    if (!/^[\d+\-*/().%\s]+$/.test(sanitized)) return null;
    const result = Function(`"use strict"; return (${sanitized})`)();
    if (typeof result === "number" && !isNaN(result)) return result;
    return null;
  } catch {
    return null;
  }
}

function stripQuotes(s: string): string {
  return s.replace(/^"(.*)"$/, "$1");
}

function stripBrackets(s: string): string {
  return s.replace(/^\[(.*)\]$/, "$1");
}

function findComma(tokens: string[]): number {
  let depth = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "(") depth++;
    else if (tokens[i] === ")") depth--;
    else if (tokens[i] === "," && depth === 0) return i;
  }
  return -1;
}

function splitByComma(tokens: string[]): string[][] {
  const result: string[][] = [];
  let current: string[] = [];
  let depth = 0;
  for (const t of tokens) {
    if (t === "(") depth++;
    else if (t === ")") depth--;
    if (t === "," && depth === 0) {
      result.push(current);
      current = [];
    } else {
      current.push(t);
    }
  }
  if (current.length) result.push(current);
  return result;
}

function parseArguments(tokens: string[]): any[] {
  const result: any[] = [];
  let current: string[] = [];
  let depth = 0;
  for (const t of tokens) {
    if (t === "(") depth++;
    else if (t === ")") depth--;
    if (t === "," && depth === 0) {
      const val = current.join(" ");
      if (val.startsWith("[") && val.endsWith("]")) {
        result.push(JSON.parse(val));
      } else {
        result.push(stripQuotes(val));
      }
      current = [];
    } else {
      current.push(t);
    }
  }
  if (current.length) {
    const val = current.join(" ");
    if (val.startsWith("[") && val.endsWith("]")) {
      result.push(JSON.parse(val));
    } else {
      result.push(stripQuotes(val));
    }
  }
  return result;
}

const CHART_COLORS = [
  "#22C55E", "#3B82F6", "#F59E0B", "#EF4444",
  "#8B5CF6", "#EC4899", "#14B8A6", "#F97316",
];

interface Sheet {
  id: string;
  name: string;
  cells: Record<string, string>;
}

let sheetCounter = 0;
function createSheet(name?: string): Sheet {
  sheetCounter++;
  return {
    id: `sheet-${sheetCounter}`,
    name: name || `Sheet${sheetCounter}`,
    cells: {},
  };
}

const sampleMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const sampleValues = [420, 580, 350, 720, 610, 890];

const scriptTemplates = [
  {
    name: "Macro: Format Header",
    code: `function formatHeader() {
  var range = SpreadsheetApp.getActiveSheet().getRange("A1:F1");
  range.setFontWeight("bold");
  range.setFontColor("#ffffff");
  range.setBackground("#22C55E");
  return "Header formatted successfully";
}`,
  },
  {
    name: "Custom Function",
    code: `function TAX(amount, rate) {
  return amount * (rate / 100);
}

// Usage: =TAX(1000, 15) → 150`,
  },
  {
    name: "Send Email",
    code: `function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var output = [];
  for (var i = 1; i < data.length; i++) {
    var email = data[i][0];
    var name = data[i][1];
    if (email) {
      MailApp.sendEmail(email, "Hello " + name, "This is an automated message.");
      output.push("Email sent to " + email);
    }
  }
  return output.join("\\n");
}`,
  },
  {
    name: "onEdit Trigger",
    code: `function onEdit(e) {
  var range = e.range;
  var sheet = range.getSheet();
  var timestampCell = sheet.getRange(range.getRow(), 3);
  timestampCell.setValue(new Date().toLocaleString());
  return "Timestamp added at " + timestampCell.getA1Notation();
}`,
  },
];

interface TabProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

function TabButton({ active, children, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-t-lg border-b-2 ${
        active
          ? "text-[#22C55E] border-[#22C55E] bg-background"
          : "text-muted-foreground border-transparent hover:text-foreground hover:border-foreground/20"
      }`}
    >
      {children}
    </button>
  );
}

function MiniBar({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-[2px] h-10">
      {values.map((v, i) => (
        <div
          key={i}
          className="w-2 rounded-sm transition-all"
          style={{ height: `${(v / max) * 100}%`, backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function BarChartSVG({
  data,
  color,
  title,
}: {
  data: { label: string; value: number }[];
  color: string;
  title?: string;
}) {
  const w = 500;
  const h = 250;
  const pad = { top: 30, right: 20, bottom: 50, left: 50 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const barW = Math.max(chartW / data.length - 10, 10);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-[500px]">
      {title && (
        <text x={w / 2} y={18} textAnchor="middle" fill="currentColor" className="text-xs font-medium">
          {title}
        </text>
      )}
      {Array.from({ length: 5 }, (_, i) => {
        const val = (maxVal / 5) * (i + 1);
        const y = pad.top + chartH - (val / maxVal) * chartH;
        return (
          <g key={i}>
            <line x1={pad.left} y1={y} x2={w - pad.right} y2={y} stroke="currentColor" strokeOpacity={0.1} />
            <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="currentColor" className="text-[10px]" opacity={0.6}>
              {Math.round(val)}
            </text>
          </g>
        );
      })}
      {data.map((d, i) => {
        const x = pad.left + (chartW / data.length) * i + (chartW / data.length - barW) / 2;
        const barH = (d.value / maxVal) * chartH;
        const y = pad.top + chartH - barH;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={barH} fill={color} rx={3} />
            <text
              x={x + barW / 2}
              y={pad.top + chartH + 16}
              textAnchor="end"
              transform={`rotate(-45, ${x + barW / 2}, ${pad.top + chartH + 16})`}
              fill="currentColor"
              className="text-[10px]"
              opacity={0.7}
            >
              {d.label}
            </text>
          </g>
        );
      })}
      <line
        x1={pad.left}
        y1={pad.top}
        x2={pad.left}
        y2={pad.top + chartH}
        stroke="currentColor"
        strokeOpacity={0.2}
      />
      <line
        x1={pad.left}
        y1={pad.top + chartH}
        x2={w - pad.right}
        y2={pad.top + chartH}
        stroke="currentColor"
        strokeOpacity={0.2}
      />
    </svg>
  );
}

function LineChartSVG({
  data,
  color,
}: {
  data: { label: string; value: number }[];
  color: string;
}) {
  const w = 500;
  const h = 250;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const points = data
    .map((d, i) => {
      const x = pad.left + (chartW / (data.length - 1 || 1)) * i;
      const y = pad.top + chartH - (d.value / maxVal) * chartH;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-[500px]">
      {Array.from({ length: 5 }, (_, i) => {
        const val = (maxVal / 5) * (i + 1);
        const y = pad.top + chartH - (val / maxVal) * chartH;
        return (
          <g key={i}>
            <line x1={pad.left} y1={y} x2={w - pad.right} y2={y} stroke="currentColor" strokeOpacity={0.1} />
            <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="currentColor" className="text-[10px]" opacity={0.6}>
              {Math.round(val)}
            </text>
          </g>
        );
      })}
      <polyline points={points} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" />
      {data.map((d, i) => {
        const x = pad.left + (chartW / (data.length - 1 || 1)) * i;
        const y = pad.top + chartH - (d.value / maxVal) * chartH;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={4} fill={color} stroke="white" strokeWidth={1.5} />
            <text
              x={x}
              y={pad.top + chartH + 16}
              textAnchor="middle"
              fill="currentColor"
              className="text-[10px]"
              opacity={0.7}
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PieChartSVG({
  data,
}: {
  data: { label: string; value: number }[];
}) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  let cumulative = 0;
  const cx = 150;
  const cy = 150;
  const r = 100;

  const slices = data.map((d) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const colorIdx = data.indexOf(d) % CHART_COLORS.length;
    return {
      path: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`,
      color: CHART_COLORS[colorIdx],
      label: d.label,
      pct: ((d.value / total) * 100).toFixed(1),
    };
  });

  return (
    <svg viewBox="0 0 300 280" className="w-full max-w-[300px]">
      {slices.map((s, i) => (
        <g key={i}>
          <path d={s.path} fill={s.color} stroke="white" strokeWidth={1.5} />
        </g>
      ))}
      {slices.map((s, i) => (
        <g key={`legend-${i}`}>
          <rect x={10} y={220 + i * 16} width={10} height={10} rx={2} fill={s.color} />
          <text x={26} y={229 + i * 16} fill="currentColor" className="text-[10px]" opacity={0.8}>
            {s.label} ({s.pct}%)
          </text>
        </g>
      ))}
    </svg>
  );
}

function AreaChartSVG({
  data,
  color,
}: {
  data: { label: string; value: number }[];
  color: string;
}) {
  const w = 500;
  const h = 250;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const maxVal = Math.max(...data.map((d) => d.value), 1);

  const pts = data.map((d, i) => {
    const x = pad.left + (chartW / (data.length - 1 || 1)) * i;
    const y = pad.top + chartH - (d.value / maxVal) * chartH;
    return { x, y, label: d.label, value: d.value };
  });

  const pathD =
    pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") +
    ` L ${pts[pts.length - 1].x} ${pad.top + chartH} L ${pts[0].x} ${pad.top + chartH} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-[500px]">
      {Array.from({ length: 5 }, (_, i) => {
        const val = (maxVal / 5) * (i + 1);
        const y = pad.top + chartH - (val / maxVal) * chartH;
        return (
          <g key={i}>
            <line x1={pad.left} y1={y} x2={w - pad.right} y2={y} stroke="currentColor" strokeOpacity={0.1} />
            <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="currentColor" className="text-[10px]" opacity={0.6}>
              {Math.round(val)}
            </text>
          </g>
        );
      })}
      <path d={pathD} fill={color} fillOpacity={0.3} stroke={color} strokeWidth={2} />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={3.5} fill={color} stroke="white" strokeWidth={1.5} />
          <text x={p.x} y={pad.top + chartH + 16} textAnchor="middle" fill="currentColor" className="text-[10px]" opacity={0.7}>
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function SpreadsheetPlayground() {
  const [activeTab, setActiveTab] = useState("sheet");
  const [sheets, setSheets] = useState<Sheet[]>([createSheet("Sheet1"), createSheet("Sheet2")]);
  const [activeSheetId, setActiveSheetId] = useState(sheets[0].id);
  const [selectedCell, setSelectedCell] = useState("A1");
  const [editingCell, setEditingCell] = useState("");
  const [editValue, setEditValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<string[]>([]);

  const [formulaSearch, setFormulaSearch] = useState("");

  const [chartType, setChartType] = useState<"bar" | "line" | "pie" | "area">("bar");
  const [chartColor, setChartColor] = useState("#22C55E");
  const [chartTitle, setChartTitle] = useState("Monthly Data");

  const [scriptCode, setScriptCode] = useState(scriptTemplates[0].code);
  const [scriptOutput, setScriptOutput] = useState("");

  const gridRef = useRef<HTMLDivElement>(null);

  const activeSheet = sheets.find((s) => s.id === activeSheetId) || sheets[0];

  function getCells(): Record<string, string> {
    return activeSheet.cells;
  }

  function updateCells(updater: (cells: Record<string, string>) => Record<string, string>) {
    setSheets((prev) =>
      prev.map((s) => (s.id === activeSheetId ? { ...s, cells: updater(s.cells) } : s))
    );
  }

  function displayValue(ref: string): string {
    const cells = getCells();
    const raw = cells[ref];
    if (!raw) return "";
    if (raw.startsWith("=")) {
      try {
        return evaluateFormula(raw, cells);
      } catch {
        return "#ERROR!";
      }
    }
    return raw;
  }

  const cellValue = useCallback(
    (ref: string): string => {
      const cells = getCells();
      return cells[ref] || "";
    },
    [sheets, activeSheetId]
  );

  const handleCellChange = useCallback(
    (ref: string, value: string) => {
      updateCells((cells) => ({ ...cells, [ref]: value }));
    },
    [activeSheetId]
  );

  function commitEdit() {
    if (editingCell) {
      handleCellChange(editingCell, editValue);
      setEditingCell("");
      setEditValue("");
    }
  }

  function startEdit(ref: string) {
    setEditingCell(ref);
    setEditValue(cellValue(ref));
  }

  function moveSelection(dCol: number, dRow: number) {
    const parsed = parseCellRef(selectedCell);
    if (!parsed) return;
    const newCol = Math.max(0, Math.min(COL_COUNT - 1, parsed.col + dCol));
    const newRow = Math.max(0, Math.min(ROW_COUNT - 1, parsed.row + dRow));
    const newRef = cellId(newCol, newRow);
    setSelectedCell(newRef);
    if (gridRef.current) {
      const el = gridRef.current.querySelector(`[data-cell="${newRef}"]`);
      if (el) el.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  function handleGridKeyDown(e: React.KeyboardEvent) {
    if (editingCell) {
      if (e.key === "Enter") {
        e.preventDefault();
        commitEdit();
        moveSelection(0, 1);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setEditingCell("");
        setEditValue("");
      } else if (e.key === "Tab") {
        e.preventDefault();
        commitEdit();
        moveSelection(1, 0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        moveSelection(0, -1);
        break;
      case "ArrowDown":
        e.preventDefault();
        moveSelection(0, 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveSelection(-1, 0);
        break;
      case "ArrowRight":
        e.preventDefault();
        moveSelection(1, 0);
        break;
      case "Enter":
        e.preventDefault();
        startEdit(selectedCell);
        break;
      case "Tab":
        e.preventDefault();
        moveSelection(1, 0);
        break;
      case "Delete":
      case "Backspace":
        e.preventDefault();
        handleCellChange(selectedCell, "");
        break;
      default:
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          startEdit(selectedCell);
          setEditValue(e.key);
        }
        break;
    }
  }

  function addSheet() {
    setSheets((prev) => [...prev, createSheet()]);
  }

  function removeSheet(id: string) {
    if (sheets.length <= 1) return;
    setSheets((prev) => prev.filter((s) => s.id !== id));
    if (activeSheetId === id) {
      setActiveSheetId(sheets[0].id === id ? sheets[1]?.id || sheets[0].id : sheets[0].id);
    }
  }

  function renameSheet(id: string, name: string) {
    setSheets((prev) => prev.map((s) => (s.id === id ? { ...s, name } : s)));
  }

  function handleExportCSV() {
    const cells = getCells();
    const rows: string[] = [];
    for (let r = 0; r < ROW_COUNT; r++) {
      const rowData: string[] = [];
      for (let c = 0; c < COL_COUNT; c++) {
        const ref = cellId(c, r);
        const val = cells[ref] || "";
        const csvVal = val.includes(",") ? `"${val}"` : val;
        rowData.push(csvVal);
      }
      rows.push(rowData.join(","));
    }
    const csv = rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeSheet.name}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportCSV(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target?.result as string;
      const rows = text.split("\n");
      const newCells: Record<string, string> = {};
      rows.forEach((row, r) => {
        if (r >= ROW_COUNT) return;
        const cols = row.split(",");
        cols.forEach((col, c) => {
          if (c >= COL_COUNT) return;
          const ref = cellId(c, r);
          newCells[ref] = col.trim().replace(/^"(.*)"$/, "$1");
        });
      });
      updateCells(() => newCells);
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function runScript() {
    setScriptOutput("> Running script...\n");
    setTimeout(() => {
      try {
        const fn = new Function(
          "SpreadsheetApp",
          "MailApp",
          "console",
          scriptCode
        );
        const mockSpreadsheetApp = {
          getActiveSheet: () => ({
            getRange: (a1: string) => ({
              setFontWeight: () => {},
              setFontColor: () => {},
              setBackground: () => {},
              setValue: () => {},
              getA1Notation: () => a1,
              getValues: () => [
                ["", ""],
                ["user@example.com", "Alice"],
                ["bob@test.com", "Bob"],
              ],
              getRow: () => 1,
              getDataRange: () => ({
                getValues: () => [
                  ["Email", "Name"],
                  ["user@example.com", "Alice"],
                  ["bob@test.com", "Bob"],
                ],
              }),
              getSheet: () => ({
                getRange: (row: number, col: number) => ({
                  setValue: () => {},
                  getA1Notation: () => `${String.fromCharCode(64 + col)}${row}`,
                }),
              }),
            }),
          }),
        };
        const mockMailApp = {
          sendEmail: (to: string, subject: string, body: string) => {
            setScriptOutput((prev) => prev + `Email sent to ${to}: ${subject}\n`);
          },
        };
        const mockConsole = {
          log: (...args: any[]) => {
            setScriptOutput((prev) => prev + args.join(" ") + "\n");
          },
        };
        const result = fn(mockSpreadsheetApp, mockMailApp, mockConsole);
        setScriptOutput(
          (prev) => prev + `\n> Script completed${result !== undefined ? `: ${result}` : ""}\n`
        );
      } catch (err: any) {
        setScriptOutput((prev) => prev + `\n! Error: ${err.message}\n`);
      }
    }, 300);
  }

  const tabs = [
    { key: "sheet", label: "Sheet", icon: Table },
    { key: "formulas", label: "Formulas", icon: Sigma },
    { key: "charts", label: "Charts", icon: ChartBar },
    { key: "scripts", label: "Scripts", icon: Code2 },
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  ] as const;

  const formulaCategories = [
    {
      name: "Math & Stats",
      formulas: [
        { formula: "=SUM(A1:A10)", description: "Adds all values in range", example: "=SUM(B2:B11) → total sales" },
        { formula: "=AVERAGE(A1:A10)", description: "Mean of values in range", example: "=AVERAGE(C2:C11) → avg score" },
        { formula: "=MIN(A1:A10)", description: "Smallest value", example: "=MIN(D2:D11) → minimum" },
        { formula: "=MAX(A1:A10)", description: "Largest value", example: "=MAX(D2:D11) → maximum" },
        { formula: "=COUNT(A1:A10)", description: "Count numeric cells", example: "=COUNT(E2:E11)" },
        { formula: "=COUNTA(A1:A10)", description: "Count non-empty cells", example: "=COUNTA(F2:F11)" },
      ],
    },
    {
      name: "Logic",
      formulas: [
        { formula: "=IF(A1>5,\"Yes\",\"No\")", description: "Conditional logic", example: "=IF(B2>=90,\"A\",\"B\")" },
        { formula: "=AND(A1>5,B1<10)", description: "Multiple conditions (all true)", example: "=AND(C2>0,D2<100)" },
        { formula: "=OR(A1>5,B1<10)", description: "Multiple conditions (any true)", example: "=OR(E2=\"Yes\",F2>50)" },
      ],
    },
    {
      name: "Lookup",
      formulas: [
        { formula: "=VLOOKUP(A1,A:B,2,FALSE)", description: "Vertical lookup", example: "=VLOOKUP(G2,Products!A:B,2,FALSE)" },
        { formula: "=XLOOKUP(A1,A:A,B:B)", description: "Modern lookup", example: "=XLOOKUP(H2,IDs,Names)" },
      ],
    },
    {
      name: "Text",
      formulas: [
        { formula: "=CONCATENATE(A1,\" \",B1)", description: "Join text", example: "=CONCATENATE(A2,\" \",B2)" },
        { formula: "=LEFT(A1,5)", description: "Left characters", example: "=LEFT(B2,3)" },
        { formula: "=RIGHT(A1,5)", description: "Right characters", example: "=RIGHT(C2,4)" },
        { formula: "=LEN(A1)", description: "Text length", example: "=LEN(D2)" },
      ],
    },
    {
      name: "Date",
      formulas: [
        { formula: "=TODAY()", description: "Current date", example: "=TODAY() → 5/19/2026" },
        { formula: "=NOW()", description: "Current date+time", example: "=NOW() → 5/19/2026 14:30" },
        { formula: "=DATEDIF(A1,B1,\"D\")", description: "Days between dates", example: "=DATEDIF(A2,B2,\"D\")" },
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-background text-foreground rounded-lg border border-foreground/10 overflow-hidden">
      <div className="flex border-b border-foreground/10 bg-muted/30 px-2">
        {tabs.map(({ key, label, icon: Icon }) => (
          <TabButton key={key} active={activeTab === key} onClick={() => setActiveTab(key)}>
            <Icon className="w-4 h-4" />
            {label}
          </TabButton>
        ))}
      </div>

      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "sheet" && (
            <motion.div
              key="sheet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center gap-2 px-3 py-2 border-b border-foreground/10 bg-muted/20">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <span className="text-sm font-mono font-semibold text-[#22C55E] min-w-[40px]">
                    {editingCell ? editingCell : selectedCell}
                  </span>
                  <span className="text-foreground/30">|</span>
                </div>
                <div className="flex-1">
                  {editingCell === selectedCell ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          commitEdit();
                          moveSelection(0, 1);
                        }
                        if (e.key === "Escape") {
                          e.preventDefault();
                          setEditingCell("");
                          setEditValue("");
                        }
                      }}
                      className="w-full bg-transparent border-none outline-none text-sm font-mono"
                      autoFocus
                    />
                  ) : (
                    <span className="text-sm font-mono text-foreground/80">
                      {displayValue(selectedCell)}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleExportCSV}
                    className="p-1.5 rounded hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
                    title="Export CSV"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <label className="p-1.5 rounded hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-colors cursor-pointer" title="Import CSV">
                    <Upload className="w-4 h-4" />
                    <input type="file" accept=".csv" onChange={handleImportCSV} className="hidden" />
                  </label>
                </div>
              </div>

              <div
                ref={gridRef}
                className="flex-1 overflow-auto"
                tabIndex={0}
                onKeyDown={handleGridKeyDown}
              >
                <table className="border-collapse w-max min-w-full">
                  <thead>
                    <tr>
                      <th className="w-10 h-8 bg-muted/40 border border-foreground/10 text-xs font-medium text-foreground/60 sticky top-0 z-20">
                        #
                      </th>
                      {COL_LETTERS.map((letter) => (
                        <th
                          key={letter}
                          className="w-[100px] min-w-[80px] h-8 bg-muted/40 border border-foreground/10 text-xs font-medium text-foreground/60 sticky top-0 z-20"
                        >
                          {letter}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: ROW_COUNT }, (_, r) => (
                      <tr key={r}>
                        <td className="w-10 h-8 bg-muted/20 border border-foreground/10 text-xs font-medium text-foreground/50 text-center sticky left-0 z-10">
                          {r + 1}
                        </td>
                        {COL_LETTERS.map((_, c) => {
                          const ref = cellId(c, r);
                          const isSelected = ref === selectedCell;
                          const isEditing = ref === editingCell;
                          const raw = cellValue(ref);
                          const display = displayValue(ref);
                          return (
                            <td
                              key={ref}
                              data-cell={ref}
                              className={`w-[100px] min-w-[80px] h-8 border border-foreground/10 relative cursor-pointer ${
                                isSelected ? "ring-2 ring-[#22C55E] ring-inset z-10" : ""
                              }`}
                              onClick={() => setSelectedCell(ref)}
                              onDoubleClick={() => startEdit(ref)}
                            >
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  onBlur={() => commitEdit()}
                                  className="absolute inset-0 w-full h-full bg-background border-none outline-none px-1.5 text-sm font-mono"
                                  autoFocus
                                />
                              ) : (
                                <div className="px-1.5 text-sm font-mono truncate leading-8">
                                  {raw.startsWith("=") ? (
                                    <span className="text-[#22C55E]/70">{display}</span>
                                  ) : (
                                    <span>{display}</span>
                                  )}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center gap-1 px-2 py-1.5 border-t border-foreground/10 bg-muted/30 overflow-x-auto">
                {sheets.map((sheet) => (
                  <div
                    key={sheet.id}
                    className={`flex items-center gap-1 px-3 py-1 rounded cursor-pointer text-xs font-medium transition-colors ${
                      sheet.id === activeSheetId
                        ? "bg-[#22C55E]/20 text-[#22C55E]"
                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                    }`}
                    onClick={() => setActiveSheetId(sheet.id)}
                  >
                    <input
                      type="text"
                      value={sheet.name}
                      onChange={(e) => renameSheet(sheet.id, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-16 bg-transparent border-none outline-none text-xs font-medium text-center"
                    />
                    {sheets.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSheet(sheet.id);
                        }}
                        className="p-0.5 rounded hover:bg-foreground/10"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addSheet}
                  className="p-1 rounded hover:bg-foreground/10 text-foreground/50 hover:text-foreground transition-colors"
                  title="Add sheet"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "formulas" && (
            <motion.div
              key="formulas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full overflow-y-auto p-4"
            >
              <div className="mb-4">
                <input
                  type="text"
                  value={formulaSearch}
                  onChange={(e) => setFormulaSearch(e.target.value)}
                  placeholder="Search formulas..."
                  className="w-full px-3 py-2 bg-muted/30 border border-foreground/10 rounded-lg text-sm outline-none focus:border-[#22C55E]/50 transition-colors"
                />
              </div>
              <div className="space-y-6">
                {formulaCategories
                  .filter((cat) =>
                    formulaSearch
                      ? cat.formulas.some(
                          (f) =>
                            f.formula.toLowerCase().includes(formulaSearch.toLowerCase()) ||
                            f.description.toLowerCase().includes(formulaSearch.toLowerCase())
                        )
                      : true
                  )
                  .map((cat) => {
                    const filtered = formulaSearch
                      ? cat.formulas.filter(
                          (f) =>
                            f.formula.toLowerCase().includes(formulaSearch.toLowerCase()) ||
                            f.description.toLowerCase().includes(formulaSearch.toLowerCase())
                        )
                      : cat.formulas;
                    if (filtered.length === 0) return null;
                    return (
                      <div key={cat.name}>
                        <h3 className="text-sm font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                          {cat.name}
                        </h3>
                        <div className="grid gap-3">
                          {filtered.map((f) => (
                            <div
                              key={f.formula}
                              className="p-3 rounded-lg border border-foreground/10 bg-muted/20 hover:border-[#22C55E]/30 transition-colors"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <code className="text-sm font-mono text-[#22C55E]">{f.formula}</code>
                                  <p className="text-xs text-foreground/60 mt-1">{f.description}</p>
                                  <p className="text-xs text-foreground/40 mt-0.5 font-mono">{f.example}</p>
                                </div>
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(f.formula);
                                  }}
                                  className="p-1.5 rounded hover:bg-foreground/10 text-foreground/40 hover:text-foreground transition-colors shrink-0"
                                  title="Copy formula"
                                >
                                  <Copy className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          )}

          {activeTab === "charts" && (
            <motion.div
              key="charts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full overflow-y-auto p-4"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {(["bar", "line", "pie", "area"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setChartType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      chartType === type
                        ? "bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30"
                        : "bg-muted/30 text-foreground/60 border border-foreground/10 hover:text-foreground"
                    }`}
                  >
                    {type} Chart
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <label className="text-xs text-foreground/60">Title:</label>
                  <input
                    type="text"
                    value={chartTitle}
                    onChange={(e) => setChartTitle(e.target.value)}
                    className="px-2 py-1 bg-muted/30 border border-foreground/10 rounded text-sm outline-none focus:border-[#22C55E]/50"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-foreground/60">Color:</label>
                  <input
                    type="color"
                    value={chartColor}
                    onChange={(e) => setChartColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border border-foreground/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-xs font-medium text-foreground/60 mb-2">Data</h4>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-foreground/10 px-2 py-1 text-xs font-medium text-foreground/60 bg-muted/30 text-left">
                          Month
                        </th>
                        <th className="border border-foreground/10 px-2 py-1 text-xs font-medium text-foreground/60 bg-muted/30 text-right">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleMonths.map((month, i) => (
                        <tr key={month}>
                          <td className="border border-foreground/10 px-2 py-1 text-xs">{month}</td>
                          <td className="border border-foreground/10 px-2 py-1 text-xs text-right font-mono">
                            {sampleValues[i]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center p-4 border border-foreground/10 rounded-lg bg-muted/10">
                  {chartType === "bar" && (
                    <BarChartSVG
                      data={sampleMonths.map((m, i) => ({ label: m, value: sampleValues[i] }))}
                      color={chartColor}
                      title={chartTitle}
                    />
                  )}
                  {chartType === "line" && (
                    <LineChartSVG
                      data={sampleMonths.map((m, i) => ({ label: m, value: sampleValues[i] }))}
                      color={chartColor}
                    />
                  )}
                  {chartType === "pie" && (
                    <PieChartSVG
                      data={sampleMonths.map((m, i) => ({ label: m, value: sampleValues[i] }))}
                    />
                  )}
                  {chartType === "area" && (
                    <AreaChartSVG
                      data={sampleMonths.map((m, i) => ({ label: m, value: sampleValues[i] }))}
                      color={chartColor}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "scripts" && (
            <motion.div
              key="scripts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col p-4"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {scriptTemplates.map((tpl) => (
                  <button
                    key={tpl.name}
                    onClick={() => setScriptCode(tpl.code)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      scriptCode === tpl.code
                        ? "bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30"
                        : "bg-muted/30 text-foreground/60 border border-foreground/10 hover:text-foreground"
                    }`}
                  >
                    {tpl.name}
                  </button>
                ))}
              </div>

              <div className="flex-1 min-h-0 flex gap-4">
                <div className="flex-1 flex flex-col">
                  <textarea
                    value={scriptCode}
                    onChange={(e) => setScriptCode(e.target.value)}
                    className="flex-1 w-full p-3 bg-[#1a1a2e] text-[#e0e0e0] font-mono text-sm border border-foreground/10 rounded-lg outline-none resize-none focus:border-[#22C55E]/50 transition-colors"
                    spellCheck={false}
                  />
                </div>

                <div className="w-80 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Output</h4>
                    <div className="flex gap-1">
                      <button
                        onClick={runScript}
                        className="px-3 py-1 rounded text-xs font-medium bg-[#22C55E] text-white hover:bg-[#1da84e] transition-colors"
                      >
                        Run
                      </button>
                      <button
                        onClick={() => setScriptOutput("")}
                        className="px-3 py-1 rounded text-xs font-medium bg-muted/30 text-foreground/60 border border-foreground/10 hover:text-foreground transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 p-3 bg-[#1a1a2e] text-[#e0e0e0] font-mono text-xs rounded-lg border border-foreground/10 overflow-y-auto whitespace-pre-wrap">
                    {scriptOutput || "Click 'Run' to execute the script."}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full overflow-y-auto p-4"
            >
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Revenue", value: "$125K", change: "+12.3%", color: "#22C55E", data: [30, 45, 38, 52, 48, 65, 55, 72, 68, 85, 78, 95] },
                  { label: "Users", value: "1,247", change: "+8.1%", color: "#3B82F6", data: [120, 180, 200, 250, 300, 350, 420, 500, 580, 650, 800, 950] },
                  { label: "Conversion", value: "12.5%", change: "+2.1%", color: "#F59E0B", data: [5, 6, 7, 8, 9, 8, 10, 11, 12, 12, 12, 13] },
                  { label: "Growth", value: "+8.3%", change: "+0.7%", color: "#EC4899", data: [3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 8] },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="p-4 rounded-xl border border-foreground/10 bg-muted/20"
                  >
                    <div className="text-xs text-foreground/60 mb-1">{kpi.label}</div>
                    <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                    <div className="text-xs text-[#22C55E] mb-3">{kpi.change}</div>
                    <MiniBar values={kpi.data.slice(-6)} color={kpi.color} />
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-foreground/10 bg-muted/20 mb-4">
                <h3 className="text-sm font-semibold mb-4">Monthly Performance Overview</h3>
                <BarChartSVG
                  data={sampleMonths.map((m, i) => ({ label: m, value: sampleValues[i] }))}
                  color="#22C55E"
                  title=""
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-foreground/10 bg-muted/20">
                  <h3 className="text-sm font-semibold mb-3">Top Performers</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Product A", value: 45, color: "#22C55E" },
                      { name: "Product B", value: 32, color: "#3B82F6" },
                      { name: "Product C", value: 28, color: "#F59E0B" },
                      { name: "Product D", value: 21, color: "#EC4899" },
                      { name: "Product E", value: 15, color: "#8B5CF6" },
                    ].map((item) => {
                      const max = 45;
                      return (
                        <div key={item.name} className="flex items-center gap-3">
                          <span className="text-xs w-16 text-foreground/60">{item.name}</span>
                          <div className="flex-1 h-3 bg-muted/30 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${(item.value / max) * 100}%`,
                                backgroundColor: item.color,
                              }}
                            />
                          </div>
                          <span className="text-xs font-mono text-foreground/80 w-8 text-right">
                            {item.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-foreground/10 bg-muted/20">
                  <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: "Sheet updated", detail: "Revenue data refreshed", time: "2 min ago" },
                      { action: "Formula added", detail: "SUM in B12", time: "15 min ago" },
                      { action: "Chart created", detail: "Monthly bar chart", time: "1 hour ago" },
                      { action: "Script ran", detail: "Format Header executed", time: "2 hours ago" },
                      { action: "Data imported", detail: "sales-q1.csv", time: "3 hours ago" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium">{activity.action}</div>
                          <div className="text-xs text-foreground/50">{activity.detail}</div>
                        </div>
                        <div className="text-xs text-foreground/40 shrink-0">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-foreground/10 text-xs text-foreground/40">
                    Last updated: {new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
