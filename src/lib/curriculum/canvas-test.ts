// DO NOT EDIT — This file is auto-generated
import { Track } from './types';

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
    },
    {
      ,id: 'canvas-55',
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
          content: "## Capstone Project Guide\n\nChoose one of these project types or propose your own:\n\n### Option 1: Advanced Game\n- RPG with tile maps, inventory, NPCs\n- Puzzle game (match-3, Sokoban, etc.)\n- Endless runner with procedural generation\n- Multiplayer game (WebSocket + Canvas)\n\n### Option 2: Creative Tool\n- Advanced drawing app with layers\n- Pixel art editor\n- Animation tool with timeline\n- Music visualization tool\n\n### Option 3: Data Dashboard\n- Interactive dashboard with multiple chart types\n- Real-time data visualization\n- Map visualization with GeoJSON\n\n### Project Planning Template\n\n```javascript\n// 1. Project Specification\nconst PROJECT = {\n  name: 'My Canvas Project',\n  description: 'What does it do?',\n  targetAudience: 'Who is it for?',\n  coreFeatures: [\n    'Feature 1',\n    'Feature 2',\n    'Feature 3'\n  ],\n  stretchGoals: [\n    'Nice-to-have feature',\n    'Performance optimization'\n  ]\n};\n\n// 2. Technical Design\n// - Canvas setup (resize, DPI)\n// - Architecture (scenes, ECS, or MVC)\n// - Data flow diagram\n// - Asset list (sprites, sounds)\n\n// 3. Implementation Plan\nconst PHASES = {\n  phase1: 'Core mechanics (1-2 days)',\n  phase2: 'Content and polish (1-2 days)',\n  phase3: 'Testing and optimization (1 day)',\n  phase4: 'Deployment and documentation (0.5 day)'\n};\n\n// 4. Performance Checklist\nconst PERFORMANCE = [\n  'Use requestAnimationFrame for the loop',\n  'Cull off-screen objects',\n  'Object pooling for particles/bullets',\n  'Avoid GC pressure (reuse objects)',\n  'Use offscreen canvas for static layers',\n  'Limit shadowBlur and globalCompositeOperation usage',\n  'Consider canvas size for mobile devices'\n];\n\n// 5. Polish Checklist\nconst POLISH = [\n  'Smooth animations with easing',\n  'Sound effects for interactions',\n  'Particle effects for explosions/highlights',\n  'Screen shake on impacts',\n  'Responsive design for mobile',\n  'Loading screen while assets load',\n  'Error handling and fallbacks',\n  'Keyboard shortcuts for power users'\n];\n\n// 6. Deployment\n// - Bundle with esbuild or webpack\n// - Host on GitHub Pages, Netlify, or Vercel\n// - Add analytics to track usage\n// - Write a README with screenshots and instructions\n\n// Example: Minimal esbuild setup\n/*\n  npm install esbuild --save-dev\n  npx esbuild src/index.js --bundle --outfile=dist/bundle.js --minify\n*/\n```\n\n### Code Review Checklist\n\n```javascript\n// Before submitting your project:\n// 1. Code quality\n//   - Consistent naming conventions\n//   - No magic numbers (use constants)\n//   - Functions are single-responsibility\n//   - Error handling for edge cases\n//\n// 2. Architecture\n//   - Clear separation of concerns\n//   - State management is predictable\n//   - Event handlers are properly cleaned up\n//\n// 3. Performance\n//   - No unnecessary allocations in hot loops\n//   - Canvas operations are batched\n//   - Animations use requestAnimationFrame\n//\n// 4. UX\n//   - Visual feedback for interactions\n//   - Loading states for async operations\n//   - Touch support for mobile\n//   - Keyboard navigation where appropriate\n```\n\n### Next Steps After This Course\n\n1. **WebGL & Three.js**: 3D graphics on the web\n2. **WebAssembly**: High-performance canvas applications\n3. **React Canvas**: Using canvas in React apps\n4. **Creative Coding**: Generative art, data viz, installations\n5. **Game Engines**: Phaser, PixiJS, or Godot for advanced games\n6. **Mobile Canvas**: Canvas in React Native or Flutter\n\n### Portfolio Presentation Tips\n\n- Record a short demo video (30-60 seconds)\n- Write a case study: problem, approach, solution\n- Show before/after or iteration process\n- Include performance benchmarks\n- Link to live demo AND source code\n- Explain technical decisions and trade-offs"
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
        { id: 'cv55-e1', type: 'hard', title: 'Capstone Project', instructions: 'Design, build, and polish a complete canvas application. Choose from: an advanced game, a creative tool, or a data dashboard. Submit your project plan, architecture diagram, and working demo.', hint: 'Start with a clear specification. Build incrementally. Polish last.', starterCode: '<!-- Your capstone project -->\n<canvas id=\"capstone\"></canvas>\n<script>// Your code here</script>' }
      ],
      cheatSheet: [
        { label: 'Project plan', value: 'Spec -> Design -> Implement -> Polish -> Deploy' },
        { label: 'Performance', value: 'Pooling, culling, offscreen canvas, batch draws' },
        { label: 'Polish', value: 'Animations, audio, particles, responsive design' },
        { label: 'Deployment', value: 'Bundle, host on GitHub Pages/Netlify/Vercel' },
        { label: 'Portfolio', value: 'Demo video, case study, live demo + source' },
        { label: 'Next steps', value: 'WebGL, WASM, React Canvas, Phaser, Three.js' }
      ]
    }
  ];
};
