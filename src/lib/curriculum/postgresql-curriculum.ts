import type { Track, Chapter } from "./types";

const postgresqlChapters: Chapter[] = [
  {
    id: "postgresql-1",
    number: 1,
    partLabel: "Part 1: PostgreSQL Fundamentals",
    title: "What Is PostgreSQL and Why Use It?",
    subtitle: "Introduction to PostgreSQL",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what PostgreSQL is", "Know PostgreSQL's history and features", "Understand why PostgreSQL is preferred"],
    sections: [
      {
        id: "postgresql-1-1",
        title: "PostgreSQL Overview",
        whyItMatters: "PostgreSQL is the world's most advanced open-source database.",
        content: `PostgreSQL (pronounced "post-gres-Q-L") is an advanced, enterprise-class, open-source relational database system. It supports both SQL (relational) and JSON (non-relational) querying.

Why PostgreSQL matters:
- ACID compliant - ensures data integrity
- Highly extensible - supports custom functions, types, and extensions
- Strong community - active development since 1986
- Cross-platform - runs on Windows, Linux, macOS
- Standards compliant - follows SQL standards closely

Key Features:
- Complex queries support
- Foreign keys, triggers, stored procedures
- Views, materialized views
- JSON and JSONB support
- Full-text search
- Multi-version concurrency control (MVCC)
- Point-in-time recovery
- Partitioning
- Replication and high availability`,
        codeExamples: [
          {
            id: "postgresql-1-ex1",
            title: "PostgreSQL vs Other Databases",
            description: "Comparison",
            code: { postgresql: "-- PostgreSQL is different from MySQL:\n-- MySQL: Simple, fast, less features\n-- PostgreSQL: Feature-rich, ACID compliant, more complex\n\n-- PostgreSQL supports:\n-- ✓ ACID transactions\n-- ✓ Complex stored procedures\n-- ✓ Full-text search\n-- ✓ JSON/JSONB\n-- ✓ Advanced indexing\n-- ✓ Custom types\n-- ✓ Extensions (PostGIS, pgvector, etc.)\n\n-- Let's start with a simple query\nSELECT 'Hello, PostgreSQL!' AS greeting;\n-- Result: Hello, PostgreSQL!" },
            explanation: "PostgreSQL provides more features than most open-source databases."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "SQL Prerequisite",
            content: "This track assumes you know basic SQL. If you need a refresher, check our SQL course for SELECT, INSERT, UPDATE, DELETE fundamentals."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does PostgreSQL stand for?", options: ["Post Graphics SQL", "Post Relational SQL", "Advanced SQL", "Original PostgreSQL"], correctAnswer: 1, explanation: "PostgreSQL originally stood for 'Post Ingres SQL', now just 'PostgreSQL'.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is PostgreSQL?", options: ["NoSQL database", "Relational database with JSON support", "Graph database", "Key-value store"], correctAnswer: 1, explanation: "PostgreSQL is a relational database that also supports JSON.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does ACID mean?", options: ["Advanced", "Transaction properties", "Query type", "Index type"], correctAnswer: 1, explanation: "ACID = Atomicity, Consistency, Isolation, Durability.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "PostgreSQL is open-source.", correctAnswer: true, explanation: "PostgreSQL is free and open-source under PostgreSQL License.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What is MVCC?", options: ["Memory management", "Concurrency control", "Query optimizer", "Storage engine"], correctAnswer: 1, explanation: "Multi-Version Concurrency Control allows concurrent reads/writes.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "When was PostgreSQL created?", options: ["1996", "1986", "2000", "1990"], correctAnswer: 1, explanation: "PostgreSQL started as POSTGRES in 1986 at UC Berkeley.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What does PostgreSQL support?", options: ["Only SQL", "Only JSON", "Both SQL and JSON", "Only XML"], correctAnswer: 2, explanation: "PostgreSQL supports both relational (SQL) and non-relational (JSON) data.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "PostgreSQL can run on Windows.", correctAnswer: true, explanation: "PostgreSQL is cross-platform and runs on Windows, Linux, and macOS.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "PostgreSQL", value: "Advanced open-source RDBMS" },
      { label: "ACID", value: "Transaction properties" },
      { label: "MVCC", value: "Multi-Version Concurrency Control" },
      { label: "Extensions", value: "PostgreSQL superpowers" }
    ]
  },
  {
    id: "postgresql-2",
    number: 2,
    title: "Installing PostgreSQL and pgAdmin",
    subtitle: "Setting Up Your Environment",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-1"],
    learningObjectives: ["Install PostgreSQL", "Configure pgAdmin", "Connect to database server"],
    sections: [
      {
        id: "postgresql-2-1",
        title: "Installation Methods",
        whyItMatters: "Set up PostgreSQL on your machine.",
        content: `PostgreSQL can be installed in several ways depending on your operating system. We recommend the graphical installer for beginners.`,

        codeExamples: [
          {
            id: "postgresql-2-ex1",
            title: "Installation Options",
            description: "Different ways to install",
            code: { postgresql: "-- Windows: Download from postgresql.org or use Chocolatey\nchoco install postgresql\n\n-- macOS: Use Homebrew\nbrew install postgresql\nbrew services start postgresql\n\n-- Linux (Ubuntu)\nsudo apt update\nsudo apt install postgresql postgresql-contrib\n\n-- Docker (for quick setup)\ndocker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword --name mypostgres postgres\n\n-- After installation, connect:\npsql -U postgres" },
            explanation: "Choose the installation method that matches your OS."
          }
        ]
      },
      {
        id: "postgresql-2-2",
        title: "pgAdmin Overview",
        whyItMatters: "pgAdmin is the most popular PostgreSQL GUI.",
        content: `pgAdmin is a free, open-source administration tool for PostgreSQL with a graphical interface.`,

        codeExamples: [
          {
            id: "postgresql-2-ex2",
            title: "pgAdmin Connection",
            description: "Connect using pgAdmin",
            code: { postgresql: "-- pgAdmin is pre-bundled with PostgreSQL installer\n-- 1. Open pgAdmin\n-- 2. Right-click \"Servers\" -> \"Create\" -> \"Server\"\n-- 3. Fill in connection details:\n--    - Name: My Server\n--    - Host: localhost\n--    - Port: 5432\n--    - Database: postgres\n--    - Username: postgres\n--    - Password: (your password)\n\n-- After connecting, you can:\n-- ✓ Browse databases\n-- ✓ Execute queries\n-- ✓ Manage tables\n-- ✓ View query plans\n-- ✓ Import/export data" },
            explanation: "pgAdmin provides a visual interface for database management."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is pgAdmin?", options: ["Database type", "Administration tool", "Programming language", "Query type"], correctAnswer: 1, explanation: "pgAdmin is a PostgreSQL administration tool.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the default PostgreSQL port?", options: ["3306", "5432", "8080", "1433"], correctAnswer: 1, explanation: "PostgreSQL defaults to port 5432.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What command connects to PostgreSQL from terminal?", options: ["mysql", "psql", "pgconnect", "postgres"], correctAnswer: 1, explanation: "psql is the PostgreSQL command-line client.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "psql", value: "Command-line client" },
      { label: "5432", value: "Default port" },
      { label: "pgAdmin", value: "GUI management tool" }
    ]
  },
  {
    id: "postgresql-3",
    number: 3,
    title: "PostgreSQL Architecture",
    subtitle: "How PostgreSQL Works",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["postgresql-2"],
    learningObjectives: ["Understand database cluster", "Know the process architecture", "Understand memory structure"],
    sections: [
      {
        id: "postgresql-3-1",
        title: "PostgreSQL Components",
        whyItMatters: "Understanding architecture helps with troubleshooting.",
        content: `PostgreSQL uses a process-per-client model with shared memory.`,

        codeExamples: [
          {
            id: "postgresql-3-ex1",
            title: "Architecture Overview",
            description: "How PostgreSQL works",
            code: { postgresql: "-- PostgreSQL Architecture:\n\n-- Shared Memory (in RAM):\n-- - Buffer Pool: Cached data pages\n-- - WAL Buffer: Write-Ahead Log\n-- - Connection Pool\n\n-- Background Processes:\n-- - Postgres Master (Postmaster): Manages connections\n-- - Background Worker: Background tasks\n-- - Checkpointer: Writes dirty pages\n-- - WAL Writer: Writes transaction logs\n-- - Autovacuum: Auto-cleanup\n\n-- Per-Connection Processes:\n-- - Backend Process: Handles each client query\n\n-- Storage:\n-- - Data files in $PGDATA/base/\n-- - WAL files in $PGDATA/pg_wal/\n-- - Configuration in $PGDATA/postgresql.conf" },
            explanation: "PostgreSQL has shared memory and process-based architecture."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What model does PostgreSQL use?", options: ["Thread-based", "Process-based", "Event-based", "Hybrid"], correctAnswer: 1, explanation: "PostgreSQL uses process-per-client model.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the buffer pool?", options: ["Network cache", "Memory for data pages", "Query cache", "Connection pool"], correctAnswer: 1, explanation: "Buffer pool caches frequently accessed data pages.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does WAL mean?", options: ["Write Access Log", "Write-Ahead Log", "Work Area List", "Write After Load"], correctAnswer: 1, explanation: "WAL = Write-Ahead Log for durability.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Postmaster", value: "Main server process" },
      { label: "Buffer Pool", value: "Shared memory cache" },
      { label: "WAL", value: "Write-Ahead Log" }
    ]
  },
  {
    id: "postgresql-4",
    number: 4,
    title: "Databases, Schemas, and Tables",
    subtitle: "Database Organization",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-3"],
    learningObjectives: ["Create databases", "Create schemas", "Create tables"],
    sections: [
      {
        id: "postgresql-4-1",
        title: "Database and Schema",
        whyItMatters: "Organize your data properly.",
        content: `PostgreSQL organizes data in: Database -> Schema -> Table hierarchy.`,

        codeExamples: [
          {
            id: "postgresql-4-ex1",
            title: "Database Operations",
            description: "Creating databases and schemas",
            code: { postgresql: "-- Create a new database\nCREATE DATABASE myapp;\n\n-- Connect to the database\n\\c myapp\n\n-- Create a schema (namespace)\nCREATE SCHEMA sales;\n\n-- Create schema with authorization\nCREATE SCHEMA analytics AUTHORIZATION john;\n\n-- List all databases\nSELECT datname FROM pg_database;\n\n-- List schemas in current database\nSELECT schema_name FROM information_schema.schemata;\n\n-- Default schema is 'public'\n-- Set search path\nSET search_path TO sales, public;" },
            explanation: "Schemas help organize objects within a database."
          }
        ]
      },
      {
        id: "postgresql-4-2",
        title: "Table Creation",
        whyItMatters: "Tables are the foundation of relational databases.",
        content: `Create tables with appropriate data types and constraints.`,

        codeExamples: [
          {
            id: "postgresql-4-ex2",
            title: "Create Tables",
            description: "Table creation syntax",
            code: { postgresql: "-- Basic table creation\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Table with constraints\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10, 2) CHECK (price > 0),\n    stock INTEGER DEFAULT 0,\n    category_id INTEGER REFERENCES categories(id),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- List tables\nSELECT tablename FROM pg_tables WHERE schemaname = 'public';\n\n-- Drop table (careful!)\nDROP TABLE products;" },
            explanation: "Always define appropriate constraints when creating tables."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is the hierarchy in PostgreSQL?", options: ["Table -> Schema -> Database", "Database -> Schema -> Table", "Schema -> Table -> Database", "Database -> Table -> Schema"], correctAnswer: 1, explanation: "Database > Schema > Table is the hierarchy.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the default schema?", options: ["default", "main", "public", "primary"], correctAnswer: 2, explanation: "public is the default schema.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does SERIAL do?", options: ["Creates sequence", "Generates UUID", "Adds timestamp", "Creates index"], correctAnswer: 0, explanation: "SERIAL creates an auto-incrementing integer sequence.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "CREATE DATABASE", value: "Create new database" },
      { label: "CREATE SCHEMA", value: "Create schema" },
      { label: "CREATE TABLE", value: "Create table" },
      { label: "SERIAL", value: "Auto-increment" }
    ]
  },
  {
    id: "postgresql-5",
    number: 5,
    title: "Data Types in PostgreSQL",
    subtitle: "Working with Different Data Types",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["postgresql-4"],
    learningObjectives: ["Use numeric types", "Use string types", "Use date/time types", "Use JSON type"],
    sections: [
      {
        id: "postgresql-5-1",
        title: "Numeric and String Types",
        whyItMatters: "Choosing correct data types is crucial for performance.",
        content: `PostgreSQL provides a rich set of data types beyond standard SQL.`,

        codeExamples: [
          {
            id: "postgresql-5-ex1",
            title: "Data Types Examples",
            description: "Working with PostgreSQL types",
            code: { postgresql: "-- Numeric Types\nCREATE TABLE examples (\n    -- Integers\n    small_int SMALLINT,      -- -32768 to 32767\n    regular_int INTEGER,    -- -2B to 2B\n    big_int BIGINT,          -- Very large\n    \n    -- Decimals\n    decimal_num DECIMAL(10, 2),  -- 10 digits, 2 decimal places\n    numeric_num NUMERIC(10, 2),  -- Same as DECIMAL\n    real_num REAL,            -- Single precision\n    double_num DOUBLE PRECISION, -- Double precision\n    \n    -- Serial (auto-increment)\n    serial_id SERIAL\n);\n\n-- String Types\nCREATE TABLE strings (\n    fixed_char CHAR(10),        -- Fixed length, padded\n    varchar_str VARCHAR(100),   -- Variable length\n    text_str TEXT,             -- Unlimited length\n    name NAME                   -- Internal type for names\n);" },
            explanation: "Choose appropriate data types based on your data requirements."
          }
        ]
      },
      {
        id: "postgresql-5-2",
        title: "Date/Time and JSON Types",
        whyItMatters: "PostgreSQL has excellent date and JSON support.",
        content: `Modern applications often need date/time and JSON data types.`,

        codeExamples: [
          {
            id: "postgresql-5-ex2",
            title: "Date, Time, and JSON",
            description: "Advanced types",
            code: { postgresql: "-- Date/Time Types\nCREATE TABLE events (\n    event_date DATE,           -- Date only\n    event_time TIME,          -- Time only\n    event_timestamp TIMESTAMP, -- Date and time\n    event_timestamptz TIMESTAMP WITH TIME ZONE, -- With timezone\n    event_interval INTERVAL   -- Duration\n);\n\n-- Insert with different date/time functions\nINSERT INTO events VALUES (\n    CURRENT_DATE,\n    CURRENT_TIME,\n    NOW(),\n    NOW() AT TIME ZONE 'UTC',\n    INTERVAL '1 day'\n);\n\n-- JSON Types\nCREATE TABLE documents (\n    id SERIAL PRIMARY KEY,\n    data JSON,    -- Validated JSON\n    metadata JSONB  -- Binary JSON, more efficient\n);\n\n-- JSON query\nINSERT INTO documents (data) VALUES\n('{\"name\": \"John\", \"age\": 30}'::json);\n\nSELECT data->>'name' FROM documents;  -- Returns: John" },
            explanation: "JSONB is preferred for frequent queries as it's more efficient."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What's the difference between JSON and JSONB?", options: ["Same thing", "JSONB is validated/binary", "JSON is faster", "No difference"], correctAnswer: 1, explanation: "JSONB stores binary format, faster for queries.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does SERIAL create?", options: ["UUID", "Sequence with integer", "Random string", "Timestamp"], correctAnswer: 1, explanation: "SERIAL creates auto-incrementing integer.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "DECIMAL(10,2) means?", options: ["10 digits total, 2 decimal", "10 decimal places", "2 digits total", "10 bytes, 2 bits"], correctAnswer: 0, explanation: "DECIMAL(p,s) has p total digits, s decimal places.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "JSONB", value: "Binary JSON, queryable" },
      { label: "VARCHAR(n)", value: "Variable string" },
      { label: "DECIMAL(p,s)", value: "Exact numeric" },
      { label: "TIMESTAMP", value: "Date + time" }
    ]
  },
  {
    id: "postgresql-6",
    number: 6,
    title: "CRUD Operations",
    subtitle: "Create, Read, Update, Delete",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-5"],
    learningObjectives: ["Insert data", "Query data", "Update data", "Delete data"],
    sections: [
      {
        id: "postgresql-6-1",
        title: "INSERT and SELECT",
        whyItMatters: "Core database operations.",
        content: `INSERT adds data, SELECT retrieves it.`,

        codeExamples: [
          {
            id: "postgresql-6-ex1",
            title: "Insert and Select",
            description: "Basic CRUD operations",
            code: { postgresql: "-- Insert single row\nINSERT INTO users (username, email) \nVALUES ('john', 'john@example.com');\n\n-- Insert multiple rows\nINSERT INTO users (username, email) VALUES\n    ('jane', 'jane@example.com'),\n    ('bob', 'bob@example.com');\n\n-- Insert with default values\nINSERT INTO users (username) VALUES ('alice');\n\n-- SELECT basics\nSELECT * FROM users;                    -- All columns, all rows\nSELECT username, email FROM users;    -- Specific columns\nSELECT DISTINCT username FROM users;   -- Unique values\n\n-- WHERE clause\nSELECT * FROM users WHERE id = 1;\nSELECT * FROM users WHERE email LIKE '%@example.com';\n\n-- ORDER BY\nSELECT * FROM users ORDER BY created_at DESC;\n\n-- LIMIT\nSELECT * FROM users LIMIT 10 OFFSET 20;" },
            explanation: "SELECT is the most common SQL operation."
          }
        ]
      },
      {
        id: "postgresql-6-2",
        title: "UPDATE and DELETE",
        whyItMatters: "Modifying and removing data.",
        content: `UPDATE changes existing data, DELETE removes data.`,

        codeExamples: [
          {
            id: "postgresql-6-ex2",
            title: "Update and Delete",
            description: "Modifying data",
            code: { postgresql: "-- UPDATE - change existing data\nUPDATE users \nSET email = 'newemail@example.com' \nWHERE id = 1;\n\n-- Update multiple columns\nUPDATE users \nSET email = 'updated@example.com', \n    username = 'john_doe'\nWHERE id = 1;\n\n-- UPDATE with expression\nUPDATE products \nSET price = price * 1.1  -- 10% price increase\nWHERE category = 'electronics';\n\n-- DELETE - remove rows\nDELETE FROM users WHERE id = 5;\n\n-- DELETE with subquery\nDELETE FROM users \nWHERE created_at < '2023-01-01' \nAND id NOT IN (SELECT user_id FROM orders);\n\n-- DELETE all (careful!)\nDELETE FROM logs;  -- Deletes all rows\n\n-- TRUNCATE - faster for deleting all\nTRUNCATE TABLE logs RESTART IDENTITY;\n\n-- Upsert (INSERT OR UPDATE)\nINSERT INTO users (username, email) \nVALUES ('john', 'john@example.com')\nON CONFLICT (username) \nDO UPDATE SET email = EXCLUDED.email;" },
            explanation: "Always use WHERE with UPDATE and DELETE to avoid accidental data loss."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does INSERT do?", options: ["Reads data", "Adds data", "Deletes data", "Updates data"], correctAnswer: 1, explanation: "INSERT adds new rows to a table.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What happens without WHERE in UPDATE?", options: ["Nothing", "Updates first row", "Updates all rows", "Error"], correctAnswer: 2, explanation: "UPDATE without WHERE updates all rows - dangerous!", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is ON CONFLICT used for?", options: ["Joins", "Upsert (insert or update)", "Transactions", "Constraints"], correctAnswer: 1, explanation: "ON CONFLICT handles duplicate key errors.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "INSERT", value: "Add rows" },
      { label: "SELECT", value: "Read rows" },
      { label: "UPDATE", value: "Modify rows" },
      { label: "DELETE", value: "Remove rows" }
    ]
  },
  {
    id: "postgresql-7",
    number: 7,
    title: "Filtering and Sorting Data",
    subtitle: "Refining Query Results",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["postgresql-6"],
    learningObjectives: ["Use WHERE clause", "Use ORDER BY", "Use LIMIT and OFFSET"],
    sections: [
      {
        id: "postgresql-7-1",
        title: "Filtering with WHERE",
        whyItMatters: "Filter to get only needed data.",
        content: `WHERE clause filters rows based on conditions.`,

        codeExamples: [
          {
            id: "postgresql-7-ex1",
            title: "WHERE Examples",
            description: "Filtering data",
            code: { postgresql: "-- Comparison operators\nSELECT * FROM products WHERE price > 100;\nSELECT * FROM users WHERE age >= 18;\n\n-- Equality\nSELECT * FROM users WHERE status = 'active';\n\n-- IN operator\nSELECT * FROM users WHERE country IN ('USA', 'Canada', 'Mexico');\n\n-- BETWEEN\nSELECT * FROM orders WHERE total BETWEEN 50 AND 100;\n\n-- LIKE (pattern matching)\nSELECT * FROM users WHERE email LIKE '%@gmail.com';\nSELECT * FROM users WHERE name LIKE 'J%';  -- Starts with J\n\n-- ILIKE (case-insensitive)\nSELECT * FROM users WHERE name ILIKE '%john%';\n\n-- IS NULL / IS NOT NULL\nSELECT * FROM users WHERE email IS NOT NULL;\n\n-- Boolean combinations\nSELECT * FROM users \nWHERE status = 'active' AND age > 18;\n\nSELECT * FROM products \nWHERE price < 50 OR category = 'sale';" },
            explanation: "WHERE filters rows before they're returned."
          }
        ]
      },
      {
        id: "postgresql-7-2",
        title: "Sorting and Limiting",
        whyItMatters: "Control result order and size.",
        content: `ORDER BY sorts results, LIMIT restricts how many are returned.`,

        codeExamples: [
          {
            id: "postgresql-7-ex2",
            title: "Sort and Limit",
            description: "Ordering results",
            code: { postgresql: "-- ORDER BY - sort results\nSELECT * FROM users ORDER BY created_at;\nSELECT * FROM users ORDER BY created_at DESC;  -- Descending\n\n-- Multiple columns\nSELECT * FROM users ORDER BY country ASC, name ASC;\n\n-- ORDER BY with expressions\nSELECT * FROM products ORDER BY price * quantity DESC;\n\n-- LIMIT - restrict number of results\nSELECT * FROM users LIMIT 10;\n\n-- OFFSET - skip results (for pagination)\nSELECT * FROM users LIMIT 10 OFFSET 20;  -- Page 3\n\n-- FETCH (SQL standard, alternative to LIMIT)\nSELECT * FROM users FETCH FIRST 10 ROWS ONLY;\n\n-- Practical pagination\nSELECT * FROM products \nORDER BY created_at DESC\nLIMIT 20 OFFSET 40;  -- Page 3, 20 per page" },
            explanation: "LIMIT and OFFSET are essential for pagination."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does LIKE '%abc' match?", options: ["Exactly 'abc'", "Ends with abc", "Starts with abc", "Contains abc"], correctAnswer: 1, explanation: "% is wildcard, so '%abc' matches anything ending with abc.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does OFFSET do?", options: ["Limits results", "Skips results", "Sorts results", "Filters results"], correctAnswer: 1, explanation: "OFFSET skips the first N rows of results.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does ILIKE do?", options: ["Case-sensitive LIKE", "Case-insensitive LIKE", "NOT LIKE", "Similar to LIKE"], correctAnswer: 1, explanation: "ILIKE is case-insensitive pattern matching.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "WHERE", value: "Filter rows" },
      { label: "ORDER BY", value: "Sort results" },
      { label: "LIMIT", value: "Max rows" },
      { label: "OFFSET", value: "Skip rows" }
    ]
  },
  {
    id: "postgresql-8",
    number: 8,
    title: "Aggregate Functions",
    subtitle: "Summarizing Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-7"],
    learningObjectives: ["Use COUNT, SUM, AVG", "Use MIN, MAX", "Use aggregate functions"],
    sections: [
      {
        id: "postgresql-8-1",
        title: "Common Aggregates",
        whyItMatters: "Aggregates summarize data across rows.",
        content: `Aggregate functions compute values across multiple rows.`,

        codeExamples: [
          {
            id: "postgresql-8-ex1",
            title: "Aggregate Functions",
            description: "Summarizing data",
            code: { postgresql: "-- COUNT - count rows\nSELECT COUNT(*) FROM users;                    -- All rows\nSELECT COUNT(DISTINCT country) FROM users;   -- Unique countries\n\n-- SUM - total\nSELECT SUM(amount) FROM orders;\n\n-- AVG - average\nSELECT AVG(price) FROM products;\n\n-- MIN and MAX\nSELECT MIN(price) AS cheapest, MAX(price) AS most_expensive \nFROM products;\n\n-- Multiple aggregates\nSELECT \n    COUNT(*) AS total_orders,\n    SUM(total) AS revenue,\n    AVG(total) AS avg_order_value,\n    MIN(total) AS smallest_order,\n    MAX(total) AS largest_order\nFROM orders;\n\n-- With WHERE\nSELECT COUNT(*) FROM users WHERE status = 'active';\nSELECT AVG(price) FROM products WHERE category = 'electronics';" },
            explanation: "Aggregate functions operate on all rows or groups."
          }
        ]
      },
      {
        id: "postgresql-8-2",
        title: "String and Array Aggregates",
        whyItMatters: "PostgreSQL has powerful aggregate functions.",
        content: `PostgreSQL extends standard aggregates with string and array functions.`,

        codeExamples: [
          {
            id: "postgresql-8-ex2",
            title: "PostgreSQL-Specific Aggregates",
            description: "Advanced aggregates",
            code: { postgresql: "-- String aggregation\nSELECT \n    country,\n    STRING_AGG(name, ', ') AS users_list\nFROM users\nGROUP BY country;\n\n-- With ORDER BY inside aggregate\nSELECT \n    country,\n    STRING_AGG(name, ', ' ORDER BY name) AS sorted_names\nFROM users\nGROUP BY country;\n\n-- Array aggregation\nSELECT \n    department,\n    ARRAY_AGG(employee_name) AS employees\nFROM staff\nGROUP BY department;\n\n-- JSON aggregation\nSELECT \n    category,\n    JSON_AGG(JSON_BUILD_OBJECT('name', name, 'price', price)) AS products\nFROM products\nGROUP BY category;\n\n-- Statistical functions\nSELECT \n    STDDEV(price) AS price_stddev,\n    VARIANCE(price) AS price_variance\nFROM products;" },
            explanation: "PostgreSQL's aggregate functions are more powerful than standard SQL."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does COUNT(*) return?", options: ["Unique rows", "All rows including null", "First row", "Last row"], correctAnswer: 1, explanation: "COUNT(*) counts all rows, including duplicates.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does STRING_AGG do?", options: ["Counts strings", "Concatenates strings", "Splits strings", "Trims strings"], correctAnswer: 1, explanation: "STRING_AGG concatenates values into a single string.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Can aggregates be used with WHERE?", options: ["No", "Yes", "Only with GROUP BY", "Only with ORDER BY"], correctAnswer: 1, explanation: "Yes, WHERE filters rows before aggregation.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "COUNT(*)", value: "Count rows" },
      { label: "SUM()", value: "Total" },
      { label: "AVG()", value: "Average" },
      { label: "STRING_AGG()", value: "Concatenate strings" }
    ]
  },
  {
    id: "postgresql-9",
    number: 9,
    title: "GROUP BY and HAVING",
    subtitle: "Grouping Data",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-8"],
    learningObjectives: ["Use GROUP BY", "Use HAVING", "Filter grouped results"],
    sections: [
      {
        id: "postgresql-9-1",
        title: "GROUP BY Basics",
        whyItMatters: "Group data to compute aggregates per group.",
        content: `GROUP BY creates groups of rows for aggregate calculations.`,

        codeExamples: [
          {
            id: "postgresql-9-ex1",
            title: "GROUP BY Examples",
            description: "Grouping data",
            code: { postgresql: "-- Group by category\nSELECT \n    category,\n    COUNT(*) AS product_count,\n    AVG(price) AS avg_price\nFROM products\nGROUP BY category;\n\n-- Multiple columns\nSELECT \n    country,\n    city,\n    COUNT(*) AS customers\nFROM users\nGROUP BY country, city;\n\n-- With ORDER BY\nSELECT \n    category,\n    SUM(stock) AS total_stock\nFROM products\nGROUP BY category\nORDER BY total_stock DESC;\n\n-- Using aliases (PostgreSQL feature)\nSELECT \n    category,\n    COUNT(*) AS cnt\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 5;" },
            explanation: "GROUP BY divides rows into groups for aggregate functions."
          }
        ]
      },
      {
        id: "postgresql-9-2",
        title: "HAVING Clause",
        whyItMatters: "Filter groups after aggregation.",
        content: `HAVING filters groups, similar to how WHERE filters rows.`,

        codeExamples: [
          {
            id: "postgresql-9-ex2",
            title: "HAVING Examples",
            description: "Filtering groups",
            code: { postgresql: "-- HAVING vs WHERE\n-- WHERE filters rows BEFORE grouping\n-- HAVING filters groups AFTER grouping\n\n-- Find categories with more than 10 products\nSELECT \n    category,\n    COUNT(*) AS product_count\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 10;\n\n-- Find customers with total orders > $1000\nSELECT \n    user_id,\n    SUM(total) AS lifetime_value\nFROM orders\nGROUP BY user_id\nHAVING SUM(total) > 1000;\n\n-- Complex having\nSELECT \n    category,\n    COUNT(*) AS count,\n    AVG(price) AS avg_price\nFROM products\nWHERE price > 10\nGROUP BY category\nHAVING COUNT(*) >= 5 AND AVG(price) > 50\nORDER BY avg_price DESC;" },
            explanation: "WHERE filters rows before GROUP BY, HAVING filters after."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "When does HAVING execute?", options: ["Before GROUP BY", "After GROUP BY", "Before WHERE", "After ORDER BY"], correctAnswer: 1, explanation: "HAVING filters groups after GROUP BY aggregation.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Can you use aggregate in WHERE?", options: ["Yes", "No", "Only with GROUP BY", "Only in HAVING"], correctAnswer: 1, explanation: "Use HAVING for aggregate conditions, WHERE for row conditions.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does GROUP BY do?", options: ["Sorts data", "Creates groups for aggregates", "Filters data", "Joins tables"], correctAnswer: 1, explanation: "GROUP BY creates groups for aggregate calculations.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "GROUP BY", value: "Create groups" },
      { label: "HAVING", value: "Filter groups" },
      { label: "WHERE", value: "Filter rows" },
      { label: "Order matters", value: "WHERE -> GROUP BY -> HAVING -> ORDER BY" }
    ]
  },
  {
    id: "postgresql-10",
    number: 10,
    title: "Constraints and Validation",
    subtitle: "Data Integrity",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-9"],
    learningObjectives: ["Use NOT NULL", "Use UNIQUE", "Use CHECK", "Use DEFAULT"],
    sections: [
      {
        id: "postgresql-10-1",
        title: "Column Constraints",
        whyItMatters: "Constraints ensure data validity.",
        content: `Column constraints validate data at insert/update time.`,

        codeExamples: [
          {
            id: "postgresql-10-ex1",
            title: "Column Constraints",
            description: "Data validation",
            code: { postgresql: "-- NOT NULL - required value\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(255) NOT NULL\n);\n\n-- UNIQUE - no duplicates\nCREATE TABLE departments (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(50) UNIQUE,\n    code VARCHAR(10) UNIQUE\n);\n\n-- DEFAULT - automatic value\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    status VARCHAR(20) DEFAULT 'pending',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    quantity INTEGER DEFAULT 1\n);\n\n-- CHECK - custom validation\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10, 2) CHECK (price > 0),\n    discount DECIMAL(5,2) CHECK (discount >= 0 AND discount <= 100)\n);\n\n-- Multiple constraints\nCREATE TABLE accounts (\n    id SERIAL PRIMARY KEY,\n    username VARCHAR(50) NOT NULL UNIQUE,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    age INTEGER CHECK (age >= 18),\n    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended'))\n);" },
            explanation: "Constraints prevent invalid data from entering the database."
          }
        ]
      },
      {
        id: "postgresql-10-2",
        title: "Table-Level Constraints",
        whyItMatters: "More complex constraints across columns.",
        content: `Table-level constraints can reference multiple columns.`,

        codeExamples: [
          {
            id: "postgresql-10-ex2",
            title: "Table Constraints",
            description: "Multi-column constraints",
            code: { postgresql: "-- PRIMARY KEY - table's main identifier\nCREATE TABLE orders (\n    order_id INTEGER,\n    product_id INTEGER,\n    quantity INTEGER,\n    PRIMARY KEY (order_id, product_id)\n);\n\n-- FOREIGN KEY - referential integrity\nCREATE TABLE order_items (\n    id SERIAL PRIMARY KEY,\n    order_id INTEGER REFERENCES orders(id),\n    product_id INTEGER REFERENCES products(id),\n    quantity INTEGER CHECK (quantity > 0)\n);\n\n-- UNIQUE constraint across columns\nCREATE TABLE user_subscriptions (\n    user_id INTEGER NOT NULL,\n    plan_id INTEGER NOT NULL,\n    UNIQUE (user_id, plan_id)\n);\n\n-- CHECK across columns\nCREATE TABLE bookings (\n    check_in DATE NOT NULL,\n    check_out DATE NOT NULL,\n    CHECK (check_out > check_in),\n    total_nights INTEGER GENERATED ALWAYS AS (check_out - check_in) STORED\n);\n\n-- Add constraint to existing table\nALTER TABLE products \nADD CONSTRAINT positive_price CHECK (price > 0);\n\n-- Drop constraint\nALTER TABLE products DROP CONSTRAINT positive_price;" },
            explanation: "FOREIGN KEY maintains referential integrity between tables."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does NOT NULL ensure?", options: ["Unique values", "Value is present", "Default value", "Positive value"], correctAnswer: 1, explanation: "NOT NULL ensures column cannot be empty.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does FOREIGN KEY do?", options: ["Creates index", "Links tables", "Validates format", "Default value"], correctAnswer: 1, explanation: "FOREIGN KEY maintains referential integrity.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How to add constraint to existing table?", options: ["INSERT INTO", "UPDATE", "ALTER TABLE", "MODIFY"], correctAnswer: 2, explanation: "ALTER TABLE ADD CONSTRAINT modifies existing tables.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "NOT NULL", value: "Required value" },
      { label: "UNIQUE", value: "No duplicates" },
      { label: "CHECK", value: "Custom validation" },
      { label: "FOREIGN KEY", value: "Reference another table" }
    ]
  },
  {
    id: "postgresql-11",
    number: 11,
    title: "Primary Keys and Foreign Keys",
    subtitle: "Relationships",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["postgresql-10"],
    learningObjectives: ["Understand primary keys", "Understand foreign keys", "Create relationships"],
    sections: [
      {
        id: "postgresql-11-1",
        title: "Primary Keys",
        whyItMatters: "Primary keys uniquely identify each row.",
        content: `Every table should have a primary key for data integrity.`,

        codeExamples: [
          {
            id: "postgresql-11-ex1",
            title: "Primary Keys",
            description: "Unique row identifiers",
            code: { postgresql: "-- Auto-increment primary key (recommended)\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100)\n);\n\n-- Equivalent to:\nCREATE TABLE users (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(100)\n);\n\n-- Composite primary key\nCREATE TABLE order_items (\n    order_id INTEGER,\n    product_id INTEGER,\n    quantity INTEGER,\n    PRIMARY KEY (order_id, product_id)\n);\n\n-- UUID primary key\nCREATE TABLE documents (\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    title VARCHAR(255)\n);\n\n-- Natural key (not recommended for most cases)\nCREATE TABLE countries (\n    code CHAR(2) PRIMARY KEY,\n    name VARCHAR(100)\n);\n\n-- Find primary key\nSELECT \n    kcu.column_name\nFROM information_schema.table_constraints tc\nJOIN information_schema.key_column_usage kcu\n    ON tc.constraint_name = kcu.constraint_name\nWHERE tc.table_name = 'users' \n    AND tc.constraint_type = 'PRIMARY KEY';" },
            explanation: "SERIAL/GENERATED ALWAYS AS IDENTITY is best for most cases."
          }
        ]
      },
      {
        id: "postgresql-11-2",
        title: "Foreign Keys",
        whyItMatters: "Foreign keys create relationships between tables.",
        content: `Foreign keys enforce referential integrity.`,

        codeExamples: [
          {
            id: "postgresql-11-ex2",
            title: "Foreign Keys",
            description: "Table relationships",
            code: { postgresql: "-- Create tables with foreign key\nCREATE TABLE departments (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100)\n);\n\nCREATE TABLE employees (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    department_id INTEGER REFERENCES departments(id),\n    manager_id INTEGER REFERENCES employees(id)  -- Self-referential\n);\n\n-- Foreign key with ON DELETE action\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    customer_id INTEGER REFERENCES customers(id)\n        ON DELETE CASCADE,  -- Delete orders when customer deleted\n    status VARCHAR(20) DEFAULT 'pending'\n);\n\nCREATE TABLE order_items (\n    id SERIAL PRIMARY KEY,\n    order_id INTEGER REFERENCES orders(id)\n        ON DELETE CASCADE,\n    product_id INTEGER REFERENCES products(id)\n        ON DELETE SET NULL,  -- Set to NULL if product deleted\n    quantity INTEGER\n);\n\n-- Disable foreign key constraint (for bulk load)\nSET foreign_key_checks = OFF;\n\n-- Re-enable\nSET foreign_key_checks = ON;" },
            explanation: "ON DELETE controls what happens when referenced row is deleted."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does ON DELETE CASCADE do?", options: ["Prevents delete", "Deletes related rows", "Sets to null", "Does nothing"], correctAnswer: 1, explanation: "CASCADE deletes child rows when parent is deleted.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is a composite key?", options: ["Multiple primary keys", "Primary key with multiple columns", "Foreign key", "Unique index"], correctAnswer: 1, explanation: "Composite key uses multiple columns as primary key.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does SERIAL create?", options: ["UUID", "Auto-increment integer", "Timestamp", "Random string"], correctAnswer: 1, explanation: "SERIAL creates auto-incrementing integer sequence.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "PRIMARY KEY", value: "Unique identifier" },
      { label: "REFERENCES", value: "Foreign key" },
      { label: "ON DELETE CASCADE", value: "Delete related" },
      { label: "ON DELETE SET NULL", value: "Null on delete" }
    ]
  },
  {
    id: "postgresql-12",
    number: 12,
    title: "Relationships and Normalization",
    subtitle: "Database Design",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["postgresql-11"],
    learningObjectives: ["Understand normal forms", "Design normalized databases", "Balance normalization"],
    sections: [
      {
        id: "postgresql-12-1",
        title: "Normalization Forms",
        whyItMatters: "Proper normalization prevents data redundancy.",
        content: `Normalization organizes data to reduce redundancy and improve integrity.`,

        codeExamples: [
          {
            id: "postgresql-12-ex1",
            title: "Normalization Examples",
            description: "Normal forms",
            code: { postgresql: "-- 1NF: Atomic values, no repeating groups\n-- Bad: Multiple phone numbers in one field\nCREATE TABLE contacts_bad (\n    id INTEGER,\n    name VARCHAR(100),\n    phones VARCHAR(500)  -- '555-1234, 555-5678'\n);\n\n-- Good: Separate rows\nCREATE TABLE contacts (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100)\n);\n\nCREATE TABLE phone_numbers (\n    contact_id INTEGER REFERENCES contacts(id),\n    phone VARCHAR(20),\n    PRIMARY KEY (contact_id, phone)\n);\n\n-- 2NF: No partial dependencies\n-- Table with composite primary key should not have columns \n-- dependent on only part of the key\n\n-- 3NF: No transitive dependencies\n-- Non-key columns should depend only on primary key\n-- Bad: customer_name in orders table (depends on customer_id)\n\nCREATE TABLE orders_good (\n    order_id SERIAL PRIMARY KEY,\n    customer_id INTEGER REFERENCES customers(id),  -- Foreign key\n    order_date TIMESTAMP\n);\n\n-- BCNF: Every determinant must be a candidate key" },
            explanation: "Normalization typically goes to 3NF for most applications."
          }
        ]
      },
      {
        id: "postgresql-12-2",
        title: "Practical Design",
        whyItMatters: "Balance normalization with performance needs.",
        content: `Real-world design often denormalizes for performance.`,

        codeExamples: [
          {
            id: "postgresql-12-ex2",
            title: "Denormalization",
            description: "When to denormalize",
            code: { postgresql: "-- Denormalized for read performance\n-- Store computed values\nCREATE TABLE order_summaries (\n    order_id SERIAL PRIMARY KEY,\n    customer_name VARCHAR(100),      -- Denormalized from customers\n    customer_city VARCHAR(100),       -- Denormalized from customers\n    total_amount DECIMAL(10,2),       -- Computed from items\n    item_count INTEGER,               -- Computed count\n    created_at TIMESTAMP\n);\n\n-- Trade-offs:\n-- ✓ Faster reads (no joins)\n-- ✓ Simpler queries\n-- ✗ Data duplication\n-- ✗ Update anomalies\n-- ✗ Extra storage\n\n-- When to denormalize:\n-- - Reporting/analytics tables\n-- - Frequently accessed summaries\n-- - Read-heavy workloads\n-- - Cached values\n\n-- Normalization + Indexes often enough for OLTP\n-- Consider materialized views for reporting" },
            explanation: "Denormalization trades space for performance in specific scenarios."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is 1NF?", options: ["First Normal Form - no duplicates", "First Normal Form - atomic values", "First Normal Form - no nulls", "First Normal Form - indexed"], correctAnswer: 1, explanation: "1NF requires atomic (indivisible) values in each column.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is denormalization?", options: ["Adding indexes", "Simplifying structure", "Intentional redundancy", "Removing constraints"], correctAnswer: 2, explanation: "Denormalization adds redundancy for performance.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What's the trade-off with denormalization?", options: ["Slower writes", "Faster reads but data duplication", "More tables", "Less storage"], correctAnswer: 1, explanation: "Denormalization improves reads but causes data duplication and update issues.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "1NF", value: "Atomic values" },
      { label: "2NF", value: "No partial dependencies" },
      { label: "3NF", value: "No transitive dependencies" },
      { label: "Denormalization", value: "Trade space for speed" }
    ]
  }
];

export const postgresqlTrack: Track = {
  id: "postgresql",
  title: "PostgreSQL",
  titleBn: "পোস্টগ্রিএসকিউএল",
  tagline: "The world's most advanced open-source relational database",
  taglineBn: "বিশ্বের সবচেয়ে উন্নত ওপেন-সোর্স রিলেশনাল ডেটাবেস",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "postgresql",
  totalChapters: postgresqlChapters.length,
  estimatedHours: Math.round(postgresqlChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: postgresqlChapters,
  brandColor: "#336791",
  glowColor: "rgba(51, 103, 145, 0.4)",
};