import { Track } from "./types";

export const mongodbTrack: Track = {
  id: "mongodb",
  title: "MongoDB",
  titleBn: "\u09ae\u0999\u09cd\u0997\u09cb\u09a1\u09bf\u09ac\u09bf",
  tagline: "Master modern NoSQL databases and backend data systems",
  taglineBn: "\u0986\u09a7\u09c1\u09a8\u09bf\u0995 NoSQL \u09a1\u09be\u099f\u09be\u09ac\u09c7\u09b8 \u098f\u09ac\u0982 \u09ac\u09cd\u09af\u09be\u0995\u098f\u09a8\u09cd\u09a1 \u09a1\u09be\u099f\u09be \u09b8\u09bf\u09b8\u09cd\u099f\u09c7\u09ae \u0986\u09af\u09bc\u09a4\u09cd\u09a4 \u0995\u09b0\u09c1\u09a8",
  icon: "\ud83c\udf43",
  colorVar: "mongodb",
  brandColor: "#47A248",
  glowColor: "rgba(71, 162, 72, 0.3)",
  totalChapters: 60,
  estimatedHours: 95,
  chapters: [
    {
      id: "mongodb-1", number: 1, title: "What Is MongoDB and Why NoSQL Exists?", subtitle: "Understanding document databases vs relational", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand NoSQL concepts","Know MongoDB's place in the database world","Identify when to use MongoDB"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-1-1", title: "Overview", whyItMatters: "What Is MongoDB and Why NoSQL Exists? is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nWhat Is MongoDB and Why NoSQL Exists? teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for What Is MongoDB and Why NoSQL Exists?')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-1-ex1", title: "Getting Started", description: "Basic What Is MongoDB and Why NoSQL Exists?", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for What Is MongoDB and Why NoSQL Exists?')" }, explanation: "Start exploring What Is MongoDB and Why NoSQL Exists?." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-1","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-2", number: 2, title: "Installing MongoDB and MongoDB Compass", subtitle: "Setting up your database environment", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Install MongoDB","Use MongoDB Compass","Connect to a MongoDB instance"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-2-1", title: "Overview", whyItMatters: "Installing MongoDB and MongoDB Compass is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nInstalling MongoDB and MongoDB Compass teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for Installing MongoDB and MongoDB Compass')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-2-ex1", title: "Getting Started", description: "Basic Installing MongoDB and MongoDB Compass", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for Installing MongoDB and MongoDB Compass')" }, explanation: "Start exploring Installing MongoDB and MongoDB Compass." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-2","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-3", number: 3, title: "Databases, Collections, and Documents", subtitle: "The MongoDB data model", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Create databases","Manage collections","Work with documents"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-3-1", title: "Overview", whyItMatters: "Databases, Collections, and Documents is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nDatabases, Collections, and Documents teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for Databases, Collections, and Documents')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-3-ex1", title: "Getting Started", description: "Basic Databases, Collections, and Documents", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for Databases, Collections, and Documents')" }, explanation: "Start exploring Databases, Collections, and Documents." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-3","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-4", number: 4, title: "JSON vs BSON", subtitle: "Understanding MongoDB's data format", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Understand JSON","Understand BSON","Know data type differences"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-4-1", title: "Overview", whyItMatters: "JSON vs BSON is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nJSON vs BSON teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for JSON vs BSON')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-4-ex1", title: "Getting Started", description: "Basic JSON vs BSON", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for JSON vs BSON')" }, explanation: "Start exploring JSON vs BSON." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-4","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-5", number: 5, title: "MongoDB Shell Basics", subtitle: "Using mongosh for database operations", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Use mongosh","Execute shell commands","Navigate the shell"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-5-1", title: "Overview", whyItMatters: "MongoDB Shell Basics is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nMongoDB Shell Basics teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for MongoDB Shell Basics')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-5-ex1", title: "Getting Started", description: "Basic MongoDB Shell Basics", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for MongoDB Shell Basics')" }, explanation: "Start exploring MongoDB Shell Basics." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-5","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-6", number: 6, title: "CRUD Operations: Insert", subtitle: "Adding data to collections", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Use insertOne","Use insertMany","Handle insert errors"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-6-1", title: "Overview", whyItMatters: "CRUD Operations: Insert is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nCRUD Operations: Insert teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for CRUD Operations: Insert')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-6-ex1", title: "Getting Started", description: "Basic CRUD Operations: Insert", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for CRUD Operations: Insert')" }, explanation: "Start exploring CRUD Operations: Insert." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-6","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-7", number: 7, title: "CRUD Operations: Read", subtitle: "Querying documents with find", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Use find()","Apply query filters","Project fields"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-7-1", title: "Overview", whyItMatters: "CRUD Operations: Read is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nCRUD Operations: Read teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for CRUD Operations: Read')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-7-ex1", title: "Getting Started", description: "Basic CRUD Operations: Read", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for CRUD Operations: Read')" }, explanation: "Start exploring CRUD Operations: Read." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-7","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-8", number: 8, title: "CRUD Operations: Update", subtitle: "Modifying existing documents", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Use updateOne","Use updateMany","Use $set and $unset"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-8-1", title: "Overview", whyItMatters: "CRUD Operations: Update is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nCRUD Operations: Update teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for CRUD Operations: Update')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-8-ex1", title: "Getting Started", description: "Basic CRUD Operations: Update", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for CRUD Operations: Update')" }, explanation: "Start exploring CRUD Operations: Update." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-8","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-9", number: 9, title: "CRUD Operations: Delete", subtitle: "Removing documents", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Use deleteOne","Use deleteMany","Use drop()"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-9-1", title: "Overview", whyItMatters: "CRUD Operations: Delete is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nCRUD Operations: Delete teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for CRUD Operations: Delete')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-9-ex1", title: "Getting Started", description: "Basic CRUD Operations: Delete", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for CRUD Operations: Delete')" }, explanation: "Start exploring CRUD Operations: Delete." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-9","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-10", number: 10, title: "Query Operators Deep Dive", subtitle: "Comparison, logical, and element operators", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 55, prerequisites: [], learningObjectives: ["Use comparison operators","Use logical operators","Use element operators"], partLabel: "Part 1: NoSQL and MongoDB Foundations",
      sections: [
        {
          id: "mongodb-10-1", title: "Overview", whyItMatters: "Query Operators Deep Dive is fundamental to understanding MongoDB.",
          content: "**Core Concepts:**\n\nQuery Operators Deep Dive teaches essential MongoDB skills.\n\n```javascript\n// MongoDB Shell Example\nuse('mydb')\ndb.collection.find()\nprint('Ready for Query Operators Deep Dive')\n```\n\n**Key Takeaways:**\n- MongoDB uses a document model\n- Collections hold documents (like tables hold rows)\n- NoSQL offers flexibility for modern applications",
          codeExamples: [
            { id: "mongodb-10-ex1", title: "Getting Started", description: "Basic Query Operators Deep Dive", code: { mongodb: "// MongoDB Shell\nuse('learning')\nprint('Ready for Query Operators Deep Dive')" }, explanation: "Start exploring Query Operators Deep Dive." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-10","type":"mcq","question":"What is MongoDB's primary data model?","options":["Document","Relational","Key-Value","Graph"],"correctAnswer":"Document","explanation":"MongoDB stores data as BSON documents.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"NoSQL document database"},{"label":"Collection","value":"Group of documents"},{"label":"Document","value":"JSON-like data record"}],
    },
    {
      id: "mongodb-11", number: 11, title: "Data Modeling Principles", subtitle: "Designing effective MongoDB schemas", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Understand data modeling","Design schemas","Apply best practices"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-11-1", title: "Overview", whyItMatters: "Data Modeling Principles is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nData Modeling Principles focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-11-ex1", title: "Practice", description: "Try Data Modeling Principles", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Data Modeling Principles')" }, explanation: "Practice Data Modeling Principles concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-11","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-12", number: 12, title: "Embedding vs Referencing", subtitle: "Choosing between nested and linked data", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Embed documents","Reference documents","Choose appropriate strategy"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-12-1", title: "Overview", whyItMatters: "Embedding vs Referencing is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nEmbedding vs Referencing focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-12-ex1", title: "Practice", description: "Try Embedding vs Referencing", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Embedding vs Referencing')" }, explanation: "Practice Embedding vs Referencing concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-12","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-13", number: 13, title: "One-to-One Relationships", subtitle: "Modeling 1:1 data relationships", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Model 1:1 relationships","Use embedded 1:1","Use referenced 1:1"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-13-1", title: "Overview", whyItMatters: "One-to-One Relationships is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nOne-to-One Relationships focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-13-ex1", title: "Practice", description: "Try One-to-One Relationships", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning One-to-One Relationships')" }, explanation: "Practice One-to-One Relationships concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-13","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-14", number: 14, title: "One-to-Many Relationships", subtitle: "Modeling 1:N data relationships", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Model 1:N relationships","Use embedded arrays","Use references with arrays"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-14-1", title: "Overview", whyItMatters: "One-to-Many Relationships is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nOne-to-Many Relationships focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-14-ex1", title: "Practice", description: "Try One-to-Many Relationships", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning One-to-Many Relationships')" }, explanation: "Practice One-to-Many Relationships concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-14","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-15", number: 15, title: "Many-to-Many Relationships", subtitle: "Modeling N:M data relationships", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Model M:N relationships","Use junction collections","Query across relationships"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-15-1", title: "Overview", whyItMatters: "Many-to-Many Relationships is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nMany-to-Many Relationships focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-15-ex1", title: "Practice", description: "Try Many-to-Many Relationships", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Many-to-Many Relationships')" }, explanation: "Practice Many-to-Many Relationships concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-15","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-16", number: 16, title: "Schema Design Strategies", subtitle: "Advanced schema patterns", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Apply schema patterns","Use polymorphism","Handle time series data"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-16-1", title: "Overview", whyItMatters: "Schema Design Strategies is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nSchema Design Strategies focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-16-ex1", title: "Practice", description: "Try Schema Design Strategies", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Schema Design Strategies')" }, explanation: "Practice Schema Design Strategies concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-16","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-17", number: 17, title: "Validation Rules", subtitle: "Enforcing data integrity with schema validation", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Create validation rules","Use $jsonSchema","Handle validation errors"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-17-1", title: "Overview", whyItMatters: "Validation Rules is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nValidation Rules focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-17-ex1", title: "Practice", description: "Try Validation Rules", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Validation Rules')" }, explanation: "Practice Validation Rules concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-17","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-18", number: 18, title: "Nested Documents and Arrays", subtitle: "Working with complex document structures", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Query nested fields","Query arrays","Update nested data"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-18-1", title: "Overview", whyItMatters: "Nested Documents and Arrays is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nNested Documents and Arrays focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-18-ex1", title: "Practice", description: "Try Nested Documents and Arrays", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Nested Documents and Arrays')" }, explanation: "Practice Nested Documents and Arrays concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-18","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-19", number: 19, title: "Working with ObjectIds", subtitle: "Understanding MongoDB's primary key", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Generate ObjectIds","Use ObjectId methods","Customize identifiers"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-19-1", title: "Overview", whyItMatters: "Working with ObjectIds is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nWorking with ObjectIds focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-19-ex1", title: "Practice", description: "Try Working with ObjectIds", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Working with ObjectIds')" }, explanation: "Practice Working with ObjectIds concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-19","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-20", number: 20, title: "Real Backend Data Models", subtitle: "Designing production-ready schemas", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Design e-commerce schemas","Design social media schemas","Design content management schemas"], partLabel: "Part 2: Data Modeling and Relationships",
      sections: [
        {
          id: "mongodb-20-1", title: "Overview", whyItMatters: "Real Backend Data Models is essential for MongoDB data architecture.",
          content: "**Core Concepts:**\n\nReal Backend Data Models focuses on schema design.\n\n```javascript\n// Schema Design Example\nuse('app')\ndb.users.insertOne({\n  name: 'Alice',\n  email: 'alice@test.com'\n})\nprint('Schema designed')\n```\n\n**Best Practices:**\n- Design for query patterns\n- Embed data that is accessed together\n- Reference data that grows independently",
          codeExamples: [
            { id: "mongodb-20-ex1", title: "Practice", description: "Try Real Backend Data Models", code: { mongodb: "// Data Modeling\nuse('shop')\nprint('Learning Real Backend Data Models')" }, explanation: "Practice Real Backend Data Models concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-20","type":"mcq","question":"What is the main decision in MongoDB data modeling?","options":["Embed vs reference","SQL vs NoSQL","Index vs no index","Shard vs replica"],"correctAnswer":"Embed vs reference","explanation":"Choosing between embedding and referencing is the key decision.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Nested subdocuments"},{"label":"Referencing","value":"Using IDs to link"},{"label":"$jsonSchema","value":"Validation rules"}],
    },
    {
      id: "mongodb-21", number: 21, title: "Introduction to Aggregation Pipelines", subtitle: "MongoDB's powerful data processing framework", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Understand aggregation","Build pipelines","Use stages effectively"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-21-1", title: "Overview", whyItMatters: "Introduction to Aggregation Pipelines using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nIntroduction to Aggregation Pipelines with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-21-ex1", title: "Practice", description: "Try Introduction to Aggregation Pipelines", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Introduction to Aggregation Pipelines')" }, explanation: "Practice Introduction to Aggregation Pipelines concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-21","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-22", number: 22, title: "$match and Filtering", subtitle: "Filtering documents in pipelines", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use $match stage","Combine conditions","Optimize $match placement"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-22-1", title: "Overview", whyItMatters: "$match and Filtering using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\n$match and Filtering with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-22-ex1", title: "Practice", description: "Try $match and Filtering", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning $match and Filtering')" }, explanation: "Practice $match and Filtering concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-22","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-23", number: 23, title: "$group and Data Aggregation", subtitle: "Grouping and summarizing data", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use $group","Use accumulator operators","Group by multiple fields"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-23-1", title: "Overview", whyItMatters: "$group and Data Aggregation using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\n$group and Data Aggregation with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-23-ex1", title: "Practice", description: "Try $group and Data Aggregation", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning $group and Data Aggregation')" }, explanation: "Practice $group and Data Aggregation concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-23","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-24", number: 24, title: "$project and Data Transformation", subtitle: "Shaping output documents", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use $project","Add computed fields","Remove fields"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-24-1", title: "Overview", whyItMatters: "$project and Data Transformation using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\n$project and Data Transformation with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-24-ex1", title: "Practice", description: "Try $project and Data Transformation", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning $project and Data Transformation')" }, explanation: "Practice $project and Data Transformation concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-24","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-25", number: 25, title: "$sort, $limit, and Pagination", subtitle: "Ordering and paginating results", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Sort pipeline results","Limit document count","Implement pagination"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-25-1", title: "Overview", whyItMatters: "$sort, $limit, and Pagination using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\n$sort, $limit, and Pagination with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-25-ex1", title: "Practice", description: "Try $sort, $limit, and Pagination", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning $sort, $limit, and Pagination')" }, explanation: "Practice $sort, $limit, and Pagination concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-25","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-26", number: 26, title: "Array Operators", subtitle: "Working with arrays in aggregation", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use $unwind","Use $arrayElemAt","Use $filter and $map"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-26-1", title: "Overview", whyItMatters: "Array Operators using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nArray Operators with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-26-ex1", title: "Practice", description: "Try Array Operators", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Array Operators')" }, explanation: "Practice Array Operators concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-26","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-27", number: 27, title: "$lookup and Joins", subtitle: "Joining collections in pipelines", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use $lookup","Join with pipeline","Optimize $lookup"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-27-1", title: "Overview", whyItMatters: "$lookup and Joins using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\n$lookup and Joins with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-27-ex1", title: "Practice", description: "Try $lookup and Joins", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning $lookup and Joins')" }, explanation: "Practice $lookup and Joins concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-27","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-28", number: 28, title: "Faceted Aggregation", subtitle: "Multi-faceted data analysis", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use $facet","Build facets","Combine aggregations"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-28-1", title: "Overview", whyItMatters: "Faceted Aggregation using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nFaceted Aggregation with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-28-ex1", title: "Practice", description: "Try Faceted Aggregation", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Faceted Aggregation')" }, explanation: "Practice Faceted Aggregation concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-28","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-29", number: 29, title: "Text Search", subtitle: "Full-text search in MongoDB", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Create text indexes","Use $text query","Score search results"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-29-1", title: "Overview", whyItMatters: "Text Search using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nText Search with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-29-ex1", title: "Practice", description: "Try Text Search", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Text Search')" }, explanation: "Practice Text Search concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-29","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-30", number: 30, title: "Geospatial Queries", subtitle: "Location-based data queries", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Create geospatial indexes","Use $near queries","Use $geoWithin"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-30-1", title: "Overview", whyItMatters: "Geospatial Queries using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nGeospatial Queries with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-30-ex1", title: "Practice", description: "Try Geospatial Queries", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Geospatial Queries')" }, explanation: "Practice Geospatial Queries concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-30","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-31", number: 31, title: "Aggregation Performance Optimization", subtitle: "Making pipelines fast", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use indexes in pipelines","Optimize stage order","Monitor performance"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-31-1", title: "Overview", whyItMatters: "Aggregation Performance Optimization using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nAggregation Performance Optimization with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-31-ex1", title: "Practice", description: "Try Aggregation Performance Optimization", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Aggregation Performance Optimization')" }, explanation: "Practice Aggregation Performance Optimization concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-31","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-32", number: 32, title: "Real Analytics Dashboards", subtitle: "Building analytics with aggregation", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Build analytics pipelines","Create real-time reports","Handle large datasets"], partLabel: "Part 3: Aggregation and Advanced Queries",
      sections: [
        {
          id: "mongodb-32-1", title: "Overview", whyItMatters: "Real Analytics Dashboards using MongoDB aggregation pipelines.",
          content: "**Core Concepts:**\n\nReal Analytics Dashboards with the aggregation framework.\n\n```javascript\n// Aggregation Pipeline\nuse('analytics')\ndb.sales.aggregate([\n  { $match: { date: { $gte: ISODate('2024-01-01') } } },\n  { $group: { _id: '$category', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } }\n])\nprint('Aggregation complete')\n```\n\n**Pipeline Stages:**\n- $match: Filter documents early\n- $group: Aggregate by keys\n- $project: Shape output",
          codeExamples: [
            { id: "mongodb-32-ex1", title: "Practice", description: "Try Real Analytics Dashboards", code: { mongodb: "// Aggregation\nuse('test')\nprint('Learning Real Analytics Dashboards')" }, explanation: "Practice Real Analytics Dashboards concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-32","type":"mcq","question":"What stage filters documents in a pipeline?","options":["$match","$group","$project","$sort"],"correctAnswer":"$match","explanation":"$match filters documents at the start of the pipeline.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$match","value":"Filter documents"},{"label":"$group","value":"Aggregate by key"},{"label":"$lookup","value":"Join collections"},{"label":"$sort","value":"Order results"}],
    },
    {
      id: "mongodb-33", number: 33, title: "What Are Indexes?", subtitle: "Understanding database indexes", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Understand indexes","Know index types","Measure index impact"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-33-1", title: "Overview", whyItMatters: "What Are Indexes? is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nWhat Are Indexes? optimizes query performance.\n\n```javascript\n// What Are Indexes?\nuse('admin')\nprint('Learning What Are Indexes?')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-33-ex1", title: "Practice", description: "Try What Are Indexes?", code: { mongodb: "// Practice\nprint('Learning What Are Indexes?')" }, explanation: "Practice What Are Indexes? concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-33","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-34", number: 34, title: "Single Field Indexes", subtitle: "Creating and using single field indexes", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Create single indexes","Use index for queries","Use index for sorting"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-34-1", title: "Overview", whyItMatters: "Single Field Indexes is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nSingle Field Indexes optimizes query performance.\n\n```javascript\n// Single Field Indexes\nuse('admin')\nprint('Learning Single Field Indexes')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-34-ex1", title: "Practice", description: "Try Single Field Indexes", code: { mongodb: "// Practice\nprint('Learning Single Field Indexes')" }, explanation: "Practice Single Field Indexes concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-34","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-35", number: 35, title: "Compound Indexes", subtitle: "Multi-field indexes for complex queries", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Create compound indexes","Understand key order","Use ESR rule"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-35-1", title: "Overview", whyItMatters: "Compound Indexes is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nCompound Indexes optimizes query performance.\n\n```javascript\n// Compound Indexes\nuse('admin')\nprint('Learning Compound Indexes')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-35-ex1", title: "Practice", description: "Try Compound Indexes", code: { mongodb: "// Practice\nprint('Learning Compound Indexes')" }, explanation: "Practice Compound Indexes concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-35","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-36", number: 36, title: "Text Indexes", subtitle: "Full-text search indexing", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Create text indexes","Use $text operator","Configure weights"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-36-1", title: "Overview", whyItMatters: "Text Indexes is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nText Indexes optimizes query performance.\n\n```javascript\n// Text Indexes\nuse('admin')\nprint('Learning Text Indexes')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-36-ex1", title: "Practice", description: "Try Text Indexes", code: { mongodb: "// Practice\nprint('Learning Text Indexes')" }, explanation: "Practice Text Indexes concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-36","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-37", number: 37, title: "Query Performance Analysis", subtitle: "Using explain() and profiling", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use explain()","Read execution stats","Identify slow queries"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-37-1", title: "Overview", whyItMatters: "Query Performance Analysis is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nQuery Performance Analysis optimizes query performance.\n\n```javascript\n// Query Performance Analysis\nuse('admin')\nprint('Learning Query Performance Analysis')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-37-ex1", title: "Practice", description: "Try Query Performance Analysis", code: { mongodb: "// Practice\nprint('Learning Query Performance Analysis')" }, explanation: "Practice Query Performance Analysis concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-37","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-38", number: 38, title: "MongoDB Security Basics", subtitle: "Securing your database", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Enable authentication","Configure TLS/SSL","Apply network security"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-38-1", title: "Overview", whyItMatters: "MongoDB Security Basics is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nMongoDB Security Basics ensures database security.\n\n```javascript\n// MongoDB Security Basics\nuse('admin')\nprint('Learning MongoDB Security Basics')\n```\n\n**Why It Matters:**\n- Protect sensitive data\n- Control access\n- Meet compliance requirements",
          codeExamples: [
            { id: "mongodb-38-ex1", title: "Practice", description: "Try MongoDB Security Basics", code: { mongodb: "// Practice\nprint('Learning MongoDB Security Basics')" }, explanation: "Practice MongoDB Security Basics concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-38","type":"mcq","question":"What enables authentication in MongoDB?","options":["security.authorization","auth","enableAuth","set auth=true"],"correctAnswer":"security.authorization","explanation":"Set security.authorization to enabled in config.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Authentication","value":"User login system"},{"label":"Authorization","value":"Role-based access"}],
    },
    {
      id: "mongodb-39", number: 39, title: "Authentication and Authorization", subtitle: "Users, roles, and permissions", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Create users","Assign roles","Use role-based access"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-39-1", title: "Overview", whyItMatters: "Authentication and Authorization is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nAuthentication and Authorization ensures database security.\n\n```javascript\n// Authentication and Authorization\nuse('admin')\nprint('Learning Authentication and Authorization')\n```\n\n**Why It Matters:**\n- Protect sensitive data\n- Control access\n- Meet compliance requirements",
          codeExamples: [
            { id: "mongodb-39-ex1", title: "Practice", description: "Try Authentication and Authorization", code: { mongodb: "// Practice\nprint('Learning Authentication and Authorization')" }, explanation: "Practice Authentication and Authorization concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-39","type":"mcq","question":"What enables authentication in MongoDB?","options":["security.authorization","auth","enableAuth","set auth=true"],"correctAnswer":"security.authorization","explanation":"Set security.authorization to enabled in config.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Authentication","value":"User login system"},{"label":"Authorization","value":"Role-based access"}],
    },
    {
      id: "mongodb-40", number: 40, title: "Backup and Restore Strategies", subtitle: "Protecting your data", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use mongodump","Use mongorestore","Implement backup strategy"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-40-1", title: "Overview", whyItMatters: "Backup and Restore Strategies is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nBackup and Restore Strategies optimizes query performance.\n\n```javascript\n// Backup and Restore Strategies\nuse('admin')\nprint('Learning Backup and Restore Strategies')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-40-ex1", title: "Practice", description: "Try Backup and Restore Strategies", code: { mongodb: "// Practice\nprint('Learning Backup and Restore Strategies')" }, explanation: "Practice Backup and Restore Strategies concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-40","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-41", number: 41, title: "Transactions in MongoDB", subtitle: "ACID transactions for multi-document operations", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use transactions","Handle errors","Understand transaction limits"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-41-1", title: "Overview", whyItMatters: "Transactions in MongoDB is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nTransactions in MongoDB optimizes query performance.\n\n```javascript\n// Transactions in MongoDB\nuse('admin')\nprint('Learning Transactions in MongoDB')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-41-ex1", title: "Practice", description: "Try Transactions in MongoDB", code: { mongodb: "// Practice\nprint('Learning Transactions in MongoDB')" }, explanation: "Practice Transactions in MongoDB concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-41","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-42", number: 42, title: "Performance Tuning for Production", subtitle: "Optimizing production databases", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Monitor performance","Tune queries","Scale resources"], partLabel: "Part 4: Indexing, Performance, and Security",
      sections: [
        {
          id: "mongodb-42-1", title: "Overview", whyItMatters: "Performance Tuning for Production is critical for production MongoDB.",
          content: "**Core Concepts:**\n\nPerformance Tuning for Production optimizes query performance.\n\n```javascript\n// Performance Tuning for Production\nuse('admin')\nprint('Learning Performance Tuning for Production')\n```\n\n**Why It Matters:**\n- Faster queries\n- Lower resource usage\n- Better user experience",
          codeExamples: [
            { id: "mongodb-42-ex1", title: "Practice", description: "Try Performance Tuning for Production", code: { mongodb: "// Practice\nprint('Learning Performance Tuning for Production')" }, explanation: "Practice Performance Tuning for Production concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-42","type":"mcq","question":"What command analyzes query performance?","options":["explain()","profile()","analyze()","debug()"],"correctAnswer":"explain()","explanation":"explain() shows query execution plan.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Index","value":"Query accelerator"},{"label":"explain()","value":"Query execution plan"}],
    },
    {
      id: "mongodb-43", number: 43, title: "MongoDB with Node.js", subtitle: "Connecting MongoDB to your backend", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Use MongoDB driver","Connect from Node.js","Perform CRUD operations"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-43-1", title: "Overview", whyItMatters: "MongoDB with Node.js connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nMongoDB with Node.js using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-43-ex1", title: "Practice", description: "Try MongoDB with Node.js", code: { mongodb: "// Backend Integration\nprint('Learning MongoDB with Node.js')" }, explanation: "Practice MongoDB with Node.js concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-43","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-44", number: 44, title: "Mongoose ODM Basics", subtitle: "Schema-based MongoDB modeling", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Install Mongoose","Define schemas","Create models"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-44-1", title: "Overview", whyItMatters: "Mongoose ODM Basics connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nMongoose ODM Basics using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-44-ex1", title: "Practice", description: "Try Mongoose ODM Basics", code: { mongodb: "// Backend Integration\nprint('Learning Mongoose ODM Basics')" }, explanation: "Practice Mongoose ODM Basics concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-44","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-45", number: 45, title: "Advanced Mongoose Patterns", subtitle: "Middleware, virtuals, and plugins", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Use middleware","Use virtuals","Create plugins"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-45-1", title: "Overview", whyItMatters: "Advanced Mongoose Patterns connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nAdvanced Mongoose Patterns using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-45-ex1", title: "Practice", description: "Try Advanced Mongoose Patterns", code: { mongodb: "// Backend Integration\nprint('Learning Advanced Mongoose Patterns')" }, explanation: "Practice Advanced Mongoose Patterns concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-45","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-46", number: 46, title: "REST API Integration", subtitle: "Building REST APIs with MongoDB", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Create REST endpoints","Implement pagination","Handle errors"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-46-1", title: "Overview", whyItMatters: "REST API Integration connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nREST API Integration using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-46-ex1", title: "Practice", description: "Try REST API Integration", code: { mongodb: "// Backend Integration\nprint('Learning REST API Integration')" }, explanation: "Practice REST API Integration concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-46","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-47", number: 47, title: "Authentication Systems", subtitle: "User auth with MongoDB", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Store passwords","Implement JWT auth","Manage sessions"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-47-1", title: "Overview", whyItMatters: "Authentication Systems connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nAuthentication Systems using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-47-ex1", title: "Practice", description: "Try Authentication Systems", code: { mongodb: "// Backend Integration\nprint('Learning Authentication Systems')" }, explanation: "Practice Authentication Systems concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-47","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-48", number: 48, title: "Real-Time Applications", subtitle: "Change streams and real-time data", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Use change streams","Build real-time features","Handle events"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-48-1", title: "Overview", whyItMatters: "Real-Time Applications connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nReal-Time Applications using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-48-ex1", title: "Practice", description: "Try Real-Time Applications", code: { mongodb: "// Backend Integration\nprint('Learning Real-Time Applications')" }, explanation: "Practice Real-Time Applications concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-48","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-49", number: 49, title: "Replication and Replica Sets", subtitle: "High availability with replication", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Set up replica sets","Handle failover","Read from secondaries"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-49-1", title: "Overview", whyItMatters: "Replication and Replica Sets connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nReplication and Replica Sets using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-49-ex1", title: "Practice", description: "Try Replication and Replica Sets", code: { mongodb: "// Backend Integration\nprint('Learning Replication and Replica Sets')" }, explanation: "Practice Replication and Replica Sets concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-49","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-50", number: 50, title: "Sharding and Horizontal Scaling", subtitle: "Distributing data across servers", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Understand sharding","Configure shard keys","Manage sharded clusters"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-50-1", title: "Overview", whyItMatters: "Sharding and Horizontal Scaling connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nSharding and Horizontal Scaling using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-50-ex1", title: "Practice", description: "Try Sharding and Horizontal Scaling", code: { mongodb: "// Backend Integration\nprint('Learning Sharding and Horizontal Scaling')" }, explanation: "Practice Sharding and Horizontal Scaling concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-50","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-51", number: 51, title: "MongoDB Atlas Deployment", subtitle: "Cloud database with MongoDB Atlas", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Deploy on Atlas","Configure clusters","Monitor in cloud"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-51-1", title: "Overview", whyItMatters: "MongoDB Atlas Deployment connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nMongoDB Atlas Deployment using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-51-ex1", title: "Practice", description: "Try MongoDB Atlas Deployment", code: { mongodb: "// Backend Integration\nprint('Learning MongoDB Atlas Deployment')" }, explanation: "Practice MongoDB Atlas Deployment concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-51","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-52", number: 52, title: "Cloud Database Architecture", subtitle: "Designing cloud-native MongoDB", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Design cloud architecture","Optimize for cloud","Manage costs"], partLabel: "Part 5: Backend Integration and Scaling",
      sections: [
        {
          id: "mongodb-52-1", title: "Overview", whyItMatters: "Cloud Database Architecture connects MongoDB to your applications.",
          content: "**Core Concepts:**\n\nCloud Database Architecture using MongoDB drivers and tools.\n\n```javascript\n// Node.js MongoDB Example\nconst { MongoClient } = require('mongodb')\nconst client = new MongoClient('mongodb://localhost:27017')\nconsole.log('Connecting...')\n```\n\n**Key Skills:**\n- Driver integration\n- Schema design with ODM\n- Production deployment",
          codeExamples: [
            { id: "mongodb-52-ex1", title: "Practice", description: "Try Cloud Database Architecture", code: { mongodb: "// Backend Integration\nprint('Learning Cloud Database Architecture')" }, explanation: "Practice Cloud Database Architecture concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-52","type":"mcq","question":"What library provides schema-based MongoDB modeling?","options":["Mongoose","MongooseJS","MongoDriver","MongoSchema"],"correctAnswer":"Mongoose","explanation":"Mongoose is the most popular MongoDB ODM for Node.js.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"MongoClient","value":"Node.js driver"},{"label":"Mongoose","value":"ODM library"},{"label":"Change streams","value":"Real-time data"},{"label":"Replica set","value":"High availability"}],
    },
    {
      id: "mongodb-53", number: 53, title: "Project: Blog Backend Database", subtitle: "Design and build a blog database system", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Design blog data model","Implement CRUD operations","Build aggregation queries"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-53-1", title: "Blog Database", whyItMatters: "Build a complete blog backend database.",
          content: "**Project Overview:**\n\nDesign a MongoDB database for a blogging platform:\n\n- Users collection with profiles\n- Posts collection with comments embedded\n- Categories and tags\n- Aggregation for analytics\n\n```javascript\n// Blog Schema\nuse('blog')\ndb.createCollection('users')\ndb.createCollection('posts')\ndb.posts.insertOne({\n  title: 'My First Post',\n  content: 'Hello World',\n  author: ObjectId(),\n  tags: ['mongodb', 'tutorial'],\n  createdAt: new Date()\n})\nprint('Blog database ready!')\n```",
          codeExamples: [
            { id: "mongodb-53-ex1", title: "Blog Project", description: "Blog database setup", code: { mongodb: "// Blog Backend\nuse('blog')\ndb.createCollection('posts')\nprint('Blog database created')" }, explanation: "Create the blog database and collections." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-53","type":"mcq","question":"What is a good MongoDB pattern for blog comments?","options":["Embed in post","Separate collection","Both","Store as file"],"correctAnswer":"Embed in post","explanation":"Blog comments are typically embedded in the post document.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Embedding","value":"Comments in posts"},{"label":"Referencing","value":"Users referenced by posts"},{"label":"Index","value":"Title, author, date"}],
    },
    {
      id: "mongodb-54", number: 54, title: "Project: E-Commerce Database System", subtitle: "Build a production e-commerce database", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 130, prerequisites: [], learningObjectives: ["Design e-commerce schema","Implement product catalog","Build order system"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-54-1", title: "E-Commerce Database", whyItMatters: "Build a complete e-commerce MongoDB database.",
          content: "**Project Overview:**\n\nDesign a MongoDB database for an e-commerce platform:\n\n- Product catalog with categories\n- User accounts and addresses\n- Shopping cart and orders\n- Inventory management\n- Order aggregation for analytics\n\n```javascript\n// E-Commerce Schema\nuse('shop')\ndb.createCollection('products')\ndb.createCollection('orders')\ndb.products.insertOne({\n  name: 'Widget',\n  price: 29.99,\n  category: 'tools',\n  stock: 100,\n  ratings: []\n})\nprint('Shop database ready!')\n```",
          codeExamples: [
            { id: "mongodb-54-ex1", title: "Shop Project", description: "E-commerce database setup", code: { mongodb: "// E-Commerce\nuse('shop')\ndb.createCollection('products')\nprint('Shop database created')" }, explanation: "Create the e-commerce database." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-54","type":"mcq","question":"How should product inventory be modeled?","options":["As a field in product","Separate inventory collection","In-memory only","External service"],"correctAnswer":"As a field in product","explanation":"Inventory count is typically a field in the product document.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Products","value":"Catalog collection"},{"label":"Orders","value":"Order collection"},{"label":"Stock","value":"Inventory field"}],
    },
    {
      id: "mongodb-55", number: 55, title: "Project: Analytics Dashboard Backend", subtitle: "Build an analytics data pipeline", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Design analytics data model","Build aggregation pipelines","Create reporting system"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-55-1", title: "Analytics Database", whyItMatters: "Build a complete analytics system.",
          content: "**Project Overview:**\n\nDesign a MongoDB database for analytics:\n\n- Event tracking collection\n- User activity logs\n- Daily/Monthly aggregation\n- Real-time dashboard queries\n- Historical trend analysis\n\n```javascript\n// Analytics Schema\nuse('analytics')\ndb.createCollection('events')\ndb.events.insertOne({\n  event: 'page_view',\n  userId: ObjectId(),\n  page: '/home',\n  timestamp: new Date(),\n  metadata: { browser: 'Chrome' }\n})\nprint('Analytics database ready!')\n```",
          codeExamples: [
            { id: "mongodb-55-ex1", title: "Analytics Project", description: "Analytics database setup", code: { mongodb: "// Analytics\nuse('analytics')\ndb.createCollection('events')\nprint('Analytics database created')" }, explanation: "Create the analytics database." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-55","type":"mcq","question":"What stage computes daily aggregates?","options":["$group","$match","$project","$bucket"],"correctAnswer":"$group","explanation":"$group with date operators computes daily aggregates.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"$group","value":"Aggregate events"},{"label":"$bucket","value":"Histogram buckets"},{"label":"Index","value":"Event type + date"}],
    },
    {
      id: "mongodb-56", number: 56, title: "Project: Chat Application Database", subtitle: "Design a real-time chat database", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Design chat data model","Implement messaging","Build room system"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-56-1", title: "Chat Database", whyItMatters: "Build a real-time chat MongoDB database.",
          content: "**Project Overview:**\n\nDesign a MongoDB database for a chat application:\n\n- Users with online status\n- Chat rooms/channels\n- Messages with timestamps\n- Read receipts\n- Message search with text index\n\n```javascript\n// Chat Schema\nuse('chat')\ndb.createCollection('messages')\ndb.messages.insertOne({\n  roomId: 'general',\n  userId: ObjectId(),\n  text: 'Hello everyone!',\n  timestamp: new Date(),\n  readBy: []\n})\nprint('Chat database ready!')\n```",
          codeExamples: [
            { id: "mongodb-56-ex1", title: "Chat Project", description: "Chat database setup", code: { mongodb: "// Chat\nuse('chat')\ndb.createCollection('messages')\nprint('Chat database created')" }, explanation: "Create the chat database." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-56","type":"mcq","question":"How are chat messages typically stored?","options":["As documents in a collection","As embedded arrays","In files","In memory"],"correctAnswer":"As documents in a collection","explanation":"Messages are stored as individual documents for scalability.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Messages","value":"Document per message"},{"label":"Rooms","value":"Channel grouping"},{"label":"Text index","value":"Message search"}],
    },
    {
      id: "mongodb-57", number: 57, title: "Project: Full MERN Stack Backend", subtitle: "Build a complete MERN application", difficulty: "Expert", estimatedMinutes: 120, xpReward: 150, prerequisites: [], learningObjectives: ["Integrate MongoDB with Express","Build REST API","Connect React frontend"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-57-1", title: "MERN Stack", whyItMatters: "Build a complete MERN stack application.",
          content: "**Project Overview:**\n\nBuild a full MERN (MongoDB, Express, React, Node) stack application:\n\n- MongoDB: database layer\n- Express: REST API server\n- React: frontend UI\n- Node.js: runtime\n\n**User Stories:**\n- User registration and login\n- Create, read, update, delete items\n- Search and filter\n- Pagination\n- Real-time updates\n\n```javascript\n// MERN Backend\nconst express = require('express')\nconst { MongoClient } = require('mongodb')\n\nasync function start() {\n  const client = await MongoClient.connect('mongodb://localhost:27017')\n  const db = client.db('myapp')\n  console.log('Connected to MongoDB')\n}\n\nstart()\n```\n\nThis project combines all MongoDB skills into a complete full-stack application.",
          codeExamples: [
            { id: "mongodb-57-ex1", title: "MERN Project", description: "MERN stack setup", code: { mongodb: "// MERN Backend\nconst { MongoClient } = require('mongodb')\nconsole.log('MERN stack ready!')" }, explanation: "Initialize the MERN stack project." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-57","type":"mcq","question":"What does MERN stand for?","options":["MongoDB, Express, React, Node","MySQL, Express, React, Node","Mongo, Express, Ruby, Node","MariaDB, Express, React, Node"],"correctAnswer":"MongoDB, Express, React, Node","explanation":"MERN is a popular full-stack JavaScript stack.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"MongoDB","value":"Database layer"},{"label":"Express","value":"API framework"},{"label":"React","value":"Frontend"},{"label":"Node.js","value":"Runtime"}],
    },
    {
      id: "mongodb-58", number: 58, title: "MongoDB Debugging Challenges", subtitle: "Troubleshoot common MongoDB issues", difficulty: "Expert", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Debug query problems","Fix performance issues","Resolve data modeling errors"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-58-1", title: "Debugging", whyItMatters: "Practice debugging MongoDB issues.",
          content: "**Challenge 1: Slow Query**\n\nA query is running slowly. Use explain() to find the issue and create appropriate indexes.\n\n**Challenge 2: Data Modeling**\n\nA schema design is causing excessive joins. Redesign using embedding.\n\n**Challenge 3: Aggregation Error**\n\nAn aggregation pipeline returns incorrect results. Debug each stage.\n\n**Challenge 4: Validation**\n\nDocuments with invalid data entered the collection. Add schema validation.\n\n**Challenge 5: Replication**\n\nA replica set primary fails. Troubleshoot and initiate failover.\n\n```javascript\n// Debugging\nuse('test')\ndb.collection.find({ status: 'active' }).explain('executionStats')\n```\n\nEach challenge tests different MongoDB skills in a practical debugging scenario.",
          codeExamples: [
            { id: "mongodb-58-ex1", title: "Debug Challenge", description: "Debug a slow query", code: { mongodb: "// Debug\nuse('test')\nprint('Analyzing query performance...')" }, explanation: "Use explain() to identify slow query issues." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-58","type":"mcq","question":"What command shows query execution details?","options":["explain()","debug()","profile()","trace()"],"correctAnswer":"explain()","explanation":"explain() shows execution statistics for a query.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"explain()","value":"Execution details"},{"label":"Index","value":"Performance fix"},{"label":"Schema validation","value":"Data integrity"}],
    },
    {
      id: "mongodb-59", number: 59, title: "Production Database Optimization Challenges", subtitle: "Optimize MongoDB for production", difficulty: "Expert", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Optimize indexes","Tune aggregation queries","Scale database infrastructure"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-59-1", title: "Production Optimization", whyItMatters: "Optimize MongoDB for production workloads.",
          content: "**Challenge 1: Index Analysis**\n\nIdentify unused and duplicate indexes. Remove and create optimal indexes.\n\n**Challenge 2: Query Tuning**\n\nRewrite slow queries to use indexes efficiently.\n\n**Challenge 3: Aggregation Optimization**\n\nOptimize pipeline stage order and use indexes within pipelines.\n\n**Challenge 4: Shard Key Design**\n\nDesign optimal shard keys for even data distribution.\n\n**Challenge 5: Memory Management**\n\nConfigure WiredTiger cache and working set for optimal performance.\n\n```javascript\n// Optimization\nuse('production')\ndb.collection.getIndexes()\ndb.collection.aggregate([...]).explain()\n```\n\nMaster these challenges to handle production-scale MongoDB.",
          codeExamples: [
            { id: "mongodb-59-ex1", title: "Optimization Challenge", description: "Analyze and optimize indexes", code: { mongodb: "// Optimization\nuse('production')\nprint('Analyzing indexes...')" }, explanation: "Review current indexes and identify optimization opportunities." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-59","type":"mcq","question":"What is a common cause of slow aggregation?","options":["Full collection scan","Too many stages","Wrong data types","Network latency"],"correctAnswer":"Full collection scan","explanation":"Aggregations that scan all documents without indexes are slow.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Indexes","value":"Query accelerators"},{"label":"Shard key","value":"Data distribution"},{"label":"WiredTiger","value":"Storage engine"}],
    },
    {
      id: "mongodb-60", number: 60, title: "MongoDB Mastery Recap and Certificate Prep", subtitle: "Review and certification preparation", difficulty: "Expert", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Review all MongoDB topics","Practice integration patterns","Prepare for certification"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "mongodb-60-1", title: "Mastery Review", whyItMatters: "Consolidate your MongoDB knowledge.",
          content: "**Module Review Checklist:**\n\n- CRUD Operations: insert, find, update, delete\n- Data Modeling: embedding, referencing, validation\n- Aggregation: $match, $group, $project, $lookup, $sort\n- Indexing: single, compound, text, geospatial\n- Security: authentication, authorization, TLS\n- Backend Integration: Node.js driver, Mongoose ODM\n- Scaling: replication, sharding, Atlas\n\n**Key Skills:**\n- Designing MongoDB schemas\n- Building aggregation pipelines\n- Optimizing query performance\n- Integrating with backend applications\n- Deploying to production\n\n```javascript\n// Final Review\nuse('mastery')\nprint('MongoDB Mastery Complete!')\n```\n\nA MongoDB master can design, build, and optimize production database systems.",
          codeExamples: [
            { id: "mongodb-60-ex1", title: "Final Demo", description: "Comprehensive MongoDB demo", code: { mongodb: "// MongoDB Mastery Demo\nuse('demo')\ndb.createCollection('skills')\ndb.skills.insertOne({ skill: 'MongoDB', level: 'Master' })\nprint('MongoDB Mastery Complete!')" }, explanation: "Comprehensive demo showing MongoDB mastery." },
          ],
        },
      ],
      quiz: { questions: [{"id":"mongodb-60","type":"mcq","question":"What makes a great MongoDB developer?","options":["Understanding data modeling","Knowing all commands","Fast typing speed","Using GUI tools"],"correctAnswer":"Understanding data modeling","explanation":"Data modeling is the most critical MongoDB skill.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Mastery","value":"All MongoDB skills"},{"label":"Production","value":"Scalable deployments"},{"label":"MERN","value":"Full stack integration"}],
    },
  ],
};
