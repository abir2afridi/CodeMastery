import type { Track, Chapter } from "./types";

const mysqlChapters: Chapter[] = [
  {
    id: "mysql-1",
    number: 1,
    partLabel: "Part 1: MySQL Fundamentals",
    title: "What Is MySQL?",
    subtitle: "Introduction to MySQL",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: [],
    learningObjectives: ["Understand what MySQL is", "Know MySQL's role in web development", "Understand client-server architecture"],
    sections: [
      {
        id: "mysql-1-1",
        title: "MySQL Overview",
        whyItMatters: "MySQL powers millions of applications worldwide.",
        content: `MySQL is the world's most popular open-source relational database management system (RDBMS). Developed by MySQL AB (now Oracle), it's the M in the LAMP stack (Linux, Apache, MySQL, PHP/Python/Perl).

Why MySQL matters:
- Powers Facebook, Twitter, YouTube, Airbnb
- Free and open-source with commercial options
- Fast, reliable, and easy to use
- Works on Windows, Linux, macOS

Key features:
- ACID compliant transactions
- Multiple storage engines (InnoDB, MyISAM)
- Stored procedures, triggers, views
- Replication and clustering support
- Full-text search capabilities`,
        codeExamples: [
          {
            id: "mysql-1-ex1",
            title: "MySQL Basics",
            description: "Basic MySQL commands",
            code: { javascript: "-- Connect to MySQL server\nmysql -u root -p\n\n-- Show version\nSELECT VERSION();\n\n-- Show current database\nSELECT DATABASE();\n\n-- List databases\nSHOW DATABASES;" },
            explanation: "MySQL uses SQL (Structured Query Language) just like other relational databases."
          }
        ]
      },
      {
        id: "mysql-1-2",
        title: "Client-Server Architecture",
        whyItMatters: "Understanding architecture helps with troubleshooting.",
        content: `MySQL follows client-server model:
- Server: Manages databases, executes queries, handles connections
- Client: Sends queries, displays results (mysql CLI, Workbench, phpMyAdmin)

Communication: TCP/IP connection on port 3306 (default)`,
        codeExamples: [
          {
            id: "mysql-1-ex2",
            title: "Connection Examples",
            description: "Connect to MySQL",
            code: { javascript: "-- Local connection\nmysql -u root -p\n\n-- Remote connection\nmysql -h hostname -u username -p\n\n-- Connect to specific database\nmysql -u root -p database_name\n\n-- Via TCP on custom port\nmysql -h 127.0.0.1 -P 3307 -u root -p" },
            explanation: "Default port is 3306. Can be changed in my.cnf configuration."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-2",
    number: 2,
    title: "Installing MySQL Server",
    subtitle: "Setup MySQL on your machine",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 50,
    prerequisites: ["mysql-1"],
    learningObjectives: ["Install MySQL on different platforms", "Start and stop MySQL service", "Configure basic settings"],
    sections: [
      {
        id: "mysql-2-1",
        title: "Windows Installation",
        whyItMatters: "Windows is common development platform.",
        content: `Install MySQL on Windows using installer or MSI package.

Steps:
1. Download MySQL Installer from dev.mysql.com
2. Run installer, choose "Developer Default"
3. Set root password
4. Complete installation
5. Start MySQL service`,
        codeExamples: [
          {
            id: "mysql-2-ex1",
            title: "Windows Service Commands",
            description: "Manage MySQL service",
            code: { javascript: "-- Start MySQL service\nnet start mysql\n\n-- Stop MySQL service\nnet stop mysql\n\n-- Check service status\nsc query mysql" },
            explanation: "MySQL installs as Windows service, auto-starts on boot."
          }
        ]
      },
      {
        id: "mysql-2-2",
        title: "Linux/macOS Installation",
        whyItMatters: "Linux powers most production servers.",
        content: `Install via package manager:

Ubuntu/Debian:
sudo apt update
sudo apt install mysql-server

macOS with Homebrew:
brew install mysql
brew services start mysql

CentOS/RHEL:
sudo yum install mysql-server`,
        codeExamples: [
          {
            id: "mysql-2-ex2",
            title: "Linux Commands",
            description: "Manage MySQL on Linux",
            code: { javascript: "-- Start MySQL\nsudo systemctl start mysqld\n\n-- Enable auto-start\nsudo systemctl enable mysqld\n\n-- Secure installation\nsudo mysql_secure_installation\n\n-- Login\nmysql -u root -p" },
            explanation: "mysql_secure_installation sets root password and removes test databases."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-3",
    number: 3,
    title: "MySQL Workbench",
    subtitle: "Visual database management",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["mysql-2"],
    learningObjectives: ["Use MySQL Workbench", "Create connections", "Execute queries visually"],
    sections: [
      {
        id: "mysql-3-1",
        title: "Workbench Interface",
        whyItMatters: "GUI makes database work easier.",
        content: `MySQL Workbench provides visual interface for:
- Query execution
- Schema design (ER diagrams)
- Data modeling
- Server administration
- Backup and restore`,
        codeExamples: [
          {
            id: "mysql-3-ex1",
            title: "Workbench Features",
            description: "Navigate Workbench",
            code: { javascript: "-- Create new connection\n-- 1. Click + next to MySQL Connections\n-- 2. Enter connection name\n-- 3. Host: localhost, Port: 3306\n-- 4. Username: root\n-- 5. Test Connection\n\n-- Query Editor\n-- 1. Double-click connection\n-- 2. Enter SQL in query tab\n-- 3. Execute with lightning bolt icon" },
            explanation: "Workbench generates SQL for many operations - great for learning."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-4",
    number: 4,
    title: "phpMyAdmin",
    subtitle: "Web-based database management",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["mysql-3"],
    learningObjectives: ["Use phpMyAdmin", "Manage databases via web", "Import/export data"],
    sections: [
      {
        id: "mysql-4-1",
        title: "phpMyAdmin Basics",
        whyItMatters: "phpMyAdmin is popular web interface.",
        content: `phpMyAdmin - web interface for MySQL management.

Features:
- Browse databases and tables
- Run SQL queries
- Import/export (SQL, CSV, Excel)
- Create users and permissions
- Manage indexes and keys`,
        codeExamples: [
          {
            id: "mysql-4-ex1",
            title: "phpMyAdmin Operations",
            description: "Common tasks",
            code: { javascript: "-- Create database via UI\n-- 1. Click \"New\" in sidebar\n-- 2. Enter database name\n-- 3. Select collation (utf8mb4_general_ci)\n-- 4. Click Create\n\n-- Create table via UI\n-- 1. Click database\n-- 2. Enter table name and number of columns\n-- 3. Define columns, types, set primary key\n-- 4. Click Save" },
            explanation: "phpMyAdmin shows equivalent SQL as you work - learn by watching."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-5",
    number: 5,
    title: "MySQL Configuration",
    subtitle: "Configure server settings",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["mysql-4"],
    learningObjectives: ["Edit my.cnf/my.ini", "Tune performance settings", "Configure character set"],
    sections: [
      {
        id: "mysql-5-1",
        title: "Configuration Files",
        whyItMatters: "Proper configuration optimizes performance.",
        content: `MySQL reads config files in order:
- /etc/my.cnf (Linux)
- /etc/mysql/my.cnf
- ~/.my.cnf (user-specific)

Key settings:
- max_connections: max client connections
- innodb_buffer_pool_size: memory for data
- character-set-server: default charset
- query_cache_size: query cache (deprecated in 8.0)`,
        codeExamples: [
          {
            id: "mysql-5-ex1",
            title: "Basic Configuration",
            description: "Sample my.cnf",
            code: { javascript: "[mysqld]\n# Basic Settings\nport = 3306\ndatadir = /var/lib/mysql\nsocket = /var/lib/mysql/mysql.sock\n\n# Character Set\ncharacter-set-server = utf8mb4\ncollation-server = utf8mb4_unicode_ci\n\n# InnoDB Settings\ninnodb_buffer_pool_size = 1G\ninnodb_file_per_table = 1\n\n# Connection Settings\nmax_connections = 150\n\n# Logging\nslow_query_log = 1\nslow_query_log_file = /var/log/mysql/slow.log\nlong_query_time = 2" },
            explanation: "Restart MySQL after config changes: systemctl restart mysqld"
          }
        ]
      }
    ]
  },
  {
    id: "mysql-6",
    number: 6,
    title: "Creating Databases and Tables",
    subtitle: "Database objects",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["mysql-5"],
    learningObjectives: ["CREATE DATABASE", "CREATE TABLE", "Define columns and types"],
    sections: [
      {
        id: "mysql-6-1",
        title: "Creating Databases",
        whyItMatters: "Databases are containers for tables.",
        content: `Create database with charset specification. Always use utf8mb4 for proper Unicode support.`,
        codeExamples: [
          {
            id: "mysql-6-ex1",
            title: "Database Creation",
            description: "Create databases properly",
            code: { javascript: "-- Basic database\nCREATE DATABASE shop;\n\n-- With charset and collation\nCREATE DATABASE shop\n  CHARACTER SET utf8mb4\n  COLLATE utf8mb4_unicode_ci;\n\n-- Show create statement\nSHOW CREATE DATABASE shop;\n\n-- Use database\nUSE shop;\n\n-- Show current database\nSELECT DATABASE();" },
            explanation: "Always specify charset at creation - changing later is complex."
          }
        ]
      },
      {
        id: "mysql-6-2",
    title: "Creating Tables",
    whyItMatters: "Tables store your data.",
    content: `Create tables with proper types, keys, and constraints. Use InnoDB engine for transactions.`,
    codeExamples: [
      {
        id: "mysql-6-ex2",
        title: "Table Creation",
        description: "Create tables with proper structure",
        code: { javascript: "-- Users table\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) NOT NULL UNIQUE,\n  email VARCHAR(100) NOT NULL,\n  password_hash CHAR(60) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\n-- Products table\nCREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(200) NOT NULL,\n  description TEXT,\n  price DECIMAL(10,2) NOT NULL,\n  stock INT DEFAULT 0,\n  category_id INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\n-- Show tables\nSHOW TABLES;\n\n-- Describe table structure\nDESC users;\nDESCRIBE products;" },
            explanation: "AUTO_INCREMENT generates unique IDs. TIMESTAMP auto-updates on row changes."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-7",
    number: 7,
    title: "MySQL Data Types",
    subtitle: "Choosing correct types",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 50,
    prerequisites: ["mysql-6"],
    learningObjectives: ["Understand numeric types", "Use string types correctly", "Choose appropriate date types"],
    sections: [
      {
        id: "mysql-7-1",
        title: "Numeric Types",
        whyItMatters: "Proper types save space and ensure accuracy.",
        content: `MySQL numeric types:
- INT: -2B to 2B (4 bytes)
- BIGINT: Huge numbers (8 bytes)
- DECIMAL: Exact precision (for money)
- FLOAT/DOUBLE: Approximate (scientific)`,
        codeExamples: [
          {
            id: "mysql-7-ex1",
            title: "Numeric Examples",
            description: "Use correct numeric types",
            code: { javascript: "-- For IDs: INT AUTO_INCREMENT\nid INT AUTO_INCREMENT PRIMARY KEY\n\n-- For money: DECIMAL (exact)\nprice DECIMAL(10,2)  -- 10 digits, 2 after decimal\n-- Stores: 12345.67\n\n-- For scientific: FLOAT\ntemperature FLOAT\n\n-- For counts: INT\nview_count INT DEFAULT 0\n\n-- For flags: TINYINT (0/1)\nis_active TINYINT(1) DEFAULT 1" },
            explanation: "DECIMAL stores exact values - never use FLOAT for money!"
          }
        ]
      },
      {
        id: "mysql-7-2",
    title: "String Types",
        whyItMatters: "Text storage choices affect performance.",
        content: `String types:
- CHAR: Fixed length (0-255)
- VARCHAR: Variable length (0-65535)
- TEXT: Large text (64KB-4GB)
- ENUM: One of fixed values
- SET: Multiple of fixed values`,
        codeExamples: [
          {
            id: "mysql-7-ex2",
            title: "String Examples",
            description: "Choose string types wisely",
            code: { javascript: "-- Fixed length (gender, status)\ngender CHAR(1)  -- 'M' or 'F'\n\n-- Variable length (names, emails)\nusername VARCHAR(50)\nemail VARCHAR(100)\n\n-- Large text (descriptions, posts)\ndescription TEXT\ncontent MEDIUMTEXT\n\n-- Enum for fixed options\nstatus ENUM('pending', 'active', 'inactive')\n\n-- Set for multiple options\ntags SET('php', 'mysql', 'javascript')" },
            explanation: "VARCHAR uses 1-2 extra bytes for length. CHAR pads to fixed length."
          }
        ]
      },
      {
        id: "mysql-7-3",
        title: "Date and Time Types",
        whyItMatters: "Handle dates correctly.",
        content: `Date/time types:
- DATE: 'YYYY-MM-DD'
- TIME: 'HH:MM:SS'
- DATETIME: 'YYYY-MM-DD HH:MM:SS'
- TIMESTAMP: Unix timestamp (32-bit)
- YEAR: 'YYYY'`,
        codeExamples: [
          {
            id: "mysql-7-ex3",
            title: "Date Examples",
            description: "Use appropriate date types",
            code: { javascript: "-- Date only (birthdays)\nbirth_date DATE\n\n-- Date and time (created/updated)\ncreated_at DATETIME DEFAULT CURRENT_TIMESTAMP\n\n-- Timestamp (auto-tracks changes)\nupdated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n\n-- Time only (durations)\nduration TIME\n\n-- Year only\ngraduation_year YEAR\n\n-- Example values:\n-- DATE: '2024-05-16'\n-- DATETIME: '2024-05-16 14:30:00'\n-- TIMESTAMP: 1715868000" },
            explanation: "TIMESTAMP stores as Unix time - limited to 2038. Use DATETIME for wider range."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-8",
    number: 8,
    title: "CRUD Operations",
    subtitle: "Create, Read, Update, Delete",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["mysql-7"],
    learningObjectives: ["INSERT data", "SELECT with filters", "UPDATE and DELETE safely"],
    sections: [
      {
        id: "mysql-8-1",
        title: "INSERT Data",
        whyItMatters: "Add data to tables.",
        content: `Insert rows into tables. Specify columns or use DEFAULT for optional values.`,
        codeExamples: [
          {
            id: "mysql-8-ex1",
            title: "Insert Examples",
            description: "Add data to tables",
            code: { javascript: "-- Insert single row\nINSERT INTO users (username, email, password_hash)\nVALUES ('john', 'john@example.com', 'hashed_pw');\n\n-- Insert multiple rows\nINSERT INTO products (name, price, stock) VALUES\n  ('Laptop', 999.99, 50),\n  ('Mouse', 29.99, 100),\n  ('Keyboard', 79.99, 75);\n\n-- Insert with DEFAULT\nINSERT INTO users (username, email) VALUES\n  ('jane', 'jane@example.com');\n  -- created_at uses DEFAULT CURRENT_TIMESTAMP\n\n-- LAST_INSERT_ID() gets auto-increment value\nSELECT LAST_INSERT_ID();" },
            explanation: "Omitting columns uses their DEFAULT values or NULL if allowed."
          }
        ]
      },
      {
        id: "mysql-8-2",
        title: "SELECT Data",
        whyItMatters: "Retrieve data from database.",
        content: `Basic SELECT with filtering, ordering, and limiting.`,
        codeExamples: [
          {
            id: "mysql-8-ex2",
            title: "Select Examples",
            description: "Query data",
            code: { javascript: "-- Select all columns\nSELECT * FROM users;\n\n-- Select specific columns\nSELECT username, email FROM users;\n\n-- Filter with WHERE\nSELECT * FROM products WHERE price > 50;\n\n-- Multiple conditions\nSELECT * FROM users WHERE status = 'active' AND created_at > '2024-01-01';\n\n-- Order by\nSELECT * FROM products ORDER BY price DESC;\n\n-- Limit results\nSELECT * FROM products ORDER BY price LIMIT 10;" },
            explanation: "Always use WHERE with UPDATE/DELETE to avoid accidents!"
          }
        ]
      },
      {
        id: "mysql-8-3",
        title: "UPDATE and DELETE",
        whyItMatters: "Modify and remove data.",
        content: `Update existing rows or delete them. Always use WHERE unless you mean to affect all rows.`,
        codeExamples: [
          {
            id: "mysql-8-ex3",
            title: "Update and Delete",
            description: "Modify data",
            code: { javascript: "-- Update single row\nUPDATE users SET email = 'new@example.com' WHERE id = 1;\n\n-- Update multiple columns\nUPDATE users SET\n  username = 'newuser',\n  status = 'active'\nWHERE id = 1;\n\n-- Update with calculation\nUPDATE products SET stock = stock - 1 WHERE id = 5;\n\n-- Delete single row\nDELETE FROM users WHERE id = 1;\n\n-- Delete with condition\nDELETE FROM users WHERE status = 'inactive' AND created_at < '2023-01-01';\n\n-- DELETE ALL (careful!)\nDELETE FROM users;  -- deletes everything!\n\n-- TRUNCATE (faster, resets auto_increment)\nTRUNCATE users;" },
            explanation: "Test UPDATE/DELETE with SELECT first: SELECT * WHERE <your conditions>"
          }
        ]
      }
    ]
  },
  {
    id: "mysql-9",
    number: 9,
    title: "Importing and Exporting Data",
    subtitle: "Move data in/out",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["mysql-8"],
    learningObjectives: ["Import SQL files", "Export to CSV", "Use mysqldump"],
    sections: [
      {
        id: "mysql-9-1",
        title: "mysqldump",
        whyItMatters: "Backups are essential.",
        content: `mysqldump exports database to SQL file. Use for backups and migrations.`,
        codeExamples: [
          {
            id: "mysql-9-ex1",
            title: "mysqldump Examples",
            description: "Export databases",
            code: { javascript: "-- Dump single database\nmysqldump -u root -p mydb > mydb.sql\n\n-- Dump multiple databases\nmysqldump -u root -p --databases db1 db2 > dbs.sql\n\n-- Dump all databases\nmysqldump -u root -p --all-databases > all_dbs.sql\n\n-- Dump specific tables\nmysqldump -u root -p mydb users orders > tables.sql\n\n-- Export without data (schema only)\nmysqldump -u root -p --no-data mydb > schema.sql\n\n-- Import\nmysql -u root -p mydb < mydb.sql" },
            explanation: "Schedule regular backups with cron: 0 2 * * * mysqldump..."
          }
        ]
      },
      {
        id: "mysql-9-2",
        title: "CSV Import/Export",
        whyItMatters: "Work with spreadsheet data.",
        content: `Import/export CSV files for Excel, Google Sheets compatibility.`,
        codeExamples: [
          {
            id: "mysql-9-ex2",
            title: "CSV Examples",
            description: "CSV operations",
            code: { javascript: "-- Export to CSV\nSELECT * INTO OUTFILE '/tmp/users.csv'\nFIELDS TERMINATED BY ','\nENCLOSED BY '\"'\nLINES TERMINATED BY '\\n'\nFROM users;\n\n-- Import from CSV\nLOAD DATA INFILE '/tmp/users.csv'\nINTO TABLE users\nFIELDS TERMINATED BY ','\nENCLOSED BY '\"'\nLINES TERMINATED BY '\\n'\nIGNORE 1 ROWS\n(username, email, status);\n\n-- phpMyAdmin: Import/Export tabs\n-- Workbench: Right-click table -> Export/Import Wizard" },
            explanation: "Ensure MySQL has file privileges and proper secure_file_priv setting."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-10",
    number: 10,
    title: "MySQL Users and Permissions",
    subtitle: "Secure access control",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["mysql-9"],
    learningObjectives: ["Create users", "Grant/revoke privileges", "Secure root account"],
    sections: [
      {
        id: "mysql-10-1",
        title: "Creating Users",
        whyItMatters: "Manage who can access what.",
        content: `Create users with specific access. Use strong passwords and limit by host.`,
        codeExamples: [
          {
            id: "mysql-10-ex1",
            title: "User Creation",
            description: "Create and manage users",
            code: { javascript: "-- Create user (MySQL 8.0)\nCREATE USER 'john'@'localhost' IDENTIFIED BY 'strong_password';\n\n-- Create user with limited host\nCREATE USER 'app'@'%' IDENTIFIED BY 'app_pass';\n  -- % = any host (less secure)\n\n-- Change password\nALTER USER 'john'@'localhost' IDENTIFIED BY 'new_password';\n\n-- Drop user\nDROP USER 'john'@'localhost';\n\n-- Show current users\nSELECT user, host FROM mysql.user;" },
            explanation: "MySQL user = username + host combination. 'john'@'localhost' differs from 'john'@'%'"
          }
        ]
      },
      {
        id: "mysql-10-2",
        title: "Granting Permissions",
        whyItMatters: "Control what users can do.",
        content: `Grant specific privileges to users. Follow principle of least privilege.`,
        codeExamples: [
          {
            id: "mysql-10-ex2",
            title: "Grant Examples",
            description: "Give appropriate permissions",
            code: { javascript: "-- Grant all on database\nGRANT ALL ON shop.* TO 'john'@'localhost';\n\n-- Grant specific privileges\nGRANT SELECT, INSERT, UPDATE ON shop.products TO 'app'@'localhost';\n\n-- Grant with limit\nGRANT SELECT ON shop.* TO 'reader'@'%';\n\n-- Show grants for user\nSHOW GRANTS FOR 'john'@'localhost';\n\n-- Revoke privileges\nREVOKE INSERT ON shop.* FROM 'john'@'localhost';\n\n-- Common privileges:\n-- ALL PRIVILEGES - everything\n-- SELECT, INSERT, UPDATE, DELETE - basic CRUD\n-- CREATE, DROP - modify schema\n-- INDEX - create indexes" },
            explanation: "Application users typically need SELECT, INSERT, UPDATE, DELETE - not DDL."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-11",
    number: 11,
    partLabel: "Part 2: Querying and Data Operations",
    title: "SELECT Queries",
    subtitle: "Advanced SELECT",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["mysql-10"],
    learningObjectives: ["Use aliases", "Use DISTINCT", "Use expressions in SELECT"],
    sections: [
      {
        id: "mysql-11-1",
        title: "Advanced SELECT Features",
        whyItMatters: "Powerful SELECT is key to MySQL mastery.",
        content: `SELECT can do calculations, transformations, and aggregations.`,
        codeExamples: [
          {
            id: "mysql-11-ex1",
            title: "Advanced Select",
            description: "Powerful SELECT operations",
            code: { javascript: "-- Column aliases\nSELECT\n  username AS user_name,\n  email AS contact_email\nFROM users;\n\n-- Calculations\nSELECT\n  name,\n  price,\n  price * 1.20 AS price_with_tax\nFROM products;\n\n-- DISTINCT removes duplicates\nSELECT DISTINCT category FROM products;\n\n-- Concat strings\nSELECT CONCAT(username, ' (', email, ')') AS user_info FROM users;\n\n-- Case expressions\nSELECT\n  name,\n  price,\n  CASE\n    WHEN price > 500 THEN 'Expensive'\n    WHEN price > 50 THEN 'Medium'\n    ELSE 'Cheap'\n  END AS price_category\nFROM products;\n\n-- Mathematical functions\nSELECT\n  ROUND(price, 2) AS rounded,\n  FLOOR(price) AS floored,\n  CEIL(price) AS ceiled\nFROM products;" },
            explanation: "SELECT can transform, calculate, and format data before returning it."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-12",
    number: 12,
    title: "WHERE Conditions",
    subtitle: "Filtering data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["mysql-11"],
    learningObjectives: ["Use comparison operators", "Combine conditions with AND/OR", "Use IN and BETWEEN"],
    sections: [
      {
        id: "mysql-12-1",
        title: "WHERE Clauses",
        whyItMatters: "Filter exactly what you need.",
        content: `WHERE filters rows based on conditions. Supports multiple operators.`,
        codeExamples: [
          {
            id: "mysql-12-ex1",
            title: "WHERE Examples",
            description: "Filter with WHERE",
            code: { javascript: "-- Comparison operators\nSELECT * FROM products WHERE price > 100;\nSELECT * FROM users WHERE status = 'active';\n\n-- Not equal\nSELECT * FROM products WHERE category <> 'electronics';\n\n-- IN operator\nSELECT * FROM users WHERE country IN ('USA', 'UK', 'Canada');\n\n-- BETWEEN (inclusive)\nSELECT * FROM products WHERE price BETWEEN 50 AND 200;\n\n-- LIKE for patterns\nSELECT * FROM users WHERE email LIKE '%@gmail.com';\nSELECT * FROM products WHERE name LIKE 'Laptop%';\n\n-- Multiple conditions\nSELECT * FROM products\nWHERE category = 'electronics' AND price < 1000;\n\nSELECT * FROM users\nWHERE status = 'active' OR status = 'pending';" },
            explanation: "Use parentheses to control AND/OR precedence in complex conditions."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-13",
    number: 13,
    title: "ORDER BY and LIMIT",
    subtitle: "Sort and limit results",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["mysql-12"],
    learningObjectives: ["Sort with ORDER BY", "Limit results with LIMIT", "Pagination"],
    sections: [
      {
        id: "mysql-13-1",
        title: "Sort and Limit",
        whyItMatters: "Control result order and size.",
        content: `ORDER BY sorts results. LIMIT restricts how many rows returned.`,
        codeExamples: [
          {
            id: "mysql-13-ex1",
            title: "ORDER BY and LIMIT",
            description: "Sort and limit examples",
            code: { javascript: "-- Sort ascending (default)\nSELECT * FROM products ORDER BY price;\n\n-- Sort descending\nSELECT * FROM products ORDER BY price DESC;\n\n-- Sort by multiple columns\nSELECT * FROM products ORDER BY category, price DESC;\n\n-- Limit results\nSELECT * FROM products LIMIT 10;\n\n-- Offset (pagination)\nSELECT * FROM products LIMIT 10 OFFSET 20;\n\n-- Shorthand for pagination\nSELECT * FROM products LIMIT 20, 10;\n  -- skip 20, take 10\n\n-- Top N per category (MySQL specific)\nSELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rn\n  FROM products\n) t WHERE rn <= 3;" },
            explanation: "LIMIT is useful for pagination and getting top-N results."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-14",
    number: 14,
    title: "Aggregate Functions",
    subtitle: "Count, sum, average",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-13"],
    learningObjectives: ["Use COUNT, SUM, AVG", "Use MIN, MAX", "Combine with GROUP BY"],
    sections: [
      {
        id: "mysql-14-1",
        title: "Aggregation Basics",
        whyItMatters: "Summarize data with aggregates.",
        content: `Aggregate functions calculate values across rows. Ignore NULL except COUNT(*).`,
        codeExamples: [
          {
            id: "mysql-14-ex1",
            title: "Aggregate Examples",
            description: "Use aggregate functions",
            code: { javascript: "-- Count all rows\nSELECT COUNT(*) FROM orders;\n\n-- Count non-null values\nSELECT COUNT(shipped_at) FROM orders;\n\n-- Sum values\nSELECT SUM(total) FROM orders;\n\n-- Average\nSELECT AVG(price) FROM products;\n\n-- Min and max\nSELECT MIN(price) AS cheapest, MAX(price) AS most_expensive FROM products;\n\n-- Multiple aggregates\nSELECT\n  COUNT(*) AS total_orders,\n  SUM(total) AS total_revenue,\n  AVG(total) AS avg_order_value\nFROM orders;\n\n-- With WHERE\nSELECT COUNT(*) FROM users WHERE status = 'active';" },
            explanation: "Aggregate functions return single values from many rows."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-15",
    number: 15,
    title: "GROUP BY and HAVING",
    subtitle: "Group and filter groups",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-14"],
    learningObjectives: ["Group with GROUP BY", "Filter groups with HAVING", "Understand difference from WHERE"],
    sections: [
      {
        id: "mysql-15-1",
        title: "Grouping",
        whyItMatters: "Aggregate per category.",
        content: `GROUP BY creates groups for aggregate functions. HAVING filters groups (WHERE filters rows).`,
        codeExamples: [
          {
            id: "mysql-15-ex1",
            title: "GROUP BY Examples",
            description: "Group data",
            code: { javascript: "-- Sales by category\nSELECT category, COUNT(*) as product_count, AVG(price) as avg_price\nFROM products\nGROUP BY category;\n\n-- Orders by user\nSELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent\nFROM orders\nGROUP BY user_id;\n\n-- Multiple columns\nSELECT category, status, COUNT(*)\nFROM products\nGROUP BY category, status;\n\n-- Filter groups with HAVING\nSELECT user_id, SUM(total) as total\nFROM orders\nGROUP BY user_id\nHAVING SUM(total) > 1000;\n\n-- WHERE vs HAVING\n-- WHERE filters rows BEFORE grouping\n-- HAVING filters groups AFTER grouping" },
            explanation: "All non-aggregated columns in SELECT must be in GROUP BY."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-16",
    number: 16,
    title: "Joins in MySQL",
    subtitle: "Combine tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["mysql-15"],
    learningObjectives: ["INNER JOIN", "LEFT/RIGHT JOIN", "Multiple joins"],
    sections: [
      {
        id: "mysql-16-1",
        title: "Join Types",
        whyItMatters: "Relate data across tables.",
        content: `Joins combine rows from multiple tables based on relationships.`,
        codeExamples: [
          {
            id: "mysql-16-ex1",
            title: "Join Examples",
            description: "Use joins",
            code: { javascript: "-- INNER JOIN - only matching rows\nSELECT o.id, u.username, o.total\nFROM orders o\nINNER JOIN users u ON o.user_id = u.id;\n\n-- LEFT JOIN - all from left, matches from right\nSELECT u.username, o.id AS order_id\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n\n-- RIGHT JOIN - all from right\nSELECT u.username, o.id\nFROM users u\nRIGHT JOIN orders o ON u.id = o.user_id;\n\n-- Multiple joins\nSELECT\n  o.id,\n  u.username,\n  p.name AS product,\n  oi.quantity\nFROM orders o\nJOIN users u ON o.user_id = u.id\nJOIN order_items oi ON o.id = oi.order_id\nJOIN products p ON oi.product_id = p.id;\n\n-- Self join\nSELECT\n  e.name AS employee,\n  m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;" },
            explanation: "Use table aliases (o, u) to make queries readable."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-17",
    number: 17,
    title: "Subqueries",
    subtitle: "Queries within queries",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-16"],
    learningObjectives: ["Use subqueries in WHERE", "Use subqueries in SELECT", "Correlated subqueries"],
    sections: [
      {
        id: "mysql-17-1",
        title: "Subquery Basics",
        whyItMatters: "Break complex problems into steps.",
        content: `Subqueries are nested queries. Use results of inner query in outer query.`,
        codeExamples: [
          {
            id: "mysql-17-ex1",
            title: "Subquery Examples",
            description: "Use subqueries",
            code: { javascript: "-- Subquery in WHERE\nSELECT * FROM products\nWHERE price > (SELECT AVG(price) FROM products);\n\n-- IN with subquery\nSELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders);\n\n-- NOT IN\nSELECT * FROM users\nWHERE id NOT IN (SELECT user_id FROM orders WHERE status = 'cancelled');\n\n-- Subquery in SELECT (scalar)\nSELECT\n  name,\n  price,\n  (SELECT AVG(price) FROM products) AS avg_price\nFROM products;\n\n-- Correlated subquery (references outer)\nSELECT * FROM products p1\nWHERE price > (\n  SELECT AVG(price) FROM products p2\n  WHERE p2.category = p1.category\n);" },
            explanation: "Correlated subqueries run once per row - can be slow on large tables."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-18",
    number: 18,
    title: "Views",
    subtitle: "Virtual tables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["mysql-17"],
    learningObjectives: ["Create views", "Use views in queries", "Manage views"],
    sections: [
      {
        id: "mysql-18-1",
        title: "View Basics",
        whyItMatters: "Simplify complex queries.",
        content: `Views are saved SELECT queries. They don't store data - just the query definition.`,
        codeExamples: [
          {
            id: "mysql-18-ex1",
            title: "View Examples",
            description: "Create and use views",
            code: { javascript: "-- Create view\nCREATE VIEW active_users AS\nSELECT id, username, email, created_at\nFROM users\nWHERE status = 'active';\n\n-- Use view like table\nSELECT * FROM active_users;\n\n-- Create complex view\nCREATE VIEW order_summary AS\nSELECT\n  o.id,\n  u.username,\n  o.total,\n  o.status,\n  o.created_at\nFROM orders o\nJOIN users u ON o.user_id = u.id;\n\n-- Show views\nSHOW FULL TABLES WHERE Table_type = 'VIEW';\n\n-- Drop view\nDROP VIEW active_users;\n\n-- Update view (sometimes possible)\nCREATE OR REPLACE VIEW active_users AS\nSELECT id, username, email, created_at, status\nFROM users\nWHERE status IN ('active', 'pending');" },
            explanation: "Views improve security by limiting column access and simplify complex queries."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-19",
    number: 19,
    title: "Stored Procedures",
    subtitle: "Server-side code",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["mysql-18"],
    learningObjectives: ["Create stored procedures", "Use parameters", "Control flow in procedures"],
    sections: [
      {
        id: "mysql-19-1",
        title: "Stored Procedure Basics",
        whyItMatters: "Execute code on server.",
        content: `Stored procedures are precompiled SQL code stored in database. They can take parameters and return results.`,
        codeExamples: [
          {
            id: "mysql-19-ex1",
            title: "Procedure Examples",
            description: "Create stored procedures",
            code: { javascript: "-- Basic procedure\nDELIMITER //\nCREATE PROCEDURE get_user_count()\nBEGIN\n  SELECT COUNT(*) AS user_count FROM users;\nEND //\nDELIMITER ;\n\n-- Call procedure\nCALL get_user_count();\n\n-- Procedure with parameters\nDELIMITER //\nCREATE PROCEDURE get_user_by_id(IN user_id INT)\nBEGIN\n  SELECT * FROM users WHERE id = user_id;\nEND //\nDELIMITER ;\n\nCALL get_user_by_id(5);\n\n-- Procedure with OUT parameter\nDELIMITER //\nCREATE PROCEDURE count_by_status(IN status VARCHAR(20), OUT cnt INT)\nBEGIN\n  SELECT COUNT(*) INTO cnt FROM users WHERE status = status;\nEND //\nDELIMITER ;\n\nCALL count_by_status('active', @total);\nSELECT @total;" },
            explanation: "DELIMITER changes statement separator to allow semicolons in procedure body."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-20",
    number: 20,
    title: "Functions",
    subtitle: "User-defined functions",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-19"],
    learningObjectives: ["Create functions", "Return values", "Use in queries"],
    sections: [
      {
        id: "mysql-20-1",
        title: "Function Basics",
        whyItMatters: "Create reusable calculations.",
        content: `User-defined functions (UDFs) return values and can be used in expressions.`,
        codeExamples: [
          {
            id: "mysql-20-ex1",
            title: "Function Examples",
            description: "Create functions",
            code: { javascript: "-- Simple function returning value\nDELIMITER //\nCREATE FUNCTION get_tax(amount DECIMAL(10,2))\nRETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n  RETURN amount * 0.10;\nEND //\nDELIMITER ;\n\n-- Use in query\nSELECT name, price, get_tax(price) AS tax FROM products;\n\n-- Function with IF\nDELIMITER //\nCREATE FUNCTION discount_price(price DECIMAL(10,2), percent INT)\nRETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n  IF percent > 0 THEN\n    RETURN price * (1 - percent/100);\n  END IF;\n  RETURN price;\nEND //\nDELIMITER ;\n\nSELECT name, price, discount_price(price, 20) AS sale_price FROM products;\n\n-- Show functions\nSHOW FUNCTION STATUS WHERE Db = 'shop';\n\n-- Drop function\nDROP FUNCTION get_tax;" },
            explanation: "DETERMINISTIC means same inputs always return same outputs - required for certain features."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-21",
    number: 21,
    title: "Triggers",
    subtitle: "Automatic actions",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-20"],
    learningObjectives: ["Create triggers", "Automate actions on changes", "Track changes"],
    sections: [
      {
        id: "mysql-21-1",
        title: "Trigger Basics",
        whyItMatters: "Automate actions on data changes.",
        content: `Triggers run automatically when INSERT, UPDATE, or DELETE occurs on a table.`,
        codeExamples: [
          {
            id: "mysql-21-ex1",
            title: "Trigger Examples",
            description: "Create triggers",
            code: { javascript: "-- Create audit table\nCREATE TABLE audit_log (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  action VARCHAR(50),\n  table_name VARCHAR(50),\n  user_id INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Trigger on INSERT\nDELIMITER //\nCREATE TRIGGER after_user_insert\nAFTER INSERT ON users\nFOR EACH ROW\nBEGIN\n  INSERT INTO audit_log (action, table_name, user_id)\n  VALUES ('INSERT', 'users', NEW.id);\nEND //\nDELIMITER ;\n\n-- Trigger on UPDATE\nDELIMITER //\nCREATE TRIGGER after_user_update\nAFTER UPDATE ON users\nFOR EACH ROW\nBEGIN\n  INSERT INTO audit_log (action, table_name, user_id)\n  VALUES ('UPDATE', 'users', NEW.id);\nEND //\nDELIMITER ;\n\n-- NEW and OLD reference new/old row values\n-- Use OLD.id for DELETE triggers" },
            explanation: "Triggers can cause performance issues - use sparingly and test thoroughly."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-22",
    number: 22,
    title: "Events Scheduler",
    subtitle: "Scheduled tasks",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-21"],
    learningObjectives: ["Enable event scheduler", "Create events", "Schedule tasks"],
    sections: [
      {
        id: "mysql-22-1",
        title: "Events Basics",
        whyItMatters: "Schedule automatic tasks.",
        content: `MySQL can run scheduled tasks using the Event Scheduler.`,
        codeExamples: [
          {
            id: "mysql-22-ex1",
            title: "Event Examples",
            description: "Schedule events",
            code: { javascript: "-- Enable event scheduler\nSET GLOBAL event_scheduler = ON;\n\n-- Create event (runs once)\nCREATE EVENT cleanup_old_sessions\nON SCHEDULE AT '2024-12-31 23:59:00'\nDO\n  DELETE FROM sessions WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);\n\n-- Recurring event\nCREATE EVENT daily_cleanup\nON SCHEDULE EVERY 1 DAY\nDO\n  DELETE FROM logs WHERE created_at < DATE_SUB(NOW(), INTERVAL 7 DAY);\n\n-- Show events\nSHOW EVENTS;\n\n-- Disable/enable event\nALTER EVENT daily_cleanup DISABLE;\nALTER EVENT daily_cleanup ENABLE;\n\n-- Drop event\nDROP EVENT daily_cleanup;" },
            explanation: "Event scheduler must be enabled. Check with SHOW VARIABLES LIKE 'event_scheduler';"
          }
        ]
      }
    ]
  },
  {
    id: "mysql-23",
    number: 23,
    partLabel: "Part 3: MySQL Database Design",
    title: "Primary and Foreign Keys",
    subtitle: "Data relationships",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-22"],
    learningObjectives: ["Define primary keys", "Create foreign keys", "Enforce referential integrity"],
    sections: [
      {
        id: "mysql-23-1",
        title: "Key Types",
        whyItMatters: "Keys are foundation of relational databases.",
        content: `Primary keys uniquely identify rows. Foreign keys create relationships between tables.`,
        codeExamples: [
          {
            id: "mysql-23-ex1",
            title: "Key Examples",
            description: "Create keys",
            code: { javascript: "-- Primary key with AUTO_INCREMENT\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) NOT NULL\n);\n\n-- Composite primary key\nCREATE TABLE order_items (\n  order_id INT,\n  product_id INT,\n  quantity INT,\n  PRIMARY KEY (order_id, product_id)\n);\n\n-- Foreign key\nCREATE TABLE orders (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT NOT NULL,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n    ON DELETE CASCADE\n    ON UPDATE CASCADE\n);" },
            explanation: "ON DELETE CASCADE deletes child rows when parent is deleted."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-24",
    number: 24,
    title: "Relationships",
    subtitle: "One-to-one, one-to-many, many-to-many",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-23"],
    learningObjectives: ["Implement relationship types", "Use junction tables", "Design schema"],
    sections: [
      {
        id: "mysql-24-1",
        title: "Relationship Implementation",
        whyItMatters: "Proper relationships ensure data integrity.",
        content: `Implement relationships using foreign keys and junction tables.`,
        codeExamples: [
          {
            id: "mysql-24-ex1",
            title: "Relationship Examples",
            description: "Implement relationships",
            code: { javascript: "-- One-to-many (users -> orders)\n-- In orders table:\nFOREIGN KEY (user_id) REFERENCES users(id)\n\n-- One-to-one (users -> profiles)\nCREATE TABLE profiles (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT UNIQUE,  -- UNIQUE enforces one-to-one\n  bio TEXT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);\n\n-- Many-to-many (students <-> courses)\nCREATE TABLE enrollments (\n  student_id INT,\n  course_id INT,\n  enrolled_at DATE,\n  PRIMARY KEY (student_id, course_id),\n  FOREIGN KEY (student_id) REFERENCES students(id),\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n);" },
            explanation: "Many-to-many requires junction table with two foreign keys."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-25",
    number: 25,
    title: "Normalization",
    subtitle: "Organize schema properly",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-24"],
    learningObjectives: ["Understand normal forms", "Apply normalization", "Avoid anomalies"],
    sections: [
      {
        id: "mysql-25-1",
        title: "Normalization Forms",
        whyItMatters: "Normalized schema prevents data anomalies.",
        content: `Normalization reduces redundancy through normal forms: 1NF, 2NF, 3NF.`,
        codeExamples: [
          {
            id: "mysql-25-ex1",
            title: "Normalization Examples",
            description: "Apply normalization",
            code: { javascript: "-- 1NF: Atomic values, no repeating groups\n-- Bad: phone_numbers column with \"123,456,789\"\n-- Good: separate phone_numbers table\n\n-- 2NF: No partial dependencies\n-- All non-key attributes depend on entire primary key\n\n-- 3NF: No transitive dependencies\n-- Non-key attributes depend only on primary key\n\n-- Example: Normalized user tables\n-- users: id, username (PK)\n-- user_profiles: user_id (FK), bio, avatar  -- depends on user id only\n-- user_stats: user_id (FK), login_count, last_login  -- depends on user id only" },
            explanation: "Denormalization can improve read performance but adds complexity."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-26",
    number: 26,
    title: "Constraints",
    subtitle: "Enforce data rules",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["mysql-25"],
    learningObjectives: ["Use NOT NULL, UNIQUE", "Create CHECK constraints", "Use DEFAULT values"],
    sections: [
      {
        id: "mysql-26-1",
        title: "Constraint Types",
        whyItMatters: "Constraints ensure data validity at database level.",
        content: `MySQL supports multiple constraint types for data integrity.`,
        codeExamples: [
          {
            id: "mysql-26-ex1",
            title: "Constraint Examples",
            description: "Use constraints",
            code: { javascript: "-- Table with multiple constraints\nCREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  sku VARCHAR(50) UNIQUE,\n  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),\n  stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),\n  category ENUM('electronics', 'clothing', 'books') NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Add constraint to existing table\nALTER TABLE products\nADD CONSTRAINT chk_price_positive CHECK (price > 0);\n\n-- Drop constraint\nALTER TABLE products DROP CHECK chk_price_positive;" },
            explanation: "CHECK constraints enforced in MySQL 8.0.16+"
          }
        ]
      }
    ]
  },
  {
    id: "mysql-27",
    number: 27,
    title: "Indexes",
    subtitle: "Speed up queries",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-26"],
    learningObjectives: ["Create indexes", "Understand index types", "Choose columns to index"],
    sections: [
      {
        id: "mysql-27-1",
        title: "Index Basics",
        whyItMatters: "Indexes dramatically improve query speed.",
        content: `Indexes are data structures that allow fast lookups.`,
        codeExamples: [
          {
            id: "mysql-27-ex1",
            title: "Index Examples",
            description: "Create and use indexes",
            code: { javascript: "-- Single column index\nCREATE INDEX idx_products_price ON products(price);\n\n-- Composite index\nCREATE INDEX idx_orders_user_date ON orders(user_id, created_at);\n\n-- Unique index\nCREATE UNIQUE INDEX idx_users_email ON users(email);\n\n-- Prefix index (for long strings)\nCREATE INDEX idx_products_name ON products(name(50));\n\n-- Show indexes\nSHOW INDEX FROM products;\n\n-- Analyze query usage\nEXPLAIN SELECT * FROM products WHERE price > 100;\n\n-- Drop index\nDROP INDEX idx_products_price ON products;" },
            explanation: "Composite indexes can use leftmost prefix columns."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-28",
    number: 28,
    title: "Composite Indexes",
    subtitle: "Multi-column optimization",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-27"],
    learningObjectives: ["Design composite indexes", "Understand column order", "Optimize queries"],
    sections: [
      {
        id: "mysql-28-1",
        title: "Composite Index Design",
        whyItMatters: "Order of columns matters in composite indexes.",
        content: `Leftmost prefix rule: index can be used for queries on first N columns.`,
        codeExamples: [
          {
            id: "mysql-28-ex1",
            title: "Composite Index Examples",
            description: "Design composite indexes",
            code: { javascript: "-- Index on (status, created_at)\n-- Used for: WHERE status = 'active'\n-- Used for: WHERE status = 'active' AND created_at > '2024-01-01'\n-- NOT used for: WHERE created_at > '2024-01-01'\n\nCREATE INDEX idx_orders_status_date ON orders(status, created_at);\n\n-- For ORDER BY optimization\nCREATE INDEX idx_products_category_price ON products(category, price);\n-- Used for: ORDER BY category, price\n-- Used for: ORDER BY category (only first column)\n\n-- Best practice: put equality columns first, then range/sort\nCREATE INDEX idx_user_status_date ON users(status, created_at DESC);" },
            explanation: "Query optimizer decides whether to use index based on selectivity."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-29",
    number: 29,
    title: "Fulltext Search",
    subtitle: "Text search capabilities",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-28"],
    learningObjectives: ["Create FULLTEXT indexes", "Use MATCH...AGAINST", "Search text efficiently"],
    sections: [
      {
        id: "mysql-29-1",
        title: "Fulltext Search Basics",
        whyItMatters: "Fulltext search for natural language queries.",
        content: `MySQL provides FULLTEXT search for text columns in InnoDB and MyISAM.`,
        codeExamples: [
          {
            id: "mysql-29-ex1",
            title: "Fulltext Examples",
            description: "Implement fulltext search",
            code: { javascript: "-- Create FULLTEXT index (InnoDB/MyISAM)\nCREATE TABLE articles (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  title VARCHAR(200),\n  content TEXT,\n  FULLTEXT (title, content)\n) ENGINE=InnoDB;\n\n-- Search with FULLTEXT\nSELECT * FROM articles\nWHERE MATCH(title, content) AGAINST('database optimization' IN NATURAL LANGUAGE MODE);\n\n-- Boolean mode search\nSELECT * FROM articles\nWHERE MATCH(title, content) AGAINST('+mysql -oracle' IN BOOLEAN MODE);\n\n-- With relevance score\nSELECT title, content,\n  MATCH(title, content) AGAINST('database' IN NATURAL LANGUAGE MODE) AS relevance\nFROM articles\nWHERE MATCH(title, content) AGAINST('database');" },
            explanation: "Fulltext index only works with CHAR, VARCHAR, TEXT columns."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-30",
    number: 30,
    title: "JSON Columns in MySQL",
    subtitle: "Store JSON data",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-29"],
    learningObjectives: ["Use JSON data type", "Query JSON with functions", "Index JSON paths"],
    sections: [
      {
        id: "mysql-30-1",
        title: "JSON Type",
        whyItMatters: "JSON columns allow flexible schema.",
        content: `MySQL supports JSON data type with validation and functions.`,
        codeExamples: [
          {
            id: "mysql-30-ex1",
            title: "JSON Examples",
            description: "Work with JSON",
            code: { javascript: "-- Create table with JSON column\nCREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  attributes JSON\n);\n\n-- Insert JSON\nINSERT INTO products (name, attributes) VALUES\n('Laptop', '{\"color\": \"silver\", \"ram\": \"16GB\", \"storage\": \"512GB\"}'),\n('Phone', '{\"color\": \"black\", \"os\": \"Android\"}');\n\n-- Query JSON\nSELECT name, attributes->>'$.color' AS color FROM products;\nSELECT JSON_EXTRACT(attributes, '$.ram') AS ram FROM products;\n\n-- Update JSON\nUPDATE products SET attributes = JSON_SET(attributes, '$.warranty', '2 years') WHERE id = 1;\n\n-- Index JSON path (virtual column)\nALTER TABLE products ADD COLUMN ram VARCHAR(20) GENERATED ALWAYS AS (attributes->>'$.ram');\nCREATE INDEX idx_ram ON products(ram);" },
            explanation: "JSON column stores validated JSON - invalid JSON rejected."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-31",
    number: 31,
    title: "ENUM and SET Types",
    subtitle: "Custom data types",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["mysql-30"],
    learningObjectives: ["Use ENUM type", "Use SET type", "Choose when to use"],
    sections: [
      {
        id: "mysql-31-1",
        title: "ENUM and SET",
        whyItMatters: "Constrain column to specific values.",
        content: `ENUM for single value from list, SET for multiple values.`,
        codeExamples: [
          {
            id: "mysql-31-ex1",
            title: "ENUM/SET Examples",
            description: "Use enumerated types",
            code: { javascript: "-- ENUM: one value from list\nCREATE TABLE orders (\n  status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',\n  priority ENUM('low', 'medium', 'high') DEFAULT 'medium'\n);\n\n-- SET: multiple values from list\nCREATE TABLE user_preferences (\n  user_id INT,\n  notifications SET('email', 'sms', 'push', 'newsletter')\n);\n\n-- Insert ENUM\nINSERT INTO orders (status) VALUES ('pending'), ('shipped');\n\n-- Insert SET\nINSERT INTO user_preferences (user_id, notifications) VALUES (1, 'email,push');\n\n-- Advantages: type checking, readable, compact\n-- Disadvantages: add values requires ALTER TABLE" },
            explanation: "ENUM stored as integers internally - space efficient."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-32",
    number: 32,
    title: "Partitioning",
    subtitle: "Split large tables",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-31"],
    learningObjectives: ["Understand partitioning", "Create partitioned tables", "Choose partition strategy"],
    sections: [
      {
        id: "mysql-32-1",
        title: "Partitioning Basics",
        whyItMatters: "Partitioning improves performance and manageability of large tables.",
        content: `Partition splits table into separate physical pieces based on partition key.`,
        codeExamples: [
          {
            id: "mysql-32-ex1",
            title: "Partitioning Examples",
            description: "Create partitions",
            code: { javascript: "-- Range partitioning by date\nCREATE TABLE logs (\n  id INT AUTO_INCREMENT,\n  created_at DATETIME,\n  message TEXT,\n  PRIMARY KEY (id, created_at)\n) PARTITION BY RANGE (YEAR(created_at)) (\n  PARTITION p2023 VALUES LESS THAN (2024),\n  PARTITION p2024 VALUES LESS THAN (2025),\n  PARTITION p_future VALUES LESS THAN MAXVALUE\n);\n\n-- List partitioning\nCREATE TABLE employees (\n  id INT,\n  department VARCHAR(20),\n  salary INT\n) PARTITION BY LIST (department) (\n  PARTITION it VALUES IN ('IT', 'Engineering'),\n  PARTITION sales VALUES IN ('Sales', 'Marketing'),\n  PARTITION hr VALUES IN ('HR', 'Admin')\n);\n\n-- Hash partitioning\nCREATE TABLE orders (\n  id INT,\n  user_id INT,\n  total DECIMAL(10,2)\n) PARTITION BY HASH(user_id) PARTITIONS 4;\n\n-- Show partitions\nSELECT PARTITION_NAME, TABLE_ROWS\nFROM INFORMATION_SCHEMA.PARTITIONS\nWHERE TABLE_NAME = 'logs';" },
            explanation: "Partition pruning: optimizer skips irrelevant partitions."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-33",
    number: 33,
    title: "Schema Optimization",
    subtitle: "Efficient schema design",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-32"],
    learningObjectives: ["Optimize schema design", "Choose data types", "Design for performance"],
    sections: [
      {
        id: "mysql-33-1",
        title: "Schema Optimization Tips",
        whyItMatters: "Well-designed schema performs better.",
        content: `Optimize schema for your access patterns.`,
        codeExamples: [
          {
            id: "mysql-33-ex1",
            title: "Schema Optimization",
            description: "Optimize schema",
            code: { javascript: "-- Use appropriate data types\n-- BAD: VARCHAR(255) for country code\n-- GOOD: CHAR(2) for country code\n-- BAD: VARCHAR(1000) for URL\n-- GOOD: VARCHAR(2083) or TEXT\n\n-- Use INT for IDs, DECIMAL for money\nprice DECIMAL(10,2) NOT NULL\n\n-- Avoid NULL when possible - add NOT NULL where applicable\nusername VARCHAR(50) NOT NULL\n\n-- Denormalize for read performance\n-- Add computed columns\ntotal_orders INT GENERATED ALWAYS AS (\n  SELECT COUNT(*) FROM orders WHERE user_id = id\n)\n\n-- Use JSON for flexible optional fields\nmetadata JSON\n\n-- Index foreign keys\nCREATE INDEX idx_order_user ON orders(user_id);" },
            explanation: "Profile your queries to see what schema changes help most."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-34",
    number: 34,
    title: "Real-world Database Architecture",
    subtitle: "Complete system design",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 65,
    prerequisites: ["mysql-33"],
    learningObjectives: ["Design complete system", "Apply best practices", "Handle complexity"],
    sections: [
      {
        id: "mysql-34-1",
        title: "Ecommerce Architecture",
        whyItMatters: "Build production-quality systems.",
        content: `Design complete ecommerce database with proper relationships and optimization.`,
        codeExamples: [
          {
            id: "mysql-34-ex1",
            title: "Ecommerce Schema",
            description: "Complete system",
            code: { javascript: "-- Users with profile\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  password_hash CHAR(60) NOT NULL,\n  status ENUM('active', 'suspended') DEFAULT 'active',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_status (status),\n  INDEX idx_created (created_at)\n) ENGINE=InnoDB;\n\n-- Products with categories\nCREATE TABLE categories (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL,\n  parent_id INT NULL,\n  FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE SET NULL\n) ENGINE=InnoDB;\n\nCREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  category_id INT NOT NULL,\n  name VARCHAR(200) NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  stock INT DEFAULT 0,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (category_id) REFERENCES categories(id),\n  INDEX idx_category (category_id),\n  INDEX idx_price (price)\n) ENGINE=InnoDB;\n\n-- Orders with status tracking\nCREATE TABLE orders (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT NOT NULL,\n  status ENUM('pending','paid','shipped','delivered') DEFAULT 'pending',\n  total DECIMAL(10,2) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id),\n  INDEX idx_user (user_id),\n  INDEX idx_status (status)\n) ENGINE=InnoDB;" },
            explanation: "Indexes on foreign keys and frequently filtered columns."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-35",
    number: 35,
    partLabel: "Part 4: Performance & Optimization",
    title: "Query Optimization",
    subtitle: "Make queries faster",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["mysql-34"],
    learningObjectives: ["Optimize slow queries", "Use EXPLAIN", "Apply best practices"],
    sections: [
      {
        id: "mysql-35-1",
        title: "Query Optimization Basics",
        whyItMatters: "Slow queries impact user experience.",
        content: `Optimize queries by understanding execution and applying best practices.`,
        codeExamples: [
          {
            id: "mysql-35-ex1",
            title: "Optimization Examples",
            description: "Optimize queries",
            code: { javascript: "-- BAD: SELECT * when you only need columns\nSELECT * FROM orders WHERE id = 1;\n\n-- GOOD: Select only needed columns\nSELECT id, status, total FROM orders WHERE id = 1;\n\n-- BAD: Function on indexed column\nSELECT * FROM orders WHERE YEAR(created_at) = 2024;\n\n-- GOOD: Use range on column\nSELECT * FROM orders\nWHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';\n\n-- BAD: No index on WHERE column\nSELECT * FROM products WHERE category = 'electronics';\n\n-- GOOD: Add index\nCREATE INDEX idx_products_category ON products(category);\n\n-- Use LIMIT for pagination\nSELECT * FROM orders ORDER BY id LIMIT 10 OFFSET 20;\n\n-- Avoid OR in WHERE - use UNION instead\nSELECT * FROM users WHERE status = 'active'\nUNION\nSELECT * FROM users WHERE created_at > '2024-01-01';" },
            explanation: "Profile queries with EXPLAIN before optimizing."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-36",
    number: 36,
    title: "EXPLAIN Statement",
    subtitle: "Analyze query plans",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 55,
    prerequisites: ["mysql-35"],
    learningObjectives: ["Read EXPLAIN output", "Identify issues", "Optimize accordingly"],
    sections: [
      {
        id: "mysql-36-1",
        title: "EXPLAIN Analysis",
        whyItMatters: "EXPLAIN shows how MySQL executes query.",
        content: `Use EXPLAIN and EXPLAIN FORMAT=JSON to understand query execution.`,
        codeExamples: [
          {
            id: "mysql-36-ex1",
            title: "EXPLAIN Examples",
            description: "Analyze queries",
            code: { javascript: "-- Basic EXPLAIN\nEXPLAIN SELECT * FROM orders WHERE user_id = 1;\n\n-- Key columns: possible_keys, key (index used)\n-- type: ALL (full scan), ref (index used), const (constant lookup)\n-- rows: estimated rows examined\n\n-- EXPLAIN with formatted output\nEXPLAIN FORMAT=JSON\nSELECT o.*, u.username\nFROM orders o\nJOIN users u ON o.user_id = u.id\nWHERE o.status = 'pending';\n\n-- Key things to look for:\n-- type: ALL = full table scan (BAD)\n-- type: const = primary key lookup (GOOD)\n-- key: NULL = no index used (BAD)\n-- rows: high = reading many rows (BAD)\n\n-- Analyze actual execution\nEXPLAIN ANALYZE\nSELECT * FROM orders WHERE user_id = 1;" },
            explanation: "Go through EXPLAIN output systematically to find bottlenecks."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-37",
    number: 37,
    title: "Slow Query Logs",
    subtitle: "Find slow queries",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-36"],
    learningObjectives: ["Enable slow query log", "Analyze slow queries", "Optimize identified queries"],
    sections: [
      {
        id: "mysql-37-1",
        title: "Slow Query Log",
        whyItMatters: "Find queries that need optimization.",
        content: `Slow query log records queries exceeding long_query_time.`,
        codeExamples: [
          {
            id: "mysql-37-ex1",
            title: "Slow Query Examples",
            description: "Configure and use slow query log",
            code: { javascript: "-- Enable slow query log\nSET GLOBAL slow_query_log = 'ON';\nSET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';\nSET GLOBAL long_query_time = 2;  -- seconds\nSET GLOBAL log_queries_not_using_indexes = 'ON';\n\n-- In my.cnf:\n-- [mysqld]\n-- slow_query_log = 1\n-- slow_query_log_file = /var/log/mysql/slow.log\n-- long_query_time = 2\n\n-- View slow queries\nSELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;\n\n-- Use mysqldumpslow to summarize\nmysqldumpslow -s t /var/log/mysql/slow.log\nmysqldumpslow -s c /var/log/mysql/slow.log  -- count\nmysqldumpslow -g \"pattern\" /var/log/mysql/slow.log  -- grep" },
            explanation: "Analyze slow queries weekly to find optimization opportunities."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-38",
    number: 38,
    title: "Index Tuning",
    subtitle: "Optimize indexes",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-37"],
    learningObjectives: ["Analyze index usage", "Add/drop indexes", "Use composite indexes wisely"],
    sections: [
      {
        id: "mysql-38-1",
        title: "Index Tuning Tips",
        whyItMatters: "Proper indexes are crucial for performance.",
        content: `Regular index maintenance improves performance.`,
        codeExamples: [
          {
            id: "mysql-38-ex1",
            title: "Index Tuning Examples",
            description: "Tune indexes",
            code: { javascript: "-- Find unused indexes\nSELECT * FROM performance_schema.objects_summary_global_by_type\nWHERE OBJECT_SCHEMA = 'shop' AND OBJECT_NAME = 'products';\n\n-- Check index statistics\nSHOW INDEX FROM products;\n\n-- Use optimizer hints\nSELECT /*+ USE_INDEX(idx_products_category) */ *\nFROM products WHERE category = 'electronics';\n\n-- Composite index considerations\n-- index (a, b, c) can be used for:\n-- WHERE a = ? AND b = ? AND c = ?\n-- WHERE a = ? AND b = ?\n-- WHERE a = ?\n-- But NOT for WHERE b = ? OR WHERE c = ?\n\n-- Drop unused indexes\nALTER TABLE products DROP INDEX idx_unused;" },
            explanation: "Too many indexes slow down writes - balance read performance vs write cost."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-39",
    number: 39,
    title: "InnoDB Engine",
    subtitle: "Default storage engine",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-38"],
    learningObjectives: ["Understand InnoDB", "Configure InnoDB settings", "Use transactions"],
    sections: [
      {
        id: "mysql-39-1",
        title: "InnoDB Basics",
        whyItMatters: "InnoDB is default engine for production.",
        content: `InnoDB provides ACID transactions, row-level locking, and crash recovery.`,
        codeExamples: [
          {
            id: "mysql-39-ex1",
            title: "InnoDB Examples",
            description: "Configure and use InnoDB",
            code: { javascript: "-- Show engine\nSHOW ENGINES;\n\n-- Create table with InnoDB (default)\nCREATE TABLE users (...) ENGINE=InnoDB;\n\n-- Key InnoDB settings in my.cnf:\n-- innodb_buffer_pool_size = 1G  -- 70% of RAM\n-- innodb_log_file_size = 256M\n-- innodb_flush_log_at_trx_commit = 1  -- durability\n-- innodb_file_per_table = 1\n\n-- InnoDB status\nSHOW ENGINE INNODB STATUS;\n\n-- Monitor InnoDB metrics\nSELECT * FROM information_schema.INNODB_METRICS;\n\n-- Check tablespace\nSELECT * FROM information_schema.INNODB_TABLESPACES;" },
            explanation: "InnoDB buffer pool is key - set to 70% of available RAM."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-40",
    number: 40,
    title: "MyISAM Engine",
    subtitle: "Legacy storage engine",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 15,
    xpReward: 35,
    prerequisites: ["mysql-39"],
    learningObjectives: ["Understand MyISAM", "Know when to use", "Understand limitations"],
    sections: [
      {
        id: "mysql-40-1",
        title: "MyISAM Basics",
        whyItMatters: "MyISAM still used in some scenarios.",
        content: `MyISAM: table-level locking, full-text indexes, no transactions.`,
        codeExamples: [
          {
            id: "mysql-40-ex1",
            title: "MyISAM Examples",
            description: "Use MyISAM",
            code: { javascript: "-- Create MyISAM table\nCREATE TABLE logs (\n  id INT,\n  message TEXT,\n  created_at DATETIME\n) ENGINE=MyISAM;\n\n-- Fulltext index (MyISAM only before MySQL 5.6)\nCREATE FULLTEXT INDEX idx_message ON logs(message);\n\n-- Check table status\nSHOW TABLE STATUS LIKE 'logs';\n\n-- When to use MyISAM:\n-- Full-text search (historically)\n-- Read-heavy workloads (no updates)\n-- Small tables with simple queries\n\n-- Disadvantages:\n-- No transactions\n-- Table-level locking (concurrency issue)\n-- No crash recovery\n-- No foreign key support" },
            explanation: "Use InnoDB for most cases - MyISAM is legacy."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-41",
    number: 41,
    title: "Transactions",
    subtitle: "Atomic operations",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-40"],
    learningObjectives: ["Use transactions", "Understand isolation levels", "Handle rollbacks"],
    sections: [
      {
        id: "mysql-41-1",
        title: "Transaction Basics",
        whyItMatters: "Transactions ensure data consistency.",
        content: `Transactions group operations that either all succeed or all fail.`,
        codeExamples: [
          {
            id: "mysql-41-ex1",
            title: "Transaction Examples",
            description: "Use transactions",
            code: { javascript: "-- Start transaction\nSTART TRANSACTION;\n\n-- Multiple operations\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Commit (make permanent)\nCOMMIT;\n\n-- Or rollback (undo all)\nROLLBACK;\n\n-- Auto-commit mode (default)\nSET autocommit = 0;  -- disable auto-commit\n-- Now explicitly COMMIT needed\n\n-- Savepoints (partial rollback)\nSAVEPOINT point1;\nROLLBACK TO SAVEPOINT point1;\n\n-- Example with error handling\nSTART TRANSACTION;\nBEGIN;\nUPDATE inventory SET stock = stock - 1 WHERE product_id = 5;\nINSERT INTO orders (product_id, quantity) VALUES (5, 1);\nIF error THEN ROLLBACK; ELSE COMMIT; END IF;" },
            explanation: "Keep transactions short to reduce locking."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-42",
    number: 42,
    title: "ACID Principles",
    subtitle: "Transaction properties",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-41"],
    learningObjectives: ["Understand ACID", "How InnoDB ensures ACID", "Configure for durability"],
    sections: [
      {
        id: "mysql-42-1",
        title: "ACID Properties",
        whyItMatters: "ACID ensures reliable database operations.",
        content: `ACID: Atomicity, Consistency, Isolation, Durability.`,
        codeExamples: [
          {
            id: "mysql-42-ex1",
            title: "ACID Examples",
            description: "ACID in action",
            code: { javascript: "-- Atomicity: all or nothing\n-- If any statement fails, entire transaction rolls back\n\n-- Consistency: valid state\n-- Constraints, triggers, foreign keys enforce consistency\n-- Database goes from one valid state to another\n\n-- Isolation: concurrent transactions\n-- Isolation levels control visibility:\nSET TRANSACTION ISOLATION LEVEL\n  READ UNCOMMITTED | READ COMMITTED\n  | REPEATABLE READ | SERIALIZABLE;\n\n-- Durability: committed data survives crashes\n-- innodb_flush_log_at_trx_commit controls durability:\n-- 1: Flush to disk on commit (default, safest)\n-- 2: Flush to OS cache on commit\n-- 0: Write to log every second" },
            explanation: "Higher isolation = more consistency but more locking."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-43",
    number: 43,
    title: "Locking",
    subtitle: "Handle concurrency",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-42"],
    learningObjectives: ["Understand locking", "Use explicit locks", "Avoid deadlocks"],
    sections: [
      {
        id: "mysql-43-1",
        title: "Locking Basics",
        whyItMatters: "Locks prevent concurrent issues.",
        content: `MySQL uses locks at table and row level. InnoDB uses row-level locking.`,
        codeExamples: [
          {
            id: "mysql-43-ex1",
            title: "Locking Examples",
            description: "Use locks",
            code: { javascript: "-- Explicit lock (table)\nLOCK TABLES users READ;\nLOCK TABLES users WRITE;\n-- Do operations\nUNLOCK TABLES;\n\n-- Select for update (row lock)\nSTART TRANSACTION;\nSELECT * FROM accounts WHERE id = 1 FOR UPDATE;\n-- Other transactions blocked from updating this row\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;\n\n-- Lock wait timeout\nSET innodb_lock_wait_timeout = 50;  -- seconds\n\n-- Avoid deadlocks:\n-- 1. Access tables in consistent order\n-- 2. Keep transactions short\n-- 3. Use lower isolation level if possible\n\n-- View locks\nSELECT * FROM information_schema.INNODB_LOCKS;\nSELECT * FROM information_schema.INNODB_LOCK_WAITS;" },
            explanation: "Deadlocks happen when two transactions hold locks the other needs."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-44",
    number: 44,
    title: "Caching",
    subtitle: "Query cache and buffer pool",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-43"],
    learningObjectives: ["Understand query cache", "Configure buffer pool", "Use query cache effectively"],
    sections: [
      {
        id: "mysql-44-1",
        title: "Caching Basics",
        whyItMatters: "Cache improves performance significantly.",
        content: `MySQL 8.0 removed query cache. Buffer pool is key cache.`,
        codeExamples: [
          {
            id: "mysql-44-ex1",
            title: "Caching Examples",
            description: "Configure caching",
            code: { javascript: "-- Note: Query cache removed in MySQL 8.0\n-- Use application-level caching instead (Redis, Memcached)\n\n-- Buffer pool (key InnoDB cache)\nSHOW STATUS LIKE 'Innodb_buffer_pool%';\n\n-- Set buffer pool size (in my.cnf)\n-- innodb_buffer_pool_size = 2G  -- 70% of RAM\n\n-- Pre-load data into buffer pool\nSET GLOBAL innodb_buffer_pool_load_at_startup = ON;\n\n-- Query cache stats (MySQL 5.7)\nSHOW STATUS LIKE 'Qcache%';\n\n-- Application-level caching:\n-- Redis for session data\n-- Memcached for frequently accessed queries\n-- CDN for static content" },
            explanation: "Application caches (Redis) often more effective than DB caching."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-45",
    number: 45,
    title: "Connection Pooling",
    subtitle: "Manage connections",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-44"],
    learningObjectives: ["Understand connection pooling", "Configure connection pool", "Scale connections"],
    sections: [
      {
        id: "mysql-45-1",
        title: "Connection Pooling",
        whyItMatters: "Connection pooling reduces overhead.",
        content: `Reuse database connections instead of creating new ones.`,
        codeExamples: [
          {
            id: "mysql-45-ex1",
            title: "Connection Pool Examples",
            description: "Configure connection pool",
            code: { javascript: "-- MySQL max connections\nSHOW VARIABLES LIKE 'max_connections';\n\n-- Set max connections\nSET GLOBAL max_connections = 200;\n\n-- Connection pool in application:\n-- MySQL Connector/J (Java):\nDataSource ds = new MysqlDataSource();\nds.setUrl(\"jdbc:mysql://localhost:3306/shop\");\nds.setUser(\"root\");\nds.setPassword(\"pass\");\n\n-- PHP PDO (persistent connections):\n$dsn = 'mysql:host=localhost;dbname=shop';\n$pdo = new PDO($dsn, 'root', 'pass', [\n  PDO::ATTR_PERSISTENT => true\n]);\n\n-- HikariCP (Java high-performance)\nHikariConfig config = new HikariConfig();\nconfig.setMaximumPoolSize(10);\nconfig.setMinimumIdle(5);" },
            explanation: "Connection pool manages pool of reusable connections."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-46",
    number: 46,
    title: "Scaling MySQL",
    subtitle: "Handle growth",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-45"],
    learningObjectives: ["Scale vertically", "Scale horizontally", "Use read replicas"],
    sections: [
      {
        id: "mysql-46-1",
        title: "Scaling Strategies",
        whyItMatters: "Single server has limits.",
        content: `Scale MySQL as data and traffic grow.`,
        codeExamples: [
          {
            id: "mysql-46-ex1",
            title: "Scaling Examples",
            description: "Scale MySQL",
            code: { javascript: "-- Vertical scaling: better hardware\n-- More CPU, RAM, faster disks (SSD)\n-- Optimize queries first\n\n-- Horizontal scaling: more servers\n-- Read replicas for read-heavy workloads\n-- Sharding for write-heavy workloads\n\n-- Read replica setup:\n-- Master: handles writes\n-- Slave(s): handle reads, async replication\n-- Application: send reads to slaves, writes to master\n\n-- Sharding:\n-- Split data across servers\n-- By user_id range, hash, or geography\n-- More complex but allows unlimited scale\n\n-- Proxy for load balancing:\n-- MySQL Proxy, HAProxy, MaxScale\n-- Routes queries to appropriate server" },
            explanation: "Start with query optimization and vertical scaling before horizontal."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-47",
    number: 47,
    partLabel: "Part 5: Security & Administration",
    title: "User Management",
    subtitle: "Manage MySQL users",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-46"],
    learningObjectives: ["Create users", "Manage authentication", "Set resource limits"],
    sections: [
      {
        id: "mysql-47-1",
        title: "User Management Basics",
        whyItMatters: "Secure access control starts with users.",
        content: `Create and manage MySQL users with proper authentication.`,
        codeExamples: [
          {
            id: "mysql-47-ex1",
            title: "User Management Examples",
            description: "Manage users",
            code: { javascript: "-- Create user with password\nCREATE USER 'app'@'localhost' IDENTIFIED BY 'SecurePass123!';\n\n-- Create user with authentication plugin\nCREATE USER 'admin'@'%' IDENTIFIED WITH caching_sha2_password BY 'pass';\n\n-- Require SSL\nCREATE USER 'secure'@'%' IDENTIFIED BY 'pass' REQUIRE SSL;\n\n-- Set resource limits\nCREATE USER 'limited'@'localhost' IDENTIFIED BY 'pass'\n  WITH MAX_QUERIES_PER_HOUR 100\n       MAX_UPDATES_PER_HOUR 50\n       MAX_CONNECTIONS_PER_HOUR 10;\n\n-- Change password\nALTER USER 'app'@'localhost' IDENTIFIED BY 'newpassword';\n\n-- Lock/unlock user\nALTER USER 'suspended'@'localhost' ACCOUNT LOCK;\nALTER USER 'active'@'localhost' ACCOUNT UNLOCK;" },
            explanation: "MySQL 8.0 uses caching_sha2_password by default."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-48",
    number: 48,
    title: "Privileges and Roles",
    subtitle: "Access control",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-47"],
    learningObjectives: ["Grant privileges", "Create roles", "Use privilege inheritance"],
    sections: [
      {
        id: "mysql-48-1",
        title: "Privilege Management",
        whyItMatters: "Grant minimum necessary privileges.",
        content: `Use roles to simplify privilege management in MySQL 8.0.`,
        codeExamples: [
          {
            id: "mysql-48-ex1",
            title: "Privilege Examples",
            description: "Manage privileges",
            code: { javascript: "-- Grant privileges\nGRANT SELECT, INSERT, UPDATE, DELETE ON shop.* TO 'app'@'localhost';\n\n-- Grant specific column\nGRANT SELECT(id, name, price) ON shop.products TO 'reader'@'localhost';\n\n-- Create role\nCREATE ROLE 'read_only';\nGRANT SELECT ON shop.* TO 'read_only';\n\nCREATE ROLE 'app_user';\nGRANT SELECT, INSERT, UPDATE, DELETE ON shop.* TO 'app_user';\n\n-- Assign role to user\nCREATE USER 'dev'@'localhost' IDENTIFIED BY 'pass';\nGRANT 'app_user' TO 'dev'@'localhost';\nSET DEFAULT ROLE 'app_user' FOR 'dev'@'localhost';\n\n-- Activate role (in session)\nSET ROLE 'app_user';\n\n-- Show grants\nSHOW GRANTS FOR 'app'@'localhost';\nSHOW GRANTS FOR 'app'@'localhost' USING 'app_user';" },
            explanation: "Use roles for easier privilege management at scale."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-49",
    number: 49,
    title: "SQL Injection Prevention",
    subtitle: "Secure queries",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 55,
    prerequisites: ["mysql-48"],
    learningObjectives: ["Understand SQL injection", "Use prepared statements", "Validate input"],
    sections: [
      {
        id: "mysql-49-1",
        title: "SQL Injection Prevention",
        whyItMatters: "SQL injection is top web vulnerability.",
        content: `Prevent SQL injection by using parameterized queries.`,
        codeExamples: [
          {
            id: "mysql-49-ex1",
            title: "Injection Prevention Examples",
            description: "Prevent SQL injection",
            code: { javascript: "-- VULNERABLE (never do this!)\n-- userInput = \"'; DROP TABLE users; --\"\n-- query = \"SELECT * FROM users WHERE name = '\" + userInput + \"'\"\n\n-- SAFE: Use parameterized queries\n-- PHP PDO\n$stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id');\n$stmt->execute(['id' => $user_id]);\n\n-- Python\ncursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))\n\n-- Java PreparedStatement\nString sql = \"SELECT * FROM users WHERE id = ?\";\nPreparedStatement stmt = conn.prepareStatement(sql);\nstmt.setInt(1, userId);\n\n-- Also validate input\nif (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {\n  die('Invalid username');\n}" },
            explanation: "Never concatenate user input into SQL strings."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-50",
    number: 50,
    title: "Secure Backups",
    subtitle: "Backup safely",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-49"],
    learningObjectives: ["Backup databases securely", "Encrypt backups", "Test restores"],
    sections: [
      {
        id: "mysql-50-1",
        title: "Backup Security",
        whyItMatters: "Backups must be secure.",
        content: `Secure your backup process and files.`,
        codeExamples: [
          {
            id: "mysql-50-ex1",
            title: "Backup Examples",
            description: "Secure backups",
            code: { javascript: "-- Backup with credentials\nmysqldump -u root -p'password' shop > backup.sql\n\n-- Compress backup\nmysqldump shop | gzip > shop_$(date +%Y%m%d).sql.gz\n\n-- Encrypt backup\nmysqldump shop | gzip | openssl enc -aes-256-cbc -salt -out backup.enc\n\n-- Encrypt with gpg\ngzip -c shop.sql | gpg -c -o shop.sql.gpg\n\n-- Secure backup file permissions\nchmod 600 backup.sql\nchown mysql:mysql backup.sql\n\n-- Cloud backup with encryption first\nmysqldump shop | openssl enc -aes-256-cbc | aws s3 cp - s3://bucket/backup.sql.enc\n\n-- Test restore on non-production server" },
            explanation: "Never store backups on same server as database."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-51",
    number: 51,
    title: "Replication",
    subtitle: "Data duplication",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 55,
    prerequisites: ["mysql-50"],
    learningObjectives: ["Understand replication", "Set up replication", "Monitor replication"],
    sections: [
      {
        id: "mysql-51-1",
        title: "Replication Basics",
        whyItMatters: "Replication provides redundancy and scale.",
        content: `MySQL replication copies data from master to slaves.`,
        codeExamples: [
          {
            id: "mysql-51-ex1",
            title: "Replication Examples",
            description: "Set up replication",
            code: { javascript: "-- On master: enable binary logging\n-- [mysqld]\nlog-bin=mysql-bin\nserver-id=1\nbinlog-do-db=shop\n\n-- Create replication user\nCREATE USER 'repl'@'%' IDENTIFIED BY 'replpass';\nGRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';\n\n-- Get master status\nSHOW MASTER STATUS;\n-- Binary Log File: mysql-bin.000001\n-- Position: 1234\n\n-- On slave: configure\n-- [mysqld]\nserver-id=2\nrelay-log=relay-bin\n\n-- Start replication\nCHANGE MASTER TO\n  MASTER_HOST='master.server.com',\n  MASTER_USER='repl',\n  MASTER_PASSWORD='replpass',\n  MASTER_LOG_FILE='mysql-bin.000001',\n  MASTER_LOG_POS=1234;\n\nSTART SLAVE;\n\n-- Check status\nSHOW SLAVE STATUS\\G" },
            explanation: "Replication enables read scaling and high availability."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-52",
    number: 52,
    title: "Master-Slave Setup",
    subtitle: "Configure replication",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-51"],
    learningObjectives: ["Configure master", "Configure slave", "Verify replication"],
    sections: [
      {
        id: "mysql-52-1",
        title: "Master-Slave Configuration",
        whyItMatters: "Proper setup ensures replication works.",
        content: `Detailed master-slave replication configuration.`,
        codeExamples: [
          {
            id: "mysql-52-ex1",
            title: "Master-Slave Examples",
            description: "Full setup",
            code: { javascript: "-- Master my.cnf:\n[mysqld]\nlog-bin=mysql-bin\nserver-id=1\nbinlog-format=ROW  -- for GTID\ngtid-mode=ON\nenforce-gtid-consistency=1\n\n-- Slave my.cnf:\n[mysqld]\nserver-id=2\nlog-replica-updates=1\nread-only=1\nrelay-log=relay-bin\ngtid-mode=ON\nenforce-gtid-consistency=1\n\n-- With GTID (recommended)\nCHANGE MASTER TO\n  MASTER_AUTO_POSITION=1,\n  MASTER_HOST='master',\n  MASTER_USER='repl',\n  MASTER_PASSWORD='pass';\n\n-- Skip replication errors\nSET GLOBAL sql_slave_skip_counter = 1;\nSTART SLAVE;\n\n-- Or skip specific transaction\nSET GTID_NEXT='transaction_id';\nBEGIN; COMMIT;\nSET GTID_NEXT='AUTOMATIC';" },
            explanation: "GTID makes replication more reliable and easier to manage."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-53",
    number: 53,
    title: "Failover Systems",
    subtitle: "High availability",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-52"],
    learningObjectives: ["Implement failover", "Use HA tools", "Ensure continuity"],
    sections: [
      {
        id: "mysql-53-1",
        title: "Failover Basics",
        whyItMatters: "Minimize downtime with failover.",
        content: `Implement automatic failover for high availability.`,
        codeExamples: [
          {
            id: "mysql-53-ex1",
            title: "Failover Examples",
            description: "Configure failover",
            code: { javascript: "-- Manual failover steps:\n1. Promote slave to master\n2. Update application connection\n3. Point other slaves to new master\n\n-- MySQL Router (automatic failover)\n-- Install mysql-router\nmysqlrouter --bootstrap root@master:3306\n\n-- Keepalived for VIP\n-- Master:\nvrrp_instance VI_1 {\n  state MASTER\n  virtual_ipaddress 192.168.1.100\n}\n\n-- Backup:\nvrrp_instance VI_1 {\n  state BACKUP\n  virtual_ipaddress 192.168.1.100\n}\n\n-- Orchestrator for automatic failover\n-- orchestrator -config config.json\n-- Auto-detects failures, promotes new master" },
            explanation: "Test failover regularly - don't wait for production failure."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-54",
    number: 54,
    title: "Monitoring MySQL",
    subtitle: "Track performance",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-53"],
    learningObjectives: ["Use monitoring tools", "Set up alerts", "Track metrics"],
    sections: [
      {
        id: "mysql-54-1",
        title: "Monitoring Basics",
        whyItMatters: "Monitor to catch issues early.",
        content: `Monitor MySQL with built-in and external tools.`,
        codeExamples: [
          {
            id: "mysql-54-ex1",
            title: "Monitoring Examples",
            description: "Monitor MySQL",
            code: { javascript: "-- Built-in status\nSHOW GLOBAL STATUS;\nSHOW PROCESSLIST;\n\n-- Key metrics\n-- Connections: Threads_connected\n-- Queries: Questions, Com_select\n-- InnoDB: Innodb_rows_read, Innodb_buffer_pool_reads\n\n-- Performance schema\nSELECT * FROM performance_schema.events_statements_summary_by_digest;\n\n-- MySQL Enterprise Monitor\n-- Prometheus + mysqld_exporter\n-- Datadog, New Relic\n\n-- Custom monitoring query\nSELECT \n  NOW() as timestamp,\n  (SELECT COUNT(*) FROM information_schema.processlist) as connections,\n  (SELECT SUM(IF(command='Sleep',1,0)) FROM information_schema.processlist) as idle,\n  (SELECT COUNT(*) FROM information_schema.processlist WHERE user='app') as app_connections;" },
            explanation: "Set up alerts for critical metrics (connections, slow queries)."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-55",
    number: 55,
    title: "MySQL Logs",
    subtitle: "Log management",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["mysql-54"],
    learningObjectives: ["Configure logs", "Analyze logs", "Troubleshoot issues"],
    sections: [
      {
        id: "mysql-55-1",
        title: "Log Configuration",
        whyItMatters: "Logs help diagnose problems.",
        content: `Configure and use MySQL logs for troubleshooting.`,
        codeExamples: [
          {
            id: "mysql-55-ex1",
            title: "Log Examples",
            description: "Configure logs",
            code: { javascript: "-- Enable logs in my.cnf:\n[mysqld]\n# Error log\nlog_error = /var/log/mysql/error.log\n\n# General query log\ngeneral_log = 1\ngeneral_log_file = /var/log/mysql/general.log\n\n# Slow query log\nslow_query_log = 1\nslow_query_log_file = /var/log/mysql/slow.log\nlong_query_time = 2\n\n# Binary log (for replication)\nlog-bin = /var/log/mysql/mysql-bin\n\n-- View logs\n-- Error: /var/log/mysql/error.log\n-- Tail errors: tail -f /var/log/mysql/error.log\n\n-- Rotate logs\n-- Add to my.cnf:\nmax_binlog_size = 100M\nexpire_logs_days = 7\n\n-- Or use mysqladmin flush-logs" },
            explanation: "Disable general log in production - performance impact."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-56",
    number: 56,
    title: "Disaster Recovery",
    subtitle: "Plan for disasters",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-55"],
    learningObjectives: ["Create recovery plan", "Test backups", "Handle failures"],
    sections: [
      {
        id: "mysql-56-1",
        title: "Recovery Planning",
        whyItMatters: "Be prepared for disasters.",
        content: `Plan and test disaster recovery procedures.`,
        codeExamples: [
          {
            id: "mysql-56-ex1",
            title: "Recovery Examples",
            description: "Plan recovery",
            code: { javascript: "-- Recovery time objective (RTO): how long can system be down\n-- Recovery point objective (RPO): how much data loss acceptable\n\n-- Backup strategy:\n-- Daily: mysqldump (full)\n-- Hourly: binlog backups (incremental)\n-- Off-site: copy to cloud\n\n-- Point-in-time recovery:\n-- 1. Restore last full backup\n-- 2. Apply binlogs up to point\nmysqlbinlog mysql-bin.000001 | mysql -u root -p\nmysqlbinlog --stop-datetime=\"2024-05-16 14:30:00\" binlog | mysql\n\n-- DR scenarios:\n-- Server failure: promote replica\n-- Data corruption: restore from backup\n-- Ransomware: isolated backup, rebuild\n\n-- Test regularly!\n-- Quarterly: full recovery drill\n-- Weekly: restore individual tables" },
            explanation: "Document recovery procedures - test them before you need them."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-57",
    number: 57,
    partLabel: "Part 6: MySQL with Applications",
    title: "MySQL with PHP",
    subtitle: "PHP and MySQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-56"],
    learningObjectives: ["Connect PHP to MySQL", "Use PDO", "Build CRUD apps"],
    sections: [
      {
        id: "mysql-57-1",
        title: "PHP MySQL Basics",
        whyItMatters: "PHP powers many MySQL applications.",
        content: `Connect PHP to MySQL using PDO.`,
        codeExamples: [
          {
            id: "mysql-57-ex1",
            title: "PHP Examples",
            description: "Use MySQL with PHP",
            code: { javascript: "<?php\n// PDO connection\n$host = 'localhost';\n$db   = 'shop';\n$user = 'app';\n$pass = 'password';\n$charset = 'utf8mb4';\n\n$dsn = \"mysql:host=$host;dbname=$db;charset=$charset\";\n$options = [\n  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n];\n\ntry {\n  $pdo = new PDO($dsn, $user, $pass, $options);\n} catch (PDOException $e) {\n  throw new PDOException($e->getMessage());\n}\n\n// Query with parameters\n$stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id');\n$stmt->execute(['id' => $user_id]);\n$user = $stmt->fetch();\n\n// Insert\n$stmt = $pdo->prepare('INSERT INTO users (name, email) VALUES (:name, :email)');\n$stmt->execute(['name' => $name, 'email' => $email]);\n\n// Transaction\n$pdo->beginTransaction();\ntry {\n  // operations\n  $pdo->commit();\n} catch (Exception $e) {\n  $pdo->rollBack();\n}\n?>" },
            explanation: "Always use prepared statements - prevents SQL injection."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-58",
    number: 58,
    title: "MySQL with Node.js",
    subtitle: "Node.js and MySQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-57"],
    learningObjectives: ["Connect Node.js to MySQL", "Use mysql2 package", "Handle async operations"],
    sections: [
      {
        id: "mysql-58-1",
        title: "Node.js MySQL Basics",
        whyItMatters: "Node.js is popular for web apps.",
        content: `Connect Node.js to MySQL with mysql2 package.`,
        codeExamples: [
          {
            id: "mysql-58-ex1",
            title: "Node.js Examples",
            description: "Use MySQL with Node.js",
            code: { javascript: "const mysql = require('mysql2/promise');\n\nasync function main() {\n  const connection = await mysql.createConnection({\n    host: 'localhost',\n    user: 'app',\n    password: 'password',\n    database: 'shop'\n  });\n\n  // Query\n  const [rows] = await connection.execute(\n    'SELECT * FROM users WHERE id = ?',\n    [userId]\n  );\n\n  // Insert\n  const [result] = await connection.execute(\n    'INSERT INTO users (name, email) VALUES (?, ?)',\n    [name, email]\n  );\n\n  // Transaction\n  const conn = await mysql.createConnection({...});\n  await conn.beginTransaction();\n  try {\n    await conn.execute('UPDATE accounts SET balance = ? WHERE id = ?', [amount, fromId]);\n    await conn.execute('UPDATE accounts SET balance = ? WHERE id = ?', [amount, toId]);\n    await conn.commit();\n  } catch (err) {\n    await conn.rollback();\n    throw err;\n  }\n\n  await connection.end();\n}\n\nmain();" },
            explanation: "Use connection pooling for production: mysql.createPool()"
          }
        ]
      }
    ]
  },
  {
    id: "mysql-59",
    number: 59,
    title: "MySQL with Python",
    subtitle: "Python and MySQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-58"],
    learningObjectives: ["Connect Python to MySQL", "Use mysql-connector", "Use SQLAlchemy"],
    sections: [
      {
        id: "mysql-59-1",
        title: "Python MySQL Basics",
        whyItMatters: "Python for data and backend.",
        content: `Connect Python to MySQL with mysql-connector or SQLAlchemy.`,
        codeExamples: [
          {
            id: "mysql-59-ex1",
            title: "Python Examples",
            description: "Use MySQL with Python",
            code: { javascript: "import mysql.connector\n\n# Direct connection\nconn = mysql.connector.connect(\n    host='localhost',\n    user='app',\n    password='password',\n    database='shop'\n)\ncursor = conn.cursor()\n\n# Query\ncursor.execute('SELECT * FROM users WHERE id = %s', (user_id,))\nuser = cursor.fetchone()\n\n# Insert\ncursor.execute('INSERT INTO users (name, email) VALUES (%s, %s)', (name, email))\nconn.commit()\n\n# With SQLAlchemy\nfrom sqlalchemy import create_engine\nengine = create_engine('mysql+mysqlconnector://app:password@localhost/shop')\n\nresult = engine.execute('SELECT * FROM users')\nfor row in result:\n    print(row)\n\n# With SQLAlchemy ORM\nfrom sqlalchemy.orm import sessionmaker\nSession = sessionmaker(bind=engine)\nsession = Session()\nuser = session.query(User).filter(User.id == 1).first()" },
            explanation: "SQLAlchemy provides ORM for Python - cleaner code for complex apps."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-60",
    number: 60,
    title: "MySQL with Java",
    subtitle: "Java and MySQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-59"],
    learningObjectives: ["Connect Java to MySQL", "Use JDBC", "Use connection pooling"],
    sections: [
      {
        id: "mysql-60-1",
        title: "Java MySQL Basics",
        whyItMatters: "Java is common in enterprise.",
        content: `Connect Java to MySQL with JDBC.`,
        codeExamples: [
          {
            id: "mysql-60-ex1",
            title: "Java Examples",
            description: "Use MySQL with Java",
            code: { javascript: "import java.sql.*;\n\npublic class MySQLDemo {\n  public static void main(String[] args) {\n    String url = \"jdbc:mysql://localhost:3306/shop\";\n    String user = \"app\";\n    String password = \"password\";\n\n    try (Connection conn = DriverManager.getConnection(url, user, password)) {\n      // Query with PreparedStatement\n      String sql = \"SELECT * FROM users WHERE id = ?\";\n      try (PreparedStatement stmt = conn.prepareStatement(sql)) {\n        stmt.setInt(1, userId);\n        try (ResultSet rs = stmt.executeQuery()) {\n          while (rs.next()) {\n            System.out.println(rs.getString(\"name\"));\n          }\n        }\n      }\n\n      // Insert\n      String insert = \"INSERT INTO users (name, email) VALUES (?, ?)\";\n      try (PreparedStatement stmt = conn.prepareStatement(insert)) {\n        stmt.setString(1, name);\n        stmt.setString(2, email);\n        stmt.executeUpdate();\n      }\n    } catch (SQLException e) {\n      e.printStackTrace();\n    }\n  }\n}" },
            explanation: "Use try-with-resources for automatic cleanup."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-61",
    number: 61,
    title: "MySQL with C#",
    subtitle: "C# and MySQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-60"],
    learningObjectives: ["Connect C# to MySQL", "Use MySqlConnector", "Use Entity Framework"],
    sections: [
      {
        id: "mysql-61-1",
        title: "C# MySQL Basics",
        whyItMatters: ".NET applications use MySQL.",
        content: `Connect C# to MySQL with MySqlConnector.`,
        codeExamples: [
          {
            id: "mysql-61-ex1",
            title: "C# Examples",
            description: "Use MySQL with C#",
            code: { javascript: "using MySql.Data.MySqlClient;\n\nvar connectionString = \"Server=localhost;Database=shop;Uid=app;Pwd=password;\";\n\nusing var connection = new MySqlConnection(connectionString);\nconnection.Open();\n\n// Query\nvar cmd = new MySqlCommand(\"SELECT * FROM users WHERE id = @id\", connection);\ncmd.Parameters.AddWithValue(\"@id\", userId);\nusing var reader = cmd.ExecuteReader();\nwhile (reader.Read()) {\n    Console.WriteLine(reader.GetString(\"name\"));\n}\n\n// Insert\nvar insertCmd = new MySqlCommand(\n    \"INSERT INTO users (name, email) VALUES (@name, @email)\",\n    connection);\ninsertCmd.Parameters.AddWithValue(\"@name\", name);\ninsertCmd.Parameters.AddWithValue(\"@email\", email);\ninsertCmd.ExecuteNonQuery();\n\n// With Entity Framework Core\n// Install: MySql.EntityFrameworkCore\n// In DbContext:\n// protected override void OnConfiguring(DbContextOptionsBuilder options)\n//     => options.UseMySQL(\"server=localhost;database=shop;user=app;password=password\");" },
            explanation: "Use parameterized queries to prevent SQL injection."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-62",
    number: 62,
    title: "ORM Integration",
    subtitle: "Use ORMs with MySQL",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["mysql-61"],
    learningObjectives: ["Use ORMs with MySQL", "Map entities", "Generate schemas"],
    sections: [
      {
        id: "mysql-62-1",
        title: "ORM with MySQL",
        whyItMatters: "ORMs simplify database operations.",
        content: `Use ORM frameworks with MySQL for cleaner code.`,
        codeExamples: [
          {
            id: "mysql-62-ex1",
            title: "ORM Examples",
            description: "Use ORMs",
            code: { javascript: "-- Entity Framework Core (C#)\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public decimal Price { get; set; }\n    public Category Category { get; set; }\n}\n\npublic class ShopContext : DbContext\n{\n    public DbSet<Product> Products { get; set; }\n    protected override void OnConfiguring(DbContextOptionsBuilder b)\n        => b.UseMySQL(\"connection_string\");\n}\n\n// SQLAlchemy (Python)\nfrom sqlalchemy import Column, Integer, String, ForeignKey\nfrom sqlalchemy.orm import relationship\n\nclass Product(Base):\n    __tablename__ = 'products'\n    id = Column(Integer, primary_key=True)\n    name = Column(String(200))\n    price = Column(Integer)\n    category_id = Column(Integer, ForeignKey('categories.id'))\n    category = relationship('Category')\n\n// Prisma (Node.js)\n// schema.prisma\nmodel Product {\n  id        Int     @id @default(autoincrement())\n  name      String\n  price     Int\n  category  Category @relation(fields: [categoryId], references: [id])\n  categoryId Int\n}" },
            explanation: "ORMs handle mapping and generate SQL - focus on business logic."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-63",
    number: 63,
    title: "REST APIs with MySQL",
    subtitle: "Build API backends",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-62"],
    learningObjectives: ["Build REST API", "Connect to MySQL", "Handle CRUD operations"],
    sections: [
      {
        id: "mysql-63-1",
        title: "REST API with MySQL",
        whyItMatters: "Modern apps use REST APIs.",
        content: `Build REST API with MySQL backend.`,
        codeExamples: [
          {
            id: "mysql-63-ex1",
            title: "REST API Examples",
            description: "Build REST API",
            code: { javascript: "// Express.js + MySQL\napp.get('/api/users', async (req, res) => {\n  const [rows] = await connection.execute('SELECT * FROM users');\n  res.json(rows);\n});\n\napp.get('/api/users/:id', async (req, res) => {\n  const [rows] = await connection.execute(\n    'SELECT * FROM users WHERE id = ?',\n    [req.params.id]\n  );\n  res.json(rows[0] || 404);\n});\n\napp.post('/api/users', async (req, res) => {\n  const { name, email } = req.body;\n  const [result] = await connection.execute(\n    'INSERT INTO users (name, email) VALUES (?, ?)',\n    [name, email]\n  );\n  res.status(201).json({ id: result.insertId });\n});\n\napp.put('/api/users/:id', async (req, res) => {\n  const { name, email } = req.body;\n  await connection.execute(\n    'UPDATE users SET name = ?, email = ? WHERE id = ?',\n    [name, email, req.params.id]\n  );\n  res.json({ success: true });\n});\n\napp.delete('/api/users/:id', async (req, res) => {\n  await connection.execute('DELETE FROM users WHERE id = ?', [req.params.id]);\n  res.json({ success: true });\n});" },
            explanation: "RESTful APIs use HTTP methods for CRUD operations."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-64",
    number: 64,
    title: "Authentication Systems",
    subtitle: "User authentication",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-63"],
    learningObjectives: ["Build auth system", "Hash passwords", "Use sessions/JWT"],
    sections: [
      {
        id: "mysql-64-1",
        title: "Authentication Basics",
        whyItMatters: "Secure authentication is critical.",
        content: `Implement secure authentication with MySQL.`,
        codeExamples: [
          {
            id: "mysql-64-ex1",
            title: "Auth Examples",
            description: "Build auth system",
            code: { javascript: "-- Store password hashes (NEVER plain text)\n-- Use bcrypt or Argon2\n\n-- Create users table with password hash\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  password_hash CHAR(60) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Registration\n// Hash password before storing\n$hash = password_hash($password, PASSWORD_BCRYPT);\n\n// Login\n$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');\n$stmt->execute([$email]);\n$user = $stmt->fetch();\n\nif ($user && password_verify($password, $user['password_hash'])) {\n  // Generate session or JWT\n  $_SESSION['user_id'] = $user['id'];\n}\n\n-- JWT token generation\n$payload = ['user_id' => $user['id'], 'exp' => time() + 3600];\n$token = base64_encode(json_encode(payload));\n$signature = hash_hmac('sha256', $token, $secret);\n$jwt = $token . '.' . $signature;" },
            explanation: "Never store plain-text passwords - always hash with salt."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-65",
    number: 65,
    title: "Production Deployment",
    subtitle: "Deploy MySQL apps",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["mysql-64"],
    learningObjectives: ["Deploy to production", "Configure for production", "Monitor in production"],
    sections: [
      {
        id: "mysql-65-1",
        title: "Production Deployment",
        whyItMatters: "Production requires different configuration.",
        content: `Deploy applications with MySQL in production.`,
        codeExamples: [
          {
            id: "mysql-65-ex1",
            title: "Production Examples",
            description: "Deploy to production",
            code: { javascript: "-- Production MySQL config:\n[mysqld]\ninnodb_buffer_pool_size = 4G  # 70% RAM\nmax_connections = 200\nslow_query_log = 1\nlog_error = /var/log/mysql/error.log\nbinlog_expire_logs_days = 7\n\n-- Application connection:\n-- Use environment variables\nDB_HOST=production.server.com\nDB_USER=app_user\nDB_PASSWORD=secret\n\n-- Connection pool settings:\n-- maxPoolSize: 20-50\n-- minIdle: 5-10\n-- idleTimeout: 300000\n\n-- Deploy checklist:\n-- 1. Test on staging first\n-- 2. Backup before deploy\n-- 3. Use blue-green deployment\n-- 4. Monitor error rates\n-- 5. Have rollback plan\n-- 6. Configure alerts" },
            explanation: "Production requires careful tuning and monitoring."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-66",
    number: 66,
    partLabel: "Part 7: Projects",
    title: "Project: Ecommerce MySQL Backend",
    subtitle: "Complete ecommerce database",
    difficulty: "Advanced" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["mysql-65"],
    learningObjectives: ["Design complete schema", "Handle orders and payments", "Optimize for performance"],
    sections: [
      {
        id: "mysql-66-1",
        title: "Ecommerce Schema Design",
        whyItMatters: "Build production ecommerce system.",
        content: `Complete ecommerce database with orders, products, users, payments.`,
        codeExamples: [
          {
            id: "mysql-66-ex1",
            title: "Ecommerce Project",
            description: "Complete design",
            code: { javascript: "-- Users and auth\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  password_hash CHAR(60) NOT NULL,\n  status ENUM('active','suspended') DEFAULT 'active',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_email (email)\n) ENGINE=InnoDB;\n\n-- Products with inventory\nCREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(200) NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  stock INT DEFAULT 0,\n  category_id INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (category_id) REFERENCES categories(id),\n  INDEX idx_category (category_id),\n  INDEX idx_price (price)\n) ENGINE=InnoDB;\n\n-- Orders\nCREATE TABLE orders (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT NOT NULL,\n  status ENUM('pending','paid','shipped','delivered','cancelled') DEFAULT 'pending',\n  total DECIMAL(10,2) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id),\n  INDEX idx_user (user_id),\n  INDEX idx_status (status)\n) ENGINE=InnoDB;\n\n-- Add triggers for inventory management" },
            explanation: "Add proper indexes, foreign keys, and transactions."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-67",
    number: 67,
    title: "Project: School Management System",
    subtitle: "Education database",
    difficulty: "Advanced" as const,
    estimatedMinutes: 50,
    xpReward: 90,
    prerequisites: ["mysql-66"],
    learningObjectives: ["Design school schema", "Handle enrollments", "Track grades"],
    sections: [
      {
        id: "mysql-67-1",
        title: "School System Schema",
        whyItMatters: "Build complete school management.",
        content: `Database for student management, courses, grades.`,
        codeExamples: [
          {
            id: "mysql-67-ex1",
            title: "School Project",
            description: "Complete system",
            code: { javascript: "-- Students\nCREATE TABLE students (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  first_name VARCHAR(50) NOT NULL,\n  last_name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  enrollment_date DATE,\n  status ENUM('active','graduated','suspended') DEFAULT 'active'\n) ENGINE=InnoDB;\n\n-- Courses\nCREATE TABLE courses (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  code VARCHAR(20) UNIQUE,\n  name VARCHAR(100) NOT NULL,\n  credits INT DEFAULT 3,\n  department_id INT\n) ENGINE=InnoDB;\n\n-- Enrollments\nCREATE TABLE enrollments (\n  student_id INT,\n  course_id INT,\n  semester VARCHAR(20),\n  grade DECIMAL(5,2),\n  PRIMARY KEY (student_id, course_id, semester),\n  FOREIGN KEY (student_id) REFERENCES students(id),\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n) ENGINE=InnoDB;\n\n-- Grades view for GPA calculation" },
            explanation: "Handle many-to-many between students and courses."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-68",
    number: 68,
    title: "Project: Banking Database",
    subtitle: "Financial system",
    difficulty: "Advanced" as const,
    estimatedMinutes: 50,
    xpReward: 90,
    prerequisites: ["mysql-67"],
    learningObjectives: ["Design financial schema", "Handle transactions", "Ensure data integrity"],
    sections: [
      {
        id: "mysql-68-1",
        title: "Banking Schema",
        whyItMatters: "Financial systems need precision.",
        content: `Bank database with accounts, transactions, transfers.`,
        codeExamples: [
          {
            id: "mysql-68-ex1",
            title: "Banking Project",
            description: "Complete design",
            code: { javascript: "-- Accounts\nCREATE TABLE accounts (\n  account_number VARCHAR(20) UNIQUE PRIMARY KEY,\n  account_type ENUM('checking','savings') NOT NULL,\n  balance DECIMAL(15,2) DEFAULT 0 CHECK(balance >= 0),\n  customer_id INT NOT NULL,\n  status ENUM('active','blocked','closed') DEFAULT 'active',\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\n-- Transactions\nCREATE TABLE transactions (\n  id BIGINT AUTO_INCREMENT PRIMARY KEY,\n  account_number VARCHAR(20) NOT NULL,\n  type ENUM('debit','credit','transfer_in','transfer_out') NOT NULL,\n  amount DECIMAL(15,2) NOT NULL CHECK(amount > 0),\n  description VARCHAR(255),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (account_number) REFERENCES accounts(account_number),\n  INDEX idx_account (account_number),\n  INDEX idx_date (created_at)\n) ENGINE=InnoDB;\n\n-- Use transactions for transfers:\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE account_number = 'ACC001';\nUPDATE accounts SET balance = balance + 100 WHERE account_number = 'ACC002';\nINSERT INTO transactions VALUES (...);\nCOMMIT;" },
            explanation: "Use transactions to ensure atomic transfers."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-69",
    number: 69,
    title: "Project: Social Media Database",
    subtitle: "Build social platform",
    difficulty: "Advanced" as const,
    estimatedMinutes: 50,
    xpReward: 90,
    prerequisites: ["mysql-68"],
    learningObjectives: ["Design social schema", "Handle relationships", "Scale for growth"],
    sections: [
      {
        id: "mysql-69-1",
        title: "Social Media Schema",
        whyItMatters: "Modern app backends.",
        content: `Social media database with posts, comments, likes, followers.`,
        codeExamples: [
          {
            id: "mysql-69-ex1",
            title: "Social Media Project",
            description: "Complete design",
            code: { javascript: "-- Users\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  bio VARCHAR(500),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\n-- Posts\nCREATE TABLE posts (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT NOT NULL,\n  content TEXT,\n  image_url VARCHAR(500),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id),\n  INDEX idx_user (user_id),\n  INDEX idx_date (created_at)\n) ENGINE=InnoDB;\n\n-- Likes (many-to-many)\nCREATE TABLE likes (\n  user_id INT,\n  post_id INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (user_id, post_id),\n  FOREIGN KEY (user_id) REFERENCES users(id),\n  FOREIGN KEY (post_id) REFERENCES posts(id)\n) ENGINE=InnoDB;\n\n-- Follows\nCREATE TABLE follows (\n  follower_id INT,\n  following_id INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (follower_id, following_id),\n  FOREIGN KEY (follower_id) REFERENCES users(id),\n  FOREIGN KEY (following_id) REFERENCES users(id)\n) ENGINE=InnoDB;\n\n-- Comments, shares, notifications tables..." },
            explanation: "Add proper indexes for feed queries."
          }
        ]
      }
    ]
  },
  {
    id: "mysql-70",
    number: 70,
    title: "MySQL Mastery Recap + Certificate Prep",
    subtitle: "Review and certify",
    difficulty: "Expert" as const,
    estimatedMinutes: 45,
    xpReward: 100,
    prerequisites: ["mysql-69"],
    learningObjectives: ["Review all concepts", "Prepare for certification", "Continue learning"],
    sections: [
      {
        id: "mysql-70-1",
        title: "MySQL Mastery Review",
        whyItMatters: "Consolidate all learning.",
        content: `Review key MySQL concepts covered in this track.`,
        codeExamples: [
          {
            id: "mysql-70-ex1",
            title: "Quick Reference",
            description: "Key concepts",
            code: { javascript: "-- Key MySQL Topics:\n-- 1. Basics: CREATE, INSERT, SELECT, UPDATE, DELETE\n-- 2. Joins: INNER, LEFT, RIGHT, FULL\n-- 3. Aggregates: COUNT, SUM, AVG, GROUP BY, HAVING\n-- 4. Advanced: Views, Procedures, Functions, Triggers\n-- 5. Design: Keys, Normalization, Indexes\n-- 6. Performance: EXPLAIN, Optimization, Partitioning\n-- 7. Security: Users, Privileges, Encryption\n-- 8. HA: Replication, Failover, Backup\n-- 9. Integration: PHP, Python, Node, Java, C#\n\n-- Common Interview Questions:\n-- Explain the difference between InnoDB and MyISAM\n-- How do you optimize a slow query?\n-- What is a composite index and when to use it?\n-- Explain ACID properties\n-- How does replication work?" },
            explanation: "Practice these concepts to prepare for MySQL certification."
          }
        ]
      },
      {
        id: "mysql-70-2",
        title: "Next Steps",
        whyItMatters: "Continue learning journey.",
        content: `After this track, explore more advanced topics.`,
        codeExamples: [
          {
            id: "mysql-70-ex2",
            title: "Continue Learning",
            description: "What's next",
            code: { javascript: "-- MySQL Certifications:\n-- Oracle Certified Professional (OCP)\n-- MySQL 8.0 Developer Certified Associate\n\n-- Advanced Topics to Explore:\n-- MySQL Cluster (NDB)\n-- Galera Cluster for multi-master\n-- MySQL 8.0 new features (CTEs, window functions)\n-- JSON_TABLE and document store\n-- MySQL on Kubernetes\n-- MySQL with Docker\n\n-- Practice Platforms:\n-- LeetCode Database problems\n-- HackerRank SQL challenges\n-- SQLZoo\n-- Mode Analytics SQL Tutorial" },
            explanation: "Keep practicing to master MySQL!"
          }
        ]
      }
    ]
  }
];

export const mysqlTrack: Track = {
  id: "mysql",
  title: "MySQL",
  titleBn: "MySQL",
  tagline: "Build and manage production-grade databases",
  taglineBn: "প্রোডাকশন-গ্রেড ডাটাবেস তৈরি ও পরিচালনা করুন",
  icon: "🐬",
  colorVar: "mysql",
  totalChapters: mysqlChapters.length,
  estimatedHours: Math.round(mysqlChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: mysqlChapters,
  brandColor: "#00758F",
  glowColor: "rgba(0, 117, 143, 0.4)",
};