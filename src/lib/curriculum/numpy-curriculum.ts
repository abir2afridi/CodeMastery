import type { Track, Chapter } from "./types";

const numpyChapters: Chapter[] = [
  {
    id: "numpy-1",
    number: 1,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "What Is NumPy and Why It Matters?",
    subtitle: "Introduction to NumPy",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what NumPy is", "Know NumPy's history and importance", "Understand numerical computing fundamentals"],
    sections: [
      {
        id: "numpy-1-1",
        title: "What Is NumPy?",
        whyItMatters: "NumPy is the foundation of scientific computing in Python, used by millions of data scientists and engineers worldwide.",
        content: `NumPy (Numerical Python) is the fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.

**Why NumPy Matters:**

- **Performance**: NumPy operations are written in C and are 10-100x faster than pure Python
- **Foundation**: It's the foundation for pandas, matplotlib, scikit-learn, and thousands of other libraries
- **Industry Standard**: Used by Google, NASA, Netflix, and virtually every data science team
- **Efficiency**: Enables vectorized operations instead of slow Python loops

**What NumPy Provides:**
- ndarray: n-dimensional array object
- Mathematical functions for array operations
- Linear algebra, Fourier transforms
- Random number generation
- Tools for integrating C/C++ and Fortran code

The core of NumPy is the ndarray (n-dimensional array). Unlike Python lists, NumPy arrays are stored in contiguous memory blocks, enabling incredibly fast operations.`,
        codeExamples: [
          {
            id: "numpy-1-ex1",
            title: "NumPy in Action",
            description: "Basic NumPy example comparing to Python",
            code: { python: "import numpy as np\n\n# Python list - slow\npy_list = list(range(1000000))\npy_result = [x * 2 for x in py_list]\n\n# NumPy array - fast\nnp_array = np.arange(1000000)\nnp_result = np_array * 2\n\nprint(\"NumPy result:\", np_result[:5])" },
            explanation: "NumPy performs vectorized operations without explicit loops."
          },
          {
            id: "numpy-1-ex2",
            title: "NumPy Powers Data Science",
            description: "Shows NumPy's role in data ecosystem",
            code: { python: "import numpy as np\n\n# NumPy is the foundation for many libraries\n# pandas - uses NumPy arrays internally\n# matplotlib - numerical data for plotting\n# scikit-learn - numerical computing for ML\n# tensorflow/pytorch - numerical operations\n\n# Simple example showing numerical computing\ndata = np.random.randn(1000)\nmean = np.mean(data)\nstd = np.std(data)\nprint(f\"Mean: {mean:.4f}, Std: {std:.4f}\")" },
            explanation: "Understanding NumPy helps you understand the entire Python data ecosystem."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Python Prerequisite",
            content: "This track assumes you know Python basics (variables, loops, functions, lists). If you need to learn Python first, visit the Python track on CodeMastery."
          },
          {
            type: "tip",
            title: "NumPy is Everywhere",
            content: "NumPy is used in virtually every scientific Python project - from simple data analysis to complex machine learning models."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does NumPy stand for?", options: ["Number Python", "Numerical Python", "Numeric Python", "Number Processing"], correctAnswer: 1, explanation: "NumPy stands for Numerical Python." },
        { id: "q2", type: "mcq", question: "Why is NumPy faster than Python lists?", options: ["Uses more memory", "Written in C, stored contiguously", "Uses special Python", "It's not faster"], correctAnswer: 1, explanation: "NumPy arrays are stored in contiguous memory blocks and operations are executed in C." },
        { id: "q3", type: "true-false", question: "pandas is built on top of NumPy.", correctAnswer: true, explanation: "pandas uses NumPy arrays internally for its DataFrame operations." },
        { id: "q4", type: "fill-blank", question: "The core data structure in NumPy is called _____.", correctAnswer: "ndarray", explanation: "ndarray (n-dimensional array) is the core NumPy data structure." },
        { id: "q5", type: "mcq", question: "Which is NOT a NumPy capability?", options: ["Linear algebra", "Random number generation", "Web development", "Fourier transforms"], correctAnswer: 2, explanation: "NumPy is for numerical computing, not web development." },
        { id: "q6", type: "spot-the-bug", question: "What could cause NumPy to be slow?", code: "import numpy as np\narr = np.array([1,2,3])\nfor i in arr:\n    print(i * 2)", options: ["Syntax error", "Using loops instead of vectorization", "Wrong import", "Array too small"], correctAnswer: 1, explanation: "Using Python loops defeats the purpose of NumPy's vectorized operations." },
        { id: "q7", type: "mcq", question: "Which companies use NumPy?", options: ["Only small startups", "Google, NASA, Netflix", "Only academic institutions", "Nobody uses it anymore"], correctAnswer: 1, explanation: "NumPy is used by major tech companies and research institutions worldwide." },
        { id: "q8", type: "fill-blank", question: "The _____ operations in NumPy work on entire arrays without explicit loops.", correctAnswer: "vectorized", explanation: "Vectorized operations are a key NumPy feature enabling fast computations." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "NumPy", value: "Numerical Python library" },
      { label: "ndarray", value: "N-dimensional array" },
      { label: "Vectorization", value: "Operating on arrays without loops" },
      { label: "Contiguous", value: "Elements stored in adjacent memory" }
    ]
  },
  {
    id: "numpy-2",
    number: 2,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Installing NumPy",
    subtitle: "Setup and Configuration",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["numpy-1"],
    learningObjectives: ["Install NumPy via pip", "Verify NumPy installation", "Check NumPy version", "Set up development environment"],
    sections: [
      {
        id: "numpy-2-1",
        title: "Installing NumPy",
        whyItMatters: "Proper installation is the first step to using NumPy effectively.",
        content: `**Using pip (recommended):**

\`\`\`bash
pip install numpy
\`\`\`

**Using conda:**

\`\`\`bash
conda install numpy
\`\`\`

**Verifying Installation:**

\`\`\`python
import numpy as np
print(np.__version__)
\`\`\`

**Version Compatibility:**
- NumPy 1.x: Legacy code, many tutorials
- NumPy 2.x (2024): Latest features, improved performance

Check your version to ensure compatibility with tutorials and packages.`,
        codeExamples: [
          {
            id: "numpy-2-ex1",
            title: "Installation Check",
            description: "Verify NumPy is properly installed",
            code: { python: "import numpy as np\n\n# Check version\nprint(f\"NumPy version: {np.__version__}\")\n\n# Check built configuration\nprint(f\"Architecture: {np.show_config()}\")" },
            explanation: "Always verify your NumPy installation before starting development."
          }
        ],
        callouts: [
          {
            type: "warning",
            title: "Version Matters",
            content: "Some code may not work with NumPy 2.0+. Check compatibility when using older tutorials."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is the recommended way to install NumPy?", options: ["Download from website", "pip install numpy", "Copy from friend", "Use an old version"], correctAnswer: 1, explanation: "pip install numpy is the standard installation method." },
        { id: "q2", type: "fill-blank", question: "The attribute _____ contains the NumPy version string.", correctAnswer: "__version__", explanation: "np.__version__ returns the installed NumPy version." },
        { id: "q3", type: "mcq", question: "What command shows NumPy configuration?", options: ["np.config", "np.show_config()", "np.info()", "np.system()"], correctAnswer: 1, explanation: "np.show_config() displays build configuration information." },
        { id: "q4", type: "true-false", question: "NumPy 2.0+ may have breaking changes from 1.x.", correctAnswer: true, explanation: "NumPy 2.0 introduced some breaking changes for backward compatibility." },
        { id: "q5", type: "spot-the-bug", question: "Why doesn't this work?", code: "import numpy\nprint(numpy.version)", options: ["numpy doesn't have version", "Should be np.version", "Should be np.__version__", "Python too old"], correctAnswer: 2, explanation: "Use np.__version__ (double underscore) to access the version." },
        { id: "q6", type: "mcq", question: "What conda command installs NumPy?", options: ["conda get numpy", "conda install numpy", "conda fetch numpy", "conda download numpy"], correctAnswer: 1, explanation: "conda install numpy is the standard conda installation command." },
        { id: "q7", type: "fill-blank", question: "The standard alias for numpy is _____.", correctAnswer: "np", explanation: "import numpy as np is the conventional import alias." },
        { id: "q8", type: "mcq", question: "What is the correct import statement?", options: ["import numpy", "import numpy as np", "from numpy import *", "All of the above"], correctAnswer: 3, explanation: "All work, but 'import numpy as np' is the recommended convention." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "pip install", value: "Install via pip" },
      { label: "np.__version__", value: "Check version" },
      { label: "np", value: "Standard alias" }
    ]
  },
  {
    id: "numpy-3",
    number: 3,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "NumPy Arrays vs Python Lists",
    subtitle: "Understanding the Difference",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["numpy-2"],
    learningObjectives: ["Compare NumPy arrays to Python lists", "Understand memory efficiency", "Know when to use each"],
    sections: [
      {
        id: "numpy-3-1",
        title: "Python Lists",
        whyItMatters: "Understanding why NumPy is better starts with understanding Python lists.",
        content: `**Python Lists:**
- Heterogeneous: Can store different types
- Dynamic: Size can change
- Pointers: Each element is a pointer to a Python object
- Memory: More memory overhead per element
- Speed: Slower for numerical operations

\`\`\`python
py_list = [1, 2, 3, "hello", 3.14]  # Can mix types
py_list.append(4)  # Dynamic resizing
\`\`\`

**Memory Layout:**
Each element in a Python list is actually a pointer to a Python object stored elsewhere in memory. This adds significant overhead.`,
        codeExamples: [
          {
            id: "numpy-3-ex1",
            title: "Python List Characteristics",
            description: "Demonstrating Python list features",
            code: { python: "py_list = [1, 2, 3, 4, 5]\nprint(\"Can mix types:\", [1, \"hello\", 3.14])\n\n# Dynamic - can add/remove\npy_list.append(6)\npy_list.pop()\n\n# Each element is a Python object\nimport sys\nsmall_list = [1, 2, 3]\nprint(f\"List size in bytes: {sys.getsizeof(small_list)}\")" },
            explanation: "Python lists are flexible but have overhead from storing Python objects."
          }
        ]
      },
      {
        id: "numpy-3-2",
        title: "NumPy Arrays",
        whyItMatters: "NumPy arrays are optimized for numerical computing.",
        content: `**NumPy Arrays:**
- Homogeneous: All elements must be same type
- Fixed size (unless resized explicitly)
- Contiguous memory: All elements stored together
- Compact: Much less memory overhead
- Fast: Vectorized C operations

\`\`\`python
import numpy as np\narr = np.array([1, 2, 3, 4, 5])
\`\`\`

**Key Differences:**

| Aspect | Python List | NumPy Array |
|--------|-------------|-------------|
| Speed | Slow for math | Fast |
| Memory | High overhead | Compact |
| Type | Mixed allowed | Must be same |
| Operations | Loop-based | Vectorized |

**Homogeneous Types Enable:**
- Contiguous memory allocation
- SIMD (Single Instruction Multiple Data) processing
- Cache-efficient access patterns`,
        codeExamples: [
          {
            id: "numpy-3-ex2",
            title: "NumPy Array Advantages",
            description: "Showing NumPy benefits",
            code: { python: "import numpy as np\nimport sys\n\n# NumPy arrays are compact\narr = np.array([1, 2, 3, 4, 5])\nprint(f\"Array size: {arr.nbytes} bytes\")\n\n# Homogeneous - all same type\narr = np.array([1, 2, 3])\nprint(f\"dtype: {arr.dtype}\")  # int64\n\n# Vectorized operations\narr = np.array([1, 2, 3])\nprint(arr * 2)  # [2 4 6] - no loop needed!" },
            explanation: "NumPy's homogeneous typing enables incredible performance."
          }
        ]
      },
      {
        id: "numpy-3-3",
        title: "Performance Comparison",
        whyItMatters: "Numbers don't lie - NumPy is dramatically faster.",
        content: `**Benchmark: Adding 10 million numbers**

\`\`\`python
import numpy as np
import time\n\n# Python list\nn = 10_000_000\npy_list = list(range(n))\nstart = time.time()\npy_result = [x + 1 for x in py_list]\npy_time = time.time() - start\nprint(f\"Python: {py_time:.3f}s\")\n\n# NumPy\nnp_array = np.arange(n)\nstart = time.time()\nnp_result = np_array + 1\nnp_time = time.time() - start\nprint(f\"NumPy: {np_time:.3f}s\")\nprint(f\"Speedup: {py_time/np_time:.1f}x\")
\`\`\`

**Typical Results:**
- Element-wise operations: 10-100x faster
- Mathematical functions: 10-50x faster
- Memory usage: 5-10x less

This performance difference is why NumPy is essential for any numerical computing task.`,
        codeExamples: [
          {
            id: "numpy-3-ex3",
            title: "Performance Demo",
            description: "Real performance comparison",
            code: { python: "import numpy as np\nimport time\n\n# Small demonstration\npy_list = list(range(10000))\nnp_array = np.arange(10000)\n\n# Python: multiply each by 2\nstart = time.time()\npy_result = [x * 2 for x in py_list]\npy_time = time.time() - start\n\n# NumPy: multiply by 2\nstart = time.time()\nnp_result = np_array * 2\nnp_time = time.time() - start\n\nprint(f\"Python: {py_time*1000:.2f}ms\")\nprint(f\"NumPy: {np_time*1000:.2f}ms\")\nprint(f\"Speedup: {py_time/np_time:.1f}x\")" },
            explanation: "Even small operations show massive performance gains."
          }
        ],
        callouts: [
          {
            type: "pro-tip",
            title: "When to Use Lists",
            content: "Use Python lists when you need mixed types or simple non-numerical collections. Use NumPy for numerical computing."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What makes NumPy arrays faster than Python lists?", options: ["Bigger file size", "C code + contiguous memory", "More complex syntax", "Uses more CPU"], correctAnswer: 1, explanation: "NumPy's C implementation and contiguous memory layout enable fast operations." },
        { id: "q2", type: "fill-blank", question: "NumPy arrays require all elements to be the _____.", correctAnswer: "same type", explanation: "Homogeneous typing is essential for NumPy's efficiency." },
        { id: "q3", type: "true-false", question: "Python lists can store mixed data types.", correctAnswer: true, explanation: "Python lists can hold integers, strings, floats, etc. all in one list." },
        { id: "q4", type: "mcq", question: "What does 'contiguous memory' mean?", options: ["Scattered across memory", "Elements stored next to each other", "Cannot be moved", "Very large"], correctAnswer: 1, explanation: "Contiguous memory means array elements are stored in adjacent memory locations." },
        { id: "q5", type: "spot-the-bug", question: "What happens with this?", code: "arr = np.array([1, 'hello', 3.14])", options: ["Works fine", "Error", "Only takes numbers", "Converts to object type"], correctAnswer: 3, explanation: "Mixed types are converted to object dtype, losing performance benefits." },
        { id: "q6", type: "mcq", question: "The nbytes attribute shows what?", options: ["Number of bytes per element", "Total array memory", "Array shape", "Data type"], correctAnswer: 1, explanation: "arr.nbytes gives the total bytes consumed by the array's data buffer." },
        { id: "q7", type: "fill-blank", question: "Operations on entire arrays without loops are called _____ operations.", correctAnswer: "vectorized", explanation: "Vectorized operations apply to entire arrays at once." },
        { id: "q8", type: "mcq", question: "Which has less memory overhead per element?", options: ["Python list", "NumPy array", "Same", "Depends on type"], correctAnswer: 1, explanation: "NumPy arrays use less memory because they store raw values, not Python objects." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "Homogeneous", value: "Same type for all elements" },
      { label: "Contiguous", value: "Adjacent memory storage" },
      { label: "Vectorized", value: "Operations on entire arrays" },
      { label: ".nbytes", value: "Total memory of array" }
    ]
  },
  {
    id: "numpy-4",
    number: 4,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Creating Arrays",
    subtitle: "Various Array Creation Methods",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["numpy-3"],
    learningObjectives: ["Create arrays from Python lists", "Use array creation functions", "Understand array types"],
    sections: [
      {
        id: "numpy-4-1",
        title: "Basic Array Creation",
        whyItMatters: "Knowing different ways to create arrays is fundamental to NumPy.",
        content: `**From Python List:**

\`\`\`python
import numpy as np\narr = np.array([1, 2, 3, 4, 5])
\`\`\`

**Other Creation Methods:**

\`\`\`python
# Zeros\nnp.zeros(5)           # [0, 0, 0, 0, 0]\nnp.zeros((2, 3))        # 2x3 array of zeros\n\n# Ones\nnp.ones(5)             # [1, 1, 1, 1, 1]\n\n# Range\nnp.arange(10)           # [0, 1, 2, ..., 9]\nnp.arange(0, 10, 2)    # [0, 2, 4, 6, 8]\n\n# Linear spacing\nnp.linspace(0, 1, 5)    # [0, 0.25, 0.5, 0.75, 1]\n\n# Empty (uninitialized)\nnp.empty(5)            # Contains whatever was in memory\n\n# Identity\nnp.eye(3)               # 3x3 identity matrix
\`\`\``,
        codeExamples: [
          {
            id: "numpy-4-ex1",
            title: "Array Creation Methods",
            description: "Different ways to create arrays",
            code: { python: "import numpy as np\n\n# From list\narr1 = np.array([1, 2, 3])\nprint(\"From list:\", arr1)\n\n# Zeros\narr2 = np.zeros((2, 3))\nprint(\"Zeros:\\n\", arr2)\n\n# Range\narr3 = np.arange(0, 10, 2)\nprint(\"Arange:\", arr3)\n\n# Linspace\narr4 = np.linspace(0, 1, 5)\nprint(\"Linspace:\", arr4)\n\n# Identity\narr5 = np.eye(3)\nprint(\"Identity:\\n\", arr5)" },
            explanation: "NumPy provides many ways to create arrays for different needs."
          }
        ]
      },
      {
        id: "numpy-4-2",
        title: "Random Arrays",
        whyItMatters: "Random numbers are essential for simulation and testing.",
        content: `**Random Number Generation:**

\`\`\`python
# Random floats [0, 1)\nnp.random.rand(5)           # 1D\nnp.random.rand(3, 4)        # 2D\n\n# Random integers\nnp.random.randint(0, 10, 5) # 5 ints [0, 10)\n\n# Normal distribution\nnp.random.randn(1000)        # mean=0, std=1\n\n# Choice\nnp.random.choice(arr, 3)    # 3 random elements\n\n# Shuffle\nnp.random.shuffle(arr)       # In-place shuffle\n\`\`\`

**Random State:**
\`\`\`python
np.random.seed(42)           # Reproducible results\n\`\`\`
Setting a seed ensures the same random numbers each run.`,
        codeExamples: [
          {
            id: "numpy-4-ex2",
            title: "Random Arrays",
            description: "Creating arrays with random values",
            code: { python: "import numpy as np\n\n# Set seed for reproducibility\nnp.random.seed(42)\n\n# Random 3x3 matrix\nrandom_arr = np.random.rand(3, 3)\nprint(\"Random 3x3:\\n\", random_arr)\n\n# Random integers\nint_arr = np.random.randint(1, 100, 5)\nprint(\"Random ints:\", int_arr)\n\n# Normal distribution\nnormal_arr = np.random.randn(5)\nprint(\"Normal dist:\", normal_arr)\n\n# Choice\narr = np.array(['a', 'b', 'c', 'd'])\nchoice = np.random.choice(arr, 2)\nprint(\"Random choice:\", choice)" },
            explanation: "Random arrays are used for testing, simulation, and machine learning."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does np.arange(5) return?", options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3]", "[1, 2, 3, 4]"], correctAnswer: 0, explanation: "arange(5) creates values from 0 to 4 (5 not included)." },
        { id: "q2", type: "fill-blank", question: "np.zeros((3, 4)) creates a _____ by _____ array.", correctAnswer: "3x4", explanation: "The tuple (3, 4) defines a 3-row, 4-column array." },
        { id: "q3", type: "mcq", question: "What does np.linspace(0, 10, 5) create?", options: ["5 values 0-10", "10 values 0-5", "5 equal steps 0-10", "10 equal steps"], correctAnswer: 2, explanation: "linspace creates n evenly spaced values from start to end." },
        { id: "q4", type: "true-false", question: "np.random.seed() makes random numbers reproducible.", correctAnswer: true, explanation: "Setting a seed ensures the same sequence of random numbers." },
        { id: "q5", type: "mcq", question: "Which creates an identity matrix?", options: ["np.identity(3)", "np.eye(3)", "Both a and b", "np.id(3)"], correctAnswer: 2, explanation: "Both np.identity() and np.eye() create identity matrices." },
        { id: "q6", type: "spot-the-bug", question: "What is wrong with np.random.rand(3,4,5)?", options: ["Too many dimensions", "Nothing", "Wrong syntax", "Seed issue"], correctAnswer: 1, explanation: "This creates a 3x4x5 3D array correctly." },
        { id: "q7", type: "fill-blank", question: "np.empty(5) creates an array with _____ values.", correctAnswer: "uninitialized", explanation: "empty() allocates memory but doesn't initialize values." },
        { id: "q8", type: "mcq", question: "np.random.randn(100) follows what distribution?", options: ["Uniform", "Normal (Gaussian)", "Exponential", "Poisson"], correctAnswer: 1, explanation: "randn generates numbers from standard normal distribution." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "np.array()", value: "Create from Python list" },
      { label: "np.arange()", value: "Array from range" },
      { label: "np.zeros()", value: "Array of zeros" },
      { label: "np.random", value: "Random number module" },
      { label: "np.linspace()", value: "Evenly spaced values" }
    ]
  },
  {
    id: "numpy-5",
    number: 5,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Array Attributes and Shapes",
    subtitle: "Understanding Array Properties",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["numpy-4"],
    learningObjectives: ["Understand array attributes", "Know shape and dimensions", "Work with different array types"],
    sections: [
      {
        id: "numpy-5-1",
        title: "Key Attributes",
        whyItMatters: "Array attributes tell you about the structure and content of your data.",
        content: `**Essential Attributes:**

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6]])\n\narr.shape      # (2, 3) - dimensions\narr.ndim       # 2 - number of dimensions\narr.size       # 6 - total elements\narr.dtype      # dtype('int64') - data type\narr.nbytes     # 48 - memory in bytes\narr.itemsize   # 8 - bytes per element
\`\`\`

**Shape:** Tuple indicating size of each dimension
- (5,) - 1D, 5 elements
- (3, 4) - 2D, 3 rows, 4 columns
- (2, 3, 4) - 3D, 2x3x4 elements

**ndim:** Number of dimensions (rank)
**size:** Total number of elements`,
        codeExamples: [
          {
            id: "numpy-5-ex1",
            title: "Exploring Array Attributes",
            description: "Understanding array properties",
            code: { python: "import numpy as np\n\n# Create different arrays\narr1d = np.array([1, 2, 3])\narr2d = np.array([[1, 2, 3], [4, 5, 6]])\narr3d = np.array([[[1,2], [3,4]], [[5,6], [7,8]]])\n\nprint(\"1D array:\")\nprint(f\"  shape: {arr1d.shape}, ndim: {arr1d.ndim}, size: {arr1d.size}\")\n\nprint(\"\\n2D array:\")\nprint(f\"  shape: {arr2d.shape}, ndim: {arr2d.ndim}, size: {arr2d.size}\")\n\nprint(\"\\n3D array:\")\nprint(f\"  shape: {arr3d.shape}, ndim: {arr3d.ndim}, size: {arr3d.size}\")\n\n# Memory\nprint(f\"\\n2D array memory: {arr2d.nbytes} bytes\")" },
            explanation: "Understanding attributes helps you work with multidimensional arrays."
          }
        ]
      },
      {
        id: "numpy-5-2",
        title: "Data Types",
        whyItMatters: "Data types determine what operations are possible and memory usage.",
        content: `**NumPy Data Types:**

| dtype | Description | Size |
|-------|-------------|------|
| int8 | Integer -128 to 127 | 1 byte |
| int16 | Integer -32768 to 32767 | 2 bytes |
| int32 | Integer | 4 bytes |
| int64 | Integer | 8 bytes |
| uint8 | Unsigned 0-255 | 1 byte |
| float16 | Half precision | 2 bytes |
| float32 | Single precision | 4 bytes |
| float64 | Double precision | 8 bytes |
| complex64 | Complex | 8 bytes |
| complex128 | Complex | 16 bytes |
| bool | Boolean | 1 byte |
| object | Python object | variable |

**Specifying dtype:**
\`\`\`python
arr = np.array([1, 2, 3], dtype=np.float32)\narr = np.array([1, 2, 3], dtype=np.float64)\n\`\`\``,
        codeExamples: [
          {
            id: "numpy-5-ex2",
            title: "Data Types in Action",
            description: "Working with different dtypes",
            code: { python: "import numpy as np\n\n# Default (usually int64 or float64)\narr = np.array([1, 2, 3])\nprint(f\"Default: {arr.dtype}\")\n\n# Explicit dtype\narr_f32 = np.array([1, 2, 3], dtype=np.float32)\nprint(f\"float32: {arr_f32.dtype}\")\n\n# Float\narr_float = np.array([1.5, 2.5, 3.5])\nprint(f\"Float: {arr_float.dtype}\")\n\n# Boolean\narr_bool = np.array([1, 0, 1, 0], dtype=bool)\nprint(f\"Bool: {arr_bool.dtype}\")\n\n# Memory comparison\narr_i8 = np.arange(1000, dtype=np.int8)\narr_i64 = np.arange(1000, dtype=np.int64)\nprint(f\"int8: {arr_i8.nbytes} bytes\")\nprint(f\"int64: {arr_i64.nbytes} bytes\")" },
            explanation: "Choosing the right dtype saves memory and can speed up operations."
          }
        ],
        callouts: [
          {
            type: "common-mistake",
            title: "Integer Overflow",
            content: "Using int8 for values >127 causes overflow. Be careful with small integer types!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does arr.shape return for a 2D array?", options: ["2", "The dimensions tuple", "arr.size", "arr.ndim"], correctAnswer: 1, explanation: "shape returns a tuple like (rows, columns)." },
        { id: "q2", type: "fill-blank", question: "A 2D array with shape (4, 5) has _____ elements.", correctAnswer: "20", explanation: "4 * 5 = 20 elements total." },
        { id: "q3", type: "mcq", question: "Which has more precision: float32 or float64?", options: ["float32", "float64", "Same", "Depends on system"], correctAnswer: 1, explanation: "float64 (double precision) has more precision than float32 (single precision)." },
        { id: "q4", type: "true-false", question: "arr.ndim returns the total number of elements.", correctAnswer: false, explanation: "ndim returns the number of dimensions, not the total elements." },
        { id: "q5", type: "mcq", question: "What dtype uses 1 byte per element?", options: ["int16", "int32", "int8", "float32"], correctAnswer: 2, explanation: "int8 uses 1 byte (8 bits) per element." },
        { id: "q6", type: "spot-the-bug", question: "What's wrong? arr = np.array([1.5, 2.5], dtype=int)", options: ["Syntax error", "Truncates decimal", "Wrong dtype name", "Nothing"], correctAnswer: 1, explanation: "Converting float to int truncates the decimal part." },
        { id: "q7", type: "fill-blank", question: "The _____ attribute gives total memory used by array.", correctAnswer: "nbytes", explanation: "nbytes returns the total bytes consumed by the array." },
        { id: "q8", type: "mcq", question: "dtype='float64' is same as?", options: ["float32", "float", "int64", "Python float"], correctAnswer: 1, explanation: "dtype=float defaults to float64 in NumPy." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".shape", value: "Dimensions tuple" },
      { label: ".ndim", value: "Number of dimensions" },
      { label: ".size", value: "Total elements" },
      { label: ".dtype", value: "Data type" },
      { label: ".nbytes", value: "Total memory bytes" }
    ]
  },
  {
    id: "numpy-6",
    number: 6,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Indexing and Slicing",
    subtitle: "Accessing Array Elements",
    difficulty: "Beginner" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["numpy-5"],
    learningObjectives: ["Index arrays", "Slice arrays", "Use fancy indexing"],
    sections: [
      {
        id: "numpy-6-1",
        title: "Basic Indexing",
        whyItMatters: "Accessing specific elements is fundamental to working with arrays.",
        content: `**1D Array Indexing:**

\`\`\`python
arr = np.array([10, 20, 30, 40, 50])\n\narr[0]      # 10 (first element)\narr[-1]     # 50 (last element)\narr[2:4]    # [30, 40] (slice)\narr[:3]     # [10, 20, 30] (start to index)\narr[::2]    # [10, 30, 50] (every other)\n\`\`\`

**2D Array Indexing:**

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\n\narr[0]          # First row: [1, 2, 3]\narr[0, 0]       # 1 (row 0, col 0)\narr[1, 2]       # 6 (row 1, col 2)\narr[:, 1]       # Column 1: [2, 5, 8]\narr[0:2, 1:3]   # Submatrix
\`\`\`

**Negative Indexing:**
Negative indices count from the end: -1 is last, -2 is second-to-last.`,
        codeExamples: [
          {
            id: "numpy-6-ex1",
            title: "Indexing Basics",
            description: "Different indexing methods",
            code: { python: "import numpy as np\n\narr = np.array([10, 20, 30, 40, 50])\nprint(\"First:\", arr[0])\nprint(\"Last:\", arr[-1])\nprint(\"Slice [1:3]:\", arr[1:3])\nprint(\"Every other:\", arr[::2])\n\n# 2D\narr2d = np.array([[1,2,3], [4,5,6], [7,8,9]])\nprint(\"\\nRow 1:\", arr2d[1])\nprint(\"Element [0,2]:\", arr2d[0, 2])\nprint(\"Col 1:\", arr2d[:, 1])\nprint(\"Submatrix [0:2, 1:3]:\\n\", arr2d[0:2, 1:3])" },
            explanation: "Indexing allows you to access any element or subset of an array."
          }
        ]
      },
      {
        id: "numpy-6-2",
        title: "Advanced Indexing",
        whyItMatters: "Fancy indexing and boolean masks are powerful data selection tools.",
        content: `**Boolean Indexing:**

\`\`\`python
arr = np.array([1, 2, 3, 4, 5])\n\narr[arr > 3]    # [4, 5] - elements > 3\narr[arr % 2 == 0]  # [2, 4] - even elements\n\`\`\`

**Fancy Indexing (Integer Arrays):**

\`\`\`python
arr = np.array([10, 20, 30, 40, 50])\n\narr[[0, 2, 4]]   # [10, 30, 50] - specific indices\narr[[True, False, True, False, True]]  # Same result\n\`\`\`

**Using np.where:**

\`\`\`python
arr = np.array([1, 2, 3, 4, 5])\nindices = np.where(arr > 3)  # (array([3, 4]),)\narr[indices]     # [4, 5]\n\n# Replace values\nresult = np.where(arr > 3, arr, 0)  # Replace >3 with arr, others with 0\n\`\`\``,
        codeExamples: [
          {
            id: "numpy-6-ex2",
            title: "Boolean and Fancy Indexing",
            description: "Powerful selection methods",
            code: { python: "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\n\n# Boolean indexing\nprint(\"Even numbers:\", arr[arr % 2 == 0])\nprint(\"Greater than 5:\", arr[arr > 5])\n\n# Fancy indexing - specific positions\nprint(\"Positions [0, 2, 4]:\", arr[[0, 2, 4]])\n\n# Using where\nresult = np.where(arr > 5, 'big', 'small')\nprint(\"Where result:\", result)\n\n# 2D fancy indexing\narr2d = np.arange(9).reshape(3, 3)\nprint(\"\\nRow 0 and 2:\", arr2d[[0, 2]])\nprint(\"Cols 0 and 2:\", arr2d[:, [0, 2]])" },
            explanation: "Boolean and fancy indexing make complex data selection easy."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is arr[0:2] for arr=[10,20,30]?", options: ["[[10,20]]", "[10, 20]", "[20, 30]", "Error"], correctAnswer: 1, explanation: "0:2 gives elements at index 0 and 1 (excludes index 2)." },
        { id: "q2", type: "fill-blank", question: "arr[-1] refers to the _____ element.", correctAnswer: "last", explanation: "Negative indices count from the end." },
        { id: "q3", type: "mcq", question: "What does arr[:, 0] return for a 2D array?", options: ["First column", "First row", "All columns of row 0", "Error"], correctAnswer: 0, explanation: ": means all rows, so : , 0 means column 0." },
        { id: "q4", type: "true-false", question: "arr[arr > 3] uses boolean indexing.", correctAnswer: true, explanation: "Using a boolean array to select elements is boolean indexing." },
        { id: "q5", type: "mcq", question: "What does arr[[0, 2, 4]] do?", options: ["Indexes 0-4", "Indices 0,2,4", "Indices 1,3,5", "Slices 0-4"], correctAnswer: 1, explanation: "Fancy indexing with [0,2,4] selects those specific indices." },
        { id: "q6", type: "spot-the-bug", question: "What happens? arr = np.array([1,2,3]); arr[5]", options: ["Returns 3", "Error", "Returns last element", "Returns 0"], correctAnswer: 1, explanation: "Index 5 is out of bounds for a 3-element array." },
        { id: "q7", type: "fill-blank", question: "np.where(condition) returns the _____ of matching elements.", correctAnswer: "indices", explanation: "where() returns indices where condition is True." },
        { id: "q8", type: "mcq", question: "arr[::2] selects every _____ element.", correctAnswer: "other (even index)", explanation: "::2 means step of 2, selecting every other element." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "[start:stop]", value: "Slice from start to stop-1" },
      { label: "[::-1]", value: "Reverse array" },
      { label: "[condition]", value: "Boolean indexing" },
      { label: "[[i,j,k]]", value: "Fancy/indexing" }
    ]
  },
  {
    id: "numpy-7",
    number: 7,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Array Operations",
    subtitle: "Element-wise Operations",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["numpy-6"],
    learningObjectives: ["Perform element-wise operations", "Use arithmetic operators", "Apply mathematical functions"],
    sections: [
      {
        id: "numpy-7-1",
        title: "Arithmetic Operations",
        whyItMatters: "NumPy makes mathematical operations simple and fast.",
        content: `**Element-wise Operations:**

\`\`\`python
arr = np.array([1, 2, 3, 4, 5])\n\narr + 1     # [2, 3, 4, 5, 6] - addition\narr - 1     # [0, 1, 2, 3, 4] - subtraction\narr * 2     # [2, 4, 6, 8, 10] - multiplication\narr / 2     # [0.5, 1., 1.5, 2., 2.5] - division\narr ** 2    # [1, 4, 9, 16, 25] - power\narr % 2     # [1, 0, 1, 0, 1] - modulo\n\`\`\`

**Array to Array Operations:**

\`\`\`python
a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\na + b       # [5, 7, 9] - element-wise\na * b       # [4, 10, 18] - element-wise product\n\`\`\`

**In-place Operations:**
\`\`\`python
arr += 1     # In-place addition\narr *= 2     # In-place multiplication
\`\`\``,
        codeExamples: [
          {
            id: "numpy-7-ex1",
            title: "Arithmetic Operations",
            description: "Basic math on arrays",
            code: { python: "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\n\nprint(\"Original:\", arr)\nprint(\"+ 10:\", arr + 10)\nprint(\"* 3:\", arr * 3)\nprint(\"** 2:\", arr ** 2)\n\n# Array operations\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(\"\\na + b:\", a + b)\nprint(\"a * b:\", a * b)\n\n# In-place\narr = np.array([1, 2, 3])\narr += 5\nprint(\"\\nAfter +=5:\", arr)" },
            explanation: "NumPy operations apply element-wise, making math simple."
          }
        ]
      },
      {
        id: "numpy-7-2",
        title: "Mathematical Functions",
        whyItMatters: "NumPy provides comprehensive mathematical functions.",
        content: `**Universal Functions (ufuncs):**

\`\`\`python
arr = np.array([0, 1, 2, 3, 4])\n\nnp.sin(arr)      # Sine\nnp.cos(arr)      # Cosine\nnp.tan(arr)      # Tangent\nnp.sqrt(arr)     # Square root\nnp.log(arr)      # Natural log\nnp.log10(arr)    # Log base 10\nnp.exp(arr)      # Exponential\n\n# Rounding\nnp.round(arr)    # Round to nearest\nnp.floor(arr)    # Floor (round down)\nnp.ceil(arr)     # Ceiling (round up)\nnp.trunc(arr)    # Truncate decimal\n\`\`\`

**Aggregations:**

\`\`\`python
arr.sum()        # Sum\narr.mean()       # Mean\narr.std()        # Standard deviation\narr.min()        # Minimum\narr.max()        # Maximum\narr.prod()       # Product\n\`\`\``,
        codeExamples: [
          {
            id: "numpy-7-ex2",
            title: "Math Functions",
            description: "Mathematical operations on arrays",
            code: { python: "import numpy as np\nimport numpy.math as math\n\narr = np.array([0.0, 1.0, 2.0, 3.0, 4.0])\n\nprint(\"sqrt:\", np.sqrt(arr))\nprint(\"exp:\", np.exp(arr))\nprint(\"log:\", np.log(arr))\n\n# Rounding\nmixed = np.array([1.2, 3.5, 2.7])\nprint(\"\\nOriginal:\", mixed)\nprint(\"floor:\", np.floor(mixed))\nprint(\"ceil:\", np.ceil(mixed))\nprint(\"round:\", np.round(mixed))\n\n# Aggregations\nprint(\"\\nsum:\", arr.sum())\nprint(\"mean:\", arr.mean())\nprint(\"std:\", arr.std())" },
            explanation: "NumPy's mathematical functions are optimized for array operations."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is [1,2,3] + [4,5,6] in NumPy?", options: ["[5,7,9]", "[1,2,3,4,5,6]", "Error", "[4,10,18]"], correctAnswer: 0, explanation: "Element-wise addition: 1+4=5, 2+5=7, 3+6=9." },
        { id: "q2", type: "fill-blank", question: "np.sqrt(9) returns _____.", correctAnswer: "3.0", explanation: "sqrt calculates square root." },
        { id: "q3", type: "mcq", question: "Which returns the smallest element?", options: [".min()", ".minimum()", ".smallest()", ".lowest()"], correctAnswer: 0, explanation: ".min() returns the minimum value in the array." },
        { id: "q4", type: "true-false", question: "arr += 1 modifies the original array.", correctAnswer: true, explanation: "In-place operations modify the array directly." },
        { id: "q5", type: "mcq", question: "np.floor(3.7) returns what?", options: ["3", "4", "3.7", "Error"], correctAnswer: 0, explanation: "floor rounds down to the nearest integer." },
        { id: "q6", type: "spot-the-bug", question: "What happens with np.log(0)?", options: ["0", "Error", "-inf", "1"], correctAnswer: 2, explanation: "log(0) is undefined but NumPy returns -inf with a warning." },
        { id: "q7", type: "fill-blank", question: "The _____ function rounds to the nearest integer.", correctAnswer: "round", explanation: "np.round() rounds to the nearest integer." },
        { id: "q8", type: "mcq", question: "np.exp(0) equals what?", options: ["0", "1", "e", "error"], correctAnswer: 1, explanation: "Any number to the power of 0 is 1." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "+ - * /", value: "Element-wise operations" },
      { label: "**", value: "Power/exponentiation" },
      { label: "np.sqrt()", value: "Square root" },
      { label: "np.sin/cos/tan", value: "Trigonometric" },
      { label: ".sum()/.mean()", value: "Aggregations" }
    ]
  },
  {
    id: "numpy-8",
    number: 8,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Data Types in NumPy",
    subtitle: "Understanding dtype",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["numpy-7"],
    learningObjectives: ["Work with different data types", "Convert between types", "Understand type casting"],
    sections: [
      {
        id: "numpy-8-1",
        title: "Understanding dtype",
        whyItMatters: "dtype affects memory usage and computational speed.",
        content: `**Viewing dtype:**

\`\`\`python
arr = np.array([1, 2, 3])\narr.dtype       # dtype('int64')\n\narr = np.array([1.5, 2.5])\narr.dtype       # dtype('float64')\n\narr = np.array([True, False])\narr.dtype       # dtype('bool')\n\`\`\`

**Specifying dtype:**

\`\`\`python
# At creation\narr = np.array([1, 2, 3], dtype=np.float32)\narr = np.array([1, 2, 3], dtype=np.int16)\n\n# After creation\narr = arr.astype(np.float32)\n\`\`\`

**Common dtypes:**
- int8, int16, int32, int64 (signed integers)
- uint8, uint16, uint32, uint64 (unsigned)
- float16, float32, float64 (floating point)
- complex64, complex128 (complex numbers)
- bool (boolean)
- object (Python objects)
- string_ (strings)`,
        codeExamples: [
          {
            id: "numpy-8-ex1",
            title: "Working with dtypes",
            description: "Creating and converting dtypes",
            code: { python: "import numpy as np\n\n# Various dtypes\nint_arr = np.array([1, 2, 3], dtype=np.int8)\nprint(f\"int8: {int_arr.dtype}, bytes: {int_arr.nbytes}\")\n\nfloat_arr = np.array([1.5, 2.5], dtype=np.float32)\nprint(f\"float32: {float_arr.dtype}, bytes: {float_arr.nbytes}\")\n\n# Type conversion\nint_to_float = int_arr.astype(np.float32)\nprint(f\"Converted: {int_to_float.dtype}\")\n\n# Float precision\nprecise = np.array([1.123456789], dtype=np.float64)\nless_precise = np.array([1.123456789], dtype=np.float32)\nprint(f\"float64: {precise[0]:.10f}\")\nprint(f\"float32: {less_precise[0]:.10f}\")" },
            explanation: "Choosing the right dtype balances precision and memory."
          }
        ]
      },
      {
        id: "numpy-8-2",
        title: "Type Casting",
        whyItMatters: "Automatic and explicit type conversion is important for data processing.",
        content: `**Automatic Casting:**
NumPy automatically upcasts to prevent overflow:

\`\`\`python
arr = np.array([1, 2, 3])\narr + 1.5      # float64 - promoted from int\n\n# But different dtypes may surprise you!\nint_arr = np.array([1, 2, 3], dtype=np.int8)\nint_arr + 100   # May overflow! int8 max is 127\n\`\`\`

**Explicit Conversion:**

\`\`\`python
# astype method\narr = np.array([1.5, 2.7, 3.3])\nint_arr = arr.astype(np.int32)  # [1, 2, 3] - truncates\n\n# Using np.asarray\nfloat_arr = np.asarray(arr, dtype=np.float16)\n\n# View vs Copy\narr = np.array([1, 2, 3], dtype=np.int32)\nint8_view = arr.view(np.int8)  # Same memory, different view\nint8_copy = arr.astype(np.int8)  # New array, different memory
\`\`\``,
        codeExamples: [
          {
            id: "numpy-8-ex2",
            title: "Type Casting Examples",
            description: "Different type conversions",
            code: { python: "import numpy as np\n\n# Automatic promotion\narr = np.array([1, 2, 3])\nresult = arr + 1.5\nprint(f\"int + float = {result.dtype}\")\n\n# Explicit conversion\narr = np.array([1.5, 2.7, 3.9])\nprint(f\"float: {arr}\")\nprint(f\"to int: {arr.astype(np.int32)}\")\n\n# Overflow example\narr8 = np.array([100, 120, 130], dtype=np.int8)\nprint(f\"\\nint8 array: {arr8}\")\nprint(f\"Adding 30: {arr8 + 30}\")  # Overflow!\n\n# View vs copy\narr = np.array([1, 2, 3], dtype=np.int32)\nview = arr.view(np.int8)\ncopy = arr.astype(np.int8)\nprint(f\"\\nView: {view}, Copy: {copy}\")" },
            explanation: "Understanding type casting helps avoid unexpected results."
          }
        ],
        callouts: [
          {
            type: "warning",
            title: "Overflow Warning",
            content: "Small integer types (int8, int16) can overflow silently. Be careful with arithmetic!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "int64 + float32 produces what dtype?", options: ["int64", "float32", "float64", "Error"], correctAnswer: 2, explanation: "Mixed arithmetic promotes to the higher precision type (float64)." },
        { id: "q2", type: "fill-blank", question: "Use _____ method to change dtype explicitly.", correctAnswer: "astype", explanation: "arr.astype(new_dtype) explicitly converts the array." },
        { id: "q3", type: "mcq", question: "What happens with int8 array + 200?", options: ["200", "Overflow/wrap", "Error", "200.0"], correctAnswer: 1, explanation: "int8 (range -128 to 127) overflows with 200, wrapping around." },
        { id: "q4", type: "true-false", question: "view() creates a copy of the data.", correctAnswer: false, explanation: "view() creates a different view of the same memory, not a copy." },
        { id: "q5", type: "mcq", question: "astype() always creates what?", options: ["View", "Copy", "Error", "Same type"], correctAnswer: 1, explanation: "astype() creates a new array with the new dtype." },
        { id: "q6", type: "spot-the-bug", question: "What happens: np.array([1,2], dtype=float) + np.array([1,2], dtype=complex)", options: ["Error", "complex128", "float64", "Depends"], correctAnswer: 1, explanation: "float + complex promotes to complex." },
        { id: "q7", type: "fill-blank", question: "dtype='int8' can store values from _____ to _____.", correctAnswer: "-128 to 127", explanation: "int8 is 8-bit signed, range -128 to 127." },
        { id: "q8", type: "mcq", question: "Which is the most precise float type?", options: ["float16", "float32", "float64", "float128"], correctAnswer: 3, explanation: "float128 provides the highest precision (platform dependent)." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".astype()", value: "Convert dtype" },
      { label: ".view()", value: "Different view, same memory" },
      { label: "int8 range", value: "-128 to 127" },
      { label: "promotion", value: "Automatic upcasting" }
    ]
  },
  {
    id: "numpy-9",
    number: 9,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Reshaping Arrays",
    subtitle: "Changing Array Dimensions",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["numpy-8"],
    learningObjectives: ["Use reshape", "Flatten arrays", "Understand views vs copies"],
    sections: [
      {
        id: "numpy-9-1",
        title: "reshape()",
        whyItMatters: "Reshaping is essential for preparing data for machine learning and matrix operations.",
        content: `**Basic Reshape:**

\`\`\`python
arr = np.arange(12)  # [0, 1, ..., 11]\n\narr.reshape(3, 4)   # 3 rows, 4 columns\narr.reshape(2, 6)   # 2 rows, 6 columns\narr.reshape(4, 3)   # 4 rows, 3 columns\narr.reshape(2, 2, 3)  # 3D array\n\`\`\`

**Key Rules:**
- Total elements must match
- -1 infers one dimension
- Original data is not copied (view when possible)

\`\`\`python
arr = np.arange(12)\n# Infer the size\narr.reshape(3, -1)  # 3 rows, 4 cols (inferred)\narr.reshape(-1, 4)  # 3 rows, 4 cols (inferred)\n\`\`\``,
        codeExamples: [
          {
            id: "numpy-9-ex1",
            title: "Reshape Operations",
            description: "Different ways to reshape",
            code: { python: "import numpy as np\n\narr = np.arange(12)\nprint(\"Original:\", arr)\n\n# 2D reshape\narr_2d = arr.reshape(3, 4)\nprint(\"\\n3x4 reshape:\\n\", arr_2d)\n\n# 3D reshape\narr_3d = arr.reshape(2, 3, 2)\nprint(\"\\n2x3x2 reshape:\\n\", arr_3d)\n\n# Using -1 to infer\narr_auto = arr.reshape(4, -1)\nprint(\"\\n4 rows (auto cols):\\n\", arr_auto)\n\n# Reshape doesn't copy\narr_view = arr.reshape(2, 6)\narr[0] = 99\nprint(\"\\nOriginal changed, view changes too:\", arr_view[0, 0])" },
            explanation: "reshape() creates a view when possible, saving memory."
          }
        ]
      },
      {
        id: "numpy-9-2",
        title: "Flatten and Ravel",
        whyItMatters: "Flattening is often needed for feeding data into models.",
        content: `**Flattening to 1D:**

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6]])\n\n# flatten() - always returns copy\nflat = arr.flatten()  # [1, 2, 3, 4, 5, 6]\n\n# ravel() - returns view when possible\nravel = arr.ravel()    # [1, 2, 3, 4, 5, 6]\n\n# reshape(-1) - also works\nflat_reshape = arr.reshape(-1)\n\`\`\`

**Key Difference:**
- flatten() always copies data
- ravel() tries to return a view (faster, less memory)

\`\`\`python
arr = np.array([[1,2], [3,4]])\nflat = arr.flatten()\nflat[0] = 99\nprint(\"Original:\", arr)  # Unchanged (flatten is copy)\n\nravel = arr.ravel()\nravel[0] = 99\nprint(\"Original:\", arr)  # Changed (ravel is view)\n\`\`\``,
        codeExamples: [
          {
            id: "numpy-9-ex2",
            title: "Flatten vs Ravel",
            description: "Flattening arrays to 1D",
            code: { python: "import numpy as np\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(\"Original:\\n\", arr)\n\n# Flatten (copy)\nflat = arr.flatten()\nprint(\"\\nFlattened:\", flat)\n\n# Ravel (view)\nravel = arr.ravel()\nprint(\"Raveled:\", ravel)\n\n# Demonstrate copy vs view\nflat_copy = arr.flatten()\nflat_copy[0] = 99\nprint(\"\\nAfter modifying flatten copy:\")\nprint(\"  Original:\", arr)  # Unchanged\nprint(\"  Flatten copy:\", flat_copy)\n\nravel_view = arr.ravel()\nravel_view[0] = 88\nprint(\"\\nAfter modifying ravel view:\")\nprint(\"  Original:\", arr)  # Changed!" },
            explanation: "Use flatten() when you need to modify the copy without affecting original."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does arr.reshape(3, -1) do?", options: ["Error", "3x3 array", "3x4 array", "Depends on array"], correctAnswer: 2, explanation: "-1 infers the missing dimension (12 elements / 3 = 4)." },
        { id: "q2", type: "fill-blank", question: "flatten() returns a _____ while ravel() returns a _____ when possible.", correctAnswer: "copy, view", explanation: "flatten always copies, ravel tries to return a view." },
        { id: "q3", type: "mcq", question: "Can you reshape (12,) to (2, 3, 2)?", options: ["Yes", "No - too few", "No - too many", "Depends"], correctAnswer: 0, explanation: "2*3*2 = 12, so it works." },
        { id: "q4", type: "true-false", question: "reshape always creates a copy of the data.", correctAnswer: false, explanation: "reshape creates a view when possible, only copies when necessary." },
        { id: "q5", type: "mcq", question: "What is the result of arr.reshape(-1)?", options: ["Error", "1D array", "Same shape", "2D array"], correctAnswer: 1, explanation: "reshape(-1) flattens to 1D." },
        { id: "q6", type: "spot-the-bug", question: "Why doesn't this work? arr = np.arange(10); arr.reshape(3, 4)", options: ["Syntax error", "Size mismatch", "Wrong order", "Needs -1"], correctAnswer: 1, explanation: "3*4=12 but array has only 10 elements." },
        { id: "q7", type: "fill-blank", question: "arr.reshape(2, 3, 2) creates a _____ dimensional array.", correctAnswer: "3", explanation: "Three numbers in the shape tuple means 3D." },
        { id: "q8", type: "mcq", question: "Which is faster for flattening?", options: ["flatten()", "ravel()", "reshape(-1)", "All same"], correctAnswer: 1, explanation: "ravel() is usually faster because it may return a view instead of copying." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".reshape()", value: "Change shape, view when possible" },
      { label: ".flatten()", value: "Copy to 1D" },
      { label: ".ravel()", value: "View to 1D (faster)" },
      { label: "-1", value: "Infer dimension" }
    ]
  },
  {
    id: "numpy-10",
    number: 10,
    partLabel: "Part 1: NumPy Fundamentals",
    title: "Array Iteration",
    subtitle: "Looping Through Arrays",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["numpy-9"],
    learningObjectives: ["Iterate over arrays", "Use nditer", "Understand when to avoid loops"],
    sections: [
      {
        id: "numpy-10-1",
        title: "Basic Iteration",
        whyItMatters: "While vectorization is preferred, sometimes you need to iterate.",
        content: `**1D Array Iteration:**

\`\`\`python
arr = np.array([1, 2, 3, 4, 5])\n\nfor element in arr:\n    print(element)\n\`\`\`

**2D Array Iteration:**
Iterating over rows:

\`\`\`python
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])\n\nfor row in arr_2d:\n    print(row)  # Prints each row\n\n# Iterate with index\nfor i, row in enumerate(arr_2d):\n    print(f\"Row {i}: {row}\")\n\`\`\`

**Iterating Elements (slow):**
\`\`\`python
for element in arr_2d.flat:\n    print(element)\n\`\`\``,
        codeExamples: [
          {
            id: "numpy-10-ex1",
            title: "Iteration Methods",
            description: "Different ways to iterate",
            code: { python: "import numpy as np\n\narr = np.array([1, 2, 3])\nprint(\"1D iteration:\")\nfor x in arr:\n    print(f\"  {x}\")\n\narr_2d = np.array([[1, 2], [3, 4], [5, 6]])\nprint(\"\\n2D row iteration:\")\nfor row in arr_2d:\n    print(f\"  {row}\")\n\nprint(\"\\nFlattened iteration:\")\nfor element in arr_2d.flat:\n    print(f\"  {element}\")" },
            explanation: "Iteration is useful but usually slower than vectorized operations."
          }
        ]
      },
      {
        id: "numpy-10-2",
        title: "nditer - Advanced Iteration",
        whyItMatters: "nditer provides efficient iteration with options.",
        content: `**nditer - Multi-dimensional Iterator:**

\`\`\`python
arr = np.arange(12).reshape(3, 4)\n\n# Basic iteration\nfor x in np.nditer(arr):\n    print(x)\n\n# With flags\nfor x in np.nditer(arr, flags=['external_loop']):\n    print(x)  # Returns larger chunks\n\n# With op flags\narr1 = np.array([1, 2, 3])\narr2 = np.array([10, 20, 30])\nfor a, b in np.nditer([arr1, arr2]):\n    print(f\"{a} + {b} = {a + b}\")\n\`\`\`

**Note:** While iteration exists, NumPy operations should usually be vectorized. Only iterate when absolutely necessary.`,
        codeExamples: [
          {
            id: "numpy-10-ex2",
            title: "nditer Examples",
            description: "Advanced iteration with nditer",
            code: { python: "import numpy as np\n\narr = np.array([[1, 2], [3, 4]])\n\n# nditer iteration\nprint(\"Using nditer:\")\nfor x in np.nditer(arr):\n    print(x, end=\" \")\n\n# Iterate multiple arrays\nprint(\"\\n\\nMultiple arrays:\")\na = np.array([1, 2])\nb = np.array([10, 20])\nfor x, y in np.nditer([a, b]):\n    print(f\"{x} * {y} = {x*y}\")" },
            explanation: "nditer is powerful but usually vectorization is better."
          }
        ],
        callouts: [
          {
            type: "pro-tip",
            title: "Prefer Vectorization",
            content: "Iterating defeats the purpose of NumPy. Always try to use vectorized operations first!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does arr.flat do?", options: ["Returns 1D view", "Flattens the array", "Returns iterator", "Both a and c"], correctAnswer: 3, explanation: "arr.flat is a 1D iterator over the array." },
        { id: "q2", type: "fill-blank", question: "Iterating over a 2D array iterates over the _____.", correctAnswer: "rows", explanation: "Default iteration over 2D arrays yields rows." },
        { id: "q3", type: "mcq", question: "Which is the most efficient for large arrays?", options: ["Python loop", "for x in arr", "nditer", "Vectorized operations"], correctAnswer: 3, explanation: "Vectorized operations are always fastest in NumPy." },
        { id: "q4", type: "true-false", question: "Iterating is faster than vectorized operations in NumPy.", correctAnswer: false, explanation: "Vectorized operations are 10-100x faster than iteration." },
        { id: "q5", type: "mcq", question: "What does nditer return with external_loop flag?", options: ["Single elements", "Arrays/chunks", "Index tuples", "Nothing"], correctAnswer: 1, explanation: "external_loop returns larger chunks for efficiency." },
        { id: "q6", type: "spot-the-bug", question: "What's wrong? for i in range(len(arr)): print(arr[i])", options: ["Nothing wrong", "Not idiomatic", "Wrong loop type", "Syntax error"], correctAnswer: 1, explanation: "Direct iteration is preferred: for x in arr." },
        { id: "q7", type: "fill-blank", question: "The _____ attribute provides a 1D iterator over an array.", correctAnswer: "flat", explanation: "arr.flat is a 1D flat iterator." },
        { id: "q8", type: "mcq", question: "What iterates over elements rather than rows?", options: ["for row in arr", "arr.flat", "nditer with external_loop", "enumerate(arr)"], correctAnswer: 1, explanation: "arr.flat iterates over individual elements." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "for x in arr", value: "Iterate elements (1D)" },
      { label: "for row in arr", value: "Iterate rows (2D)" },
      { label: ".flat", value: "1D iterator over elements" },
      { label: "nditer", value: "Multi-dim iterator" },
      { label: "Vectorize!", value: "Avoid loops when possible" }
    ]
  }
];

export const numpyTrack: Track = {
  id: "numpy",
  title: "NumPy",
  titleBn: "নামপাই",
  tagline: "Fast numerical computing for Python",
  taglineBn: "পাইথনের জন্য দ্রুত সংখ্যাগত কম্পিউটিং",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "numpy",
  totalChapters: numpyChapters.length,
  estimatedHours: Math.round(numpyChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: numpyChapters,
  brandColor: "#4DABCF",
  glowColor: "rgba(77, 171, 207, 0.4)",
};