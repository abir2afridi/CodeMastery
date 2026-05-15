# CODEMASTERY — COLORS TRACK ADDITION

# Add Colors as a new track to the existing CodeMastery platform

# 50+ chapters · Complete web color theory · 140+ named colors · All color formats

# Reference: <https://www.w3schools.com/colors/colors_names.asp>

## OVERVIEW

Extend the existing CodeMastery platform by adding a comprehensive Web Colors learning track. This is NOT just a list of color names — it is a deep, complete course on everything about color in web development: color theory, all CSS color formats, all 140+ named HTML colors, accessibility and contrast, color psychology, palette generation, and practical design application.

This track is unique because EVERY lesson has an interactive color component. Students do not just read about colors — they SEE them, manipulate them, and use them in live code.

---

## COLORS COMPILER SETUP

The existing HTML/CSS/JS compiler is used for this track. Add a "Color Picker Panel" (unique to this track):

Build /components/compiler/ColorPickerPanel.tsx:

- Native color picker input (<input type="color">)
- Shows selected color in all formats simultaneously: Hex, RGB, HSL, OKLCH, named (if matches)
- "Copy Hex" "Copy RGB" "Copy HSL" buttons
- Complementary color swatch shown automatically
- Analogous, triadic, split-complementary swatches shown
- Contrast ratio checker: enter a background + foreground → shows WCAG AA/AAA pass/fail
- This panel docks to the right side of the compiler in Color track lessons

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/colors-curriculum.ts following existing interfaces.
Add "colors" to Track type union in types.ts.

Track metadata:

- id: "colors"
- title: "Web Colors"
- tagline: "From hex codes to harmony — master color for the web"
- icon: "🎨"
- color: "#E91E63"
- totalChapters: 50
- estimatedHours: 40

---

## SPECIAL LESSON COMPONENT — ColorSwatch

Build /components/lesson/ColorSwatch.tsx:

- Displays a color swatch with: visual colored box, color name, hex value, RGB value, HSL value
- Click the hex → copies to clipboard
- Hover → shows "Try in compiler" button
- Shows WCAG contrast ratio with white text and black text
- Recommends which text color to use on this background (auto-detected)

Build /components/lesson/ColorPaletteDemo.tsx:

- Shows a group of colors as a palette
- Used in harmony and palette chapters
- Export palette as CSS variables button
- Export as JSON button

---

## FULL CURRICULUM — 50 CHAPTERS

=== PART 1: UNDERSTANDING COLOR (Chapters 1–6) ===

Chapter 1: What Is Color? Physics, Vision, and the Web
Difficulty: Absolute Beginner | XP: 80 | Time: 25 min

1.1 — How Humans See Color
Light is electromagnetic radiation. The visible spectrum: 380nm (violet) to 700nm (red). Rods (brightness) vs cones (color — L/M/S for red/green/blue). Why screens use RGB: they simulate the three cone types. The brain constructs color perception — color is not a fixed physical property but a perceptual experience. Explain: why the same color looks different in different contexts (simultaneous contrast, color adaptation).

1.2 — How Screens Make Color
Screens use additive color mixing (RGB): Red + Green + Blue = White. No light = Black. Each pixel has three sub-pixels: Red, Green, Blue (examine a screen with a loupe). Each sub-pixel brightness: 0–255 (8-bit per channel = 24-bit true color = 16.7 million colors). sRGB color space — the standard for web. Display P3 — wider gamut on modern Apple/Samsung devices. Why web designers use sRGB: it's the guaranteed-safe gamut for all screens.

1.3 — Print vs Screen Color
Print uses CMYK (Cyan, Magenta, Yellow, Black) — subtractive mixing. Screen uses RGB — additive mixing. Why CMYK colors look different on screen. Why you cannot directly convert a print brand color to screen without adjustment. Pantone to hex conversion — not exact science.

1.4 — Color in CSS — The Five Formats
Preview of all five ways to specify color in CSS:

1. Named: color: red
2. Hex: color: #ff0000
3. RGB: color: rgb(255, 0, 0)
4. HSL: color: hsl(0, 100%, 50%)
5. OKLCH: color: oklch(0.63 0.26 29.23)
Each chapter will cover one format in depth. This chapter gives the big picture.

Chapter 2: Named Colors — All 140+ HTML Color Names
This is the most visual chapter in the entire platform. Every named color gets a ColorSwatch component showing the name, hex value, RGB value, and contrast scores.

Teach ALL 140 CSS named colors grouped by hue family:

RED FAMILY:
Red (#FF0000), DarkRed (#8B0000), Crimson (#DC143C), FireBrick (#B22222), IndianRed (#CD5C5C), LightCoral (#F08080), Salmon (#FA8072), DarkSalmon (#E9967A), LightSalmon (#FFA07A), Tomato (#FF6347), OrangeRed (#FF4500), Coral (#FF7F50)

PINK FAMILY:
Pink (#FFC0CB), LightPink (#FFB6C1), HotPink (#FF69B4), DeepPink (#FF1493), MediumVioletRed (#C71585), PaleVioletRed (#DB7093)

ORANGE FAMILY:
Orange (#FFA500), DarkOrange (#FF8C00), OrangeRed (#FF4500)

YELLOW FAMILY:
Yellow (#FFFF00), LightYellow (#FFFFE0), LemonChiffon (#FFFACD), LightGoldenrodYellow (#FAFAD2), PapayaWhip (#FFEFD5), Moccasin (#FFE4B5), PeachPuff (#FFDAB9), PaleGoldenrod (#EEE8AA), Khaki (#F0E68C), DarkKhaki (#BDB76B), Gold (#FFD700)

BROWN/EARTH FAMILY:
Cornsilk (#FFF8DC), BlanchedAlmond (#FFEBCD), Bisque (#FFE4C4), NavajoWhite (#FFDEAD), Wheat (#F5DEB3), BurlyWood (#DEB887), Tan (#D2B48C), RosyBrown (#BC8F8F), SandyBrown (#F4A460), Goldenrod (#DAA520), DarkGoldenrod (#B8860B), Peru (#CD853F), Chocolate (#D2691E), SaddleBrown (#8B4513), Sienna (#A0522D), Brown (#A52A2A), Maroon (#800000)

GREEN FAMILY:
GreenYellow (#ADFF2F), Chartreuse (#7FFF00), LawnGreen (#7CFC00), Lime (#00FF00), LimeGreen (#32CD32), PaleGreen (#98FB98), LightGreen (#90EE90), MediumSpringGreen (#00FA9A), SpringGreen (#00FF7F), MediumSeaGreen (#3CB371), SeaGreen (#2E8B57), ForestGreen (#228B22), Green (#008000), DarkGreen (#006400), YellowGreen (#9ACD32), OliveDrab (#6B8E23), Olive (#808000), DarkOliveGreen (#556B2F), MediumAquamarine (#66CDAA), DarkSeaGreen (#8FBC8F), LightSeaGreen (#20B2AA), DarkCyan (#008B8B), Teal (#008080)

CYAN/AQUA FAMILY:
Aqua (#00FFFF), Cyan (#00FFFF), LightCyan (#E0FFFF), PaleTurquoise (#AFEEEE), Aquamarine (#7FFFD4), Turquoise (#40E0D0), MediumTurquoise (#48D1CC), DarkTurquoise (#00CED1), CadetBlue (#5F9EA0), SteelBlue (#4682B4), LightSteelBlue (#B0C4DE), PowderBlue (#B0E0E6), LightBlue (#ADD8E6), SkyBlue (#87CEEB), LightSkyBlue (#87CEFA), DeepSkyBlue (#00BFFF), DodgerBlue (#1E90FF), CornflowerBlue (#6495ED), MediumSlateBlue (#7B68EE), RoyalBlue (#4169E1)

BLUE FAMILY:
Blue (#0000FF), MediumBlue (#0000CD), DarkBlue (#00008B), Navy (#000080), MidnightBlue (#191970)

PURPLE/VIOLET FAMILY:
Lavender (#E6E6FA), Thistle (#D8BFD8), Plum (#DDA0DD), Violet (#EE82EE), Orchid (#DA70D6), Fuchsia (#FF00FF), Magenta (#FF00FF), MediumOrchid (#BA55D3), MediumPurple (#9370DB), RebeccaPurple (#663399), BlueViolet (#8A2BE2), DarkViolet (#9400D3), DarkOrchid (#9932CC), DarkMagenta (#8B008B), Purple (#800080), Indigo (#4B0082), SlateBlue (#6A5ACD), DarkSlateBlue (#483D8B)

WHITE FAMILY:
White (#FFFFFF), Snow (#FFFAFA), Honeydew (#F0FFF0), MintCream (#F5FFFA), Azure (#F0FFFF), AliceBlue (#F0F8FF), GhostWhite (#F8F8FF), WhiteSmoke (#F5F5F5), Seashell (#FFF5EE), Beige (#F5F5DC), OldLace (#FDF5E6), FloralWhite (#FFFAF0), Ivory (#FFFFF0), AntiqueWhite (#FAEBD7), Linen (#FAF0E6), LavenderBlush (#FFF0F5), MistyRose (#FFE4E1)

GREY/BLACK FAMILY:
Gainsboro (#DCDCDC), LightGray (#D3D3D3), Silver (#C0C0C0), DarkGray (#A9A9A9), Gray (#808080), DimGray (#696969), LightSlateGray (#778899), SlateGray (#708090), DarkSlateGray (#2F4F4F), Black (#000000)

For EACH color — ColorSwatch component showing:

- Color name (correct spelling and capitalization)
- Hex value
- RGB value
- HSL value
- Visual swatch (large, clickable)
- WCAG contrast with white text + with black text
- Which text color is recommended on this background
- "Try in compiler" button

Chapter 3: Hex Colors — Complete Guide
Full chapter on hexadecimal color notation:

- What hexadecimal means (base-16 number system)
- #RRGGBB format — each pair is 0–255 in hex (00–FF)
- Shorthand: #RGB when each pair is same digit (#FF5500 = #F50)
- #RRGGBBAA — 8-digit hex with alpha channel (transparency)
- How to read a hex color: decode #1A2B3C step by step
- Converting decimal to hex and back (manual + CSS tools)
- Browser DevTools color picker and hex editing
- Hex color naming conventions in design systems

Chapter 4: RGB and RGBA Colors — Complete Guide

- rgb(R, G, B) — values 0–255 each
- rgba(R, G, B, A) — A is 0 (transparent) to 1 (opaque)
- Why rgba is needed: hex alpha is newer and less supported in older browsers
- Mixing colors with rgb values: understanding what combinations produce
- rgb() percentage values: rgb(100%, 0%, 50%)
- Relative color syntax (CSS Color Level 4): rgb(from red r g b / 50%) — adjust existing colors
- Creating color scales programmatically with rgb math

Chapter 5: HSL and HSLA Colors — Complete Guide

- hsl(Hue, Saturation%, Lightness%) — most human-intuitive color format
- Hue: 0–360 degrees on the color wheel (0=red, 120=green, 240=blue)
- Saturation: 0% (gray) to 100% (full color)
- Lightness: 0% (black) to 50% (normal) to 100% (white)
- Why HSL is better than RGB for design work: easy to create color variations
- Creating tints (increase L), shades (decrease L), tones (decrease S)
- Building monochromatic palettes with HSL
- hsla() with alpha channel
- CSS custom properties + HSL: the professional way to theme a site

Chapter 6: Modern Color Formats — OKLCH, LAB, Display-P3

- oklch(L C H) — perceptually uniform color space (CSS Color Level 4)
- Why OKLCH is the future: consistent perceived brightness across hues
- lab() and lch() — similar but OKLCH is more widely adopted
- color(display-p3 R G B) — wider gamut for modern screens
- @supports for color format fallbacks
- Browser support table for each format
- When to use OKLCH in production today (with fallbacks)

=== PART 2: COLOR THEORY (Chapters 7–16) ===

Chapter 7: The Color Wheel — Hue Relationships
Chapter 8: Color Temperature — Warm vs Cool Colors
Chapter 9: Tints, Shades, and Tones — Creating Variations
Chapter 10: Monochromatic Color Schemes
Chapter 11: Complementary Colors — Maximum Contrast
Chapter 12: Analogous Colors — Harmony and Calm
Chapter 13: Triadic Color Schemes — Vibrant Balance
Chapter 14: Split-Complementary Schemes
Chapter 15: Tetradic and Square Color Schemes
Chapter 16: Color Psychology — Emotion and Meaning

=== PART 3: COLOR ACCESSIBILITY (Chapters 17–22) ===

Chapter 17: WCAG Color Contrast Requirements

- WCAG 2.1 contrast ratios: AA (4.5:1 normal text, 3:1 large text), AAA (7:1)
- How to calculate contrast ratio (relative luminance formula)
- Tools: browser DevTools contrast checker, online tools
- Real examples: colors that FAIL vs PASS contrast checks

Chapter 18: Color Blindness — Types and Design Solutions

- Protanopia (red-weak), Deuteranopia (green-weak), Tritanopia (blue-weak)
- Monochromacy (full colorblindness)
- Percentage of population affected
- Design rules: never rely on color alone, use patterns/icons too
- Simulation tools (Chrome DevTools vision deficiency emulator)

Chapter 19: High Contrast Mode and Forced Colors
Chapter 20: Color and Typography Readability
Chapter 21: Dark Mode Color Strategies
Chapter 22: Accessible Color Palette Design

=== PART 4: PRACTICAL COLOR IN CSS (Chapters 23–36) ===

Chapter 23: CSS currentColor Keyword
Chapter 24: CSS Color Inheritance
Chapter 25: CSS Gradients and Color Stops
Chapter 26: CSS Color Mix — color-mix() Function (CSS Color Level 5)
Chapter 27: CSS Relative Colors — Modifying Existing Colors
Chapter 28: CSS Custom Properties for Color Systems
Chapter 29: Building a Design Token Color System
Chapter 30: Color in CSS Animations and Transitions
Chapter 31: Color in SVG
Chapter 32: Color in Canvas API
Chapter 33: Color Formats in Images (PNG transparency, WebP)
Chapter 34: Color in Box Shadows and Text Shadows
Chapter 35: Color in Gradients — Advanced Techniques
Chapter 36: Color in Filters (hue-rotate, saturate, etc.)

=== PART 5: COLOR SYSTEMS AND PALETTES (Chapters 37–44) ===

Chapter 37: Building a Brand Color Palette from Scratch
Chapter 38: Material Design Color System — All Palettes
Chapter 39: Tailwind CSS Color Palette — Complete Reference
Chapter 40: Open Color — Open Source Color System
Chapter 41: Color Naming Conventions in Design Systems
Chapter 42: Generating Color Scales Programmatically
Chapter 43: Color in Data Visualization — Categorical and Sequential
Chapter 44: Color Trends in Web Design (2024–2025)

=== PART 6: TOOLS AND ADVANCED (Chapters 45–50) ===

Chapter 45: Browser DevTools Color Tools
Chapter 46: Color Picker Tools — eyedropper API
Chapter 47: Color Contrast Checkers and Accessibility Auditing
Chapter 48: Extracting Colors from Images (Canvas API)
Chapter 49: Color in Variable Fonts and CSS
Chapter 50: Colors Mastery Recap + Certificate Prep

---

## NAMED COLORS DATA FILE

Build /lib/colors-data.ts — complete TypeScript data with ALL 140+ named colors:

```typescript
export interface NamedColor {
  name: string;          // "AliceBlue"
  hex: string;           // "#F0F8FF"
  rgb: [number, number, number];  // [240, 248, 255]
  hsl: [number, number, number];  // [208, 100, 97]
  family: string;        // "Blue"
  contrastWithWhite: number;  // WCAG contrast ratio
  contrastWithBlack: number;
  recommendedText: "white" | "black";
  description: string;   // When to use this color
}

export const NAMED_COLORS: NamedColor[] = [
  { name: "AliceBlue", hex: "#F0F8FF", rgb: [240,248,255], hsl: [208,100,97], family: "Blue", contrastWithWhite: 1.09, contrastWithBlack: 19.27, recommendedText: "black", description: "Very pale blue — great for subtle backgrounds, hover states" },
  { name: "AntiqueWhite", hex: "#FAEBD7", rgb: [250,235,215], hsl: [34,78,91], family: "White", contrastWithWhite: 1.17, contrastWithBlack: 17.9, recommendedText: "black", description: "Warm off-white — elegant for parchment or vintage aesthetics" },
  { name: "Aqua", hex: "#00FFFF", rgb: [0,255,255], hsl: [180,100,50], family: "Cyan", contrastWithWhite: 1.25, contrastWithBlack: 16.75, recommendedText: "black", description: "Bright cyan — same as Cyan, high energy, tropical feel" },
  { name: "Aquamarine", hex: "#7FFFD4", rgb: [127,255,212], hsl: [160,100,75], family: "Cyan", contrastWithWhite: 1.55, contrastWithBlack: 13.55, recommendedText: "black", description: "Light minty teal — fresh, spa-like, calming" },
  { name: "Azure", hex: "#F0FFFF", rgb: [240,255,255], hsl: [180,100,97], family: "White", contrastWithWhite: 1.08, contrastWithBlack: 19.44, recommendedText: "black", description: "Near-white with cyan tint — sky-like, clean, open" },
  { name: "Beige", hex: "#F5F5DC", rgb: [245,245,220], hsl: [60,56,91], family: "Brown", contrastWithWhite: 1.12, contrastWithBlack: 18.76, recommendedText: "black", description: "Warm neutral — classic, traditional, pairs well with earth tones" },
  { name: "Bisque", hex: "#FFE4C4", rgb: [255,228,196], hsl: [33,100,88], family: "Brown", contrastWithWhite: 1.25, contrastWithBlack: 16.75, recommendedText: "black", description: "Soft peachy-orange — warm, food-related, feminine" },
  { name: "Black", hex: "#000000", rgb: [0,0,0], hsl: [0,0,0], family: "Grey", contrastWithWhite: 21, contrastWithBlack: 1, recommendedText: "white", description: "Maximum contrast — elegant, powerful, versatile" },
  { name: "BlanchedAlmond", hex: "#FFEBCD", rgb: [255,235,205], hsl: [36,100,90], family: "Brown", contrastWithWhite: 1.18, contrastWithBlack: 17.83, recommendedText: "black", description: "Warm cream — soft, gentle, approachable" },
  { name: "Blue", hex: "#0000FF", rgb: [0,0,255], hsl: [240,100,50], family: "Blue", contrastWithWhite: 2.44, contrastWithBlack: 8.59, recommendedText: "white", description: "Pure blue — trust, stability, technology — most popular web color" },
  { name: "BlueViolet", hex: "#8A2BE2", rgb: [138,43,226], hsl: [271,76,53], family: "Purple", contrastWithWhite: 5.11, contrastWithBlack: 4.11, recommendedText: "white", description: "Electric purple-blue — creative, mysterious, vibrant" },
  { name: "Brown", hex: "#A52A2A", rgb: [165,42,42], hsl: [0,59,41], family: "Brown", contrastWithWhite: 7.35, contrastWithBlack: 2.86, recommendedText: "white", description: "Classic brown — earthy, natural, reliable" },
  { name: "BurlyWood", hex: "#DEB887", rgb: [222,184,135], hsl: [34,57,70], family: "Brown", contrastWithWhite: 2.03, contrastWithBlack: 10.35, recommendedText: "black", description: "Sandy tan — wood-like, natural, warm" },
  { name: "CadetBlue", hex: "#5F9EA0", rgb: [95,158,160], hsl: [182,25,50], family: "Cyan", contrastWithWhite: 3.83, contrastWithBlack: 5.49, recommendedText: "white", description: "Muted teal — professional, calm, nautical" },
  { name: "Chartreuse", hex: "#7FFF00", rgb: [127,255,0], hsl: [90,100,50], family: "Green", contrastWithWhite: 1.62, contrastWithBlack: 12.97, recommendedText: "black", description: "Electric yellow-green — energetic, nature, sporty" },
  { name: "Chocolate", hex: "#D2691E", rgb: [210,105,30], hsl: [25,75,47], family: "Brown", contrastWithWhite: 4.48, contrastWithBlack: 4.69, recommendedText: "white", description: "Rich warm brown — food, warmth, indulgence" },
  { name: "Coral", hex: "#FF7F50", rgb: [255,127,80], hsl: [16,100,66], family: "Red", contrastWithWhite: 2.55, contrastWithBlack: 8.24, recommendedText: "white", description: "Warm orange-pink — tropical, friendly, summer" },
  { name: "CornflowerBlue", hex: "#6495ED", rgb: [100,149,237], hsl: [219,79,66], family: "Blue", contrastWithWhite: 2.74, contrastWithBlack: 7.68, recommendedText: "white", description: "Medium periwinkle blue — approachable, clear, classic" },
  { name: "Cornsilk", hex: "#FFF8DC", rgb: [255,248,220], hsl: [48,100,93], family: "White", contrastWithWhite: 1.06, contrastWithBlack: 19.7, recommendedText: "black", description: "Very pale yellow — warm white, elegant, gentle" },
  { name: "Crimson", hex: "#DC143C", rgb: [220,20,60], hsl: [348,83,47], family: "Red", contrastWithWhite: 5.86, contrastWithBlack: 3.58, recommendedText: "white", description: "Deep vivid red — passion, danger, bold statements" },
  { name: "Cyan", hex: "#00FFFF", rgb: [0,255,255], hsl: [180,100,50], family: "Cyan", contrastWithWhite: 1.25, contrastWithBlack: 16.75, recommendedText: "black", description: "Bright cyan — same as Aqua, tech-forward, vibrant" },
  { name: "DarkBlue", hex: "#00008B", rgb: [0,0,139], hsl: [240,100,27], family: "Blue", contrastWithWhite: 13.4, contrastWithBlack: 1.57, recommendedText: "white", description: "Very dark blue — authority, depth, formal" },
  { name: "DarkCyan", hex: "#008B8B", rgb: [0,139,139], hsl: [180,100,27], family: "Cyan", contrastWithWhite: 6.38, contrastWithBlack: 3.29, recommendedText: "white", description: "Deep teal — sophisticated, aquatic, professional" },
  { name: "DarkGoldenrod", hex: "#B8860B", rgb: [184,134,11], hsl: [43,89,38], family: "Brown", contrastWithWhite: 6.71, contrastWithBlack: 3.13, recommendedText: "white", description: "Rich amber-gold — luxurious, historic, warm" },
  { name: "DarkGray", hex: "#A9A9A9", rgb: [169,169,169], hsl: [0,0,66], family: "Grey", contrastWithWhite: 2.47, contrastWithBlack: 8.49, recommendedText: "black", description: "Medium-dark grey — subtle, neutral, professional" },
  { name: "DarkGreen", hex: "#006400", rgb: [0,100,0], hsl: [120,100,20], family: "Green", contrastWithWhite: 10.5, contrastWithBlack: 2, recommendedText: "white", description: "Forest green — nature, ecology, growth" },
  { name: "DarkKhaki", hex: "#BDB76B", rgb: [189,183,107], hsl: [56,38,58], family: "Brown", contrastWithWhite: 2.75, contrastWithBlack: 7.63, recommendedText: "black", description: "Muted olive yellow — military, earthy, understated" },
  { name: "DarkMagenta", hex: "#8B008B", rgb: [139,0,139], hsl: [300,100,27], family: "Purple", contrastWithWhite: 8.48, contrastWithBlack: 2.48, recommendedText: "white", description: "Deep purple-red — creative, dramatic, bold" },
  { name: "DarkOliveGreen", hex: "#556B2F", rgb: [85,107,47], hsl: [82,39,30], family: "Green", contrastWithWhite: 9.36, contrastWithBlack: 2.24, recommendedText: "white", description: "Dark muted green — military, natural, sophisticated" },
  { name: "DarkOrange", hex: "#FF8C00", rgb: [255,140,0], hsl: [33,100,50], family: "Orange", contrastWithWhite: 2.26, contrastWithBlack: 9.29, recommendedText: "black", description: "Deep amber orange — energetic, autumn, warmth" },
  { name: "DarkOrchid", hex: "#9932CC", rgb: [153,50,204], hsl: [280,61,50], family: "Purple", contrastWithWhite: 6.26, contrastWithBlack: 3.35, recommendedText: "white", description: "Vivid purple — creative, mystical, floral" },
  { name: "DarkRed", hex: "#8B0000", rgb: [139,0,0], hsl: [0,100,27], family: "Red", contrastWithWhite: 10.4, contrastWithBlack: 2.02, recommendedText: "white", description: "Deep blood red — danger, intensity, power" },
  { name: "DarkSalmon", hex: "#E9967A", rgb: [233,150,122], hsl: [15,72,70], family: "Red", contrastWithWhite: 2.12, contrastWithBlack: 9.93, recommendedText: "black", description: "Muted coral pink — warm, gentle, feminine" },
  { name: "DarkSeaGreen", hex: "#8FBC8F", rgb: [143,188,143], hsl: [120,25,65], family: "Green", contrastWithWhite: 2.47, contrastWithBlack: 8.51, recommendedText: "black", description: "Muted green — natural, calm, balanced" },
  { name: "DarkSlateBlue", hex: "#483D8B", rgb: [72,61,139], hsl: [248,39,39], family: "Purple", contrastWithWhite: 10.68, contrastWithBlack: 1.97, recommendedText: "white", description: "Dark blue-purple — deep, mysterious, elegant" },
  { name: "DarkSlateGray", hex: "#2F4F4F", rgb: [47,79,79], hsl: [180,25,25], family: "Grey", contrastWithWhite: 11.97, contrastWithBlack: 1.75, recommendedText: "white", description: "Very dark teal-grey — strong, sophisticated, moody" },
  { name: "DarkTurquoise", hex: "#00CED1", rgb: [0,206,209], hsl: [181,100,41], family: "Cyan", contrastWithWhite: 2.43, contrastWithBlack: 8.64, recommendedText: "black", description: "Bright deep teal — aquatic, vibrant, modern" },
  { name: "DarkViolet", hex: "#9400D3", rgb: [148,0,211], hsl: [282,100,41], family: "Purple", contrastWithWhite: 7.53, contrastWithBlack: 2.79, recommendedText: "white", description: "Pure dark violet — royal, spiritual, creative" },
  { name: "DeepPink", hex: "#FF1493", rgb: [255,20,147], hsl: [328,100,54], family: "Pink", contrastWithWhite: 3.51, contrastWithBlack: 5.98, recommendedText: "white", description: "Hot neon pink — bold, youthful, playful" },
  { name: "DeepSkyBlue", hex: "#00BFFF", rgb: [0,191,255], hsl: [195,100,50], family: "Blue", contrastWithWhite: 1.97, contrastWithBlack: 10.65, recommendedText: "black", description: "Vivid sky blue — clear, optimistic, digital" },
  { name: "DimGray", hex: "#696969", rgb: [105,105,105], hsl: [0,0,41], family: "Grey", contrastWithWhite: 5.74, contrastWithBlack: 3.66, recommendedText: "white", description: "Medium dim grey — neutral, subdued, text-friendly" },
  { name: "DodgerBlue", hex: "#1E90FF", rgb: [30,144,255], hsl: [210,100,56], family: "Blue", contrastWithWhite: 3.08, contrastWithBlack: 6.82, recommendedText: "white", description: "Vivid cornflower blue — links, CTAs, sporty" },
  { name: "FireBrick", hex: "#B22222", rgb: [178,34,34], hsl: [0,68,42], family: "Red", contrastWithWhite: 7.44, contrastWithBlack: 2.82, recommendedText: "white", description: "Deep brick red — strong, traditional, heritage" },
  { name: "FloralWhite", hex: "#FFFAF0", rgb: [255,250,240], hsl: [40,100,97], family: "White", contrastWithWhite: 1.04, contrastWithBlack: 20.08, recommendedText: "black", description: "Warm white with floral tint — vintage, elegant, soft" },
  { name: "ForestGreen", hex: "#228B22", rgb: [34,139,34], hsl: [120,61,34], family: "Green", contrastWithWhite: 6.99, contrastWithBlack: 3, recommendedText: "white", description: "Rich forest green — nature, eco-friendly, organic" },
  { name: "Fuchsia", hex: "#FF00FF", rgb: [255,0,255], hsl: [300,100,50], family: "Purple", contrastWithWhite: 3.14, contrastWithBlack: 6.68, recommendedText: "white", description: "Electric pink-purple — bold, vibrant, fashion-forward" },
  { name: "Gainsboro", hex: "#DCDCDC", rgb: [220,220,220], hsl: [0,0,86], family: "Grey", contrastWithWhite: 1.35, contrastWithBlack: 15.54, recommendedText: "black", description: "Very light grey — subtle borders, disabled states" },
  { name: "GhostWhite", hex: "#F8F8FF", rgb: [248,248,255], hsl: [240,100,99], family: "White", contrastWithWhite: 1.02, contrastWithBlack: 20.64, recommendedText: "black", description: "Near-white with blue tint — clean, digital, airy" },
  { name: "Gold", hex: "#FFD700", rgb: [255,215,0], hsl: [51,100,50], family: "Yellow", contrastWithWhite: 1.73, contrastWithBlack: 12.18, recommendedText: "black", description: "Pure gold — luxury, achievement, success" },
  { name: "Goldenrod", hex: "#DAA520", rgb: [218,165,32], hsl: [43,74,49], family: "Brown", contrastWithWhite: 3.13, contrastWithBlack: 6.71, recommendedText: "black", description: "Warm golden yellow — harvest, autumn, warmth" },
  { name: "Gray", hex: "#808080", rgb: [128,128,128], hsl: [0,0,50], family: "Grey", contrastWithWhite: 3.95, contrastWithBlack: 5.32, recommendedText: "white", description: "True medium grey — neutral, balanced, professional" },
  { name: "Green", hex: "#008000", rgb: [0,128,0], hsl: [120,100,25], family: "Green", contrastWithWhite: 8.59, contrastWithBlack: 2.44, recommendedText: "white", description: "Standard web green — nature, success, go/confirm" },
  { name: "GreenYellow", hex: "#ADFF2F", rgb: [173,255,47], hsl: [84,100,59], family: "Green", contrastWithWhite: 1.42, contrastWithBlack: 14.77, recommendedText: "black", description: "Electric lime — energetic, sporty, futuristic" },
  { name: "Honeydew", hex: "#F0FFF0", rgb: [240,255,240], hsl: [120,100,97], family: "White", contrastWithWhite: 1.06, contrastWithBlack: 19.71, recommendedText: "black", description: "Pale mint white — clean, fresh, natural" },
  { name: "HotPink", hex: "#FF69B4", rgb: [255,105,180], hsl: [330,100,71], family: "Pink", contrastWithWhite: 1.94, contrastWithBlack: 10.82, recommendedText: "black", description: "Vivid warm pink — playful, feminine, energetic" },
  { name: "IndianRed", hex: "#CD5C5C", rgb: [205,92,92], hsl: [0,53,58], family: "Red", contrastWithWhite: 3.88, contrastWithBlack: 5.42, recommendedText: "white", description: "Muted terracotta red — earthen, warm, vintage" },
  { name: "Indigo", hex: "#4B0082", rgb: [75,0,130], hsl: [275,100,25], family: "Purple", contrastWithWhite: 15.27, contrastWithBlack: 1.38, recommendedText: "white", description: "Deep blue-purple — spiritual, mysterious, cosmic" },
  { name: "Ivory", hex: "#FFFFF0", rgb: [255,255,240], hsl: [60,100,97], family: "White", contrastWithWhite: 1.04, contrastWithBlack: 20.13, recommendedText: "black", description: "Warm near-white — classic, elegant, formal" },
  { name: "Khaki", hex: "#F0E68C", rgb: [240,230,140], hsl: [54,77,75], family: "Brown", contrastWithWhite: 1.68, contrastWithBlack: 12.5, recommendedText: "black", description: "Warm pale yellow — military, natural, casual" },
  { name: "Lavender", hex: "#E6E6FA", rgb: [230,230,250], hsl: [240,67,94], family: "Purple", contrastWithWhite: 1.17, contrastWithBlack: 17.96, recommendedText: "black", description: "Pale purple — gentle, romantic, calming" },
  { name: "LavenderBlush", hex: "#FFF0F5", rgb: [255,240,245], hsl: [340,100,97], family: "White", contrastWithWhite: 1.07, contrastWithBlack: 19.56, recommendedText: "black", description: "Very pale pink-white — delicate, feminine, soft" },
  { name: "LawnGreen", hex: "#7CFC00", rgb: [124,252,0], hsl: [90,100,49], family: "Green", contrastWithWhite: 1.63, contrastWithBlack: 12.9, recommendedText: "black", description: "Bright grass green — fresh, natural, bold" },
  { name: "LemonChiffon", hex: "#FFFACD", rgb: [255,250,205], hsl: [54,100,90], family: "Yellow", contrastWithWhite: 1.09, contrastWithBlack: 19.27, recommendedText: "black", description: "Very pale yellow — soft, light, cheerful" },
  { name: "LightBlue", hex: "#ADD8E6", rgb: [173,216,230], hsl: [195,53,79], family: "Blue", contrastWithWhite: 1.71, contrastWithBlack: 12.3, recommendedText: "black", description: "Pale sky blue — airy, calm, baby-like" },
  { name: "LightCoral", hex: "#F08080", rgb: [240,128,128], hsl: [0,79,72], family: "Red", contrastWithWhite: 2.38, contrastWithBlack: 8.84, recommendedText: "black", description: "Soft coral red — warm, gentle, feminine" },
  { name: "LightCyan", hex: "#E0FFFF", rgb: [224,255,255], hsl: [180,100,94], family: "Cyan", contrastWithWhite: 1.11, contrastWithBlack: 18.95, recommendedText: "black", description: "Very pale cyan — clean, spa-like, minimal" },
  { name: "LightGoldenrodYellow", hex: "#FAFAD2", rgb: [250,250,210], hsl: [60,80,90], family: "Yellow", contrastWithWhite: 1.13, contrastWithBlack: 18.62, recommendedText: "black", description: "Pale warm yellow — gentle highlight, subtle warmth" },
  { name: "LightGray", hex: "#D3D3D3", rgb: [211,211,211], hsl: [0,0,83], family: "Grey", contrastWithWhite: 1.53, contrastWithBlack: 13.73, recommendedText: "black", description: "Light neutral grey — backgrounds, borders, disabled" },
  { name: "LightGreen", hex: "#90EE90", rgb: [144,238,144], hsl: [120,73,75], family: "Green", contrastWithWhite: 1.86, contrastWithBlack: 11.29, recommendedText: "black", description: "Soft bright green — success, nature, spring" },
  { name: "LightPink", hex: "#FFB6C1", rgb: [255,182,193], hsl: [351,100,86], family: "Pink", contrastWithWhite: 1.48, contrastWithBlack: 14.21, recommendedText: "black", description: "Soft pale pink — gentle, feminine, romantic" },
  { name: "LightSalmon", hex: "#FFA07A", rgb: [255,160,122], hsl: [17,100,74], family: "Red", contrastWithWhite: 2.04, contrastWithBlack: 10.29, recommendedText: "black", description: "Pale warm orange — friendly, food, approachable" },
  { name: "LightSeaGreen", hex: "#20B2AA", rgb: [32,178,170], hsl: [177,70,41], family: "Cyan", contrastWithWhite: 3.96, contrastWithBlack: 5.31, recommendedText: "white", description: "Medium teal — aquatic, fresh, professional" },
  { name: "LightSkyBlue", hex: "#87CEFA", rgb: [135,206,250], hsl: [203,92,75], family: "Blue", contrastWithWhite: 1.82, contrastWithBlack: 11.52, recommendedText: "black", description: "Bright sky blue — open, optimistic, summer" },
  { name: "LightSlateGray", hex: "#778899", rgb: [119,136,153], hsl: [210,14,53], family: "Grey", contrastWithWhite: 3.53, contrastWithBlack: 5.96, recommendedText: "white", description: "Blue-toned grey — tech, corporate, modern" },
  { name: "LightSteelBlue", hex: "#B0C4DE", rgb: [176,196,222], hsl: [214,41,78], family: "Blue", contrastWithWhite: 1.79, contrastWithBlack: 11.75, recommendedText: "black", description: "Muted periwinkle — soft, professional, calm" },
  { name: "LightYellow", hex: "#FFFFE0", rgb: [255,255,224], hsl: [60,100,94], family: "Yellow", contrastWithWhite: 1.06, contrastWithBlack: 19.69, recommendedText: "black", description: "Near-white yellow — barely there warmth" },
  { name: "Lime", hex: "#00FF00", rgb: [0,255,0], hsl: [120,100,50], family: "Green", contrastWithWhite: 1.37, contrastWithBlack: 15.3, recommendedText: "black", description: "Electric pure green — high energy, gaming, tech" },
  { name: "LimeGreen", hex: "#32CD32", rgb: [50,205,50], hsl: [120,61,50], family: "Green", contrastWithWhite: 2.1, contrastWithBlack: 10, recommendedText: "black", description: "Vivid lime — fresh, active, eco" },
  { name: "Linen", hex: "#FAF0E6", rgb: [250,240,230], hsl: [30,67,94], family: "White", contrastWithWhite: 1.08, contrastWithBlack: 19.42, recommendedText: "black", description: "Warm fabric white — cozy, natural, artisan" },
  { name: "Magenta", hex: "#FF00FF", rgb: [255,0,255], hsl: [300,100,50], family: "Purple", contrastWithWhite: 3.14, contrastWithBlack: 6.68, recommendedText: "white", description: "Pure magenta — same as Fuchsia, bold, creative" },
  { name: "Maroon", hex: "#800000", rgb: [128,0,0], hsl: [0,100,25], family: "Brown", contrastWithWhite: 11.96, contrastWithBlack: 1.76, recommendedText: "white", description: "Dark brownish red — heritage, academic, serious" },
  { name: "MediumAquamarine", hex: "#66CDAA", rgb: [102,205,170], hsl: [160,51,60], family: "Cyan", contrastWithWhite: 2.34, contrastWithBlack: 8.98, recommendedText: "black", description: "Medium minty teal — balanced, natural, refreshing" },
  { name: "MediumBlue", hex: "#0000CD", rgb: [0,0,205], hsl: [240,100,40], family: "Blue", contrastWithWhite: 7.03, contrastWithBlack: 2.99, recommendedText: "white", description: "Strong medium blue — bold, direct, confident" },
  { name: "MediumOrchid", hex: "#BA55D3", rgb: [186,85,211], hsl: [288,59,58], family: "Purple", contrastWithWhite: 4.55, contrastWithBlack: 4.62, recommendedText: "white", description: "Bright purple — creative, fun, vibrant" },
  { name: "MediumPurple", hex: "#9370DB", rgb: [147,112,219], hsl: [260,60,65], family: "Purple", contrastWithWhite: 3.65, contrastWithBlack: 5.76, recommendedText: "white", description: "Soft medium purple — approachable, whimsical" },
  { name: "MediumSeaGreen", hex: "#3CB371", rgb: [60,179,113], hsl: [147,50,47], family: "Green", contrastWithWhite: 3.6, contrastWithBlack: 5.83, recommendedText: "white", description: "Medium earthy green — balanced, natural, healthy" },
  { name: "MediumSlateBlue", hex: "#7B68EE", rgb: [123,104,238], hsl: [249,80,67], family: "Purple", contrastWithWhite: 3.54, contrastWithBlack: 5.94, recommendedText: "white", description: "Soft violet-blue — creative tools, accents" },
  { name: "MediumSpringGreen", hex: "#00FA9A", rgb: [0,250,154], hsl: [157,100,49], family: "Green", contrastWithWhite: 1.56, contrastWithBlack: 13.48, recommendedText: "black", description: "Bright spring green — vibrant, nature, energy" },
  { name: "MediumTurquoise", hex: "#48D1CC", rgb: [72,209,204], hsl: [178,60,55], family: "Cyan", contrastWithWhite: 2.17, contrastWithBlack: 9.68, recommendedText: "black", description: "Vivid teal — spa, aquatic, modern" },
  { name: "MediumVioletRed", hex: "#C71585", rgb: [199,21,133], hsl: [322,81,43], family: "Pink", contrastWithWhite: 6.42, contrastWithBlack: 3.27, recommendedText: "white", description: "Deep magenta-red — passionate, artistic, dramatic" },
  { name: "MidnightBlue", hex: "#191970", rgb: [25,25,112], hsl: [240,64,27], family: "Blue", contrastWithWhite: 14.11, contrastWithBlack: 1.49, recommendedText: "white", description: "Very dark navy — night sky, elegant, formal" },
  { name: "MintCream", hex: "#F5FFFA", rgb: [245,255,250], hsl: [150,100,98], family: "White", contrastWithWhite: 1.03, contrastWithBlack: 20.45, recommendedText: "black", description: "Near-white mint — fresh, clean, health-focused" },
  { name: "MistyRose", hex: "#FFE4E1", rgb: [255,228,225], hsl: [6,100,94], family: "White", contrastWithWhite: 1.18, contrastWithBlack: 17.84, recommendedText: "black", description: "Very pale pink — soft, gentle, romantic" },
  { name: "Moccasin", hex: "#FFE4B5", rgb: [255,228,181], hsl: [38,100,86], family: "Brown", contrastWithWhite: 1.25, contrastWithBlack: 16.76, recommendedText: "black", description: "Pale tan — warm, neutral, skin-toned" },
  { name: "NavajoWhite", hex: "#FFDEAD", rgb: [255,222,173], hsl: [36,100,84], family: "Brown", contrastWithWhite: 1.31, contrastWithBlack: 16.05, recommendedText: "black", description: "Warm pale orange — neutral, natural, earthy" },
  { name: "Navy", hex: "#000080", rgb: [0,0,128], hsl: [240,100,25], family: "Blue", contrastWithWhite: 15.06, contrastWithBlack: 1.39, recommendedText: "white", description: "Classic dark navy — traditional, trustworthy, nautical" },
  { name: "OldLace", hex: "#FDF5E6", rgb: [253,245,230], hsl: [39,85,95], family: "White", contrastWithWhite: 1.07, contrastWithBlack: 19.55, recommendedText: "black", description: "Antique warm white — vintage, classic, nostalgic" },
  { name: "Olive", hex: "#808000", rgb: [128,128,0], hsl: [60,100,25], family: "Brown", contrastWithWhite: 9.08, contrastWithBlack: 2.31, recommendedText: "white", description: "Dark yellow-green — military, earthy, sophisticated" },
  { name: "OliveDrab", hex: "#6B8E23", rgb: [107,142,35], hsl: [80,60,35], family: "Green", contrastWithWhite: 6.09, contrastWithBlack: 3.45, recommendedText: "white", description: "Military olive — rugged, outdoorsy, natural" },
  { name: "Orange", hex: "#FFA500", rgb: [255,165,0], hsl: [39,100,50], family: "Orange", contrastWithWhite: 2.32, contrastWithBlack: 9.05, recommendedText: "black", description: "Pure orange — energy, creativity, call-to-action" },
  { name: "OrangeRed", hex: "#FF4500", rgb: [255,69,0], hsl: [16,100,50], family: "Red", contrastWithWhite: 3.56, contrastWithBlack: 5.9, recommendedText: "white", description: "Vivid red-orange — urgent, hot, powerful" },
  { name: "Orchid", hex: "#DA70D6", rgb: [218,112,214], hsl: [302,59,65], family: "Purple", contrastWithWhite: 2.77, contrastWithBlack: 7.59, recommendedText: "black", description: "Soft violet-pink — floral, feminine, delicate" },
  { name: "PaleGoldenrod", hex: "#EEE8AA", rgb: [238,232,170], hsl: [55,67,80], family: "Brown", contrastWithWhite: 1.43, contrastWithBlack: 14.67, recommendedText: "black", description: "Pale warm yellow — antique, gentle, warm" },
  { name: "PaleGreen", hex: "#98FB98", rgb: [152,251,152], hsl: [120,93,79], family: "Green", contrastWithWhite: 1.63, contrastWithBlack: 12.89, recommendedText: "black", description: "Very pale green — soft, healthy, spring" },
  { name: "PaleTurquoise", hex: "#AFEEEE", rgb: [175,238,238], hsl: [180,65,81], family: "Cyan", contrastWithWhite: 1.55, contrastWithBlack: 13.55, recommendedText: "black", description: "Pale aqua — serene, clean, tropical" },
  { name: "PaleVioletRed", hex: "#DB7093", rgb: [219,112,147], hsl: [340,60,65], family: "Pink", contrastWithWhite: 3.04, contrastWithBlack: 6.91, recommendedText: "white", description: "Muted dusty rose — romantic, vintage, feminine" },
  { name: "PapayaWhip", hex: "#FFEFD5", rgb: [255,239,213], hsl: [37,100,92], family: "White", contrastWithWhite: 1.14, contrastWithBlack: 18.42, recommendedText: "black", description: "Warm cream-orange — tropical, soft, friendly" },
  { name: "PeachPuff", hex: "#FFDAB9", rgb: [255,218,185], hsl: [28,100,86], family: "Brown", contrastWithWhite: 1.32, contrastWithBlack: 15.9, recommendedText: "black", description: "Soft peach — warm, gentle, skin-toned" },
  { name: "Peru", hex: "#CD853F", rgb: [205,133,63], hsl: [30,59,53], family: "Brown", contrastWithWhite: 3.85, contrastWithBlack: 5.46, recommendedText: "white", description: "Warm medium brown — earthy, authentic, rustic" },
  { name: "Pink", hex: "#FFC0CB", rgb: [255,192,203], hsl: [350,100,88], family: "Pink", contrastWithWhite: 1.35, contrastWithBlack: 15.57, recommendedText: "black", description: "Classic pink — feminine, soft, friendly" },
  { name: "Plum", hex: "#DDA0DD", rgb: [221,160,221], hsl: [300,47,75], family: "Purple", contrastWithWhite: 2.07, contrastWithBlack: 10.14, recommendedText: "black", description: "Soft muted purple — vintage, floral, gentle" },
  { name: "PowderBlue", hex: "#B0E0E6", rgb: [176,224,230], hsl: [187,52,80], family: "Blue", contrastWithWhite: 1.63, contrastWithBlack: 12.89, recommendedText: "black", description: "Pale sky blue — clean, airy, delicate" },
  { name: "Purple", hex: "#800080", rgb: [128,0,128], hsl: [300,100,25], family: "Purple", contrastWithWhite: 10.16, contrastWithBlack: 2.07, recommendedText: "white", description: "Classic purple — royalty, luxury, creativity" },
  { name: "RebeccaPurple", hex: "#663399", rgb: [102,51,153], hsl: [270,50,40], family: "Purple", contrastWithWhite: 8.44, contrastWithBlack: 2.49, recommendedText: "white", description: "Named for Eric Meyer's daughter — meaningful, medium purple" },
  { name: "Red", hex: "#FF0000", rgb: [255,0,0], hsl: [0,100,50], family: "Red", contrastWithWhite: 3.99, contrastWithBlack: 5.26, recommendedText: "white", description: "Pure red — attention, danger, passion, stop" },
  { name: "RosyBrown", hex: "#BC8F8F", rgb: [188,143,143], hsl: [0,25,65], family: "Brown", contrastWithWhite: 2.9, contrastWithBlack: 7.24, recommendedText: "black", description: "Dusty rose — vintage, muted, warm" },
  { name: "RoyalBlue", hex: "#4169E1", rgb: [65,105,225], hsl: [225,73,57], family: "Blue", contrastWithWhite: 5.12, contrastWithBlack: 4.1, recommendedText: "white", description: "Rich royal blue — prestigious, trustworthy, classic" },
  { name: "SaddleBrown", hex: "#8B4513", rgb: [139,69,19], hsl: [25,76,31], family: "Brown", contrastWithWhite: 9.13, contrastWithBlack: 2.3, recommendedText: "white", description: "Deep leather brown — rustic, western, natural" },
  { name: "Salmon", hex: "#FA8072", rgb: [250,128,114], hsl: [6,93,71], family: "Red", contrastWithWhite: 2.59, contrastWithBlack: 8.1, recommendedText: "black", description: "Warm orange-pink — friendly, food, approachable" },
  { name: "SandyBrown", hex: "#F4A460", rgb: [244,164,96], hsl: [28,87,67], family: "Brown", contrastWithWhite: 2.31, contrastWithBlack: 9.1, recommendedText: "black", description: "Warm sandy tan — beach, casual, warm" },
  { name: "SeaGreen", hex: "#2E8B57", rgb: [46,139,87], hsl: [146,50,36], family: "Green", contrastWithWhite: 6.38, contrastWithBlack: 3.29, recommendedText: "white", description: "Deep sea green — aquatic, nature, balanced" },
  { name: "Seashell", hex: "#FFF5EE", rgb: [255,245,238], hsl: [25,100,97], family: "White", contrastWithWhite: 1.06, contrastWithBlack: 19.71, recommendedText: "black", description: "Warm near-white — coastal, gentle, natural" },
  { name: "Sienna", hex: "#A0522D", rgb: [160,82,45], hsl: [19,56,40], family: "Brown", contrastWithWhite: 7.59, contrastWithBlack: 2.77, recommendedText: "white", description: "Earthy red-brown — terracotta, rustic, warm" },
  { name: "Silver", hex: "#C0C0C0", rgb: [192,192,192], hsl: [0,0,75], family: "Grey", contrastWithWhite: 1.77, contrastWithBlack: 11.86, recommendedText: "black", description: "Classic silver — metallic, modern, neutral" },
  { name: "SkyBlue", hex: "#87CEEB", rgb: [135,206,235], hsl: [197,71,73], family: "Blue", contrastWithWhite: 1.97, contrastWithBlack: 10.65, recommendedText: "black", description: "Clear sky blue — open, fresh, optimistic" },
  { name: "SlateBlue", hex: "#6A5ACD", rgb: [106,90,205], hsl: [248,53,58], family: "Purple", contrastWithWhite: 5.55, contrastWithBlack: 3.78, recommendedText: "white", description: "Medium blue-purple — creative, digital, vibrant" },
  { name: "SlateGray", hex: "#708090", rgb: [112,128,144], hsl: [210,13,50], family: "Grey", contrastWithWhite: 4.23, contrastWithBlack: 4.97, recommendedText: "white", description: "Blue-grey — corporate, tech, subdued" },
  { name: "Snow", hex: "#FFFAFA", rgb: [255,250,250], hsl: [0,100,99], family: "White", contrastWithWhite: 1.01, contrastWithBlack: 20.7, recommendedText: "black", description: "Pure white with pink tint — clean, winter, minimal" },
  { name: "SpringGreen", hex: "#00FF7F", rgb: [0,255,127], hsl: [150,100,50], family: "Green", contrastWithWhite: 1.54, contrastWithBlack: 13.67, recommendedText: "black", description: "Electric spring green — vibrant, natural, fresh" },
  { name: "SteelBlue", hex: "#4682B4", rgb: [70,130,180], hsl: [207,44,49], family: "Blue", contrastWithWhite: 4.48, contrastWithBlack: 4.69, recommendedText: "white", description: "Professional steel blue — corporate, reliable, tech" },
  { name: "Tan", hex: "#D2B48C", rgb: [210,180,140], hsl: [34,44,69], family: "Brown", contrastWithWhite: 2.32, contrastWithBlack: 9.05, recommendedText: "black", description: "Light warm brown — natural, neutral, casual" },
  { name: "Teal", hex: "#008080", rgb: [0,128,128], hsl: [180,100,25], family: "Cyan", contrastWithWhite: 9.03, contrastWithBlack: 2.32, recommendedText: "white", description: "Classic teal — balanced, professional, calming" },
  { name: "Thistle", hex: "#D8BFD8", rgb: [216,191,216], hsl: [300,24,80], family: "Purple", contrastWithWhite: 1.68, contrastWithBlack: 12.52, recommendedText: "black", description: "Pale grey-purple — gentle, whimsical, floral" },
  { name: "Tomato", hex: "#FF6347", rgb: [255,99,71], hsl: [9,100,64], family: "Red", contrastWithWhite: 3.04, contrastWithBlack: 6.91, recommendedText: "white", description: "Vivid red-orange — food, warmth, friendly" },
  { name: "Turquoise", hex: "#40E0D0", rgb: [64,224,208], hsl: [174,72,56], family: "Cyan", contrastWithWhite: 2.08, contrastWithBlack: 10.07, recommendedText: "black", description: "Bright aqua — tropical, gem-like, fresh" },
  { name: "Violet", hex: "#EE82EE", rgb: [238,130,238], hsl: [300,76,72], family: "Purple", contrastWithWhite: 2.61, contrastWithBlack: 8.04, recommendedText: "black", description: "Soft bright violet — floral, feminine, light" },
  { name: "Wheat", hex: "#F5DEB3", rgb: [245,222,179], hsl: [39,77,83], family: "Brown", contrastWithWhite: 1.44, contrastWithBlack: 14.55, recommendedText: "black", description: "Warm pale tan — harvest, natural, gentle" },
  { name: "White", hex: "#FFFFFF", rgb: [255,255,255], hsl: [0,0,100], family: "White", contrastWithWhite: 1, contrastWithBlack: 21, recommendedText: "black", description: "Pure white — clean, minimal, spacious" },
  { name: "WhiteSmoke", hex: "#F5F5F5", rgb: [245,245,245], hsl: [0,0,96], family: "White", contrastWithWhite: 1.1, contrastWithBlack: 19.05, recommendedText: "black", description: "Off-white grey — subtle background, clean, modern" },
  { name: "Yellow", hex: "#FFFF00", rgb: [255,255,0], hsl: [60,100,50], family: "Yellow", contrastWithWhite: 1.07, contrastWithBlack: 19.56, recommendedText: "black", description: "Pure yellow — attention, optimism, caution" },
  { name: "YellowGreen", hex: "#9ACD32", rgb: [154,205,50], hsl: [80,61,50], family: "Green", contrastWithWhite: 2.93, contrastWithBlack: 7.16, recommendedText: "black", description: "Vivid lime-green — fresh, sporty, natural" },
];
```

---

## INTERACTIVE COLOR TOOLS IN LESSONS

Build these unique interactive components for the Colors track:

1. /components/colors/ColorWheel.tsx — SVG color wheel, click any hue to see HSL value
2. /components/colors/ContrastChecker.tsx — input two colors, shows WCAG ratio + pass/fail
3. /components/colors/PaletteGenerator.tsx — input a base color, generates complementary/analogous/triadic palettes
4. /components/colors/ColorBlindnessSimulator.tsx — shows color through 4 types of color blindness
5. /components/colors/NamedColorsExplorer.tsx — searchable, filterable grid of all 140+ named colors
6. /components/colors/GradientBuilder.tsx — pick colors, preview gradient, get CSS code
7. /components/colors/ColorFormatConverter.tsx — type any format, converts to all others instantly

These tools are embedded directly in the relevant lesson chapters — not just standalone tools.

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any chapter
- Every named color: full ColorSwatch with hex, RGB, HSL, contrast scores, and use case description
- ALL 140+ named colors covered in Chapter 2 — not a single one missing
- Interactive color components in EVERY relevant lesson
- All WCAG contrast ratios calculated correctly using the luminance formula
- Every quiz: 8+ questions — many include actual color swatches rendered in the question
- Every chapter: 3 exercises — exercises involve writing real CSS with colors
- Certificate issues after all 50 chapters + all quizzes ≥80%
- Track color: #E91E63 (vivid pink — represents the full spectrum)
- Track icon: color wheel SVG or rainbow gradient circle
