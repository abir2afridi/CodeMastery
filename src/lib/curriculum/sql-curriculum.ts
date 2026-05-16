import type { Track, Chapter } from "./types";

const sqlContentBn: Record<string, string> = {
  "sql-1-1": `SQL মানে Structured Query Language। এটি ডেটাবেস পরিচালনার জন্য ব্যবহৃত প্রধান ভাষা। relational database যেমন MySQL, PostgreSQL, SQLite এ SQL ব্যবহার করা হয়।`,

  "sql-2-1": `Database হলো সংগঠিত ডেটার সংগ্রহ। Table হলো rows এবং columns এর ম্যাট্রিক্স। Row প্রতিটি record, column প্রতিটি attribute।`,

  "sql-4-1": `SQL এর মূল নিয়ম: প্রতিটি statement semicolon (;) দিয়ে শেষ হয়। SQL keywords বড় হাতের অক্ষরে লেখা হয়। Tables এবং columns এর নাম case-insensitive।`,
};

const sqlChapters: Chapter[] = [
  {
    id: "sql-1",
    number: 1,
    partLabel: "Part 1: Database Fundamentals",
    title: "What Is SQL and Why Databases Matter",
    subtitle: "Introduction to SQL and databases",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what SQL is", "Know why databases are important"],
    sections: [
      {
        id: "sql-1-1",
        title: "Introduction to SQL",
        whyItMatters: "SQL is the backbone of data-driven applications.",
        content: `SQL (Structured Query Language) is the standard language for working with relational databases. Every modern application - from Facebook to banking systems - uses SQL to store, retrieve, and manipulate data.

Why SQL matters:
- Powers 90% of web applications
- Used by major companies (Google, Amazon, Meta)
- High-demand skill in tech industry
- Foundation for data science

What you can do with SQL:
- Create and manage databases
- Insert, update, and delete data
- Query and analyze data
- Build complex reports
- Manage database security

SQL vs NoSQL: SQL uses fixed schemas and tables, while NoSQL uses flexible documents. SQL is preferred for structured data and complex queries.`,
        contentBn: sqlContentBn["sql-1-1"],
        codeExamples: [
          {
            id: "sql-intro-1",
            title: "SQL in Real World",
            description: "Common SQL use cases",
            code: {
              javascript: `-- Facebook stores user profiles
SELECT name, email FROM users WHERE verified = true;

-- Amazon manages product inventory
SELECT product_name, price, stock FROM products WHERE stock > 0;

-- Banks process transactions
SELECT account_id, SUM(amount) FROM transactions GROUP BY account_id;`,
            },
            explanation: "Every major application uses SQL for data management"
          }
        ],
        callouts: [
          { type: "tip", title: "Career Boost", content: "SQL is one of the most requested skills in data jobs!" }
        ],
        microExercise: {
          instruction: "Write your first SQL query",
          starterCode: { javascript: "-- Write a query to select all users\nSELECT " },
          hint: "Use SELECT * to get all columns",
          solution: { javascript: "SELECT * FROM users;" }
        }
      }
    ]
  },
  {
    id: "sql-2",
    number: 2,
    partLabel: "Part 1: Database Fundamentals",
    title: "Understanding Databases, Tables, Rows, and Columns",
    subtitle: "Core database concepts",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["sql-1"],
    learningObjectives: ["Understand database structure", "Know table components"],
    sections: [
      {
        id: "sql-2-1",
        title: "Database Architecture",
        whyItMatters: "Understanding structure is essential for writing queries.",
        content: `A database is a structured collection of data. Think of it like a digital filing cabinet.

KEY CONCEPTS:

DATABASE: The entire container that holds related data
- Can contain multiple tables
- Has its own access controls
- Example: shop_database, school_database

TABLE: A structured list of data in rows and columns
- Like a spreadsheet
- Has a name unique within the database
- Example: users, products, orders

ROW (Record): A single entry in a table
- Represents one item/person
- Example: One user, one product

COLUMN (Field): An attribute for all rows
- Has a name and data type
- Example: name, email, price

PRIMARY KEY: Unique identifier for each row
- Cannot be null
- Must be unique
- Usually auto-incremented`,
        contentBn: sqlContentBn["sql-2-1"],
        codeExamples: [
          {
            id: "sql-table-1",
            title: "Visualizing a Table",
            description: "users table structure",
            code: {
              javascript: `/* users table */
-- id (PRIMARY KEY) | name          | email                    | age
-- 1                    | Alice       | alice@email.com         | 25
-- 2                    | Bob         | bob@email.com           | 30
-- 3                    | Charlie     | charlie@email.com       | 28

-- This is how the data looks in a table format:
SELECT * FROM users;`,
            },
            explanation: "Each row represents one user, each column is an attribute"
          }
        ],
        microExercise: {
          instruction: "Identify table components",
          starterCode: { javascript: "-- In a products table with columns: id, name, price, category\n-- What is the PRIMARY KEY?" },
          solution: { javascript: "id is the PRIMARY KEY (unique identifier for each product)" }
        }
      }
    ]
  },
  {
    id: "sql-3",
    number: 3,
    partLabel: "Part 1: Database Fundamentals",
    title: "Installing and Setting Up SQLite, MySQL, PostgreSQL",
    subtitle: "Database installation guide",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["sql-2"],
    learningObjectives: ["Install a database system", "Create your first database"],
    sections: [
      {
        id: "sql-3-1",
        title: "Database Options",
        whyItMatters: "Choose the right database for your needs.",
        content: `Three most popular databases:

SQLITE:
- No server needed (file-based)
- Perfect for learning and small apps
- Single file contains entire database
- Great for mobile apps
- Installation: Already built into Python!

MYSQL:
- Most popular open-source database
- Used by Facebook, Twitter, YouTube
- Requires server installation
- Great for web applications
- Installation: Download from mysql.com or use XAMPP

POSTGRESQL:
- Most advanced open-source database
- Used by Apple, Instagram, Spotify
- Best for complex applications
- Strong JSON support
- Installation: Download from postgresql.org

For learning: Start with SQLite!`,
        codeExamples: [
          {
            id: "sql-install-1",
            title: "SQLite Quick Start",
            description: "Create database with Python",
            code: {
              javascript: `import sqlite3

# Create a database (file)
conn = sqlite3.connect('shop.db')

# Create a cursor
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE products (
        id INTEGER PRIMARY KEY,
        name TEXT,
        price REAL
    )
''')

conn.commit()
conn.close()
print("Database created!")`,
            },
            explanation: "SQLite creates a file - no server needed!"
          }
        ],
        microExercise: {
          instruction: "Create a simple database",
          starterCode: { javascript: "-- Using SQLite, create a database called 'mydb'" },
          hint: "Just open a file - SQLite creates it automatically",
          solution: { javascript: "sqlite3.connect('mydb.db')" }
        }
      }
    ]
  },
  {
    id: "sql-4",
    number: 4,
    partLabel: "Part 1: Database Fundamentals",
    title: "SQL Syntax Basics",
    subtitle: "Understanding SQL grammar",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["sql-3"],
    learningObjectives: ["Write proper SQL syntax", "Understand SQL keywords"],
    sections: [
      {
        id: "sql-4-1",
        title: "SQL Statement Structure",
        whyItMatters: "Correct syntax is required for queries to work.",
        content: `SQL STATEMENT RULES:

1. Case Sensitivity:
   - Keywords: UPPER CASE (SELECT, FROM, WHERE)
   - Table/Column names: lowercase or camelCase

2. Statement Termination:
   - Use semicolon (;) at the end
   - Some tools don't require it, but always include it

3. Whitespace:
   - Spaces and newlines are ignored
   - Use for readability

4. Quotation:
   - Strings need single quotes: 'Hello'
   - Double quotes for identifiers: "table name"

KEY CLAUSES:
- SELECT: Which columns to retrieve
- FROM: Which table to query
- WHERE: Filter conditions
- ORDER BY: Sort results
- LIMIT: Restrict number of rows`,
        contentBn: sqlContentBn["sql-4-1"],
        codeExamples: [
          {
            id: "sql-syntax-1",
            title: "Basic SQL Structure",
            description: "Valid SQL query patterns",
            code: {
              javascript: `-- Correct syntax
SELECT name, email FROM users WHERE age > 18 ORDER BY name;

-- Multi-line for readability
SELECT
    name,
    email,
    age
FROM
    users
WHERE
    age > 18
ORDER BY
    name
LIMIT 10;

-- Common mistakes
-- ❌ SELECT name FROM users WHERE age = '20'  (use number, not string)
-- ✅ SELECT name FROM users WHERE age = 20`,
            },
            explanation: "Always end statements with semicolon for clarity"
          }
        ],
        microExercise: {
          instruction: "Write a proper SQL query",
          starterCode: { javascript: "-- Select name and price from products table where price is greater than 100" },
          hint: "Use SELECT, FROM, WHERE in order",
          solution: { javascript: "SELECT name, price FROM products WHERE price > 100;" }
        }
      }
    ]
  },
  {
    id: "sql-5",
    number: 5,
    partLabel: "Part 1: Database Fundamentals",
    title: "Creating Databases",
    subtitle: "Database creation commands",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["sql-4"],
    learningObjectives: ["Create databases", "Switch between databases"],
    sections: [
      {
        id: "sql-5-1",
        title: "CREATE DATABASE",
        whyItMatters: "First step in any database project.",
        content: `Creating databases is simple:

CREATE DATABASE syntax:
CREATE DATABASE database_name;

Important rules:
- Name must be unique
- Can't use spaces (use underscores)
- Can't start with a number
- Some databases are case-sensitive

SHOW DATABASES - lists all databases
USE database_name - switches to a database
DROP DATABASE - deletes a database (careful!)`,
        codeExamples: [
          {
            id: "sql-create-1",
            title: "Database Creation",
            description: "Create and manage databases",
            code: {
              javascript: `-- Create a new database
CREATE DATABASE shop;

-- Switch to it
USE shop;

-- See all databases
SHOW DATABASES;

-- Delete a database (PERMANENT!)
DROP DATABASE test_db;`,
            },
            explanation: "Always be careful with DROP - there's no undo!"
          }
        ],
        microExercise: {
          instruction: "Create a school database",
          starterCode: { javascript: "-- Create a database for a school management system" },
          solution: { javascript: "CREATE DATABASE school;" }
        }
      }
    ]
  },
  {
    id: "sql-6",
    number: 6,
    partLabel: "Part 1: Database Fundamentals",
    title: "Creating Tables",
    subtitle: "Table definition and structure",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["sql-5"],
    learningObjectives: ["Create tables with proper structure", "Define columns and data types"],
    sections: [
      {
        id: "sql-6-1",
        title: "CREATE TABLE Syntax",
        whyItMatters: "Tables are the foundation of database design.",
        content: `CREATE TABLE structure:

CREATE TABLE table_name (
    column_name data_type constraints,
    column_name data_type constraints
);

COMMON DATA TYPES:
- INTEGER: Whole numbers
- REAL: Decimal numbers
- TEXT/VARCHAR: Text strings
- DATE: Dates
- BOOLEAN: True/False

COMMON CONSTRAINTS:
- PRIMARY KEY: Unique identifier
- NOT NULL: Required field
- UNIQUE: No duplicates
- DEFAULT: Default value
- AUTO_INCREMENT: Auto-number`,
        codeExamples: [
          {
            id: "sql-table-1",
            title: "Table Creation Examples",
            description: "Create various tables",
            code: {
              javascript: `-- Create users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER,
    created_at DATE DEFAULT CURRENT_DATE
);

-- Create products table
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0
);

-- Create orders table
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    total REAL,
    status TEXT DEFAULT 'pending'
);`,
            },
            explanation: "Always define PRIMARY KEY and NOT NULL for essential fields"
          }
        ],
        microExercise: {
          instruction: "Create an employees table",
          starterCode: { javascript: "-- Create table with: id, name, salary, department" },
          hint: "Use INTEGER for numbers, TEXT for strings",
          solution: { javascript: "CREATE TABLE employees (\n    id INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    salary REAL,\n    department TEXT\n);" }
        }
      }
    ]
  },
  {
    id: "sql-7",
    number: 7,
    partLabel: "Part 1: Database Fundamentals",
    title: "Data Types in SQL",
    subtitle: "Understanding SQL data types",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["sql-6"],
    learningObjectives: ["Choose correct data types", "Understand type limitations"],
    sections: [
      {
        id: "sql-7-1",
        title: "SQL Data Types Overview",
        whyItMatters: "Using correct types saves space and ensures data integrity.",
        content: `NUMERIC TYPES:
- TINYINT: -128 to 127 (1 byte)
- SMALLINT: -32,768 to 32,767 (2 bytes)
- INTEGER: -2B to 2B (4 bytes)
- BIGINT: Very large numbers (8 bytes)
- DECIMAL/NUMERIC: Exact precision (e.g., 10.99)
- REAL/FLOAT: Approximate decimals
- DOUBLE: High precision decimals

STRING TYPES:
- CHAR(n): Fixed length (1-255)
- VARCHAR(n): Variable length (1-65535)
- TEXT: Long text (unlimited)
- BLOB: Binary data (images, files)

DATE/TIME:
- DATE: YYYY-MM-DD
- TIME: HH:MM:SS
- DATETIME: Date + Time
- TIMESTAMP: Unix timestamp`,
        codeExamples: [
          {
            id: "sql-types-1",
            title: "Data Type Selection",
            description: "Choose appropriate types",
            code: {
              javascript: `-- User profile table - best data types
CREATE TABLE profiles (
    user_id INTEGER,           -- ID (numbers)
    username VARCHAR(50),     -- Names (short text)
    bio TEXT,                 -- Biography (long text)
    birth_date DATE,          -- Calendar date
    joined_at DATETIME,       -- Date and time
    profile_pic BLOB,         -- Image data
    is_active BOOLEAN,       -- True/False
    credits DECIMAL(10,2)    -- Money (exact)
);`,
            },
            explanation: "Choose smallest type that fits your data"
          }
        ],
        microExercise: {
          instruction: "Select correct data types",
          starterCode: { javascript: "-- What type for: phone number '01712345678'" },
          hint: "Phone numbers have letters sometimes, use VARCHAR",
          solution: { javascript: "VARCHAR(20)" }
        }
      }
    ]
  },
  {
    id: "sql-8",
    number: 8,
    partLabel: "Part 1: Database Fundamentals",
    title: "Inserting Data",
    subtitle: "Adding rows to tables",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["sql-7"],
    learningObjectives: ["Insert single and multiple rows", "Insert with specific columns"],
    sections: [
      {
        id: "sql-8-1",
        title: "INSERT Statement",
        whyItMatters: "Adding data is fundamental to databases.",
        content: `INSERT data into tables:

SINGLE ROW:
INSERT INTO table VALUES (value1, value2, ...);

SPECIFIC COLUMNS:
INSERT INTO table (col1, col2) VALUES (val1, val2);

MULTIPLE ROWS:
INSERT INTO table VALUES
(val1, val2),
(val3, val4),
(val5, val6);

Rules:
- Strings need single quotes
- Numbers don't need quotes
- Must match column order (or specify columns)
- NULL for empty values`,
        codeExamples: [
          {
            id: "sql-insert-1",
            title: "Various Insert Methods",
            description: "Insert data correctly",
            code: {
              javascript: `-- Insert full row
INSERT INTO users VALUES (1, 'Alice', 'alice@email.com', 25);

-- Insert specific columns
INSERT INTO users (name, email) VALUES ('Bob', 'bob@email.com');

-- Insert multiple rows at once
INSERT INTO products (name, price) VALUES
('Laptop', 999.99),
('Phone', 599.99),
('Tablet', 399.99);

-- Insert with all fields
INSERT INTO orders VALUES
(1001, 1, 149.99, 'completed'),
(1002, 2, 79.99, 'pending');`,
            },
            explanation: "Always specify columns when not inserting all fields"
          }
        ],
        microExercise: {
          instruction: "Insert a new product",
          starterCode: { javascript: "-- Add product: Keyboard, price 99.99" },
          solution: { javascript: "INSERT INTO products (name, price) VALUES ('Keyboard', 99.99);" }
        }
      }
    ]
  },
  {
    id: "sql-9",
    number: 9,
    partLabel: "Part 1: Database Fundamentals",
    title: "Selecting Data with SELECT",
    subtitle: "Querying data from tables",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["sql-8"],
    learningObjectives: ["Select all columns", "Select specific columns"],
    sections: [
      {
        id: "sql-9-1",
        title: "SELECT Basics",
        whyItMatters: "SELECT is the most common SQL operation.",
        content: `SELECT retrieves data:

SELECT ALL columns:
SELECT * FROM table;

SELECT specific columns:
SELECT column1, column2 FROM table;

SELECT with alias:
SELECT name AS 'User Name' FROM users;

SELECT with calculation:
SELECT price * 1.1 AS 'Price with Tax' FROM products;

DISTINCT - remove duplicates:
SELECT DISTINCT category FROM products;`,
        codeExamples: [
          {
            id: "sql-select-1",
            title: "SELECT Variations",
            description: "Different ways to select data",
            code: {
              javascript: `-- Select all users
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with alias
SELECT name AS 'Full Name', email AS 'Contact' FROM users;

-- Calculate values
SELECT product_name, price, price * 0.1 AS tax, price * 1.1 AS total FROM products;

-- Get unique categories
SELECT DISTINCT category FROM products;`,
            },
            explanation: "* means all columns - useful but can be slow on big tables"
          }
        ],
        microExercise: {
          instruction: "Select customer names",
          starterCode: { javascript: "-- Get all customer names from customers table" },
          solution: { javascript: "SELECT name FROM customers;" }
        }
      }
    ]
  },
  {
    id: "sql-10",
    number: 10,
    partLabel: "Part 1: Database Fundamentals",
    title: "Filtering Data with WHERE",
    subtitle: "Conditional data retrieval",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["sql-9"],
    learningObjectives: ["Filter rows with conditions", "Use comparison operators"],
    sections: [
      {
        id: "sql-10-1",
        title: "WHERE Clause",
        whyItMatters: "WHERE filters data to get exactly what you need.",
        content: `WHERE filters rows based on conditions:

COMPARISON OPERATORS:
= Equal
<> or != Not equal
> Greater than
< Less than
>= Greater or equal
<= Less or equal

LOGICAL:
AND - Both conditions true
OR - Either condition true
NOT - Negate condition`,
        codeExamples: [
          {
            id: "sql-where-1",
            title: "WHERE Examples",
            description: "Filter data with conditions",
            code: {
              javascript: `-- Find users over 18
SELECT * FROM users WHERE age > 18;

-- Products in electronics category
SELECT * FROM products WHERE category = 'electronics';

-- Price between 100 and 500
SELECT * FROM products WHERE price >= 100 AND price <= 500;

-- Users in USA or UK
SELECT * FROM users WHERE country = 'USA' OR country = 'UK';

-- Exclude inactive users
SELECT * FROM users WHERE status != 'inactive';`,
            },
            explanation: "Always use WHERE to limit results - don't load everything!"
          }
        ],
        microExercise: {
          instruction: "Find expensive products",
          starterCode: { javascript: "-- Select products priced over 1000" },
          solution: { javascript: "SELECT * FROM products WHERE price > 1000;" }
        }
      }
    ]
  },
  {
    id: "sql-11",
    number: 11,
    partLabel: "Part 2: Querying Data",
    title: "Sorting Results with ORDER BY",
    subtitle: "Learn to sort your query results",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-10"],
    learningObjectives: ["Use ORDER BY to sort results", "Sort ascending and descending", "Sort by multiple columns"],
    sections: [
      {
        id: "sql-11-1",
        title: "Understanding ORDER BY",
        whyItMatters: "Sorting helps users find what they need quickly.",
        content: `The ORDER BY clause sorts your query results. Without it, results come in arbitrary order.

By default, ORDER BY sorts in ascending order (A-Z, 0-9). Use DESC for descending order.

Basic syntax:
SELECT column FROM table ORDER BY column [ASC|DESC];`,
        codeExamples: [
          {
            id: "sql-11-ex1",
            title: "Basic Sorting",
            description: "Sort products by price",
            code: { javascript: "-- Sort by price low to high\nSELECT * FROM products ORDER BY price;\n\n-- Sort by price high to low\nSELECT * FROM products ORDER BY price DESC;\n\n-- Sort by name A-Z\nSELECT * FROM products ORDER BY name;" },
            explanation: "ASC is default, DESC reverses the order."
          }
        ]
      },
      {
        id: "sql-11-2",
        title: "Multiple Column Sort",
        whyItMatters: "Tie-breakers help organize data logically.",
        content: `Sort by multiple columns by listing them separated by commas. The first column is the primary sort, second is tie-breaker.`,
        codeExamples: [
          {
            id: "sql-11-ex2",
            title: "Multi-column Sort",
            description: "Sort by category then by price",
            code: { javascript: "-- Sort by category, then by price within each category\nSELECT * FROM products ORDER BY category, price DESC;" },
            explanation: "All 'Electronics' products come first (sorted by price), then 'Clothing', etc."
          }
        ]
      }
    ]
  },
  {
    id: "sql-12",
    number: 12,
    title: "Limiting Results with LIMIT and OFFSET",
    subtitle: "Control how many rows you get",
    difficulty: "Beginner" as const,
    estimatedMinutes: 18,
    xpReward: 35,
    prerequisites: ["sql-11"],
    learningObjectives: ["Limit number of returned rows", "Skip rows with OFFSET", "Implement pagination"],
    sections: [
      {
        id: "sql-12-1",
        title: "LIMIT Clause",
        whyItMatters: "Prevents loading too much data at once.",
        content: `LIMIT restricts how many rows are returned. Essential for performance and pagination.`,
        codeExamples: [
          {
            id: "sql-12-ex1",
            title: "Using LIMIT",
            description: "Get only top 5 expensive products",
            code: { javascript: "-- Get first 10 products\nSELECT * FROM products LIMIT 10;\n\n-- Top 5 most expensive\nSELECT * FROM products ORDER BY price DESC LIMIT 5;" },
            explanation: "LIMIT is often used with ORDER BY to get top/bottom N."
          }
        ]
      },
      {
        id: "sql-12-2",
        title: "OFFSET for Pagination",
        whyItMatters: "OFFSET enables paginated results.",
        content: `OFFSET skips a number of rows before returning results. For pagination: page 1 uses OFFSET 0, page 2 uses OFFSET 10, etc.`,
        codeExamples: [
          {
            id: "sql-12-ex2",
            title: "Pagination Example",
            description: "Implement page 2 with 10 items per page",
            code: { javascript: "-- Page 2 (skip first 10, get next 10)\nSELECT * FROM products ORDER BY id LIMIT 10 OFFSET 10;\n\n-- Equivalent shorthand\nSELECT * FROM products ORDER BY id LIMIT 10, 10;" },
            explanation: "OFFSET 10 skips rows 1-10, LIMIT 10 returns rows 11-20."
          }
        ]
      }
    ]
  },
  {
    id: "sql-13",
    number: 13,
    title: "Removing Duplicates with DISTINCT",
    subtitle: "Get unique values only",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-12"],
    learningObjectives: ["Use DISTINCT to remove duplicates", "Apply DISTINCT to multiple columns"],
    sections: [
      {
        id: "sql-13-1",
        title: "DISTINCT Basics",
        whyItMatters: "Find unique values without duplicates.",
        content: `DISTINCT returns only unique values, eliminating duplicates from results.`,
        codeExamples: [
          {
            id: "sql-13-ex1",
            title: "Using DISTINCT",
            description: "Find unique categories",
            code: { javascript: "-- All categories (may have duplicates)\nSELECT category FROM products;\n\n-- Unique categories only\nSELECT DISTINCT category FROM products;\n\n-- Unique country combinations\nSELECT DISTINCT country, city FROM users;" },
            explanation: "DISTINCT applies to the entire SELECT list, not just one column."
          }
        ]
      }
    ]
  },
  {
    id: "sql-14",
    number: 14,
    title: "Combining Conditions: AND, OR, NOT",
    subtitle: "Build complex filters",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-13"],
    learningObjectives: ["Combine multiple conditions with AND", "Use OR for alternative conditions", "Negate conditions with NOT"],
    sections: [
      {
        id: "sql-14-1",
        title: "AND Operator",
        whyItMatters: "AND requires ALL conditions to be true.",
        content: `AND combines multiple conditions - ALL must be true for a row to be included.`,
        codeExamples: [
          {
            id: "sql-14-ex1",
            title: "AND Examples",
            description: "Find products meeting multiple criteria",
            code: { javascript: "-- Expensive electronics\nSELECT * FROM products WHERE category = 'Electronics' AND price > 500;\n\n-- Active users from USA\nSELECT * FROM users WHERE status = 'active' AND country = 'USA';" },
            explanation: "Add more AND conditions as needed - all must match."
          }
        ]
      },
      {
        id: "sql-14-2",
        title: "OR Operator",
        whyItMatters: "OR matches if ANY condition is true.",
        content: `OR returns rows that match ANY of the conditions. Use parentheses to control evaluation order.`,
        codeExamples: [
          {
            id: "sql-14-ex2",
            title: "OR Examples",
            description: "Match either condition",
            code: { javascript: "-- Products from Electronics OR Clothing\nSELECT * FROM products WHERE category = 'Electronics' OR category = 'Clothing';\n\n-- High price OR low stock (use parentheses!)\nSELECT * FROM products WHERE (price > 500) OR (stock < 10);" },
            explanation: "Use parentheses when mixing AND and OR to control logic."
          }
        ]
      },
      {
        id: "sql-14-3",
        title: "NOT Operator",
        whyItMatters: "NOT inverts a condition.",
        content: `NOT negates a condition, returning rows that don't match.`,
        codeExamples: [
          {
            id: "sql-14-ex3",
            title: "NOT Examples",
            description: "Exclude unwanted results",
            code: { javascript: "-- Not in Electronics category\nSELECT * FROM products WHERE NOT category = 'Electronics';\n\n-- Alternative using <>\nSELECT * FROM products WHERE category <> 'Electronics';" },
            explanation: "<> and != are also used for NOT equal."
          }
        ]
      }
    ]
  },
  {
    id: "sql-15",
    number: 15,
    title: "Range Filtering with BETWEEN",
    subtitle: "Filter within a range",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-14"],
    learningObjectives: ["Use BETWEEN for inclusive ranges", "Combine with NOT for outside ranges"],
    sections: [
      {
        id: "sql-15-1",
        title: "BETWEEN Basics",
        whyItMatters: "BETWEEN is cleaner than >= AND <=",
        content: `BETWEEN selects values within a given range (inclusive). It's equivalent to >= AND <= but more readable.`,
        codeExamples: [
          {
            id: "sql-15-ex1",
            title: "BETWEEN Examples",
            description: "Filter by numeric ranges",
            code: { javascript: "-- Prices between 100 and 500\nSELECT * FROM products WHERE price BETWEEN 100 AND 500;\n\n-- Equivalent without BETWEEN\nSELECT * FROM products WHERE price >= 100 AND price <= 500;\n\n-- Dates work too\nSELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';" },
            explanation: "BETWEEN works with numbers, dates, and strings."
          }
        ]
      },
      {
        id: "sql-15-2",
        title: "NOT BETWEEN",
        whyItMatters: "Get values outside a range.",
        content: `NOT BETWEEN returns values outside the specified range.`,
        codeExamples: [
          {
            id: "sql-15-ex2",
            title: "NOT BETWEEN Example",
            description: "Find cheap and expensive products",
            code: { javascript: "-- Exclude mid-range prices\nSELECT * FROM products WHERE price NOT BETWEEN 100 AND 500;" },
            explanation: "Same as price < 100 OR price > 500"
          }
        ]
      }
    ]
  },
  {
    id: "sql-16",
    number: 16,
    title: "IN Operator: Multiple Values",
    subtitle: "Match against a list",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-15"],
    learningObjectives: ["Use IN for multiple value matching", "Combine with NOT for exclusion"],
    sections: [
      {
        id: "sql-16-1",
        title: "IN Basics",
        whyItMatters: "IN replaces multiple OR conditions.",
        content: `IN checks if a value matches any value in a list. Much cleaner than multiple OR statements.`,
        codeExamples: [
          {
            id: "sql-16-ex1",
            title: "IN Examples",
            description: "Match multiple specific values",
            code: { javascript: "-- Users from specific countries\nSELECT * FROM users WHERE country IN ('USA', 'UK', 'Canada');\n\n-- Products in certain categories\nSELECT * FROM products WHERE category IN ('Electronics', 'Books');\n\n-- Equivalent using OR\nSELECT * FROM users WHERE country = 'USA' OR country = 'UK' OR country = 'Canada';" },
            explanation: "IN is much more readable than multiple OR conditions."
          }
        ]
      },
      {
        id: "sql-16-2",
        title: "NOT IN",
        whyItMatters: "Exclude specific values.",
        content: `NOT IN excludes rows matching any value in the list.`,
        codeExamples: [
          {
            id: "sql-16-ex2",
            title: "NOT IN Example",
            description: "Exclude certain categories",
            code: { javascript: "-- Exclude Electronics and Clothing\nSELECT * FROM products WHERE category NOT IN ('Electronics', 'Clothing');" },
            explanation: "Useful for filtering out known unwanted values."
          }
        ]
      }
    ]
  },
  {
    id: "sql-17",
    number: 17,
    title: "Pattern Matching with LIKE",
    subtitle: "Search with wildcards",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-16"],
    learningObjectives: ["Use LIKE for pattern matching", "Understand wildcard characters % and _", "Search case-insensitively"],
    sections: [
      {
        id: "sql-17-1",
        title: "LIKE Basics",
        whyItMatters: "LIKE enables flexible text searching.",
        content: `LIKE searches for patterns in text. Two wildcards: % matches any characters, _ matches exactly one character.`,
        codeExamples: [
          {
            id: "sql-17-ex1",
            title: "LIKE Examples",
            description: "Various pattern searches",
            code: { javascript: "-- Names starting with 'J'\nSELECT * FROM users WHERE name LIKE 'J%';\n\n-- Names ending with 'son'\nSELECT * FROM users WHERE name LIKE '%son';\n\n-- Names containing 'a'\nSELECT * FROM users WHERE name LIKE '%a%';\n\n-- Second letter is 'a'\nSELECT * FROM users WHERE name LIKE '_a%';" },
            explanation: "% means any number of characters, _ means exactly one character."
          }
        ]
      },
      {
        id: "sql-17-2",
        title: "NOT LIKE",
        whyItMatters: "Find rows NOT matching a pattern.",
        content: `NOT LIKE excludes rows matching the pattern.`,
        codeExamples: [
          {
            id: "sql-17-ex2",
            title: "NOT LIKE Example",
            description: "Exclude patterns",
            code: { javascript: "-- Names not starting with 'A'\nSELECT * FROM users WHERE name NOT LIKE 'A%';" },
            explanation: "Use when you know what you don't want."
          }
        ]
      }
    ]
  },
  {
    id: "sql-18",
    number: 18,
    title: "Handling NULL Values",
    subtitle: "Find and filter NULLs",
    difficulty: "Beginner" as const,
    estimatedMinutes: 18,
    xpReward: 35,
    prerequisites: ["sql-17"],
    learningObjectives: ["Understand NULL meaning", "Use IS NULL and IS NOT NULL", "Handle missing data properly"],
    sections: [
      {
        id: "sql-18-1",
        title: "What is NULL?",
        whyItMatters: "NULL represents missing or unknown data.",
        content: `NULL is not zero or empty string - it means 'no value'. You cannot use = NULL to check for NULLs; must use IS NULL.`,
        codeExamples: [
          {
            id: "sql-18-ex1",
            title: "Checking for NULL",
            description: "Find rows with/without missing data",
            code: { javascript: "-- Find users without email (WRONG!)\n-- SELECT * FROM users WHERE email = NULL;  -- This won't work!\n\n-- Find users without email (CORRECT)\nSELECT * FROM users WHERE email IS NULL;\n\n-- Find users with email\nSELECT * FROM users WHERE email IS NOT NULL;" },
            explanation: "Always use IS NULL or IS NOT NULL - regular comparison operators don't work."
          }
        ]
      },
      {
        id: "sql-18-2",
        title: "NULL in Calculations",
        whyItMatters: "NULL propagates through calculations.",
        content: `Any arithmetic with NULL returns NULL. Use COALESCE to provide defaults.`,
        codeExamples: [
          {
            id: "sql-18-ex2",
            title: "Handling NULL in Math",
            description: "Use COALESCE for safe calculations",
            code: { javascript: "-- If discount is NULL, result is NULL\nSELECT price - discount FROM products;\n\n-- Use COALESCE to provide default\nSELECT price - COALESCE(discount, 0) FROM products;\n\n-- IFNULL also works in some databases\nSELECT price - IFNULL(discount, 0) FROM products;" },
            explanation: "COALESCE returns first non-NULL value from its arguments."
          }
        ]
      }
    ]
  },
  {
    id: "sql-19",
    number: 19,
    title: "Column Aliases with AS",
    subtitle: "Rename columns for clarity",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-18"],
    learningObjectives: ["Create column aliases", "Use aliases in calculations", "Make output more readable"],
    sections: [
      {
        id: "sql-19-1",
        title: "AS Keyword",
        whyItMatters: "Aliases make output clearer.",
        content: `AS renames columns in output. Useful for long column names, calculations, and making results readable.`,
        codeExamples: [
          {
            id: "sql-19-ex1",
            title: "Alias Examples",
            description: "Rename columns in output",
            code: { javascript: "-- Rename columns\nSELECT name AS ProductName, price AS UnitPrice FROM products;\n\n-- Use in calculations\nSELECT name, price * quantity AS TotalValue FROM orders;\n\n-- Aliases work with functions too\nSELECT COUNT(*) AS TotalUsers FROM users;" },
            explanation: "AS is optional - you can just write the alias, but AS makes it clearer."
          }
        ]
      }
    ]
  },
  {
    id: "sql-20",
    number: 20,
    title: "Aggregate Functions",
    subtitle: "Calculate summaries",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-19"],
    learningObjectives: ["Use COUNT to count rows", "Use SUM for totals", "Use AVG for averages", "Use MIN and MAX for boundaries"],
    sections: [
      {
        id: "sql-20-1",
        title: "COUNT Function",
        whyItMatters: "Counting is fundamental to data analysis.",
        content: `COUNT returns the number of rows. COUNT(*) counts all rows, COUNT(column) counts non-NULL values.`,
        codeExamples: [
          {
            id: "sql-20-ex1",
            title: "COUNT Examples",
            description: "Various counting approaches",
            code: { javascript: "-- Count all products\nSELECT COUNT(*) FROM products;\n\n-- Count products with price (non-NULL)\nSELECT COUNT(price) FROM products;\n\n-- Count distinct categories\nSELECT COUNT(DISTINCT category) FROM products;" },
            explanation: "COUNT(*) counts all rows regardless of NULL values."
          }
        ]
      },
      {
        id: "sql-20-2",
        title: "SUM and AVG",
        whyItMatters: "Calculate totals and averages.",
        content: `SUM adds all values, AVG calculates the mean. Both ignore NULL values.`,
        codeExamples: [
          {
            id: "sql-20-ex2",
            title: "SUM and AVG Examples",
            description: "Calculate totals and averages",
            code: { javascript: "-- Total revenue\nSELECT SUM(amount) AS total_revenue FROM orders;\n\n-- Average order value\nSELECT AVG(amount) AS average_order FROM orders;\n\n-- Round averages\nSELECT ROUND(AVG(price), 2) FROM products;" },
            explanation: "Both functions ignore NULL values in calculations."
          }
        ]
      },
      {
        id: "sql-20-3",
        title: "MIN and MAX",
        whyItMatters: "Find boundaries in data.",
        content: `MIN returns smallest value, MAX returns largest. Work with numbers, dates, and strings.`,
        codeExamples: [
          {
            id: "sql-20-ex3",
            title: "MIN and MAX Examples",
            description: "Find min and max values",
            code: { javascript: "-- Cheapest and most expensive product\nSELECT MIN(price) AS cheapest, MAX(price) AS most_expensive FROM products;\n\n-- Earliest and latest order\nSELECT MIN(order_date) AS first_order, MAX(order_date) AS latest_order FROM orders;" },
            explanation: "MIN and MAX are useful for finding outliers and boundaries."
          }
        ]
      }
    ]
  },
  {
    id: "sql-21",
    number: 21,
    title: "Grouping Data with GROUP BY",
    subtitle: "Aggregate by categories",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-20"],
    learningObjectives: ["Use GROUP BY to group rows", "Apply aggregates per group", "Group by multiple columns"],
    sections: [
      {
        id: "sql-21-1",
        title: "GROUP BY Basics",
        whyItMatters: "Group by enables category-level summaries.",
        content: `GROUP BY groups rows that have the same values into summary rows. Often used with aggregate functions.`,
        codeExamples: [
          {
            id: "sql-21-ex1",
            title: "GROUP BY Examples",
            description: "Group and aggregate by category",
            code: { javascript: "-- Count products per category\nSELECT category, COUNT(*) AS product_count FROM products GROUP BY category;\n\n-- Total sales per product\nSELECT product_id, SUM(amount) AS total_sales FROM orders GROUP BY product_id;\n\n-- Average price by category\nSELECT category, AVG(price) AS avg_price FROM products GROUP BY category;" },
            explanation: "GROUP BY collapses rows into one per group value."
          }
        ]
      },
      {
        id: "sql-21-2",
        title: "Multiple Column Grouping",
        whyItMatters: "Group by combinations of columns.",
        content: `Group by multiple columns to get breakdowns at multiple levels.`,
        codeExamples: [
          {
            id: "sql-21-ex2",
            title: "Multiple GROUP BY",
            description: "Group by category and status",
            code: { javascript: "-- Orders by category and status\nSELECT category, status, COUNT(*) AS count FROM orders GROUP BY category, status;\n\n-- Total by month\nSELECT strftime('%Y-%m', order_date) AS month, SUM(amount) FROM orders GROUP BY strftime('%Y-%m', order_date);" },
            explanation: "Each unique combination of group columns creates a group."
          }
        ]
      }
    ]
  },
  {
    id: "sql-22",
    number: 22,
    title: "Filtering Groups with HAVING",
    subtitle: "Filter after grouping",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-21"],
    learningObjectives: ["Use HAVING to filter groups", "Understand HAVING vs WHERE", "Combine with GROUP BY"],
    sections: [
      {
        id: "sql-22-1",
        title: "HAVING Basics",
        whyItMatters: "HAVING filters groups, WHERE filters rows.",
        content: `HAVING filters groups AFTER GROUP BY aggregates. Use WHERE for row-level filtering, HAVING for group-level.`,
        codeExamples: [
          {
            id: "sql-22-ex1",
            title: "HAVING Examples",
            description: "Filter groups with conditions",
            code: { javascript: "-- Categories with more than 5 products\nSELECT category, COUNT(*) AS cnt FROM products GROUP BY category HAVING COUNT(*) > 5;\n\n-- Products with total sales over 1000\nSELECT product_id, SUM(amount) AS total FROM orders GROUP BY product_id HAVING SUM(amount) > 1000;\n\n-- Can combine WHERE and HAVING\nSELECT category, AVG(price) AS avg_price FROM products WHERE price > 50 GROUP BY category HAVING AVG(price) > 100;" },
            explanation: "WHERE runs before GROUP BY, HAVING runs after."
          }
        ]
      }
    ]
  },
  {
    id: "sql-23",
    number: 23,
    partLabel: "Part 3: Joins and Relationships",
    title: "Primary Keys",
    subtitle: "Unique identifiers for tables",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-22"],
    learningObjectives: ["Understand primary keys", "Create primary key columns", "Understand auto-increment"],
    sections: [
      {
        id: "sql-23-1",
        title: "What is a Primary Key?",
        whyItMatters: "Primary keys uniquely identify each row.",
        content: `A primary key is a column (or combination) that uniquely identifies every row in a table. No two rows can have the same primary key value, and it cannot be NULL.`,
        codeExamples: [
          {
            id: "sql-23-ex1",
            title: "Primary Key Examples",
            description: "Creating tables with primary keys",
            code: { javascript: "-- Table with integer primary key\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT\n);\n\n-- Auto-increment primary key (SQLite/MySQL)\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT,\n  price REAL\n);\n\n-- UUID primary key (PostgreSQL)\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  total REAL\n);" },
            explanation: "Primary keys can be integers, UUIDs, or strings depending on your needs."
          }
        ]
      },
      {
        id: "sql-23-2",
        title: "Composite Keys",
        whyItMatters: "Use multiple columns as a unique identifier.",
        content: `A composite key uses multiple columns together as the primary key. Used when no single column uniquely identifies rows.`,
        codeExamples: [
          {
            id: "sql-23-ex2",
            title: "Composite Key Example",
            description: "Order items need composite key",
            code: { javascript: "-- Order + product together identify line item\nCREATE TABLE order_items (\n  order_id INTEGER,\n  product_id INTEGER,\n  quantity INTEGER,\n  PRIMARY KEY (order_id, product_id)\n);" },
            explanation: "The combination of order_id and product_id must be unique."
          }
        ]
      }
    ]
  },
  {
    id: "sql-24",
    number: 24,
    title: "Foreign Keys",
    subtitle: "Link tables together",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["sql-23"],
    learningObjectives: ["Understand foreign keys", "Create table relationships", "Enforce referential integrity"],
    sections: [
      {
        id: "sql-24-1",
        title: "Foreign Key Basics",
        whyItMatters: "Foreign keys create relationships between tables.",
        content: `A foreign key is a column that references the primary key of another table. It creates a link between two tables and enforces referential integrity.`,
        codeExamples: [
          {
            id: "sql-24-ex1",
            title: "Foreign Key Examples",
            description: "Creating relationships",
            code: { javascript: "-- Orders linked to users\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id),\n  total REAL,\n  created_at TEXT\n);\n\n-- With explicit constraint\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER,\n  product_id INTEGER,\n  quantity INTEGER,\n  FOREIGN KEY (order_id) REFERENCES orders(id),\n  FOREIGN KEY (product_id) REFERENCES products(id)\n);" },
            explanation: "Foreign keys prevent orphaned records and maintain data consistency."
          }
        ]
      },
      {
        id: "sql-24-2",
        title: "Referential Actions",
        whyItMatter: "Control what happens on delete/update.",
        content: `ON DELETE and ON UPDATE specify what happens when referenced row is modified. Common options: CASCADE, SET NULL, RESTRICT.`,
        codeExamples: [
          {
            id: "sql-24-ex2",
            title: "Referential Actions Example",
            description: "Cascade delete behavior",
            code: { javascript: "-- Delete orders when user is deleted\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,\n  total REAL\n);\n\n-- Set to NULL if parent deleted\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,\n  total REAL\n);" },
            explanation: "CASCADE automatically deletes child rows; SET NULL sets foreign key to NULL."
          }
        ]
      }
    ]
  },
  {
    id: "sql-25",
    number: 25,
    title: "One-to-One Relationships",
    subtitle: "Perfect pair between tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-24"],
    learningObjectives: ["Understand one-to-one pattern", "Implement using shared primary key", "Know when to use this pattern"],
    sections: [
      {
        id: "sql-25-1",
        title: "One-to-One Pattern",
        whyItMatters: "Use when data should be separated but related.",
        content: `One-to-one relationships link each row in one table to exactly one row in another. Use when you want to split a large table or separate sensitive data.`,
        codeExamples: [
          {
            id: "sql-25-ex1",
            title: "One-to-One Example",
            description: "User profile data",
            code: { javascript: "-- Users table has basic info\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username TEXT,\n  email TEXT\n);\n\n-- Profile has additional info (one-to-one via shared ID)\nCREATE TABLE profiles (\n  user_id INTEGER PRIMARY KEY REFERENCES users(id),\n  bio TEXT,\n  avatar_url TEXT,\n  birth_date TEXT\n);" },
            explanation: "Shared primary key (user_id) ensures one-to-one relationship."
          }
        ]
      }
    ]
  },
  {
    id: "sql-26",
    number: 26,
    title: "One-to-Many Relationships",
    subtitle: "Parent-child table structure",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-25"],
    learningObjectives: ["Understand one-to-many pattern", "Implement using foreign key", "Common real-world examples"],
    sections: [
      {
        id: "sql-26-1",
        title: "One-to-Many Pattern",
        whyItMatters: "Most common relationship type in databases.",
        content: `One-to-many means one row in table A can relate to many rows in table B, but each row in B relates to only one in A.`,
        codeExamples: [
          {
            id: "sql-26-ex1",
            title: "One-to-Many Examples",
            description: "Categories and products",
            code: { javascript: "-- One category has many products\nCREATE TABLE categories (\n  id INTEGER PRIMARY KEY,\n  name TEXT\n);\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  price REAL,\n  category_id INTEGER REFERENCES categories(id)\n);\n\n-- Each product belongs to ONE category\n-- Each category can have MANY products" },
            explanation: "Foreign key in 'many' side (products) points to 'one' side (categories)."
          }
        ]
      }
    ]
  },
  {
    id: "sql-27",
    number: 27,
    title: "Many-to-Many Relationships",
    subtitle: "Connect entities both ways",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-26"],
    learningObjectives: ["Understand many-to-many pattern", "Implement using junction table", "Real-world examples"],
    sections: [
      {
        id: "sql-27-1",
        title: "Junction Tables",
        whyItMatters: "Many-to-many needs an intermediary table.",
        content: `A many-to-many relationship requires a junction (pivot) table that stores the relationships between two tables.`,
        codeExamples: [
          {
            id: "sql-27-ex1",
            title: "Many-to-Many Example",
            description: "Students and courses",
            code: { javascript: "-- Students table\nCREATE TABLE students (\n  id INTEGER PRIMARY KEY,\n  name TEXT\n);\n\n-- Courses table\nCREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  title TEXT\n);\n\n-- Junction table (enrollments)\nCREATE TABLE enrollments (\n  student_id INTEGER REFERENCES students(id),\n  course_id INTEGER REFERENCES courses(id),\n  enrolled_at TEXT,\n  PRIMARY KEY (student_id, course_id)\n);" },
            explanation: "Each enrollment links one student to one course. Students can enroll in many courses; courses can have many students."
          }
        ]
      }
    ]
  },
  {
    id: "sql-28",
    number: 28,
    title: "INNER JOIN",
    subtitle: "Match rows in both tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-27"],
    learningObjectives: ["Use INNER JOIN syntax", "Match on specific columns", "Only get matching rows"],
    sections: [
      {
        id: "sql-28-1",
        title: "INNER JOIN Basics",
        whyItMatters: "INNER JOIN is the most common join type.",
        content: `INNER JOIN returns only rows that have matching values in both tables. If there's no match, the row is excluded.`,
        codeExamples: [
          {
            id: "sql-28-ex1",
            title: "INNER JOIN Examples",
            description: "Join orders with users",
            code: { javascript: "-- Get orders with user names\nSELECT orders.id, users.name, orders.total\nFROM orders\nINNER JOIN users ON orders.user_id = users.id;\n\n-- Shorthand syntax\nSELECT o.id, u.name, o.total\nFROM orders o\nJOIN users u ON o.user_id = u.id;\n\n-- Join multiple tables\nSELECT o.id, u.name, p.name AS product, oi.quantity\nFROM orders o\nJOIN users u ON o.user_id = u.id\nJOIN order_items oi ON o.id = oi.order_id\nJOIN products p ON oi.product_id = p.id;" },
            explanation: "ON specifies how tables are related. Only matching rows appear in results."
          }
        ]
      },
      {
        id: "sql-28-2",
        title: "INNER JOIN with WHERE",
        whyItMatters: "Filter joined results.",
        content: `Add WHERE clause after JOIN to filter the joined results.`,
        codeExamples: [
          {
            id: "sql-28-ex2",
            title: "INNER JOIN with Filter",
            description: "Filter joined data",
            code: { javascript: "-- Only expensive orders\nSELECT u.name, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE o.total > 100;" },
            explanation: "WHERE filters after the join is complete."
          }
        ]
      }
    ]
  },
  {
    id: "sql-29",
    number: 29,
    title: "LEFT JOIN",
    subtitle: "Keep all rows from left table",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-28"],
    learningObjectives: ["Use LEFT JOIN syntax", "Understand NULL for non-matches", "Find rows without matches"],
    sections: [
      {
        id: "sql-29-1",
        title: "LEFT JOIN Basics",
        whyItMatters: "LEFT JOIN keeps all left table rows.",
        content: `LEFT JOIN returns all rows from the left table and matching rows from right table. If no match, right side columns are NULL.`,
        codeExamples: [
          {
            id: "sql-29-ex1",
            title: "LEFT JOIN Examples",
            description: "Find users with/without orders",
            code: { javascript: "-- All users, with their orders if any\nSELECT u.name, o.id AS order_id\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n\n-- Users who never ordered (NULL check)\nSELECT u.name\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE o.id IS NULL;" },
            explanation: "LEFT table = table before JOIN. RIGHT table = table after JOIN."
          }
        ]
      }
    ]
  },
  {
    id: "sql-30",
    number: 30,
    title: "RIGHT JOIN",
    subtitle: "Keep all rows from right table",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 15,
    xpReward: 35,
    prerequisites: ["sql-29"],
    learningObjectives: ["Use RIGHT JOIN syntax", "Understand when to use it", "Consider LEFT JOIN alternatives"],
    sections: [
      {
        id: "sql-30-1",
        title: "RIGHT JOIN Basics",
        whyItMatters: "RIGHT JOIN keeps all right table rows.",
        content: `RIGHT JOIN returns all rows from the right table and matching rows from left. SQLite doesn't support RIGHT JOIN - use LEFT JOIN with table order swapped instead.`,
        codeExamples: [
          {
            id: "sql-30-ex1",
            title: "RIGHT JOIN Examples",
            description: "All products even if never ordered",
            code: { javascript: "-- Note: SQLite doesn't support RIGHT JOIN\n-- Use LEFT JOIN with swapped tables instead:\n\nSELECT p.name, o.id AS order_id\nFROM orders o\nRIGHT JOIN products p ON o.product_id = p.id;\n\n-- Equivalent in SQLite:\nSELECT p.name, o.id AS order_id\nFROM products p\nLEFT JOIN orders o ON p.id = o.product_id;" },
            explanation: "Most databases support RIGHT JOIN but it's rarely used - swap tables instead."
          }
        ]
      }
    ]
  },
  {
    id: "sql-31",
    number: 31,
    title: "FULL OUTER JOIN",
    subtitle: "Keep all rows from both tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 18,
    xpReward: 40,
    prerequisites: ["sql-30"],
    learningObjectives: ["Use FULL OUTER JOIN", "Get all rows from both tables", "Handle no matches with NULL"],
    sections: [
      {
        id: "sql-31-1",
        title: "FULL OUTER JOIN Basics",
        whyItMatters: "Get everything from both tables.",
        content: `FULL OUTER JOIN returns all rows from both tables. Matching rows are combined; non-matching rows have NULLs on the other side.`,
        codeExamples: [
          {
            id: "sql-31-ex1",
            title: "FULL OUTER JOIN Example",
            description: "Combine two tables fully",
            code: { javascript: "-- All users and all orders, matched where possible\nSELECT u.name, o.total\nFROM users u\nFULL OUTER JOIN orders o ON u.id = o.user_id;\n\n-- In SQLite (no FULL JOIN support), use UNION ALL:\nSELECT u.name, o.total\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nUNION ALL\nSELECT u.name, o.total\nFROM users u\nRIGHT JOIN orders o ON u.id = o.user_id\nWHERE u.id IS NULL;" },
            explanation: "Simulate FULL JOIN with LEFT JOIN UNION ALL RIGHT JOIN with NULL filter."
          }
        ]
      }
    ]
  },
  {
    id: "sql-32",
    number: 32,
    title: "SELF JOIN",
    subtitle: "Join a table to itself",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-31"],
    learningObjectives: ["Use self-referential joins", "Create table aliases", "Find hierarchical relationships"],
    sections: [
      {
        id: "sql-32-1",
        title: "Self Join Basics",
        whyItMatters: "Find relationships within the same table.",
        content: `SELF JOIN joins a table to itself using aliases. Useful for hierarchical data like employees and managers, or finding related items.`,
        codeExamples: [
          {
            id: "sql-32-ex1",
            title: "Self Join Examples",
            description: "Employee-manager relationships",
            code: { javascript: "-- Employees with their managers\nSELECT e.name AS employee, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;\n\n-- Find coworkers (same manager)\nSELECT e1.name, e2.name AS coworker\nFROM employees e1\nJOIN employees e2 ON e1.manager_id = e2.manager_id\nWHERE e1.id < e2.id;" },
            explanation: "Use table aliases to distinguish the two references to same table."
          }
        ]
      }
    ]
  },
  {
    id: "sql-33",
    number: 33,
    title: "CROSS JOIN",
    subtitle: "Cartesian product of tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-32"],
    learningObjectives: ["Use CROSS JOIN", "Understand when to use", "Cartesian product behavior"],
    sections: [
      {
        id: "sql-33-1",
        title: "CROSS JOIN Basics",
        whyItMatters: "Every combination of rows.",
        content: `CROSS JOIN produces Cartesian product - every row from first table combined with every row from second. Use with caution as result grows quickly.`,
        codeExamples: [
          {
            id: "sql-33-ex1",
            title: "CROSS JOIN Examples",
            description: "Generate combinations",
            code: { javascript: "-- All color/size combinations\nSELECT c.name AS color, s.name AS size\nFROM colors c\nCROSS JOIN sizes s;\n\n-- Equivalent to comma join (implicit)\nSELECT c.name, s.name\nFROM colors c, sizes s;\n\n-- Adding WHERE for filtering still creates cartesian before filter" },
            explanation: "10 colors x 5 sizes = 50 rows. Useful for generating combinations."
          }
        ]
      }
    ]
  },
  {
    id: "sql-34",
    number: 34,
    title: "Advanced Multi-Table Queries",
    subtitle: "Complex join scenarios",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["sql-33"],
    learningObjectives: ["Build complex queries", "Optimize join performance", "Debug join issues"],
    sections: [
      {
        id: "sql-34-1",
        title: "Complex Join Patterns",
        whyItMatters: "Real queries often involve multiple joins.",
        content: `Combine multiple join types and filter conditions for complex data retrieval.`,
        codeExamples: [
          {
            id: "sql-34-ex1",
            title: "Complex Query Example",
            description: "Ecommerce order summary",
            code: { javascript: "-- Get order summaries with customer and product details\nSELECT \n  o.id AS order_id,\n  o.created_at,\n  u.name AS customer_name,\n  u.email,\n  p.name AS product_name,\n  oi.quantity,\n  oi.price AS unit_price,\n  (oi.quantity * oi.price) AS line_total\nFROM orders o\nJOIN users u ON o.user_id = u.id\nJOIN order_items oi ON o.id = oi.order_id\nJOIN products p ON oi.product_id = p.id\nWHERE o.created_at >= '2024-01-01'\nORDER BY o.created_at DESC;" },
            explanation: "Build step by step: start with base table, add joins, then filters, then ordering."
          }
        ]
      },
      {
        id: "sql-34-2",
        title: "Join Optimization",
        whyItMatters: "Joins can be slow on large tables.",
        content: `Use appropriate indexes, filter early, limit columns, and test with EXPLAIN.`,
        codeExamples: [
          {
            id: "sql-34-ex2",
            title: "Join Optimization Tips",
            description: "Make joins faster",
            code: { javascript: "-- Add indexes on foreign keys\nCREATE INDEX idx_orders_user ON orders(user_id);\nCREATE INDEX idx_order_items_order ON order_items(order_id);\nCREATE INDEX idx_order_items_product ON order_items(product_id);\n\n-- Only select needed columns\nSELECT o.id, u.name FROM orders o JOIN users u ON o.user_id = u.id;\n\n-- Filter before joining (if possible)\nSELECT ... FROM (SELECT * WHERE date >= '2024-01-01') o\nJOIN users u ON o.user_id = u.id;" },
            explanation: "Index foreign key columns and columns used in ON/WHERE clauses."
          }
        ]
      }
    ]
  },
  {
    id: "sql-35",
    number: 35,
    partLabel: "Part 4: Advanced SQL",
    title: "Subqueries",
    subtitle: "Queries within queries",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-34"],
    learningObjectives: ["Write subqueries in WHERE", "Use subqueries in SELECT", "Understand subquery types"],
    sections: [
      {
        id: "sql-35-1",
        title: "Subquery Basics",
        whyItMatters: "Subqueries let you use results of one query in another.",
        content: `A subquery is a query nested inside another query. Use it to break complex problems into simpler steps.`,
        codeExamples: [
          {
            id: "sql-35-ex1",
            title: "Subquery Examples",
            description: "Find products above average price",
            code: { javascript: "-- Products more expensive than average\nSELECT * FROM products\nWHERE price > (SELECT AVG(price) FROM products);\n\n-- Users who ordered something\nSELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders);\n\n-- Products never ordered\nSELECT * FROM products\nWHERE id NOT IN (SELECT product_id FROM order_items);" },
            explanation: "Subquery runs first, then outer query uses its results."
          }
        ]
      },
      {
        id: "sql-35-2",
        title: "Subquery in SELECT",
        whyItMatters: "Calculate values per row.",
        content: `Use scalar subqueries in SELECT to calculate values for each row.`,
        codeExamples: [
          {
            id: "sql-35-ex2",
            title: "Subquery in SELECT",
            description: "Show order with customer count",
            code: { javascript: "-- For each order, show how many total orders customer has\nSELECT o.id, o.total,\n  (SELECT COUNT(*) FROM orders WHERE user_id = o.user_id) AS customer_order_count\nFROM orders o;" },
            explanation: "Scalar subquery returns one value per row."
          }
        ]
      }
    ]
  },
  {
    id: "sql-36",
    number: 36,
    title: "Correlated Subqueries",
    subtitle: "Subqueries that reference outer query",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 55,
    prerequisites: ["sql-35"],
    learningObjectives: ["Write correlated subqueries", "Understand row-by-row evaluation", "Compare to JOIN alternatives"],
    sections: [
      {
        id: "sql-36-1",
        title: "Correlated Subquery Basics",
        whyItMatters: "Solve row-specific comparisons.",
        content: `Correlated subqueries reference columns from the outer query. They run once for each row of the outer query.`,
        codeExamples: [
          {
            id: "sql-36-ex1",
            title: "Correlated Subquery Examples",
            description: "Find max per category",
            code: { javascript: "-- Most expensive product in each category\nSELECT * FROM products p1\nWHERE price = (\n  SELECT MAX(price) FROM products p2\n  WHERE p2.category = p1.category\n);\n\n-- Products with above-average price in their category\nSELECT * FROM products p1\nWHERE price > (\n  SELECT AVG(price) FROM products p2\n  WHERE p2.category = p1.category\n);" },
            explanation: "Correlated subquery compares values within same category/group."
          }
        ]
      }
    ]
  },
  {
    id: "sql-37",
    number: 37,
    title: "EXISTS and NOT EXISTS",
    subtitle: "Check for existence",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-36"],
    learningObjectives: ["Use EXISTS for existence checks", "Optimize with EXISTS vs IN", "Find matching/non-matching rows"],
    sections: [
      {
        id: "sql-37-1",
        title: "EXISTS Basics",
        whyItMatters: "EXISTS is efficient for existence checks.",
        content: `EXISTS returns TRUE if subquery returns any rows. More efficient than IN for large datasets.`,
        codeExamples: [
          {
            id: "sql-37-ex1",
            title: "EXISTS Examples",
            description: "Find customers with orders",
            code: { javascript: "-- Customers who have placed orders\nSELECT * FROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);\n\n-- Customers who have NOT ordered\nSELECT * FROM users u\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);" },
            explanation: "EXISTS stops at first match, very efficient."
          }
        ]
      }
    ]
  },
  {
    id: "sql-38",
    number: 38,
    title: "UNION and UNION ALL",
    subtitle: "Combine result sets",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-37"],
    learningObjectives: ["Use UNION to combine results", "Understand UNION vs UNION ALL", "Deduplicate results"],
    sections: [
      {
        id: "sql-38-1",
        title: "UNION Basics",
        whyItMatters: "Combine results from different queries.",
        content: `UNION combines results of multiple SELECT statements. UNION removes duplicates; UNION ALL keeps all rows.`,
        codeExamples: [
          {
            id: "sql-38-ex1",
            title: "UNION Examples",
            description: "Combine different sources",
            code: { javascript: "-- All active users and admins (UNION removes duplicates)\nSELECT name, email FROM users WHERE status = 'active'\nUNION\nSELECT name, email FROM admins;\n\n-- Keep all duplicates\nSELECT name, email FROM users WHERE status = 'active'\nUNION ALL\nSELECT name, email FROM admins;\n\n-- Same columns required for UNION" },
            explanation: "UNION ALL is faster as it skips deduplication."
          }
        ]
      }
    ]
  },
  {
    id: "sql-39",
    number: 39,
    title: "CASE Statements",
    subtitle: "Conditional logic in SQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-38"],
    learningObjectives: ["Write CASE expressions", "Use in SELECT and WHERE", "Implement conditional logic"],
    sections: [
      {
        id: "sql-39-1",
        title: "CASE Basics",
        whyItMatters: "Add conditional logic to queries.",
        content: `CASE works like if-then-else in programming. Returns values based on conditions.`,
        codeExamples: [
          {
            id: "sql-39-ex1",
            title: "CASE Examples",
            description: "Categorize data",
            code: { javascript: "-- Price categories\nSELECT name, price,\n  CASE\n    WHEN price < 50 THEN 'Budget'\n    WHEN price < 200 THEN 'Mid-range'\n    ELSE 'Premium'\n  END AS price_category\nFROM products;\n\n-- Status labels\nSELECT order_id, status,\n  CASE status\n    WHEN 'pending' THEN 'Waiting'\n    WHEN 'completed' THEN 'Done'\n    ELSE 'Other'\n  END AS status_label\nFROM orders;" },
            explanation: "CASE can be used in SELECT, WHERE, ORDER BY."
          }
        ]
      },
      {
        id: "sql-39-2",
        title: "CASE in Aggregates",
        whyItMatters: "Conditional counting and summing.",
        content: `Use CASE inside aggregate functions for conditional counts/sums.`,
        codeExamples: [
          {
            id: "sql-39-ex2",
            title: "CASE with Aggregates",
            description: "Count and sum conditionally",
            code: { javascript: "-- Count orders by status\nSELECT\n  COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed,\n  COUNT(CASE WHEN status = 'pending' THEN 1 END) AS pending,\n  COUNT(CASE WHEN status = 'cancelled' THEN 1 END) AS cancelled\nFROM orders;\n\n-- Revenue by category\nSELECT\n  SUM(CASE WHEN category = 'Electronics' THEN amount ELSE 0 END) AS electronics,\n  SUM(CASE WHEN category = 'Clothing' THEN amount ELSE 0 END) AS clothing\nFROM orders;" },
            explanation: "CASE returns values to aggregate functions."
          }
        ]
      }
    ]
  },
  {
    id: "sql-40",
    number: 40,
    title: "Views",
    subtitle: "Virtual tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-39"],
    learningObjectives: ["Create and use views", "Understand virtual table concept", "Simplify complex queries"],
    sections: [
      {
        id: "sql-40-1",
        title: "View Basics",
        whyItMatters: "Views simplify frequently used queries.",
        content: `A view is a saved SELECT query that acts like a virtual table. Query it like a regular table.`,
        codeExamples: [
          {
            id: "sql-40-ex1",
            title: "View Examples",
            description: "Create and use views",
            code: { javascript: "-- Create a view for order details\nCREATE VIEW order_details AS\nSELECT \n  o.id AS order_id,\n  o.created_at,\n  u.name AS customer,\n  p.name AS product,\n  oi.quantity,\n  oi.price\nFROM orders o\nJOIN users u ON o.user_id = u.id\nJOIN order_items oi ON o.id = oi.order_id\nJOIN products p ON oi.product_id = p.id;\n\n-- Query the view\nSELECT * FROM order_details WHERE customer = 'Alice';\n\n-- Drop a view\nDROP VIEW order_details;" },
            explanation: "Views don't store data - they run the underlying query each time."
          }
        ]
      }
    ]
  },
  {
    id: "sql-41",
    number: 41,
    title: "Indexes",
    subtitle: "Speed up queries",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-40"],
    learningObjectives: ["Create indexes", "Understand index types", "Optimize query performance"],
    sections: [
      {
        id: "sql-41-1",
        title: "Index Basics",
        whyItMatters: "Indexes make queries much faster.",
        content: `Indexes are data structures that speed up data retrieval. Like a book's index - find what you need without scanning every page.`,
        codeExamples: [
          {
            id: "sql-41-ex1",
            title: "Index Examples",
            description: "Create indexes",
            code: { javascript: "-- Create single column index\nCREATE INDEX idx_products_price ON products(price);\n\n-- Create composite index\nCREATE INDEX idx_orders_user_date ON orders(user_id, created_at);\n\n-- Create unique index\nCREATE INDEX idx_users_email ON users(email);\n\n-- View indexes\nPRAGMA index_list(products);\nPRAGMA index_info(idx_products_price);\n\n-- Drop index\nDROP INDEX idx_products_price;" },
            explanation: "Indexes speed up WHERE, JOIN, ORDER BY. But slow down INSERT/UPDATE."
          }
        ]
      },
      {
        id: "sql-41-2",
        title: "When to Index",
        whyItMatters: "Strategic indexing improves performance.",
        content: `Index columns used in WHERE, JOIN, ORDER BY. Don't over-index - each index uses storage and slows down writes.`,
        codeExamples: [
          {
            id: "sql-41-ex2",
            title: "Index Strategy",
            description: "When to create indexes",
            code: { javascript: "-- Index foreign keys (frequently joined)\nCREATE INDEX idx_orders_user ON orders(user_id);\n\n-- Index columns used in WHERE (frequently filtered)\nCREATE INDEX idx_products_category ON products(category);\n\n-- Index columns used in ORDER BY\nCREATE INDEX idx_orders_date ON orders(created_at);\n\n-- Avoid: low-cardinality columns (few unique values)\n-- Avoid: frequently updated columns" },
            explanation: "Check query execution plans to see if indexes are used."
          }
        ]
      }
    ]
  },
  {
    id: "sql-42",
    number: 42,
    title: "Query Optimization",
    subtitle: "Make queries faster",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["sql-41"],
    learningObjectives: ["Analyze query plans", "Optimize slow queries", "Apply best practices"],
    sections: [
      {
        id: "sql-42-1",
        title: "EXPLAIN and Plans",
        whyItMatters: "See how database executes your query.",
        content: `EXPLAIN shows the query execution plan - how the database will retrieve results. Use it to find bottlenecks.`,
        codeExamples: [
          {
            id: "sql-42-ex1",
            title: "EXPLAIN Examples",
            description: "Analyze query plans",
            code: { javascript: "-- Analyze a query (SQLite)\nEXPLAIN QUERY PLAN\nSELECT * FROM orders o\nJOIN users u ON o.user_id = u.id\nWHERE u.country = 'USA';\n\n-- Shows: SCAN (full table), SEARCH (indexed), etc.\n-- Look for: SCAN on large tables, missing indexes" },
            explanation: "Look for sequential scans on big tables - add indexes."
          }
        ]
      },
      {
        id: "sql-42-2",
        title: "Optimization Tips",
        whyItMatters: "Write efficient queries.",
        content: `Select only needed columns, filter early, avoid functions on indexed columns, use appropriate data types.`,
        codeExamples: [
          {
            id: "sql-42-ex2",
            title: "Optimization Examples",
            description: "Write faster queries",
            code: { javascript: "-- BAD: SELECT * when you need few columns\nSELECT * FROM orders WHERE id = 1;\n\n-- GOOD: Select specific columns\nSELECT id, total, created_at FROM orders WHERE id = 1;\n\n-- BAD: Function on indexed column\nSELECT * FROM orders WHERE YEAR(created_at) = 2024;\n\n-- GOOD: Use range on column\nSELECT * FROM orders WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';" },
            explanation: "Small changes make big performance differences."
          }
        ]
      }
    ]
  },
  {
    id: "sql-43",
    number: 43,
    title: "Transactions",
    subtitle: "Group operations safely",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-42"],
    learningObjectives: ["Begin and commit transactions", "Use rollback for safety", "Understand transaction isolation"],
    sections: [
      {
        id: "sql-43-1",
        title: "Transaction Basics",
        whyItMatters: "Transactions ensure data consistency.",
        content: `A transaction groups multiple operations that either all succeed or all fail. Use when multiple changes must happen together.`,
        codeExamples: [
          {
            id: "sql-43-ex1",
            title: "Transaction Examples",
            description: "Safe multi-step operations",
            code: { javascript: "-- Start transaction\nBEGIN TRANSACTION;\n\n-- Multiple operations\nINSERT INTO accounts (id, balance) VALUES (1, 1000);\nINSERT INTO accounts (id, balance) VALUES (2, 500);\n\n-- Transfer money\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Commit (make permanent)\nCOMMIT;\n\n-- Or rollback (undo all)\n-- ROLLBACK;" },
            explanation: "If any operation fails, ROLLBACK keeps data consistent."
          }
        ]
      }
    ]
  },
  {
    id: "sql-44",
    number: 44,
    title: "ACID Principles",
    subtitle: "Database reliability",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-43"],
    learningObjectives: ["Understand ACID properties", "Know how databases ensure reliability", "Choose appropriate isolation levels"],
    sections: [
      {
        id: "sql-44-1",
        title: "ACID Properties",
        whyItMatters: "ACID ensures reliable database operations.",
        content: `ACID: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes).`,
        codeExamples: [
          {
            id: "sql-44-ex1",
            title: "ACID Examples",
            description: "Transaction isolation levels",
            code: { javascript: "-- Set isolation level (SQLite default is SERIALIZABLE)\nPRAGMA busy_timeout = 5000;\n\n-- Other databases:\n-- SET TRANSACTION ISOLATION LEVEL READ COMMITTED;\n-- SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\n-- Read uncommitted (dirty reads possible)\n-- Read committed (non-repeatable reads)\n-- Repeatable read (phantom reads possible)\n-- Serializable (full isolation, slowest)" },
            explanation: "Higher isolation = more safety but slower performance."
          }
        ]
      }
    ]
  },
  {
    id: "sql-45",
    number: 45,
    title: "Stored Procedures",
    subtitle: "Reusable code on server",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-44"],
    learningObjectives: ["Create stored procedures", "Pass parameters", "Understand use cases"],
    sections: [
      {
        id: "sql-45-1",
        title: "Stored Procedure Basics",
        whyItMatters: "Encapsulate logic on the database.",
        content: `A stored procedure is saved SQL code that can be called by name. Reduces network traffic, centralizes logic.`,
        codeExamples: [
          {
            id: "sql-45-ex1",
            title: "Stored Procedure Examples",
            description: "Create and call procedures",
            code: { javascript: "-- Create procedure (SQLite uses CREATE PROCEDURE in newer versions)\n-- Note: SQLite has limited stored procedure support\n-- Use functions in other databases\n\n-- Example in PostgreSQL:\nCREATE PROCEDURE transfer_funds(\n  from_account INT,\n  to_account INT,\n  amount DECIMAL\n)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  UPDATE accounts SET balance = balance - amount WHERE id = from_account;\n  UPDATE accounts SET balance = balance + amount WHERE id = to_account;\nEND;\n$$;\n\n-- Call procedure\nCALL transfer_funds(1, 2, 100);" },
            explanation: "Stored procedures vary significantly between database systems."
          }
        ]
      }
    ]
  },
  {
    id: "sql-46",
    number: 46,
    title: "User-Defined Functions",
    subtitle: "Custom calculations",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-45"],
    learningObjectives: ["Create custom functions", "Use in queries", "Understand function types"],
    sections: [
      {
        id: "sql-46-1",
        title: "Function Basics",
        whyItMatters: "Extend SQL with custom logic.",
        content: `User-defined functions return values and can be used in SELECT, WHERE, etc. Different databases have different syntax.`,
        codeExamples: [
          {
            id: "sql-46-ex1",
            title: "Function Examples",
            description: "Create and use functions",
            code: { javascript: "-- PostgreSQL function\nCREATE FUNCTION get_order_total(order_id INT)\nRETURNS DECIMAL\nLANGUAGE plpgsql\nAS $$\n  SELECT COALESCE(SUM(price * quantity), 0)\n  FROM order_items\n  WHERE order_id = get_order_total.order_id;\n$$;\n\n-- Use in query\nSELECT id, get_order_total(id) AS total FROM orders;\n\n-- SQLite: Use custom functions in application code\n-- db.createFunction('getTotal', function(orderId) {...})" },
            explanation: "Functions are called in expressions, procedures are called standalone."
          }
        ]
      }
    ]
  },
  {
    id: "sql-47",
    number: 47,
    title: "Triggers",
    subtitle: "Automatic actions on events",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-46"],
    learningObjectives: ["Create triggers", "Understand trigger events", "Use for data validation"],
    sections: [
      {
        id: "sql-47-1",
        title: "Trigger Basics",
        whyItMatters: "Automate actions when data changes.",
        content: `A trigger automatically runs SQL code when INSERT, UPDATE, or DELETE occurs on a table.`,
        codeExamples: [
          {
            id: "sql-47-ex1",
            title: "Trigger Examples",
            description: "Track changes automatically",
            code: { javascript: "-- Create audit log trigger\nCREATE TRIGGER after_order_insert\nAFTER INSERT ON orders\nBEGIN\n  INSERT INTO audit_log (action, table_name, created_at)\n  VALUES ('INSERT', 'orders', datetime('now'));\nEND;\n\n-- Update timestamp trigger\nCREATE TRIGGER update_product_timestamp\nAFTER UPDATE ON products\nBEGIN\n  UPDATE products SET updated_at = datetime('now')\n  WHERE id = NEW.id;\nEND;\n\n-- SQLite triggers require specific syntax" },
            explanation: "Triggers can enforce business rules or track changes."
          }
        ]
      }
    ]
  },
  {
    id: "sql-48",
    number: 48,
    title: "Common Table Expressions (CTE)",
    subtitle: "Readable subqueries",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-47"],
    learningObjectives: ["Write CTEs", "Improve query readability", "Use recursive CTEs"],
    sections: [
      {
        id: "sql-48-1",
        title: "CTE Basics",
        whyItMatters: "CTEs make complex queries readable.",
        content: `A CTE (WITH clause) defines a temporary named result set that can be referenced in the main query.`,
        codeExamples: [
          {
            id: "sql-48-ex1",
            title: "CTE Examples",
            description: "Simplify complex queries",
            code: { javascript: "-- Use CTE for readability\nWITH recent_orders AS (\n  SELECT * FROM orders WHERE created_at >= '2024-01-01'\n),\nhigh_value AS (\n  SELECT user_id, SUM(total) AS total\n  FROM recent_orders\n  GROUP BY user_id\n  HAVING SUM(total) > 1000\n)\nSELECT u.name, h.total\nFROM high_value h\nJOIN users u ON h.user_id = u.id;" },
            explanation: "CTEs are easier to read than subqueries and can be referenced multiple times."
          }
        ]
      },
      {
        id: "sql-48-2",
        title: "Recursive CTEs",
        whyItMatters: "Walk hierarchical data.",
        content: `Recursive CTEs reference themselves to traverse hierarchical data like org charts or trees.`,
        codeExamples: [
          {
            id: "sql-48-ex2",
            title: "Recursive CTE Example",
            description: "Organizational hierarchy",
            code: { javascript: "-- Get all reports (direct and indirect) for manager\nWITH RECURSIVE reports AS (\n  -- Base case: direct reports\n  SELECT id, name, manager_id, 1 AS level\n  FROM employees WHERE manager_id = 1\n  \n  UNION ALL\n  \n  -- Recursive case: employees who report to someone in reports\n  SELECT e.id, e.name, e.manager_id, r.level + 1\n  FROM employees e\n  JOIN reports r ON e.manager_id = r.id\n)\nSELECT * FROM reports;" },
            explanation: "Recursive CTEs use UNION ALL and must have termination condition."
          }
        ]
      }
    ]
  },
  {
    id: "sql-49",
    number: 49,
    title: "Recursive Queries",
    subtitle: "Navigate hierarchical data",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-48"],
    learningObjectives: ["Understand recursion in SQL", "Build tree/graph traversals", "Use with CTE"],
    sections: [
      {
        id: "sql-49-1",
        title: "Recursive Query Patterns",
        whyItMatters: "Navigate trees and graphs in SQL.",
        content: `Recursive queries traverse hierarchies: organizational charts, category trees, bill-of-materials.`,
        codeExamples: [
          {
            id: "sql-49-ex1",
            title: "Recursive Examples",
            description: "Category tree traversal",
            code: { javascript: "-- Find all subcategories\nWITH RECURSIVE category_tree AS (\n  SELECT id, name, parent_id, 0 AS depth\n  FROM categories WHERE id = 1  -- Start from Electronics\n  \n  UNION ALL\n  \n  SELECT c.id, c.name, c.parent_id, ct.depth + 1\n  FROM categories c\n  JOIN category_tree ct ON c.parent_id = ct.id\n)\nSELECT * FROM category_tree;" },
            explanation: "Works for any hierarchical structure with parent-child relationship."
          }
        ]
      }
    ]
  },
  {
    id: "sql-50",
    number: 50,
    title: "Window Functions",
    subtitle: "Advanced calculations across rows",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["sql-49"],
    learningObjectives: ["Use window functions", "Understand PARTITION BY", "Use ranking functions"],
    sections: [
      {
        id: "sql-50-1",
        title: "Window Function Basics",
        whyItMatters: "Calculate across related rows without grouping.",
        content: `Window functions perform calculations across a set of rows related to the current row. They don't collapse rows like aggregate functions.`,
        codeExamples: [
          {
            id: "sql-50-ex1",
            title: "Window Function Examples",
            description: "Running totals and rankings",
            code: { javascript: "-- Running total\nSELECT \n  order_date,\n  total,\n  SUM(total) OVER (ORDER BY order_date) AS running_total\nFROM orders;\n\n-- Partition by customer\nSELECT \n  id,\n  created_at,\n  total,\n  SUM(total) OVER (PARTITION BY user_id ORDER BY created_at) AS customer_total\nFROM orders;\n\n-- Running average (last 3 orders)\nSELECT \n  id,\n  total,\n  AVG(total) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS running_avg\nFROM orders;" },
            explanation: "OVER defines the window - optionally PARTITION BY and ORDER BY."
          }
        ]
      },
      {
        id: "sql-50-2",
        title: "Ranking Functions",
        whyItMatters: "Rank rows within partitions.",
        content: `RANK, DENSE_RANK, and ROW_NUMBER assign ranks to rows. RANK leaves gaps for ties, DENSE_RANK doesn't.`,
        codeExamples: [
          {
            id: "sql-50-ex2",
            title: "Ranking Examples",
            description: "Rank products by price",
            code: { javascript: "-- Rank within category\nSELECT \n  name,\n  category,\n  price,\n  RANK() OVER (PARTITION BY category ORDER BY price DESC) AS rank,\n  DENSE_RANK() OVER (PARTITION BY category ORDER BY price DESC) AS dense_rank,\n  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS row_num\nFROM products;\n\n-- Top 3 products per category\nSELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn\n  FROM products\n) ranked\nWHERE rn <= 3;" },
            explanation: "RANK: 1,1,3. DENSE_RANK: 1,1,2. ROW_NUMBER: 1,2,3."
          }
        ]
      }
    ]
  },
  {
    id: "sql-51",
    number: 51,
    partLabel: "Part 5: Database Design",
    title: "Database Design Principles",
    subtitle: "Planning your schema",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-50"],
    learningObjectives: ["Understand entity-relationship modeling", "Define business requirements", "Plan schema structure"],
    sections: [
      {
        id: "sql-51-1",
        title: "ER Modeling Basics",
        whyItMatters: "ER diagrams guide database design.",
        content: `Entity-Relationship (ER) modeling defines entities (tables), their attributes (columns), and relationships between them before coding.`,
        codeExamples: [
          {
            id: "sql-51-ex1",
            title: "ER Design Process",
            description: "Identify entities and relationships",
            code: { javascript: "-- Entities identified: Users, Products, Orders\n-- Relationships:\n-- Users have Orders (one-to-many)\n-- Orders contain Products (many-to-many via order_items)\n-- Products belong to Categories (one-to-many)\n\n-- Start with high-level design:\n-- User: id, name, email, created_at\n-- Order: id, user_id, total, status, created_at\n-- Product: id, name, price, category_id\n-- Category: id, name" },
            explanation: "Sketch ER diagram first, then implement."
          }
        ]
      }
    ]
  },
  {
    id: "sql-52",
    number: 52,
    title: "Normalization",
    subtitle: "Organize data efficiently",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-51"],
    learningObjectives: ["Understand normalization forms", "Reduce data redundancy", "Improve data integrity"],
    sections: [
      {
        id: "sql-52-1",
        title: "Normalization Basics",
        whyItMatters: "Normalized databases avoid anomalies.",
        content: `Normalization organizes data into tables to reduce redundancy and prevent insert/update/delete anomalies. Each form builds on previous.`,
        codeExamples: [
          {
            id: "sql-52-ex1",
            title: "Unnormalized vs Normalized",
            description: "Denormalized has redundant data",
            code: { javascript: "-- UNNORMALIZED (bad):\n-- order_id, customer_name, customer_email, product, price\n-- Each row repeats customer info\n\n-- NORMALIZED (good):\n-- orders: id, customer_id, total\n-- customers: id, name, email\n-- order_items: order_id, product_id, price\n-- Products: id, name" },
            explanation: "Normalize by splitting into related tables with proper keys."
          }
        ]
      }
    ]
  },
  {
    id: "sql-53",
    number: 53,
    title: "First Normal Form (1NF)",
    subtitle: "Atomic values only",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-52"],
    learningObjectives: ["Ensure atomic columns", "Remove repeating groups", "Have primary key"],
    sections: [
      {
        id: "sql-53-1",
        title: "1NF Requirements",
        whyItMatters: "1NF is foundation for further normalization.",
        content: `1NF: columns contain atomic (indivisible) values, no repeating groups, each row unique.`,
        codeExamples: [
          {
            id: "sql-53-ex1",
            title: "1NF Examples",
            description: "Fix non-atomic values",
            code: { javascript: "-- NOT 1NF: multiple values in one column\n-- phone: \"123-456,789-012\" (contains two numbers)\n\n-- 1NF: separate row per phone\n-- id, name, phone\n-- 1, Alice, 123-456\n-- 1, Alice, 789-012\n\n-- NOT 1NF: repeating group\n-- id, product1, product2, product3\n\n-- 1NF: separate order_items table\n-- order_id, product_id" },
            explanation: "Split multi-value fields into separate rows or tables."
          }
        ]
      }
    ]
  },
  {
    id: "sql-54",
    number: 54,
    title: "Second Normal Form (2NF)",
    subtitle: "Remove partial dependencies",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-53"],
    learningObjectives: ["Achieve 1NF first", "Remove partial dependencies", "Create proper relationships"],
    sections: [
      {
        id: "sql-54-1",
        title: "2NF Requirements",
        whyItMatters: "2NF eliminates redundant data from composite keys.",
        content: `2NF: must be in 1NF, and no partial dependencies (non-key attributes depend on entire composite key).`,
        codeExamples: [
          {
            id: "sql-54-ex1",
            title: "2NF Examples",
            description: "Fix partial dependencies",
            code: { javascript: "-- NOT 2NF: composite key (order_id, product_id)\n-- order_id, product_id, product_name, quantity\n-- product_name depends only on product_id (partial dep)\n\n-- 2NF: split into proper tables\n-- orders: id, customer_id, date\n-- products: id, name, price\n-- order_items: order_id, product_id, quantity" },
            explanation: "Move non-key attributes to table where they're fully dependent on primary key."
          }
        ]
      }
    ]
  },
  {
    id: "sql-55",
    number: 55,
    title: "Third Normal Form (3NF)",
    subtitle: "Remove transitive dependencies",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-54"],
    learningObjectives: ["Achieve 2NF first", "Remove transitive dependencies", "Ensure non-key attributes depend only on primary key"],
    sections: [
      {
        id: "sql-55-1",
        title: "3NF Requirements",
        whyItMatters: "3NF eliminates transitive dependencies.",
        content: `3NF: must be in 2NF, and no transitive dependencies (non-key column depends on another non-key column).`,
        codeExamples: [
          {
            id: "sql-55-ex1",
            title: "3NF Examples",
            description: "Fix transitive dependencies",
            code: { javascript: "-- NOT 3NF: transitive dependency\n-- users: id, name, zip_code, city, state\n-- city depends on zip_code (transitive), not on id\n\n-- 3NF: separate location table\n-- users: id, name, zip_code\n-- locations: zip_code, city, state" },
            explanation: "Move transitively-dependent attributes to separate table."
          }
        ]
      }
    ]
  },
  {
    id: "sql-56",
    number: 56,
    title: "Denormalization",
    subtitle: "When to break rules",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["sql-55"],
    learningObjectives: ["Understand when to denormalize", "Trade consistency for performance", "Apply selectively"],
    sections: [
      {
        id: "sql-56-1",
        title: "Denormalization Strategies",
        whyItMatters: "Sometimes denormalization improves performance.",
        content: `Denormalization adds redundant data intentionally for performance. Use for read-heavy workloads, reporting, caching.`,
        codeExamples: [
          {
            id: "sql-56-ex1",
            title: "Denormalization Examples",
            description: "Add redundant data for speed",
            code: { javascript: "-- Normalized: need JOIN for order total\n-- orders: id, user_id\n-- order_items: order_id, price, quantity\n\n-- Denormalized: store total on order\n-- orders: id, user_id, total_amount (calculated from items)\n-- Avoids JOIN for displaying order list\n\n-- Tradeoff: must update total when order_items change" },
            explanation: "Denormalize strategically - usually for frequently accessed, rarely updated data."
          }
        ]
      }
    ]
  },
  {
    id: "sql-57",
    number: 57,
    title: "Constraints",
    subtitle: "Enforce data rules",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-56"],
    learningObjectives: ["Use PRIMARY KEY, FOREIGN KEY", "Add UNIQUE, NOT NULL", "Create CHECK constraints"],
    sections: [
      {
        id: "sql-57-1",
        title: "Constraint Types",
        whyItMatters: "Constraints ensure data validity.",
        content: `Constraints enforce rules at database level: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK.`,
        codeExamples: [
          {
            id: "sql-57-ex1",
            title: "Constraint Examples",
            description: "Various constraints",
            code: { javascript: "-- Table with all constraints\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  email TEXT UNIQUE NOT NULL,\n  age INTEGER CHECK (age >= 0 AND age <= 150),\n  status TEXT DEFAULT 'active' NOT NULL,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Foreign key with constraints\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER NOT NULL REFERENCES users(id),\n  total REAL CHECK (total >= 0),\n  status TEXT CHECK (status IN ('pending','completed','cancelled'))\n);" },
            explanation: "Constraints are safer than application validation - enforced at DB level."
          }
        ]
      }
    ]
  },
  {
    id: "sql-58",
    number: 58,
    title: "Composite Keys",
    subtitle: "Multi-column primary keys",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["sql-57"],
    learningObjectives: ["Create composite primary keys", "Understand when to use", "Know alternatives"],
    sections: [
      {
        id: "sql-58-1",
        title: "Composite Key Usage",
        whyItMatters: "Some tables need combined unique identifiers.",
        content: `Composite key uses multiple columns together as primary key. Use when no single column uniquely identifies rows.`,
        codeExamples: [
          {
            id: "sql-58-ex1",
            title: "Composite Key Examples",
            description: "Order items need composite key",
            code: { javascript: "-- Junction table with composite key\nCREATE TABLE enrollments (\n  student_id INTEGER,\n  course_id INTEGER,\n  enrolled_at TEXT,\n  PRIMARY KEY (student_id, course_id)\n);\n\n-- Same as:\n-- PRIMARY KEY (student_id, course_id)\n-- Equivalent to unique constraint on both columns" },
            explanation: "Composite keys often replace surrogate keys in many-to-many junction tables."
          }
        ]
      }
    ]
  },
  {
    id: "sql-59",
    number: 59,
    title: "UUIDs vs Auto Increment",
    subtitle: "Choosing ID strategy",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-58"],
    learningObjectives: ["Compare UUID and auto-increment", "Choose appropriate for use case", "Understand tradeoffs"],
    sections: [
      {
        id: "sql-59-1",
        title: "ID Strategies",
        whyItMatters: "ID type affects performance and distribution.",
        content: `Auto-increment: simple, sequential, small storage. UUID: unique across systems, larger, random order.`,
        codeExamples: [
          {
            id: "sql-59-ex1",
            title: "ID Examples",
            description: "Both ID strategies",
            code: { javascript: "-- Auto-increment (simple, small IDs)\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY AUTOINCREMENT\n);\n\n-- UUID (unique across systems)\nCREATE TABLE orders (\n  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16))))\n);\n\n-- PostgreSQL specific:\n-- id UUID PRIMARY KEY DEFAULT gen_random_uuid()" },
            explanation: "Auto-increment for single-database apps; UUID for distributed systems or merging data."
          }
        ]
      }
    ]
  },
  {
    id: "sql-60",
    number: 60,
    title: "Real-World Schema Design",
    subtitle: "Design complete databases",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["sql-59"],
    learningObjectives: ["Design multi-table schema", "Apply normalization rules", "Consider query patterns"],
    sections: [
      {
        id: "sql-60-1",
        title: "Ecommerce Schema",
        whyItMatters: "Real apps need complete schemas.",
        content: `Design full ecommerce database with proper relationships, indexes, and constraints.`,
        codeExamples: [
          {
            id: "sql-60-ex1",
            title: "Complete Ecommerce Schema",
            description: "Multi-table design",
            code: { javascript: "-- Categories (self-referential for subcategories)\nCREATE TABLE categories (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  parent_id INTEGER REFERENCES categories(id)\n);\n\n-- Products\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  description TEXT,\n  price REAL NOT NULL CHECK(price >= 0),\n  category_id INTEGER REFERENCES categories(id),\n  stock INTEGER DEFAULT 0 CHECK(stock >= 0)\n);\n\n-- Users\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  email TEXT UNIQUE NOT NULL,\n  name TEXT NOT NULL\n);\n\n-- Orders (with status enum)\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id),\n  total REAL NOT NULL,\n  status TEXT DEFAULT 'pending',\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Order Items\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER REFERENCES orders(id),\n  product_id INTEGER REFERENCES products(id),\n  quantity INTEGER NOT NULL CHECK(quantity > 0),\n  price REAL NOT NULL,\n  UNIQUE(order_id, product_id)\n);" },
            explanation: "This schema handles products, categories, users, orders with full referential integrity."
          }
        ]
      }
    ]
  },
  {
    id: "sql-61",
    number: 61,
    partLabel: "Part 6: SQL in Real Applications",
    title: "SQL with Node.js",
    subtitle: "Connect from Node.js",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-60"],
    learningObjectives: ["Use database drivers in Node", "Execute queries safely", "Handle connections"],
    sections: [
      {
        id: "sql-61-1",
        title: "Node.js SQL Basics",
        whyItMatters: "Most web apps use Node.js backend.",
        content: `Use better-sqlite3 or sql.js for SQLite in Node.js. Use parameterized queries to prevent SQL injection.`,
        codeExamples: [
          {
            id: "sql-61-ex1",
            title: "Node.js Examples",
            description: "Query SQLite from Node",
            code: { javascript: "-- Node.js with better-sqlite3\nconst Database = require('better-sqlite3');\nconst db = new Database('mydb.sqlite');\n\n// Parameterized query (safe!)\nconst stmt = db.prepare('SELECT * FROM users WHERE id = ?');\nconst user = stmt.get(userId);\n\n// Insert with parameters\nconst insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');\nconst result = insert.run(name, email);\n\n// Close connection\ndb.close();" },
            explanation: "Always use parameterized queries - never concatenate user input into SQL strings."
          }
        ]
      }
    ]
  },
  {
    id: "sql-62",
    number: 62,
    title: "SQL with PHP",
    subtitle: "Connect from PHP",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-61"],
    learningObjectives: ["Use PDO in PHP", "Prepare statements", "Handle errors"],
    sections: [
      {
        id: "sql-62-1",
        title: "PHP SQL Basics",
        whyItMatters: "PHP powers many web applications.",
        content: `Use PDO (PHP Data Objects) for database access. Use prepared statements for security.`,
        codeExamples: [
          {
            id: "sql-62-ex1",
            title: "PHP Examples",
            description: "Query SQLite from PHP",
            code: { javascript: "<?php\n// Connect to SQLite\n$pdo = new PDO('sqlite:mydb.sqlite');\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n\n// Prepared statement\n$stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id');\n$stmt->execute(['id' => $userId]);\n$user = $stmt->fetch(PDO::FETCH_ASSOC);\n\n// Insert\n$stmt = $pdo->prepare('INSERT INTO users (name, email) VALUES (:name, :email)');\n$stmt->execute(['name' => $name, 'email' => $email]);\n?>" },
            explanation: "PDO supports many databases - switch by changing connection string."
          }
        ]
      }
    ]
  },
  {
    id: "sql-63",
    number: 63,
    title: "SQL with Python",
    subtitle: "Connect from Python",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-62"],
    learningObjectives: ["Use sqlite3 in Python", "Execute queries safely", "Use context managers"],
    sections: [
      {
        id: "sql-63-1",
        title: "Python SQL Basics",
        whyItMatters: "Python for data and backend.",
        content: `Use sqlite3 module. Use parameterized queries. Use context managers for connection handling.`,
        codeExamples: [
          {
            id: "sql-63-ex1",
            title: "Python Examples",
            description: "Query SQLite from Python",
            code: { javascript: "import sqlite3\n\n# Using context manager\nwith sqlite3.connect('mydb.sqlite') as conn:\n    cursor = conn.cursor()\n    \n    # Parameterized query\n    cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))\n    user = cursor.fetchone()\n    \n    # Insert with parameters\n    cursor.execute('INSERT INTO users (name, email) VALUES (?, ?)', (name, email))\n    conn.commit()\n    \n    # Multiple inserts\n    users = [('Alice', 'alice@test.com'), ('Bob', 'bob@test.com')]\n    cursor.executemany('INSERT INTO users (name, email) VALUES (?, ?)', users)\n    conn.commit()" },
            explanation: "Always use tuple for parameters, not string formatting."
          }
        ]
      }
    ]
  },
  {
    id: "sql-64",
    number: 64,
    title: "SQL with Java",
    subtitle: "Connect from Java",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-63"],
    learningObjectives: ["Use JDBC", "Create prepared statements", "Handle results"],
    sections: [
      {
        id: "sql-64-1",
        title: "Java SQL Basics",
        whyItMatters: "Enterprise Java applications.",
        content: `Use JDBC (Java Database Connectivity). Use PreparedStatement to prevent injection.`,
        codeExamples: [
          {
            id: "sql-64-ex1",
            title: "Java Examples",
            description: "Query SQLite from Java",
            code: { javascript: "import java.sql.*;\n\nString url = \"jdbc:sqlite:mydb.sqlite\";\nConnection conn = DriverManager.getConnection(url);\n\n// Prepared statement\nString sql = \"SELECT * FROM users WHERE id = ?\";\nPreparedStatement stmt = conn.prepareStatement(sql);\nstmt.setInt(1, userId);\nResultSet rs = stmt.executeQuery();\n\nif (rs.next()) {\n    String name = rs.getString(\"name\");\n}\n\n// Insert\nString insert = \"INSERT INTO users (name, email) VALUES (?, ?)\";\nPreparedStatement insertStmt = conn.prepareStatement(insert);\ninsertStmt.setString(1, name);\ninsertStmt.setString(2, email);\ninsertStmt.executeUpdate();" },
            explanation: "Use try-with-resources to auto-close connections."
          }
        ]
      }
    ]
  },
  {
    id: "sql-65",
    number: 65,
    title: "SQL with C#",
    subtitle: "Connect from C#",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["sql-64"],
    learningObjectives: ["Use ADO.NET", "Create parameterized queries", "Handle connections safely"],
    sections: [
      {
        id: "sql-65-1",
        title: "C# SQL Basics",
        whyItMatters: ".NET applications use C#.",
        content: `Use Microsoft.Data.Sqlite for SQLite in C#. Use parameterized queries for safety.`,
        codeExamples: [
          {
            id: "sql-65-ex1",
            title: "C# Examples",
            description: "Query SQLite from C#",
            code: { javascript: "using Microsoft.Data.Sqlite;\n\nvar connectionString = \"Data Source=mydb.sqlite\";\nusing var connection = new SqliteConnection(connectionString);\nconnection.Open();\n\n// Parameterized query\nvar cmd = connection.CreateCommand();\ncmd.CommandText = \"SELECT * FROM users WHERE id = @id\";\ncmd.Parameters.AddWithValue(\"@id\", userId);\nusing var reader = cmd.ExecuteReader();\n\nwhile (reader.Read()) {\n    var name = reader.GetString(1);\n}\n\n// Insert\nvar insertCmd = connection.CreateCommand();\ninsertCmd.CommandText = @\"INSERT INTO users (name, email) VALUES (@name, @email)\";\ninsertCmd.Parameters.AddWithValue(\"@name\", name);\ninsertCmd.Parameters.AddWithValue(\"@email\", email);\ninsertCmd.ExecuteNonQuery();" },
            explanation: "Use 'using' statements to ensure proper disposal of connections and commands."
          }
        ]
      }
    ]
  },
  {
    id: "sql-66",
    number: 66,
    title: "ORMs Explained",
    subtitle: "Object-Relational Mapping",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-65"],
    learningObjects: ["Understand ORM concept", "Know pros and cons", "Choose when to use"],
    sections: [
      {
        id: "sql-66-1",
        title: "ORM Basics",
        whyItMatters: "ORMs abstract database operations.",
        content: `ORM maps database tables to programming objects. Write code in your language, ORM generates SQL.`,
        codeExamples: [
          {
            id: "sql-66-ex1",
            title: "ORM Examples",
            description: "Concept of ORM",
            code: { javascript: "-- Without ORM: write SQL\nINSERT INTO users (name, email) VALUES ('Alice', 'alice@test.com');\n\n-- With ORM (pseudo-code):\n// User user = new User();\n// user.name = 'Alice';\n// user.email = 'alice@test.com';\n// repository.save(user);\n\n// ORM generates:\n// INSERT INTO users (name, email) VALUES ('Alice', 'alice@test.com')" },
            explanation: "Popular ORMs: Entity Framework (C#), Hibernate (Java), Sequelize (Node), SQLAlchemy (Python)."
          }
        ]
      },
      {
        id: "sql-66-2",
        title: "ORM Tradeoffs",
        whyItMatters: "ORMs have pros and cons.",
        content: `Pros: faster development, less SQL. Cons: potential performance overhead, may generate inefficient queries, learning curve.`,
        codeExamples: [
          {
            id: "sql-66-ex2",
            title: "When to Use ORMs",
            description: "Choose wisely",
            code: { javascript: "-- Good for:\n-- Rapid prototyping\n-- CRUD-heavy applications\n-- When performance isn't critical\n\n-- Consider raw SQL when:\n-- Complex queries (JOINs, aggregations)\n-- High performance requirements\n-- Database-specific features needed" },
            explanation: "Many apps use both: ORM for CRUD, raw SQL for complex queries."
          }
        ]
      }
    ]
  },
  {
    id: "sql-67",
    number: 67,
    title: "Prisma ORM",
    subtitle: "Modern TypeScript ORM",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-66"],
    learningObjectives: ["Use Prisma with SQLite", "Define schema", "Generate queries"],
    sections: [
      {
        id: "sql-67-1",
        title: "Prisma Basics",
        whyItMatters: "Prisma is popular in Node/TypeScript ecosystem.",
        content: `Prisma provides type-safe database access. Define schema, generate client, query with code.`,
        codeExamples: [
          {
            id: "sql-67-ex1",
            title: "Prisma Examples",
            description: "Using Prisma",
            code: { javascript: "// schema.prisma\nmodel User {\n  id    Int     @id @default(autoincrement())\n  name  String\n  email String  @unique\n  posts Post[]\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String?\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  Int\n}\n\n// In code:\nconst user = await prisma.user.create({\n  data: { name: 'Alice', email: 'alice@test.com' }\n});\n\nconst posts = await prisma.post.findMany({\n  where: { author: { name: 'Alice' } }\n});" },
            explanation: "Prisma generates type-safe client - use autocomplete for queries."
          }
        ]
      }
    ]
  },
  {
    id: "sql-68",
    number: 68,
    title: "SQL Injection and Security",
    subtitle: "Prevent attacks",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["sql-67"],
    learningObjectives: ["Understand SQL injection", "Use parameterized queries", "Apply security best practices"],
    sections: [
      {
        id: "sql-68-1",
        title: "SQL Injection Explained",
        whyItMatters: "Injection is #1 web vulnerability.",
        content: `SQL injection manipulates queries by injecting malicious input. Can steal data, bypass auth, or delete database.`,
        codeExamples: [
          {
            id: "sql-68-ex1",
            title: "Injection Examples",
            description: "How attacks work",
            code: { javascript: "-- VULNERABLE: user input concatenated\n-- Input: \"'; DROP TABLE users; --\"\nSELECT * FROM users WHERE name = ''; DROP TABLE users; --'\n\n-- Input for login: \"admin' --\"\nSELECT * FROM users WHERE name = 'admin' --' AND password = '...'\n-- Comment bypasses password check!\n\n-- SAFE: parameterized query\n-- Input: \"'; DROP TABLE users; --\"\nSELECT * FROM users WHERE name = ?\n-- Treated as literal string, not executed" },
            explanation: "Never concatenate user input into SQL - use parameterized queries always."
          }
        ]
      },
      {
        id: "sql-68-2",
        title: "Security Best Practices",
        whyItMatters: "Secure your database.",
        content: `Use parameterized queries, least privilege accounts, validate input, limit database permissions.`,
        codeExamples: [
          {
            id: "sql-68-ex2",
            title: "Security Checklist",
            description: "Secure practices",
            code: { javascript: "-- 1. Always use parameterized/prepared statements\n-- 2. Validate and sanitize user input\n-- 3. Use least-privilege database user (not root!)\n-- 4. Don't store passwords in plain text - use hashing\n-- 5. Use HTTPS for connections\n-- 6. Regular security audits\n-- 7. Keep software updated\n\n-- Example: hash password\n-- Store: hash('sha256', password + salt)\n-- Never store plain text passwords!" },
            explanation: "Defense in depth - multiple security layers."
          }
        ]
      }
    ]
  },
  {
    id: "sql-69",
    number: 69,
    title: "Database Backups and Scaling",
    subtitle: "Operational excellence",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["sql-68"],
    learningObjectives: ["Backup strategies", "Understand scaling options", "Handle growth"],
    sections: [
      {
        id: "sql-69-1",
        title: "Backup Strategies",
        whyItMatters: "Data loss is catastrophic.",
        content: `Regular backups are essential. Test restore process. Consider point-in-time recovery.`,
        codeExamples: [
          {
            id: "sql-69-ex1",
            title: "Backup Examples",
            description: "Backup SQLite",
            code: { javascript: "-- Backup SQLite (copy file)\n-- While database closed, copy .sqlite file\n-- Online backup: use .backup command\n\n-- .backup command (works while DB in use)\n-- .backup backup.sqlite\n\n-- Restore\n-- Simply copy backup file over existing\n\n-- For production: use real database like PostgreSQL\n-- pg_dump for backups\n-- Point-in-time recovery with WAL" },
            explanation: "Automate backups, test restore regularly."
          }
        ]
      },
      {
        id: "sql-69-2",
        title: "Scaling Options",
        whyItMatters: "Single database has limits.",
        content: `Vertical: more powerful server. Horizontal: read replicas, sharding. Consider caching (Redis).`,
        codeExamples: [
          {
            id: "sql-69-ex2",
            title: "Scaling Strategies",
            description: "Handle growth",
            code: { javascript: "-- Vertical scaling: upgrade server (more CPU, RAM)\n-- Easiest, has limits\n\n-- Horizontal scaling:\n-- Read replicas (master handles writes, replicas handle reads)\n-- Connection pooling\n\n-- Caching:\n-- Redis/Memcached for frequently accessed data\n-- Cache invalidation strategy important\n\n-- For massive scale:\n-- Sharding (split data across servers)\n-- Consider NoSQL for certain data types" },
            explanation: "Start simple, scale as needed."
          }
        ]
      }
    ]
  },
  {
    id: "sql-70",
    number: 70,
    partLabel: "Part 7: Projects",
    title: "Project: Student Management Database",
    subtitle: "Build complete system",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 45,
    xpReward: 80,
    prerequisites: ["sql-69"],
    learningObjectives: ["Design multi-table schema", "Implement CRUD operations", "Handle relationships"],
    sections: [
      {
        id: "sql-70-1",
        title: "Schema Design",
        whyItMatters: "Build complete student system.",
        content: `Design database for student management: students, courses, enrollments, grades.`,
        codeExamples: [
          {
            id: "sql-70-ex1",
            title: "Student System Schema",
            description: "Complete design",
            code: { javascript: "-- Students\nCREATE TABLE students (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE,\n  enrollment_date TEXT,\n  status TEXT DEFAULT 'active'\n);\n\n-- Courses\nCREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  code TEXT UNIQUE,\n  name TEXT,\n  credits INTEGER,\n  department TEXT\n);\n\n-- Enrollments\nCREATE TABLE enrollments (\n  id INTEGER PRIMARY KEY,\n  student_id INTEGER REFERENCES students(id),\n  course_id INTEGER REFERENCES courses(id),\n  semester TEXT,\n  UNIQUE(student_id, course_id, semester)\n);\n\n-- Grades\nCREATE TABLE grades (\n  id INTEGER PRIMARY KEY,\n  enrollment_id INTEGER REFERENCES enrollments(id),\n  grade TEXT,\n  points REAL\n);" },
            explanation: "This handles students enrolling in courses and getting grades."
          }
        ]
      },
      {
        id: "sql-70-2",
        title: "Queries for System",
        whyItMatters: "Answer common questions.",
        content: `Write queries for: student course list, grades, GPA, course enrollment counts.`,
        codeExamples: [
          {
            id: "sql-70-ex2",
            title: "Student System Queries",
            description: "Common operations",
            code: { javascript: "-- Student's courses this semester\nSELECT c.name, c.code, e.semester\nFROM enrollments e\nJOIN courses c ON e.course_id = c.id\nWHERE e.student_id = 1 AND e.semester = '2024-Spring';\n\n-- Student GPA\nSELECT AVG(grade_points) FROM grades g\nJOIN enrollments e ON g.enrollment_id = e.id\nWHERE e.student_id = 1;\n\n-- Course enrollment count\nSELECT c.name, COUNT(e.id) as enrolled\nFROM courses c\nLEFT JOIN enrollments e ON c.id = e.course_id\nGROUP BY c.id;" },
            explanation: "These queries handle common student system operations."
          }
        ]
      }
    ]
  },
  {
    id: "sql-71",
    number: 71,
    title: "Project: Ecommerce Database System",
    subtitle: "Full online store database",
    difficulty: "Advanced" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["sql-70"],
    learningObjectives: ["Design complex ecommerce schema", "Handle orders and inventory", "Implement reports"],
    sections: [
      {
        id: "sql-71-1",
        title: "Ecommerce Schema",
        whyItMatters: "Build production-style system.",
        content: `Complete ecommerce database: products, categories, users, orders, payments, reviews, inventory.`,
        codeExamples: [
          {
            id: "sql-71-ex1",
            title: "Full Ecommerce DB",
            description: "Complete system",
            code: { javascript: "-- Categories (hierarchical)\nCREATE TABLE categories (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  parent_id INTEGER REFERENCES categories(id)\n);\n\n-- Products with inventory\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  description TEXT,\n  price REAL NOT NULL,\n  category_id INTEGER REFERENCES categories(id),\n  stock INTEGER DEFAULT 0,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Users with addresses\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  email TEXT UNIQUE NOT NULL,\n  name TEXT NOT NULL\n);\n\nCREATE TABLE addresses (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id),\n  type TEXT,\n  address TEXT,\n  city TEXT, state TEXT, zip TEXT\n);\n\n-- Orders\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id),\n  shipping_address_id INTEGER REFERENCES addresses(id),\n  status TEXT DEFAULT 'pending',\n  total REAL NOT NULL,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Order items\nCREATE TABLE order_items (\n  id INTEGER PRIMARY KEY,\n  order_id INTEGER REFERENCES orders(id),\n  product_id INTEGER REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  price REAL NOT NULL\n);\n\n-- Reviews\nCREATE TABLE reviews (\n  id INTEGER PRIMARY KEY,\n  product_id INTEGER REFERENCES products(id),\n  user_id INTEGER REFERENCES users(id),\n  rating INTEGER CHECK(rating >= 1 AND rating <= 5),\n  comment TEXT\n);" },
            explanation: "This schema handles products, orders, shipping, and reviews."
          }
        ]
      }
    ]
  },
  {
    id: "sql-72",
    number: 72,
    title: "Project: Banking Database",
    subtitle: "Financial system design",
    difficulty: "Advanced" as const,
    estimatedMinutes: 50,
    xpReward: 90,
    prerequisites: ["sql-71"],
    learningObjectives: ["Design financial schema", "Handle transactions", "Ensure data integrity"],
    sections: [
      {
        id: "sql-72-1",
        title: "Banking Schema",
        whyItMatters: "Financial systems need precision.",
        content: `Banking database: accounts, transactions, transfers, loans. Focus on integrity and audit.`,
        codeExamples: [
          {
            id: "sql-72-ex1",
            title: "Banking System",
            description: "Financial design",
            code: { javascript: "-- Accounts\nCREATE TABLE accounts (\n  id INTEGER PRIMARY KEY,\n  account_number TEXT UNIQUE NOT NULL,\n  account_type TEXT NOT NULL,\n  balance REAL DEFAULT 0 CHECK(balance >= 0),\n  customer_id INTEGER,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n  status TEXT DEFAULT 'active'\n);\n\n-- Transactions\nCREATE TABLE transactions (\n  id INTEGER PRIMARY KEY,\n  account_id INTEGER REFERENCES accounts(id),\n  type TEXT NOT NULL,\n  amount REAL NOT NULL,\n  description TEXT,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Use transaction for transfers:\nBEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nINSERT INTO transactions (account_id, type, amount) VALUES (1, 'debit', 100);\nINSERT INTO transactions (account_id, type, amount) VALUES (2, 'credit', 100);\nCOMMIT;" },
            explanation: "Bank transactions must be atomic - use transactions to ensure all-or-nothing."
          }
        ]
      }
    ]
  },
  {
    id: "sql-73",
    number: 73,
    title: "Project: Social Media Backend Database",
    subtitle: "Build like system",
    difficulty: "Advanced" as const,
    estimatedMinutes: 50,
    xpReward: 90,
    prerequisites: ["sql-72"],
    learningObjectives: ["Design social schema", "Handle relationships", "Implement feeds"],
    sections: [
      {
        id: "sql-73-1",
        title: "Social Media Schema",
        whyItMatters: "Modern app backends.",
        content: `Social media: users, posts, comments, likes, follows, notifications.`,
        codeExamples: [
          {
            id: "sql-73-ex1",
            title: "Social Media DB",
            description: "Complete system",
            code: { javascript: "-- Users\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username TEXT UNIQUE,\n  bio TEXT\n);\n\n-- Posts\nCREATE TABLE posts (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id),\n  content TEXT,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Comments\nCREATE TABLE comments (\n  id INTEGER PRIMARY KEY,\n  post_id INTEGER REFERENCES posts(id),\n  user_id INTEGER REFERENCES users(id),\n  content TEXT,\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Likes\nCREATE TABLE likes (\n  user_id INTEGER REFERENCES users(id),\n  post_id INTEGER REFERENCES posts(id),\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY(user_id, post_id)\n);\n\n-- Follows (self-referential)\nCREATE TABLE follows (\n  follower_id INTEGER REFERENCES users(id),\n  following_id INTEGER REFERENCES users(id),\n  created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY(follower_id, following_id)\n);" },
            explanation: "This handles posts, comments, likes, and following system."
          }
        ]
      }
    ]
  },
  {
    id: "sql-74",
    number: 74,
    title: "SQL Challenge Set",
    subtitle: "Practice problems",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["sql-73"],
    learningObjectives: ["Practice queries", "Solve real problems", "Build confidence"],
    sections: [
      {
        id: "sql-74-1",
        title: "Practice Challenges",
        whyItMatters: "Practice makes perfect.",
        content: `Practice queries covering all SQL concepts learned.`,
        codeExamples: [
          {
            id: "sql-74-ex1",
            title: "Challenge Examples",
            description: "Practice problems",
            code: { javascript: "-- Challenge 1: Find top 5 customers by total orders\nSELECT u.name, SUM(o.total) as total_spent\nFROM users u\nJOIN orders o ON u.id = o.user_id\nGROUP BY u.id\nORDER BY total_spent DESC\nLIMIT 5;\n\n-- Challenge 2: Find products not ordered in 30 days\nSELECT * FROM products\nWHERE id NOT IN (\n  SELECT DISTINCT product_id FROM orders\n  WHERE created_at >= date('now', '-30 days')\n);\n\n-- Challenge 3: Monthly revenue with running total\nSELECT strftime('%Y-%m', created_at) as month,\n  SUM(total) as revenue,\n  (SELECT SUM(total) FROM orders o2 \n   WHERE strftime('%Y-%m', o2.created_at) <= strftime('%Y-%m', o1.created_at)) as running_total\nFROM orders o1\nGROUP BY month\nORDER BY month;" },
            explanation: "Practice each type of query - from simple to complex."
          }
        ]
      }
    ]
  },
  {
    id: "sql-75",
    number: 75,
    title: "SQL Mastery Recap + Certificate Prep",
    subtitle: "Review and certify",
    difficulty: "Expert" as const,
    estimatedMinutes: 45,
    xpReward: 100,
    prerequisites: ["sql-74"],
    learningObjectives: ["Review all concepts", "Prepare for certification", "Continue learning path"],
    sections: [
      {
        id: "sql-75-1",
        title: "Key Concepts Review",
        whyItMatters: "Consolidate learning.",
        content: `Review all major SQL concepts covered in this track.`,
        codeExamples: [
          {
            id: "sql-75-ex1",
            title: "Quick Reference",
            description: "Core concepts",
            code: { javascript: "-- Core SQL Commands:\n-- SELECT, INSERT, UPDATE, DELETE\n-- CREATE TABLE, ALTER, DROP\n\n-- Query Clauses:\n-- WHERE, ORDER BY, GROUP BY, HAVING\n-- JOINs: INNER, LEFT, RIGHT, FULL, CROSS\n\n-- Aggregates:\n-- COUNT, SUM, AVG, MIN, MAX\n-- Window functions: ROW_NUMBER, RANK\n\n-- Advanced:\n-- Subqueries, CTEs, Views\n-- Transactions, Indexes, Triggers\n\n-- Data Integrity:\n-- PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL\n-- CHECK, DEFAULT" },
            explanation: "These are the building blocks of SQL mastery."
          }
        ]
      },
      {
        id: "sql-75-2",
        title: "Next Steps",
        whyItMatters: "Continue learning.",
        content: `After this track, explore: PostgreSQL, MySQL (production databases), NoSQL (MongoDB), or ORM frameworks.`,
        codeExamples: [
          {
            id: "sql-75-ex2",
            title: "Continuing Journey",
            description: "What's next",
            code: { javascript: "-- Keep practicing!\n-- Practice at: LeetCode, HackerRank, SQLPad\n\n-- Learn production databases:\n-- PostgreSQL (advanced features, JSON)\n-- MySQL (replication, clustering)\n\n-- Explore related:\n-- Prisma, TypeORM (ORM tools)\n-- Redis (caching)\n-- MongoDB (NoSQL)" },
            explanation: "SQL is foundation - now build on it!"
          }
        ]
      }
    ]
  }
];

export const sqlTrack: Track = {
  id: "sql",
  title: "SQL",
  titleBn: "SQL",
  tagline: "Master databases and data querying",
  taglineBn: "ডেটাবেস এবং ডেটা কোয়েরি মাস্টার করুন",
  icon: "https://img.icons8.com/?size=96&id=9R0Z0K2C4N5O&format=png",
  colorVar: "sql",
  totalChapters: sqlChapters.length,
  estimatedHours: Math.round(sqlChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: sqlChapters,
  brandColor: "#336791",
  glowColor: "rgba(51, 103, 145, 0.4)",
};