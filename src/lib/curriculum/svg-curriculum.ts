import { Track } from './types';

export const svgTrack: Track = {
  id: "svg",
  title: "SVG",
  titleBn: "এসভিজি",
  tagline: "Master scalable vector graphics and interactive visual systems",
  taglineBn: "স্কেলেবল ভেক্টর গ্রাফিক্স এবং ইন্টারঅ্যাকটিভ ভিজ্যুয়াল সিস্টেম আয়ত্ত করুন",
  icon: "https://img.icons8.com/?size=160&id=41283&format=png",
  colorVar: "svg",
  brandColor: "#06B6D4",
  glowColor: "rgba(6, 182, 212, 0.3)",
  totalChapters: 60,
  estimatedHours: 90,
  chapters: [
    // ============ PART 1: SVG FOUNDATIONS (CHAPTERS 1-10) ============
    {
      id: "svg-1",
      number: 1,
      partLabel: "Part 1: SVG Foundations",
      title: "What Is SVG?",
      subtitle: "Understanding scalable vector graphics",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 55,
      prerequisites: [],
      learningObjectives: ["Understand SVG as vector format", "Know SVG vs raster differences", "See browser-native advantages", "Identify SVG use cases"],
      sections: [
        {
          id: "s1",
          title: "Vector Graphics Overview",
          whyItMatters: "SVG is the standard vector format for the web — resolution-independent, scriptable, and styleable with CSS.",
          content: "SVG (Scalable Vector Graphics) is an XML-based vector image format for the web. Unlike raster images (PNG, JPG) that use pixels, SVG uses mathematical paths and shapes.\n\nKey Advantages:\n- Resolution-independent (looks sharp at any size)\n- Small file sizes for many graphics\n- Scriptable with JavaScript\n- Styleable with CSS\n- Animatable (SMIL, CSS, JS)\n- Accessible (text content inside)\n\n```svg\n<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#06B6D4\" />\n</svg>\n```\n\nKey Takeaways:\n- SVG is XML-based, can be edited in any text editor\n- Scales infinitely without quality loss\n- Part of the HTML5 specification — no plugins needed",
          codeExamples: [
            {
              id: "ex1",
              title: "First SVG",
              description: "Create a simple SVG circle",
              code: { svg: "<svg viewBox=\"0 0 100 100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#06B6D4\" />\n</svg>" },
              explanation: "This creates a cyan circle centered at (50,50) with radius 40."
            }
          ]
        },
        {
          id: "s2",
          title: "SVG vs Raster Images",
          whyItMatters: "Choosing the right image format affects performance, quality, and developer experience.",
          content: "Raster images (PNG, JPG, GIF) store color values for each pixel. When you scale them up, they blur or pixelate because the browser must interpolate missing pixels.\n\nSVG stores mathematical instructions — draw a line from point A to B, fill a circle with radius R at center (x,y). Since these are equations, they calculate cleanly at any scale.\n\n```svg\n<svg viewBox=\"0 0 100 100\">\n  <polygon points=\"50,5 61,38 97,38 68,59 77,92 50,72 23,92 32,59 3,38 39,38\" fill=\"#FFD700\" stroke=\"#DAA520\" stroke-width=\"2\" />\n</svg>\n```\n\nWhen to use SVG: logos, icons, illustrations, charts, maps, UI elements\nWhen to use raster: photographs, complex textures, scanned images"
        }
      ],
      quiz: {
        questions: [
          { id: "svg-q1", type: "mcq", question: "What does SVG stand for?", options: ["Scalable Vector Graphics", "Simple Visual Graphics", "Standard Vector Grid", "Scalable Virtual Graphic"], correctAnswer: 0, explanation: "SVG stands for Scalable Vector Graphics — an XML-based vector image format.", difficulty: 1 },
          { id: "svg-q2", type: "true-false", question: "SVG files are resolution-dependent.", correctAnswer: false, explanation: "SVG is resolution-independent because it uses mathematical paths not pixels.", difficulty: 1 },
          { id: "svg-q3", type: "mcq", question: "Which format is best for a logo that needs to display at multiple sizes?", options: ["JPG", "PNG", "SVG", "GIF"], correctAnswer: 2, explanation: "SVG scales infinitely without quality loss, making it ideal for logos.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "SVG", value: "XML-based vector graphics for web" },
        { label: "ViewBox", value: "Defines the coordinate system" },
        { label: "Vector", value: "Resolution-independent graphics" }
      ]
    },
    {
      id: "svg-2",
      number: 2,
      partLabel: "Part 1: SVG Foundations",
      title: "Vector vs Raster Graphics",
      subtitle: "Resolution, file size, and when to use each",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 35,
      xpReward: 50,
      prerequisites: ["svg-1"],
      learningObjectives: ["Understand resolution independence", "Compare file size characteristics", "Choose appropriate format for each use case"],
      sections: [
        {
          id: "s1",
          title: "Resolution Independence",
          whyItMatters: "Understanding resolution independence helps you decide when vectors save time and when rasters are necessary.",
          content: "Vector graphics are described by mathematical equations. A vector circle is stored as: center (x, y) and radius (r). When rendered at any size, the browser computes the equation for the new dimensions. The result is always sharp.\n\nRaster graphics store a fixed grid of colored pixels. A 100x100 pixel image has exactly 10,000 color values. To display it at 200x200, the browser must guess the missing 30,000 pixels (interpolation), causing blur.\n\n```svg\n<svg viewBox=\"0 0 200 200\">\n  <circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"url(#grad)\" />\n  <defs>\n    <radialGradient id=\"grad\">\n      <stop offset=\"0%\" stop-color=\"#06B6D4\"/>\n      <stop offset=\"100%\" stop-color=\"#0891B2\"/>\n    </radialGradient>\n  </defs>\n</svg>\n```"
        },
        {
          id: "s2",
          title: "File Size Comparison",
          whyItMatters: "File size affects page load time and bandwidth costs.",
          content: "For simple graphics, SVG file sizes are dramatically smaller than PNG. A simple icon as:\n- SVG: ~200 bytes (text, compresses well with gzip)\n- PNG 100x100: ~3KB (binary, already compressed)\n- PNG 200x200: ~8KB (4x the pixels)\n\nFor complex graphics (like detailed maps with thousands of shapes), SVG files can become larger than optimized raster images. Always test both approaches."
        },
        {
          id: "s3",
          title: "When to Use Each Format",
          whyItMatters: "Making the right choice prevents performance issues and ensures visual quality.",
          content: "Use SVG when: logos and icons, illustrations and diagrams, charts and data visualization, maps and floor plans, UI elements, animations and interactive graphics, any graphic that needs multiple sizes.\n\nUse Raster (PNG/WebP) when: photographs, complex textures or gradients with noise, scanned documents, medical imagery, when the source material is already raster."
        }
      ],
      quiz: {
        questions: [
          { id: "svg2-q1", type: "mcq", question: "What happens when you scale a raster image beyond its original size?", options: ["It stays sharp", "It becomes blurry or pixelated", "It gets smaller", "The file size decreases"], correctAnswer: 1, explanation: "Raster images pixelate when scaled up because the browser must guess missing pixels.", difficulty: 1 },
          { id: "svg2-q2", type: "true-false", question: "Photographs are best stored as SVG.", correctAnswer: false, explanation: "Photographs have complex color data better suited to raster formats like WebP or JPG.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Vector", value: "Mathematical paths, resolution-independent" },
        { label: "Raster", value: "Pixel grid, resolution-dependent" },
        { label: "Use SVG", value: "Logos, icons, charts, UI elements" }
      ]
    },
    {
      id: "svg-3",
      number: 3,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Syntax Basics",
      subtitle: "XML syntax, tags, attributes, and self-closing elements",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 60,
      prerequisites: ["svg-1"],
      learningObjectives: ["Write valid SVG XML syntax", "Understand SVG root element attributes", "Use self-closing tags correctly"],
      sections: [
        {
          id: "s1",
          title: "XML Syntax in SVG",
          whyItMatters: "SVG is XML — understanding the syntax rules prevents rendering errors.",
          content: "SVG follows XML syntax rules. Every opening tag must close, attributes must be quoted, and elements must nest properly.\n\n```svg\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n  <rect x=\"20\" y=\"20\" width=\"160\" height=\"160\" fill=\"#06B6D4\" />\n  <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"#FFD700\" />\n</svg>\n```\n\nKey XML rules: all tags must close, attribute values need quotes, tag names are case-sensitive, elements must not overlap, xmlns namespace is required."
        },
        {
          id: "s2",
          title: "SVG Root Element Attributes",
          whyItMatters: "The root element defines the coordinate space and behavior of your graphic.",
          content: "The root svg element has important attributes: xmlns (XML namespace), viewBox (coordinate system), width/height (display dimensions), preserveAspectRatio (scaling behavior), role and aria-label (accessibility)."
        },
        {
          id: "s3",
          title: "Self-Closing and Container Tags",
          whyItMatters: "Knowing which elements self-close vs contain children avoids syntax errors.",
          content: "Self-closing elements: rect, circle, ellipse, line, path, polygon, polyline, use, image, stop.\n\nContainer elements: svg, g, defs, clipPath, mask, pattern, linearGradient, radialGradient, filter, symbol, a, text.\n\nAlways use <element /> for self-closing tags."
        }
      ],
      quiz: {
        questions: [
          { id: "svg3-q1", type: "mcq", question: "What does xmlns stand for in SVG?", options: ["XML Namespace", "XML Name System", "Extended Markup Language Namespace", "XHTML Markup Language"], correctAnswer: 0, explanation: "xmlns declares the XML namespace, required for standalone SVG files.", difficulty: 1 },
          { id: "svg3-q2", type: "true-false", question: "SVG tags can be uppercase or lowercase.", correctAnswer: false, explanation: "SVG element names are case-sensitive. Standard elements use lowercase.", difficulty: 2 },
          { id: "svg3-q3", type: "mcq", question: "Which is a self-closing SVG element?", options: ["<text>", "<g>", "<rect>", "<defs>"], correctAnswer: 2, explanation: "Rect is a shape element that cannot contain children, so it self-closes.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "xmlns", value: "XML namespace for SVG" },
        { label: "viewBox", value: "Defines internal coordinate system" },
        { label: "Self-closing", value: "<rect />, <circle />, <path />" }
      ]
    },
    {
      id: "svg-4",
      number: 4,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Coordinate Systems",
      subtitle: "Origin, axes, and positioning elements",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 55,
      prerequisites: ["svg-3"],
      learningObjectives: ["Understand the SVG coordinate origin", "Position elements using x, y, cx, cy", "Comprehend coordinate transformations"],
      sections: [
        {
          id: "s1",
          title: "Understanding the SVG Grid",
          whyItMatters: "SVG's coordinate system differs from traditional math graphs — mastery prevents positioning errors.",
          content: "SVG uses a coordinate system where:\n- Origin (0,0) is at the TOP-LEFT corner\n- X increases to the RIGHT\n- Y increases DOWNWARD (opposite of math graphs)\n\n```svg\n<svg viewBox=\"0 0 200 200\">\n  <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=\"red\" opacity=\"0.5\" />\n  <rect x=\"100\" y=\"50\" width=\"80\" height=\"60\" fill=\"#06B6D4\" />\n</svg>\n```\n\nCommon positioning: rect (x, y, width, height), circle (cx, cy, r), ellipse (cx, cy, rx, ry), line (x1, y1, x2, y2), text (x, y)."
        },
        {
          id: "s2",
          title: "ViewBox and User Coordinates",
          whyItMatters: "ViewBox lets you redefine the coordinate system independently of display size.",
          content: "The viewBox attribute maps a user-defined coordinate system to the SVG's display dimensions. This decouples drawing coordinates from pixel dimensions.\n\nviewBox=\"0 0 100 100\" on a 400x400 SVG means coordinates 0-100 map to the full display area. No viewBox: SVG uses element width/height as coordinates."
        }
      ],
      quiz: {
        questions: [
          { id: "svg4-q1", type: "mcq", question: "Where is the origin (0,0) in SVG coordinate system?", options: ["Bottom-left", "Top-left", "Center", "Bottom-right"], correctAnswer: 1, explanation: "SVG origin is at the top-left corner, with Y increasing downward.", difficulty: 1 },
          { id: "svg4-q2", type: "true-false", question: "In SVG, Y values increase as you move upward.", correctAnswer: false, explanation: "Y increases downward, opposite of traditional math graphs.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Origin", value: "Top-left (0,0)" },
        { label: "Y axis", value: "Increases downward" },
        { label: "cx/cy", value: "Circle and ellipse center point" }
      ]
    },
    {
      id: "svg-5",
      number: 5,
      partLabel: "Part 1: SVG Foundations",
      title: "Width, Height, and ViewBox",
      subtitle: "Understanding viewBox, scaling, and preserveAspectRatio",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 50,
      xpReward: 65,
      prerequisites: ["svg-4"],
      learningObjectives: ["Configure SVG dimensions correctly", "Master viewBox coordinate mapping", "Use preserveAspectRatio options"],
      sections: [
        {
          id: "s1",
          title: "How SVG Dimensions Work",
          whyItMatters: "Width, height, and viewBox interact to control rendering — getting this right is essential for responsive SVG.",
          content: "The width and height attributes control the display size. The viewBox controls the internal coordinate system. Scaling formula: display pixel = coordinate / viewBox dimension * element dimension."
        },
        {
          id: "s2",
          title: "preserveAspectRatio Explained",
          whyItMatters: "This attribute controls how viewBox scales when display aspect ratio differs — critical for responsive layouts.",
          content: "preserveAspectRatio takes alignment (xMinYMin, xMidYMid, xMaxYMax) and fit (meet = contain, slice = cover). Default is xMidYMid meet.\n\n```svg\n<svg width=\"200\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMinYMin meet\">\n  <circle cx=\"50\" cy=\"50\" r=\"48\" fill=\"#06B6D4\" />\n</svg>\n```"
        },
        {
          id: "s3",
          title: "Responsive SVG Techniques",
          whyItMatters: "Responsive SVG works across devices without multiple asset versions.",
          content: "Techniques: 1) No width/height, CSS sizing with max-width:100% and height:auto. 2) Intrinsic ratio with padding-bottom. 3) Always set viewBox and use CSS for responsive sizing."
        }
      ],
      quiz: {
        questions: [
          { id: "svg5-q1", type: "mcq", question: "What does viewBox='0 0 100 200' define?", options: ["Display size in pixels", "Logical coordinate system from (0,0) to (100,200)", "Border radius", "Gradient direction"], correctAnswer: 1, explanation: "viewBox defines the logical coordinate system.", difficulty: 1 },
          { id: "svg5-q2", type: "mcq", question: "What is the default preserveAspectRatio value?", options: ["xMinYMin meet", "xMidYMid meet", "none", "xMaxYMax slice"], correctAnswer: 1, explanation: "The default is xMidYMid meet — center the content with letterboxing if needed.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "viewBox", value: '"minX minY width height"' },
        { label: "preserveAspectRatio", value: "Controls scaling behavior" },
        { label: "meet", value: "Fit entirely (may letterbox)" }
      ]
    },
    {
      id: "svg-6",
      number: 6,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Shapes",
      subtitle: "Rect, circle, ellipse, and basic geometric primitives",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 60,
      prerequisites: ["svg-3"],
      learningObjectives: ["Draw basic SVG shapes", "Configure shape attributes", "Combine shapes into compositions"],
      sections: [
        {
          id: "s1",
          title: "Basic SVG Shapes Overview",
          whyItMatters: "Shapes are the building blocks of all SVG graphics — master them to create any visual.",
          content: "Six basic shape elements: rect (rectangle with optional rx/ry rounding), circle (cx, cy, r), ellipse (cx, cy, rx, ry), line (x1, y1, x2, y2), polyline (multiple connected lines), polygon (closed shape from points).\n\nCommon attributes: fill, stroke, stroke-width, opacity, transform."
        },
        {
          id: "s2",
          title: "Rectangle Deep Dive",
          whyItMatters: "Rectangles are the most used SVG shape — they form buttons, cards, containers, and frames.",
          content: "rect attributes: x (left edge), y (top edge), width, height, rx (horizontal corner radius), ry (vertical corner radius). If rx is set without ry, ry equals rx. Setting rx to half of height creates a pill shape.\n\n```svg\n<rect x=\"10\" y=\"10\" width=\"80\" height=\"60\" rx=\"10\" fill=\"#06B6D4\" />\n```"
        }
      ],
      quiz: {
        questions: [
          { id: "svg6-q1", type: "mcq", question: "Which attribute controls horizontal corner rounding on a rect?", options: ["cr", "radius", "rx", "corner"], correctAnswer: 2, explanation: "rx controls the horizontal corner radius.", difficulty: 1 },
          { id: "svg6-q2", type: "mcq", question: "What happens if you set rx on a rect but not ry?", options: ["Only horizontal corners round", "rx becomes 0", "ry defaults to rx", "Error"], correctAnswer: 2, explanation: "If ry is omitted, it defaults to the value of rx.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "rect", value: "Rectangle with rx/ry for rounding" },
        { label: "circle", value: "cx, cy, r attributes" },
        { label: "ellipse", value: "cx, cy, rx, ry attributes" }
      ]
    },
    {
      id: "svg-7",
      number: 7,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Lines and Polygons",
      subtitle: "Line, polyline, polygon — creating multi-point shapes",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 55,
      prerequisites: ["svg-6"],
      learningObjectives: ["Draw lines with x1,y1,x2,y2", "Create polylines with points array", "Build closed polygons"],
      sections: [
        {
          id: "s1",
          title: "The Line Element",
          whyItMatters: "Lines connect points — they're fundamental for diagrams, grids, and wireframes.",
          content: "The line element draws a straight line between two points. It is a stroked-only element (no fill). Attributes: x1, y1 (start), x2, y2 (end), stroke, stroke-width, stroke-linecap (butt|round|square), stroke-dasharray."
        },
        {
          id: "s2",
          title: "Polyline — Connected Lines",
          whyItMatters: "Polylines connect multiple points with a continuous line, useful for graphs and outlines.",
          content: "polyline draws a series of connected straight lines. Takes a points attribute with space-separated coordinate pairs: 'x1,y1 x2,y2 x3,y3'. Unlike polygon, polyline does NOT close the shape automatically."
        },
        {
          id: "s3",
          title: "Polygon — Closed Shapes",
          whyItMatters: "Polygons create closed shapes from points, forming triangles, stars, and arbitrary multi-sided shapes.",
          content: "polygon is like polyline but automatically closes the shape by connecting the last point to the first. This means it can have fill. The points attribute uses the same format as polyline."
        }
      ],
      quiz: {
        questions: [
          { id: "svg7-q1", type: "mcq", question: "What is the main difference between polyline and polygon?", options: ["Polygon closes the shape automatically", "Polyline uses different coordinates", "Polygon doesn't support stroke", "Polyline fills the shape"], correctAnswer: 0, explanation: "Polygon automatically connects the last point back to the first, creating a closed shape.", difficulty: 1 },
          { id: "svg7-q2", type: "mcq", question: "What format does the points attribute use?", options: ["JSON array", "x1,y1 x2,y2 (space-separated)", "Comma-separated list", "Pipe-delimited"], correctAnswer: 1, explanation: "Points uses space-separated coordinate pairs.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "line", value: "x1,y1 to x2,y2 (stroked only)" },
        { label: "polyline", value: "Open connected lines from points" },
        { label: "polygon", value: "Closed shape from points" }
      ]
    },
    {
      id: "svg-8",
      number: 8,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Text Systems",
      subtitle: "Text, tspan, textPath, and text-anchor",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 60,
      prerequisites: ["svg-6"],
      learningObjectives: ["Render text with the text element", "Style text with font properties", "Use tspan for multi-line formatting", "Create curved text with textPath"],
      sections: [
        {
          id: "s1",
          title: "The Text Element",
          whyItMatters: "SVG text is accessible, selectable, and searchable — unlike images of text.",
          content: "The text element renders text in SVG. Unlike HTML, SVG text does NOT wrap automatically — you control positioning explicitly. Key attributes: x, y (baseline), text-anchor (start|middle|end), font-family, font-size, font-weight, fill, letter-spacing."
        },
        {
          id: "s2",
          title: "Multi-line with tspan",
          whyItMatters: "tspan provides text formatting and multi-line layout within a single text element.",
          content: "tspan is a child of text that lets you apply different formatting and position lines manually. Use dy for relative vertical offset between lines.\n\n```svg\n<text x=\"10\" y=\"30\">\n  <tspan font-weight=\"bold\">Title:</tspan>\n  <tspan x=\"10\" dy=\"25\">Line two</tspan>\n</text>\n```"
        },
        {
          id: "s3",
          title: "Curved Text with textPath",
          whyItMatters: "Text along a path creates dynamic, engaging designs impossible in HTML.",
          content: "textPath renders text along the shape of a path defined in defs. Reference with href attribute. Use startOffset to control where text begins (0%, 50%, 100%)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg8-q1", type: "mcq", question: "What does the y attribute on a text element refer to?", options: ["Top of the text", "Baseline of the text", "Center of the text", "Bottom of the text"], correctAnswer: 1, explanation: "The y attribute sets the baseline (bottom of most characters) not the top.", difficulty: 1 },
          { id: "svg8-q2", type: "mcq", question: "Which element is used to render text along a curved path?", options: ["tspan", "textPath", "pathText", "curvedText"], correctAnswer: 1, explanation: "textPath renders text along the geometry of a path element.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "text", value: "Renders selectable text" },
        { label: "tspan", value: "Multi-line with dy offsets" },
        { label: "textPath", value: "Text along a path curve" }
      ]
    },
    {
      id: "svg-9",
      number: 9,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Styling with CSS",
      subtitle: "Fill, stroke, stroke-width, opacity, and CSS integration",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 60,
      prerequisites: ["svg-3"],
      learningObjectives: ["Apply fill and stroke colors", "Use CSS with SVG inline and externally", "Control opacity and transparency"],
      sections: [
        {
          id: "s1",
          title: "Fill and Stroke Basics",
          whyItMatters: "Fill and stroke are the two fundamental styling properties — they give shapes their appearance.",
          content: "Fill colors the interior of a shape. Stroke colors its outline. Both accept any valid CSS color value: named colors, hex, RGB/RGBA, HSL, currentColor.\n\n```svg\n<rect x=\"20\" y=\"20\" width=\"100\" height=\"80\" fill=\"#06B6D4\" stroke=\"#0284C7\" stroke-width=\"4\" />\n```"
        },
        {
          id: "s2",
          title: "Opacity and Transparency",
          whyItMatters: "Opacity enables overlapping effects, ghost elements, and layered designs.",
          content: "SVG provides opacity (affects entire element), fill-opacity (fill only), and stroke-opacity (stroke only). Values range from 0 (invisible) to 1 (fully opaque). Alternatively use rgba() colors for fill-only transparency."
        },
        {
          id: "s3",
          title: "CSS Integration",
          whyItMatters: "CSS integration makes SVG styleable, themable, and maintainable like HTML.",
          content: "Three ways to style: 1) Inline CSS via style attribute, 2) Embedded style element in SVG, 3) External CSS file. CSS properties that work: fill, stroke, stroke-width, opacity, transform, transition, animation, filter, clip-path, pointer-events."
        }
      ],
      quiz: {
        questions: [
          { id: "svg9-q1", type: "mcq", question: "What does the fill property control in SVG?", options: ["Outline color", "Interior color", "Shadow", "Opacity"], correctAnswer: 1, explanation: "Fill controls the interior color of an SVG shape.", difficulty: 1 },
          { id: "svg9-q2", type: "true-false", question: "CSS hover effects work on SVG elements.", correctAnswer: true, explanation: "SVG elements support CSS pseudo-classes like :hover for interactive styling.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "fill", value: "Interior color of shapes" },
        { label: "stroke", value: "Outline color and width" },
        { label: "currentColor", value: "Inherits CSS color value" }
      ]
    },
    {
      id: "svg-10",
      number: 10,
      partLabel: "Part 1: SVG Foundations",
      title: "SVG Best Practices",
      subtitle: "Clean code, organization, and semantic elements",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 60,
      prerequisites: ["svg-9"],
      learningObjectives: ["Write clean, maintainable SVG code", "Use semantic SVG elements", "Organize SVG files effectively"],
      sections: [
        {
          id: "s1",
          title: "Code Organization and Structure",
          whyItMatters: "Well-organized SVG code is easier to maintain, debug, and collaborate on.",
          content: "Best practices: include xmlns on standalone files, use semantic viewBox values, group with g and meaningful ids, use defs at the top, use consistent indentation (2 spaces), use CSS classes instead of inline styles, minify for production."
        },
        {
          id: "s2",
          title: "Semantic Elements and Accessibility",
          whyItMatters: "Semantic SVG improves accessibility, SEO, and code readability.",
          content: "Semantic elements: svg (root), g (group), defs (definitions), symbol (reusable template), use (instantiate), title (accessible title), desc (detailed description). Always add role='img' and aria-label for screen readers."
        },
        {
          id: "s3",
          title: "SVG Optimization Checklist",
          whyItMatters: "Optimized SVG loads faster and reduces bandwidth costs.",
          content: "Optimization tips: remove unnecessary attributes, simplify paths with SVGO, consolidate styles, remove empty groups, round coordinates, use use for repeated elements, minify, gzip. SVGO can reduce SVG file sizes by 40-70%."
        }
      ],
      quiz: {
        questions: [
          { id: "svg10-q1", type: "mcq", question: "Which element is used for reusable icon templates in SVG?", options: ["<g>", "<symbol>", "<template>", "<icon>"], correctAnswer: 1, explanation: "symbol defines reusable icon templates instantiated with use.", difficulty: 2 },
          { id: "svg10-q2", type: "mcq", question: "What is SVGO?", options: ["SVG editor", "SVG optimizer tool", "SVG animation library", "SVG validation service"], correctAnswer: 1, explanation: "SVGO (SVG Optimizer) is a Node.js tool that optimizes SVG files.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "defs", value: "Reusable definitions (gradients, filters)" },
        { label: "symbol", value: "Reusable icon template" },
        { label: "use", value: "Instantiates a def or symbol" }
      ]
    },
    // ============ PART 2: PATHS AND ADVANCED GRAPHICS (CHAPTERS 11-22) ============
    {
      id: "svg-11",
      number: 11,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Paths Introduction",
      subtitle: "The d attribute and path commands overview",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 70,
      prerequisites: ["svg-6"],
      learningObjectives: ["Understand the path d attribute", "Recognize path command types", "Compare paths to basic shapes"],
      sections: [
        {
          id: "s1",
          title: "What Is an SVG Path?",
          whyItMatters: "Paths are the most powerful SVG element — every shape can be expressed as a path.",
          content: "The path element is the Swiss Army knife of SVG. It can create lines, curves, arcs, and complex shapes. ALL SVG shape elements (rect, circle, etc.) are internally converted to paths by the browser.\n\nThe d attribute contains path commands: M (move), L (line), C (cubic), Q (quadratic), A (arc), Z (close). Capital letters = absolute coordinates, lowercase = relative."
        },
        {
          id: "s2",
          title: "Path Commands Overview",
          whyItMatters: "Knowing which path command to use for which purpose is essential for effective SVG authoring.",
          content: "Commands: M (move to, pen up), L (line to, straight line), H (horizontal line), V (vertical line), C (cubic Bezier, 2 control points), S (smooth cubic), Q (quadratic Bezier, 1 control point), T (smooth quadratic), A (elliptical arc), Z (close path)."
        },
        {
          id: "s3",
          title: "Reading and Writing Path Data",
          whyItMatters: "Being able to read path data helps you debug, edit, and understand SVGs from other sources.",
          content: "Path data strings follow a predictable pattern. Each command letter is followed by its coordinates. Commas and spaces are flexible: 'M10 10 L50 10 L50 50 Z' works the same as 'M 10,10 L 50,10 L 50,50 Z'.\n\nMultiple M commands create subpaths. With fill-rule='evenodd', the inner subpath becomes a hole (donut effect)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg11-q1", type: "mcq", question: "What does the 'd' attribute in a path element contain?", options: ["Display mode", "Path commands and coordinates", "Dash array", "Direction"], correctAnswer: 1, explanation: "The d attribute contains path commands like M, L, C, etc.", difficulty: 1 },
          { id: "svg11-q2", type: "mcq", question: "What is the difference between uppercase M and lowercase m?", options: ["No difference", "M = absolute, m = relative", "M = move, m = line", "M = large, m = small"], correctAnswer: 1, explanation: "Uppercase = absolute coordinates, lowercase = relative.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "d attribute", value: "Path commands string" },
        { label: "M / m", value: "Move to (absolute / relative)" },
        { label: "Z", value: "Close current subpath" }
      ]
    },
    {
      id: "svg-12",
      number: 12,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "Move and Line Commands",
      subtitle: "M, L, H, V — the straight-line path toolkit",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-11"],
      learningObjectives: ["Use M commands to position the pen", "Draw lines with L, H, V commands", "Create rectilinear shapes efficiently"],
      sections: [
        {
          id: "s1",
          title: "Move and Line Commands",
          whyItMatters: "M and L are the foundation of all path-based drawing.",
          content: "M (move) lifts the pen and moves to a new position without drawing. L (line to) draws a straight line from the current position to the specified point. M is always the first command in any subpath."
        },
        {
          id: "s2",
          title: "H and V — Efficient Rectilinear Drawing",
          whyItMatters: "H and V reduce path data size for horizontal and vertical lines.",
          content: "H (horizontal line to) only needs an x coordinate. V (vertical line to) only needs a y coordinate. Using H and V instead of L makes path data shorter and cleaner.\n\nExample: d='M 10,10 H 90 V 90 H 10 Z' vs 'M 10,10 L 90,10 L 90,90 L 10,90 Z'"
        },
        {
          id: "s3",
          title: "Absolute vs Relative Coordinates",
          whyItMatters: "Choosing absolute vs relative affects how easily you can move or transform shapes.",
          content: "Absolute (M, L, H, V) coordinates are relative to SVG origin. Relative (m, l, h, v) are relative to current pen position. Use relative for shapes you want to easily reposition, absolute for precise grid positioning."
        }
      ],
      quiz: {
        questions: [
          { id: "svg12-q1", type: "mcq", question: "How many coordinates does the H command need?", options: ["0", "1 (x)", "1 (y)", "2 (x and y)"], correctAnswer: 1, explanation: "H (horizontal line) only needs an x coordinate — y stays the same.", difficulty: 2 },
          { id: "svg12-q2", type: "mcq", question: "What does 'h -20' do in a relative path?", options: ["Move 20px right", "Move 20px left", "Move 20px up", "Move 20px down"], correctAnswer: 1, explanation: "Relative 'h -20' moves the pen 20px to the left.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "M", value: "Move pen to absolute position" },
        { label: "L", value: "Line to absolute coordinate" },
        { label: "H/V", value: "Horizontal/vertical line shorthand" }
      ]
    },
    {
      id: "svg-13",
      number: 13,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "Curves and Bézier Paths",
      subtitle: "Quadratic and cubic Bézier curves (Q, C, S, T)",
      difficulty: "Beginner",
      estimatedMinutes: 55,
      xpReward: 75,
      prerequisites: ["svg-12"],
      learningObjectives: ["Draw quadratic Bézier curves (Q)", "Draw cubic Bézier curves (C)", "Use smooth curve continuations (S, T)"],
      sections: [
        {
          id: "s1",
          title: "Quadratic Bézier Curves (Q)",
          whyItMatters: "Quadratic curves create smooth arcs with minimal data.",
          content: "A quadratic Bézier curve uses one control point to bend the line between start and end points. Syntax: Q cx cy x y — control point (cx,cy), end point (x,y). The curve bends toward the control point."
        },
        {
          id: "s2",
          title: "Cubic Bézier Curves (C)",
          whyItMatters: "Cubic curves have two control points for more complex curves and S-curves.",
          content: "A cubic Bézier curve uses two control points. Syntax: C cx1 cy1, cx2 cy2, x y. The first control point controls departure angle, the second controls arrival angle. This enables S-curves and complex organic shapes."
        },
        {
          id: "s3",
          title: "Smooth Curve Continuations (S and T)",
          whyItMatters: "S and T automatically mirror control points for seamless curves.",
          content: "S (smooth cubic) mirrors the second control point of the previous C command. T (smooth quadratic) mirrors the control point of the previous Q command. Both create seamless joints between curve segments."
        }
      ],
      quiz: {
        questions: [
          { id: "svg13-q1", type: "mcq", question: "How many control points does a quadratic Bézier (Q) curve use?", options: ["0", "1", "2", "3"], correctAnswer: 1, explanation: "Quadratic Bézier uses one control point.", difficulty: 1 },
          { id: "svg13-q2", type: "mcq", question: "How many control points does a cubic Bézier (C) curve use?", options: ["0", "1", "2", "4"], correctAnswer: 2, explanation: "Cubic Bézier uses two control points.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Q qx qy x y", value: "Quadratic Bézier (1 control)" },
        { label: "C c1x c1y c2x c2y x y", value: "Cubic Bézier (2 controls)" },
        { label: "S / T", value: "Smooth curve continuation" }
      ]
    },
    {
      id: "svg-14",
      number: 14,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "Arc Commands",
      subtitle: "Drawing elliptical arcs with the A command",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 70,
      prerequisites: ["svg-13"],
      learningObjectives: ["Understand arc command parameters", "Draw circular and elliptical arcs", "Control arc sweep direction"],
      sections: [
        {
          id: "s1",
          title: "Understanding Arc Parameters",
          whyItMatters: "Arcs create curved segments that Bézier curves cannot represent exactly.",
          content: "Arc syntax: A rx ry x-axis-rotation large-arc-flag sweep-flag x y\n\nrx = x-radius, ry = y-radius, rotation = ellipse rotation in degrees, large-arc (0=short, 1=long), sweep (0=CCW, 1=CW), x,y = end point."
        },
        {
          id: "s2",
          title: "Creating Donut Charts with Arcs",
          whyItMatters: "Arcs are the foundation of pie and donut chart data visualizations.",
          content: "To draw a donut chart segment: draw two arcs (outer and inner edge) connected by straight lines. Calculate arc endpoints using: x = cx + r*cos(angle), y = cy + r*sin(angle) in radians."
        }
      ],
      quiz: {
        questions: [
          { id: "svg14-q1", type: "mcq", question: "How many parameters does the A (arc) command take?", options: ["5", "6", "7", "8"], correctAnswer: 2, explanation: "A takes 7 parameters: rx ry x-axis-rotation large-arc sweep x y.", difficulty: 1 },
          { id: "svg14-q2", type: "mcq", question: "What does the sweep-flag control?", options: ["Line thickness", "Clockwise or counter-clockwise direction", "Arc color", "Endpoint position"], correctAnswer: 1, explanation: "0 = counter-clockwise, 1 = clockwise.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "A rx ry rot large sweep x y", value: "Arc command parameters" },
        { label: "large-arc", value: "0=short, 1=long arc" },
        { label: "sweep", value: "0=CCW, 1=CW direction" }
      ]
    },
    {
      id: "svg-15",
      number: 15,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "Complex Path Systems",
      subtitle: "Combining commands, closed paths (Z), and advanced patterns",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 70,
      prerequisites: ["svg-14"],
      learningObjectives: ["Combine multiple path commands effectively", "Create closed paths with Z", "Build complex shapes from combined segments"],
      sections: [
        {
          id: "s1",
          title: "Building Complex Shapes from Commands",
          whyItMatters: "Real-world SVG paths combine multiple command types to create sophisticated graphics.",
          content: "Complex shapes sequence multiple path commands. Each command continues from where the last one ended. Combine M, L, C, Q, A, and Z to create compound shapes like clouds, speech bubbles, and organic forms."
        },
        {
          id: "s2",
          title: "Closed Paths and Fill Behavior",
          whyItMatters: "Understanding closed paths and fill rules enables complex cutouts and hollow shapes.",
          content: "Z closes the current subpath by drawing a straight line back to the first M point. Fill rules: nonzero (default, fills based on winding direction) and evenodd (fills based on parity, creates holes in overlapping areas)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg15-q1", type: "mcq", question: "What does the Z command do at the end of a path?", options: ["Zooms the view", "Draws a straight line to the first M point", "Sets z-index", "Clears the path"], correctAnswer: 1, explanation: "Z closes the path by drawing a straight line back to the starting point.", difficulty: 1 },
          { id: "svg15-q2", type: "mcq", question: "What are the two fill rules in SVG?", options: ["solid and dashed", "nonzero and evenodd", "fill and stroke", "inside and outside"], correctAnswer: 1, explanation: "SVG supports nonzero (default) and evenodd fill rules.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Z", value: "Close path to first M point" },
        { label: "fill-rule", value: "nonzero (default) | evenodd" },
        { label: "Optimization", value: "Use H/V, round coords, relative" }
      ]
    },
    {
      id: "svg-16",
      number: 16,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Groups and Layers",
      subtitle: "The g element, transforms on groups, and nesting",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-10"],
      learningObjectives: ["Group elements with the g element", "Apply transforms to entire groups", "Nest groups for complex hierarchies"],
      sections: [
        {
          id: "s1",
          title: "The Group Element (g)",
          whyItMatters: "Groups are SVG's version of layers — they organize, transform, and style multiple elements together.",
          content: "The g (group) element is a container that applies attributes and transforms to all its children. Benefits: apply common styles, transform all children together, organize into logical layers, control rendering order (later groups draw on top)."
        },
        {
          id: "s2",
          title: "Group Transforms",
          whyItMatters: "Transforming a group moves, scales, or rotates everything inside it simultaneously.",
          content: "Apply transform attribute to g: translate(x, y), scale(sx, sy), rotate(angle, cx, cy), skewX(angle), skewY(angle). Multiple transforms: transform='translate(50, 50) rotate(45)'\n\nGroups can be nested — inner transforms are relative to outer transforms."
        },
        {
          id: "s3",
          title: "Layering and Rendering Order",
          whyItMatters: "Rendering order determines which elements appear on top — crucial for complex compositions.",
          content: "SVG renders elements in document order: later elements appear on top of earlier ones. Use groups to organize layers (background, content, foreground, UI). This mirrors layer-based design tools like Figma and Illustrator."
        }
      ],
      quiz: {
        questions: [
          { id: "svg16-q1", type: "mcq", question: "What is the g element used for?", options: ["Drawing gradients", "Grouping elements", "Creating paths", "Adding gradients"], correctAnswer: 1, explanation: "g is the group element for organizing and transforming multiple elements together.", difficulty: 1 },
          { id: "svg16-q2", type: "true-false", question: "Elements defined later in SVG appear underneath earlier elements.", correctAnswer: false, explanation: "SVG renders in document order — later elements appear on top.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "g", value: "Group container for layers" },
        { label: "transform", value: "translate, scale, rotate on groups" },
        { label: "Rendering order", value: "Last element = topmost" }
      ]
    },
    {
      id: "svg-17",
      number: 17,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Masks",
      subtitle: "Mask element, luminance vs alpha masking",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 75,
      prerequisites: ["svg-16"],
      learningObjectives: ["Understand SVG masking concepts", "Use the mask element", "Differentiate luminance and alpha masking"],
      sections: [
        {
          id: "s1",
          title: "Introduction to SVG Masks",
          whyItMatters: "Masks create partial transparency effects, revealing or hiding portions of graphics non-destructively.",
          content: "The mask element defines a reusable mask. Any element with mask='url(#id)' will have its visibility controlled by the mask content. White areas in the mask = fully visible, black = fully hidden, gray = partially transparent."
        },
        {
          id: "s2",
          title: "Luminance vs Alpha Masking",
          whyItMatters: "Choosing the right mask type affects how transparency is calculated.",
          content: "mask-type='luminance' (default): uses the luminance (brightness) of the mask content to determine opacity. White = opaque, black = transparent. mask-type='alpha': uses the alpha channel of the mask content.\n\n```svg\n<mask id=\"fade\">\n  <rect width=\"100\" height=\"100\" fill=\"url(#grad)\" />\n</mask>\n<circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#06B6D4\" mask=\"url(#fade)\" />\n```"
        }
      ],
      quiz: {
        questions: [
          { id: "svg17-q1", type: "mcq", question: "What does white represent in a luminance mask?", options: ["Invisible", "Fully visible", "Partially transparent", "No effect"], correctAnswer: 1, explanation: "White in luminance mask = fully visible area.", difficulty: 2 },
          { id: "svg17-q2", type: "mcq", question: "What mask types does SVG support?", options: ["rgb and cmyk", "luminance and alpha", "color and grayscale", "opacity and transparency"], correctAnswer: 1, explanation: "SVG supports luminance (brightness-based) and alpha (channel-based) masking.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "mask", value: "Controls element visibility" },
        { label: "luminance", value: "Uses brightness for opacity" },
        { label: "alpha", value: "Uses alpha channel for opacity" }
      ]
    },
    {
      id: "svg-18",
      number: 18,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Clip Paths",
      subtitle: "clipPath, clip-rule, clipping vs masking",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 70,
      prerequisites: ["svg-17"],
      learningObjectives: ["Create clipping paths", "Use clip-rule for complex clips", "Understand clipping vs masking differences"],
      sections: [
        {
          id: "s1",
          title: "Clipping Paths with clipPath",
          whyItMatters: "Clip paths crop graphics to a specific shape, essential for image avatars and creative layouts.",
          content: "clipPath defines a clipping region. Only the area inside the clipping path is visible. Syntax: element with clip-path='url(#clip)'.\n\n```svg\n<defs>\n  <clipPath id=\"circle-clip\">\n    <circle cx=\"100\" cy=\"100\" r=\"80\" />\n  </clipPath>\n</defs>\n<image clip-path=\"url(#circle-clip)\" href=\"photo.jpg\" />\n```"
        },
        {
          id: "s2",
          title: "Clip Path vs Mask",
          whyItMatters: "Knowing when to use each prevents performance issues and unnecessary complexity.",
          content: "Clip paths: hard edges, no partial transparency, faster rendering, only vector shapes. Masks: soft edges, partial transparency via grayscale, slightly more expensive rendering, can use raster graphics. Use clipPath for hard-edged crops, mask for fade effects."
        }
      ],
      quiz: {
        questions: [
          { id: "svg18-q1", type: "mcq", question: "How do you apply a clip path to an element?", options: ["mask='url(#id)'", "clip-path='url(#id)'", "clip='url(#id)'", "path='url(#id)'"], correctAnswer: 1, explanation: "Use clip-path='url(#id)' referencing a clipPath element.", difficulty: 1 },
          { id: "svg18-q2", type: "mcq", question: "Which supports soft (partial) transparency?", options: ["Clip paths", "Masks", "Both", "Neither"], correctAnswer: 1, explanation: "Masks support partial transparency via grayscale; clip paths are hard-edged.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "clipPath", value: "Hard-edged cropping region" },
        { label: "clip-path", value: "CSS property to apply clip" },
        { label: "Clip vs Mask", value: "Hard crop vs soft transparency" }
      ]
    },
    {
      id: "svg-19",
      number: 19,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Gradients",
      subtitle: "linearGradient, radialGradient, stops, spreadMethod",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-9"],
      learningObjectives: ["Create linear gradients", "Create radial gradients", "Configure gradient stops and spread method"],
      sections: [
        {
          id: "s1",
          title: "Linear Gradients",
          whyItMatters: "Gradients add depth, lighting, and visual interest that flat colors cannot achieve.",
          content: "linearGradient defines gradient along a line. Attributes: x1, y1 (start), x2, y2 (end). Child stop elements define color at offset positions.\n\n```svg\n<defs>\n  <linearGradient id=\"grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n    <stop offset=\"0%\" stop-color=\"#06B6D4\" />\n    <stop offset=\"100%\" stop-color=\"#3B82F6\" />\n  </linearGradient>\n</defs>\n<rect width=\"200\" height=\"100\" fill=\"url(#grad)\" />\n```"
        },
        {
          id: "s2",
          title: "Radial Gradients",
          whyItMatters: "Radial gradients create circular gradient effects for lighting, shadows, and spheres.",
          content: "radialGradient defines gradient radiating from a center point. Attributes: cx, cy (center), r (radius), fx, fy (focal point for offset effects)."
        },
        {
          id: "s3",
          title: "Gradient Properties",
          whyItMatters: "Advanced gradient properties control how the gradient behaves beyond its defined area.",
          content: "spreadMethod controls how gradient fills beyond last stop: pad (default, extends last color), reflect (mirrors gradient), repeat (repeats gradient). gradientUnits: userSpaceOnUse (absolute coords) or objectBoundingBox (default, relative to element)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg19-q1", type: "mcq", question: "What elements define the colors in a gradient?", options: ["<color>", "<stop>", "<point>", "<sample>"], correctAnswer: 1, explanation: "stop elements define color at specific offset positions in the gradient.", difficulty: 1 },
          { id: "svg19-q2", type: "true-false", question: "Gradients can only be applied to fills, not strokes.", correctAnswer: false, explanation: "Gradients work for both fill and stroke properties.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "linearGradient", value: "Linear gradient along a line" },
        { label: "radialGradient", value: "Circular gradient from center" },
        { label: "stop", value: "Color point at offset position" }
      ]
    },
    {
      id: "svg-20",
      number: 20,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Patterns",
      subtitle: "Pattern element, patternUnits, patternTransform",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 70,
      prerequisites: ["svg-19"],
      learningObjectives: ["Create reusable patterns", "Control pattern sizing and positioning", "Apply pattern transforms"],
      sections: [
        {
          id: "s1",
          title: "The Pattern Element",
          whyItMatters: "Patterns fill areas with repeating tiles — essential for backgrounds, textures, and fabric effects.",
          content: "pattern defines a reusable tile that fills an area by repeating. Attributes: width, height (tile size), patternUnits (userSpaceOnUse|objectBoundingBox), patternTransform (scale, rotate, translate).\n\n```svg\n<defs>\n  <pattern id=\"dots\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n    <circle cx=\"10\" cy=\"10\" r=\"3\" fill=\"#06B6D4\" />\n  </pattern>\n</defs>\n<rect width=\"200\" height=\"200\" fill=\"url(#dots)\" />\n```"
        },
        {
          id: "s2",
          title: "Pattern Units and Transforms",
          whyItMatters: "Understanding patternUnits helps patterns scale correctly across different sized elements.",
          content: "patternUnits='userSpaceOnUse': pattern coordinates use SVG coordinate system, tile size is in SVG units. patternUnits='objectBoundingBox': pattern coordinates relative to the element (0-1).\n\npatternTransform applies transform to the whole pattern tile: scale, rotate, skew."
        }
      ],
      quiz: {
        questions: [
          { id: "svg20-q1", type: "mcq", question: "What is the purpose of the pattern element?", options: ["Create gradients", "Fill area with repeating tile", "Apply filters", "Mask elements"], correctAnswer: 1, explanation: "pattern creates a repeating tile that fills an SVG element.", difficulty: 1 },
          { id: "svg20-q2", type: "mcq", question: "Which patternUnits value makes the tile size relative to the element?", options: ["userSpaceOnUse", "objectBoundingBox", "relative", "percent"], correctAnswer: 1, explanation: "objectBoundingBox makes pattern coordinates relative to the element size.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "pattern", value: "Repeating tile fill" },
        { label: "patternUnits", value: "Coordinate system for pattern" },
        { label: "patternTransform", value: "Transform applied to tile" }
      ]
    },
    {
      id: "svg-21",
      number: 21,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "SVG Filters",
      subtitle: "Filter, feGaussianBlur, feDropShadow, feColorMatrix",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 80,
      prerequisites: ["svg-19"],
      learningObjectives: ["Apply SVG filter effects", "Use common filter primitives", "Chain filters for combined effects"],
      sections: [
        {
          id: "s1",
          title: "SVG Filter Overview",
          whyItMatters: "Filters apply visual effects like blur, shadow, and color manipulation that CSS alone cannot achieve on SVG elements.",
          content: "The filter element contains filter primitives (fe-effect elements) that process the graphic. Filters are applied via filter='url(#id)'.\n\n```svg\n<defs>\n  <filter id=\"shadow\">\n    <feDropShadow dx=\"2\" dy=\"4\" stdDeviation=\"4\" flood-color=\"rgba(0,0,0,0.3)\" />\n  </filter>\n</defs>\n<circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#06B6D4\" filter=\"url(#shadow)\" />\n```"
        },
        {
          id: "s2",
          title: "Common Filter Primitives",
          whyItMatters: "Each filter primitive does one specific image processing operation — combining them creates powerful effects.",
          content: "Key filter primitives: feGaussianBlur (blur with stdDeviation), feDropShadow (drop shadow with dx, dy, stdDeviation, flood-color), feColorMatrix (color transform via matrix), feOffset (shift the graphic), feMerge (combine layers), feBlend (blend layers)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg21-q1", type: "mcq", question: "Which filter primitive creates a blur effect?", options: ["feBlur", "feGaussianBlur", "feShadow", "feBlend"], correctAnswer: 1, explanation: "feGaussianBlur applies a Gaussian blur with configurable standard deviation.", difficulty: 1 },
          { id: "svg21-q2", type: "mcq", question: "How do you apply a filter to an SVG element?", options: ["filter='url(#id)'", "effect='url(#id)'", "style='filter:...'", "apply='url(#id)'"], correctAnswer: 0, explanation: "Use filter='url(#id)' referencing a filter element in defs.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "filter", value: "Container for filter primitives" },
        { label: "feGaussianBlur", value: "Blur effect" },
        { label: "feDropShadow", value: "Shadow effect" }
      ]
    },
    {
      id: "svg-22",
      number: 22,
      partLabel: "Part 2: Paths and Advanced Graphics",
      title: "Advanced Visual Effects",
      subtitle: "feMerge, feDisplacementMap, feBlend — compositing filters",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 75,
      prerequisites: ["svg-21"],
      learningObjectives: ["Combine filter primitives with feMerge", "Create displacement effects", "Blend multiple graphic layers"],
      sections: [
        {
          id: "s1",
          title: "Compositing with feMerge",
          whyItMatters: "feMerge combines multiple filter results into a single output, enabling layered effects.",
          content: "feMerge composites multiple filter outputs together. Each feMergeNode references an input (in='SourceGraphic', in='blur-output', etc.). The node order determines the z-order.\n\n```svg\n<filter id=\"glow\">\n  <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n  <feMerge>\n    <feMergeNode in=\"blur\" />\n    <feMergeNode in=\"SourceGraphic\" />\n  </feMerge>\n</filter>\n```"
        },
        {
          id: "s2",
          title: "Displacement and Blending",
          whyItMatters: "Displacement maps distort graphics for organic effects; blending creates compositing modes.",
          content: "feDisplacementMap uses an image (or another filter result) to displace pixels, creating distortion, ripple, and liquid effects. in2 attribute specifies the displacement map input. scale controls the displacement intensity.\n\nfeBlend blends two inputs using compositing modes: normal, multiply, screen, darken, lighten."
        }
      ],
      quiz: {
        questions: [
          { id: "svg22-q1", type: "mcq", question: "Which element combines multiple filter outputs?", options: ["feCombine", "feMerge", "feBlend", "feComposite"], correctAnswer: 1, explanation: "feMerge composites multiple filter results into one output.", difficulty: 2 },
          { id: "svg22-q2", type: "mcq", question: "What does feDisplacementMap do?", options: ["Blurs the image", "Shifts pixels based on a map", "Changes colors", "Adds shadows"], correctAnswer: 1, explanation: "feDisplacementMap displaces pixels using a reference map for distortion effects.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "feMerge", value: "Composite filter outputs" },
        { label: "feDisplacementMap", value: "Pixel distortion effect" },
        { label: "feBlend", value: "Blend modes: multiply, screen" }
      ]
    },
    // ============ PART 3: SVG ANIMATION SYSTEMS (CHAPTERS 23-34) ============
    {
      id: "svg-23",
      number: 23,
      partLabel: "Part 3: SVG Animation Systems",
      title: "Intro to SVG Animation",
      subtitle: "Animation approaches: SMIL, CSS, JS",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ["svg-9"],
      learningObjectives: ["Compare SMIL, CSS, and JS animation approaches", "Choose the right tool for each animation task"],
      sections: [
        {
          id: "s1",
          title: "Three Approaches to SVG Animation",
          whyItMatters: "Each animation approach has different strengths — knowing which to use saves time and ensures performance.",
          content: "Three ways to animate SVG:\n\n1. SMIL — built into SVG using animate, animateTransform, animateMotion elements. Best for declarative, self-contained SVG animations.\n\n2. CSS Animations — use @keyframes and transition on SVG properties. Best for hover effects, UI animations, and integrating with existing CSS workflows.\n\n3. JavaScript — use requestAnimationFrame, GSAP, or Framer Motion. Best for complex, interactive, and physics-based animations."
        },
        {
          id: "s2",
          title: "Choosing the Right Approach",
          whyItMatters: "The right choice affects code complexity, performance, and maintainability.",
          content: "SMIL: when animation is part of the SVG asset itself, simple sequences, CSS-independent. CSS: when animation relates to UI interaction (hover, active), when you need transitions. JS: when animation needs user input, physics, complex timelines, scroll-driven, or real-time data."
        }
      ],
      quiz: {
        questions: [
          { id: "svg23-q1", type: "mcq", question: "Which SVG animation approach uses the animate element?", options: ["CSS", "SMIL", "JavaScript", "Web Animations API"], correctAnswer: 1, explanation: "SMIL uses animate, animateTransform, and animateMotion elements.", difficulty: 2 },
          { id: "svg23-q2", type: "mcq", question: "Which approach is best for physics-based animation?", options: ["SMIL", "CSS", "JavaScript", "All equally good"], correctAnswer: 2, explanation: "JavaScript is best for physics, complex timelines, and interactive animation.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "SMIL", value: "Declarative SVG animations" },
        { label: "CSS", value: "Hover effects, transitions" },
        { label: "JS", value: "Complex, interactive animation" }
      ]
    },
    {
      id: "svg-24",
      number: 24,
      partLabel: "Part 3: SVG Animation Systems",
      title: "SMIL Animation",
      subtitle: "Animate, animateTransform, animateMotion, begin/dur/fill",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 75,
      prerequisites: ["svg-23"],
      learningObjectives: ["Use animate element for property animation", "Use animateTransform for transform animation", "Sequence animations with begin and dur"],
      sections: [
        {
          id: "s1",
          title: "SMIL Animation Basics",
          whyItMatters: "SMIL is the native SVG animation system — no external libraries needed, works in all modern browsers.",
          content: "The animate element animates a single attribute over time. Attributes: attributeName, from, to, dur, begin, fill."
        },
        {
          id: "s2",
          title: "animateTransform for Transform Animations",
          whyItMatters: "animateTransform handles transform animation correctly, unlike animating the transform attribute directly.",
          content: "animateTransform handles transform animation with proper matrix interpolation. Use type attribute: translate, scale, rotate, skewX, skewY."
        },
        {
          id: "s3",
          title: "animateMotion — Movement Along Paths",
          whyItMatters: "animateMotion moves elements along arbitrary paths.",
          content: "animateMotion moves an element along a path. Use mpath child referencing a path, or path attribute directly."
        }
      ],
      quiz: {
        questions: [
          { id: "svg24-q1", type: "mcq", question: "Which SMIL element is used for transform animations?", options: ["animate", "animateTransform", "animateMotion", "transformAnim"], correctAnswer: 1, explanation: "animateTransform handles rotation, scaling, and translation.", difficulty: 2 },
          { id: "svg24-q2", type: "mcq", question: "What does repeatCount='indefinite' do?", options: ["Plays once", "Loops forever", "Plays in reverse", "No animation"], correctAnswer: 1, explanation: "indefinite means the animation loops continuously.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "animate", value: "Animate a single attribute" },
        { label: "animateTransform", value: "Transform animation (rotate, scale)" },
        { label: "animateMotion", value: "Movement along a path" }
      ]
    },    {
      id: "svg-25",
      number: 25,
      partLabel: "Part 3: SVG Animation Systems",
      title: "CSS SVG Animation",
      subtitle: "@keyframes on SVG properties, transitions",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 70,
      prerequisites: ["svg-23"],
      learningObjectives: ["Use CSS @keyframes with SVG properties", "Apply transitions to SVG elements", "Create hover and state-based animations"],
      sections: [
        {
          id: "s1",
          title: "CSS @keyframes for SVG",
          whyItMatters: "CSS animations integrate seamlessly with existing CSS workflows.",
          content: "Use @keyframes to animate SVG-specific properties like fill, stroke-dasharray, stroke-dashoffset, and transform."
        },
        {
          id: "s2",
          title: "CSS Transitions on SVG",
          whyItMatters: "Transitions provide smooth state changes between hover, active, and other states.",
          content: "CSS transitions work on SVG properties: fill, stroke, stroke-width, opacity, transform. Add transition property to the SVG element's CSS rule."
        },
        {
          id: "s3",
          title: "Stroke-Dasharray Animation",
          whyItMatters: "Animating stroke-dashoffset creates the 'drawing' effect where lines appear to draw themselves.",
          content: "Set stroke-dasharray equal to the path length, then animate stroke-dashoffset from the path length to 0. Use getTotalLength() in JS to measure path length."
        }
      ],
      quiz: {
        questions: [
          { id: "svg25-q1", type: "mcq", question: "Which CSS property combination creates the line-drawing effect?", options: ["stroke-width and stroke", "stroke-dasharray and stroke-dashoffset", "fill and stroke", "opacity and transform"], correctAnswer: 1, explanation: "Animating stroke-dashoffset with stroke-dasharray creates the drawing effect.", difficulty: 2 },
          { id: "svg25-q2", type: "true-false", question: "CSS transitions can animate SVG fill properties.", correctAnswer: true, explanation: "CSS transitions work on SVG fill, stroke, and other presentation attributes.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "@keyframes", value: "CSS animation definitions" },
        { label: "transition", value: "Smooth state changes" },
        { label: "stroke-dashoffset", value: "Line drawing animation" }
      ]
    },
    {
      id: "svg-26",
      number: 26,
      partLabel: "Part 3: SVG Animation Systems",
      title: "JavaScript SVG Animation",
      subtitle: "requestAnimationFrame, GSAP alternatives",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 80,
      prerequisites: ["svg-23"],
      learningObjectives: ["Use requestAnimationFrame for smooth SVG animation", "Animate SVG properties with JavaScript", "Create custom easing and timing"],
      sections: [
        {
          id: "s1",
          title: "requestAnimationFrame Basics",
          whyItMatters: "requestAnimationFrame provides smooth, battery-efficient animations synchronized with the browser's rendering cycle.",
          content: "requestAnimationFrame calls your function before the next paint, creating smooth 60fps animations. It automatically pauses when the tab is inactive, saving battery."
        },
        {
          id: "s2",
          title: "GSAP and Animation Libraries",
          whyItMatters: "Libraries like GSAP simplify complex animations with better APIs and cross-browser consistency.",
          content: "GSAP (GreenSock Animation Platform) is the industry standard for SVG animation. Alternative libraries: anime.js (lightweight), Mo.js (motion graphics), and Framer Motion (React-specific)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg26-q1", type: "mcq", question: "What does requestAnimationFrame do?", options: ["Runs code every millisecond", "Schedules code before next browser paint", "Creates a new thread", "Stops all animations"], correctAnswer: 1, explanation: "requestAnimationFrame schedules a callback before the next repaint.", difficulty: 2 },
          { id: "svg26-q2", type: "mcq", question: "Which is the industry-standard SVG animation library?", options: ["jQuery", "GSAP", "React", "Bootstrap"], correctAnswer: 1, explanation: "GSAP (GreenSock) is the industry standard for SVG animation.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "requestAnimationFrame", value: "Browser paint cycle sync" },
        { label: "GSAP", value: "Industry standard animation lib" },
        { label: "anime.js", value: "Lightweight animation library" }
      ]
    },
    {
      id: "svg-27",
      number: 27,
      partLabel: "Part 3: SVG Animation Systems",
      title: "Motion Paths",
      subtitle: "animateMotion in SMIL, offset-path in CSS",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 70,
      prerequisites: ["svg-24"],
      learningObjectives: ["Use SMIL animateMotion for path following", "Use CSS offset-path for motion", "Create complex motion trajectories"],
      sections: [
        {
          id: "s1",
          title: "SMIL animateMotion",
          whyItMatters: "animateMotion moves elements along arbitrary paths without manual coordinate calculations.",
          content: "animateMotion moves an element along a path defined by a path element or inline path data. The element follows the path precisely, rotating to match the path direction."
        },
        {
          id: "s2",
          title: "CSS offset-path",
          whyItMatters: "offset-path is the CSS standard for path-based motion, working without SMIL's XML-based syntax.",
          content: "offset-path defines a path the element follows. offset-distance controls progress (0-100%). offset-rotate controls element rotation along the path."
        }
      ],
      quiz: {
        questions: [
          { id: "svg27-q1", type: "mcq", question: "Which SMIL element creates path-following motion?", options: ["animate", "animateTransform", "animateMotion", "moveAlong"], correctAnswer: 2, explanation: "animateMotion moves an element along an SVG path.", difficulty: 1 },
          { id: "svg27-q2", type: "mcq", question: "What CSS property defines a motion path?", options: ["path", "motion-path", "offset-path", "move-path"], correctAnswer: 2, explanation: "offset-path defines the path for CSS motion animation.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "animateMotion", value: "SMIL path-following animation" },
        { label: "offset-path", value: "CSS property for motion path" },
        { label: "offset-distance", value: "Progress along motion path" }
      ]
    },    {
      id: "svg-28",
      number: 28,
      partLabel: "Part 3: SVG Animation Systems",
      title: "Interactive SVG Motion",
      subtitle: "Mouse-driven animation, hover effects, parallax",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 75,
      prerequisites: ["svg-27"],
      learningObjectives: ["Create mouse-driven SVG animations", "Build parallax effects with SVG", "Implement hover and gesture interactions"],
      sections: [
        {
          id: "s1",
          title: "Mouse-Driven Animation",
          whyItMatters: "Interactive motion responds to user input, creating engaging and dynamic experiences.",
          content: "Track mouse position with JavaScript and update SVG attributes accordingly. mousemove event provides clientX and clientY for real-time positioning."
        },
        {
          id: "s2",
          title: "Parallax and Depth Effects",
          whyItMatters: "Parallax creates the illusion of depth by moving layers at different speeds based on input.",
          content: "Create multiple SVG layers and move them at different multipliers relative to mouse position. Background layers move slower (0.1-0.3x), foreground layers move faster (0.5-1x)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg28-q1", type: "mcq", question: "Which event tracks mouse position for SVG animation?", options: ["onclick", "onmousemove", "onscroll", "onchange"], correctAnswer: 1, explanation: "mousemove provides mouse coordinates in real-time.", difficulty: 1 },
          { id: "svg28-q2", type: "true-false", question: "Parallax moves all layers at the same speed.", correctAnswer: false, explanation: "Parallax uses different speeds for different layers.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "mousemove", value: "Real-time mouse tracking" },
        { label: "Parallax", value: "Layers moving at different speeds" },
        { label: "Depth", value: "Multipliers for layer speeds" }
      ]
    },
    {
      id: "svg-29",
      number: 29,
      partLabel: "Part 3: SVG Animation Systems",
      title: "SVG Morphing",
      subtitle: "Path morphing, shape tweening, SVGator-style animation",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 80,
      prerequisites: ["svg-26"],
      learningObjectives: ["Understand path morphing concepts", "Create shape-tweening animations", "Use tools for SVG morphing"],
      sections: [
        {
          id: "s1",
          title: "Path Morphing Fundamentals",
          whyItMatters: "Path morphing transforms one shape into another, creating fluid organic transitions.",
          content: "Path morphing requires both paths to have the EXACT same number of points/commands. The browser interpolates each corresponding point from start to end position."
        },
        {
          id: "s2",
          title: "Morphing Tools and Techniques",
          whyItMatters: "Manual path matching is tedious — tools automate the process for complex morphs.",
          content: "Tools: SVGator (visual morphing editor), GreenSock MorphSVGPlugin (automatic path matching), Figma plugins (export matching paths). Key rules: use the same command types, same number of commands."
        }
      ],
      quiz: {
        questions: [
          { id: "svg29-q1", type: "mcq", question: "What requirement do both paths need for smooth morphing?", options: ["Same color", "Same number of points/commands", "Same size", "Same direction"], correctAnswer: 1, explanation: "Paths must have the exact same number of points for smooth morphing.", difficulty: 2 },
          { id: "svg29-q2", type: "mcq", question: "Which GSAP plugin enables path morphing?", options: ["CSSPlugin", "MorphSVGPlugin", "ScrollTrigger", "Draggable"], correctAnswer: 1, explanation: "GreenSock's MorphSVGPlugin handles automatic path matching.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Morphing", value: "Transform one shape to another" },
        { label: "Path matching", value: "Same number of points required" },
        { label: "MorphSVGPlugin", value: "GSAP plugin for morphing" }
      ]
    },
    {
      id: "svg-30",
      number: 30,
      partLabel: "Part 3: SVG Animation Systems",
      title: "SVG Physics Effects",
      subtitle: "Gravity, bounce, spring simulations in SVG",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 90,
      prerequisites: ["svg-26"],
      learningObjectives: ["Implement gravity simulation", "Create bounce and spring physics", "Build physics-based SVG interactions"],
      sections: [
        {
          id: "s1",
          title: "Gravity and Acceleration",
          whyItMatters: "Physics-based animation feels more natural and engaging than linear motion.",
          content: "Implement gravity by applying constant acceleration to an element's y-velocity each frame. velocity += gravity * dt, position += velocity * dt. On ground collision, invert velocity with damping."
        },
        {
          id: "s2",
          title: "Spring and Elastic Motion",
          whyItMatters: "Spring physics creates natural-looking stretch and rebound effects.",
          content: "Spring simulation: apply a restoring force proportional to displacement (Hooke's Law: F = -kx), with damping to reduce oscillation over time."
        }
      ],
      quiz: {
        questions: [
          { id: "svg30-q1", type: "mcq", question: "What does the damping value do in a spring simulation?", options: ["Accelerates motion", "Reduces oscillation over time", "Changes the color", "Stops the simulation"], correctAnswer: 1, explanation: "Damping reduces the amplitude of oscillation over time.", difficulty: 3 },
          { id: "svg30-q2", type: "true-false", question: "Gravity in animation is implemented as constant acceleration per frame.", correctAnswer: true, explanation: "Gravity adds constant acceleration to the y-velocity each frame.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Gravity", value: "Constant y-acceleration per frame" },
        { label: "Spring", value: "F = -kx (Hooke's Law)" },
        { label: "Damping", value: "Reduces oscillation amplitude" }
      ]
    },    {
      id: "svg-31",
      number: 31,
      partLabel: "Part 3: SVG Animation Systems",
      title: "Scroll-Based SVG Animation",
      subtitle: "Intersection Observer, scroll-driven animations",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 80,
      prerequisites: ["svg-26"],
      learningObjectives: ["Use Intersection Observer with SVG", "Create scroll-driven SVG animations", "Build scroll-triggered reveals"],
      sections: [
        {
          id: "s1",
          title: "Intersection Observer with SVG",
          whyItMatters: "Intersection Observer triggers animations when elements enter the viewport.",
          content: "Intersection Observer detects when SVG elements become visible in the viewport. Use it to start animations on scroll, lazy-render complex SVG, and trigger reveals."
        },
        {
          id: "s2",
          title: "Scroll-Driven Animation Techniques",
          whyItMatters: "Scrolling is a natural interaction — tying SVG animation to scroll creates immersive storytelling.",
          content: "Map scroll progress (0-1) to SVG animation progress. Calculate progress as: scrollY / (documentHeight - windowHeight). Use this to drive attribute values, transforms, or path morphing."
        }
      ],
      quiz: {
        questions: [
          { id: "svg31-q1", type: "mcq", question: "What API detects when an SVG element enters the viewport?", options: ["ResizeObserver", "IntersectionObserver", "MutationObserver", "ScrollObserver"], correctAnswer: 1, explanation: "IntersectionObserver fires callbacks when elements become visible.", difficulty: 2 },
          { id: "svg31-q2", type: "mcq", question: "How do you calculate scroll progress?", options: ["scrollY / innerHeight", "scrollY / (docHeight - winHeight)", "scrollY / docHeight", "scrollY * 100"], correctAnswer: 1, explanation: "Progress = scrollY / (documentHeight - windowHeight).", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "IntersectionObserver", value: "Detect viewport visibility" },
        { label: "Scroll progress", value: "scrollY / (docH - winH)" },
        { label: "Scroll reveal", value: "Trigger on viewport entry" }
      ]
    },
    {
      id: "svg-32",
      number: 32,
      partLabel: "Part 3: SVG Animation Systems",
      title: "Framer Motion + SVG",
      subtitle: "Motion.path, motion.circle, variants for SVG",
      difficulty: "Advanced",
      estimatedMinutes: 55,
      xpReward: 85,
      prerequisites: ["svg-26"],
      learningObjectives: ["Use Framer Motion with SVG elements", "Create SVG animations with motion components", "Implement variant-based SVG animations"],
      sections: [
        {
          id: "s1",
          title: "Framer Motion SVG Components",
          whyItMatters: "Framer Motion provides declarative SVG animation with powerful features.",
          content: "Framer Motion wraps SVG elements as motion components: motion.circle, motion.rect, motion.path, motion.svg. Animate props directly with the animate prop."
        },
        {
          id: "s2",
          title: "Variants and Gesture Animations",
          whyItMatters: "Variants organize animation states; gestures enable hover, tap, and drag on SVG elements.",
          content: "Variants define named animation states. Animate between them by passing the variant name to animate prop. Gestures: whileHover, whileTap, whileDrag, whileFocus."
        }
      ],
      quiz: {
        questions: [
          { id: "svg32-q1", type: "mcq", question: "How do you animate an SVG circle with Framer Motion?", options: ["<motion.circle>", "<animated.circle>", "<motion.svg.circle>", "<svg.circle.motion>"], correctAnswer: 0, explanation: "Use motion.circle component for animated SVG circles.", difficulty: 1 },
          { id: "svg32-q2", type: "mcq", question: "What Framer Motion feature organizes reusable animation states?", options: ["Animations", "Variants", "Keyframes", "Transitions"], correctAnswer: 1, explanation: "Variants define reusable named animation state objects.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "motion.circle", value: "Framer Motion animated SVG" },
        { label: "variants", value: "Named animation states" },
        { label: "whileHover", value: "Gesture-based animation trigger" }
      ]
    },
    {
      id: "svg-33",
      number: 33,
      partLabel: "Part 3: SVG Animation Systems",
      title: "High-Performance SVG Animation",
      subtitle: "Will-change, compositing, GPU acceleration",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 80,
      prerequisites: ["svg-26"],
      learningObjectives: ["Optimize SVG animation performance", "Use GPU-accelerated properties", "Debug animation performance issues"],
      sections: [
        {
          id: "s1",
          title: "GPU Acceleration for SVG",
          whyItMatters: "GPU-accelerated animations run at 60fps without jank.",
          content: "GPU-accelerated properties: transform (translate, scale, rotate) and opacity. These don't trigger layout or paint. Avoid animating: width, height, top, left, fill, stroke, d (path data)."
        },
        {
          id: "s2",
          title: "Performance Optimization Techniques",
          whyItMatters: "Complex SVG animations need careful optimization to maintain smooth frame rates.",
          content: "Techniques: use transform instead of position attributes, reduce SVG complexity, use CSS for simple animations, throttle scroll/resize handlers, use contain: layout style."
        }
      ],
      quiz: {
        questions: [
          { id: "svg33-q1", type: "mcq", question: "Which properties are GPU-accelerated?", options: ["width and height", "transform and opacity", "fill and stroke", "x and y"], correctAnswer: 1, explanation: "Transform and opacity are composited on GPU.", difficulty: 2 },
          { id: "svg33-q2", type: "true-false", question: "Animating the 'd' attribute is GPU-accelerated.", correctAnswer: false, explanation: "Path data animation triggers paint — not GPU-accelerated.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "GPU acceleration", value: "transform + opacity only" },
        { label: "will-change", value: "Hint browser for GPU layer" },
        { label: "Avoid", value: "Animating d, fill, width, height" }
      ]
    },
    {
      id: "svg-34",
      number: 34,
      partLabel: "Part 3: SVG Animation Systems",
      title: "Production Animation Systems",
      subtitle: "Reusable animation components, timelines, choreography",
      difficulty: "Advanced",
      estimatedMinutes: 55,
      xpReward: 85,
      prerequisites: ["svg-33"],
      learningObjectives: ["Build reusable SVG animation components", "Create animation timelines and sequences", "Orchestrate multi-element choreography"],
      sections: [
        {
          id: "s1",
          title: "Reusable Animation Components",
          whyItMatters: "Production systems need consistent, reusable animation patterns.",
          content: "Create animation wrapper components that accept props for duration, delay, easing, and animation type. Use React patterns to compose animations."
        },
        {
          id: "s2",
          title: "Timelines and Choreography",
          whyItMatters: "Timelines coordinate multiple elements into a polished, professional animation sequence.",
          content: "Use GSAP timeline or Framer Motion's stagger to sequence animations. staggerChildren in variants automatically adds delays between child animations."
        }
      ],
      quiz: {
        questions: [
          { id: "svg34-q1", type: "mcq", question: "What pattern staggers child animations automatically?", options: ["manual delays", "staggerChildren in variants", "setTimeout loop", "CSS animation-delay"], correctAnswer: 1, explanation: "staggerChildren in Framer Motion variants staggers child elements.", difficulty: 2 },
          { id: "svg34-q2", type: "mcq", question: "What is a key benefit of animation components?", options: ["Faster rendering", "Reusability and consistency", "Smaller file size", "Automatic easing"], correctAnswer: 1, explanation: "Reusable animation components ensure consistent patterns.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "staggerChildren", value: "Auto-stagger child animations" },
        { label: "Timeline", value: "Sequenced multi-element animation" },
        { label: "Components", value: "Reusable animation patterns" }
      ]
    },    // ============ PART 4: INTERACTIVE SVG APPLICATIONS (CHAPTERS 35-46) ============
    {
      id: "svg-35",
      number: 35,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG DOM Manipulation",
      subtitle: "createElementNS, getBBox, setAttribute in SVG",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-10"],
      learningObjectives: ["Create SVG elements with JavaScript", "Query and measure SVG elements", "Manipulate SVG attributes dynamically"],
      sections: [
        {
          id: "s1",
          title: "Creating SVG Elements with JavaScript",
          whyItMatters: "Dynamic SVG creation enables data-driven graphics and interactive applications.",
          content: "Use document.createElementNS('http://www.w3.org/2000/svg', 'elementName') to create SVG elements. The namespace is mandatory — standard DOM methods create HTML elements, not SVG."
        },
        {
          id: "s2",
          title: "Querying and Measuring SVG",
          whyItMatters: "Measuring elements enables precise positioning, layout, and hit detection.",
          content: "getBBox() returns the bounding box {x, y, width, height} of an SVG element. getCTM() returns the current transformation matrix. getScreenCTM() returns the matrix relative to the screen."
        },
        {
          id: "s3",
          title: "Dynamic Attribute Manipulation",
          whyItMatters: "Real-time attribute changes drive animation and interactivity.",
          content: "Use setAttribute('attr', value) to change any SVG attribute. For styling, use element.style.property = value or setAttribute('style', ...). For class manipulation, use classList API."
        }
      ],
      quiz: {
        questions: [
          { id: "svg35-q1", type: "mcq", question: "What method creates SVG elements in JavaScript?", options: ["createElement", "createElementNS", "createSVGElement", "new SVGElement"], correctAnswer: 1, explanation: "createElementNS with SVG namespace is required for SVG elements.", difficulty: 2 },
          { id: "svg35-q2", type: "mcq", question: "What method returns the bounding box of an SVG element?", options: ["getBoundingClientRect", "getBBox", "getRect", "getBounds"], correctAnswer: 1, explanation: "getBBox() returns the SVG element's bounding box in local coordinates.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "createElementNS", value: "Create SVG elements in JS" },
        { label: "getBBox", value: "Get bounding box dimensions" },
        { label: "setAttribute", value: "Change SVG attributes dynamically" }
      ]
    },
    {
      id: "svg-36",
      number: 36,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "Mouse and Touch Events",
      subtitle: "Onclick, onmouseover, hit testing in SVG",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-35"],
      learningObjectives: ["Handle mouse events on SVG elements", "Implement touch events for mobile", "Perform hit testing in SVG"],
      sections: [
        {
          id: "s1",
          title: "Mouse Events on SVG",
          whyItMatters: "Mouse interactions make SVG elements clickable, hoverable, and draggable.",
          content: "SVG elements support standard DOM mouse events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave. The target element receives the event."
        },
        {
          id: "s2",
          title: "Touch and Pointer Events",
          whyItMatters: "Mobile devices need touch support for SVG interaction.",
          content: "Use pointer events (pointerdown, pointermove, pointerup) for unified mouse+touch handling. Alternatively, use touch events (touchstart, touchmove, touchend) for mobile-specific behavior."
        },
        {
          id: "s3",
          title: "Hit Testing in SVG",
          whyItMatters: "Hit testing determines which element is at a given coordinate.",
          content: "document.elementFromPoint(x, y) returns the topmost element at that position. For more control, use isPointInFill() or isPointInStroke() on SVG elements to test specific geometries."
        }
      ],
      quiz: {
        questions: [
          { id: "svg36-q1", type: "mcq", question: "Which event provides unified mouse+touch handling?", options: ["click", "pointerdown", "touchstart", "mousedown"], correctAnswer: 1, explanation: "Pointer Events API unifies mouse and touch input.", difficulty: 2 },
          { id: "svg36-q2", type: "mcq", question: "What method finds the element at a specific screen coordinate?", options: ["getElementAt", "elementFromPoint", "hitTest", "findElement"], correctAnswer: 1, explanation: "elementFromPoint(x, y) returns the topmost element at that coordinate.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "click/mouseover", value: "Standard mouse events" },
        { label: "pointer events", value: "Unified mouse + touch" },
        { label: "elementFromPoint", value: "Hit testing at coordinates" }
      ]
    },
    {
      id: "svg-37",
      number: 37,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "Interactive Maps",
      subtitle: "GeoJSON to SVG, zoom/pan, tooltips",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 85,
      prerequisites: ["svg-35", "svg-36"],
      learningObjectives: ["Convert GeoJSON to SVG paths", "Implement zoom and pan controls", "Add interactive tooltips to map regions"],
      sections: [
        {
          id: "s1",
          title: "GeoJSON to SVG Conversion",
          whyItMatters: "Mapping geographic data to SVG enables interactive maps without heavy libraries.",
          content: "GeoJSON contains coordinates [longitude, latitude] that need projection to 2D SVG coordinates. Use a simple Mercator projection: x = (lon + 180) / 360 * width, y = (90 - lat) / 180 * height."
        },
        {
          id: "s2",
          title: "Zoom, Pan, and Tooltips",
          whyItMatters: "Navigation and information display are essential for interactive maps.",
          content: "Implement zoom with transform scale on the map group. Pan by adjusting translate offset on mouse drag. Tooltips: show information on hover using mouse position to position an HTML tooltip overlay."
        }
      ],
      quiz: {
        questions: [
          { id: "svg37-q1", type: "mcq", question: "What coordinate system does GeoJSON use?", options: ["SVG coordinates", "Longitude/Latitude", "Pixel coordinates", "Grid coordinates"], correctAnswer: 1, explanation: "GeoJSON uses [longitude, latitude] coordinate pairs.", difficulty: 2 },
          { id: "svg37-q2", type: "mcq", question: "What SVG attribute enables zoom functionality?", options: ["zoom", "transform scale", "viewBox change", "width/height"], correctAnswer: 1, explanation: "Use transform='scale(factor)' on a group for zoom.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "GeoJSON", value: "Geographic data format" },
        { label: "Mercator", value: "Map projection conversion" },
        { label: "Pan/Zoom", value: "transform: translate/scale" }
      ]
    },
    {
      id: "svg-38",
      number: 38,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG Dashboards",
      subtitle: "Dashboard layout, reusable chart components",
      difficulty: "Advanced",
      estimatedMinutes: 55,
      xpReward: 80,
      prerequisites: ["svg-35"],
      learningObjectives: ["Design SVG dashboard layouts", "Build reusable chart components", "Compose multi-chart dashboards"],
      sections: [
        {
          id: "s1",
          title: "Dashboard Grid Layout",
          whyItMatters: "A well-structured layout is the foundation of any dashboard.",
          content: "Use nested SVG groups or HTML divs with SVG children. Grid layouts: arrange charts in a responsive grid using CSS Grid for the container and viewBox-based SVG for each chart."
        },
        {
          id: "s2",
          title: "Reusable Chart Components",
          whyItMatters: "Reusable components reduce code duplication and ensure consistency.",
          content: "Create chart components in React/Vue as reusable SVG wrappers. Pass data, dimensions, and configuration as props. Each chart manages its own SVG viewBox and rendering."
        }
      ],
      quiz: {
        questions: [
          { id: "svg38-q1", type: "mcq", question: "What is the benefit of reusable chart components?", options: ["Slower rendering", "Code reuse and consistency", "Larger bundle size", "Less flexibility"], correctAnswer: 1, explanation: "Reusable components ensure consistent styling and reduce duplication.", difficulty: 1 },
          { id: "svg38-q2", type: "true-false", question: "Each chart in a dashboard should use a separate viewBox.", correctAnswer: true, explanation: "Each chart uses its own viewBox for independent scaling and positioning.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Dashboard", value: "Multi-chart SVG layout" },
        { label: "viewBox per chart", value: "Independent scaling" },
        { label: "Components", value: "Reusable chart widgets" }
      ]
    },
    {
      id: "svg-39",
      number: 39,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "Data Visualization",
      subtitle: "Scales, axes, data binding (D3 concepts)",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 85,
      prerequisites: ["svg-35"],
      learningObjectives: ["Create scales for data mapping", "Draw SVG axes", "Bind data to SVG elements"],
      sections: [
        {
          id: "s1",
          title: "Scales for Data Mapping",
          whyItMatters: "Scales transform data values (like sales figures) into visual values (pixel positions).",
          content: "A linear scale maps a domain (data range) to a range (pixel range): d3.scaleLinear().domain([0, 100]).range([0, 500]). You can build your own scale functions without D3."
        },
        {
          id: "s2",
          title: "Axes and Grid Lines",
          whyItMatters: "Axes provide context for interpreting visual data.",
          content: "Draw axes with SVG line and text elements. Calculate tick positions from the scale. Add grid lines as horizontal/vertical lines at each tick. Use stroke-dasharray for subtle grid styling."
        },
        {
          id: "s3",
          title: "Data Binding with SVG",
          whyItMatters: "Data binding creates visual elements from data arrays dynamically.",
          content: "Iterate over data and create SVG elements for each data point. Use scale functions to position elements. Update approach: enter (create new), update (modify existing), exit (remove)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg39-q1", type: "mcq", question: "What does a scale function do?", options: ["Sorts data", "Maps data values to visual values", "Filters data", "Animates data"], correctAnswer: 1, explanation: "Scales map data domain (e.g., 0-100) to visual range (e.g., 0-500px).", difficulty: 2 },
          { id: "svg39-q2", type: "mcq", question: "Which D3 concept creates SVG elements from data?", options: ["Scales", "Data binding", "Axes", "Transitions"], correctAnswer: 1, explanation: "Data binding creates/manages SVG elements for each data item.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Scale", value: "Map data domain to visual range" },
        { label: "Axes", value: "Tick marks and labels" },
        { label: "Data binding", value: "Create SVG from data arrays" }
      ]
    },
    {
      id: "svg-40",
      number: 40,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG Charts and Graphs",
      subtitle: "Bar, line, pie, area charts in raw SVG",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 85,
      prerequisites: ["svg-39"],
      learningObjectives: ["Build bar charts in SVG", "Create line and area charts", "Implement pie charts with paths"],
      sections: [
        {
          id: "s1",
          title: "Bar Charts",
          whyItMatters: "Bar charts are the most common chart type — simple to implement and easy to read.",
          content: "Each bar is a rect element. Calculate x (category position), y (top of bar based on value), width (bar width), height (value scaled). Use uniform width for all bars."
        },
        {
          id: "s2",
          title: "Line and Area Charts",
          whyItMatters: "Line charts show trends over time; area charts emphasize magnitude.",
          content: "Line chart: use polyline with points from (x1, y1) to (xn, yn). Area chart: same polyline plus points down to the baseline and back to start. Fill the enclosed area."
        },
        {
          id: "s3",
          title: "Pie and Donut Charts",
          whyItMatters: "Pie charts show proportions and part-to-whole relationships.",
          content: "Pie chart segments: use path A (arc) commands. Calculate start and end angles for each segment. For donut charts, subtract inner radius using a second arc."
        }
      ],
      quiz: {
        questions: [
          { id: "svg40-q1", type: "mcq", question: "What SVG element represents bars in a bar chart?", options: ["bar", "rect", "path", "line"], correctAnswer: 1, explanation: "Each bar in a bar chart is an SVG rect element.", difficulty: 1 },
          { id: "svg40-q2", type: "mcq", question: "What path command creates pie chart segments?", options: ["L (line)", "A (arc)", "C (cubic)", "Q (quadratic)"], correctAnswer: 1, explanation: "Arc (A) commands draw the curved edges of pie segments.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Bar chart", value: "rect elements per data point" },
        { label: "Line chart", value: "polyline connecting points" },
        { label: "Pie chart", value: "path with arc commands" }
      ]
    },
    {
      id: "svg-41",
      number: 41,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG Games",
      subtitle: "Game loop, collision detection, sprite system",
      difficulty: "Advanced",
      estimatedMinutes: 65,
      xpReward: 90,
      prerequisites: ["svg-35", "svg-26"],
      learningObjectives: ["Implement a game loop with requestAnimationFrame", "Perform collision detection in SVG", "Build a sprite-based SVG game system"],
      sections: [
        {
          id: "s1",
          title: "Game Loop with requestAnimationFrame",
          whyItMatters: "The game loop is the heartbeat of any interactive game.",
          content: "A game loop calls update (logic) and render (draw) functions each frame. Use requestAnimationFrame for synchronization with the display refresh rate. Track delta time for frame-rate-independent physics."
        },
        {
          id: "s2",
          title: "Collision Detection",
          whyItMatters: "Collision detection enables interactions between game objects.",
          content: "Simple AABB (Axis-Aligned Bounding Box) collision: check if two rectangles overlap using their x, y, width, height. For circles, check if distance between centers < sum of radii."
        },
        {
          id: "s3",
          title: "Sprite System",
          whyItMatters: "Sprites represent game entities with position, velocity, and rendering.",
          content: "Each sprite is an object with x, y, vx, vy, width, height, and an SVG element reference. The update function moves sprites based on velocity and applies physics. The render function updates the SVG element's attributes."
        }
      ],
      quiz: {
        questions: [
          { id: "svg41-q1", type: "mcq", question: "What API drives the game loop?", options: ["setInterval", "requestAnimationFrame", "setTimeout", "Web Workers"], correctAnswer: 1, explanation: "requestAnimationFrame syncs the game loop with display refresh.", difficulty: 2 },
          { id: "svg41-q2", type: "mcq", question: "What is AABB collision detection?", options: ["Axis-Aligned Bounding Box", "Angle-Adjusted Bouncing Ball", "All-Around Bounding Box", "Automated Bounding Behavior"], correctAnswer: 0, explanation: "AABB checks overlap of axis-aligned rectangles.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Game loop", value: "requestAnimationFrame cycle" },
        { label: "AABB", value: "Rectangle collision detection" },
        { label: "Sprites", value: "Game entity objects" }
      ]
    },
    {
      id: "svg-42",
      number: 42,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "Interactive UI Components",
      subtitle: "Buttons, sliders, progress rings in SVG",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 70,
      prerequisites: ["svg-36"],
      learningObjectives: ["Build SVG buttons with states", "Create SVG sliders and inputs", "Implement circular progress indicators"],
      sections: [
        {
          id: "s1",
          title: "SVG Buttons and Controls",
          whyItMatters: "Custom SVG buttons provide unique visual designs impossible with standard HTML buttons.",
          content: "Create buttons with rect or path background and text label. Use CSS :hover and :active for state changes. Style with transitions for smooth feedback. Add role='button' for accessibility."
        },
        {
          id: "s2",
          title: "SVG Sliders",
          whyItMatters: "SVG sliders offer complete control over appearance for branded UI.",
          content: "Slider components: track (rect or line), thumb (circle), and fill indicator (rect). Use mouse/touch drag to update the value. Calculate value from thumb position along the track."
        },
        {
          id: "s3",
          title: "Circular Progress Rings",
          whyItMatters: "Progress rings are a popular UI pattern for dashboards and loading states.",
          content: "Use a circle with stroke-dasharray and stroke-dashoffset. Total circumference = 2 * PI * r. Set stroke-dasharray = circumference, then animate stroke-dashoffset = circumference * (1 - progress)."
        }
      ],
      quiz: {
        questions: [
          { id: "svg42-q1", type: "mcq", question: "What CSS technique creates circular progress rings?", options: ["fill animation", "stroke-dashoffset animation", "border-radius", "clip-path"], correctAnswer: 1, explanation: "stroke-dashoffset animation creates circular progress indicators.", difficulty: 2 },
          { id: "svg42-q2", type: "true-false", question: "SVG buttons need role='button' for accessibility.", correctAnswer: true, explanation: "Role attribute ensures screen readers identify SVG buttons correctly.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Buttons", value: "rect + text + role='button'" },
        { label: "Sliders", value: "Track + thumb + drag events" },
        { label: "Progress ring", value: "stroke-dashoffset animation" }
      ]
    },
    {
      id: "svg-43",
      number: 43,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG in React",
      subtitle: "JSX SVG, styled-components SVG, inline vs imports",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 70,
      prerequisites: ["svg-35"],
      learningObjectives: ["Use SVG as JSX in React components", "Style SVG with styled-components", "Choose between inline and imported SVG"],
      sections: [
        {
          id: "s1",
          title: "SVG as JSX in React",
          whyItMatters: "JSX supports SVG elements natively, making SVG part of your component tree.",
          content: "In React JSX, SVG elements work directly: use camelCase attributes (viewBox, strokeWidth, fillOpacity). Create SVG components that accept props for dynamic styling and sizing."
        },
        {
          id: "s2",
          title: "Styled-Components and SVG",
          whyItMatters: "CSS-in-JS provides scoped styling and dynamic theming for SVG.",
          content: "styled-components work with SVG elements: const Icon = styled.circleill: ;. Scoped styles ensure SVG styles don't leak. Dynamic props enable theme support."
        },
        {
          id: "s3",
          title: "Inline vs Imported SVG",
          whyItMatters: "The loading strategy affects performance and bundle size.",
          content: "Inline SVG: imported as React components (SVGR), tree-shakeable, styleable via props. Imported SVG: via <img> or <use> href, cached separately, not styleable. Use inline for icons, imported for large illustrations."
        }
      ],
      quiz: {
        questions: [
          { id: "svg43-q1", type: "mcq", question: "What attribute naming convention does JSX SVG use?", options: ["kebab-case", "camelCase", "snake_case", "ALL_CAPS"], correctAnswer: 1, explanation: "JSX uses camelCase attributes like viewBox and strokeWidth.", difficulty: 1 },
          { id: "svg43-q2", type: "mcq", question: "When should you use inline SVG over imported SVG?", options: ["For photographs", "For icons that need styling", "For large files", "For animations"], correctAnswer: 1, explanation: "Inline SVG is best for icons that need dynamic styling via props.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "JSX SVG", value: "camelCase attributes required" },
        { label: "styled-components", value: "Scoped SVG styling" },
        { label: "Inline SVG", value: "Styleable, tree-shakeable" }
      ]
    },
    {
      id: "svg-44",
      number: 44,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG Component Systems",
      subtitle: "Reusable icon systems, symbol/use, SVG sprites",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-43"],
      learningObjectives: ["Build reusable icon components", "Use symbol and use for sprite systems", "Create scalable SVG component libraries"],
      sections: [
        {
          id: "s1",
          title: "Icon Components with symbol and use",
          whyItMatters: "symbol and use create reusable icon templates without duplicating path data.",
          content: "Define icons in symbol elements within a hidden SVG sprite. Reference them with use href='#icon-id'. Set fill='currentColor' for theming. This pattern reduces bundle size significantly."
        },
        {
          id: "s2",
          title: "SVG Sprite Systems",
          whyItMatters: "Sprite systems bundle all icons into one file for efficient loading and caching.",
          content: "Create a single SVG sprite file with multiple symbol definitions. Load once, use everywhere. Build tools can auto-generate sprites from individual SVG files. SVGR converts SVGs to React components."
        }
      ],
      quiz: {
        questions: [
          { id: "svg44-q1", type: "mcq", question: "What SVG element defines a reusable icon?", options: ["g", "symbol", "defs", "icon"], correctAnswer: 1, explanation: "symbol defines a reusable icon template for use with use element.", difficulty: 1 },
          { id: "svg44-q2", type: "mcq", question: "What fill value enables icon theming?", options: ["#000", "currentColor", "inherit", "none"], correctAnswer: 1, explanation: "fill='currentColor' makes icons inherit the text color for theming.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "symbol", value: "Reusable icon template" },
        { label: "use", value: "Instantiate a symbol" },
        { label: "currentColor", value: "Theme-aware fill color" }
      ]
    },
    {
      id: "svg-45",
      number: 45,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "SVG Editors",
      subtitle: "Drag handles, control points, live editing in SVG",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 85,
      prerequisites: ["svg-36", "svg-41"],
      learningObjectives: ["Build draggable SVG elements", "Create control points for shape editing", "Implement live coordinate feedback"],
      sections: [
        {
          id: "s1",
          title: "Draggable Elements",
          whyItMatters: "Drag-and-drop is fundamental for any editor or interactive design tool.",
          content: "Implement drag by tracking mousedown (start drag), mousemove (update position), and mouseup (end drag). Use pointer events for unified mouse+touch support. Update cx/cy or x/y attributes during drag."
        },
        {
          id: "s2",
          title: "Control Points and Handles",
          whyItMatters: "Control points let users manipulate shapes — resize, rotate, adjust curves.",
          content: "Create small draggable circles at key positions (corners of rect, endpoints of line, control points of Bézier curves). Dragging a control point updates the corresponding shape attribute."
        }
      ],
      quiz: {
        questions: [
          { id: "svg45-q1", type: "mcq", question: "What event sequence implements drag behavior?", options: ["click-drag-release", "mousedown-mousemove-mouseup", "touchstart-touchend", "dragenter-dragleave-dragover"], correctAnswer: 1, explanation: "Drag uses mousedown (start), mousemove (move), and mouseup (end).", difficulty: 2 },
          { id: "svg45-q2", type: "true-false", question: "Control points should use pointer events for mobile support.", correctAnswer: true, explanation: "Pointer Events API provides unified mouse and touch handling.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Drag", value: "mousedown + mousemove + mouseup" },
        { label: "Control points", value: "Draggable shape handles" },
        { label: "pointer events", value: "Unified input handling" }
      ]
    },
    {
      id: "svg-46",
      number: 46,
      partLabel: "Part 4: Interactive SVG Applications",
      title: "Enterprise SVG Architectures",
      subtitle: "Large-scale SVG patterns, performance at scale",
      difficulty: "Advanced",
      estimatedMinutes: 55,
      xpReward: 80,
      prerequisites: ["svg-44", "svg-33"],
      learningObjectives: ["Design scalable SVG architectures", "Manage SVG performance at enterprise scale", "Implement design system patterns for SVG"],
      sections: [
        {
          id: "s1",
          title: "Enterprise SVG Patterns",
          whyItMatters: "Large-scale applications need structured SVG architecture to remain maintainable.",
          content: "Enterprise patterns: design token-driven styling (colors, sizes from design tokens), component composition (build complex SVG from small components), lazy loading (load SVG on demand), virtualized rendering (only render visible SVG)."
        },
        {
          id: "s2",
          title: "Performance at Scale",
          whyItMatters: "Hundreds of SVG elements can cause performance issues without proper architecture.",
          content: "Techniques: use CSS transforms instead of attribute changes, batch DOM updates, avoid forcing layout with frequent getBBox calls, use will-change strategically, simplify overly complex paths, use symbol sprites."
        }
      ],
      quiz: {
        questions: [
          { id: "svg46-q1", type: "mcq", question: "What is a design token in SVG architecture?", options: ["A security token", "A reusable design value (color, spacing)", "An animation keyframe", "A path command"], correctAnswer: 1, explanation: "Design tokens are named reusable design values like colors and spacing.", difficulty: 2 },
          { id: "svg46-q2", type: "true-false", question: "Virtualized rendering means rendering all SVG elements always.", correctAnswer: false, explanation: "Virtualized rendering only processes SVG elements that are visible in the viewport.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Design tokens", value: "Named reusable design values" },
        { label: "Lazy loading", value: "Load SVG on demand" },
        { label: "Virtualized", value: "Only render visible elements" }
      ]
    },    // ============ PART 5: PERFORMANCE + TOOLING (CHAPTERS 47-54) ============
    {
      id: "svg-47",
      number: 47,
      partLabel: "Part 5: Performance + Tooling",
      title: "SVG Optimization",
      subtitle: "Minification, removing cruft, SVGO principles",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-10"],
      learningObjectives: ["Understand SVG optimization principles", "Use SVGO for automated optimization", "Identify and remove SVG cruft"],
      sections: [
        {
          id: "s1",
          title: "SVG Optimization Principles",
          whyItMatters: "Optimized SVG loads faster, uses less bandwidth, and renders quicker.",
          content: "Optimization removes unnecessary data without changing visual appearance. Key targets: remove editor metadata, consolidate styles, simplify paths, remove empty groups, round coordinates."
        },
        {
          id: "s2",
          title: "SVGO — SVG Optimizer",
          whyItMatters: "SVGO automates optimization with configurable plugins.",
          content: "SVGO (SVG Optimizer) is a Node.js tool that applies optimization plugins. Run with: npx svgo file.svg. Configurable in svgo.config.js with presets. Typical savings: 40-70% file size reduction."
        },
        {
          id: "s3",
          title: "Manual Optimization Techniques",
          whyItMatters: "Even with automation, knowing optimization techniques helps you write cleaner SVG from the start.",
          content: "Manual tips: use relative coordinates, remove redundant commands (h instead of l), remove trailing zeros, use compact syntax, avoid nested groups when unnecessary, remove xml:space and version attributes."
        }
      ],
      quiz: {
        questions: [
          { id: "svg47-q1", type: "mcq", question: "What does SVGO stand for?", options: ["SVG Optimizer", "SVG Object", "SVG Output", "SVG Organization"], correctAnswer: 0, explanation: "SVGO = SVG Optimizer, a Node.js tool for optimizing SVG files.", difficulty: 1 },
          { id: "svg47-q2", type: "mcq", question: "What is the typical file size reduction from SVGO?", options: ["10-20%", "40-70%", "80-90%", "100%"], correctAnswer: 1, explanation: "SVGO typically reduces SVG file sizes by 40-70% on average.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "SVGO", value: "Node.js SVG optimizer" },
        { label: "npx svgo", value: "Optimize SVG files" },
        { label: "Savings", value: "40-70% file size reduction" }
      ]
    },
    {
      id: "svg-48",
      number: 48,
      partLabel: "Part 5: Performance + Tooling",
      title: "SVG Compression",
      subtitle: "Gzip, Brotli, SVGZ format for delivery",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ["svg-47"],
      learningObjectives: ["Understand SVG text compression", "Use gzip and Brotli for SVG", "Implement SVGZ format"],
      sections: [
        {
          id: "s1",
          title: "Text Compression for SVG",
          whyItMatters: "SVG is text-based and compresses extremely well — often 70-80% reduction.",
          content: "Gzip reduces SVG size by 70-85% because repeated patterns (attributes, coordinates) compress efficiently. Brotli compresses even better (10-20% smaller than gzip for SVG). Enable on your CDN or server."
        },
        {
          id: "s2",
          title: "SVGZ Format",
          whyItMatters: "SVGZ is gzip-compressed SVG — the file format itself is compressed.",
          content: "SVGZ files use .svgz extension with gzip compression applied to the file. Browsers decompress them automatically. Only use for static files, not for dynamically generated SVG."
        }
      ],
      quiz: {
        questions: [
          { id: "svg48-q1", type: "mcq", question: "What compression algorithm does SVGZ use?", options: ["Brotli", "Gzip", "Deflate", "LZMA"], correctAnswer: 1, explanation: "SVGZ uses gzip compression applied to the SVG file content.", difficulty: 1 },
          { id: "svg48-q2", type: "mcq", question: "Which compression is typically better for SVG?", options: ["Gzip", "Brotli", "Both same", "Neither works"], correctAnswer: 1, explanation: "Brotli typically compresses SVG 10-20% better than gzip.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Gzip", value: "70-85% SVG reduction" },
        { label: "Brotli", value: "10-20% better than gzip" },
        { label: "SVGZ", value: "Gzip-compressed SVG file" }
      ]
    },
    {
      id: "svg-49",
      number: 49,
      partLabel: "Part 5: Performance + Tooling",
      title: "Accessibility in SVG",
      subtitle: "Title, desc, role='img', aria-label for accessible graphics",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 60,
      prerequisites: ["svg-10"],
      learningObjectives: ["Add accessible titles and descriptions", "Use ARIA attributes correctly", "Ensure SVG is screen-reader friendly"],
      sections: [
        {
          id: "s1",
          title: "SVG Accessibility Fundamentals",
          whyItMatters: "Accessible SVG ensures all users can understand your graphics, regardless of disability.",
          content: "Key accessibility elements: title (brief label, like alt text), desc (detailed description), role='img' (identifies SVG as an image), aria-label (accessible name), aria-labelledby (references title/desc ids)."
        },
        {
          id: "s2",
          title: "ARIA and Screen Reader Support",
          whyItMatters: "Proper ARIA attributes make SVG comprehensible to screen readers.",
          content: "For inline SVG: add role='img' and aria-label or aria-labelledby. Use focusable elements for interactive SVG. Add tabindex for keyboard navigation. Use aria-pressed for toggle buttons."
        }
      ],
      quiz: {
        questions: [
          { id: "svg49-q1", type: "mcq", question: "What role attribute should SVG have for accessibility?", options: ["role='graphic'", "role='img'", "role='svg'", "role='picture'"], correctAnswer: 1, explanation: "role='img' identifies SVG as an image for screen readers.", difficulty: 1 },
          { id: "svg49-q2", type: "mcq", question: "What SVG element provides a brief accessible label?", options: ["desc", "title", "label", "caption"], correctAnswer: 1, explanation: "The title element provides a brief label (like HTML alt text).", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "role='img'", value: "Identify SVG as image" },
        { label: "title", value: "Brief accessible label" },
        { label: "desc", value: "Detailed description" }
      ]
    },
    {
      id: "svg-50",
      number: 50,
      partLabel: "Part 5: Performance + Tooling",
      title: "Responsive SVG Systems",
      subtitle: "Fluid sizing, viewBox strategies, media queries",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-5"],
      learningObjectives: ["Create fluid SVG sizing", "Use viewBox for responsiveness", "Apply media queries to SVG"],
      sections: [
        {
          id: "s1",
          title: "Fluid SVG Sizing",
          whyItMatters: "Fluid SVG adapts to any screen size without multiple asset versions.",
          content: "Remove explicit width/height, use CSS width: 100% and height: auto. Always define viewBox. Use max-width: 100% to prevent overflow on small screens."
        },
        {
          id: "s2",
          title: "Media Queries in SVG",
          whyItMatters: "Media queries adapt SVG content for different screen sizes and devices.",
          content: "Use CSS media queries inside SVG inline style or linked CSS: @media (max-width: 600px) { .desktop-only { display: none; } }. This hides/shows SVG elements based on screen size."
        }
      ],
      quiz: {
        questions: [
          { id: "svg50-q1", type: "mcq", question: "What is required for responsive SVG scaling?", options: ["Fixed width", "viewBox attribute", "Inline styles", "External CSS"], correctAnswer: 1, explanation: "viewBox enables responsive scaling — without it, SVG uses fixed coordinate system.", difficulty: 1 },
          { id: "svg50-q2", type: "true-false", question: "CSS media queries work inside SVG files.", correctAnswer: true, explanation: "SVG supports CSS media queries for responsive element visibility.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Fluid", value: "100% width + viewBox" },
        { label: "max-width", value: "Prevents overflow" },
        { label: "Media queries", value: "Responsive SVG content" }
      ]
    },
    {
      id: "svg-51",
      number: 51,
      partLabel: "Part 5: Performance + Tooling",
      title: "SVG Asset Pipelines",
      subtitle: "Sprites, bundling, LQIP placeholders",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ["svg-44"],
      learningObjectives: ["Build SVG sprite pipelines", "Integrate SVG with build tools", "Create low-quality image placeholders"],
      sections: [
        {
          id: "s1",
          title: "SVG Sprite Generation",
          whyItMatters: "Sprites combine multiple SVG icons into one file for efficient loading.",
          content: "Build tools like svg-sprite-loader and svg-spreact combine individual SVG files into a single sprite. Each icon becomes a symbol. Load once, reference with use. Reduces HTTP requests significantly."
        },
        {
          id: "s2",
          title: "LQIP with SVG",
          whyItMatters: "LQIP (Low-Quality Image Placeholders) improves perceived performance by showing a preview.",
          content: "Create tiny inline SVG placeholders for images. Use a simple shape or blurred outline that represents the image. Replace with the full image on load. SVGs for LQIP are typically under 1KB."
        }
      ],
      quiz: {
        questions: [
          { id: "svg51-q1", type: "mcq", question: "What is the main benefit of SVG sprites?", options: ["Better colors", "Fewer HTTP requests", "Smaller images", "Faster rendering"], correctAnswer: 1, explanation: "Sprites combine many icons into one file, reducing HTTP requests.", difficulty: 1 },
          { id: "svg51-q2", type: "mcq", question: "What does LQIP stand for?", options: ["Low Quality Image Preview", "Low Quality Image Placeholder", "Large Quick Image Processor", "Lightweight Query Image Protocol"], correctAnswer: 1, explanation: "LQIP = Low-Quality Image Placeholder for perceived performance.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Sprites", value: "Combined SVG symbol files" },
        { label: "svg-sprite-loader", value: "Webpack sprite generator" },
        { label: "LQIP", value: "Tiny SVG placeholder" }
      ]
    },
    {
      id: "svg-52",
      number: 52,
      partLabel: "Part 5: Performance + Tooling",
      title: "SVG CDN Strategies",
      subtitle: "Cache headers, CDN delivery, SRI hashes",
      difficulty: "Advanced",
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ["svg-51"],
      learningObjectives: ["Configure cache headers for SVG", "Deliver SVG via CDN", "Use SRI for SVG integrity"],
      sections: [
        {
          id: "s1",
          title: "CDN Delivery for SVG",
          whyItMatters: "CDN delivery reduces latency and offloads server bandwidth for SVG assets.",
          content: "Serve SVG from a CDN with Cache-Control: public, max-age=31536000, immutable for versioned assets. Use CDN features like automatic optimization, Brotli compression, and HTTP/2 multiplexing."
        },
        {
          id: "s2",
          title: "SRI for SVG Integrity",
          whyItMatters: "SRI (Subresource Integrity) ensures CDN-delivered SVG hasn't been tampered with.",
          content: "Add integrity attribute with base64-encoded hash: integrity='sha384-...'. The browser verifies the file matches the hash before executing. Recommended for critical SVG assets."
        }
      ],
      quiz: {
        questions: [
          { id: "svg52-q1", type: "mcq", question: "What cache header is recommended for versioned SVG?", options: ["no-cache", "public, max-age=31536000, immutable", "private", "must-revalidate"], correctAnswer: 1, explanation: "Versioned SVG should have immutable cache for one year.", difficulty: 2 },
          { id: "svg52-q2", type: "mcq", question: "What does SRI protect against?", options: ["Slow loading", "CDN tampering", "Broken links", "File size"], correctAnswer: 1, explanation: "SRI ensures CDN files haven't been modified by verifying a cryptographic hash.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Cache", value: "immutable for versioned SVG" },
        { label: "CDN", value: "Global edge delivery" },
        { label: "SRI", value: "Integrity verification hash" }
      ]
    },
    {
      id: "svg-53",
      number: 53,
      partLabel: "Part 5: Performance + Tooling",
      title: "SVG Security Considerations",
      subtitle: "No XSS, sanitizer, CSP, safe attributes",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 70,
      prerequisites: ["svg-10"],
      learningObjectives: ["Understand SVG security risks", "Implement SVG sanitization", "Configure CSP for safe SVG"],
      sections: [
        {
          id: "s1",
          title: "SVG Security Risks",
          whyItMatters: "SVG can contain scripts, external references, and other security vectors.",
          content: "SVG supports script elements, event handlers (onclick, onmouseover), and external resources. User-uploaded SVG can be a vector for XSS attacks. Always sanitize untrusted SVG."
        },
        {
          id: "s2",
          title: "SVG Sanitization and CSP",
          whyItMatters: "Sanitizers remove dangerous content; CSP prevents execution even if content passes through.",
          content: "Use DOMPurify or similar libraries to sanitize SVG: remove script, event handlers, foreignObject, and dangerous attributes. Configure CSP header: script-src 'self' blocks inline SVG scripts. Use img-src 'self' for SVG images."
        }
      ],
      quiz: {
        questions: [
          { id: "svg53-q1", type: "mcq", question: "Why is user-uploaded SVG potentially dangerous?", options: ["Large file size", "Can contain scripts for XSS", "Complex syntax", "Slow rendering"], correctAnswer: 1, explanation: "SVG can contain script elements and event handlers for XSS attacks.", difficulty: 2 },
          { id: "svg53-q2", type: "mcq", question: "What library is commonly used for SVG sanitization?", options: ["DOMPurify", "SVGSanitizer", "CleanSVG", "SecureSVG"], correctAnswer: 0, explanation: "DOMPurify sanitizes HTML and SVG by removing dangerous content.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "XSS risk", value: "SVG can contain scripts" },
        { label: "DOMPurify", value: "SVG sanitization library" },
        { label: "CSP", value: "Block inline SVG scripts" }
      ]
    },
    {
      id: "svg-54",
      number: 54,
      partLabel: "Part 5: Performance + Tooling",
      title: "SVG Build Tool Integration",
      subtitle: "Webpack loaders, Vite, Parcel, and SVGR for SVG",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 75,
      prerequisites: ["svg-51"],
      learningObjectives: ["Configure Webpack for SVG", "Use Vite's native SVG handling", "Integrate SVGR for React SVG components"],
      sections: [
        {
          id: "s1",
          title: "Webpack SVG Loaders",
          whyItMatters: "Webpack loaders process SVG for optimization, inlining, and bundling.",
          content: "svg-url-loader: inlines small SVG as data URLs. file-loader: emits separate SVG files. svg-inline-loader: minimizes and inlines SVG. Combine with SVGO for optimization."
        },
        {
          id: "s2",
          title: "Vite and SVGR Integration",
          whyItMatters: "Modern tools have native SVG support with zero configuration.",
          content: "Vite handles SVG natively — import as URL or inline with ?raw suffix. SVGR converts SVG to React components: import { ReactComponent as Icon } from './icon.svg'. Use @svgr/webpack or @svgr/rollup for other bundlers."
        }
      ],
      quiz: {
        questions: [
          { id: "svg54-q1", type: "mcq", question: "What does SVGR do?", options: ["Optimizes SVG", "Converts SVG to React components", "Compresses SVG", "Validates SVG"], correctAnswer: 1, explanation: "SVGR transforms SVG files into reusable React components.", difficulty: 1 },
          { id: "svg54-q2", type: "mcq", question: "How do you import SVG as a string in Vite?", options: ["import svg from './file.svg'", "import svg from './file.svg?raw'", "import svg from './file.svg?inline'", "import svg from './file.svg?string'"], correctAnswer: 1, explanation: "Vite uses ?raw suffix to import SVG as a raw string.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Webpack", value: "svg-url-loader, file-loader" },
        { label: "Vite", value: "Native SVG, ?raw suffix" },
        { label: "SVGR", value: "SVG to React components" }
      ]
    },    // ============ PART 6: REAL PROJECTS + CERTIFICATION (CHAPTERS 55-60) ============
    {
      id: "svg-55",
      number: 55,
      partLabel: "Part 6: Real Projects + Certification",
      title: "Build an SVG Drawing App",
      subtitle: "Freehand drawing, shape tools, export to SVG",
      difficulty: "Advanced",
      estimatedMinutes: 75,
      xpReward: 100,
      prerequisites: ["svg-45", "svg-41"],
      learningObjectives: ["Implement freehand drawing in SVG", "Build shape creation tools", "Export drawn content as SVG file"],
      sections: [
        {
          id: "s1",
          title: "Freehand Drawing with SVG",
          whyItMatters: "A drawing app demonstrates real-time SVG path creation based on user input.",
          content: "Capture mouse/touch movement points as the user draws. Build a path by appending L (line to) commands for each captured point. For smooth lines, use Q (quadratic) commands with averaged control points."
        },
        {
          id: "s2",
          title: "Shape Tools and SVG Export",
          whyItMatters: "Shape tools and export functionality make the app useful for real graphic creation.",
          content: "Implement rect, circle, ellipse, and line tools. On mousedown, create the shape element. On mousemove, update dimensions. On mouseup, finalize. Export: serialize the SVG content as a downloadable .svg file using Blob and URL.createObjectURL."
        }
      ],
      quiz: {
        questions: [
          { id: "svg55-q1", type: "mcq", question: "What path command creates freehand drawing lines?", options: ["M (move)", "L (line to) or Q (quadratic)", "C (cubic)", "A (arc)"], correctAnswer: 1, explanation: "L or Q commands connect captured mouse points for freehand drawing.", difficulty: 2 },
          { id: "svg55-q2", type: "mcq", question: "How do you export SVG content as a downloadable file?", options: ["Print to PDF", "Blob + URL.createObjectURL", "Copy to clipboard", "Server upload"], correctAnswer: 1, explanation: "Create a Blob with SVG content and use URL.createObjectURL for download.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Freehand", value: "L/Q path from mouse points" },
        { label: "Shape tools", value: "Rect, circle, line creation" },
        { label: "Export", value: "Blob + download link" }
      ]
    },
    {
      id: "svg-56",
      number: 56,
      partLabel: "Part 6: Real Projects + Certification",
      title: "Create an Animated Dashboard",
      subtitle: "Live charts, real-time data, SVG filters",
      difficulty: "Advanced",
      estimatedMinutes: 75,
      xpReward: 100,
      prerequisites: ["svg-38", "svg-40"],
      learningObjectives: ["Build a live-updating dashboard", "Animate chart transitions", "Apply SVG filters for visual polish"],
      sections: [
        {
          id: "s1",
          title: "Dashboard with Live Data",
          whyItMatters: "Real-time data visualization is critical for monitoring, analytics, and operations.",
          content: "Architecture: chart components receive data as props. Data updates trigger animated transitions. Use requestAnimationFrame or framer-motion for smooth updates. Use WebSocket or polling for data source."
        },
        {
          id: "s2",
          title: "Animated Chart Transitions",
          whyItMatters: "Smooth transitions help users track data changes over time.",
          content: "Bar chart transitions: animate height/width. Line chart: animate path d attribute or use stroke-dasharray reveal. Pie chart: animate arc endpoints. Use GSAP or framer-motion for complex transition orchestration."
        }
      ],
      quiz: {
        questions: [
          { id: "svg56-q1", type: "mcq", question: "What data source pattern is used for real-time dashboard data?", options: ["HTTP GET", "WebSocket or polling", "LocalStorage", "Cookies"], correctAnswer: 1, explanation: "WebSocket (push) or polling (pull) provide real-time data updates.", difficulty: 2 },
          { id: "svg56-q2", type: "true-false", question: "Animated chart transitions help users track data changes.", correctAnswer: true, explanation: "Smooth transitions make data changes visually trackable.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Live data", value: "WebSocket or polling" },
        { label: "Transitions", value: "Animated chart updates" },
        { label: "Dashboard", value: "Multi-chart composition" }
      ]
    },
    {
      id: "svg-57",
      number: 57,
      partLabel: "Part 6: Real Projects + Certification",
      title: "Interactive SVG Game",
      subtitle: "Click targets, score tracking, SVG animation loop",
      difficulty: "Advanced",
      estimatedMinutes: 80,
      xpReward: 110,
      prerequisites: ["svg-41"],
      learningObjectives: ["Build a complete SVG game", "Implement scoring and game state", "Create game levels with increasing difficulty"],
      sections: [
        {
          id: "s1",
          title: "Game Design with SVG",
          whyItMatters: "Building a complete game applies all SVG skills — DOM, events, animation, and optimization.",
          content: "Design: create game entities as SVG shapes. Use requestAnimationFrame game loop. Handle click/tap events on targets. Track score, lives, and game state. Implement level progression with increasing difficulty."
        },
        {
          id: "s2",
          title: "Game Mechanics",
          whyItMatters: "Well-designed mechanics make games engaging and fun.",
          content: "Target mechanics: spawn targets at random positions, animate them (move, pulse, or fade), remove on click with particle effect. Scoring: base points + time bonus + combo multiplier. Difficulty: faster movement, smaller targets, more distractions."
        }
      ],
      quiz: {
        questions: [
          { id: "svg57-q1", type: "mcq", question: "What drives the main game loop?", options: ["setInterval", "requestAnimationFrame", "setTimeout", "WebSocket"], correctAnswer: 1, explanation: "requestAnimationFrame provides smooth, browser-synced game loop.", difficulty: 2 },
          { id: "svg57-q2", type: "mcq", question: "How can you increase game difficulty?", options: ["Larger targets, slower speed", "Smaller targets, faster speed", "More colors", "Bigger score font"], correctAnswer: 1, explanation: "Difficulty increases with smaller targets and faster movement.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Game loop", value: "requestAnimationFrame" },
        { label: "Click targets", value: "Clickable SVG shapes" },
        { label: "Difficulty", value: "Smaller targets, faster speed" }
      ]
    },
    {
      id: "svg-58",
      number: 58,
      partLabel: "Part 6: Real Projects + Certification",
      title: "Real-Time SVG Data Visualization",
      subtitle: "WebSocket data, live updating SVG, streaming charts",
      difficulty: "Advanced",
      estimatedMinutes: 70,
      xpReward: 100,
      prerequisites: ["svg-56"],
      learningObjectives: ["Connect SVG to WebSocket data streams", "Build streaming chart visualizations", "Handle data gaps and connection issues"],
      sections: [
        {
          id: "s1",
          title: "WebSocket SVG Integration",
          whyItMatters: "Real-time data streams enable live monitoring, trading dashboards, and IoT visualizations.",
          content: "Connect to WebSocket endpoint, receive data events, update SVG elements in real-time. Buffer incoming data for chart history. Use requestAnimationFrame to batch visual updates for performance."
        },
        {
          id: "s2",
          title: "Streaming Visualization Patterns",
          whyItMatters: "Streaming data needs specialized handling for smooth, continuous visualization.",
          content: "Scroll chart: new data pushes old data left. Use translate transform to shift the chart group. Add new elements on the right, remove off-screen elements on the left. Maintain a data window of N points."
        }
      ],
      quiz: {
        questions: [
          { id: "svg58-q1", type: "mcq", question: "What protocol enables real-time data streaming to SVG?", options: ["HTTP", "WebSocket", "FTP", "SMTP"], correctAnswer: 1, explanation: "WebSocket provides full-duplex real-time communication for live data.", difficulty: 1 },
          { id: "svg58-q2", type: "mcq", question: "How does a scroll chart handle new data?", options: ["Redraws entirely", "Shifts left and adds right", "Replaces old data", "Adds overlay"], correctAnswer: 1, explanation: "Scroll charts shift existing data left and add new points on the right.", difficulty: 2 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "WebSocket", value: "Real-time data stream" },
        { label: "Scroll chart", value: "Shift left, add right" },
        { label: "Data buffer", value: "Window of N data points" }
      ]
    },
    {
      id: "svg-59",
      number: 59,
      partLabel: "Part 6: Real Projects + Certification",
      title: "SVG Design System Platform",
      subtitle: "Icon library, component library, documentation",
      difficulty: "Advanced",
      estimatedMinutes: 70,
      xpReward: 100,
      prerequisites: ["svg-44", "svg-54"],
      learningObjectives: ["Build a comprehensive SVG icon library", "Create reusable SVG components", "Document SVG usage guidelines"],
      sections: [
        {
          id: "s1",
          title: "Building an SVG Icon Library",
          whyItMatters: "A consistent icon library ensures visual uniformity across your product.",
          content: "Standardize: 24x24 viewBox, 2px stroke, round caps/joins, currentColor fill for theming. Build scripts to optimize and sprite icons. Create React components with TypeScript props for size, color, and className."
        },
        {
          id: "s2",
          title: "Documentation and Distribution",
          whyItMatters: "Good documentation ensures the design system is adopted correctly.",
          content: "Document: usage guidelines (when to use which icon), sizing rules, color theming, accessibility requirements. Use Storybook for component documentation. Publish as npm package for easy consumption."
        }
      ],
      quiz: {
        questions: [
          { id: "svg59-q1", type: "mcq", question: "What viewBox size is standard for SVG icon libraries?", options: ["16x16", "24x24", "32x32", "48x48"], correctAnswer: 1, explanation: "24x24 is the most common standard for SVG icon libraries (like Lucide, Heroicons).", difficulty: 1 },
          { id: "svg59-q2", type: "mcq", question: "What fill value enables icon color theming?", options: ["#000", "currentColor", "inherit", "none"], correctAnswer: 1, explanation: "fill='currentColor' lets icons inherit parent text color.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Icon library", value: "24x24, currentColor, 2px stroke" },
        { label: "Components", value: "TypeScript + React wrappers" },
        { label: "Storybook", value: "Component documentation" }
      ]
    },
    {
      id: "svg-60",
      number: 60,
      partLabel: "Part 6: Real Projects + Certification",
      title: "SVG Mastery + Certificate",
      subtitle: "Final project, comprehensive review, certification",
      difficulty: "Expert",
      estimatedMinutes: 90,
      xpReward: 200,
      prerequisites: ["svg-55", "svg-56", "svg-57", "svg-58", "svg-59"],
      learningObjectives: ["Complete a comprehensive SVG final project", "Review all SVG concepts across 6 parts", "Earn SVG mastery certificate"],
      sections: [
        {
          id: "s1",
          title: "Final Project Overview",
          whyItMatters: "The final project demonstrates mastery of all SVG skills from fundamentals to advanced interactivity.",
          content: "Build a complete SVG application of your choice: an advanced drawing tool, interactive data dashboard, SVG game, or design system. Requirements: use SVG paths, transforms, animation, interactivity, optimization, and accessibility."
        },
        {
          id: "s2",
          title: "Comprehensive Review",
          whyItMatters: "Reviewing core concepts solidifies long-term retention.",
          content: "Review topics: SVG syntax and coordinate systems, shapes and paths, fills strokes and gradients, masks and clip paths, filters and effects, SMIL CSS and JS animation, interactive applications, performance optimization."
        }
      ],
      quiz: {
        questions: [
          { id: "svg60-q1", type: "mcq", question: "What is the most important concept to master in SVG?", options: ["Animation only", "Path commands and coordinate systems", "Filters and effects", "Build tools"], correctAnswer: 1, explanation: "Paths and coordinate systems are the foundation of all SVG work.", difficulty: 2 },
          { id: "svg60-q2", type: "true-false", question: "SVG can be used for both static graphics and interactive applications.", correctAnswer: true, explanation: "SVG serves both static illustrations and interactive, animated applications.", difficulty: 1 }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Final project", value: "Complete SVG application" },
        { label: "Review", value: "All 6 parts concepts" },
        { label: "Certificate", value: "SVG Mastery earned" }
      ]
    }
  ]
};