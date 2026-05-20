import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Read translations.ts
const tsContent = fs.readFileSync(path.join(root, "src/lib/i18n/translations.ts"), "utf8");

function extractDict(text, varName) {
  const re = new RegExp(`export const ${varName}: Dict = \\{([\\s\\S]*?)\\};`);
  const match = text.match(re);
  if (!match) return {};
  const dict = {};
  const lineRe = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)",?/g;
  let m;
  while ((m = lineRe.exec(match[1])) !== null) {
    dict[m[1]] = m[2];
  }
  return dict;
}

const en = extractDict(tsContent, "en");
const bn = extractDict(tsContent, "bn");

// Read useLanguage.tsx (web-dev translations)
const wdContent = fs.readFileSync(
  path.join(root, "src/hooks/webdev/useLanguage.tsx"),
  "utf8"
);

function extractWdDict(text, varName) {
  const re = new RegExp(`${varName}:\\s*\\{([\\s\\S]*?)\\},`);
  const match = text.match(re);
  if (!match) return {};
  const dict = {};
  const lineRe = /"([^"]+)":\s*"((?:[^"\\]|\\.)*)",?/g;
  let m;
  while ((m = lineRe.exec(match[1])) !== null) {
    dict[m[1]] = m[2];
  }
  return dict;
}

const wdEn = extractWdDict(wdContent, "en");
const wdBn = extractWdDict(wdContent, "bn");

// Merge (web-dev overrides main for overlapping keys)
const mergedEn = { ...en, ...wdEn };
const mergedBn = { ...bn, ...wdBn };

// Write
const localesDir = path.join(root, "public/locales");
fs.mkdirSync(path.join(localesDir, "en"), { recursive: true });
fs.mkdirSync(path.join(localesDir, "bn"), { recursive: true });

fs.writeFileSync(
  path.join(localesDir, "en/common.json"),
  JSON.stringify(mergedEn, null, 2)
);
fs.writeFileSync(
  path.join(localesDir, "bn/common.json"),
  JSON.stringify(mergedBn, null, 2)
);

console.log("✅ en keys:", Object.keys(mergedEn).length);
console.log("✅ bn keys:", Object.keys(mergedBn).length);
console.log("✅ JSON files created in public/locales/");
