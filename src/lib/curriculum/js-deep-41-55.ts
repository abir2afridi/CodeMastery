import type { Chapter } from "./types";

export const jsCh41: Chapter = {
  id: "js-ch-41",
  number: 41,
  title: "DOM Basics",
  subtitle: "Understanding the Document Object Model.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-13"],
  learningObjectives: [
    "Understand the DOM tree structure.",
    "Select DOM elements.",
    "Traverse the DOM.",
    "Modify element content.",
    "Understand DOM events basics.",
  ],
  sections: [
    {
      id: "js41-s1",
      title: "DOM Tree Structure",
      whyItMatters: "The DOM represents HTML as a tree of objects. Understanding this structure is essential for manipulating web pages.",
      realWorldAnalogy: "The DOM is like a family tree for HTML elements. Each element (node) can have children, siblings, and parents.",
      content: "HTML as a tree:\n\n\`\`\`html\n<body>\n  <div class=\"container\">\n    <h1>Title</h1>\n    <p>Text</p>\n  </div>\n</body>\n\`\`\`\n\nBecomes a tree:\n- body (parent)\n  - div (child of body, parent of h1 and p)\n    - h1 (child of div)\n    - p (child of div, sibling of h1)\n\n\`\`\`javascript\ndocument.body; // Returns <body> element\ndocument.documentElement; // Returns <html>\n\`\`\`",
    },
    {
      id: "js41-s2",
      title: "Selecting Elements",
      whyItMatters: "You need to select elements before you can manipulate them.",
      content: "Modern selection methods:\n\n\`\`\`javascript\n// By ID\nconst title = document.getElementById('title');\n\n// By class\nconst items = document.getElementsByClassName('item');\n\n// By tag\nconst divs = document.getElementsByTagName('div');\n\n// By CSS selector (recommended)\nconst title2 = document.querySelector('#title');\nconst allItems = document.querySelectorAll('.item');\n\`\`\`\n\nquerySelector returns first match, querySelectorAll returns all.",
    },
    {
      id: "js41-s3",
      title: "Modifying Elements",
      whyItMatters: "Changing element content and attributes is fundamental to dynamic web pages.",
      content: "Change text and HTML:\n\n\`\`\`javascript\nconst el = document.querySelector('p');\n\nel.textContent = 'New text'; // Safe, no HTML parsing\nel.innerHTML = '<strong>New</strong> HTML'; // Parses HTML\n\`\`\`\n\nChange attributes:\n\n\`\`\`javascript\nel.setAttribute('class', 'highlight');\nel.className = 'highlight';\n\nel.classList.add('active');\nel.classList.remove('hidden');\nel.classList.toggle('visible');\n\`\`\`\n\nChange styles:\n\n\`\`\`javascript\nel.style.color = 'red';\nel.style.backgroundColor = 'blue';\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js41-ex1", title: "Change content", difficulty: 1, description: "Select an element and change its text content.", requirements: ["Select element", "Change textContent", "Verify change"], starterCode: { javascript: "// Select the element with id 'message'\n// Change its text to 'Hello World!'\n\n" }, hints: ["Use querySelector", "Set textContent"], solution: { javascript: "const message = document.querySelector('#message');\nmessage.textContent = 'Hello World!';" }, solutionExplanation: "querySelector finds elements, textContent changes text safely." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js41-q1", type: "mcq", question: "Which returns all matching elements?", options: ["querySelector", "querySelectorAll", "getElementById", "getElementByClass"], correctAnswer: 1, explanation: "querySelectorAll returns a NodeList of all matching elements.", difficulty: 1 }] },
  cheatSheet: [{ label: "Select", value: "document.querySelector()" }, { label: "Select all", value: "document.querySelectorAll()" }, { label: "Text", value: "element.textContent" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh42: Chapter = {
  id: "js-ch-42",
  number: 42,
  title: "DOM Manipulation",
  subtitle: "Creating and modifying DOM elements.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-41"],
  learningObjectives: [
    "Create new DOM elements.",
    "Insert elements into the DOM.",
    "Remove elements from the DOM.",
    "Replace elements.",
    "Clone elements.",
  ],
  sections: [
    {
      id: "js42-s1",
      title: "Creating Elements",
      whyItMatters: "Dynamic content creation is essential for interactive web applications.",
      content: "Create element:\n\n\`\`\`javascript\nconst div = document.createElement('div');\ndiv.className = 'card';\ndiv.textContent = 'New card';\n\`\`\`\n\nCreate text node:\n\n\`\`\`javascript\nconst text = document.createTextNode('Hello');\ndiv.appendChild(text);\n\`\`\`\n\nCreate with HTML (use with caution):\n\n\`\`\`javascript\nconst html = '<div class=\"card\">Content</div>';\nconst div = document.createElement('div');\ndiv.innerHTML = html;\n\`\`\`",
    },
    {
      id: "js42-s2",
      title: "Inserting Elements",
      whyItMatters: "Adding elements to the DOM makes them visible to users.",
      content: "Append to parent:\n\n\`\`\`javascript\nconst parent = document.querySelector('.container');\nconst child = document.createElement('p');\nchild.textContent = 'New paragraph';\n\nparent.appendChild(child);\n\`\`\`\n\nInsert before sibling:\n\n\`\`\`javascript\nconst sibling = document.querySelector('.existing');\nconst newEl = document.createElement('p');\nnewEl.textContent = 'Before existing';\n\nparent.insertBefore(newEl, sibling);\n\`\`\`\n\nInsert adjacent:\n\n\`\`\`javascript\nsibling.insertAdjacentHTML('beforebegin', '<p>Before</p>');\nsibling.insertAdjacentHTML('afterend', '<p>After</p>');\n\`\`\`",
    },
    {
      id: "js42-s3",
      title: "Removing Elements",
      whyItMatters: "Removing elements cleans up the DOM and improves performance.",
      content: "Remove from parent:\n\n\`\`\`javascript\nconst element = document.querySelector('.to-remove');\nelement.remove(); // Modern method\n\n// Or\nelement.parentNode.removeChild(element);\n\`\`\`\n\nReplace element:\n\n\`\`\`javascript\nconst old = document.querySelector('.old');\nconst replacement = document.createElement('div');\nreplacement.textContent = 'New content';\n\nold.parentNode.replaceChild(replacement, old);\n\`\`\`\n\nClone element:\n\n\`\`\`javascript\nconst original = document.querySelector('.card');\nconst clone = original.cloneNode(true); // true = deep clone\noriginal.parentNode.appendChild(clone);\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js42-ex1", title: "Create and append", difficulty: 2, description: "Create a new list item and append it to a list.", requirements: ["Create li element", "Set text content", "Append to ul"], starterCode: { javascript: "const list = document.querySelector('ul');\n\n// Create new li with text 'Item 4' and append\n\n" }, hints: ["createElement('li')", "textContent", "appendChild"], solution: { javascript: "const list = document.querySelector('ul');\nconst newItem = document.createElement('li');\nnewItem.textContent = 'Item 4';\nlist.appendChild(newItem);" }, solutionExplanation: "createElement creates elements, appendChild adds them to the DOM." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js42-q1", type: "mcq", question: "Which removes an element?", options: ["delete", "remove()", "clear()", "erase()"], correctAnswer: 1, explanation: "remove() is the modern method to remove an element from the DOM.", difficulty: 1 }] },
  cheatSheet: [{ label: "Create", value: "document.createElement()" }, { label: "Append", value: "appendChild()" }, { label: "Remove", value: "remove()" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh43: Chapter = {
  id: "js-ch-43",
  number: 43,
  title: "DOM Events",
  subtitle: "Handling user interactions and events.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-41"],
  learningObjectives: [
    "Add event listeners.",
    "Handle event objects.",
    "Use event delegation.",
    "Remove event listeners.",
    "Understand event propagation.",
  ],
  sections: [
    {
      id: "js43-s1",
      title: "Adding Event Listeners",
      whyItMatters: "Event listeners enable interactive web applications by responding to user actions.",
      content: "addEventListener:\n\n\`\`\`javascript\nconst button = document.querySelector('button');\n\nbutton.addEventListener('click', function(event) {\n  console.log('Button clicked!');\n});\n\n// Arrow function\nbutton.addEventListener('click', (e) => {\n  console.log('Button clicked!');\n});\n\`\`\`\n\nInline handlers (avoid):\n\n\`\`\`html\n<!-- Bad practice -->\n<button onclick=\"handleClick()\">Click</button>\n\`\`\`\n\naddEventListener is preferred for separation of concerns.",
    },
    {
      id: "js43-s2",
      title: "Event Object",
      whyItMatters: "The event object provides information about the event and allows you to control its behavior.",
      content: "Access event properties:\n\n\`\`\`javascript\nbutton.addEventListener('click', (e) => {\n  console.log(e.type); // 'click'\n  console.log(e.target); // The element clicked\n  console.log(e.clientX, e.clientY); // Mouse position\n});\n\`\`\`\n\nPrevent default behavior:\n\n\`\`\`javascript\nconst link = document.querySelector('a');\nlink.addEventListener('click', (e) => {\n  e.preventDefault(); // Prevent link navigation\n  console.log('Link clicked but not navigated');\n});\n\`\`\`\n\nStop propagation:\n\n\`\`\`javascript\ninner.addEventListener('click', (e) => {\n  e.stopPropagation(); // Stop bubbling to parent\n  console.log('Inner clicked');\n});\n\`\`\`",
    },
    {
      id: "js43-s3",
      title: "Event Delegation",
      whyItMatters: "Event delegation improves performance and handles dynamically added elements.",
      content: "Delegate to parent:\n\n\`\`\`javascript\nconst list = document.querySelector('ul');\n\nlist.addEventListener('click', (e) => {\n  if (e.target.matches('li')) {\n    console.log('List item clicked:', e.target.textContent);\n  }\n});\n\`\`\`\n\nBenefits:\n- One listener instead of many\n- Works for dynamically added elements\n- Better performance\n\nCommon events:\n- click, dblclick\n- mousedown, mouseup, mousemove\n- keydown, keyup, keypress\n- submit, change, input\n- load, resize, scroll",
    },
  ],
  exercises: [
    { id: "js43-ex1", title: "Handle click", difficulty: 1, description: "Add a click listener to a button that logs a message.", requirements: ["Select button", "Add click listener", "Log on click"], starterCode: { javascript: "const button = document.querySelector('#myButton');\n\n// Add click listener that logs 'Button clicked'\n\n" }, hints: ["addEventListener", "'click'"], solution: { javascript: "const button = document.querySelector('#myButton');\nbutton.addEventListener('click', () => {\n  console.log('Button clicked');\n});" }, solutionExplanation: "addEventListener with 'click' responds to button clicks." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js43-q1", type: "mcq", question: "What prevents default behavior?", options: ["e.stop()", "e.preventDefault()", "e.stopPropagation()", "e.cancel()"], correctAnswer: 1, explanation: "preventDefault() cancels the default action of the event.", difficulty: 2 }] },
  cheatSheet: [{ label: "Add listener", value: "addEventListener('click', fn)" }, { label: "Prevent default", value: "e.preventDefault()" }, { label: "Stop propagation", value: "e.stopPropagation()" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh44: Chapter = {
  id: "js-ch-44",
  number: 44,
  title: "Form Handling",
  subtitle: "Working with HTML forms.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-43"],
  learningObjectives: [
    "Access form values.",
    "Handle form submission.",
    "Validate form data.",
    "Work with form controls.",
    "Handle file uploads.",
  ],
  sections: [
    {
      id: "js44-s1",
      title: "Accessing Form Values",
      whyItMatters: "Forms are the primary way users submit data to web applications.",
      content: "Select form elements:\n\n\`\`\`javascript\nconst form = document.querySelector('form');\nconst nameInput = form.querySelector('#name');\nconst emailInput = form.querySelector('#email');\n\nconsole.log(nameInput.value);\nconsole.log(emailInput.value);\n\`\`\`\n\nForm elements object:\n\n\`\`\`javascript\nconst form = document.querySelector('form');\nconsole.log(form.elements.name.value);\nconsole.log(form.elements.email.value);\n\`\`\`\n\nGet all form data:\n\n\`\`\`javascript\nconst formData = new FormData(form);\nfor (const [key, value] of formData) {\n  console.log(key, value);\n}\n\`\`\`",
    },
    {
      id: "js44-s2",
      title: "Form Submission",
      whyItMatters: "Handling form submission allows you to process user data without page reloads.",
      content: "Handle submit event:\n\n\`\`\`javascript\nform.addEventListener('submit', (e) => {\n  e.preventDefault(); // Prevent page reload\n  \n  const name = form.elements.name.value;\n  const email = form.elements.email.value;\n  \n  console.log({ name, email });\n  \n  // Send data to server\n  fetch('/api/users', {\n    method: 'POST',\n    body: JSON.stringify({ name, email }),\n    headers: { 'Content-Type': 'application/json' }\n  });\n});\n\`\`\`\n\nAlways prevent default for AJAX forms.",
    },
    {
      id: "js44-s3",
      title: "Form Validation",
      whyItMatters: "Client-side validation improves UX by catching errors before submission.",
      content: "HTML5 validation:\n\n\`\`\`html\n<input type=\"email\" required>\n<input type=\"number\" min=\"0\" max=\"100\">\n<input pattern=\"[A-Za-z]{3}\">\n\`\`\`\n\nJavaScript validation:\n\n\`\`\`javascript\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  \n  const name = form.elements.name.value;\n  if (name.length < 3) {\n    alert('Name must be at least 3 characters');\n    return;\n  }\n  \n  // Submit if valid\n});\n\`\`\`\n\nCheck validity:\n\n\`\`\`javascript\nif (form.checkValidity()) {\n  // Form is valid\n} else {\n  // Form has errors\n}\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js44-ex1", title: "Handle form submit", difficulty: 2, description: "Prevent form submission and log form data.", requirements: ["Add submit listener", "Prevent default", "Log values"], starterCode: { javascript: "const form = document.querySelector('form');\n\n// Handle submit, prevent default, log name and email\n\n" }, hints: ["addEventListener('submit')", "e.preventDefault()", "form.elements"], solution: { javascript: "const form = document.querySelector('form');\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  console.log('Name:', form.elements.name.value);\n  console.log('Email:', form.elements.email.value);\n});" }, solutionExplanation: "Prevent default stops page reload, allowing AJAX submission." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js44-q1", type: "mcq", question: "What prevents form page reload?", options: ["e.stop()", "e.preventDefault()", "e.stopPropagation()", "e.cancel()"], correctAnswer: 1, explanation: "preventDefault() stops the default form submission behavior.", difficulty: 1 }] },
  cheatSheet: [{ label: "Prevent submit", value: "e.preventDefault()" }, { label: "Get values", value: "form.elements.name.value" }, { label: "FormData", value: "new FormData(form)" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh45: Chapter = {
  id: "js-ch-45",
  number: 45,
  title: "Window Object",
  subtitle: "Browser window and global APIs.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-41"],
  learningObjectives: [
    "Understand the window object.",
    "Use localStorage and sessionStorage.",
    "Handle window events.",
    "Work with timers.",
    "Navigate between pages.",
  ],
  sections: [
    {
      id: "js45-s1",
      title: "Window Object Basics",
      whyItMatters: "The window object provides access to browser APIs and global functions.",
      content: "Window properties:\n\n\`\`\`javascript\nconsole.log(window.innerWidth); // Window width\nconsole.log(window.innerHeight); // Window height\nconsole.log(window.location.href); // Current URL\nconsole.log(window.history.length); // History entries\n\`\`\`\n\nGlobal functions are on window:\n\n\`\`\`javascript\nwindow.alert('Hello');\nwindow.setTimeout(fn, 1000);\nwindow.console.log('Hi');\n\`\`\`\n\nThese can be called without window prefix.",
    },
    {
      id: "js45-s2",
      title: "Storage APIs",
      whyItMatters: "Storage allows you to persist data in the browser between sessions.",
      content: "localStorage (persists across sessions):\n\n\`\`\`javascript\nlocalStorage.setItem('key', 'value');\nconst value = localStorage.getItem('key');\nlocalStorage.removeItem('key');\nlocalStorage.clear(); // Clear all\n\`\`\`\n\nsessionStorage (clears when tab closes):\n\n\`\`\`javascript\nsessionStorage.setItem('key', 'value');\nconst value = sessionStorage.getItem('key');\n\`\`\`\n\nOnly stores strings:\n\n\`\`\`javascript\nconst obj = { name: 'Alice' };\nlocalStorage.setItem('user', JSON.stringify(obj));\nconst user = JSON.parse(localStorage.getItem('user'));\n\`\`\`",
    },
    {
      id: "js45-s3",
      title: "Navigation",
      whyItMatters: "Programmatic navigation enables SPA behavior and redirects.",
      content: "Navigate to URL:\n\n\`\`\`javascript\nwindow.location.href = 'https://example.com';\nwindow.location.assign('https://example.com');\nwindow.location.replace('https://example.com'); // No back history\n\`\`\`\n\nReload page:\n\n\`\`\`javascript\nwindow.location.reload();\n\`\`\`\n\nHistory API:\n\n\`\`\`javascript\nwindow.history.back(); // Go back\nwindow.history.forward(); // Go forward\nwindow.history.go(-2); // Go back 2 pages\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js45-ex1", title: "Use localStorage", difficulty: 1, description: "Save and retrieve data from localStorage.", requirements: ["Set item", "Get item", "Parse JSON"], starterCode: { javascript: "// Save user object to localStorage\nconst user = { name: 'Alice', age: 30 };\n\n// Save and retrieve\n\n" }, hints: ["JSON.stringify", "JSON.parse"], solution: { javascript: "const user = { name: 'Alice', age: 30 };\nlocalStorage.setItem('user', JSON.stringify(user));\nconst retrieved = JSON.parse(localStorage.getItem('user'));\nconsole.log(retrieved);" }, solutionExplanation: "localStorage only stores strings, so objects must be stringified." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js45-q1", type: "mcq", question: "Which storage persists after browser close?", options: ["sessionStorage", "localStorage", "memory", "cache"], correctAnswer: 1, explanation: "localStorage persists across browser sessions until explicitly cleared.", difficulty: 1 }] },
  cheatSheet: [{ label: "localStorage", value: "setItem/getItem/removeItem" }, { label: "sessionStorage", value: "Clears on tab close" }, { label: "Navigate", value: "window.location.href" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh46: Chapter = {
  id: "js-ch-46",
  number: 46,
  title: "Geolocation API",
  subtitle: "Getting user location.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-45"],
  learningObjectives: [
    "Request user location.",
    "Handle location permissions.",
    "Track position changes.",
    "Calculate distance.",
    "Handle location errors.",
  ],
  sections: [
    {
      id: "js46-s1",
      title: "Getting Location",
      whyItMatters: "Geolocation enables location-based features like maps, local search, and weather.",
      content: "Request current position:\n\n\`\`\`javascript\nnavigator.geolocation.getCurrentPosition(\n  (position) => {\n    console.log('Latitude:', position.coords.latitude);\n    console.log('Longitude:', position.coords.longitude);\n  },\n  (error) => {\n    console.error('Error:', error.message);\n  }\n);\n\`\`\`\n\nPosition object:\n\n\`\`\`javascript\nposition.coords.latitude;\nposition.coords.longitude;\nposition.coords.accuracy; // in meters\nposition.coords.altitude;\nposition.coords.speed;\nposition.coords.heading;\n\`\`\`",
    },
    {
      id: "js46-s2",
      title: "Tracking Position",
      whyItMatters: "WatchPosition enables real-time tracking for navigation and fitness apps.",
      content: "Watch position changes:\n\n\`\`\`javascript\nconst watchId = navigator.geolocation.watchPosition(\n  (position) => {\n    console.log('New position:', position.coords);\n  },\n  (error) => {\n    console.error('Error:', error.message);\n  },\n  {\n    enableHighAccuracy: true,\n    maximumAge: 0,\n    timeout: 5000\n  }\n);\n\n// Stop watching\nnavigator.geolocation.clearWatch(watchId);\n\`\`\`\n\nOptions:\n- enableHighAccuracy: GPS if available\n- maximumAge: Accept cached position (ms)\n- timeout: Max wait time (ms)",
    },
    {
      id: "js46-s3",
      title: "Error Handling",
      whyItMatters: "Geolocation requires user permission and may fail if denied or unavailable.",
      content: "Error codes:\n\n\`\`\`javascript\n(error) => {\n  switch(error.code) {\n    case error.PERMISSION_DENIED:\n      console.log('User denied permission');\n      break;\n    case error.POSITION_UNAVAILABLE:\n      console.log('Position unavailable');\n      break;\n    case error.TIMEOUT:\n      console.log('Request timeout');\n      break;\n  }\n}\n\`\`\`\n\nCheck support:\n\n\`\`\`javascript\nif ('geolocation' in navigator) {\n  // Geolocation available\n} else {\n  // Not supported\n}\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js46-ex1", title: "Get location", difficulty: 2, description: "Request user location and display coordinates.", requirements: ["Check support", "Request position", "Handle errors"], starterCode: { javascript: "// Check geolocation support and get current position\n\n" }, hints: ["navigator.geolocation", "getCurrentPosition", "handle error"], solution: { javascript: "if ('geolocation' in navigator) {\n  navigator.geolocation.getCurrentPosition(\n    (pos) => console.log(pos.coords.latitude, pos.coords.longitude),\n    (err) => console.error(err.message)\n  );\n} else {\n  console.log('Geolocation not supported');\n}" }, solutionExplanation: "Always check support and handle errors for geolocation." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js46-q1", type: "mcq", question: "What stops position tracking?", options: ["stopWatch", "clearWatch", "cancelWatch", "removeWatch"], correctAnswer: 1, explanation: "clearWatch() stops watching position changes.", difficulty: 2 }] },
  cheatSheet: [{ label: "Get position", value: "getCurrentPosition(success, error)" }, { label: "Watch", value: "watchPosition()" }, { label: "Stop", value: "clearWatch(id)" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh47: Chapter = {
  id: "js-ch-47",
  number: 47,
  title: "Canvas API",
  subtitle: "Drawing graphics on the web.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-41"],
  learningObjectives: [
    "Create canvas context.",
    "Draw shapes and lines.",
    "Work with colors and gradients.",
    "Draw text and images.",
    "Handle canvas animations.",
  ],
  sections: [
    {
      id: "js47-s1",
      title: "Canvas Basics",
      whyItMatters: "Canvas enables high-performance 2D graphics for games, data visualization, and image manipulation.",
      content: "Get canvas context:\n\n\`\`\`javascript\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\`\`\`\n\nSet canvas size:\n\n\`\`\`javascript\ncanvas.width = 800;\ncanvas.height = 600;\n\`\`\`\n\nClear canvas:\n\n\`\`\`javascript\nctx.clearRect(0, 0, canvas.width, canvas.height);\n\`\`\`",
    },
    {
      id: "js47-s2",
      title: "Drawing Shapes",
      whyItMatters: "Shapes are the building blocks of canvas graphics.",
      content: "Draw rectangle:\n\n\`\`\`javascript\nctx.fillStyle = 'red';\nctx.fillRect(10, 10, 100, 50);\n\nctx.strokeStyle = 'blue';\nctx.lineWidth = 3;\nctx.strokeRect(10, 10, 100, 50);\n\`\`\`\n\nDraw circle:\n\n\`\`\`javascript\nctx.beginPath();\nctx.arc(100, 100, 50, 0, Math.PI * 2);\nctx.fillStyle = 'green';\nctx.fill();\n\`\`\`\n\nDraw line:\n\n\`\`\`javascript\nctx.beginPath();\nctx.moveTo(0, 0);\nctx.lineTo(100, 100);\nctx.stroke();\n\`\`\`",
    },
    {
      id: "js47-s3",
      title: "Animation",
      whyItMatters: "Animation brings canvas graphics to life.",
      content: "Animation loop:\n\n\`\`\`javascript\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  \n  // Draw frame\n  ctx.fillStyle = 'red';\n  ctx.fillRect(x, y, 50, 50);\n  \n  x += 5;\n  y += 5;\n  \n  requestAnimationFrame(animate);\n}\n\nanimate();\n\`\`\`\n\nrequestAnimationFrame:\n- Syncs with screen refresh rate (60fps)\n- Pauses when tab is inactive\n- More efficient than setInterval",
    },
  ],
  exercises: [
    { id: "js47-ex1", title: "Draw rectangle", difficulty: 2, description: "Draw a rectangle on canvas with specific color and position.", requirements: ["Get context", "Set fillStyle", "fillRect"], starterCode: { javascript: "const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\n// Draw a blue rectangle at (50, 50) with width 100, height 60\n\n" }, hints: ["ctx.fillStyle", "ctx.fillRect"], solution: { javascript: "const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = 'blue';\nctx.fillRect(50, 50, 100, 60);" }, solutionExplanation: "fillStyle sets color, fillRect draws filled rectangle." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js47-q1", type: "mcq", question: "What clears the canvas?", options: ["ctx.clear()", "ctx.clearRect()", "ctx.empty()", "ctx.reset()"], correctAnswer: 1, explanation: "clearRect() clears the specified rectangular area of the canvas.", difficulty: 1 }] },
  cheatSheet: [{ label: "Context", value: "getContext('2d')" }, { label: "Clear", value: "clearRect()" }, { label: "Animation", value: "requestAnimationFrame()" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh48: Chapter = {
  id: "js-ch-48",
  number: 48,
  title: "Drag and Drop API",
  subtitle: "Implementing drag and drop.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-43"],
  learningObjectives: [
    "Make elements draggable.",
    "Handle drag events.",
    "Handle drop zones.",
    "Transfer data during drag.",
    "Style drag feedback.",
  ],
  sections: [
    {
      id: "js48-s1",
      title: "Making Elements Draggable",
      whyItMatters: "Drag and drop provides intuitive UI for moving, sorting, and organizing content.",
      content: "Make element draggable:\n\n\`\`\`html\n<div draggable=\"true\" id=\"drag-item\">Drag me</div>\n\`\`\`\n\nDrag events:\n\n\`\`\`javascript\nconst item = document.querySelector('#drag-item');\n\nitem.addEventListener('dragstart', (e) => {\n  e.dataTransfer.setData('text/plain', e.target.id);\n  e.target.classList.add('dragging');\n});\n\nitem.addEventListener('dragend', (e) => {\n  e.target.classList.remove('dragging');\n});\n\`\`\`",
    },
    {
      id: "js48-s2",
      title: "Drop Zones",
      whyItMatters: "Drop zones define where draggable elements can be dropped.",
      content: "Create drop zone:\n\n\`\`\`javascript\nconst dropZone = document.querySelector('.drop-zone');\n\ndropZone.addEventListener('dragover', (e) => {\n  e.preventDefault(); // Required to allow dropping\n  e.dataTransfer.dropEffect = 'move';\n});\n\ndropZone.addEventListener('drop', (e) => {\n  e.preventDefault();\n  const id = e.dataTransfer.getData('text/plain');\n  const item = document.getElementById(id);\n  dropZone.appendChild(item);\n});\n\`\`\`\n\npreventDefault in dragover is required to allow dropping.",
    },
    {
      id: "js48-s3",
      title: "Visual Feedback",
      whyItMatters: "Visual feedback improves UX by showing draggable state and valid drop zones.",
      content: "Style during drag:\n\n\`\`\`css\n.dragging {\n  opacity: 0.5;\n}\n\n.drop-zone.drag-over {\n  background: #e0e0e0;\n  border: 2px dashed blue;\n}\n\`\`\`\n\nJavaScript:\n\n\`\`\`javascript\ndropZone.addEventListener('dragenter', () => {\n  dropZone.classList.add('drag-over');\n});\n\ndropZone.addEventListener('dragleave', () => {\n  dropZone.classList.remove('drag-over');\n});\n\ndropZone.addEventListener('drop', () => {\n  dropZone.classList.remove('drag-over');\n});\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js48-ex1", title: "Basic drag and drop", difficulty: 3, description: "Create a draggable element and a drop zone.", requirements: ["Set draggable", "Handle dragstart", "Handle dragover and drop"], starterCode: { javascript: "// Make #item draggable and drop it into #zone\n\n" }, hints: ["draggable='true'", "preventDefault in dragover", "getData/setData"], solution: { javascript: "const item = document.querySelector('#item');\nconst zone = document.querySelector('#zone');\n\nitem.draggable = true;\nitem.addEventListener('dragstart', (e) => {\n  e.dataTransfer.setData('text/plain', e.target.id);\n});\n\nzone.addEventListener('dragover', (e) => e.preventDefault());\nzone.addEventListener('drop', (e) => {\n  e.preventDefault();\n  const id = e.dataTransfer.getData('text/plain');\n  zone.appendChild(document.getElementById(id));\n});" }, solutionExplanation: "draggable attribute, dataTransfer for data, preventDefault to allow drop." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js48-q1", type: "mcq", question: "What allows dropping?", options: ["draggable attribute", "preventDefault in dragover", "setData", "getData"], correctAnswer: 1, explanation: "preventDefault() in dragover event is required to allow dropping.", difficulty: 2 }] },
  cheatSheet: [{ label: "Draggable", value: "draggable=\"true\"" }, { label: "Drag start", value: "dragstart event" }, { label: "Allow drop", value: "e.preventDefault() in dragover" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh49: Chapter = {
  id: "js-ch-49",
  number: 49,
  title: "Intersection Observer",
  subtitle: "Detecting element visibility.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-41"],
  learningObjectives: [
    "Create intersection observers.",
    "Detect when elements enter viewport.",
    "Implement lazy loading.",
    "Implement infinite scroll.",
    "Handle observer callbacks.",
  ],
  sections: [
    {
      id: "js49-s1",
      title: "Intersection Observer Basics",
      whyItMatters: "Intersection Observer efficiently detects when elements enter or leave the viewport, enabling lazy loading and animations.",
      content: "Create observer:\n\n\`\`\`javascript\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      console.log('Element is visible:', entry.target);\n    }\n  });\n});\n\nconst element = document.querySelector('.target');\nobserver.observe(element);\n\`\`\`\n\nEntry properties:\n- isIntersecting: boolean\n- target: the element\n- intersectionRatio: 0-1\n- boundingClientRect: element's rect\n- intersectionRect: visible portion",
    },
    {
      id: "js49-s2",
      title: "Lazy Loading",
      whyItMatters: "Lazy loading images improves performance by loading only what's visible.",
      content: "Lazy load images:\n\n\`\`\`javascript\nconst imgObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      imgObserver.unobserve(img);\n    }\n  });\n});\n\ndocument.querySelectorAll('img[data-src]').forEach(img => {\n  imgObserver.observe(img);\n});\n\`\`\`\n\nHTML:\n\n\`\`\`html\n<img data-src=\"image.jpg\" alt=\"Lazy loaded\">\n\`\`\`",
    },
    {
      id: "js49-s3",
      title: "Infinite Scroll",
      whyItMatters: "Infinite scroll loads more content as user scrolls, improving engagement.",
      content: "Detect scroll to bottom:\n\n\`\`\`javascript\nconst sentinel = document.querySelector('#sentinel');\n\nconst observer = new IntersectionObserver((entries) => {\n  if (entries[0].isIntersecting) {\n    loadMoreContent();\n  }\n});\n\nobserver.observe(sentinel);\n\nfunction loadMoreContent() {\n  // Fetch and append more items\n}\n\`\`\`\n\nPlace sentinel at bottom of content list.",
    },
  ],
  exercises: [
    { id: "js49-ex1", title: "Lazy load images", difficulty: 2, description: "Implement lazy loading for images with data-src attribute.", requirements: ["Create observer", "Check isIntersecting", "Set src and unobserve"], starterCode: { javascript: "// Lazy load images with data-src attribute\n\n" }, hints: ["IntersectionObserver", "dataset.src", "unobserve"], solution: { javascript: "const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  });\n});\n\ndocument.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));" }, solutionExplanation: "Observer detects visibility, then loads image and stops observing." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js49-q1", type: "mcq", question: "Which API detects viewport visibility?", options: ["MutationObserver", "IntersectionObserver", "ResizeObserver", "PerformanceObserver"], correctAnswer: 1, explanation: "IntersectionObserver detects when elements enter the viewport.", difficulty: 2 }] },
  cheatSheet: [{ label: "Create", value: "new IntersectionObserver()" }, { label: "Observe", value: "observer.observe(element)" }, { label: "Stop", value: "observer.unobserve()" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh50: Chapter = {
  id: "js-ch-50",
  number: 50,
  title: "History API",
  subtitle: "Managing browser history.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-45"],
  learningObjectives: [
    "Use pushState and replaceState.",
    "Handle popstate events.",
    "Implement SPA navigation.",
    "Manage history entries.",
    "Understand browser back/forward.",
  ],
  sections: [
    {
      id: "js50-s1",
      title: "PushState and ReplaceState",
      whyItMatters: "History API enables single-page applications to change URL without page reload.",
      content: "Add history entry:\n\n\`\`\`javascript\nconst state = { page: 'about' };\nconst url = '/about';\n\nwindow.history.pushState(state, '', url);\n// URL changes to /about, no page reload\n\`\`\`\n\nReplace current entry:\n\n\`\`\`javascript\nwindow.history.replaceState(state, '', url);\n// Replaces current history entry\n\`\`\`\n\nState object:\n\n\`\`\`javascript\nwindow.history.state; // Access current state\n\`\`\`",
    },
    {
      id: "js50-s2",
      title: "Popstate Event",
      whyItMatters: "Popstate event fires when user navigates with back/forward buttons.",
      content: "Handle navigation:\n\n\`\`\`javascript\nwindow.addEventListener('popstate', (e) => {\n  console.log('Navigated to:', e.state);\n  // Update UI based on state\n  loadPage(e.state.page);\n});\n\`\`\`\n\nNavigation flow:\n1. User clicks back\n2. popstate fires\n3. Event contains previous state\n4. Update UI accordingly",
    },
    {
      id: "js50-s3",
      title: "SPA Navigation",
      whyItMatters: "SPA navigation provides fast, app-like experience without page reloads.",
      content: "Navigate function:\n\n\`\`\`javascript\nfunction navigate(page, data = {}) {\n  const state = { page, data };\n  const url = `/${page}`;\n  \n  window.history.pushState(state, '', url);\n  loadPage(page);\n}\n\nfunction loadPage(page) {\n  // Update DOM based on page\n  document.querySelector('#app').innerHTML = getPageContent(page);\n}\n\n// Usage\nnavigate('about', { id: 1 });\n\`\`\`\n\nHandle initial load:\n\n\`\`\`javascript\nwindow.addEventListener('load', () => {\n  loadPage(window.location.pathname.slice(1));\n});\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js50-ex1", title: "Implement navigation", difficulty: 2, description: "Create a navigate function that uses pushState and updates content.", requirements: ["Use pushState", "Update DOM", "Handle popstate"], starterCode: { javascript: "// Create navigate function for SPA\n\n" }, hints: ["pushState", "popstate listener", "update content"], solution: { javascript: "function navigate(page) {\n  window.history.pushState({ page }, '', `/${page}`);\n  document.querySelector('#app').textContent = page;\n}\n\nwindow.addEventListener('popstate', (e) => {\n  document.querySelector('#app').textContent = e.state.page;\n});" }, solutionExplanation: "pushState changes URL, popstate handles back/forward navigation." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js50-q1", type: "mcq", question: "Which causes page reload?", options: ["pushState", "replaceState", "window.location.href", "popstate"], correctAnswer: 2, explanation: "window.location.href causes page reload, pushState does not.", difficulty: 2 }] },
  cheatSheet: [{ label: "Add entry", value: "pushState(state, '', url)" }, { label: "Replace", value: "replaceState(state, '', url)" }, { label: "Handle nav", value: "popstate event" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh51: Chapter = {
  id: "js-ch-51",
  number: 51,
  title: "Web Storage Security",
  subtitle: "Secure data handling in browser storage.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-45"],
  learningObjectives: [
    "Understand storage security risks.",
    "Avoid storing sensitive data.",
    "Use session storage appropriately.",
    "Implement storage quotas.",
    "Clear storage securely.",
  ],
  sections: [
    {
      id: "js51-s1",
      title: "Storage Security Risks",
      whyItMatters: "Browser storage is not secure for sensitive data like passwords and tokens.",
      content: "Risks:\n- XSS attacks can read localStorage\n- Data persists across sessions\n- No encryption by default\n- Accessible by any script on domain\n\nNever store:\n- Passwords\n- API keys\n- Session tokens\n- Credit card numbers\n- Personal identifiers",
    },
    {
      id: "js51-s2",
      title: "Best Practices",
      whyItMatters: "Following best practices prevents security vulnerabilities.",
      content: "Use sessionStorage for sensitive data:\n\n\`\`\`javascript\n// Cleared when tab closes\nsessionStorage.setItem('tempToken', token);\n\`\`\`\n\nUse HttpOnly cookies for auth:\n\n\`\`\`javascript\n// Set by server, not accessible to JavaScript\n// Set-Cookie: token=xxx; HttpOnly; Secure\n\`\`\`\n\nValidate and sanitize data:\n\n\`\`\`javascript\nfunction setItem(key, value) {\n  // Validate input\n  if (typeof value !== 'string') return;\n  if (value.length > 1000) return;\n  \n  localStorage.setItem(key, value);\n}\n\`\`\`",
    },
    {
      id: "js51-s3",
      title: "Storage Management",
      whyItMatters: "Managing storage prevents quota errors and improves performance.",
      content: "Check quota:\n\n\`\`\`javascript\nif (localStorage.length > 50) {\n  console.warn('Storage nearly full');\n}\n\`\`\`\n\nHandle quota errors:\n\n\`\`\`javascript\ntry {\n  localStorage.setItem('key', value);\n} catch (e) {\n  if (e.name === 'QuotaExceededError') {\n    console.error('Storage full');\n    // Clear old data or show error\n  }\n}\n\`\`\`\n\nClear storage:\n\n\`\`\`javascript\nlocalStorage.clear(); // Clear all\nlocalStorage.removeItem('key'); // Remove specific\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js51-ex1", title: "Secure storage", difficulty: 2, description: "Implement a secure storage function that validates input.", requirements: ["Validate type", "Check length", "Handle errors"], starterCode: { javascript: "function secureSet(key, value) {\n  // Validate and store securely\n}\n\n" }, hints: ["typeof check", "length check", "try/catch"], solution: { javascript: "function secureSet(key, value) {\n  if (typeof value !== 'string') return false;\n  if (value.length > 1000) return false;\n  try {\n    localStorage.setItem(key, value);\n    return true;\n  } catch (e) {\n    console.error('Storage error:', e);\n    return false;\n  }\n}" }, solutionExplanation: "Validation prevents malicious data, error handling manages quota." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js51-q1", type: "mcq", question: "Which is safe to store?", options: ["Password", "API key", "Session token", "User preferences"], correctAnswer: 3, explanation: "User preferences are non-sensitive data. Never store passwords, API keys, or tokens.", difficulty: 2 }] },
  cheatSheet: [{ label: "Never store", value: "Passwords, tokens, API keys" }, { label: "Use HttpOnly", value: "Cookies for auth" }, { label: "Validate", value: "Input before storing" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh52: Chapter = {
  id: "js-ch-52",
  number: 52,
  title: "Performance APIs",
  subtitle: "Measuring and optimizing performance.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-31"],
  learningObjectives: [
    "Use Performance API.",
    "Measure execution time.",
    "Profile JavaScript performance.",
    "Optimize DOM operations.",
    "Use requestAnimationFrame efficiently.",
  ],
  sections: [
    {
      id: "js52-s1",
      title: "Performance API",
      whyItMatters: "Performance API helps measure and optimize application speed.",
      content: "Measure timing:\n\n\`\`\`javascript\nconst start = performance.now();\n\n// Do work\nfor (let i = 0; i < 1000000; i++) { }\n\nconst end = performance.now();\nconsole.log(`Duration: ${end - start}ms`);\n\`\`\`\n\nPerformance marks:\n\n\`\`\`javascript\nperformance.mark('start-work');\n\n// Do work\n\nperformance.mark('end-work');\nperformance.measure('work', 'start-work', 'end-work');\n\nconst measure = performance.getEntriesByName('work')[0];\nconsole.log(measure.duration);\n\`\`\`",
    },
    {
      id: "js52-s2",
      title: "DOM Performance",
      whyItMatters: "DOM operations are expensive. Optimizing them improves performance significantly.",
      content: "Batch DOM reads:\n\n\`\`\`javascript\n// Bad - causes multiple reflows\nconst width1 = el1.offsetWidth;\nconst width2 = el2.offsetWidth;\nconst width3 = el3.offsetWidth;\n\n// Good - batch reads\nconst widths = [el1, el2, el3].map(el => el.offsetWidth);\n\`\`\`\n\nUse DocumentFragment:\n\n\`\`\`javascript\nconst fragment = document.createDocumentFragment();\n\nfor (let i = 0; i < 100; i++) {\n  const div = document.createElement('div');\n  fragment.appendChild(div);\n}\n\ncontainer.appendChild(fragment); // Single reflow\n\`\`\`",
    },
    {
      id: "js52-s3",
      title: "Animation Performance",
      whyItMatters: "Efficient animations ensure smooth 60fps performance.",
      content: "Use requestAnimationFrame:\n\n\`\`\`javascript\nfunction animate() {\n  // Update and draw\n  requestAnimationFrame(animate);\n}\n\nrequestAnimationFrame(animate);\n\`\`\`\n\nUse CSS transforms:\n\n\`\`\`css\n/* GPU accelerated */\n.element {\n  transform: translateX(100px);\n  opacity: 0.5;\n}\n\n/* Avoid - causes reflow */\n.element {\n  left: 100px;\n}\n\`\`\`\n\nDebounce resize events:\n\n\`\`\`javascript\nlet resizeTimeout;\nwindow.addEventListener('resize', () => {\n  clearTimeout(resizeTimeout);\n  resizeTimeout = setTimeout(handleResize, 100);\n});\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js52-ex1", title: "Measure performance", difficulty: 2, description: "Measure execution time of a function using Performance API.", requirements: ["Use performance.now()", "Mark start and end", "Calculate duration"], starterCode: { javascript: "function measurePerformance(fn) {\n  // Measure and return duration\n}\n\n" }, hints: ["performance.mark()", "performance.measure()", "measure.duration"], solution: { javascript: "function measurePerformance(fn) {\n  performance.mark('start');\n  fn();\n  performance.mark('end');\n  performance.measure('fn', 'start', 'end');\n  const measure = performance.getEntriesByName('fn')[0];\n  return measure.duration;\n}" }, solutionExplanation: "Performance API marks and measures provide accurate timing." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js52-q1", type: "mcq", question: "Which reduces reflows?", options: ["DocumentFragment", "Multiple appends", "Inline styles", "setInterval"], correctAnswer: 0, explanation: "DocumentFragment batches DOM operations into a single reflow.", difficulty: 2 }] },
  cheatSheet: [{ label: "Mark", value: "performance.mark()" }, { label: "Measure", value: "performance.measure()" }, { label: "Fragment", value: "createDocumentFragment()" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh53: Chapter = {
  id: "js-ch-53",
  number: 53,
  title: "Accessibility (A11y)",
  subtitle: "Making web content accessible.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-41"],
  learningObjectives: [
    "Understand ARIA attributes.",
    "Use semantic HTML.",
    "Manage focus.",
    "Handle keyboard navigation.",
    "Test accessibility.",
  ],
  sections: [
    {
      id: "js53-s1",
      title: "Semantic HTML",
      whyItMatters: "Semantic HTML provides built-in accessibility for screen readers and assistive technologies.",
      content: "Use semantic elements:\n\n\`\`\`html\n<!-- Good -->\n<nav aria-label=\"Main\">\n  <ul>\n    <li><a href=\"/\">Home</a></li>\n  </ul>\n</nav>\n\n<main>\n  <article>\n    <h1>Title</h1>\n  </article>\n</main>\n\n<!-- Bad -->\n<div class=\"nav\">\n  <div class=\"link\" onclick=\"goHome()\">Home</div>\n</div>\n\`\`\`\n\nUse headings correctly:\n\n\`\`\`html\n<h1>Main title</h1>\n  <h2>Section</h2>\n    <h3>Subsection</h3>\n\`\`\`",
    },
    {
      id: "js53-s2",
      title: "ARIA Attributes",
      whyItMatters: "ARIA fills accessibility gaps when semantic HTML isn't enough.",
      content: "Common ARIA attributes:\n\n\`\`\`html\n<button aria-label=\"Close dialog\" aria-expanded=\"false\">\n  ×\n</button>\n\n<div role=\"alert\" aria-live=\"polite\">\n  Message here\n</div>\n\n<input aria-required=\"true\" aria-invalid=\"false\">\n\`\`\`\n\nDynamic content:\n\n\`\`\`javascript\n// Announce changes to screen readers\nconst liveRegion = document.querySelector('[aria-live]');\nliveRegion.textContent = 'New message';\n\`\`\`",
    },
    {
      id: "js53-s3",
      title: "Keyboard Navigation",
      whyItMatters: "Keyboard navigation is essential for users who can't use a mouse.",
      content: "Focus management:\n\n\`\`\`javascript\n// Set focus\nelement.focus();\n\n// Check focus\ndocument.activeElement === element;\n\n// Focus trap in modal\nfunction trapFocus(modal) {\n  const focusable = modal.querySelectorAll('button, [href], input');\n  const first = focusable[0];\n  const last = focusable[focusable.length - 1];\n  \n  modal.addEventListener('keydown', (e) => {\n    if (e.key === 'Tab') {\n      if (e.shiftKey && document.activeElement === first) {\n        e.preventDefault();\n        last.focus();\n      } else if (!e.shiftKey && document.activeElement === last) {\n        e.preventDefault();\n        first.focus();\n      }\n    }\n  });\n}\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js53-ex1", title: "Add ARIA", difficulty: 1, description: "Add appropriate ARIA attributes to a button element.", requirements: ["Add aria-label", "Add aria-expanded", "Toggle on click"], starterCode: { javascript: "const button = document.querySelector('.toggle-button');\n\n// Add ARIA attributes and toggle on click\n\n" }, hints: ["setAttribute", "aria-label", "aria-expanded"], solution: { javascript: "const button = document.querySelector('.toggle-button');\nbutton.setAttribute('aria-label', 'Toggle menu');\nbutton.setAttribute('aria-expanded', 'false');\n\nbutton.addEventListener('click', () => {\n  const expanded = button.getAttribute('aria-expanded') === 'true';\n  button.setAttribute('aria-expanded', !expanded);\n});" }, solutionExplanation: "ARIA attributes communicate state to assistive technologies." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js53-q1", type: "mcq", question: "Which improves keyboard nav?", options: ["onclick", "tabindex", "class", "id"], correctAnswer: 1, explanation: "tabindex makes elements focusable and part of tab order.", difficulty: 1 }] },
  cheatSheet: [{ label: "Label", value: "aria-label" }, { label: "Live", value: "aria-live" }, { label: "Focus", value: "element.focus()" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh54: Chapter = {
  id: "js-ch-54",
  number: 54,
  title: "DOM Best Practices",
  subtitle: "Writing efficient and maintainable DOM code.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-42"],
  learningObjectives: [
    "Minimize DOM reflows.",
    "Use event delegation.",
    "Clean up event listeners.",
    "Avoid memory leaks.",
    "Optimize selectors.",
  ],
  sections: [
    {
      id: "js54-s1",
      title: "Minimizing Reflows",
      whyItMatters: "Reflows are expensive. Minimizing them improves performance.",
      content: "Batch DOM writes:\n\n\`\`\`javascript\n// Bad - causes reflow each time\nfor (let i = 0; i < 100; i++) {\n  container.appendChild(createItem(i));\n}\n\n// Good - single reflow\nconst fragment = document.createDocumentFragment();\nfor (let i = 0; i < 100; i++) {\n  fragment.appendChild(createItem(i));\n}\ncontainer.appendChild(fragment);\n\`\`\`\n\nRead DOM first, then write:\n\n\`\`\`javascript\n// Bad - interleaved reads/writes\nel.style.width = el.offsetWidth + 'px';\n\n// Good - batch reads\nconst width = el.offsetWidth;\nel.style.width = width + 'px';\n\`\`\`",
    },
    {
      id: "js54-s2",
      title: "Event Delegation",
      whyItMatters: "Delegation reduces memory usage and handles dynamic elements.",
      content: "Use delegation instead of many listeners:\n\n\`\`\`javascript\n// Bad - listener on each item\nitems.forEach(item => {\n  item.addEventListener('click', handleClick);\n});\n\n// Good - single listener on parent\ncontainer.addEventListener('click', (e) => {\n  if (e.target.matches('.item')) {\n    handleClick(e);\n  }\n});\n\`\`\`\n\nWorks for dynamically added elements too.",
    },
    {
      id: "js54-s3",
      title: "Memory Management",
      whyItMatters: "Improper cleanup causes memory leaks in long-running applications.",
      content: "Remove event listeners:\n\n\`\`\`javascript\nconst handler = () => console.log('Clicked');\nbutton.addEventListener('click', handler);\n\n// Later\nbutton.removeEventListener('click', handler);\n\`\`\`\n\nClean up on component unmount:\n\n\`\`\`javascript\nclass Component {\n  constructor(element) {\n    this.element = element;\n    this.handleClick = this.handleClick.bind(this);\n    this.element.addEventListener('click', this.handleClick);\n  }\n  \n  destroy() {\n    this.element.removeEventListener('click', this.handleClick);\n  }\n}\n\`\`\`\n\nUse WeakMap for element data:\n\n\`\`\`javascript\nconst elementData = new WeakMap();\nelementData.set(element, { data: 'value' });\n// Automatically cleaned when element is removed\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js54-ex1", title: "Optimize DOM operations", difficulty: 2, description: "Optimize a loop that appends many elements.", requirements: ["Use DocumentFragment", "Batch operations", "Single append"], starterCode: { javascript: "// Optimize: append 100 items to container efficiently\nconst container = document.querySelector('.container');\n\n" }, hints: ["createDocumentFragment", "Loop", "append fragment"], solution: { javascript: "const container = document.querySelector('.container');\nconst fragment = document.createDocumentFragment();\n\nfor (let i = 0; i < 100; i++) {\n  const item = document.createElement('div');\n  item.textContent = `Item ${i}`;\n  fragment.appendChild(item);\n}\n\ncontainer.appendChild(fragment);" }, solutionExplanation: "DocumentFragment batches DOM operations into a single reflow." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js54-q1", type: "mcq", question: "Which is best for dynamic elements?", options: ["innerHTML with user input", "createElement", "document.write", "outerHTML"], correctAnswer: 1, explanation: "createElement is safer than innerHTML for dynamic element creation.", difficulty: 2 }] },
  cheatSheet: [{ label: "Batch", value: "DocumentFragment" }, { label: "Delegate", value: "Event delegation" }, { label: "Cleanup", value: "removeEventListener" }],
  partLabel: "Part 5: DOM & Browser APIs",
};

export const jsCh55: Chapter = {
  id: "js-ch-55",
  number: 55,
  title: "DOM Project: Interactive Todo App",
  subtitle: "Building a complete DOM-manipulated application.",
  difficulty: "Advanced",
  estimatedMinutes: 90,
  xpReward: 250,
  prerequisites: ["js-ch-42", "js-ch-43", "js-ch-44"],
  learningObjectives: [
    "Build a complete todo application.",
    "Implement CRUD operations.",
    "Handle form submission.",
    "Use localStorage for persistence.",
    "Implement filtering and sorting.",
  ],
  sections: [
    {
      id: "js55-s1",
      title: "Project Setup",
      whyItMatters: "Starting with a solid structure ensures maintainable code.",
      content: "HTML structure:\n\n\`\`\`html\n<div id=\"app\">\n  <form id=\"todo-form\">\n    <input type=\"text\" id=\"todo-input\" placeholder=\"Add todo...\">\n    <button type=\"submit\">Add</button>\n  </form>\n  \n  <div id=\"filters\">\n    <button data-filter=\"all\">All</button>\n    <button data-filter=\"active\">Active</button>\n    <button data-filter=\"completed\">Completed</button>\n  </div>\n  \n  <ul id=\"todo-list\"></ul>\n</div>\n\`\`\`\n\nCSS for feedback:\n\n\`\`\`css\n.completed { text-decoration: line-through; opacity: 0.7; }\n\`\`\`",
    },
    {
      id: "js55-s2",
      title: "CRUD Operations",
      whyItMatters: "CRUD (Create, Read, Update, Delete) is fundamental to data-driven applications.",
      content: "Create todo:\n\n\`\`\`javascript\nfunction addTodo(text) {\n  const todo = {\n    id: Date.now(),\n    text,\n    completed: false,\n    createdAt: new Date().toISOString()\n  };\n  \n  todos.push(todo);\n  saveTodos();\n  renderTodos();\n}\n\`\`\`\n\nUpdate todo:\n\n\`\`\`javascript\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (todo) {\n    todo.completed = !todo.completed;\n    saveTodos();\n    renderTodos();\n  }\n}\n\`\`\`\n\nDelete todo:\n\n\`\`\`javascript\nfunction deleteTodo(id) {\n  todos = todos.filter(t => t.id !== id);\n  saveTodos();\n  renderTodos();\n}\n\`\`\`",
    },
    {
      id: "js55-s3",
      title: "Event Handling",
      whyItMatters: "Proper event handling enables user interaction.",
      content: "Form submission:\n\n\`\`\`javascript\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const input = document.querySelector('#todo-input');\n  const text = input.value.trim();\n  \n  if (text) {\n    addTodo(text);\n    input.value = '';\n  }\n});\n\`\`\`\n\nTodo list clicks (delegation):\n\n\`\`\`javascript\nlist.addEventListener('click', (e) => {\n  const item = e.target.closest('li');\n  const id = parseInt(item.dataset.id);\n  \n  if (e.target.matches('.delete-btn')) {\n    deleteTodo(id);\n  } else {\n    toggleTodo(id);\n  }\n});\n\`\`\`\n\nFilter buttons:\n\n\`\`\`javascript\nfilters.addEventListener('click', (e) => {\n  if (e.target.matches('button')) {\n    currentFilter = e.target.dataset.filter;\n    renderTodos();\n  }\n});\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js55-ex1", title: "Complete todo app", difficulty: 3, description: "Build a fully functional todo app with persistence.", requirements: ["Add todos", "Toggle completion", "Delete todos", "Persist to localStorage"], starterCode: { javascript: "// Build complete todo app\n\n" }, hints: ["Form submit handler", "Event delegation", "localStorage"], solution: { javascript: "let todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nfunction saveTodos() {\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nfunction addTodo(text) {\n  todos.push({ id: Date.now(), text, completed: false });\n  saveTodos();\n  render();\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  todo.completed = !todo.completed;\n  saveTodos();\n  render();\n}\n\nfunction deleteTodo(id) {\n  todos = todos.filter(t => t.id !== id);\n  saveTodos();\n  render();\n}\n\nfunction render() {\n  const list = document.querySelector('#todo-list');\n  list.innerHTML = todos.map(t => \n    `<li data-id=\"${t.id}\" class=\"${t.completed ? 'completed' : ''}\">\n      ${t.text}\n      <button class=\"delete-btn\">×</button>\n    </li>\n  ).join('');\n}\n\ndocument.querySelector('#todo-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const input = e.target.querySelector('input');\n  if (input.value.trim()) {\n    addTodo(input.value.trim());\n    input.value = '';\n  }\n});\n\ndocument.querySelector('#todo-list').addEventListener('click', (e) => {\n  const li = e.target.closest('li');\n  const id = parseInt(li.dataset.id);\n  if (e.target.matches('.delete-btn')) {\n    deleteTodo(id);\n  } else {\n    toggleTodo(id);\n  }\n});\n\nrender();" }, solutionExplanation: "Complete CRUD with localStorage persistence and event delegation." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js55-q1", type: "mcq", question: "Which prevents default form submission?", options: ["return false", "e.preventDefault()", "e.stopPropagation()", "stopImmediatePropagation()"], correctAnswer: 1, explanation: "e.preventDefault() prevents the default form submission.", difficulty: 1 }, { id: "js55-q2", type: "mcq", question: "Which API detects viewport visibility?", options: ["MutationObserver", "IntersectionObserver", "ResizeObserver", "PerformanceObserver"], correctAnswer: 1, explanation: "IntersectionObserver detects when elements enter the viewport.", difficulty: 2 }, { id: "js55-q3", type: "mcq", question: "Which is best for dynamic elements?", options: ["innerHTML with user input", "createElement", "document.write", "outerHTML"], correctAnswer: 1, explanation: "createElement is safer than innerHTML for dynamic element creation.", difficulty: 2 }] },
  cheatSheet: [{ label: "Create", value: "document.createElement()" }, { label: "Delegate", value: "Event delegation" }, { label: "Persist", value: "localStorage" }],
  partLabel: "Part 5: DOM & Browser APIs",
};
