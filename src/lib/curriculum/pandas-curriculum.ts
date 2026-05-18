import type { Track, Chapter } from "./types";

const pandasChapters: Chapter[] = [
  {
    id: "pandas-1",
    number: 1,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "What Is Pandas and Why Use It?",
    subtitle: "Introduction to Pandas",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what Pandas is", "Know Pandas' role in data analysis", "Understand DataFrame and Series"],
    sections: [
      {
        id: "pandas-1-1",
        title: "What Is Pandas?",
        whyItMatters: "Pandas is the industry-standard library for data analysis in Python, used by millions of data scientists and analysts worldwide.",
        content: `Pandas (Python Data Analysis Library) is an open-source data manipulation and analysis library for Python. It provides fast, flexible, and expressive data structures designed to make working with structured data easy and intuitive.

**Why Pandas Matters:**

- **Industry Standard**: Used by Google, Goldman Sachs, NASA, and virtually every data team
- **Powerful Data Structures**: DataFrame and Series are perfect for tabular data
- **Built on NumPy**: Leverages NumPy's performance while adding data analysis features
- **Rich Functionality**: Everything from data cleaning to visualization
- **Excel for Python**: Can replace many Excel workflows with more power

**What Pandas Provides:**
- DataFrame: 2D table with labeled columns
- Series: 1D labeled array
- Data reading: CSV, Excel, SQL, JSON, and more
- Data cleaning: Missing values, duplicates, transformations
- Analysis: GroupBy, aggregations, pivots
- Visualization: Integration with matplotlib and seaborn

**The DataFrame:**
The DataFrame is Pandas' flagship data structure. Think of it as a spreadsheet or SQL table in Python:
- Rows have labels (index)
- Columns have labels
- Each column can have different data types
- Unlike NumPy arrays, columns can have names`,
        codeExamples: [
          {
            id: "pandas-1-ex1",
            title: "Pandas in Action",
            description: "Basic Pandas example",
            code: { python: "import pandas as pd\n\n# Create a simple DataFrame\ndata = {\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [25, 30, 35],\n    'Salary': [50000, 60000, 70000]\n}\ndf = pd.DataFrame(data)\nprint(df)\n\n# Operations are easy\nprint(\"\\nAverage salary:\", df['Salary'].mean())\nprint(\"Oldest person:\", df['Age'].max())" },
            explanation: "Pandas makes data manipulation intuitive with simple syntax."
          },
          {
            id: "pandas-1-ex2",
            title: "Pandas vs Excel",
            description: "Why Pandas is better than Excel for data work",
            code: { python: "import pandas as pd\n\n# Pandas can handle millions of rows easily\n# Excel struggles with >100k rows\n\n# Creating sample data\ndf = pd.DataFrame({\n    'Date': pd.date_range('2024-01-01', periods=1000),\n    'Sales': [100 + i*10 + (i%7)*50 for i in range(1000)]\n})\n\n# Complex calculations in one line\nmonthly = df.groupby(df['Date'].dt.month)['Sales'].agg(['sum', 'mean', 'max'])\nprint(monthly)\n\n# This would require complex Excel formulas or VBA" },
            explanation: "Pandas handles large datasets and complex operations effortlessly."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Python Prerequisite",
            content: "This track assumes you know Python basics. If you need to learn Python first, visit the Python track on CodeMastery."
          },
          {
            type: "info",
            title: "NumPy Prerequisite",
            content: "Understanding NumPy arrays helps. Visit the NumPy track to learn about arrays and vectorized operations."
          },
          {
            type: "tip",
            title: "Pandas is Everywhere",
            content: "Pandas is used in virtually every data science and analytics workflow."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does Pandas stand for?", options: ["Python Data Analysis", "Panel Data Analysis", "Python Data Analytics", "Pandas Data System"], correctAnswer: 0, explanation: "Pandas stands for Python Data Analysis Library." },
        { id: "q2", type: "mcq", question: "What is the primary 2D data structure in Pandas?", options: ["Series", "DataFrame", "Array", "Table"], correctAnswer: 1, explanation: "DataFrame is the primary 2D tabular data structure in Pandas." },
        { id: "q3", type: "true-false", question: "Pandas is built on top of NumPy.", correctAnswer: true, explanation: "Pandas uses NumPy arrays internally for its data structures." },
        { id: "q4", type: "fill-blank", question: "A _____ is a 1D labeled array in Pandas.", correctAnswer: "Series", explanation: "Series is the 1D labeled array structure in Pandas." },
        { id: "q5", type: "mcq", question: "Which company famously uses Pandas?", options: ["Only startups", "Goldman Sachs, NASA, Google", "No major companies", "Only Google"], correctAnswer: 1, explanation: "Pandas is used by major companies like Goldman Sachs, NASA, and Google." },
        { id: "q6", type: "mcq", question: "Pandas can read which file format?", options: ["Only CSV", "CSV, Excel, SQL, JSON", "Only Excel", "Only JSON"], correctAnswer: 1, explanation: "Pandas can read CSV, Excel, SQL, JSON, and many more formats." },
        { id: "q7", type: "true-false", question: "Pandas can handle larger datasets than Excel.", correctAnswer: true, explanation: "Pandas can handle millions of rows efficiently while Excel struggles with >100k." },
        { id: "q8", type: "fill-blank", question: "The two main Pandas data structures are _____ and _____.", correctAnswer: "Series, DataFrame", explanation: "Series (1D) and DataFrame (2D) are the core Pandas structures." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "Pandas", value: "Python Data Analysis Library" },
      { label: "DataFrame", value: "2D tabular data structure" },
      { label: "Series", value: "1D labeled array" },
      { label: "pd", value: "Standard Pandas import alias" }
    ]
  },
  {
    id: "pandas-2",
    number: 2,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Installing Pandas",
    subtitle: "Setup and Configuration",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["pandas-1"],
    learningObjectives: ["Install Pandas via pip", "Verify Pandas installation", "Check Pandas version"],
    sections: [
      {
        id: "pandas-2-1",
        title: "Installing Pandas",
        whyItMatters: "Proper installation is the first step to using Pandas effectively.",
        content: `**Using pip (recommended):**

\`\`\`bash
pip install pandas
\`\`\`

**Installing with extras (includes NumPy):**

\`\`\`bash
pip install pandas numpy
\`\`\`

**Using conda:**

\`\`\`bash
conda install pandas
\`\`\`

**Verifying Installation:**

\`\`\`python
import pandas as pd\nprint(pd.__version__)\n\`\`\`

**Version Information:**
- Pandas 1.x: Classic version with stable API
- Pandas 2.x (2023+): Major improvements, better performance, PyArrow backend option

Check your version to ensure compatibility with tutorials and packages.`,
        codeExamples: [
          {
            id: "pandas-2-ex1",
            title: "Installation Check",
            description: "Verify Pandas is properly installed",
            code: { python: "import pandas as pd\n\n# Check version\nprint(f\"Pandas version: {pd.__version__}\")\n\n# Check dependencies\nprint(f\"NumPy version: {pd.show_versions()}\")" },
            explanation: "Always verify your Pandas installation before starting development."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "Include NumPy",
            content: "Pandas requires NumPy. Install both together for a complete data science environment."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is the correct pip command to install Pandas?", options: ["pip get pandas", "pip install pandas", "pip download pandas", "pip fetch pandas"], correctAnswer: 1, explanation: "pip install pandas is the standard installation command." },
        { id: "q2", type: "fill-blank", question: "The attribute _____ contains the Pandas version string.", correctAnswer: "__version__", explanation: "pd.__version__ returns the installed Pandas version." },
        { id: "q3", type: "mcq", question: "What does pd.show_versions() show?", options: ["Only Pandas version", "All installed versions", "Release date", "License info"], correctAnswer: 1, explanation: "show_versions() displays version info for Pandas and its dependencies." },
        { id: "q4", type: "true-false", question: "Pandas requires NumPy to work.", correctAnswer: true, explanation: "Pandas is built on NumPy and requires it as a dependency." },
        { id: "q5", type: "mcq", question: "What is the standard import alias for Pandas?", options: ["p", "pd", "pandas", "pan"], correctAnswer: 1, explanation: "import pandas as pd is the conventional import alias." },
        { id: "q6", type: "fill-blank", question: "The command _____ installs both pandas and numpy.", correctAnswer: "pip install pandas numpy", explanation: "Installing both together ensures compatibility." },
        { id: "q7", type: "mcq", question: "Which conda command installs Pandas?", options: ["conda get pandas", "conda install pandas", "conda add pandas", "conda fetch pandas"], correctAnswer: 1, explanation: "conda install pandas is the standard conda installation command." },
        { id: "q8", type: "true-false", question: "Pandas 2.x is backward compatible with Pandas 1.x.", correctAnswer: true, explanation: "Pandas 2.x maintains backward compatibility with most 1.x code." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "pip install", value: "Install via pip" },
      { label: "pd.__version__", value: "Check version" },
      { label: "import pandas as pd", value: "Standard import" }
    ]
  },
  {
    id: "pandas-3",
    number: 3,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Series Objects",
    subtitle: "Understanding 1D Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["pandas-2"],
    learningObjectives: ["Create Series", "Understand Series attributes", "Work with Series indexes"],
    sections: [
      {
        id: "pandas-3-1",
        title: "Creating Series",
        whyItMatters: "Series is the foundation of Pandas - understanding it makes everything else easier.",
        content: `**Creating Series:**

\`\`\`python
import pandas as pd\n\n# From a list\ns = pd.Series([1, 2, 3, 4, 5])\n\n# From a list with custom index\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\n\n# From a dictionary\ns = pd.Series({'a': 1, 'b': 2, 'c': 3})\n\n# From NumPy array\nimport numpy as np\ns = pd.Series(np.array([1, 2, 3]))\n\`\`\`

**Key Properties:**
- Values: The underlying data (NumPy array)
- Index: Labels for each value
- dtype: Data type of values

**Default Index:**
When you don't specify an index, Pandas creates integer indices 0, 1, 2, ...`,
        codeExamples: [
          {
            id: "pandas-3-ex1",
            title: "Series Creation",
            description: "Different ways to create Series",
            code: { python: "import pandas as pd\n\n# From list\ns1 = pd.Series([1, 2, 3])\nprint(\"From list:\", s1.values)\n\n# From list with index\ns2 = pd.Series([10, 20, 30], index=['x', 'y', 'z'])\nprint(\"With index:\\n\", s2)\n\n# From dictionary\ns3 = pd.Series({'a': 100, 'b': 200, 'c': 300})\nprint(\"From dict:\\n\", s3)\n\n# Access by index\nprint(\"\\ns2['y']:\", s2['y'])" },
            explanation: "Series can be created from various sources with flexible indexing."
          }
        ]
      },
      {
        id: "pandas-3-2",
        title: "Series Attributes and Operations",
        whyItMatters: "Understanding Series attributes helps you work with data effectively.",
        content: `**Series Attributes:**

\`\`\`python
s = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])\n\ns.index        # Index labels\ns.values       # NumPy array of values\ns.dtype        # Data type (int64)\ns.shape        # (4,)\ns.size         # 4 (number of elements)\ns.ndim         # 1\ns.name         # Name (can be set)\n\`\`\`

**Operations:**
\`\`\`python
s = pd.Series([1, 2, 3, 4, 5])\n\n# Math operations\ns + 1           # [2, 3, 4, 5, 6]\ns * 2           # [2, 4, 6, 8, 10]\ns.mean()        # 3.0\ns.sum()         # 15\ns.max()         # 5\n\n# Boolean operations\ns > 3           # [False, False, False, True, True]\ns[s > 3]        # [4, 5]\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-3-ex2",
            title: "Series Attributes",
            description: "Exploring Series properties",
            code: { python: "import pandas as pd\n\ns = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'], name='MySeries')\n\n# Attributes\nprint(\"Index:\", s.index.tolist())\nprint(\"Values:\", s.values)\nprint(\"dtype:\", s.dtype)\nprint(\"Size:\", s.size)\nprint(\"Name:\", s.name)\n\n# Operations\nprint(\"\\nMean:\", s.mean())\nprint(\"Sum:\", s.sum())\nprint(\"Max:\", s.max())\n\n# Filtering\nprint(\"\\nElements > 25:\", s[s > 25].tolist())" },
            explanation: "Series provide rich attributes and vectorized operations."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is a Series in Pandas?", options: ["2D table", "1D labeled array", "Dictionary", "Matrix"], correctAnswer: 1, explanation: "Series is a 1D labeled array in Pandas." },
        { id: "q2", type: "fill-blank", question: "The _____ property returns the index labels of a Series.", correctAnswer: "index", explanation: "s.index returns the index labels." },
        { id: "q3", type: "mcq", question: "How do you create a Series from a dictionary?", options: ["pd.Series(dict)", "pd.Series({'key': value})", "Both a and b", "pd.make_series()"], correctAnswer: 2, explanation: "Both approaches work - pass the dict directly to pd.Series()." },
        { id: "q4", type: "true-false", question: "Series can have custom string indexes.", correctAnswer: true, explanation: "Series can have any hashable object as index, including strings." },
        { id: "q5", type: "mcq", question: "What does s.mean() return?", options: ["Sum of elements", "Average of elements", "Middle element", "Count"], correctAnswer: 1, explanation: "mean() returns the arithmetic mean of the Series values." },
        { id: "q6", type: "fill-blank", question: "The _____ attribute returns the underlying NumPy array.", correctAnswer: "values", explanation: "s.values returns the NumPy array backing the Series." },
        { id: "q7", type: "mcq", question: "What does pd.Series([1, 2, 3], index=['a', 'b', 'c'])['b'] return?", options: ["1", "2", "3", "Error"], correctAnswer: 1, explanation: "Accessing by index 'b' returns the value at that position, which is 2." },
        { id: "q8", type: "true-false", question: "Operations on Series are vectorized like NumPy.", correctAnswer: true, explanation: "Series supports vectorized operations just like NumPy arrays." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "pd.Series()", value: "Create Series" },
      { label: ".index", value: "Index labels" },
      { label: ".values", value: "Underlying array" },
      { label: ".dtype", value: "Data type" },
      { label: ".name", value: "Series name" }
    ]
  },
  {
    id: "pandas-4",
    number: 4,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "DataFrames",
    subtitle: "Understanding 2D Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["pandas-3"],
    learningObjectives: ["Create DataFrames", "Understand DataFrame structure", "Work with rows and columns"],
    sections: [
      {
        id: "pandas-4-1",
        title: "Creating DataFrames",
        whyItMatters: "DataFrame is the primary data structure for data analysis in Pandas.",
        content: `**Creating DataFrame:**

\`\`\`python
import pandas as pd\n\n# From dictionary of lists\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [25, 30, 35],\n    'Salary': [50000, 60000, 70000]\n})\n\n# From list of dictionaries\ndf = pd.DataFrame([\n    {'Name': 'Alice', 'Age': 25},\n    {'Name': 'Bob', 'Age': 30}\n])\n\n# From 2D array\nimport numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\ndf = pd.DataFrame(arr, columns=['A', 'B', 'C'])\n\n# From CSV (we'll cover this later)\n# df = pd.read_csv('file.csv')\n\`\`\`

**Key Points:**
- Each key becomes a column
- Each list becomes the column data
- Rows are automatically indexed (0, 1, 2, ...)`,
        codeExamples: [
          {
            id: "pandas-4-ex1",
            title: "DataFrame Creation",
            description: "Different ways to create DataFrames",
            code: { python: "import pandas as pd\n\n# From dictionary\ndf1 = pd.DataFrame({\n    'Name': ['Alice', 'Bob'],\n    'Age': [25, 30],\n    'City': ['NYC', 'LA']\n})\nprint(\"From dict:\\n\", df1)\n\n# From list of lists\ndf2 = pd.DataFrame([\n    [1, 'Apple', 100],\n    [2, 'Banana', 200],\n    [3, 'Cherry', 300]\n], columns=['ID', 'Fruit', 'Qty'])\nprint(\"\\nFrom list:\\n\", df2)\n\n# Access columns\nprint(\"\\nNames:\", df1['Name'].tolist())" },
            explanation: "DataFrames can be created from various data sources."
          }
        ]
      },
      {
        id: "pandas-4-2",
        title: "DataFrame Attributes",
        whyItMatters: "Understanding DataFrame properties helps navigate data effectively.",
        content: `**DataFrame Attributes:**

\`\`\`python
df = pd.DataFrame({\n    'A': [1, 2, 3],\n    'B': [4, 5, 6],\n    'C': [7, 8, 9]\n}, index=['x', 'y', 'z'])\n\ndf.shape        # (3, 3) - rows, columns\ndf.index         # Index labels\ndf.columns       # Column names\ndf.dtypes        # Data types of each column\ndf.values        # 2D NumPy array\ndf.ndim          # 2\ndf.size          # 9 (3*3)\ndf.head()        # First 5 rows\ndf.tail()        # Last 5 rows\ndf.info()        # Summary info\ndf.describe()   # Statistical summary\n\`\`\`

**Accessing Data:**
\`\`\`python
df['A']          # Column A (Series)\ndf[['A', 'B']]   # Multiple columns\ndf.loc['x']      # Row with label 'x'\ndf.iloc[0]       # First row by position\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-4-ex2",
            title: "DataFrame Properties",
            description: "Exploring DataFrame attributes",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [25, 30, 35],\n    'Salary': [50000, 60000, 70000]\n})\n\nprint(\"Shape:\", df.shape)\nprint(\"Columns:\", df.columns.tolist())\nprint(\"dtypes:\\n\", df.dtypes)\nprint(\"\\nFirst 2 rows:\\n\", df.head(2))\nprint(\"\\nDescribe:\\n\", df.describe())" },
            explanation: "DataFrame attributes provide quick insights into data structure."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "loc vs iloc",
            content: "loc uses labels, iloc uses integer positions. Don't confuse them!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is a DataFrame?", options: ["1D array", "2D table", "3D array", "Dictionary"], correctAnswer: 1, explanation: "DataFrame is a 2D tabular data structure with rows and columns." },
        { id: "q2", type: "fill-blank", question: "The _____ property returns column names.", correctAnswer: "columns", explanation: "df.columns returns the column names." },
        { id: "q3", type: "mcq", question: "df.shape returns what?", options: ["Number of cells", "(rows, columns)", "Number of rows only", "Number of columns only"], correctAnswer: 1, explanation: "shape returns a tuple of (number of rows, number of columns)." },
        { id: "q4", type: "true-false", question: "df['column'] returns a Series.", correctAnswer: true, explanation: "Selecting a single column returns a Series." },
        { id: "q5", type: "mcq", question: "What does df.head() return?", options: ["First row", "Last 5 rows", "First 5 rows", "Column names"], correctAnswer: 2, explanation: "head() returns the first 5 rows by default." },
        { id: "q6", type: "fill-blank", question: "Use _____ for label-based access, _____ for position-based access.", correctAnswer: "loc, iloc", explanation: "loc uses labels, iloc uses integer positions." },
        { id: "q7", type: "mcq", question: "Which returns multiple columns?", options: ["df['A']", "df[['A', 'B']]", "df.A", "Both a and c"], correctAnswer: 1, explanation: "df[['A', 'B']] returns a DataFrame with multiple columns." },
        { id: "q8", type: "true-false", question: "df.info() shows data types and memory usage.", correctAnswer: true, explanation: "info() provides a concise summary including dtypes and memory." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "pd.DataFrame()", value: "Create DataFrame" },
      { label: ".shape", value: "(rows, cols) tuple" },
      { label: ".columns", value: "Column names" },
      { label: ".loc[]", value: "Label-based access" },
      { label: ".iloc[]", value: "Position-based access" },
      { label: ".head()/.tail()", value: "First/last rows" }
    ]
  },
  {
    id: "pandas-5",
    number: 5,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Reading CSV Files",
    subtitle: "Loading External Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["pandas-4"],
    learningObjectives: ["Read CSV files", "Specify options", "Handle different CSV formats"],
    sections: [
      {
        id: "pandas-5-1",
        title: "Reading CSV Files",
        whyItMatters: "Loading data is the first step in any data analysis project.",
        content: `**Basic CSV Reading:**

\`\`\`python
import pandas as pd\n\n# Basic reading\ndf = pd.read_csv('file.csv')\n\n# With specific path\ndf = pd.read_csv('/path/to/file.csv')\n\n# From URL\ndf = pd.read_csv('https://example.com/data.csv')\n\n# With options\ndf = pd.read_csv('file.csv', sep=',')           # Delimiter\ndf = pd.read_csv('file.csv', header=0)         # Row for columns\ndf = pd.read_csv('file.csv', nrows=100)        # Read only first 100 rows\n\`\`\`

**Common Options:**

\`\`\`python
# Encoding\npd.read_csv('file.csv', encoding='utf-8')\n\n# Skip rows\npd.read_csv('file.csv', skiprows=3)            # Skip first 3 rows\npd.read_csv('file.csv', skiprows=[1, 2])       # Skip specific rows\n\n# NaN values\npd.read_csv('file.csv', na_values=['NA', 'N/A', 'null'])\n\n# Column types\npd.read_csv('file.csv', dtype={'age': 'int32'})\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-5-ex1",
            title: "Reading CSV",
            description: "Loading CSV files with options",
            code: { python: "import pandas as pd\nimport io\n\n# Simulate CSV data\ncsv_data = \"\"\"name,age,city\nAlice,25,NYC\nBob,30,LA\nCharlie,35,NYC\"\"\"\n\n# Read from string (simulates file)\ndf = pd.read_csv(io.StringIO(csv_data))\nprint(\"Loaded data:\")\nprint(df)\n\n# Basic options\ndf2 = pd.read_csv(io.StringIO(csv_data), nrows=2)\nprint(\"\\nFirst 2 rows:\")\nprint(df2)" },
            explanation: "read_csv() has many options for handling different CSV formats."
          }
        ]
      },
      {
        id: "pandas-5-2",
        title: "Writing CSV Files",
        whyItMatters: "Saving data is as important as loading it.",
        content: `**Writing CSV:**

\`\`\`python
# Save to CSV\ndf.to_csv('output.csv', index=False)\n\n# Without index\ndf.to_csv('output.csv', index=False)\n\n# With index\ndf.to_csv('output.csv', index=True)\n\n# Specific columns\ndf.to_csv('output.csv', columns=['name', 'age'])\n\n# Custom separator\ndf.to_csv('output.csv', sep=';')\n\n# Handle NaN\ndf.to_csv('output.csv', na_rep='NULL')\n\`\`\`

**Other Formats:**
\`\`\`python
# Excel\ndf.to_excel('output.xlsx', index=False)\n\n# JSON\ndf.to_json('output.json')\n\n# HTML\ndf.to_html('output.html')\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-5-ex2",
            title: "Writing CSV",
            description: "Saving DataFrames to files",
            code: { python: "import pandas as pd\nimport io\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob'],\n    'Age': [25, 30]\n})\n\n# Write to string (simulates file)\ncsv_output = df.to_csv(index=False)\nprint(\"CSV output:\")\nprint(csv_output)\n\n# Without header\ncsv_no_header = df.to_csv(header=False)\nprint(\"\\nWithout header:\")\nprint(csv_no_header)" },
            explanation: "Pandas can write to various formats, not just CSV."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What function reads CSV files in Pandas?", options: ["read_file()", "read_csv()", "load_csv()", "import_csv()"], correctAnswer: 1, explanation: "pd.read_csv() is the function for reading CSV files." },
        { id: "q2", type: "fill-blank", question: "The _____ parameter specifies the delimiter in CSV files.", correctAnswer: "sep", explanation: "sep defines the delimiter (comma by default)." },
        { id: "q3", type: "mcq", question: "What does index=False do when writing CSV?", options: ["Skips header", "Doesn't write index column", "Skips first row", "Uses first column as index"], correctAnswer: 1, explanation: "index=False excludes the DataFrame index from the output." },
        { id: "q4", type: "true-false", question: "read_csv can read from a URL.", correctAnswer: true, explanation: "read_csv() accepts URLs as file paths." },
        { id: "q5", type: "mcq", question: "What does nrows parameter do?", options: ["Limits columns", "Limits rows read", "Skips rows", "Filters data"], correctAnswer: 1, explanation: "nrows limits the number of rows to read from the file." },
        { id: "q6", type: "fill-blank", question: "The _____ parameter specifies which row to use as column names.", correctAnswer: "header", explanation: "header specifies which row becomes the column names." },
        { id: "q7", type: "mcq", question: "Which writes to Excel format?", options: ["to_excel()", "to_xlsx()", "write_excel()", "export_excel()"], correctAnswer: 0, explanation: "to_excel() writes DataFrames to Excel files." },
        { id: "q8", type: "true-false", question: "You can read only specific columns with usecols.", correctAnswer: true, explanation: "usecols parameter specifies which columns to load." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "read_csv()", value: "Load CSV file" },
      { label: "to_csv()", value: "Save to CSV" },
      { label: "index=False", value: "Don't write index" },
      { label: "nrows=", value: "Limit rows read" },
      { label: "sep=", value: "Delimiter" }
    ]
  },
  {
    id: "pandas-6",
    number: 6,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Reading Excel Files",
    subtitle: "Loading Excel Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["pandas-5"],
    learningObjectives: ["Read Excel files", "Work with multiple sheets", "Write Excel files"],
    sections: [
      {
        id: "pandas-6-1",
        title: "Reading Excel Files",
        whyItMatters: "Excel is ubiquitous in business - knowing how to read it is essential.",
        content: `**Reading Excel:**

\`\`\`python
import pandas as pd\n\n# Basic Excel read\ndf = pd.read_excel('file.xlsx')\n\n# Specific sheet\ndf = pd.read_excel('file.xlsx', sheet_name='Sheet1')\ndf = pd.read_excel('file.xlsx', sheet_name=0)   # First sheet\n\n# All sheets\nall_sheets = pd.read_excel('file.xlsx', sheet_name=None)\n# Returns dict: {'Sheet1': df1, 'Sheet2': df2}\n\n# With header row\ndf = pd.read_excel('file.xlsx', header=0)       # First row as headers\ndf = pd.read_excel('file.xlsx', header=1)       # Second row as headers\n\`\`\`

**Note:** You'll need openpyxl for .xlsx files:
\`\`\`bash
pip install openpyxl
\`\`\``,
        codeExamples: [
          {
            id: "pandas-6-ex1",
            title: "Reading Excel",
            description: "Loading Excel files with Pandas",
            code: { python: "import pandas as pd\nimport io\n\n# Simulate Excel-like data\ndata = \"\"\"Name,Age,Department\nAlice,25,Engineering\nBob,30,Marketing\nCharlie,35,Sales\"\"\"\n\n# pandas reads various formats\ndf = pd.read_csv(io.StringIO(data))\nprint(\"Data loaded (simulating Excel):\")\nprint(df)\nprint(\"\\nColumns:\", df.columns.tolist())\nprint(\"Shape:\", df.shape)" },
            explanation: "Excel reading requires openpyxl for .xlsx files."
          }
        ],
        callouts: [
          {
            type: "warning",
            title: "Install openpyxl",
            content: "You must install openpyxl to read .xlsx files: pip install openpyxl"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What library is needed to read .xlsx files?", options: ["xlrd", "openpyxl", "pandas", "numpy"], correctAnswer: 1, explanation: "openpyxl is required for reading .xlsx files in Pandas." },
        { id: "q2", type: "fill-blank", question: "The _____ parameter specifies which sheet to read.", correctAnswer: "sheet_name", explanation: "sheet_name chooses which sheet to load." },
        { id: "q3", type: "mcq", question: "What does sheet_name=None return?", options: ["First sheet", "All sheets as dict", "Error", "Last sheet"], correctAnswer: 1, explanation: "sheet_name=None returns a dictionary of all sheets." },
        { id: "q4", type: "true-false", question: "Pandas can write to Excel files.", correctAnswer: true, explanation: "to_excel() writes DataFrames to Excel." },
        { id: "q5", type: "mcq", question: "What function reads Excel files?", options: ["read_excel()", "load_excel()", "import_excel()", "open_excel()"], correctAnswer: 0, explanation: "pd.read_excel() is the function for reading Excel files." },
        { id: "q6", type: "fill-blank", question: "To make the first row as headers, use header=_____.", correctAnswer: "0", explanation: "header=0 uses the first row as column names." },
        { id: "q7", type: "mcq", question: "read_excel can read .xls files with which library?", options: ["openpyxl", "xlrd", "pandas", "numpy"], correctAnswer: 1, explanation: "xlrd reads older .xls format Excel files." },
        { id: "q8", type: "true-false", question: "You can read multiple Excel sheets at once.", correctAnswer: true, explanation: "sheet_name=['Sheet1', 'Sheet2'] reads multiple sheets." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "read_excel()", value: "Load Excel file" },
      { label: "openpyxl", value: "Library for .xlsx" },
      { label: "sheet_name", value: "Which sheet to read" },
      { label: "to_excel()", value: "Write to Excel" }
    ]
  },
  {
    id: "pandas-7",
    number: 7,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Inspecting Data",
    subtitle: "Understanding Your Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["pandas-6"],
    learningObjectives: ["Inspect DataFrame contents", "Use info and describe", "Check for missing values"],
    sections: [
      {
        id: "pandas-7-1",
        title: "Quick Inspection Methods",
        whyItMatters: "Before analyzing, you need to understand your data structure.",
        content: `**Quick Overview:**

\`\`\`python
df = pd.read_csv('data.csv')\n\n# First/last rows\ndf.head()           # First 5 rows\ndf.head(10)         # First 10\ndf.tail()           # Last 5 rows\n\n# Sample rows\ndf.sample(5)        # Random 5 rows\ndf.sample(frac=0.1) # 10% random sample\n\n# Shape and info\ndf.shape            # (rows, cols)\ndf.info()           # Full summary\ndf.describe()       # Statistics\n\n# Column info\ndf.columns          # List of columns\ndf.dtypes           # Data types\n\`\`\`

**describe() output:**
- count: Non-null count
- mean: Average value
- std: Standard deviation
- min/max: Range
- 25%, 50%, 75%: Quartiles`,
        codeExamples: [
          {
            id: "pandas-7-ex1",
            title: "Data Inspection",
            description: "Exploring DataFrame contents",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'Age': [25, 30, 35, 28],\n    'Salary': [50000, 60000, 70000, 55000],\n    'Department': ['Eng', 'Sales', 'Eng', 'Marketing']\n})\n\nprint(\"First 3 rows:\")\nprint(df.head(3))\n\nprint(\"\\nLast 2 rows:\")\nprint(df.tail(2))\n\nprint(\"\\nDescribe:\")\nprint(df.describe())\n\nprint(\"\\nInfo:\")\nprint(df.info())" },
            explanation: "These methods give you a quick overview of your data."
          }
        ]
      },
      {
        id: "pandas-7-2",
        title: "Detailed Inspection",
        whyItMatters: "Deep inspection reveals data quality issues.",
        content: `**Detailed Methods:**

\`\`\`python
# Missing values\ndf.isnull()         # Boolean mask\ndf.isnull().sum()   # Count per column\ndf.notnull()        # Opposite of isnull\n\n# Value counts\ndf['column'].value_counts()  # Frequency\ndf['column'].unique()        # Unique values\ndf['column'].nunique()       # Count of unique\n\n# Statistics\ndf.mean()           # Mean of each column\ndf.median()         # Median\ndf.std()            # Standard deviation\ndf.corr()           # Correlation matrix\n\n# Combining\ndf.describe(include='all')  # Include non-numeric\n\`\`\`

**isnull() Use Cases:**
\`\`\`python
# Find missing\ndf[df.isnull().any(axis=1)]  # Rows with any null\n\n# Fill missing\ndf.fillna(0)                   # Replace with 0\ndf.dropna()                    # Drop rows with null\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-7-ex2",
            title: "Deep Inspection",
            description: "Finding patterns and missing values",
            code: { python: "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'A': [1, 2, np.nan, 4, 5],\n    'B': ['x', 'y', 'z', 'x', 'y'],\n    'C': [10, 20, 30, 40, 50]\n})\n\nprint(\"Missing values:\")\nprint(df.isnull())\n\nprint(\"\\nMissing per column:\")\nprint(df.isnull().sum())\n\nprint(\"\\nValue counts for B:\")\nprint(df['B'].value_counts())\n\nprint(\"\\nUnique values in B:\")\nprint(df['B'].unique())" },
            explanation: "Understanding data quality is crucial for proper analysis."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does df.head() return?", options: ["Column names", "First 5 rows", "Last 5 rows", "Statistics"], correctAnswer: 1, explanation: "head() returns the first 5 rows by default." },
        { id: "q2", type: "fill_blank", question: "The _____ method shows data types and memory usage.", correctAnswer: "info", explanation: "df.info() provides type and memory information." },
        { id: "q3", type: "mcq", question: "What does describe() show?", options: ["Only strings", "Only numbers", "Numbers by default", "Everything"], correctAnswer: 2, explanation: "describe() shows statistics for numeric columns by default." },
        { id: "q4", type: "true-false", question: "isnull() returns True for NaN values.", correctAnswer: true, explanation: "isnull() identifies missing values with True." },
        { id: "q5", type: "mcq", question: "What does value_counts() show?", options: ["Unique count", "Frequency of each value", "Sum of values", "All values"], correctAnswer: 1, explanation: "value_counts() shows how often each value appears." },
        { id: "q6", type: "fill-blank", question: "Use _____ to find rows with any missing values.", correctAnswer: "df[df.isnull().any(axis=1)]", explanation: "any(axis=1) finds rows with any True value." },
        { id: "q7", type: "mcq", question: "What does nunique() return?", options: ["All values", "Unique values list", "Count of unique", "First unique"], correctAnswer: 2, explanation: "nunique() returns the number of unique values." },
        { id: "q8", type: "true-false", question: "describe(include='all') includes non-numeric columns.", correctAnswer: true, explanation: "The include parameter can specify 'all' to include all types." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".head()/.tail()", value: "First/last rows" },
      { label: ".info()", value: "Summary with types" },
      { label: ".describe()", value: "Statistics" },
      { label: ".isnull()", value: "Find missing values" },
      { label: ".value_counts()", value: "Frequency count" }
    ]
  },
  {
    id: "pandas-8",
    number: 8,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Selecting Columns and Rows",
    subtitle: "Data Selection Methods",
    difficulty: "Beginner" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["pandas-7"],
    learningObjectives: ["Select columns", "Select rows", "Use loc and iloc"],
    sections: [
      {
        id: "pandas-8-1",
        title: "Column Selection",
        whyItMatters: "Selecting data is the foundation of data analysis.",
        content: `**Selecting Columns:**

\`\`\`python
df = pd.DataFrame({\n    'A': [1, 2, 3],\n    'B': [4, 5, 6],\n    'C': [7, 8, 9]\n})\n\n# Single column - returns Series\ndf['A']\ndf.A  # Alternative syntax\n\n# Multiple columns - returns DataFrame\ndf[['A', 'B']]\n\n# Using filter\ndf.filter(items=['A', 'B'])\ndf.filter(like='A')          # Columns containing 'A'\ndf.filter(regex='^A')        # Regex: starts with A\n\`\`\`

**Slicing:**
\`\`\`python
# Columns by position\ndf.iloc[:, 0:2]     # First 2 columns\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-8-ex1",
            title: "Column Selection",
            description: "Selecting columns in various ways",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [25, 30, 35],\n    'Salary': [50000, 60000, 70000],\n    'City': ['NYC', 'LA', 'NYC']\n})\n\n# Single column\nprint(\"Age column:\")\nprint(df['Age'])\n\n# Multiple columns\nprint(\"\\nName and Salary:\")\nprint(df[['Name', 'Salary']])\n\n# Filter columns\nprint(\"\\nColumns containing 'a':\")\nprint(df.filter(like='a').columns.tolist())" },
            explanation: "There are many ways to select columns in Pandas."
          }
        ]
      },
      {
        id: "pandas-8-2",
        title: "Row Selection - loc and iloc",
        whyItMatters: "Understanding loc vs iloc is crucial for data selection.",
        content: `**loc - Label-based Selection:**

\`\`\`python
df = pd.DataFrame({\n    'A': [1, 2, 3, 4, 5]\n}, index=['a', 'b', 'c', 'd', 'e'])\n\n# Single row\ndf.loc['a']\n\n# Multiple rows\ndf.loc[['a', 'c']]\n\n# Slice with labels\ndf.loc['a':'c']  # includes 'c'\n\n# With conditions\ndf.loc[df['A'] > 2]\n\`\`\`

**iloc - Position-based Selection:**

\`\`\`python
# Single row by position\ndf.iloc[0]\n\n# Multiple rows\ndf.iloc[[0, 2, 4]]\n\n# Slice - excludes end\ndf.iloc[0:3]  # rows 0, 1, 2\n\n# Combined with columns\ndf.iloc[0:3, 0:2]\n\`\`\`

**Key Difference:**
- loc uses labels (inclusive on both ends for slices)
- iloc uses integer positions (exclusive on end)`,
        codeExamples: [
          {
            id: "pandas-8-ex2",
            title: "loc vs iloc",
            description: "Label vs position-based selection",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'Age': [25, 30, 35, 40],\n    'Score': [85, 90, 78, 92]\n}, index=['w', 'x', 'y', 'z'])\n\nprint(\"Using loc (label-based):\")\nprint(df.loc['x'])  # Row with label 'x'\n\nprint(\"\\nUsing iloc (position-based):\")\nprint(df.iloc[1])   # Second row (position 1)\n\nprint(\"\\nSlice with loc (includes both ends):\")\nprint(df.loc['x':'y'])\n\nprint(\"\\nSlice with iloc (excludes end):\")\nprint(df.iloc[1:3])" },
            explanation: "loc uses labels, iloc uses integer positions - don't confuse them!"
          }
        ],
        callouts: [
          {
            type: "common-mistake",
            title: "loc vs iloc Confusion",
            content: "loc['a':'b'] includes both 'a' and 'b'. iloc[0:2] excludes position 2!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "Which uses label-based selection?", options: ["iloc", "loc", "Both", "Neither"], correctAnswer: 1, explanation: "loc uses label-based selection." },
        { id: "q2", type: "fill-blank", question: "_____ uses integer position-based selection.", correctAnswer: "iloc", explanation: "iloc selects by integer position." },
        { id: "q3", type: "mcq", question: "df[['A', 'B']] returns what type?", options: ["Series", "DataFrame", "List", "Array"], correctAnswer: 1, explanation: "Selecting multiple columns returns a DataFrame." },
        { id: "q4", type: "true-false", question: "df.loc['a':'b'] includes both 'a' and 'b'.", correctAnswer: true, explanation: "loc slicing is inclusive on both ends." },
        { id: "q5", type: "mcq", question: "df.iloc[0:3] returns how many rows?", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "iloc slicing excludes the end, so 0:3 gives positions 0, 1, 2." },
        { id: "q6", type: "fill_blank", question: "Use _____ to select rows where column A > 5.", correctAnswer: "df.loc[df['A'] > 5]", explanation: "Boolean conditions work with loc." },
        { id: "q7", type: "mcq", question: "df['A'] (single column) returns what?", options: ["DataFrame", "Series", "Array", "List"], correctAnswer: 1, explanation: "Single column selection returns a Series." },
        { id: "q8", type: "true-false", question: "You can combine row and column selection.", correctAnswer: true, explanation: "df.loc[row_selector, col_selector] selects both." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "df['col']", value: "Single column (Series)" },
      { label: "df[['col1', 'col2']]", value: "Multiple columns" },
      { label: "df.loc[label]", value: "Label-based row" },
      { label: "df.iloc[pos]", value: "Position-based row" },
      { label: "df.loc[r, c]", value: "Combined selection" }
    ]
  },
  {
    id: "pandas-9",
    number: 9,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Filtering Data",
    subtitle: "Conditional Selection",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["pandas-8"],
    learningObjectives: ["Filter with conditions", "Use boolean masks", "Combine conditions"],
    sections: [
      {
        id: "pandas-9-1",
        title: "Boolean Filtering",
        whyItMatters: "Filtering is essential for focusing on relevant data.",
        content: `**Basic Boolean Filter:**

\`\`\`python
df = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'Age': [25, 30, 35, 40],\n    'Salary': [50000, 60000, 70000, 80000]\n})\n\n# Single condition\ndf[df['Age'] > 30]\ndf[df['Name'] == 'Alice']\n\n# Multiple conditions\ndf[(df['Age'] > 30) & (df['Salary'] > 60000)]  # AND\ndf[(df['Age'] < 25) | (df['Age'] > 35)]       # OR\n\n# isin\ndf[df['Name'].isin(['Alice', 'Bob'])]\n\n# String methods\ndf[df['Name'].str.contains('li')]\n\`\`\`

**Important:** Use parentheses around each condition when combining!`,
        codeExamples: [
          {
            id: "pandas-9-ex1",
            title: "Boolean Filtering",
            description: "Filtering with conditions",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'Age': [25, 30, 35, 40],\n    'Dept': ['Sales', 'Eng', 'Sales', 'Eng']\n})\n\n# Simple filter\nprint(\"Age > 30:\")\nprint(df[df['Age'] > 30])\n\n# Multiple conditions\nprint(\"\\nAge > 30 AND Dept = 'Eng':\")\nprint(df[(df['Age'] > 30) & (df['Dept'] == 'Eng')])\n\n# Using isin\nprint(\"\\nName in ['Alice', 'Diana']:\")\nprint(df[df['Name'].isin(['Alice', 'Diana'])])" },
            explanation: "Boolean filtering focuses on rows matching conditions."
          }
        ]
      },
      {
        id: "pandas-9-2",
        title: "Advanced Filtering",
        whyItMatters: "Advanced filters handle complex data scenarios.",
        content: `**query() Method:**

\`\`\`python
# SQL-like syntax\ndf.query('Age > 30')\ndf.query('Age > 30 and Salary > 60000')\n\n# With variables\nthreshold = 30\ndf.query('Age > @threshold')\n\n# Not equal\ndf.query('Dept != \"Sales\"')\n\n# String contains\ndf.query('Name.str.contains(\"li\")')\n\`\`\`

**isin and between:**

\`\`\`python
# Between (inclusive)\ndf[df['Age'].between(25, 35)]\n\n# Not in\ndf[~df['Name'].isin(['Alice', 'Bob'])]  # ~ is NOT\n\n# Null filtering\ndf[df['Age'].notnull()]\ndf[df['Age'].isnull()]\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-9-ex2",
            title: "Query Method",
            description: "Using query for cleaner filtering",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'Age': [25, 30, 35, 40],\n    'Salary': [50000, 60000, 70000, 80000]\n})\n\n# Using query\nprint(\"Query: Age > 30\")\nprint(df.query('Age > 30'))\n\n# With variable\nthreshold = 60000\nprint(\"\\nQuery with variable:\")\nprint(df.query('Salary > @threshold'))\n\n# Between\nprint(\"\\nAge between 25 and 35:\")\nprint(df[df['Age'].between(25, 35)])" },
            explanation: "query() provides a cleaner, SQL-like syntax for filtering."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does df[df['Age'] > 30] return?", options: ["Age column", "Rows where Age > 30", "Boolean series", "Error"], correctAnswer: 1, explanation: "Boolean indexing returns rows where condition is True." },
        { id: "q2", type: "fill_blank", question: "Use _____ for AND conditions in filtering.", correctAnswer: "&", explanation: "& (and) combines conditions in Pandas." },
        { id: "q3", type: "mcq", question: "How do you use OR in filtering?", options: ["&&", "||", "|", "OR"], correctAnswer: 2, explanation: "Use | (pipe) for OR in Pandas boolean operations." },
        { id: "q4", type: "true-false", question: "You need parentheses around each condition when combining.", correctAnswer: true, explanation: "Each condition needs parentheses for proper evaluation." },
        { id: "q5", type: "mcq", question: "What does df.query('Age > 30') do?", options: ["Same as df[df['Age'] > 30]", "Throws error", "Returns columns", "Nothing"], correctAnswer: 0, explanation: "query() provides SQL-like syntax for the same result." },
        { id: "q6", type: "fill_blank", question: "Use _____ for NOT in filtering.", correctAnswer: "~", explanation: "~ (tilde) is the NOT operator in Pandas." },
        { id: "q7", type: "mcq", question: "What does .between(25, 35) return?", options: ["Values between", "Rows where column between", "Boolean mask", "Error"], correctAnswer: 2, explanation: "between() returns a boolean mask for filtering." },
        { id: "q8", type: "true-false", question: "isin() checks if values are in a list.", correctAnswer: true, explanation: "isin() returns True for values in the specified list." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "df[col] > value", value: "Boolean mask" },
      { label: "&", value: "AND operator" },
      { label: "|", value: "OR operator" },
      { label: "~", value: "NOT operator" },
      { label: ".query()", value: "SQL-like filtering" },
      { label: ".between()", value: "Range filter" }
    ]
  },
  {
    id: "pandas-10",
    number: 10,
    partLabel: "Part 1: Pandas Fundamentals",
    title: "Data Types in Pandas",
    subtitle: "Understanding dtypes",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["pandas-9"],
    learningObjectives: ["Understand Pandas dtypes", "Convert data types", "Handle type issues"],
    sections: [
      {
        id: "pandas-10-1",
        title: "Pandas Data Types",
        whyItMatters: "Data types affect memory usage and operations.",
        content: `**Pandas Data Types:**

\`\`\`python
df = pd.DataFrame({\n    'int_col': [1, 2, 3],\n    'float_col': [1.5, 2.5, 3.5],\n    'str_col': ['a', 'b', 'c'],\n    'bool_col': [True, False, True],\n    'date_col': ['2024-01-01', '2024-01-02', '2024-01-03']\n})\n\ndf.dtypes\n# int_col       int64\n# float_col   float64\n# str_col     object\n# bool_col      bool\n# date_col    object\n\`\`\`

**Common dtype Issues:**
- Numbers stored as strings
- Dates stored as objects
- Categories as objects

**dtype vs type:**
- dtype: Pandas data type
- type: Python type
\`\`\`python
df['col'].dtype    # dtype('int64')\ndf['col'].type    # <class 'numpy.int64'>\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-10-ex1",
            title: "Data Types",
            description: "Exploring dtypes in DataFrames",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'id': [1, 2, 3],\n    'price': [19.99, 29.99, 39.99],\n    'name': ['Apple', 'Banana', 'Cherry'],\n    'in_stock': [True, False, True]\n})\n\nprint(\"Data types:\")\nprint(df.dtypes)\n\nprint(\"\\nSpecific column dtype:\")\nprint(df['price'].dtype)\n\nprint(\"\\nMemory usage:\")\nprint(df.memory_usage(deep=True))" },
            explanation: "dtypes determine how Pandas handles each column."
          }
        ]
      },
      {
        id: "pandas-10-2",
        title: "Type Conversion",
        whyItMatters: "Converting types is necessary for proper analysis.",
        content: `**Converting Types:**

\`\`\`python
# astype for simple conversions\ndf['col'].astype('int32')\ndf['col'].astype('float64')\ndf['col'].astype('category')\n\n# Convert to numeric\npd.to_numeric(df['col'])  # Handle errors\npd.to_numeric(df['col'], errors='coerce')  # NaN for bad values\n\n# Convert to datetime\npd.to_datetime(df['col'])\n\n# Convert to string\ndf['col'].astype('str')\n\`\`\`

**Handling Errors:**

\`\`\`python
# errors='coerce': Convert errors to NaN\npd.to_numeric('abc', errors='coerce')  # NaN\n\n# errors='ignore': Keep original\npd.to_numeric('abc', errors='ignore')  # 'abc'\n\n# errors='raise': Raise exception (default)\n\`\`\``,
        codeExamples: [
          {
            id: "pandas-10-ex2",
            title: "Type Conversion",
            description: "Converting between data types",
            code: { python: "import pandas as pd\n\ndf = pd.DataFrame({\n    'value': ['10', '20', '30', 'abc']\n})\n\n# Convert to numeric with error handling\ndf['numeric'] = pd.to_numeric(df['value'], errors='coerce')\nprint(\"Converted:\")\nprint(df)\n\n# Convert numeric to int\ndf['int_val'] = df['numeric'].astype('Int64')  # Nullable int\nprint(\"\\nAs integer:\")\nprint(df)" },
            explanation: "Proper type conversion enables correct analysis."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "Use Nullable Integers",
            content: "Use Int64 (capital I) instead of int64 to handle NaN values properly."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is the dtype for text columns?", options: ["str", "string", "object", "text"], correctAnswer: 2, explanation: "Text columns in Pandas have 'object' dtype." },
        { id: "q2", type: "fill_blank", question: "Use _____ to convert column to integers.", correctAnswer: "astype('int64')", explanation: "astype() converts data types." },
        { id: "q3", type: "mcq", question: "What does errors='coerce' do?", options: ["Raises error", "Converts to NaN", "Keeps original", "Converts to 0"], correctAnswer: 1, explanation: "coerce converts unparseable values to NaN." },
        { id: "q4", type: "true-false", question: "datetime columns can be converted with to_datetime().", correctAnswer: true, explanation: "pd.to_datetime() converts strings to datetime." },
        { id: "q5", type: "mcq", question: "What dtype should you use for integers that might have NaN?", options: ["int64", "int32", "Int64", "integer"], correctAnswer: 2, explanation: "Capital I (Int64) is nullable and handles NaN." },
        { id: "q6", type: "fill_blank", question: "The _____ property shows data types of all columns.", correctAnswer: "dtypes", explanation: "df.dtypes displays the dtype for each column." },
        { id: "q7", type: "mcq", question: "What does pd.to_numeric() do?", options: ["Formats numbers", "Converts to numeric type", "Rounds numbers", "Validates numbers"], correctAnswer: 1, explanation: "to_numeric converts values to numeric dtype." },
        { id: "q8", type: "true-false", question: "object dtype uses more memory than category for repetitive strings.", correctAnswer: true, explanation: "category dtype is more memory-efficient for repeated values." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".dtype", value: "Column data type" },
      { label: ".astype()", value: "Convert type" },
      { label: "pd.to_numeric()", value: "Convert to number" },
      { label: "pd.to_datetime()", value: "Convert to datetime" },
      { label: "Int64", value: "Nullable integer" }
    ]
  }
];

export const pandasTrack: Track = {
  id: "pandas",
  title: "Pandas",
  titleBn: "পান্ডাস",
  tagline: "Powerful data analysis and manipulation for Python",
  taglineBn: "পাইথনের জন্য শক্তিশালী ডেটা বিশ্লেষণ ও ম্যানিপুলেশন",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "pandas",
  totalChapters: pandasChapters.length,
  estimatedHours: Math.round(pandasChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: pandasChapters,
  brandColor: "#150458",
  glowColor: "rgba(21, 4, 88, 0.4)",
};