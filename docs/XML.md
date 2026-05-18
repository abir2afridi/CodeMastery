# XML Track — Add to existing CodeMastery platform

```terminal
# CODEMASTERY — XML TRACK ADDITION
# Add XML as a new advanced structured-data track to the existing CodeMastery platform
# 50+ chapters · XML fundamentals to enterprise XML ecosystems · XPath/XSLT/XML APIs · Live XML validator/editor

============================================================
OVERVIEW
============================================================

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a COMPLETE XML learning track.

Follow ALL existing platform standards:
- Same curriculum depth
- Same UI/UX systems
- Same chapter architecture
- Same quiz/exercise structure
- Same compiler/editor patterns
- Same progress tracking
- Same certificate generation system
- Same gamification + XP systems
- Same responsive layout conventions

This XML track must teach students:
- XML fundamentals
- XML syntax rules
- XML trees and nodes
- XML schemas
- DTD
- Namespaces
- XPath
- XSLT
- RSS/XML feeds
- SOAP basics
- XML APIs
- XML validation
- XML transformations
- Enterprise XML workflows
- XML with JavaScript
- XML with databases
- XML parsers
- XML security
- Real-world XML integrations

The track should make learners capable of understanding and using XML in:
- APIs
- Config systems
- Android manifests
- SVG
- RSS feeds
- SOAP services
- Enterprise systems
- Data exchange systems
- Legacy integrations
- XML-based UI systems

============================================================
XML EDITOR + VALIDATOR SYSTEM
============================================================

Build:
/components/compiler/XMLPlayground.tsx

Features:

1. Split-panel live XML editor
   - XML editor panel
   - Tree visualization panel
   - Validation panel
   - Preview panel

2. Use CodeMirror XML syntax highlighting

3. Real-time validation:
   - Detect malformed XML
   - Missing closing tags
   - Invalid nesting
   - Namespace issues
   - DTD/schema issues

4. Tree View Renderer:
   - Expand/collapse XML nodes
   - Visual hierarchy tree
   - Attribute display
   - Text node display

5. Live formatting button:
   - Pretty-print XML
   - Auto indentation
   - Attribute formatting

6. XML → JSON converter

7. JSON → XML converter

8. XPath tester:
   - Input XPath query
   - Show matched nodes

9. XSLT transformation playground

10. XML schema validator

11. Download buttons:
   - Save .xml
   - Save .xsd
   - Save .xsl

12. Dark/light mode support

13. Mobile responsive layout

14. Live preview for:
   - SVG XML
   - RSS feeds
   - XHTML

15. Error highlighting:
   - Line numbers
   - Error underlines
   - Error explanation panel

============================================================
CURRICULUM STRUCTURE
============================================================

Create:
/lib/curriculum/xml-curriculum.ts

Track metadata:
- id: "xml"
- title: "XML"
- tagline: "Structured data for systems, APIs, and enterprise applications"
- icon: "🧩"
- color: "#FF6600"
- totalChapters: 50
- estimatedHours: 70

============================================================
FULL XML CURRICULUM
============================================================

=== PART 1: XML FUNDAMENTALS (Chapters 1–10) ===

Chapter 1: What Is XML and Why It Exists?
Chapter 2: XML Syntax Rules
Chapter 3: Elements and Attributes
Chapter 4: XML Trees and Hierarchies
Chapter 5: XML Namespaces
Chapter 6: Comments, CDATA, Processing Instructions
Chapter 7: XML Formatting and Best Practices
Chapter 8: XML Entities and Escaping
Chapter 9: XML Validation Basics
Chapter 10: XML vs HTML vs JSON

Topics include:
- Opening/closing tags
- Nested structures
- Parent-child relationships
- Self-closing tags
- Reserved characters
- XML declaration
- Unicode support
- Encoding systems
- UTF-8
- Attribute rules
- Semantic structures
- Human-readable data formats

============================================================
=== PART 2: XML VALIDATION + SCHEMAS (Chapters 11–20) ===
============================================================

Chapter 11: DTD Basics
Chapter 12: Internal vs External DTD
Chapter 13: XML Schema (XSD) Introduction
Chapter 14: XSD Data Types
Chapter 15: XSD Restrictions and Validation
Chapter 16: Namespaces with XSD
Chapter 17: Advanced XML Schema Structures
Chapter 18: XML Validation Pipelines
Chapter 19: XML Editors and Validators
Chapter 20: XML Security Fundamentals

Include:
- <!DOCTYPE>
- ELEMENT declarations
- ENTITY declarations
- Attribute validation
- Required/optional attributes
- XML schema constraints
- min/max occurs
- sequence/choice/all
- XML injection risks
- XXE attacks
- Secure XML parsing

============================================================
=== PART 3: XPATH + XSLT (Chapters 21–30) ===
============================================================

Chapter 21: XPath Basics
Chapter 22: XPath Axes and Selectors
Chapter 23: XPath Functions
Chapter 24: XPath Predicates and Filters
Chapter 25: XSLT Fundamentals
Chapter 26: XSLT Templates
Chapter 27: XSLT Conditions and Loops
Chapter 28: XML Transformations
Chapter 29: XML to HTML Conversion
Chapter 30: XML Data Pipelines

Topics:
- Node selection
- XPath queries
- Selecting attributes
- Selecting descendants
- XPath operators
- XPath functions
- Transforming XML documents
- Sorting XML data
- Conditional templates
- XML rendering engines

============================================================
=== PART 4: XML IN REAL APPLICATIONS (Chapters 31–40) ===
============================================================

Chapter 31: RSS Feeds
Chapter 32: Atom Feeds
Chapter 33: SOAP APIs
Chapter 34: SVG as XML
Chapter 35: XHTML
Chapter 36: Android XML Layouts
Chapter 37: XML Configuration Files
Chapter 38: XML in Enterprise Systems
Chapter 39: XML APIs and Parsing
Chapter 40: XML with JavaScript

Include:
- DOMParser
- XMLSerializer
- Fetching XML APIs
- SOAP envelopes
- Feed parsing
- SVG rendering
- Android manifests
- Build config files
- XML-based workflows

============================================================
=== PART 5: PROJECTS + ADVANCED XML (Chapters 41–50) ===
============================================================

Chapter 41: Project — XML Blog Feed
Chapter 42: Project — SVG Graphics Generator
Chapter 43: Project — XML Sitemap Generator
Chapter 44: Project — XML Validation Tool
Chapter 45: Project — RSS Feed Reader
Chapter 46: Project — XML to JSON Converter
Chapter 47: Project — SOAP Client Dashboard
Chapter 48: Mini XML Challenges
Chapter 49: Enterprise XML Case Studies
Chapter 50: XML Mastery Recap + Certificate Prep

============================================================
QUALITY REQUIREMENTS
============================================================

- ZERO placeholder content
- 400+ words per section
- 8+ quiz questions every chapter
- 3+ exercises every chapter
- Real XML examples only
- All XML samples must validate correctly
- Real-world XML APIs included
- SVG/XML visual demos
- XML schemas tested
- XPath examples executable
- XSLT transformations working
- Certificate system support
- Progress tracking support
- Chapter completion persistence
- Fully responsive design
- Accessibility support
- Keyboard shortcuts
- Error boundaries everywhere
- Smooth animations
- Loading skeletons
- Search/filter support

============================================================
IMPLEMENTATION ORDER
============================================================

1. Add XML track type
2. Add XML dashboard card
3. Build XML playground/editor
4. Build XML validator system
5. Build XPath tester
6. Build XSLT transformation engine
7. Create XML curriculum data
8. Add XML progress tracking
9. Add XML certificates
10. Test all XML validation systems
11. Test XML tree renderer
12. Test mobile responsiveness
13. Optimize large XML rendering
14. Add XML search indexing
15. Final QA + production optimization
```

---

# JSON Track — Add to existing CodeMastery platform

```terminal
# CODEMASTERY — JSON TRACK ADDITION
# Add JSON as a modern data-interchange track to the existing CodeMastery platform
# 55+ chapters · JSON fundamentals to APIs/databases · Schema validation · Live JSON playground

============================================================
OVERVIEW
============================================================

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a COMPLETE JSON learning track.

This track must follow ALL existing platform systems:
- Same design architecture
- Same curriculum depth
- Same gamification
- Same animations
- Same learning structures
- Same compiler/editor systems
- Same certificate flow
- Same accessibility standards
- Same responsive systems

This JSON track should teach:
- JSON fundamentals
- JSON syntax
- Objects and arrays
- JSON APIs
- JSON parsing
- JSON validation
- JSON schemas
- REST APIs
- Serialization/deserialization
- Local storage
- NoSQL JSON workflows
- MongoDB document structures
- API payloads
- Frontend/backend JSON communication
- Real-world API integrations
- Enterprise JSON systems

Students should finish the track able to:
- Work with modern APIs
- Parse JSON safely
- Design JSON structures
- Validate JSON data
- Consume REST APIs
- Build API clients
- Work with frontend/backend data
- Debug API payloads
- Understand JSON schemas
- Work with databases using JSON

============================================================
JSON PLAYGROUND + API LAB
============================================================

Build:
/components/compiler/JSONPlayground.tsx

Features:

1. Live JSON editor
2. JSON syntax highlighting
3. Real-time validation
4. JSON formatter/prettifier
5. Minify JSON button
6. JSON tree viewer
7. Collapsible nodes
8. Search within JSON
9. JSON path tester
10. JSON schema validator
11. JSON diff viewer
12. JSON to XML converter
13. XML to JSON converter
14. CSV to JSON converter
15. JSON to CSV converter
16. API request simulator
17. Mock REST API panel
18. Local storage sandbox
19. Fetch API integration demos
20. Download .json files

============================================================
CURRICULUM STRUCTURE
============================================================

Create:
/lib/curriculum/json-curriculum.ts

Track metadata:
- id: "json"
- title: "JSON"
- tagline: "The language of APIs and modern applications"
- icon: "🗂️"
- color: "#F7DF1E"
- totalChapters: 55
- estimatedHours: 75

============================================================
FULL JSON CURRICULUM
============================================================

=== PART 1: JSON FUNDAMENTALS (Chapters 1–10) ===

Chapter 1: What Is JSON and Why It Matters?
Chapter 2: JSON Syntax Rules
Chapter 3: JSON Objects
Chapter 4: JSON Arrays
Chapter 5: Nested JSON Structures
Chapter 6: JSON Data Types
Chapter 7: JSON Formatting and Best Practices
Chapter 8: JSON Parsing Basics
Chapter 9: JSON Validation
Chapter 10: JSON vs XML

Topics include:
- Curly braces
- Key-value pairs
- Arrays
- Nested structures
- Strings/numbers/booleans/null
- Escaping characters
- Parsing rules
- Serialization
- Human-readable APIs
- Data interchange systems

============================================================
=== PART 2: JSON WITH JAVASCRIPT (Chapters 11–20) ===
============================================================

Chapter 11: JSON.parse()
Chapter 12: JSON.stringify()
Chapter 13: Fetching JSON APIs
Chapter 14: Async API Handling
Chapter 15: Error Handling in JSON
Chapter 16: Local Storage with JSON
Chapter 17: Session Storage
Chapter 18: Dynamic JSON Rendering
Chapter 19: Working with Large JSON Files
Chapter 20: Debugging JSON APIs

Include:
- Fetch API
- Axios examples
- Async/await
- API authentication basics
- API payload structures
- Frontend rendering
- Table rendering
- Pagination systems

============================================================
=== PART 3: JSON APIS + BACKEND SYSTEMS (Chapters 21–35) ===
============================================================

Chapter 21: REST API Fundamentals
Chapter 22: API Request and Response Structures
Chapter 23: HTTP Methods and JSON Payloads
Chapter 24: JSON in Express.js APIs
Chapter 25: JSON in FastAPI APIs
Chapter 26: JSON Databases Overview
Chapter 27: MongoDB Document Structures
Chapter 28: Firebase JSON Structures
Chapter 29: API Authentication Tokens
Chapter 30: GraphQL JSON Responses
Chapter 31: OpenAPI/Swagger JSON
Chapter 32: JSON Web Tokens (JWT)
Chapter 33: Secure JSON Handling
Chapter 34: API Rate Limits and Optimization
Chapter 35: Enterprise API Architectures

============================================================
=== PART 4: JSON SCHEMAS + VALIDATION (Chapters 36–45) ===
============================================================

Chapter 36: JSON Schema Introduction
Chapter 37: JSON Schema Types
Chapter 38: Validation Rules
Chapter 39: Required Fields
Chapter 40: Nested Schema Validation
Chapter 41: Array Validation
Chapter 42: Enum Validation
Chapter 43: API Payload Validation
Chapter 44: Form Validation with JSON Schema
Chapter 45: Enterprise Validation Systems

Topics:
- AJV validator
- Schema draft standards
- API validation
- Type-safe validation
- Runtime validation
- Error reporting
- Validation pipelines

============================================================
=== PART 5: PROJECTS + ADVANCED JSON (Chapters 46–55) ===
============================================================

Chapter 46: Project — Weather API Dashboard
Chapter 47: Project — JSON API Explorer
Chapter 48: Project — Dynamic Table Generator
Chapter 49: Project — JSON Formatter Tool
Chapter 50: Project — API Testing Playground
Chapter 51: Project — JSON Schema Validator
Chapter 52: Mini JSON Challenges
Chapter 53: Real API Case Studies
Chapter 54: JSON Performance Optimization
Chapter 55: JSON Mastery Recap + Certificate Prep

============================================================
JSON PLAYGROUND TECHNICAL REQUIREMENTS
============================================================

1. Real-time validation engine
2. Monaco/CodeMirror integration
3. API simulation system
4. Mock fetch API layer
5. JSON schema validation engine
6. Tree rendering virtualization
7. Search/filter large JSON files
8. Collapsible nested node renderer
9. Error highlighting system
10. Copy/share/export buttons
11. API response timing simulation
12. Syntax highlighting themes
13. Auto indentation support
14. Undo/redo support
15. Keyboard shortcuts
16. Mobile editor support

============================================================
QUALITY REQUIREMENTS
============================================================

- ZERO placeholder content
- 400+ words per section
- 8+ quiz questions every chapter
- 3+ practical exercises every chapter
- Real API payloads only
- Real JSON schema examples
- Production-ready API demos
- Enterprise architecture explanations
- Secure JSON handling examples
- Performance optimization examples
- Fully responsive UI
- Accessible editor controls
- Searchable curriculum
- Progress persistence
- Certificate generation
- XP reward systems
- Achievement systems
- Dark/light mode support
- Offline caching support

============================================================
IMPLEMENTATION ORDER
============================================================

1. Add JSON track type
2. Add JSON dashboard card
3. Build JSON playground/editor
4. Build validation system
5. Build schema validator
6. Build API sandbox
7. Build JSON tree renderer
8. Create JSON curriculum data
9. Add progress tracking
10. Add certificates
11. Test API simulations
12. Test huge JSON rendering
13. Optimize performance
14. Mobile responsiveness testing
15. Final QA + production optimization
```
