# CODEMASTERY — HTML DOM TRACK ADDITION
# Add HTML DOM as a new track to the existing CodeMastery platform
# 60+ chapters · Every method and property from the official HTML DOM reference
# Reference: https://www.w3schools.com/jsref/dom_obj_document.asp
# Covers: Document Object, Element Object, Attr Object, Event Object,
#         Window Object, Navigator, Screen, History, Location, HTMLElement,
#         Console Object, Style Object

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete HTML DOM learning track. The DOM (Document Object Model) is what makes web pages interactive — it is the bridge between HTML and JavaScript.

This track assumes the student knows basic JavaScript (variables, functions, loops). Show a "📋 Prerequisites" notice: "You need basic JavaScript knowledge for this track. Complete our JavaScript track or have equivalent experience." Link to the JS track but do NOT lock this track.

This is not just a reference track — every chapter teaches WHY the DOM works the way it does, not just HOW to use each method. Students should finish this track understanding the browser rendering model deeply.

UNIQUE FEATURE — DOM VISUALIZER: Every lesson has a live DOM tree visualizer panel showing the actual DOM structure of the HTML being used in examples. When JavaScript modifies the DOM, the tree updates in real-time.

---

## COMPILER SETUP FOR HTML DOM

Use the EXISTING HTML/CSS/JS 4-panel compiler, but add two extra panels unique to the DOM track:

DOM Visualizer Panel (unique to DOM track):
Build /components/compiler/DomVisualizer.tsx:
- Parses the HTML in the preview iframe using postMessage
- Renders a visual tree: html → head, body → each element with tag name, id, class, text content
- Color-coded: elements=blue, text nodes=green, attribute nodes=orange, comment nodes=grey
- Click any node in the tree → highlights it in the preview iframe with a red outline
- Click any element in the preview → highlights its node in the tree
- Shows node properties panel: nodeName, nodeType, nodeValue, childNodes count, parentNode
- Updates in real-time as JavaScript modifies the DOM

Event Monitor Panel (unique to DOM track):
- Shows all events fired in the preview (click, keypress, input, change, scroll etc.)
- Each event: event type, target element, timestamp, event properties
- Pause/resume capturing, clear log
- Used in all event handling chapters

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/htmldom-curriculum.ts.
Add "htmldom" to Track type union in types.ts.

Track metadata:
- id: "htmldom"
- title: "HTML DOM"
- tagline: "Master the bridge between HTML and JavaScript"
- icon: "🌳"
- color: "#F0DB4F"
- totalChapters: 60
- estimatedHours: 55

---

## SPECIAL COMPONENT — DomMethodRef

Build /components/lesson/DomMethodRef.tsx — unique to DOM track:
Shows for every DOM method/property:
1. Method signature: element.addEventListener(type, listener, options)
2. Parameters table: name | type | required | description
3. Returns: what is returned (Element, NodeList, string, void, etc.)
4. Browser support: Chrome/Firefox/Safari/Edge compatibility
5. Live runnable example (HTML + JS in mini compiler WITH DOM visualizer)
6. Common use cases
7. Common mistakes
8. Related methods/properties

---

## FULL CURRICULUM — 60 CHAPTERS

=== PART 1: UNDERSTANDING THE DOM (Chapters 1–5) ===

Chapter 1: What Is the DOM? — The Complete Picture
Difficulty: Beginner | XP: 100 | Time: 30 min

Learning objectives:
- Understand what the DOM is and how it is created
- Know the difference between HTML source and the DOM
- Understand node types (Element, Text, Attribute, Comment, Document)
- Understand the DOM tree structure
- Know why the DOM exists

Sections (400–600 words each, zero placeholders):

1.1 — What Is the DOM?
Real-world analogy: An HTML file is like a building blueprint. The DOM is the actual building constructed from that blueprint. Blueprints cannot be changed after printing, but a real building can be renovated — you can add rooms, repaint walls, remove doors. The DOM is what JavaScript renovates.

Content: When a browser loads an HTML file, it does NOT display the raw HTML text. Instead, it parses the HTML and builds a tree-shaped data structure in memory called the DOM — Document Object Model. The DOM is a living representation of the page. JavaScript can read from it, write to it, add to it, remove from it, and respond to user interactions with it. Key insight: the DOM and HTML source are NOT the same thing. If JavaScript adds 100 new paragraphs to the DOM, the original HTML file on the server still has zero. If you right-click a page and "View Source" you see the original HTML. If you open DevTools Elements panel, you see the LIVE DOM. These can be completely different.

1.2 — How the Browser Creates the DOM
Step-by-step browser rendering pipeline: 1) Download HTML bytes 2) Decode bytes to characters 3) Tokenize characters to tokens (<div>, </p>, "text" etc.) 4) Build nodes from tokens 5) Link nodes into the DOM tree 6) Download CSS, build CSSOM 7) Combine DOM + CSSOM = Render Tree 8) Layout (calculate positions) 9) Paint (draw pixels). JavaScript can interrupt this pipeline at step 4-5 if a synchronous <script> tag is encountered (why scripts should be deferred or placed at end of body).

1.3 — Node Types — Everything Is a Node
In the DOM, EVERYTHING is a node. Types:
- ELEMENT_NODE (1): HTML elements (<div>, <p>, <a>)
- TEXT_NODE (3): Text content inside elements
- COMMENT_NODE (8): <!-- HTML comments -->
- DOCUMENT_NODE (9): The document object itself
- DOCUMENT_TYPE_NODE (10): <!DOCTYPE html>
- ATTRIBUTE_NODE (2): Attributes of elements (mostly accessed via element, not as separate nodes)
- PROCESSING_INSTRUCTION_NODE (7): <?xml ...?>
Full node.nodeType reference: 1=Element, 2=Attr, 3=Text, 4=CDATASection, 7=ProcessingInstruction, 8=Comment, 9=Document, 10=DocumentType, 11=DocumentFragment.

1.4 — The DOM Tree Structure
document is the root. document.documentElement is <html>. document.head is <head>. document.body is <body>. Every element has: parentNode, childNodes (NodeList), firstChild, lastChild, nextSibling, previousSibling, children (HTMLCollection of element children only), firstElementChild, lastElementChild, nextElementSibling, previousElementSibling. Difference: childNodes includes TEXT nodes and COMMENT nodes. children only includes ELEMENT nodes. firstChild might be a text node (whitespace!). firstElementChild is always an element.

1.5 — The Window Object — The Global Context
window is the global object in the browser. All global variables become properties of window. window.document, window.location, window.history, window.navigator, window.screen, window.console. window is optional: window.alert() === alert(). The global scope in a browser script is the window object.

Quiz (8 questions with full explanations):
Q1 (MCQ): What does DOM stand for? A) Document Object Manager B) Document Object Model C) Dynamic Object Model D) Document Oriented Module — Answer: B
Q2 (True/False): The DOM and the HTML source file are always identical. — Answer: False — JavaScript can modify the DOM after the page loads. The Elements panel in DevTools shows the live DOM, which can differ completely from the original HTML source file.
Q3 (MCQ): What is the nodeType value for an Element node? A) 0 B) 1 C) 3 D) 9 — Answer: B — Element nodes have nodeType === 1. Text nodes are 3. Document is 9. This is important for type-checking nodes.
Q4 (MCQ): What does document.body.childNodes return? A) Only element children B) Elements, text nodes, and comment nodes C) Only the first child D) A string of HTML — Answer: B — childNodes is a NodeList that includes ALL node types: elements, text nodes (including whitespace), and comment nodes.
Q5 (True/False): If you add 50 elements to the DOM with JavaScript, the original HTML file changes. — Answer: False — JavaScript modifies the in-memory DOM only. The original HTML file on the server is unchanged. Refreshing the page reloads from the server file.
Q6 (Fill blank): The root of the DOM tree is the ___ object. — Answer: document
Q7 (Spot the bug): document.body.firstChild.textContent — If you want the first ELEMENT child's text, firstChild may return a text node (whitespace). Use ___ instead. — Answer: firstElementChild
Q8 (MCQ): Which panel in browser DevTools shows the live DOM? A) Sources B) Network C) Elements D) Console — Answer: C

Exercises:
Exercise 1 (Easy): Open the browser console on any website. Type document.title, document.URL, document.body.childNodes.length. Report what each returns.
Exercise 2 (Easy): Write JS that reads document.documentElement.nodeName and document.documentElement.nodeType and logs them.
Exercise 3 (Medium): Write a function traverseDOM(node, depth) that recursively logs every node in the DOM tree with indentation showing depth. Test it with traverseDOM(document.body, 0).

---

Chapter 2: The Document Object — Complete Reference
Cover EVERY property and method of the document object:

DOCUMENT PROPERTIES:
document.activeElement — Currently focused element
document.body — Returns <body> element
document.characterSet — Character encoding (UTF-8 etc.)
document.childElementCount — Number of child elements
document.children — HTMLCollection of child elements
document.contentType — MIME type of document
document.cookie — Get/set cookies
document.currentScript — Currently executing <script> element
document.defaultView — Returns the window object
document.designMode — "on"/"off" — make entire page editable
document.dir — Text direction (ltr/rtl)
document.doctype — Returns the DOCTYPE node
document.documentElement — Returns <html> element
document.documentURI / document.URL — Document URL
document.domain — Domain of document
document.embeds — All <embed> elements
document.firstElementChild — First child element
document.forms — All <form> elements
document.fullscreenElement — Currently fullscreen element
document.head — Returns <head> element
document.hidden — Is document hidden (tab not visible)
document.images — All <img> elements
document.implementation — DOMImplementation object
document.inputEncoding — Document encoding
document.lastElementChild — Last child element
document.lastModified — Last modified date string
document.links — All <a> and <area> with href
document.plugins — All <embed> elements
document.readyState — loading/interactive/complete
document.referrer — URL that linked to this page
document.scripts — All <script> elements
document.scrollingElement — Element that scrolls the viewport
document.styleSheets — StyleSheetList of all stylesheets
document.title — Document title (get/set)
document.visibilityState — visible/hidden/prerender

DOCUMENT METHODS:
document.addEventListener(type, listener, options) — Add event listener
document.adoptNode(node) — Adopt node from another document
document.close() — Close output stream
document.createAttribute(name) — Create Attr node
document.createComment(data) — Create Comment node
document.createDocumentFragment() — Create DocumentFragment
document.createElement(tagName, options) — Create Element
document.createElementNS(ns, qualifiedName) — Create element with namespace
document.createEvent(type) — Create Event (legacy)
document.createNodeIterator(root, whatToShow, filter) — Create NodeIterator
document.createRange() — Create Range object
document.createTextNode(data) — Create Text node
document.createTreeWalker(root, whatToShow, filter) — Create TreeWalker
document.elementFromPoint(x, y) — Element at viewport coords
document.elementsFromPoint(x, y) — All elements at coords
document.evaluate(xpathExpression, ...) — XPath evaluation
document.execCommand(command, ...) — Legacy editing commands
document.exitFullscreen() — Exit fullscreen
document.exitPointerLock() — Release pointer lock
document.getElementById(id) — Get by ID
document.getElementsByClassName(names) — Get by class names
document.getElementsByName(name) — Get by name attribute
document.getElementsByTagName(name) — Get by tag name
document.getElementsByTagNameNS(ns, name) — Get by tag with namespace
document.getSelection() — Get Selection object
document.hasFocus() — Is document focused
document.importNode(node, deep) — Import node from another document
document.normalize() — Normalize text nodes
document.open() — Open output stream
document.querySelector(selector) — First matching element
document.querySelectorAll(selector) — All matching elements (NodeList)
document.releaseCapture() — Release mouse capture
document.removeEventListener(type, listener) — Remove listener
document.requestStorageAccess() — Request storage access
document.write(markup) — Write HTML (avoid in modern code)
document.writeln(markup) — Write HTML + newline

Chapter 3: Selecting Elements — All Methods Deep Dive
getElementById — fastest, returns single Element or null. Always check for null before using.
getElementsByClassName — returns live HTMLCollection. Plural — all matching.
getElementsByTagName — returns live HTMLCollection. Use "*" for all elements.
getElementsByName — returns NodeList of elements with matching name attribute.
querySelector — CSS selector, returns first match or null. More powerful, slightly slower.
querySelectorAll — CSS selector, returns static NodeList (snapshot, not live).

CRITICAL DIFFERENCE: Live vs Static collections:
- getElementsByClassName, getElementsByTagName return LIVE HTMLCollection — updates automatically when DOM changes.
- querySelectorAll returns STATIC NodeList — snapshot at the time of the call.
```javascript
// Live collection — be careful in loops!
const divs = document.getElementsByTagName('div');
divs.length; // say 5
document.body.appendChild(document.createElement('div'));
divs.length; // now 6 — it updated automatically!

// Static — safe to loop
const divs2 = document.querySelectorAll('div');
document.body.appendChild(document.createElement('div'));
divs2.length; // still 5 — snapshot
```

closest($selector) — traverse up the DOM tree to find first ancestor matching selector.
matches(selector) — returns true if element matches the CSS selector.
contains(node) — returns true if node is a descendant of element.

Performance comparison and when to use each. Caching DOM queries (const heading = document.getElementById('title') — do NOT call getElementById in a loop).

Chapter 4: Creating and Modifying DOM Elements
document.createElement(tag), document.createTextNode(text), document.createDocumentFragment().
innerHTML vs textContent vs innerText:
- innerHTML: get/set HTML markup. Parses HTML. XSS risk if user data. Fast for bulk operations.
- textContent: get/set text only. Ignores HTML, escapes it. Safe. Includes hidden elements.
- innerText: get/set visible text only. Respects CSS (hidden elements excluded). Triggers reflow.
appendChild(node), prepend(node), append(node), insertBefore(newNode, referenceNode).
insertAdjacentHTML($position, $html) — positions: beforebegin, afterbegin, beforeend, afterend.
insertAdjacentElement($position, $element), insertAdjacentText($position, $text).
removeChild(node), remove() — remove from DOM.
replaceChild(newNode, oldNode), replaceWith(node) — replace.
cloneNode(deep) — clone element. deep=true clones children too.
DocumentFragment — for batch DOM insertions without multiple reflows.

Chapter 5: Attributes, Classes, and Styles
getAttribute(name), setAttribute(name, value), removeAttribute(name), hasAttribute(name), toggleAttribute(name, force).
getAttributeNS, setAttributeNS — for namespaced attributes (SVG etc.).
attributes property — NamedNodeMap of all attributes.
dataset — access data-* attributes as DOMStringMap (data-user-id → el.dataset.userId camelCase).
className — get/set entire class string.
classList — DOMTokenList: add(class), remove(class), toggle(class, force), contains(class), replace(old, new), item(index), length, forEach, values, entries, keys.
id property — get/set id.
tagName — uppercase tag name. nodeName — for elements same as tagName.
style property — CSSStyleDeclaration. Get/set inline styles.
getComputedStyle(element, pseudoElement) — computed (final applied) CSS. Read-only.

=== PART 2: THE ELEMENT OBJECT — COMPLETE REFERENCE (Chapters 6–14) ===

Chapter 6: Element Properties — Complete Reference
element.attributes, element.childElementCount, element.children, element.classList, element.className, element.clientHeight, element.clientLeft, element.clientTop, element.clientWidth, element.firstElementChild, element.id, element.innerHTML, element.innerText, element.lastElementChild, element.localName, element.namespaceURI, element.nextElementSibling, element.outerHTML, element.outerText, element.part, element.prefix, element.previousElementSibling, element.scrollHeight, element.scrollLeft, element.scrollTop, element.scrollWidth, element.shadowRoot, element.slot, element.tagName, element.textContent.

Chapter 7: Element Methods — Complete Reference
element.addEventListener, element.after, element.animate, element.append, element.attachShadow, element.before, element.blur, element.click, element.closest, element.dispatchEvent, element.focus, element.getAttribute, element.getAttributeNames, element.getAttributeNode, element.getAttributeNodeNS, element.getAttributeNS, element.getBoundingClientRect, element.getClientRects, element.getElementsByClassName, element.getElementsByTagName, element.getElementsByTagNameNS, element.hasAttribute, element.hasAttributeNS, element.hasAttributes, element.hasPointerCapture, element.insertAdjacentElement, element.insertAdjacentHTML, element.insertAdjacentText, element.matches, element.prepend, element.querySelector, element.querySelectorAll, element.releasePointerCapture, element.remove, element.removeAttribute, element.removeAttributeNode, element.removeAttributeNS, element.removeEventListener, element.replaceChildren, element.replaceWith, element.requestFullscreen, element.requestPointerLock, element.scroll, element.scrollBy, element.scrollIntoView, element.scrollTo, element.setAttribute, element.setAttributeNode, element.setAttributeNodeNS, element.setAttributeNS, element.setPointerCapture, element.toggleAttribute.

Chapter 8: getBoundingClientRect and Element Geometry
getBoundingClientRect() — DOMRect: top, right, bottom, left, width, height, x, y.
All position/size properties: offsetTop, offsetLeft, offsetWidth, offsetHeight, offsetParent.
clientTop, clientLeft, clientWidth, clientHeight — inner dimensions (without border/scroll).
scrollTop, scrollLeft — scroll offset. scrollWidth, scrollHeight — full scrollable dimensions.
Difference between all: offset vs client vs scroll vs getBoundingClientRect.
IntersectionObserver — detecting when elements enter/leave the viewport.

Chapter 9: Node Object — Complete Reference
node.baseURI, node.childNodes, node.firstChild, node.isConnected, node.lastChild, node.nextSibling, node.nodeName, node.nodeType, node.nodeValue, node.ownerDocument, node.parentElement, node.parentNode, node.previousSibling, node.textContent.
node.appendChild, node.cloneNode, node.compareDocumentPosition, node.contains, node.getRootNode, node.hasChildNodes, node.insertBefore, node.isDefaultNamespace, node.isEqualNode, node.isSameNode, node.lookupNamespaceURI, node.lookupPrefix, node.normalize, node.removeChild, node.replaceChild.
compareDocumentPosition() — bitmask: DOCUMENT_POSITION_DISCONNECTED, DOCUMENT_POSITION_PRECEDING, DOCUMENT_POSITION_FOLLOWING, DOCUMENT_POSITION_CONTAINS, DOCUMENT_POSITION_CONTAINED_BY, DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC.

Chapter 10: HTMLElement — Extended Properties and Methods
All HTMLElement-specific properties:
accessKey, accessKeyLabel, contentEditable, dir, draggable, enterKeyHint, hidden, inert, inputMode, isContentEditable, lang, nonce, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, outerText, spellcheck, style, tabIndex, title, translate.
HTMLElement methods: attachInternals, blur, click, focus, hidePopover, showPopover, togglePopover.
form-associated elements: value, checked, name, validity, validationMessage, willValidate, checkValidity, reportValidity, setCustomValidity.

Chapter 11: Form Elements — DOM Properties and Methods
HTMLFormElement: action, autocomplete, elements, encoding, enctype, length, method, name, noValidate, target. Methods: checkValidity(), reportValidity(), requestSubmit(), reset(), submit().
HTMLInputElement: accept, alt, autocomplete, checked, defaultChecked, defaultValue, disabled, files, form, formAction, formEnctype, formMethod, formNoValidate, formTarget, height, indeterminate, labels, list, max, maxLength, min, minLength, multiple, name, pattern, placeholder, readOnly, required, selectionDirection, selectionEnd, selectionStart, size, src, step, type, useMap, validity, value, valueAsDate, valueAsNumber, width, willValidate. Methods: blur, checkValidity, click, focus, reportValidity, select, setCustomValidity, setRangeText, setSelectionRange, showPicker, stepDown, stepUp.
HTMLSelectElement, HTMLTextAreaElement, HTMLButtonElement — same depth.

Chapter 12: Table Elements — DOM Reference
HTMLTableElement: caption, rows, tBodies, tFoot, tHead. Methods: createCaption, createTFoot, createTHead, deleteCaption, deleteRow, deleteTFoot, deleteTHead, insertRow.
HTMLTableSectionElement (thead/tbody/tfoot): rows, deleteRow, insertRow.
HTMLTableRowElement: cells, rowIndex, sectionRowIndex. Methods: deleteCell, insertCell.
HTMLTableCellElement: abbr, cellIndex, colSpan, headers, rowSpan.

Chapter 13: Media Elements — Audio and Video DOM
HTMLMediaElement: audioTracks, autoplay, buffered, controller, controls, currentSrc, currentTime, defaultMuted, defaultPlaybackRate, disableRemotePlayback, duration, ended, error, loop, mediaGroup, muted, networkState (NETWORK_EMPTY=0, NETWORK_IDLE=1, NETWORK_LOADING=2, NETWORK_NO_SOURCE=3), paused, playbackRate, played, preload, readyState (HAVE_NOTHING=0, HAVE_METADATA=1, HAVE_CURRENT_DATA=2, HAVE_FUTURE_DATA=3, HAVE_ENOUGH_DATA=4), seekable, seeking, src, srcObject, textTracks, videoTracks, volume. Methods: addTextTrack, canPlayType, captureStream, fastSeek, load, pause, play, setMediaKeys, setSinkId.
HTMLVideoElement extra: height, poster, videoHeight, videoWidth, width. Methods: getVideoPlaybackQuality, requestPictureInPicture.

Chapter 14: Style Object — CSSStyleDeclaration Complete Reference
element.style — inline styles only. getComputedStyle(el) — computed styles.
All CSS properties as camelCase JavaScript: backgroundColor, borderRadius, fontSize, fontFamily, display, position, top, left, right, bottom, width, height, margin, padding, transform, transition, animation, opacity, visibility, zIndex, overflow, cursor, color, etc.
CSSStyleDeclaration methods: getPropertyValue(prop), setProperty(prop, value, priority), removeProperty(prop), getPropertyPriority(prop), item(index).
cssText — get/set the entire style attribute string.
classList vs style — when to use each. Performance: classList is better for toggling visual states.

=== PART 3: EVENTS — COMPLETE REFERENCE (Chapters 15–28) ===

Chapter 15: The Event System — How Events Work
Event flow: capturing phase → target phase → bubbling phase. Full diagram with code showing each phase. addEventListener(type, listener, { capture: true/false }). removeEventListener — must use same function reference. dispatchEvent(event) — fire custom events. Event delegation — why it's the RIGHT pattern for dynamic content.

Chapter 16: MouseEvent — Complete Reference
Events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, contextmenu, wheel.
MouseEvent properties: altKey, button (0=left, 1=middle, 2=right), buttons (bitmask), clientX, clientY, ctrlKey, metaKey, movementX, movementY, offsetX, offsetY, pageX, pageY, relatedTarget, screenX, screenY, shiftKey, x, y.
Difference between mouseover/mouseout (bubbles) vs mouseenter/mouseleave (does not bubble).

Chapter 17: KeyboardEvent — Complete Reference
Events: keydown, keypress (deprecated), keyup.
KeyboardEvent properties: altKey, code (physical key: "KeyA", "Space", "ArrowLeft"), ctrlKey, isComposing, key (logical key: "a", "A", "Enter", " "), keyCode (deprecated — use key/code), location, metaKey, repeat, shiftKey.
key vs code: key gives the character/action ("a" or "A" depending on shift), code gives physical key ("KeyA" always). Use code for game controls, key for text input.
Full list of key/code values for: letters, numbers, function keys, arrows, modifiers, special keys.

Chapter 18: InputEvent and Change Events
Events: input, change, beforeinput.
InputEvent: data, dataTransfer, inputType (insertText, deleteContentBackward etc.), isComposing.
change vs input: change fires after blur (for most inputs), input fires on every keystroke.
oninput for real-time search, onchange for "commit" behavior.

Chapter 19: FormEvent — submit, reset, formdata
submit event: prevent default to handle with JavaScript. FormData API. Serializing forms.
reset event. formdata event — intercept FormData before submission.

Chapter 20: FocusEvent — focus, blur, focusin, focusout
Events: focus, blur (do not bubble), focusin, focusout (do bubble — for delegation).
FocusEvent.relatedTarget — element that is losing/gaining focus.
document.activeElement — currently focused element.
tabIndex — controlling focus order. Negative tabIndex removes from tab order.
:focus-visible CSS vs :focus — when keyboard vs mouse focus.

Chapter 21: ScrollEvent and WheelEvent
scroll event — fires on element or window. window.scrollY, window.scrollX. element.scrollTop, element.scrollLeft.
WheelEvent: deltaX, deltaY, deltaZ, deltaMode (DOM_DELTA_PIXEL, DOM_DELTA_LINE, DOM_DELTA_PAGE).
Scroll performance: passive event listeners { passive: true } — prevents blocking scrolling.
IntersectionObserver as better alternative to scroll events for many use cases.
requestAnimationFrame for smooth scroll animations.

Chapter 22: TouchEvent — Mobile Events
Events: touchstart, touchmove, touchend, touchcancel.
TouchEvent: changedTouches, targetTouches, touches — all TouchList.
Touch: clientX, clientY, force, identifier, pageX, pageY, radiusX, radiusY, rotationAngle, screenX, screenY, target.
Preventing default on touchmove to prevent scrolling. Touch vs click on mobile (300ms delay, why, and how to fix). Pointer events as modern alternative.

Chapter 23: PointerEvent — The Unified Input Model
Events: pointerdown, pointerup, pointermove, pointerover, pointerout, pointerenter, pointerleave, pointercancel, gotpointercapture, lostpointercapture.
PointerEvent extends MouseEvent: isPrimary, pointerId, pointerType ("mouse"/"pen"/"touch"), pressure, tangentialPressure, tiltX, tiltY, twist, width, height.
setPointerCapture, releasePointerCapture — capture pointer across element boundaries.
touch-action CSS property — tell browser which gestures to handle natively.

Chapter 24: DragEvent — Drag and Drop API
Events: drag, dragstart, dragend (on source), dragenter, dragleave, dragover, drop (on target).
DragEvent.dataTransfer — DataTransfer object.
DataTransfer: dropEffect, effectAllowed, files, items, types. Methods: clearData, getData, setData, setDragImage.
Must call event.preventDefault() in dragover handler to allow drop!
Complete drag-and-drop implementation walkthrough.

Chapter 25: ClipboardEvent — Copy, Cut, Paste
Events: copy, cut, paste.
ClipboardEvent.clipboardData — DataTransfer object.
Clipboard API (modern): navigator.clipboard.writeText(), navigator.clipboard.readText(), navigator.clipboard.write(), navigator.clipboard.read().
Permissions required for clipboard read.

Chapter 26: CustomEvent — Creating Your Own Events
new CustomEvent(type, { detail: data, bubbles: true, cancelable: true }).
element.dispatchEvent(event).
Custom event patterns: component communication, event bus pattern.
EventTarget — the interface that provides addEventListener/removeEventListener/dispatchEvent. Can be extended: class MyEmitter extends EventTarget {}.

Chapter 27: Event Object — Complete Reference
ALL Event properties: bubbles, cancelable, cancelBubble (deprecated), composed, currentTarget, defaultPrevented, eventPhase (0=NONE, 1=CAPTURING, 2=AT_TARGET, 3=BUBBLING), isTrusted, returnValue (deprecated), srcElement (deprecated), target, timeStamp, type.
ALL Event methods: composedPath(), initEvent() (deprecated), preventDefault(), stopImmediatePropagation(), stopPropagation().
isTrusted — true if event was triggered by user, false if by JavaScript (dispatchEvent). Security relevance.

Chapter 28: MutationObserver — Watching DOM Changes
new MutationObserver(callback), observer.observe(target, config), observer.disconnect(), observer.takeRecords().
MutationObserverInit config: attributes, attributeFilter, attributeOldValue, characterData, characterDataOldValue, childList, subtree.
MutationRecord: type, target, addedNodes, removedNodes, previousSibling, nextSibling, attributeName, attributeNamespace, oldValue.
Use cases: watch for dynamically added elements, track attribute changes, implement undo/redo, lazy loading.

=== PART 4: WINDOW OBJECT — COMPLETE REFERENCE (Chapters 29–38) ===

Chapter 29: Window Properties — Complete Reference
window.closed, window.console, window.customElements, window.devicePixelRatio, window.document, window.frameElement, window.frames, window.history, window.indexedDB, window.innerHeight, window.innerWidth, window.isSecureContext, window.length, window.localStorage, window.location, window.locationbar, window.menubar, window.name, window.navigator, window.opener, window.outerHeight, window.outerWidth, window.pageXOffset (= scrollX), window.pageYOffset (= scrollY), window.parent, window.performance, window.personalbar, window.screen, window.screenLeft, window.screenTop, window.screenX, window.screenY, window.scrollbars, window.scrollMaxX, window.scrollMaxY, window.scrollX, window.scrollY, window.self, window.sessionStorage, window.speechSynthesis, window.statusbar, window.toolbar, window.top, window.visualViewport, window.window.

Chapter 30: Window Methods — Complete Reference
window.alert(message), window.confirm(message), window.prompt(message, default) — Dialogs (avoid in production).
window.atob(encoded), window.btoa(str) — Base64 encoding/decoding.
window.blur(), window.focus(), window.close(), window.open(url, target, features), window.print().
window.cancelAnimationFrame(id), window.requestAnimationFrame(callback).
window.cancelIdleCallback(id), window.requestIdleCallback(callback, options).
window.clearInterval(id), window.setInterval(func, delay, ...args).
window.clearTimeout(id), window.setTimeout(func, delay, ...args).
window.fetch(resource, options) — The Fetch API.
window.getComputedStyle(element, pseudo).
window.getSelection() — Selection object.
window.matchMedia(query) — MediaQueryList.
window.moveBy(x, y), window.moveTo(x, y) — Move window.
window.postMessage(message, targetOrigin, transfer) — Cross-origin messaging.
window.resizeBy(x, y), window.resizeTo(width, height) — Resize window.
window.scroll(x, y), window.scrollBy(x, y), window.scrollTo(x, y).
window.stop() — Stop loading.
window.structuredClone(value, options) — Deep clone (PHP 8.0+).
window.queueMicrotask(callback) — Queue microtask.

Chapter 31: Location Object — Complete Reference
location.hash, location.host, location.hostname, location.href, location.origin, location.pathname, location.port, location.protocol, location.search. Methods: location.assign(url), location.reload(forceReload), location.replace(url), location.toString(). Parsing URL parameters: new URLSearchParams(location.search). URL API: new URL(href).

Chapter 32: History Object — Complete Reference
history.length, history.scrollRestoration, history.state. Methods: history.back(), history.forward(), history.go(delta), history.pushState(state, title, url), history.replaceState(state, title, url). popstate event on window. Building a SPA router with pushState. The difference between pushState (no page load) and location.href= (full page load).

Chapter 33: Navigator Object — Complete Reference
navigator.appCodeName, navigator.appName, navigator.appVersion (all deprecated), navigator.bluetooth, navigator.clipboard, navigator.connection, navigator.cookieEnabled, navigator.credentials, navigator.deviceMemory, navigator.geolocation, navigator.hardwareConcurrency, navigator.language, navigator.languages, navigator.locks, navigator.maxTouchPoints, navigator.mediaCapabilities, navigator.mediaDevices, navigator.mediaSession, navigator.onLine, navigator.permissions, navigator.platform (deprecated), navigator.plugins, navigator.product, navigator.productSub, navigator.serviceWorker, navigator.share, navigator.storage, navigator.usb, navigator.userAgent (deprecated — use feature detection), navigator.userAgentData, navigator.vendor, navigator.vibrate. Methods: navigator.geolocation.getCurrentPosition(), navigator.sendBeacon(), navigator.share(), navigator.vibrate().

Chapter 34: Screen Object — Complete Reference
screen.availHeight, screen.availLeft, screen.availTop, screen.availWidth, screen.colorDepth, screen.height, screen.keepAwake, screen.orientation, screen.pixelDepth, screen.width. ScreenOrientation: type, angle. Methods: screen.orientation.lock(orientation), screen.orientation.unlock().

Chapter 35: Console Object — Complete Reference
console.assert(condition, ...data), console.clear(), console.count(label), console.countReset(label), console.debug(...data), console.dir(obj), console.dirxml(node), console.error(...data), console.group(label), console.groupCollapsed(label), console.groupEnd(), console.info(...data), console.log(...data), console.memory, console.profile(label), console.profileEnd(label), console.table(data, columns), console.time(label), console.timeEnd(label), console.timeLog(label), console.timeStamp(label), console.trace(...data), console.warn(...data). console.log formatting with %s %d %i %f %o %O %c.

Chapter 36: Storage — localStorage and sessionStorage
Storage interface: getItem(key), setItem(key, value), removeItem(key), clear(), key(index), length.
localStorage vs sessionStorage: persistence difference.
storage event — listen for cross-tab changes.
JSON.parse/stringify for storing objects.
StorageEvent: key, newValue, oldValue, storageArea, url.
Storage limits (~5-10MB per origin). Synchronous API (blocks main thread for large data — use IndexedDB instead).

Chapter 37: Performance API
performance.now() — high-resolution timestamp.
performance.mark(name), performance.measure(name, startMark, endMark), performance.clearMarks(), performance.clearMeasures(), performance.getEntries(), performance.getEntriesByName(name), performance.getEntriesByType(type).
PerformanceEntry: duration, entryType, name, startTime.
PerformanceNavigationTiming — detailed page load timing.
PerformanceResourceTiming — per-resource timing.
PerformancePaintTiming — first-paint, first-contentful-paint.

Chapter 38: The Clipboard, Geolocation, and Other Navigator APIs
Clipboard API deep dive. Geolocation API: getCurrentPosition(), watchPosition(), clearWatch(). GeolocationPosition: coords.latitude, coords.longitude, coords.altitude, coords.accuracy, coords.speed, coords.heading, timestamp. GeolocationPositionError: code, message.

=== PART 5: ADVANCED DOM (Chapters 39–50) ===

Chapter 39: Range and Selection
document.createRange(), range.setStart(), range.setEnd(), range.setStartBefore(), range.setEndAfter(), range.selectNode(), range.selectNodeContents(), range.collapse(), range.cloneRange(), range.deleteContents(), range.extractContents(), range.insertNode(), range.cloneContents(), range.surroundContents(), range.toString(), range.getBoundingClientRect(), range.getClientRects().
Selection: window.getSelection(), selection.anchorNode, selection.focusNode, selection.rangeCount, selection.addRange(), selection.removeRange(), selection.removeAllRanges(), selection.getRangeAt(0), selection.toString().

Chapter 40: Shadow DOM — Web Component Isolation
element.attachShadow({ mode: 'open'/'closed' }), shadowRoot.querySelector(), shadowRoot.innerHTML. CSS isolation — styles inside shadow DOM don't leak out. Slots. Custom elements and Web Components introduction. When to use shadow DOM.

Chapter 41: Intersection Observer — Complete Guide
new IntersectionObserver(callback, options). IntersectionObserverEntry: boundingClientRect, intersectionRatio, intersectionRect, isIntersecting, rootBounds, target, time. Options: root, rootMargin, threshold. Use cases: lazy loading images, infinite scroll, animate on scroll, sticky header detection, ad viewability tracking.

Chapter 42: ResizeObserver and MutationObserver Advanced
ResizeObserver — watch element size changes. ResizeObserverEntry: borderBoxSize, contentBoxSize, contentRect, devicePixelContentBoxSize, target. MutationObserver advanced patterns: detecting route changes in SPAs, DOM diffing, monitoring third-party widget changes.

Chapter 43: DOM Manipulation Performance
Why DOM manipulation is expensive: reflow and repaint. Reflow triggers: changing width/height, adding/removing elements, reading layout properties (offsetWidth, getBoundingClientRect etc.) after writes — "layout thrashing". Solutions: DocumentFragment for batch inserts, read all layout values before any writes, requestAnimationFrame for visual updates, will-change CSS hint, CSS containment. Virtual DOM concept (why React invented it).

Chapter 44: requestAnimationFrame — Smooth Animations
window.requestAnimationFrame(callback), window.cancelAnimationFrame(id). The 60fps rendering loop. Timestamp parameter. Building smooth animations without setInterval (which is NOT frame-synced). Performance measurement with performance.now(). Comparing rAF vs CSS transitions vs CSS animations for different use cases.

Chapter 45: Templates and DocumentFragment
<template> element — content not rendered until cloned. template.content — DocumentFragment. document.importNode(template.content, true). DocumentFragment — acts like a node container that doesn't exist in the DOM. Batch appending with DocumentFragment vs individual appendChild calls. Performance comparison.

Chapter 46: XML and Namespace Methods
document.createElementNS(namespaceURI, qualifiedName). Namespaces for SVG (http://www.w3.org/2000/svg) and MathML. Working with SVG in the DOM. createAttributeNS, setAttributeNS, getAttributeNS.

Chapter 47: NodeIterator and TreeWalker
document.createNodeIterator(root, whatToShow, filter). NodeIterator: nextNode(), previousNode(). document.createTreeWalker(root, whatToShow, filter). TreeWalker: firstChild(), lastChild(), nextNode(), nextSibling(), parentNode(), previousNode(), previousSibling(), currentNode. whatToShow bitmask: NodeFilter.SHOW_ALL, SHOW_ELEMENT, SHOW_TEXT, SHOW_COMMENT. NodeFilter: FILTER_ACCEPT, FILTER_REJECT, FILTER_SKIP.

Chapter 48: XPath in the DOM
document.evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result). XPathResult types: ANY_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE, UNORDERED_NODE_ITERATOR_TYPE, ORDERED_NODE_ITERATOR_TYPE, UNORDERED_NODE_SNAPSHOT_TYPE, ORDERED_NODE_SNAPSHOT_TYPE, ANY_UNORDERED_NODE_TYPE, FIRST_ORDERED_NODE_TYPE. Practical XPath expressions for DOM traversal.

Chapter 49: Fullscreen and Pointer Lock APIs
element.requestFullscreen(), document.exitFullscreen(), document.fullscreenElement, document.fullscreenEnabled. fullscreenchange and fullscreenerror events. element.requestPointerLock(), document.exitPointerLock(), document.pointerLockElement. pointerlockchange and pointerlockerror events. MouseEvent.movementX, movementY — only meaningful during pointer lock.

Chapter 50: Web Animations API
element.animate(keyframes, options) — returns Animation object. Keyframes array or object. Options: duration, easing, delay, iterations, direction, fill, composite. Animation: cancel(), commitStyles(), finish(), pause(), play(), reverse(), updatePlaybackRate(). animation.ready (Promise), animation.finished (Promise). animation.currentTime, animation.playbackRate, animation.playState.

=== PART 6: PROJECTS (Chapters 51–60) ===

Chapter 51: Project — DOM Manipulation Masterclass (no frameworks — pure DOM)
Build a full task manager with CRUD, drag-and-drop reordering, local storage persistence, and animations — using only vanilla DOM APIs.

Chapter 52: Project — Virtual Keyboard (full keyboard rendered in DOM, events captured)
Chapter 53: Project — Rich Text Editor (contentEditable, execCommand, Range, Selection)
Chapter 54: Project — Custom Dropdown and Autocomplete (DOM + events + ARIA)
Chapter 55: Project — Image Gallery with Lightbox (DOM, events, fullscreen API)
Chapter 56: Project — Real-time DOM Inspector (like DevTools Elements panel — built in the DOM itself)
Chapter 57: Mini Challenge Set 1 — DOM Selection and Traversal (10 challenges)
Chapter 58: Mini Challenge Set 2 — Events and Delegation (10 challenges)
Chapter 59: Mini Challenge Set 3 — Advanced DOM + Observer APIs (10 challenges)
Chapter 60: HTML DOM Mastery Recap + Certificate Prep

---

## HTML DOM REFERENCE DATA FILE

Build /lib/dom-reference.ts — TypeScript data with ALL DOM APIs:

```typescript
export interface DomApi {
  name: string;              // "getElementById"
  belongsTo: string;         // "Document" | "Element" | "Node" | "Window" | etc.
  type: "method" | "property" | "event";
  signature?: string;        // "getElementById(id: string): Element | null"
  description: string;
  returns?: string;
  parameters?: DomParam[];
  example: string;           // Runnable HTML+JS example code
  relatedApis: string[];
  browserSupport: "all" | "modern" | "experimental";
  addedIn?: string;          // "ES5", "DOM Living Standard", "Chrome 90" etc.
}
```

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any chapter
- Every DOM method and property from https://www.w3schools.com/jsref/dom_obj_document.asp and all linked pages must be covered: Document Object, Element Object, Attr Object, Event Object, Window Object, Navigator, Screen, History, Location, HTMLElement, Console Object, Style Object
- DomMethodRef component used for EVERY DOM API in EVERY section
- DOM Visualizer panel must work in ALL lesson examples — not just some
- Every quiz: 8+ questions — many should show actual DOM structure and ask what a method returns
- Every chapter: 3 exercises (Easy: call a single API; Medium: combine APIs; Hard: build a real feature)
- Certificate issues after all 60 chapters + all quizzes ≥80%
- Track color: #F0DB4F (JavaScript/DOM yellow)
- Track icon: 🌳 DOM tree SVG

---

## IMPLEMENTATION ORDER (BOTH TRACKS)

1. Add "php" and "htmldom" to Track type union in types.ts
2. Update dashboard and landing page for both new tracks
3. Build PhpCompiler component (Piston API + HTML Preview tab)
4. Build DomVisualizer panel for DOM track compiler
5. Build EventMonitor panel for DOM track compiler
6. Build PhpFunctionRef component for PHP track lessons
7. Build DomMethodRef component for DOM track lessons
8. Write php-curriculum.ts — ALL 90 chapters full real content
9. Write htmldom-curriculum.ts — ALL 60 chapters full real content
10. Build /lib/dom-reference.ts data file (all DOM APIs with examples)
11. Update certificate system for both new tracks
12. Update profile page for all tracks
13. Test PHP compiler — HTML Preview tab must render PHP HTML output
14. Test DOM Visualizer — must update in real-time as JS modifies the DOM
