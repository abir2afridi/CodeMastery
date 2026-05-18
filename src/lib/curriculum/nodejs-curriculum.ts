import { Track } from "./types";

export const nodejsTrack: Track = {
  id: "nodejs",
  title: "NodeJS",
  titleBn: "\u09a8\u09cb\u09a1\u099c\u09c7\u098f\u09b8",
  tagline: "Build scalable backend systems with JavaScript",
  taglineBn: "\u099c\u09be\u09ad\u09be\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09aa\u09cd\u099f \u09a6\u09bf\u09af\u09bc\u09c7 \u09b8\u09cd\u0995\u09c7\u09b2\u09c7\u09ac\u09b2 \u09ac\u09cd\u09af\u09be\u0995\u098f\u09a8\u09cd\u09a1 \u09b8\u09bf\u09b8\u09cd\u099f\u09c7\u09ae \u09a8\u09bf\u09b0\u09cd\u09ae\u09be\u09a3 \u0995\u09b0\u09c1\u09a8",
  icon: "\ud83d\udfe2",
  colorVar: "nodejs",
  brandColor: "#68A063",
  glowColor: "rgba(104, 160, 99, 0.3)",
  totalChapters: 85,
  estimatedHours: 140,
  chapters: [
    {
      id: "nodejs-1", number: 1, title: "What Is NodeJS and Why It Exists?", subtitle: "Understanding server-side JavaScript", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand What Is NodeJS and Why It Exists?","Apply What Is NodeJS and Why It Exists? in backend projects","Build with What Is NodeJS and Why It Exists? in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-1-1", title: "Overview", whyItMatters: "What Is NodeJS and Why It Exists? is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nWhat Is NodeJS and Why It Exists? teaches essential NodeJS skills.\n\n```javascript\n// What Is NodeJS and Why It Exists?\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning What Is NodeJS and Why It Exists?');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-1-ex1","title":"Getting Started","description":"Basic What Is NodeJS and Why It Exists?","code":{"nodejs":"// What Is NodeJS and Why It Exists?\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning What Is NodeJS and Why It Exists?');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring What Is NodeJS and Why It Exists?."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-1","type":"mcq","question":"What is the primary focus of What Is NodeJS and Why It Exists??","options":["What Is NodeJS and Why It Exists? concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"What Is NodeJS and Why It Exists? concepts","explanation":"What Is NodeJS and Why It Exists? teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-2", number: 2, title: "Installing NodeJS and npm", subtitle: "Setting up the Node.js environment", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand Installing NodeJS and npm","Apply Installing NodeJS and npm in backend projects","Build with Installing NodeJS and npm in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-2-1", title: "Overview", whyItMatters: "Installing NodeJS and npm is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nInstalling NodeJS and npm teaches essential NodeJS skills.\n\n```javascript\n// Installing NodeJS and npm\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Installing NodeJS and npm');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-2-ex1","title":"Getting Started","description":"Basic Installing NodeJS and npm","code":{"nodejs":"// Installing NodeJS and npm\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Installing NodeJS and npm');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Installing NodeJS and npm."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-2","type":"mcq","question":"What is the primary focus of Installing NodeJS and npm?","options":["Installing NodeJS and npm concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Installing NodeJS and npm concepts","explanation":"Installing NodeJS and npm teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-3", number: 3, title: "Understanding V8 Engine", subtitle: "How Node.js executes JavaScript", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand Understanding V8 Engine","Apply Understanding V8 Engine in backend projects","Build with Understanding V8 Engine in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-3-1", title: "Overview", whyItMatters: "Understanding V8 Engine is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nUnderstanding V8 Engine teaches essential NodeJS skills.\n\n```javascript\n// Understanding V8 Engine\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Understanding V8 Engine');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-3-ex1","title":"Getting Started","description":"Basic Understanding V8 Engine","code":{"nodejs":"// Understanding V8 Engine\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Understanding V8 Engine');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Understanding V8 Engine."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-3","type":"mcq","question":"What is the primary focus of Understanding V8 Engine?","options":["Understanding V8 Engine concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Understanding V8 Engine concepts","explanation":"Understanding V8 Engine teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-4", number: 4, title: "Running JavaScript Outside the Browser", subtitle: "Node.js runtime basics", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand Running JavaScript Outside the Browser","Apply Running JavaScript Outside the Browser in backend projects","Build with Running JavaScript Outside the Browser in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-4-1", title: "Overview", whyItMatters: "Running JavaScript Outside the Browser is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nRunning JavaScript Outside the Browser teaches essential NodeJS skills.\n\n```javascript\n// Running JavaScript Outside the Browser\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Running JavaScript Outside the Browser');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-4-ex1","title":"Getting Started","description":"Basic Running JavaScript Outside the Browser","code":{"nodejs":"// Running JavaScript Outside the Browser\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Running JavaScript Outside the Browser');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Running JavaScript Outside the Browser."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-4","type":"mcq","question":"What is the primary focus of Running JavaScript Outside the Browser?","options":["Running JavaScript Outside the Browser concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Running JavaScript Outside the Browser concepts","explanation":"Running JavaScript Outside the Browser teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-5", number: 5, title: "Modules and require()", subtitle: "Code organization with modules", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand Modules and require()","Apply Modules and require() in backend projects","Build with Modules and require() in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-5-1", title: "Overview", whyItMatters: "Modules and require() is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nModules and require() teaches essential NodeJS skills.\n\n```javascript\n// Modules and require()\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Modules and require()');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-5-ex1","title":"Getting Started","description":"Basic Modules and require()","code":{"nodejs":"// Modules and require()\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Modules and require()');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Modules and require()."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-5","type":"mcq","question":"What is the primary focus of Modules and require()?","options":["Modules and require() concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Modules and require() concepts","explanation":"Modules and require() teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-6", number: 6, title: "CommonJS vs ES Modules", subtitle: "Modern module systems", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand CommonJS vs ES Modules","Apply CommonJS vs ES Modules in backend projects","Build with CommonJS vs ES Modules in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-6-1", title: "Overview", whyItMatters: "CommonJS vs ES Modules is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nCommonJS vs ES Modules teaches essential NodeJS skills.\n\n```javascript\n// CommonJS vs ES Modules\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning CommonJS vs ES Modules');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-6-ex1","title":"Getting Started","description":"Basic CommonJS vs ES Modules","code":{"nodejs":"// CommonJS vs ES Modules\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning CommonJS vs ES Modules');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring CommonJS vs ES Modules."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-6","type":"mcq","question":"What is the primary focus of CommonJS vs ES Modules?","options":["CommonJS vs ES Modules concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"CommonJS vs ES Modules concepts","explanation":"CommonJS vs ES Modules teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-7", number: 7, title: "NodeJS Global Objects", subtitle: "Built-in globals and utilities", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand NodeJS Global Objects","Apply NodeJS Global Objects in backend projects","Build with NodeJS Global Objects in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-7-1", title: "Overview", whyItMatters: "NodeJS Global Objects is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nNodeJS Global Objects teaches essential NodeJS skills.\n\n```javascript\n// NodeJS Global Objects\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning NodeJS Global Objects');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-7-ex1","title":"Getting Started","description":"Basic NodeJS Global Objects","code":{"nodejs":"// NodeJS Global Objects\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning NodeJS Global Objects');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring NodeJS Global Objects."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-7","type":"mcq","question":"What is the primary focus of NodeJS Global Objects?","options":["NodeJS Global Objects concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"NodeJS Global Objects concepts","explanation":"NodeJS Global Objects teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-8", number: 8, title: "The Event Loop", subtitle: "Non-blocking I/O architecture", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand The Event Loop","Apply The Event Loop in backend projects","Build with The Event Loop in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-8-1", title: "Overview", whyItMatters: "The Event Loop is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nThe Event Loop teaches essential NodeJS skills.\n\n```javascript\n// The Event Loop\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning The Event Loop');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-8-ex1","title":"Getting Started","description":"Basic The Event Loop","code":{"nodejs":"// The Event Loop\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning The Event Loop');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring The Event Loop."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-8","type":"mcq","question":"What is the primary focus of The Event Loop?","options":["The Event Loop concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"The Event Loop concepts","explanation":"The Event Loop teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-9", number: 9, title: "Asynchronous JavaScript in NodeJS", subtitle: "Callbacks, promises, async/await", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Asynchronous JavaScript in NodeJS","Apply Asynchronous JavaScript in NodeJS in backend projects","Build with Asynchronous JavaScript in NodeJS in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-9-1", title: "Overview", whyItMatters: "Asynchronous JavaScript in NodeJS is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAsynchronous JavaScript in NodeJS teaches essential NodeJS skills.\n\n```javascript\n// Asynchronous JavaScript in NodeJS\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Asynchronous JavaScript in NodeJS');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-9-ex1","title":"Getting Started","description":"Basic Asynchronous JavaScript in NodeJS","code":{"nodejs":"// Asynchronous JavaScript in NodeJS\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Asynchronous JavaScript in NodeJS');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Asynchronous JavaScript in NodeJS."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-9","type":"mcq","question":"What is the primary focus of Asynchronous JavaScript in NodeJS?","options":["Asynchronous JavaScript in NodeJS concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Asynchronous JavaScript in NodeJS concepts","explanation":"Asynchronous JavaScript in NodeJS teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-10", number: 10, title: "File System Module (fs)", subtitle: "Reading and writing files", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand File System Module (fs)","Apply File System Module (fs) in backend projects","Build with File System Module (fs) in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-10-1", title: "Overview", whyItMatters: "File System Module (fs) is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nFile System Module (fs) teaches essential NodeJS skills.\n\n```javascript\n// File System Module (fs)\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning File System Module (fs)');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-10-ex1","title":"Getting Started","description":"Basic File System Module (fs)","code":{"nodejs":"// File System Module (fs)\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning File System Module (fs)');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring File System Module (fs)."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-10","type":"mcq","question":"What is the primary focus of File System Module (fs)?","options":["File System Module (fs) concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"File System Module (fs) concepts","explanation":"File System Module (fs) teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-11", number: 11, title: "Path Module", subtitle: "File path manipulation", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Path Module","Apply Path Module in backend projects","Build with Path Module in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-11-1", title: "Overview", whyItMatters: "Path Module is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPath Module teaches essential NodeJS skills.\n\n```javascript\n// Path Module\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Path Module');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-11-ex1","title":"Getting Started","description":"Basic Path Module","code":{"nodejs":"// Path Module\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Path Module');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Path Module."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-11","type":"mcq","question":"What is the primary focus of Path Module?","options":["Path Module concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Path Module concepts","explanation":"Path Module teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-12", number: 12, title: "Streams and Buffers", subtitle: "Efficient data handling", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand Streams and Buffers","Apply Streams and Buffers in backend projects","Build with Streams and Buffers in real applications"], partLabel: "Part 1: NodeJS Fundamentals",
      sections: [
        {
          id: "nodejs-12-1", title: "Overview", whyItMatters: "Streams and Buffers is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nStreams and Buffers teaches essential NodeJS skills.\n\n```javascript\n// Streams and Buffers\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Streams and Buffers');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-12-ex1","title":"Getting Started","description":"Basic Streams and Buffers","code":{"nodejs":"// Streams and Buffers\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Streams and Buffers');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Streams and Buffers."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-12","type":"mcq","question":"What is the primary focus of Streams and Buffers?","options":["Streams and Buffers concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Streams and Buffers concepts","explanation":"Streams and Buffers teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-13", number: 13, title: "Introduction to ExpressJS", subtitle: "Web framework for Node.js", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Introduction to ExpressJS","Apply Introduction to ExpressJS in backend projects","Build with Introduction to ExpressJS in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-13-1", title: "Overview", whyItMatters: "Introduction to ExpressJS is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nIntroduction to ExpressJS teaches essential NodeJS skills.\n\n```javascript\n// Introduction to ExpressJS\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Introduction to ExpressJS');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-13-ex1","title":"Getting Started","description":"Basic Introduction to ExpressJS","code":{"nodejs":"// Introduction to ExpressJS\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Introduction to ExpressJS');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Introduction to ExpressJS."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-13","type":"mcq","question":"What is the primary focus of Introduction to ExpressJS?","options":["Introduction to ExpressJS concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Introduction to ExpressJS concepts","explanation":"Introduction to ExpressJS teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-14", number: 14, title: "Creating Your First Server", subtitle: "Hello world with Express", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Creating Your First Server","Apply Creating Your First Server in backend projects","Build with Creating Your First Server in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-14-1", title: "Overview", whyItMatters: "Creating Your First Server is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nCreating Your First Server teaches essential NodeJS skills.\n\n```javascript\n// Creating Your First Server\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Creating Your First Server');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-14-ex1","title":"Getting Started","description":"Basic Creating Your First Server","code":{"nodejs":"// Creating Your First Server\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Creating Your First Server');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Creating Your First Server."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-14","type":"mcq","question":"What is the primary focus of Creating Your First Server?","options":["Creating Your First Server concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Creating Your First Server concepts","explanation":"Creating Your First Server teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-15", number: 15, title: "Routing Fundamentals", subtitle: "HTTP method routing", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Routing Fundamentals","Apply Routing Fundamentals in backend projects","Build with Routing Fundamentals in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-15-1", title: "Overview", whyItMatters: "Routing Fundamentals is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nRouting Fundamentals teaches essential NodeJS skills.\n\n```javascript\n// Routing Fundamentals\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Routing Fundamentals');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-15-ex1","title":"Getting Started","description":"Basic Routing Fundamentals","code":{"nodejs":"// Routing Fundamentals\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Routing Fundamentals');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Routing Fundamentals."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-15","type":"mcq","question":"What is the primary focus of Routing Fundamentals?","options":["Routing Fundamentals concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Routing Fundamentals concepts","explanation":"Routing Fundamentals teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-16", number: 16, title: "Middleware Deep Dive", subtitle: "Request processing pipeline", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand Middleware Deep Dive","Apply Middleware Deep Dive in backend projects","Build with Middleware Deep Dive in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-16-1", title: "Overview", whyItMatters: "Middleware Deep Dive is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMiddleware Deep Dive teaches essential NodeJS skills.\n\n```javascript\n// Middleware Deep Dive\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Middleware Deep Dive');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-16-ex1","title":"Getting Started","description":"Basic Middleware Deep Dive","code":{"nodejs":"// Middleware Deep Dive\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Middleware Deep Dive');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Middleware Deep Dive."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-16","type":"mcq","question":"What is the primary focus of Middleware Deep Dive?","options":["Middleware Deep Dive concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Middleware Deep Dive concepts","explanation":"Middleware Deep Dive teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-17", number: 17, title: "Request and Response Objects", subtitle: "Working with HTTP messages", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Request and Response Objects","Apply Request and Response Objects in backend projects","Build with Request and Response Objects in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-17-1", title: "Overview", whyItMatters: "Request and Response Objects is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nRequest and Response Objects teaches essential NodeJS skills.\n\n```javascript\n// Request and Response Objects\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Request and Response Objects');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-17-ex1","title":"Getting Started","description":"Basic Request and Response Objects","code":{"nodejs":"// Request and Response Objects\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Request and Response Objects');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Request and Response Objects."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-17","type":"mcq","question":"What is the primary focus of Request and Response Objects?","options":["Request and Response Objects concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Request and Response Objects concepts","explanation":"Request and Response Objects teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-18", number: 18, title: "REST API Fundamentals", subtitle: "Building RESTful services", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand REST API Fundamentals","Apply REST API Fundamentals in backend projects","Build with REST API Fundamentals in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-18-1", title: "Overview", whyItMatters: "REST API Fundamentals is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nREST API Fundamentals teaches essential NodeJS skills.\n\n```javascript\n// REST API Fundamentals\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning REST API Fundamentals');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-18-ex1","title":"Getting Started","description":"Basic REST API Fundamentals","code":{"nodejs":"// REST API Fundamentals\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning REST API Fundamentals');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring REST API Fundamentals."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-18","type":"mcq","question":"What is the primary focus of REST API Fundamentals?","options":["REST API Fundamentals concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"REST API Fundamentals concepts","explanation":"REST API Fundamentals teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-19", number: 19, title: "CRUD API Development", subtitle: "Create, read, update, delete", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand CRUD API Development","Apply CRUD API Development in backend projects","Build with CRUD API Development in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-19-1", title: "Overview", whyItMatters: "CRUD API Development is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nCRUD API Development teaches essential NodeJS skills.\n\n```javascript\n// CRUD API Development\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning CRUD API Development');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-19-ex1","title":"Getting Started","description":"Basic CRUD API Development","code":{"nodejs":"// CRUD API Development\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning CRUD API Development');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring CRUD API Development."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-19","type":"mcq","question":"What is the primary focus of CRUD API Development?","options":["CRUD API Development concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"CRUD API Development concepts","explanation":"CRUD API Development teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-20", number: 20, title: "API Error Handling", subtitle: "Graceful error responses", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand API Error Handling","Apply API Error Handling in backend projects","Build with API Error Handling in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-20-1", title: "Overview", whyItMatters: "API Error Handling is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAPI Error Handling teaches essential NodeJS skills.\n\n```javascript\n// API Error Handling\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning API Error Handling');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-20-ex1","title":"Getting Started","description":"Basic API Error Handling","code":{"nodejs":"// API Error Handling\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning API Error Handling');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring API Error Handling."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-20","type":"mcq","question":"What is the primary focus of API Error Handling?","options":["API Error Handling concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"API Error Handling concepts","explanation":"API Error Handling teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-21", number: 21, title: "Environment Variables", subtitle: "Config management with dotenv", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Environment Variables","Apply Environment Variables in backend projects","Build with Environment Variables in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-21-1", title: "Overview", whyItMatters: "Environment Variables is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nEnvironment Variables teaches essential NodeJS skills.\n\n```javascript\n// Environment Variables\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Environment Variables');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-21-ex1","title":"Getting Started","description":"Basic Environment Variables","code":{"nodejs":"// Environment Variables\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Environment Variables');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Environment Variables."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-21","type":"mcq","question":"What is the primary focus of Environment Variables?","options":["Environment Variables concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Environment Variables concepts","explanation":"Environment Variables teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-22", number: 22, title: "Express Routers", subtitle: "Modular route organization", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Express Routers","Apply Express Routers in backend projects","Build with Express Routers in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-22-1", title: "Overview", whyItMatters: "Express Routers is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nExpress Routers teaches essential NodeJS skills.\n\n```javascript\n// Express Routers\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Express Routers');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-22-ex1","title":"Getting Started","description":"Basic Express Routers","code":{"nodejs":"// Express Routers\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Express Routers');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Express Routers."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-22","type":"mcq","question":"What is the primary focus of Express Routers?","options":["Express Routers concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Express Routers concepts","explanation":"Express Routers teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-23", number: 23, title: "MVC Architecture", subtitle: "Model-View-Controller pattern", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand MVC Architecture","Apply MVC Architecture in backend projects","Build with MVC Architecture in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-23-1", title: "Overview", whyItMatters: "MVC Architecture is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMVC Architecture teaches essential NodeJS skills.\n\n```javascript\n// MVC Architecture\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning MVC Architecture');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-23-ex1","title":"Getting Started","description":"Basic MVC Architecture","code":{"nodejs":"// MVC Architecture\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning MVC Architecture');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring MVC Architecture."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-23","type":"mcq","question":"What is the primary focus of MVC Architecture?","options":["MVC Architecture concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"MVC Architecture concepts","explanation":"MVC Architecture teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-24", number: 24, title: "API Validation", subtitle: "Input validation with Joi/Zod", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand API Validation","Apply API Validation in backend projects","Build with API Validation in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-24-1", title: "Overview", whyItMatters: "API Validation is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAPI Validation teaches essential NodeJS skills.\n\n```javascript\n// API Validation\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning API Validation');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-24-ex1","title":"Getting Started","description":"Basic API Validation","code":{"nodejs":"// API Validation\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning API Validation');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring API Validation."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-24","type":"mcq","question":"What is the primary focus of API Validation?","options":["API Validation concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"API Validation concepts","explanation":"API Validation teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-25", number: 25, title: "API Security Basics", subtitle: "Helmet, rate limiting, CORS", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand API Security Basics","Apply API Security Basics in backend projects","Build with API Security Basics in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-25-1", title: "Overview", whyItMatters: "API Security Basics is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAPI Security Basics teaches essential NodeJS skills.\n\n```javascript\n// API Security Basics\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning API Security Basics');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-25-ex1","title":"Getting Started","description":"Basic API Security Basics","code":{"nodejs":"// API Security Basics\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning API Security Basics');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring API Security Basics."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-25","type":"mcq","question":"What is the primary focus of API Security Basics?","options":["API Security Basics concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"API Security Basics concepts","explanation":"API Security Basics teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-26", number: 26, title: "CORS and Cross-Origin Requests", subtitle: "Managing cross-origin access", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand CORS and Cross-Origin Requests","Apply CORS and Cross-Origin Requests in backend projects","Build with CORS and Cross-Origin Requests in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-26-1", title: "Overview", whyItMatters: "CORS and Cross-Origin Requests is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nCORS and Cross-Origin Requests teaches essential NodeJS skills.\n\n```javascript\n// CORS and Cross-Origin Requests\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning CORS and Cross-Origin Requests');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-26-ex1","title":"Getting Started","description":"Basic CORS and Cross-Origin Requests","code":{"nodejs":"// CORS and Cross-Origin Requests\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning CORS and Cross-Origin Requests');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring CORS and Cross-Origin Requests."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-26","type":"mcq","question":"What is the primary focus of CORS and Cross-Origin Requests?","options":["CORS and Cross-Origin Requests concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"CORS and Cross-Origin Requests concepts","explanation":"CORS and Cross-Origin Requests teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-27", number: 27, title: "Logging and Monitoring", subtitle: "Winston, Morgan, structured logs", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Logging and Monitoring","Apply Logging and Monitoring in backend projects","Build with Logging and Monitoring in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-27-1", title: "Overview", whyItMatters: "Logging and Monitoring is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nLogging and Monitoring teaches essential NodeJS skills.\n\n```javascript\n// Logging and Monitoring\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Logging and Monitoring');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-27-ex1","title":"Getting Started","description":"Basic Logging and Monitoring","code":{"nodejs":"// Logging and Monitoring\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Logging and Monitoring');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Logging and Monitoring."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-27","type":"mcq","question":"What is the primary focus of Logging and Monitoring?","options":["Logging and Monitoring concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Logging and Monitoring concepts","explanation":"Logging and Monitoring teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-28", number: 28, title: "API Documentation with Swagger", subtitle: "OpenAPI documentation", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand API Documentation with Swagger","Apply API Documentation with Swagger in backend projects","Build with API Documentation with Swagger in real applications"], partLabel: "Part 2: ExpressJS and APIs",
      sections: [
        {
          id: "nodejs-28-1", title: "Overview", whyItMatters: "API Documentation with Swagger is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAPI Documentation with Swagger teaches essential NodeJS skills.\n\n```javascript\n// API Documentation with Swagger\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning API Documentation with Swagger');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-28-ex1","title":"Getting Started","description":"Basic API Documentation with Swagger","code":{"nodejs":"// API Documentation with Swagger\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning API Documentation with Swagger');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring API Documentation with Swagger."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-28","type":"mcq","question":"What is the primary focus of API Documentation with Swagger?","options":["API Documentation with Swagger concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"API Documentation with Swagger concepts","explanation":"API Documentation with Swagger teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-29", number: 29, title: "MongoDB Basics", subtitle: "NoSQL database with Node.js", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand MongoDB Basics","Apply MongoDB Basics in backend projects","Build with MongoDB Basics in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-29-1", title: "Overview", whyItMatters: "MongoDB Basics is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMongoDB Basics teaches essential NodeJS skills.\n\n```javascript\n// MongoDB Basics\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning MongoDB Basics');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-29-ex1","title":"Getting Started","description":"Basic MongoDB Basics","code":{"nodejs":"// MongoDB Basics\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning MongoDB Basics');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring MongoDB Basics."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-29","type":"mcq","question":"What is the primary focus of MongoDB Basics?","options":["MongoDB Basics concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"MongoDB Basics concepts","explanation":"MongoDB Basics teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-30", number: 30, title: "Mongoose ODM", subtitle: "MongoDB object modeling", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand Mongoose ODM","Apply Mongoose ODM in backend projects","Build with Mongoose ODM in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-30-1", title: "Overview", whyItMatters: "Mongoose ODM is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMongoose ODM teaches essential NodeJS skills.\n\n```javascript\n// Mongoose ODM\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Mongoose ODM');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-30-ex1","title":"Getting Started","description":"Basic Mongoose ODM","code":{"nodejs":"// Mongoose ODM\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Mongoose ODM');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Mongoose ODM."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-30","type":"mcq","question":"What is the primary focus of Mongoose ODM?","options":["Mongoose ODM concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Mongoose ODM concepts","explanation":"Mongoose ODM teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-31", number: 31, title: "SQL with NodeJS", subtitle: "Relational database integration", difficulty: "Intermediate", estimatedMinutes: 75, xpReward: 70, prerequisites: [], learningObjectives: ["Understand SQL with NodeJS","Apply SQL with NodeJS in backend projects","Build with SQL with NodeJS in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-31-1", title: "Overview", whyItMatters: "SQL with NodeJS is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nSQL with NodeJS teaches essential NodeJS skills.\n\n```javascript\n// SQL with NodeJS\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning SQL with NodeJS');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-31-ex1","title":"Getting Started","description":"Basic SQL with NodeJS","code":{"nodejs":"// SQL with NodeJS\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning SQL with NodeJS');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring SQL with NodeJS."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-31","type":"mcq","question":"What is the primary focus of SQL with NodeJS?","options":["SQL with NodeJS concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"SQL with NodeJS concepts","explanation":"SQL with NodeJS teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-32", number: 32, title: "Prisma ORM", subtitle: "Modern database toolkit", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Prisma ORM","Apply Prisma ORM in backend projects","Build with Prisma ORM in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-32-1", title: "Overview", whyItMatters: "Prisma ORM is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPrisma ORM teaches essential NodeJS skills.\n\n```javascript\n// Prisma ORM\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Prisma ORM');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-32-ex1","title":"Getting Started","description":"Basic Prisma ORM","code":{"nodejs":"// Prisma ORM\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Prisma ORM');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Prisma ORM."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-32","type":"mcq","question":"What is the primary focus of Prisma ORM?","options":["Prisma ORM concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Prisma ORM concepts","explanation":"Prisma ORM teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-33", number: 33, title: "User Authentication Fundamentals", subtitle: "Authentication concepts", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand User Authentication Fundamentals","Apply User Authentication Fundamentals in backend projects","Build with User Authentication Fundamentals in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-33-1", title: "Overview", whyItMatters: "User Authentication Fundamentals is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nUser Authentication Fundamentals teaches essential NodeJS skills.\n\n```javascript\n// User Authentication Fundamentals\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning User Authentication Fundamentals');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-33-ex1","title":"Getting Started","description":"Basic User Authentication Fundamentals","code":{"nodejs":"// User Authentication Fundamentals\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning User Authentication Fundamentals');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring User Authentication Fundamentals."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-33","type":"mcq","question":"What is the primary focus of User Authentication Fundamentals?","options":["User Authentication Fundamentals concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"User Authentication Fundamentals concepts","explanation":"User Authentication Fundamentals teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-34", number: 34, title: "Password Hashing with bcrypt", subtitle: "Secure password storage", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Password Hashing with bcrypt","Apply Password Hashing with bcrypt in backend projects","Build with Password Hashing with bcrypt in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-34-1", title: "Overview", whyItMatters: "Password Hashing with bcrypt is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPassword Hashing with bcrypt teaches essential NodeJS skills.\n\n```javascript\n// Password Hashing with bcrypt\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Password Hashing with bcrypt');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-34-ex1","title":"Getting Started","description":"Basic Password Hashing with bcrypt","code":{"nodejs":"// Password Hashing with bcrypt\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Password Hashing with bcrypt');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Password Hashing with bcrypt."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-34","type":"mcq","question":"What is the primary focus of Password Hashing with bcrypt?","options":["Password Hashing with bcrypt concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Password Hashing with bcrypt concepts","explanation":"Password Hashing with bcrypt teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-35", number: 35, title: "Sessions and Cookies", subtitle: "Server-side session management", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Sessions and Cookies","Apply Sessions and Cookies in backend projects","Build with Sessions and Cookies in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-35-1", title: "Overview", whyItMatters: "Sessions and Cookies is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nSessions and Cookies teaches essential NodeJS skills.\n\n```javascript\n// Sessions and Cookies\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Sessions and Cookies');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-35-ex1","title":"Getting Started","description":"Basic Sessions and Cookies","code":{"nodejs":"// Sessions and Cookies\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Sessions and Cookies');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Sessions and Cookies."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-35","type":"mcq","question":"What is the primary focus of Sessions and Cookies?","options":["Sessions and Cookies concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Sessions and Cookies concepts","explanation":"Sessions and Cookies teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-36", number: 36, title: "JWT Authentication", subtitle: "Token-based authentication", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand JWT Authentication","Apply JWT Authentication in backend projects","Build with JWT Authentication in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-36-1", title: "Overview", whyItMatters: "JWT Authentication is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nJWT Authentication teaches essential NodeJS skills.\n\n```javascript\n// JWT Authentication\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning JWT Authentication');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-36-ex1","title":"Getting Started","description":"Basic JWT Authentication","code":{"nodejs":"// JWT Authentication\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning JWT Authentication');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring JWT Authentication."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-36","type":"mcq","question":"What is the primary focus of JWT Authentication?","options":["JWT Authentication concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"JWT Authentication concepts","explanation":"JWT Authentication teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-37", number: 37, title: "Role-Based Access Control", subtitle: "Authorization systems", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Role-Based Access Control","Apply Role-Based Access Control in backend projects","Build with Role-Based Access Control in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-37-1", title: "Overview", whyItMatters: "Role-Based Access Control is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nRole-Based Access Control teaches essential NodeJS skills.\n\n```javascript\n// Role-Based Access Control\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Role-Based Access Control');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-37-ex1","title":"Getting Started","description":"Basic Role-Based Access Control","code":{"nodejs":"// Role-Based Access Control\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Role-Based Access Control');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Role-Based Access Control."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-37","type":"mcq","question":"What is the primary focus of Role-Based Access Control?","options":["Role-Based Access Control concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Role-Based Access Control concepts","explanation":"Role-Based Access Control teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-38", number: 38, title: "OAuth Basics", subtitle: "Third-party authentication", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand OAuth Basics","Apply OAuth Basics in backend projects","Build with OAuth Basics in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-38-1", title: "Overview", whyItMatters: "OAuth Basics is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nOAuth Basics teaches essential NodeJS skills.\n\n```javascript\n// OAuth Basics\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning OAuth Basics');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-38-ex1","title":"Getting Started","description":"Basic OAuth Basics","code":{"nodejs":"// OAuth Basics\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning OAuth Basics');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring OAuth Basics."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-38","type":"mcq","question":"What is the primary focus of OAuth Basics?","options":["OAuth Basics concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"OAuth Basics concepts","explanation":"OAuth Basics teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-39", number: 39, title: "Authentication Security", subtitle: "Best practices and threats", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Authentication Security","Apply Authentication Security in backend projects","Build with Authentication Security in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-39-1", title: "Overview", whyItMatters: "Authentication Security is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAuthentication Security teaches essential NodeJS skills.\n\n```javascript\n// Authentication Security\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Authentication Security');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-39-ex1","title":"Getting Started","description":"Basic Authentication Security","code":{"nodejs":"// Authentication Security\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Authentication Security');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Authentication Security."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-39","type":"mcq","question":"What is the primary focus of Authentication Security?","options":["Authentication Security concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Authentication Security concepts","explanation":"Authentication Security teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-40", number: 40, title: "File Upload Systems", subtitle: "Multer and cloud storage", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand File Upload Systems","Apply File Upload Systems in backend projects","Build with File Upload Systems in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-40-1", title: "Overview", whyItMatters: "File Upload Systems is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nFile Upload Systems teaches essential NodeJS skills.\n\n```javascript\n// File Upload Systems\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning File Upload Systems');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-40-ex1","title":"Getting Started","description":"Basic File Upload Systems","code":{"nodejs":"// File Upload Systems\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning File Upload Systems');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring File Upload Systems."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-40","type":"mcq","question":"What is the primary focus of File Upload Systems?","options":["File Upload Systems concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"File Upload Systems concepts","explanation":"File Upload Systems teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-41", number: 41, title: "Cloud Storage Integrations", subtitle: "S3, Cloudinary, Firebase", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 80, prerequisites: [], learningObjectives: ["Understand Cloud Storage Integrations","Apply Cloud Storage Integrations in backend projects","Build with Cloud Storage Integrations in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-41-1", title: "Overview", whyItMatters: "Cloud Storage Integrations is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nCloud Storage Integrations teaches essential NodeJS skills.\n\n```javascript\n// Cloud Storage Integrations\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Cloud Storage Integrations');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-41-ex1","title":"Getting Started","description":"Basic Cloud Storage Integrations","code":{"nodejs":"// Cloud Storage Integrations\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Cloud Storage Integrations');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Cloud Storage Integrations."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-41","type":"mcq","question":"What is the primary focus of Cloud Storage Integrations?","options":["Cloud Storage Integrations concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Cloud Storage Integrations concepts","explanation":"Cloud Storage Integrations teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-42", number: 42, title: "Email Sending Systems", subtitle: "Nodemailer and SendGrid", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Email Sending Systems","Apply Email Sending Systems in backend projects","Build with Email Sending Systems in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-42-1", title: "Overview", whyItMatters: "Email Sending Systems is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nEmail Sending Systems teaches essential NodeJS skills.\n\n```javascript\n// Email Sending Systems\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Email Sending Systems');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-42-ex1","title":"Getting Started","description":"Basic Email Sending Systems","code":{"nodejs":"// Email Sending Systems\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Email Sending Systems');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Email Sending Systems."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-42","type":"mcq","question":"What is the primary focus of Email Sending Systems?","options":["Email Sending Systems concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Email Sending Systems concepts","explanation":"Email Sending Systems teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-43", number: 43, title: "Password Reset Systems", subtitle: "Secure reset workflows", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Password Reset Systems","Apply Password Reset Systems in backend projects","Build with Password Reset Systems in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-43-1", title: "Overview", whyItMatters: "Password Reset Systems is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPassword Reset Systems teaches essential NodeJS skills.\n\n```javascript\n// Password Reset Systems\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Password Reset Systems');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-43-ex1","title":"Getting Started","description":"Basic Password Reset Systems","code":{"nodejs":"// Password Reset Systems\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Password Reset Systems');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Password Reset Systems."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-43","type":"mcq","question":"What is the primary focus of Password Reset Systems?","options":["Password Reset Systems concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Password Reset Systems concepts","explanation":"Password Reset Systems teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-44", number: 44, title: "API Rate Limiting", subtitle: "express-rate-limit and Redis", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand API Rate Limiting","Apply API Rate Limiting in backend projects","Build with API Rate Limiting in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-44-1", title: "Overview", whyItMatters: "API Rate Limiting is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAPI Rate Limiting teaches essential NodeJS skills.\n\n```javascript\n// API Rate Limiting\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning API Rate Limiting');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-44-ex1","title":"Getting Started","description":"Basic API Rate Limiting","code":{"nodejs":"// API Rate Limiting\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning API Rate Limiting');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring API Rate Limiting."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-44","type":"mcq","question":"What is the primary focus of API Rate Limiting?","options":["API Rate Limiting concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"API Rate Limiting concepts","explanation":"API Rate Limiting teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-45", number: 45, title: "Secure Backend Architecture", subtitle: "Enterprise security patterns", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Secure Backend Architecture","Apply Secure Backend Architecture in backend projects","Build with Secure Backend Architecture in real applications"], partLabel: "Part 3: Databases and Authentication",
      sections: [
        {
          id: "nodejs-45-1", title: "Overview", whyItMatters: "Secure Backend Architecture is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nSecure Backend Architecture teaches essential NodeJS skills.\n\n```javascript\n// Secure Backend Architecture\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Secure Backend Architecture');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-45-ex1","title":"Getting Started","description":"Basic Secure Backend Architecture","code":{"nodejs":"// Secure Backend Architecture\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Secure Backend Architecture');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Secure Backend Architecture."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-45","type":"mcq","question":"What is the primary focus of Secure Backend Architecture?","options":["Secure Backend Architecture concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Secure Backend Architecture concepts","explanation":"Secure Backend Architecture teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-46", number: 46, title: "WebSockets and Real-Time Apps", subtitle: "Bi-directional communication", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand WebSockets and Real-Time Apps","Apply WebSockets and Real-Time Apps in backend projects","Build with WebSockets and Real-Time Apps in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-46-1", title: "Overview", whyItMatters: "WebSockets and Real-Time Apps is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nWebSockets and Real-Time Apps teaches essential NodeJS skills.\n\n```javascript\n// WebSockets and Real-Time Apps\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning WebSockets and Real-Time Apps');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-46-ex1","title":"Getting Started","description":"Basic WebSockets and Real-Time Apps","code":{"nodejs":"// WebSockets and Real-Time Apps\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning WebSockets and Real-Time Apps');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring WebSockets and Real-Time Apps."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-46","type":"mcq","question":"What is the primary focus of WebSockets and Real-Time Apps?","options":["WebSockets and Real-Time Apps concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"WebSockets and Real-Time Apps concepts","explanation":"WebSockets and Real-Time Apps teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-47", number: 47, title: "Socket.IO Chat Applications", subtitle: "Real-time messaging", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 80, prerequisites: [], learningObjectives: ["Understand Socket.IO Chat Applications","Apply Socket.IO Chat Applications in backend projects","Build with Socket.IO Chat Applications in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-47-1", title: "Overview", whyItMatters: "Socket.IO Chat Applications is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nSocket.IO Chat Applications teaches essential NodeJS skills.\n\n```javascript\n// Socket.IO Chat Applications\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Socket.IO Chat Applications');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-47-ex1","title":"Getting Started","description":"Basic Socket.IO Chat Applications","code":{"nodejs":"// Socket.IO Chat Applications\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Socket.IO Chat Applications');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Socket.IO Chat Applications."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-47","type":"mcq","question":"What is the primary focus of Socket.IO Chat Applications?","options":["Socket.IO Chat Applications concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Socket.IO Chat Applications concepts","explanation":"Socket.IO Chat Applications teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-48", number: 48, title: "Event Emitters", subtitle: "Custom event-driven patterns", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Event Emitters","Apply Event Emitters in backend projects","Build with Event Emitters in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-48-1", title: "Overview", whyItMatters: "Event Emitters is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nEvent Emitters teaches essential NodeJS skills.\n\n```javascript\n// Event Emitters\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Event Emitters');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-48-ex1","title":"Getting Started","description":"Basic Event Emitters","code":{"nodejs":"// Event Emitters\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Event Emitters');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Event Emitters."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-48","type":"mcq","question":"What is the primary focus of Event Emitters?","options":["Event Emitters concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Event Emitters concepts","explanation":"Event Emitters teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-49", number: 49, title: "Child Processes", subtitle: "Running system commands", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Child Processes","Apply Child Processes in backend projects","Build with Child Processes in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-49-1", title: "Overview", whyItMatters: "Child Processes is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nChild Processes teaches essential NodeJS skills.\n\n```javascript\n// Child Processes\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Child Processes');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-49-ex1","title":"Getting Started","description":"Basic Child Processes","code":{"nodejs":"// Child Processes\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Child Processes');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Child Processes."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-49","type":"mcq","question":"What is the primary focus of Child Processes?","options":["Child Processes concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Child Processes concepts","explanation":"Child Processes teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-50", number: 50, title: "Worker Threads", subtitle: "Parallel JavaScript execution", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Worker Threads","Apply Worker Threads in backend projects","Build with Worker Threads in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-50-1", title: "Overview", whyItMatters: "Worker Threads is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nWorker Threads teaches essential NodeJS skills.\n\n```javascript\n// Worker Threads\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Worker Threads');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-50-ex1","title":"Getting Started","description":"Basic Worker Threads","code":{"nodejs":"// Worker Threads\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Worker Threads');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Worker Threads."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-50","type":"mcq","question":"What is the primary focus of Worker Threads?","options":["Worker Threads concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Worker Threads concepts","explanation":"Worker Threads teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-51", number: 51, title: "Clustering in NodeJS", subtitle: "Multi-core performance", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Clustering in NodeJS","Apply Clustering in NodeJS in backend projects","Build with Clustering in NodeJS in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-51-1", title: "Overview", whyItMatters: "Clustering in NodeJS is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nClustering in NodeJS teaches essential NodeJS skills.\n\n```javascript\n// Clustering in NodeJS\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Clustering in NodeJS');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-51-ex1","title":"Getting Started","description":"Basic Clustering in NodeJS","code":{"nodejs":"// Clustering in NodeJS\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Clustering in NodeJS');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Clustering in NodeJS."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-51","type":"mcq","question":"What is the primary focus of Clustering in NodeJS?","options":["Clustering in NodeJS concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Clustering in NodeJS concepts","explanation":"Clustering in NodeJS teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-52", number: 52, title: "Streams Deep Dive", subtitle: "Advanced stream patterns", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Streams Deep Dive","Apply Streams Deep Dive in backend projects","Build with Streams Deep Dive in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-52-1", title: "Overview", whyItMatters: "Streams Deep Dive is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nStreams Deep Dive teaches essential NodeJS skills.\n\n```javascript\n// Streams Deep Dive\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Streams Deep Dive');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-52-ex1","title":"Getting Started","description":"Basic Streams Deep Dive","code":{"nodejs":"// Streams Deep Dive\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Streams Deep Dive');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Streams Deep Dive."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-52","type":"mcq","question":"What is the primary focus of Streams Deep Dive?","options":["Streams Deep Dive concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Streams Deep Dive concepts","explanation":"Streams Deep Dive teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-53", number: 53, title: "Background Jobs and Queues", subtitle: "Bull, Agenda, job scheduling", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Background Jobs and Queues","Apply Background Jobs and Queues in backend projects","Build with Background Jobs and Queues in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-53-1", title: "Overview", whyItMatters: "Background Jobs and Queues is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nBackground Jobs and Queues teaches essential NodeJS skills.\n\n```javascript\n// Background Jobs and Queues\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Background Jobs and Queues');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-53-ex1","title":"Getting Started","description":"Basic Background Jobs and Queues","code":{"nodejs":"// Background Jobs and Queues\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Background Jobs and Queues');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Background Jobs and Queues."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-53","type":"mcq","question":"What is the primary focus of Background Jobs and Queues?","options":["Background Jobs and Queues concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Background Jobs and Queues concepts","explanation":"Background Jobs and Queues teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-54", number: 54, title: "Redis Caching", subtitle: "In-memory caching strategies", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Redis Caching","Apply Redis Caching in backend projects","Build with Redis Caching in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-54-1", title: "Overview", whyItMatters: "Redis Caching is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nRedis Caching teaches essential NodeJS skills.\n\n```javascript\n// Redis Caching\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Redis Caching');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-54-ex1","title":"Getting Started","description":"Basic Redis Caching","code":{"nodejs":"// Redis Caching\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Redis Caching');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Redis Caching."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-54","type":"mcq","question":"What is the primary focus of Redis Caching?","options":["Redis Caching concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Redis Caching concepts","explanation":"Redis Caching teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-55", number: 55, title: "GraphQL APIs", subtitle: "Query language for APIs", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 80, prerequisites: [], learningObjectives: ["Understand GraphQL APIs","Apply GraphQL APIs in backend projects","Build with GraphQL APIs in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-55-1", title: "Overview", whyItMatters: "GraphQL APIs is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nGraphQL APIs teaches essential NodeJS skills.\n\n```javascript\n// GraphQL APIs\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning GraphQL APIs');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-55-ex1","title":"Getting Started","description":"Basic GraphQL APIs","code":{"nodejs":"// GraphQL APIs\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning GraphQL APIs');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring GraphQL APIs."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-55","type":"mcq","question":"What is the primary focus of GraphQL APIs?","options":["GraphQL APIs concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"GraphQL APIs concepts","explanation":"GraphQL APIs teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-56", number: 56, title: "Microservices Basics", subtitle: "Distributed system architecture", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Microservices Basics","Apply Microservices Basics in backend projects","Build with Microservices Basics in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-56-1", title: "Overview", whyItMatters: "Microservices Basics is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMicroservices Basics teaches essential NodeJS skills.\n\n```javascript\n// Microservices Basics\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Microservices Basics');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-56-ex1","title":"Getting Started","description":"Basic Microservices Basics","code":{"nodejs":"// Microservices Basics\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Microservices Basics');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Microservices Basics."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-56","type":"mcq","question":"What is the primary focus of Microservices Basics?","options":["Microservices Basics concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Microservices Basics concepts","explanation":"Microservices Basics teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-57", number: 57, title: "API Gateway Concepts", subtitle: "Centralized API management", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand API Gateway Concepts","Apply API Gateway Concepts in backend projects","Build with API Gateway Concepts in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-57-1", title: "Overview", whyItMatters: "API Gateway Concepts is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAPI Gateway Concepts teaches essential NodeJS skills.\n\n```javascript\n// API Gateway Concepts\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning API Gateway Concepts');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-57-ex1","title":"Getting Started","description":"Basic API Gateway Concepts","code":{"nodejs":"// API Gateway Concepts\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning API Gateway Concepts');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring API Gateway Concepts."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-57","type":"mcq","question":"What is the primary focus of API Gateway Concepts?","options":["API Gateway Concepts concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"API Gateway Concepts concepts","explanation":"API Gateway Concepts teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-58", number: 58, title: "Performance Optimization", subtitle: "Profiling and optimization", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Performance Optimization","Apply Performance Optimization in backend projects","Build with Performance Optimization in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-58-1", title: "Overview", whyItMatters: "Performance Optimization is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPerformance Optimization teaches essential NodeJS skills.\n\n```javascript\n// Performance Optimization\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Performance Optimization');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-58-ex1","title":"Getting Started","description":"Basic Performance Optimization","code":{"nodejs":"// Performance Optimization\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Performance Optimization');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Performance Optimization."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-58","type":"mcq","question":"What is the primary focus of Performance Optimization?","options":["Performance Optimization concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Performance Optimization concepts","explanation":"Performance Optimization teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-59", number: 59, title: "NodeJS Security Best Practices", subtitle: "OWASP and secure coding", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand NodeJS Security Best Practices","Apply NodeJS Security Best Practices in backend projects","Build with NodeJS Security Best Practices in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-59-1", title: "Overview", whyItMatters: "NodeJS Security Best Practices is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nNodeJS Security Best Practices teaches essential NodeJS skills.\n\n```javascript\n// NodeJS Security Best Practices\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning NodeJS Security Best Practices');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-59-ex1","title":"Getting Started","description":"Basic NodeJS Security Best Practices","code":{"nodejs":"// NodeJS Security Best Practices\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning NodeJS Security Best Practices');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring NodeJS Security Best Practices."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-59","type":"mcq","question":"What is the primary focus of NodeJS Security Best Practices?","options":["NodeJS Security Best Practices concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"NodeJS Security Best Practices concepts","explanation":"NodeJS Security Best Practices teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-60", number: 60, title: "Testing APIs with Jest", subtitle: "Unit and integration testing", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Testing APIs with Jest","Apply Testing APIs with Jest in backend projects","Build with Testing APIs with Jest in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-60-1", title: "Overview", whyItMatters: "Testing APIs with Jest is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nTesting APIs with Jest teaches essential NodeJS skills.\n\n```javascript\n// Testing APIs with Jest\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Testing APIs with Jest');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-60-ex1","title":"Getting Started","description":"Basic Testing APIs with Jest","code":{"nodejs":"// Testing APIs with Jest\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Testing APIs with Jest');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Testing APIs with Jest."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-60","type":"mcq","question":"What is the primary focus of Testing APIs with Jest?","options":["Testing APIs with Jest concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Testing APIs with Jest concepts","explanation":"Testing APIs with Jest teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-61", number: 61, title: "Debugging NodeJS Applications", subtitle: "Debugger, inspector, tools", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Debugging NodeJS Applications","Apply Debugging NodeJS Applications in backend projects","Build with Debugging NodeJS Applications in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-61-1", title: "Overview", whyItMatters: "Debugging NodeJS Applications is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nDebugging NodeJS Applications teaches essential NodeJS skills.\n\n```javascript\n// Debugging NodeJS Applications\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Debugging NodeJS Applications');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-61-ex1","title":"Getting Started","description":"Basic Debugging NodeJS Applications","code":{"nodejs":"// Debugging NodeJS Applications\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Debugging NodeJS Applications');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Debugging NodeJS Applications."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-61","type":"mcq","question":"What is the primary focus of Debugging NodeJS Applications?","options":["Debugging NodeJS Applications concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Debugging NodeJS Applications concepts","explanation":"Debugging NodeJS Applications teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-62", number: 62, title: "Logging Systems and Monitoring", subtitle: "Production observability", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Logging Systems and Monitoring","Apply Logging Systems and Monitoring in backend projects","Build with Logging Systems and Monitoring in real applications"], partLabel: "Part 4: Advanced NodeJS",
      sections: [
        {
          id: "nodejs-62-1", title: "Overview", whyItMatters: "Logging Systems and Monitoring is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nLogging Systems and Monitoring teaches essential NodeJS skills.\n\n```javascript\n// Logging Systems and Monitoring\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Logging Systems and Monitoring');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-62-ex1","title":"Getting Started","description":"Basic Logging Systems and Monitoring","code":{"nodejs":"// Logging Systems and Monitoring\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Logging Systems and Monitoring');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Logging Systems and Monitoring."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-62","type":"mcq","question":"What is the primary focus of Logging Systems and Monitoring?","options":["Logging Systems and Monitoring concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Logging Systems and Monitoring concepts","explanation":"Logging Systems and Monitoring teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-63", number: 63, title: "NodeJS with React", subtitle: "Full-stack JavaScript apps", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 80, prerequisites: [], learningObjectives: ["Understand NodeJS with React","Apply NodeJS with React in backend projects","Build with NodeJS with React in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-63-1", title: "Overview", whyItMatters: "NodeJS with React is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nNodeJS with React teaches essential NodeJS skills.\n\n```javascript\n// NodeJS with React\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning NodeJS with React');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-63-ex1","title":"Getting Started","description":"Basic NodeJS with React","code":{"nodejs":"// NodeJS with React\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning NodeJS with React');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring NodeJS with React."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-63","type":"mcq","question":"What is the primary focus of NodeJS with React?","options":["NodeJS with React concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"NodeJS with React concepts","explanation":"NodeJS with React teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-64", number: 64, title: "SSR Basics", subtitle: "Server-side rendering concepts", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand SSR Basics","Apply SSR Basics in backend projects","Build with SSR Basics in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-64-1", title: "Overview", whyItMatters: "SSR Basics is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nSSR Basics teaches essential NodeJS skills.\n\n```javascript\n// SSR Basics\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning SSR Basics');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-64-ex1","title":"Getting Started","description":"Basic SSR Basics","code":{"nodejs":"// SSR Basics\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning SSR Basics');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring SSR Basics."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-64","type":"mcq","question":"What is the primary focus of SSR Basics?","options":["SSR Basics concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"SSR Basics concepts","explanation":"SSR Basics teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-65", number: 65, title: "Backend Deployment", subtitle: "Deploying Node.js apps", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Backend Deployment","Apply Backend Deployment in backend projects","Build with Backend Deployment in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-65-1", title: "Overview", whyItMatters: "Backend Deployment is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nBackend Deployment teaches essential NodeJS skills.\n\n```javascript\n// Backend Deployment\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Backend Deployment');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-65-ex1","title":"Getting Started","description":"Basic Backend Deployment","code":{"nodejs":"// Backend Deployment\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Backend Deployment');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Backend Deployment."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-65","type":"mcq","question":"What is the primary focus of Backend Deployment?","options":["Backend Deployment concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Backend Deployment concepts","explanation":"Backend Deployment teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-66", number: 66, title: "Docker for NodeJS", subtitle: "Containerized deployments", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Docker for NodeJS","Apply Docker for NodeJS in backend projects","Build with Docker for NodeJS in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-66-1", title: "Overview", whyItMatters: "Docker for NodeJS is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nDocker for NodeJS teaches essential NodeJS skills.\n\n```javascript\n// Docker for NodeJS\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Docker for NodeJS');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-66-ex1","title":"Getting Started","description":"Basic Docker for NodeJS","code":{"nodejs":"// Docker for NodeJS\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Docker for NodeJS');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Docker for NodeJS."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-66","type":"mcq","question":"What is the primary focus of Docker for NodeJS?","options":["Docker for NodeJS concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Docker for NodeJS concepts","explanation":"Docker for NodeJS teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-67", number: 67, title: "CI/CD Pipelines", subtitle: "Automated testing and deployment", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand CI/CD Pipelines","Apply CI/CD Pipelines in backend projects","Build with CI/CD Pipelines in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-67-1", title: "Overview", whyItMatters: "CI/CD Pipelines is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nCI/CD Pipelines teaches essential NodeJS skills.\n\n```javascript\n// CI/CD Pipelines\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning CI/CD Pipelines');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-67-ex1","title":"Getting Started","description":"Basic CI/CD Pipelines","code":{"nodejs":"// CI/CD Pipelines\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning CI/CD Pipelines');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring CI/CD Pipelines."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-67","type":"mcq","question":"What is the primary focus of CI/CD Pipelines?","options":["CI/CD Pipelines concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"CI/CD Pipelines concepts","explanation":"CI/CD Pipelines teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-68", number: 68, title: "PM2 Process Manager", subtitle: "Production process management", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand PM2 Process Manager","Apply PM2 Process Manager in backend projects","Build with PM2 Process Manager in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-68-1", title: "Overview", whyItMatters: "PM2 Process Manager is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPM2 Process Manager teaches essential NodeJS skills.\n\n```javascript\n// PM2 Process Manager\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning PM2 Process Manager');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-68-ex1","title":"Getting Started","description":"Basic PM2 Process Manager","code":{"nodejs":"// PM2 Process Manager\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning PM2 Process Manager');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring PM2 Process Manager."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-68","type":"mcq","question":"What is the primary focus of PM2 Process Manager?","options":["PM2 Process Manager concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"PM2 Process Manager concepts","explanation":"PM2 Process Manager teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-69", number: 69, title: "Nginx Reverse Proxy", subtitle: "Load balancing and proxying", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Nginx Reverse Proxy","Apply Nginx Reverse Proxy in backend projects","Build with Nginx Reverse Proxy in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-69-1", title: "Overview", whyItMatters: "Nginx Reverse Proxy is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nNginx Reverse Proxy teaches essential NodeJS skills.\n\n```javascript\n// Nginx Reverse Proxy\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Nginx Reverse Proxy');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-69-ex1","title":"Getting Started","description":"Basic Nginx Reverse Proxy","code":{"nodejs":"// Nginx Reverse Proxy\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Nginx Reverse Proxy');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Nginx Reverse Proxy."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-69","type":"mcq","question":"What is the primary focus of Nginx Reverse Proxy?","options":["Nginx Reverse Proxy concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Nginx Reverse Proxy concepts","explanation":"Nginx Reverse Proxy teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-70", number: 70, title: "Scaling Backend Systems", subtitle: "Horizontal and vertical scaling", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Scaling Backend Systems","Apply Scaling Backend Systems in backend projects","Build with Scaling Backend Systems in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-70-1", title: "Overview", whyItMatters: "Scaling Backend Systems is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nScaling Backend Systems teaches essential NodeJS skills.\n\n```javascript\n// Scaling Backend Systems\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Scaling Backend Systems');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-70-ex1","title":"Getting Started","description":"Basic Scaling Backend Systems","code":{"nodejs":"// Scaling Backend Systems\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Scaling Backend Systems');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Scaling Backend Systems."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-70","type":"mcq","question":"What is the primary focus of Scaling Backend Systems?","options":["Scaling Backend Systems concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Scaling Backend Systems concepts","explanation":"Scaling Backend Systems teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-71", number: 71, title: "AWS Deployment Basics", subtitle: "EC2, Elastic Beanstalk, Lambda", difficulty: "Expert", estimatedMinutes: 105, xpReward: 90, prerequisites: [], learningObjectives: ["Understand AWS Deployment Basics","Apply AWS Deployment Basics in backend projects","Build with AWS Deployment Basics in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-71-1", title: "Overview", whyItMatters: "AWS Deployment Basics is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nAWS Deployment Basics teaches essential NodeJS skills.\n\n```javascript\n// AWS Deployment Basics\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning AWS Deployment Basics');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-71-ex1","title":"Getting Started","description":"Basic AWS Deployment Basics","code":{"nodejs":"// AWS Deployment Basics\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning AWS Deployment Basics');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring AWS Deployment Basics."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-71","type":"mcq","question":"What is the primary focus of AWS Deployment Basics?","options":["AWS Deployment Basics concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"AWS Deployment Basics concepts","explanation":"AWS Deployment Basics teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-72", number: 72, title: "Vercel and Render Deployment", subtitle: "Serverless and PaaS deployment", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Vercel and Render Deployment","Apply Vercel and Render Deployment in backend projects","Build with Vercel and Render Deployment in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-72-1", title: "Overview", whyItMatters: "Vercel and Render Deployment is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nVercel and Render Deployment teaches essential NodeJS skills.\n\n```javascript\n// Vercel and Render Deployment\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Vercel and Render Deployment');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-72-ex1","title":"Getting Started","description":"Basic Vercel and Render Deployment","code":{"nodejs":"// Vercel and Render Deployment\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Vercel and Render Deployment');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Vercel and Render Deployment."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-72","type":"mcq","question":"What is the primary focus of Vercel and Render Deployment?","options":["Vercel and Render Deployment concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Vercel and Render Deployment concepts","explanation":"Vercel and Render Deployment teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-73", number: 73, title: "Production Databases", subtitle: "Managed database services", difficulty: "Advanced", estimatedMinutes: 75, xpReward: 75, prerequisites: [], learningObjectives: ["Understand Production Databases","Apply Production Databases in backend projects","Build with Production Databases in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-73-1", title: "Overview", whyItMatters: "Production Databases is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProduction Databases teaches essential NodeJS skills.\n\n```javascript\n// Production Databases\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Production Databases');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-73-ex1","title":"Getting Started","description":"Basic Production Databases","code":{"nodejs":"// Production Databases\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Production Databases');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Production Databases."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-73","type":"mcq","question":"What is the primary focus of Production Databases?","options":["Production Databases concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Production Databases concepts","explanation":"Production Databases teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-74", number: 74, title: "Monitoring Production Apps", subtitle: "Datadog, New Relic, Sentry", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Monitoring Production Apps","Apply Monitoring Production Apps in backend projects","Build with Monitoring Production Apps in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-74-1", title: "Overview", whyItMatters: "Monitoring Production Apps is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMonitoring Production Apps teaches essential NodeJS skills.\n\n```javascript\n// Monitoring Production Apps\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Monitoring Production Apps');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-74-ex1","title":"Getting Started","description":"Basic Monitoring Production Apps","code":{"nodejs":"// Monitoring Production Apps\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Monitoring Production Apps');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Monitoring Production Apps."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-74","type":"mcq","question":"What is the primary focus of Monitoring Production Apps?","options":["Monitoring Production Apps concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Monitoring Production Apps concepts","explanation":"Monitoring Production Apps teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-75", number: 75, title: "Enterprise Architecture Patterns", subtitle: "Scalable system design", difficulty: "Expert", estimatedMinutes: 105, xpReward: 95, prerequisites: [], learningObjectives: ["Understand Enterprise Architecture Patterns","Apply Enterprise Architecture Patterns in backend projects","Build with Enterprise Architecture Patterns in real applications"], partLabel: "Part 5: Full-Stack and Deployment",
      sections: [
        {
          id: "nodejs-75-1", title: "Overview", whyItMatters: "Enterprise Architecture Patterns is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nEnterprise Architecture Patterns teaches essential NodeJS skills.\n\n```javascript\n// Enterprise Architecture Patterns\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Enterprise Architecture Patterns');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-75-ex1","title":"Getting Started","description":"Basic Enterprise Architecture Patterns","code":{"nodejs":"// Enterprise Architecture Patterns\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Enterprise Architecture Patterns');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Enterprise Architecture Patterns."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-75","type":"mcq","question":"What is the primary focus of Enterprise Architecture Patterns?","options":["Enterprise Architecture Patterns concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Enterprise Architecture Patterns concepts","explanation":"Enterprise Architecture Patterns teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-76", number: 76, title: "Project: REST API Backend", subtitle: "Building a complete API", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 100, prerequisites: [], learningObjectives: ["Understand Project: REST API Backend","Apply Project: REST API Backend in backend projects","Build with Project: REST API Backend in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-76-1", title: "Overview", whyItMatters: "Project: REST API Backend is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProject: REST API Backend teaches essential NodeJS skills.\n\n```javascript\n// Project: REST API Backend\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Project: REST API Backend');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-76-ex1","title":"Getting Started","description":"Basic Project: REST API Backend","code":{"nodejs":"// Project: REST API Backend\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Project: REST API Backend');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Project: REST API Backend."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-76","type":"mcq","question":"What is the primary focus of Project: REST API Backend?","options":["Project: REST API Backend concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Project: REST API Backend concepts","explanation":"Project: REST API Backend teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-77", number: 77, title: "Project: Authentication System", subtitle: "Full auth implementation", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 100, prerequisites: [], learningObjectives: ["Understand Project: Authentication System","Apply Project: Authentication System in backend projects","Build with Project: Authentication System in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-77-1", title: "Overview", whyItMatters: "Project: Authentication System is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProject: Authentication System teaches essential NodeJS skills.\n\n```javascript\n// Project: Authentication System\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Project: Authentication System');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-77-ex1","title":"Getting Started","description":"Basic Project: Authentication System","code":{"nodejs":"// Project: Authentication System\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Project: Authentication System');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Project: Authentication System."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-77","type":"mcq","question":"What is the primary focus of Project: Authentication System?","options":["Project: Authentication System concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Project: Authentication System concepts","explanation":"Project: Authentication System teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-78", number: 78, title: "Project: Chat Application", subtitle: "Real-time messaging app", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 100, prerequisites: [], learningObjectives: ["Understand Project: Chat Application","Apply Project: Chat Application in backend projects","Build with Project: Chat Application in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-78-1", title: "Overview", whyItMatters: "Project: Chat Application is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProject: Chat Application teaches essential NodeJS skills.\n\n```javascript\n// Project: Chat Application\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Project: Chat Application');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-78-ex1","title":"Getting Started","description":"Basic Project: Chat Application","code":{"nodejs":"// Project: Chat Application\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Project: Chat Application');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Project: Chat Application."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-78","type":"mcq","question":"What is the primary focus of Project: Chat Application?","options":["Project: Chat Application concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Project: Chat Application concepts","explanation":"Project: Chat Application teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-79", number: 79, title: "Project: Blog CMS Backend", subtitle: "Content management API", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 100, prerequisites: [], learningObjectives: ["Understand Project: Blog CMS Backend","Apply Project: Blog CMS Backend in backend projects","Build with Project: Blog CMS Backend in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-79-1", title: "Overview", whyItMatters: "Project: Blog CMS Backend is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProject: Blog CMS Backend teaches essential NodeJS skills.\n\n```javascript\n// Project: Blog CMS Backend\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Project: Blog CMS Backend');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-79-ex1","title":"Getting Started","description":"Basic Project: Blog CMS Backend","code":{"nodejs":"// Project: Blog CMS Backend\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Project: Blog CMS Backend');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Project: Blog CMS Backend."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-79","type":"mcq","question":"What is the primary focus of Project: Blog CMS Backend?","options":["Project: Blog CMS Backend concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Project: Blog CMS Backend concepts","explanation":"Project: Blog CMS Backend teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-80", number: 80, title: "Project: File Upload Platform", subtitle: "File management system", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 100, prerequisites: [], learningObjectives: ["Understand Project: File Upload Platform","Apply Project: File Upload Platform in backend projects","Build with Project: File Upload Platform in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-80-1", title: "Overview", whyItMatters: "Project: File Upload Platform is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProject: File Upload Platform teaches essential NodeJS skills.\n\n```javascript\n// Project: File Upload Platform\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Project: File Upload Platform');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-80-ex1","title":"Getting Started","description":"Basic Project: File Upload Platform","code":{"nodejs":"// Project: File Upload Platform\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Project: File Upload Platform');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Project: File Upload Platform."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-80","type":"mcq","question":"What is the primary focus of Project: File Upload Platform?","options":["Project: File Upload Platform concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Project: File Upload Platform concepts","explanation":"Project: File Upload Platform teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-81", number: 81, title: "Project: Real-Time Notification System", subtitle: "Push notification service", difficulty: "Advanced", estimatedMinutes: 120, xpReward: 100, prerequisites: [], learningObjectives: ["Understand Project: Real-Time Notification System","Apply Project: Real-Time Notification System in backend projects","Build with Project: Real-Time Notification System in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-81-1", title: "Overview", whyItMatters: "Project: Real-Time Notification System is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nProject: Real-Time Notification System teaches essential NodeJS skills.\n\n```javascript\n// Project: Real-Time Notification System\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Project: Real-Time Notification System');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-81-ex1","title":"Getting Started","description":"Basic Project: Real-Time Notification System","code":{"nodejs":"// Project: Real-Time Notification System\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Project: Real-Time Notification System');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Project: Real-Time Notification System."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-81","type":"mcq","question":"What is the primary focus of Project: Real-Time Notification System?","options":["Project: Real-Time Notification System concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Project: Real-Time Notification System concepts","explanation":"Project: Real-Time Notification System teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-82", number: 82, title: "Mini Backend Challenges", subtitle: "Practice exercises", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 65, prerequisites: [], learningObjectives: ["Understand Mini Backend Challenges","Apply Mini Backend Challenges in backend projects","Build with Mini Backend Challenges in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-82-1", title: "Overview", whyItMatters: "Mini Backend Challenges is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nMini Backend Challenges teaches essential NodeJS skills.\n\n```javascript\n// Mini Backend Challenges\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Mini Backend Challenges');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-82-ex1","title":"Getting Started","description":"Basic Mini Backend Challenges","code":{"nodejs":"// Mini Backend Challenges\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Mini Backend Challenges');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Mini Backend Challenges."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-82","type":"mcq","question":"What is the primary focus of Mini Backend Challenges?","options":["Mini Backend Challenges concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Mini Backend Challenges concepts","explanation":"Mini Backend Challenges teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-83", number: 83, title: "Performance Optimization Challenges", subtitle: "Scaling and speed", difficulty: "Expert", estimatedMinutes: 90, xpReward: 85, prerequisites: [], learningObjectives: ["Understand Performance Optimization Challenges","Apply Performance Optimization Challenges in backend projects","Build with Performance Optimization Challenges in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-83-1", title: "Overview", whyItMatters: "Performance Optimization Challenges is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nPerformance Optimization Challenges teaches essential NodeJS skills.\n\n```javascript\n// Performance Optimization Challenges\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Performance Optimization Challenges');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-83-ex1","title":"Getting Started","description":"Basic Performance Optimization Challenges","code":{"nodejs":"// Performance Optimization Challenges\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Performance Optimization Challenges');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Performance Optimization Challenges."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-83","type":"mcq","question":"What is the primary focus of Performance Optimization Challenges?","options":["Performance Optimization Challenges concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Performance Optimization Challenges concepts","explanation":"Performance Optimization Challenges teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-84", number: 84, title: "Enterprise API Case Studies", subtitle: "Real-world architectures", difficulty: "Expert", estimatedMinutes: 90, xpReward: 90, prerequisites: [], learningObjectives: ["Understand Enterprise API Case Studies","Apply Enterprise API Case Studies in backend projects","Build with Enterprise API Case Studies in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-84-1", title: "Overview", whyItMatters: "Enterprise API Case Studies is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nEnterprise API Case Studies teaches essential NodeJS skills.\n\n```javascript\n// Enterprise API Case Studies\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning Enterprise API Case Studies');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-84-ex1","title":"Getting Started","description":"Basic Enterprise API Case Studies","code":{"nodejs":"// Enterprise API Case Studies\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning Enterprise API Case Studies');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring Enterprise API Case Studies."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-84","type":"mcq","question":"What is the primary focus of Enterprise API Case Studies?","options":["Enterprise API Case Studies concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"Enterprise API Case Studies concepts","explanation":"Enterprise API Case Studies teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
    {
      id: "nodejs-85", number: 85, title: "NodeJS Mastery Recap + Certificate Prep", subtitle: "Review and assessment", difficulty: "Expert", estimatedMinutes: 60, xpReward: 100, prerequisites: [], learningObjectives: ["Understand NodeJS Mastery Recap + Certificate Prep","Apply NodeJS Mastery Recap + Certificate Prep in backend projects","Build with NodeJS Mastery Recap + Certificate Prep in real applications"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "nodejs-85-1", title: "Overview", whyItMatters: "NodeJS Mastery Recap + Certificate Prep is fundamental to NodeJS mastery.",
          content: "**Core Concepts:**\n\nNodeJS Mastery Recap + Certificate Prep teaches essential NodeJS skills.\n\n```javascript\n// NodeJS Mastery Recap + Certificate Prep\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Learning NodeJS Mastery Recap + Certificate Prep');\n});\napp.listen(3000);\n```\n\n**Key Takeaways:**\n- NodeJS enables server-side JavaScript development\n- Non-blocking I/O makes it fast and scalable\n- The npm ecosystem provides millions of packages\n- Event-driven architecture powers real-time applications",
          codeExamples: [
            {"id":"nodejs-85-ex1","title":"Getting Started","description":"Basic NodeJS Mastery Recap + Certificate Prep","code":{"nodejs":"// NodeJS Mastery Recap + Certificate Prep\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Learning NodeJS Mastery Recap + Certificate Prep');\n});\nserver.listen(3000, () => console.log('Server running'));"},"explanation":"Start exploring NodeJS Mastery Recap + Certificate Prep."},
          ],
        },
      ],
      quiz: { questions: [{"id":"nodejs-85","type":"mcq","question":"What is the primary focus of NodeJS Mastery Recap + Certificate Prep?","options":["NodeJS Mastery Recap + Certificate Prep concepts","CSS styling","HTML markup","Database design"],"correctAnswer":"NodeJS Mastery Recap + Certificate Prep concepts","explanation":"NodeJS Mastery Recap + Certificate Prep teaches fundamental NodeJS concepts.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Node.js","value":"JavaScript runtime built on V8"},{"label":"npm","value":"Node package manager"},{"label":"Express","value":"Web framework for Node.js"},{"label":"Middleware","value":"Request processing pipeline"}],
    },
  ],
};

