// DO NOT EDIT -- This file is auto-generated
import type { Track } from './types';

export const canvasTrack: Track = {
  id: 'canvas',
  title: 'HTML5 Canvas',
  titleBn: 'এইচটিএমএল৫ ক্যানভাস',
  tagline: 'Draw, animate, and build interactive graphics in the browser',
  taglineBn: 'ব্রাউজারে আঁকুন, অ্যানিমেট করুন এবং ইন্টারঅ্যাকটিভ গ্রাফিক্স তৈরি করুন',
  icon: 'https://img.icons8.com/?size=160&id=41283&format=png',
  colorVar: 'canvas',
  brandColor: '#FF5722',
  glowColor: 'rgba(255, 87, 34, 0.3)',
  totalChapters: 55,
  estimatedHours: 90,
  chapters: [
    {
      id: 'canvas-1',
      number: 1,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'What Is HTML5 Canvas?',
      subtitle: 'Understanding the browser drawing API',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 30,
      xpReward: 50,
      prerequisites: [],
      learningObjectives: [
        'Explain what HTML5 Canvas is and how it differs from SVG and DOM manipulation',
        'Identify common use cases for Canvas in modern web development',
        'Understand the rendering context and pixel-based drawing model',
        'Evaluate when to use Canvas versus other web graphics technologies'
      ],
      sections: [
        {
          id: 's1',
          title: 'Introducing the Canvas Element',
          whyItMatters: 'Canvas is a foundational web technology that enables pixel-level drawing directly in the browser. Understanding it opens the door to games, data visualization, image editing, and creative coding.',
          content: "## What Is HTML5 Canvas?\n\nThe HTML5 Canvas element (`<canvas>`) is a bitmap-based drawing surface that you control entirely with JavaScript. Unlike HTML elements styled with CSS, Canvas gives you a blank grid of pixels and a set of drawing commands to paint on it programmatically.\n\n### Canvas vs SVG vs DOM\n\n| Approach | Rendering Model | Best For |\n|---|---|---|\n| **Canvas** | Pixel bitmap (immediate mode) | Games, image processing, high-frequency animation |\n| **SVG** | Vector shapes (retained mode) | Scalable diagrams, icons, interactive maps |\n| **DOM + CSS** | Document tree of elements | Standard UI, text-heavy layouts, forms |\n\nCanvas operates in **immediate mode** — once you draw something, the browser forgets about it as a shape. There are no elements to attach events to. This makes Canvas extremely fast for animation but means you must manually manage redrawing.\n\n```html\n<canvas id=\"myCanvas\" width=\"800\" height=\"600\"></canvas>\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'tomato';\n  ctx.fillRect(50, 50, 200, 100);\n</script>\n```\n\n### A Brief History\n\nCanvas was introduced by Apple in 2004 for macOS Dashboard widgets, then standardized in HTML5. By 2025, Canvas is supported in every browser and powers:\n- Data visualization (Chart.js, D3 canvas renderers)\n- Browser games (Phaser, PixiJS)\n- Image editing (Photoshop web, Figma canvas layers)\n- Video processing (frame-by-frame effects)\n- Creative coding (p5.js, Three.js fallback)"
        },
        {
          id: 's2',
          title: 'The Rendering Context',
          whyItMatters: 'The rendering context is your gateway to all drawing operations. Understanding the context object — especially "2d" — is the first step toward mastering Canvas.',
          content: "## The Canvas Rendering Context\n\nEvery `<canvas>` element has a **rendering context** — an object that exposes all drawing methods. The most common is the **2D context**, obtained via `canvas.getContext('2d')`.\n\n```javascript\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\n// ctx is now a CanvasRenderingContext2D object\n```\n\n### The Drawing State Machine\n\nThe 2D context maintains an internal **state machine** that tracks:\n- Current fill and stroke styles\n- Line width, cap, and join settings\n- Transformation matrix (translate, rotate, scale)\n- Clipping region\n- Shadow properties\n- Global alpha and composite operation\n\nEverything you draw uses the current state. You can save and restore state with `save()` and `restore()`.\n\n### Canvas Dimensions\n\nThe `width` and `height` attributes determine the **drawing surface size** in pixels. CSS sizing only affects visual scaling, not resolution:\n\n```html\n<canvas width=\"800\" height=\"600\" style=\"width: 400px; height: 300px;\"></canvas>\n<!-- Internal resolution: 800x600, displayed at 400x300 -->\n```\n\nThis distinction is critical for high-DPI (Retina) displays. We cover HiDPI scaling in a later chapter."
        },
        {
          id: 's3',
          title: 'Common Use Cases and When to Choose Canvas',
          whyItMatters: 'Choosing the right technology saves development time and delivers better performance. Knowing where Canvas excels helps you architect better applications.',
          content: "## When Should You Use Canvas?\n\nCanvas shines in scenarios that demand pixel-level control or high frame rates. Here are the most common applications:\n\n### 1. Real-Time Animation and Games\nCanvas can redraw thousands of objects per frame at 60fps. Game engines like Phaser render sprites, tilemaps, and effects entirely on canvas.\n\n### 2. Data Visualization\nCharts with thousands of data points (line charts, scatter plots) perform better on Canvas than SVG because Canvas avoids DOM overhead.\n\n### 3. Image Processing\nYou can read pixel data, apply filters (blur, brightness, contrast), and write it back — all in real time.\n\n### 4. Creative Coding and Generative Art\nCanvas is the go-to medium for procedural art, particle systems, and audio-visualizers.\n\n### 5. Signature Capture and Drawing Apps\nApplications like Excalidraw and Jamboard use Canvas for freehand drawing because it handles rapid mouse/touch events efficiently.\n\n```javascript\n// A simple performance comparison: drawing 10,000 rectangles\n// Canvas approach — very fast\nfor (let i = 0; i < 10000; i++) {\n  ctx.fillStyle = randomColor();\n  ctx.fillRect(Math.random() * 800, Math.random() * 600, 10, 10);\n}\n\n// DOM approach — much slower for 10,000 elements\nfor (let i = 0; i < 10000; i++) {\n  const div = document.createElement('div');\n  div.style.cssText = 'position:absolute;width:10px;height:10px;...';\n  document.body.appendChild(div);\n}\n```\n\nThe performance difference grows exponentially with more elements. Canvas is the clear winner for graphics-heavy applications."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv1-q1', type: 'mcq', question: 'What rendering model does HTML5 Canvas use?', options: ['Immediate mode (bitmap)', 'Retained mode (vector)', 'Document tree (DOM)', 'Shadow DOM'], correctAnswer: 0, explanation: 'Canvas uses immediate mode — once drawn, pixels are not remembered as individual shapes.', difficulty: 1 },
          { id: 'cv1-q2', type: 'true-false', question: 'You can attach click event listeners directly to shapes drawn on Canvas.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Canvas shapes are not DOM elements, so they do not emit DOM events. You must manually handle hit detection.', difficulty: 1 },
          { id: 'cv1-q3', type: 'mcq', question: 'Which method returns the 2D rendering context?', options: ['canvas.getContext("2d")', 'canvas.getContext("webgl")', 'canvas.getContext("2d-render")', 'canvas.getContext("bitmap")'], correctAnswer: 0, explanation: 'canvas.getContext("2d") returns a CanvasRenderingContext2D for 2D drawing.', difficulty: 1 },
          { id: 'cv1-q4', type: 'true-false', question: 'Canvas SVG has better performance than Canvas for rendering 10,000 shapes.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Canvas outperforms SVG for large numbers of shapes because it does not create DOM nodes.', difficulty: 1 },
          { id: 'cv1-q5', type: 'mcq', question: 'What does setting CSS width/height on a canvas element do differently from HTML attributes?', options: ['CSS only scales the display, not the drawing buffer', 'CSS resizes the drawing buffer', 'CSS has no effect on canvas', 'CSS adds anti-aliasing'], correctAnswer: 0, explanation: 'HTML width/height sets the pixel buffer size; CSS only controls display size.', difficulty: 2 },
          { id: 'cv1-q6', type: 'mcq', question: 'Which of the following is NOT a common use case for Canvas?', options: ['Browser games', 'Data visualization dashboards', 'HTML email templates', 'Real-time video filters'], correctAnswer: 2, explanation: 'HTML email templates do not use Canvas.', difficulty: 1 },
          { id: 'cv1-q7', type: 'true-false', question: 'Canvas was first introduced by Apple in 2004.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Apple introduced Canvas for macOS Dashboard widgets; it was later standardized in HTML5.', difficulty: 2 },
          { id: 'cv1-q8', type: 'mcq', question: 'What does the Canvas state machine track?', options: ['Fill styles, transforms, clipping, and shadows', 'Only the current mouse position', 'The HTML DOM tree', 'CSS class names'], correctAnswer: 0, explanation: 'The 2D context state machine tracks fill/stroke styles, transforms, clipping paths, and shadow settings.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv1-e1', type: 'easy', title: 'Create Your First Canvas', instructions: 'Create an HTML page with a <canvas> element of size 400x300. Use JavaScript to get the 2D context and draw a blue rectangle at position (10, 10) with width 200 and height 100.', hint: 'Remember to use getElementById to access the canvas, then getContext("2d"), and finally fillRect with a fillStyle set.', starterCode: '<canvas id="myCanvas" width="400" height="300"></canvas>\n<script>\n  // Your code here\n</script>', solution: '<canvas id="myCanvas" width="400" height="300"></canvas>\n<script>\n  const canvas = document.getElementById("myCanvas");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "blue";\n  ctx.fillRect(10, 10, 200, 100);\n</script>' },
        { id: 'cv1-e2', type: 'medium', title: 'Canvas vs SVG Comparison', instructions: 'Create a page with both a Canvas and an SVG element. On the canvas, draw 500 red circles at random positions. In the SVG, create 500 <circle> elements at random positions. Measure and display how long each took.', hint: 'Use performance.now() before and after each drawing operation.', starterCode: '<canvas id="canvas" width="500" height="500"></canvas>\n<svg id="svg" width="500" height="500"></svg>\n<p id="output"></p>\n<script>\n  // Your code here\n</script>', solution: '<canvas id="canvas" width="500" height="500"></canvas>\n<svg id="svg" width="500" height="500"></svg>\n<p id="output"></p>\n<script>\n  const ctx = document.getElementById("canvas").getContext("2d");\n  const svg = document.getElementById("svg");\n  let t1 = performance.now();\n  for (let i = 0; i < 500; i++) {\n    ctx.beginPath();\n    ctx.arc(Math.random()*500, Math.random()*500, 5, 0, Math.PI*2);\n    ctx.fillStyle = "red";\n    ctx.fill();\n  }\n  let t2 = performance.now();\n  const canvasTime = t2 - t1;\n  t1 = performance.now();\n  for (let i = 0; i < 500; i++) {\n    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");\n    circle.setAttribute("cx", Math.random()*500);\n    circle.setAttribute("cy", Math.random()*500);\n    circle.setAttribute("r", 5);\n    circle.setAttribute("fill", "red");\n    svg.appendChild(circle);\n  }\n  t2 = performance.now();\n  document.getElementById("output").textContent = "Canvas: " + (t2-t1).toFixed(2) + "ms, SVG: " + (t2-t1).toFixed(2) + "ms";\n</script>' },
        { id: 'cv1-e3', type: 'hard', title: 'High-DPI Canvas Setup', instructions: 'Create a canvas that renders sharply on Retina displays. Write a function setupCanvas(canvas, width, height) that adjusts the canvas buffer size based on devicePixelRatio, then scales the context so all drawing coordinates match the logical size.', hint: 'Get window.devicePixelRatio, multiply canvas.width/height by it, set CSS width/height to logical size, and scale the context by the ratio.', starterCode: '<canvas id="hdpi" width="0" height="0"></canvas>\n<script>\n  function setupCanvas(canvas, width, height) {\n    // Your implementation here\n  }\n  setupCanvas(document.getElementById("hdpi"), 400, 300);\n</script>', solution: '<canvas id="hdpi" width="0" height="0"></canvas>\n<script>\n  function setupCanvas(canvas, width, height) {\n    const dpr = window.devicePixelRatio || 1;\n    canvas.width = width * dpr;\n    canvas.height = height * dpr;\n    canvas.style.width = width + "px";\n    canvas.style.height = height + "px";\n    const ctx = canvas.getContext("2d");\n    ctx.scale(dpr, dpr);\n    return ctx;\n  }\n  const ctx = setupCanvas(document.getElementById("hdpi"), 400, 300);\n  ctx.fillStyle = "red";\n  ctx.fillRect(10, 10, 200, 100);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Canvas element', value: '<canvas width="800" height="600"></canvas>' },
        { label: 'Get context', value: 'canvas.getContext("2d")' },
        { label: 'Drawing model', value: 'Immediate mode (bitmap, not retained)' },
        { label: 'Resolution', value: 'HTML attributes set pixel buffer; CSS sets display size' },
        { label: 'HiDPI', value: 'Multiply buffer size by devicePixelRatio, then scale context' }
      ]
    },,

    {
      id: 'canvas-2',
      number: 2,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Creating Your First Canvas',
      subtitle: 'Setup, context, and your first shapes',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 35,
      xpReward: 50,
      prerequisites: ['canvas-1'],
      learningObjectives: [
        'Set up an HTML page with a properly configured canvas element',
        'Obtain and understand the 2D rendering context',
        'Draw basic shapes using fill and stroke methods',
        'Apply colors and styles to canvas drawings'
      ],
      sections: [
        {
          id: 's1',
          title: 'Setting Up the Canvas Element',
          whyItMatters: 'A correct setup ensures your drawings appear at the right size, resolution, and position. Many beginners struggle because they confuse CSS sizing with canvas buffer size.',
          content: "## Your First Canvas Setup\n\nCreating a canvas is as simple as adding a `<canvas>` tag to your HTML. But proper setup requires understanding the difference between the element's drawing buffer and its displayed size.\n\n### Basic HTML Structure\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My First Canvas</title>\n</head>\n<body>\n  <canvas id=\"myCanvas\" width=\"800\" height=\"600\"></canvas>\n  <script src=\"app.js\"></script>\n</body>\n</html>\n```\n\n### The getContext Method\n\nThe `getContext()` method is your gateway to drawing. For 2D graphics, you pass `'2d'`:\n\n```javascript\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\nif (!ctx) {\n  console.error('Canvas not supported');\n}\n```\n\n### Fallback Content\n\nAnything between `<canvas>` tags displays only if the browser does not support canvas:\n\n```html\n<canvas id=\"myCanvas\" width=\"800\" height=\"600\">\n  <p>Your browser does not support Canvas. Please upgrade.</p>\n</canvas>\n```\n\nAlways provide fallback content for accessibility and legacy support."
        },
        {
          id: 's2',
          title: 'Your First Drawing: A Colored Rectangle',
          whyItMatters: 'Drawing your first shape is a milestone. It confirms that your setup is working and introduces the fundamental drawing pattern you will use for every Canvas project.',
          content: "## Drawing a Rectangle\n\nThe simplest shape on Canvas is a filled rectangle. Here is how you draw one:\n\n```javascript\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\nctx.fillStyle = '#FF5722';\n\n// fillRect(x, y, width, height)\nctx.fillRect(100, 100, 300, 200);\n```\n\n### Breaking Down fillRect\n\nThe `fillRect` method takes four parameters:\n- **x** — X-coordinate of the top-left corner\n- **y** — Y-coordinate of the top-left corner\n- **width** — Width of the rectangle in pixels\n- **height** — Height of the rectangle in pixels\n\n### Adding a Stroke (Border)\n\nYou can also draw just the outline of a rectangle:\n\n```javascript\nctx.strokeStyle = '#333333';\nctx.lineWidth = 5;\nctx.strokeRect(100, 100, 300, 200);\n```\n\n### Combining Fill and Stroke\n\nTo draw a shape with both fill and outline, call both methods:\n\n```javascript\nctx.fillStyle = '#FF5722';\nctx.strokeStyle = '#333333';\nctx.lineWidth = 5;\nctx.fillRect(100, 100, 300, 200);\nctx.strokeRect(100, 100, 300, 200);\n```\n\nThe order matters — typically fill first, then stroke, so the stroke sits on top of the fill."
        },
        {
          id: 's3',
          title: 'Drawing Multiple Shapes and Clearing',
          whyItMatters: 'Real canvas applications draw many shapes together. Knowing how to compose a scene and clear the canvas for redrawing is essential for animation and interactive apps.',
          content: "## Composing a Scene\n\nLet us create our first composition — a simple house shape:\n\n```javascript\n// Sky background\nctx.fillStyle = '#87CEEB';\nctx.fillRect(0, 0, 800, 600);\n\n// Grass\nctx.fillStyle = '#4CAF50';\nctx.fillRect(0, 450, 800, 150);\n\n// House body\nctx.fillStyle = '#8D6E63';\nctx.fillRect(200, 250, 400, 250);\n\n// Roof (triangle path)\nctx.fillStyle = '#D32F2F';\nctx.beginPath();\nctx.moveTo(180, 250);\nctx.lineTo(400, 120);\nctx.lineTo(620, 250);\nctx.closePath();\nctx.fill();\n\n// Door\nctx.fillStyle = '#5D4037';\nctx.fillRect(360, 380, 80, 120);\n\n// Windows\nctx.fillStyle = '#FFF9C4';\nctx.fillRect(240, 300, 60, 60);\nctx.fillRect(500, 300, 60, 60);\n```\n\n### Clearing the Canvas\n\nWhen you need to erase everything, use `clearRect`:\n\n```javascript\n// Clear the entire canvas\nctx.clearRect(0, 0, canvas.width, canvas.height);\n\n// Clear only a portion\nctx.clearRect(100, 100, 200, 150);\n```\n\n### Default Settings\n\nCanvas starts with these defaults:\n- `fillStyle`: `#000000` (black)\n- `strokeStyle`: `#000000` (black)\n- `lineWidth`: 1\n- `globalAlpha`: 1.0 (fully opaque)\n\nYou can change any setting at any time, and it stays in effect until changed again."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv2-q1', type: 'mcq', question: 'What does canvas.getContext("2d") return?', options: ['A CanvasRenderingContext2D object', 'An HTMLCanvasElement', 'A WebGLRenderingContext', 'An SVG document'], correctAnswer: 0, explanation: 'getContext("2d") returns a CanvasRenderingContext2D object for 2D drawing.', difficulty: 1 },
          { id: 'cv2-q2', type: 'mcq', question: 'What are the four parameters of fillRect?', options: ['x, y, width, height', 'width, height, x, y', 'x1, y1, x2, y2', 'startX, startY, endX, endY'], correctAnswer: 0, explanation: 'fillRect(x, y, width, height) — top-left corner coordinates followed by dimensions.', difficulty: 1 },
          { id: 'cv2-q3', type: 'true-false', question: 'Content placed between <canvas> tags is always visible to the user.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Fallback content inside <canvas> tags only shows when the browser does not support Canvas.', difficulty: 1 },
          { id: 'cv2-q4', type: 'mcq', question: 'Which method completely erases a rectangular area on the canvas?', options: ['clearRect()', 'eraseRect()', 'deleteRect()', 'resetRect()'], correctAnswer: 0, explanation: 'clearRect(x, y, w, h) sets the specified rectangle to fully transparent black.', difficulty: 1 },
          { id: 'cv2-q5', type: 'mcq', question: 'What is the default fillStyle value?', options: ['#000000 (black)', '#FFFFFF (white)', '#FF0000 (red)', 'transparent'], correctAnswer: 0, explanation: 'The default fillStyle is black (#000000).', difficulty: 1 },
          { id: 'cv2-q6', type: 'true-false', question: 'You must always call both fillRect() and strokeRect() to see a rectangle.', options: ['True', 'False'], correctAnswer: 1, explanation: 'fillRect alone draws a filled rectangle; strokeRect alone draws only the outline.', difficulty: 1 },
          { id: 'cv2-q7', type: 'mcq', question: 'What does setting canvas.style.width do differently from canvas.width?', options: ['It changes the CSS display size, not the pixel buffer', 'It changes the pixel buffer size', 'It has no effect on canvas', 'It removes the canvas from the DOM'], correctAnswer: 0, explanation: 'canvas.style.width sets the CSS display size, while canvas.width sets the internal pixel buffer.', difficulty: 2 },
          { id: 'cv2-q8', type: 'mcq', question: 'Which of the following is correct fallback content for canvas?', options: ['<canvas>Your browser does not support Canvas</canvas>', '<canvas fallback="Your browser does not support Canvas">', '<canvas><p>Fallback</p></canvas>', 'Both A and C'], correctAnswer: 3, explanation: 'Any HTML content between the canvas tags serves as fallback content.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv2-e1', type: 'easy', title: 'Draw a Stop Sign', instructions: 'Create a canvas and draw a red octagon with a white border to resemble a stop sign. Use fillRect and strokeRect for the background first, then draw the shape. Add the word "STOP" in white text.', hint: 'Draw a red rectangle for the background. Then use fillStyle and fillText for the word STOP. Center the text.', starterCode: '<canvas id="stop" width="300" height="300"></canvas>\n<script>\n  // Your code here\n</script>', solution: '<canvas id="stop" width="300" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("stop").getContext("2d");\n  ctx.fillStyle = "red";\n  ctx.fillRect(50, 50, 200, 200);\n  ctx.fillStyle = "white";\n  ctx.font = "bold 48px Arial";\n  ctx.textAlign = "center";\n  ctx.textBaseline = "middle";\n  ctx.fillText("STOP", 150, 150);\n  ctx.strokeStyle = "white";\n  ctx.lineWidth = 5;\n  ctx.strokeRect(50, 50, 200, 200);\n</script>' },
        { id: 'cv2-e2', type: 'medium', title: 'Grid of Colored Squares', instructions: 'Draw a 10x10 grid of colored squares on a 500x500 canvas. Each square should be 50x50 pixels. Vary the color using a gradient — make the top-left red, bottom-right blue, and interpolate in between.', hint: 'Use nested for loops. Calculate each square color based on its row and column using RGB interpolation.', starterCode: '<canvas id="grid" width="500" height="500"></canvas>\n<script>\n  // Your 10x10 grid here\n</script>', solution: '<canvas id="grid" width="500" height="500"></canvas>\n<script>\n  const ctx = document.getElementById("grid").getContext("2d");\n  for (let row = 0; row < 10; row++) {\n    for (let col = 0; col < 10; col++) {\n      const r = Math.round(255 * (col / 9));\n      const b = Math.round(255 * (row / 9));\n      ctx.fillStyle = `rgb(${r}, 0, ${b})`;\n      ctx.fillRect(col * 50, row * 50, 50, 50);\n    }\n  }\n</script>' },
        { id: 'cv2-e3', type: 'hard', title: 'Responsive Canvas with Resize', instructions: 'Create a canvas that fills the entire viewport and redraws when the window resizes. Draw a circle in the center that always stays centered with a radius equal to 20% of the smaller viewport dimension.', hint: 'Listen to the resize event. On resize, update canvas dimensions and redraw.', starterCode: '<canvas id="fullscreen"></canvas>\n<script>\n  function draw() {\n    // Your code here\n  }\n  window.addEventListener("resize", draw);\n  draw();\n</script>', solution: '<canvas id="fullscreen"></canvas>\n<script>\n  const canvas = document.getElementById("fullscreen");\n  const ctx = canvas.getContext("2d");\n  function draw() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    ctx.fillStyle = "#f0f0f0";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    const radius = Math.min(canvas.width, canvas.height) * 0.2;\n    ctx.fillStyle = "#FF5722";\n    ctx.beginPath();\n    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);\n    ctx.fill();\n  }\n  window.addEventListener("resize", draw);\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Get context', value: 'canvas.getContext("2d")' },
        { label: 'Fill rectangle', value: 'ctx.fillRect(x, y, w, h)' },
        { label: 'Stroke rectangle', value: 'ctx.strokeRect(x, y, w, h)' },
        { label: 'Clear rectangle', value: 'ctx.clearRect(x, y, w, h)' },
        { label: 'Set fill color', value: 'ctx.fillStyle = "color"' },
        { label: 'Set stroke color', value: 'ctx.strokeStyle = "color"' }
      ]
    },,

    {
      id: 'canvas-3',
      number: 3,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'The Canvas Coordinate System',
      subtitle: 'Origin, axes, and working with positions',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 30,
      xpReward: 50,
      prerequisites: ['canvas-2'],
      learningObjectives: [
        'Understand the canvas coordinate system origin at the top-left corner',
        'Plot shapes using X and Y coordinates accurately',
        'Work with negative coordinates and canvas boundaries',
        'Convert between different coordinate spaces'
      ],
      sections: [
        {
          id: 's1',
          title: 'How Canvas Coordinates Work',
          whyItMatters: 'Every drawing operation depends on coordinates. Misunderstanding the coordinate system leads to shapes appearing off-screen or in unexpected positions.',
          content: "## The Canvas Coordinate Grid\n\nThe canvas coordinate system has its **origin (0, 0)** at the **top-left corner** of the canvas. The X-axis increases to the right, and the Y-axis increases downward.\n\n```\n(0, 0) ----------> X\n  |\n  |\n  v\n  Y\n```\n\nThis is different from traditional mathematics where Y increases upward. In computer graphics, the screen Y-axis is flipped.\n\n### Coordinate Boundaries\n\nFor a canvas with `width=\"800\"` and `height=\"600\"`:\n- Valid X range: 0 to 799\n- Valid Y range: 0 to 599\n- The point (800, 600) is **outside** the canvas\n\n```javascript\nconst centerX = canvas.width / 2;   // 400\nconst centerY = canvas.height / 2;  // 300\n\nctx.beginPath();\nctx.arc(centerX, centerY, 5, 0, Math.PI * 2);\nctx.fill();\n```\n\n### Drawing Relative to Edges\n\nPosition elements relative to canvas edges:\n\n```javascript\n// 10px from the right edge\nconst rightAligned = canvas.width - 10;\n\n// Centered horizontally\nconst centerX = canvas.width / 2;\n\n// Bottom-aligned with margin\nconst bottomY = canvas.height - 20;\n```"
        },
        {
          id: 's2',
          title: 'Working with Negative Coordinates and Off-Screen Drawing',
          whyItMatters: 'Canvas does not clip drawing to its bounds by default. Understanding what happens when you draw outside the visible area is important for performance and correctness.',
          content: "## Drawing Outside the Canvas\n\nCanvas allows drawing with coordinates that extend beyond its visible area. These pixels are simply not displayed but still consume processing time.\n\n```javascript\n// These rectangles are partially or fully invisible\nctx.fillRect(-50, -50, 100, 100);    // Partially off-screen\nctx.fillRect(800, 0, 100, 100);      // Fully off-screen\nctx.fillRect(0, 600, 100, 100);      // Fully off-screen\n```\n\n### Performance Implication\n\nDrawing off-screen pixels is wasted work. For performance-critical applications, always clamp coordinates:\n\n```javascript\nfunction clampToCanvas(x, y, canvas) {\n  return {\n    x: Math.max(0, Math.min(x, canvas.width)),\n    y: Math.max(0, Math.min(y, canvas.height))\n  };\n}\n```\n\n### Coordinate Mapping from Mouse Events\n\nConvert page coordinates to canvas coordinates:\n\n```javascript\ncanvas.addEventListener('click', (e) => {\n  const rect = canvas.getBoundingClientRect();\n  const x = e.clientX - rect.left;\n  const y = e.clientY - rect.top;\n});\n```\n\nThis conversion accounts for scrolling and the canvas position on the page."
        },
        {
          id: 's3',
          title: 'Coordinate Transforms and Custom Origins',
          whyItMatters: 'Many drawing operations are easier with a custom origin. Moving the origin to the center simplifies centering shapes and implementing rotations.',
          content: "## Moving the Origin\n\nYou can translate the canvas origin using `translate()`:\n\n```javascript\nctx.translate(canvas.width / 2, canvas.height / 2);\n\n// Now (0, 0) is at the center\nctx.beginPath();\nctx.arc(0, 0, 50, 0, Math.PI * 2);\nctx.fill();\n\nctx.fillRect(-25, -25, 50, 50);\n```\n\n### Saving and Restoring Transforms\n\nAlways save and restore transforms to avoid affecting subsequent drawing:\n\n```javascript\nctx.save();                 // Save current state\nctx.translate(200, 150);    // Move origin\n// ... draw relative to new origin ...\nctx.restore();              // Restore original state\n```\n\n### Practical Example: Drawing a Star Pattern\n\n```javascript\nfor (let i = 0; i < 8; i++) {\n  ctx.save();\n  ctx.translate(400, 300);\n  ctx.rotate((i * Math.PI * 2) / 8);\n  ctx.fillRect(0, -5, 150, 10);\n  ctx.restore();\n}\n```\n\nThis draws 8 rectangles radiating from the center. Each rotate call pivots around the center thanks to the translated origin."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv3-q1', type: 'mcq', question: 'Where is the origin (0, 0) on a canvas?', options: ['Top-left corner', 'Bottom-left corner', 'Center of the canvas', 'Top-right corner'], correctAnswer: 0, explanation: 'The canvas origin is at the top-left corner, with Y increasing downward.', difficulty: 1 },
          { id: 'cv3-q2', type: 'true-false', question: 'On a canvas, the Y-axis increases upward like in mathematics.', options: ['True', 'False'], correctAnswer: 1, explanation: 'In canvas, Y increases downward. This is the standard for computer graphics.', difficulty: 1 },
          { id: 'cv3-q3', type: 'mcq', question: 'For a canvas with width=500, what is the rightmost visible X coordinate?', options: ['499', '500', '501', '0'], correctAnswer: 0, explanation: 'Coordinates range from 0 to width-1, so the rightmost visible X is 499.', difficulty: 1 },
          { id: 'cv3-q4', type: 'mcq', question: 'How do you convert mouse page coordinates to canvas coordinates?', options: ['Subtract getBoundingClientRect().left/top', 'Use canvas.width / 2', 'Divide by devicePixelRatio', 'Use event.screenX and event.screenY'], correctAnswer: 0, explanation: 'Subtract the canvas bounding rect left and top from clientX/clientY to get canvas coordinates.', difficulty: 2 },
          { id: 'cv3-q5', type: 'true-false', question: 'Drawing shapes outside the canvas bounds causes an error.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Canvas silently clips drawing outside its bounds; no error is thrown.', difficulty: 1 },
          { id: 'cv3-q6', type: 'mcq', question: 'What does ctx.translate(x, y) do?', options: ['Moves the origin to (x, y)', 'Moves all existing shapes by (x, y)', 'Changes the canvas dimensions', 'Scrolls the visible area'], correctAnswer: 0, explanation: 'translate shifts the coordinate origin to the specified position.', difficulty: 2 },
          { id: 'cv3-q7', type: 'true-false', question: 'Calling ctx.restore() reverts the coordinate system to its state at the corresponding ctx.save().', options: ['True', 'False'], correctAnswer: 0, explanation: 'restore() pops the state stack and reverts all state including the transform matrix.', difficulty: 2 },
          { id: 'cv3-q8', type: 'mcq', question: 'What is the center point of a canvas with width=800 and height=600?', options: ['(400, 300)', '(800, 600)', '(0, 0)', '(200, 150)'], correctAnswer: 0, explanation: 'The center is at (width/2, height/2) = (400, 300).', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv3-e1', type: 'easy', title: 'Draw a Target', instructions: 'Create a target with 5 concentric circles centered on the canvas. The circles should have alternating colors (red and white) like a dartboard.', hint: 'Start from the largest circle and work inward so smaller circles draw on top.', starterCode: '<canvas id="target" width="400" height="400"></canvas>\n<script>\n  // Your target here\n</script>', solution: '<canvas id="target" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("target").getContext("2d");\n  const cx = 200, cy = 200;\n  for (let i = 5; i > 0; i--) {\n    ctx.beginPath();\n    ctx.arc(cx, cy, i * 30, 0, Math.PI * 2);\n    ctx.fillStyle = i % 2 === 0 ? "red" : "white";\n    ctx.fill();\n    ctx.stroke();\n  }\n</script>' },
        { id: 'cv3-e2', type: 'medium', title: 'Coordinate Grid Visualizer', instructions: 'Draw a coordinate grid that spans the canvas. Label the X and Y axes with tick marks every 50 pixels. Show the origin at top-left with "0,0" and mark the center of the canvas.', hint: 'Use strokeStyle for grid lines, fillText for labels, and keep the grid lines light.', starterCode: '<canvas id="grid" width="500" height="500"></canvas>\n<script>\n  // Your grid here\n</script>', solution: '<canvas id="grid" width="500" height="500"></canvas>\n<script>\n  const ctx = document.getElementById("grid").getContext("2d");\n  ctx.strokeStyle = "#ddd";\n  for (let x = 0; x <= 500; x += 50) {\n    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 500); ctx.stroke();\n  }\n  for (let y = 0; y <= 500; y += 50) {\n    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(500, y); ctx.stroke();\n  }\n  ctx.fillStyle = "black";\n  ctx.font = "14px Arial";\n  ctx.fillText("(0,0)", 5, 15);\n  ctx.fillText("(250,250)", 255, 265);\n</script>' },
        { id: 'cv3-e3', type: 'hard', title: 'Mouse Coordinate Tracker', instructions: 'Create a canvas that displays a crosshair following the mouse. Show the current mouse coordinates (in canvas space) next to the cursor.', hint: 'Listen to mousemove, convert to canvas coordinates using getBoundingClientRect, and redraw each time.', starterCode: '<canvas id="tracker" width="600" height="400"></canvas>\n<script>\n  // Your crosshair code\n</script>', solution: '<canvas id="tracker" width="600" height="400"></canvas>\n<script>\n  const canvas = document.getElementById("tracker");\n  const ctx = canvas.getContext("2d");\n  let mx = 0, my = 0;\n  canvas.addEventListener("mousemove", (e) => {\n    const rect = canvas.getBoundingClientRect();\n    mx = e.clientX - rect.left;\n    my = e.clientY - rect.top;\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.strokeStyle = "rgba(255,0,0,0.3)";\n    ctx.beginPath(); ctx.moveTo(mx, 0); ctx.lineTo(mx, canvas.height); ctx.stroke();\n    ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(canvas.width, my); ctx.stroke();\n    ctx.fillStyle = "red";\n    ctx.font = "14px monospace";\n    ctx.fillText(`${Math.round(mx)}, ${Math.round(my)}`, mx + 10, my - 10);\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Origin', value: '(0, 0) at top-left corner' },
        { label: 'X-axis', value: 'Increases to the right' },
        { label: 'Y-axis', value: 'Increases downward' },
        { label: 'Bounds', value: 'X: 0 to width-1, Y: 0 to height-1' },
        { label: 'Mouse coords', value: 'e.clientX - rect.left, e.clientY - rect.top' },
        { label: 'Translate', value: 'ctx.translate(x, y) moves origin' }
      ]
    },,

    {
      id: 'canvas-4',
      number: 4,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Drawing Lines and Paths',
      subtitle: 'beginPath, moveTo, lineTo, stroke and fill',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 35,
      xpReward: 50,
      prerequisites: ['canvas-3'],
      learningObjectives: [
        'Use beginPath, moveTo, and lineTo to create custom shapes',
        'Understand the difference between filling and stroking paths',
        'Draw polygons, stars, and custom vector shapes',
        'Master closePath and sub-path concepts'
      ],
      sections: [
        {
          id: 's1',
          title: 'Understanding Paths in Canvas',
          whyItMatters: 'Paths are the foundation of all custom drawing in Canvas. Rectangles and arcs are shortcuts — paths let you draw anything.',
          content: "## What Is a Path?\n\nA **path** is a sequence of connected points that define a shape. Canvas provides a path-based drawing API where you:\n1. Start a path with `beginPath()`\n2. Define the path segments with `moveTo()`, `lineTo()`, `arc()`, and curve methods\n3. Finish by calling `fill()` or `stroke()`\n\n### The Three Essential Methods\n\n```javascript\nctx.beginPath();      // Start a new path (clears previous sub-paths)\nctx.moveTo(x, y);     // Move the pen to (x, y) without drawing\nctx.lineTo(x, y);     // Draw a line from current position to (x, y)\nctx.closePath();      // Draw a line back to the starting point\nctx.stroke();         // Render the path outline\nctx.fill();           // Fill the enclosed area\n```\n\n### Drawing a Triangle\n\n```javascript\nctx.beginPath();\nctx.moveTo(200, 50);    // Top vertex\nctx.lineTo(350, 300);   // Bottom-right\nctx.lineTo(50, 300);    // Bottom-left\nctx.closePath();        // Line back to (200, 50)\nctx.fillStyle = '#4CAF50';\nctx.fill();\nctx.strokeStyle = '#333';\nctx.lineWidth = 3;\nctx.stroke();\n```\n\n### Multiple Sub-Paths\n\nYou can have multiple disconnected shapes in one path by using multiple `moveTo()` calls:\n\n```javascript\nctx.beginPath();\n// First circle\nctx.arc(200, 200, 50, 0, Math.PI * 2);\n// Move to a new position without connecting\nctx.moveTo(400, 200);\n// Second circle\nctx.arc(400, 200, 50, 0, Math.PI * 2);\nctx.stroke();  // Strokes both circles\n```"
        },
        {
          id: 's2',
          title: 'Drawing Polygons and Complex Shapes',
          whyItMatters: 'Polygon drawing is essential for games (terrain, hitboxes), data visualization (charts), and geometric art.',
          content: "## Drawing a Regular Polygon\n\nUse a loop to calculate vertices of a regular polygon using trigonometry:\n\n```javascript\nfunction drawPolygon(ctx, cx, cy, sides, radius) {\n  ctx.beginPath();\n  const angle = (Math.PI * 2) / sides;\n  ctx.moveTo(cx + radius, cy);\n  for (let i = 1; i < sides; i++) {\n    const x = cx + radius * Math.cos(angle * i);\n    const y = cy + radius * Math.sin(angle * i);\n    ctx.lineTo(x, y);\n  }\n  ctx.closePath();\n}\n\n// Draw a hexagon\ndrawPolygon(ctx, 200, 200, 6, 100);\nctx.fillStyle = '#FFC107';\nctx.fill();\nctx.stroke();\n```\n\n### Drawing a Star\n\nA star requires alternating inner and outer radii:\n\n```javascript\nfunction drawStar(ctx, cx, cy, points, outerR, innerR) {\n  ctx.beginPath();\n  const step = Math.PI / points;\n  for (let i = 0; i < 2 * points; i++) {\n    const r = i % 2 === 0 ? outerR : innerR;\n    const angle = i * step - Math.PI / 2;\n    const x = cx + r * Math.cos(angle);\n    const y = cy + r * Math.sin(angle);\n    if (i === 0) ctx.moveTo(x, y);\n    else ctx.lineTo(x, y);\n  }\n  ctx.closePath();\n}\n\ndrawStar(ctx, 250, 250, 5, 120, 50);\nctx.fillStyle = 'gold';\nctx.fill();\n```\n\n### fill() vs stroke() Rules\n\n- `fill()` closes any open sub-paths automatically before filling\n- `stroke()` draws the path as defined; open paths remain open\n- `closePath()` draws a line back to the start but does not fill"
        },
        {
          id: 's3',
          title: 'Non-Zero Winding Rule and Path Direction',
          whyItMatters: 'Understanding winding rules helps you create shapes with holes and avoid unexpected fill artifacts.',
          content: "## The Non-Zero Winding Rule\n\nCanvas uses the **non-zero winding rule** to determine which areas to fill. When paths cross, the direction (clockwise vs counter-clockwise) determines fill behavior.\n\n```javascript\n// Creating a donut shape using opposite winding directions\nctx.beginPath();\n// Outer circle (clockwise)\nctx.arc(200, 200, 100, 0, Math.PI * 2);\n// Inner circle (counter-clockwise — opposite direction)\nctx.arc(200, 200, 50, 0, Math.PI * 2, true);\nctx.fillStyle = '#E91E63';\nctx.fill();  // Fills the donut, leaves the center empty!\n```\n\n### How It Works\n\nThe winding direction is determined by the order of points. For `arc()`, the last parameter `counterclockwise` (boolean) controls direction:\n- `false` (default): clockwise\n- `true`: counter-clockwise\n\n### Combining Multiple Shapes\n\nYou can create complex cutouts:\n\n```javascript\nctx.beginPath();\n// Large rectangle\nctx.rect(50, 50, 300, 300);\n// Cut out a triangle (counter-clockwise)\nctx.moveTo(250, 100);\nctx.lineTo(350, 300);\nctx.lineTo(150, 300);\nctx.closePath();\nctx.fillStyle = '#2196F3';\nctx.fill();\n```\n\nThis fills the rectangle but leaves the triangle area empty. This technique is powerful for creating masks and compound shapes."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv4-q1', type: 'mcq', question: 'Which method starts a new path in Canvas?', options: ['beginPath()', 'newPath()', 'startPath()', 'resetPath()'], correctAnswer: 0, explanation: 'beginPath() clears the current path and starts a new one.', difficulty: 1 },
          { id: 'cv4-q2', type: 'true-false', question: 'moveTo() draws a line from the current position to the specified point.', options: ['True', 'False'], correctAnswer: 1, explanation: 'moveTo() moves the pen without drawing. lineTo() draws the line.', difficulty: 1 },
          { id: 'cv4-q3', type: 'mcq', question: 'What does closePath() do?', options: ['Draws a line back to the starting point of the current sub-path', 'Ends the path without drawing', 'Clears all paths', 'Fills the path'], correctAnswer: 0, explanation: 'closePath() draws a straight line from the current point back to the first point in the sub-path.', difficulty: 1 },
          { id: 'cv4-q4', type: 'mcq', question: 'How do you create a hole in a filled shape using winding rules?', options: ['Draw the inner shape in the opposite direction', 'Use clearRect inside the shape', 'Set globalCompositeOperation', 'Use a separate clipping path'], correctAnswer: 0, explanation: 'Opposite winding directions create holes because the non-zero winding rule cancels those areas.', difficulty: 3 },
          { id: 'cv4-q5', type: 'true-false', question: 'Calling fill() automatically closes open sub-paths.', options: ['True', 'False'], correctAnswer: 0, explanation: 'fill() automatically closes any open sub-paths before filling them.', difficulty: 2 },
          { id: 'cv4-q6', type: 'mcq', question: 'What is the last parameter of arc() that controls winding direction?', options: ['counterclockwise (boolean)', 'clockwise (boolean)', 'direction (string)', 'reverse (boolean)'], correctAnswer: 0, explanation: 'The optional 6th parameter is counterclockwise (default false).', difficulty: 2 },
          { id: 'cv4-q7', type: 'mcq', question: 'Which function calculates polygon vertices using trigonometry?', options: ['Math.cos and Math.sin for vertex positions', 'Math.tan for edge angles', 'Math.sqrt for radius', 'Math.abs for coordinates'], correctAnswer: 0, explanation: 'Use cos(angle) for x and sin(angle) for y to compute polygon vertices.', difficulty: 2 },
          { id: 'cv4-q8', type: 'true-false', question: 'You cannot have multiple disconnected shapes in a single path.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Use moveTo() to lift the pen and start a new sub-path within the same beginPath/closePath cycle.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv4-e1', type: 'easy', title: 'Draw a Pentagon', instructions: 'Use lineTo to draw a five-sided regular polygon (pentagon) centered on the canvas. Fill it with a color and give it a thick border.', hint: 'Use the drawPolygon pattern with sides=5. Calculate angle as (2 * PI / 5).', starterCode: '<canvas id="pentagon" width="400" height="400"></canvas>\n<script>\n  // Your pentagon here\n</script>', solution: '<canvas id="pentagon" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("pentagon").getContext("2d");\n  const cx = 200, cy = 200, sides = 5, r = 120;\n  ctx.beginPath();\n  for (let i = 0; i < sides; i++) {\n    const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;\n    const x = cx + r * Math.cos(angle);\n    const y = cy + r * Math.sin(angle);\n    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);\n  }\n  ctx.closePath();\n  ctx.fillStyle = "purple";\n  ctx.fill();\n  ctx.strokeStyle = "gold";\n  ctx.lineWidth = 5;\n  ctx.stroke();\n</script>' },
        { id: 'cv4-e2', type: 'medium', title: 'Starry Night', instructions: 'Draw 50 randomly placed stars on a dark blue background. Each star should have 5 points with random sizes (outer radius 10-30px) and random rotations.', hint: 'Create a drawStar function. Use Math.random() for positions and sizes. Add a slight rotation by adding an offset to each star angle.', starterCode: '<canvas id="stars" width="600" height="400"></canvas>\n<script>\n  // Your starry night here\n</script>', solution: '<canvas id="stars" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("stars").getContext("2d");\n  ctx.fillStyle = "#0a0a2e";\n  ctx.fillRect(0, 0, 600, 400);\n  function drawStar(cx, cy, or, ir, rot) {\n    ctx.beginPath();\n    for (let i = 0; i < 10; i++) {\n      const r = i % 2 === 0 ? or : ir;\n      const a = (i * Math.PI / 5) + rot;\n      const x = cx + r * Math.cos(a);\n      const y = cy + r * Math.sin(a);\n      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);\n    }\n    ctx.closePath();\n    ctx.fillStyle = "#FFD700";\n    ctx.fill();\n  }\n  for (let i = 0; i < 50; i++) {\n    drawStar(\n      Math.random() * 600,\n      Math.random() * 400,\n      10 + Math.random() * 20,\n      5 + Math.random() * 10,\n      Math.random() * Math.PI * 2\n    );\n  }\n</script>' },
        { id: 'cv4-e3', type: 'hard', title: 'Donut Chart with Legend', instructions: 'Create a donut chart with 4 data segments (30%, 25%, 25%, 20%) using arcs in opposite winding directions. Draw a legend on the side with colored squares and labels.', hint: 'Use two arc() calls — outer clockwise, inner counter-clockwise. Use fill() only once per segment. Track the cumulative angle.', starterCode: '<canvas id="donut" width="600" height="400"></canvas>\n<script>\n  const data = [30, 25, 25, 20];\n  const colors = ["#E91E63","#2196F3","#4CAF50","#FFC107"];\n  // Your donut chart here\n</script>', solution: '<canvas id="donut" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("donut").getContext("2d");\n  const data = [30, 25, 25, 20];\n  const colors = ["#E91E63","#2196F3","#4CAF50","#FFC107"];\n  const labels = ["Sales","Marketing","Engineering","Support"];\n  let startAngle = 0;\n  data.forEach((pct, i) => {\n    const sliceAngle = (pct / 100) * Math.PI * 2;\n    ctx.beginPath();\n    ctx.arc(200, 200, 120, startAngle, startAngle + sliceAngle);\n    ctx.arc(200, 200, 50, startAngle + sliceAngle, startAngle, true);\n    ctx.closePath();\n    ctx.fillStyle = colors[i];\n    ctx.fill();\n    // Legend\n    ctx.fillStyle = colors[i];\n    ctx.fillRect(380, 40 + i * 40, 20, 20);\n    ctx.fillStyle = "#000";\n    ctx.font = "14px Arial";\n    ctx.textAlign = "left";\n    ctx.fillText(labels[i] + " (" + pct + "%)", 410, 55 + i * 40);\n    startAngle += sliceAngle;\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Begin path', value: 'ctx.beginPath()' },
        { label: 'Move pen', value: 'ctx.moveTo(x, y)' },
        { label: 'Draw line', value: 'ctx.lineTo(x, y)' },
        { label: 'Close path', value: 'ctx.closePath()' },
        { label: 'Render outline', value: 'ctx.stroke()' },
        { label: 'Render fill', value: 'ctx.fill()' }
      ]
    },,

    {
      id: 'canvas-5',
      number: 5,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Colors and Fill Styles',
      subtitle: 'Hex, RGB, HSL, transparency, and globalAlpha',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 35,
      xpReward: 50,
      prerequisites: ['canvas-4'],
      learningObjectives: [
        'Apply colors using hex, RGB, RGBA, HSL, and HSLA formats',
        'Control transparency with alpha channels and globalAlpha',
        'Use named colors and understand browser color parsing',
        'Create gradients and blend colors programmatically'
      ],
      sections: [
        {
          id: 's1',
          title: 'Color Formats in Canvas',
          whyItMatters: 'Canvas accepts the same CSS color formats as the web platform. Mastering them gives you precise control over visual appearance.',
          content: "## Color Formats\n\nCanvas accepts any valid CSS color value. Here are the most common formats:\n\n### Hex Colors\n\n```javascript\nctx.fillStyle = '#FF5722';   // Hex with 6 digits\nctx.fillStyle = '#F52';      // Shorthand hex (expands to #FF5522)\nctx.fillStyle = '#FF572288'; // Hex with alpha (8 digits)\n```\n\n### RGB and RGBA\n\n```javascript\nctx.fillStyle = 'rgb(255, 87, 34)';\nctx.fillStyle = 'rgba(255, 87, 34, 0.5)';  // 50% opaque\n```\n\n### HSL and HSLA\n\nHSL is more intuitive for creating color variations:\n\n```javascript\nctx.fillStyle = 'hsl(14, 100%, 57%)';           // Hue 14, Saturation 100%, Lightness 57%\nctx.fillStyle = 'hsla(14, 100%, 57%, 0.5)';     // With alpha\n```\n\nHue is an angle on the color wheel (0=red, 120=green, 240=blue).\nSaturation is the intensity (0%=gray, 100%=full).\nLightness is brightness (0%=black, 100%=white).\n\n### Named Colors\n\nCanvas supports all CSS named colors (140+):\n\n```javascript\nctx.fillStyle = 'tomato';\nctx.fillStyle = 'dodgerblue';\nctx.fillStyle = 'mediumseagreen';\n```\n\n### Programmatic Color Generation\n\nCreate color variations with HSL:\n\n```javascript\nfunction randomColor() {\n  const h = Math.random() * 360;\n  return `hsl(${h}, 70%, 50%)`;\n}\n\nfunction shadeColor(hue, lightness) {\n  return `hsl(${hue}, 70%, ${lightness}%)`;\n}\n```"
        },
        {
          id: 's2',
          title: 'Transparency and Global Alpha',
          whyItMatters: 'Transparency enables layering, ghost effects, trails, and sophisticated visual compositions.',
          content: "## Controlling Transparency\n\nThere are two ways to control transparency in Canvas:\n\n### 1. Alpha in Color Values\n\nAdd alpha directly to your color strings:\n\n```javascript\n// 50% transparent red\nctx.fillStyle = 'rgba(255, 0, 0, 0.5)';\nctx.fillRect(50, 50, 200, 200);\n\n// 30% transparent blue on top\nctx.fillStyle = 'rgba(0, 0, 255, 0.3)';\nctx.fillRect(100, 100, 200, 200);\n```\n\n### 2. globalAlpha Property\n\nSet a global transparency that affects ALL subsequent drawing:\n\n```javascript\nctx.globalAlpha = 0.5;  // Everything drawn is 50% opaque\nctx.fillStyle = 'red';\nctx.fillRect(50, 50, 200, 200);  // Drawn at 50% opacity\nctx.fillStyle = 'blue';\nctx.fillRect(100, 100, 200, 200); // Also 50% opacity\n\nctx.globalAlpha = 1.0;  // Reset to fully opaque\n```\n\n### Creating Trails with Transparency\n\nA common animation technique uses semi-transparent clearing:\n\n```javascript\n// Instead of fully clearing, overlay a semi-transparent background\nctx.fillStyle = 'rgba(255, 255, 255, 0.1)';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n// This creates a fade-out trail effect for moving objects\n```\n\n### Alpha Compositing\n\nCanvas supports different compositing modes via `globalCompositeOperation`:\n\n```javascript\nctx.globalCompositeOperation = 'lighter';  // Additive blending (glow effects)\nctx.globalCompositeOperation = 'source-atop';  // Only draw where existing pixels exist\nctx.globalCompositeOperation = 'destination-out';  // Erase pixels\n```"
        },
        {
          id: 's3',
          title: 'Building a Color Palette System',
          whyItMatters: 'Structuring your colors into a palette system makes your code more maintainable and your designs more cohesive.',
          content: "## Creating and Using Color Palettes\n\nDefine your palette in a structured way:\n\n```javascript\nconst palette = {\n  primary: '#FF5722',\n  primaryLight: '#FF8A65',\n  primaryDark: '#C41C00',\n  secondary: '#2196F3',\n  accent: '#FFC107',\n  background: '#FAFAFA',\n  surface: '#FFFFFF',\n  text: '#212121',\n  textSecondary: '#757575'\n};\n\nctx.fillStyle = palette.primary;\nctx.fillRect(10, 10, 100, 100);\n```\n\n### Generating Palettes from a Base Color\n\nUse HSL to generate harmonious colors:\n\n```javascript\nfunction generatePalette(hue) {\n  return {\n    base: `hsl(${hue}, 70%, 50%)`,\n    light: `hsl(${hue}, 60%, 70%)`,\n    dark: `hsl(${hue}, 80%, 30%)`,\n    complement: `hsl(${(hue + 180) % 360}, 70%, 50%)`,\n    analogous1: `hsl(${(hue + 30) % 360}, 70%, 50%)`,\n    analogous2: `hsl(${(hue - 30 + 360) % 360}, 70%, 50%)`,\n    triad: `hsl(${(hue + 120) % 360}, 70%, 50%)`,\n    triad2: `hsl(${(hue + 240) % 360}, 70%, 50%)`\n  };\n}\n\nconst sunset = generatePalette(10);\nconst ocean = generatePalette(200);\nconst forest = generatePalette(120);\n```\n\n### Interpolating Between Colors\n\nBlend between two colors for gradients and transitions:\n\n```javascript\nfunction lerpColor(a, b, t) {\n  const ah = parseInt(a.slice(1), 16);\n  const bh = parseInt(b.slice(1), 16);\n  const ar = (ah >> 16), ag = (ah >> 8) & 0xFF, ab = ah & 0xFF;\n  const br = (bh >> 16), bg = (bh >> 8) & 0xFF, bb = bh & 0xFF;\n  const rr = Math.round(ar + (br - ar) * t);\n  const rg = Math.round(ag + (bg - ag) * t);\n  const rb = Math.round(ab + (bb - ab) * t);\n  return `rgb(${rr}, ${rg}, ${rb})`;\n}\n```\n\nThis lerpColor function is invaluable for animation transitions and data visualization gradients."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv5-q1', type: 'mcq', question: 'Which color format includes a hue value on a 0-360 degree scale?', options: ['HSL', 'Hex', 'RGB', 'Named colors'], correctAnswer: 0, explanation: 'HSL stands for Hue, Saturation, Lightness. Hue is measured in degrees on the color wheel.', difficulty: 1 },
          { id: 'cv5-q2', type: 'true-false', question: 'Setting globalAlpha to 0.5 makes all subsequent drawings 50% transparent.', options: ['True', 'False'], correctAnswer: 0, explanation: 'globalAlpha multiplies the alpha of all drawing operations that follow.', difficulty: 1 },
          { id: 'cv5-q3', type: 'mcq', question: 'What does rgba(255, 0, 0, 0.3) represent?', options: ['Red at 30% opacity', 'Red at 30% brightness', 'A shade of purple', 'An invalid color value'], correctAnswer: 0, explanation: 'RGBA adds an alpha channel as the 4th parameter. 0.0 is fully transparent, 1.0 is fully opaque.', difficulty: 1 },
          { id: 'cv5-q4', type: 'mcq', question: 'Which compositing mode creates additive blending (bright glows)?', options: ['lighter', 'source-over', 'multiply', 'screen'], correctAnswer: 0, explanation: 'The "lighter" mode adds the color values of overlapping pixels, creating a glow effect.', difficulty: 2 },
          { id: 'cv5-q5', type: 'true-false', question: 'Hex color shorthand like #F52 is equivalent to #FF5522.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Each shorthand hex digit is doubled: #F52 expands to #FF5522.', difficulty: 1 },
          { id: 'cv5-q6', type: 'mcq', question: 'How many named CSS colors does Canvas support?', options: ['140+', '16', '256', '50'], correctAnswer: 0, explanation: 'CSS supports over 140 named colors including common ones like "tomato" and "dodgerblue".', difficulty: 2 },
          { id: 'cv5-q7', type: 'mcg', question: 'What is the range of the alpha channel in rgba()?', options: ['0.0 to 1.0', '0 to 255', '0% to 100%', '0 to 360'], correctAnswer: 0, explanation: 'Alpha ranges from 0.0 (fully transparent) to 1.0 (fully opaque).', difficulty: 1 },
          { id: 'cv5-q8', type: 'true-false', question: 'Setting ctx.globalCompositeOperation = "destination-out" can be used to erase pixels.', options: ['True', 'False'], correctAnswer: 0, explanation: 'destination-out makes the destination transparent where the source overlaps it, effectively erasing.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv5-e1', type: 'easy', title: 'Color Palette Swatches', instructions: 'Draw 8 color swatches in a row. Use one of each format: hex, shorthand hex, rgb, rgba, hsl, hsla, named color, and hex with alpha.', hint: 'Make each swatch 50x50 pixels with a black border. Label each one with its format name.', starterCode: '<canvas id="swatches" width="600" height="150"></canvas>\n<script>\n  // Your swatches here\n</script>', solution: '<canvas id="swatches" width="600" height="150"></canvas>\n<script>\n  const ctx = document.getElementById("swatches").getContext("2d");\n  const colors = ["#E91E63","#F52","rgb(33,150,243)","rgba(76,175,80,0.5)","hsl(48,100%,50%)","hsla(9,100%,64%,0.7)","tomato","#9C27B088"];\n  const names = ["Hex","Shorthand","RGB","RGBA","HSL","HSLA","Named","Hex+Alpha"];\n  colors.forEach((c, i) => {\n    ctx.fillStyle = c;\n    ctx.fillRect(10 + i * 75, 10, 60, 60);\n    ctx.strokeRect(10 + i * 75, 10, 60, 60);\n    ctx.fillStyle = "#000";\n    ctx.font = "11px Arial";\n    ctx.textAlign = "center";\n    ctx.fillText(names[i], 40 + i * 75, 90);\n  });\n</script>' },
        { id: 'cv5-e2', type: 'medium', title: 'Interactive Color Mixer', instructions: 'Create a canvas that displays two overlapping circles with different colors. Use HSL sliders (conceptual) — draw red and blue circles that overlap in the center. In the overlap area, use globalAlpha to show the blend.', hint: 'Set globalAlpha to 0.5 before drawing each circle. The overlap will naturally blend.', starterCode: '<canvas id="mixer" width="400" height="300"></canvas>\n<script>\n  // Your color mixer here\n</script>', solution: '<canvas id="mixer" width="400" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("mixer").getContext("2d");\n  // Background\n  ctx.fillStyle = "#fff";\n  ctx.fillRect(0, 0, 400, 300);\n  // Red circle\n  ctx.globalAlpha = 0.5;\n  ctx.fillStyle = "red";\n  ctx.beginPath();\n  ctx.arc(150, 150, 100, 0, Math.PI * 2);\n  ctx.fill();\n  // Blue circle\n  ctx.fillStyle = "blue";\n  ctx.beginPath();\n  ctx.arc(250, 150, 100, 0, Math.PI * 2);\n  ctx.fill();\n  ctx.globalAlpha = 1.0;\n  ctx.fillStyle = "#000";\n  ctx.font = "16px Arial";\n  ctx.textAlign = "center";\n  ctx.fillText("Overlap creates purple blend", 200, 280);\n</script>' },
        { id: 'cv5-e3', type: 'hard', title: 'Procedural Palette Generator', instructions: 'Create an application that generates and displays 5 harmonious color palettes based on randomly chosen base hues. Each palette should show 5 color swatches (base, light, dark, complement, analogous).', hint: 'Use the generatePalette function pattern. For each base hue, calculate variations by adding/subtracting from HSL values.', starterCode: '<canvas id="palettes" width="600" height="400"></canvas>\n<script>\n  // Generate 5 random palettes\n</script>', solution: '<canvas id="palettes" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("palettes").getContext("2d");\n  function genPalette(h) {\n    return [\n      hsl(${h}, 70%, 50%),\n      hsl(${h}, 60%, 70%),\n      hsl(${h}, 80%, 30%),\n      hsl(${(h+180)%360}, 70%, 50%),\n      hsl(${(h+30)%360}, 70%, 50%)\n    ];\n  }\n  for (let row = 0; row < 5; row++) {\n    const hue = Math.random() * 360;\n    const pal = genPalette(hue);\n    pal.forEach((c, i) => {\n      ctx.fillStyle = c;\n      ctx.fillRect(30 + i * 110, 20 + row * 75, 90, 50);\n      ctx.strokeStyle = "#ccc";\n      ctx.strokeRect(30 + i * 110, 20 + row * 75, 90, 50);\n    });\n  }\n</script>' }
      ],
      cheatSheet: [
        { label: 'Hex color', value: 'ctx.fillStyle = "#FF5722"' },
        { label: 'RGB color', value: 'ctx.fillStyle = "rgb(255,87,34)"' },
        { label: 'RGBA alpha', value: 'ctx.fillStyle = "rgba(255,87,34,0.5)"' },
        { label: 'HSL color', value: 'ctx.fillStyle = "hsl(14,100%,57%)"' },
        { label: 'Global alpha', value: 'ctx.globalAlpha = 0.5' },
        { label: 'Composite mode', value: 'ctx.globalCompositeOperation = "lighter"' }
      ]
    },,

    {
      id: 'canvas-6',
      number: 6,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Stroke Styles and Borders',
      subtitle: 'lineWidth, lineCap, lineJoin, and dashes',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 30,
      xpReward: 50,
      prerequisites: ['canvas-5'],
      learningObjectives: [
        'Control line width, cap styles, and join styles',
        'Create dashed and dotted lines with setLineDash',
        'Understand miter limits and line rendering',
        'Combine stroke styles for artistic effects'
      ],
      sections: [
        {
          id: 's1',
          title: 'Line Width, Caps, and Joins',
          whyItMatters: 'Stroke styles define the visual quality of your outlines. Professional-looking graphics depend on proper line styling.',
          content: "## Line Width\n\nThe `lineWidth` property sets the thickness of strokes in pixels:\n\n```javascript\nctx.lineWidth = 1;   // Thin line (default)\nctx.lineWidth = 5;   // Medium line\nctx.lineWidth = 20;  // Thick line\n\n// Lines are centered on the path coordinates\nctx.beginPath();\nctx.moveTo(50, 100);\nctx.lineTo(350, 100);\nctx.lineWidth = 20;\nctx.strokeStyle = 'tomato';\nctx.stroke();\n```\n\n### Line Cap Styles\n\nThe `lineCap` property determines how the ends of lines are rendered:\n\n```javascript\nctx.lineCap = 'butt';   // Flat end, stops exactly at endpoint (default)\nctx.lineCap = 'round';  // Rounded end, extends half lineWidth past endpoint\nctx.lineCap = 'square'; // Square end, extends half lineWidth past endpoint\n```\n\n### Line Join Styles\n\nThe `lineJoin` property controls how corners are drawn where lines meet:\n\n```javascript\nctx.lineJoin = 'miter';  // Sharp corner, extends edges until they meet (default)\nctx.lineJoin = 'round';  // Rounded corner\nctx.lineJoin = 'bevel';  // Flat beveled corner\n```\n\n### Miter Limit\n\nWhen using 'miter' joins, the `miterLimit` controls how far the miter can extend:\n\n```javascript\nctx.miterLimit = 10;  // Default. Higher = sharper angles allowed\n// If the miter would extend beyond miterLimit * lineWidth,\n// the join falls back to 'bevel'\n```\n\n### Visual Examples\n\n```javascript\nfunction drawLineCaps() {\n  ['butt', 'round', 'square'].forEach((cap, i) => {\n    ctx.beginPath();\n    ctx.moveTo(50 + i * 150, 50);\n    ctx.lineTo(50 + i * 150, 150);\n    ctx.lineCap = cap;\n    ctx.lineWidth = 20;\n    ctx.strokeStyle = '#2196F3';\n    ctx.stroke();\n    // Mark exact endpoints\n    ctx.fillStyle = 'red';\n    ctx.beginPath();\n    ctx.arc(50 + i * 150, 50, 3, 0, Math.PI * 2);\n    ctx.arc(50 + i * 150, 150, 3, 0, Math.PI * 2);\n    ctx.fill();\n  });\n}\n```"
        },
        {
          id: 's2',
          title: 'Dashed and Dotted Lines',
          whyItMatters: 'Dashed lines are essential for diagrams (cutaway views), games (path previews), and UI elements (selection borders).',
          content: "## Creating Dashed Lines\n\nUse `setLineDash()` to create dashed and dotted patterns:\n\n```javascript\n// Simple dash: 10px dash, 5px gap\nctx.setLineDash([10, 5]);\n\n// Dot-dash pattern: 2px dot, 4px gap, 10px dash, 4px gap\nctx.setLineDash([2, 4, 10, 4]);\n\n// Solid line (reset)\nctx.setLineDash([]);\n```\n\n### Line Dash Offset\n\nThe `lineDashOffset` property shifts the phase of the dash pattern:\n\n```javascript\nctx.setLineDash([10, 10]);\nctx.lineDashOffset = 0;   // Start at the beginning (default)\nctx.lineDashOffset = 5;   // Shift by 5px\nctx.lineDashOffset = -10; // Shift backward\n```\n\nAnimating the dash offset creates the \"marching ants\" effect:\n\n```javascript\nlet offset = 0;\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.setLineDash([10, 10]);\n  ctx.lineDashOffset = offset--;\n  ctx.strokeRect(50, 50, 300, 200);\n  requestAnimationFrame(animate);\n}\n```\n\n### Practical: Selection Border\n\n```javascript\nfunction drawSelectionRect(x, y, w, h, offset) {\n  ctx.save();\n  ctx.setLineDash([5, 5]);\n  ctx.lineDashOffset = offset;\n  ctx.strokeStyle = '#2196F3';\n  ctx.lineWidth = 2;\n  ctx.strokeRect(x, y, w, h);\n  ctx.restore();\n}\n```\n\n### Combination Example\n\n```javascript\n// Dashed circle\nctx.beginPath();\nctx.arc(200, 200, 80, 0, Math.PI * 2);\nctx.setLineDash([8, 6]);\nctx.lineWidth = 3;\nctx.strokeStyle = '#E91E63';\nctx.stroke();\n```"
        },
        {
          id: 's3',
          title: 'Combining Stroke Styles for Artistic Effects',
          whyItMatters: 'Layering strokes with different styles creates rich visual effects without complex drawing code.',
          content: "## Multi-Layer Stroking\n\nDraw the same path multiple times with different stroke settings:\n\n```javascript\nfunction drawFancyPath(ctx, points) {\n  // Start the path once\n  ctx.beginPath();\n  ctx.moveTo(points[0].x, points[0].y);\n  for (let i = 1; i < points.length; i++) {\n    ctx.lineTo(points[i].x, points[i].y);\n  }\n  \n  // Outer glow\n  ctx.save();\n  ctx.lineWidth = 12;\n  ctx.strokeStyle = 'rgba(255, 87, 34, 0.3)';\n  ctx.stroke();\n  \n  // Middle border\n  ctx.lineWidth = 6;\n  ctx.strokeStyle = 'rgba(255, 87, 34, 0.6)';\n  ctx.stroke();\n  \n  // Solid core\n  ctx.lineWidth = 2;\n  ctx.strokeStyle = '#FF5722';\n  ctx.stroke();\n  ctx.restore();\n}\n```\n\n### Creating Borders with Shadows\n\nCombine shadow settings with strokes:\n\n```javascript\nctx.shadowColor = 'rgba(0, 0, 0, 0.3)';\nctx.shadowBlur = 10;\nctx.shadowOffsetX = 3;\nctx.shadowOffsetY = 3;\nctx.lineWidth = 4;\nctx.strokeStyle = '#FF5722';\nctx.strokeRect(100, 100, 200, 150);\n\n// Reset shadows\nctx.shadowColor = 'transparent';\nctx.shadowBlur = 0;\n```\n\n### Line Style Gallery\n\nExperiment with these combinations:\n\n```javascript\nconst styles = [\n  { width: 1, cap: 'butt', dash: [] },\n  { width: 3, cap: 'round', dash: [10, 5] },\n  { width: 5, cap: 'square', dash: [2, 6] },\n  { width: 8, cap: 'butt', dash: [15, 5, 5, 5] },\n];\n```\n\nEach combination creates a distinct visual that suits different purposes — from technical diagrams to artistic illustrations."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv6-q1', type: 'mcq', question: 'What is the default value of lineCap?', options: ['butt', 'round', 'square', 'miter'], correctAnswer: 0, explanation: 'The default lineCap is "butt", which gives flat ends at the exact endpoint.', difficulty: 1 },
          { id: 'cv6-q2', type: 'mcq', question: 'Which lineJoin value creates a rounded corner?', options: ['round', 'bevel', 'miter', 'arc'], correctAnswer: 0, explanation: 'The "round" lineJoin draws a rounded corner at path intersections.', difficulty: 1 },
          { id: 'cv6-q3', type: 'true-false', question: 'A line drawn with lineWidth=10 is centered on the path coordinates.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The line is centered on the path, extending 5px on each side.', difficulty: 2 },
          { id: 'cv6-q4', type: 'mcq', question: 'How do you reset dashed lines back to solid?', options: ['setLineDash([])', 'setLineDash([0])', 'lineDashReset()', 'clearLineDash()'], correctAnswer: 0, explanation: 'Calling setLineDash([]) with an empty array resets to a solid line.', difficulty: 1 },
          { id: 'cv6-q5', type: 'mcq', question: 'What does the lineDashOffset property control?', options: ['The phase/shift of the dash pattern', 'The thickness of dashes', 'The gap between dashes', 'The color of dashes'], correctAnswer: 0, explanation: 'lineDashOffset shifts where in the dash pattern the line starts.', difficulty: 2 },
          { id: 'cv6-q6', type: 'true-false', question: 'The miterLimit property is only relevant when lineJoin is set to "bevel".', options: ['True', 'False'], correctAnswer: 1, explanation: 'miterLimit only applies to "miter" joins. It limits how far a miter corner can extend.', difficulty: 2 },
          { id: 'cv6-q7', type: 'mcq', question: 'What happens when the miter would exceed the miter limit?', options: ['The join falls back to bevel', 'The line is not drawn', 'An error is thrown', 'The miter is clamped'], correctAnswer: 0, explanation: 'When the miter exceeds miterLimit * lineWidth, the join uses bevel instead.', difficulty: 3 },
          { id: 'cv6-q8', type: 'true-false', question: 'Animating lineDashOffset creates a marching ants effect.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Continuously decreasing or increasing lineDashOffset makes the dashes appear to move.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv6-e1', type: 'easy', title: 'Line Cap Comparison', instructions: 'Draw three horizontal lines of width 40px, one with each lineCap style (butt, round, square). Red dots should mark the exact start and end points to show the difference.', hint: 'Use arc() to draw red dots at the endpoints. The round and square caps extend beyond the endpoints.', starterCode: '<canvas id="caps" width="500" height="200"></canvas>\n<script>\n  // Your line cap comparison\n</script>', solution: '<canvas id="caps" width="500" height="200"></canvas>\n<script>\n  const ctx = document.getElementById("caps").getContext("2d");\n  ["butt","round","square"].forEach((cap, i) => {\n    ctx.beginPath();\n    ctx.moveTo(50, 40 + i * 60);\n    ctx.lineTo(450, 40 + i * 60);\n    ctx.lineCap = cap;\n    ctx.lineWidth = 40;\n    ctx.strokeStyle = "#2196F3";\n    ctx.stroke();\n    ctx.fillStyle = "red";\n    ctx.beginPath(); ctx.arc(50, 40 + i * 60, 5, 0, 7); ctx.fill();\n    ctx.beginPath(); ctx.arc(450, 40 + i * 60, 5, 0, 7); ctx.fill();\n    ctx.fillStyle = "#000";\n    ctx.font = "14px Arial";\n    ctx.fillText(cap, 10, 40 + i * 60);\n  });\n</script>' },
        { id: 'cv6-e2', type: 'medium', title: 'Dashed Line Patterns', instructions: 'Create a gallery of 6 different dashed line patterns. Each pattern should be a horizontal line with a label showing the setLineDash array used.', hint: 'Use various patterns like [10,5], [5,5], [2,6], [10,5,2,5], [20,10,5,10], [1,4].', starterCode: '<canvas id="dashes" width="500" height="400"></canvas>\n<script>\n  // Your dash gallery\n</script>', solution: '<canvas id="dashes" width="500" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("dashes").getContext("2d");\n  const patterns = [[10,5],[5,5],[2,6],[10,5,2,5],[20,10,5,10],[1,4]];\n  patterns.forEach((p, i) => {\n    ctx.beginPath();\n    ctx.moveTo(50, 30 + i * 60);\n    ctx.lineTo(450, 30 + i * 60);\n    ctx.setLineDash(p);\n    ctx.strokeStyle = "#333";\n    ctx.lineWidth = 4;\n    ctx.stroke();\n    ctx.setLineDash([]);\n    ctx.fillStyle = "#666";\n    ctx.font = "12px monospace";\n    ctx.fillText(${JSON.stringify(p)}, 50, 55 + i * 60);\n  });\n</script>' },
        { id: 'cv6-e3', type: 'hard', title: 'Marching Ants Selection Border', instructions: 'Create an animated selection rectangle with a marching ants border effect. The rectangle should be centered and continuously animate its dash offset to create movement.', hint: 'Use requestAnimationFrame. Decrease lineDashOffset each frame. Use setLineDash([5, 5]).', starterCode: '<canvas id="ants" width="400" height="400"></canvas>\n<script>\n  // Marching ants animation\n</script>', solution: '<canvas id="ants" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("ants").getContext("2d");\n  let offset = 0;\n  function animate() {\n    ctx.clearRect(0, 0, 400, 400);\n    ctx.fillStyle = "#f0f0f0";\n    ctx.fillRect(0, 0, 400, 400);\n    ctx.setLineDash([5, 5]);\n    ctx.lineDashOffset = offset--;\n    ctx.strokeStyle = "#000";\n    ctx.lineWidth = 2;\n    ctx.strokeRect(50, 50, 300, 300);\n    ctx.fillStyle = "#333";\n    ctx.font = "24px Arial";\n    ctx.textAlign = "center";\n    ctx.textBaseline = "middle";\n    ctx.fillText("Selected", 200, 200);\n    requestAnimationFrame(animate);\n  }\n  animate();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Line width', value: 'ctx.lineWidth = 5' },
        { label: 'Line cap', value: 'ctx.lineCap = "butt"|"round"|"square"' },
        { label: 'Line join', value: 'ctx.lineJoin = "miter"|"round"|"bevel"' },
        { label: 'Dashed line', value: 'ctx.setLineDash([10, 5])' },
        { label: 'Dash offset', value: 'ctx.lineDashOffset = value' },
        { label: 'Reset dashes', value: 'ctx.setLineDash([])' }
      ]
    },,

    {
      id: 'canvas-7',
      number: 7,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Rectangles and Shapes',
      subtitle: 'fillRect, strokeRect, clearRect, compound shapes',
      difficulty: 'Absolute Beginner',
      estimatedMinutes: 30,
      xpReward: 50,
      prerequisites: ['canvas-6'],
      learningObjectives: [
        'Master the three rectangle methods: fillRect, strokeRect, clearRect',
        'Build compound shapes from multiple rectangles',
        'Create patterns and grids using rectangles',
        'Implement a basic bar chart with rectangles'
      ],
      sections: [
        {
          id: 's1',
          title: 'The Three Rectangle Methods',
          whyItMatters: 'Rectangles are the most fundamental shape in Canvas. Every complex shape can be decomposed into rectangles for collision, layout, and rendering.',
          content: "## Rectangle Drawing Methods\n\nCanvas provides three dedicated rectangle methods. Unlike paths, these are drawn immediately without needing `stroke()` or `fill()`:\n\n### fillRect\n\nDraws a filled rectangle:\n\n```javascript\nctx.fillStyle = '#FF5722';\nctx.fillRect(50, 50, 200, 150); // x, y, width, height\n```\n\n### strokeRect\n\nDraws a rectangular outline:\n\n```javascript\nctx.strokeStyle = '#333';\nctx.lineWidth = 4;\nctx.strokeRect(50, 50, 200, 150);\n```\n\n### clearRect\n\nErases pixels to transparent black:\n\n```javascript\nctx.clearRect(75, 75, 150, 100); // Clears a hole in the filled rect\n```\n\n### Combined Example\n\n```javascript\nctx.fillStyle = '#E91E63';\nctx.fillRect(50, 50, 300, 200);  // Pink rectangle\n\nctx.strokeStyle = '#333';\nctx.lineWidth = 4;\nctx.strokeRect(50, 50, 300, 200); // Border\n\nctx.clearRect(100, 80, 60, 60);    // Cut out a square\nctx.clearRect(240, 80, 60, 60);   // Cut out another\n```\n\n### The rect() Path Method\n\nThere is also a `rect()` method that adds a rectangle sub-path (for use with `fill()`/`stroke()`):\n\n```javascript\nctx.beginPath();\nctx.rect(50, 50, 200, 150);  // Add rectangle to current path\nctx.fillStyle = '#4CAF50';\nctx.fill();  // Fill only this rectangle path\n```\n\nThe difference is that `rect()` is a path method and respects the current path and stroke/fill calls, while `fillRect`/`strokeRect` are immediate drawing commands."
        },
        {
          id: 's2',
          title: 'Building Compound Shapes from Rectangles',
          whyItMatters: 'Complex UI elements and game objects are often built from simple rectangular components arranged together.',
          content: "## Composing with Rectangles\n\nBuild complex shapes by combining multiple rectangles:\n\n### A Simple House\n\n```javascript\n// Wall\nctx.fillStyle = '#8D6E63';\nctx.fillRect(150, 200, 200, 200);\n\n// Roof (triangle using path)\nctx.fillStyle = '#D32F2F';\nctx.beginPath();\nctx.moveTo(130, 200);\nctx.lineTo(250, 80);\nctx.lineTo(370, 200);\nctx.closePath();\nctx.fill();\n\n// Windows\nctx.fillStyle = '#FFF9C4';\nctx.fillRect(175, 250, 40, 40);\nctx.fillRect(285, 250, 40, 40);\n\n// Door\nctx.fillStyle = '#5D4037';\nctx.fillRect(220, 300, 60, 100);\n\n// Door knob\nctx.fillStyle = '#FFD700';\nctx.beginPath();\nctx.arc(270, 355, 5, 0, Math.PI * 2);\nctx.fill();\n```\n\n### Creating a Bar Chart\n\n```javascript\nconst data = [120, 200, 80, 300, 150, 220];\nconst barWidth = 50;\nconst gap = 20;\nconst chartHeight = 300;\n\nctx.fillStyle = '#2196F3';\ndata.forEach((value, i) => {\n  const x = 40 + i * (barWidth + gap);\n  const y = chartHeight - value;\n  ctx.fillRect(x, y, barWidth, value);\n});\n```\n\n### Nested Rectangles for UI\n\n```javascript\nfunction drawButton(x, y, w, h, label, color) {\n  // Shadow\n  ctx.fillStyle = 'rgba(0,0,0,0.2)';\n  ctx.fillRect(x + 3, y + 3, w, h);\n  \n  // Button body\n  ctx.fillStyle = color;\n  ctx.fillRect(x, y, w, h);\n  \n  // Border\n  ctx.strokeStyle = 'rgba(0,0,0,0.3)';\n  ctx.lineWidth = 2;\n  ctx.strokeRect(x, y, w, h);\n  \n  // Label\n  ctx.fillStyle = 'white';\n  ctx.font = 'bold 16px Arial';\n  ctx.textAlign = 'center';\n  ctx.textBaseline = 'middle';\n  ctx.fillText(label, x + w / 2, y + h / 2);\n}\n```"
        },
        {
          id: 's3',
          title: 'Grid Patterns and Tiling',
          whyItMatters: 'Rectangular grids are the building blocks of tile maps, pixel art editors, and data visualization layouts.',
          content: "## Drawing Grids\n\n### Checkerboard Pattern\n\n```javascript\nconst size = 40;\nfor (let row = 0; row < 8; row++) {\n  for (let col = 0; col < 8; col++) {\n    ctx.fillStyle = (row + col) % 2 === 0 ? '#333' : '#fff';\n    ctx.fillRect(col * size, row * size, size, size);\n  }\n}\n```\n\n### Masonry Grid with Varying Heights\n\n```javascript\nconst tiles = [\n  { w: 100, h: 100 }, { w: 100, h: 150 }, { w: 100, h: 80 },\n  { w: 100, h: 120 }, { w: 100, h: 90 }, { w: 100, h: 140 },\n];\n\nlet x = 10, y = 10;\nlet maxH = 0;\nconst gap = 5;\n\ntiles.forEach(tile => {\n  if (x + tile.w > canvas.width) {\n    x = 10;\n    y += maxH + gap;\n    maxH = 0;\n  }\n  ctx.fillStyle = '#4CAF50';\n  ctx.fillRect(x, y, tile.w, tile.h);\n  ctx.strokeRect(x, y, tile.w, tile.h);\n  maxH = Math.max(maxH, tile.h);\n  x += tile.w + gap;\n});\n```\n\n### Creating a Pixel Editor Grid\n\n```javascript\nconst GRID_SIZE = 10;\nconst PIXEL_SIZE = canvas.width / GRID_SIZE;\n\nfunction drawGrid() {\n  ctx.strokeStyle = '#ccc';\n  ctx.lineWidth = 1;\n  for (let i = 0; i <= GRID_SIZE; i++) {\n    ctx.beginPath();\n    ctx.moveTo(i * PIXEL_SIZE, 0);\n    ctx.lineTo(i * PIXEL_SIZE, canvas.height);\n    ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(0, i * PIXEL_SIZE);\n    ctx.lineTo(canvas.width, i * PIXEL_SIZE);\n    ctx.stroke();\n  }\n}\n\nfunction fillPixel(col, row, color) {\n  ctx.fillStyle = color;\n  ctx.fillRect(col * PIXEL_SIZE, row * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);\n}\n```\n\nThis pattern is the foundation for pixel art editors, tile map editors, and grid-based games like Minesweeper or Conway's Game of Life."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv7-q1', type: 'mcq', question: 'How many parameters does fillRect take?', options: ['4 (x, y, width, height)', '2 (x, y)', '3 (x, y, size)', '1 (size)'], correctAnswer: 0, explanation: 'fillRect(x, y, width, height) requires all four parameters.', difficulty: 1 },
          { id: 'cv7-q2', type: 'true-false', question: 'fillRect requires calling ctx.fill() afterwards to render.', options: ['True', 'False'], correctAnswer: 1, explanation: 'fillRect draws immediately and does not need a separate fill() call.', difficulty: 1 },
          { id: 'cv7-q3', type: 'mcq', question: 'What does clearRect do to the pixels in its area?', options: ['Sets them to transparent black', 'Sets them to white', 'Deletes the canvas element', 'Fills them with the current fillStyle'], correctAnswer: 0, explanation: 'clearRect sets the specified rectangle to fully transparent black (RGBA 0,0,0,0).', difficulty: 1 },
          { id: 'cv7-q4', type: 'mcq', question: 'How is rect() different from fillRect()?', options: ['rect() adds a path sub-path; fillRect() draws immediately', 'rect() draws outlined; fillRect() draws filled', 'rect() only works for squares', 'They are the same'], correctAnswer: 0, explanation: 'rect() adds a rectangle path segment that must be filled/stroked separately. fillRect() draws immediately.', difficulty: 2 },
          { id: 'cv7-q5', type: 'true-false', question: 'You can use clearRect to create holes in already drawn shapes.', options: ['True', 'False'], correctAnswer: 0, explanation: 'clearRect erases pixels to transparent, effectively creating holes in existing drawings.', difficulty: 1 },
          { id: 'cv7-q6', type: 'mcq', question: 'What pattern is used for the classic checkerboard coloring?', options: ['(row + col) % 2 === 0', 'row % 2 === 0', 'col % 2 === 0', 'row * col % 2 === 0'], correctAnswer: 0, explanation: 'Alternating colors based on (row + col) % 2 creates a checkerboard pattern.', difficulty: 2 },
          { id: 'cv7-q7', type: 'true-false', question: 'strokeRect draws an outlined rectangle with the current strokeStyle.', options: ['True', 'False'], correctAnswer: 0, explanation: 'strokeRect immediately draws an outlined rectangle using the current strokeStyle and lineWidth.', difficulty: 1 },
          { id: 'cv7-q8', type: 'mcq', question: 'Which method would you use to draw a rectangle that is part of a larger path with curves?', options: ['rect()', 'fillRect()', 'strokeRect()', 'clearRect()'], correctAnswer: 0, explanation: 'rect() adds a rectangle as a sub-path, which can be part of a larger complex path.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv7-e1', type: 'easy', title: 'Checkerboard Pattern', instructions: 'Draw an 8x8 checkerboard on a 400x400 canvas. Each square should be 50x50 pixels. Use black and white (or any two colors).', hint: 'Use nested for loops. The formula (row + col) % 2 gives alternating colors.', starterCode: '<canvas id="checker" width="400" height="400"></canvas>\n<script>\n  // Your checkerboard\n</script>', solution: '<canvas id="checker" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("checker").getContext("2d");\n  for (let r = 0; r < 8; r++) {\n    for (let c = 0; c < 8; c++) {\n      ctx.fillStyle = (r + c) % 2 === 0 ? "#333" : "#fff";\n      ctx.fillRect(c * 50, r * 50, 50, 50);\n    }\n  }\n</script>' },
        { id: 'cv7-e2', type: 'medium', title: 'Bar Chart with Labels', instructions: 'Create a bar chart showing 6 data values. Each bar should be a different color, with the value displayed above each bar. Draw axes with labels.', hint: 'Use fillRect for the bars and fillText for labels. Store data in an array. Map values to heights.', starterCode: '<canvas id="chart" width="500" height="300"></canvas>\n<script>\n  const data = [45, 72, 30, 88, 55, 63];\n  // Your bar chart here\n</script>', solution: '<canvas id="chart" width="500" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("chart").getContext("2d");\n  const data = [45, 72, 30, 88, 55, 63];\n  const colors = ["#E91E63","#9C27B0","#2196F3","#4CAF50","#FFC107","#FF5722"];\n  const maxVal = Math.max(...data);\n  const hScale = 250 / maxVal;\n  ctx.fillStyle = "#f5f5f5";\n  ctx.fillRect(0, 0, 500, 300);\n  data.forEach((v, i) => {\n    const barH = v * hScale;\n    ctx.fillStyle = colors[i];\n    ctx.fillRect(30 + i * 78, 270 - barH, 60, barH);\n    ctx.fillStyle = "#000";\n    ctx.font = "12px Arial";\n    ctx.textAlign = "center";\n    ctx.fillText(v, 60 + i * 78, 262 - barH);\n  });\n  // Axes\n  ctx.strokeStyle = "#333";\n  ctx.beginPath(); ctx.moveTo(20, 20); ctx.lineTo(20, 270); ctx.stroke();\n  ctx.beginPath(); ctx.moveTo(20, 270); ctx.lineTo(490, 270); ctx.stroke();\n</script>' },
        { id: 'cv7-e3', type: 'hard', title: 'Mondrian Art Generator', instructions: 'Generate a random Mondrian-style abstract painting using colored rectangles separated by thick black lines. Use random subdivisions to determine rectangle sizes.', hint: 'Recursively subdivide the canvas into smaller rectangles. At each step, decide whether to split horizontally or vertically.', starterCode: '<canvas id="mondrian" width="500" height="500"></canvas>\n<script>\n  // Your Mondrian generator\n</script>', solution: '<canvas id="mondrian" width="500" height="500"></canvas>\n<script>\n  const ctx = document.getElementById("mondrian").getContext("2d");\n  const colors = ["#E91E63","#2196F3","#FFC107","#fff","#fff","#fff"];\n  function draw(x, y, w, h, depth) {\n    if (depth > 4 || (w < 60 && h < 60)) {\n      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];\n      ctx.fillRect(x, y, w, h);\n      ctx.strokeStyle = "#000";\n      ctx.lineWidth = 4;\n      ctx.strokeRect(x, y, w, h);\n      return;\n    }\n    if (w > h) {\n      const split = x + w * (0.3 + Math.random() * 0.4);\n      draw(x, y, split - x, h, depth + 1);\n      draw(split, y, x + w - split, h, depth + 1);\n    } else {\n      const split = y + h * (0.3 + Math.random() * 0.4);\n      draw(x, y, w, split - y, depth + 1);\n      draw(x, split, w, y + h - split, depth + 1);\n    }\n  }\n  draw(0, 0, 500, 500, 0);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Fill rectangle', value: 'ctx.fillRect(x, y, w, h)' },
        { label: 'Stroke rectangle', value: 'ctx.strokeRect(x, y, w, h)' },
        { label: 'Clear rectangle', value: 'ctx.clearRect(x, y, w, h)' },
        { label: 'Path rectangle', value: 'ctx.rect(x, y, w, h)' },
        { label: 'Checkerboard', value: '(row + col) % 2 === 0' },
        { label: 'Grid loop', value: 'nested for loops with step size' }
      ]
    },,

    {
      id: 'canvas-8',
      number: 8,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Circles and Arcs',
      subtitle: 'The arc() method, radians, pie slices, and donuts',
      difficulty: 'Beginner',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-7'],
      learningObjectives: [
        'Draw circles using the arc() method with proper parameters',
        'Understand radians and convert between degrees and radians',
        'Create pie slices, donuts, and arc segments',
        'Build a simple pie chart from arc segments'
      ],
      sections: [
        {
          id: 's1',
          title: 'The arc() Method',
          whyItMatters: 'Circles and arcs are fundamental for creating games (billiards, planets), data visualization (pie charts), and UI elements (rounded buttons, progress rings).',
          content: "## The arc() Method Signature\n\nThe `arc()` method adds a circular arc to the current path:\n\n```javascript\nctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);\n```\n\n- **x, y**: Center point of the circle\n- **radius**: Radius in pixels\n- **startAngle**: Angle to start drawing (in radians)\n- **endAngle**: Angle to stop drawing (in radians)\n- **counterclockwise**: Optional boolean, default false (clockwise)\n\n### Drawing a Full Circle\n\n```javascript\nctx.beginPath();\nctx.arc(200, 200, 100, 0, Math.PI * 2);\nctx.fillStyle = '#4CAF50';\nctx.fill();\nctx.strokeStyle = '#333';\nctx.lineWidth = 3;\nctx.stroke();\n```\n\nThe key: `Math.PI * 2` equals one full rotation (360 degrees).\n\n### Understanding Radians\n\nRadians are based on the radius of a circle:\n- 0 radians = 3 o'clock (right)\n- Math.PI / 2 = 6 o'clock (bottom)\n- Math.PI = 9 o'clock (left)\n- Math.PI * 2 = back to 3 o'clock (full circle)\n\n```javascript\nfunction degToRad(degrees) {\n  return degrees * (Math.PI / 180);\n}\n\n// 90 degrees = PI/2 radians\nctx.arc(200, 200, 100, 0, degToRad(90));  // Quarter circle\n```\n\n### Drawing Arcs (Partial Circles)\n\n```javascript\n// A 45-degree arc\nctx.beginPath();\nctx.arc(200, 200, 100, 0, Math.PI / 4);\nctx.stroke();\n\n// A half circle (bottom half)\nctx.beginPath();\nctx.arc(200, 200, 100, 0, Math.PI);\nctx.stroke();\n```"
        },
        {
          id: 's2',
          title: 'Pie Slices and Donuts',
          whyItMatters: 'Pie charts and donut charts are the most common use of arc segments. Understanding how to connect arcs to the center is key.',
          content: "## Drawing Pie Slices\n\nTo draw a pie slice, start from the center, draw an arc, then close back to center:\n\n```javascript\nfunction drawSlice(ctx, cx, cy, radius, startAngle, endAngle, color) {\n  ctx.beginPath();\n  ctx.moveTo(cx, cy);              // Move to center\n  ctx.arc(cx, cy, radius, startAngle, endAngle);  // Draw arc\n  ctx.closePath();                  // Back to center\n  ctx.fillStyle = color;\n  ctx.fill();\n  ctx.stroke();\n}\n\n// Example: a simple pie chart\ndrawSlice(ctx, 200, 200, 150, 0, degToRad(120), '#E91E63');\ndrawSlice(ctx, 200, 200, 150, degToRad(120), degToRad(240), '#2196F3');\ndrawSlice(ctx, 200, 200, 150, degToRad(240), degToRad(360), '#4CAF50');\n```\n\n### Creating Donuts (Rings)\n\nA donut uses two arcs in opposite directions:\n\n```javascript\nfunction drawDonut(ctx, cx, cy, outerR, innerR, startAngle, endAngle, color) {\n  ctx.beginPath();\n  ctx.arc(cx, cy, outerR, startAngle, endAngle);           // Outer (clockwise)\n  ctx.arc(cx, cy, innerR, endAngle, startAngle, true);      // Inner (counter-clockwise)\n  ctx.closePath();\n  ctx.fillStyle = color;\n  ctx.fill();\n}\n```\n\n### Progress Ring\n\n```javascript\nfunction drawProgress(ctx, cx, cy, radius, thickness, progress, color) {\n  const startAngle = -Math.PI / 2;  // Start from top\n  const endAngle = startAngle + (Math.PI * 2 * progress);\n  \n  // Background ring\n  ctx.beginPath();\n  ctx.arc(cx, cy, radius, 0, Math.PI * 2);\n  ctx.strokeStyle = '#e0e0e0';\n  ctx.lineWidth = thickness;\n  ctx.stroke();\n  \n  // Progress arc\n  ctx.beginPath();\n  ctx.arc(cx, cy, radius, startAngle, endAngle);\n  ctx.strokeStyle = color;\n  ctx.lineWidth = thickness;\n  ctx.lineCap = 'round';\n  ctx.stroke();\n}\n```\n\nThe progress ring pattern is used in dashboards, loading indicators, and fitness trackers."
        },
        {
          id: 's3',
          title: 'Arcs with Multiple Segments',
          whyItMatters: 'Combining multiple arc segments creates complex shapes like pac-man, moon phases, and custom gauges.',
          content: "## Complex Arc Shapes\n\n### Pac-Man Shape\n\n```javascript\nfunction drawPacMan(ctx, cx, cy, radius, mouthAngle, color) {\n  ctx.beginPath();\n  ctx.moveTo(cx, cy);\n  ctx.arc(cx, cy, radius, mouthAngle, Math.PI * 2 - mouthAngle);\n  ctx.closePath();\n  ctx.fillStyle = color;\n  ctx.fill();\n}\n```\n\n### Speedometer Gauge\n\n```javascript\nfunction drawGauge(ctx, cx, cy, radius, value, maxValue) {\n  const startAngle = Math.PI * 0.75;  // 135 degrees\n  const endAngle = Math.PI * 2.25;    // 405 degrees\n  const range = endAngle - startAngle;\n  const progress = (value / maxValue) * range;\n  \n  // Background arc\n  ctx.beginPath();\n  ctx.arc(cx, cy, radius, startAngle, endAngle);\n  ctx.strokeStyle = '#e0e0e0';\n  ctx.lineWidth = 20;\n  ctx.stroke();\n  \n  // Colored progress\n  ctx.beginPath();\n  ctx.arc(cx, cy, radius, startAngle, startAngle + progress);\n  const hue = 120 - (value / maxValue) * 120;  // Green to red\n  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;\n  ctx.lineWidth = 20;\n  ctx.lineCap = 'round';\n  ctx.stroke();\n}\n```\n\n### Moon Phase Display\n\n```javascript\nfunction drawMoon(ctx, cx, cy, radius, phase) {\n  // 0 = new moon, 0.5 = full moon, 1.0 = new moon again\n  // Draw base circle\n  ctx.beginPath();\n  ctx.arc(cx, cy, radius, 0, Math.PI * 2);\n  ctx.fillStyle = '#FFD700';\n  ctx.fill();\n  \n  // Dark overlay using offset arc\n  if (phase !== 0.5) {\n    const offsetX = radius * (1 - 2 * phase);\n    ctx.beginPath();\n    ctx.arc(cx + offsetX, cy, radius, 0, Math.PI * 2);\n    ctx.fillStyle = '#1a1a2e';\n    ctx.fill();\n  }\n}\n```\n\nMastering arcs lets you create circular interfaces, game elements, and data visualizations with professional polish."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv8-q1', type: 'mcq', question: 'How many radians are in a full circle?', options: ['Math.PI * 2', 'Math.PI', '360', 'Math.PI / 2'], correctAnswer: 0, explanation: 'A full circle equals 2 * PI radians.', difficulty: 1 },
          { id: 'cv8-q2', type: 'true-false', question: 'The default direction of arc() is counter-clockwise.', options: ['True', 'False'], correctAnswer: 1, explanation: 'The default is clockwise. Set the 6th parameter to true for counter-clockwise.', difficulty: 1 },
          { id: 'cv8-q3', type: 'mcq', question: 'What angle does Math.PI represent in radians?', options: ['180 degrees', '90 degrees', '360 degrees', '45 degrees'], correctAnswer: 0, explanation: 'PI radians equals 180 degrees (half a circle).', difficulty: 1 },
          { id: 'cv8-q4', type: 'mcg', question: 'Which formula converts degrees to radians?', options: ['degrees * (Math.PI / 180)', 'degrees * (180 / Math.PI)', 'degrees / 360 * Math.PI', 'degrees * Math.PI'], correctAnswer: 0, explanation: 'Multiply degrees by PI/180 to get radians.', difficulty: 2 },
          { id: 'cv8-q5', type: 'mcq', question: 'How do you create a donut hole using arcs?', options: ['Draw outer clockwise, inner counter-clockwise', 'Draw outer with thick lineWidth', 'Use clearRect after the arc', 'Use globalCompositeOperation'], correctAnswer: 0, explanation: 'Opposite winding directions create a hole via the non-zero winding rule.', difficulty: 2 },
          { id: 'cv8-q6', type: 'true-false', question: 'The arc() method modifies the current path.', options: ['True', 'False'], correctAnswer: 0, explanation: 'arc() adds an arc segment to the current path, which must be filled/stroked separately.', difficulty: 1 },
          { id: 'cv8-q7', type: 'mcq', question: 'To draw a pie slice, what must you do before calling arc()?', options: ['Move to the center with moveTo()', 'Clear the canvas', 'Set lineWidth', 'Call beginPath() twice'], correctAnswer: 0, explanation: 'Move to the center point first, then draw the arc, then closePath to return to center.', difficulty: 2 },
          { id: 'cv8-q8', type: 'true-false', question: 'arc() parameters include x, y, radius, startAngle, endAngle, and an optional counterclockwise flag.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The full signature is arc(x, y, radius, startAngle, endAngle, counterclockwise).', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv8-e1', type: 'easy', title: 'Concentric Circles', instructions: 'Draw 8 concentric circles with radii increasing from 20 to 160 in steps of 20. All circles should be centered on the canvas and use different colors.', hint: 'Use a loop. Set fillStyle to a different color for each circle using HSL.', starterCode: '<canvas id="concentric" width="400" height="400"></canvas>\n<script>\n  // Your concentric circles\n</script>', solution: '<canvas id="concentric" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("concentric").getContext("2d");\n  for (let i = 1; i <= 8; i++) {\n    ctx.beginPath();\n    ctx.arc(200, 200, i * 20, 0, Math.PI * 2);\n    ctx.fillStyle = hsl(${i * 40}, 70%, 60%);\n    ctx.fill();\n    ctx.strokeStyle = "#333";\n    ctx.lineWidth = 2;\n    ctx.stroke();\n  }\n</script>' },
        { id: 'cv8-e2', type: 'medium', title: 'Pie Chart with 5 Segments', instructions: 'Create a pie chart with 5 segments of different sizes (30%, 25%, 20%, 15%, 10%). Each segment should be a different color with a thin white border between slices.', hint: 'Track the cumulative angle as you draw each slice. Each slice angle = (percentage / 100) * 2 * PI.', starterCode: '<canvas id="pie" width="500" height="400"></canvas>\n<script>\n  const data = [30, 25, 20, 15, 10];\n  const colors = ["#E91E63","#2196F3","#4CAF50","#FFC107","#9C27B0"];\n  // Your pie chart here\n</script>', solution: '<canvas id="pie" width="500" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("pie").getContext("2d");\n  const data = [30, 25, 20, 15, 10];\n  const colors = ["#E91E63","#2196F3","#4CAF50","#FFC107","#9C27B0"];\n  let startAngle = 0;\n  data.forEach((pct, i) => {\n    const sliceAngle = (pct / 100) * Math.PI * 2;\n    ctx.beginPath();\n    ctx.moveTo(200, 200);\n    ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);\n    ctx.closePath();\n    ctx.fillStyle = colors[i];\n    ctx.fill();\n    ctx.strokeStyle = "#fff";\n    ctx.lineWidth = 3;\n    ctx.stroke();\n    startAngle += sliceAngle;\n  });\n</script>' },
        { id: 'cv8-e3', type: 'hard', title: 'Animated Speedometer Gauge', instructions: 'Create an animated speedometer with a needle that sweeps from 0 to a target speed. Show the current value as text in the center. The arc should change color from green to yellow to red.', hint: 'Use requestAnimationFrame. Animate the needle angle with a smooth ease-out. Map speed to a gauge arc angle.', starterCode: '<canvas id="speedo" width="400" height="400"></canvas>\n<script>\n  // Your animated speedometer\n</script>', solution: '<canvas id="speedo" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("speedo").getContext("2d");\n  let speed = 0, target = 120;\n  function draw() {\n    speed += (target - speed) * 0.05;\n    ctx.clearRect(0, 0, 400, 400);\n    const startA = Math.PI * 0.75, endA = Math.PI * 2.25;\n    const range = endA - startA;\n    const prog = (speed / 160) * range;\n    // Background\n    ctx.beginPath();\n    ctx.arc(200, 220, 140, startA, endA);\n    ctx.strokeStyle = "#e0e0e0";\n    ctx.lineWidth = 30;\n    ctx.stroke();\n    // Progress\n    ctx.beginPath();\n    ctx.arc(200, 220, 140, startA, startA + prog);\n    const hue = 120 - (speed / 160) * 120;\n    ctx.strokeStyle = hsl(${hue}, 100%, 50%);\n    ctx.lineWidth = 30;\n    ctx.lineCap = "round";\n    ctx.stroke();\n    // Value\n    ctx.fillStyle = "#333";\n    ctx.font = "bold 36px Arial";\n    ctx.textAlign = "center";\n    ctx.fillText(Math.round(speed), 200, 240);\n    ctx.font = "14px Arial";\n    ctx.fillText("km/h", 200, 270);\n    if (Math.abs(speed - target) > 0.5) requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Arc method', value: 'ctx.arc(x, y, r, startA, endA, ccw)' },
        { label: 'Full circle', value: '0 to Math.PI * 2' },
        { label: 'Half circle', value: '0 to Math.PI' },
        { label: 'Deg to rad', value: 'degrees * (Math.PI / 180)' },
        { label: 'Pie slice', value: 'moveTo(center) + arc + closePath' },
        { label: 'Donut', value: 'outer arc clockwise, inner arc ccw' }
      ]
    },,

    {
      id: 'canvas-9',
      number: 9,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Curves and Bézier Paths',
      subtitle: 'quadraticCurveTo, bezierCurveTo, and control points',
      difficulty: 'Beginner',
      estimatedMinutes: 40,
      xpReward: 55,
      prerequisites: ['canvas-8'],
      learningObjectives: [
        'Draw quadratic Bézier curves with one control point',
        'Draw cubic Bézier curves with two control points',
        'Understand how control points influence curve shape',
        'Create smooth organic shapes using multiple curves'
      ],
      sections: [
        {
          id: 's1',
          title: 'Quadratic Bézier Curves',
          whyItMatters: 'Bézier curves are the foundation of vector graphics, fonts, and smooth animation paths. They let you create organic, flowing shapes that straight lines cannot achieve.',
          content: "## Quadratic Bézier Curves\n\nA quadratic Bézier curve uses a single control point to influence the curve shape:\n\n```javascript\nctx.quadraticCurveTo(cpx, cpy, x, y);\n```\n\nIt draws a curve from the current path position to (x, y), pulled toward the control point (cpx, cpy).\n\n### Simple Example\n\n```javascript\nctx.beginPath();\nctx.moveTo(50, 200);         // Start point\nctx.quadraticCurveTo(200, 50, 350, 200);  // Control point (200,50), end (350,200)\nctx.strokeStyle = '#E91E63';\nctx.lineWidth = 3;\nctx.stroke();\n\n// Draw control point (for visualization)\nctx.fillStyle = 'red';\nctx.beginPath();\nctx.arc(200, 50, 5, 0, Math.PI * 2);\nctx.fill();\n```\n\n### Visualizing Control Points\n\nThink of the control point as pulling the curve toward it like a magnet. The closer the control point is to the start-end line, the flatter the curve. The farther away, the more pronounced the curve.\n\n```javascript\n// Multiple curves with different control points\nconst curves = [\n  { cpx: 200, cpy: 50 },   // Strong pull upward\n  { cpx: 200, cpy: 150 },  // Gentle pull upward\n  { cpx: 200, cpy: 350 },  // Pull downward\n];\n\ncurves.forEach((cp, i) => {\n  ctx.beginPath();\n  ctx.moveTo(50, 200 + i * 100);\n  ctx.quadraticCurveTo(cp.cpx, cp.cpy, 350, 200 + i * 100);\n  ctx.strokeStyle = ['#E91E63', '#2196F3', '#4CAF50'][i];\n  ctx.stroke();\n});\n```"
        },
        {
          id: 's2',
          title: 'Cubic Bézier Curves',
          whyItMatters: 'Cubic Bézier curves offer two control points for more expressive shapes. They are used for complex illustrations, font outlines, and smooth animation paths.',
          content: "## Cubic Bézier Curves\n\nCubic Bézier curves use **two** control points:\n\n```javascript\nctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);\n```\n\n- **cp1x, cp1y**: First control point (influence the start of the curve)\n- **cp2x, cp2y**: Second control point (influence the end of the curve)\n- **x, y**: End point\n\n### S-Curve Example\n\n```javascript\nctx.beginPath();\nctx.moveTo(50, 250);\nctx.bezierCurveTo(150, 50, 250, 450, 350, 250);\nctx.strokeStyle = '#9C27B0';\nctx.lineWidth = 3;\nctx.stroke();\n```\n\n### Comparison: Quadratic vs Cubic\n\n```javascript\n// Quadratic (one control point) — simpler, less flexible\nctx.quadraticCurveTo(200, 50, 350, 200);\n\n// Cubic (two control points) — more expressive\nctx.bezierCurveTo(150, 100, 250, 300, 350, 200);\n```\n\n### Creating a Heart Shape\n\n```javascript\nctx.beginPath();\nctx.moveTo(200, 150);\n// Left half of heart\nctx.bezierCurveTo(100, 50, 50, 200, 200, 350);\n// Right half of heart (mirrored)\nctx.moveTo(200, 150);\nctx.bezierCurveTo(300, 50, 350, 200, 200, 350);\nctx.fillStyle = '#E91E63';\nctx.fill();\n```\n\n### Drawing a Smooth Wave\n\n```javascript\nctx.beginPath();\nctx.moveTo(0, 200);\nfor (let x = 0; x < 400; x += 100) {\n  const midX = x + 50;\n  const midY = x % 200 === 0 ? 100 : 300;\n  ctx.quadraticCurveTo(midX, midY, x + 100, 200);\n}\nctx.stroke();\n```"
        },
        {
          id: 's3',
          title: 'Combining Curves into Complex Shapes',
          whyItMatters: 'Real-world illustrations combine multiple curves. Mastering curve chaining lets you draw anything from logos to character art.',
          content: "## Chaining Curves Smoothly\n\nTo create continuous curves without sharp corners, ensure the tangent at the join point matches:\n\n```javascript\n// Smooth curve chain — control points should be collinear with join point\nctx.beginPath();\nctx.moveTo(50, 200);\n// First curve\nctx.bezierCurveTo(150, 50, 200, 50, 250, 150);\n// Second curve (control point 1 is mirror of previous control point 2)\nctx.bezierCurveTo(300, 250, 350, 250, 400, 150);\nctx.stroke();\n```\n\n### Drawing a Teardrop\n\n```javascript\nfunction drawTeardrop(ctx, cx, cy, radius) {\n  ctx.beginPath();\n  ctx.moveTo(cx, cy - radius * 1.5);\n  ctx.bezierCurveTo(\n    cx + radius, cy - radius,\n    cx + radius, cy + radius * 0.5,\n    cx, cy + radius\n  );\n  ctx.bezierCurveTo(\n    cx - radius, cy + radius * 0.5,\n    cx - radius, cy - radius,\n    cx, cy - radius * 1.5\n  );\n  ctx.closePath();\n  ctx.fill();\n}\n```\n\n### Creating a Speech Bubble\n\n```javascript\nfunction drawBubble(ctx, x, y, w, h, tailX, tailY) {\n  const r = 15; // Corner radius\n  ctx.beginPath();\n  // Top edge\n  ctx.moveTo(x + r, y);\n  ctx.lineTo(x + w - r, y);\n  ctx.quadraticCurveTo(x + w, y, x + w, y + r);\n  // Right edge\n  ctx.lineTo(x + w, y + h - r);\n  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);\n  // Bottom edge with tail\n  ctx.lineTo(tailX + r, y + h);\n  ctx.lineTo(tailX, tailY);  // Tail point\n  ctx.lineTo(tailX - r, y + h);\n  // Bottom edge rest\n  ctx.lineTo(x + r, y + h);\n  ctx.quadraticCurveTo(x, y + h, x, y + h - r);\n  // Left edge\n  ctx.lineTo(x, y + r);\n  ctx.quadraticCurveTo(x, y, x + r, y);\n  ctx.closePath();\n  ctx.fill();\n  ctx.stroke();\n}\n```\n\nBézier curves give you the freedom to create any shape imaginable. Combined with the path methods from earlier chapters, you have a complete vector drawing toolkit."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv9-q1', type: 'mcq', question: 'How many control points does a quadratic Bézier curve use?', options: ['1', '2', '3', '0'], correctAnswer: 0, explanation: 'quadraticCurveTo uses one control point.', difficulty: 1 },
          { id: 'cv9-q2', type: 'true-false', question: 'Cubic Bézier curves use two control points.', options: ['True', 'False'], correctAnswer: 0, explanation: 'bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) has two control points.', difficulty: 1 },
          { id: 'cv9-q3', type: 'mcq', question: 'What does the control point in a quadratic Bézier curve do?', options: ['Pulls the curve toward it', 'Determines the line width', 'Sets the curve color', 'Specifies the end point'], correctAnswer: 0, explanation: 'The control point acts like a magnet, pulling the curve toward it.', difficulty: 1 },
          { id: 'cv9-q4', type: 'mcq', question: 'Which method signature includes two control points?', options: ['bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)', 'quadraticCurveTo(cpx, cpy, x, y)', 'arcTo(x1, y1, x2, y2, radius)', 'lineTo(x, y)'], correctAnswer: 0, explanation: 'bezierCurveTo has four coordinate parameters (2 control points) plus the end point.', difficulty: 1 },
          { id: 'cv9-q5', type: 'true-false', question: 'Bézier curves can only be used for filled shapes, not strokes.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Bézier curves work with both fill() and stroke() methods.', difficulty: 1 },
          { id: 'cv9-q6', type: 'mcq', question: 'How do you create a smooth join between two Bézier curves?', options: ['Make the control points collinear with the join point', 'Use the same color', 'Set lineCap to round', 'Add a small line segment between them'], correctAnswer: 0, explanation: 'For a smooth join, the tangent (control point direction) should be the same on both sides of the join.', difficulty: 3 },
          { id: 'cv9-q7', type: 'true-false', question: 'A cubic Bézier curve is always more flexible than a quadratic one.', options: ['True', 'False'], correctAnswer: 0, explanation: 'With two control points, cubic curves can create S-shapes and more complex forms than quadratic curves.', difficulty: 2 },
          { id: 'cv9-q8', type: 'mcq', question: 'Where does the arcTo(x1, y1, x2, y2, radius) method draw its curve?', options: ['From current point to (x2, y2) using (x1, y1) as a corner with given radius', 'From (x1, y1) to (x2, y2)', 'A full circle at (x1, y1) with given radius', 'A straight line from current point to (x1, y1)'], correctAnswer: 0, explanation: 'arcTo draws a circular arc from the current point to (x2, y2) using (x1, y1) as a corner point with the given radius.', difficulty: 3 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv9-e1', type: 'easy', title: 'Draw a Smiley Face', instructions: 'Create a smiley face using arcs and Bézier curves. Draw the face circle, two eyes (filled circles), and a smiling mouth using a quadratic curve.', hint: 'Use arc for the face and eyes. Use quadraticCurveTo for the smile. The mouth should curve downward (inverted) if drawn from left to right.', starterCode: '<canvas id="smiley" width="300" height="300"></canvas>\n<script>\n  // Your smiley face\n</script>', solution: '<canvas id="smiley" width="300" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("smiley").getContext("2d");\n  // Face\n  ctx.beginPath(); ctx.arc(150, 150, 100, 0, 7); ctx.fillStyle = "#FFD700"; ctx.fill(); ctx.stroke();\n  // Eyes\n  ctx.beginPath(); ctx.arc(110, 120, 12, 0, 7); ctx.fillStyle = "#333"; ctx.fill();\n  ctx.beginPath(); ctx.arc(190, 120, 12, 0, 7); ctx.fill();\n  // Smile (note: Y increases downward, so curve goes down then up)\n  ctx.beginPath(); ctx.moveTo(95, 160); ctx.quadraticCurveTo(150, 220, 205, 160); ctx.strokeStyle = "#333"; ctx.lineWidth = 3; ctx.stroke();\n</script>' },
        { id: 'cv9-e2', type: 'medium', title: 'Organic Leaf Shape', instructions: 'Draw a realistic leaf shape using two cubic Bézier curves that meet at a point. Add a stem line and veins inside the leaf.', hint: 'Start at the stem base, draw one side of the leaf with bezierCurveTo, then mirror the control points for the other side.', starterCode: '<canvas id="leaf" width="400" height="400"></canvas>\n<script>\n  // Your leaf shape\n</script>', solution: '<canvas id="leaf" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("leaf").getContext("2d");\n  // Leaf body\n  ctx.beginPath();\n  ctx.moveTo(200, 350); // Base\n  ctx.bezierCurveTo(80, 300, 50, 120, 200, 50); // Left side\n  ctx.bezierCurveTo(350, 120, 320, 300, 200, 350); // Right side\n  ctx.fillStyle = "#4CAF50";\n  ctx.fill();\n  ctx.strokeStyle = "#2E7D32";\n  ctx.lineWidth = 2;\n  ctx.stroke();\n  // Stem\n  ctx.beginPath(); ctx.moveTo(200, 350); ctx.lineTo(200, 380); ctx.stroke();\n  // Center vein\n  ctx.beginPath(); ctx.moveTo(200, 350); ctx.quadraticCurveTo(180, 200, 200, 60); ctx.stroke();\n</script>' },
        { id: 'cv9-e3', type: 'hard', title: 'Wavy Flag Animation', instructions: 'Create an animated waving flag using multiple quadratic curves. The flag should wave smoothly with a sine wave applied to the control points over time.', hint: 'Use a loop of quadraticCurveTo calls across the flag width. Animate by adding Math.sin(time + xOffset) to the control point Y values.', starterCode: '<canvas id="flag" width="500" height="300"></canvas>\n<script>\n  // Your waving flag\n</script>', solution: '<canvas id="flag" width="500" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("flag").getContext("2d");\n  let time = 0;\n  function draw() {\n    time += 0.05;\n    ctx.clearRect(0, 0, 500, 300);\n    ctx.beginPath();\n    ctx.moveTo(30, 50);\n    for (let x = 30; x < 470; x += 40) {\n      const midX = x + 20;\n      const midY = 100 + Math.sin((x + time * 50) * 0.03) * 20;\n      ctx.quadraticCurveTo(midX, midY, x + 40, 100 + Math.sin((x + 40 + time * 50) * 0.03) * 20);\n    }\n    // Bottom edge\n    for (let x = 470; x > 30; x -= 40) {\n      const midX = x - 20;\n      const midY = 200 + Math.sin((x + time * 50) * 0.03) * 20;\n      ctx.quadraticCurveTo(midX, midY, x - 40, 200 + Math.sin((x - 40 + time * 50) * 0.03) * 20);\n    }\n    ctx.closePath();\n    const gradient = ctx.createLinearGradient(30, 50, 470, 200);\n    gradient.addColorStop(0, "#E91E63");\n    gradient.addColorStop(1, "#2196F3");\n    ctx.fillStyle = gradient;\n    ctx.fill();\n    ctx.strokeStyle = "#333";\n    ctx.lineWidth = 2;\n    ctx.stroke();\n    ctx.fillStyle = "#8D6E63";\n    ctx.fillRect(20, 40, 10, 220);\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Quadratic curve', value: 'ctx.quadraticCurveTo(cpx, cpy, x, y)' },
        { label: 'Cubic curve', value: 'ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)' },
        { label: 'Control points', value: 'Pull the curve like a magnet' },
        { label: 'Smooth join', value: 'Collinear control points at the join' },
        { label: 'Arc to', value: 'ctx.arcTo(x1, y1, x2, y2, radius)' }
      ]
    },,

    {
      id: 'canvas-10',
      number: 10,
      partLabel: 'Part 1: Canvas Fundamentals',
      title: 'Text Rendering on Canvas',
      subtitle: 'fillText, strokeText, font, alignment, measurement',
      difficulty: 'Beginner',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-9'],
      learningObjectives: [
        'Render text on canvas using fillText and strokeText',
        'Configure font, size, weight, and style properties',
        'Align text horizontally and vertically',
        'Measure text dimensions and implement text wrapping'
      ],
      sections: [
        {
          id: 's1',
          title: 'The fillText and strokeText Methods',
          whyItMatters: 'Text rendering on canvas is essential for labels, scores, titles, and data labels. Unlike HTML text, canvas text is pixel-based and fully stylable.',
          content: "## Drawing Text\n\nCanvas provides two primary text methods:\n\n```javascript\nctx.fillText(text, x, y, maxWidth);\nctx.strokeText(text, x, y, maxWidth);\n```\n\n- **text**: The string to render\n- **x, y**: Position of the text (controlled by textAlign and textBaseline)\n- **maxWidth**: Optional maximum width (text scales down if wider)\n\n### Basic Example\n\n```javascript\nctx.font = '48px Arial';\nctx.fillStyle = '#333';\nctx.fillText('Hello Canvas!', 50, 100);\n\nctx.strokeStyle = '#E91E63';\nctx.lineWidth = 2;\nctx.strokeText('Hello Canvas!', 50, 200);\n```\n\n### The font Property\n\nThe `font` property uses the same syntax as CSS font shorthand:\n\n```javascript\nctx.font = '24px Arial';                    // Size and family\nctx.font = 'bold 24px Arial';               // Bold\nctx.font = 'italic 24px Georgia';           // Italic\nctx.font = 'bold italic 24px Georgia';      // Combined\nctx.font = '32px \"Courier New\", monospace';  // Family with fallback\n```\n\n### fillText vs strokeText\n\n- `fillText` renders the interior of each glyph using `fillStyle`\n- `strokeText` renders the outline of each glyph using `strokeStyle`\n- For outlined text with fill, call both at the same position\n\n```javascript\nctx.font = 'bold 64px Arial';\nctx.fillStyle = '#FF5722';\nctx.strokeStyle = '#333';\nctx.lineWidth = 3;\nctx.fillText('STYLE', 50, 200);\nctx.strokeText('STYLE', 50, 200);\n```"
        },
        {
          id: 's2',
          title: 'Text Alignment and Baselines',
          whyItMatters: 'Proper alignment is crucial for laying out text on canvas. Misaligned text appears unprofessional and is hard to read.',
          content: "## Horizontal Alignment: textAlign\n\n```javascript\nctx.textAlign = 'start';   // Default. Depends on text direction (LTR = left)\nctx.textAlign = 'left';    // Aligns left edge of text at x\nctx.textAlign = 'center';  // Centers text horizontally at x\nctx.textAlign = 'right';   // Aligns right edge at x\nctx.textAlign = 'end';     // Depends on text direction\n```\n\n### Vertical Alignment: textBaseline\n\n```javascript\nctx.textBaseline = 'alphabetic';  // Default. Standard text baseline\nctx.textBaseline = 'top';         // Top of text at y\nctx.textBaseline = 'hanging';     // Hanging baseline (top of ascenders)\nctx.textBaseline = 'middle';      // Middle of text at y\nctx.textBaseline = 'ideographic'; // Bottom of CJK characters\nctx.textBaseline = 'bottom';      // Bottom of text (descenders included)\n```\n\n### Centering Text Perfectly\n\nTo perfectly center text at a point:\n\n```javascript\nctx.textAlign = 'center';\nctx.textBaseline = 'middle';\nctx.fillText('Perfectly Centered', canvas.width / 2, canvas.height / 2);\n```\n\n### Visual Baseline Guide\n\n```javascript\nfunction drawBaselineDemo() {\n  const baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];\n  baselines.forEach((bl, i) => {\n    const y = 40 + i * 50;\n    ctx.textBaseline = bl;\n    ctx.font = '20px Arial';\n    ctx.fillText(bl, 20, y);\n    // Mark the baseline\n    ctx.fillStyle = 'red';\n    ctx.fillRect(0, y, canvas.width, 1);\n  });\n}\n```"
        },
        {
          id: 's3',
          title: 'Text Measurement and Wrapping',
          whyItMatters: 'Canvas does not automatically wrap text. You must measure and wrap manually. This is critical for tooltips, paragraphs, and dynamic labels.',
          content: "## Measuring Text\n\nUse `measureText()` to get text dimensions before drawing:\n\n```javascript\nconst metrics = ctx.measureText('Hello Canvas!');\nconsole.log(metrics.width);         // Width in pixels\nconsole.log(metrics.actualBoundingBoxAscent);   // Height above baseline\nconsole.log(metrics.actualBoundingBoxDescent);  // Height below baseline\n```\n\n### Text Wrapping Function\n\n```javascript\nfunction wrapText(ctx, text, x, y, maxWidth, lineHeight) {\n  const words = text.split(' ');\n  let line = '';\n  \n  for (const word of words) {\n    const testLine = line + word + ' ';\n    const metrics = ctx.measureText(testLine);\n    \n    if (metrics.width > maxWidth && line !== '') {\n      ctx.fillText(line, x, y);\n      line = word + ' ';\n      y += lineHeight;\n    } else {\n      line = testLine;\n    }\n  }\n  ctx.fillText(line, x, y);\n}\n\n// Usage\nctx.font = '18px Arial';\nwrapText(ctx, 'This is a long paragraph that will wrap across multiple lines on the canvas.', 50, 100, 400, 30);\n```\n\n### Truncating Text with Ellipsis\n\n```javascript\nfunction truncateText(ctx, text, maxWidth) {\n  if (ctx.measureText(text).width <= maxWidth) return text;\n  \n  let truncated = text;\n  while (ctx.measureText(truncated + '...').width > maxWidth) {\n    truncated = truncated.slice(0, -1);\n  }\n  return truncated + '...';\n}\n\nconst label = 'This is a very long title that might not fit';\nconst display = truncateText(ctx, label, 200);\nctx.fillText(display, 50, 100);\n```\n\n### Multi-Color Text\n\nYou can change colors mid-string by calling fillText multiple times:\n\n```javascript\nctx.font = '32px Arial';\nctx.fillStyle = '#E91E63';\nctx.fillText('HTML5 ', 50, 100);\nctx.fillStyle = '#2196F3';\nctx.fillText('Canvas', 50 + ctx.measureText('HTML5 ').width, 100);\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv10-q1', type: 'mcq', question: 'Which property sets the text size and font family?', options: ['ctx.font', 'ctx.fontSize', 'ctx.fontFamily', 'ctx.textFont'], correctAnswer: 0, explanation: 'The font property uses CSS font shorthand syntax like "24px Arial".', difficulty: 1 },
          { id: 'cv10-q2', type: 'true-false', question: 'Canvas automatically wraps text when it reaches the canvas edge.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Canvas does not auto-wrap text. You must measure and wrap manually.', difficulty: 1 },
          { id: 'cv10-q3', type: 'mcq', question: 'What does ctx.textAlign = "center" do?', options: ['Centers text horizontally at the specified x position', 'Centers text vertically', 'Centers the entire canvas', 'Justifies text'], correctAnswer: 0, explanation: 'textAlign = "center" aligns the horizontal center of the text at the specified x coordinate.', difficulty: 1 },
          { id: 'cv10-q4', type: 'mcq', question: 'Which method returns text measurement information?', options: ['ctx.measureText()', 'ctx.getTextWidth()', 'ctx.textMetrics()', 'ctx.calcTextSize()'], correctAnswer: 0, explanation: 'measureText(text) returns a TextMetrics object with width, ascent, and descent.', difficulty: 1 },
          { id: 'cv10-q5', type: 'true-false', question: 'The textBaseline property affects where text is drawn relative to the y parameter.', options: ['True', 'False'], correctAnswer: 0, explanation: 'textBaseline determines which part of the text aligns with the y coordinate.', difficulty: 1 },
          { id: 'cv10-q6', type: 'mcq', question: 'What is the default value of textBaseline?', options: ['alphabetic', 'top', 'middle', 'bottom'], correctAnswer: 0, explanation: 'The default textBaseline is "alphabetic", which aligns the standard letter baseline at y.', difficulty: 2 },
          { id: 'cv10-q7', type: 'mcq', question: 'Which optional parameter limits the width of rendered text?', options: ['maxWidth in fillText()', 'width in font property', 'limit in measureText()', 'Clamp in textAlign'], correctAnswer: 0, explanation: 'The 4th parameter of fillText/strokeText is maxWidth, which scales text down if it exceeds this width.', difficulty: 2 },
          { id: 'cv10-q8', type: 'true-false', question: 'You cannot use both fillStyle and strokeStyle on the same text.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Call fillText() then strokeText() at the same position to apply both fill and stroke styles.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv10-e1', type: 'easy', title: 'Text Style Showcase', instructions: 'Render the same word "STYLE" in 5 different font configurations. Show each version on a separate line with a label showing the font property used.', hint: 'Use an array of font strings. For each, draw a label in small font, then the styled word.', starterCode: '<canvas id="fonts" width="600" height="400"></canvas>\n<script>\n  // Your text style showcase\n</script>', solution: '<canvas id="fonts" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("fonts").getContext("2d");\n  const fonts = [\n    "24px Arial",\n    "bold 24px Arial",\n    "italic 24px Georgia",\n    "bold italic 28px Courier New",\n    "32px Impact"\n  ];\n  fonts.forEach((f, i) => {\n    ctx.font = "12px monospace";\n    ctx.fillStyle = "#666";\n    ctx.textAlign = "left";\n    ctx.textBaseline = "middle";\n    ctx.fillText(f, 10, 30 + i * 70);\n    ctx.font = f;\n    ctx.fillStyle = "#E91E63";\n    ctx.fillText("STYLE", 250, 30 + i * 70);\n  });\n</script>' },
        { id: 'cv10-e2', type: 'medium', title: 'Multi-Color Text Poster', instructions: 'Create a poster-style text layout with a large title where each word is a different color. Include a subtitle centered below with a different font.', hint: 'Use measureText to track horizontal position. Draw each word separately with a different fillStyle.', starterCode: '<canvas id="poster" width="500" height="300"></canvas>\n<script>\n  const title = "HTML5 Canvas Rocks";\n  // Your multi-color poster\n</script>', solution: '<canvas id="poster" width="500" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("poster").getContext("2d");\n  const colors = ["#E91E63","#2196F3","#4CAF50"];\n  const words = ["HTML5", "Canvas", "Rocks"];\n  ctx.font = "bold 48px Arial";\n  ctx.textBaseline = "middle";\n  let x = 50;\n  words.forEach((w, i) => {\n    ctx.fillStyle = colors[i];\n    ctx.fillText(w, x, 100);\n    x += ctx.measureText(w + " ").width;\n  });\n  ctx.font = "italic 20px Georgia";\n  ctx.fillStyle = "#666";\n  ctx.textAlign = "center";\n  ctx.fillText("Learn to draw, animate, and build", 250, 180);\n  ctx.fillText("interactive graphics in the browser", 250, 210);\n</script>' },
        { id: 'cv10-e3', type: 'hard', title: 'Text Wrapping with Box', instructions: 'Create a function that draws styled text inside a bounding box. The text should wrap, handle overflow with ellipsis, and have configurable padding, line height, and alignment.', hint: 'Split text by spaces. Build lines by adding words until maxWidth is exceeded. Check if y + lineHeight exceeds box bottom.', starterCode: '<canvas id="textbox" width="500" height="300"></canvas>\n<script>\n  const longText = "This is a very long paragraph that needs to wrap inside a bounding box. It should handle many lines gracefully and show ellipsis when there is overflow.";\n  // Your text box function here\n</script>', solution: '<canvas id="textbox" width="500" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("textbox").getContext("2d");\n  const longText = "This is a very long paragraph that needs to wrap inside a bounding box. It should handle many lines gracefully and show ellipsis when there is overflow.";\n  function drawTextBox(text, x, y, w, h, padding, lineH) {\n    ctx.strokeStyle = "#333";\n    ctx.lineWidth = 2;\n    ctx.strokeRect(x, y, w, h);\n    ctx.save();\n    ctx.beginPath();\n    ctx.rect(x, y, w, h);\n    ctx.clip();\n    ctx.font = "16px Arial";\n    ctx.fillStyle = "#333";\n    ctx.textBaseline = "top";\n    let curY = y + padding;\n    const maxW = w - padding * 2;\n    const words = text.split(" ");\n    let line = "";\n    for (const word of words) {\n      const test = line + word + " ";\n      if (ctx.measureText(test).width > maxW && line) {\n        ctx.fillText(line.trim(), x + padding, curY);\n        curY += lineH;\n        if (curY + lineH > y + h - padding) {\n          const ellipsis = line.trim().slice(0, -3) + "...";\n          ctx.fillText(ellipsis, x + padding, curY);\n          break;\n        }\n        line = word + " ";\n      } else {\n        line = test;\n      }\n    }\n    if (curY + lineH <= y + h - padding) {\n      ctx.fillText(line.trim(), x + padding, curY);\n    }\n    ctx.restore();\n  }\n  drawTextBox(longText, 50, 50, 400, 200, 15, 24);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Fill text', value: 'ctx.fillText(text, x, y, maxWidth?)' },
        { label: 'Stroke text', value: 'ctx.strokeText(text, x, y, maxWidth?)' },
        { label: 'Font property', value: 'ctx.font = "bold 24px Arial"' },
        { label: 'H-align', value: 'ctx.textAlign = "left"|"center"|"right"' },
        { label: 'V-align', value: 'ctx.textBaseline = "top"|"middle"|"bottom"' },
        { label: 'Measure', value: 'ctx.measureText(text).width' }
      ]
    },,

    {
      id: 'canvas-11',
      number: 11,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Transformations (translate, rotate, scale)',
      subtitle: 'Moving origin, rotating, and scaling drawings',
      difficulty: 'Intermediate',
      estimatedMinutes: 40,
      xpReward: 60,
      prerequisites: ['canvas-10'],
      learningObjectives: [
        'Apply translate, rotate, and scale transformations',
        'Understand transformation matrix ordering and composition',
        'Create complex scenes using stacked transformations',
        'Reset transformations to the identity matrix'
      ],
      sections: [
        {
          id: 's1',
          title: 'The Three Core Transformations',
          whyItMatters: 'Transformations let you draw the same code in different positions, orientations, and sizes. They are essential for game cameras, UI layouts, and complex compositions.',
          content: "## Canvas Transformations\n\nCanvas provides three essential transformation methods:\n\n### translate(x, y)\n\nMoves the origin to a new position:\n\n```javascript\nctx.save();\nctx.translate(200, 150);  // New origin at (200, 150)\n// Everything draws relative to (200, 150) now\nctx.fillRect(-50, -50, 100, 100);  // Centered at the new origin\nctx.restore();\n```\n\n### rotate(angle)\n\nRotates the coordinate system around the current origin:\n\n```javascript\nctx.save();\nctx.translate(200, 200);  // Move origin first\nctx.rotate(Math.PI / 4);  // Rotate 45 degrees\nctx.fillRect(-50, -50, 100, 100);  // Square rotated 45 degrees\nctx.restore();\n```\n\n### scale(x, y)\n\nScales the coordinate system:\n\n```javascript\nctx.save();\nctx.scale(2, 2);  // Everything drawn is 2x larger\nctx.fillRect(50, 50, 100, 100);  // Actually drawn at 100x100, scaled to 200x200\nctx.restore();\n\n// Flip horizontally (negative scale)\nctx.save();\nctx.translate(400, 0);\nctx.scale(-1, 1);  // Flip X\nctx.fillText('Mirrored Text', 0, 100);\nctx.restore();\n```\n\n### Order Matters!\n\nTransformations apply in reverse order. If you translate then rotate, the rotation happens before the translation (from the code\'s perspective, the translation happens first):\n\n```javascript\n// This rotates THEN translates (from the code perspective)\nctx.translate(200, 200);\nctx.rotate(Math.PI / 4);\n// The shape rotates around its local origin, then gets moved\n// Equivalent to: rotate first, then move the rotated result\n```"
        },
        {
          id: 's2',
          title: 'Composing Complex Transformations',
          whyItMatters: 'Real scenes require multiple transformations stacked together. Understanding composition lets you create complex nested objects like solar systems or articulated characters.',
          content: "## Building a Solar System\n\nTransformations are perfect for hierarchical objects:\n\n```javascript\nfunction drawSolarSystem(ctx, time) {\n  const cx = 300, cy = 300;\n  \n  // Sun (at the center)\n  ctx.beginPath();\n  ctx.arc(cx, cy, 30, 0, Math.PI * 2);\n  ctx.fillStyle = '#FFC107';\n  ctx.fill();\n  \n  // Earth orbit\n  ctx.save();\n  ctx.translate(cx, cy);\n  ctx.rotate(time * 0.5);\n  ctx.translate(120, 0);\n  \n  // Earth\n  ctx.beginPath();\n  ctx.arc(0, 0, 15, 0, Math.PI * 2);\n  ctx.fillStyle = '#2196F3';\n  ctx.fill();\n  \n  // Moon orbit (relative to Earth)\n  ctx.rotate(time * 2);\n  ctx.translate(30, 0);\n  ctx.beginPath();\n  ctx.arc(0, 0, 5, 0, Math.PI * 2);\n  ctx.fillStyle = '#9E9E9E';\n  ctx.fill();\n  \n  ctx.restore();\n}\n```\n\n### setTransform() and resetTransform()\n\n```javascript\n// Directly set the transformation matrix\nctx.setTransform(1, 0, 0, 1, 0, 0);  // Identity matrix (reset)\n\n// Or use resetTransform()\nctx.resetTransform();  // Same as setTransform(1, 0, 0, 1, 0, 0)\n```\n\n### The Transformation Matrix\n\nBehind the scenes, all transformations are combined into a 3x3 matrix:\n```\n| a  c  e |   | scaleX  skewX  translateX |\n| b  d  f | = | skewY  scaleY  translateY |\n| 0  0  1 |   |   0      0         1      |\n```\n\nYou can directly set or get this matrix with:\n```javascript\n// Get current transform\nconst transform = ctx.getTransform();\n\n// Set custom transform\nctx.setTransform(a, b, c, d, e, f);\n```"
        },
        {
          id: 's3',
          title: 'Practical Transformation Patterns',
          whyItMatters: 'Transformations enable efficient drawing of repeated elements, camera systems, and complex animations.',
          content: "## Common Transformation Patterns\n\n### Drawing a Clock\n\n```javascript\nfunction drawClock(ctx, cx, cy, radius, hours, minutes, seconds) {\n  // Clock face\n  ctx.beginPath();\n  ctx.arc(cx, cy, radius, 0, Math.PI * 2);\n  ctx.stroke();\n  \n  // Hour hand\n  ctx.save();\n  ctx.translate(cx, cy);\n  ctx.rotate((hours + minutes / 60) * Math.PI / 6);\n  ctx.fillRect(-4, -radius * 0.5, 8, radius * 0.5);\n  ctx.restore();\n  \n  // Minute hand\n  ctx.save();\n  ctx.translate(cx, cy);\n  ctx.rotate((minutes + seconds / 60) * Math.PI / 30);\n  ctx.fillRect(-3, -radius * 0.7, 6, radius * 0.7);\n  ctx.restore();\n  \n  // Second hand\n  ctx.save();\n  ctx.translate(cx, cy);\n  ctx.rotate(seconds * Math.PI / 30);\n  ctx.strokeStyle = 'red';\n  ctx.lineWidth = 1;\n  ctx.beginPath();\n  ctx.moveTo(0, 10);\n  ctx.lineTo(0, -radius * 0.8);\n  ctx.stroke();\n  ctx.restore();\n}\n```\n\n### Camera System (Viewport)\n\n```javascript\nfunction renderScene(ctx, cameraX, cameraY, cameraZoom) {\n  ctx.save();\n  ctx.translate(canvas.width / 2, canvas.height / 2);\n  ctx.scale(cameraZoom, cameraZoom);\n  ctx.translate(-cameraX, -cameraY);\n  \n  // Draw all game objects in world coordinates\n  // They automatically get transformed to camera view\n  \n  ctx.restore();\n}\n```\n\n### Sprite Batch Drawing\n\nTransform once and draw many sprites:\n\n```javascript\nfunction drawSprite(ctx, image, x, y, rotation, scale) {\n  ctx.save();\n  ctx.translate(x + image.width / 2, y + image.height / 2);\n  ctx.rotate(rotation);\n  ctx.scale(scale, scale);\n  ctx.drawImage(image, -image.width / 2, -image.height / 2);\n  ctx.restore();\n}\n```\n\nTransformations are one of the most powerful features of Canvas. They enable everything from simple rotations to full 2D camera systems."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv11-q1', type: 'mcq', question: 'Which transformation method moves the origin to a new position?', options: ['translate()', 'rotate()', 'scale()', 'moveTo()'], correctAnswer: 0, explanation: 'translate(x, y) moves the origin of the coordinate system.', difficulty: 1 },
          { id: 'cv11-q2', type: 'true-false', question: 'The order of transformations does not matter when combining them.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Order matters significantly. translate then rotate produces a different result than rotate then translate.', difficulty: 2 },
          { id: 'cv11-q3', type: 'mcq', question: 'What does scale(-1, 1) do?', options: ['Flips horizontally', 'Flips vertically', 'Mirrors both axes', 'Does nothing'], correctAnswer: 0, explanation: 'Negative X scale flips the coordinate system horizontally.', difficulty: 2 },
          { id: 'cv11-q4', type: 'mcq', question: 'Which method resets the transformation matrix to identity?', options: ['resetTransform()', 'clearTransform()', 'identity()', 'removeTransform()'], correctAnswer: 0, explanation: 'resetTransform() or setTransform(1, 0, 0, 1, 0, 0) resets to identity.', difficulty: 1 },
          { id: 'cv11-q5', type: 'true-false', question: 'The rotate() method requires the angle to be specified in degrees.', options: ['True', 'False'], correctAnswer: 1, explanation: 'rotate() takes radians, not degrees. Use Math.PI for 180 degrees.', difficulty: 1 },
          { id: 'cv11-q6', type: 'mcq', question: 'What does getTransform() return?', options: ['A DOMMatrix object representing the current transform', 'An array of transformation commands', 'The current rotation angle', 'The current scale factor'], correctAnswer: 0, explanation: 'getTransform() returns a DOMMatrix with the current transformation values.', difficulty: 3 },
          { id: 'cv11-q7', type: 'true-false', question: 'You can use scale() to create a mirror effect by using negative values.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Negative scale values flip the axes, creating mirror/reflection effects.', difficulty: 2 },
          { id: 'cv11-q8', type: 'mcq', question: 'To rotate a shape around its center, you should:', options: ['Translate to center, rotate, draw relative to center', 'Rotate then translate', 'Just call rotate()', 'Use scale instead'], correctAnswer: 0, explanation: 'Translate to the desired center, rotate, then draw with coordinates centered at (0,0).', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv11-e1', type: 'easy', title: 'Rotating Squares', instructions: 'Draw a sequence of 12 squares radiating from the center, each rotated by 30 degrees more than the last. Each square should be 60x60 pixels and a different color.', hint: 'Use translate to center, then rotate by i * (PI/6) in a loop, and draw each square at (0, -100) so they radiate outward.', starterCode: '<canvas id="radiate" width="400" height="400"></canvas>\n<script>\n  // Your rotating squares\n</script>', solution: '<canvas id="radiate" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("radiate").getContext("2d");\n  for (let i = 0; i < 12; i++) {\n    ctx.save();\n    ctx.translate(200, 200);\n    ctx.rotate(i * Math.PI / 6);\n    ctx.fillStyle = hsl(${i * 30}, 70%, 55%);\n    ctx.fillRect(-30, -120, 60, 60);\n    ctx.restore();\n  }\n</script>' },
        { id: 'cv11-e2', type: 'medium', title: 'Analog Clock', instructions: 'Create an analog clock that shows the current time. Draw the clock face with hour markers, and three hands for hours, minutes, and seconds.', hint: 'Use Date.now() or new Date() to get current time. Each hand requires a separate save/translate/rotate cycle.', starterCode: '<canvas id="clock" width="400" height="400"></canvas>\n<script>\n  // Your analog clock\n</script>', solution: '<canvas id="clock" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("clock").getContext("2d");\n  function draw() {\n    const now = new Date();\n    const h = now.getHours() % 12, m = now.getMinutes(), s = now.getSeconds();\n    ctx.clearRect(0, 0, 400, 400);\n    ctx.save(); ctx.translate(200, 200);\n    // Face\n    ctx.beginPath(); ctx.arc(0, 0, 150, 0, 7); ctx.lineWidth = 4; ctx.stroke();\n    for (let i = 0; i < 12; i++) {\n      ctx.save(); ctx.rotate(i * Math.PI / 6);\n      ctx.fillRect(-2, -140, 4, 15); ctx.restore();\n    }\n    // Hour hand\n    ctx.save(); ctx.rotate((h + m/60) * Math.PI / 6); ctx.fillRect(-4, -80, 8, 80); ctx.restore();\n    // Minute hand\n    ctx.save(); ctx.rotate((m + s/60) * Math.PI / 30); ctx.fillRect(-3, -110, 6, 110); ctx.restore();\n    // Second hand\n    ctx.save(); ctx.rotate(s * Math.PI / 30); ctx.strokeStyle = "red"; ctx.beginPath(); ctx.moveTo(0, 20); ctx.lineTo(0, -125); ctx.stroke(); ctx.restore();\n    ctx.restore();\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' },
        { id: 'cv11-e3', type: 'hard', title: 'Solar System Simulation', instructions: 'Build a solar system simulation with the sun at center, Earth orbiting the sun, and a moon orbiting Earth. Each orbit should have a different speed. Draw orbit paths as faint ellipses.', hint: 'Use nested save/translate/rotate patterns. Earth translates from sun then rotates for its orbit. Moon translates from Earth then rotates.', starterCode: '<canvas id="solar" width="600" height="600"></canvas>\n<script>\n  // Your solar system\n</script>', solution: '<canvas id="solar" width="600" height="600"></canvas>\n<script>\n  const ctx = document.getElementById("solar").getContext("2d");\n  let t = 0;\n  function draw() {\n    t += 0.02;\n    ctx.clearRect(0, 0, 600, 600);\n    ctx.fillStyle = "#0a0a2e";\n    ctx.fillRect(0, 0, 600, 600);\n    ctx.save();\n    ctx.translate(300, 300);\n    // Sun\n    ctx.beginPath(); ctx.arc(0, 0, 30, 0, 7); ctx.fillStyle = "#FFC107"; ctx.fill();\n    // Earth orbit path\n    ctx.beginPath(); ctx.arc(0, 0, 120, 0, 7); ctx.strokeStyle = "rgba(255,255,255,0.1)"; ctx.stroke();\n    // Earth\n    ctx.save(); ctx.rotate(t); ctx.translate(120, 0);\n    ctx.beginPath(); ctx.arc(0, 0, 15, 0, 7); ctx.fillStyle = "#2196F3"; ctx.fill();\n    // Moon orbit\n    ctx.beginPath(); ctx.arc(0, 0, 30, 0, 7); ctx.strokeStyle = "rgba(255,255,255,0.1)"; ctx.stroke();\n    // Moon\n    ctx.save(); ctx.rotate(t * 4); ctx.translate(30, 0);\n    ctx.beginPath(); ctx.arc(0, 0, 5, 0, 7); ctx.fillStyle = "#9E9E9E"; ctx.fill();\n    ctx.restore();\n    ctx.restore();\n    ctx.restore();\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Translate', value: 'ctx.translate(x, y)' },
        { label: 'Rotate', value: 'ctx.rotate(radians)' },
        { label: 'Scale', value: 'ctx.scale(x, y)' },
        { label: 'Reset transform', value: 'ctx.resetTransform()' },
        { label: 'Save/restore', value: 'ctx.save() / ctx.restore()' },
        { label: 'Get transform', value: 'ctx.getTransform()' }
      ]
    },,

    {
      id: 'canvas-12',
      number: 12,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Save and Restore State',
      subtitle: 'The canvas state stack and save/restore patterns',
      difficulty: 'Beginner',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-11'],
      learningObjectives: [
        'Use save() and restore() to manage canvas state',
        'Understand the state stack and when to push/pop',
        'Avoid common state management pitfalls',
        'Implement isolated drawing functions using save/restore'
      ],
      sections: [
        {
          id: 's1',
          title: 'The Canvas State Stack',
          whyItMatters: 'Save and restore prevent transformation and style changes from leaking between different parts of your drawing code. Without them, every drawing function would need to reset everything manually.',
          content: "## What Gets Saved?\n\nThe canvas state stack preserves these properties when you call `save()`:\n\n- Transformation matrix (translate, rotate, scale)\n- Clipping region\n- `fillStyle`, `strokeStyle`\n- `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`\n- `font`, `textAlign`, `textBaseline`\n- `shadowColor`, `shadowBlur`, `shadowOffsetX/Y`\n- `globalAlpha`, `globalCompositeOperation`\n- `lineDashOffset` and `setLineDash` pattern\n\n### Basic Save/Restore Pattern\n\n```javascript\nctx.fillStyle = 'red';\nctx.fillRect(10, 10, 100, 100);\n\nctx.save();  // Save current state (red fill, no transform)\n\nctx.fillStyle = 'blue';\nctx.translate(50, 50);\nctx.fillRect(10, 10, 100, 100);  // Blue, shifted\n\nctx.restore();  // Restore to saved state (red fill, no transform)\n\nctx.fillRect(130, 10, 100, 100);  // Red again\n```\n\n### Nested Save/Restore\n\nStates stack like a LIFO (Last In, First Out) structure:\n\n```javascript\nctx.save();           // Level 0\n  ctx.translate(100, 0);\n  ctx.save();         // Level 1\n    ctx.rotate(0.5);\n    ctx.save();       // Level 2\n      ctx.scale(2, 2);\n      // Draw heavily transformed\n      ctx.fillRect(0, 0, 50, 50);\n    ctx.restore();    // Back to Level 1 (rotated only)\n    // Draw rotated but not scaled\n    ctx.fillRect(0, 0, 50, 50);\n  ctx.restore();      // Back to Level 0 (translated only)\n  // Draw translated but not rotated\n  ctx.fillRect(0, 0, 50, 50);\nctx.restore();        // Back to identity\n```"
        },
        {
          id: 's2',
          title: 'Save/Restore Patterns in Practice',
          whyItMatters: 'Professional canvas code wraps each drawing function in save/restore, making functions self-contained and reusable.',
          content: "## Self-Contained Drawing Functions\n\nEvery drawing function should save and restore its own state:\n\n```javascript\nfunction drawRotatedRect(ctx, x, y, w, h, angle, color) {\n  ctx.save();\n  ctx.translate(x + w / 2, y + h / 2);\n  ctx.rotate(angle);\n  ctx.fillStyle = color;\n  ctx.fillRect(-w / 2, -h / 2, w, h);\n  ctx.restore();\n  // No side effects on the caller state\n}\n\n// Usage — no leaks!\nctx.fillStyle = 'black';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\ndrawRotatedRect(ctx, 100, 100, 80, 80, 0.5, 'red');\ndrawRotatedRect(ctx, 300, 200, 60, 60, 1.2, 'blue');\n\n// fillStyle is still 'black' here\nctx.fillStyle = 'white';\nctx.fillText('Clean state!', 10, 20);\n```\n\n### Performance Considerations\n\nSave/restore operations are very fast — use them liberally. However, avoid excessive nesting in performance-critical loops:\n\n```javascript\n// GOOD: save once outside the loop\nctx.save();\nctx.translate(centerX, centerY);\nfor (let i = 0; i < 360; i++) {\n  ctx.save();\n  ctx.rotate(i * Math.PI / 180);\n  ctx.fillRect(0, -100, 10, 20);\n  ctx.restore();\n}\nctx.restore();\n\n// BAD: unnecessary nesting per iteration\nfor (let i = 0; i < 360; i++) {\n  ctx.save();           // Unnecessary\n  ctx.save();           // Unnecessary\n  ctx.translate(100, 100);  // Redundant\n  ctx.rotate(i * Math.PI / 180);\n  ctx.fillRect(0, -100, 10, 20);\n  ctx.restore();\n  ctx.restore();\n}\n```\n\n### Error Handling Pattern\n\nEnsure restore always happens, even if drawing code throws:\n\n```javascript\nfunction safeDraw(ctx, drawFn) {\n  ctx.save();\n  try {\n    drawFn(ctx);\n  } finally {\n    ctx.restore();  // Always restores, even on error\n  }\n}\n```"
        },
        {
          id: 's3',
          title: 'Common Pitfalls and Debugging State',
          whyItMatters: 'State leaks are the most common bug in canvas code. Knowing how to debug them saves hours of frustration.',
          content: "## Debugging State Issues\n\n### Symptom: Transformations Affect Unexpected Drawings\n\nIf subsequent drawings appear in the wrong position or orientation, you likely forgot a `restore()`:\n\n```javascript\n// BUG: No save/restore, transform leaks\nctx.translate(200, 200);\nctx.fillRect(-50, -50, 100, 100);\n\n// This rectangle is also at (200, 200) + (-50, -50)!\nctx.fillRect(-50, -50, 100, 100);\n```\n\n### Symptom: Unexpected Colors\n\n```javascript\n// BUG: fillStyle leaks\nfunction drawRedRect() {\n  ctx.fillStyle = 'red';\n  ctx.fillRect(10, 10, 100, 100);\n  // Missing restore or reset\n}\n\ndrawRedRect();\n// Now fillStyle is 'red' when it should be something else\nctx.fillRect(150, 10, 100, 100);  // Also red!\n```\n\n### Checking the State Stack Balance\n\nEvery `save()` must have a matching `restore()`. To debug:\n\n```javascript\n// Get the current state depth\nconsole.log('State stack depth:', ctx.getTransform());\n// Not directly accessible, but you can verify by wrapping in try/finally\n\n// Alternatively, never let your save/restore span across\n// multiple functions without careful documentation\n```\n\n### Best Practices Summary\n\n1. **Always** pair `save()` and `restore()`\n2. Use `try/finally` in complex functions\n3. Prefer shallow nesting (max 3-4 levels)\n4. Keep transformations close to where they are used\n5. Test drawing functions in isolation\n\nThese practices ensure your canvas code is maintainable, predictable, and bug-free."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv12-q1', type: 'mcq', question: 'What does ctx.save() save?', options: ['The entire canvas state stack', 'Only the fill style', 'Only the transform matrix', 'The current pixel data'], correctAnswer: 0, explanation: 'save() pushes the current state (transforms, styles, clipping) onto the state stack.', difficulty: 1 },
          { id: 'cv12-q2', type: 'true-false', question: 'Every call to save() must have a matching restore().', options: ['True', 'False'], correctAnswer: 0, explanation: 'Unbalanced save/restore will cause state leaks or errors.', difficulty: 1 },
          { id: 'cv12-q3', type: 'mcq', question: 'What happens if you call restore() more times than save()?', options: ['It throws an error', 'It resets to identity', 'It is silently ignored', 'It clears the canvas'], correctAnswer: 0, explanation: 'Popping from an empty state stack throws a DOMException.', difficulty: 2 },
          { id: 'cv12-q4', type: 'true-false', question: 'The state stack follows a FIFO (First In, First Out) structure.', options: ['True', 'False'], correctAnswer: 1, explanation: 'It follows LIFO (Last In, First Out) like a standard stack.', difficulty: 1 },
          { id: 'cv12-q5', type: 'mcq', question: 'Which of the following is NOT saved by save()?', options: ['The Canvas pixel buffer', 'Transform matrix', 'fillStyle and strokeStyle', 'Clipping region'], correctAnswer: 0, explanation: 'The pixel buffer is not part of the state stack. Only drawing state properties are saved.', difficulty: 2 },
          { id: 'cv12-q6', type: 'mcq', question: 'What is the recommended nesting limit for save/restore?', options: ['3-4 levels', '10 levels', 'No limit', '1 level'], correctAnswer: 0, explanation: 'Keep nesting shallow (3-4 levels) for readability and maintainability.', difficulty: 1 },
          { id: 'cv12-q7', type: 'true-false', question: 'Using ctx.save() inside a loop called 100 times is a performance concern.', options: ['False', 'True'], correctAnswer: 0, explanation: 'save/restore is very fast and 100 calls is negligible. However, avoid unnecessarily deep nesting.', difficulty: 2 },
          { id: 'cv12-q8', type: 'mcq', question: 'What should you use to ensure restore() is always called even if drawing code throws?', options: ['try/finally', 'try/catch', 'if/else', 'async/await'], correctAnswer: 0, explanation: 'A try/finally block ensures restore() runs regardless of whether the drawing code threw an error.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv12-e1', type: 'easy', title: 'State Leak Detection', instructions: 'Write a function drawCircle(ctx, x, y, r) that draws a red circle but leaks the fillStyle change. Then write a fixed version drawCircleFixed() that uses save/restore.', hint: 'The buggy version sets ctx.fillStyle without restoring. The fixed version wraps the drawing in save/restore.', starterCode: '<canvas id="leak" width="500" height="200"></canvas>\n<script>\n  function drawCircle(ctx, x, y, r) {\n    // Buggy version — add save/restore to fix\n    ctx.fillStyle = "red";\n    ctx.beginPath();\n    ctx.arc(x, y, r, 0, Math.PI * 2);\n    ctx.fill();\n  }\n  const ctx = document.getElementById("leak").getContext("2d");\n  ctx.fillStyle = "blue";\n  drawCircle(ctx, 100, 100, 50);\n  ctx.fillRect(200, 50, 100, 100); // Should be blue, but might be red\n</script>', solution: '<canvas id="leak" width="500" height="200"></canvas>\n<script>\n  function drawCircle(ctx, x, y, r) {\n    ctx.save();\n    ctx.fillStyle = "red";\n    ctx.beginPath();\n    ctx.arc(x, y, r, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.restore();\n  }\n  const ctx = document.getElementById("leak").getContext("2d");\n  ctx.fillStyle = "blue";\n  drawCircle(ctx, 100, 100, 50);\n  ctx.fillRect(200, 50, 100, 100); // Correctly blue now\n</script>' },
        { id: 'cv12-e2', type: 'medium', title: 'Nested Transform Debugger', instructions: 'Create a visual debugger that shows the state stack depth. Draw multiple shapes at different nesting levels, and label each with its current depth number.', hint: 'Maintain a depth counter variable that you increment on save and decrement on restore. Display it as text.', starterCode: '<canvas id="depth" width="500" height="300"></canvas>\n<script>\n  // Your depth visualizer\n</script>', solution: '<canvas id="depth" width="500" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("depth").getContext("2d");\n  let depth = 0;\n  function label() {\n    ctx.fillStyle = "#333";\n    ctx.font = "16px monospace";\n    ctx.fillText("Depth: " + depth, 10, 20 + depth * 25);\n  }\n  ctx.save(); depth++; label();\n  ctx.translate(50, 50);\n  ctx.save(); depth++; label();\n  ctx.rotate(0.3);\n  ctx.fillRect(0, 0, 40, 40);\n  ctx.restore(); depth--;\n  ctx.fillRect(0, 0, 40, 40);\n  ctx.restore(); depth--;\n</script>' },
        { id: 'cv12-e3', type: 'hard', title: 'Drawing Recorder with State Snapshots', instructions: 'Create a system that records all drawings and their state at the time of drawing, then replays them. Each recorded frame should capture the current transform and styles.', hint: 'Wrap save/restore into a recorder. Store canvas state snapshot (manually) alongside each draw call.', starterCode: '<canvas id="recorder" width="400" height="400"></canvas>\n<script>\n  // Drawing recorder with state snapshots\n</script>', solution: '<canvas id="recorder" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("recorder").getContext("2d");\n  const recordings = [];\n  function record(drawFn, state) {\n    recordings.push({ draw: drawFn, state: {...state} });\n    ctx.save();\n    if (state.fillStyle) ctx.fillStyle = state.fillStyle;\n    if (state.translate) ctx.translate(state.translate[0], state.translate[1]);\n    drawFn(ctx);\n    ctx.restore();\n  }\n  record((c) => { c.fillRect(0, 0, 80, 80); }, { fillStyle: "red", translate: [50, 50] });\n  record((c) => { c.beginPath(); c.arc(0,0,40,0,7); c.fill(); }, { fillStyle: "blue", translate: [200, 150] });\n  // Replay with text labels\n  setTimeout(() => {\n    ctx.clearRect(0,0,400,400);\n    recordings.forEach((r, i) => {\n      ctx.save();\n      ctx.fillStyle = r.state.fillStyle;\n      ctx.translate(r.state.translate[0], r.state.translate[1]);\n      r.draw(ctx);\n      ctx.fillStyle = "#000";\n      ctx.font = "12px Arial";\n      ctx.fillText("#" + i, 5, 15);\n      ctx.restore();\n    });\n  }, 1000);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Save state', value: 'ctx.save() — pushes state onto stack' },
        { label: 'Restore state', value: 'ctx.restore() — pops state off stack' },
        { label: 'Saved properties', value: 'Transforms, styles, clipping, shadows, compositing' },
        { label: 'Not saved', value: 'Canvas pixel buffer, paths in progress' },
        { label: 'Stack behavior', value: 'LIFO — Last In, First Out' },
        { label: 'Safe pattern', value: 'ctx.save(); ...draw...; ctx.restore()' }
      ]
    },,

    {
      id: 'canvas-13',
      number: 13,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Clipping Regions',
      subtitle: 'The clip() method and custom clip masks',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-12'],
      learningObjectives: [
        'Use clip() to restrict drawing to a defined region',
        'Create complex clipping masks using paths',
        'Combine clipping with transformations',
        'Implement image masking and reveal effects'
      ],
      sections: [
        {
          id: 's1',
          title: 'The clip() Method',
          whyItMatters: 'Clipping restricts drawing to a specific area, enabling effects like rounded images, spotlight reveals, UI masks, and viewport culling.',
          content: "## How clip() Works\n\n`clip()` turns the current path into a clipping region. All subsequent drawing is only visible within that region:\n\n```javascript\n// Create a circular clipping region\nctx.beginPath();\nctx.arc(200, 200, 100, 0, Math.PI * 2);\nctx.clip();\n\n// Now only drawing inside the circle is visible\nctx.fillStyle = '#E91E63';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n// Only the circular area is filled\n```\n\n### Save/Restore with Clipping\n\nClip regions are part of the saved state:\n\n```javascript\nctx.save();\n// Create clip region\nctx.beginPath();\nctx.rect(50, 50, 300, 200);\nctx.clip();\n\n// Draw a large star that gets clipped\nctx.fillStyle = '#FFC107';\n// ... draw star path ...\nctx.fill();\n\nctx.restore();  // Clip region removed\n// Drawing outside the clip works again\n```\n\n### Rounded Rectangle Clip\n\n```javascript\nfunction roundRectPath(ctx, x, y, w, h, r) {\n  ctx.beginPath();\n  ctx.moveTo(x + r, y);\n  ctx.lineTo(x + w - r, y);\n  ctx.quadraticCurveTo(x + w, y, x + w, y + r);\n  ctx.lineTo(x + w, y + h - r);\n  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);\n  ctx.lineTo(x + r, y + h);\n  ctx.quadraticCurveTo(x, y + h, x, y + h - r);\n  ctx.lineTo(x, y + r);\n  ctx.quadraticCurveTo(x, y, x + r, y);\n  ctx.closePath();\n}\n\n// Use as clip to create rounded corners on any content\nroundRectPath(ctx, 50, 50, 300, 400, 20);\nctx.clip();\n```"
        },
        {
          id: 's2',
          title: 'Advanced Clipping Techniques',
          whyItMatters: 'Combining multiple clip paths and nesting clips allows sophisticated visual effects like viewports, split screens, and stencil masks.',
          content: "## Compound Clipping Regions\n\nYou can combine multiple shapes in one clip path:\n\n```javascript\nctx.save();\nctx.beginPath();\n// Two overlapping circles\nctx.arc(150, 150, 100, 0, Math.PI * 2);\nctx.arc(250, 150, 100, 0, Math.PI * 2);\nctx.clip();  // Clip to the union of both circles\n\n// Fill — only visible in the clipped area\nctx.fillStyle = 'linear-gradient(...)';\nctx.fillRect(0, 0, canvas.width, canvas.height);\nctx.restore();\n```\n\n### Nested Clipping (Intersection)\n\nWhen you call clip() multiple times, the new clip is the **intersection** of the current and new clip:\n\n```javascript\nctx.save();\nctx.beginPath();\nctx.rect(100, 100, 200, 200);\nctx.clip();  // Clip 1: large square\n\nctx.beginPath();\nctx.arc(200, 200, 80, 0, Math.PI * 2);\nctx.clip();  // Clip 2: intersection of square and circle\n\n// Only the intersection area is visible\nctx.fillStyle = '#4CAF50';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\nctx.restore();\n```\n\n### Creating a Viewport\n\n```javascript\nfunction withViewport(ctx, viewX, viewY, viewW, viewH, drawFn) {\n  ctx.save();\n  ctx.beginPath();\n  ctx.rect(viewX, viewY, viewW, viewH);\n  ctx.clip();\n  \n  // Translate so world coordinates map to view\n  ctx.translate(-viewX, -viewY);\n  \n  drawFn(ctx);\n  \n  ctx.restore();\n}\n```\n\n### Text Clip Mask\n\n```javascript\n// Create clip from text\nctx.font = 'bold 120px Arial';\nctx.textAlign = 'center';\nctx.textBaseline = 'middle';\n\nctx.save();\n// Instead of fillText, use it as a clip mask\nctx.beginPath();\n// measureText and create path approach...\n// Simplified: set the clip to the text area\nctx.strokeText('MASK', 300, 200);  // Not for clip\n// For actual text clipping, use a gradient image approach\n\n// Alternative: fill a gradient into text-shaped clip\nctx.font = 'bold 100px Arial';\nctx.textAlign = 'center';\nctx.textBaseline = 'middle';\nctx.fillText('CLIP', 300, 200);\n// No direct text-to-clip, but you can use globalCompositeOperation\nctx.globalCompositeOperation = 'source-in';\n// Now draw what you want inside the text\nctx.restore();\n```"
        },
        {
          id: 's3',
          title: 'Spotlight and Reveal Effects',
          whyItMatters: 'Clip-based effects create engaging UI interactions like spotlight tours, reveal animations, and circular progress reveals.',
          content: "## Spotlight Effect\n\n```javascript\nfunction drawSpotlight(ctx, mouseX, mouseY, radius) {\n  ctx.save();\n  \n  // Fill entire canvas dark\n  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  \n  // Create a circular hole using compositing\n  ctx.globalCompositeOperation = 'destination-out';\n  \n  ctx.beginPath();\n  ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);\n  ctx.fill();\n  \n  ctx.restore();\n}\n```\n\n### Circular Reveal Animation\n\n```javascript\nfunction revealImage(ctx, image, revealRadius) {\n  ctx.save();\n  \n  // Create clip from center to reveal\n  ctx.beginPath();\n  ctx.arc(canvas.width / 2, canvas.height / 2, revealRadius, 0, Math.PI * 2);\n  ctx.clip();\n  \n  // Draw image — only visible inside the expanding circle\n  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);\n  \n  ctx.restore();\n}\n```\n\n### Progressive Loading Bar with Clip\n\n```javascript\nfunction drawProgressContent(ctx, progress) {\n  // Draw full content first (e.g., an image)\n  ctx.drawImage(myImage, 0, 0);\n  \n  // Clip to a rectangle that grows with progress\n  ctx.save();\n  ctx.beginPath();\n  ctx.rect(0, 0, canvas.width * progress, canvas.height);\n  ctx.clip();\n  \n  // Draw the content again — only visible in the clipped bar\n  ctx.drawImage(myImage, 0, 0);\n  \n  ctx.restore();\n}\n```\n\nClipping regions are an essential tool for creating polished, professional canvas applications. They enable everything from image masks to complex UI transitions."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv13-q1', type: 'mcq', question: 'What does ctx.clip() do?', options: ['Restricts drawing to the current path area', 'Clears the current path', 'Strokes the current path', 'Fills the current path'], correctAnswer: 0, explanation: 'clip() turns the current path into a clipping region.', difficulty: 1 },
          { id: 'cv13-q2', type: 'true-false', question: 'Clip regions are automatically removed when you call ctx.restore().', options: ['True', 'False'], correctAnswer: 0, explanation: 'Clip regions are part of the saved state and are restored by restore().', difficulty: 1 },
          { id: 'cv13-q3', type: 'mcq', question: 'When you call clip() multiple times, what is the resulting clip region?', options: ['The intersection of all clip regions', 'The union of all clip regions', 'The most recent clip region only', 'The difference of the clip regions'], correctAnswer: 0, explanation: 'Multiple clip() calls create the intersection (overlap) of all regions.', difficulty: 2 },
          { id: 'cv13-q4', type: 'mcq', question: 'Which compositing mode can create a hole in an existing drawing?', options: ['destination-out', 'source-over', 'source-in', 'lighter'], correctAnswer: 0, explanation: 'destination-out makes existing pixels transparent where new content is drawn.', difficulty: 2 },
          { id: 'cv13-q5', type: 'true-false', question: 'You can use text paths as a clipping region.', options: ['False', 'True'], correctAnswer: 1, explanation: 'While canvas does not directly support text-to-clip, you can achieve text masks using globalCompositeOperation = "source-in".', difficulty: 2 },
          { id: 'cv13-q6', type: 'mcq', question: 'What is the best way to remove a clip region?', options: ['Call ctx.restore() to revert to saved state', 'Call ctx.unclip()', 'Set ctx.clip = null', 'Redraw the canvas'], correctAnswer: 0, explanation: 'Save state before clipping, then restore to remove it.', difficulty: 1 },
          { id: 'cv13-q7', type: 'true-false', question: 'Drawing operations outside the clip region cause errors.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Drawing outside the clip region is silently ignored, not an error.', difficulty: 1 },
          { id: 'cv13-q8', type: 'mcq', question: 'What shape does creating a viewport with clip enable?', options: ['Scrolling camera view of a larger world', 'Only rectangles', 'Full-screen rendering', '3D perspective'], correctAnswer: 0, explanation: 'A clip region combined with translation creates a scrolling viewport into a larger world.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv13-e1', type: 'easy', title: 'Image Inside a Circle', instructions: 'Draw a rectangle image (or colored pattern) clipped into a perfect circle at the center of the canvas. Add a thick border around the circle.', hint: 'Create a circular path with arc(), call clip(), then fill the canvas with a colorful pattern.', starterCode: '<canvas id="clipCircle" width="300" height="300"></canvas>\n<script>\n  // Your circular clip\n</script>', solution: '<canvas id="clipCircle" width="300" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("clipCircle").getContext("2d");\n  ctx.save();\n  ctx.beginPath();\n  ctx.arc(150, 150, 120, 0, Math.PI * 2);\n  ctx.clip();\n  // Draw a colorful pattern\n  for (let i = 0; i < 50; i++) {\n    ctx.fillStyle = hsl(${i * 15}, 80%, 60%);\n    ctx.fillRect(Math.random() * 300, Math.random() * 300, 40, 40);\n  }\n  ctx.restore();\n  // Border\n  ctx.beginPath();\n  ctx.arc(150, 150, 120, 0, Math.PI * 2);\n  ctx.strokeStyle = "#333";\n  ctx.lineWidth = 5;\n  ctx.stroke();\n</script>' },
        { id: 'cv13-e2', type: 'medium', title: 'Rounded Photo Card', instructions: 'Create a photo card with rounded corners using clip. Draw a colorful background pattern clipped to a rounded rectangle. Add a text caption below.', hint: 'Use the roundRectPath function with quadraticCurveTo for corners, then clip.', starterCode: '<canvas id="card" width="400" height="500"></canvas>\n<script>\n  // Your rounded photo card\n</script>', solution: '<canvas id="card" width="400" height="500"></canvas>\n<script>\n  const ctx = document.getElementById("card").getContext("2d");\n  const r = 20;\n  ctx.save();\n  ctx.beginPath();\n  ctx.moveTo(r, 50);\n  ctx.lineTo(350, 50);\n  ctx.quadraticCurveTo(400, 50, 400, 100);\n  ctx.lineTo(400, 350);\n  ctx.quadraticCurveTo(400, 400, 350, 400);\n  ctx.lineTo(r, 400);\n  ctx.quadraticCurveTo(0, 400, 0, 350);\n  ctx.lineTo(0, 100);\n  ctx.quadraticCurveTo(0, 50, 50, 50);\n  ctx.closePath();\n  ctx.clip();\n  const grad = ctx.createLinearGradient(0, 0, 400, 400);\n  grad.addColorStop(0, "#E91E63");\n  grad.addColorStop(1, "#2196F3");\n  ctx.fillStyle = grad;\n  ctx.fillRect(0, 0, 400, 400);\n  ctx.restore();\n  // Border\n  ctx.beginPath();\n  ctx.moveTo(r, 50); ctx.lineTo(350, 50); ctx.quadraticCurveTo(400, 50, 400, 100);\n  ctx.lineTo(400, 350); ctx.quadraticCurveTo(400, 400, 350, 400);\n  ctx.lineTo(r, 400); ctx.quadraticCurveTo(0, 400, 0, 350);\n  ctx.lineTo(0, 100); ctx.quadraticCurveTo(0, 50, 50, 50);\n  ctx.closePath(); ctx.stroke();\n  ctx.fillStyle = "#333";\n  ctx.font = "20px Arial";\n  ctx.textAlign = "center";\n  ctx.fillText("My Photo Card", 200, 460);\n</script>' },
        { id: 'cv13-e3', type: 'hard', title: 'Interactive Spotlight Reveal', instructions: 'Create an interactive spotlight that follows the mouse. The canvas should be mostly dark, with only a circular area around the mouse cursor revealing a colorful drawing underneath.', hint: 'Draw the colorful scene first, then draw a dark overlay, then use destination-out compositing to cut a hole around the mouse.', starterCode: '<canvas id="spotlight" width="600" height="400"></canvas>\n<script>\n  // Your interactive spotlight\n</script>', solution: '<canvas id="spotlight" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("spotlight").getContext("2d");\n  let mx = 300, my = 200;\n  canvas.addEventListener("mousemove", (e) => {\n    const rect = canvas.getBoundingClientRect();\n    mx = e.clientX - rect.left;\n    my = e.clientY - rect.top;\n  });\n  function draw() {\n    // Draw colorful scene\n    for (let i = 0; i < 20; i++) {\n      ctx.fillStyle = hsl(${i * 18}, 80%, 55%);\n      ctx.fillRect(Math.random() * 600, Math.random() * 400, 100, 100);\n    }\n    ctx.fillStyle = "#FFF";\n    ctx.font = "bold 48px Arial";\n    ctx.textAlign = "center";\n    ctx.textBaseline = "middle";\n    ctx.fillText("SPOTLIGHT", 300, 200);\n    // Dark overlay with hole\n    ctx.save();\n    ctx.fillStyle = "rgba(0,0,0,0.85)";\n    ctx.fillRect(0, 0, 600, 400);\n    ctx.globalCompositeOperation = "destination-out";\n    ctx.beginPath();\n    ctx.arc(mx, my, 80, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.restore();\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Set clip', value: 'path definition + ctx.clip()' },
        { label: 'Remove clip', value: 'ctx.restore()' },
        { label: 'Intersection', value: 'Multiple clip() calls intersect' },
        { label: 'Spotlight hole', value: 'destination-out compositing' },
        { label: 'Viewport', value: 'clip + translate for scrolling' }
      ]
    },,

    {
      id: 'canvas-14',
      number: 14,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Gradients',
      subtitle: 'createLinearGradient, createRadialGradient, color stops',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-13'],
      learningObjectives: [
        'Create linear gradients with multiple color stops',
        'Create radial and conic gradients',
        'Use gradients for shading, lighting, and depth effects',
        'Animate gradient positions for dynamic visuals'
      ],
      sections: [
        {
          id: 's1',
          title: 'Linear Gradients',
          whyItMatters: 'Gradients add depth, dimension, and visual polish. They transform flat shapes into rich, professional graphics.',
          content: "## createLinearGradient\n\nCreates a gradient along a straight line between two points:\n\n```javascript\nconst gradient = ctx.createLinearGradient(x0, y0, x1, y1);\ngradient.addColorStop(offset, color);\n```\n\n- **x0, y0**: Start point of the gradient\n- **x1, y1**: End point of the gradient\n- **addColorStop(offset, color)**: Offset from 0.0 to 1.0\n\n### Basic Horizontal Gradient\n\n```javascript\nconst grad = ctx.createLinearGradient(50, 0, 350, 0);\ngrad.addColorStop(0, '#E91E63');\ngrad.addColorStop(0.5, '#FFC107');\ngrad.addColorStop(1, '#4CAF50');\n\nctx.fillStyle = grad;\nctx.fillRect(50, 50, 300, 200);\n```\n\n### Diagonal Gradient\n\n```javascript\nconst grad = ctx.createLinearGradient(0, 0, 400, 300);\ngrad.addColorStop(0, '#1a1a2e');\ngrad.addColorStop(0.5, '#16213e');\ngrad.addColorStop(1, '#0f3460');\n\nctx.fillStyle = grad;\nctx.fillRect(0, 0, 400, 300);\n```\n\n### Multi-Stop Gradient (Rainbow)\n\n```javascript\nconst grad = ctx.createLinearGradient(0, 100, 400, 100);\ngrad.addColorStop(0.0, '#FF0000');\ngrad.addColorStop(0.17, '#FF8800');\ngrad.addColorStop(0.33, '#FFFF00');\ngrad.addColorStop(0.5, '#00CC00');\ngrad.addColorStop(0.67, '#0088FF');\ngrad.addColorStop(0.83, '#4400FF');\ngrad.addColorStop(1.0, '#8800AA');\n\nctx.fillStyle = grad;\nctx.fillRect(0, 100, 400, 50);\n```\n\n### Gradient with Transparency\n\n```javascript\nconst grad = ctx.createLinearGradient(0, 0, 300, 0);\ngrad.addColorStop(0, 'rgba(255, 0, 0, 1)');\ngrad.addColorStop(0.5, 'rgba(255, 0, 0, 0.5)');\ngrad.addColorStop(1, 'rgba(255, 0, 0, 0)');\n\nctx.fillStyle = grad;\nctx.fillRect(50, 50, 300, 100);\n```\n\n### Reusing Gradients\n\nGradients can be reused across multiple shapes:\n\n```javascript\nconst grad = ctx.createLinearGradient(0, 0, 400, 400);\ngrad.addColorStop(0, '#2196F3');\ngrad.addColorStop(1, '#E91E63');\n\n// Use same gradient for multiple shapes\nctx.fillStyle = grad;\nctx.fillRect(50, 50, 200, 200);\nctx.beginPath();\nctx.arc(300, 300, 80, 0, Math.PI * 2);\nctx.fill();\n```"
        },
        {
          id: 's2',
          title: 'Radial and Conic Gradients',
          whyItMatters: 'Radial gradients create spheres, lighting effects, and vignettes. Conic gradients enable color wheels and pie-chart effects.',
          content: "## Radial Gradients\n\n`createRadialGradient` creates a gradient between two circles:\n\n```javascript\nconst grad = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);\n```\n\n### 3D Sphere Effect\n\n```javascript\nconst grad = ctx.createRadialGradient(170, 170, 10, 200, 200, 100);\ngrad.addColorStop(0, '#FFFFFF');\ngrad.addColorStop(0.3, '#FFC107');\ngrad.addColorStop(0.7, '#FF9800');\ngrad.addColorStop(1, '#E65100');\n\nctx.beginPath();\nctx.arc(200, 200, 100, 0, Math.PI * 2);\nctx.fillStyle = grad;\nctx.fill();\n```\n\n### Vignette (Darkened Edges)\n\n```javascript\nconst vignette = ctx.createRadialGradient(300, 200, 50, 300, 200, 300);\nvignette.addColorStop(0, 'rgba(255,255,255,0)');\nvignette.addColorStop(1, 'rgba(0,0,0,0.7)');\n\nctx.fillStyle = vignette;\nctx.fillRect(0, 0, 600, 400);\n```\n\n### Sun Glow Effect\n\n```javascript\nconst glow = ctx.createRadialGradient(300, 200, 0, 300, 200, 150);\nglow.addColorStop(0, 'rgba(255, 255, 200, 1)');\nglow.addColorStop(0.3, 'rgba(255, 200, 50, 0.5)');\nglow.addColorStop(1, 'rgba(255, 200, 50, 0)');\n\nctx.fillStyle = glow;\nctx.fillRect(0, 0, 600, 400);\n```\n\n### Conic Gradients\n\nConic gradients (newer API) sweep around a center point:\n\n```javascript\nconst conic = ctx.createConicGradient(0, 200, 200);\nconic.addColorStop(0, '#E91E63');\nconic.addColorStop(0.25, '#2196F3');\nconic.addColorStop(0.5, '#4CAF50');\nconic.addColorStop(0.75, '#FFC107');\nconic.addColorStop(1, '#E91E63');\n\nctx.fillStyle = conic;\nctx.beginPath();\nctx.arc(200, 200, 150, 0, Math.PI * 2);\nctx.fill();\n```\n\nNote: Conic gradients are supported in modern browsers (Chrome 90+, Firefox 90+, Safari 15+)."
        },
        {
          id: 's3',
          title: 'Animated and Dynamic Gradients',
          whyItMatters: 'Animated gradients create stunning background effects, loading animations, and atmospheric scenes.',
          content: "## Animating Gradients\n\n### Moving Linear Gradient\n\n```javascript\nlet offset = 0;\nfunction animateGradient() {\n  offset += 0.01;\n  \n  // Create new gradient each frame with shifted positions\n  const grad = ctx.createLinearGradient(\n    100 + Math.sin(offset) * 50, 0,\n    300 + Math.cos(offset) * 50, 300\n  );\n  grad.addColorStop(0, '#E91E63');\n  grad.addColorStop(0.5, '#2196F3');\n  grad.addColorStop(1, '#4CAF50');\n  \n  ctx.fillStyle = grad;\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  \n  requestAnimationFrame(animateGradient);\n}\n```\n\n### Pulsing Radial Gradient\n\n```javascript\nlet pulse = 0;\nfunction pulseGlow() {\n  pulse += 0.03;\n  const radius = 50 + Math.sin(pulse) * 30;\n  \n  const grad = ctx.createRadialGradient(200, 200, 0, 200, 200, radius);\n  grad.addColorStop(0, 'rgba(255, 87, 34, 1)');\n  grad.addColorStop(1, 'rgba(255, 87, 34, 0)');\n  \n  ctx.fillStyle = grad;\n  ctx.beginPath();\n  ctx.arc(200, 200, radius, 0, Math.PI * 2);\n  ctx.fill();\n  \n  requestAnimationFrame(pulseGlow);\n}\n```\n\n### Gradient as Light Source\n\n```javascript\nfunction drawScene(lightX, lightY) {\n  // Object\n  ctx.beginPath();\n  ctx.arc(200, 200, 80, 0, Math.PI * 2);\n  \n  // Gradient simulates lighting from (lightX, lightY)\n  const grad = ctx.createRadialGradient(lightX, lightY, 20, 200, 200, 80);\n  grad.addColorStop(0, '#FFFFFF');\n  grad.addColorStop(0.5, '#4CAF50');\n  grad.addColorStop(1, '#1B5E20');\n  \n  ctx.fillStyle = grad;\n  ctx.fill();\n}\n```\n\nGradients are a powerful tool for adding realism, depth, and visual interest to any canvas application."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv14-q1', type: 'mcq', question: 'What does createLinearGradient(x0, y0, x1, y1) define?', options: ['A gradient line from (x0,y0) to (x1,y1)', 'A rectangle to fill', 'Two color points', 'The gradient angle'], correctAnswer: 0, explanation: 'The two points define the direction and length of the gradient.', difficulty: 1 },
          { id: 'cv14-q2', type: 'true-false', question: 'Color stop offsets must be between 0.0 and 1.0.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Valid offsets range from 0.0 (start) to 1.0 (end) of the gradient.', difficulty: 1 },
          { id: 'cv14-q3', type: 'mcq', question: 'How many circles does createRadialGradient use?', options: ['2 (start circle, end circle)', '1 (the gradient circle)', '3 (inner, middle, outer)', '4 (corners)'], correctAnswer: 0, explanation: 'Radial gradients interpolate between a start circle and an end circle.', difficulty: 2 },
          { id: 'cv14-q4', type: 'mcq', question: 'What effect does a radial gradient with a small inner circle and large outer circle create?', options: ['A 3D sphere or spotlight effect', 'A flat color', 'A striped pattern', 'A checkerboard'], correctAnswer: 0, explanation: 'The small inner circle (highlight) transitioning to the outer circle creates a 3D sphere illusion.', difficulty: 2 },
          { id: 'cv14-q5', type: 'true-false', question: 'Gradients can only be used as fillStyle, not strokeStyle.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Gradients can be used for both fillStyle and strokeStyle.', difficulty: 1 },
          { id: 'cv14-q6', type: 'mcq', question: 'What generates the gradient object for a color wheel effect?', options: ['createConicGradient()', 'createRadialGradient()', 'createLinearGradient()', 'createPattern()'], correctAnswer: 0, explanation: 'createConicGradient() sweeps around a center point, ideal for color wheels.', difficulty: 2 },
          { id: 'cv14-q7', type: 'true-false', question: 'A gradient object can be reused for multiple shapes.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Create the gradient once and use it as fillStyle for any number of shapes.', difficulty: 1 },
          { id: 'cv14-q8', type: 'mcq', question: 'How do you animate a gradient position?', options: ['Create a new gradient each frame with updated coordinates', 'Modify the existing gradient object', 'Use translate on the canvas', 'Set gradient.x and gradient.y'], correctAnswer: 0, explanation: 'Gradient objects are immutable after creation. Create a new one each frame to animate positions.', difficulty: 3 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv14-e1', type: 'easy', title: 'Sunset Sky Gradient', instructions: 'Create a sunset sky using a vertical linear gradient with at least 5 color stops transitioning from dark blue at top to orange/red at the bottom.', hint: 'Use createLinearGradient(0, 0, 0, canvas.height). Add colors: dark blue, purple, red, orange, yellow.', starterCode: '<canvas id="sunset" width="500" height="300"></canvas>\n<script>\n  // Your sunset gradient\n</script>', solution: '<canvas id="sunset" width="500" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("sunset").getContext("2d");\n  const grad = ctx.createLinearGradient(0, 0, 0, 300);\n  grad.addColorStop(0, "#0a0a2e");\n  grad.addColorStop(0.3, "#1a1a4e");\n  grad.addColorStop(0.5, "#E91E63");\n  grad.addColorStop(0.7, "#FF5722");\n  grad.addColorStop(0.85, "#FFC107");\n  grad.addColorStop(1, "#FFE082");\n  ctx.fillStyle = grad;\n  ctx.fillRect(0, 0, 500, 300);\n</script>' },
        { id: 'cv14-e2', type: 'medium', title: '3D Sphere with Lighting', instructions: 'Draw a 3D sphere using a radial gradient to simulate lighting from the top-left. The sphere should have a highlight, mid-tone, core color, shadow, and cast shadow on the ground.', hint: 'Use createRadialGradient with the inner circle offset top-left for the highlight. Add a dark shadow ellipse below the sphere.', starterCode: '<canvas id="sphere" width="400" height="400"></canvas>\n<script>\n  // Your 3D sphere\n</script>', solution: '<canvas id="sphere" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("sphere").getContext("2d");\n  // Cast shadow\n  ctx.fillStyle = "rgba(0,0,0,0.2)";\n  ctx.beginPath();\n  ctx.ellipse(210, 310, 90, 25, 0, 0, 7);\n  ctx.fill();\n  // Sphere\n  const grad = ctx.createRadialGradient(170, 150, 10, 200, 200, 100);\n  grad.addColorStop(0, "#FFFFFF");\n  grad.addColorStop(0.2, "#64B5F6");\n  grad.addColorStop(0.5, "#2196F3");\n  grad.addColorStop(0.8, "#1565C0");\n  grad.addColorStop(1, "#0D47A1");\n  ctx.beginPath();\n  ctx.arc(200, 200, 100, 0, 7);\n  ctx.fillStyle = grad;\n  ctx.fill();\n</script>' },
        { id: 'cv14-e3', type: 'hard', title: 'Animated Gradient Background', instructions: 'Create an animated background with multiple moving gradient bands. The colors should shift over time, creating a flowing aurora-like effect.', hint: 'Use multiple linear gradients with moving offsets. Animate color stop positions or gradient coordinates each frame.', starterCode: '<canvas id="aurora" width="600" height="400"></canvas>\n<script>\n  // Your animated gradient background\n</script>', solution: '<canvas id="aurora" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("aurora").getContext("2d");\n  let t = 0;\n  function draw() {\n    t += 0.02;\n    const grad = ctx.createLinearGradient(0, 0, 600, 0);\n    grad.addColorStop(0, hsl(${(t * 20) % 360}, 80%, 50%));\n    grad.addColorStop(0.3, hsl(${(120 + t * 15) % 360}, 70%, 60%));\n    grad.addColorStop(0.6, hsl(${(240 + t * 25) % 360}, 80%, 50%));\n    grad.addColorStop(1, hsl(${(t * 30) % 360}, 70%, 40%));\n    ctx.fillStyle = grad;\n    ctx.fillRect(0, 0, 600, 400);\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Linear gradient', value: 'ctx.createLinearGradient(x0, y0, x1, y1)' },
        { label: 'Radial gradient', value: 'ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)' },
        { label: 'Conic gradient', value: 'ctx.createConicGradient(angle, cx, cy)' },
        { label: 'Add stop', value: 'gradient.addColorStop(offset, color)' },
        { label: 'Valid offset', value: '0.0 (start) to 1.0 (end)' },
        { label: 'Reuse', value: 'Assign gradient to ctx.fillStyle' }
      ]
    },,

    {
      id: 'canvas-15',
      number: 15,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Patterns and Textures',
      subtitle: 'createPattern and repetition modes',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-14'],
      learningObjectives: [
        'Create repeating patterns using createPattern',
        'Use all repetition modes: repeat, repeat-x, repeat-y, no-repeat',
        'Create patterns from images and other canvas elements',
        'Apply patterns for textures, backgrounds, and fills'
      ],
      sections: [
        {
          id: 's1',
          title: 'Creating Patterns with createPattern',
          whyItMatters: 'Patterns are essential for textures, tiles, backgrounds, and fabric-like fills. They save memory by repeating a small source image.',
          content: "## createPattern Basics\n\n`createPattern(image, repetition)` creates a pattern from an image, canvas, or video:\n\n```javascript\nconst pattern = ctx.createPattern(image, repetition);\nctx.fillStyle = pattern;\n```\n\n### Repetition Modes\n\n- `'repeat'` — Tile both horizontally and vertically (default)\n- `'repeat-x'` — Tile only horizontally\n- `'repeat-y'` — Tile only vertically\n- `'no-repeat'` — Single instance, no tiling\n\n### Pattern from a Canvas\n\nYou can use another canvas as a pattern source:\n\n```javascript\n// Create a tile on an offscreen canvas\nconst tileCanvas = document.createElement('canvas');\ntileCanvas.width = 50;\ntileCanvas.height = 50;\nconst tileCtx = tileCanvas.getContext('2d');\n\ntileCtx.fillStyle = '#4CAF50';\ntileCtx.fillRect(0, 0, 25, 25);\ntileCtx.fillRect(25, 25, 25, 25);\ntileCtx.fillStyle = '#388E3C';\ntileCtx.fillRect(25, 0, 25, 25);\ntileCtx.fillRect(0, 25, 25, 25);\n\n// Use as pattern\nconst pattern = ctx.createPattern(tileCanvas, 'repeat');\nctx.fillStyle = pattern;\nctx.fillRect(0, 0, canvas.width, canvas.height);\n```\n\n### Pattern from an Image\n\n```javascript\nconst img = new Image();\nimg.src = 'brick-texture.png';\nimg.onload = () => {\n  const pattern = ctx.createPattern(img, 'repeat');\n  ctx.fillStyle = pattern;\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n};\n```\n\n### Generating a Pattern Programmatically\n\n```javascript\nfunction createCheckerPattern(size, color1, color2) {\n  const offscreen = document.createElement('canvas');\n  offscreen.width = size * 2;\n  offscreen.height = size * 2;\n  const octx = offscreen.getContext('2d');\n  \n  octx.fillStyle = color1;\n  octx.fillRect(0, 0, size * 2, size * 2);\n  octx.fillStyle = color2;\n  octx.fillRect(0, 0, size, size);\n  octx.fillRect(size, size, size, size);\n  \n  return ctx.createPattern(offscreen, 'repeat');\n}\n\nctx.fillStyle = createCheckerPattern(20, '#fff', '#ccc');\nctx.fillRect(0, 0, canvas.width, canvas.height);\n```"
        },
        {
          id: 's2',
          title: 'Pattern Transformations and Offsets',
          whyItMatters: 'Real-world applications need to offset patterns (scrolling backgrounds) and transform them (rotated tiles).',
          content: "## Transforming Patterns\n\nPatterns are affected by the current transformation matrix:\n\n```javascript\nconst pattern = ctx.createPattern(tileCanvas, 'repeat');\n\nctx.save();\nctx.translate(offsetX, offsetY);  // Shift the pattern\nctx.rotate(0.5);                   // Rotate the pattern\nctx.scale(2, 2);                   // Scale the pattern\nctx.fillStyle = pattern;\nctx.fillRect(-offsetX, -offsetY, canvas.width, canvas.height);\nctx.restore();\n```\n\n### Scrolling Background\n\n```javascript\nlet scrollX = 0;\nfunction drawBackground() {\n  scrollX -= 0.5;  // Scroll speed\n  \n  ctx.save();\n  ctx.translate(scrollX % tileWidth, 0);\n  ctx.fillStyle = pattern;\n  ctx.fillRect(-tileWidth, 0, canvas.width + tileWidth, canvas.height);\n  ctx.restore();\n}\n```\n\n### Pattern with Rotation\n\n```javascript\n// Create a rotated pattern\nctx.save();\nctx.translate(canvas.width / 2, canvas.height / 2);\nctx.rotate(Math.PI / 4);\nctx.translate(-canvas.width / 2, -canvas.height / 2);\n\nconst pattern = ctx.createPattern(tileCanvas, 'repeat');\nctx.fillStyle = pattern;\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\nctx.restore();\n```\n\n### Using SVG as Pattern Source\n\nYou can create patterns from inline SVG:\n\n```javascript\nconst svg = document.createElement('canvas');\n// Alternatively, use a data URL with SVG content\nconst svgData = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\">\n  <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"#E91E63\" opacity=\"0.3\"/>\n</svg>`;\n\nconst img = new Image();\nimg.src = 'data:image/svg+xml;base64,' + btoa(svgData);\nimg.onload = () => {\n  const pattern = ctx.createPattern(img, 'repeat');\n  ctx.fillStyle = pattern;\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n};\n```\n\nPatterns are a powerful way to add texture and visual richness to any canvas application."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv15-q1', type: 'mcq', question: 'What does ctx.createPattern(image, "repeat") do?', options: ['Creates a tiling pattern from the image', 'Draws the image once', 'Scales the image', 'Mirrors the image'], correctAnswer: 0, explanation: 'createPattern with "repeat" tiles the source image in both directions.', difficulty: 1 },
          { id: 'cv15-q2', type: 'mcq', question: 'Which repetition mode tiles only horizontally?', options: ['repeat-x', 'repeat-y', 'repeat', 'no-repeat'], correctAnswer: 0, explanation: '"repeat-x" repeats the pattern only along the X-axis.', difficulty: 1 },
          { id: 'cv15-q3', type: 'true-false', question: 'Pattern sources can only be Image objects, not other canvas elements.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Pattern sources can be Image, Canvas, or Video elements.', difficulty: 1 },
          { id: 'cv15-q4', type: 'mcq', question: 'How do you offset a pattern?', options: ['Use ctx.translate() before fillRect', 'Use pattern.offset property', 'Set pattern.x and pattern.y', 'Use ctx.patternOffset'], correctAnswer: 0, explanation: 'Apply translate to the canvas context before filling with the pattern.', difficulty: 2 },
          { id: 'cv15-q5', type: 'true-false', question: 'Patterns are affected by the canvas transformation matrix.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Patterns respect translate, rotate, and scale transformations.', difficulty: 2 },
          { id: 'cv15-q6', type: 'mcq', question: 'What is a common use case for pattern offset animation?', options: ['Scrolling game backgrounds', 'Drawing circles', 'Text rendering', 'Pixel manipulation'], correctAnswer: 0, explanation: 'Animating the pattern offset creates scrolling backgrounds for games.', difficulty: 1 },
          { id: 'cv15-q7', type: 'true-false', question: 'You can create a pattern from a video element.', options: ['True', 'False'], correctAnswer: 0, explanation: 'createPattern accepts CanvasImageSource, which includes video elements.', difficulty: 2 },
          { id: 'cv15-q8', type: 'mcq', question: 'What happens when fillRect is larger than one pattern tile?', options: ['The pattern repeats to fill the area', 'The tile is stretched', 'Only one tile is drawn', 'An error occurs'], correctAnswer: 0, explanation: 'Patterns automatically repeat (tile) to fill the filled area.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv15-e1', type: 'easy', title: 'Checkerboard Pattern', instructions: 'Create a checkerboard pattern programmatically using an offscreen canvas tile. Fill the main canvas with the pattern.', hint: 'Create a 40x40 offscreen canvas. Draw two 20x20 colored squares in opposite corners. Use createPattern with "repeat".', starterCode: '<canvas id="checkerPattern" width="400" height="400"></canvas>\n<script>\n  // Your checkerboard pattern\n</script>', solution: '<canvas id="checkerPattern" width="400" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("checkerPattern").getContext("2d");\n  const tile = document.createElement("canvas");\n  tile.width = 40; tile.height = 40;\n  const tc = tile.getContext("2d");\n  tc.fillStyle = "#fff"; tc.fillRect(0, 0, 40, 40);\n  tc.fillStyle = "#333"; tc.fillRect(0, 0, 20, 20); tc.fillRect(20, 20, 20, 20);\n  ctx.fillStyle = ctx.createPattern(tile, "repeat");\n  ctx.fillRect(0, 0, 400, 400);\n</script>' },
        { id: 'cv15-e2', type: 'medium', title: 'Scrolling Game Background', instructions: 'Create a parallax scrolling background with two layers. A far layer (mountains) scrolls slowly, and a near layer (trees) scrolls faster.', hint: 'Create two pattern sources. Offset each by a different speed using translate in the animation loop.', starterCode: '<canvas id="scroll" width="600" height="300"></canvas>\n<script>\n  // Your scrolling background\n</script>', solution: '<canvas id="scroll" width="600" height="300"></canvas>\n<script>\n  const ctx = document.getElementById("scroll").getContext("2d");\n  const tile1 = document.createElement("canvas");\n  tile1.width = 200; tile1.height = 300;\n  const t1 = tile1.getContext("2d");\n  t1.fillStyle = "#4a6741"; t1.fillRect(0,0,200,300);\n  t1.fillStyle = "#2d4a1e"; t1.beginPath(); t1.moveTo(0,300); t1.lineTo(30,150); t1.lineTo(60,300); t1.fill();\n  t1.beginPath(); t1.moveTo(80,300); t1.lineTo(130,100); t1.lineTo(180,300); t1.fill();\n  const pattern1 = ctx.createPattern(tile1, "repeat-x");\n  const tile2 = document.createElement("canvas");\n  tile2.width = 100; tile2.height = 300;\n  const t2 = tile2.getContext("2d");\n  t2.fillStyle = "#2E7D32"; t2.fillRect(0,0,100,300);\n  t2.fillStyle = "#1B5E20"; t2.beginPath(); t2.arc(30,200,40,0,7); t2.fill();\n  t2.beginPath(); t2.arc(80,180,35,0,7); t2.fill();\n  const pattern2 = ctx.createPattern(tile2, "repeat-x");\n  let x1 = 0, x2 = 0;\n  function draw() {\n    x1 -= 0.5; x2 -= 1.5;\n    ctx.save(); ctx.translate(x1 % 200, 0); ctx.fillStyle = pattern1; ctx.fillRect(-200,0,800,300); ctx.restore();\n    ctx.save(); ctx.translate(x2 % 100, 0); ctx.fillStyle = pattern2; ctx.fillRect(-100,0,700,300); ctx.restore();\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' },
        { id: 'cv15-e3', type: 'hard', title: 'Pattern Designer Tool', instructions: 'Create an interactive pattern designer where users can click to place different colored dots on a tile grid, and the main canvas shows the repeating pattern in real time.', hint: 'Maintain a grid array of colors. On click, toggle the color. Use an offscreen canvas as the pattern source that you update on each change.', starterCode: '<canvas id="designer" width="600" height="400"></canvas>\n<script>\n  // Your pattern designer\n</script>', solution: '<canvas id="designer" width="600" height="400"></canvas>\n<script>\n  const canvas = document.getElementById("designer");\n  const ctx = canvas.getContext("2d");\n  const grid = Array(4).fill().map(() => Array(4).fill("#fff"));\n  const tileSize = 40;\n  const colors = ["#E91E63","#2196F3","#4CAF50","#FFC107","#9C27B0","#fff"];\n  let currentColor = 0;\n  canvas.addEventListener("click", (e) => {\n    const rect = canvas.getBoundingClientRect();\n    const col = Math.floor((e.clientX - rect.left) / tileSize) % 4;\n    const row = Math.floor((e.clientY - rect.top - 10) / tileSize);\n    if (row >= 0 && row < 4 && col >= 0 && col < 4) {\n      currentColor = (currentColor + 1) % colors.length;\n      grid[row][col] = colors[currentColor];\n      render();\n    }\n  });\n  function render() {\n    ctx.clearRect(0, 0, 600, 400);\n    // Build tile\n    const tile = document.createElement("canvas");\n    tile.width = 160; tile.height = 160;\n    const tc = tile.getContext("2d");\n    for (let r = 0; r < 4; r++)\n      for (let c = 0; c < 4; c++) {\n        tc.fillStyle = grid[r][c];\n        tc.fillRect(c * tileSize, r * tileSize, tileSize, tileSize);\n        tc.strokeStyle = "#ccc";\n        tc.strokeRect(c * tileSize, r * tileSize, tileSize, tileSize);\n      }\n    // Preview tile\n    ctx.drawImage(tile, 10, 10);\n    // Pattern fill\n    const pattern = ctx.createPattern(tile, "repeat");\n    ctx.fillStyle = pattern;\n    ctx.fillRect(200, 10, 390, 380);\n  }\n  render();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Create pattern', value: 'ctx.createPattern(source, repetition)' },
        { label: 'Repeat modes', value: '"repeat", "repeat-x", "repeat-y", "no-repeat"' },
        { label: 'Sources', value: 'Image, Canvas, Video elements' },
        { label: 'Use pattern', value: 'ctx.fillStyle = pattern; ctx.fillRect(...)' },
        { label: 'Offset pattern', value: 'ctx.translate(offsetX, offsetY) before filling' },
        { label: 'Transform', value: 'Pattern respects ctx.rotate(), ctx.scale()' }
      ]
    },,

    {
      id: 'canvas-16',
      number: 16,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Shadows and Glow Effects',
      subtitle: 'shadowColor, shadowBlur, and shadowOffset',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-15'],
      learningObjectives: [
        'Apply shadows to shapes and text using shadow properties',
        'Control shadow blur, offset, and color',
        'Create glow effects using shadow without offset',
        'Optimize shadow rendering for performance'
      ],
      sections: [
        {
          id: 's1',
          title: 'Shadow Properties',
          whyItMatters: 'Shadows add depth, realism, and visual hierarchy. They make UI elements pop and create atmospheric effects.',
          content: "## Canvas Shadow Properties\n\nCanvas provides four shadow properties:\n\n```javascript\nctx.shadowColor = 'rgba(0, 0, 0, 0.5)';  // Shadow color with alpha\nctx.shadowBlur = 10;                       // Blur radius in pixels\nctx.shadowOffsetX = 5;                     // Horizontal offset\nctx.shadowOffsetY = 5;                     // Vertical offset\n```\n\n### Basic Drop Shadow\n\n```javascript\nctx.save();\nctx.shadowColor = 'rgba(0, 0, 0, 0.3)';\nctx.shadowBlur = 10;\nctx.shadowOffsetX = 5;\nctx.shadowOffsetY = 5;\n\nctx.fillStyle = '#2196F3';\nctx.fillRect(100, 100, 200, 150);\nctx.restore();\n```\n\n### Shadow on Text\n\n```javascript\nctx.font = 'bold 48px Arial';\nctx.shadowColor = 'rgba(0, 0, 0, 0.5)';\nctx.shadowBlur = 8;\nctx.shadowOffsetX = 4;\nctx.shadowOffsetY = 4;\nctx.fillStyle = '#FF5722';\nctx.fillText('Shadow!', 100, 200);\n```\n\n### Resetting Shadows\n\nShadows persist until changed. Always reset after use:\n\n```javascript\n// Reset shadow (fully transparent color)\nctx.shadowColor = 'transparent';\nctx.shadowBlur = 0;\nctx.shadowOffsetX = 0;\nctx.shadowOffsetY = 0;\n\n// Or use save/restore\nctx.save();\n// ... shadow drawing ...\nctx.restore();\n```\n\n### Performance Note\n\nShadows are expensive! Each shadow requires an offscreen buffer and blur pass. For performance:\n- Use shadows sparingly (not on hundreds of shapes per frame)\n- Pre-render shadowed elements to an offscreen canvas\n- Keep blur values reasonable (under 20px)\n- Use semi-transparent shadowColor (not fully opaque)"
        },
        {
          id: 's2',
          title: 'Glow Effects and Neon Signs',
          whyItMatters: 'Glow effects create neon signs, laser beams, magic effects, and UI highlights. They use shadows with zero offset for a halo effect.',
          content: "## Creating Glow Effects\n\nA glow is a shadow with zero offset and a colored blur:\n\n```javascript\n// Neon pink glow\nctx.shadowColor = '#E91E63';\nctx.shadowBlur = 20;\nctx.shadowOffsetX = 0;\nctx.shadowOffsetY = 0;\n\nctx.fillStyle = '#E91E63';\nctx.fillRect(100, 100, 200, 150);\n```\n\n### Multi-Layered Glow\n\nCreate a more intense glow by layering:\n\n```javascript\nfunction drawGlowRect(ctx, x, y, w, h, color) {\n  // Outer glow\n  ctx.save();\n  ctx.shadowColor = color;\n  ctx.shadowBlur = 30;\n  ctx.fillStyle = color;\n  ctx.fillRect(x, y, w, h);\n  ctx.restore();\n  \n  // Inner glow\n  ctx.save();\n  ctx.shadowColor = color;\n  ctx.shadowBlur = 15;\n  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';\n  ctx.fillRect(x, y, w, h);\n  ctx.restore();\n  \n  // Core\n  ctx.fillStyle = '#FFFFFF';\n  ctx.fillRect(x + 4, y + 4, w - 8, h - 8);\n}\n```\n\n### Neon Text\n\n```javascript\nfunction drawNeonText(ctx, text, x, y, color) {\n  ctx.font = 'bold 72px Arial';\n  ctx.textAlign = 'center';\n  ctx.textBaseline = 'middle';\n  \n  // Outer glow\n  ctx.save();\n  ctx.shadowColor = color;\n  ctx.shadowBlur = 30;\n  ctx.fillStyle = color;\n  ctx.fillText(text, x, y);\n  ctx.restore();\n  \n  // Inner glow\n  ctx.save();\n  ctx.shadowColor = color;\n  ctx.shadowBlur = 10;\n  ctx.fillStyle = '#FFFFFF';\n  ctx.fillText(text, x, y);\n  ctx.restore();\n}\n\ndrawNeonText(ctx, 'NEON', 300, 200, '#00FFFF');\n```\n\n### Glowing Particles\n\n```javascript\nclass GlowingParticle {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.size = 3 + Math.random() * 5;\n    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;\n  }\n  \n  draw(ctx) {\n    ctx.save();\n    ctx.shadowColor = this.color;\n    ctx.shadowBlur = 15;\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.restore();\n  }\n}\n```"
        },
        {
          id: 's3',
          title: 'Shadow Optimization Techniques',
          whyItMatters: 'Poor shadow performance is a common issue in canvas apps. These techniques keep your app running at 60fps.',
          content: "## Performance Strategies\n\n### Pre-render to Offscreen Canvas\n\nRender complex shadowed elements once, then draw the result:\n\n```javascript\n// Create offscreen canvas\nconst offscreen = document.createElement('canvas');\noffscreen.width = 200;\noffscreen.height = 200;\nconst octx = offscreen.getContext('2d');\n\n// Draw with shadows once\noctx.shadowColor = 'rgba(0,0,0,0.5)';\noctx.shadowBlur = 20;\noctx.fillStyle = '#E91E63';\noctx.beginPath();\noctx.arc(100, 100, 80, 0, Math.PI * 2);\noctx.fill();\n\n// In animation loop, just draw the pre-rendered result\nctx.drawImage(offscreen, x, y);\n```\n\n### Use Alpha Instead of Heavy Shadows\n\nSometimes a simple semi-transparent shape is more efficient:\n\n```javascript\n// EXPENSIVE: real shadow\nctx.shadowColor = 'rgba(0,0,0,0.5)';\nctx.shadowBlur = 10;\nctx.fillRect(100, 100, 200, 150);\n\n// CHEAPER: approximate with a dark rectangle behind\nctx.fillStyle = 'rgba(0,0,0,0.2)';\nctx.fillRect(105, 105, 200, 150);\nctx.fillStyle = '#2196F3';\nctx.fillRect(100, 100, 200, 150);\n```\n\n### Limit Shadow Application\n\nOnly apply shadows to elements that need them. Reset immediately:\n\n```javascript\n// GOOD: targeted shadow usage\nfunction drawButton(label, x, y, isActive) {\n  if (isActive) {\n    ctx.shadowColor = 'rgba(255, 87, 34, 0.5)';\n    ctx.shadowBlur = 15;\n  }\n  \n  ctx.fillStyle = isActive ? '#FF5722' : '#9E9E9E';\n  ctx.fillRect(x, y, 100, 40);\n  \n  // Always reset\n  ctx.shadowColor = 'transparent';\n  ctx.shadowBlur = 0;\n}\n```\n\n### Batch Shadowed Drawing\n\nGroup all shadowed elements together to minimize state changes:\n\n```javascript\n// Set shadow once\nctx.shadowColor = 'rgba(0,0,0,0.3)';\nctx.shadowBlur = 8;\n\n// Draw all elements that need this shadow\nelements.forEach(el => el.draw(ctx));\n\n// Reset once\nctx.shadowColor = 'transparent';\nctx.shadowBlur = 0;\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv16-q1', type: 'mcq', question: 'Which property controls the shadow blur intensity?', options: ['shadowBlur', 'shadowIntensity', 'shadowSoftness', 'blurRadius'], correctAnswer: 0, explanation: 'shadowBlur sets the blur radius in pixels for the shadow.', difficulty: 1 },
          { id: 'cv16-q2', type: 'true-false', question: 'Shadows are applied to all drawing operations (fill, stroke, text) when enabled.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Once set, shadows apply to all subsequent fill, stroke, and text operations.', difficulty: 1 },
          { id: 'cv16-q3', type: 'mcq', question: 'How do you create a glow effect (no offset shadow)?', options: ['Set shadowOffsetX=0, shadowOffsetY=0', 'Set shadowBlur=0', 'Set shadowColor=transparent', 'Use globalCompositeOperation'], correctAnswer: 0, explanation: 'Zero offsets with a non-zero blur and colored shadow creates a glow halo.', difficulty: 2 },
          { id: 'cv16-q4', type: 'true-false', question: 'Shadows are inexpensive and can be used freely on hundreds of shapes per frame.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Shadows require offscreen rendering and blur passes, making them expensive.', difficulty: 1 },
          { id: 'cv16-q5', type: 'mcq', question: 'Which technique improves shadow performance?', options: ['Pre-render to offscreen canvas', 'Increase shadowBlur', 'Use fully opaque shadowColor', 'Set shadowOffsetX/Y to large values'], correctAnswer: 0, explanation: 'Pre-rendering shadowed elements to an offscreen canvas avoids recalculating shadows each frame.', difficulty: 2 },
          { id: 'cv16-q6', type: 'mcq', question: 'How do you disable shadows?', options: ['Set shadowColor to transparent and blur to 0', 'Call disableShadows()', 'Set shadowBlur to -1', 'Remove shadow properties'], correctAnswer: 0, explanation: 'Reset shadowColor to "transparent" and shadowBlur to 0 to disable shadows.', difficulty: 1 },
          { id: 'cv16-q7', type: 'true-false', question: 'Shadows work with both fill and stroke operations.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Shadows are applied to fill(), stroke(), fillText(), strokeText(), and all drawing operations.', difficulty: 1 },
          { id: 'cv16-q8', type: 'mcq', question: 'What is a good alternative to expensive shadow blur?', options: ['Use a semi-transparent duplicate shape behind the main shape', 'Increase the globalAlpha', 'Use a different color', 'Skip shadows entirely'], correctAnswer: 0, explanation: 'A semi-transparent shape drawn behind the main shape can approximate a shadow more cheaply.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv16-e1', type: 'easy', title: 'Drop Shadow Cards', instructions: 'Draw three cards (rectangles) with different colors. Each card should have a drop shadow with different offset and blur values. Label each with its shadow settings.', hint: 'Set shadowOffsetX/Y and shadowBlur before each fillRect. Reset with save/restore.', starterCode: '<canvas id="cards" width="500" height="200"></canvas>\n<script>\n  // Your shadow cards\n</script>', solution: '<canvas id="cards" width="500" height="200"></canvas>\n<script>\n  const ctx = document.getElementById("cards").getContext("2d");\n  const configs = [\n    { color: "#E91E63", blur: 5, ox: 3, oy: 3 },\n    { color: "#2196F3", blur: 10, ox: 5, oy: 5 },\n    { color: "#4CAF50", blur: 20, ox: 8, oy: 8 }\n  ];\n  configs.forEach((c, i) => {\n    ctx.save();\n    ctx.shadowColor = "rgba(0,0,0,0.4)";\n    ctx.shadowBlur = c.blur;\n    ctx.shadowOffsetX = c.ox;\n    ctx.shadowOffsetY = c.oy;\n    ctx.fillStyle = c.color;\n    ctx.fillRect(30 + i * 160, 30, 130, 100);\n    ctx.restore();\n    ctx.fillStyle = "#333";\n    ctx.font = "12px Arial";\n    ctx.fillText("blur:" + c.blur + " ox:" + c.ox + " oy:" + c.oy, 30 + i * 160, 150);\n  });\n</script>' },
        { id: 'cv16-e2', type: 'medium', title: 'Neon Sign', instructions: 'Create a neon sign with the text "OPEN" in bright neon colors. Add a multi-layered glow effect and a dark background to make it pop.', hint: 'Use save/restore. Draw the text twice — once with a large shadowBlur for outer glow, once with smaller blur and white fill for inner glow.', starterCode: '<canvas id="neon" width="500" height="200"></canvas>\n<script>\n  // Your neon sign\n</script>', solution: '<canvas id="neon" width="500" height="200"></canvas>\n<script>\n  const ctx = document.getElementById("neon").getContext("2d");\n  ctx.fillStyle = "#0a0a2e";\n  ctx.fillRect(0, 0, 500, 200);\n  ctx.font = "bold 80px Arial";\n  ctx.textAlign = "center";\n  ctx.textBaseline = "middle";\n  // Outer glow\n  ctx.save();\n  ctx.shadowColor = "#00FFFF";\n  ctx.shadowBlur = 40;\n  ctx.fillStyle = "#00FFFF";\n  ctx.fillText("OPEN", 250, 100);\n  ctx.restore();\n  // Inner glow\n  ctx.save();\n  ctx.shadowColor = "#00FFFF";\n  ctx.shadowBlur = 15;\n  ctx.fillStyle = "#E0FFFF";\n  ctx.fillText("OPEN", 250, 100);\n  ctx.restore();\n</script>' },
        { id: 'cv16-e3', type: 'hard', title: 'Glowing Particle System', instructions: 'Create a particle system with 100 glowing particles that float upward. Each particle should have a random color, size, and speed, with a colored glow effect.', hint: 'Store particles in an array. In the animation loop, update positions and draw each with shadowColor matching its color.', starterCode: '<canvas id="particles" width="600" height="400"></canvas>\n<script>\n  // Your glowing particles\n</script>', solution: '<canvas id="particles" width="600" height="400"></canvas>\n<script>\n  const ctx = document.getElementById("particles").getContext("2d");\n  const particles = [];\n  for (let i = 0; i < 100; i++) {\n    particles.push({\n      x: Math.random() * 600, y: 400 + Math.random() * 100,\n      vx: (Math.random() - 0.5) * 0.5, vy: -1 - Math.random() * 2,\n      size: 3 + Math.random() * 4,\n      hue: Math.random() * 360,\n      life: 1\n    });\n  }\n  function draw() {\n    ctx.fillStyle = "rgba(10,10,46,0.2)";\n    ctx.fillRect(0, 0, 600, 400);\n    particles.forEach(p => {\n      p.x += p.vx;\n      p.y += p.vy;\n      p.life -= 0.005;\n      if (p.life <= 0) {\n        p.y = 400 + Math.random() * 100;\n        p.x = Math.random() * 600;\n        p.life = 1;\n      }\n      ctx.save();\n      ctx.shadowColor = hsl(${p.hue}, 100%, 60%);\n      ctx.shadowBlur = 15;\n      ctx.fillStyle = hsl(${p.hue}, 100%, 70%);\n      ctx.globalAlpha = p.life;\n      ctx.beginPath();\n      ctx.arc(p.x, p.y, p.size, 0, 7);\n      ctx.fill();\n      ctx.restore();\n    });\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Shadow color', value: 'ctx.shadowColor = "rgba(0,0,0,0.5)"' },
        { label: 'Shadow blur', value: 'ctx.shadowBlur = 10' },
        { label: 'Shadow offset', value: 'ctx.shadowOffsetX/Y = 5' },
        { label: 'Glow effect', value: 'shadowOffsetX=0, shadowOffsetY=0, blur>0' },
        { label: 'Disable shadow', value: 'shadowColor="transparent", shadowBlur=0' },
        { label: 'Performance', value: 'Pre-render to offscreen canvas, use alpha alternatives' }
      ]
    },,

    {
      id: 'canvas-17',
      number: 17,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Image Rendering',
      subtitle: 'drawImage, scaling, and cropping',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-16'],
      learningObjectives: [
        'Draw images on canvas using drawImage with various signatures',
        'Scale and crop images using the 9-parameter overload',
        'Handle image loading and error states',
        'Implement HiDPI image rendering'
      ],
      sections: [
        {
          id: 's1',
          title: 'drawImage Signatures',
          whyItMatters: 'Images are essential for games (sprites, backgrounds), photo editing, and UI elements. drawImage is the most versatile image method.',
          content: "## The Three drawSignatures\n\n### 1. Basic: drawImage(image, x, y)\n\nDraws the image at its original size:\n\n```javascript\nconst img = new Image();\nimg.src = 'photo.jpg';\nimg.onload = () => {\n  ctx.drawImage(img, 50, 50);\n};\n```\n\n### 2. Scaled: drawImage(image, x, y, width, height)\n\nDraws the image scaled to fit:\n\n```javascript\n// Stretch to fill 300x200\nctx.drawImage(img, 50, 50, 300, 200);\n\n// Maintain aspect ratio\nconst aspect = img.width / img.height;\nconst w = 300;\nconst h = w / aspect;\nctx.drawImage(img, 50, 50, w, h);\n```\n\n### 3. Cropped: drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)\n\nDraws a cropped portion of the source image:\n\n```javascript\n// Crop a 100x100 section from (50, 50) in the source,\n// and draw it at (100, 100) scaled to 200x200\nctx.drawImage(img,\n  50, 50, 100, 100,  // Source crop region\n  100, 100, 200, 200  // Destination position and size\n);\n```\n\n### Loading Images Properly\n\n```javascript\nfunction loadImage(src) {\n  return new Promise((resolve, reject) => {\n    const img = new Image();\n    img.onload = () => resolve(img);\n    img.onerror = () => reject(new Error('Failed to load: ' + src));\n    img.src = src;\n  });\n}\n\n// Usage\nloadImage('sprite.png').then(img => {\n  ctx.drawImage(img, 0, 0);\n}).catch(err => {\n  console.error(err);\n});\n```\n\n### Cross-Origin Images\n\nFor images from other domains (for pixel manipulation), set crossOrigin:\n\n```javascript\nconst img = new Image();\nimg.crossOrigin = 'anonymous';\nimg.src = 'https://example.com/image.jpg';\n```"
        },
        {
          id: 's2',
          title: 'Image Scaling and Cropping Techniques',
          whyItMatters: 'Proper scaling and cropping are essential for responsive layouts, sprite sheets, thumbnails, and photo editing.',
          content: "## Aspect Ratio Preservation\n\n```javascript\nfunction drawImageAspect(ctx, img, dx, dy, dw, dh) {\n  const aspect = img.width / img.height;\n  let drawW, drawH;\n  \n  if (dw / dh > aspect) {\n    // Container is wider than image\n    drawH = dh;\n    drawW = dh * aspect;\n  } else {\n    // Container is taller than image\n    drawW = dw;\n    drawH = dw / aspect;\n  }\n  \n  const ox = dx + (dw - drawW) / 2;\n  const oy = dy + (dh - drawH) / 2;\n  ctx.drawImage(img, ox, oy, drawW, drawH);\n}\n```\n\n### Cover (Fill) Mode\n\nLike CSS `object-fit: cover`:\n\n```javascript\nfunction drawImageCover(ctx, img, dx, dy, dw, dh) {\n  const aspect = img.width / img.height;\n  let srcW, srcH, srcX, srcY;\n  \n  if (dw / dh > aspect) {\n    srcH = img.height;\n    srcW = img.height * (dw / dh);\n  } else {\n    srcW = img.width;\n    srcH = img.width / (dw / dh);\n  }\n  \n  srcX = (img.width - srcW) / 2;\n  srcY = (img.height - srcH) / 2;\n  \n  ctx.drawImage(img, srcX, srcY, srcW, srcH, dx, dy, dw, dh);\n}\n```\n\n### Creating Thumbnails\n\n```javascript\nfunction createThumbnail(src, size) {\n  return new Promise(resolve => {\n    const img = new Image();\n    img.onload = () => {\n      const canvas = document.createElement('canvas');\n      canvas.width = size;\n      canvas.height = size;\n      const ctx = canvas.getContext('2d');\n      drawImageCover(ctx, img, 0, 0, size, size);\n      resolve(canvas);\n    };\n    img.src = src;\n  });\n}\n```\n\n### Tiling Images\n\n```javascript\nfunction tileImage(ctx, img, cols, rows) {\n  const cellW = canvas.width / cols;\n  const cellH = canvas.height / rows;\n  \n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      ctx.drawImage(img, c * cellW, r * cellH, cellW, cellH);\n    }\n  }\n}\n```"
        },
        {
          id: 's3',
          title: 'Canvas as Image Source',
          whyItMatters: 'Using a canvas as an image source enables pre-rendering, double-buffering, and compositing without visible flicker.',
          content: "## Drawing One Canvas onto Another\n\n```javascript\n// Create an offscreen canvas\nconst offscreen = document.createElement('canvas');\noffscreen.width = 400;\noffscreen.height = 300;\nconst octx = offscreen.getContext('2d');\n\n// Draw on offscreen\noctx.fillStyle = '#E91E63';\noctx.fillRect(0, 0, 200, 150);\n\n// Use it as an image source\nctx.drawImage(offscreen, 0, 0);\n```\n\n### Exporting Canvas to Image\n\n```javascript\n// Convert canvas to image URL\nconst dataUrl = canvas.toDataURL('image/png');\n\n// Create a downloadable link\nconst link = document.createElement('a');\nlink.download = 'artwork.png';\nlink.href = dataUrl;\nlink.click();\n\n// Get JPEG (lower quality, smaller file)\nconst jpegUrl = canvas.toDataURL('image/jpeg', 0.8);\n```\n\n### Saving Canvas to File\n\n```javascript\nfunction saveCanvas(canvas, filename) {\n  canvas.toBlob(blob => {\n    const url = URL.createObjectURL(blob);\n    const link = document.createElement('a');\n    link.href = url;\n    link.download = filename;\n    link.click();\n    URL.revokeObjectURL(url);\n  }, 'image/png');\n}\n```\n\n### Double Buffering for Smooth Animation\n\n```javascript\n// Render to offscreen, then swap with main canvas\nfunction renderFrame() {\n  // Clear offscreen\n  octx.clearRect(0, 0, offscreen.width, offscreen.height);\n  \n  // Draw complex scene on offscreen\n  drawScene(octx);\n  \n  // Copy entire offscreen to visible canvas in one drawImage\n  ctx.drawImage(offscreen, 0, 0);\n}\n```\n\nDouble buffering eliminates flicker and tearing in complex animations."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv17-q1', type: 'mcq', question: 'How many parameters does the simplest drawImage signature have?', options: ['3 (image, x, y)', '5 (image, x, y, w, h)', '9 (full crop/scale)', '2 (image, x)'], correctAnswer: 0, explanation: 'The simplest form is drawImage(img, x, y), which draws the image at its original size.', difficulty: 1 },
          { id: 'cv17-q2', type: 'true-false', question: 'drawImage can accept another canvas element as the image source.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Canvas elements are valid sources for drawImage.', difficulty: 1 },
          { id: 'cv17-q3', type: 'mcq', question: 'What does the 9-parameter drawImage do differently?', options: ['Crops from source and scales to destination', 'Adds rotation', 'Applies a filter', 'Creates an animation'], correctAnswer: 0, explanation: 'The 9-parameter version crops (sx, sy, sw, sh) from source and draws scaled to (dx, dy, dw, dh).', difficulty: 2 },
          { id: 'cv17-q4', type: 'mcq', question: 'What property must be set for cross-origin images?', options: ['img.crossOrigin = "anonymous"', 'img.allowCrossOrigin = true', 'img.cors = "enabled"', 'img.src = "https://..."'], correctAnswer: 0, explanation: 'Set crossOrigin to "anonymous" to request CORS-enabled images.', difficulty: 2 },
          { id: 'cv17-q5', type: 'true-false', question: 'toDataURL() creates a Base64-encoded data URL of the canvas content.', options: ['True', 'False'], correctAnswer: 0, explanation: 'toDataURL() returns a data URL containing the canvas image in the specified format.', difficulty: 1 },
          { id: 'cv17-q6', type: 'mcq', question: 'Which method is better for saving canvas as a file?', options: ['toBlob()', 'toDataURL()', 'saveAs()', 'download()'], correctAnswer: 0, explanation: 'toBlob() creates a Blob which can be downloaded efficiently without creating a large data URL string.', difficulty: 2 },
          { id: 'cv17-q7', type: 'true-false', question: 'Drawing an image before it loads will throw an error.', options: ['True', 'False'], correctAnswer: 1, explanation: 'It silently does nothing. Always wait for onload before drawing.', difficulty: 1 },
          { id: 'cv17-q8', type: 'mcq', question: 'What is double buffering used for?', options: ['Eliminating flicker in animations', 'Doubling the resolution', 'Creating mirror images', 'Reducing file size'], correctAnswer: 0, explanation: 'Double buffering renders to an offscreen canvas, then copies the result to the visible canvas.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv17-e1', type: 'easy', title: 'Image Grid Collage', instructions: 'Create a 3x3 grid collage from a single image. Each cell should show a different cropped portion of the image arranged in a grid.', hint: 'Divide the source image into 3x3 grid. Use the 9-parameter drawImage to crop each section.', starterCode: '<canvas id="collage" width="400" height="400"></canvas>\n<script>\n  // Draw a colorful pattern as "image"\n  const canvas = document.getElementById("collage");\n  const ctx = canvas.getContext("2d");\n  // Create a pattern source\n  const src = document.createElement("canvas");\n  src.width = 300; src.height = 300;\n  const sctx = src.getContext("2d");\n  for(let i=0;i<9;i++){\n    sctx.fillStyle = ["red","blue","green","yellow","purple","orange","pink","cyan","lime"][i];\n    sctx.fillRect((i%3)*100, Math.floor(i/3)*100, 100, 100);\n  }\n  // Your collage here — crop each 100x100 section into 133x133 display cells\n</script>', solution: '<canvas id="collage" width="400" height="400"></canvas>\n<script>\n  const canvas = document.getElementById("collage");\n  const ctx = canvas.getContext("2d");\n  const src = document.createElement("canvas");\n  src.width = 300; src.height = 300;\n  const sctx = src.getContext("2d");\n  const cols = ["red","blue","green","yellow","purple","orange","pink","cyan","lime"];\n  for(let i=0;i<9;i++){\n    sctx.fillStyle = cols[i];\n    sctx.fillRect((i%3)*100, Math.floor(i/3)*100, 100, 100);\n  }\n  for (let r = 0; r < 3; r++) {\n    for (let c = 0; c < 3; c++) {\n      ctx.drawImage(src, c*100, r*100, 100, 100, c*133, r*133, 133, 133);\n      ctx.strokeRect(c*133, r*133, 133, 133);\n    }\n  }\n</script>' },
        { id: 'cv17-e2', type: 'medium', title: 'Image with Zoom and Pan', instructions: 'Create an image viewer that supports zoom (scroll wheel) and pan (click and drag). Draw the image with drawImage using the crop parameters.', hint: 'Track viewport offset and zoom level. Use the 9-parameter drawImage to crop and scale the image.', starterCode: '<canvas id="viewer" width="600" height="400"></canvas>\n<script>\n  // Image viewer with zoom and pan\n  const canvas = document.getElementById("viewer");\n  const ctx = canvas.getContext("2d");\n  // Create a test image\n  const img = document.createElement("canvas");\n  img.width = 800; img.height = 600;\n  const ictx = img.getContext("2d");\n  ictx.fillStyle = "#f0f0f0"; ictx.fillRect(0,0,800,600);\n  for(let i=0;i<50;i++){\n    ictx.fillStyle = hsl(${i*7},70%,60%);\n    ictx.fillRect(Math.random()*750, Math.random()*550, 50, 50);\n  }\n</script>', solution: '<canvas id="viewer" width="600" height="400"></canvas>\n<script>\n  const canvas = document.getElementById("viewer");\n  const ctx = canvas.getContext("2d");\n  const img = document.createElement("canvas");\n  img.width = 800; img.height = 600;\n  const ictx = img.getContext("2d");\n  ictx.fillStyle = "#f0f0f0"; ictx.fillRect(0,0,800,600);\n  for(let i=0;i<50;i++){\n    ictx.fillStyle = `hsl(${i*7},70%,60%)`;\n    ictx.fillRect(Math.random()*750, Math.random()*550, 50, 50);\n  }\n  let zoom = 1, ox = 0, oy = 0, dragging = false, lastX, lastY;\n  canvas.addEventListener("wheel", (e) => {\n    zoom *= e.deltaY > 0 ? 0.9 : 1.1;\n    zoom = Math.max(0.1, Math.min(10, zoom));\n    draw();\n  });\n  canvas.addEventListener("mousedown", (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; });\n  canvas.addEventListener("mousemove", (e) => {\n    if (!dragging) return;\n    ox += (e.clientX - lastX) / zoom;\n    oy += (e.clientY - lastY) / zoom;\n    lastX = e.clientX; lastY = e.clientY;\n    draw();\n  });\n  canvas.addEventListener("mouseup", () => { dragging = false; });\n  function draw() {\n    ctx.fillStyle = "#333"; ctx.fillRect(0,0,600,400);\n    ctx.drawImage(img, ox, oy, 600/zoom, 400/zoom, 0, 0, 600, 400);\n  }\n  draw();\n</script>' },
        { id: 'cv17-e3', type: 'hard', title: 'Canvas Export with Filters', instructions: 'Create a drawing application where users can draw on a canvas and export the result as a PNG. Add pre-export filter options (grayscale, sepia, invert) that are applied before export.', hint: 'Use a main canvas for drawing. For export, create a second canvas, apply filters using pixel manipulation or CSS filters, then call toBlob.', starterCode: '<canvas id="draw" width="400" height="300"></canvas>\n<button id="exportBtn">Export as PNG</button>\n<script>\n  // Your drawing and export app\n</script>', solution: '<canvas id="draw" width="400" height="300"></canvas>\n<button id="exportBtn">Export as PNG</button>\n<script>\n  const canvas = document.getElementById("draw");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "#fff"; ctx.fillRect(0,0,400,300);\n  let drawing = false;\n  canvas.addEventListener("mousedown", () => drawing = true);\n  canvas.addEventListener("mouseup", () => drawing = false);\n  canvas.addEventListener("mousemove", (e) => {\n    if (!drawing) return;\n    const rect = canvas.getBoundingClientRect();\n    ctx.fillStyle = "#333";\n    ctx.beginPath();\n    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 5, 0, 7);\n    ctx.fill();\n  });\n  document.getElementById("exportBtn").addEventListener("click", () => {\n    canvas.toBlob(blob => {\n      const url = URL.createObjectURL(blob);\n      const a = document.createElement("a");\n      a.href = url; a.download = "drawing.png"; a.click();\n      URL.revokeObjectURL(url);\n    });\n  });\n</script>' }
      ],
      cheatSheet: [
        { label: 'Basic draw', value: 'ctx.drawImage(img, x, y)' },
        { label: 'Scaled draw', value: 'ctx.drawImage(img, x, y, w, h)' },
        { label: 'Crop + scale', value: 'ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)' },
        { label: 'Export PNG', value: 'canvas.toDataURL("image/png")' },
        { label: 'Export Blob', value: 'canvas.toBlob(fn, "image/png")' },
        { label: 'CORS images', value: 'img.crossOrigin = "anonymous"' }
      ]
    },,

    {
      id: 'canvas-18',
      number: 18,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Sprite Sheets',
      subtitle: 'Sprite animation from spritesheets',
      difficulty: 'Intermediate',
      estimatedMinutes: 40,
      xpReward: 60,
      prerequisites: ['canvas-17'],
      learningObjectives: [
        'Load and parse sprite sheet images',
        'Extract individual frames using the 9-parameter drawImage',
        'Implement frame-based animation timing',
        'Create animated characters with multiple animation states'
      ],
      sections: [
        {
          id: 's1',
          title: 'Understanding Sprite Sheets',
          whyItMatters: 'Sprite sheets power almost all 2D game animation. They optimize loading by packing many frames into one image.',
          content: "## What Is a Sprite Sheet?\n\nA sprite sheet is a single image containing multiple frames arranged in a grid. Instead of loading 20 individual images, you load one image and crop each frame using drawImage.\n\n```\nSingle sprite sheet image:\n┌─────┬─────┬─────┬─────┐\n│ F1  │ F2  │ F3  │ F4  │\n├─────┼─────┼─────┼─────┤\n│ F5  │ F6  │ F7  │ F8  │\n└─────┴─────┴─────┴─────┘\n```\n\n### Basic Frame Extraction\n\n```javascript\nconst frameWidth = 64;\nconst frameHeight = 64;\nconst spriteSheet = new Image();\nspriteSheet.src = 'character.png';\n\nfunction drawFrame(ctx, sheet, frameIndex, x, y) {\n  const cols = sheet.width / frameWidth;\n  const row = Math.floor(frameIndex / cols);\n  const col = frameIndex % cols;\n  \n  ctx.drawImage(\n    sheet,\n    col * frameWidth, row * frameHeight,  // Source crop\n    frameWidth, frameHeight,\n    x, y,                                  // Destination\n    frameWidth, frameHeight\n  );\n}\n\n// Draw frame 3 at position (100, 100)\ndrawFrame(ctx, spriteSheet, 3, 100, 100);\n```\n\n### Animation Loop\n\n```javascript\nconst TOTAL_FRAMES = 8;\nconst FRAME_DELAY = 100; // ms per frame\nlet currentFrame = 0;\nlet lastFrameTime = 0;\n\nfunction animate(timestamp) {\n  if (timestamp - lastFrameTime > FRAME_DELAY) {\n    currentFrame = (currentFrame + 1) % TOTAL_FRAMES;\n    lastFrameTime = timestamp;\n  }\n  \n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawFrame(ctx, spriteSheet, currentFrame, 100, 100);\n  \n  requestAnimationFrame(animate);\n}\n```"
        },
        {
          id: 's2',
          title: 'Multiple Animation States',
          whyItMatters: 'Game characters need different animations for idle, walking, jumping, and attacking. A state machine manages transitions between them.',
          content: "## Animation State Machine\n\n```javascript\nconst animations = {\n  idle:  { startFrame: 0, endFrame: 3, frameDelay: 200 },\n  walk:  { startFrame: 4, endFrame: 11, frameDelay: 100 },\n  jump:  { startFrame: 12, endFrame: 14, frameDelay: 150 },\n  attack: { startFrame: 15, endFrame: 18, frameDelay: 80 }\n};\n\nclass Sprite {\n  constructor(sheet, frameW, frameH) {\n    this.sheet = sheet;\n    this.frameW = frameW;\n    this.frameH = frameH;\n    this.state = 'idle';\n    this.frame = 0;\n    this.lastTime = 0;\n    this.x = 0;\n    this.y = 0;\n    this.direction = 1; // 1 = right, -1 = left\n  }\n  \n  setState(newState) {\n    if (this.state !== newState) {\n      this.state = newState;\n      this.frame = 0; // Reset to first frame\n    }\n  }\n  \n  update(timestamp) {\n    const anim = animations[this.state];\n    if (timestamp - this.lastTime > anim.frameDelay) {\n      this.frame++;\n      if (this.frame > anim.endFrame) {\n        this.frame = anim.startFrame;\n      }\n      this.lastTime = timestamp;\n    }\n  }\n  \n  draw(ctx) {\n    ctx.save();\n    if (this.direction === -1) {\n      ctx.translate(this.x + this.frameW / 2, 0);\n      ctx.scale(-1, 1);\n      ctx.translate(-this.frameW / 2, 0);\n    }\n    drawFrame(ctx, this.sheet, this.frame, this.x, this.y);\n    ctx.restore();\n  }\n}\n```\n\n### Creating a Sprite Sheet Programmatically\n\n```javascript\nfunction createSpriteSheet(frames) {\n  const cols = 4;\n  const rows = Math.ceil(frames.length / cols);\n  const frameW = 64, frameH = 64;\n  \n  const sheet = document.createElement('canvas');\n  sheet.width = cols * frameW;\n  sheet.height = rows * frameH;\n  const sctx = sheet.getContext('2d');\n  \n  frames.forEach((drawFn, i) => {\n    const col = i % cols;\n    const row = Math.floor(i / cols);\n    \n    sctx.save();\n    sctx.translate(col * frameW, row * frameH);\n    drawFn(sctx, frameW, frameH);\n    sctx.restore();\n  });\n  \n  return sheet;\n}\n```\n\n### Flipping Sprites for Direction\n\n```javascript\nfunction drawFlipped(ctx, sheet, frameIndex, x, y, flipX) {\n  ctx.save();\n  if (flipX) {\n    ctx.translate(x + frameWidth, 0);\n    ctx.scale(-1, 1);\n    ctx.translate(0, 0);\n    drawFrame(ctx, sheet, frameIndex, 0, y);\n  } else {\n    drawFrame(ctx, sheet, frameIndex, x, y);\n  }\n  ctx.restore();\n}\n```"
        },
        {
          id: 's3',
          title: 'Optimizing Sprite Rendering',
          whyItMatters: 'Games with many sprites need efficient rendering. These techniques keep frame rates high even with dozens of animated characters.',
          content: "## Performance Tips\n\n### Batch by Sprite Sheet\n\nGroup draw calls by the same sprite sheet to minimize state changes:\n\n```javascript\n// Group entities by their sprite sheet\nconst groups = new Map();\nentities.forEach(entity => {\n  if (!groups.has(entity.sheet)) {\n    groups.set(entity.sheet, []);\n  }\n  groups.get(entity.sheet).push(entity);\n});\n\n// Render all entities of same sheet together\ngroups.forEach((group, sheet) => {\n  group.forEach(entity => {\n    drawFrame(ctx, sheet, entity.frame, entity.x, entity.y);\n  });\n});\n```\n\n### Frame Caching\n\nCache frequently used frames to offscreen canvases:\n\n```javascript\nconst frameCache = new Map();\n\nfunction getCachedFrame(sheet, frameIndex, w, h) {\n  const key = `${sheet.src}_${frameIndex}`;\n  if (frameCache.has(key)) return frameCache.get(key);\n  \n  const cache = document.createElement('canvas');\n  cache.width = w;\n  cache.height = h;\n  const cctx = cache.getContext('2d');\n  drawFrame(cctx, sheet, frameIndex, 0, 0);\n  \n  frameCache.set(key, cache);\n  return cache;\n}\n\n// Usage — just drawImage the cached frame\nctx.drawImage(getCachedFrame(sheet, 3, 64, 64), 100, 100);\n```\n\n### Sprite Atlas\n\nA sprite atlas is a production-ready sprite sheet with JSON metadata:\n\n```javascript\nconst atlas = {\n  frames: {\n    'player_idle_1': { x: 0, y: 0, w: 64, h: 64 },\n    'player_idle_2': { x: 64, y: 0, w: 64, h: 64 },\n    'player_walk_1': { x: 0, y: 64, w: 64, h: 64 },\n    // ...\n  }\n};\n\nfunction drawAtlasFrame(ctx, atlas, sheet, frameName, x, y) {\n  const frame = atlas.frames[frameName];\n  ctx.drawImage(sheet, frame.x, frame.y, frame.w, frame.h, x, y, frame.w, frame.h);\n}\n```\n\nSprite sheets are the foundation of 2D game rendering. Mastery of frame extraction, state machines, and caching will let you create smooth, professional game animations."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv18-q1', type: 'mcq', question: 'What is a sprite sheet?', options: ['A single image containing multiple animation frames in a grid', 'A text file with sprite definitions', 'A CSS stylesheet for sprites', 'A JavaScript file with sprite logic'], correctAnswer: 0, explanation: 'A sprite sheet packs multiple animation frames into one image file.', difficulty: 1 },
          { id: 'cv18-q2', type: 'true-false', question: 'Sprite sheets reduce the number of HTTP requests needed for animations.', options: ['True', 'False'], correctAnswer: 0, explanation: 'One sprite sheet replaces many individual frame images, reducing requests.', difficulty: 1 },
          { id: 'cv18-q3', type: 'mcq', question: 'Which drawImage signature is used to extract a single frame from a sprite sheet?', options: ['9-parameter (crop and scale)', '3-parameter (image, x, y)', '5-parameter (image, x, y, w, h)', '7-parameter (image, cx, cy, cw, ch, x, y)'], correctAnswer: 0, explanation: 'The 9-parameter version crops the frame from the sprite sheet.', difficulty: 2 },
          { id: 'cv18-q4', type: 'mcq', question: 'How do you calculate which row a frame is on in a sprite sheet?', options: ['Math.floor(frameIndex / columnsPerRow)', 'frameIndex % columnsPerRow', 'frameIndex * frameWidth', 'frameIndex / totalFrames'], correctAnswer: 0, explanation: 'Divide by columns per row to get the row, modulus gives the column.', difficulty: 2 },
          { id: 'cv18-q5', type: 'true-false', question: 'You can flip a sprite horizontally by using ctx.scale(-1, 1) with appropriate translation.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Negative X scale flips the sprite horizontally. Translate to adjust position.', difficulty: 2 },
          { id: 'cv18-q6', type: 'mcq', question: 'What is frame caching?', options: ['Pre-rendering frames to offscreen canvases for faster drawing', 'Storing frame numbers in variables', 'Saving frames to disk', 'Compressing frame images'], correctAnswer: 0, explanation: 'Frame caching renders each frame once to an offscreen canvas, then uses drawImage for fast blitting.', difficulty: 2 },
          { id: 'cv18-q7', type: 'true-false', question: 'A sprite atlas includes JSON metadata describing frame positions.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Sprite atlases include JSON data mapping frame names to their x, y, w, h positions in the sheet.', difficulty: 1 },
          { id: 'cv18-q8', type: 'mcq', question: 'How do you implement frame-based animation timing?', options: ['Check if elapsed time since last frame exceeds the frame delay', 'Use setInterval for each frame', 'Count drawn frames per second', 'Use CSS animations'], correctAnswer: 0, explanation: 'Compare the current timestamp to lastFrameTime. If enough ms have passed, advance to the next frame.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv18-e1', type: 'easy', title: 'Walking Man Animation', instructions: 'Create a simple 4-frame walking animation from a programmatically generated sprite sheet. Animate the character walking across the screen.', hint: 'Create a 4-frame sprite sheet canvas. Draw each frame with slightly different leg positions. Use drawImage to crop and animate.', starterCode: '<canvas id="walk" width="500" height="200"></canvas>\n<script>\n  // Your walking animation\n</script>', solution: '<canvas id="walk" width="500" height="200"></canvas>\n<script>\n  const canvas = document.getElementById("walk");\n  const ctx = canvas.getContext("2d");\n  // Create sprite sheet\n  const sheet = document.createElement("canvas");\n  sheet.width = 256; sheet.height = 64;\n  const sctx = sheet.getContext("2d");\n  const legPositions = [[20,40],[30,40],[20,45],[10,40]];\n  legPositions.forEach((leg, i) => {\n    const ox = i * 64;\n    sctx.fillStyle = "#333";\n    sctx.fillRect(ox + 20, 10, 24, 40); // Body\n    sctx.beginPath(); sctx.arc(ox + 32, 10, 12, 0, 7); sctx.fill(); // Head\n    sctx.fillRect(ox + leg[0], 50, 8, 14); // Left leg\n    sctx.fillRect(ox + leg[1], 50, 8, 14); // Right leg\n  });\n  let frame = 0;\n  let x = -64;\n  function draw() {\n    ctx.fillStyle = "#87CEEB\"; ctx.fillRect(0,0,500,200);\n    ctx.fillStyle = "#4CAF50\"; ctx.fillRect(0,150,500,50);\n    ctx.drawImage(sheet, frame * 64, 0, 64, 64, x, 80, 64, 64);\n    x += 2; if (x > 500) x = -64;\n    frame = (frame + 1) % 4;\n    setTimeout(draw, 150);\n  }\n  draw();\n</script>' },
        { id: 'cv18-e2', type: 'medium', title: 'Character with State Machine', instructions: 'Create a character with three animation states: idle, walk, and jump. Draw buttons to switch between states. The animation should change accordingly.', hint: 'Create a sprite sheet with different frame ranges. Implement a state machine that tracks current state and frame index.', starterCode: '<canvas id="character" width="400" height="300"></canvas>\n<div>\n  <button onclick="setState(0)">Idle</button>\n  <button onclick="setState(1)">Walk</button>\n  <button onclick="setState(2)">Jump</button>\n</div>\n<script>\n  // Your character state machine\n</script>', solution: '<canvas id="character" width="400" height="300"></canvas>\n<div>\n  <button onclick="setState(0)">Idle</button>\n  <button onclick="setState(1)">Walk</button>\n  <button onclick="setState(2)">Jump</button>\n</div>\n<script>\n  const canvas = document.getElementById("character");\n  const ctx = canvas.getContext("2d");\n  const states = [\n    { name:"idle", start:0, end:3, delay:200 },\n    { name:"walk", start:4, end:7, delay:100 },\n    { name:"jump", start:8, end:9, delay:150 }\n  ];\n  let state = 0, frame = 0, lastTime = 0;\n  const sheet = document.createElement("canvas");\n  sheet.width = 640; sheet.height = 64;\n  const sctx = sheet.getContext("2d");\n  for(let i=0;i<10;i++){\n    sctx.fillStyle = ["#E91E63","#E91E63","#E91E63","#E91E63","#2196F3","#2196F3","#2196F3","#2196F3","#4CAF50","#4CAF50"][i];\n    sctx.fillRect(i*64, 10, 40, 40);\n    sctx.fillRect(i*64+10, 0, 20, 15);\n  }\n  function setState(s) { state = s; frame = states[s].start; }\n  function draw(ts) {\n    const s = states[state];\n    if(ts - lastTime > s.delay) { frame++; if(frame > s.end) frame = s.start; lastTime = ts; }\n    ctx.clearRect(0,0,400,300);\n    ctx.drawImage(sheet, frame*64, 0, 64, 64, 160, 100, 100, 100);\n    ctx.fillStyle = "#333\"; ctx.font = \"18px Arial\"; ctx.textAlign = \"center\";\n    ctx.fillText(\"State: \" + s.name, 200, 50);\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv18-e3', type: 'hard', title: 'Animated Particle Sprites', instructions: 'Create an animated explosion effect using a sprite sheet of 8 frames. The explosion should play once and disappear. Allow spawning multiple explosions at click positions.', hint: 'Create an explosion sprite sheet with expanding circles. When clicked, spawn a new Explosion object that plays through all frames once.', starterCode: '<canvas id="explosion" width="600" height="400"></canvas>\n<script>\n  // Your explosion effect\n</script>', solution: '<canvas id="explosion" width="600" height="400"></canvas>\n<script>\n  const canvas = document.getElementById(\"explosion\");\n  const ctx = canvas.getContext(\"2d\");\n  const sheet = document.createElement(\"canvas\");\n  sheet.width = 512; sheet.height = 64;\n  const sctx = sheet.getContext(\"2d\");\n  for(let i=0;i<8;i++){\n    const r = 10 + i * 6;\n    const grad = sctx.createRadialGradient(i*64+32, 32, 0, i*64+32, 32, r);\n    grad.addColorStop(0, \"rgba(255,200,50,1)\");\n    grad.addColorStop(0.5, \"rgba(255,100,0,0.8)\");\n    grad.addColorStop(1, \"rgba(255,50,0,0)\");\n    sctx.fillStyle = grad;\n    sctx.beginPath(); sctx.arc(i*64+32, 32, r, 0, 7); sctx.fill();\n  }\n  let explosions = [];\n  canvas.addEventListener(\"click\", (e) => {\n    const rect = canvas.getBoundingClientRect();\n    explosions.push({ x: e.clientX-rect.left, y: e.clientY-rect.top, frame: 0 });\n  });\n  function draw() {\n    ctx.fillStyle = \"#1a1a2e\"; ctx.fillRect(0,0,600,400);\n    explosions = explosions.filter(e => e.frame < 8);\n    explosions.forEach(e => {\n      ctx.drawImage(sheet, e.frame*64, 0, 64, 64, e.x-32, e.y-32, 64, 64);\n      e.frame++;\n    });\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Sprite sheet', value: 'Single image with frame grid' },
        { label: 'Frame extraction', value: 'drawImage(sheet, col*w, row*h, w, h, dx, dy, dw, dh)' },
        { label: 'Animation timer', value: 'if (now - last > delay) frame++' },
        { label: 'State machine', value: 'Switch frame range based on action state' },
        { label: 'Flip sprite', value: 'ctx.scale(-1, 1) + translate' },
        { label: 'Frame cache', value: 'Pre-render frames to offscreen canvases' }
      ]
    },,

    {
      id: 'canvas-19',
      number: 19,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Pixel Manipulation',
      subtitle: 'getImageData, putImageData, and pixel-level effects',
      difficulty: 'Advanced',
      estimatedMinutes: 45,
      xpReward: 65,
      prerequisites: ['canvas-18'],
      learningObjectives: [
        'Read pixel data from canvas using getImageData',
        'Write pixel data back using putImageData',
        'Implement pixel-level color manipulation',
        'Create image filters by processing pixel arrays'
      ],
      sections: [
        {
          id: 's1',
          title: 'Accessing Pixel Data with getImageData',
          whyItMatters: 'Pixel manipulation gives you complete control over every pixel on the canvas. This enables image filters, color pickers, and computer vision effects.',
          content: "## The ImageData Object\n\n`getImageData()` returns an `ImageData` object containing pixel data:\n\n```javascript\nconst imageData = ctx.getImageData(x, y, width, height);\n// {\n//   data: Uint8ClampedArray,  // Pixel data [R,G,B,A, R,G,B,A, ...]\n//   width: number,\n//   height: number\n// }\n```\n\nThe `data` array is a flat `Uint8ClampedArray` with each pixel taking 4 entries (R, G, B, A), each from 0-255.\n\n### Reading a Pixel\n\n```javascript\nfunction getPixel(imageData, x, y) {\n  const index = (y * imageData.width + x) * 4;\n  return {\n    r: imageData.data[index],\n    g: imageData.data[index + 1],\n    b: imageData.data[index + 2],\n    a: imageData.data[index + 3]\n  };\n}\n\nconst pixel = getPixel(imageData, 50, 100);\nconsole.log(`RGBA: ${pixel.r}, ${pixel.g}, ${pixel.b}, ${pixel.a}`);\n```\n\n### Setting a Pixel\n\n```javascript\nfunction setPixel(imageData, x, y, r, g, b, a = 255) {\n  const index = (y * imageData.width + x) * 4;\n  imageData.data[index] = r;\n  imageData.data[index + 1] = g;\n  imageData.data[index + 2] = b;\n  imageData.data[index + 3] = a;\n}\n```\n\n### Writing Pixels Back\n\n```javascript\nctx.putImageData(imageData, x, y);\n```\n\n### Full Example: Invert Colors\n\n```javascript\nfunction invertColors(imageData) {\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    imageData.data[i] = 255 - imageData.data[i];         // R\n    imageData.data[i + 1] = 255 - imageData.data[i + 1]; // G\n    imageData.data[i + 2] = 255 - imageData.data[i + 2]; // B\n    // Alpha unchanged\n  }\n  return imageData;\n}\n\nconst imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\ninvertColors(imageData);\nctx.putImageData(imageData, 0, 0);\n```"
        },
        {
          id: 's2',
          title: 'Common Pixel Effects',
          whyItMatters: 'Real-time pixel effects power photo filters, artistic styles, and visual enhancements in creative applications.',
          content: "## Essential Image Filters\n\n### Grayscale\n\n```javascript\nfunction grayscale(imageData) {\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    const gray = 0.299 * imageData.data[i] + 0.587 * imageData.data[i + 1] + 0.114 * imageData.data[i + 2];\n    imageData.data[i] = gray;     // R\n    imageData.data[i + 1] = gray; // G\n    imageData.data[i + 2] = gray; // B\n  }\n  return imageData;\n}\n```\n\n### Brightness\n\n```javascript\nfunction brightness(imageData, amount) {\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    imageData.data[i] = Math.min(255, imageData.data[i] + amount);\n    imageData.data[i + 1] = Math.min(255, imageData.data[i + 1] + amount);\n    imageData.data[i + 2] = Math.min(255, imageData.data[i + 2] + amount);\n  }\n  return imageData;\n}\n```\n\n### Contrast\n\n```javascript\nfunction contrast(imageData, amount) {\n  const factor = (259 * (amount + 255)) / (255 * (259 - amount));\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    imageData.data[i] = Math.min(255, Math.max(0, factor * (imageData.data[i] - 128) + 128));\n    imageData.data[i + 1] = Math.min(255, Math.max(0, factor * (imageData.data[i + 1] - 128) + 128));\n    imageData.data[i + 2] = Math.min(255, Math.max(0, factor * (imageData.data[i + 2] - 128) + 128));\n  }\n  return imageData;\n}\n```\n\n### Sepia\n\n```javascript\nfunction sepia(imageData) {\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    const r = imageData.data[i];\n    const g = imageData.data[i + 1];\n    const b = imageData.data[i + 2];\n    imageData.data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);\n    imageData.data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);\n    imageData.data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);\n  }\n  return imageData;\n}\n```\n\n### Threshold (Posterize)\n\n```javascript\nfunction threshold(imageData, threshold) {\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    const gray = 0.299 * imageData.data[i] + 0.587 * imageData.data[i + 1] + 0.114 * imageData.data[i + 2];\n    const value = gray > threshold ? 255 : 0;\n    imageData.data[i] = value;\n    imageData.data[i + 1] = value;\n    imageData.data[i + 2] = value;\n  }\n  return imageData;\n}\n```"
        },
        {
          id: 's3',
          title: 'Performance and Security Considerations',
          whyItMatters: 'Pixel manipulation is powerful but has performance costs and security restrictions. Understanding these helps you build efficient, secure applications.',
          content: "## Performance\n\n### Limited Canvas (Tainted Canvas)\n\nIf you draw a cross-origin image onto canvas, the canvas becomes **tainted** — you cannot call `getImageData()` or `toDataURL()` for security reasons:\n\n```javascript\nconst img = new Image();\nimg.src = 'https://other-domain.com/image.jpg'; // No CORS header\n// Drawing this image taints the canvas\nctx.drawImage(img, 0, 0);\ntry {\n  ctx.getImageData(0, 0, 100, 100); // Throws SecurityError\n} catch (e) {\n  console.log('Canvas is tainted');\n}\n```\n\nSolution: Use CORS-enabled images with `crossOrigin = 'anonymous'`.\n\n### Performance Tips\n\n```javascript\n// SLOW: Process entire canvas every frame\nfunction processEntireCanvas() {\n  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  // Process all pixels...\n  ctx.putImageData(imageData, 0, 0);\n}\n\n// FAST: Only process changed regions\nfunction processRegion(x, y, w, h) {\n  const imageData = ctx.getImageData(x, y, w, h);\n  // Process only this region...\n  ctx.putImageData(imageData, x, y);\n}\n\n// FAST: Use TypedArray views for complex operations\nconst data = new Uint32Array(imageData.data.buffer);\n// Each 32-bit entry holds RGBA of one pixel (if little-endian)\n// This is 4x faster than accessing individual bytes\n\n// FAST: Avoid putImageData for simple things\n// If you just need to clear, use clearRect instead\n```\n\n### Web Workers for Heavy Processing\n\nFor intensive filters, use a Web Worker:\n\n```javascript\n// main.js\nconst worker = new Worker('filter-worker.js');\nworker.postMessage({ imageData: canvasData });\nworker.onmessage = (e) => {\n  ctx.putImageData(e.data, 0, 0);\n};\n\n// filter-worker.js\nself.onmessage = (e) => {\n  const imageData = e.data.imageData;\n  // Heavy processing...\n  self.postMessage(imageData);\n};\n```\n\nPixel manipulation gives you the ultimate control over canvas visuals, enabling professional-grade image processing and creative effects."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv19-q1', type: 'mcq', question: 'What does getImageData() return?', options: ['An ImageData object with pixel data', 'A data URL string', 'A canvas element', 'An array of colors'], correctAnswer: 0, explanation: 'getImageData() returns an ImageData object containing width, height, and a Uint8ClampedArray of RGBA values.', difficulty: 1 },
          { id: 'cv19-q2', type: 'mcq', question: 'How many array entries per pixel in ImageData.data?', options: ['4 (R, G, B, A)', '3 (R, G, B)', '1 (grayscale)', '2 (color, alpha)'], correctAnswer: 0, explanation: 'Each pixel uses 4 consecutive entries: Red, Green, Blue, Alpha (0-255 each).', difficulty: 1 },
          { id: 'cv19-q3', type: 'true-false', question: 'You can always call getImageData() on any canvas, regardless of image sources.', options: ['True', 'False'], correctAnswer: 1, explanation: 'If a cross-origin image without CORS is drawn, the canvas becomes tainted and getImageData() throws a security error.', difficulty: 1 },
          { id: 'cv19-q4', type: 'mcg', question: 'What is the formula for converting a pixel to grayscale?', options: ['0.299*R + 0.587*G + 0.114*B', '(R + G + B) / 3', 'Math.max(R, G, B)', 'Math.min(R, G, B)'], correctAnswer: 0, explanation: 'The weighted formula accounts for human perception of color brightness.', difficulty: 2 },
          { id: 'cv19-q5', type: 'mcq', question: 'Which method writes pixel data back to the canvas?', options: ['putImageData()', 'setImageData()', 'drawImageData()', 'writeImageData()'], correctAnswer: 0, explanation: 'putImageData(imageData, dx, dy) writes an ImageData object to the canvas.', difficulty: 1 },
          { id: 'cv19-q6', type: 'true-false', question: 'Using Uint32Array views instead of individual byte access can improve pixel processing performance.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Uint32Array processes 4 bytes (one pixel) at a time, significantly faster than indexing RGBA separately.', difficulty: 2 },
          { id: 'cv19-q7', type: 'mcq', question: 'What solution prevents canvas tainting from cross-origin images?', options: ['Set img.crossOrigin = "anonymous" on CORS-enabled images', 'Use local images only', 'Disable security in the browser', 'Use SVG instead of images'], correctAnswer: 0, explanation: 'The crossOrigin attribute requests CORS permission from the server hosting the image.', difficulty: 2 },
          { id: 'cv19-q8', type: 'mcq', question: 'How can you process pixel data in parallel without blocking the UI?', options: ['Web Workers', 'setTimeout', 'requestIdleCallback', 'Promise.all'], correctAnswer: 0, explanation: 'Web Workers run JavaScript in a separate thread and can process ImageData without blocking the UI.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv19-e1', type: 'easy', title: 'Color Inverter', instructions: 'Draw a colorful pattern on canvas. Then use getImageData to read all pixels, invert each color channel (255 - value), and write back with putImageData.', hint: 'Loop through data array in steps of 4. Subtract each RGB value from 255. Leave alpha unchanged.', starterCode: '<canvas id="invert" width="300" height="300"></canvas>\n<script>\n  // Draw a pattern, then invert it\n  const canvas = document.getElementById("invert");\n  const ctx = canvas.getContext("2d");\n  // Draw colorful pattern first\n  for(let i=0;i<10;i++){\n    ctx.fillStyle = `hsl(${i*36}, 80%, 60%)`;\n    ctx.fillRect(i*30, i*30, 60, 60);\n  }\n  // Now invert the pixels\n</script>', solution: '<canvas id="invert" width="300" height="300"></canvas>\n<script>\n  const canvas = document.getElementById("invert");\n  const ctx = canvas.getContext("2d");\n  for(let i=0;i<10;i++){\n    ctx.fillStyle = `hsl(${i*36}, 80%, 60%)`;\n    ctx.fillRect(i*30, i*30, 60, 60);\n  }\n  const imageData = ctx.getImageData(0, 0, 300, 300);\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    imageData.data[i] = 255 - imageData.data[i];\n    imageData.data[i+1] = 255 - imageData.data[i+1];\n    imageData.data[i+2] = 255 - imageData.data[i+2];\n  }\n  ctx.putImageData(imageData, 0, 0);\n</script>' },
        { id: 'cv19-e2', type: 'medium', title: 'Image Filter Slider', instructions: 'Create a canvas with a drawn image and a brightness slider. As the user moves the slider, the brightness of the canvas image should update in real time using pixel manipulation.', hint: 'Store the original ImageData. On slider change, copy the original, apply brightness, and putImageData.', starterCode: '<canvas id="filter" width="400" height="300"></canvas>\n<input type="range" id="brightness" min="-255" max="255" value="0">\n<script>\n  // Your image filter with slider\n</script>', solution: '<canvas id="filter" width="400" height="300"></canvas>\n<input type="range" id="brightness" min="-255" max="255" value="0">\n<script>\n  const canvas = document.getElementById("filter");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "#f0f0f0\"; ctx.fillRect(0,0,400,300);\n  for(let i=0;i<20;i++){\n    ctx.fillStyle = `hsl(${i*18}, 80%, 55%)`;\n    ctx.beginPath(); ctx.arc(Math.random()*400, Math.random()*300, 20+Math.random()*30, 0, 7); ctx.fill();\n  }\n  const original = ctx.getImageData(0, 0, 400, 300);\n  document.getElementById("brightness").addEventListener("input", (e) => {\n    const amt = parseInt(e.target.value);\n    const data = new Uint8ClampedArray(original.data);\n    for (let i = 0; i < data.length; i += 4) {\n      data[i] += amt; data[i+1] += amt; data[i+2] += amt;\n    }\n    ctx.putImageData(new ImageData(data, 400, 300), 0, 0);\n  });\n</script>' },
        { id: 'cv19-e3', type: 'hard', title: 'Edge Detection', instructions: 'Implement a Sobel edge detection filter. Draw a simple shape, then process the pixels to highlight edges using the Sobel operator (convolution with 3x3 kernels for horizontal and vertical gradients).', hint: 'Apply horizontal Gx and vertical Gy Sobel kernels. Edge magnitude = sqrt(Gx^2 + Gy^2). Set pixel to white if above threshold.', starterCode: '<canvas id="edges" width="400" height="400"></canvas>\n<script>\n  // Edge detection with Sobel operator\n</script>', solution: '<canvas id="edges" width="400" height="400"></canvas>\n<script>\n  const canvas = document.getElementById("edges");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "#fff\"; ctx.fillRect(0,0,400,400);\n  ctx.fillStyle = "#333\"; ctx.font = "bold 80px Arial\"; ctx.textAlign = \"center\"; ctx.textBaseline = \"middle\"; ctx.fillText(\"EDGE\", 200, 200);\n  const imageData = ctx.getImageData(0,0,400,400);\n  const gray = new Float32Array(400*400);\n  for(let y=0;y<400;y++) for(let x=0;x<400;x++) {\n    const i = (y*400+x)*4;\n    gray[y*400+x] = 0.299*imageData.data[i] + 0.587*imageData.data[i+1] + 0.114*imageData.data[i+2];\n  }\n  const result = ctx.getImageData(0,0,400,400);\n  for(let y=1;y<399;y++) for(let x=1;x<399;x++) {\n    const gx = -gray[(y-1)*400+x-1] + gray[(y-1)*400+x+1] - 2*gray[y*400+x-1] + 2*gray[y*400+x+1] - gray[(y+1)*400+x-1] + gray[(y+1)*400+x+1];\n    const gy = -gray[(y-1)*400+x-1] - 2*gray[(y-1)*400+x] - gray[(y-1)*400+x+1] + gray[(y+1)*400+x-1] + 2*gray[(y+1)*400+x] + gray[(y+1)*400+x+1];\n    const mag = Math.min(255, Math.sqrt(gx*gx + gy*gy));\n    const i = (y*400+x)*4;\n    const val = mag > 50 ? 0 : 255;\n    result.data[i] = val; result.data[i+1] = val; result.data[i+2] = val; result.data[i+3] = 255;\n  }\n  ctx.putImageData(result, 0, 0);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Get pixels', value: 'ctx.getImageData(x, y, w, h)' },
        { label: 'Pixel format', value: 'Uint8ClampedArray [R,G,B,A, R,G,B,A, ...]' },
        { label: 'Index formula', value: '(y * width + x) * 4' },
        { label: 'Write pixels', value: 'ctx.putImageData(imageData, dx, dy)' },
        { label: 'Grayscale', value: '0.299*R + 0.587*G + 0.114*B' },
        { label: 'Tainted canvas', value: 'Cross-origin images without CORS block getImageData' }
      ]
    },,

    {
      id: 'canvas-20',
      number: 20,
      partLabel: 'Part 2: Drawing Systems',
      title: 'Image Filters',
      subtitle: 'Convolution, brightness, contrast, sepia',
      difficulty: 'Advanced',
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ['canvas-19'],
      learningObjectives: [
        'Implement convolution kernels for image filtering',
        'Create blur, sharpen, and emboss filters using kernels',
        'Chain multiple filters for compound effects',
        'Optimize filter performance with typed arrays'
      ],
      sections: [
        {
          id: 's1',
          title: 'Convolution Kernels',
          whyItMatters: 'Convolution filters are the foundation of image processing. Understanding them unlocks blur, sharpen, edge detection, and artistic effects.',
          content: "## What Is Convolution?\n\nConvolution applies a kernel (small matrix) to each pixel, blending it with its neighbors. The kernel defines the filter effect.\n\n### Generic Convolution Function\n\n```javascript\nfunction convolve(imageData, kernel) {\n  const { width, height, data } = imageData;\n  const output = new ImageData(width, height);\n  const half = Math.floor(kernel.length / 2);\n  \n  for (let y = 0; y < height; y++) {\n    for (let x = 0; x < width; x++) {\n      let r = 0, g = 0, b = 0;\n      \n      for (let ky = 0; ky < kernel.length; ky++) {\n        for (let kx = 0; kx < kernel.length; kx++) {\n          const px = Math.min(width - 1, Math.max(0, x + kx - half));\n          const py = Math.min(height - 1, Math.max(0, y + ky - half));\n          const idx = (py * width + px) * 4;\n          const weight = kernel[ky][kx];\n          r += data[idx] * weight;\n          g += data[idx + 1] * weight;\n          b += data[idx + 2] * weight;\n        }\n      }\n      \n      const oidx = (y * width + x) * 4;\n      output.data[oidx] = Math.min(255, Math.max(0, r));\n      output.data[oidx + 1] = Math.min(255, Math.max(0, g));\n      output.data[oidx + 2] = Math.min(255, Math.max(0, b));\n      output.data[oidx + 3] = 255;\n    }\n  }\n  \n  return output;\n}\n```\n\n### Common Kernels\n\n```javascript\nconst kernels = {\n  identity: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],\n  boxBlur: [[1/9, 1/9, 1/9], [1/9, 1/9, 1/9], [1/9, 1/9, 1/9]],\n  gaussianBlur: [[1/16, 2/16, 1/16], [2/16, 4/16, 2/16], [1/16, 2/16, 1/16]],\n  sharpen: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]],\n  edgeDetect: [[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]],\n  emboss: [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]]\n};\n\n// Apply blur\nctx.putImageData(convolve(imageData, kernels.gaussianBlur), 0, 0);\n```"
        },
        {
          id: 's2',
          title: 'Building a Filter Pipeline',
          whyItMatters: 'Real-world image editing chains multiple filters. A filter pipeline makes it easy to combine effects.',
          content: "## Filter Pipeline\n\n```javascript\nclass FilterPipeline {\n  constructor() {\n    this.filters = [];\n  }\n  \n  add(filter) {\n    this.filters.push(filter);\n    return this;\n  }\n  \n  apply(imageData) {\n    let result = imageData;\n    for (const filter of this.filters) {\n      result = filter(result);\n    }\n    return result;\n  }\n}\n\n// Create a vintage photo effect\nconst vintage = new FilterPipeline();\nvintage.add(sepia);\nvintage.add((data) => brightness(data, -20));\nvintage.add((data) => contrast(data, 30));\n\nctx.putImageData(vintage.apply(originalData), 0, 0);\n```\n\n### HSL Adjustments via Pixel Manipulation\n\n```javascript\nfunction rgbToHsl(r, g, b) {\n  r /= 255; g /= 255; b /= 255;\n  const max = Math.max(r, g, b), min = Math.min(r, g, b);\n  let h, s, l = (max + min) / 2;\n  if (max === min) { h = s = 0; }\n  else {\n    const d = max - min;\n    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\n    switch (max) {\n      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;\n      case g: h = ((b - r) / d + 2) / 6; break;\n      case b: h = ((r - g) / d + 4) / 6; break;\n    }\n  }\n  return [h * 360, s * 100, l * 100];\n}\n\nfunction hslToRgb(h, s, l) {\n  h /= 360; s /= 100; l /= 100;\n  // ... standard HSL to RGB conversion\n}\n\nfunction adjustHsl(imageData, hShift, sShift, lShift) {\n  for (let i = 0; i < imageData.data.length; i += 4) {\n    let [h, s, l] = rgbToHsl(imageData.data[i], imageData.data[i+1], imageData.data[i+2]);\n    h = (h + hShift) % 360;\n    s = Math.min(100, Math.max(0, s + sShift));\n    l = Math.min(100, Math.max(0, l + lShift));\n    [imageData.data[i], imageData.data[i+1], imageData.data[i+2]] = hslToRgb(h, s, l);\n  }\n  return imageData;\n}\n```\n\n### Canvas Filter Property\n\nModern browsers support CSS-style filters directly on the 2D context:\n\n```javascript\nctx.filter = 'brightness(1.2) contrast(1.5) sepia(0.8) hue-rotate(90deg)';\n// Draw with filters applied\nctx.drawImage(image, 0, 0);\n// Reset\nctx.filter = 'none';\n```\n\nNote: The `filter` property is efficient (hardware-accelerated) but not available in all browsers until recent versions."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv20-q1', type: 'mcq', question: 'What is a convolution kernel?', options: ['A small matrix that defines how each pixel blends with neighbors', 'A canvas gradient', 'A color palette', 'A shape path'], correctAnswer: 0, explanation: 'A kernel is a matrix (usually 3x3) that determines the filter effect when convolved with pixels.', difficulty: 2 },
          { id: 'cv20-q2', type: 'true-false', question: 'A Gaussian blur kernel sums to 1.0 to preserve brightness.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Normalized kernels sum to 1, maintaining overall brightness. Sharpen kernels sum to 1 with negative weights.', difficulty: 2 },
           { id: 'cv20-q3', type: 'mcq', question: 'Which kernel creates an emboss effect?', options: ['[[-2,-1,0],[-1,1,1],[0,1,2]]', '[[0,-1,0],[-1,5,-1],[0,-1,0]]', '[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]]', '[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]'], correctAnswer: 0, explanation: 'The emboss kernel creates a 3D raised effect by emphasizing diagonal differences.', difficulty: 2 },
          { id: 'cv20-q4', type: 'true-false', question: 'The canvas ctx.filter property applies CSS-like filters and is hardware-accelerated.', options: ['True', 'False'], correctAnswer: 0, explanation: 'ctx.filter applies CSS filter functions and leverages GPU acceleration in modern browsers.', difficulty: 1 },
           { id: 'cv20-q5', type: 'mcq', question: 'What does the sharpen kernel do differently from blur?', options: ['It amplifies pixel differences with neighbors', 'It averages all pixels equally', 'It only affects edges', 'It darkens the image'], correctAnswer: 0, explanation: 'Sharpen increases contrast at edges by subtracting neighbor values from the center pixel.', difficulty: 2 },
          { id: 'cv20-q6', type: 'true-false', question: 'The edge detection kernel has a center value of 8 and surrounding values of -1.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The Laplacian edge detection kernel has 8 in center and -1 around it, detecting areas of rapid change.', difficulty: 1 },
          { id: 'cv20-q7', type: 'mcq', question: 'How do you reset ctx.filter to its default?', options: ["ctx.filter = 'none'", "ctx.filter = ''", 'ctx.filter = null', 'ctx.clearFilter()'], correctAnswer: 0, explanation: "Set ctx.filter = 'none' to reset to default no-filter state.", difficulty: 1 },
          { id: 'cv20-q8', type: 'mcq', question: 'What is the advantage of a filter pipeline pattern?', options: ['Easily combine multiple filters in sequence', 'Faster than individual filters', 'Works with WebGL automatically', 'Reduces code size'], correctAnswer: 0, explanation: 'A pipeline chains filters sequentially, making it easy to compose complex effects from simple pieces.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv20-e1', type: 'easy', title: 'Blur vs Sharpen Gallery', instructions: 'Draw a sharp image (text or geometric pattern) on canvas. Then apply box blur, Gaussian blur, and sharpen filters. Display the original plus three filtered versions in a 2x2 grid.', hint: 'Copy the original canvas three times using getImageData. Apply different convolution kernels.', starterCode: '<canvas id="filterGrid" width="400" height="400"></canvas>\n<script>\n  // Your filter gallery\n</script>', solution: '<canvas id="filterGrid" width="400" height="400"></canvas>\n<script>\n  const canvas = document.getElementById("filterGrid");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "#fff\"; ctx.fillRect(0,0,400,400);\n  ctx.fillStyle = "#333\"; ctx.font = "bold 30px Arial\"; ctx.textAlign = \"center\";\n  for(let i=0;i<3;i++) for(let j=0;j<3;j++) ctx.fillText(\"FILTER\", 50+j*100, 50+i*80);\n  function convolve(data, k) {\n    const w=data.width, h=data.height, d=data.data, out=new ImageData(w,h);\n    const half=Math.floor(k.length/2);\n    for(let y=0;y<h;y++) for(let x=0;x<w;x++) {\n      let r=0,g=0,b=0;\n      for(let ky=0;ky<k.length;ky++) for(let kx=0;kx<k.length;kx++) {\n        const px=Math.min(w-1,Math.max(0,x+kx-half)), py=Math.min(h-1,Math.max(0,y+ky-half));\n        const idx=(py*w+px)*4, wt=k[ky][kx];\n        r+=d[idx]*wt; g+=d[idx+1]*wt; b+=d[idx+2]*wt;\n      }\n      const oi=(y*w+x)*4;\n      out.data[oi]=Math.min(255,Math.max(0,r)); out.data[oi+1]=Math.min(255,Math.max(0,g));\n      out.data[oi+2]=Math.min(255,Math.max(0,b)); out.data[oi+3]=255;\n    }\n    return out;\n  }\n  const orig = ctx.getImageData(0,0,400,400);\n  const blurred = convolve(orig, [[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]]);\n  ctx.putImageData(blurred, 0, 0);\n</script>' },
        { id: 'cv20-e2', type: 'medium', title: 'Real-time Filter App', instructions: 'Create an app with buttons for different filters (Original, Grayscale, Sepia, Invert, Blur) that apply to a canvas image. Each button click applies a different filter.', hint: 'Store the original ImageData. On each button click, copy the original data and apply the selected filter.', starterCode: '<canvas id="filterApp" width="400" height="300"></canvas>\n<button onclick="applyFilter(\"original\")">Original</button>\n<button onclick="applyFilter(\"grayscale\")">Grayscale</button>\n<button onclick="applyFilter(\"sepia\")">Sepia</button>\n<button onclick="applyFilter(\"invert\")">Invert</button>\n<button onclick="applyFilter(\"blur\")">Blur</button>\n<script>\n  // Your filter application\n</script>', solution: '<canvas id="filterApp" width="400" height="300"></canvas>\n<button onclick="applyFilter(\"original\")">Original</button>\n<button onclick="applyFilter(\"grayscale\")">Grayscale</button>\n<button onclick="applyFilter(\"sepia\")">Sepia</button>\n<button onclick="applyFilter(\"invert\")">Invert</button>\n<button onclick="applyFilter(\"blur\")">Blur</button>\n<script>\n  const canvas = document.getElementById(\"filterApp\");\n  const ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"#f0f0f0\"; ctx.fillRect(0,0,400,300);\n  for(let i=0;i<15;i++){ ctx.fillStyle=`hsl(${i*24},80%,55%)`; ctx.beginPath(); ctx.arc(40+i*25,50+Math.random()*200,20,0,7); ctx.fill(); }\n  const original = ctx.getImageData(0,0,400,300);\n  function applyFilter(name) {\n    const data = new Uint8ClampedArray(original.data);\n    const imgData = new ImageData(data, 400, 300);\n    if(name===\"original\") { ctx.putImageData(original,0,0); return; }\n    for(let i=0;i<data.length;i+=4) {\n      if(name===\"grayscale\") { const g=0.299*data[i]+0.587*data[i+1]+0.114*data[i+2]; data[i]=g;data[i+1]=g;data[i+2]=g; }\n      if(name===\"sepia\") { const r=data[i],g=data[i+1],b=data[i+2]; data[i]=Math.min(255,r*0.393+g*0.769+b*0.189); data[i+1]=Math.min(255,r*0.349+g*0.686+b*0.168); data[i+2]=Math.min(255,r*0.272+g*0.534+b*0.131); }\n      if(name===\"invert\") { data[i]=255-data[i]; data[i+1]=255-data[i+1]; data[i+2]=255-data[i+2]; }\n    }\n    ctx.putImageData(imgData,0,0);\n  }\n</script>' },
        { id: 'cv20-e3', type: 'hard', title: 'Custom Kernel Builder', instructions: 'Build an interactive kernel builder. Display a 3x3 grid of input fields for kernel weights. Apply the custom kernel to a test image in real time as the user edits values.', hint: 'Create 9 input fields. On any change, build the kernel array from input values and apply convolution.', starterCode: '<canvas id=\"kernelTest\" width=\"400\" height=\"300\"></canvas>\n<div id=\"kernelGrid\"></div>\n<script>\n  // Your kernel builder\n</script>', solution: '<canvas id=\"kernelTest\" width=\"400\" height=\"300\"></canvas>\n<div id=\"kernelGrid\"></div>\n<script>\n  const canvas = document.getElementById(\"kernelTest\");\n  const ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"#fff\"; ctx.fillRect(0,0,400,300);\n  ctx.fillStyle = \"#333\"; ctx.font = \"bold 40px Arial\"; ctx.textAlign = \"center\"; ctx.textBaseline = \"middle\";\n  ctx.fillText(\"KERNEL\", 200, 80);\n  for(let i=0;i<5;i++){ ctx.fillStyle=`hsl(${i*72},80%,55%)`; ctx.beginPath(); ctx.arc(100+i*50,180,25,0,7); ctx.fill(); }\n  const original = ctx.getImageData(0,0,400,300);\n  const kernelGrid = document.getElementById(\"kernelGrid\");\n  let inputs = [];\n  for(let i=0;i<9;i++){\n    const inp = document.createElement(\"input\");\n    inp.type = \"number\"; inp.step = \"0.1\"; inp.value = i===4?\"1\":\"0\"; inp.style.width = \"50px\";\n    inp.addEventListener(\"input\", applyKernel);\n    kernelGrid.appendChild(inp);\n    inputs.push(inp);\n  }\n  function applyKernel(){\n    const k = [[],[],[]];\n    for(let r=0;r<3;r++) for(let c=0;c<3;c++) k[r][c] = parseFloat(inputs[r*3+c].value) || 0;\n    const data = new Uint8ClampedArray(original.data);\n    const imgData = new ImageData(data, 400, 300);\n    const out = new ImageData(400,300);\n    for(let y=0;y<300;y++) for(let x=0;x<400;x++){\n      let r=0,g=0,b=0;\n      for(let ky=0;ky<3;ky++) for(let kx=0;kx<3;kx++){\n        const px=Math.min(399,Math.max(0,x+kx-1)), py=Math.min(299,Math.max(0,y+ky-1));\n        const idx=(py*400+px)*4, wt=k[ky][kx];\n        r+=data[idx]*wt; g+=data[idx+1]*wt; b+=data[idx+2]*wt;\n      }\n      const oi=(y*400+x)*4;\n      out.data[oi]=Math.min(255,Math.max(0,r)); out.data[oi+1]=Math.min(255,Math.max(0,g));\n      out.data[oi+2]=Math.min(255,Math.max(0,b)); out.data[oi+3]=255;\n    }\n    ctx.putImageData(out,0,0);\n  }\n</script>' }
      ],
      cheatSheet: [
        { label: 'Convolution', value: 'Pixel blending with kernel matrix' },
        { label: 'Box blur', value: '[[1/9,1/9,1/9],[1/9,1/9,1/9],[1/9,1/9,1/9]]' },
        { label: 'Sharpen', value: '[[0,-1,0],[-1,5,-1],[0,-1,0]]' },
        { label: 'Edge detect', value: '[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]' },
        { label: 'CSS filter', value: 'ctx.filter = "grayscale(1) sepia(0.5)"' },
        { label: 'Reset filter', value: 'ctx.filter = "none"' }
      ]
    },,

    {
      id: 'canvas-21',
      number: 21,
      partLabel: 'Part 3: Animation',
      title: 'requestAnimationFrame',
      subtitle: 'Animation loop fundamentals',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-20'],
      learningObjectives: [
        'Implement smooth animation using requestAnimationFrame',
        'Understand frame rate independence and timing',
        'Create a reusable animation loop pattern',
        'Control animation start, stop, and pause'
      ],
      sections: [
        {
          id: 's1',
          title: 'The requestAnimationFrame Loop',
          whyItMatters: 'requestAnimationFrame is the foundation of all canvas animation. Unlike setInterval, it syncs with the display refresh rate for smooth, power-efficient animation.',
          content: "## Why requestAnimationFrame?\n\n`requestAnimationFrame(callback)` tells the browser to call your function before the next paint:\n\n```javascript\nfunction animate(timestamp) {\n  // Update game state\n  // Draw frame\n  \n  requestAnimationFrame(animate);  // Schedule next frame\n}\n\nrequestAnimationFrame(animate);  // Start the loop\n```\n\n### Advantages over setInterval/setTimeout\n\n1. **Syncs with vsync**: No tearing or jank\n2. **Pauses when tab is hidden**: Saves battery/CPU\n3. **Provides timestamp**: High-resolution time for smooth animation\n4. **Batches calls**: Multiple rAF callbacks are batched in one frame\n\n### Basic Animation: Moving Box\n\n```javascript\nconst box = { x: 0, y: 100, speed: 200 }; // pixels per second\nlet lastTime = 0;\n\nfunction animate(timestamp) {\n  if (lastTime > 0) {\n    const dt = (timestamp - lastTime) / 1000; // seconds\n    box.x += box.speed * dt;\n    \n    if (box.x > canvas.width) box.x = -50;\n    \n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = '#E91E63';\n    ctx.fillRect(box.x, box.y, 50, 50);\n  }\n  \n  lastTime = timestamp;\n  requestAnimationFrame(animate);\n}\n\nrequestAnimationFrame(animate);\n```\n\n### Animation Control\n\n```javascript\nlet animationId = null;\nlet isRunning = false;\n\nfunction start() {\n  if (isRunning) return;\n  isRunning = true;\n  lastTime = 0;\n  animate(0);\n}\n\nfunction stop() {\n  if (animationId) {\n    cancelAnimationFrame(animationId);\n    animationId = null;\n    isRunning = false;\n  }\n}\n\nfunction animate(timestamp) {\n  if (!isRunning) return;\n  // ... update and draw ...\n  animationId = requestAnimationFrame(animate);\n}\n```"
        },
        {
          id: 's2',
          title: 'Frame Rate Independence',
          whyItMatters: 'Different monitors run at different refresh rates (60Hz, 120Hz, 144Hz). Frame-independent movement ensures the same speed on all displays.',
          content: "## Delta Time (dt)\n\nThe key to frame rate independence is multiplying speeds by the time elapsed since the last frame:\n\n```javascript\nfunction animate(timestamp) {\n  const dt = lastTime ? (timestamp - lastTime) / 1000 : 0;\n  lastTime = timestamp;\n  \n  // Frame-independent movement\n  player.x += player.speed * dt;  // pixels/second * seconds = pixels\n  \n  // Works the same at 60fps, 120fps, or 30fps\n  requestAnimationFrame(animate);\n}\n```\n\n### Why It Matters\n\n```javascript\n// WRONG: Frame-dependent (runs faster at higher fps)\nplayer.x += 5;  // Moves 5px per frame\n\n// RIGHT: Frame-independent\nplayer.x += 300 * dt;  // Moves 300px per second regardless of frame rate\n```\n\n### Fixed Timestep Alternative\n\nFor physics simulations, use a fixed timestep:\n\n```javascript\nconst FIXED_DT = 1 / 60;  // 60 updates per second\nlet accumulator = 0;\n\nfunction animate(timestamp) {\n  const dt = lastTime ? (timestamp - lastTime) / 1000 : 0;\n  lastTime = timestamp;\n  \n  accumulator += dt;\n  \n  while (accumulator >= FIXED_DT) {\n    updatePhysics();  // Always runs at 60Hz\n    accumulator -= FIXED_DT;\n  }\n  \n  render();\n  requestAnimationFrame(animate);\n}\n```\n\n### FPS Counter\n\n```javascript\nlet frameCount = 0;\nlet fpsTime = 0;\nlet fps = 0;\n\nfunction animate(timestamp) {\n  frameCount++;\n  if (timestamp - fpsTime >= 1000) {\n    fps = frameCount;\n    frameCount = 0;\n    fpsTime = timestamp;\n  }\n  \n  ctx.fillStyle = '#333';\n  ctx.font = '14px monospace';\n  ctx.fillText(`FPS: ${fps}`, 10, 20);\n  \n  requestAnimationFrame(animate);\n}\n```"
        },
        {
          id: 's3',
          title: 'Animation Patterns and Best Practices',
          whyItMatters: 'Well-structured animation code is maintainable, performant, and bug-free.',
          content: "## Animation Loop Architecture\n\n### Update-Render Separation\n\n```javascript\nclass GameLoop {\n  constructor() {\n    this.lastTime = 0;\n    this.animId = null;\n    this.objects = [];\n  }\n  \n  start() {\n    this.lastTime = performance.now();\n    this.tick(this.lastTime);\n  }\n  \n  stop() {\n    cancelAnimationFrame(this.animId);\n  }\n  \n  tick = (now) => {\n    const dt = (now - this.lastTime) / 1000;\n    this.lastTime = now;\n    \n    this.update(dt);\n    this.render();\n    \n    this.animId = requestAnimationFrame(this.tick);\n  }\n  \n  update(dt) {\n    this.objects.forEach(obj => obj.update(dt));\n  }\n  \n  render() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    this.objects.forEach(obj => obj.draw(ctx));\n  }\n}\n```\n\n### Clear Strategies\n\n```javascript\n// Strategy 1: Clear entire canvas (simple, fine for most cases)\nctx.clearRect(0, 0, canvas.width, canvas.height);\n\n// Strategy 2: Clear only changed regions (optimization)\nctx.clearRect(dirtyX, dirtyY, dirtyW, dirtyH);\n\n// Strategy 3: Fill with background color (for trails)\nctx.fillStyle = 'rgba(255, 255, 255, 0.1)';\nctx.fillRect(0, 0, canvas.width, canvas.height);\n```\n\n### Performance Profiling\n\n```javascript\nfunction animate(timestamp) {\n  const start = performance.now();\n  \n  // Update and render...\n  \n  const elapsed = performance.now() - start;\n  if (elapsed > 16) { // More than 16ms = below 60fps\n    console.warn(`Frame took ${elapsed.toFixed(1)}ms`);\n  }\n  \n  requestAnimationFrame(animate);\n}\n```\n\n### requestAnimationFrame vs setTimeout\n\nPrefer rAF for all visual updates. Use setTimeout only for non-visual timing (network requests, save intervals).\n\nMastering requestAnimationFrame is the gateway to all canvas animation. Combined with delta time, you can create smooth, professional animations that work on any device."
        }
      ],
      quiz: {
        questions: [
          { id: 'cv21-q1', type: 'mcq', question: 'What does requestAnimationFrame return?', options: ['An animation ID (integer) for cancellation', 'A Promise', 'The current timestamp', 'A boolean'], correctAnswer: 0, explanation: 'requestAnimationFrame returns an ID that you pass to cancelAnimationFrame() to stop the animation.', difficulty: 1 },
          { id: 'cv21-q2', type: 'true-false', question: 'requestAnimationFrame pauses automatically when the browser tab is hidden.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Browsers pause rAF callbacks in hidden tabs to save battery and CPU.', difficulty: 1 },
          { id: 'cv21-q3', type: 'mcq', question: 'How do you cancel a requestAnimationFrame loop?', options: ['cancelAnimationFrame(id)', 'stopAnimation(id)', 'clearAnimation(id)', 'removeAnimation(id)'], correctAnswer: 0, explanation: 'Pass the ID returned by requestAnimationFrame to cancelAnimationFrame().', difficulty: 1 },
          { id: 'cv21-q4', type: 'mcq', question: 'What does the timestamp parameter represent?', options: ['A high-resolution time in milliseconds', 'The frame number', 'The elapsed time since last frame', 'The current date'], correctAnswer: 0, explanation: 'The timestamp is a DOMHighResTimeStamp indicating when the callback was queued.', difficulty: 1 },
          { id: 'cv21-q5', type: 'true-false', question: 'Frame-independent movement uses delta time (dt) to ensure consistent speed across different refresh rates.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Multiply speed by dt (seconds) to get frame-independent movement in pixels per second.', difficulty: 2 },
          { id: 'cv21-q6', type: 'mcq', question: 'What is the benefit of the update-render separation pattern?', options: ['Cleaner code and the ability to run physics at a fixed rate', 'Faster rendering', 'Smaller file size', 'Automatic parallelization'], correctAnswer: 0, explanation: 'Separating update and render lets you run physics at a fixed timestep while rendering at display refresh rate.', difficulty: 2 },
          { id: 'cv21-q7', type: 'true-false', question: 'setInterval is better than requestAnimationFrame for canvas animations because it is more reliable.', options: ['True', 'False'], correctAnswer: 1, explanation: 'rAF is superior for canvas animations because it syncs with vsync, pauses in background, and provides timestamps.', difficulty: 1 },
          { id: 'cv21-q8', type: 'mcq', question: 'What does a fixed timestep physics loop prevent?', options: ['Physics inconsistencies from variable frame rates', 'Memory leaks', 'Canvas flickering', 'Input lag'], correctAnswer: 0, explanation: 'Fixed timestep ensures physics behaves identically regardless of frame rate fluctuations.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv21-e1', type: 'easy', title: 'Bouncing Ball', instructions: 'Create a red ball that bounces off the walls of the canvas. Use requestAnimationFrame and delta time for smooth, frame-independent movement.', hint: 'Track x, y, vx, vy. Reverse velocity when hitting edges. Use dt for movement.', starterCode: '<canvas id="bounce" width="400" height="300"></canvas>\n<script>\n  // Your bouncing ball\n</script>', solution: '<canvas id="bounce" width="400" height="300"></canvas>\n<script>\n  const canvas = document.getElementById("bounce");\n  const ctx = canvas.getContext("2d");\n  const ball = { x: 200, y: 150, vx: 200, vy: 150, r: 15 };\n  let last = 0;\n  function draw(ts) {\n    const dt = last ? (ts-last)/1000 : 0; last = ts;\n    ball.x += ball.vx * dt; ball.y += ball.vy * dt;\n    if(ball.x+ball.r>400||ball.x-ball.r<0) ball.vx*=-1;\n    if(ball.y+ball.r>300||ball.y-ball.r<0) ball.vy*=-1;\n    ctx.clearRect(0,0,400,300);\n    ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,7);\n    ctx.fillStyle = "#E91E63"; ctx.fill();\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv21-e2', type: 'medium', title: 'FPS Display and Animation Control', instructions: 'Create an animation with moving shapes and a real-time FPS counter. Add Start/Stop buttons to control the animation loop.', hint: 'Count frames per second by tracking frameCount and elapsed time. Use cancelAnimationFrame for stop.', starterCode: '<canvas id="fpsDemo" width="500" height="300"></canvas>\n<button id="startBtn">Start</button>\n<button id="stopBtn">Stop</button>\n<script>\n  // Your FPS demo\n</script>', solution: '<canvas id="fpsDemo" width="500" height="300"></canvas>\n<button id="startBtn">Start</button>\n<button id="stopBtn">Stop</button>\n<script>\n  const canvas = document.getElementById("fpsDemo");\n  const ctx = canvas.getContext("2d");\n  let animId = null, x = 0, last = 0, frames = 0, fpsTime = 0, fps = 0;\n  function draw(ts) {\n    const dt = last ? (ts-last)/1000 : 0; last = ts;\n    frames++;\n    if(ts - fpsTime >= 1000) { fps = frames; frames = 0; fpsTime = ts; }\n    x += 200 * dt; if(x > 500) x = -50;\n    ctx.fillStyle = "#f0f0f0\"; ctx.fillRect(0,0,500,300);\n    ctx.fillStyle = "#2196F3\"; ctx.fillRect(x, 120, 60, 60);\n    ctx.fillStyle = "#333\"; ctx.font = "16px monospace\"; ctx.fillText(\"FPS: \"+fps, 10, 25);\n    animId = requestAnimationFrame(draw);\n  }\n  document.getElementById(\"startBtn\").onclick = () => { if(!animId) { last=0; animId=requestAnimationFrame(draw); }};\n  document.getElementById(\"stopBtn\").onclick = () => { cancelAnimationFrame(animId); animId=null; };\n</script>' },
        { id: 'cv21-e3', type: 'hard', title: 'Fixed Timestep Physics Engine', instructions: 'Build a physics engine with a fixed timestep (60Hz). Simulate a ball with gravity and bouncing. The fixed timestep ensures consistent simulation regardless of display refresh rate.', hint: 'Use the accumulator pattern: accumulate dt, consume in FIXED_DT steps, update physics, then render.', starterCode: '<canvas id="fixedPhysics" width="400" height="400"></canvas>\n<script>\n  // Fixed timestep physics\n</script>', solution: '<canvas id="fixedPhysics" width="400" height="400"></canvas>\n<script>\n  const canvas = document.getElementById(\"fixedPhysics\");\n  const ctx = canvas.getContext(\"2d\");\n  const ball = { x: 200, y: 50, vy: 0, r: 15 };\n  const GRAVITY = 500, DAMPING = 0.8, FIXED = 1/60;\n  let last = 0, accum = 0;\n  function draw(ts) {\n    const dt = last ? (ts-last)/1000 : 0; last = ts;\n    accum += dt;\n    while(accum >= FIXED) {\n      ball.vy += GRAVITY * FIXED;\n      ball.y += ball.vy * FIXED;\n      if(ball.y + ball.r > 400) { ball.y = 400 - ball.r; ball.vy *= -DAMPING; }\n      accum -= FIXED;\n    }\n    ctx.fillStyle = "#f0f0f0\"; ctx.fillRect(0,0,400,400);\n    ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, 7);\n    ctx.fillStyle = \"#4CAF50\"; ctx.fill();\n    ctx.fillStyle = \"#333\"; ctx.font = \"12px monospace\";\n    ctx.fillText(\"Fixed 60Hz physics, render at display rate\", 10, 20);\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Start loop', value: 'requestAnimationFrame(callback)' },
        { label: 'Stop loop', value: 'cancelAnimationFrame(id)' },
        { label: 'Delta time', value: 'dt = (now - last) / 1000' },
        { label: 'Frame-independent', value: 'position += speed * dt' },
        { label: 'Fixed timestep', value: 'Accumulate dt, consume in fixed steps' },
        { label: 'FPS counter', value: 'Count frames per second' }
      ]
    },,

    {
      id: 'canvas-22',
      number: 22,
      partLabel: 'Part 3: Animation',
      title: 'Animation Loops',
      subtitle: 'Game loop architecture and updating state',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-21'],
      learningObjectives: [
        'Design a robust game loop architecture',
        'Separate update and render concerns',
        'Manage game state transitions',
        'Implement object lifecycle management'
      ],
      sections: [
        {
          id: 's1',
          title: 'Game Loop Architecture',
          whyItMatters: 'A well-designed game loop is the backbone of any interactive canvas application. It separates concerns and makes code maintainable.',
          content: "## The Three-Phase Loop\n\nA proper game loop has three distinct phases:\n\n```javascript\nclass GameEngine {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    this.lastTime = 0;\n    this.entities = [];\n    this.paused = false;\n  }\n  \n  start() {\n    this.lastTime = performance.now();\n    this.loop(this.lastTime);\n  }\n  \n  loop = (now) => {\n    const dt = (now - this.lastTime) / 1000;\n    this.lastTime = now;\n    \n    if (!this.paused) {\n      this.processInput();\n      this.update(dt);\n      this.render();\n    }\n    \n    requestAnimationFrame(this.loop);\n  }\n  \n  processInput() {\n    // Handle keyboard/mouse/touch state\n  }\n  \n  update(dt) {\n    this.entities.forEach(e => e.update(dt));\n    this.collisions();\n    this.cleanup();\n  }\n  \n  render() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.entities.forEach(e => e.draw(this.ctx));\n  }\n  \n  collisions() {\n    // Check and resolve collisions\n  }\n  \n  cleanup() {\n    // Remove dead entities\n    this.entities = this.entities.filter(e => e.alive);\n  }\n}\n```\n\n### Entity Component Pattern\n\n```javascript\nclass Entity {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.alive = true;\n    this.components = [];\n  }\n  \n  addComponent(component) {\n    this.components.push(component);\n    component.owner = this;\n  }\n  \n  update(dt) {\n    this.components.forEach(c => c.update(dt));\n  }\n  \n  draw(ctx) {\n    this.components.forEach(c => c.draw(ctx));\n  }\n}\n\nclass SpriteComponent {\n  constructor(color, w, h) {\n    this.color = color;\n    this.w = w;\n    this.h = h;\n  }\n  \n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.owner.x, this.owner.y, this.w, this.h);\n  }\n}\n```\n\n### Scene Management\n\n```javascript\nclass Scene {\n  constructor() { this.entities = []; }\n  enter() {}\n  exit() {}\n  update(dt) { this.entities.forEach(e => e.update(dt)); }\n  draw(ctx) { this.entities.forEach(e => e.draw(ctx)); }\n}\n\nclass Game {\n  constructor() {\n    this.scenes = {};\n    this.currentScene = null;\n  }\n  \n  addScene(name, scene) {\n    this.scenes[name] = scene;\n  }\n  \n  switchTo(name) {\n    if (this.currentScene) this.currentScene.exit();\n    this.currentScene = this.scenes[name];\n    this.currentScene.enter();\n  }\n}\n```"
        },
        {
          id: 's2',
          title: 'State Management and Object Pools',
          whyItMatters: 'Efficient state management and object reuse are critical for maintaining high frame rates in complex scenes.',
          content: "## Object Pooling\n\nCreating and destroying objects causes garbage collection pauses. Object pools reuse objects:\n\n```javascript\nclass ObjectPool {\n  constructor(factory, initialSize = 50) {\n    this.factory = factory;\n    this.available = [];\n    this.active = [];\n    \n    for (let i = 0; i < initialSize; i++) {\n      this.available.push(factory());\n    }\n  }\n  \n  acquire() {\n    let obj = this.available.pop();\n    if (!obj) {\n      obj = this.factory(); // Pool exhausted, create new\n    }\n    this.active.push(obj);\n    return obj;\n  }\n  \n  release(obj) {\n    obj.reset();\n    const idx = this.active.indexOf(obj);\n    if (idx !== -1) {\n      this.active.splice(idx, 1);\n      this.available.push(obj);\n    }\n  }\n  \n  updateAll(dt) {\n    this.active.forEach(obj => obj.update(dt));\n  }\n  \n  drawAll(ctx) {\n    this.active.forEach(obj => obj.draw(ctx));\n  }\n}\n\n// Usage\nconst bulletPool = new ObjectPool(() => new Bullet(), 100);\n\nfunction shoot(x, y, angle) {\n  const bullet = bulletPool.acquire();\n  bullet.init(x, y, angle);\n}\n\nfunction update(dt) {\n  bulletPool.updateAll(dt);\n  // Release bullets that went off-screen\n  bulletPool.active.forEach(b => {\n    if (b.isOffScreen()) bulletPool.release(b);\n  });\n}\n```\n\n### Game State Machine\n\n```javascript\nconst GameState = {\n  MENU: 'menu',\n  PLAYING: 'playing',\n  PAUSED: 'paused',\n  GAME_OVER: 'gameOver'\n};\n\nclass Game {\n  constructor() {\n    this.state = GameState.MENU;\n  }\n  \n  setState(newState) {\n    this.onExit(this.state);\n    this.state = newState;\n    this.onEnter(newState);\n  }\n  \n  onEnter(state) {\n    switch(state) {\n      case GameState.PLAYING: this.reset(); break;\n      case GameState.MENU: this.showMenu(); break;\n    }\n  }\n  \n  update(dt) {\n    switch(this.state) {\n      case GameState.PLAYING: this.updateGame(dt); break;\n      case GameState.MENU: this.updateMenu(dt); break;\n    }\n  }\n}\n```\n\n### Profiling and Optimization\n\n```javascript\n// Measure update time per frame\nlet updateTime = 0, renderTime = 0;\n\nfunction loop(now) {\n  let t0 = performance.now();\n  update(dt);\n  let t1 = performance.now();\n  render();\n  let t2 = performance.now();\n  \n  updateTime = t1 - t0;\n  renderTime = t2 - t1;\n  \n  // Display metrics\n  ctx.fillText(`Update: ${updateTime.toFixed(2)}ms`, 10, 40);\n  ctx.fillText(`Render: ${renderTime.toFixed(2)}ms`, 10, 60);\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv22-q1', type: 'mcq', question: 'What are the three phases of a game loop?', options: ['ProcessInput, Update, Render', 'Start, Update, Draw', 'Init, Loop, Exit', 'Load, Physics, Paint'], correctAnswer: 0, explanation: 'The standard game loop processes input, updates state, then renders the frame.', difficulty: 1 },
          { id: 'cv22-q2', type: 'true-false', question: 'Object pooling helps prevent garbage collection pauses during gameplay.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Reusing objects from a pool avoids creating new objects (and triggering GC) each frame.', difficulty: 2 },
          { id: 'cv22-q3', type: 'mcq', question: 'What does the entity component pattern provide?', options: ['Reusable behaviors that can be mixed into entities', 'Faster rendering', 'Smaller memory footprint', 'Automatic collision detection'], correctAnswer: 0, explanation: 'Components encapsulate behavior (rendering, physics, input) that can be composed onto entities.', difficulty: 2 },
          { id: 'cv22-q4', type: 'true-false', question: 'Scene management allows switching between different game screens (menu, game, game over).', options: ['True', 'False'], correctAnswer: 0, explanation: 'Scenes group entities and logic for distinct screens and manage transitions.', difficulty: 1 },
          { id: 'cv22-q5', type: 'mcq', question: 'Why separate update and render?', options: ['To allow fixed-timestep physics while rendering at display rate', 'To make code longer', 'To support multi-threading', 'To reduce memory usage'], correctAnswer: 0, explanation: 'Separation lets you run physics at a fixed rate while rendering at the monitor refresh rate.', difficulty: 2 },
          { id: 'cv22-q6', type: 'true-false', question: 'A game state machine should handle enter and exit actions for each state.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Enter/exit callbacks initialize and clean up resources when switching states.', difficulty: 1 },
          { id: 'cv22-q7', type: 'mcq', question: 'What is the purpose of the cleanup phase in a game loop?', options: ['Remove dead entities and free resources', 'Clear the canvas', 'Reset input states', 'Save game data'], correctAnswer: 0, explanation: 'Cleanup removes entities marked as dead (bullets off-screen, destroyed enemies) from the active list.', difficulty: 1 },
          { id: 'cv22-q8', type: 'true-false', question: 'Measuring update vs render time separately helps identify performance bottlenecks.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Separate timing shows whether the bottleneck is in logic/physics or drawing.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv22-e1', type: 'easy', title: 'Simple Scene Manager', instructions: 'Create two scenes: Menu and Game. Draw "MENU" in the menu scene and "GAME" in the game scene. Add a button/key to switch between them.', hint: 'Use a state variable. On key press, toggle between scenes. Each scene draws different content.', starterCode: '<canvas id="scenes" width="400" height="300"></canvas>\n<p>Press Space to toggle scenes</p>\n<script>\n  // Your scene manager\n</script>', solution: '<canvas id="scenes" width="400" height="300"></canvas>\n<p>Press Space to toggle scenes</p>\n<script>\n  const canvas = document.getElementById(\"scenes\");\n  const ctx = canvas.getContext(\"2d\");\n  let scene = \"menu\";\n  document.addEventListener(\"keydown\", (e) => {\n    if(e.code === \"Space\") scene = scene === \"menu\" ? \"game\" : \"menu\";\n  });\n  function draw() {\n    ctx.fillStyle = scene === \"menu\" ? \"#2196F3\" : \"#4CAF50\";\n    ctx.fillRect(0, 0, 400, 300);\n    ctx.fillStyle = \"#fff\";\n    ctx.font = \"bold 48px Arial\";\n    ctx.textAlign = \"center\";\n    ctx.textBaseline = \"middle\";\n    ctx.fillText(scene === \"menu\" ? \"MENU\" : \"GAME\", 200, 150);\n    requestAnimationFrame(draw);\n  }\n  draw();\n</script>' },
        { id: 'cv22-e2', type: 'medium', title: 'Bullet Pooling System', instructions: 'Create an object pool for bullets. Click to fire bullets from the center in random directions. Bullets should be reused when they go off-screen.', hint: 'Implement the ObjectPool class. Each bullet has x, y, vx, vy, and an active flag. Release when off-screen.', starterCode: '<canvas id="bullets" width="500" height="400"></canvas>\n<script>\n  // Your bullet pooling system\n</script>', solution: '<canvas id="bullets" width="500" height="400"></canvas>\n<script>\n  const canvas = document.getElementById(\"bullets\");\n  const ctx = canvas.getContext(\"2d\");\n  class Bullet { constructor() { this.x=0; this.y=0; this.vx=0; this.vy=0; this.active=false; }\n    init(x,y,angle) { this.x=x;this.y=y;this.vx=Math.cos(angle)*300;this.vy=Math.sin(angle)*300;this.active=true; }\n    update(dt) { if(!this.active) return; this.x+=this.vx*dt; this.y+=this.vy*dt; if(this.x<0||this.x>500||this.y<0||this.y>400) this.active=false; }\n    draw() { if(!this.active) return; ctx.fillStyle=\"#FFC107\"; ctx.beginPath(); ctx.arc(this.x,this.y,4,0,7); ctx.fill(); }\n  }\n  const pool = [];\n  for(let i=0;i<50;i++) pool.push(new Bullet());\n  canvas.addEventListener(\"click\", () => {\n    const b = pool.find(b => !b.active);\n    if(b) b.init(250, 200, Math.random()*7);\n  });\n  let last = 0;\n  function draw(ts) {\n    const dt = last ? (ts-last)/1000 : 0; last=ts;\n    ctx.fillStyle=\"rgba(10,10,46,0.2)\"; ctx.fillRect(0,0,500,400);\n    pool.forEach(b => b.update(dt));\n    pool.forEach(b => b.draw());\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv22-e3', type: 'hard', title: 'Full Game Loop with Profiling', instructions: 'Build a complete game loop with update/render separation, scene management, and a real-time profiler showing update time, render time, and FPS.', hint: 'Use performance.now() before/after update and render. Display times in the corner.', starterCode: '<canvas id=\"profiler\" width=\"600\" height=\"400\"></canvas>\n<script>\n  // Your profiled game loop\n</script>', solution: '<canvas id=\"profiler\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas = document.getElementById(\"profiler\");\n  const ctx = canvas.getContext(\"2d\");\n  class Game {\n    constructor() {\n      this.entities = [];\n      for(let i=0;i<100;i++) this.entities.push({x:Math.random()*600,y:Math.random()*400,vx:(Math.random()-0.5)*100,vy:(Math.random()-0.5)*100});\n      this.last=0; this.frames=0; this.fpsTime=0; this.fps=0;\n    }\n    update(dt) { this.entities.forEach(e=>{e.x+=e.vx*dt;e.y+=e.vy*dt;if(e.x<0||e.x>600)e.vx*=-1;if(e.y<0||e.y>400)e.vy*=-1;}); }\n    draw() {\n      ctx.fillStyle=\"#f0f0f0\"; ctx.fillRect(0,0,600,400);\n      this.entities.forEach(e=>{ctx.fillStyle=\"#2196F3\"; ctx.fillRect(e.x-3,e.y-3,6,6);});\n    }\n  }\n  const game = new Game();\n  function loop(ts) {\n    const dt = game.last ? (ts-game.last)/1000 : 0; game.last=ts;\n    game.frames++;\n    if(ts-game.fpsTime>=1000){game.fps=game.frames;game.frames=0;game.fpsTime=ts;}\n    let t0=performance.now(); game.update(dt); let t1=performance.now();\n    game.draw(); let t2=performance.now();\n    ctx.fillStyle=\"#333\"; ctx.font=\"14px monospace\"; ctx.textAlign=\"left\";\n    ctx.fillText(`FPS: ${game.fps} | Update: ${(t1-t0).toFixed(2)}ms | Render: ${(t2-t1).toFixed(2)}ms`, 10, 20);\n    requestAnimationFrame(loop);\n  }\n  requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Game loop', value: 'Input → Update → Render' },
        { label: 'Entity component', value: 'Composable behaviors on entities' },
        { label: 'Scene manager', value: 'Switch between menu/game/over' },
        { label: 'Object pool', value: 'Reuse objects to avoid GC' },
        { label: 'State machine', value: 'Track game state with enter/exit' },
        { label: 'Profiling', value: 'Measure update vs render time' }
      ]
    },,

    {
      id: 'canvas-23',
      number: 23,
      partLabel: 'Part 3: Animation',
      title: 'Delta Time',
      subtitle: 'Frame-independent movement',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-22'],
      learningObjectives: [
        'Calculate delta time accurately between frames',
        'Implement frame-independent movement and physics',
        'Handle frame rate spikes and large delta times',
        'Debug and visualize delta time values'
      ],
      sections: [
        {
          id: 's1',
          title: 'Delta Time Fundamentals',
          whyItMatters: 'Delta time is the single most important concept for smooth animation. Without it, your game runs at different speeds on different devices.',
          content: "## What Is Delta Time?\n\nDelta time (dt) is the time elapsed since the last frame, measured in seconds:\n\n```javascript\nlet lastTime = 0;\n\nfunction animate(timestamp) {\n  const dt = (timestamp - lastTime) / 1000; // Convert ms to seconds\n  lastTime = timestamp;\n  \n  // dt is typically ~0.016 at 60fps, ~0.008 at 120fps\n}\n```\n\n### The Golden Rule of dt\n\nAlways multiply speeds and rates by dt:\n\n```javascript\n// Correct: Frame-independent\nplayer.x += PLAYER_SPEED * dt;  // 300 px/s * dt seconds = pixels\nplayer.rotation += ROTATION_SPEED * dt;  // 2 rad/s * dt\ncooldown -= dt;  // Countdown in seconds\n\n// Wrong: Frame-dependent (different speed on different monitors)\nplayer.x += 5;  // Moves 5px per frame regardless of frame rate\n```\n\n### Handling Large Deltas\n\nWhen the tab is backgrounded and returns, dt can be very large (seconds). Cap it:\n\n```javascript\nlet dt = (timestamp - lastTime) / 1000;\nif (dt > 0.1) dt = 0.016; // Cap at ~60fps equivalent\n// Or: dt = Math.min(dt, 0.05); // Cap at 50ms\n\n// Alternative: fixed timestep\nconst FIXED_DT = 1 / 60;\nlet accumulator = Math.min(accumulator + dt, 0.2); // Cap at 200ms to prevent spiral of death\nwhile (accumulator >= FIXED_DT) {\n  updatePhysics(FIXED_DT);\n  accumulator -= FIXED_DT;\n}\n```\n\n### Debugging dt\n\n```javascript\n// Draw dt graph\nconst dtHistory = [];\nfunction trackDt(dt) {\n  dtHistory.push(dt);\n  if (dtHistory.length > 100) dtHistory.shift();\n  \n  // Draw as bar graph\n  dtHistory.forEach((d, i) => {\n    const barHeight = Math.min(50, d * 1000 * 3); // Scale for visibility\n    ctx.fillStyle = barHeight > 30 ? '#E91E63' : '#4CAF50';\n    ctx.fillRect(i * 3, 50 - barHeight, 2, barHeight);\n  });\n  \n  ctx.fillStyle = '#333';\n  ctx.fillText(`dt: ${(dt * 1000).toFixed(2)}ms`, 10, 20);\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv23-q1', type: 'mcq', question: 'What units should delta time be expressed in?', options: ['Seconds', 'Milliseconds', 'Frames', 'Microseconds'], correctAnswer: 0, explanation: 'Express dt in seconds so that speeds in pixels/second multiply cleanly.', difficulty: 1 },
          { id: 'cv23-q2', type: 'true-false', question: 'Without delta time, a game runs faster on a 144Hz monitor than on a 60Hz monitor.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Frame-dependent updates execute more times per second on higher refresh rates.', difficulty: 1 },
          { id: 'cv23-q3', type: 'mcq', question: 'Why should you cap delta time?', options: ['To prevent physics explosions when returning from background', 'To increase frame rate', 'To reduce memory usage', 'To simplify code'], correctAnswer: 0, explanation: 'After tab switch, dt can be very large, causing objects to move impossibly far in one frame.', difficulty: 2 },
          { id: 'cv23-q4', type: 'true-false', question: 'Delta time is always exactly 16.67ms at 60fps.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Frame times vary due to rendering complexity, system load, and vsync timing.', difficulty: 1 },
          { id: 'cv23-q5', type: 'mcq', question: 'Which approach is more robust for physics simulations?', options: ['Fixed timestep with accumulator', 'Variable dt passed to physics', 'Frame-based updates', 'setInterval with fixed delay'], correctAnswer: 0, explanation: 'Fixed timestep ensures deterministic physics regardless of frame rate variance.', difficulty: 2 },
          { id: 'cv23-q6', type: 'true-false', question: 'A dt graph helps identify frame rate stuttering.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Visualizing dt over time reveals frame time spikes that indicate performance issues.', difficulty: 1 },
          { id: 'cv23-q7', type: 'mcq', question: 'How do you convert milliseconds to seconds for dt?', options: ['Divide by 1000', 'Multiply by 1000', 'Divide by 60', 'Subtract 1000'], correctAnswer: 0, explanation: 'timestamp is in milliseconds. Divide by 1000 to get seconds.', difficulty: 1 },
          { id: 'cv23-q8', type: 'true-false', question: 'The formula speed * dt works correctly for acceleration and deceleration.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Multiply any rate (velocity, acceleration, rotation) by dt for frame-independent behavior.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv23-e1', type: 'easy', title: 'Speed Comparison Demo', instructions: 'Create two identical moving boxes. One uses frame-dependent movement (adds constant pixels per frame), the other uses frame-independent movement (multiplies speed by dt). Show how they behave differently at simulated different frame rates.', hint: 'Use setInterval to simulate 30fps for one box and requestAnimationFrame for the other.', starterCode: '<canvas id="speedComp" width="500" height="200"></canvas>\n<script>\n  // Your speed comparison\n</script>', solution: '<canvas id="speedComp" width="500" height="200"></canvas>\n<script>\n  const canvas = document.getElementById(\"speedComp\");\n  const ctx = canvas.getContext(\"2d\");\n  let fdBox = {x:0}, fidBox = {x:0}, last=0;\n  function draw(ts) {\n    const dt = last ? (ts-last)/1000 : 0; last=ts;\n    fdBox.x += 5; // Frame-dependent\n    fidBox.x += 300 * dt; // Frame-independent\n    if(fdBox.x>500) fdBox.x=0;\n    if(fidBox.x>500) fidBox.x=0;\n    ctx.fillStyle = \"#f0f0f0\"; ctx.fillRect(0,0,500,200);\n    ctx.fillStyle = \"#E91E63\"; ctx.fillRect(fdBox.x, 30, 40, 40);\n    ctx.fillStyle = \"#2196F3\"; ctx.fillRect(fidBox.x, 120, 40, 40);\n    ctx.fillStyle = \"#333\"; ctx.font = \"12px Arial\";\n    ctx.fillText(\"Frame-dependent (red)\", 10, 25);\n    ctx.fillText(\"Frame-independent (blue)\", 10, 115);\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv23-e2', type: 'medium', title: 'DT Visualizer', instructions: 'Build a real-time delta time visualizer that shows a scrolling bar graph of frame times. Mark the 16.67ms (60fps) line. Color bars green when under 16ms and red when over.', hint: 'Store dt values in an array. Use requestAnimationFrame. Draw bars scaled to canvas height.', starterCode: '<canvas id=\"dtVis\" width=\"600\" height=\"200\"></canvas>\n<script>\n  // Your dt visualizer\n</script>', solution: '<canvas id=\"dtVis\" width=\"600\" height=\"200\"></canvas>\n<script>\n  const canvas = document.getElementById(\"dtVis\");\n  const ctx = canvas.getContext(\"2d\");\n  const history = [];\n  let last = 0;\n  function draw(ts) {\n    const dt = last ? (ts-last)/1000 : 0; last=ts;\n    history.push(dt);\n    if(history.length > 200) history.shift();\n    ctx.fillStyle = \"#fff\"; ctx.fillRect(0,0,600,200);\n    const maxMs = 50;\n    history.forEach((d, i) => {\n      const ms = d * 1000;\n      const h = (ms / maxMs) * 180;\n      ctx.fillStyle = ms > 16.67 ? \"#E91E63\" : \"#4CAF50\";\n      ctx.fillRect(i * 3, 195 - h, 2, h);\n    });\n    ctx.strokeStyle = \"#FFC107\"; ctx.lineWidth = 1;\n    ctx.beginPath(); ctx.moveTo(0, 195-180*16.67/maxMs); ctx.lineTo(600, 195-180*16.67/maxMs); ctx.stroke();\n    ctx.fillStyle = \"#333\"; ctx.font = \"12px monospace\";\n    ctx.fillText(`dt: ${(dt*1000).toFixed(2)}ms`, 10, 20);\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv23-e3', type: 'hard', title: 'Dt-Capped Physics Simulation', instructions: 'Build a physics simulation with multiple bouncing balls. Implement dt capping to prevent explosions when the tab is backgrounded. Add a button to simulate a large dt spike.', hint: 'Use Math.min(dt, 0.033) to cap at ~30fps equivalent. Track positions and detect if any ball teleports.', starterCode: '<canvas id=\"dtPhysics\" width=\"500\" height=\"400\"></canvas>\n<button id=\"spikeBtn\">Simulate Spike</button>\n<script>\n  // Your dt-capped physics\n</script>', solution: '<canvas id=\"dtPhysics\" width=\"500\" height=\"400\"></canvas>\n<button id=\"spikeBtn\">Simulate Spike</button>\n<script>\n  const canvas = document.getElementById(\"dtPhysics\");\n  const ctx = canvas.getContext(\"2d\");\n  const balls = [];\n  for(let i=0;i<10;i++) balls.push({x:Math.random()*500,y:Math.random()*200,vy:0,size:10+Math.random()*20,color:`hsl(${i*36},80%,55%)`});\n  let last = 0, artificialSpike = false;\n  document.getElementById(\"spikeBtn\").onclick = () => { artificialSpike = true; };\n  function draw(ts) {\n    let dt = last ? (ts-last)/1000 : 0; last=ts;\n    if(artificialSpike) { dt = 2; artificialSpike = false; }\n    const rawDt = dt;\n    dt = Math.min(dt, 0.033);\n    ctx.fillStyle = \"#f0f0f0\"; ctx.fillRect(0,0,500,400);\n    balls.forEach(b => {\n      b.vy += 500 * dt;\n      b.y += b.vy * dt;\n      if(b.y + b.size > 400) { b.y = 400 - b.size; b.vy *= -0.8; }\n      ctx.fillStyle = b.color;\n      ctx.beginPath(); ctx.arc(b.x, b.y, b.size, 0, 7); ctx.fill();\n    });\n    ctx.fillStyle = \"#333\"; ctx.font = \"14px monospace\";\n    ctx.fillText(`Raw dt: ${(rawDt*1000).toFixed(0)}ms | Capped dt: ${(dt*1000).toFixed(0)}ms`, 10, 20);\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Calculate dt', value: 'dt = (now - last) / 1000' },
        { label: 'Frame-independent', value: 'value += rate * dt' },
        { label: 'Cap dt', value: 'dt = Math.min(dt, 0.05)' },
        { label: 'Fixed timestep', value: 'Accumulator pattern with 1/60 step' },
        { label: 'Debug dt', value: 'Visualize dt as bar graph' }
      ]
    },,

    {
      id: 'canvas-24',
      number: 24,
      partLabel: 'Part 3: Animation',
      title: 'Smooth Motion Systems',
      subtitle: 'Easing, interpolation, and lerp',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-23'],
      learningObjectives: [
        'Implement linear interpolation (lerp) for smooth movement',
        'Apply easing functions for natural motion',
        'Create tweening systems for property animation',
        'Use smooth damping for camera following'
      ],
      sections: [
        {
          id: 's1',
          title: 'Linear Interpolation (Lerp)',
          whyItMatters: 'Lerp is the foundation of all smooth motion. It lets you move from A to B smoothly over time.',
          content: "## What Is Lerp?\n\nLinear interpolation finds a point between two values at a given progress t (0 to 1):\n\n```javascript\nfunction lerp(a, b, t) {\n  return a + (b - a) * t;\n}\n\n// Smoothly move toward target\nlet x = 0;\nconst target = 300;\n\nfunction update() {\n  x = lerp(x, target, 0.05); // Move 5% toward target each frame\n}\n\n// Vector lerp\nfunction lerpVec(a, b, t) {\n  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };\n}\n```\n\n### Smooth Damping (Exponential Easing)\n\n```javascript\n// The classic smooth follow pattern\nfunction smoothDamp(current, target, velocity, smoothTime, dt) {\n  const omega = 2 / smoothTime;\n  const x = omega * dt;\n  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);\n  const change = current - target;\n  const temp = (velocity + omega * change) * dt;\n  velocity = (velocity - omega * temp) * exp;\n  return { position: target + (change + temp) * exp, velocity };\n}\n\n// Camera follow\nlet camX = 0, camY = 0;\nlet camVX = 0, camVY = 0;\n\nfunction updateCamera(targetX, targetY, dt) {\n  const resultX = smoothDamp(camX, targetX, camVX, 0.3, dt);\n  const resultY = smoothDamp(camY, targetY, camVY, 0.3, dt);\n  camX = resultX.position;\n  camVX = resultX.velocity;\n  camY = resultY.position;\n  camVY = resultY.velocity;\n}\n```\n\n### Tweening (Property Animation)\n\n```javascript\nclass Tween {\n  constructor(target, property, to, duration) {\n    this.target = target;\n    this.property = property;\n    this.from = target[property];\n    this.to = to;\n    this.duration = duration;\n    this.elapsed = 0;\n    this.done = false;\n  }\n  \n  update(dt) {\n    if (this.done) return;\n    this.elapsed += dt;\n    const t = Math.min(this.elapsed / this.duration, 1);\n    this.target[this.property] = lerp(this.from, this.to, t);\n    if (t >= 1) this.done = true;\n  }\n}\n\n// Animate box position over 2 seconds\nconst box = { x: 0 };\nconst tween = new Tween(box, 'x', 300, 2);\n// Call tween.update(dt) each frame\n```"
        },
        {
          id: 's2',
          title: 'Easing Functions',
          whyItMatters: 'Easing makes motion feel natural by accelerating and decelerating like real physical objects.',
          content: "## Easing Functions\n\nEasing modifies linear t to create different motion curves:\n\n```javascript\n// Easing function type: function(t) => t\n// t goes from 0 to 1, returns eased value from 0 to 1\n\nconst Easing = {\n  linear: t => t,\n  \n  // Quadratic\n  easeIn: t => t * t,\n  easeOut: t => t * (2 - t),\n  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,\n  \n  // Cubic\n  easeInCubic: t => t * t * t,\n  easeOutCubic: t => (--t) * t * t + 1,\n  \n  // Quartic (more dramatic)\n  easeInQuart: t => t * t * t * t,\n  easeOutQuart: t => 1 - (--t) * t * t * t,\n  \n  // Elastic\n  easeOutElastic: t => {\n    const c4 = (2 * Math.PI) / 3;\n    return t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;\n  },\n  \n  // Bounce\n  easeOutBounce: t => {\n    const n1 = 7.5625, d1 = 2.75;\n    if (t < 1 / d1) return n1 * t * t;\n    else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;\n    else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;\n    else return n1 * (t -= 2.625 / d1) * t + 0.984375;\n  }\n};\n\n// Usage in tween\nfunction easeTween(target, prop, to, duration, easingFn, dt) {\n  if (!target.__tweens) target.__tweens = {};\n  if (!target.__tweens[prop]) {\n    target.__tweens[prop] = { from: target[prop], elapsed: 0 };\n  }\n  \n  const tween = target.__tweens[prop];\n  tween.elapsed += dt;\n  const t = Math.min(tween.elapsed / duration, 1);\n  const easedT = easingFn(t);\n  target[prop] = lerp(tween.from, to, easedT);\n  \n  if (t >= 1) delete target.__tweens[prop];\n}\n```\n\n### Visual Easing Curve Demo\n\n```javascript\nfunction drawEasingCurve(ctx, easingFn, x, y, w, h) {\n  ctx.beginPath();\n  ctx.moveTo(x, y + h);\n  for (let i = 0; i <= 100; i++) {\n    const t = i / 100;\n    const eased = easingFn(t);\n    ctx.lineTo(x + t * w, y + h - eased * h);\n  }\n  ctx.stroke();\n}\n```\n\n### Chaining Eased Animations\n\n```javascript\nasync function animateSequence(target) {\n  await tweenTo(target, 'x', 300, 1, Easing.easeOut);\n  await tweenTo(target, 'y', 200, 0.5, Easing.easeOutBounce);\n  await tweenTo(target, 'scale', 2, 0.3, Easing.easeInOut);\n}\n\nfunction tweenTo(target, prop, value, duration, easing) {\n  return new Promise(resolve => {\n    // Start tween, call resolve when done\n  });\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv24-q1', type: 'mcq', question: 'What does lerp(a, b, t) return when t=0.5?', options: ['The midpoint between a and b', 'a', 'b', 'The average of a and b multiplied by 2'], correctAnswer: 0, explanation: 'lerp returns a + (b-a)*t = a + (b-a)*0.5 = (a+b)/2, the midpoint.', difficulty: 1 },
          { id: 'cv24-q2', type: 'true-false', question: 'EaseOut makes motion start fast and slow down at the end.', options: ['True', 'False'], correctAnswer: 0, explanation: 'EaseOut decelerates toward the end, like a ball settling.', difficulty: 1 },
          { id: 'cv24-q3', type: 'mcq', question: 'Which easing function creates a bouncing effect?', options: ['easeOutBounce', 'easeInQuad', 'linear', 'easeInOutCubic'], correctAnswer: 0, explanation: 'easeOutBounce simulates a ball bouncing to a stop.', difficulty: 2 },
          { id: 'cv24-q4', type: 'true-false', question: 'Smooth damping is useful for camera follow behaviors.', options: ['True', 'False'], correctAnswer: 0, explanation: 'SmoothDamp creates smooth camera tracking with velocity-based inertia.', difficulty: 1 },
          { id: 'cv24-q5', type: 'mcq', question: 'What happens if you set lerp factor to 0.1 each frame?', options: ['Exponential ease toward target', 'Linear movement', 'Instant teleport', 'Oscillation'], correctAnswer: 0, explanation: 'Repeated lerps with a constant factor create exponential easing toward the target.', difficulty: 2 },
          { id: 'cv24-q6', type: 'true-false', question: 'Easing functions transform a linear progress t into a curved progress.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Easing remaps t from [0,1] to create acceleration/deceleration curves.', difficulty: 1 },
          { id: 'cv24-q7', type: 'mcq', question: 'Which is the correct formula for lerp?', options: ['a + (b - a) * t', 'a * t + b * (1 - t)', '(a + b) / t', 'a - b * t'], correctAnswer: 0, explanation: 'lerp = a + (b - a) * t. When t=0, result is a; when t=1, result is b.', difficulty: 1 },
          { id: 'cv24-q8', type: 'true-false', question: 'Elastic easing overshoots the target before settling.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Elastic easing oscillates past the target with diminishing amplitude before stopping.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [],
      cheatSheet: [
        { label: 'Lerp', value: 'a + (b - a) * t' },
        { label: 'Smooth damp', value: 'Exponential ease toward target with velocity' },
        { label: 'easeOut', value: 't * (2 - t) — fast start, slow end' },
        { label: 'easeInOut', value: 'Accelerate then decelerate' },
        { label: 'Elastic', value: 'Overshoots and bounces back' },
        { label: 'Bounce', value: 'Multi-segment parabolic bounce' }
      ]
    },,

    {
      id: 'canvas-25',
      number: 25,
      partLabel: 'Part 3: Animation',
      title: 'Collision Detection',
      subtitle: 'AABB, circle collision, and pixel-perfect',
      difficulty: 'Intermediate',
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ['canvas-24'],
      learningObjectives: [
        'Detect collisions using Axis-Aligned Bounding Box (AABB)',
        'Implement circle-circle and circle-rect collision',
        'Handle collision response (bounce, stop, slide)',
        'Understand pixel-perfect collision detection'
      ],
      sections: [
        {
          id: 's1',
          title: 'AABB Collision Detection',
          whyItMatters: 'AABB is the fastest and most common collision detection method, used in most 2D games for broad-phase detection.',
          content: "## Axis-Aligned Bounding Box\n\nAABB collision checks if two rectangles overlap:\n\n```javascript\nfunction aabbCollision(a, b) {\n  return (\n    a.x < b.x + b.w &&\n    a.x + a.w > b.x &&\n    a.y < b.y + b.h &&\n    a.y + a.h > b.y\n  );\n}\n\n// Rectangle vs rectangle\nconst player = { x: 100, y: 100, w: 50, h: 50 };\nconst wall = { x: 200, y: 150, w: 60, h: 100 };\n\nif (aabbCollision(player, wall)) {\n  console.log('Collision!');\n}\n```\n\n### Point in Rectangle\n\n```javascript\nfunction pointInRect(px, py, rect) {\n  return px >= rect.x && px <= rect.x + rect.w &&\n         py >= rect.y && py <= rect.y + rect.h;\n}\n```\n\n### Collision Response: Push Out\n\n```javascript\nfunction resolveAABB(player, obstacle) {\n  // Calculate overlap on each axis\n  const overlapLeft = (player.x + player.w) - obstacle.x;\n  const overlapRight = (obstacle.x + obstacle.w) - player.x;\n  const overlapTop = (player.y + player.h) - obstacle.y;\n  const overlapBottom = (obstacle.y + obstacle.h) - player.y;\n  \n  // Find smallest overlap\n  const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);\n  \n  // Push out in the direction of smallest overlap\n  if (minOverlap === overlapLeft) player.x = obstacle.x - player.w;\n  else if (minOverlap === overlapRight) player.x = obstacle.x + obstacle.w;\n  else if (minOverlap === overlapTop) player.y = obstacle.y - player.h;\n  else if (minOverlap === overlapBottom) player.y = obstacle.y + obstacle.h;\n}\n```\n\n### Spatial Grid for Optimization\n\n```javascript\nclass SpatialGrid {\n  constructor(cellSize, width, height) {\n    this.cellSize = cellSize;\n    this.cols = Math.ceil(width / cellSize);\n    this.rows = Math.ceil(height / cellSize);\n    this.grid = new Array(this.cols * this.rows).fill(null).map(() => []);\n  }\n  \n  clear() {\n    this.grid.forEach(cell => cell.length = 0);\n  }\n  \n  insert(entity) {\n    const { x, y, w, h } = entity.getBounds();\n    const startCol = Math.max(0, Math.floor(x / this.cellSize));\n    const endCol = Math.min(this.cols - 1, Math.floor((x + w) / this.cellSize));\n    const startRow = Math.max(0, Math.floor(y / this.cellSize));\n    const endRow = Math.min(this.rows - 1, Math.floor((y + h) / this.cellSize));\n    \n    for (let r = startRow; r <= endRow; r++) {\n      for (let c = startCol; c <= endCol; c++) {\n        this.grid[r * this.cols + c].push(entity);\n      }\n    }\n  }\n  \n  getNearby(entity) {\n    const { x, y, w, h } = entity.getBounds();\n    const col = Math.floor((x + w / 2) / this.cellSize);\n    const row = Math.floor((y + h / 2) / this.cellSize);\n    return this.grid[Math.min(row, this.rows - 1) * this.cols + Math.min(col, this.cols - 1)];\n  }\n}\n```"
        },
        {
          id: 's2',
          title: 'Circle and Advanced Collision',
          whyItMatters: 'Circle collision is essential for balls, projectiles, and entities that rotate. Combined with AABB for broad phase, it forms a complete collision system.',
          content: "## Circle-Circle Collision\n\n```javascript\nfunction circleCollision(a, b) {\n  const dx = a.x - b.x;\n  const dy = a.y - b.y;\n  const distance = Math.sqrt(dx * dx + dy * dy);\n  return distance < a.r + b.r;\n}\n\n// Circle collision response\nfunction resolveCircles(a, b) {\n  const dx = b.x - a.x;\n  const dy = b.y - a.y;\n  const dist = Math.sqrt(dx * dx + dy * dy);\n  const overlap = a.r + b.r - dist;\n  \n  if (overlap <= 0) return;\n  \n  const nx = dx / dist;\n  const ny = dy / dist;\n  \n  // Separate\n  a.x -= nx * overlap / 2;\n  a.y -= ny * overlap / 2;\n  b.x += nx * overlap / 2;\n  b.y += ny * overlap / 2;\n  \n  // Elastic collision\n  const relVx = a.vx - b.vx;\n  const relVy = a.vy - b.vy;\n  const relVn = relVx * nx + relVy * ny;\n  \n  if (relVn > 0) return; // Moving apart\n  \n  const impulse = -(1 + 0.8) * relVn / (1 + 1); // Coefficient of restitution = 0.8\n  a.vx -= impulse * nx;\n  a.vy -= impulse * ny;\n  b.vx += impulse * nx;\n  b.vy += impulse * ny;\n}\n```\n\n### Circle-Rectangle Collision\n\n```javascript\nfunction circleRectCollision(circle, rect) {\n  const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.w));\n  const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.h));\n  const dx = circle.x - closestX;\n  const dy = circle.y - closestY;\n  return (dx * dx + dy * dy) < (circle.r * circle.r);\n}\n```\n\n### Broad Phase + Narrow Phase\n\n```javascript\nfunction checkCollisions(entities) {\n  // Broad phase: spatial grid\n  grid.clear();\n  entities.forEach(e => grid.insert(e));\n  \n  // Narrow phase: precise checks\n  for (let i = 0; i < entities.length; i++) {\n    const nearby = grid.getNearby(entities[i]);\n    for (const other of nearby) {\n      if (other === entities[i]) continue;\n      \n      // Specific collision based on types\n      if (entities[i].type === 'circle' && other.type === 'circle') {\n        if (circleCollision(entities[i], other)) {\n          resolveCircles(entities[i], other);\n        }\n      }\n    }\n  }\n}\n```\n\n### Pixel-Perfect Collision\n\n```javascript\nfunction pixelCollision(ctx, img1, x1, y1, img2, x2, y2) {\n  // First check AABB\n  if (!aabbCollision({x:x1, y:y1, w:img1.width, h:img1.height},\n                     {x:x2, y:y2, w:img2.width, h:img2.height})) {\n    return false;\n  }\n  \n  // Get overlapping region\n  // Extract pixel data for both images\n  // Compare alpha channels — if both have non-zero alpha at same pixel, collision!\n  \n  // This is expensive — use sparingly\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv25-q1', type: 'mcq', question: 'What does AABB stand for?', options: ['Axis-Aligned Bounding Box', 'Automatic Bounding Box', 'Axis-Aligned Bounding Ball', 'Accurate Bounding Box'], correctAnswer: 0, explanation: 'AABB is the most common rectangle-based collision detection method.', difficulty: 1 },
          { id: 'cv25-q2', type: 'true-false', question: 'Circle collision detection uses the distance formula.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Circle collision checks if sqrt(dx*dx + dy*dy) < r1 + r2.', difficulty: 1 },
          { id: 'cv25-q3', type: 'mcq', question: 'What is the purpose of a spatial grid in collision detection?', options: ['Broad phase: reduce the number of narrow-phase checks', 'Narrow phase: precise collision check', 'Rendering optimization', 'Memory management'], correctAnswer: 0, explanation: 'Spatial grids divide the world into cells so you only check nearby entities.', difficulty: 2 },
          { id: 'cv25-q4', type: 'mcq', question: 'In AABB collision response, how do you determine which direction to push?', options: ['Find the smallest overlap axis', 'Always push left', 'Push opposite to velocity', 'Push upward first'], correctAnswer: 0, explanation: 'Push out along the axis with the smallest overlap for the most natural response.', difficulty: 2 },
          { id: 'cv25-q5', type: 'true-false', question: 'Pixel-perfect collision is faster than AABB collision.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Pixel-perfect collision requires reading and comparing pixel data, which is significantly slower.', difficulty: 1 },
          { id: 'cv25-q6', type: 'mcq', question: 'How do you check if a point is inside a circle?', options: ['distance from center < radius', 'distance from center < diameter', 'point.x < circle.x + circle.r', 'point.y < circle.y + circle.r'], correctAnswer: 0, explanation: 'The distance from the point to the circle center must be less than the radius.', difficulty: 1 },
          { id: 'cv25-q7', type: 'true-false', question: 'The coefficient of restitution determines how bouncy a collision is.', options: ['True', 'False'], correctAnswer: 0, explanation: '1.0 = perfectly elastic (no energy loss), 0.0 = perfectly inelastic (no bounce).', difficulty: 2 },
          { id: 'cv25-q8', type: 'mcq', question: 'What is the correct formula for circle-rectangle collision?', options: ['Find closest point on rect to circle center, check distance vs radius', 'Check if circle center is inside rect', 'Check if any rect corner is inside circle', 'Use AABB between circle bounding box and rect'], correctAnswer: 0, explanation: 'Clamp the circle center to the rectangle bounds to find the closest point, then check distance.', difficulty: 3 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv25-e1', type: 'easy', title: 'AABB Collision Visualizer', instructions: 'Create two draggable rectangles. Show a visual indicator (color change) when they overlap using AABB collision detection.', hint: 'Track mouse position on mousedown/mousemove. Use the AABB formula to check overlap each frame.', starterCode: '<canvas id=\"aabb\" width=\"500\" height=\"300\"></canvas>\n<script>\n  // Your AABB visualizer\n</script>', solution: '<canvas id=\"aabb\" width=\"500\" height=\"300\"></canvas>\n<script>\n  const canvas = document.getElementById(\"aabb\");\n  const ctx = canvas.getContext(\"2d\");\n  const rects = [{x:50,y:80,w:100,h:80, color:\"#2196F3\"},{x:250,y:120,w:100,h:80, color:\"#E91E63\"}];\n  let dragging = null, offset = {};\n  canvas.addEventListener(\"mousedown\",(e)=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;rects.forEach((rect,i)=>{if(mx>=rect.x&&mx<=rect.x+rect.w&&my>=rect.y&&my<=rect.y+rect.h){dragging=i;offset={x:mx-rect.x,y:my-rect.y};}});});\n  canvas.addEventListener(\"mousemove\",(e)=>{if(dragging===null)return;const r=canvas.getBoundingClientRect();rects[dragging].x=e.clientX-r.left-offset.x;rects[dragging].y=e.clientY-r.top-offset.y;});\n  canvas.addEventListener(\"mouseup\",()=>dragging=null);\n  function draw(){ctx.clearRect(0,0,500,300);const a=rects[0],b=rects[1];const hit=a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;rects.forEach((r,i)=>{ctx.fillStyle=i===0?\"#2196F3\":\"#E91E63\";ctx.fillRect(r.x,r.y,r.w,r.h);ctx.strokeStyle=\"#333\";ctx.lineWidth=2;ctx.strokeRect(r.x,r.y,r.w,r.h);});ctx.fillStyle=hit?\"#4CAF50\":\"#999\";ctx.font=\"16px Arial\";ctx.fillText(hit?\"COLLISION!\":\"No collision\",200,20);requestAnimationFrame(draw);}draw();\n</script>' },
        { id: 'cv25-e2', type: 'medium', title: 'Billiard Ball Physics', instructions: 'Create two balls that bounce off each other with proper elastic collision response. Include wall bouncing.', hint: 'Use circle-circle collision and the elastic collision impulse formula.', starterCode: '<canvas id=\"billiards\" width=\"500\" height=\"400\"></canvas>\n<script>\n  // Your billiard ball simulation\n</script>', solution: '<canvas id=\"billiards\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas = document.getElementById(\"billiards\");\n  const ctx = canvas.getContext(\"2d\");\n  const balls = [{x:150,y:200,r:20,vx:200,vy:50,color:\"#E91E63\"},{x:350,y:200,r:20,vx:-150,vy:-80,color:\"#2196F3\"}];\n  let last=0;\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    balls.forEach(b=>{b.x+=b.vx*dt;b.y+=b.vy*dt;if(b.x-b.r<0||b.x+b.r>500)b.vx*=-1;if(b.y-b.r<0||b.y+b.r>400)b.vy*=-1;});\n    const a=balls[0],b=balls[1];const dx=b.x-a.x,dy=b.y-a.y,dist=Math.sqrt(dx*dx+dy*dy);\n    if(dist<a.r+b.r){const nx=dx/dist,ny=dy/dist,overlap=a.r+b.r-dist;a.x-=nx*overlap/2;a.y-=ny*overlap/2;b.x+=nx*overlap/2;b.y+=ny*overlap/2;const relV=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;if(relV>0){const imp=relV/2;a.vx-=imp*nx;a.vy-=imp*ny;b.vx+=imp*nx;b.vy+=imp*ny;}}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);balls.forEach(b=>{ctx.fillStyle=b.color;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fill();});\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' },
        { id: 'cv25-e3', type: 'hard', title: 'Spatial Grid Optimization', instructions: 'Create 500 randomly moving particles. Implement two collision modes: brute-force (O(n^2)) and spatial grid (O(n)). Show a performance comparison with FPS counter for each mode.', hint: 'For brute force, check every pair. For spatial grid, insert into grid and only check nearby cells.', starterCode: '<canvas id=\"spatial\" width=\"600\" height=\"400\"></canvas>\n<button id=\"bruteBtn\">Brute Force</button>\n<button id=\"gridBtn\">Spatial Grid</button>\n<script>\n  // Your performance comparison\n</script>', solution: '<canvas id=\"spatial\" width=\"600\" height=\"400\"></canvas>\n<button id=\"bruteBtn\">Brute Force</button>\n<button id=\"gridBtn\">Spatial Grid</button>\n<script>\n  const canvas = document.getElementById(\"spatial\");\n  const ctx = canvas.getContext(\"2d\");\n  const particles = [];\n  for(let i=0;i<500;i++)particles.push({x:Math.random()*600,y:Math.random()*400,vx:(Math.random()-0.5)*100,vy:(Math.random()-0.5)*100,alive:true});\n  let useGrid = true, last=0, checkCount=0;\n  document.getElementById(\"bruteBtn\").onclick=()=>useGrid=false;\n  document.getElementById(\"gridBtn\").onclick=()=>useGrid=true;\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    particles.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<0||p.x>600)p.vx*=-1;if(p.y<0||p.y>400)p.vy*=-1;});\n    checkCount=0;\n    if(useGrid){const cellSize=40,cols=Math.ceil(600/cellSize),rows=Math.ceil(400/cellSize),grid=[...Array(cols*rows)].map(()=>[]);\n      particles.forEach(p=>{const c=Math.floor(p.x/cellSize),r=Math.floor(p.y/cellSize);grid[Math.min(r,rows-1)*cols+Math.min(c,cols-1)].push(p);});\n      grid.forEach(cell=>{for(let i=0;i<cell.length;i++)for(let j=i+1;j<cell.length;j++){checkCount++;const a=cell[i],b=cell[j],dx=a.x-b.x,dy=a.y-b.y;if(Math.sqrt(dx*dx+dy*dy)<5){a.vx*=-1;b.vx*=-1;}}});\n    }else{for(let i=0;i<particles.length;i++)for(let j=i+1;j<particles.length;j++){checkCount++;const a=particles[i],b=particles[j],dx=a.x-b.x,dy=a.y-b.y;if(Math.sqrt(dx*dx+dy*dy)<5){a.vx*=-1;b.vx*=-1;}}}\n    ctx.fillStyle=\"rgba(10,10,46,0.1)\";ctx.fillRect(0,0,600,400);\n    particles.forEach(p=>{ctx.fillStyle=\"#4CAF50\";ctx.beginPath();ctx.arc(p.x,p.y,3,0,7);ctx.fill();});\n    ctx.fillStyle=\"#fff\";ctx.font=\"14px monospace\";ctx.fillText(`Mode: ${useGrid?\"Spatial Grid\":\"Brute Force\"} | Checks: ${checkCount}`,10,20);\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'AABB', value: '4-axis overlap check' },
        { label: 'Circle-circle', value: 'distance < r1 + r2' },
        { label: 'Point in rect', value: 'px >= x && px <= x+w && py >= y && py <= y+h' },
        { label: 'Collision response', value: 'Push out smallest overlap axis' },
        { label: 'Spatial grid', value: 'Partition space for broad phase' },
        { label: 'Pixel-perfect', value: 'Compare alpha channels at overlap' }
      ]
    },,

    {
      id: 'canvas-26',
      number: 26,
      partLabel: 'Part 3: Animation',
      title: 'Physics Basics',
      subtitle: 'Velocity, acceleration, and friction',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-25'],
      learningObjectives: [
        'Apply velocity and acceleration to moving objects',
        'Implement friction for realistic deceleration',
        'Create force-based movement systems',
        'Build a simple physics engine'
      ],
      sections: [
        {
          id: 's1',
          title: 'Velocity and Acceleration',
          whyItMatters: 'Physics makes games feel real. Velocity controls movement, acceleration controls how forces build up over time.',
          content: "## Velocity\n\nVelocity is speed in a direction. Update position by velocity each frame:\n\n```javascript\nconst entity = { x: 100, y: 100, vx: 200, vy: 0 };\n\nfunction update(dt) {\n  entity.x += entity.vx * dt;\n  entity.y += entity.vy * dt;\n}\n```\n\n### Acceleration\n\nAcceleration changes velocity over time:\n\n```javascript\nconst entity = {\n  x: 100, y: 100,\n  vx: 0, vy: 0,\n  ax: 0, ay: 0\n};\n\nfunction update(dt) {\n  // Apply acceleration to velocity\n  entity.vx += entity.ax * dt;\n  entity.vy += entity.ay * dt;\n  \n  // Apply velocity to position\n  entity.x += entity.vx * dt;\n  entity.y += entity.vy * dt;\n}\n```\n\n### Friction\n\nFriction slows objects down over time. Apply it each frame:\n\n```javascript\nconst FRICTION = 0.9; // Multiplicative friction (per frame)\nconst FRICTION_FORCE = 50; // Force-based friction (per second)\n\n// Option 1: Multiplicative (friction as percentage retained)\nentity.vx *= Math.pow(FRICTION, dt * 60); // Frame-rate independent\nentity.vy *= Math.pow(FRICTION, dt * 60);\n\n// Option 2: Force-based (friction as opposing force)\nconst speed = Math.sqrt(entity.vx * entity.vx + entity.vy * entity.vy);\nif (speed > 0) {\n  const frictionForce = FRICTION_FORCE * dt;\n  if (frictionForce >= speed) {\n    entity.vx = 0;\n    entity.vy = 0;\n  } else {\n    const scale = (speed - frictionForce) / speed;\n    entity.vx *= scale;\n    entity.vy *= scale;\n  }\n}\n```\n\n### Max Speed\n\n```javascript\nfunction clampSpeed(vx, vy, maxSpeed) {\n  const speed = Math.sqrt(vx * vx + vy * vy);\n  if (speed > maxSpeed) {\n    const scale = maxSpeed / speed;\n    return { vx: vx * scale, vy: vy * scale };\n  }\n  return { vx, vy };\n}\n\n// Usage after applying acceleration\nconst clamped = clampSpeed(entity.vx, entity.vy, 300);\nentity.vx = clamped.vx;\nentity.vy = clamped.vy;\n```\n\n### Complete Movement System\n\n```javascript\nclass PhysicsBody {\n  constructor(x, y) {\n    this.x = x; this.y = y;\n    this.vx = 0; this.vy = 0;\n    this.maxSpeed = 300;\n    this.friction = 0.85;\n  }\n  \n  applyForce(fx, fy) {\n    this.vx += fx;\n    this.vy += fy;\n  }\n  \n  update(dt) {\n    // Apply friction\n    this.vx *= Math.pow(this.friction, dt * 60);\n    this.vy *= Math.pow(this.friction, dt * 60);\n    \n    // Clamp speed\n    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);\n    if (speed > this.maxSpeed) {\n      const s = this.maxSpeed / speed;\n      this.vx *= s;\n      this.vy *= s;\n    }\n    \n    // Move\n    this.x += this.vx * dt;\n    this.y += this.vy * dt;\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv26-q1', type: 'mcq', question: 'What does acceleration do to velocity?', options: ['Changes velocity over time', 'Changes position directly', 'Sets velocity to zero', 'Reverses velocity direction'], correctAnswer: 0, explanation: 'Acceleration is the rate of change of velocity. Applied each frame, it gradually changes velocity.', difficulty: 1 },
          { id: 'cv26-q2', type: 'true-false', question: 'Friction should be applied after updating position.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Friction affects velocity, which then affects position. Apply friction to velocity before or after position update.', difficulty: 2 },
          { id: 'cv26-q3', type: 'mcq', question: 'How do you make friction frame-rate independent?', options: ['Use Math.pow(base, dt * 60)', 'Multiply by base each frame', 'Divide by dt', 'Use a fixed timestep only'], correctAnswer: 0, explanation: 'Math.pow(base, dt*60) converts per-frame friction to per-second, making it frame-rate independent.', difficulty: 3 },
          { id: 'cv26-q4', type: 'true-false', question: 'Velocity is measured in pixels per second.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Velocity = pixels/second. Multiply by dt (seconds) to get the pixel displacement for that frame.', difficulty: 1 },
          { id: 'cv26-q5', type: 'mcq', question: 'What is the formula for speed from vx and vy?', options: ['sqrt(vx^2 + vy^2)', 'vx + vy', 'abs(vx) + abs(vy)', 'max(vx, vy)'], correctAnswer: 0, explanation: 'Speed is the magnitude of the velocity vector: sqrt(vx*vx + vy*vy).', difficulty: 1 },
          { id: 'cv26-q6', type: 'true-false', question: 'Clamping max speed prevents objects from moving too fast.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Max speed clamping scales velocity down when it exceeds the limit, preventing runaway objects.', difficulty: 1 },
          { id: 'cv26-q7', type: 'mcq', question: 'Which type of friction is more realistic for air resistance?', options: ['Multiplicative (velocity * factor)', 'Constant opposing force', 'Random friction', 'No friction'], correctAnswer: 0, explanation: 'Air resistance is proportional to velocity (drag), so multiplicative friction is more realistic.', difficulty: 2 },
          { id: 'cv26-q8', type: 'true-false', question: 'ApplyForce adds directly to acceleration, not velocity.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Force = mass * acceleration. In game physics, applyForce adds to acceleration, which then changes velocity.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv26-e1', type: 'easy', title: 'Asteroids-style Ship', instructions: 'Create a spaceship that moves with inertia. Arrow keys rotate the ship, up thrusts forward. The ship should drift and require counter-thrust to stop.', hint: 'Track angle, vx, vy. On up key, apply force in the direction the ship faces. Apply friction each frame.', starterCode: '<canvas id=\"ship\" width=\"500\" height=\"400\"></canvas>\n<script>\n  // Your asteroids ship\n</script>', solution: '<canvas id=\"ship\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas = document.getElementById(\"ship\");\n  const ctx = canvas.getContext(\"2d\");\n  const ship = {x:250,y:200,vx:0,vy:0,angle:-Math.PI/2};\n  const keys = {};\n  document.addEventListener(\"keydown\",e=>keys[e.code]=true);\n  document.addEventListener(\"keyup\",e=>keys[e.code]=false);\n  let last=0;\n  function draw(ts){\n    const dt=last?(ts-last)/1000:0;last=ts;\n    if(keys[\"ArrowLeft\"])ship.angle-=2*dt;\n    if(keys[\"ArrowRight\"])ship.angle+=2*dt;\n    if(keys[\"ArrowUp\"]){ship.vx+=Math.cos(ship.angle)*200*dt;ship.vy+=Math.sin(ship.angle)*200*dt;}\n    ship.vx*=Math.pow(0.98,dt*60);ship.vy*=Math.pow(0.98,dt*60);\n    ship.x+=ship.vx*dt;ship.y+=ship.vy*dt;\n    if(ship.x<0)ship.x=500;if(ship.x>500)ship.x=0;if(ship.y<0)ship.y=400;if(ship.y>400)ship.y=0;\n    ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,500,400);\n    ctx.save();ctx.translate(ship.x,ship.y);ctx.rotate(ship.angle);\n    ctx.fillStyle=\"#4CAF50\";ctx.beginPath();ctx.moveTo(20,0);ctx.lineTo(-15,-12);ctx.lineTo(-10,0);ctx.lineTo(-15,12);ctx.closePath();ctx.fill();\n    ctx.restore();\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv26-e2', type: 'medium', title: 'Boat with Water Resistance', instructions: 'Create a boat that moves with different friction in different directions (water resistance is higher in the forward direction). The boat should drift to a stop when thrust stops.', hint: 'Apply different friction factors to vx and vy. Use force-based friction for more realistic water resistance.', starterCode: '<canvas id=\"boat\" width=\"500\" height=\"400\"></canvas>\n<script>\n  // Your boat physics\n</script>', solution: '<canvas id=\"boat\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas = document.getElementById(\"boat\");\n  const ctx = canvas.getContext(\"2d\");\n  const boat = {x:250,y:200,vx:0,vy:0,angle:0};\n  const keys={};\n  document.addEventListener(\"keydown\",e=>keys[e.code]=true);\n  document.addEventListener(\"keyup\",e=>keys[e.code]=false);\n  let last=0;\n  function draw(ts){\n    const dt=last?(ts-last)/1000:0;last=ts;\n    if(keys[\"ArrowLeft\"])boat.angle-=1.5*dt;\n    if(keys[\"ArrowRight\"])boat.angle+=1.5*dt;\n    if(keys[\"ArrowUp\"]){boat.vx+=Math.cos(boat.angle)*150*dt;boat.vy+=Math.sin(boat.angle)*150*dt;}\n    boat.vx*=Math.pow(0.95,dt*60);boat.vy*=Math.pow(0.98,dt*60);\n    boat.x+=boat.vx*dt;boat.y+=boat.vy*dt;\n    if(boat.x<0)boat.x=0;if(boat.x>500)boat.x=500;if(boat.y<0)boat.y=0;if(boat.y>400)boat.y=400;\n    ctx.fillStyle=\"#e3f2fd\";ctx.fillRect(0,0,500,400);\n    ctx.save();ctx.translate(boat.x,boat.y);ctx.rotate(boat.angle);\n    ctx.fillStyle=\"#795548\";ctx.beginPath();ctx.moveTo(25,0);ctx.lineTo(-20,-10);ctx.lineTo(-20,10);ctx.closePath();ctx.fill();\n    ctx.restore();\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' },
        { id: 'cv26-e3', type: 'hard', title: 'Multi-Force Physics Engine', instructions: 'Build a physics engine supporting multiple forces: gravity, wind (horizontal), drag, and buoyancy. Add a toggle for each force and observe how a ball\'s trajectory changes.', hint: 'Create an array of active forces. Each force contributes to acceleration. Sum them and apply to velocity.', starterCode: '<canvas id=\"forces\" width=\"600\" height=\"400\"></canvas>\n<div>\n  <label>Gravity: <input type=\"checkbox\" id=\"gravity\" checked></label>\n  <label>Wind: <input type=\"checkbox\" id=\"wind\"></label>\n  <label>Drag: <input type=\"checkbox\" id=\"drag\" checked></label>\n  <label>Buoyancy: <input type=\"checkbox\" id=\"buoyancy\"></label>\n</div>\n<script>\n  // Your multi-force engine\n</script>', solution: '<canvas id=\"forces\" width=\"600\" height=\"400\"></canvas>\n<div>\n  <label>Gravity: <input type=\"checkbox\" id=\"gravity\" checked></label>\n  <label>Wind: <input type=\"checkbox\" id=\"wind\"></label>\n  <label>Drag: <input type=\"checkbox\" id=\"drag\" checked></label>\n  <label>Buoyancy: <input type=\"checkbox\" id=\"buoyancy\"></label>\n</div>\n<script>\n  const canvas = document.getElementById(\"forces\");\n  const ctx = canvas.getContext(\"2d\");\n  const ball = {x:100,y:50,vy:0,vx:0,r:15};\n  let last=0;\n  function getForces(){\n    const f = {fx:0,fy:0};\n    if(document.getElementById(\"gravity\").checked)f.fy+=500;\n    if(document.getElementById(\"wind\").checked)f.fx+=200;\n    if(document.getElementById(\"drag\").checked){f.fx-=ball.vx*2;f.fy-=ball.vy*2;}\n    if(document.getElementById(\"buoyancy\").checked)f.fy-=300;\n    return f;\n  }\n  function draw(ts){\n    const dt=last?(ts-last)/1000:0;last=ts;\n    const forces=getForces();\n    ball.vx+=forces.fx*dt;ball.vy+=forces.fy*dt;\n    ball.x+=ball.vx*dt;ball.y+=ball.vy*dt;\n    if(ball.y+ball.r>400){ball.y=400-ball.r;ball.vy*=-0.7;}\n    if(ball.x-ball.r<0||ball.x+ball.r>600)ball.vx*=-1;\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,600,400);\n    ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(ball.x,ball.y,ball.r,0,7);ctx.fill();\n    requestAnimationFrame(draw);\n  }\n  requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Velocity', value: 'vx += ax * dt; x += vx * dt' },
        { label: 'Friction (multiplicative)', value: 'v *= pow(friction, dt * 60)' },
        { label: 'Friction (force)', value: 'Reduce speed by frictionForce * dt' },
        { label: 'Clamp speed', value: 'scale = maxSpeed / speed if speed > maxSpeed' },
        { label: 'Apply force', value: 'vx += fx * dt; vy += fy * dt' }
      ]
    },,

    {
      id: 'canvas-27',
      number: 27,
      partLabel: 'Part 3: Animation',
      title: 'Gravity and Velocity',
      subtitle: 'Projectile motion and bouncing',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-26'],
      learningObjectives: [
        'Simulate gravity as constant downward acceleration',
        'Implement projectile motion with initial velocity',
        'Add bouncing with energy loss',
        'Create ballistic trajectories'
      ],
      sections: [
        {
          id: 's1',
          title: 'Gravity Simulation',
          whyItMatters: 'Gravity is fundamental to most games. Understanding projectile motion enables everything from jumping to artillery trajectories.',
          content: "## Constant Gravity\n\nGravity is a constant downward acceleration:\n\n```javascript\nconst GRAVITY = 980; // pixels/s² (roughly 9.8 m/s² scaled)\n\nfunction update(dt) {\n  // Apply gravity\n  vy += GRAVITY * dt;\n  \n  // Update position\n  y += vy * dt;\n}\n```\n\n### Projectile Motion\n\nA projectile has an initial velocity and follows a parabolic arc under gravity:\n\n```javascript\nfunction shoot(x, y, angle, speed) {\n  return {\n    x, y,\n    vx: Math.cos(angle) * speed,\n    vy: Math.sin(angle) * speed\n  };\n}\n\n// Update projectile\nfunction updateProjectile(p, dt) {\n  p.vy += GRAVITY * dt;\n  p.x += p.vx * dt;\n  p.y += p.vy * dt;\n  \n  // Bounce off ground\n  if (p.y + RADIUS > groundY) {\n    p.y = groundY - RADIUS;\n    p.vy *= -BOUNCE_COEFFICIENT;\n    p.vx *= GROUND_FRICTION;\n  }\n}\n\n// Predict trajectory (for aiming)\nfunction predictPath(x, y, vx, vy, steps, dt) {\n  const path = [];\n  for (let i = 0; i < steps; i++) {\n    vy += GRAVITY * dt;\n    x += vx * dt;\n    y += vy * dt;\n    path.push({ x, y });\n  }\n  return path;\n}\n```\n\n### Bouncing\n\nWhen an object hits a surface, reverse the velocity component and reduce it:\n\n```javascript\nconst RESTITUTION = 0.7; // Energy retained on bounce\n\n// Vertical bounce\nif (y + radius > ground) {\n  y = ground - radius;\n  vy *= -RESTITUTION;\n}\n\n// Horizontal bounce\nif (x + radius > right || x - radius < left) {\n  vx *= -RESTITUTION;\n}\n\n// Floor friction on bounce\nif (Math.abs(vy) < 10 && y + radius >= ground) {\n  vy = 0;\n  vx *= Math.pow(0.9, dt * 60); // Sliding friction\n}\n```\n\n### Multiple Projectiles with Trails\n\n```javascript\nclass Projectile {\n  constructor(x, y, vx, vy, color) {\n    this.x = x; this.y = y;\n    this.vx = vx; this.vy = vy;\n    this.color = color;\n    this.trail = [];\n    this.alive = true;\n  }\n  \n  update(dt) {\n    this.trail.push({ x: this.x, y: this.y });\n    if (this.trail.length > 20) this.trail.shift();\n    \n    this.vy += GRAVITY * dt;\n    this.x += this.vx * dt;\n    this.y += this.vy * dt;\n    \n    if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {\n      this.alive = false;\n    }\n  }\n  \n  draw(ctx) {\n    // Draw trail\n    this.trail.forEach((p, i) => {\n      const alpha = i / this.trail.length;\n      ctx.fillStyle = this.color.replace('1)', `${alpha})`);\n      ctx.beginPath();\n      ctx.arc(p.x, p.y, 3 * alpha, 0, Math.PI * 2);\n      ctx.fill();\n    });\n    \n    // Draw projectile\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);\n    ctx.fill();\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv27-q1', type: 'mcq', question: 'What is gravity in physics simulation?', options: ['Constant downward acceleration', 'Downward velocity', 'A force applied once', 'A friction force'], correctAnswer: 0, explanation: 'Gravity is a constant acceleration (9.8 m/s²) applied each frame to the vertical velocity.', difficulty: 1 },
          { id: 'cv27-q2', type: 'true-false', question: 'The coefficient of restitution determines how bouncy a surface is.', options: ['True', 'False'], correctAnswer: 0, explanation: '1.0 = perfectly bouncy, 0.0 = no bounce at all.', difficulty: 1 },
          { id: 'cv27-q3', type: 'mcq', question: 'What shape does a projectile trajectory follow?', options: ['A parabola', 'A straight line', 'A circle', 'An exponential curve'], correctAnswer: 0, explanation: 'Under constant gravity and no air resistance, projectiles follow a parabolic arc.', difficulty: 1 },
          { id: 'cv27-q4', type: 'true-false', question: 'An object with vy=0 and y above ground will stay suspended in mid-air.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Gravity immediately starts accelerating it downward. vy=0 is only an instantaneous state.', difficulty: 2 },
          { id: 'cv27-q5', type: 'mcq', question: 'How do you stop a bouncing ball when it settles?', options: ['Check if |vy| < threshold and set vy = 0', 'Set vy = 0 after first bounce', 'Increase gravity gradually', 'Remove gravity after bouncing'], correctAnswer: 0, explanation: 'When vertical velocity is very small, snap it to zero to prevent micro-bouncing.', difficulty: 2 },
          { id: 'cv27-q6', type: 'true-false', question: 'Ground friction should only be applied when the object is on the ground.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Apply sliding friction only during ground contact, not in the air.', difficulty: 2 },
          { id: 'cv27-q7', type: 'mcq', question: 'What is the formula for the horizontal range of a projectile?', options: ['(v² * sin(2θ)) / g', 'v * cos(θ) * t', 'v * t', '(v² * sin(θ)) / g'], correctAnswer: 0, explanation: 'Range = (v² * sin(2θ)) / g for a projectile launched on flat ground.', difficulty: 3 },
          { id: 'cv27-q8', type: 'true-false', question: 'A trail array shows the recent positions of a projectile.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Store previous positions in an array and draw them with decreasing opacity for trail effects.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv27-e1', type: 'easy', title: 'Ball Drop', instructions: 'Drop a ball from the top of the canvas. It should fall with gravity, bounce off the bottom, and gradually come to a stop.', hint: 'Start ball at y=0 with vy=0. Add gravity each frame. Reverse vy and reduce on bottom collision.', starterCode: '<canvas id=\"drop\" width=\"300\" height=\"400\"></canvas>\n<script>\n  // Your ball drop\n</script>', solution: '<canvas id=\"drop\" width=\"300\" height=\"400\"></canvas>\n<script>\n  const canvas = document.getElementById(\"drop\"), ctx = canvas.getContext(\"2d\");\n  const b={x:150,y:0,vy:0,r:15};let last=0;\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    b.vy+=980*dt;b.y+=b.vy*dt;\n    if(b.y+b.r>400){b.y=400-b.r;b.vy*=-0.7;if(Math.abs(b.vy)<5)b.vy=0;}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,300,400);\n    ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fill();\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' },
        { id: 'cv27-e2', type: 'medium', title: 'Angry Birds-style Launcher', instructions: 'Create a projectile launcher where you drag and release to set angle and power. Show the trajectory arc before launching.', hint: 'On mousedown, record start position. On mouseup, calculate angle and power. Use predictPath to draw preview.', starterCode: '<canvas id=\"launcher\" width=\"600\" height=\"400\"></canvas>\n<script>\n  // Your projectile launcher\n</script>', solution: '<canvas id=\"launcher\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas = document.getElementById(\"launcher\"), ctx = canvas.getContext(\"2d\");\n  let start={x:100,y:350},end={x:100,y:350},launched=null,trail=[],last=0;\n  canvas.addEventListener(\"mousedown\",e=>{const r=canvas.getBoundingClientRect();start={x:e.clientX-r.left,y:e.clientY-r.top};end={...start};});\n  canvas.addEventListener(\"mousemove\",e=>{if(!launched){const r=canvas.getBoundingClientRect();end={x:e.clientX-r.left,y:e.clientY-r.top};}});\n  canvas.addEventListener(\"mouseup\",()=>{const dx=start.x-end.x,dy=start.y-end.y,speed=Math.sqrt(dx*dx+dy*dy)*2;launched={x:start.x,y:start.y,vx:dx*2,vy:dy*2,alive:true};trail=[];});\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    ctx.fillStyle=\"#e8f5e9\";ctx.fillRect(0,0,600,400);\n    if(launched&&launched.alive){\n      launched.vy+=980*dt;launched.x+=launched.vx*dt;launched.y+=launched.vy*dt;trail.push({x:launched.x,y:launched.y});\n      if(launched.y>380||launched.x<0||launched.x>600)launched.alive=false;\n      ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(launched.x,launched.y,8,0,7);ctx.fill();\n      trail.forEach((p,i)=>{ctx.fillStyle=`rgba(233,30,99,${i/trail.length*0.5})`;ctx.beginPath();ctx.arc(p.x,p.y,4,0,7);ctx.fill();});\n    }else{\n      const dx=start.x-end.x,dy=start.y-end.y,speed=Math.sqrt(dx*dx+dy*dy)*2;\n      let px=start.x,py=start.y,pvx=dx*2,pvy=dy*2;\n      ctx.fillStyle=\"rgba(33,150,243,0.3)\";ctx.beginPath();\n      for(let i=0;i<40;i++){pvy+=980*0.016;px+=pvx*0.016;py+=pvy*0.016;if(py>380)break;ctx.lineTo(px,py);}\n      ctx.stroke();\n      ctx.fillStyle=\"#FFC107\";ctx.beginPath();ctx.arc(start.x,start.y,10,0,7);ctx.fill();\n      ctx.fillStyle=\"#333\";ctx.font=\"14px Arial\";ctx.fillText(\"Drag to aim and power\",200,20);\n    }\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' },
        { id: 'cv27-e3', type: 'hard', title: 'Basketball Physics', instructions: 'Simulate a basketball being thrown into a hoop. Include gravity, air resistance, backboard bounce, and net collision. The ball should swish through or bounce off the rim.', hint: 'Model the hoop as a horizontal line segment. Check if the ball passes through. Rim collision uses circle-line collision.', starterCode: '<canvas id=\"basketball\" width=\"500\" height=\"500\"></canvas>\n<script>\n  // Your basketball physics\n</script>', solution: '<canvas id=\"basketball\" width=\"500\" height=\"500\"></canvas>\n<script>\n  const canvas = document.getElementById(\"basketball\"), ctx = canvas.getContext(\"2d\");\n  const hoop={x:350,y:200,w:80};const backboard={x:hoop.x+hoop.w+5,y:hoop.y-30,w:5,h:60};\n  let ball={x:100,y:400,vx:0,vy:0,active:false},last=0;\n  canvas.addEventListener(\"click\",()=>{ball={x:100,y:400,vx:280,vy:-480,active:true};});\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    if(ball.active){ball.vy+=800*dt;ball.vx*=Math.pow(0.999,dt*60);ball.x+=ball.vx*dt;ball.y+=ball.vy*dt;\n      if(ball.x+10>backboard.x&&ball.x<backboard.x+backboard.w&&ball.y+10>backboard.y&&ball.y<backboard.y+backboard.h)ball.vx*=-0.5;\n      if(ball.y+10>hoop.y&&ball.y<hoop.y+10&&ball.x>hoop.x&&ball.x<hoop.x+hoop.w){ball.vy*=0.3;ball.vx*=0.8;}\n      if(ball.y>480){ball.y=480;ball.vy*=-0.6;ball.vx*=0.9;if(Math.abs(ball.vy)<2)ball.vy=0;}}\n    ctx.fillStyle=\"#e3f2fd\";ctx.fillRect(0,0,500,500);\n    ctx.strokeStyle=\"#E91E63\";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(hoop.x,hoop.y);ctx.lineTo(hoop.x+hoop.w,hoop.y);ctx.stroke();\n    ctx.fillStyle=\"#333\";ctx.fillRect(backboard.x,backboard.y,backboard.w,backboard.h);\n    ctx.fillStyle=\"#FF5722\";ctx.beginPath();ctx.arc(ball.x,ball.y,10,0,7);ctx.fill();\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Gravity', value: 'vy += GRAVITY * dt' },
        { label: 'Bounce', value: 'vy *= -RESTITUTION' },
        { label: 'Resting check', value: 'if |vy| < threshold, set vy = 0' },
        { label: 'Projectile', value: 'Initial vx, vy + constant gravity' },
        { label: 'Trajectory preview', value: 'Simulate path forward without rendering' }
      ]
    },,

    {
      id: 'canvas-28',
      number: 28,
      partLabel: 'Part 3: Animation',
      title: 'Particle Systems',
      subtitle: 'Particle emitters, trails, and effects',
      difficulty: 'Intermediate',
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ['canvas-27'],
      learningObjectives: [
        'Design a particle system with emitter and particle objects',
        'Implement particle lifecycles: birth, update, death',
        'Create visual effects: fire, smoke, sparkle, rain',
        'Optimize particle rendering for hundreds of particles'
      ],
      sections: [
        {
          id: 's1',
          title: 'Particle System Architecture',
          whyItMatters: 'Particle systems create visual effects that bring games to life — explosions, fire, rain, magic, and more.',
          content: "## Basic Particle System\n\n```javascript\nclass Particle {\n  constructor(x, y) {\n    this.x = x; this.y = y;\n    this.vx = (Math.random() - 0.5) * 100;\n    this.vy = (Math.random() - 0.5) * 100 - 50;\n    this.life = 1;\n    this.decay = 0.5 + Math.random() * 0.5;\n    this.size = 3 + Math.random() * 5;\n    this.color = `hsl(${Math.random() * 60 + 20}, 100%, 60%)`;\n  }\n  update(dt) {\n    this.x += this.vx * dt; this.y += this.vy * dt;\n    this.vy += 50 * dt;\n    this.life -= this.decay * dt;\n  }\n  draw(ctx) {\n    ctx.globalAlpha = Math.max(0, this.life);\n    ctx.fillStyle = this.color;\n    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, 7); ctx.fill();\n    ctx.globalAlpha = 1;\n  }\n  get dead() { return this.life <= 0; }\n}\n\nclass Emitter {\n  constructor(x, y) {\n    this.x = x; this.y = y;\n    this.particles = [];\n    this.emitRate = 20;\n    this.emitTimer = 0;\n  }\n  update(dt) {\n    this.emitTimer += dt;\n    while (this.emitTimer >= 1 / this.emitRate) {\n      this.particles.push(new Particle(this.x, this.y));\n      this.emitTimer -= 1 / this.emitRate;\n    }\n    this.particles.forEach(p => p.update(dt));\n    this.particles = this.particles.filter(p => !p.dead);\n  }\n  draw(ctx) { this.particles.forEach(p => p.draw(ctx)); }\n}\n```\n\n### Fire Effect Particles\n\n```javascript\nclass FireParticle extends Particle {\n  constructor(x, y) {\n    super(x, y);\n    this.vx = (Math.random() - 0.5) * 30;\n    this.vy = -Math.random() * 150 - 50;\n    this.decay = 1.5 + Math.random();\n    this.color = Math.random() > 0.5 ? '#FF5722' : '#FFC107';\n    this.size = 5 + Math.random() * 10;\n  }\n  update(dt) {\n    super.update(dt);\n    this.vx += (Math.random() - 0.5) * 50 * dt;\n  }\n}\n```\n\n### Optimization Tips\n- Object pooling to avoid GC pauses\n- Batch draws by color (single path)\n- Limit max particle count\n- Reduce count when FPS drops"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv28-q1', type: 'mcq', question: 'What determines when a particle should be removed?', options: ['life <= 0', 'x/y out of bounds', 'size = 0', 'Both life and bounds'], correctAnswer: 0, explanation: 'Each particle has a life value that decreases each frame. When it reaches 0, the particle is removed.', difficulty: 1 },
          { id: 'cv28-q2', type: 'true-false', question: 'The emitter creates new particles at a fixed rate per second.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Emit rate determines how many particles are spawned per second, independent of frame rate.', difficulty: 1 },
          { id: 'cv28-q3', type: 'mcq', question: 'What is a common optimization for particle systems?', options: ['Object pooling to reuse particles', 'Increasing particle count', 'Using larger particles', 'Removing all particles'], correctAnswer: 0, explanation: 'Object pooling prevents garbage collection pauses by reusing particle objects.', difficulty: 2 },
          { id: 'cv28-q4', type: 'true-false', question: 'Particle decay rate should be multiplied by dt for frame-rate independence.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Life decay = decay * dt ensures particles live the same duration regardless of frame rate.', difficulty: 2 },
          { id: 'cv28-q5', type: 'mcq', question: 'How do fire particles differ from generic particles?', options: ['Rise upward with randomness', 'Fall downward with gravity', 'Move in a straight line', 'Stay in place'], correctAnswer: 0, explanation: 'Fire particles have negative vy (rising) with added horizontal randomness for flicker.', difficulty: 1 },
          { id: 'cv28-q6', type: 'true-false', question: 'Particle effects should always use the maximum possible particle count.', options: ['True', 'False'], correctAnswer: 1, explanation: 'More particles = more computation. Balance visual quality with performance.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv28-e1', type: 'easy', title: 'Simple Fire Effect', instructions: 'Create a fire particle effect that emits upward from the bottom center of the canvas. Particles should be orange/yellow and fade out as they rise.', hint: 'Use negative vy for upward movement. Randomize x position slightly.', starterCode: '<canvas id=\"fire\" width=\"400\" height=\"400\"></canvas>\n<script>// Your fire effect</script>', solution: '<canvas id=\"fire\" width=\"400\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"fire\"),ctx=canvas.getContext(\"2d\");\n  let particles=[],last=0;\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    for(let i=0;i<3;i++)particles.push({x:200+(Math.random()-0.5)*60,y:380,vy:-100-Math.random()*100,vx:(Math.random()-0.5)*30,life:1,size:8+Math.random()*10});\n    particles.forEach(p=>{p.vy-=20*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=1.5*dt;});\n    particles=particles.filter(p=>p.life>0);\n    ctx.fillStyle=\"#1a1a2e\";ctx.fillRect(0,0,400,400);\n    particles.forEach(p=>{ctx.globalAlpha=p.life;ctx.fillStyle=p.life>0.5?\"#FFC107\":\"#FF5722\";ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,7);ctx.fill();});\n    ctx.globalAlpha=1;\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' },
        { id: 'cv28-e2', type: 'medium', title: 'Explosion Effect', instructions: 'Create an explosion effect triggered by clicking. Particles burst outward from the click point with random velocities.', hint: 'On click, generate 50 particles with velocities in all directions.', starterCode: '<canvas id=\"explosion2\" width=\"500\" height=\"400\"></canvas>\n<script>// Your explosion</script>', solution: '<canvas id=\"explosion2\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"explosion2\"),ctx=canvas.getContext(\"2d\");\n  let particles=[],last=0;\n  canvas.addEventListener(\"click\",(e)=>{const r=canvas.getBoundingClientRect(),cx=e.clientX-r.left,cy=e.clientY-r.top;for(let i=0;i<60;i++){const a=Math.random()*7,s=100+Math.random()*300;particles.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,size:3+Math.random()*5,color:`hsl(${30+Math.random()*30},100%,60%)`});}});\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    particles.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=200*dt;p.life-=1.2*dt;});\n    particles=particles.filter(p=>p.life>0);\n    ctx.fillStyle=\"#1a1a2e\";ctx.fillRect(0,0,500,400);\n    particles.forEach(p=>{ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,7);ctx.fill();});\n    ctx.globalAlpha=1;\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' },
        { id: 'cv28-e3', type: 'hard', title: 'Rain Storm with Splash', instructions: 'Create a rain storm with hundreds of falling raindrops at an angle. When hitting the ground, spawn splash particles.', hint: 'Rain particles fall at angle. On ground hit, spawn 3-4 tiny splash particles.', starterCode: '<canvas id=\"rain\" width=\"600\" height=\"400\"></canvas>\n<script>// Your rain storm</script>', solution: '<canvas id=\"rain\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"rain\"),ctx=canvas.getContext(\"2d\");\n  let drops=[],splashes=[],last=0;\n  for(let i=0;i<100;i++)drops.push({x:Math.random()*600,y:Math.random()*400,len:15+Math.random()*10,speed:400+Math.random()*200});\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    drops.forEach(d=>{d.x-=100*dt;d.y+=d.speed*dt;if(d.y>400){d.y=0;d.x=Math.random()*600;for(let s=0;s<3;s++)splashes.push({x:d.x,y:395,vx:(Math.random()-0.5)*50,vy:-50-Math.random()*100,life:1});}});\n    splashes.forEach(s=>{s.x+=s.vx*dt;s.y+=s.vy*dt;s.vy+=500*dt;s.life-=3*dt;});\n    splashes=splashes.filter(s=>s.life>0);\n    ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,600,400);\n    ctx.strokeStyle=\"rgba(180,210,255,0.4)\";ctx.lineWidth=1.5;\n    drops.forEach(d=>{ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(d.x-100*0.016,d.y-d.len);ctx.stroke();});\n    splashes.forEach(s=>{ctx.globalAlpha=s.life;ctx.fillStyle=\"rgba(180,210,255,0.6)\";ctx.beginPath();ctx.arc(s.x,s.y,2,0,7);ctx.fill();});\n    ctx.globalAlpha=1;\n    requestAnimationFrame(draw);\n  }requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Particle', value: 'x, y, vx, vy, life, size, color' },
        { label: 'Emitter', value: 'Spawns particles at a rate per second' },
        { label: 'Life decay', value: 'life -= decay * dt' },
        { label: 'Fire effect', value: 'Negative vy, horizontal randomness' },
        { label: 'Explosion', value: 'Burst outward from center point' },
        { label: 'Pooling', value: 'Reuse particle objects to avoid GC' }
      ]
    },,

    {
      id: 'canvas-29',
      number: 29,
      partLabel: 'Part 3: Animation',
      title: 'Easing Functions',
      subtitle: 'Bounce, elastic, and cubic-bezier equivalents',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-24'],
      learningObjectives: [
        'Implement common easing functions from scratch',
        'Apply easing to UI animations and transitions',
        'Create cubic-bezier easing equivalents',
        'Build a tweening system for property animation'
      ],
      sections: [
        {
          id: 's1',
          title: 'Easing Function Library',
          whyItMatters: 'Easing makes UI animations feel polished and professional. A reusable easing library accelerates development.',
          content: "## Complete Easing Library\n\n```javascript\nconst Easing = {\n  easeIn: (t, n = 2) => Math.pow(t, n),\n  easeOut: (t, n = 2) => 1 - Math.pow(1 - t, n),\n  easeInOut: (t, n = 2) => t < 0.5 ? Math.pow(2, n - 1) * Math.pow(t, n) : 1 - Math.pow(-2 * t + 2, n) / 2,\n  easeInBack: t => 2.70158 * t * t * t - 1.70158 * t * t,\n  easeOutBack: t => 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2),\n  easeOutElastic: t => { if (t === 0 || t === 1) return t; return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1; },\n  easeOutBounce: t => { const n1 = 7.5625, d1 = 2.75; if (t < 1 / d1) return n1 * t * t; else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75; else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375; else return n1 * (t -= 2.625 / d1) * t + 0.984375; }\n};\n```\n\n### Tweening System\n\n```javascript\nclass Tween {\n  constructor(obj, prop, from, to, duration, easing = Easing.easeOut) {\n    this.obj = obj; this.prop = prop;\n    this.from = from; this.to = to;\n    this.duration = duration; this.easing = easing;\n    this.elapsed = 0; this.done = false;\n  }\n  update(dt) {\n    if (this.done) return;\n    this.elapsed += dt;\n    const t = Math.min(this.elapsed / this.duration, 1);\n    this.obj[this.prop] = this.from + (this.to - this.from) * this.easing(t);\n    if (t >= 1) this.done = true;\n  }\n}\n```\n\n### Easing Curve Visualizer\n\n```javascript\nfunction drawEasing(ctx, fn, x, y, w, h, color) {\n  ctx.beginPath();\n  ctx.strokeStyle = color;\n  for (let i = 0; i <= 100; i++) {\n    const t = i / 100, v = fn(t);\n    ctx[i === 0 ? 'moveTo' : 'lineTo'](x + t * w, y + h - v * h);\n  }\n  ctx.stroke();\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv29-q1', type: 'mcq', question: 'What does an easing function transform?', options: ['A linear t (0-1) into curved progress', 'A color into position', 'Time into speed', 'Position into color'], correctAnswer: 0, explanation: 'Easing functions remap linear progress t to create acceleration/deceleration curves.', difficulty: 1 },
          { id: 'cv29-q2', type: 'true-false', question: 'easeOutBack makes an animation overshoot the target before settling.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Back easing goes past the end value, then comes back to it.', difficulty: 1 },
          { id: 'cv29-q3', type: 'mcq', question: 'Which easing would you use for a ball bouncing to a stop?', options: ['easeOutBounce', 'easeInElastic', 'linear', 'easeInBack'], correctAnswer: 0, explanation: 'easeOutBounce simulates a ball losing energy on each bounce.', difficulty: 1 },
          { id: 'cv29-q4', type: 'true-false', question: 'A tween system requires from, to, duration, and easing function.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Tween = animate property from A to B over time using easing.', difficulty: 1 },
          { id: 'cv29-q5', type: 'mcq', question: 'The easeInOut function accelerates at start and decelerates at end.', options: ['True', 'False'], correctAnswer: 0, explanation: 'easeInOut provides smooth start (accelerate) and smooth stop (decelerate).', difficulty: 1 },
          { id: 'cv29-q6', type: 'true-false', question: 'Elastic easing temporarily exceeds the 0-1 range before settling.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Elastic goes above 1 and below 0, creating an oscillation effect.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv29-e1', type: 'easy', title: 'Easing Gallery', instructions: 'Display 6 different easing curves visually on canvas. Each curve should show the function name.', hint: 'Define array of easing functions. Draw each curve using moveTo/lineTo in a loop.', starterCode: '<canvas id=\"easingGallery\" width=\"600\" height=\"400\"></canvas>\n<script>// Your easing gallery</script>', solution: '<canvas id=\"easingGallery\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const ctx=document.getElementById(\"easingGallery\").getContext(\"2d\");\n  const easings=[\n    {name:\"linear\",fn:t=>t},\n    {name:\"easeOut\",fn:t=>t*(2-t)},\n    {name:\"easeIn\",fn:t=>t*t},\n    {name:\"easeInOut\",fn:t=>t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2},\n    {name:\"easeOutBounce\",fn:t=>{const n1=7.5625,d1=2.75;if(t<1/d1)return n1*t*t;else if(t<2/d1)return n1*(t-=1.5/d1)*t+0.75;else if(t<2.5/d1)return n1*(t-=2.25/d1)*t+0.9375;else return n1*(t-=2.625/d1)*t+0.984375;}},\n    {name:\"easeOutElastic\",fn:t=>{if(t===0||t===1)return t;return Math.pow(2,-10*t)*Math.sin((t*10-0.75)*(2*Math.PI/3))+1;}}\n  ];\n  easings.forEach((e,i)=>{const x=10,y=5+i*65,w=180,h=55;\n    ctx.strokeStyle=\"#ccc\";ctx.strokeRect(x,y,w,h);\n    ctx.beginPath();ctx.strokeStyle=\"#E91E63\";ctx.lineWidth=2;\n    for(let j=0;j<=100;j++){const t=j/100,v=e.fn(t);j===0?ctx.moveTo(x+t*w,y+h-v*h):ctx.lineTo(x+t*w,y+h-v*h);}\n    ctx.stroke();ctx.fillStyle=\"#333\";ctx.font=\"12px Arial\";ctx.fillText(e.name,x+5,y+15);});\n</script>' },
        { id: 'cv29-e2', type: 'medium', title: 'Animated UI Panel', instructions: 'Create a UI panel that slides in from the left using easeOutBack. Add buttons for different easing functions.', hint: 'Animate panel x position from -300 to 50 using tween.', starterCode: '<canvas id=\"panel\" width=\"600\" height=\"400\"></canvas><button onclick=\"toggle()\">Toggle</button>\n<script>// Your panel</script>', solution: '<canvas id=\"panel\" width=\"600\" height=\"400\"></canvas><button onclick=\"toggle()\">Toggle</button>\n<script>\n  const canvas=document.getElementById(\"panel\"),ctx=canvas.getContext(\"2d\");\n  let px=-300,target=-300,elapsed=0,animating=false,last=0;\n  function toggle(){target=target===-300?50:-300;elapsed=0;animating=true;}\n  function easeOutBack(t){const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);}\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    if(animating){elapsed+=dt;const t=Math.min(elapsed/0.8,1);px=-300+(50-(-300))*easeOutBack(t);if(t>=1)animating=false;}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,600,400);\n    ctx.fillStyle=\"#333\";ctx.fillRect(px,50,250,300);\n    ctx.fillStyle=\"#fff\";ctx.font=\"bold 24px Arial\";ctx.textAlign=\"center\";\n    ctx.fillText(\"Settings Panel\",px+125,130);\n    requestAnimationFrame(draw);\n  }draw();\n</script>' },
        { id: 'cv29-e3', type: 'hard', title: 'Custom Cubic-Bezier Editor', instructions: 'Build an interactive cubic-bezier curve editor with draggable control points.', hint: 'Use De Casteljau algorithm. Map control points between 0-1.', starterCode: '<canvas id=\"bezier\" width=\"600\" height=\"400\"></canvas>\n<script>// Your bezier editor</script>', solution: '<canvas id=\"bezier\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"bezier\"),ctx=canvas.getContext(\"2d\");\n  let cp1={x:0.2,y:0.8},cp2={x:0.8,y:0.2},drag=null,last=0,animX=0;\n  canvas.addEventListener(\"mousedown\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;[[cp1],[cp2]].forEach(([cp])=>{\n    const px=50+cp.x*400,py=350-cp.y*300;if(Math.sqrt((mx-px)**2+(my-py)**2)<15)drag=cp;});});\n  canvas.addEventListener(\"mousemove\",e=>{if(!drag)return;const r=canvas.getBoundingClientRect();drag.x=Math.max(0,Math.min(1,(e.clientX-r.left-50)/400));drag.y=Math.max(0,Math.min(1,(350-(e.clientY-r.top))/300));});\n  canvas.addEventListener(\"mouseup\",()=>drag=null);\n  function bez(t,p0,p1,p2,p3){const u=1-t;return u*u*u*p0+3*u*u*t*p1+3*u*t*t*p2+t*t*t*p3;}\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    animX+=dt*80;if(animX>400)animX=0;\n    ctx.fillStyle=\"#fff\";ctx.fillRect(0,0,600,400);\n    // Draw curve\n    ctx.beginPath();ctx.strokeStyle=\"#E91E63\";ctx.lineWidth=3;\n    for(let i=0;i<=100;i++){const t=i/100,x=50+bez(t,0,cp1.x,cp2.x,1)*400,y=350-bez(t,0,cp1.y,cp2.y,1)*300;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}\n    ctx.stroke();\n    // Control handles\n    ctx.strokeStyle=\"#999\";ctx.beginPath();ctx.moveTo(50,350);ctx.lineTo(50+cp1.x*400,350-cp1.y*300);ctx.lineTo(50+cp2.x*400,350-cp2.y*300);ctx.lineTo(450,50);ctx.stroke();\n    [cp1,cp2].forEach(cp=>{ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(50+cp.x*400,350-cp.y*300,10,0,7);ctx.fill();ctx.strokeStyle=\"#fff\";ctx.lineWidth=2;ctx.stroke();});\n    // Preview\n    const t2=animX/400,easedY=bez(t2,0,cp1.y,cp2.y,1);\n    ctx.fillStyle=\"#2196F3\";ctx.beginPath();ctx.arc(50+animX,350-easedY*300,8,0,7);ctx.fill();\n    ctx.fillStyle=\"#333\";ctx.font=\"14px Arial\";ctx.fillText(\"Drag control points\",10,20);\n    requestAnimationFrame(draw);\n  }draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'easeOut', value: '1 - (1 - t)^2' },
        { label: 'easeInOut', value: 'Accelerate then decelerate' },
        { label: 'Back', value: 'Overshoots target then settles' },
        { label: 'Elastic', value: 'Oscillates with dampening' },
        { label: 'Bounce', value: 'Multi-bounce at end' },
        { label: 'Cubic-bezier', value: 'Two control points define curve' }
      ]
    },,

    {
      id: 'canvas-30',
      number: 30,
      partLabel: 'Part 3: Animation',
      title: 'Interactive Mouse Animation',
      subtitle: 'Mouse tracking and interactive effects',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-29'],
      learningObjectives: [
        'Track mouse position for interactive animations',
        'Create mouse-reactive visual effects',
        'Implement smooth mouse following with lerp',
        'Build a particle trail that follows the mouse'
      ],
      sections: [
        {
          id: 's1',
          title: 'Mouse Tracking and Reactive Effects',
          whyItMatters: 'Mouse-reactive animations create engaging, playful experiences that respond directly to user input.',
          content: "## Tracking Mouse Position\n\n```javascript\nconst mouse = { x: 0, y: 0 };\ncanvas.addEventListener('mousemove', (e) => {\n  const rect = canvas.getBoundingClientRect();\n  mouse.x = e.clientX - rect.left;\n  mouse.y = e.clientY - rect.top;\n});\n```\n\n### Smooth Follow with Lerp\n\n```javascript\nconst follower = { x: 0, y: 0 };\nconst SMOOTHING = 0.1;\nfunction update() {\n  follower.x += (mouse.x - follower.x) * SMOOTHING;\n  follower.y += (mouse.y - follower.y) * SMOOTHING;\n}\n```\n\n### Mouse Trail with Particles\n\n```javascript\nclass TrailParticle {\n  constructor(x, y) {\n    this.x = x; this.y = y;\n    this.life = 1;\n    this.size = Math.random() * 6 + 2;\n    this.hue = Math.random() * 360;\n  }\n  update(dt) { this.life -= dt * 2; this.size *= 0.97; }\n  draw(ctx) {\n    ctx.globalAlpha = this.life;\n    ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`;\n    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, 7); ctx.fill();\n  }\n}\n// In loop: particles.push(new TrailParticle(mouse.x, mouse.y));\n// particles = particles.filter(p => p.life > 0);\n```\n\n### Magnetic Attraction\n\n```javascript\nconst objects = [];\nfor (let i = 0; i < 20; i++) {\n  objects.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: 0, vy: 0, size: 10 + Math.random() * 20 });\n}\nfunction update(dt) {\n  objects.forEach(obj => {\n    const dx = mouse.x - obj.x, dy = mouse.y - obj.y, dist = Math.sqrt(dx * dx + dy * dy);\n    if (dist > 1) { const f = 200 / (dist + 50); obj.vx += (dx / dist) * f * dt; obj.vy += (dy / dist) * f * dt; }\n    obj.vx *= 0.95; obj.vy *= 0.95;\n    obj.x += obj.vx * dt; obj.y += obj.vy * dt;\n  });\n}\n```\n\n### Interactive Ripple Effect\n\n```javascript\nclass Ripple {\n  constructor(x, y) { this.x = x; this.y = y; this.radius = 0; this.maxRadius = 100; this.opacity = 0.8; }\n  update(dt) { this.radius += 100 * dt; this.opacity -= dt * 1.5; }\n  draw(ctx) { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, 7); ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`; ctx.lineWidth = 3; ctx.stroke(); }\n  get dead() { return this.opacity <= 0; }\n}\ncanvas.addEventListener('click', () => ripples.push(new Ripple(mouse.x, mouse.y)));\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv30-q1', type: 'mcq', question: 'How do you convert mouse event coordinates to canvas coordinates?', options: ['Subtract getBoundingClientRect().left/top', 'Use event.screenX/screenY', 'Divide by devicePixelRatio', 'Use event.layerX/layerY'], correctAnswer: 0, explanation: 'getBoundingClientRect() gives the canvas position. Subtract it from clientX/clientY.', difficulty: 1 },
          { id: 'cv30-q2', type: 'mcq', question: 'What creates a smooth mouse trail effect?', options: ['Storing past positions and drawing with decreasing opacity', 'Drawing many circles at mouse position', 'Using shadow effect', 'Increasing line width'], correctAnswer: 0, explanation: 'A trail stores previous positions and draws them with fading opacity.', difficulty: 1 },
          { id: 'cv30-q3', type: 'true-false', question: 'A lerp factor of 0.1 moves the follower 10% toward the target each frame.', options: ['True', 'False'], correctAnswer: 0, explanation: 'With lerp, follower += (target - follower) * 0.1 moves 10% closer each frame.', difficulty: 1 },
          { id: 'cv30-q4', type: 'mcq', question: 'Which event should you listen to for tracking mouse position?', options: ['mousemove', 'mouseover', 'mousedown', 'click'], correctAnswer: 0, explanation: 'mousemove fires continuously as the mouse moves across the canvas.', difficulty: 1 },
          { id: 'cv30-q5', type: 'true-false', question: 'Magnetic attraction force increases with distance.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Magnetic force is inversely proportional to distance.', difficulty: 2 },
          { id: 'cv30-q6', type: 'true-false', question: 'A ripple effect expands outward from the click point over time.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Ripples start at radius 0 and grow outward while fading.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv30-e1', type: 'easy', title: 'Mouse Follower', instructions: 'Create a circle that smoothly follows the mouse cursor with a slight delay.', hint: 'Use lerp: circle.x += (mouse.x - circle.x) * 0.08.', starterCode: '<canvas id=\"follower\" width=\"500\" height=\"400\"></canvas>\n<script>// Your follower</script>', solution: '<canvas id=\"follower\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"follower\"),ctx=canvas.getContext(\"2d\");\n  const mouse={x:250,y:200},circle={x:250,y:200,r:25};\n  canvas.addEventListener(\"mousemove\",e=>{const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});\n  function draw(){circle.x+=(mouse.x-circle.x)*0.08;circle.y+=(mouse.y-circle.y)*0.08;\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    ctx.fillStyle=\"rgba(33,150,243,0.3)\";ctx.beginPath();ctx.arc(circle.x,circle.y,circle.r+15,0,7);ctx.fill();\n    ctx.fillStyle=\"#2196F3\";ctx.beginPath();ctx.arc(circle.x,circle.y,circle.r,0,7);ctx.fill();\n    requestAnimationFrame(draw);}draw();\n</script>' },
        { id: 'cv30-e2', type: 'medium', title: 'Magnetic Repulsion', instructions: 'Create 20 circles that are repelled by the mouse cursor.', hint: 'Apply force inversely proportional to distance from mouse.', starterCode: '<canvas id=\"magnet\" width=\"600\" height=\"400\"></canvas>\n<script>// Your magnetic repulsion</script>', solution: '<canvas id=\"magnet\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"magnet\"),ctx=canvas.getContext(\"2d\");\n  const mouse={x:300,y:200};\n  canvas.addEventListener(\"mousemove\",e=>{const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});\n  const balls=[];for(let i=0;i<20;i++)balls.push({x:Math.random()*600,y:Math.random()*400,vx:0,vy:0,r:10+Math.random()*15,color:`hsl(${i*18},80%,55%)`});\n  let last=0;\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    balls.forEach(b=>{const dx=b.x-mouse.x,dy=b.y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<200&&dist>1){const f=300/(dist+10);b.vx+=(dx/dist)*f*dt;b.vy+=(dy/dist)*f*dt;}b.vx*=0.95;b.vy*=0.95;b.x+=b.vx*dt;b.y+=b.vy*dt;if(b.x<0||b.x>600)b.vx*=-1;if(b.y<0||b.y>400)b.vy*=-1;});\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,600,400);\n    balls.forEach(b=>{ctx.fillStyle=b.color;ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fill();});\n    requestAnimationFrame(draw);}requestAnimationFrame(draw);\n</script>' },
        { id: 'cv30-e3', type: 'hard', title: 'Ripple + Particle Trail', instructions: 'Combine both effects: particle trail follows mouse, clicking creates expanding ripples.', hint: 'Push trail particles each frame. On click, push ripple object.', starterCode: '<canvas id=\"rippleTrail\" width=\"600\" height=\"400\"></canvas>\n<script>// Your ripple + trail</script>', solution: '<canvas id=\"rippleTrail\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"rippleTrail\"),ctx=canvas.getContext(\"2d\");\n  const mouse={x:300,y:200};let particles=[],ripples=[],last=0;\n  canvas.addEventListener(\"mousemove\",e=>{const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});\n  canvas.addEventListener(\"click\",()=>ripples.push({x:mouse.x,y:mouse.y,radius:0,opacity:0.8}));\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    particles.push({x:mouse.x,y:mouse.y,life:1,size:3+Math.random()*4,hue:Math.random()*360});\n    if(particles.length>200)particles.splice(0,particles.length-200);\n    particles.forEach(p=>{p.life-=2*dt;p.size*=0.97;});particles=particles.filter(p=>p.life>0);\n    ripples.forEach(r=>{r.radius+=120*dt;r.opacity-=1.2*dt;});ripples=ripples.filter(r=>r.opacity>0);\n    ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,600,400);\n    particles.forEach(p=>{ctx.globalAlpha=p.life;ctx.fillStyle=`hsl(${p.hue},100%,60%)`;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,7);ctx.fill();});\n    ripples.forEach(r=>{ctx.beginPath();ctx.arc(r.x,r.y,r.radius,0,7);ctx.strokeStyle=`rgba(255,255,255,${r.opacity})`;ctx.lineWidth=2;ctx.stroke();});\n    ctx.globalAlpha=1;\n    requestAnimationFrame(draw);}requestAnimationFrame(draw);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Mouse tracking', value: 'canvas.addEventListener("mousemove", ...)' },
        { label: 'Coord conversion', value: 'e.clientX - rect.left' },
        { label: 'Smooth follow', value: 'pos += (target - pos) * factor' },
        { label: 'Mouse trail', value: 'Store positions array, draw with fade' },
        { label: 'Ripple', value: 'Expanding circle with fading opacity' },
        { label: 'Magnetic force', value: 'force / (distance + constant)' }
      ]
    },,

    {
      id: 'canvas-31',
      number: 31,
      partLabel: 'Part 4: Interactivity',
      title: 'Mouse Events',
      subtitle: 'Click, mousemove, mousedown/up, coordinates',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-30'],
      learningObjectives: [
        'Handle all mouse events on canvas',
        'Convert mouse coordinates to canvas space',
        'Implement click detection on shapes',
        'Build interactive elements with mouse feedback'
      ],
      sections: [
        {
          id: 's1',
          title: 'Mouse Event Handling',
          whyItMatters: 'Mouse interaction is the primary input method for desktop canvas applications. Proper handling is essential for all interactive apps.',
          content: "## Mouse Events on Canvas\n\n```javascript\ncanvas.addEventListener('click', handleClick);\ncanvas.addEventListener('mousedown', handleMouseDown);\ncanvas.addEventListener('mouseup', handleMouseUp);\ncanvas.addEventListener('mousemove', handleMouseMove);\ncanvas.addEventListener('mouseenter', handleMouseEnter);\ncanvas.addEventListener('mouseleave', handleMouseLeave);\n\nfunction getCanvasCoords(e) {\n  const rect = canvas.getBoundingClientRect();\n  return {\n    x: e.clientX - rect.left,\n    y: e.clientY - rect.top\n  };\n}\n```\n\n### Click Detection on Shapes\n\n```javascript\nfunction hitTestCircle(mx, my, circle) {\n  const dx = mx - circle.x, dy = my - circle.y;\n  return Math.sqrt(dx * dx + dy * dy) < circle.radius;\n}\n\nfunction hitTestRect(mx, my, rect) {\n  return mx >= rect.x && mx <= rect.x + rect.w &&\n         my >= rect.y && my <= rect.y + rect.h;\n}\n\ncanvas.addEventListener('click', (e) => {\n  const { x, y } = getCanvasCoords(e);\n  \n  buttons.forEach(btn => {\n    if (hitTestRect(x, y, btn)) {\n      btn.onClick();\n    }\n  });\n});\n```\n\n### Hover Effects\n\n```javascript\nlet hoveredButton = null;\n\ncanvas.addEventListener('mousemove', (e) => {\n  const { x, y } = getCanvasCoords(e);\n  \n  hoveredButton = buttons.find(btn => hitTestRect(x, y, btn));\n  canvas.style.cursor = hoveredButton ? 'pointer' : 'default';\n});\n\n// In render loop\nbuttons.forEach(btn => {\n  ctx.fillStyle = btn === hoveredButton ? btn.hoverColor : btn.color;\n  ctx.fillRect(btn.x, btn.y, btn.w, btn.h);\n});\n```\n\n### Drag Detection\n\n```javascript\nlet isDragging = false;\nlet dragTarget = null;\nlet dragOffset = { x: 0, y: 0 };\n\ncanvas.addEventListener('mousedown', (e) => {\n  const pos = getCanvasCoords(e);\n  const hit = shapes.find(s => hitTestCircle(pos.x, pos.y, s));\n  if (hit) {\n    isDragging = true;\n    dragTarget = hit;\n    dragOffset = { x: pos.x - hit.x, y: pos.y - hit.y };\n  }\n});\n\ncanvas.addEventListener('mousemove', (e) => {\n  if (!isDragging) return;\n  const pos = getCanvasCoords(e);\n  dragTarget.x = pos.x - dragOffset.x;\n  dragTarget.y = pos.y - dragOffset.y;\n});\n\ncanvas.addEventListener('mouseup', () => {\n  isDragging = false;\n  dragTarget = null;\n});\n```\n\n### Right-Click Context Menu\n\n```javascript\ncanvas.addEventListener('contextmenu', (e) => {\n  e.preventDefault(); // Prevent browser context menu\n  const pos = getCanvasCoords(e);\n  showCustomContextMenu(pos.x, pos.y);\n});\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv31-q1', type: 'mcq', question: 'Which method converts page coordinates to canvas coordinates?', options: ['getBoundingClientRect() with clientX/Y', 'getCanvasCoords()', 'convertCoords()', 'pageToCanvas()'], correctAnswer: 0, explanation: 'Subtract the canvas bounding rect left/top from clientX/clientY for canvas coordinates.', difficulty: 1 },
          { id: 'cv31-q2', type: 'true-false', question: 'Canvas shapes are DOM elements and receive click events directly.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Canvas shapes are not DOM elements. You must manually implement hit testing.', difficulty: 1 },
          { id: 'cv31-q3', type: 'mcq', question: 'What event should you preventDefault on to block the browser context menu?', options: ['contextmenu', 'mousedown', 'mouseup', 'click'], correctAnswer: 0, explanation: 'The contextmenu event fires before the browser shows its right-click menu.', difficulty: 2 },
          { id: 'cv31-q4', type: 'mcq', question: 'How do you implement hover effects on canvas shapes?', options: ['Track mouse position and check hit tests each frame', 'Use CSS :hover on canvas elements', 'Add mouseenter/mouseleave listeners to shapes', 'Set shape.hovered property'], correctAnswer: 0, explanation: 'In the mousemove handler, check which shape the mouse is over and track it for rendering.', difficulty: 2 },
          { id: 'cv31-q5', type: 'true-false', question: 'The mousemove event fires even when the mouse does not move.', options: ['True', 'False'], correctAnswer: 1, explanation: 'mousemove only fires when the mouse changes position.', difficulty: 1 },
          { id: 'cv31-q6', type: 'mcq', question: 'What is the correct formula for circle hit testing?', options: ['sqrt(dx² + dy²) < radius', 'dx < radius && dy < radius', 'abs(dx) + abs(dy) < radius', 'max(dx, dy) < radius'], correctAnswer: 0, explanation: 'The distance from the mouse to the circle center must be less than the radius.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv31-e1', type: 'easy', title: 'Click Counter Button', instructions: 'Draw a button on canvas. Each time the user clicks it, increment and display a counter.', hint: 'Draw the button, track rectangle bounds, check click coordinates against bounds.', starterCode: '<canvas id=\"counter\" width=\"300\" height=\"200\"></canvas>\n<script>// Your click counter</script>', solution: '<canvas id=\"counter\" width=\"300\" height=\"200\"></canvas>\n<script>\n  const canvas=document.getElementById(\"counter\"),ctx=canvas.getContext(\"2d\");\n  let count=0;const btn={x:75,y:50,w:150,h:60};\n  canvas.addEventListener(\"click\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;if(mx>=btn.x&&mx<=btn.x+btn.w&&my>=btn.y&&my<=btn.y+btn.h)count++;});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,300,200);\n    ctx.fillStyle=\"#2196F3\";ctx.fillRect(btn.x,btn.y,btn.w,btn.h);\n    ctx.fillStyle=\"#fff\";ctx.font=\"bold 18px Arial\";ctx.textAlign=\"center\";ctx.textBaseline=\"middle\";ctx.fillText(\"Click Me!\",150,80);\n    ctx.fillStyle=\"#333\";ctx.font=\"24px Arial\";ctx.fillText(`Count: ${count}`,150,150);\n    requestAnimationFrame(draw);}draw();\n</script>' },
        { id: 'cv31-e2', type: 'medium', title: 'Shape Click Game', instructions: 'Display 5 randomly placed circles. Clicking a circle removes it and spawns a new one at a random position. Show score.', hint: 'Use distance-based hit testing. Track active circles array.', starterCode: '<canvas id=\"shapeGame\" width=\"500\" height=\"400\"></canvas>\n<script>// Your shape click game</script>', solution: '<canvas id=\"shapeGame\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"shapeGame\"),ctx=canvas.getContext(\"2d\");\n  let score=0,circles=[];\n  for(let i=0;i<5;i++)circles.push({x:Math.random()*480+10,y:Math.random()*380+10,r:20+Math.random()*15,color:`hsl(${Math.random()*360},80%,55%)`});\n  canvas.addEventListener(\"click\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;\n    for(let i=circles.length-1;i>=0;i--){const c=circles[i];if(Math.sqrt((mx-c.x)**2+(my-c.y)**2)<c.r){score++;circles.splice(i,1);circles.push({x:Math.random()*480+10,y:Math.random()*380+10,r:20+Math.random()*15,color:`hsl(${Math.random()*360},80%,55%)`});}}});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    circles.forEach(c=>{ctx.fillStyle=c.color;ctx.beginPath();ctx.arc(c.x,c.y,c.r,0,7);ctx.fill();});\n    ctx.fillStyle=\"#333\";ctx.font=\"20px Arial\";ctx.fillText(`Score: ${score}`,10,30);\n    requestAnimationFrame(draw);}draw();\n</script>' },
        { id: 'cv31-e3', type: 'hard', title: 'Draggable Shapes with Snap', instructions: 'Create 4 draggable colored rectangles. When dropped near a target zone, snap to it. Show connection lines when snapped.', hint: 'Track drag state. On mouseup, check distance to snap zone. If close, snap into position.', starterCode: '<canvas id=\"snap\" width=\"600\" height=\"400\"></canvas>\n<script>// Your draggable shapes with snap</script>', solution: '<canvas id=\"snap\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"snap\"),ctx=canvas.getContext(\"2d\");\n  const shapes=[{x:50,y:50,w:60,h:60,color:\"#E91E63\",origX:50,origY:50,snapped:false},{x:150,y:50,w:60,h:60,color:\"#2196F3\",origX:150,origY:50,snapped:false},{x:250,y:50,w:60,h:60,color:\"#4CAF50\",origX:250,origY:50,snapped:false},{x:350,y:50,w:60,h:60,color:\"#FFC107\",origX:350,origY:50,snapped:false}];\n  const zones=[{x:100,y:300,w:80,h:80},{x:250,y:300,w:80,h:80},{x:400,y:300,w:80,h:80},{x:100,y:200,w:80,h:80}];\n  let drag=null,offset={};\n  canvas.addEventListener(\"mousedown\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;\n    shapes.forEach(s=>{if(mx>=s.x&&mx<=s.x+s.w&&my>=s.y&&my<=s.y+s.h){drag=s;offset={x:mx-s.x,y:my-s.y};s.snapped=false;}});});\n  canvas.addEventListener(\"mousemove\",e=>{if(!drag)return;const r=canvas.getBoundingClientRect();drag.x=e.clientX-r.left-offset.x;drag.y=e.clientY-r.top-offset.y;});\n  canvas.addEventListener(\"mouseup\",()=>{if(!drag)return;\n    zones.forEach(z=>{const cx=drag.x+drag.w/2,cy=drag.y+drag.h/2,zcx=z.x+z.w/2,zcy=z.y+z.h/2;if(Math.sqrt((cx-zcx)**2+(cy-zcy)**2)<40){drag.x=zcx-drag.w/2;drag.y=zcy-drag.h/2;drag.snapped=true;}});\n    if(!drag.snapped){drag.x=drag.origX;drag.y=drag.origY;}\n    drag=null;});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,600,400);\n    zones.forEach(z=>{ctx.strokeStyle=\"#999\";ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.strokeRect(z.x,z.y,z.w,z.h);ctx.setLineDash([]);});\n    shapes.forEach(s=>{ctx.fillStyle=s.color;ctx.fillRect(s.x,s.y,s.w,s.h);ctx.strokeRect(s.x,s.y,s.w,s.h);if(!s.snapped&&s!==drag){ctx.fillStyle=\"#666\";ctx.font=\"10px Arial\";ctx.fillText(\"drag me\",s.x+10,s.y+35);}});\n    requestAnimationFrame(draw);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Click handler', value: 'canvas.addEventListener("click", fn)' },
        { label: 'Canvas coords', value: 'e.clientX - rect.left, e.clientY - rect.top' },
        { label: 'Circle hit test', value: 'distance < radius' },
        { label: 'Rect hit test', value: 'mx >= x && mx <= x+w && my >= y && my <= y+h' },
        { label: 'Drag pattern', value: 'mousedown start, mousemove update, mouseup end' },
        { label: 'Right-click', value: 'contextmenu event + preventDefault()' }
      ]
    },,

    {
      id: 'canvas-32',
      number: 32,
      partLabel: 'Part 4: Interactivity',
      title: 'Keyboard Controls',
      subtitle: 'Keydown/keyup, WASD movement, game controls',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-31'],
      learningObjectives: [
        'Capture keyboard input with keydown/keyup events',
        'Implement smooth WASD movement',
        'Manage key state for simultaneous key presses',
        'Create game control mappings'
      ],
      sections: [
        {
          id: 's1',
          title: 'Keyboard Input Management',
          whyItMatters: 'Keyboard controls are essential for games and creative tools. Proper key state management enables smooth, responsive controls.',
          content: "## Key State Tracking\n\n```javascript\nconst keys = {};\n\ndocument.addEventListener('keydown', (e) => {\n  keys[e.code] = true;\n  // Prevent default for game keys (scrolling, etc.)\n  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {\n    e.preventDefault();\n  }\n});\n\ndocument.addEventListener('keyup', (e) => {\n  keys[e.code] = false;\n});\n\n// In game loop\nfunction update(dt) {\n  if (keys['ArrowLeft'] || keys['KeyA']) player.x -= SPEED * dt;\n  if (keys['ArrowRight'] || keys['KeyD']) player.x += SPEED * dt;\n  if (keys['ArrowUp'] || keys['KeyW']) player.y -= SPEED * dt;\n  if (keys['ArrowDown'] || keys['KeyS']) player.y += SPEED * dt;\n}\n```\n\n### Normalized Diagonal Movement\n\n```javascript\nfunction getMovementInput() {\n  let dx = 0, dy = 0;\n  if (keys['ArrowLeft'] || keys['KeyA']) dx -= 1;\n  if (keys['ArrowRight'] || keys['KeyD']) dx += 1;\n  if (keys['ArrowUp'] || keys['KeyW']) dy -= 1;\n  if (keys['ArrowDown'] || keys['KeyS']) dy += 1;\n  \n  // Normalize for consistent diagonal speed\n  const len = Math.sqrt(dx * dx + dy * dy);\n  if (len > 0) { dx /= len; dy /= len; }\n  \n  return { x: dx, y: dy };\n}\n\nfunction update(dt) {\n  const input = getMovementInput();\n  player.x += input.x * SPEED * dt;\n  player.y += input.y * SPEED * dt;\n}\n```\n\n### Key Repeat Handling\n\n```javascript\n// keydown fires repeatedly when held (with OS repeat delay)\n// Solution: track state, not events\n\n// BAD: triggers on initial press and repeats\ncanvas.addEventListener('keydown', (e) => {\n  player.shoot(); // Called multiple times!\n});\n\n// GOOD: check state in update loop\nfunction update(dt) {\n  if (keys['Space']) {\n    shootTimer += dt;\n    if (shootTimer >= SHOOT_COOLDOWN) {\n      player.shoot();\n      shootTimer = 0;\n    }\n  }\n}\n```\n\n### Game Control Mapping\n\n```javascript\nconst controls = {\n  moveLeft: ['ArrowLeft', 'KeyA'],\n  moveRight: ['ArrowRight', 'KeyD'],\n  moveUp: ['ArrowUp', 'KeyW'],\n  moveDown: ['ArrowDown', 'KeyS'],\n  jump: ['Space', 'KeyW'],\n  interact: ['KeyE'],\n  pause: ['Escape', 'KeyP']\n};\n\nfunction isPressed(action) {\n  return controls[action].some(code => keys[code]);\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv32-q1', type: 'mcq', question: 'What property of a keyboard event identifies the physical key?', options: ['e.code', 'e.key', 'e.keyCode', 'e.which'], correctAnswer: 0, explanation: 'e.code returns the physical key (e.g. "KeyA", "ArrowLeft") independent of keyboard layout.', difficulty: 1 },
          { id: 'cv32-q2', type: 'true-false', question: 'The keydown event fires continuously when a key is held down.', options: ['True', 'False'], correctAnswer: 0, explanation: 'keydown fires repeatedly due to OS key repeat. Handle input in the update loop instead.', difficulty: 1 },
          { id: 'cv32-q3', type: 'mcq', question: 'Why should you normalize diagonal movement input?', options: ['To prevent faster diagonal movement', 'To make movement smoother', 'To reduce CPU usage', 'To fix coordinate system'], correctAnswer: 0, explanation: 'Without normalization, moving diagonally gives speed * sqrt(2) instead of speed.', difficulty: 2 },
          { id: 'cv32-q4', type: 'true-false', question: 'You should use document.addEventListener for keyboard events, not canvas.addEventListener.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Canvas cannot receive focus by default. Attach keyboard listeners to the document or make the canvas focusable with tabindex.', difficulty: 2 },
          { id: 'cv32-q5', type: 'mcq', question: 'What does e.preventDefault() do for arrow keys?', options: ['Prevents the page from scrolling', 'Prevents key repeat', 'Stops other listeners', 'Changes the key value'], correctAnswer: 0, explanation: 'Arrow keys scroll the page by default. preventDefault() stops this behavior.', difficulty: 1 },
          { id: 'cv32-q6', type: 'true-false', question: 'e.key returns the character produced by the key press.', options: ['True', 'False'], correctAnswer: 0, explanation: 'e.key returns the character value ("a", "A", "1"), while e.code returns the physical key location.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv32-e1', type: 'easy', title: 'WASD Movement', instructions: 'Create a colored square that moves smoothly using WASD or arrow keys. The square should stay within the canvas bounds.', hint: 'Track key state in an object. In the animation loop, check keys and update position.', starterCode: '<canvas id=\"wasd\" width=\"500\" height=\"400\"></canvas>\n<script>// Your WASD movement</script>', solution: '<canvas id=\"wasd\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"wasd\"),ctx=canvas.getContext(\"2d\");\n  const keys={},player={x:230,y:180,w:40,h:40};\n  document.addEventListener(\"keydown\",e=>{keys[e.code]=true;if([\"ArrowUp\",\"ArrowDown\",\"ArrowLeft\",\"ArrowRight\",\"Space\"].includes(e.code))e.preventDefault();});\n  document.addEventListener(\"keyup\",e=>keys[e.code]=false);\n  let last=0;\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    let dx=0,dy=0;if(keys[\"ArrowLeft\"]||keys[\"KeyA\"])dx-=1;if(keys[\"ArrowRight\"]||keys[\"KeyD\"])dx+=1;if(keys[\"ArrowUp\"]||keys[\"KeyW\"])dy-=1;if(keys[\"ArrowDown\"]||keys[\"KeyS\"])dy+=1;\n    const len=Math.sqrt(dx*dx+dy*dy);if(len>0){dx/=len;dy/=len;}\n    player.x+=dx*300*dt;player.y+=dy*300*dt;\n    player.x=Math.max(0,Math.min(460,player.x));player.y=Math.max(0,Math.min(360,player.y));\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    ctx.fillStyle=\"#E91E63\";ctx.fillRect(player.x,player.y,player.w,player.h);\n    requestAnimationFrame(draw);}requestAnimationFrame(draw);\n</script>' },
        { id: 'cv32-e2', type: 'medium', title: 'Space Shooter (Keyboard)', instructions: 'Create a spaceship that moves with WASD and shoots bullets with Space. Limit fire rate with a cooldown.', hint: 'Track a shootTimer. Only allow shooting when timer exceeds cooldown.', starterCode: '<canvas id=\"shooter\" width=\"600\" height=\"400\"></canvas>\n<script>// Your space shooter</script>', solution: '<canvas id=\"shooter\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"shooter\"),ctx=canvas.getContext(\"2d\");\n  const keys={};let bullets=[],shootTimer=0,last=0;\n  const player={x:280,y:350,w:40,h:40};\n  document.addEventListener(\"keydown\",e=>{keys[e.code]=true;e.preventDefault();});\n  document.addEventListener(\"keyup\",e=>keys[e.code]=false);\n  function draw(ts){const dt=last?(ts-last)/1000:0;last=ts;\n    let dx=0;if(keys[\"ArrowLeft\"]||keys[\"KeyA\"])dx-=1;if(keys[\"ArrowRight\"]||keys[\"KeyD\"])dx+=1;\n    player.x+=dx*350*dt;player.x=Math.max(0,Math.min(560,player.x));\n    shootTimer+=dt;\n    if(keys[\"Space\"]&&shootTimer>=0.3){bullets.push({x:player.x+17,y:player.y,vy:-400});shootTimer=0;}\n    bullets.forEach(b=>{b.y+=b.vy*dt;});bullets=bullets.filter(b=>b.y>0);\n    ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,600,400);\n    ctx.fillStyle=\"#4CAF50\";ctx.fillRect(player.x,player.y,player.w,player.h);\n    ctx.fillStyle=\"#FFC107\";bullets.forEach(b=>{ctx.fillRect(b.x,b.y,6,15);});\n    requestAnimationFrame(draw);}requestAnimationFrame(draw);\n</script>' },
        { id: 'cv32-e3', type: 'hard', title: 'Remappable Controls Screen', instructions: 'Create a control remapping screen where users can click on an action and press a key to rebind it. Save bindings and use them in gameplay.', hint: 'Track a currently-rebinding action. On keydown, update the binding and exit rebind mode.', starterCode: '<canvas id=\"remap\" width=\"600\" height=\"400\"></canvas>\n<script>// Your remappable controls</script>', solution: '<canvas id=\"remap\" width=\"600\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"remap\"),ctx=canvas.getContext(\"2d\");\n  let bindings={up:\"KeyW\",down:\"KeyS\",left:\"KeyA\",right:\"KeyD\",shoot:\"Space\"};\n  let rebinding=null;\n  const actions=[{name:\"up\",y:50},{name:\"down\",y:100},{name:\"left\",y:150},{name:\"right\",y:200},{name:\"shoot\",y:250}];\n  canvas.addEventListener(\"click\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;actions.forEach(a=>{if(mx>=300&&mx<=500&&my>=a.y&&my<=a.y+40)rebinding=a.name;});});\n  document.addEventListener(\"keydown\",e=>{if(rebinding){bindings[rebinding]=e.code;rebinding=null;e.preventDefault();}});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,600,400);\n    ctx.fillStyle=\"#333\";ctx.font=\"18px Arial\";ctx.fillText(\"CONTROLS (click value to rebind)\",20,30);\n    actions.forEach(a=>{ctx.fillStyle=\"#333\";ctx.font=\"16px Arial\";ctx.textAlign=\"left\";ctx.fillText(a.name.toUpperCase(),50,a.y+28);\n      ctx.fillStyle=rebinding===a.name?\"#FFC107\":\"#2196F3\";ctx.fillRect(300,a.y,200,40);\n      ctx.fillStyle=\"#fff\";ctx.textAlign=\"center\";ctx.font=\"14px monospace\";ctx.fillText(rebinding===a.name?\"PRESS A KEY...\":bindings[a.name],400,a.y+28);});\n    requestAnimationFrame(draw);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Key state', value: 'keys[e.code] = true/false' },
        { label: 'Prevent scroll', value: 'e.preventDefault() for arrow keys' },
        { label: 'Normalize input', value: 'Divide dx,dy by length for consistent diagonal' },
        { label: 'Key repeat', value: 'Check state in update, not in keydown handler' },
        { label: 'Action mapping', value: 'Map logical actions to key codes' },
        { label: 'e.code vs e.key', value: 'code = physical key, key = character' }
      ]
    },,

    {
      id: 'canvas-33',
      number: 33,
      partLabel: 'Part 4: Interactivity',
      title: 'Drag and Drop Systems',
      subtitle: 'Drag shapes and drop targets',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-32'],
      learningObjectives: [
        'Implement click-and-drag for canvas shapes',
        'Create drop target zones with validation',
        'Handle drag state management and visual feedback',
        'Build a complete drag-and-drop puzzle'
      ],
      sections: [
        {
          id: 's1',
          title: 'Drag and Drop Mechanics',
          whyItMatters: 'Drag and drop enables intuitive interactions like rearranging, sorting, and assembling. Essential for creative tools and puzzles.',
          content: "## Drag Implementation\n\n```javascript\nconst state = {\n  dragging: null,\n  dragOffset: { x: 0, y: 0 },\n  dragStart: null\n};\n\ncanvas.addEventListener('mousedown', (e) => {\n  const pos = getCanvasCoords(e);\n  const hit = shapes.find(s => s.hitTest(pos.x, pos.y));\n  if (hit) {\n    state.dragging = hit;\n    state.dragOffset = { x: pos.x - hit.x, y: pos.y - hit.y };\n    state.dragStart = { x: hit.x, y: hit.y };\n    hit.onDragStart?.();\n  }\n});\n\ncanvas.addEventListener('mousemove', (e) => {\n  if (!state.dragging) return;\n  const pos = getCanvasCoords(e);\n  state.dragging.x = pos.x - state.dragOffset.x;\n  state.dragging.y = pos.y - state.dragOffset.y;\n});\n\ncanvas.addEventListener('mouseup', (e) => {\n  if (!state.dragging) return;\n  const pos = getCanvasCoords(e);\n  const target = dropZones.find(z => z.hitTest(pos.x, pos.y));\n  if (target && target.canAccept(state.dragging)) {\n    state.dragging.snapTo(target);\n    state.dragging.onDropped?.(target);\n  } else {\n    // Return to original position (or animate back)\n    state.dragging.x = state.dragStart.x;\n    state.dragging.y = state.dragStart.y;\n  }\n  state.dragging = null;\n});\n```\n\n### Visual Feedback During Drag\n\n```javascript\n// In render loop\nshapes.forEach(s => {\n  if (s === state.dragging) {\n    // Lift effect: shadow + slight scale\n    ctx.save();\n    ctx.shadowColor = 'rgba(0,0,0,0.3)';\n    ctx.shadowBlur = 15;\n    ctx.translate(s.x + s.w/2, s.y + s.h/2);\n    ctx.scale(1.05, 1.05);\n    ctx.translate(-s.x - s.w/2, -s.y - s.h/2);\n    s.draw(ctx);\n    ctx.restore();\n  } else if (dropZones.some(z => z.hitTest(s.x, s.y))) {\n    // Hover effect on drop zone\n    ctx.strokeStyle = '#4CAF50';\n    ctx.lineWidth = 3;\n    ctx.setLineDash([5, 5]);\n    ctx.strokeRect(s.x, s.y, s.w, s.h);\n    ctx.setLineDash([]);\n  }\n});\n```\n\n### Snap-to-Grid\n\n```javascript\nfunction snapToGrid(value, gridSize) {\n  return Math.round(value / gridSize) * gridSize;\n}\n\n// In mousemove\nstate.dragging.x = snapToGrid(pos.x - state.dragOffset.x, 32);\nstate.dragging.y = snapToGrid(pos.y - state.dragOffset.y, 32);\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv33-q1', type: 'mcq', question: 'What three events are needed for drag and drop?', options: ['mousedown, mousemove, mouseup', 'click, mousemove, mouseup', 'mousedown, mousemove, click', 'mousedown, mouseup, click'], correctAnswer: 0, explanation: 'mousedown starts drag, mousemove updates position, mouseup ends drag.', difficulty: 1 },
          { id: 'cv33-q2', type: 'true-false', question: 'Drag offset should be recalculated on every mousemove.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Drag offset is calculated once on mousedown and applied to each mousemove.', difficulty: 1 },
          { id: 'cv33-q3', type: 'mcq', question: 'What happens in a drag-cancel scenario?', options: ['Shape returns to original position', 'Shape stays at last drag position', 'Shape is deleted', 'An error is thrown'], correctAnswer: 0, explanation: 'If dropped outside a valid zone, the shape should return to its starting position.', difficulty: 2 },
          { id: 'cv33-q4', type: 'true-false', question: 'Snap-to-grid rounds positions to the nearest grid multiple.', options: ['True', 'False'], correctAnswer: 0, explanation: 'snapToGrid(value, gridSize) = Math.round(value / gridSize) * gridSize.', difficulty: 1 },
          { id: 'cv33-q5', type: 'mcq', question: 'How do you visually lift a dragged shape?', options: ['Add shadow, scale up slightly', 'Change color to green', 'Draw a border', 'Make it transparent'], correctAnswer: 0, explanation: 'A shadow and slight scale increase creates a lifting effect.', difficulty: 1 },
          { id: 'cv33-q6', type: 'true-false', question: 'Drop zones should validate whether they can accept a dragged item.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Not all drop zones accept all items. Validation prevents invalid placements.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv33-e1', type: 'easy', title: 'Drag the Circle', instructions: 'Create a circle that can be dragged around the canvas. When released, it should stay where dropped.', hint: 'Track whether dragging. On mousedown, check hit test. On mousemove, update position.', starterCode: '<canvas id=\"dragCircle\" width=\"500\" height=\"400\"></canvas>\n<script>// Your draggable circle</script>', solution: '<canvas id=\"dragCircle\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"dragCircle\"),ctx=canvas.getContext(\"2d\");\n  const circle={x:250,y:200,r:40};let dragging=false,offX=0,offY=0;\n  canvas.addEventListener(\"mousedown\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;if(Math.sqrt((mx-circle.x)**2+(my-circle.y)**2)<circle.r){dragging=true;offX=mx-circle.x;offY=my-circle.y;}});\n  canvas.addEventListener(\"mousemove\",e=>{if(!dragging)return;const r=canvas.getBoundingClientRect();circle.x=e.clientX-r.left-offX;circle.y=e.clientY-r.top-offY;});\n  canvas.addEventListener(\"mouseup\",()=>dragging=false);\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(circle.x,circle.y,circle.r,0,7);ctx.fill();\n    requestAnimationFrame(draw);}draw();\n</script>' },
        { id: 'cv33-e2', type: 'medium', title: 'Jigsaw Puzzle Piece', instructions: 'Create a simplified jigsaw puzzle piece that can be dragged to a target position. Show a checkmark when placed correctly.', hint: 'Track piece position. On mouseup, check distance to target. If close enough, snap.', starterCode: '<canvas id=\"puzzle\" width=\"400\" height=\"300\"></canvas>\n<script>// Your puzzle piece</script>', solution: '<canvas id=\"puzzle\" width=\"400\" height=\"300\"></canvas>\n<script>\n  const canvas=document.getElementById(\"puzzle\"),ctx=canvas.getContext(\"2d\");\n  const piece={x:50,y:120,size:80,targetX:250,targetY:120,placed:false};let drag=false,offX=0,offY=0;\n  canvas.addEventListener(\"mousedown\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;if(!piece.placed&&mx>=piece.x&&mx<=piece.x+piece.size&&my>=piece.y&&my<=piece.y+piece.size){drag=true;offX=mx-piece.x;offY=my-piece.y;}});\n  canvas.addEventListener(\"mousemove\",e=>{if(!drag)return;const r=canvas.getBoundingClientRect();piece.x=e.clientX-r.left-offX;piece.y=e.clientY-r.top-offY;});\n  canvas.addEventListener(\"mouseup\",()=>{if(!drag)return;drag=false;const d=Math.sqrt((piece.x-piece.targetX)**2+(piece.y-piece.targetY)**2);if(d<30){piece.x=piece.targetX;piece.y=piece.targetY;piece.placed=true;}});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,400,300);\n    if(!piece.placed){ctx.strokeStyle=\"#999\";ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.strokeRect(piece.targetX,piece.targetY,piece.size,piece.size);ctx.setLineDash([]);}\n    ctx.fillStyle=piece.placed?\"#4CAF50\":\"#2196F3\";ctx.fillRect(piece.x,piece.y,piece.size,piece.size);\n    if(piece.placed){ctx.fillStyle=\"#fff\";ctx.font=\"bold 36px Arial\";ctx.textAlign=\"center\";ctx.textBaseline=\"middle\";ctx.fillText(\"✓\",piece.x+piece.size/2,piece.y+piece.size/2);}\n    requestAnimationFrame(draw);}draw();\n</script>' },
        { id: 'cv33-e3', type: 'hard', title: 'Sorting Puzzle (Drag to Order)', instructions: 'Create 5 numbered tiles in random order. Drag and swap tiles to sort them in ascending order. Track minimum moves.', hint: 'On mouseup, find the tile at the drop position and swap with the dragged tile.', starterCode: '<canvas id=\"sort\" width=\"500\" height=\"200\"></canvas>\n<script>// Your sorting puzzle</script>', solution: '<canvas id=\"sort\" width=\"500\" height=\"200\"></canvas>\n<script>\n  const canvas=document.getElementById(\"sort\"),ctx=canvas.getContext(\"2d\");\n  let tiles=[3,1,4,5,2];let drag=null,moves=0,offX=0;\n  const tileW=80,gap=20,startX=30;\n  canvas.addEventListener(\"mousedown\",e=>{const r=canvas.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;const col=Math.floor((mx-startX)/(tileW+gap));if(col>=0&&col<tiles.length&&my>=50&&my<=130){drag=col;offX=mx-(startX+col*(tileW+gap));}});\n  canvas.addEventListener(\"mousemove\",e=>{if(drag===null)return;const r=canvas.getBoundingClientRect();offX;const newCol=Math.round((e.clientX-r.left-startX-40)/(tileW+gap));if(newCol>=0&&newCol<tiles.length&&newCol!==drag){[tiles[drag],tiles[newCol]]=[tiles[newCol],tiles[drag]];drag=newCol;moves++;}});\n  canvas.addEventListener(\"mouseup\",()=>{drag=null;});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,200);\n    tiles.forEach((t,i)=>{ctx.fillStyle=\"#2196F3\";ctx.fillRect(startX+i*(tileW+gap),50,tileW,80);ctx.fillStyle=\"#fff\";ctx.font=\"bold 28px Arial\";ctx.textAlign=\"center\";ctx.textBaseline=\"middle\";ctx.fillText(t,startX+i*(tileW+gap)+tileW/2,90);});\n    ctx.fillStyle=\"#333\";ctx.font=\"16px Arial\";ctx.textAlign=\"left\";ctx.fillText(`Moves: ${moves}`,10,30);\n    const sorted=[...tiles].sort((a,b)=>a-b);ctx.fillText(tiles.every((v,i)=>v===sorted[i])?\"SORTED!\":\"\",400,30);\n    requestAnimationFrame(draw);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Start drag', value: 'mousedown + hit test' },
        { label: 'Update drag', value: 'mousemove: update position' },
        { label: 'End drag', value: 'mouseup: check drop target' },
        { label: 'Drag offset', value: 'mouse position - shape position on mousedown' },
        { label: 'Snap to grid', value: 'Math.round(value / gridSize) * gridSize' },
        { label: 'Cancel drag', value: 'Return shape to original position' }
      ]
    },,

    {
      id: 'canvas-34',
      number: 34,
      partLabel: 'Part 4: Interactivity',
      title: 'Touch Events',
      subtitle: 'Touchstart, touchmove, touchend, multi-touch',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-33'],
      learningObjectives: [
        'Handle single and multi-touch events on canvas',
        'Convert touch coordinates to canvas space',
        'Prevent default scrolling for touch canvas',
        'Implement multi-touch interactions'
      ],
      sections: [
        {
          id: 's1',
          title: 'Touch Event Handling',
          whyItMatters: 'Touch support is essential for mobile canvas applications. Touch events differ from mouse events in key ways.',
          content: "## Touch Events\n\n```javascript\ncanvas.addEventListener('touchstart', handleTouchStart, { passive: false });\ncanvas.addEventListener('touchmove', handleTouchMove, { passive: false });\ncanvas.addEventListener('touchend', handleTouchEnd);\n\nfunction getTouchCoords(e) {\n  const rect = canvas.getBoundingClientRect();\n  const touches = [];\n  for (let i = 0; i < e.touches.length; i++) {\n    touches.push({\n      id: e.touches[i].identifier,\n      x: e.touches[i].clientX - rect.left,\n      y: e.touches[i].clientY - rect.top\n    });\n  }\n  return touches;\n}\n\ncanvas.addEventListener('touchstart', (e) => {\n  e.preventDefault(); // Prevent scrolling\n  const touches = getTouchCoords(e);\n  touches.forEach(t => {\n    const hit = shapes.find(s => s.hitTest(t.x, t.y));\n    if (hit) touchState.track(hit, t.id);\n  });\n}, { passive: false });\n```\n\n### Multi-Touch Tracking\n\n```javascript\nconst activeTouches = {};\n\nfunction trackTouch(shape, touchId) {\n  activeTouches[touchId] = {\n    shape,\n    offset: { x: shape.x - lastTouch.x, y: shape.y - lastTouch.y }\n  };\n}\n\ncanvas.addEventListener('touchmove', (e) => {\n  e.preventDefault();\n  for (let i = 0; i < e.changedTouches.length; i++) {\n    const t = e.changedTouches[i];\n    const tracked = activeTouches[t.identifier];\n    if (tracked) {\n      const rect = canvas.getBoundingClientRect();\n      tracked.shape.x = t.clientX - rect.left - tracked.offset.x;\n      tracked.shape.y = t.clientY - rect.top - tracked.offset.y;\n    }\n  }\n}, { passive: false });\n\ncanvas.addEventListener('touchend', (e) => {\n  for (let i = 0; i < e.changedTouches.length; i++) {\n    delete activeTouches[e.changedTouches[i].identifier];\n  }\n});\n```\n\n### Touch vs Mouse Differences\n\n- Touch has no hover state\n- Multiple simultaneous touches\n- No right-click equivalent\n- Touch coordinates use `e.touches[i].clientX/Y`\n- Must call `e.preventDefault()` to prevent scrolling\n- Use `{ passive: false }` option to allow preventDefault"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv34-q1', type: 'mcq', question: 'Why must you call e.preventDefault() in touch handlers?', options: ['To prevent the page from scrolling while interacting with canvas', 'To stop event propagation', 'To prevent double-tap zoom', 'To enable touch events'], correctAnswer: 0, explanation: 'Touch events on canvas would normally scroll the page. preventDefault() blocks this.', difficulty: 1 },
          { id: 'cv34-q2', type: 'mcq', question: 'How do you get touch coordinates relative to the canvas?', options: ['e.touches[i].clientX - rect.left', 'e.touches[i].pageX', 'e.touches[i].screenX', 'e.touches[i].x'], correctAnswer: 0, explanation: 'Subtract the canvas bounding rect left/top from clientX/clientY.', difficulty: 1 },
          { id: 'cv34-q3', type: 'true-false', question: 'The touchstart event fires once per finger that touches the screen.', options: ['True', 'False'], correctAnswer: 0, explanation: 'touchstart fires once per touch event, with all changed touches in e.touches.', difficulty: 1 },
          { id: 'cv34-q4', type: 'true-false', question: 'Touch events have hover state, just like mouse events.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Touch screens have no hover state. There is no touch equivalent of mouseover/mouseout.', difficulty: 1 },
          { id: 'cv34-q5', type: 'mcq', question: 'What option must touch event listeners have to allow preventDefault?', options: ['{ passive: false }', '{ active: true }', '{ preventDefault: true }', '{ capture: true }'], correctAnswer: 0, explanation: 'passive: false tells the browser you may call preventDefault() to block scrolling.', difficulty: 2 },
          { id: 'cv34-q6', type: 'true-false', question: 'Each touch has a unique identifier that persists across touchstart, touchmove, and touchend.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The identifier property uniquely identifies each touch point through its lifecycle.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv34-e1', type: 'easy', title: 'Touch Draw', instructions: 'Create a simple drawing app that works with touch. Draw lines following the users finger.', hint: 'On touchstart, begin a path. On touchmove, draw lines to current position.', starterCode: '<canvas id=\"touchDraw\" width=\"400\" height=\"400\"></canvas>\n<script>// Your touch drawing app</script>', solution: '<canvas id=\"touchDraw\" width=\"400\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"touchDraw\"),ctx=canvas.getContext(\"2d\");\n  ctx.fillStyle=\"#fff\";ctx.fillRect(0,0,400,400);\n  let drawing=false;\n  canvas.addEventListener(\"touchstart\",e=>{e.preventDefault();const r=canvas.getBoundingClientRect();ctx.beginPath();ctx.moveTo(e.touches[0].clientX-r.left,e.touches[0].clientY-r.top);drawing=true;},{passive:false});\n  canvas.addEventListener(\"touchmove\",e=>{e.preventDefault();if(!drawing)return;const r=canvas.getBoundingClientRect();ctx.lineTo(e.touches[0].clientX-r.left,e.touches[0].clientY-r.top);ctx.strokeStyle=\"#E91E63\";ctx.lineWidth=4;ctx.lineCap=\"round\";ctx.stroke();},{passive:false});\n  canvas.addEventListener(\"touchend\",()=>drawing=false);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Touch start', value: 'canvas.addEventListener("touchstart", fn, {passive:false})' },
        { label: 'Touch coords', value: 'e.touches[i].clientX - rect.left' },
        { label: 'Touch ID', value: 'e.touches[i].identifier (unique per finger)' },
        { label: 'Prevent scroll', value: 'e.preventDefault() + passive: false' },
        { label: 'No hover', value: 'Touch screens have no hover state' },
        { label: 'changedTouches', value: 'Touches that changed in this event' }
      ]
    },,

    {
      id: 'canvas-35',
      number: 35,
      partLabel: 'Part 4: Interactivity',
      title: 'Coordinate Systems',
      subtitle: 'World vs screen coords, viewport transforms',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 55,
      prerequisites: ['canvas-34'],
      learningObjectives: [
        'Understand world vs screen coordinate spaces',
        'Implement camera transform with translate/scale',
        'Convert mouse/touch coords to world space',
        'Build a scrolling game world'
      ],
      sections: [
        {
          id: 's1',
          title: 'Coordinate Spaces',
          whyItMatters: 'Separating world coordinates from screen coordinates enables scrolling, zooming, and camera systems essential for games.',
          content: "## World vs Screen Space\n\n```javascript\nconst camera = { x: 0, y: 0, zoom: 1 };\n\n// Draw with camera transform\nfunction render() {\n  ctx.save();\n  ctx.translate(canvas.width/2, canvas.height/2);\n  ctx.scale(camera.zoom, camera.zoom);\n  ctx.translate(-camera.x, -camera.y);\n  \n  // Draw world objects in world coordinates\n  objects.forEach(obj => obj.draw(ctx));\n  \n  ctx.restore();\n}\n\n// Convert screen to world coords\nfunction screenToWorld(sx, sy) {\n  return {\n    x: (sx - canvas.width/2) / camera.zoom + camera.x,\n    y: (sy - canvas.height/2) / camera.zoom + camera.y\n  };\n}\n\ncanvas.addEventListener('click', (e) => {\n  const rect = canvas.getBoundingClientRect();\n  const sx = e.clientX - rect.left;\n  const sy = e.clientY - rect.top;\n  const world = screenToWorld(sx, sy);\n  console.log('World coords:', world.x, world.y);\n});\n```\n\n### Smooth Camera Follow\n\n```javascript\nfunction updateCamera(target) {\n  const lerp = 0.05;\n  camera.x += (target.x - camera.x) * lerp;\n  camera.y += (target.y - camera.y) * lerp;\n}\n```\n\n### Zoom to Point (Pinch/Mousewheel)\n\n```javascript\ncanvas.addEventListener('wheel', (e) => {\n  e.preventDefault();\n  const rect = canvas.getBoundingClientRect();\n  const mx = e.clientX - rect.left;\n  const my = e.clientY - rect.top;\n  \n  // World point under mouse before zoom\n  const world = screenToWorld(mx, my);\n  \n  // Apply zoom\n  const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;\n  camera.zoom = Math.max(0.1, Math.min(10, camera.zoom * zoomFactor));\n  \n  // Adjust camera to keep world point under mouse\n  camera.x = world.x - (mx - canvas.width/2) / camera.zoom;\n  camera.y = world.y - (my - canvas.height/2) / camera.zoom;\n}, { passive: false });\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv35-q1', type: 'mcq', question: 'In a camera system, what is the typical order of transforms?', options: ['translate(width/2, height/2), scale, translate(-camera.x, -camera.y)', 'scale, translate, translate', 'translate(-camera.x), scale, translate(width/2)', 'scale, translate(width/2), translate(-camera.x)'], correctAnswer: 0, explanation: 'First center origin, then scale, then move camera to world position.', difficulty: 2 },
          { id: 'cv35-q2', type: 'mcq', question: 'Why use screenToWorld conversion?', options: ['To convert mouse clicks to world coordinates for interaction', 'To convert world coords to screen for rendering', 'To handle high DPI displays', 'To improve performance'], correctAnswer: 0, explanation: 'Mouse events give screen coordinates. You need to convert them to world space for object interaction.', difficulty: 1 },
          { id: 'cv35-q3', type: 'true-false', question: 'The camera zoom should typically be clamped to prevent extreme values.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Clamp zoom between min and max values (e.g., 0.1 to 10) to avoid unusable zoom levels.', difficulty: 1 },
          { id: 'cv35-q4', type: 'mcq', question: 'What does camera lerp (linear interpolation) achieve?', options: ['Smooth camera following', 'Instant camera movement', 'Camera rotation', 'Camera zoom'], correctAnswer: 0, explanation: 'Lerp creates smooth, eased camera tracking rather than jerky instant movement.', difficulty: 1 },
          { id: 'cv35-q5', type: 'true-false', question: 'World coordinates are measured in pixels.', options: ['True', 'False'], correctAnswer: 0, explanation: 'World coordinates are still in pixels, but they are independent of the canvas size and scroll position.', difficulty: 1 },
          { id: 'cv35-q6', type: 'true-false', question: 'ctx.save() and ctx.restore() are unnecessary when using camera transforms.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Always save/restore around camera transforms to avoid affecting other rendering.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv35-e1', type: 'easy', title: 'Scrollable World', instructions: 'Create a 2000x2000 grid world with a 500x400 viewport. Use arrow keys to scroll the camera.', hint: 'Draw grid lines offset by camera position. Clamp camera to world bounds.', starterCode: '<canvas id=\"scroll\" width=\"500\" height=\"400\"></canvas>\n<script>// Your scrollable world</script>', solution: '<canvas id=\"scroll\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const canvas=document.getElementById(\"scroll\"),ctx=canvas.getContext(\"2d\");\n  const camera={x:0,y:0};const keys={};\n  document.addEventListener(\"keydown\",e=>{keys[e.code]=true;if([\"ArrowUp\",\"ArrowDown\",\"ArrowLeft\",\"ArrowRight\"].includes(e.code))e.preventDefault();});\n  document.addEventListener(\"keyup\",e=>keys[e.code]=false);\n  function update(){const SPEED=200;if(keys.ArrowLeft)camera.x-=SPEED/60;if(keys.ArrowRight)camera.x+=SPEED/60;if(keys.ArrowUp)camera.y-=SPEED/60;if(keys.ArrowDown)camera.y+=SPEED/60;camera.x=Math.max(0,Math.min(1500,camera.x));camera.y=Math.max(0,Math.min(1600,camera.y));}\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    ctx.save();ctx.translate(-camera.x,-camera.y);\n    ctx.strokeStyle=\"#ddd\";for(let x=0;x<=2000;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,2000);ctx.stroke();}for(let y=0;y<=2000;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(2000,y);ctx.stroke();}\n    ctx.fillStyle=\"#E91E63\";ctx.fillRect(950,900,100,100);\n    ctx.restore();\n    ctx.fillStyle=\"#333\";ctx.font=\"14px Arial\";ctx.fillText(`Cam: (${Math.round(camera.x)},${Math.round(camera.y)})`,10,20);\n    requestAnimationFrame(()=>{update();draw();});}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Camera draw', value: 'save -> translate -> scale -> restore' },
        { label: 'Screen to world', value: '(sx - w/2) / zoom + cam.x' },
        { label: 'Camera follow', value: 'camera += (target - camera) * lerp' },
        { label: 'Zoom to point', value: 'Keep world point under mouse stable' },
        { label: 'Clamp camera', value: 'Prevent camera from showing out-of-bounds' },
        { label: 'World bounds', value: 'Larger than canvas viewport' }
      ]
    },,

    {
      id: 'canvas-36',
      number: 36,
      partLabel: 'Part 4: Interactivity',
      title: 'Buttons and Menus',
      subtitle: 'On-canvas UI, hover effects, click handlers',
      difficulty: 'Intermediate',
      estimatedMinutes: 25,
      xpReward: 50,
      prerequisites: ['canvas-35'],
      learningObjectives: [
        'Create interactive buttons drawn on canvas',
        'Implement hover and pressed states',
        'Build a simple menu system',
        'Handle UI z-ordering and focus'
      ],
      sections: [
        {
          id: 's1',
          title: 'Canvas UI Buttons',
          whyItMatters: 'On-canvas UI avoids HTML overlay complexities and gives full control over appearance. Essential for games and creative apps.',
          content: "## Button Component\n\n```javascript\nclass Button {\n  constructor({ x, y, w, h, text, onClick, color = '#2196F3' }) {\n    this.rect = { x, y, w, h };\n    this.text = text;\n    this.onClick = onClick;\n    this.color = color;\n    this.state = 'idle'; // idle | hover | pressed\n  }\n\n  hitTest(px, py) {\n    return px >= this.rect.x && px <= this.rect.x + this.rect.w &&\n           py >= this.rect.y && py <= this.rect.y + this.rect.h;\n  }\n\n  draw(ctx) {\n    const colors = {\n      idle: this.color,\n      hover: '#45a049',\n      pressed: '#1b5e20'\n    };\n    ctx.fillStyle = colors[this.state];\n    ctx.beginPath();\n    ctx.roundRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h, 8);\n    ctx.fill();\n    \n    ctx.fillStyle = '#fff';\n    ctx.font = '16px Arial';\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n    ctx.fillText(this.text, \n      this.rect.x + this.rect.w/2, \n      this.rect.y + this.rect.h/2);\n  }\n}\n\n// Menu system\nconst menu = {\n  buttons: [\n    new Button({ x: 150, y: 100, w: 200, h: 50, text: 'Play', onClick: startGame }),\n    new Button({ x: 150, y: 170, w: 200, h: 50, text: 'Settings', onClick: openSettings }),\n    new Button({ x: 150, y: 240, w: 200, h: 50, text: 'About', onClick: showAbout })\n  ],\n  \n  handleMouse(e) {\n    const pos = getCanvasCoords(e);\n    this.buttons.forEach(b => {\n      const hit = b.hitTest(pos.x, pos.y);\n      b.state = hit ? (e.type === 'mousedown' ? 'pressed' : 'hover') : 'idle';\n    });\n  }\n};\n```\n\n### Text Input on Canvas\n\n```javascript\nlet focusedInput = null;\nlet inputValue = '';\n\ndocument.addEventListener('keydown', (e) => {\n  if (!focusedInput) return;\n  if (e.code === 'Backspace') {\n    inputValue = inputValue.slice(0, -1);\n  } else if (e.code === 'Enter') {\n    focusedInput.onSubmit(inputValue);\n  } else if (e.key.length === 1) {\n    inputValue += e.key;\n  }\n});\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv36-q1', type: 'true-false', question: 'Buttons on canvas must be re-drawn every frame to maintain state.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Canvas has no retained UI. Every state change requires a redraw.', difficulty: 1 },
          { id: 'cv36-q2', type: 'mcq', question: 'How do you detect a button click on canvas?', options: ['Hit test in mousedown/mouseup handlers', 'Use addEventListener on the button', 'Check CSS :hover pseudo-class', 'Use HTML DOM events'], correctAnswer: 0, explanation: 'Canvas has no individual elements. You must manually test coordinates against button rectangles.', difficulty: 1 },
          { id: 'cv36-q3', type: 'mcq', question: 'What state should a button show when the user presses down on it?', options: ['pressed', 'hover', 'idle', 'disabled'], correctAnswer: 0, explanation: 'The pressed state gives visual feedback that the button was clicked.', difficulty: 1 },
          { id: 'cv36-q4', type: 'true-false', question: 'roundRect() is a standard CanvasRenderingContext2D method.', options: ['True', 'False'], correctAnswer: 0, explanation: 'roundRect() was added in 2022 and is available in modern browsers.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv36-e1', type: 'easy', title: 'Click Counter Button', instructions: 'Draw a button that increments a counter each time its clicked. Display the count.', hint: 'Track button rectangle. In click handler, test coordinates. Redraw after each click.', starterCode: '<canvas id=\"counter\" width=\"300\" height=\"200\"></canvas>\n<script>// Your counter button</script>', solution: '<canvas id=\"counter\" width=\"300\" height=\"200\"></canvas>\n<script>\n  const c=document.getElementById(\"counter\"),ctx=c.getContext(\"2d\");\n  let count=0;const btn={x:75,y:75,w:150,h:50,state:\"idle\"};\n  c.addEventListener(\"mousemove\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;btn.state=(mx>=btn.x&&mx<=btn.x+btn.w&&my>=btn.y&&my<=btn.y+btn.h)?\"hover\":\"idle\";draw();});\n  c.addEventListener(\"mousedown\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;if(mx>=btn.x&&mx<=btn.x+btn.w&&my>=btn.y&&my<=btn.y+btn.h){count++;draw();}});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,300,200);\n    ctx.fillStyle=btn.state===\"hover\"?\"#45a049\":\"#2196F3\";ctx.fillRect(btn.x,btn.y,btn.w,btn.h);\n    ctx.fillStyle=\"#fff\";ctx.font=\"16px Arial\";ctx.textAlign=\"center\";ctx.textBaseline=\"middle\";ctx.fillText(\"Click me\",btn.x+btn.w/2,btn.y+btn.h/2);\n    ctx.fillStyle=\"#333\";ctx.font=\"20px Arial\";ctx.fillText(`Count: ${count}`,150,40);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Hit test', value: 'Point-in-rectangle check' },
        { label: 'Button states', value: 'idle, hover, pressed' },
        { label: 'Redraw needed', value: 'Canvas needs per-frame redraw for UI' },
        { label: 'Text input', value: 'Capture keydown events for text entry' },
        { label: 'roundRect', value: 'Rounded corners: ctx.beginPath(); ctx.roundRect()' },
        { label: 'Z-ordering', value: 'Draw order determines visual stacking' }
      ]
    },,

    {
      id: 'canvas-37',
      number: 37,
      partLabel: 'Part 4: Interactivity',
      title: 'Collision Detection',
      subtitle: 'AABB, circle, pixel-perfect detection',
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-36'],
      learningObjectives: [
        'Implement AABB collision detection',
        'Implement circle-circle collision',
        'Detect circle-rectangle collisions',
        'Understand pixel-perfect collision'
      ],
      sections: [
        {
          id: 's1',
          title: 'Collision Detection Methods',
          whyItMatters: 'Collision detection is fundamental to games and interactive applications. Choosing the right method balances accuracy and performance.',
          content: "## AABB (Axis-Aligned Bounding Box)\n\n```javascript\nfunction aabbCollision(a, b) {\n  // a and b are { x, y, w, h }\n  return a.x < b.x + b.w &&\n         a.x + a.w > b.x &&\n         a.y < b.y + b.h &&\n         a.y + a.h > b.y;\n}\n\n// Usage\nconst player = { x: 100, y: 200, w: 40, h: 60 };\nconst wall = { x: 300, y: 150, w: 50, h: 50 };\nif (aabbCollision(player, wall)) {\n  handleCollision(player, wall);\n}\n```\n\n### Circle Collision\n\n```javascript\nfunction circleCollision(a, b) {\n  const dx = a.x - b.x;\n  const dy = a.y - b.y;\n  const distance = Math.sqrt(dx * dx + dy * dy);\n  return distance < a.r + b.r;\n}\n\nfunction circleRectCollision(circle, rect) {\n  const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.w));\n  const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.h));\n  const dx = circle.x - closestX;\n  const dy = circle.y - closestY;\n  return (dx * dx + dy * dy) < (circle.r * circle.r);\n}\n```\n\n### Spatial Grid (Optimization)\n\n```javascript\nclass SpatialGrid {\n  constructor(cellSize, worldWidth, worldHeight) {\n    this.cellSize = cellSize;\n    this.cols = Math.ceil(worldWidth / cellSize);\n    this.rows = Math.ceil(worldHeight / cellSize);\n    this.grid = new Array(this.cols * this.rows).fill(null).map(() => []);\n  }\n\n  insert(obj) {\n    const col = Math.floor(obj.x / this.cellSize);\n    const row = Math.floor(obj.y / this.cellSize);\n    this.grid[row * this.cols + col].push(obj);\n  }\n\n  getNearby(obj) {\n    const col = Math.floor(obj.x / this.cellSize);\n    const row = Math.floor(obj.y / this.cellSize);\n    const nearby = [];\n    for (let dy = -1; dy <= 1; dy++) {\n      for (let dx = -1; dx <= 1; dx++) {\n        const c = col + dx, r = row + dy;\n        if (c >= 0 && c < this.cols && r >= 0 && r < this.rows) {\n          nearby.push(...this.grid[r * this.cols + c]);\n        }\n      }\n    }\n    return nearby;\n  }\n\n  clear() {\n    this.grid.forEach(cell => cell.length = 0);\n  }\n}\n```\n\n### Response (Push-Out) vs Detection\n\n```javascript\nfunction resolveAABB(player, wall) {\n  const overlapX = Math.min(player.x + player.w - wall.x, wall.x + wall.w - player.x);\n  const overlapY = Math.min(player.y + player.h - wall.y, wall.y + wall.h - player.y);\n  \n  if (overlapX < overlapY) {\n    // Resolve horizontally\n    player.x += (player.x < wall.x) ? -overlapX : overlapX;\n  } else {\n    // Resolve vertically\n    player.y += (player.y < wall.y) ? -overlapY : overlapY;\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv37-q1', type: 'mcq', question: 'What does AABB stand for?', options: ['Axis-Aligned Bounding Box', 'Automatic Bounding Box', 'Axis-Aligned Bounding Buffer', 'Advanced Bounding Box'], correctAnswer: 0, explanation: 'AABB stands for Axis-Aligned Bounding Box - a rectangle aligned with the coordinate axes.', difficulty: 1 },
          { id: 'cv37-q2', type: 'mcq', question: 'What is the time complexity of brute-force collision detection with N objects?', options: ['O(N²)', 'O(N)', 'O(N log N)', 'O(log N)'], correctAnswer: 0, explanation: 'Without optimization, each object must check against every other object, giving O(N²).', difficulty: 2 },
          { id: 'cv37-q3', type: 'true-false', question: 'A spatial grid reduces collision checks by only testing objects in nearby cells.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Spatial grid partitions space so you only check objects in the same or adjacent cells.', difficulty: 1 },
          { id: 'cv37-q4', type: 'mcq', question: 'For circle-rectangle collision, what is the closest point on the rectangle to the circle?', options: ['clamp(circle.x, rect.x, rect.x + rect.w)', 'The rectangle center', 'The rectangle corner', 'The nearest edge midpoint'], correctAnswer: 0, explanation: 'Clamp the circles x and y to the rectangles bounds to find the closest point.', difficulty: 2 },
          { id: 'cv37-q5', type: 'mcq', question: 'What is pixel-perfect collision?', options: ['Checking actual pixel overlap using alpha data', 'Checking bounding box overlap', 'Checking distance between centers', 'Using hardware acceleration'], correctAnswer: 0, explanation: 'Pixel-perfect collision reads actual pixel alpha values to detect overlap at the pixel level.', difficulty: 2 },
          { id: 'cv37-q6', type: 'true-false', question: 'AABB collision works for rotated rectangles.', options: ['True', 'False'], correctAnswer: 1, explanation: 'AABB assumes rectangles are axis-aligned. For rotated rectangles, use Separating Axis Theorem (SAT).', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv37-e1', type: 'easy', title: 'AABB Collision Visualization', instructions: 'Create two draggable rectangles that highlight when they overlap using AABB collision detection.', hint: 'Implement the AABB function. Check on every frame and change color when true.', starterCode: '<canvas id=\"aabb\" width=\"500\" height=\"400\"></canvas>\n<script>// Your AABB collision</script>', solution: '<canvas id=\"aabb\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"aabb\"),ctx=c.getContext(\"2d\");\n  const a={x:100,y:100,w:80,h:60},b={x:300,y:150,w:80,h:60};\n  let drag=null,offX=0,offY=0;\n  c.addEventListener(\"mousedown\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;if(mx>=a.x&&mx<=a.x+a.w&&my>=a.y&&my<=a.y+a.h){drag=a;offX=mx-a.x;offY=my-a.y;}else if(mx>=b.x&&mx<=b.x+b.w&&my>=b.y&&my<=b.y+b.h){drag=b;offX=mx-b.x;offY=my-b.y;}});\n  c.addEventListener(\"mousemove\",e=>{if(!drag)return;const r=c.getBoundingClientRect();drag.x=e.clientX-r.left-offX;drag.y=e.clientY-r.top-offY;});\n  c.addEventListener(\"mouseup\",()=>drag=null);\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    const hit=a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;\n    ctx.fillStyle=hit?\"#E91E63\":\"#2196F3\";ctx.fillRect(a.x,a.y,a.w,a.h);\n    ctx.fillStyle=hit?\"#E91E63\":\"#4CAF50\";ctx.fillRect(b.x,b.y,b.w,b.h);\n    if(hit){ctx.fillStyle=\"#333\";ctx.font=\"18px Arial\";ctx.textAlign=\"center\";ctx.fillText(\"COLLISION!\",250,30);}\n    requestAnimationFrame(draw);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'AABB', value: 'a.x < b.x + b.w && a.x + a.w > b.x && ...' },
        { label: 'Circle', value: 'distance < r1 + r2' },
        { label: 'Circle-Rect', value: 'Clamp circle to rect, check distance' },
        { label: 'Spatial grid', value: 'Partition space, test nearby cells only' },
        { label: 'Push-out', value: 'Resolve overlap on minimum axis' },
        { label: 'SAT', value: 'Separating Axis Theorem for rotated shapes' }
      ]
    },,

    {
      id: 'canvas-38',
      number: 38,
      partLabel: 'Part 4: Interactivity',
      title: 'Hit Detection',
      subtitle: 'Point-in-shape, path hit, pixel picking',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-37'],
      learningObjectives: [
        'Detect clicks on complex shapes (paths, polygons)',
        'Implement point-in-path using isPointInPath',
        'Use color picking for pixel-level hit detection',
        'Build a selection system'
      ],
      sections: [
        {
          id: 's1',
          title: 'Advanced Hit Detection',
          whyItMatters: 'Complex shapes like polygons and arbitrary paths require more sophisticated hit detection than simple bounding boxes.',
          content: "## isPointInPath\n\n```javascript\ncanvas.addEventListener('click', (e) => {\n  const rect = canvas.getBoundingClientRect();\n  const x = e.clientX - rect.left;\n  const y = e.clientY - rect.top;\n  \n  shapes.forEach(shape => {\n    ctx.beginPath();\n    shape.buildPath(ctx); // User-defined path building\n    if (ctx.isPointInPath(x, y)) {\n      shape.onClick();\n    }\n  });\n});\n\n// Example: hexagonal grid\nclass HexTile {\n  constructor(row, col, size) {\n    this.row = row;\n    this.col = col;\n    this.size = size;\n    this.center = hexToPixel(row, col, size);\n  }\n\n  buildPath(ctx) {\n    const { x, y } = this.center;\n    ctx.beginPath();\n    for (let i = 0; i < 6; i++) {\n      const angle = (Math.PI / 3) * i - Math.PI / 6;\n      const px = x + this.size * Math.cos(angle);\n      const py = y + this.size * Math.sin(angle);\n      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);\n    }\n    ctx.closePath();\n  }\n\n  hitTest(ctx, x, y) {\n    this.buildPath(ctx);\n    return ctx.isPointInPath(x, y);\n  }\n}\n```\n\n### Color Picking Technique\n\n```javascript\nfunction getHitByColor(mx, my) {\n  // Draw each object with a unique color, then read pixel\n  objects.forEach(obj => {\n    ctx.fillStyle = obj.hitColor; // e.g. '#FF0001', '#FF0002'\n    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);\n  });\n  \n  const pixel = ctx.getImageData(mx, my, 1, 1).data;\n  const hexColor = '#' + [pixel[0], pixel[1], pixel[2]]\n    .map(c => c.toString(16).padStart(2, '0')).join('');\n  \n  return objects.find(obj => obj.hitColor === hexColor);\n}\n\n// Usage: render to offscreen canvas first, then check\nconst offscreen = document.createElement('canvas');\noffscreen.width = canvas.width;\noffscreen.height = canvas.height;\nconst offCtx = offscreen.getContext('2d');\n```\n\n### Shape Selection System\n\n```javascript\nclass SelectionSystem {\n  constructor() {\n    this.selected = null;\n  }\n\n  handleClick(mx, my) {\n    this.selected = null;\n    // Check in reverse order (top-most first)\n    for (let i = shapes.length - 1; i >= 0; i--) {\n      if (shapes[i].hitTest(ctx, mx, my)) {\n        this.selected = shapes[i];\n        break;\n      }\n    }\n  }\n\n  drawSelection(ctx) {\n    if (!this.selected) return;\n    ctx.strokeStyle = '#FFC107';\n    ctx.lineWidth = 3;\n    ctx.setLineDash([5, 3]);\n    this.selected.buildPath(ctx);\n    ctx.stroke();\n    ctx.setLineDash([]);\n    \n    // Draw handles at corners\n    this.selected.drawHandles(ctx);\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv38-q1', type: 'mcq', question: 'Which method checks if a point is inside a path?', options: ['isPointInPath', 'isPointInStroke', 'isPointInRect', 'pointInPath'], correctAnswer: 0, explanation: 'CanvasRenderingContext2D.isPointInPath(x, y) returns true if the point is inside the current path.', difficulty: 1 },
          { id: 'cv38-q2', type: 'true-false', question: 'isPointInPath must be called after beginPath but before any other drawing operations.', options: ['True', 'False'], correctAnswer: 1, explanation: 'isPointInPath uses the current path. You can call it after building the path without fill/stroke.', difficulty: 2 },
          { id: 'cv38-q3', type: 'mcq', question: 'What does the color-picking technique do?', options: ['Renders objects with unique colors to identify hits', 'Selects objects by their visible color', 'Changes object colors when hit', 'Picks colors from an image'], correctAnswer: 0, explanation: 'Each object gets a unique color. Render to find which color is at the mouse position, then map back to the object.', difficulty: 2 },
          { id: 'cv38-q4', type: 'true-false', question: 'For overlapping shapes, you should check hit detection in reverse draw order.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Last-drawn shapes appear on top, so check them first (reverse array order).', difficulty: 1 },
          { id: 'cv38-q5', type: 'mcq', question: 'What is the advantage of isPointInPath over bounding box?', options: ['Works for any arbitrary path shape', 'Faster than bounding boxes', 'Works on rotated rectangles only', 'Does not require a canvas context'], correctAnswer: 0, explanation: 'isPointInPath works for any path - circles, polygons, bezier curves - not just rectangles.', difficulty: 1 },
          { id: 'cv38-q6', type: 'true-false', question: 'Color picking requires rendering to a separate offscreen canvas.', options: ['True', 'False'], correctAnswer: 1, explanation: 'You can render to the main canvas and read pixels, but its better to use an offscreen canvas to avoid visual flicker.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv38-e1', type: 'easy', title: 'Click the Triangle', instructions: 'Draw a triangle using path commands. Make it clickable using isPointInPath. Change color on click.', hint: 'Use moveTo/lineTo to build the triangle path, then isPointInPath on click.', starterCode: '<canvas id=\"tri\" width=\"400\" height=\"300\"></canvas>\n<script>// Your clickable triangle</script>', solution: '<canvas id=\"tri\" width=\"400\" height=\"300\"></canvas>\n<script>\n  const c=document.getElementById(\"tri\"),ctx=c.getContext(\"2d\");\n  let color=\"#2196F3\";\n  function buildPath(){ctx.beginPath();ctx.moveTo(200,50);ctx.lineTo(350,250);ctx.lineTo(50,250);ctx.closePath();}\n  c.addEventListener(\"click\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;buildPath();if(ctx.isPointInPath(mx,my))color=color===\"#2196F3\"?\"#E91E63\":\"#2196F3\";draw();});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,400,300);buildPath();ctx.fillStyle=color;ctx.fill();}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'isPointInPath', value: 'Check if coords are inside current path' },
        { label: 'Color picking', value: 'Unique colors per object, read pixel' },
        { label: 'Reverse order', value: 'Check top-most shapes first' },
        { label: 'Offscreen canvas', value: 'Use for hit rendering to avoid flicker' },
        { label: 'Selection handles', value: 'Draw corner/edge handles on selected object' },
        { label: 'Path building', value: 'Separate path building from rendering' }
      ]
    },,

    {
      id: 'canvas-39',
      number: 39,
      partLabel: 'Part 4: Interactivity',
      title: 'State Machines',
      subtitle: 'Managing app states, game states, transitions',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-38'],
      learningObjectives: [
        'Design state machine architecture for apps/games',
        'Implement menu, play, pause, game-over states',
        'Handle state transitions with entry and exit actions',
        'Build a state-driven interactive application'
      ],
      sections: [
        {
          id: 's1',
          title: 'State Machine Architecture',
          whyItMatters: 'State machines bring order to interactive apps. They prevent conflicting states and make control flow predictable.',
          content: "## Game State Machine\n\n```javascript\nconst states = {\n  MENU: 'menu',\n  PLAYING: 'playing',\n  PAUSED: 'paused',\n  GAME_OVER: 'game_over'\n};\n\nclass StateMachine {\n  constructor(initial) {\n    this.current = initial;\n    this.previous = null;\n  }\n\n  transition(newState) {\n    this.exit(this.current);\n    this.previous = this.current;\n    this.current = newState;\n    this.enter(newState);\n  }\n\n  enter(state) {\n    switch (state) {\n      case states.MENU:\n        resetGame();\n        break;\n      case states.PLAYING:\n        startTimer();\n        break;\n      case states.PAUSED:\n        pauseAudio();\n        break;\n      case states.GAME_OVER:\n        saveScore();\n        break;\n    }\n  }\n\n  exit(state) {\n    switch (state) {\n      case states.PLAYING:\n        stopTimer();\n        break;\n      case states.PAUSED:\n        resumeAudio();\n        break;\n    }\n  }\n\n  update(dt) {\n    switch (this.current) {\n      case states.PLAYING:\n        updateGame(dt);\n        break;\n      // Other states dont update game logic\n    }\n  }\n\n  render(ctx) {\n    switch (this.current) {\n      case states.MENU:\n        drawMenu(ctx);\n        break;\n      case states.PLAYING:\n      case states.PAUSED:\n        drawGame(ctx);\n        if (this.current === states.PAUSED) drawPauseOverlay(ctx);\n        break;\n      case states.GAME_OVER:\n        drawGameOver(ctx);\n        break;\n    }\n  }\n}\n```\n\n### State-Driven Input\n\n```javascript\ncanvas.addEventListener('keydown', (e) => {\n  switch (stateMachine.current) {\n    case states.MENU:\n      if (e.code === 'Enter' || e.code === 'Space') {\n        stateMachine.transition(states.PLAYING);\n      }\n      break;\n    case states.PLAYING:\n      if (e.code === 'Escape') {\n        stateMachine.transition(states.PAUSED);\n      }\n      handleGameInput(e);\n      break;\n    case states.PAUSED:\n      if (e.code === 'Escape') {\n        stateMachine.transition(states.PLAYING);\n      }\n      break;\n    case states.GAME_OVER:\n      if (e.code === 'Enter') {\n        stateMachine.transition(states.MENU);\n      }\n      break;\n  }\n});\n```\n\n### Finite State Machine Pattern\n\n```javascript\n// More formal FSM\nclass FSM {\n  constructor() {\n    this.states = {};\n    this.current = null;\n  }\n\n  addState(name, { enter, update, exit, render }) {\n    this.states[name] = { enter, update, exit, render };\n  }\n\n  setState(name) {\n    if (this.current?.exit) this.current.exit();\n    this.current = this.states[name];\n    if (this.current?.enter) this.current.enter();\n  }\n\n  update(dt) { this.current?.update?.(dt); }\n  render(ctx) { this.current?.render?.(ctx); }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv39-q1', type: 'mcq', question: 'What is a key benefit of using a state machine?', options: ['Prevents conflicting states', 'Improves rendering speed', 'Reduces code length', 'Eliminates bugs'], correctAnswer: 0, explanation: 'State machines ensure only one state is active at a time, preventing conflicting behaviors.', difficulty: 1 },
          { id: 'cv39-q2', type: 'true-false', question: 'In a game, the update function should run during the PAUSED state.', options: ['True', 'False'], correctAnswer: 1, explanation: 'During pause, game logic (physics, timers) should stop. Only the render function should still draw.', difficulty: 1 },
          { id: 'cv39-q3', type: 'mcq', question: 'What are entry and exit actions?', options: ['Code that runs when entering or leaving a state', 'Animations for menu transitions', 'Keyboard shortcuts', 'Error handlers'], correctAnswer: 0, explanation: 'Entry actions initialize a state (e.g. resetting values). Exit actions clean up (e.g. stopping timers).', difficulty: 2 },
          { id: 'cv39-q4', type: 'true-false', question: 'State transitions should be deferred when inside update/render.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Immediate transitions are fine. But avoid transition loops where A->B->A in a single frame.', difficulty: 2 },
          { id: 'cv39-q5', type: 'mcq', question: 'How should rendering differ between PLAYING and PAUSED?', options: ['Draw game content + pause overlay', 'Draw different content entirely', 'Skip all rendering during pause', 'Only draw HUD'], correctAnswer: 0, explanation: 'During PAUSED, the game content is still visible behind a semi-transparent pause overlay.', difficulty: 1 },
          { id: 'cv39-q6', type: 'true-false', question: 'A stack-based state machine allows returning to the previous state.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Pushing states onto a stack allows popping back to the previous state (e.g., settings -> game).', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv39-e1', type: 'easy', title: 'Simple State Switcher', instructions: 'Create a canvas app with two states: red and blue. Clicking toggles between them. Display current state name.', hint: 'Track current state string. On click, switch to the other state. Redraw.', starterCode: '<canvas id=\"state\" width=\"300\" height=\"200\"></canvas>\n<script>// Your state switcher</script>', solution: '<canvas id=\"state\" width=\"300\" height=\"200\"></canvas>\n<script>\n  const c=document.getElementById(\"state\"),ctx=c.getContext(\"2d\");\n  let state=\"red\";\n  c.addEventListener(\"click\",()=>{state=state===\"red\"?\"blue\":\"red\";draw();});\n  function draw(){ctx.fillStyle=state;ctx.fillRect(0,0,300,200);\n    ctx.fillStyle=\"#fff\";ctx.font=\"bold 24px Arial\";ctx.textAlign=\"center\";ctx.textBaseline=\"middle\";ctx.fillText(`State: ${state.toUpperCase()}`,150,100);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'State enum', value: 'Define all possible states as constants' },
        { label: 'Entry/exit', value: 'Run setup/cleanup on state change' },
        { label: 'State-driven input', value: 'Different keys mean different things per state' },
        { label: 'Render per state', value: 'Draw appropriate content for each state' },
        { label: 'Stack FSM', value: 'Push/pop for nested states (settings, inventory)' },
        { label: 'Deferred transition', value: 'Queue transitions to avoid mid-frame issues' }
      ]
    },,

    {
      id: 'canvas-40',
      number: 40,
      partLabel: 'Part 4: Interactivity',
      title: 'Responsive and Adaptive Canvas',
      subtitle: 'Resize, DPI, mobile scaling',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-39'],
      learningObjectives: [
        'Make canvas responsive to window resize',
        'Handle high-DPI (Retina) displays',
        'Scale content for mobile canvases',
        'Implement aspect-ratio-aware rendering'
      ],
      sections: [
        {
          id: 's1',
          title: 'Responsive Canvas Setup',
          whyItMatters: 'Canvas applications must work across devices with different screen sizes and pixel densities. A responsive setup ensures consistent appearance.',
          content: "## Full-Window Responsive Canvas\n\n```javascript\nfunction resizeCanvas() {\n  const dpr = window.devicePixelRatio || 1;\n  canvas.width = window.innerWidth * dpr;\n  canvas.height = window.innerHeight * dpr;\n  \n  // Display size (CSS pixels)\n  canvas.style.width = window.innerWidth + 'px';\n  canvas.style.height = window.innerHeight + 'px';\n  \n  // Scale context for sharp rendering\n  ctx.scale(dpr, dpr);\n}\n\nwindow.addEventListener('resize', resizeCanvas);\n```\n\n### High-DPI Setup\n\n```javascript\nfunction setupCanvas(canvas, width, height) {\n  const dpr = window.devicePixelRatio || 1;\n  canvas.width = width * dpr;\n  canvas.height = height * dpr;\n  canvas.style.width = width + 'px';\n  canvas.style.height = height + 'px';\n  \n  const ctx = canvas.getContext('2d');\n  ctx.scale(dpr, dpr);\n  \n  return { ctx, width, height, dpr };\n}\n```\n\n### Aspect Ratio Lock\n\n```javascript\nfunction resizeWithAspect(containerWidth, containerHeight, aspectRatio) {\n  let w, h;\n  if (containerWidth / containerHeight > aspectRatio) {\n    h = containerHeight;\n    w = h * aspectRatio;\n  } else {\n    w = containerWidth;\n    h = w / aspectRatio;\n  }\n  \n  canvas.style.width = w + 'px';\n  canvas.style.height = h + 'px';\n  canvas.width = w * dpr;\n  canvas.height = h * dpr;\n}\n```\n\n### Virtual Coordinates (Independent of Screen Size)\n\n```javascript\nconst VIRTUAL_WIDTH = 800;\nconst VIRTUAL_HEIGHT = 600;\n\nfunction scaleToVirtual() {\n  const scaleX = canvas.width / VIRTUAL_WIDTH;\n  const scaleY = canvas.height / VIRTUAL_HEIGHT;\n  return Math.min(scaleX, scaleY);\n}\n\nfunction drawGame() {\n  ctx.save();\n  const scale = scaleToVirtual();\n  ctx.scale(scale, scale);\n  \n  // All drawing in virtual 800x600 space\n  drawPlayer(400, 300);\n  \n  ctx.restore();\n}\n```\n\n### Orientation Change\n\n```javascript\nscreen.orientation.addEventListener('change', () => {\n  resizeCanvas();\n  adjustLayoutForOrientation(screen.orientation.type);\n});\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv40-q1', type: 'mcq', question: 'What does window.devicePixelRatio represent?', options: ['Ratio of physical pixels to CSS pixels', 'Screen aspect ratio', 'Pixel density per inch', 'Canvas scaling factor'], correctAnswer: 0, explanation: 'devicePixelRatio is the ratio of physical pixels to logical (CSS) pixels. Retina displays have 2 or 3.', difficulty: 1 },
          { id: 'cv40-q2', type: 'true-false', question: 'On a Retina display, setting canvas.width = CSS width makes the canvas look blurry.', options: ['True', 'False'], correctAnswer: 0, explanation: 'You must multiply canvas.width/height by devicePixelRatio to get sharp rendering on Retina displays.', difficulty: 1 },
          { id: 'cv40-q3', type: 'mcq', question: 'Why use a virtual coordinate system?', options: ['So game logic works at a fixed resolution regardless of screen size', 'To improve performance', 'To support multiple monitors', 'To enable hardware acceleration'], correctAnswer: 0, explanation: 'Virtual coordinates let you design at one resolution and scale for any screen size.', difficulty: 2 },
          { id: 'cv40-q4', type: 'true-false', question: 'The resize event fires when the window changes size.', options: ['True', 'False'], correctAnswer: 0, explanation: 'window.addEventListener("resize", handler) fires whenever the window is resized.', difficulty: 1 },
          { id: 'cv40-q5', type: 'mcq', question: 'What is letterboxing?', options: ['Adding black bars to maintain aspect ratio', 'Drawing text on canvas', 'Creating UI panels', 'Scaling images'], correctAnswer: 0, explanation: 'Letterboxing fills unused space when the container aspect ratio doesnt match the canvas.', difficulty: 1 },
          { id: 'cv40-q6', type: 'true-false', question: 'ctx.scale(dpr, dpr) should be called every frame.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Apply the DPI scale once after resize. If you save/restore context each frame, apply it in the draw function.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv40-e1', type: 'easy', title: 'Retina-Ready Canvas', instructions: 'Create a canvas that fills the browser window and renders a sharp circle on any display (Retina or non-Retina).', hint: 'Multiply canvas.width/height by devicePixelRatio. Apply ctx.scale(dpr, dpr).', starterCode: '<canvas id=\"retina\" style=\"display:block\"></canvas>\n<script>// Your retina-ready canvas</script>', solution: '<canvas id=\"retina\" style=\"display:block;position:fixed;top:0;left:0\"></canvas>\n<script>\n  const canvas=document.getElementById(\"retina\"),ctx=canvas.getContext(\"2d\");\n  function resize(){const dpr=window.devicePixelRatio||1;canvas.width=window.innerWidth*dpr;canvas.height=window.innerHeight*dpr;canvas.style.width=window.innerWidth+\"px\";canvas.style.height=window.innerHeight+\"px\";}\n  window.addEventListener(\"resize\",resize);resize();\n  function draw(){ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,canvas.width,canvas.height);\n    ctx.save();const dpr=window.devicePixelRatio||1;ctx.scale(dpr,dpr);\n    ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(window.innerWidth/2,window.innerHeight/2,100,0,7);ctx.fill();\n    ctx.restore();requestAnimationFrame(draw);}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'DPR scaling', value: 'canvas.width = CSS_width * devicePixelRatio' },
        { label: 'ctx.scale(dpr)', value: 'Scale context for crisp rendering' },
        { label: 'Resize event', value: 'window.addEventListener("resize", handler)' },
        { label: 'Virtual coords', value: 'Design at fixed resolution, scale to screen' },
        { label: 'Aspect ratio', value: 'Maintain ratio with letterboxing or crop' },
        { label: 'Orientation', value: 'screen.orientation.addEventListener("change")' }
      ]
    },,

    {
      id: 'canvas-41',
      number: 41,
      partLabel: 'Part 5: Game Development',
      title: 'Game Loop Architecture',
      subtitle: 'Fixed timestep, variable timestep, update/render separation',
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      xpReward: 65,
      prerequisites: ['canvas-40'],
      learningObjectives: [
        'Implement a proper game loop with fixed timestep',
        'Separate update and render concerns',
        'Handle frame rate independence',
        'Prevent spiral of death with accumulator'
      ],
      sections: [
        {
          id: 's1',
          title: 'Game Loop Patterns',
          whyItMatters: 'A well-designed game loop is the foundation of any game. Poor loop design leads to inconsistent physics, jittery animation, or excessive CPU usage.',
          content: "## Fixed Timestep Game Loop\n\n```javascript\nconst FIXED_DT = 1 / 60; // 60 updates per second\nlet accumulator = 0;\nlet lastTime = 0;\n\nfunction gameLoop(timestamp) {\n  const frameTime = Math.min((timestamp - lastTime) / 1000, 0.1); // Cap at 100ms\n  lastTime = timestamp;\n  accumulator += frameTime;\n  \n  while (accumulator >= FIXED_DT) {\n    update(FIXED_DT);\n    accumulator -= FIXED_DT;\n  }\n  \n  const alpha = accumulator / FIXED_DT;\n  render(alpha); // Interpolation alpha for smooth rendering\n  \n  requestAnimationFrame(gameLoop);\n}\n\nlet previousState = {};\nlet currentState = {};\n\nfunction render(alpha) {\n  // Interpolate between previous and current state\n  const state = {\n    x: previousState.x + (currentState.x - previousState.x) * alpha,\n    y: previousState.y + (currentState.y - previousState.y) * alpha\n  };\n  drawGame(state);\n}\n```\n\n### Variable Timestep (Simpler, Less Accurate)\n\n```javascript\nlet lastTime = 0;\n\nfunction gameLoop(timestamp) {\n  const dt = (timestamp - lastTime) / 1000;\n  lastTime = timestamp;\n  \n  update(Math.min(dt, 0.05)); // Cap to prevent large jumps\n  render();\n  \n  requestAnimationFrame(gameLoop);\n}\n```\n\n### Entity Component System (ECS) Architecture\n\n```javascript\nclass Entity {\n  constructor() {\n    this.id = Entity.nextId++;\n    this.components = {};\n  }\n\n  addComponent(ComponentClass, ...args) {\n    this.components[ComponentClass.name] = new ComponentClass(...args);\n    return this;\n  }\n\n  get(ComponentClass) {\n    return this.components[ComponentClass.name];\n  }\n\n  has(...components) {\n    return components.every(c => this.components[c.name]);\n  }\n}\nEntity.nextId = 0;\n\nclass System {\n  constructor(world) { this.world = world; }\n  update(dt) {\n    this.world.entities.forEach(entity => {\n      if (entity.has(...this.requiredComponents)) {\n        this.process(entity, dt);\n      }\n    });\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv41-q1', type: 'mcq', question: 'What problem does fixed timestep solve?', options: ['Deterministic physics regardless of frame rate', 'Faster rendering', 'Lower CPU usage', 'Easier code'], correctAnswer: 0, explanation: 'Fixed timestep ensures physics runs at consistent intervals, making it deterministic and frame-rate independent.', difficulty: 2 },
          { id: 'cv41-q2', type: 'mcq', question: 'What is the spiral of death?', options: ['Accumulator grows unbounded when update takes longer than frame time', 'Game crashes from infinite loop', 'Memory leak from accumulating state', 'Rendering falls behind updates'], correctAnswer: 0, explanation: 'If each update takes longer than the fixed timestep, the accumulator keeps growing. Cap it to prevent this.', difficulty: 2 },
          { id: 'cv41-q3', type: 'true-false', question: 'Variable timestep is more deterministic than fixed timestep.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Variable timestep produces different results at different frame rates, making it non-deterministic.', difficulty: 1 },
          { id: 'cv41-q4', type: 'mcq', question: 'What does the alpha parameter represent in render(alpha)?', options: ['Interpolation factor between previous and current state', 'Transparency value', 'Delta time for rendering', 'Frame rate'], correctAnswer: 0, explanation: 'Alpha (0-1) indicates how far between the last two physics ticks we are for smooth rendering.', difficulty: 2 },
          { id: 'cv41-q5', type: 'true-false', question: 'requestAnimationFrame passes a timestamp to the callback.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The callback receives a DOMHighResTimeStamp for precise timing.', difficulty: 1 },
          { id: 'cv41-q6', type: 'true-false', question: 'An ECS architecture couples data and logic together.', options: ['True', 'False'], correctAnswer: 1, explanation: 'ECS separates data (components) from logic (systems), unlike traditional OOP.', difficulty: 2 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv41-e1', type: 'medium', title: 'Fixed Timestep Demo', instructions: 'Create a bouncing ball that uses fixed timestep (60 FPS physics). Display the accumulator value and physics step count. Show the same behavior at 30 and 60 FPS.', hint: 'Use the accumulator pattern. Track physics steps per frame. Cap frameTime at 100ms.', starterCode: '<canvas id=\"ft\" width=\"500\" height=\"400\"></canvas>\n<script>// Your fixed timestep demo</script>', solution: '<canvas id=\"ft\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"ft\"),ctx=c.getContext(\"2d\");\n  const ball={x:250,y:50,vx:200,vy:0,r:15};\n  const FIXED_DT=1/60,gravity=500;let acc=0,last=0,steps=0;\n  function update(dt){ball.vy+=gravity*dt;ball.x+=ball.vx*dt;ball.y+=ball.vy*dt;if(ball.y+ball.r>400){ball.y=400-ball.r;ball.vy*=-0.8;}if(ball.x-ball.r<0||ball.x+ball.r>500){ball.vx*=-1;}steps++;}\n  function loop(ts){const frameTime=Math.min((ts-last)/1000,0.1);last=ts;acc+=frameTime;steps=0;\n    while(acc>=FIXED_DT){update(FIXED_DT);acc-=FIXED_DT;}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(ball.x,ball.y,ball.r,0,7);ctx.fill();\n    ctx.fillStyle=\"#333\";ctx.font=\"14px Arial\";ctx.fillText(`Steps this frame: ${steps}`,10,20);ctx.fillText(`Accumulator: ${acc.toFixed(4)}s`,10,40);\n    requestAnimationFrame(loop);}requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Fixed timestep', value: 'Accumulate time, update in fixed chunks' },
        { label: 'Spiral of death', value: 'Cap frameTime (e.g., 100ms) to prevent accumulator spiral' },
        { label: 'Interpolation alpha', value: 'alpha = accumulator / fixedDt for smooth rendering' },
        { label: 'Variable timestep', value: 'dt = (now - last) / 1000 for simpler loops' },
        { label: 'ECS', value: 'Entity (data) + Component (properties) + System (logic)' },
        { label: 'update vs render', value: 'Separate physics/timing from drawing' }
      ]
    },,

    {
      id: 'canvas-42',
      number: 42,
      partLabel: 'Part 5: Game Development',
      title: 'Simple Physics Engine',
      subtitle: 'Gravity, friction, velocity, acceleration',
      difficulty: 'Advanced',
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ['canvas-41'],
      learningObjectives: [
        'Implement gravity, velocity, and acceleration',
        'Apply friction and damping forces',
        'Handle collision response with restitution',
        'Build a simple physics world'
      ],
      sections: [
        {
          id: 's1',
          title: 'Physics Fundamentals',
          whyItMatters: 'Physics brings games to life. Understanding forces and motion gives you the tools to create realistic and fun interactions.',
          content: "## Core Physics\n\n```javascript\nclass PhysicsBody {\n  constructor(x, y, w, h) {\n    this.x = x; this.y = y;\n    this.w = w; this.h = h;\n    this.vx = 0; this.vy = 0;\n    this.mass = 1;\n    this.restitution = 0.5; // Bounciness (0-1)\n    this.friction = 0.8;\n    this.gravityScale = 1;\n    this.isStatic = false;\n  }\n\n  applyForce(fx, fy) {\n    if (this.isStatic) return;\n    this.vx += fx / this.mass;\n    this.vy += fy / this.mass;\n  }\n\n  update(dt) {\n    if (this.isStatic) return;\n    \n    // Apply gravity\n    this.vy += GRAVITY * this.gravityScale * dt;\n    \n    // Apply friction (air resistance)\n    this.vx *= this.friction;\n    \n    // Update position\n    this.x += this.vx * dt;\n    this.y += this.vy * dt;\n  }\n}\n\n// Ground collision with bounce\nfunction resolveGroundCollision(body, groundY) {\n  if (body.y + body.h > groundY) {\n    body.y = groundY - body.h;\n    body.vy *= -body.restitution;\n    \n    // Stop tiny bounces\n    if (Math.abs(body.vy) < 1) body.vy = 0;\n  }\n}\n```\n\n### Platformer Movement Physics\n\n```javascript\nclass Player extends PhysicsBody {\n  constructor(x, y) {\n    super(x, y, 32, 48);\n    this.speed = 200;\n    this.jumpForce = -400;\n    this.grounded = false;\n  }\n\n  moveLeft() { this.vx = -this.speed; }\n  moveRight() { this.vx = this.speed; }\n  \n  jump() {\n    if (this.grounded) {\n      this.vy = this.jumpForce;\n      this.grounded = false;\n    }\n  }\n\n  update(dt) {\n    super.update(dt);\n    \n    // Friction when grounded\n    if (this.grounded) {\n      this.vx *= 0.85;\n    }\n  }\n\n  resolveCollision(tile) {\n    // Calculate overlap on each axis\n    const overlapX = Math.min(this.x + this.w - tile.x, tile.x + tile.w - this.x);\n    const overlapY = Math.min(this.y + this.h - tile.y, tile.y + tile.h - this.y);\n    \n    if (overlapX < overlapY) {\n      this.vx = 0;\n      this.x += (this.x < tile.x) ? -overlapX : overlapX;\n    } else {\n      if (this.vy > 0) this.grounded = true; // Landing on top\n      this.vy = 0;\n      this.y += (this.y < tile.y) ? -overlapY : overlapY;\n    }\n  }\n}\n```\n\n### Projectile Motion\n\n```javascript\nfunction shootProjectile(x, y, angle, power) {\n  return {\n    x, y,\n    vx: Math.cos(angle) * power,\n    vy: Math.sin(angle) * power,\n    trail: []\n  };\n}\n\nfunction updateProjectile(p, dt) {\n  p.trail.push({ x: p.x, y: p.y });\n  p.vy += GRAVITY * dt;\n  p.x += p.vx * dt;\n  p.y += p.vy * dt;\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv42-q1', type: 'mcq', question: 'What does the restitution coefficient control?', options: ['Bounciness (0 = no bounce, 1 = perfect bounce)', 'Mass of the object', 'Friction amount', 'Gravity scale'], correctAnswer: 0, explanation: 'Restitution determines how much energy is preserved in a collision. 0 = inelastic, 1 = perfectly elastic.', difficulty: 1 },
          { id: 'cv42-q2', type: 'true-false', question: 'A static physics body is affected by gravity.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Static bodies (like walls and floors) are not affected by forces or gravity.', difficulty: 1 },
          { id: 'cv42-q3', type: 'mcq', question: 'In platformer physics, when is the player set to grounded?', options: ['When landing on top of a tile (vy > 0 collision)', 'When pressing the down key', 'When any collision occurs', 'When standing still'], correctAnswer: 0, explanation: 'grounded is set to true when the player lands on a surface from above (vy > 0).', difficulty: 2 },
          { id: 'cv42-q4', type: 'true-false', question: 'Air resistance (damping) should be applied multiplicatively each frame.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Air resistance is typically applied as vx *= friction each frame, where friction is 0-1.', difficulty: 2 },
          { id: 'cv42-q5', type: 'mcq', question: 'What is the formula for force?', options: ['F = ma', 'F = mv', 'F = d/t', 'F = mgh'], correctAnswer: 0, explanation: 'Newtons Second Law: Force = mass * acceleration. Rearranged: acceleration = force / mass.', difficulty: 1 },
          { id: 'cv42-q6', type: 'true-false', question: 'Projectile motion can be simulated by applying gravity to velocity each frame.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Each frame: vy += gravity * dt, then x += vx * dt, y += vy * dt. This creates parabolic motion.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv42-e1', type: 'easy', title: 'Bouncing Ball with Gravity', instructions: 'Create a ball that falls with gravity and bounces off the ground with decreasing height. The ball should eventually stop.', hint: 'Apply gravity to vy each frame. On ground collision, reverse vy with restitution. Stop when vy is very small.', starterCode: '<canvas id=\"bounce\" width=\"300\" height=\"400\"></canvas>\n<script>// Your bouncing ball</script>', solution: '<canvas id=\"bounce\" width=\"300\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"bounce\"),ctx=c.getContext(\"2d\");\n  const ball={x:150,y:50,r:15,vx:0,vy:0};const gravity=500,restitution=0.7;\n  let last=0;\n  function loop(ts){const dt=last?Math.min((ts-last)/1000,0.05):0.016;last=ts;\n    ball.vy+=gravity*dt;ball.y+=ball.vy*dt;\n    if(ball.y+ball.r>400){ball.y=400-ball.r;ball.vy*=-restitution;if(Math.abs(ball.vy)<2)ball.vy=0;}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,300,400);\n    ctx.fillStyle=\"#E91E63\";ctx.beginPath();ctx.arc(ball.x,ball.y,ball.r,0,7);ctx.fill();\n    requestAnimationFrame(loop);}requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Gravity', value: 'vy += GRAVITY * dt each frame' },
        { label: 'Restitution', value: 'vy *= -restitution on collision (0-1)' },
        { label: 'Static bodies', value: 'Not affected by forces or gravity' },
        { label: 'Friction/damping', value: 'vx *= frictionFactor per frame' },
        { label: 'Force', value: 'F = ma, so a = F/m' },
        { label: 'Shock absorption', value: 'Stop tiny vibrations: if |vy| < threshold, vy = 0' }
      ]
    },,

    {
      id: 'canvas-43',
      number: 43,
      partLabel: 'Part 5: Game Development',
      title: 'Sprite Animation',
      subtitle: 'Spritesheets, frame cycling, sprite atlases',
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-42'],
      learningObjectives: [
        'Load and render sprites from a spritesheet',
        'Implement frame-based animation cycling',
        'Manage animation states and transitions',
        'Optimize with sprite atlases'
      ],
      sections: [
        {
          id: 's1',
          title: 'Sprite Animation Systems',
          whyItMatters: 'Sprite animation brings characters to life. Well-organized animation systems keep code clean and enable complex character behaviors.',
          content: "## Spritesheet Animation\n\n```javascript\nclass SpriteAnimation {\n  constructor(spritesheet, frameWidth, frameHeight) {\n    this.image = spritesheet;\n    this.frameWidth = frameWidth;\n    this.frameHeight = frameHeight;\n    this.cols = Math.floor(spritesheet.width / frameWidth);\n    this.states = {};\n    this.currentState = null;\n    this.frame = 0;\n    this.timer = 0;\n  }\n\n  addState(name, { startFrame, endFrame, speed, loop = true }) {\n    this.states[name] = { startFrame, endFrame, speed, loop };\n  }\n\n  setState(name) {\n    if (this.currentState !== name) {\n      this.currentState = name;\n      this.frame = this.states[name].startFrame;\n      this.timer = 0;\n    }\n  }\n\n  update(dt) {\n    const state = this.states[this.currentState];\n    if (!state) return;\n    \n    this.timer += dt;\n    if (this.timer >= state.speed) {\n      this.timer = 0;\n      this.frame++;\n      \n      if (this.frame > state.endFrame) {\n        if (state.loop) {\n          this.frame = state.startFrame;\n        } else {\n          this.frame = state.endFrame;\n          this.onComplete?.();\n        }\n      }\n    }\n  }\n\n  draw(ctx, x, y, flipX = false) {\n    const col = this.frame % this.cols;\n    const row = Math.floor(this.frame / this.cols);\n    \n    ctx.save();\n    if (flipX) {\n      ctx.translate(x + this.frameWidth, y);\n      ctx.scale(-1, 1);\n      x = 0;\n    }\n    ctx.drawImage(this.image,\n      col * this.frameWidth, row * this.frameHeight,\n      this.frameWidth, this.frameHeight,\n      x, y, this.frameWidth, this.frameHeight\n    );\n    ctx.restore();\n  }\n}\n\n// Usage\nconst anim = new SpriteAnimation(playerSheet, 32, 48);\nconst states = {\n  idle: { startFrame: 0, endFrame: 3, speed: 0.2 },\n  walk: { startFrame: 4, endFrame: 11, speed: 0.1 },\n  jump: { startFrame: 12, endFrame: 14, speed: 0.15, loop: false },\n  attack: { startFrame: 15, endFrame: 18, speed: 0.08, loop: false }\n};\n```\n\n### Canvas-Based Sprite Generation\n\n```javascript\nfunction generateGradientSprite(w, h, color1, color2) {\n  const offscreen = document.createElement('canvas');\n  offscreen.width = w;\n  offscreen.height = h;\n  const ctx = offscreen.getContext('2d');\n  \n  const gradient = ctx.createLinearGradient(0, 0, w, h);\n  gradient.addColorStop(0, color1);\n  gradient.addColorStop(1, color2);\n  ctx.fillStyle = gradient;\n  ctx.fillRect(0, 0, w, h);\n  \n  return offscreen;\n}\n```\n\n### Animation Blend Tree (Advanced)\n\n```javascript\nfunction getBlendedFrame(player, weapon) {\n  if (player.running) return weapon ? 8 : 0;\n  if (player.jumping) return weapon ? 12 : 4;\n  return weapon ? 16 : 20; // Idle with weapon / unarmed\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv43-q1', type: 'mcq', question: 'What is a spritesheet?', options: ['A single image containing multiple frames of animation', 'A sheet of paper with sprite designs', 'A CSS sprite technique', 'A pixel art editor'], correctAnswer: 0, explanation: 'A spritesheet arranges all animation frames in a grid on one image file.', difficulty: 1 },
          { id: 'cv43-q2', type: 'true-false', question: 'Animation speed is controlled by how fast you cycle through frames.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Speed is determined by the time (in seconds) between frame advances.', difficulty: 1 },
          { id: 'cv43-q3', type: 'mcq', question: 'How do you flip a sprite horizontally on canvas?', options: ['Translate to sprite position, scale(-1, 1), draw at 0', 'Use ctx.flip = true', 'Use ctx.transform(1,0,0,-1,0,0)', 'Swap sprite width/height'], correctAnswer: 0, explanation: 'To flip: translate to the sprite position, scale(-1, 1), then draw at (0, 0).', difficulty: 2 },
          { id: 'cv43-q4', type: 'true-false', question: 'A non-looping animation should freeze on the last frame when complete.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Non-looping animations (like a single jump) should stay on the final frame until a state change.', difficulty: 1 },
          { id: 'cv43-q5', type: 'mcq', question: 'How do you calculate which row/col a frame index is on?', options: ['col = frame % cols, row = Math.floor(frame / cols)', 'col = Math.floor(frame / cols), row = frame % cols', 'col = frame / cols, row = frame * cols', 'col = frame, row = 0'], correctAnswer: 0, explanation: 'For a grid spritesheet, column is the remainder and row is the quotient of frame divided by columns.', difficulty: 2 },
          { id: 'cv43-q6', type: 'true-false', question: 'You cannot generate sprites programmatically on canvas; you must use image files.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Offscreen canvases can generate sprites programmatically using gradients, shapes, etc.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv43-e1', type: 'easy', title: 'Animated Character (Procedural)', instructions: 'Create a simple character sprite using canvas drawing (rectangles, circles). Animate it with at least 4 frames for a walk cycle.', hint: 'Use a timer to cycle through frame numbers. Each frame draws the character in a slightly different pose.', starterCode: '<canvas id=\"walk\" width=\"400\" height=\"300\"></canvas>\n<script>// Your animated character</script>', solution: '<canvas id=\"walk\" width=\"400\" height=\"300\"></canvas>\n<script>\n  const c=document.getElementById(\"walk\"),ctx=c.getContext(\"2d\");\n  let frame=0,timer=0;\n  function loop(ts){const dt=last?Math.min((ts-last)/1000,0.05):0.016;last=ts;\n    timer+=dt;if(timer>=0.15){timer=0;frame=(frame+1)%4;}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,400,300);\n    ctx.save();ctx.translate(180,0);\n    // Body\n    ctx.fillStyle=\"#2196F3\";ctx.fillRect(0,80,40,60);\n    // Head\n    ctx.fillStyle=\"#FFCC80\";ctx.beginPath();ctx.arc(20,55,25,0,7);ctx.fill();\n    // Legs (animated)\n    ctx.fillStyle=\"#333\";const legOff=[0,10,-10,10][frame];\n    ctx.fillRect(8,140,10,40+legOff);ctx.fillRect(22,140,10,40-legOff);\n    // Arms\n    const armOff=[0,8,-8,8][frame];\n    ctx.fillRect(-5,90,10,35+armOff);ctx.fillRect(35,90,10,35-armOff);\n    ctx.restore();\n    requestAnimationFrame(loop);}\n  let last=0;requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Spritesheet', value: 'Grid of frames in one image' },
        { label: 'Frame index', value: 'col = frame % cols, row = floor(frame / cols)' },
        { label: 'Animation timer', value: 'Accumulate dt, advance frame when timer > speed' },
        { label: 'Loop vs one-shot', value: 'Looping restarts, one-shot stays on last frame' },
        { label: 'Horizontal flip', value: 'scale(-1, 1) with translate to position' },
        { label: 'State transitions', value: 'Reset frame when changing animation state' }
      ]
    },,

    {
      id: 'canvas-44',
      number: 44,
      partLabel: 'Part 5: Game Development',
      title: 'Tile Maps',
      subtitle: 'Grid-based worlds, tile rendering, level editing',
      difficulty: 'Advanced',
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ['canvas-43'],
      learningObjectives: [
        'Design and render tile-based maps from arrays',
        'Implement camera scrolling over tile maps',
        'Handle tile collision for game characters',
        'Build a simple level editor'
      ],
      sections: [
        {
          id: 's1',
          title: 'Tile Map Rendering',
          whyItMatters: 'Tile maps are the foundation of countless games. They are memory-efficient, easy to design, and enable complex level layouts.',
          content: "## Tile Map System\n\n```javascript\nconst TILE_SIZE = 32;\n\nclass TileMap {\n  constructor(cols, rows) {\n    this.cols = cols;\n    this.rows = rows;\n    this.tiles = new Array(cols * rows).fill(0);\n    this.tileTypes = {\n      0: { solid: false, color: '#90EE90' },  // Grass\n      1: { solid: true, color: '#8B4513' },   // Wall\n      2: { solid: false, color: '#4A90D9' },  // Water\n      3: { solid: true, color: '#808080' },   // Stone\n    };\n  }\n\n  getTile(col, row) {\n    if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) {\n      return 1; // Out of bounds = wall\n    }\n    return this.tiles[row * this.cols + col];\n  }\n\n  setTile(col, row, value) {\n    this.tiles[row * this.cols + col] = value;\n  }\n\n  render(ctx, camera) {\n    const startCol = Math.floor(camera.x / TILE_SIZE);\n    const endCol = startCol + Math.ceil(ctx.canvas.width / TILE_SIZE) + 1;\n    const startRow = Math.floor(camera.y / TILE_SIZE);\n    const endRow = startRow + Math.ceil(ctx.canvas.height / TILE_SIZE) + 1;\n\n    for (let row = startRow; row < endRow && row < this.rows; row++) {\n      for (let col = startCol; col < endCol && col < this.cols; col++) {\n        const tile = this.getTile(col, row);\n        const type = this.tileTypes[tile];\n        ctx.fillStyle = type.color;\n        ctx.fillRect(\n          col * TILE_SIZE - camera.x,\n          row * TILE_SIZE - camera.y,\n          TILE_SIZE, TILE_SIZE\n        );\n      }\n    }\n  }\n\n  // Collision check\n  isSolid(x, y, w, h) {\n    const startCol = Math.floor(x / TILE_SIZE);\n    const endCol = Math.floor((x + w - 1) / TILE_SIZE);\n    const startRow = Math.floor(y / TILE_SIZE);\n    const endRow = Math.floor((y + h - 1) / TILE_SIZE);\n\n    for (let row = startRow; row <= endRow; row++) {\n      for (let col = startCol; col <= endCol; col++) {\n        if (this.tileTypes[this.getTile(col, row)].solid) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n}\n```\n\n### Level Data Format\n\n```javascript\nconst levelData = [\n  [1,1,1,1,1,1,1,1,1,1],\n  [1,0,0,0,0,0,0,0,0,1],\n  [1,0,0,0,0,0,0,0,0,1],\n  [1,0,0,2,0,0,3,0,0,1],\n  [1,0,0,2,0,0,3,0,0,1],\n  [1,0,0,0,0,0,0,0,0,1],\n  [1,1,1,1,1,1,1,1,1,1],\n];\n\n// Loading\nfunction loadLevel(map, data) {\n  for (let row = 0; row < data.length; row++) {\n    for (let col = 0; col < data[row].length; col++) {\n      map.setTile(col, row, data[row][col]);\n    }\n  }\n}\n```\n\n### Level Editor Concept\n\n```javascript\nlet selectedTile = 1;\n\ncanvas.addEventListener('click', (e) => {\n  const pos = getCanvasCoords(e);\n  const col = Math.floor((pos.x + camera.x) / TILE_SIZE);\n  const row = Math.floor((pos.y + camera.y) / TILE_SIZE);\n  map.setTile(col, row, selectedTile);\n});\n\n// Tile palette UI\nconst palette = [1, 0, 2, 3];\npalette.forEach((tile, i) => {\n  ctx.fillStyle = map.tileTypes[tile].color;\n  ctx.fillRect(i * 40, canvas.height - 40, 40, 40);\n});\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv44-q1', type: 'mcq', question: 'What is a key advantage of tile maps?', options: ['Memory efficiency and easy level design', 'Better graphics quality', 'Faster game loop', 'Easier networking'], correctAnswer: 0, explanation: 'Tile maps use a 2D array of small integers, which is very memory efficient and easy to edit.', difficulty: 1 },
          { id: 'cv44-q2', type: 'true-false', question: 'You should only render tiles that are visible on screen.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Culling off-screen tiles is a critical optimization for large maps.', difficulty: 1 },
          { id: 'cv44-q3', type: 'mcq', question: 'In tile collision, how do you find which tiles a character overlaps?', options: ['Divide position by tile size to get col/row range', 'Check every tile in the map', 'Use isPointInPath on each tile', 'Use the spatial grid'], correctAnswer: 0, explanation: 'Convert pixel coordinates to tile coordinates by dividing by tile size.', difficulty: 2 },
          { id: 'cv44-q4', type: 'true-false', question: 'Out-of-bounds tiles should always be treated as empty space.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Out-of-bounds tiles are typically treated as solid walls to prevent the player from leaving the map.', difficulty: 1 },
          { id: 'cv44-q5', type: 'mcq', question: 'What is an autotile?', options: ['A tile that automatically selects the correct sprite based on neighbors', 'A tile that animates automatically', 'A tile that is placed by AI', 'A tile that cannot be edited'], correctAnswer: 0, explanation: 'Autotiling examines neighboring tiles to automatically select corner/edge tiles for smooth transitions.', difficulty: 2 },
          { id: 'cv44-q6', type: 'true-false', question: 'A tile palette in a level editor lets you select which tile type to paint.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A tile palette UI shows available tile types for the user to select before painting onto the map.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv44-e1', type: 'medium', title: 'Top-Down Tile Explorer', instructions: 'Create a tile map with walls and floors. Render a character that moves with WASD and collides with solid tiles.', hint: 'Use the tile collision: check if any solid tiles overlap the player rect before moving.', starterCode: '<canvas id=\"explorer\" width=\"500\" height=\"400\"></canvas>\n<script>// Your tile explorer</script>', solution: '<canvas id=\"explorer\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"explorer\"),ctx=c.getContext(\"2d\");\n  const T=32,data=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];\n  const player={x:T,y:T,w:20,h:20};const keys={},SPEED=150;\n  document.addEventListener(\"keydown\",e=>{keys[e.code]=true;if([\"ArrowUp\",\"ArrowDown\",\"ArrowLeft\",\"ArrowRight\"].includes(e.code))e.preventDefault();});\n  document.addEventListener(\"keyup\",e=>keys[e.code]=false);\n  function isSolid(x,y){const sc=Math.floor(x/T),ec=Math.floor((x+player.w-1)/T),sr=Math.floor(y/T),er=Math.floor((y+player.h-1)/T);for(let r=sr;r<=er;r++)for(let c=sc;c<=ec;c++){if(r<0||r>=data.length||c<0||c>=data[0].length||data[r][c]===1)return true;}return false;}\n  function update(dt){let dx=0,dy=0;if(keys.ArrowLeft||keys.KeyA)dx-=1;if(keys.ArrowRight||keys.KeyD)dx+=1;if(keys.ArrowUp||keys.KeyW)dy-=1;if(keys.ArrowDown||keys.KeyS)dy+=1;const len=Math.sqrt(dx*dx+dy*dy);if(len>0){dx/=len;dy/=len;}\n    const nx=player.x+dx*SPEED*dt;if(!isSolid(nx,player.y))player.x=nx;\n    const ny=player.y+dy*SPEED*dt;if(!isSolid(player.x,ny))player.y=ny;}\n  function draw(){ctx.fillStyle=\"#333\";ctx.fillRect(0,0,500,400);\n    for(let r=0;r<data.length;r++)for(let c=0;c<data[0].length;c++){ctx.fillStyle=data[r][c]===1?\"#8B4513\":\"#90EE90\";ctx.fillRect(c*T,r*T,T,T);}\n    ctx.fillStyle=\"#E91E63\";ctx.fillRect(player.x,player.y,player.w,player.h);\n    requestAnimationFrame(()=>{update(1/60);draw();});}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'Tile grid', value: '2D array, value per tile type' },
        { label: 'Tile rendering', value: 'Pixel coords = col * tileSize, row * tileSize' },
        { label: 'View culling', value: 'Only render tiles in camera viewport' },
        { label: 'Tile collision', value: 'Convert pixel AABB to tile range' },
        { label: 'Out-of-bounds', value: 'Treat as solid wall by default' },
        { label: 'Level data', value: 'Array of arrays, easy to edit and save as JSON' }
      ]
    },,

    {
      id: 'canvas-45',
      number: 45,
      partLabel: 'Part 5: Game Development',
      title: 'Audio for Games',
      subtitle: 'Web Audio API, sound effects, music playback',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-44'],
      learningObjectives: [
        'Play sound effects using Web Audio API',
        'Generate procedural sounds with oscillators',
        'Manage audio sprites for efficient loading',
        'Implement volume control and muting'
      ],
      sections: [
        {
          id: 's1',
          title: 'Web Audio for Games',
          whyItMatters: 'Audio dramatically improves game feel. The Web Audio API provides low-latency, high-quality sound playback and synthesis.',
          content: "## Audio Manager\n\n```javascript\nclass AudioManager {\n  constructor() {\n    this.context = new (window.AudioContext || window.webkitAudioContext)();\n    this.buffers = {};\n    this.masterVolume = 1;\n    this.muted = false;\n  }\n\n  async loadSound(name, url) {\n    const response = await fetch(url);\n    const arrayBuffer = await response.arrayBuffer();\n    const audioBuffer = await this.context.decodeAudioData(arrayBuffer);\n    this.buffers[name] = audioBuffer;\n  }\n\n  play(name, volume = 1, rate = 1) {\n    if (this.muted) return;\n    const buffer = this.buffers[name];\n    if (!buffer) return;\n\n    const source = this.context.createBufferSource();\n    source.buffer = buffer;\n    source.playbackRate.value = rate;\n\n    const gainNode = this.context.createGain();\n    gainNode.gain.value = volume * this.masterVolume;\n\n    source.connect(gainNode);\n    gainNode.connect(this.context.destination);\n    source.start(0);\n\n    return source; // For stopping early\n  }\n\n  toggleMute() {\n    this.muted = !this.muted;\n  }\n}\n```\n\n### Procedural Sound Effects\n\n```javascript\nfunction createLaserSound(audioCtx) {\n  const duration = 0.3;\n  const sampleRate = audioCtx.sampleRate;\n  const length = sampleRate * duration;\n  const buffer = audioCtx.createBuffer(1, length, sampleRate);\n  const data = buffer.getChannelData(0);\n\n  for (let i = 0; i < length; i++) {\n    const t = i / sampleRate;\n    const freq = 800 + (1 - t / duration) * 2000; // Descending pitch\n    const amplitude = 1 - t / duration; // Fade out\n    data[i] = Math.sin(2 * Math.PI * freq * t) * amplitude * 0.3;\n  }\n\n  return buffer;\n}\n\nfunction playProcedural(audioCtx, buffer) {\n  const source = audioCtx.createBufferSource();\n  source.buffer = buffer;\n  source.connect(audioCtx.destination);\n  source.start();\n}\n```\n\n### Audio Sprites (One File, Many Sounds)\n\n```javascript\nconst audioSprite = {\n  file: 'sfx.mp3',\n  sprites: {\n    jump: { start: 0, duration: 0.3 },\n    coin: { start: 0.3, duration: 0.4 },\n    hit: { start: 0.7, duration: 0.5 },\n    death: { start: 1.2, duration: 1.0 }\n  }\n};\n\nfunction playSprite(name) {\n  const sprite = audioSprite.sprites[name];\n  const source = audioCtx.createBufferSource();\n  source.buffer = fullBuffer;\n  source.start(0, sprite.start, sprite.duration);\n}\n```\n\n### Background Music Loop\n\n```javascript\nfunction playMusic() {\n  const source = audioCtx.createBufferSource();\n  source.buffer = musicBuffer;\n  source.loop = true;\n  const gain = audioCtx.createGain();\n  gain.gain.value = 0.5; // Music at 50% volume\n  source.connect(gain);\n  gain.connect(audioCtx.destination);\n  source.start();\n  return { source, gain };\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv45-q1', type: 'mcq', question: 'What is the entry point of the Web Audio API?', options: ['AudioContext', 'Audio', 'SoundPlayer', 'MediaPlayer'], correctAnswer: 0, explanation: 'Everything in Web Audio starts with creating an AudioContext.', difficulty: 1 },
          { id: 'cv45-q2', type: 'true-false', question: 'The AudioContext constructor may fail without user interaction due to autoplay policies.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Browsers require user interaction before creating/resuming AudioContext to prevent autoplay abuse.', difficulty: 2 },
          { id: 'cv45-q3', type: 'mcq', question: 'What does a GainNode control?', options: ['Volume of the audio signal', 'Playback speed', 'Audio pitch', 'Sound panning'], correctAnswer: 0, explanation: 'GainNode controls the amplitude (volume) of the audio signal passing through it.', difficulty: 1 },
          { id: 'cv45-q4', type: 'true-false', question: 'An audio sprite packs multiple sounds into a single audio file.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Audio sprites store multiple sound effects in one file, offset by start times.', difficulty: 1 },
          { id: 'cv45-q5', type: 'mcq', question: 'How do you create a looping sound source?', options: ['Set source.loop = true', 'Call source.start() in a setInterval', 'Use a GainNode with feedback', 'Set source.looping = true'], correctAnswer: 0, explanation: 'Set the loop property on the AudioBufferSourceNode to true for seamless looping.', difficulty: 1 },
          { id: 'cv45-q6', type: 'true-false', question: 'Procedural audio creates sounds using math rather than loading audio files.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Procedural audio generates sound waves mathematically, e.g., Math.sin(freq * t) for a pure tone.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv45-e1', type: 'medium', title: 'Procedural Sound Board', instructions: 'Create a canvas with 4 buttons labeled Jump, Coin, Hit, Laser. Each plays a procedurally generated sound effect using Web Audio API oscillators.', hint: 'Use createOscillator for tones, createBuffer for custom sounds. Use different frequencies and durations.', starterCode: '<canvas id=\"soundboard\" width=\"500\" height=\"300\"></canvas>\n<script>// Your sound board</script>', solution: '<canvas id=\"soundboard\" width=\"500\" height=\"300\"></canvas>\n<script>\n  const c=document.getElementById(\"soundboard\"),ctx=c.getContext(\"2d\");\n  const audioCtx=new AudioContext();\n  const sounds=[{label:\"Jump\",freq:500,endFreq:800,dur:0.15,color:\"#4CAF50\"},{label:\"Coin\",freq:1000,endFreq:1500,dur:0.2,color:\"#FFC107\"},{label:\"Hit\",freq:200,endFreq:80,dur:0.3,color:\"#E91E63\"},{label:\"Laser\",freq:800,endFreq:3000,dur:0.25,color:\"#2196F3\"}];\n  const btns=sounds.map((s,i)=>({x:30+i*120,y:100,w:100,h:50,...s}));\n  function playSound(snd){const len=audioCtx.sampleRate*snd.dur,buffer=audioCtx.createBuffer(1,len,audioCtx.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<len;i++){const t=i/audioCtx.sampleRate;const freq=snd.freq+(snd.endFreq-snd.freq)*(t/snd.dur);data[i]=Math.sin(2*Math.PI*freq*t)*(1-t/snd.dur)*0.3;}const src=audioCtx.createBufferSource();src.buffer=buffer;src.connect(audioCtx.destination);src.start();}\n  c.addEventListener(\"click\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;btns.forEach(b=>{if(mx>=b.x&&mx<=b.x+100&&my>=b.y&&my<=b.y+50){if(audioCtx.state===\"suspended\")audioCtx.resume();playSound(b);}});});\n  function draw(){ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,300);ctx.fillStyle=\"#333\";ctx.font=\"20px Arial\";ctx.textAlign=\"center\";ctx.fillText(\"Procedural Sound Board\",250,50);btns.forEach(b=>{ctx.fillStyle=b.color;ctx.fillRect(b.x,b.y,100,50);ctx.fillStyle=\"#fff\";ctx.font=\"14px Arial\";ctx.textBaseline=\"middle\";ctx.fillText(b.label,b.x+50,b.y+25);});}draw();\n</script>' }
      ],
      cheatSheet: [
        { label: 'AudioContext', value: 'Entry point for Web Audio API' },
        { label: 'GainNode', value: 'Controls volume of audio signal' },
        { label: 'BufferSource', value: 'Play decoded audio buffer' },
        { label: 'Looping', value: 'source.loop = true for background music' },
        { label: 'Procedural audio', value: 'Generate sounds with math (oscillators, buffers)' },
        { label: 'Autoplay policy', value: 'AudioContext must be created/resumed after user interaction' }
      ]
    },,

    {
      id: 'canvas-46',
      number: 46,
      partLabel: 'Part 5: Game Development',
      title: 'Particle Systems',
      subtitle: 'Emitters, particle physics, visual effects',
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      xpReward: 60,
      prerequisites: ['canvas-45'],
      learningObjectives: [
        'Design a reusable particle system',
        'Implement emitters with configurable properties',
        'Create common effects: fire, smoke, explosions',
        'Optimize particle rendering with object pooling'
      ],
      sections: [
        {
          id: 's1',
          title: 'Particle System Architecture',
          whyItMatters: 'Particle systems create immersive visual effects - fire, smoke, explosions, rain. A well-designed system can produce diverse effects from a single engine.',
          content: "## Particle System\n\n```javascript\nclass Particle {\n  constructor() {\n    this.reset();\n  }\n\n  reset() {\n    this.x = 0; this.y = 0;\n    this.vx = 0; this.vy = 0;\n    this.life = 0; this.maxLife = 0;\n    this.size = 0; this.startSize = 0; this.endSize = 0;\n    this.color = [255, 255, 255];\n    this.startColor = [255, 255, 255];\n    this.endColor = [0, 0, 0];\n    this.alpha = 1;\n    this.active = false;\n  }\n\n  init(x, y, config) {\n    this.active = true;\n    this.x = x + (Math.random() - 0.5) * config.spread;\n    this.y = y + (Math.random() - 0.5) * config.spread;\n    \n    const angle = config.angle + (Math.random() - 0.5) * config.spreadAngle;\n    const speed = config.speed * (0.5 + Math.random() * 0.5);\n    this.vx = Math.cos(angle) * speed;\n    this.vy = Math.sin(angle) * speed;\n    \n    this.maxLife = config.life * (0.7 + Math.random() * 0.3);\n    this.life = this.maxLife;\n    \n    this.startSize = config.size * (0.8 + Math.random() * 0.4);\n    this.endSize = this.startSize * config.sizeShrink;\n    this.size = this.startSize;\n    \n    this.startColor = config.color;\n    this.endColor = config.endColor || config.color;\n    this.alpha = 1;\n  }\n\n  update(dt) {\n    if (!this.active) return;\n    this.life -= dt;\n    if (this.life <= 0) { this.active = false; return; }\n    \n    const t = 1 - this.life / this.maxLife;\n    \n    this.x += this.vx * dt;\n    this.y += this.vy * dt;\n    this.vy += 50 * dt; // Slight gravity\n    \n    this.size = this.startSize + (this.endSize - this.startSize) * t;\n    this.alpha = 1 - t;\n    \n    this.color = this.startColor.map((c, i) =>\n      c + (this.endColor[i] - c) * t\n    );\n  }\n\n  draw(ctx) {\n    if (!this.active) return;\n    ctx.globalAlpha = this.alpha;\n    ctx.fillStyle = `rgb(${this.color.map(c => Math.round(c)).join(\",\")})`;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.globalAlpha = 1;\n  }\n}\n\nclass Emitter {\n  constructor(poolSize) {\n    this.pool = Array.from({ length: poolSize }, () => new Particle());\n    this.rate = 0; // Particles per second\n    this.timer = 0;\n  }\n\n  emit(count, x, y, config) {\n    for (let i = 0; i < count; i++) {\n      const particle = this.pool.find(p => !p.active);\n      if (particle) particle.init(x, y, config);\n    }\n  }\n\n  update(dt, x, y, config) {\n    this.timer += dt;\n    while (this.timer >= 1 / this.rate) {\n      this.timer -= 1 / this.rate;\n      this.emit(1, x, y, config);\n    }\n    \n    this.pool.forEach(p => p.update(dt));\n  }\n\n  draw(ctx) {\n    this.pool.forEach(p => p.draw(ctx));\n  }\n}\n```\n\n### Fire Effect Config\n\n```javascript\nconst FIRE_CONFIG = {\n  angle: -Math.PI / 2, // Upward\n  spreadAngle: Math.PI / 4,\n  speed: 80,\n  spread: 5,\n  life: 0.8,\n  size: 6,\n  sizeShrink: 0.1,\n  color: [255, 200, 50],\n  endColor: [100, 0, 0]\n};\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv46-q1', type: 'mcq', question: 'What is object pooling used for in particle systems?', options: ['Reuse dead particle objects instead of creating new ones', 'Store particles in a pool for rendering', 'Group particles by color', 'Sort particles by depth'], correctAnswer: 0, explanation: 'Object pooling reuses inactive particles to avoid garbage collection overhead from constant creation/destruction.', difficulty: 2 },
          { id: 'cv46-q2', type: 'true-false', question: 'Particle physics should include gravity for realistic effects.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Some effects use gravity (fire, rain), but others (magic sparkles) may not. It is configurable.', difficulty: 1 },
          { id: 'cv46-q3', type: 'mcq', question: 'How do particles interpolate color over their lifetime?', options: ['Lerp between startColor and endColor based on life ratio', 'Use a random color each frame', 'Cycle through a preset palette', 'Use the background color'], correctAnswer: 0, explanation: 'Particles blend from startColor to endColor using t = 1 - (life / maxLife).', difficulty: 2 },
          { id: 'cv46-q4', type: 'true-false', question: 'Emitter rate controls how many particles are spawned per second.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The emission rate (particles/second) controls the density of the particle stream.', difficulty: 1 },
          { id: 'cv46-q5', type: 'mcq', question: 'What causes particles to spread out on emission?', options: ['Random angle offset within spreadAngle', 'Gravity', 'Wind force', 'Collision with other particles'], correctAnswer: 0, explanation: 'Each particle gets a random angle within the spreadAngle range, creating a cone or burst effect.', difficulty: 1 },
          { id: 'cv46-q6', type: 'true-false', question: 'Particle size should remain constant throughout the particle lifetime.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Size typically changes (shrinks for smoke, grows for explosions) over the particle lifetime.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv46-e1', type: 'easy', title: 'Click to Explode', instructions: 'Create a particle explosion effect when clicking on the canvas. Particles should burst outward and fade.', hint: 'On click, emit 50 particles with angle in all directions, high speed, and short life.', starterCode: '<canvas id=\"explode\" width=\"500\" height=\"400\"></canvas>\n<script>// Your explosion</script>', solution: '<canvas id=\"explode\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"explode\"),ctx=c.getContext(\"2d\");\n  let particles=[];\n  c.addEventListener(\"click\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;for(let i=0;i<60;i++){const angle=Math.random()*7,speed=100+Math.random()*200;particles.push({x:mx,y:my,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,life:0.6+Math.random()*0.4,maxLife:0,size:3+Math.random()*4,color:[255,Math.random()*255,0]});}});\n  function loop(ts){const dt=last?Math.min((ts-last)/1000,0.05):0.016;last=ts;\n    ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,500,400);\n    particles=particles.filter(p=>{p.life-=dt;if(p.life<=0)return false;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=200*dt;\n      const t=1-p.life/(p.maxLife||p.life+dt);p.maxLife=Math.max(p.life+dt,p.maxLife||0);\n      ctx.globalAlpha=Math.max(0,p.life/0.8);ctx.fillStyle=`rgb(${~~p.color[0]},${~~p.color[1]},${~~p.color[2]})`;ctx.beginPath();ctx.arc(p.x,p.y,p.size*(1-t*0.5),0,7);ctx.fill();ctx.globalAlpha=1;return true;});\n    requestAnimationFrame(loop);}let last=0;requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'Object pooling', value: 'Reuse inactive particles to avoid GC' },
        { label: 'Emitter', value: 'Spawns particles at configured rate' },
        { label: 'Particle config', value: 'angle, spread, speed, life, size, color' },
        { label: 'Color lerp', value: 'Interpolate startColor to endColor over life' },
        { label: 'Alpha fade', value: 'globalAlpha decreases as life decreases' },
        { label: 'Config presets', value: 'Define reusable effect configs (fire, smoke, sparkle)' }
      ]
    },,

    {
      id: 'canvas-47',
      number: 47,
      partLabel: 'Part 5: Game Development',
      title: 'Enemy AI',
      subtitle: 'Patrol, chase, state-driven behaviors',
      difficulty: 'Advanced',
      estimatedMinutes: 40,
      xpReward: 65,
      prerequisites: ['canvas-46'],
      learningObjectives: [
        'Implement basic enemy AI with patrol and chase states',
        'Use finite state machines for enemy behavior',
        'Implement line-of-sight detection',
        'Create simple pathfinding (follow waypoints)'
      ],
      sections: [
        {
          id: 's1',
          title: 'Enemy AI Patterns',
          whyItMatters: 'AI makes games challenging and engaging. Simple state-based behaviors can create surprisingly convincing enemy intelligence.',
          content: "## Enemy State Machine\n\n```javascript\nclass Enemy {\n  constructor(x, y) {\n    this.x = x; this.y = y;\n    this.speed = 100;\n    this.state = 'patrol';\n    this.patrolDir = 1;\n    this.patrolRange = 150;\n    this.startX = x;\n    this.detectionRange = 200;\n    this.attackRange = 30;\n    this.attackCooldown = 0;\n  }\n\n  update(dt, player) {\n    const dist = Math.hypot(this.x - player.x, this.y - player.y);\n    \n    switch (this.state) {\n      case 'patrol':\n        this.patrol(dt);\n        if (dist < this.detectionRange) {\n          this.state = 'chase';\n        }\n        break;\n        \n      case 'chase':\n        this.chase(dt, player);\n        if (dist > this.detectionRange * 1.5) {\n          this.state = 'patrol';\n        } else if (dist < this.attackRange) {\n          this.state = 'attack';\n        }\n        break;\n        \n      case 'attack':\n        this.attack(dt, player);\n        if (dist > this.attackRange * 1.2) {\n          this.state = 'chase';\n        }\n        break;\n    }\n  }\n\n  patrol(dt) {\n    this.x += this.speed * this.patrolDir * dt;\n    if (Math.abs(this.x - this.startX) > this.patrolRange) {\n      this.patrolDir *= -1;\n    }\n  }\n\n  chase(dt, player) {\n    const dx = player.x - this.x;\n    const dy = player.y - this.y;\n    const len = Math.hypot(dx, dy);\n    this.x += (dx / len) * this.speed * dt;\n    this.y += (dy / len) * this.speed * dt;\n  }\n\n  attack(dt, player) {\n    this.attackCooldown -= dt;\n    if (this.attackCooldown <= 0) {\n      player.takeDamage(10);\n      this.attackCooldown = 1;\n    }\n  }\n}\n```\n\n### Line of Sight\n\n```javascript\nfunction hasLineOfSight(x1, y1, x2, y2, map) {\n  const dist = Math.hypot(x2 - x1, y2 - y1);\n  const steps = Math.ceil(dist / 10); // Check every 10px\n  \n  for (let i = 0; i <= steps; i++) {\n    const t = i / steps;\n    const checkX = x1 + (x2 - x1) * t;\n    const checkY = y1 + (y2 - y1) * t;\n    \n    const col = Math.floor(checkX / TILE_SIZE);\n    const row = Math.floor(checkY / TILE_SIZE);\n    \n    if (map.isSolid(col, row)) {\n      return false; // Blocked by wall\n    }\n  }\n  return true;\n}\n```\n\n### Waypoint Patrol\n\n```javascript\nconst waypoints = [\n  { x: 100, y: 200 },\n  { x: 400, y: 200 },\n  { x: 400, y: 400 },\n  { x: 100, y: 400 }\n];\n\nlet currentWaypoint = 0;\n\nfunction moveToWaypoint(enemy, dt) {\n  const target = waypoints[currentWaypoint];\n  const dx = target.x - enemy.x;\n  const dy = target.y - enemy.y;\n  const dist = Math.hypot(dx, dy);\n  \n  if (dist < 5) {\n    currentWaypoint = (currentWaypoint + 1) % waypoints.length;\n  } else {\n    enemy.x += (dx / dist) * enemy.speed * dt;\n    enemy.y += (dy / dist) * enemy.speed * dt;\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv47-q1', type: 'mcq', question: 'What triggers an enemy state transition from patrol to chase?', options: ['Player enters detection range', 'Timer expires', 'Enemy reaches patrol boundary', 'Player attacks'], correctAnswer: 0, explanation: 'The enemy transitions to chase when the player comes within the detection range.', difficulty: 1 },
          { id: 'cv47-q2', type: 'true-false', question: 'An enemy should immediately return to patrol when the player leaves detection range.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Use a hysteresis buffer (e.g., 1.5x range) to prevent rapid state flickering at the range boundary.', difficulty: 2 },
          { id: 'cv47-q3', type: 'mcq', question: 'What is line of sight (LOS) in game AI?', options: ['Checking if a straight path between two points is unobstructed', 'The distance the enemy can see', 'The enemies field of view angle', 'The enemies health bar'], correctAnswer: 0, explanation: 'LOS checks if walls or obstacles block a straight line between the AI and its target.', difficulty: 1 },
          { id: 'cv47-q4', type: 'true-false', question: 'Waypoint navigation moves the enemy through a predefined path.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Waypoints define a path. The enemy moves toward the current waypoint and advances to the next upon arrival.', difficulty: 1 },
          { id: 'cv47-q5', type: 'mcq', question: 'What is a hysteresis buffer in AI state transitions?', options: ['A larger threshold for leaving a state than entering it', 'A buffer that stores past states', 'A delay before state changes', 'A random state selection'], correctAnswer: 0, explanation: 'Hysteresis uses different thresholds for entering vs leaving a state (e.g., enter at 200px, leave at 300px) to prevent oscillation.', difficulty: 2 },
          { id: 'cv47-q6', type: 'true-false', question: 'Attack cooldown prevents the enemy from dealing damage every frame.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A cooldown timer limits how often the enemy can attack, typically 0.5-2 seconds.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv47-e1', type: 'medium', title: 'Patrol and Chase Enemy', instructions: 'Create an enemy that patrols left-right. When the mouse cursor enters its detection range (shown as a circle), it chases the cursor. When the cursor leaves, it returns to patrol.', hint: 'Track cursor position. Check distance to enemy. Switch between patrol/chase states.', starterCode: '<canvas id=\"ai\" width=\"500\" height=\"400\"></canvas>\n<script>// Your patrol/chase enemy</script>', solution: '<canvas id=\"ai\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"ai\"),ctx=c.getContext(\"2d\");\n  const enemy={x:250,y:200,startX:250,speed:80,range:150,state:\"patrol\",dir:1};\n  let mx=0,my=0;\n  c.addEventListener(\"mousemove\",e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});\n  function loop(ts){const dt=last?Math.min((ts-last)/1000,0.05):0.016;last=ts;\n    const dist=Math.hypot(enemy.x-mx,enemy.y-my);\n    if(enemy.state===\"patrol\"){enemy.x+=enemy.speed*enemy.dir*dt;if(Math.abs(enemy.x-enemy.startX)>enemy.range)enemy.dir*=-1;if(dist<120)enemy.state=\"chase\";}\n    else if(enemy.state===\"chase\"){const d=Math.hypot(mx-enemy.x,my-enemy.y);if(d>5){enemy.x+=(mx-enemy.x)/d*enemy.speed*1.5*dt;enemy.y+=(my-enemy.y)/d*enemy.speed*1.5*dt;}if(dist>200)enemy.state=\"patrol\";}\n    ctx.fillStyle=\"#f0f0f0\";ctx.fillRect(0,0,500,400);\n    ctx.fillStyle=\"rgba(255,0,0,0.1)\";ctx.beginPath();ctx.arc(enemy.x,enemy.y,120,0,7);ctx.fill();\n    ctx.fillStyle=enemy.state===\"chase\"?\"#E91E63\":\"#2196F3\";ctx.beginPath();ctx.arc(enemy.x,enemy.y,20,0,7);ctx.fill();\n    ctx.fillStyle=\"#333\";ctx.font=\"14px Arial\";ctx.textAlign=\"center\";ctx.fillText(enemy.state.toUpperCase(),enemy.x,enemy.y-30);\n    requestAnimationFrame(loop);}let last=0;requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'FSM AI', value: 'States: patrol, chase, attack, flee' },
        { label: 'Detection range', value: 'Distance threshold for player detection' },
        { label: 'Hysteresis', value: 'Different thresholds for state enter vs exit' },
        { label: 'Line of sight', value: 'Raycast between AI and target, check walls' },
        { label: 'Waypoints', value: 'Predefined positions for patrol paths' },
        { label: 'Attack cooldown', value: 'Timer between AI attacks' }
      ]
    },,

    {
      id: 'canvas-48',
      number: 48,
      partLabel: 'Part 5: Game Development',
      title: 'Scoring and Progression',
      subtitle: 'Score, lives, levels, difficulty scaling',
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      xpReward: 55,
      prerequisites: ['canvas-47'],
      learningObjectives: [
        'Implement scoring and high score persistence',
        'Design lives and game-over systems',
        'Create level progression with increasing difficulty',
        'Use localStorage for saving progress'
      ],
      sections: [
        {
          id: 's1',
          title: 'Game Progression Systems',
          whyItMatters: 'Progression keeps players engaged. Well-designed scoring and level systems provide motivation and a sense of accomplishment.',
          content: "## Score and Progression Manager\n\n```javascript\nclass Progression {\n  constructor() {\n    this.score = 0;\n    this.highScore = parseInt(localStorage.getItem('highScore') || '0');\n    this.lives = 3;\n    this.level = 1;\n    this.combo = 0;\n    this.maxCombo = 0;\n  }\n\n  addScore(points) {\n    this.score += points * this.comboMultiplier();\n    if (this.score > this.highScore) {\n      this.highScore = this.score;\n      localStorage.setItem('highScore', this.highScore.toString());\n    }\n  }\n\n  comboMultiplier() {\n    if (this.combo >= 20) return 4;\n    if (this.combo >= 10) return 3;\n    if (this.combo >= 5) return 2;\n    return 1;\n  }\n\n  addCombo() {\n    this.combo++;\n    this.maxCombo = Math.max(this.maxCombo, this.combo);\n  }\n\n  resetCombo() {\n    this.combo = 0;\n  }\n\n  loseLife() {\n    this.lives--;\n    this.resetCombo();\n    if (this.lives <= 0) {\n      return 'game_over';\n    }\n    return 'continue';\n  }\n\n  nextLevel() {\n    this.level++;\n    this.saveProgress();\n  }\n\n  saveProgress() {\n    const data = {\n      level: this.level,\n      highScore: this.highScore\n    };\n    localStorage.setItem('gameProgress', JSON.stringify(data));\n  }\n\n  loadProgress() {\n    try {\n      const data = JSON.parse(localStorage.getItem('gameProgress'));\n      if (data) {\n        this.level = data.level;\n        this.highScore = data.highScore;\n      }\n    } catch {}\n  }\n}\n```\n\n### Difficulty Scaling\n\n```javascript\nfunction getDifficulty(level) {\n  return {\n    enemySpeed: 80 + level * 20,\n    enemyHealth: 1 + Math.floor(level / 3),\n    spawnRate: Math.max(0.5, 2 - level * 0.15),\n    enemyCount: 3 + Math.floor(level / 2),\n    pointsMultiplier: 1 + (level - 1) * 0.25\n  };\n}\n\n// Apply difficulty per level\nconst difficulty = getDifficulty(progression.level);\nspawner.rate = difficulty.spawnRate;\nspawner.maxEnemies = difficulty.enemyCount;\n```\n\n### HUD Drawing\n\n```javascript\nfunction drawHUD(ctx, prog) {\n  ctx.fillStyle = '#fff';\n  ctx.font = '18px monospace';\n  ctx.textAlign = 'left';\n  \n  ctx.fillText(`SCORE: ${prog.score}`, 10, 30);\n  ctx.fillText(`LEVEL: ${prog.level}`, 10, 55);\n  \n  // Draw lives as hearts\n  for (let i = 0; i < 3; i++) {\n    ctx.fillStyle = i < prog.lives ? '#E91E63' : '#555';\n    ctx.fillText('♥', 10 + i * 30, 85);\n  }\n  \n  // High score\n  ctx.textAlign = 'right';\n  ctx.fillStyle = '#FFC107';\n  ctx.fillText(`HI: ${prog.highScore}`, canvas.width - 10, 30);\n  \n  // Combo\n  if (prog.combo > 1) {\n    ctx.textAlign = 'center';\n    ctx.fillStyle = '#FFC107';\n    ctx.font = '24px bold Arial';\n    ctx.fillText(`${prog.combo}x COMBO!`, canvas.width / 2, 50);\n  }\n}\n```\n\n### Game Over Screen\n\n```javascript\nfunction drawGameOver(ctx, score, highScore) {\n  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  \n  ctx.textAlign = 'center';\n  ctx.fillStyle = '#E91E63';\n  ctx.font = 'bold 48px Arial';\n  ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 60);\n  \n  ctx.fillStyle = '#fff';\n  ctx.font = '24px Arial';\n  ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2);\n  \n  ctx.fillStyle = '#FFC107';\n  ctx.fillText(`High Score: ${highScore}`, canvas.width / 2, canvas.height / 2 + 40);\n  \n  ctx.fillStyle = '#999';\n  ctx.font = '18px Arial';\n  ctx.fillText('Press ENTER to restart', canvas.width / 2, canvas.height / 2 + 100);\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv48-q1', type: 'mcq', question: 'How can you persist high scores between browser sessions?', options: ['localStorage', 'sessionStorage', 'Cookies', 'Server API'], correctAnswer: 0, explanation: 'localStorage persists data indefinitely on the users device and is ideal for saving high scores.', difficulty: 1 },
          { id: 'cv48-q2', type: 'true-false', question: 'A combo multiplier should increase linearly with combo count.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Combo multipliers typically use tiered thresholds (e.g., 2x at 5, 3x at 10) rather than linear scaling.', difficulty: 1 },
          { id: 'cv48-q3', type: 'mcq', question: 'What should happen when the player runs out of lives?', options: ['Trigger game over state', 'Reset to level 1', 'Subtract score', 'Revive automatically'], correctAnswer: 0, explanation: 'When lives reach 0, the game transitions to the game over state.', difficulty: 1 },
          { id: 'cv48-q4', type: 'true-false', question: 'Difficulty should scale identically for all players regardless of skill.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Good games use adaptive difficulty, adjusting based on player performance.', difficulty: 2 },
          { id: 'cv48-q5', type: 'mcq', question: 'What information should a game over screen display?', options: ['Score and high score', 'Only a restart button', 'The current level', 'Player name'], correctAnswer: 0, explanation: 'The game over screen typically shows the final score, high score, and instructions to restart.', difficulty: 1 },
          { id: 'cv48-q6', type: 'true-false', question: 'JSON.parse(localStorage.getItem(...)) should be wrapped in try/catch.', options: ['True', 'False'], correctAnswer: 0, explanation: 'localStorage data may be corrupted or missing. try/catch handles these cases gracefully.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv48-e1', type: 'easy', title: 'Clicker Game with Score', instructions: 'Create a simple game where clicking a moving target adds points. Show score, combo counter, and a timer.', hint: 'Draw a moving circle. Track score and combo. Reduce combo on miss (click outside).', starterCode: '<canvas id=\"clicker\" width=\"500\" height=\"400\"></canvas>\n<script>// Your clicker game</script>', solution: '<canvas id=\"clicker\" width=\"500\" height=\"400\"></canvas>\n<script>\n  const c=document.getElementById(\"clicker\"),ctx=c.getContext(\"2d\");\n  let score=0,combo=0,high=parseInt(localStorage.getItem(\"high\")||\"0\");\n  const target={x:250,y:200,r:25,vx:150,vy:130};\n  c.addEventListener(\"click\",e=>{const r=c.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;if(Math.hypot(mx-target.x,my-target.y)<target.r){combo++;score+=10*Math.min(combo,5);if(score>high){high=score;localStorage.setItem(\"high\",high.toString());}}else combo=0;});\n  function loop(ts){const dt=last?Math.min((ts-last)/1000,0.05):0.016;last=ts;\n    target.x+=target.vx*dt;target.y+=target.vy*dt;\n    if(target.x-target.r<0||target.x+target.r>500)target.vx*=-1;\n    if(target.y-target.r<0||target.y+target.r>400)target.vy*=-1;\n    ctx.fillStyle=\"#0a0a2e\";ctx.fillRect(0,0,500,400);\n    ctx.fillStyle=combo>=5?\"#FFC107\":\"#E91E63\";ctx.beginPath();ctx.arc(target.x,target.y,target.r,0,7);ctx.fill();\n    ctx.fillStyle=\"#fff\";ctx.font=\"20px Arial\";ctx.fillText(`Score: ${score}`,10,30);\n    ctx.fillText(`Combo: ${combo}`,10,55);\n    ctx.textAlign=\"right\";ctx.fillStyle=\"#FFC107\";ctx.fillText(`Best: ${high}`,490,30);\n    if(combo>=5){ctx.textAlign=\"center\";ctx.fillStyle=\"#FFC107\";ctx.font=\"bold 24px Arial\";ctx.fillText(\"HOT STREAK!\",250,80);}\n    requestAnimationFrame(loop);}let last=0;requestAnimationFrame(loop);\n</script>' }
      ],
      cheatSheet: [
        { label: 'localStorage', value: 'Persistent storage: setItem/getItem/removeItem' },
        { label: 'JSON save', value: 'JSON.stringify() to save, JSON.parse() to load' },
        { label: 'Combo system', value: 'Track consecutive hits, tiered multipliers' },
        { label: 'Difficulty curve', value: 'function getDifficulty(level) returning stats' },
        { label: 'HUD layout', value: 'Score top-left, high score top-right, lives top' },
        { label: 'Game over', value: 'Show final score, high score, restart prompt' }
      ]
    },,

    {
      id: 'canvas-49',
      number: 49,
      partLabel: 'Part 5: Game Development',
      title: 'Power-ups and Collectibles',
      subtitle: 'Item spawning, effects, timed buffs',
      difficulty: 'Advanced',
      estimatedMinutes: 30,
      xpReward: 60,
      prerequisites: ['canvas-48'],
      learningObjectives: [
        'Design a power-up system with timed effects',
        'Implement collectible spawning and pickup',
        'Create visual indicators for active buffs',
        'Balance power-up duration and rarity'
      ],
      sections: [
        {
          id: 's1',
          title: 'Power-up System',
          whyItMatters: 'Power-ups add excitement and strategic depth to games. A flexible system lets you add diverse effects without duplicating code.',
          content: "## Power-Up Architecture\n\n```javascript\nconst POWERUP_TYPES = {\n  SPEED: {\n    color: '#FFC107',\n    symbol: '⚡',\n    duration: 5,\n    effect: (player) => { player.speed *= 1.5; },\n    revert: (player) => { player.speed /= 1.5; }\n  },\n  SHIELD: {\n    color: '#2196F3',\n    symbol: '🛡',\n    duration: 8,\n    effect: (player) => { player.invincible = true; },\n    revert: (player) => { player.invincible = false; }\n  },\n  MULTISHOT: {\n    color: '#E91E63',\n    symbol: '★★',\n    duration: 4,\n    effect: (player) => { player.bulletCount = 3; },\n    revert: (player) => { player.bulletCount = 1; }\n  },\n  HEALTH: {\n    color: '#4CAF50',\n    symbol: '+',\n    duration: 0, // Instant\n    effect: (player) => { player.heal(25); },\n    revert: null\n  }\n};\n\nclass ActiveBuff {\n  constructor(type, duration) {\n    this.type = type;\n    this.remaining = duration;\n  }\n\n  update(dt) {\n    this.remaining -= dt;\n    return this.remaining > 0;\n  }\n}\n\nclass PowerUpManager {\n  constructor() {\n    this.activeBuffs = [];\n  }\n\n  apply(player, type) {\n    const config = POWERUP_TYPES[type];\n    \n    // Check if already active - refresh duration\n    const existing = this.activeBuffs.find(b => b.type === type);\n    if (existing) {\n      existing.remaining = config.duration;\n      return;\n    }\n    \n    config.effect(player);\n    if (config.duration > 0) {\n      this.activeBuffs.push(new ActiveBuff(type, config.duration));\n    }\n  }\n\n  update(dt, player) {\n    this.activeBuffs = this.activeBuffs.filter(buff => {\n      const alive = buff.update(dt);\n      if (!alive) {\n        POWERUP_TYPES[buff.type].revert?.(player);\n      }\n      return alive;\n    });\n  }\n\n  draw(ctx, x, y) {\n    this.activeBuffs.forEach((buff, i) => {\n      const config = POWERUP_TYPES[buff.type];\n      ctx.fillStyle = config.color;\n      ctx.fillRect(x + i * 35, y, 30, 5);\n      \n      // Duration bar\n      const ratio = buff.remaining / config.duration;\n      ctx.fillStyle = '#fff';\n      ctx.fillRect(x + i * 35, y, 30 * ratio, 5);\n      \n      ctx.font = '16px Arial';\n      ctx.fillStyle = config.color;\n      ctx.fillText(config.symbol, x + i * 35 + 7, y + 20);\n    });\n  }\n}\n\n// Collectible spawning\nclass Collectible {\n  constructor(x, y, type) {\n    this.x = x; this.y = y;\n    this.type = type;\n    this.r = 12;\n    this.bobTimer = Math.random() * Math.PI * 2;\n  }\n\n  update(dt) {\n    this.bobTimer += dt * 3;\n    this.bobY = Math.sin(this.bobTimer) * 3;\n  }\n\n  draw(ctx) {\n    const config = POWERUP_TYPES[this.type];\n    ctx.fillStyle = config.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y + this.bobY, this.r, 0, Math.PI * 2);\n    ctx.fill();\n    \n    ctx.fillStyle = '#fff';\n    ctx.font = '14px Arial';\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n    ctx.fillText(config.symbol, this.x, this.y + this.bobY);\n  }\n\n  hitTest(px, py) {\n    return Math.hypot(px - this.x, py - (this.y + this.bobY)) < this.r;\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv49-q1', type: 'mcq', question: 'How should power-up stacking work?', options: ['Refresh duration, do not stack effects', 'Stack effects multiplicatively', 'Only one power-up at a time', 'Stack effects additively'], correctAnswer: 0, explanation: 'Picking up the same power-up while active should refresh its timer, not stack the effect.', difficulty: 2 },
          { id: 'cv49-q2', type: 'true-false', question: 'Instant power-ups (like health) have a duration of 0 and no revert function.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Instant effects apply immediately and are not reverted. Their duration is 0.', difficulty: 1 },
          { id: 'cv49-q3', type: 'mcq', question: 'What visual feedback shows an active power-up is about to expire?', options: ['Duration bar decreasing', 'Flashing effect', 'Sound plays', 'Symbol changes color'], correctAnswer: 0, explanation: 'A duration bar or timer visually shows how much time remains for the active buff.', difficulty: 1 },
          { id: 'cv49-q4', type: 'true-false', question: 'Collectibles should bob up and down for visual appeal.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A gentle bobbing animation (using sin) makes collectibles more visible and attractive.', difficulty: 1 },
          { id: 'cv49-q5', type: 'mcq', question: 'Why use a config object for power-up types?', options: ['Easily add new power-up types without changing logic', 'Faster rendering', 'Less memory usage', 'Automatic balancing'], correctAnswer: 0, explanation: 'A config-based system lets you define new power-ups by adding a config entry, keeping the management code generic.', difficulty: 1 },
          { id: 'cv49-q6', type: 'true-false', question: 'The revert function should restore the player to their pre-powerup state.', options: ['True', 'False'], correctAnswer: 0, explanation: 'When a timed buff expires, revert() undoes the effect to return the player to normal.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv49-e1', type: 'medium', title: 'Collectible Power-up Demo', instructions: 'Create a player square that moves with WASD. Spawn 3 types of collectibles (speed, shield, health) randomly. Show active buffs with timer bars.', hint: 'Use the config pattern. On collision, apply effect. Track active buffs with remaining time.', starterCode: '<canvas id=\"powerups\" width=\"500\" height=\"400\"></canvas>\n<script>// Your power-up demo</script>' }
      ],
      cheatSheet: [
        { label: 'Config pattern', value: 'Define power-up properties and effects in a config object' },
        { label: 'Timed buffs', value: 'Duration > 0, has revert function' },
        { label: 'Stacking', value: 'Refresh timer, do not stack identical buffs' },
        { label: 'Visual feedback', value: 'Duration bars, symbols, glow effects' },
        { label: 'Collectible spawn', value: 'Random positions, bobbing animation' },
        { label: 'Rarity system', value: 'Common (health) vs rare (multishot) spawn weights' }
      ]
    },,

    {
      id: 'canvas-50',
      number: 50,
      partLabel: 'Part 5: Game Development',
      title: 'Complete Game Architecture',
      subtitle: 'Putting it all together, game structure',
      difficulty: 'Advanced',
      estimatedMinutes: 45,
      xpReward: 75,
      prerequisites: ['canvas-49'],
      learningObjectives: [
        'Design a complete game project structure',
        'Integrate all systems: rendering, physics, AI, audio, UI',
        'Implement a scene/level manager',
        'Understand game build and deployment'
      ],
      sections: [
        {
          id: 's1',
          title: 'Full Game Architecture',
          whyItMatters: 'Building a complete game requires integrating all the pieces. A clean architecture makes development, debugging, and maintenance manageable.',
          content: "## Game Project Structure\n\n```javascript\n// Core systems\nclass Game {\n  constructor() {\n    this.canvas = document.getElementById('game');\n    this.ctx = this.canvas.getContext('2d');\n    \n    // Initialize all systems\n    this.input = new InputManager();\n    this.physics = new PhysicsWorld();\n    this.renderer = new Renderer(this.ctx);\n    this.audio = new AudioManager();\n    this.particles = new ParticleSystem();\n    this.ui = new UIManager();\n    this.powerups = new PowerUpManager();\n    this.progression = new Progression();\n    \n    // Scene management\n    this.scenes = {\n      menu: new MenuScene(this),\n      game: new GameScene(this),\n      pause: new PauseScene(this),\n      gameOver: new GameOverScene(this)\n    };\n    this.currentScene = 'menu';\n    \n    // Game loop\n    this.lastTime = 0;\n    this.running = false;\n  }\n\n  start() {\n    this.running = true;\n    requestAnimationFrame((t) => this.loop(t));\n  }\n\n  loop(timestamp) {\n    if (!this.running) return;\n    const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);\n    this.lastTime = timestamp;\n    \n    this.update(dt);\n    this.render();\n    \n    requestAnimationFrame((t) => this.loop(t));\n  }\n\n  update(dt) {\n    this.scenes[this.currentScene].update(dt);\n  }\n\n  render() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.scenes[this.currentScene].render(this.ctx);\n    this.ui.render(this.ctx);\n  }\n\n  switchScene(name) {\n    this.scenes[this.currentScene].exit?.();\n    this.currentScene = name;\n    this.scenes[name].enter?.();\n  }\n}\n\n// Example scene\nclass GameScene {\n  constructor(game) {\n    this.game = game;\n    this.player = new Player(400, 300);\n    this.enemies = [];\n    this.collectibles = [];\n    this.bullets = [];\n  }\n\n  enter() {\n    // Reset for new game\n  }\n\n  update(dt) {\n    this.player.update(dt, this.game.input);\n    this.bullets.forEach(b => b.update(dt));\n    this.enemies.forEach(e => e.update(dt, this.player));\n    this.collectibles.forEach(c => c.update(dt));\n    this.game.particles.update(dt);\n    this.game.physics.update(dt);\n    this.checkCollisions();\n  }\n\n  render(ctx) {\n    this.game.renderer.drawBackground(ctx);\n    this.collectibles.forEach(c => c.draw(ctx));\n    this.enemies.forEach(e => e.draw(ctx));\n    this.bullets.forEach(b => b.draw(ctx));\n    this.player.draw(ctx);\n    this.game.particles.draw(ctx);\n  }\n\n  checkCollisions() {\n    // Bullets vs enemies\n    // Player vs enemies\n    // Player vs collectibles\n  }\n}\n```\n\n### Build and Deployment\n\n```javascript\n// index.html structure\n/*\n<!DOCTYPE html>\n<html>\n<head><style>\n  * { margin: 0; padding: 0; }\n  canvas { display: block; }\n</style></head>\n<body>\n  <canvas id=\"game\" width=\"800\" height=\"600\"></canvas>\n  <script src=\"game.js\"></script>\n</body>\n</html>\n*/\n\n// Or bundle with a build tool\n// import { Game } from './game/Game.js';\n// const game = new Game();\n// game.start();\n```\n\n### Performance Profiling\n\n```javascript\nclass Profiler {\n  constructor() {\n    this.timings = {};\n    this.frameCount = 0;\n    this.fps = 0;\n    this.fpsTimer = 0;\n  }\n\n  begin(label) {\n    this.timings[label] = performance.now();\n  }\n\n  end(label) {\n    const elapsed = performance.now() - this.timings[label];\n    this.timings[label] = elapsed;\n  }\n\n  update(dt) {\n    this.frameCount++;\n    this.fpsTimer += dt;\n    if (this.fpsTimer >= 1) {\n      this.fps = this.frameCount;\n      this.frameCount = 0;\n      this.fpsTimer = 0;\n    }\n  }\n\n  draw(ctx, x, y) {\n    ctx.fillStyle = '#0f0';\n    ctx.font = '14px monospace';\n    ctx.fillText(`FPS: ${this.fps}`, x, y);\n    let i = 1;\n    for (const [label, time] of Object.entries(this.timings)) {\n      if (typeof time === 'number' && time < 100) {\n        ctx.fillText(`${label}: ${time.toFixed(2)}ms`, x, y + i * 20);\n        i++;\n      }\n    }\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv50-q1', type: 'mcq', question: 'What pattern organizes a game into separate components (menu, game, pause)?', options: ['Scene/State pattern', 'Observer pattern', 'Singleton pattern', 'Factory pattern'], correctAnswer: 0, explanation: 'The scene pattern encapsulates each game state (menu, gameplay, pause) into its own object.', difficulty: 1 },
          { id: 'cv50-q2', type: 'true-false', question: 'All game systems should be tightly coupled for performance.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Systems should be loosely coupled with a central Game class coordinating them.', difficulty: 1 },
          { id: 'cv50-q3', type: 'mcq', question: 'What is the profile of a 60 FPS frame budget?', options: ['~16.6ms', '~33.3ms', '~10ms', '~50ms'], correctAnswer: 0, explanation: 'At 60 FPS, each frame has approximately 16.6ms for all update and render work.', difficulty: 1 },
          { id: 'cv50-q4', type: 'true-false', question: 'The Game class should own and coordinate all subsystems.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The Game class creates and coordinates all systems (input, physics, renderer, etc.).', difficulty: 1 },
          { id: 'cv50-q5', type: 'mcq', question: 'How should you handle entity cleanup (removing dead enemies)?', options: ['Filter dead entities at the end of each frame', 'Delete immediately when killed', 'Clean up in a separate garbage collection step', 'Never remove entities'], correctAnswer: 0, explanation: 'Mark entities as dead during update, then filter them out after iteration to avoid mid-loop mutation.', difficulty: 2 },
          { id: 'cv50-q6', type: 'true-false', question: 'A modular game architecture makes it easier to add new features.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Clean separation of concerns makes the codebase maintainable and extensible.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv50-e1', type: 'hard', title: 'Mini Game Framework', instructions: 'Build a minimal but complete game framework with: scene management, input system, game loop with fixed timestep, and a simple demo scene (bouncing shapes with collision).', hint: 'Create Game, Scene, InputManager classes. The demo scene should show a ball bouncing off walls with paddle control.', starterCode: '<canvas id=\"framework\" width=\"600\" height=\"400\"></canvas>\n<script>// Your mini game framework</script>' }
      ],
      cheatSheet: [
        { label: 'Game class', value: 'Owns canvas, ctx, all subsystems, game loop' },
        { label: 'Scene pattern', value: 'Each game state is a separate object with enter/update/render/exit' },
        { label: 'Frame budget', value: '~16.6ms per frame at 60 FPS' },
        { label: 'Profiling', value: 'Measure update vs render time per system' },
        { label: 'Entity cleanup', value: 'Filter dead entities, dont mutate during iteration' },
        { label: 'Loose coupling', value: 'Systems communicate through the Game coordinator, not directly' }
      ]
    },,

    {
      id: 'canvas-51',
      number: 51,
      partLabel: 'Part 6: Projects',
      title: 'Project 1: Drawing App',
      subtitle: 'Build a full-featured drawing application',
      difficulty: 'Advanced',
      estimatedMinutes: 60,
      xpReward: 100,
      prerequisites: ['canvas-40', 'canvas-36', 'canvas-33'],
      learningObjectives: [
        'Build a complete drawing application from scratch',
        'Implement multiple brush types and color selection',
        'Add undo/redo functionality with canvas state',
        'Export drawings as PNG images'
      ],
      sections: [
        {
          id: 's1',
          title: 'Drawing Application',
          whyItMatters: 'A drawing app ties together canvas fundamentals, event handling, UI, and state management into a practical, portfolio-worthy project.',
          content: "## Project Overview\n\nBuild a complete drawing application with:\n- Multiple brush sizes and colors\n- Shape tools (line, rectangle, circle)\n- Undo/redo system\n- Color picker\n- Canvas export to PNG\n\n### Core Architecture\n\n```javascript\nclass DrawingApp {\n  constructor(canvasId) {\n    this.canvas = document.getElementById(canvasId);\n    this.ctx = this.canvas.getContext('2d');\n    this.tool = 'brush';\n    this.color = '#E91E63';\n    this.brushSize = 4;\n    this.history = [];\n    this.historyIndex = -1;\n    this.drawing = false;\n    \n    this.setupCanvas();\n    this.setupEvents();\n    this.setupUI();\n    this.saveState();\n  }\n\n  saveState() {\n    // Remove any redo states\n    this.history = this.history.slice(0, this.historyIndex + 1);\n    this.history.push(this.canvas.toDataURL());\n    this.historyIndex++;\n  }\n\n  undo() {\n    if (this.historyIndex > 0) {\n      this.historyIndex--;\n      this.restoreState(this.history[this.historyIndex]);\n    }\n  }\n\n  redo() {\n    if (this.historyIndex < this.history.length - 1) {\n      this.historyIndex++;\n      this.restoreState(this.history[this.historyIndex]);\n    }\n  }\n\n  restoreState(dataUrl) {\n    const img = new Image();\n    img.onload = () => {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.ctx.drawImage(img, 0, 0);\n    };\n    img.src = dataUrl;\n  }\n\n  exportPNG() {\n    const link = document.createElement('a');\n    link.download = 'drawing.png';\n    link.href = this.canvas.toDataURL('image/png');\n    link.click();\n  }\n}\n```\n\n### Brush and Shape Tools\n\n```javascript\nconst tools = {\n  brush: {\n    onMove(x, y) {\n      ctx.lineTo(x, y);\n      ctx.stroke();\n    },\n    onStart(x, y) {\n      ctx.beginPath();\n      ctx.moveTo(x, y);\n    }\n  },\n  line: {\n    startPos: null,\n    onStart(x, y) {\n      this.startPos = { x, y };\n      currentTool = this;\n    },\n    onMove(x, y) {\n      // Preview while dragging\n      restoreCanvas();\n      ctx.beginPath();\n      ctx.moveTo(this.startPos.x, this.startPos.y);\n      ctx.lineTo(x, y);\n      ctx.stroke();\n    }\n  },\n  rectangle: {\n    // Similar preview + commit pattern\n  },\n  circle: {\n    // Center + radius from drag start\n  }\n};\n```\n\n### Setup Events\n\n```javascript\nsetupEvents() {\n  this.canvas.addEventListener('mousedown', (e) => {\n    this.drawing = true;\n    const pos = this.getPos(e);\n    this.ctx.strokeStyle = this.color;\n    this.ctx.lineWidth = this.brushSize;\n    this.ctx.lineCap = 'round';\n    this.ctx.lineJoin = 'round';\n    tools[this.tool].onStart(pos.x, pos.y);\n  });\n\n  this.canvas.addEventListener('mousemove', (e) => {\n    if (!this.drawing) return;\n    const pos = this.getPos(e);\n    tools[this.tool].onMove(pos.x, pos.y);\n  });\n\n  this.canvas.addEventListener('mouseup', () => {\n    if (!this.drawing) return;\n    this.drawing = false;\n    tools[this.tool].onEnd?.();\n    this.saveState();\n  });\n}\n```\n\n### Color Picker\n\n```javascript\nfunction createColorPicker(colors) {\n  const container = document.getElementById('color-picker');\n  colors.forEach(color => {\n    const swatch = document.createElement('div');\n    swatch.style.cssText = `\n      width: 28px; height: 28px;\n      background: ${color};\n      border-radius: 50%;\n      cursor: pointer;\n      display: inline-block;\n      margin: 2px;\n    `;\n    swatch.addEventListener('click', () => {\n      app.color = color;\n      document.querySelectorAll('.swatch').forEach(s =>\n        s.style.outline = s === swatch ? '3px solid #fff' : 'none'\n      );\n    });\n    container.appendChild(swatch);\n  });\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv51-q1', type: 'mcq', question: 'How does undo/redo work with canvas state?', options: ['Save canvas.toDataURL() snapshots in a history array', 'Store drawing commands in a list', 'Use browser history API', 'Save to localStorage every action'], correctAnswer: 0, explanation: 'Each state is saved as a data URL (PNG snapshot). Undo restores the previous snapshot.', difficulty: 2 },
          { id: 'cv51-q2', type: 'true-false', question: 'When saving a new state, all redo states after the current index should be removed.', options: ['True', 'False'], correctAnswer: 0, explanation: 'New actions invalidate redo history. Slice the array at current index before pushing.', difficulty: 1 },
          { id: 'cv51-q3', type: 'mcq', question: 'What method exports canvas content as a downloadable image?', options: ['canvas.toDataURL() + download link', 'canvas.exportImage()', 'canvas.saveAs()', 'FileSaver API'], correctAnswer: 0, explanation: 'toDataURL() returns a data URI. Create an anchor element with download attribute to trigger download.', difficulty: 1 },
          { id: 'cv51-q4', type: 'true-false', question: 'Shape tools should show a preview while dragging.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Preview the shape outline during drag by restoring the canvas to the pre-drag state and drawing the shape.', difficulty: 2 },
          { id: 'cv51-q5', type: 'true-false', question: 'Undo is unnecessary for a drawing application.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Undo is an essential feature that users expect in creative tools.', difficulty: 1 },
          { id: 'cv51-q6', type: 'true-false', question: 'The brush tool should use round lineCap and lineJoin for smooth strokes.', options: ['True', 'False'], correctAnswer: 0, explanation: 'round lineCap and lineJoin create smooth, natural-looking brush strokes without sharp corners.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv51-e1', type: 'hard', title: 'Drawing App Milestone', instructions: 'Build a drawing app with brush tool, color picker (at least 6 colors), brush size slider, and clear canvas button.', hint: 'Follow the DrawingApp class structure. Start with brush only, then add features incrementally.', starterCode: '<canvas id=\"draw\" width=\"600\" height=\"400\"></canvas>\n<div id=\"toolbar\"></div>\n<script>// Your drawing app</script>' }
      ],
      cheatSheet: [
        { label: 'Canvas snapshot', value: 'canvas.toDataURL() saves current state' },
        { label: 'Undo/redo', value: 'History array of data URLs, track index' },
        { label: 'Export PNG', value: 'Create download link from toDataURL()' },
        { label: 'Shape preview', value: 'Restore canvas, draw shape outline during drag' },
        { label: 'Tool pattern', value: 'Each tool has onStart/onMove/onEnd methods' },
        { label: 'Color picker', value: 'Clickable swatches update the drawing color' }
      ]
    },,

    {
      id: 'canvas-52',
      number: 52,
      partLabel: 'Part 6: Projects',
      title: 'Project 2: Platformer Game',
      subtitle: 'Build a 2D platformer with levels',
      difficulty: 'Advanced',
      estimatedMinutes: 75,
      xpReward: 120,
      prerequisites: ['canvas-50', 'canvas-44', 'canvas-42', 'canvas-47'],
      learningObjectives: [
        'Build a complete 2D platformer game',
        'Implement tile-based levels with collision',
        'Add enemies, collectibles, and scoring',
        'Create multiple levels with progression'
      ],
      sections: [
        {
          id: 's1',
          title: 'Platformer Game Project',
          whyItMatters: 'A platformer is the quintessential canvas game project. It combines physics, rendering, level design, AI, and game feel into one cohesive project.',
          content: "## Platformer Structure\n\n```javascript\nclass PlatformerGame {\n  constructor() {\n    this.canvas = document.getElementById('game');\n    this.ctx = this.canvas.getContext('2d');\n    this.resizeCanvas();\n    \n    this.player = new Player(50, 300);\n    this.camera = { x: 0, y: 0 };\n    this.level = new Level(1);\n    this.enemies = [];\n    this.collectibles = [];\n    this.particles = new ParticleSystem(200);\n    this.progression = new Progression();\n    this.input = new InputManager();\n    \n    this.loadLevel(1);\n    this.setupLoop();\n  }\n\n  loadLevel(num) {\n    const data = LEVELS[num];\n    this.level.load(data);\n    this.enemies = data.enemies.map(e => new Enemy(e.x, e.y));\n    this.collectibles = data.collectibles.map(c => new Collectible(c.x, c.y, c.type));\n    this.player.reset(data.playerStart);\n  }\n\n  update(dt) {\n    this.player.update(dt, this.input, this.level);\n    this.enemies.forEach(e => e.update(dt, this.player, this.level));\n    this.collectibles.forEach(c => c.update(dt));\n    this.particles.update(dt);\n    \n    // Collisions\n    this.checkEnemyCollisions();\n    this.checkCollectibleCollisions();\n    \n    // Camera follow\n    this.camera.x = this.player.x - this.canvas.width / 3;\n    this.camera.y = this.player.y - this.canvas.height / 2;\n    this.camera.x = Math.max(0, this.camera.x);\n    this.camera.y = Math.max(0, this.camera.y);\n    \n    // Check level complete\n    if (this.player.x > this.level.exitX) {\n      this.nextLevel();\n    }\n  }\n\n  render() {\n    this.ctx.fillStyle = '#87CEEB';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    \n    this.ctx.save();\n    this.ctx.translate(-this.camera.x, -this.camera.y);\n    \n    this.level.render(this.ctx);\n    this.collectibles.forEach(c => c.draw(this.ctx));\n    this.enemies.forEach(e => e.draw(this.ctx));\n    this.player.draw(this.ctx);\n    this.particles.draw(this.ctx);\n    \n    this.ctx.restore();\n    \n    // HUD (screen space)\n    this.drawHUD();\n  }\n\n  nextLevel() {\n    if (this.progression.level < MAX_LEVELS) {\n      this.progression.nextLevel();\n      this.loadLevel(this.progression.level);\n    } else {\n      this.showVictoryScreen();\n    }\n  }\n\n  drawHUD() {\n    // Score, lives, coins\n    this.ctx.fillStyle = '#fff';\n    this.ctx.font = '20px Arial';\n    this.ctx.fillText(`Score: ${this.progression.score}`, 10, 30);\n    this.ctx.fillText(`Level: ${this.progression.level}`, 10, 55);\n    \n    // Lives as hearts\n    for (let i = 0; i < this.progression.lives; i++) {\n      this.ctx.fillStyle = '#E91E63';\n      this.ctx.fillText('♥', 10 + i * 30, 85);\n    }\n  }\n}\n\n// Level data format\nconst LEVELS = {\n  1: {\n    tiles: [\n      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],\n      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\n    ],\n    playerStart: { x: 50, y: 100 },\n    enemies: [{ x: 300, y: 150 }],\n    collectibles: [\n      { x: 200, y: 200, type: 'COIN' },\n      { x: 400, y: 200, type: 'COIN' }\n    ],\n    exitX: 600\n  }\n};\n```\n\n### Player Physics\n\n```javascript\nclass Player {\n  constructor(x, y) {\n    this.x = x; this.y = y;\n    this.w = 24; this.h = 32;\n    this.vx = 0; this.vy = 0;\n    this.speed = 200;\n    this.jumpForce = -400;\n    this.grounded = false;\n    this.onWall = false;\n  }\n\n  update(dt, input, level) {\n    // Horizontal movement\n    if (input.left) { this.vx = -this.speed; this.facing = -1; }\n    else if (input.right) { this.vx = this.speed; this.facing = 1; }\n    else { this.vx *= 0.8; }\n    \n    // Jump\n    if (input.jump && this.grounded) {\n      this.vy = this.jumpForce;\n      this.grounded = false;\n    }\n    \n    // Gravity\n    this.vy += 800 * dt;\n    if (this.vy > 600) this.vy = 600;\n    \n    // Move and collide\n    this.x += this.vx * dt;\n    this.resolveCollisionX(level);\n    this.y += this.vy * dt;\n    this.grounded = false;\n    this.resolveCollisionY(level);\n  }\n\n  resolveCollisionX(level) {\n    if (level.isSolid(this.x, this.y, this.w, this.h)) {\n      if (this.vx > 0) this.x = Math.floor(this.x / 32) * 32 - this.w;\n      else this.x = Math.ceil(this.x / 32) * 32;\n      this.vx = 0;\n    }\n  }\n\n  resolveCollisionY(level) {\n    if (level.isSolid(this.x, this.y, this.w, this.h)) {\n      if (this.vy > 0) {\n        this.y = Math.floor(this.y / 32) * 32 - this.h;\n        this.grounded = true;\n      } else {\n        this.y = Math.ceil(this.y / 32) * 32;\n        this.vy = 0;\n      }\n    }\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv52-q1', type: 'mcq', question: 'How should platformer collision resolution work?', options: ['Separate X and Y movement with resolution for each axis', 'Move diagonally and resolve at once', 'Only check Y collision', 'Use pixel-perfect collision'], correctAnswer: 0, explanation: 'Separate horizontal and vertical movement with per-axis resolution prevents corner-sliding issues.', difficulty: 2 },
          { id: 'cv52-q2', type: 'true-false', question: 'The camera should smoothly follow the player character.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A camera that follows the player keeps them centered in the viewport for better gameplay.', difficulty: 1 },
          { id: 'cv52-q3', type: 'mcq', question: 'When does a level end in a platformer?', options: ['Player reaches the exit point', 'All enemies are defeated', 'Timer runs out', 'Score threshold is met'], correctAnswer: 0, explanation: 'Levels typically end when the player reaches a specific exit point or flag.', difficulty: 1 },
          { id: 'cv52-q4', type: 'true-false', question: 'Player velocity should be capped to prevent tunneling through tiles.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Velocity caps prevent the player from moving so fast in one frame that they pass through a tile.', difficulty: 2 },
          { id: 'cv52-q5', type: 'true-false', question: 'A ground check should only register true when the player is standing on a solid surface.', options: ['True', 'False'], correctAnswer: 0, explanation: 'grounded should only be true when the player is resting on a solid tile, allowing jumps only then.', difficulty: 1 },
          { id: 'cv52-q6', type: 'true-false', question: 'Level data should be hardcoded directly in the game source.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Level data should be stored as JSON or a similar format for easy editing and level design.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv52-e1', type: 'hard', title: 'Platformer MVP', instructions: 'Build a minimal platformer with: player that moves and jumps, tile-based level with walls/floor, 2 collectible coins, and a level exit flag.', hint: 'Start with the Player class, then add a Level with tile collision, then collectibles and exit detection.', starterCode: '<canvas id=\"plat\" width=\"600\" height=\"400\"></canvas>\n<script>// Your platformer MVP</script>' }
      ],
      cheatSheet: [
        { label: 'Separate axes', value: 'Move X, resolve, move Y, resolve' },
        { label: 'Grounded check', value: 'Set true only when landing on top of tile' },
        { label: 'Camera follow', value: 'Camera centered on player, clamped to world bounds' },
        { label: 'Level data', value: 'JSON with tiles, enemies, collectibles, exit position' },
        { label: 'Velocity cap', value: 'Limit vy to prevent tunneling through thin tiles' },
        { label: 'Exit detection', value: 'Check if player.x > level exit threshold' }
      ]
    },,

    {
      id: 'canvas-53',
      number: 53,
      partLabel: 'Part 6: Projects',
      title: 'Project 3: Space Shooter',
      subtitle: 'Build a complete arcade space shooter',
      difficulty: 'Advanced',
      estimatedMinutes: 60,
      xpReward: 110,
      prerequisites: ['canvas-50', 'canvas-45', 'canvas-46', 'canvas-48'],
      learningObjectives: [
        'Build a complete arcade-style space shooter',
        'Implement wave-based enemy spawning',
        'Add particle effects and audio',
        'Create a leaderboard system'
      ],
      sections: [
        {
          id: 's1',
          title: 'Space Shooter Project',
          whyItMatters: 'A space shooter combines game loop, entities, collisions, particles, audio, and progression into a polished arcade experience.',
          content: "## Space Shooter Architecture\n\n```javascript\nclass SpaceShooter {\n  constructor() {\n    this.canvas = document.getElementById('game');\n    this.ctx = this.canvas.getContext('2d');\n    \n    this.player = new Spaceship();\n    this.bullets = [];\n    this.enemies = [];\n    this.particles = new ParticleSystem(500);\n    this.stars = this.generateStars(100);\n    this.powerups = [];\n    this.score = 0;\n    this.wave = 0;\n    this.gameOver = false;\n    \n    this.input = new InputManager();\n    this.audio = new AudioManager();\n    this.setupGameLoop();\n  }\n\n  startWave() {\n    this.wave++;\n    const count = 3 + this.wave * 2;\n    const speed = 60 + this.wave * 15;\n    \n    for (let i = 0; i < count; i++) {\n      this.enemies.push(new Enemy({\n        x: Math.random() * (this.canvas.width - 40) + 20,\n        y: -60 - Math.random() * 200,\n        speed: speed + Math.random() * 30,\n        health: 1 + Math.floor(this.wave / 3),\n        type: Math.random() < 0.2 && this.wave > 2 ? 'tank' : 'basic'\n      }));\n    }\n  }\n\n  update(dt) {\n    if (this.gameOver) return;\n    \n    // Player\n    this.player.update(dt, this.input);\n    if (this.input.space) this.playerShoot(dt);\n    \n    // Bullets\n    this.bullets.forEach(b => b.update(dt));\n    this.bullets = this.bullets.filter(b => b.active);\n    \n    // Enemies\n    this.enemies.forEach(e => e.update(dt));\n    this.enemies = this.enemies.filter(e => e.active);\n    \n    // Power-ups\n    this.powerups.forEach(p => p.update(dt));\n    this.powerups = this.powerups.filter(p => p.active);\n    \n    // Particles\n    this.particles.update(dt);\n    \n    // Collisions\n    this.checkCollisions();\n    \n    // Wave management\n    if (this.enemies.length === 0) {\n      this.startWave();\n    }\n    \n    // Star parallax\n    this.stars.forEach(s => {\n      s.y += s.speed * dt;\n      if (s.y > this.canvas.height) { s.y = 0; s.x = Math.random() * this.canvas.width; }\n    });\n  }\n\n  checkCollisions() {\n    // Bullets vs enemies\n    this.bullets.forEach(bullet => {\n      this.enemies.forEach(enemy => {\n        if (bullet.active && enemy.active &&\n            Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y) < 25) {\n          bullet.active = false;\n          enemy.health--;\n          \n          if (enemy.health <= 0) {\n            enemy.active = false;\n            this.score += 100 * this.wave;\n            this.particles.explosion(enemy.x, enemy.y);\n            this.audio.play('explosion');\n          }\n        }\n      });\n    });\n    \n    // Enemies vs player\n    this.enemies.forEach(enemy => {\n      if (enemy.active && Math.hypot(enemy.x - this.player.x, enemy.y - this.player.y) < 30) {\n        this.playerHit();\n      }\n    });\n  }\n\n  playerHit() {\n    this.lives--;\n    this.particles.explosion(this.player.x, this.player.y);\n    this.audio.play('hit');\n    this.player.invincibleTimer = 2;\n    if (this.lives <= 0) {\n      this.gameOver = true;\n      this.saveScore();\n    }\n  }\n\n  saveScore() {\n    const scores = JSON.parse(localStorage.getItem('shooterScores') || '[]');\n    scores.push({ score: this.score, wave: this.wave, date: Date.now() });\n    scores.sort((a, b) => b.score - a.score);\n    localStorage.setItem('shooterScores', JSON.stringify(scores.slice(0, 10)));\n  }\n\n  render() {\n    // Stars (parallax background)\n    this.ctx.fillStyle = '#0a0a2e';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.stars.forEach(s => {\n      this.ctx.fillStyle = `rgba(255,255,255,${s.brightness})`;\n      this.ctx.fillRect(s.x, s.y, 2, 2);\n    });\n    \n    // Game objects\n    this.powerups.forEach(p => p.draw(this.ctx));\n    this.enemies.forEach(e => e.draw(this.ctx));\n    this.bullets.forEach(b => b.draw(this.ctx));\n    this.player.draw(this.ctx);\n    this.particles.draw(this.ctx);\n    \n    // HUD\n    this.drawHUD();\n    \n    if (this.gameOver) this.drawGameOver();\n  }\n\n  drawHUD() {\n    this.ctx.fillStyle = '#fff';\n    this.ctx.font = '20px monospace';\n    this.ctx.textAlign = 'left';\n    this.ctx.fillText(`SCORE: ${this.score}`, 10, 30);\n    this.ctx.fillText(`WAVE: ${this.wave}`, 10, 55);\n    \n    this.ctx.textAlign = 'right';\n    this.ctx.fillStyle = '#E91E63';\n    this.ctx.font = '24px Arial';\n    this.ctx.fillText('♥'.repeat(this.lives), this.canvas.width - 10, 35);\n  }\n\n  drawGameOver() {\n    this.ctx.fillStyle = 'rgba(0,0,0,0.7)';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    \n    this.ctx.textAlign = 'center';\n    this.ctx.fillStyle = '#E91E63';\n    this.ctx.font = 'bold 48px Arial';\n    this.ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 40);\n    \n    this.ctx.fillStyle = '#fff';\n    this.ctx.font = '24px Arial';\n    this.ctx.fillText(`Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 20);\n    \n    this.ctx.fillStyle = '#FFC107';\n    this.ctx.fillText(`Wave Reached: ${this.wave}`, this.canvas.width / 2, this.canvas.height / 2 + 55);\n  }\n}\n```\n\n### Star Background Parallax\n\n```javascript\ngenerateStars(count) {\n  return Array.from({ length: count }, () => ({\n    x: Math.random() * this.canvas.width,\n    y: Math.random() * this.canvas.height,\n    speed: 20 + Math.random() * 60,\n    brightness: 0.3 + Math.random() * 0.7\n  }));\n}\n```\n\n### Enemy Types\n\n```javascript\nclass Enemy {\n  constructor(config) {\n    this.x = config.x;\n    this.y = config.y;\n    this.speed = config.speed;\n    this.health = config.health;\n    this.type = config.type;\n    this.active = true;\n    this.shootTimer = Math.random() * 2;\n    \n    if (this.type === 'tank') {\n      this.r = 18;\n      this.color = '#E91E63';\n    } else {\n      this.r = 12;\n      this.color = '#FF5722';\n    }\n  }\n\n  update(dt) {\n    this.y += this.speed * dt;\n    \n    // Side-to-side movement\n    this.x += Math.sin(this.y * 0.01) * 50 * dt;\n    \n    if (this.y > canvas.height + 50) {\n      this.active = false;\n    }\n    \n    // Enemy shooting\n    this.shootTimer -= dt;\n    if (this.shootTimer <= 0) {\n      game.enemyBullets.push(new Bullet(this.x, this.y + this.r, 0, 200, '#ff4444'));\n      this.shootTimer = 1.5 + Math.random();\n    }\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);\n    ctx.fill();\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv53-q1', type: 'mcq', question: 'What is parallax scrolling?', options: ['Background layers moving at different speeds for depth illusion', 'Scrolling the screen horizontally', 'Scrolling through game levels', 'Auto-scrolling camera'], correctAnswer: 0, explanation: 'Parallax creates depth by moving background elements slower than foreground ones.', difficulty: 1 },
          { id: 'cv53-q2', type: 'true-false', question: 'Wave-based spawning should increase enemy count and difficulty each wave.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Each wave should be harder with more enemies, faster speeds, and tougher enemy types.', difficulty: 1 },
          { id: 'cv53-q3', type: 'mcq', question: 'How should enemy shooting be timed?', options: ['Randomized timers per enemy with cooldown', 'All enemies shoot at once', 'Shoot every frame', 'Shoot when player is close'], correctAnswer: 0, explanation: 'Each enemy should have an individual randomized shoot timer to create varied bullet patterns.', difficulty: 2 },
          { id: 'cv53-q4', type: 'true-false', question: 'Invincibility frames after being hit prevent instant death from multiple collisions.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A brief invincibility period (e.g., 2 seconds) after being hit prevents rapid consecutive damage.', difficulty: 1 },
          { id: 'cv53-q5', type: 'true-false', question: 'The leaderboard should show all scores ever achieved, unsorted.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Leaderboards should show the top scores sorted in descending order, typically top 10.', difficulty: 1 },
          { id: 'cv53-q6', type: 'true-false', question: 'Enemies should be filtered from the active list when they go off-screen.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Remove enemies that fly off the bottom to prevent memory leaks and unnecessary processing.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv53-e1', type: 'hard', title: 'Space Shooter Milestone', instructions: 'Build a space shooter with: player ship (WASD + Space), scrolling star background, wave-based enemies, score tracking, and lives system.', hint: 'Start with player movement and shooting. Add stars, then basic enemies, then waves, then polish.', starterCode: '<canvas id=\"shooter\" width=\"600\" height=\"500\"></canvas>\n<script>// Your space shooter</script>' }
      ],
      cheatSheet: [
        { label: 'Parallax stars', value: 'Arrays of stars with different speeds' },
        { label: 'Wave system', value: 'Increase enemy count/speed per wave' },
        { label: 'Invincibility frames', value: 'Timer after hit, skip collision while active' },
        { label: 'Leaderboard', value: 'localStorage, sort top 10 scores' },
        { label: 'Enemy types', value: 'Basic, tank, shooter with config-driven stats' },
        { label: 'Entity cleanup', value: 'Filter inactive entities each frame' }
      ]
    },,

    {
      id: 'canvas-54',
      number: 54,
      partLabel: 'Part 6: Projects',
      title: 'Project 4: Data Visualization',
      subtitle: 'Build interactive charts and graphs',
      difficulty: 'Advanced',
      estimatedMinutes: 60,
      xpReward: 100,
      prerequisites: ['canvas-40', 'canvas-33', 'canvas-36'],
      learningObjectives: [
        'Build interactive bar, line, and pie charts',
        'Implement smooth chart animations',
        'Handle real-time data updates',
        'Create interactive tooltips and legends'
      ],
      sections: [
        {
          id: 's1',
          title: 'Canvas Data Visualization',
          whyItMatters: 'Data visualization is a powerful real-world application of canvas. Interactive charts combine drawing, math, and event handling into practical tools.',
          content: "## Chart Library\n\n```javascript\nclass Chart {\n  constructor(canvasId, options = {}) {\n    this.canvas = document.getElementById(canvasId);\n    this.ctx = this.canvas.getContext('2d');\n    this.options = {\n      padding: 40,\n      backgroundColor: '#f8f9fa',\n      gridColor: '#e9ecef',\n      textColor: '#495057',\n      animationDuration: 500,\n      ...options\n    };\n    this.data = [];\n    this.hoveredIndex = -1;\n    this.animationProgress = 0;\n    this.isAnimating = false;\n    this.setupEvents();\n  }\n\n  setData(data) {\n    this.targetData = data;\n    this.animationProgress = 0;\n    this.isAnimating = true;\n    this.animStartTime = performance.now();\n  }\n\n  update() {\n    if (this.isAnimating) {\n      const elapsed = performance.now() - this.animStartTime;\n      this.animationProgress = Math.min(elapsed / this.options.animationDuration, 1);\n      // Ease out cubic\n      this.animationProgress = 1 - Math.pow(1 - this.animationProgress, 3);\n      if (this.animationProgress >= 1) this.isAnimating = false;\n    }\n  }\n\n  setupEvents() {\n    this.canvas.addEventListener('mousemove', (e) => {\n      const rect = this.canvas.getBoundingClientRect();\n      const mx = e.clientX - rect.left;\n      const my = e.clientY - rect.top;\n      this.handleHover(mx, my);\n    });\n  }\n\n  drawGrid() {\n    const { padding } = this.options;\n    const w = this.canvas.width - padding * 2;\n    const h = this.canvas.height - padding * 2;\n    \n    this.ctx.strokeStyle = this.options.gridColor;\n    this.ctx.lineWidth = 1;\n    \n    // Horizontal grid lines\n    for (let i = 0; i <= 4; i++) {\n      const y = padding + (h / 4) * i;\n      this.ctx.beginPath();\n      this.ctx.moveTo(padding, y);\n      this.ctx.lineTo(padding + w, y);\n      this.ctx.stroke();\n    }\n  }\n\n  drawTooltip(x, y, text) {\n    this.ctx.fillStyle = 'rgba(0,0,0,0.8)';\n    this.ctx.font = '13px Arial';\n    const metrics = this.ctx.measureText(text);\n    const tw = metrics.width + 16;\n    const th = 30;\n    \n    let tx = x + 10;\n    let ty = y - th - 10;\n    if (tx + tw > this.canvas.width) tx = x - tw - 10;\n    if (ty < 0) ty = y + 10;\n    \n    this.ctx.beginPath();\n    this.ctx.roundRect(tx, ty, tw, th, 4);\n    this.ctx.fill();\n    \n    this.ctx.fillStyle = '#fff';\n    this.ctx.textAlign = 'center';\n    this.ctx.textBaseline = 'middle';\n    this.ctx.fillText(text, tx + tw / 2, ty + th / 2);\n  }\n}\n\nclass BarChart extends Chart {\n  draw() {\n    this.update();\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.fillStyle = this.options.backgroundColor;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    \n    this.drawGrid();\n    \n    const { padding } = this.options;\n    const w = this.canvas.width - padding * 2;\n    const h = this.canvas.height - padding * 2;\n    const maxVal = Math.max(...this.targetData.map(d => d.value));\n    const barWidth = w / this.targetData.length * 0.7;\n    const gap = w / this.targetData.length * 0.3;\n    \n    this.targetData.forEach((item, i) => {\n      const barHeight = (item.value / maxVal) * h * this.animationProgress;\n      const x = padding + i * (barWidth + gap) + gap / 2;\n      const y = padding + h - barHeight;\n      \n      // Bar\n      const gradient = this.ctx.createLinearGradient(x, y, x, padding + h);\n      gradient.addColorStop(0, item.color || '#2196F3');\n      gradient.addColorStop(1, (item.color || '#2196F3') + '88');\n      this.ctx.fillStyle = gradient;\n      \n      this.ctx.beginPath();\n      this.ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);\n      this.ctx.fill();\n      \n      // Label\n      this.ctx.fillStyle = this.options.textColor;\n      this.ctx.font = '12px Arial';\n      this.ctx.textAlign = 'center';\n      this.ctx.fillText(item.label, x + barWidth / 2, padding + h + 20);\n      \n      // Value on top\n      if (this.animationProgress > 0.5) {\n        this.ctx.fillText(\n          Math.round(item.value * this.animationProgress),\n          x + barWidth / 2, y - 8\n        );\n      }\n      \n      // Hover highlight\n      if (i === this.hoveredIndex) {\n        this.ctx.strokeStyle = '#333';\n        this.ctx.lineWidth = 2;\n        this.ctx.strokeRect(x, y, barWidth, barHeight);\n      }\n    });\n    \n    if (this.hoveredIndex >= 0) {\n      const item = this.targetData[this.hoveredIndex];\n      this.drawTooltip(this.lastMouseX, this.lastMouseY, `${item.label}: ${item.value}`);\n    }\n  }\n\n  handleHover(mx, my) {\n    this.lastMouseX = mx;\n    this.lastMouseY = my;\n    const { padding } = this.options;\n    const w = this.canvas.width - padding * 2;\n    const barWidth = w / this.targetData.length * 0.7;\n    const gap = w / this.targetData.length * 0.3;\n    \n    let found = -1;\n    for (let i = 0; i < this.targetData.length; i++) {\n      const x = padding + i * (barWidth + gap) + gap / 2;\n      if (mx >= x && mx <= x + barWidth && my >= padding && my <= padding + (this.canvas.height - padding * 2)) {\n        found = i;\n        break;\n      }\n    }\n    this.hoveredIndex = found;\n    this.canvas.style.cursor = found >= 0 ? 'pointer' : 'default';\n  }\n}\n```\n\n### Real-Time Data Updates\n\n```javascript\nclass LiveChart extends Chart {\n  constructor(canvasId) {\n    super(canvasId);\n    this.maxPoints = 50;\n    this.data = [];\n    this.timer = 0;\n  }\n\n  addPoint(value) {\n    this.data.push(value);\n    if (this.data.length > this.maxPoints) {\n      this.data.shift();\n    }\n    this.targetData = this.data.map((v, i) => ({\n      label: i.toString(),\n      value: v\n    }));\n  }\n\n  simulateData() {\n    setInterval(() => {\n      this.addPoint(Math.random() * 100);\n    }, 500);\n  }\n}\n```\n\n### Pie Chart\n\n```javascript\nclass PieChart extends Chart {\n  draw() {\n    this.update();\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    \n    const centerX = this.canvas.width / 2;\n    const centerY = this.canvas.height / 2;\n    const radius = Math.min(centerX, centerY) - this.options.padding;\n    const total = this.targetData.reduce((s, d) => s + d.value, 0);\n    \n    let startAngle = -Math.PI / 2;\n    const sweepAngle = Math.PI * 2 * this.animationProgress;\n    let accumulatedAngle = 0;\n    \n    this.targetData.forEach((item, i) => {\n      const sliceAngle = (item.value / total) * Math.PI * 2 * this.animationProgress;\n      const endAngle = startAngle + sliceAngle;\n      \n      this.ctx.beginPath();\n      this.ctx.moveTo(centerX, centerY);\n      this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);\n      this.ctx.closePath();\n      this.ctx.fillStyle = item.color;\n      this.ctx.fill();\n      \n      // Label\n      const midAngle = startAngle + sliceAngle / 2;\n      const labelX = centerX + Math.cos(midAngle) * (radius * 1.2);\n      const labelY = centerY + Math.sin(midAngle) * (radius * 1.2);\n      \n      this.ctx.fillStyle = this.options.textColor;\n      this.ctx.font = '12px Arial';\n      this.ctx.textAlign = 'center';\n      this.ctx.fillText(item.label, labelX, labelY);\n      \n      startAngle = endAngle;\n    });\n  }\n\n  handleHover(mx, my) {\n    // Distance from center\n    const dx = mx - this.canvas.width / 2;\n    const dy = my - this.canvas.height / 2;\n    const dist = Math.hypot(dx, dy);\n    const radius = Math.min(this.canvas.width / 2, this.canvas.height / 2) - this.options.padding;\n    \n    if (dist <= radius) {\n      const angle = Math.atan2(dy, dx);\n      // Determine which slice\n      // ... (angular slice hit detection)\n    }\n  }\n}\n```"
        }
      ],
      quiz: {
        questions: [
          { id: 'cv54-q1', type: 'mcq', question: 'What is the easing function used for chart animation?', options: ['Ease-out cubic for smooth deceleration', 'Linear for constant speed', 'Ease-in for slow start', 'Bounce for playful effect'], correctAnswer: 0, explanation: 'Ease-out cubic (1 - (1 - t)³) provides a smooth deceleration effect for natural-looking animations.', difficulty: 2 },
          { id: 'cv54-q2', type: 'true-false', question: 'Charts should use linear gradients for visual appeal.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Gradients add visual depth to bars and pie slices, making charts look more polished.', difficulty: 1 },
          { id: 'cv54-q3', type: 'mcq', question: 'How should tooltip positioning work?', options: ['Follow cursor, flip to stay within canvas bounds', 'Fixed at top of chart', 'Always show at mouse position', 'Show at chart center'], correctAnswer: 0, explanation: 'Tooltips should follow the cursor but flip to the other side if they would extend beyond canvas edges.', difficulty: 2 },
          { id: 'cv54-q4', type: 'true-false', question: 'Bar chart values should be displayed on top of each bar.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Displaying values on top of bars makes the chart readable without requiring hover interaction.', difficulty: 1 },
          { id: 'cv54-q5', type: 'true-false', question: 'Pie chart labels should always be placed outside the chart area.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Labels outside the pie circle (at 1.2x radius) are more readable than labels inside small slices.', difficulty: 1 },
          { id: 'cv54-q6', type: 'true-false', question: 'Real-time data charts should add new points at fixed intervals.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Live charts typically add data points every 500ms-1s to show real-time updates smoothly.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv54-e1', type: 'hard', title: 'Interactive Bar Chart', instructions: 'Build an interactive bar chart that: animates on load, shows tooltip on hover, and lets users toggle data series. Use sample sales data (4-6 categories).', hint: 'Create a Chart base class. Extend BarChart. Use requestAnimationFrame for animation. Track mouse position for tooltips.', starterCode: '<canvas id=\"chart\" width=\"600\" height=\"400\"></canvas>\n<script>// Your interactive bar chart</script>' }
      ],
      cheatSheet: [
        { label: 'Chart base class', value: 'Shared padding, grid, events, animation logic' },
        { label: 'Bar chart', value: 'Rectangles per data point, width proportional to value' },
        { label: 'Pie chart', value: 'Arc segments, angles proportional to values' },
        { label: 'Animation', value: 'Progress from 0 to 1 with easing function' },
        { label: 'Tooltip', value: 'Position near cursor, clamp to canvas bounds' },
        { label: 'Cursor changes', value: 'Change to pointer when hovering over data' }
      ]
    },,

    {
      id: 'canvas-55',
      number: 55,
      partLabel: 'Part 6: Projects',
      title: 'Capstone: Portfolio Project',
      subtitle: 'Design and build your own canvas project',
      difficulty: 'Advanced',
      estimatedMinutes: 90,
      xpReward: 200,
      prerequisites: ['canvas-50', 'canvas-51', 'canvas-52', 'canvas-53'],
      learningObjectives: [
        'Design and architect a complete canvas application from scratch',
        'Apply all skills from the curriculum',
        'Practice project planning and scoping',
        'Create a portfolio-ready project'
      ],
      sections: [
        {
          id: 's1',
          title: 'Capstone Project',
          whyItMatters: 'The capstone is your opportunity to demonstrate mastery by building a complete, polished project that showcases everything you have learned.',
          content: '## Capstone Project Guide\n\nChoose one of these project types or propose your own:\n\n### Option 1: Advanced Game\n- RPG with tile maps, inventory, NPCs\n- Puzzle game (match-3, Sokoban, etc.)\n- Endless runner with procedural generation\n- Multiplayer game (WebSocket + Canvas)\n\n### Option 2: Creative Tool\n- Advanced drawing app with layers\n- Pixel art editor\n- Animation tool with timeline\n- Music visualization tool\n\n### Option 3: Data Dashboard\n- Interactive dashboard with multiple chart types\n- Real-time data visualization\n- Map visualization with GeoJSON\n\n### Deliverables\n- Working application (hosted on GitHub Pages or Netlify)\n- Source code on GitHub with README\n- Short demo video or GIF showcasing the app\n- A brief case study describing design decisions, challenges, and lessons learned\n\n### Evaluation Criteria\n- Code quality: organization, comments, naming\n- Performance: smooth 60fps rendering, memory efficiency\n- User experience: responsive, accessible, intuitive\n- Polish: animations, visual feedback, error handling\n- Completeness: all planned features implemented\n\n### Pro Tips\n- Start with a simple prototype, then add features iteratively\n- Profile performance early to avoid late-stage surprises\n- Test on multiple devices and browsers\n- Get feedback from other developers\n- Document your architecture and decisions'
        }
      ],
      quiz: {
        questions: [
          { id: 'cv55-q1', type: 'mcq', question: 'What is the first step in building a capstone project?', options: ['Define a project specification', 'Start coding immediately', 'Find a code editor', 'Install dependencies'], correctAnswer: 0, explanation: 'Start with a clear specification outlining features, audience, and technical approach.', difficulty: 1 },
          { id: 'cv55-q2', type: 'true-false', question: 'Strong project architecture is important for maintainability as the project grows.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Good architecture (scenes, ECS, MVC) keeps the codebase organized and maintainable.', difficulty: 1 },
          { id: 'cv55-q3', type: 'mcq', question: 'Which is NOT a good optimization technique?', options: ['Creating new objects every frame', 'Object pooling', 'Off-screen culling', 'Using offscreen canvas for static layers'], correctAnswer: 0, explanation: 'Creating new objects every frame causes GC pressure. Use pooling and reuse instead.', difficulty: 2 },
          { id: 'cv55-q4', type: 'true-false', question: 'A loading screen improves user experience while assets load.', options: ['True', 'False'], correctAnswer: 0, explanation: 'A loading screen with a progress indicator keeps users informed and engaged.', difficulty: 1 },
          { id: 'cv55-q5', type: 'true-false', question: 'Canvas applications do not need touch support since they are mainly for desktop.', options: ['True', 'False'], correctAnswer: 1, explanation: 'Many users access web applications on mobile devices. Touch support is essential.', difficulty: 1 },
          { id: 'cv55-q6', type: 'true-false', question: 'A portfolio project should include both a live demo and source code.', options: ['True', 'False'], correctAnswer: 0, explanation: 'Employers and clients want to see both the running application and the code quality.', difficulty: 1 }
        ],
        passingScore: 70
      },
      exercises: [
        { id: 'cv55-e1', type: 'hard', title: 'Capstone Project', instructions: 'Design, build, and polish a complete canvas application. Choose from: an advanced game, a creative tool, or a data dashboard. Submit your project plan, architecture diagram, and working demo.', hint: 'Start with a clear specification. Build incrementally. Polish last.', starterCode: '<!-- Your capstone project -->\n<canvas id="capstone"></canvas>\n<script>// Your code here</script>' }
      ],
      cheatSheet: [
        { label: 'Project plan', value: 'Spec -> Design -> Implement -> Polish -> Deploy' },
        { label: 'Performance', value: 'Pooling, culling, offscreen canvas, batch draws' },
        { label: 'Polish', value: 'Animations, audio, particles, responsive design' },
        { label: 'Deployment', value: 'Bundle, host on GitHub Pages/Netlify/Vercel' },
        { label: 'Portfolio', value: 'Demo video, case study, live demo + source' },
        { label: 'Next steps', value: 'WebGL, WASM, React Canvas, Phaser, Three.js' }
      ]
    },
  ]
};

