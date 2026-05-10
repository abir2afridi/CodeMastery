import type { Chapter } from "./types";

export const jsCh11: Chapter = {
  id: "js-ch-11",
  number: 11,
  title: "Numbers & Math",
  subtitle: "Why 0.1 + 0.2 ≠ 0.3, and how to do real math in JavaScript.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["js-ch-10"],
  partLabel: "Part 2: Working With Data",
  learningObjectives: [
    "Understand JavaScript's single Number type and its IEEE 754 limits.",
    "Use the Math object for common operations (round, floor, ceil, random, etc.).",
    "Avoid and fix floating-point precision bugs.",
    "Format numbers for display with Intl.NumberFormat.",
    "Know when to reach for BigInt.",
  ],
  sections: [
    {
      id: "js11-s1",
      title: "One Number Type to Rule Them All",
      whyItMatters: "Most languages have separate int, float, double, decimal types. JavaScript has just `number`. This simplicity is liberating — and occasionally treacherous.",
      realWorldAnalogy: "JavaScript numbers are like a measuring tape with limited precision. For most everyday measurements it's perfect. But measure a hair's width and you'll see rounding errors.",
      content: `Every numeric value in JavaScript — integers, decimals, negatives — uses the same type: \`number\`. Under the hood, every number is a 64-bit IEEE 754 double-precision float (the same format used by most languages for "double").

\`\`\`
typeof 42         // 'number'
typeof 3.14       // 'number'
typeof -0.001     // 'number'
typeof 1e10       // 'number'  (10,000,000,000)
typeof 0xff       // 'number'  (255 in hex)
typeof 0b1010     // 'number'  (10 in binary)
typeof 0o17       // 'number'  (15 in octal)
\`\`\`

The 64-bit format gives you:

- **Safe integer range**: -(2^53 − 1) to 2^53 − 1. That's about ±9 quadrillion. \`Number.MAX_SAFE_INTEGER\` is 9_007_199_254_740_991. Above that, integers lose precision.
- **Decimal precision**: about 15–17 significant digits. \`0.1 + 0.2 === 0.30000000000000004\`. This isn't a JavaScript bug — it's how binary floating point works in every language.
- **Special values**: \`Infinity\`, \`-Infinity\`, and \`NaN\` (Not a Number).

Numeric literals can use underscores as visual separators: \`1_000_000\` is identical to \`1000000\` — much easier to read.

The three special values you'll hit:

\`\`\`
1 / 0         // Infinity
-1 / 0        // -Infinity
0 / 0         // NaN
"hello" * 2   // NaN
\`\`\`

\`NaN\` is famously the only value in JavaScript that is **not equal to itself**: \`NaN === NaN\` is \`false\`. Use \`Number.isNaN(value)\` to check, or \`Number.isFinite(value)\` to check for "real" finite numbers.`,
      callouts: [
        { type: "warning", title: "isNaN vs Number.isNaN", content: "The global isNaN() coerces its argument: isNaN('foo') is true (because 'foo' becomes NaN). Number.isNaN('foo') is false (because 'foo' isn't actually NaN). Always prefer Number.isNaN." },
      ],
    },
    {
      id: "js11-s2",
      title: "Floating-Point Hell (and How to Survive)",
      whyItMatters: "Every developer hits this within their first month. Add tax to a price, get $9.999999998. Sum a column of decimals, get the wrong total. Knowing the cause and the workaround is essential.",
      content: `Run this in any browser console:

\`\`\`
0.1 + 0.2
// 0.30000000000000004
\`\`\`

This isn't a JS bug. It happens in Python, Java, C, Swift — every language using IEEE 754 floats. The reason: 0.1 in binary is an infinite repeating fraction, just like 1/3 in decimal is 0.3333... The computer rounds it, and tiny errors compound during arithmetic.

**Common pitfalls:**

\`\`\`
0.1 + 0.2 === 0.3        // false!
(0.1 + 0.2).toFixed(2)   // '0.30'  (string, looks right but check the type)
0.1 * 0.2                // 0.020000000000000004
\`\`\`

**Strategies:**

1. **For display only** — \`toFixed(n)\` returns a string with n decimal places.
   \`(0.1 + 0.2).toFixed(2)  // '0.30'\`
   But it returns a *string*, and rounding can be surprising for negative numbers. Don't use it for math.

2. **For comparison** — use a small epsilon (tolerance):
   \`Math.abs(a - b) < Number.EPSILON\` for very small numbers, or \`< 1e-9\` for typical use.
   \`Math.abs(0.1 + 0.2 - 0.3) < 1e-9  // true\`

3. **For money — use integer cents.** Never store \`9.99\`, store \`999\`. Do all math in cents, then divide by 100 (and format) only at display time. Banks and payment processors do this.

\`\`\`
const priceInCents = 999;        // $9.99
const taxInCents = Math.round(priceInCents * 0.0875);  // 87
const totalCents = priceInCents + taxInCents;          // 1086
const display = (totalCents / 100).toFixed(2);          // '10.86'
\`\`\`

4. **For arbitrary precision** — use a library like \`decimal.js\` or \`big.js\`. Or use \`BigInt\` (covered in section 4) for whole numbers larger than 2^53.

The pattern: **never compare floats with === and never use floats for money**.`,
      codeExamples: [
        {
          id: "js11-s2-ex1",
          title: "See floating-point in action",
          description: "Open the console panel below to see real outputs.",
          code: {
            html: `<p>Open the console</p>`,
            javascript: `console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3);
console.log("Tolerant compare:", Math.abs(0.1 + 0.2 - 0.3) < 1e-9);

// The right way for money — work in cents
const priceCents = 1999;        // $19.99
const taxRate = 0.0875;
const tax = Math.round(priceCents * taxRate);
const total = priceCents + tax;
console.log("Price: $" + (priceCents / 100).toFixed(2));
console.log("Tax:   $" + (tax / 100).toFixed(2));
console.log("Total: $" + (total / 100).toFixed(2));`,
          },
          explanation: "First two logs show the classic precision bug. Third log shows the tolerant comparison. The bottom block shows the integer-cents pattern used by every real payment system.",
          tryItPrompt: "Change the price and tax rate. Notice the totals always come out to exactly two decimals — no floating-point garbage.",
        },
      ],
    },
    {
      id: "js11-s3",
      title: "The Math Object — Your Toolbox",
      whyItMatters: "Math is a built-in object full of useful methods. Knowing what's available saves you from reinventing the wheel.",
      content: `\`Math\` is a global object — not a constructor, you don't \`new Math()\`. Just call its static methods.

**Rounding:**
\`\`\`
Math.round(4.5)     // 5  (rounds .5 UP)
Math.round(-4.5)    // -4 (rounds toward +Infinity, not away from zero!)
Math.floor(4.9)     // 4
Math.ceil(4.1)      // 5
Math.trunc(4.9)     // 4   (drops the decimal — like floor for positives, ceil for negatives)
Math.trunc(-4.9)    // -4
\`\`\`

**Min, max, abs:**
\`\`\`
Math.max(3, 1, 7)              // 7
Math.min(3, 1, 7)              // 1
Math.max(...[3, 1, 7])         // 7  (spread an array)
Math.abs(-5)                   // 5
\`\`\`

**Powers and roots:**
\`\`\`
Math.pow(2, 10)     // 1024  (or use 2 ** 10 — modern preferred)
Math.sqrt(16)       // 4
Math.cbrt(27)       // 3
\`\`\`

**Random:** \`Math.random()\` returns a number in \`[0, 1)\` — 0 is possible, 1 is not.

\`\`\`
// Random integer between min and max INCLUSIVE
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randInt(1, 6);  // 1, 2, 3, 4, 5, or 6 (a die roll)
\`\`\`

**Logarithms and trig:**
\`Math.log(x)\` (natural log), \`Math.log10\`, \`Math.log2\`, \`Math.sin\`, \`Math.cos\`, \`Math.tan\` (radians, not degrees), \`Math.atan2(y, x)\` (the version that handles all quadrants).

**Constants:**
\`Math.PI\`, \`Math.E\`, \`Math.SQRT2\`, etc.`,
      callouts: [
        { type: "common-mistake", title: "Math.random() is not cryptographic", content: "It's predictable — never use for passwords, tokens, security. Use crypto.getRandomValues() for security-sensitive randomness." },
        { type: "pro-tip", title: "** beats Math.pow", content: "2 ** 10 is identical to Math.pow(2, 10) but shorter. Modern JS prefers the operator." },
      ],
    },
    {
      id: "js11-s4",
      title: "Formatting Numbers and BigInt",
      whyItMatters: "Showing '1000000' vs '1,000,000' vs '1.000.000' (German) is the difference between an amateur app and a professional one. JS has world-class formatting built in.",
      content: `**Intl.NumberFormat** is the right way to display numbers — it handles locale, currency, and more, with no library needed.

\`\`\`
new Intl.NumberFormat('en-US').format(1234567.89);
// '1,234,567.89'

new Intl.NumberFormat('de-DE').format(1234567.89);
// '1.234.567,89'

new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(9.5);
// '$9.50'

new Intl.NumberFormat('en-US', { style: 'percent' }).format(0.875);
// '87%'

new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(3.14159);
// '3.14'
\`\`\`

**Parsing strings into numbers:**

\`\`\`
Number("42")        // 42
Number("3.14")      // 3.14
Number("hello")     // NaN
Number("")          // 0  (yes, really)
Number("  10  ")    // 10 (whitespace trimmed)

parseInt("42px")    // 42  (stops at first non-digit)
parseInt("0x10")    // 16  (auto-detects hex)
parseInt("10", 2)   // 2   (binary — second arg is the radix, ALWAYS pass it)

parseFloat("3.14abc")  // 3.14
\`\`\`

\`Number()\` is strict: any garbage = NaN. \`parseInt\`/\`parseFloat\` are lenient: they parse what they can and stop.

**BigInt** — for whole numbers larger than \`Number.MAX_SAFE_INTEGER\` (about 9 quadrillion).

\`\`\`
const huge = 9007199254740993n;       // suffix n makes it BigInt
const alsoHuge = BigInt("9007199254740993");
huge + 1n        // 9007199254740994n   — exact!
huge + 1         // TypeError: cannot mix BigInt and Number
\`\`\`

When you need it: cryptography, large IDs from databases (Twitter snowflake IDs), high-precision arithmetic. When you don't: 99% of business apps. \`Number\` is fine for any value you'd see in a normal app.`,
      callouts: [
        { type: "pro-tip", title: "Always pass radix to parseInt", content: "parseInt('08') used to return 0 in old browsers (interpreted as octal). Always: parseInt(str, 10) for decimal." },
      ],
      microExercise: {
        instruction: "Format the number 1234567.891 as US currency (USD) and log the result.",
        starterCode: { html: "<p>Console</p>", javascript: "// use Intl.NumberFormat" },
        hint: `new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(...)`,
        solution: { html: "<p>Console</p>", javascript: `console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1234567.891));` },
      },
    },
  ],
  exercises: [
    {
      id: "js11-ex1",
      title: "Random dice roll",
      difficulty: 1,
      description: "Write a function rollDie() that returns a random integer 1–6 inclusive. Log 10 rolls.",
      requirements: ["Function returns 1, 2, 3, 4, 5, or 6", "Use Math.random and Math.floor", "Log 10 results"],
      starterCode: { html: "<p>Open console</p>", javascript: "// rollDie()" },
      hints: ["Math.random() is [0,1)", "Multiply by 6, floor, then add 1", "Loop 10 times to log"],
      solution: { html: "<p>Open console</p>", javascript: `function rollDie() {\n  return Math.floor(Math.random() * 6) + 1;\n}\nfor (let i = 0; i < 10; i++) console.log(rollDie());` },
      solutionExplanation: "Math.random() * 6 gives [0, 6). Math.floor brings it to integers 0–5. Adding 1 shifts to 1–6.",
    },
    {
      id: "js11-ex2",
      title: "Money math — checkout total",
      difficulty: 2,
      description: "Calculate a checkout total using integer cents to avoid floating-point bugs. Items: $1.99, $4.50, $0.75. Tax: 8.75%. Output the formatted total.",
      requirements: ["Store all amounts as integer cents", "Use Math.round on tax", "Format output as USD currency string"],
      starterCode: { html: "<p>Open console</p>", javascript: "// compute and log total" },
      hints: ["Multiply each price by 100 to get cents", "Sum first, then add tax", "Use Intl.NumberFormat for the final display"],
      solution: { html: "<p>Open console</p>", javascript: `const items = [199, 450, 75];\nconst subtotal = items.reduce((a, b) => a + b, 0);\nconst tax = Math.round(subtotal * 0.0875);\nconst total = subtotal + tax;\nconst usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nconsole.log('Subtotal:', usd.format(subtotal / 100));\nconsole.log('Tax:     ', usd.format(tax / 100));\nconsole.log('Total:   ', usd.format(total / 100));` },
      solutionExplanation: "All math happens in integer cents — no float drift. Only the final display divides by 100 and uses Intl.NumberFormat for proper currency formatting.",
    },
    {
      id: "js11-ex3",
      title: "Tolerant float comparison",
      difficulty: 2,
      description: "Write a function isClose(a, b, tolerance = 1e-9) that returns true if a and b are within tolerance of each other. Use it to check 0.1 + 0.2 vs 0.3.",
      requirements: ["Default tolerance of 1e-9", "Returns boolean", "Demonstrate it returning true for 0.1 + 0.2 vs 0.3"],
      starterCode: { html: "<p>Console</p>", javascript: "// isClose(a, b, tolerance)" },
      hints: ["Math.abs gives absolute value", "Compare diff to tolerance"],
      solution: { html: "<p>Console</p>", javascript: `function isClose(a, b, tolerance = 1e-9) {\n  return Math.abs(a - b) < tolerance;\n}\nconsole.log("0.1 + 0.2 === 0.3?", 0.1 + 0.2 === 0.3);\nconsole.log("isClose(0.1+0.2, 0.3)?", isClose(0.1 + 0.2, 0.3));` },
      solutionExplanation: "Direct === comparison fails. The tolerant comparison passes — the difference is far below 1e-9.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js11-q1", type: "code-output", question: "What does this print?", code: "console.log(0.1 + 0.2);", options: ["0.3", "0.30000000000000004", "0.30", "Error"], correctAnswer: 1, explanation: "Floating-point precision error — 0.1 in binary is an infinite repeating fraction.", difficulty: 2 },
      { id: "js11-q2", type: "true-false", question: "NaN === NaN is true in JavaScript.", options: ["True", "False"], correctAnswer: 1, explanation: "NaN is the only value not equal to itself. Use Number.isNaN to check.", difficulty: 2 },
      { id: "js11-q3", type: "mcq", question: "Best way to handle money in JS?", options: ["Use floats and round at display", "Store all amounts as integer cents and divide by 100 at display", "Use strings", "Use BigInt for everything"], correctAnswer: 1, explanation: "Integer cents avoid all floating-point drift — the standard pattern in real payment systems.", difficulty: 2 },
      { id: "js11-q4", type: "code-output", question: "What does Math.round(-4.5) return?", code: "Math.round(-4.5)", options: ["-5", "-4", "5", "NaN"], correctAnswer: 1, explanation: "Math.round rounds toward +Infinity, not away from zero. -4.5 rounds to -4, not -5.", difficulty: 3 },
      { id: "js11-q5", type: "mcq", question: "What range does Math.random() return?", options: ["[0, 1] inclusive", "[0, 1) — 0 possible, 1 not", "(0, 1] — 1 possible, 0 not", "Any number"], correctAnswer: 1, explanation: "Math.random() returns >= 0 and < 1.", difficulty: 2 },
      { id: "js11-q6", type: "mcq", question: "Why prefer Number.isNaN over global isNaN?", options: ["Faster", "Number.isNaN doesn't coerce — global isNaN('foo') is true (coerced to NaN), but Number.isNaN('foo') is false", "isNaN is deprecated", "No difference"], correctAnswer: 1, explanation: "Number.isNaN checks the value is exactly NaN. Global isNaN coerces and lies about strings.", difficulty: 3 },
      { id: "js11-q7", type: "mcq", question: "When do you need BigInt?", options: ["Always for any number", "When working with whole numbers larger than Number.MAX_SAFE_INTEGER (~9 quadrillion)", "For any decimal", "Never — Number is enough"], correctAnswer: 1, explanation: "BigInt is for huge integers. Number handles decimals; BigInt only handles whole numbers.", difficulty: 2 },
      { id: "js11-q8", type: "code-output", question: "What does this print?", code: "console.log(parseInt('42px'));", options: ["NaN", "42", "'42'", "Error"], correctAnswer: 1, explanation: "parseInt is lenient — parses leading digits and stops at the first non-digit.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Type", value: "All numbers are 64-bit IEEE 754 floats" },
    { label: "Safe int", value: "Number.MAX_SAFE_INTEGER ≈ 9.007e15" },
    { label: "Special", value: "Infinity, -Infinity, NaN" },
    { label: "Check NaN", value: "Number.isNaN(x)" },
    { label: "Round", value: "Math.round / floor / ceil / trunc" },
    { label: "Power", value: "2 ** 10 (preferred over Math.pow)" },
    { label: "Random int", value: "Math.floor(Math.random() * range) + min" },
    { label: "Format $", value: "new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)" },
    { label: "Money rule", value: "Use integer cents, divide by 100 only at display" },
    { label: "BigInt", value: "9007199254740993n (suffix n)" },
  ],
};
