import { Track } from "./types";

export const scipyTrack: Track = {
  id: "scipy",
  title: "SciPy",
  titleBn: "\u09b8\u09be\u0987\u09aa\u09be\u0987",
  tagline: "Scientific computing and numerical analysis with Python",
  taglineBn: "\u09aa\u09be\u0987\u09a5\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09b8\u09be\u09af\u09bc\u09c7\u09a8\u09cd\u099f\u09bf\u09ab\u09bf\u0995 \u0995\u09ae\u09cd\u09aa\u09bf\u0989\u099f\u09bf\u0982 \u098f\u09ac\u0982 \u09a8\u09bf\u0989\u09ae\u09c7\u09b0\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u0985\u09cd\u09af\u09be\u09a8\u09be\u09b2\u09be\u0987\u09b8\u09bf\u09b8",
  icon: "\ud83e\uddea",
  colorVar: "scipy",
  brandColor: "#8CAAE6",
  glowColor: "rgba(140, 170, 230, 0.3)",
  totalChapters: 50,
  estimatedHours: 85,
  chapters: [
    {
      id: "scipy-1", number: 1, title: "What Is SciPy and Why It Matters?", subtitle: "Understanding the scientific Python ecosystem", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Understand what SciPy is","Know the SciPy ecosystem","Identify real-world applications"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-1-1", title: "Overview", whyItMatters: "What Is SciPy and Why It Matters? is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nWhat Is SciPy and Why It Matters? teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for What Is SciPy and Why It Matters?')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-1-ex1", title: "Getting Started", description: "Basic What Is SciPy and Why It Matters?", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for What Is SciPy and Why It Matters?')" }, explanation: "Start exploring What Is SciPy and Why It Matters?." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-1","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-2", number: 2, title: "Installing and Setting Up SciPy", subtitle: "Getting your scientific computing environment ready", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Install SciPy","Verify installation","Set up a scientific environment"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-2-1", title: "Overview", whyItMatters: "Installing and Setting Up SciPy is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nInstalling and Setting Up SciPy teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for Installing and Setting Up SciPy')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-2-ex1", title: "Getting Started", description: "Basic Installing and Setting Up SciPy", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for Installing and Setting Up SciPy')" }, explanation: "Start exploring Installing and Setting Up SciPy." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-2","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-3", number: 3, title: "Understanding the Scientific Python Ecosystem", subtitle: "How SciPy fits with NumPy, matplotlib, and beyond", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Understand ecosystem components","Know when to use each library","Build scientific pipelines"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-3-1", title: "Overview", whyItMatters: "Understanding the Scientific Python Ecosystem is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nUnderstanding the Scientific Python Ecosystem teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for Understanding the Scientific Python Ecosystem')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-3-ex1", title: "Getting Started", description: "Basic Understanding the Scientific Python Ecosystem", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for Understanding the Scientific Python Ecosystem')" }, explanation: "Start exploring Understanding the Scientific Python Ecosystem." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-3","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-4", number: 4, title: "NumPy Review for SciPy", subtitle: "Essential NumPy concepts for scientific computing", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Review NumPy arrays","Master broadcasting","Use advanced indexing"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-4-1", title: "Overview", whyItMatters: "NumPy Review for SciPy is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nNumPy Review for SciPy teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for NumPy Review for SciPy')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-4-ex1", title: "Getting Started", description: "Basic NumPy Review for SciPy", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for NumPy Review for SciPy')" }, explanation: "Start exploring NumPy Review for SciPy." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-4","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-5", number: 5, title: "Working with Arrays and Matrices", subtitle: "Creating, manipulating, and visualizing matrices", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Create matrices","Perform matrix operations","Visualize matrices"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-5-1", title: "Overview", whyItMatters: "Working with Arrays and Matrices is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nWorking with Arrays and Matrices teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for Working with Arrays and Matrices')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-5-ex1", title: "Getting Started", description: "Basic Working with Arrays and Matrices", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for Working with Arrays and Matrices')" }, explanation: "Start exploring Working with Arrays and Matrices." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-5","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-6", number: 6, title: "Mathematical Functions in SciPy", subtitle: "Special functions, Bessel, gamma, and more", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Use special functions","Work with Bessel functions","Apply gamma and beta functions"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-6-1", title: "Overview", whyItMatters: "Mathematical Functions in SciPy is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nMathematical Functions in SciPy teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for Mathematical Functions in SciPy')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-6-ex1", title: "Getting Started", description: "Basic Mathematical Functions in SciPy", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for Mathematical Functions in SciPy')" }, explanation: "Start exploring Mathematical Functions in SciPy." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-6","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-7", number: 7, title: "Scientific Computing Workflows", subtitle: "Building end-to-end scientific analysis pipelines", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Design scientific workflows","Combine libraries","Reproduce analyses"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-7-1", title: "Overview", whyItMatters: "Scientific Computing Workflows is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nScientific Computing Workflows teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for Scientific Computing Workflows')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-7-ex1", title: "Getting Started", description: "Basic Scientific Computing Workflows", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for Scientific Computing Workflows')" }, explanation: "Start exploring Scientific Computing Workflows." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-7","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-8", number: 8, title: "Real-World Applications of SciPy", subtitle: "Case studies across science and engineering", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Explore real applications","Connect theory to practice","Understand industry use"], partLabel: "Part 1: SciPy Foundations",
      sections: [
        {
          id: "scipy-8-1", title: "Overview", whyItMatters: "Real-World Applications of SciPy is fundamental to scientific computing.",
          content: "**Core Concepts:**\n\nReal-World Applications of SciPy teaches essential skills for scientific Python.\n\n```python\nfrom scipy import linalg, optimize, stats\nimport numpy as np\n\nprint('Ready for Real-World Applications of SciPy')\n```\n\n**Key Takeaways:**\n- SciPy builds on NumPy arrays\n- Each module serves a specific purpose\n- Real-world applications span physics, engineering, data science",
          codeExamples: [
            { id: "scipy-8-ex1", title: "Getting Started", description: "Basic Real-World Applications of SciPy", code: { scipy: "import numpy as np\nfrom scipy import linalg\nprint('SciPy is ready for Real-World Applications of SciPy')" }, explanation: "Start exploring Real-World Applications of SciPy." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-8","type":"mcq","question":"What does SciPy provide?","options":["Scientific computing tools","Web framework","Game engine","Mobile SDK"],"correctAnswer":"Scientific computing tools","explanation":"SciPy provides scientific and technical computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"SciPy","value":"Scientific Python"},{"label":"NumPy","value":"Array foundation"},{"label":"scipy.linalg","value":"Linear algebra"}],
    },
    {
      id: "scipy-9", number: 9, title: "Linear Algebra Fundamentals", subtitle: "Vectors, matrices, and transformations", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Understand vector spaces","Perform matrix operations","Apply transformations"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-9-1", title: "Overview", whyItMatters: "Linear Algebra Fundamentals is essential for scientific computing.",
          content: "**Core Concepts:**\n\nLinear Algebra Fundamentals using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-9-ex1", title: "Practice", description: "Try Linear Algebra Fundamentals", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Linear Algebra Fundamentals concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-9","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-10", number: 10, title: "Matrix Operations with scipy.linalg", subtitle: "Advanced linear algebra with SciPy", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use scipy.linalg","Compute matrix norms","Handle special matrices"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-10-1", title: "Overview", whyItMatters: "Matrix Operations with scipy.linalg is essential for scientific computing.",
          content: "**Core Concepts:**\n\nMatrix Operations with scipy.linalg using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-10-ex1", title: "Practice", description: "Try Matrix Operations with scipy.linalg", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Matrix Operations with scipy.linalg concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-10","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-11", number: 11, title: "Solving Linear Systems", subtitle: "Direct and iterative solvers", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Solve Ax = b","Use direct solvers","Use iterative solvers"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-11-1", title: "Overview", whyItMatters: "Solving Linear Systems is essential for scientific computing.",
          content: "**Core Concepts:**\n\nSolving Linear Systems using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-11-ex1", title: "Practice", description: "Try Solving Linear Systems", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Solving Linear Systems concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-11","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-12", number: 12, title: "Eigenvalues and Eigenvectors", subtitle: "Spectral decomposition and applications", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 75, prerequisites: [], learningObjectives: ["Compute eigenvalues","Understand eigendecomposition","Apply PCA concepts"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-12-1", title: "Overview", whyItMatters: "Eigenvalues and Eigenvectors is essential for scientific computing.",
          content: "**Core Concepts:**\n\nEigenvalues and Eigenvectors using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-12-ex1", title: "Practice", description: "Try Eigenvalues and Eigenvectors", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Eigenvalues and Eigenvectors concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-12","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-13", number: 13, title: "Matrix Decomposition Methods", subtitle: "LU, QR, SVD, and Cholesky", difficulty: "Intermediate", estimatedMinutes: 65, xpReward: 80, prerequisites: [], learningObjectives: ["Perform LU decomposition","Use QR decomposition","Apply SVD"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-13-1", title: "Overview", whyItMatters: "Matrix Decomposition Methods is essential for scientific computing.",
          content: "**Core Concepts:**\n\nMatrix Decomposition Methods using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-13-ex1", title: "Practice", description: "Try Matrix Decomposition Methods", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Matrix Decomposition Methods concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-13","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-14", number: 14, title: "Sparse Matrices", subtitle: "Efficient storage and operations", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Create sparse matrices","Use scipy.sparse","Solve sparse systems"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-14-1", title: "Overview", whyItMatters: "Sparse Matrices is essential for scientific computing.",
          content: "**Core Concepts:**\n\nSparse Matrices using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-14-ex1", title: "Practice", description: "Try Sparse Matrices", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Sparse Matrices concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-14","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-15", number: 15, title: "Matrix Performance Optimization", subtitle: "Vectorization and memory efficiency", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Optimize matrix operations","Use vectorization","Profile performance"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-15-1", title: "Overview", whyItMatters: "Matrix Performance Optimization is essential for scientific computing.",
          content: "**Core Concepts:**\n\nMatrix Performance Optimization using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-15-ex1", title: "Practice", description: "Try Matrix Performance Optimization", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Matrix Performance Optimization concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-15","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-16", number: 16, title: "Real Engineering Matrix Problems", subtitle: "Applied linear algebra in engineering", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 85, prerequisites: [], learningObjectives: ["Apply linear algebra","Solve engineering problems","Build simulations"], partLabel: "Part 2: Linear Algebra",
      sections: [
        {
          id: "scipy-16-1", title: "Overview", whyItMatters: "Real Engineering Matrix Problems is essential for scientific computing.",
          content: "**Core Concepts:**\n\nReal Engineering Matrix Problems using scipy.linalg.\n\n```python\nfrom scipy import linalg\nimport numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix created')\n```\n\n**SciPy Advantages:**\n- Optimized BLAS/LAPACK routines\n- Handles both dense and sparse matrices\n- Production-ready numerical stability",
          codeExamples: [
            { id: "scipy-16-ex1", title: "Practice", description: "Try Real Engineering Matrix Problems", code: { scipy: "import numpy as np\nfrom scipy import linalg\n\nA = np.array([[1, 2], [3, 4]])\nprint('Matrix A:', A.shape)\nprint('Det:', linalg.det(A))" }, explanation: "Practice Real Engineering Matrix Problems concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-16","type":"mcq","question":"Which module handles linear algebra in SciPy?","options":["scipy.linalg","scipy.algebra","scipy.matrix","scipy.lin"],"correctAnswer":"scipy.linalg","explanation":"scipy.linalg provides linear algebra operations.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.linalg","value":"Linear algebra"},{"label":"Matrix","value":"2D array operations"}],
    },
    {
      id: "scipy-17", number: 17, title: "Numerical Optimization Basics", subtitle: "Fundamentals of optimization theory", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Understand optimization","Define objective functions","Know local vs global optima"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-17-1", title: "Overview", whyItMatters: "Numerical Optimization Basics using SciPy.",
          content: "**Core Concepts:**\n\nNumerical Optimization Basics with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Numerical Optimization Basics')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-17-ex1", title: "Practice", description: "Try Numerical Optimization Basics", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Numerical Optimization Basics')" }, explanation: "Practice Numerical Optimization Basics concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-17","type":"mcq","question":"Which module does Numerical Optimization Basics use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-18", number: 18, title: "scipy.optimize Overview", subtitle: "The SciPy optimization module", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use scipy.optimize","Choose algorithms","Set parameters"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-18-1", title: "Overview", whyItMatters: "scipy.optimize Overview using SciPy.",
          content: "**Core Concepts:**\n\nscipy.optimize Overview with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for scipy.optimize Overview')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-18-ex1", title: "Practice", description: "Try scipy.optimize Overview", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning scipy.optimize Overview')" }, explanation: "Practice scipy.optimize Overview concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-18","type":"mcq","question":"Which module does scipy.optimize Overview use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-19", number: 19, title: "Minimization Algorithms", subtitle: "Gradient descent, Nelder-Mead, BFGS", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 75, prerequisites: [], learningObjectives: ["Use minimize()","Compare algorithms","Handle constraints"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-19-1", title: "Overview", whyItMatters: "Minimization Algorithms using SciPy.",
          content: "**Core Concepts:**\n\nMinimization Algorithms with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Minimization Algorithms')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-19-ex1", title: "Practice", description: "Try Minimization Algorithms", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Minimization Algorithms')" }, explanation: "Practice Minimization Algorithms concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-19","type":"mcq","question":"Which module does Minimization Algorithms use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-20", number: 20, title: "Root Finding Methods", subtitle: "Finding zeros of functions", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use root_scalar","Use root","Apply to equations"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-20-1", title: "Overview", whyItMatters: "Root Finding Methods using SciPy.",
          content: "**Core Concepts:**\n\nRoot Finding Methods with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Root Finding Methods')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-20-ex1", title: "Practice", description: "Try Root Finding Methods", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Root Finding Methods')" }, explanation: "Practice Root Finding Methods concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-20","type":"mcq","question":"Which module does Root Finding Methods use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-21", number: 21, title: "Curve Fitting and Regression", subtitle: "Fitting models to data", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use curve_fit","Fit polynomial models","Evaluate fit quality"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-21-1", title: "Overview", whyItMatters: "Curve Fitting and Regression using SciPy.",
          content: "**Core Concepts:**\n\nCurve Fitting and Regression with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Curve Fitting and Regression')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-21-ex1", title: "Practice", description: "Try Curve Fitting and Regression", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Curve Fitting and Regression')" }, explanation: "Practice Curve Fitting and Regression concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-21","type":"mcq","question":"Which module does Curve Fitting and Regression use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-22", number: 22, title: "Nonlinear Optimization", subtitle: "Solving nonlinear problems", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Handle nonlinearity","Use global optimization","Set bounds"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-22-1", title: "Overview", whyItMatters: "Nonlinear Optimization using SciPy.",
          content: "**Core Concepts:**\n\nNonlinear Optimization with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Nonlinear Optimization')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-22-ex1", title: "Practice", description: "Try Nonlinear Optimization", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Nonlinear Optimization')" }, explanation: "Practice Nonlinear Optimization concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-22","type":"mcq","question":"Which module does Nonlinear Optimization use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-23", number: 23, title: "Constrained Optimization", subtitle: "Optimization with constraints", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Define constraints","Use SLSQP","Use trust-constr"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-23-1", title: "Overview", whyItMatters: "Constrained Optimization using SciPy.",
          content: "**Core Concepts:**\n\nConstrained Optimization with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Constrained Optimization')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-23-ex1", title: "Practice", description: "Try Constrained Optimization", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Constrained Optimization')" }, explanation: "Practice Constrained Optimization concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-23","type":"mcq","question":"Which module does Constrained Optimization use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-24", number: 24, title: "Numerical Integration", subtitle: "Quadrature and integration methods", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use quad","Use dblquad","Apply to integrals"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-24-1", title: "Overview", whyItMatters: "Numerical Integration using SciPy.",
          content: "**Core Concepts:**\n\nNumerical Integration with SciPy's numerical methods.\n\n```python\nfrom scipy import integrate\nimport numpy as np\n\nprint('Ready for Numerical Integration')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-24-ex1", title: "Practice", description: "Try Numerical Integration", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Numerical Integration')" }, explanation: "Practice Numerical Integration concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-24","type":"mcq","question":"Which module does Numerical Integration use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.integrate","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-25", number: 25, title: "Differential Equations with scipy.integrate", subtitle: "Solving ODEs and PDEs", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Use solve_ivp","Set up ODE systems","Analyze solutions"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-25-1", title: "Overview", whyItMatters: "Differential Equations with scipy.integrate using SciPy.",
          content: "**Core Concepts:**\n\nDifferential Equations with scipy.integrate with SciPy's numerical methods.\n\n```python\nfrom scipy import integrate\nimport numpy as np\n\nprint('Ready for Differential Equations with scipy.integrate')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-25-ex1", title: "Practice", description: "Try Differential Equations with scipy.integrate", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Differential Equations with scipy.integrate')" }, explanation: "Practice Differential Equations with scipy.integrate concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-25","type":"mcq","question":"Which module does Differential Equations with scipy.integrate use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.integrate","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-26", number: 26, title: "Real Simulation Systems", subtitle: "Building complete simulations", difficulty: "Advanced", estimatedMinutes: 65, xpReward: 85, prerequisites: [], learningObjectives: ["Build simulations","Integrate multiple modules","Validate results"], partLabel: "Part 3: Optimization and Numerical Methods",
      sections: [
        {
          id: "scipy-26-1", title: "Overview", whyItMatters: "Real Simulation Systems using SciPy.",
          content: "**Core Concepts:**\n\nReal Simulation Systems with SciPy's numerical methods.\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\nprint('Ready for Real Simulation Systems')\n```\n\n**Applications:**\n- Engineering design optimization\n- Parameter estimation\n- Physical system simulation",
          codeExamples: [
            { id: "scipy-26-ex1", title: "Practice", description: "Try Real Simulation Systems", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\nprint('Learning Real Simulation Systems')" }, explanation: "Practice Real Simulation Systems concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-26","type":"mcq","question":"Which module does Real Simulation Systems use?","options":["scipy.optimize","scipy.integrate","scipy.linalg","scipy.special"],"correctAnswer":"scipy.optimize","explanation":"SciPy provides dedicated modules for numerical methods.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.optimize","value":"Optimization"},{"label":"scipy.integrate","value":"Integration/ODEs"}],
    },
    {
      id: "scipy-27", number: 27, title: "Signal Processing Fundamentals", subtitle: "Signals, sampling, and basic operations", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Understand signals","Sampling theory","Signal representations"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-27-1", title: "Overview", whyItMatters: "Signal Processing Fundamentals using SciPy.",
          content: "**Core Concepts:**\n\nSignal Processing Fundamentals using scipy.signal.\n\n```python\nfrom scipy import signal\nimport numpy as np\n\nprint('Ready for Signal Processing Fundamentals')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-27-ex1", title: "Practice", description: "Try Signal Processing Fundamentals", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Signal Processing Fundamentals')" }, explanation: "Practice Signal Processing Fundamentals techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-27","type":"mcq","question":"Which module does Signal Processing Fundamentals use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.signal","explanation":"scipy.signal handles signal processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-28", number: 28, title: "Fourier Transform and FFT", subtitle: "Frequency domain analysis", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Compute FFT","Interpret spectra","Use spectrograms"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-28-1", title: "Overview", whyItMatters: "Fourier Transform and FFT using SciPy.",
          content: "**Core Concepts:**\n\nFourier Transform and FFT using scipy.signal.\n\n```python\nfrom scipy import signal\nimport numpy as np\n\nprint('Ready for Fourier Transform and FFT')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-28-ex1", title: "Practice", description: "Try Fourier Transform and FFT", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Fourier Transform and FFT')" }, explanation: "Practice Fourier Transform and FFT techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-28","type":"mcq","question":"Which module does Fourier Transform and FFT use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.signal","explanation":"scipy.signal handles signal processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-29", number: 29, title: "Filtering Signals", subtitle: "Low-pass, high-pass, band-pass filters", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Design filters","Apply filtering","Analyze filter response"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-29-1", title: "Overview", whyItMatters: "Filtering Signals using SciPy.",
          content: "**Core Concepts:**\n\nFiltering Signals using scipy.signal.\n\n```python\nfrom scipy import signal\nimport numpy as np\n\nprint('Ready for Filtering Signals')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-29-ex1", title: "Practice", description: "Try Filtering Signals", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Filtering Signals')" }, explanation: "Practice Filtering Signals techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-29","type":"mcq","question":"Which module does Filtering Signals use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.signal","explanation":"scipy.signal handles signal processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-30", number: 30, title: "Audio Signal Analysis", subtitle: "Processing audio with SciPy", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Read audio files","Apply audio processing","Generate tones"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-30-1", title: "Overview", whyItMatters: "Audio Signal Analysis using SciPy.",
          content: "**Core Concepts:**\n\nAudio Signal Analysis using scipy.signal.\n\n```python\nfrom scipy import signal\nimport numpy as np\n\nprint('Ready for Audio Signal Analysis')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-30-ex1", title: "Practice", description: "Try Audio Signal Analysis", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Audio Signal Analysis')" }, explanation: "Practice Audio Signal Analysis techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-30","type":"mcq","question":"Which module does Audio Signal Analysis use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.signal","explanation":"scipy.signal handles signal processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-31", number: 31, title: "Time Series Analysis", subtitle: "Trends, seasonality, and forecasting", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Decompose time series","Detect trends","Apply filters"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-31-1", title: "Overview", whyItMatters: "Time Series Analysis using SciPy.",
          content: "**Core Concepts:**\n\nTime Series Analysis using scipy.signal.\n\n```python\nfrom scipy import signal\nimport numpy as np\n\nprint('Ready for Time Series Analysis')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-31-ex1", title: "Practice", description: "Try Time Series Analysis", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Time Series Analysis')" }, explanation: "Practice Time Series Analysis techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-31","type":"mcq","question":"Which module does Time Series Analysis use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.signal","explanation":"scipy.signal handles signal processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-32", number: 32, title: "Image Processing Basics", subtitle: "Reading, displaying, and transforming images", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Read images","Transform images","Use scipy.ndimage"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-32-1", title: "Overview", whyItMatters: "Image Processing Basics using SciPy.",
          content: "**Core Concepts:**\n\nImage Processing Basics using scipy.ndimage.\n\n```python\nfrom scipy import ndimage\nimport numpy as np\n\nprint('Ready for Image Processing Basics')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-32-ex1", title: "Practice", description: "Try Image Processing Basics", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Image Processing Basics')" }, explanation: "Practice Image Processing Basics techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-32","type":"mcq","question":"Which module does Image Processing Basics use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.ndimage","explanation":"scipy.ndimage handles image processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-33", number: 33, title: "Edge Detection and Filters", subtitle: "Sobel, Canny, and morphological ops", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Apply edge detection","Use morphological ops","Clean images"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-33-1", title: "Overview", whyItMatters: "Edge Detection and Filters using SciPy.",
          content: "**Core Concepts:**\n\nEdge Detection and Filters using scipy.ndimage.\n\n```python\nfrom scipy import ndimage\nimport numpy as np\n\nprint('Ready for Edge Detection and Filters')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-33-ex1", title: "Practice", description: "Try Edge Detection and Filters", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Edge Detection and Filters')" }, explanation: "Practice Edge Detection and Filters techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-33","type":"mcq","question":"Which module does Edge Detection and Filters use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.ndimage","explanation":"scipy.ndimage handles image processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-34", number: 34, title: "Image Transformations", subtitle: "Affine, rotation, scaling, and warping", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Apply affine transforms","Rotate and scale","Warp images"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-34-1", title: "Overview", whyItMatters: "Image Transformations using SciPy.",
          content: "**Core Concepts:**\n\nImage Transformations using scipy.ndimage.\n\n```python\nfrom scipy import ndimage\nimport numpy as np\n\nprint('Ready for Image Transformations')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-34-ex1", title: "Practice", description: "Try Image Transformations", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Image Transformations')" }, explanation: "Practice Image Transformations techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-34","type":"mcq","question":"Which module does Image Transformations use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.ndimage","explanation":"scipy.ndimage handles image processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-35", number: 35, title: "Scientific Image Analysis", subtitle: "Measuring and analyzing image data", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Measure features","Analyze microscopy","Process medical images"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-35-1", title: "Overview", whyItMatters: "Scientific Image Analysis using SciPy.",
          content: "**Core Concepts:**\n\nScientific Image Analysis using scipy.ndimage.\n\n```python\nfrom scipy import ndimage\nimport numpy as np\n\nprint('Ready for Scientific Image Analysis')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-35-ex1", title: "Practice", description: "Try Scientific Image Analysis", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Scientific Image Analysis')" }, explanation: "Practice Scientific Image Analysis techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-35","type":"mcq","question":"Which module does Scientific Image Analysis use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.ndimage","explanation":"scipy.ndimage handles image processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-36", number: 36, title: "Real-World Signal Projects", subtitle: "Applied signal and image processing", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 85, prerequisites: [], learningObjectives: ["Build signal analyzers","Process real data","Create pipelines"], partLabel: "Part 4: Signal and Image Processing",
      sections: [
        {
          id: "scipy-36-1", title: "Overview", whyItMatters: "Real-World Signal Projects using SciPy.",
          content: "**Core Concepts:**\n\nReal-World Signal Projects using scipy.ndimage.\n\n```python\nfrom scipy import ndimage\nimport numpy as np\n\nprint('Ready for Real-World Signal Projects')\n```\n\n**Real Applications:**\n- Audio and speech processing\n- Medical image analysis\n- Communications systems",
          codeExamples: [
            { id: "scipy-36-ex1", title: "Practice", description: "Try Real-World Signal Projects", code: { scipy: "import numpy as np\nfrom scipy import signal\n\nprint('Learning Real-World Signal Projects')" }, explanation: "Practice Real-World Signal Projects techniques." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-36","type":"mcq","question":"Which module does Real-World Signal Projects use?","options":["scipy.signal","scipy.ndimage","scipy.linalg","scipy.stats"],"correctAnswer":"scipy.ndimage","explanation":"scipy.ndimage handles image processing.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.signal","value":"Signal processing"},{"label":"scipy.ndimage","value":"Image processing"},{"label":"FFT","value":"Frequency analysis"}],
    },
    {
      id: "scipy-37", number: 37, title: "Statistical Functions in SciPy", subtitle: "Descriptive statistics and distributions", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 65, prerequisites: [], learningObjectives: ["Use scipy.stats","Compute descriptive stats","Work with distributions"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-37-1", title: "Overview", whyItMatters: "Statistical Functions in SciPy using scipy.stats.",
          content: "**Core Concepts:**\n\nStatistical Functions in SciPy using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Statistical Functions in SciPy')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-37-ex1", title: "Practice", description: "Try Statistical Functions in SciPy", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Statistical Functions in SciPy')" }, explanation: "Practice Statistical Functions in SciPy concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-37","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-38", number: 38, title: "Probability Distributions", subtitle: "Continuous and discrete distributions", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Use distribution objects","Compute PDF/CDF","Sample distributions"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-38-1", title: "Overview", whyItMatters: "Probability Distributions using scipy.stats.",
          content: "**Core Concepts:**\n\nProbability Distributions using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Probability Distributions')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-38-ex1", title: "Practice", description: "Try Probability Distributions", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Probability Distributions')" }, explanation: "Practice Probability Distributions concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-38","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-39", number: 39, title: "Hypothesis Testing", subtitle: "T-tests, chi-square, ANOVA", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Perform t-tests","Use chi-square tests","Interpret p-values"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-39-1", title: "Overview", whyItMatters: "Hypothesis Testing using scipy.stats.",
          content: "**Core Concepts:**\n\nHypothesis Testing using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Hypothesis Testing')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-39-ex1", title: "Practice", description: "Try Hypothesis Testing", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Hypothesis Testing')" }, explanation: "Practice Hypothesis Testing concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-39","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-40", number: 40, title: "Statistical Modeling", subtitle: "Regression, fitting, and inference", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Fit statistical models","Make predictions","Validate models"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-40-1", title: "Overview", whyItMatters: "Statistical Modeling using scipy.stats.",
          content: "**Core Concepts:**\n\nStatistical Modeling using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Statistical Modeling')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-40-ex1", title: "Practice", description: "Try Statistical Modeling", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Statistical Modeling')" }, explanation: "Practice Statistical Modeling concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-40","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-41", number: 41, title: "Random Variables and Simulations", subtitle: "Monte Carlo and random processes", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Generate random variables","Run simulations","Analyze results"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-41-1", title: "Overview", whyItMatters: "Random Variables and Simulations using scipy.stats.",
          content: "**Core Concepts:**\n\nRandom Variables and Simulations using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Random Variables and Simulations')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-41-ex1", title: "Practice", description: "Try Random Variables and Simulations", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Random Variables and Simulations')" }, explanation: "Practice Random Variables and Simulations concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-41","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-42", number: 42, title: "Monte Carlo Methods", subtitle: "Simulation-based inference", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: [], learningObjectives: ["Implement Monte Carlo","Estimate integrals","Assess uncertainty"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-42-1", title: "Overview", whyItMatters: "Monte Carlo Methods using scipy.stats.",
          content: "**Core Concepts:**\n\nMonte Carlo Methods using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Monte Carlo Methods')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-42-ex1", title: "Practice", description: "Try Monte Carlo Methods", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Monte Carlo Methods')" }, explanation: "Practice Monte Carlo Methods concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-42","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-43", number: 43, title: "Scientific Experiment Analysis", subtitle: "Design and analyze experiments", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 75, prerequisites: [], learningObjectives: ["Design experiments","Analyze results","Draw conclusions"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-43-1", title: "Overview", whyItMatters: "Scientific Experiment Analysis using scipy.stats.",
          content: "**Core Concepts:**\n\nScientific Experiment Analysis using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Scientific Experiment Analysis')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-43-ex1", title: "Practice", description: "Try Scientific Experiment Analysis", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Scientific Experiment Analysis')" }, explanation: "Practice Scientific Experiment Analysis concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-43","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-44", number: 44, title: "Research Data Workflows", subtitle: "End-to-end statistical analysis", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 85, prerequisites: [], learningObjectives: ["Build research pipelines","Handle real data","Report findings"], partLabel: "Part 5: Statistics and Scientific Analysis",
      sections: [
        {
          id: "scipy-44-1", title: "Overview", whyItMatters: "Research Data Workflows using scipy.stats.",
          content: "**Core Concepts:**\n\nResearch Data Workflows using SciPy's comprehensive statistics module.\n\n```python\nfrom scipy import stats\nimport numpy as np\n\ndata = np.random.normal(0, 1, 100)\nprint('Data generated for Research Data Workflows')\n```\n\n**Applications:**\n- A/B testing\n- Scientific research\n- Quality control",
          codeExamples: [
            { id: "scipy-44-ex1", title: "Practice", description: "Try Research Data Workflows", code: { scipy: "import numpy as np\nfrom scipy import stats\n\nprint('Learning Research Data Workflows')" }, explanation: "Practice Research Data Workflows concepts." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-44","type":"mcq","question":"What does scipy.stats provide?","options":["Statistics functions","Linear algebra","Signal filters","Image processing"],"correctAnswer":"Statistics functions","explanation":"scipy.stats provides statistical distributions and tests.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"scipy.stats","value":"Statistical functions"},{"label":"Distribution","value":"PDF/CDF/sampling"},{"label":"Hypothesis test","value":"p-values and inference"}],
    },
    {
      id: "scipy-45", number: 45, title: "Project: Scientific Calculator System", subtitle: "Build a comprehensive scientific calculator", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Implement scientific functions","Build a calculator UI","Handle complex math"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "scipy-45-1", title: "Scientific Calculator", whyItMatters: "Build a scientific calculator using SciPy.",
          content: "**Project Overview:**\n\nBuild a scientific calculator that can:\n- Evaluate mathematical expressions\n- Compute special functions (gamma, Bessel, erf)\n- Solve equations numerically\n- Perform matrix operations\n- Compute statistics\n\n```python\nfrom scipy import special, optimize, linalg\nimport numpy as np\n\nprint('Scientific Calculator Project')\nprint('Gamma(5):', special.gamma(5))\nprint('Bessel J0(1):', special.j0(1))\n```",
          codeExamples: [
            { id: "scipy-45-ex1", title: "Calculator Project", description: "Scientific calculator implementation", code: { scipy: "from scipy import special\nimport numpy as np\n\nprint('Scientific Calculator')\nprint('Gamma(5):', special.gamma(5))\nprint('Bessel J0(1):', special.j0(1))\nprint('Erf(0.5):', special.erf(0.5))" }, explanation: "Implement the core scientific calculator functions." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-45","type":"mcq","question":"What does special.gamma(5) return?","options":["24","120","6","1"],"correctAnswer":"24","explanation":"Gamma(5) = 4! = 24.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"special functions","value":"Gamma, Bessel, erf"},{"label":"root_scalar","value":"Equation solving"}],
    },
    {
      id: "scipy-46", number: 46, title: "Project: Signal Processing Analyzer", subtitle: "Build a signal analysis toolkit", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Analyze signals","Apply filters","Visualize frequency content"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "scipy-46-1", title: "Signal Analyzer", whyItMatters: "Build a complete signal processing pipeline.",
          content: "**Project Overview:**\n\nCreate a signal analyzer that:\n- Generates test signals (sine, square, noise)\n- Computes FFT and spectrograms\n- Applies low-pass/high-pass filters\n- Detects peaks in signals\n- Measures signal properties\n\n```python\nfrom scipy import signal\nimport numpy as np\n\ndef analyze_signal(t, data):\n    freqs = np.fft.fftfreq(len(t), t[1]-t[0])\n    fft_vals = np.abs(np.fft.fft(data))\n    return freqs, fft_vals\n```",
          codeExamples: [
            { id: "scipy-46-ex1", title: "Signal Analyzer", description: "Basic signal processing pipeline", code: { scipy: "from scipy import signal\nimport numpy as np\n\nfs = 1000\nt = np.linspace(0, 1, fs)\nsig = np.sin(2 * np.pi * 5 * t)\nfreqs = np.fft.fftfreq(len(t), 1/fs)\nmag = np.abs(np.fft.fft(sig))\nprint('Dominant freq:', freqs[np.argmax(mag)])" }, explanation: "Generate a sine wave and find its dominant frequency." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-46","type":"mcq","question":"What function finds peaks in a signal?","options":["signal.find_peaks","signal.peaks","np.peaks","signal.detect"],"correctAnswer":"signal.find_peaks","explanation":"find_peaks identifies local maxima in signals.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"signal.butter","value":"Butterworth filter"},{"label":"fftfreq","value":"Frequency bins"},{"label":"find_peaks","value":"Peak detection"}],
    },
    {
      id: "scipy-47", number: 47, title: "Project: Optimization Dashboard", subtitle: "Interactive optimization exploration", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Explore optimization algorithms","Visualize convergence","Compare methods"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "scipy-47-1", title: "Optimization Dashboard", whyItMatters: "Build a dashboard to explore optimization methods.",
          content: "**Project Overview:**\n\nCreate an optimization dashboard that:\n- Tests multiple optimization algorithms\n- Visualizes convergence paths\n- Compares performance\n- Handles constrained problems\n- Demonstrates curve fitting\n\n```python\nfrom scipy import optimize\nimport numpy as np\n\ndef rosen(x):\n    return sum(100*(x[1:]-x[:-1]**2)**2 + (1-x[:-1])**2)\n\nresult = optimize.minimize(rosen, [0, 0], method='BFGS')\nprint('Minimum:', result.x)\n```",
          codeExamples: [
            { id: "scipy-47-ex1", title: "Compare Optimizers", description: "Comparing optimization methods", code: { scipy: "from scipy import optimize\nimport numpy as np\n\ndef rosen(x):\n    return sum(100*(x[1:]-x[:-1]**2)**2 + (1-x[:-1])**2)\n\nresult = optimize.minimize(rosen, [0, 0], method='BFGS')\nprint('Minimum:', result.x)\nprint('Value:', result.fun)" }, explanation: "Minimize the Rosenbrock function." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-47","type":"mcq","question":"Which method is gradient-free?","options":["Nelder-Mead","BFGS","CG","Newton-CG"],"correctAnswer":"Nelder-Mead","explanation":"Nelder-Mead uses only function values, no gradients.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"Nelder-Mead","value":"Gradient-free"},{"label":"BFGS","value":"Quasi-Newton"},{"label":"curve_fit","value":"Nonlinear fitting"}],
    },
    {
      id: "scipy-48", number: 48, title: "Project: Scientific Image Processing Toolkit", subtitle: "Build an image processing pipeline", difficulty: "Advanced", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Process images with SciPy","Apply filters and transforms","Analyze image features"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "scipy-48-1", title: "Image Toolkit", whyItMatters: "Build a comprehensive image processing toolkit.",
          content: "**Project Overview:**\n\nCreate an image processing toolkit that:\n- Reads and displays images\n- Applies filters (Gaussian, median, Sobel)\n- Performs morphological operations\n- Detects edges and features\n- Measures object properties\n\n```python\nfrom scipy import ndimage\nimport numpy as np\n\ndef process_image(img):\n    blurred = ndimage.gaussian_filter(img, sigma=2)\n    edges = ndimage.sobel(img)\n    return blurred, edges\n```",
          codeExamples: [
            { id: "scipy-48-ex1", title: "Image Processing", description: "Basic image operations", code: { scipy: "from scipy import ndimage\nimport numpy as np\n\nimg = np.random.rand(100, 100)\nblurred = ndimage.gaussian_filter(img, sigma=3)\nedges = ndimage.sobel(blurred)\nprint('Original shape:', img.shape)\nprint('Edge stats:', edges.min(), edges.max())" }, explanation: "Apply Gaussian blur and Sobel edge detection." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-48","type":"mcq","question":"What function applies a Gaussian filter?","options":["ndimage.gaussian_filter","ndimage.blur","signal.gaussian","ndimage.gauss"],"correctAnswer":"ndimage.gaussian_filter","explanation":"gaussian_filter applies Gaussian blur to images.","difficulty":2}], passingScore: 70 },
      cheatSheet: [{"label":"ndimage.gaussian_filter","value":"Gaussian blur"},{"label":"ndimage.sobel","value":"Edge detection"},{"label":"ndimage.label","value":"Connected components"}],
    },
    {
      id: "scipy-49", number: 49, title: "Scientific Challenge Set", subtitle: "Advanced scientific computing challenges", difficulty: "Expert", estimatedMinutes: 120, xpReward: 150, prerequisites: [], learningObjectives: ["Solve complex problems","Integrate multiple SciPy modules","Apply research-grade methods"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "scipy-49-1", title: "Challenges", whyItMatters: "Test your SciPy mastery with these advanced challenges.",
          content: "**Challenge 1: Optimization**\n\nFind the global minimum of the Ackley function.\n\n```python\ndef ackley(x):\n    n = len(x)\n    sum1 = sum(xi**2 for xi in x)\n    sum2 = sum(np.cos(2*np.pi*xi) for xi in x)\n    return -20*np.exp(-0.2*np.sqrt(sum1/n)) - np.exp(sum2/n) + 20 + np.e\n```\n\n**Challenge 2: Signal Processing**\nFilter noisy data and identify dominant frequencies.\n\n**Challenge 3: Image Analysis**\nProcess a synthetic image to count and measure objects.\n\n**Challenge 4: Statistics**\nPerform A/B testing analysis on simulated data.\n\n**Challenge 5: ODE**\nModel a predator-prey system using Lotka-Volterra equations.",
          codeExamples: [
            { id: "scipy-49-ex1", title: "Ackley Challenge", description: "Global optimization", code: { scipy: "import numpy as np\nfrom scipy import optimize\n\ndef ackley(x):\n    n = len(x)\n    sum1 = sum(xi**2 for xi in x)\n    sum2 = sum(np.cos(2*np.pi*xi) for xi in x)\n    return -20*np.exp(-0.2*np.sqrt(sum1/n)) - np.exp(sum2/n) + 20 + np.e\n\nresult = optimize.shgo(ackley, [(-5, 5), (-5, 5)])\nprint('Minimum:', result.fun)\nprint('At:', result.x)" }, explanation: "Find the global minimum of the Ackley function." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-49","type":"mcq","question":"What optimizer is best for global optimization?","options":["shgo","minimize","root","curve_fit"],"correctAnswer":"shgo","explanation":"SHGO finds global minima.","difficulty":3}], passingScore: 70 },
      cheatSheet: [{"label":"Global opt","value":"shgo, basinhopping"},{"label":"Ackley","value":"Multi-modal test function"}],
    },
    {
      id: "scipy-50", number: 50, title: "SciPy Mastery Recap and Certificate Prep", subtitle: "Review and certification preparation", difficulty: "Expert", estimatedMinutes: 90, xpReward: 120, prerequisites: [], learningObjectives: ["Review all modules","Practice integration","Prepare for certification"], partLabel: "Part 6: Projects",
      sections: [
        {
          id: "scipy-50-1", title: "Mastery Review", whyItMatters: "Consolidate your SciPy knowledge.",
          content: "**Module Review Checklist:**\n\n- scipy.linalg: matrix operations, decompositions, linear systems\n- scipy.optimize: minimization, root finding, curve fitting\n- scipy.signal: filtering, FFT, spectrograms\n- scipy.stats: distributions, hypothesis tests, modeling\n- scipy.ndimage: filters, morphology, measurements\n- scipy.integrate: quadrature, ODE solvers\n- scipy.interpolate: interpolation, smoothing\n- scipy.sparse: sparse matrices, solvers\n- scipy.special: special functions\n\n**Key Skills:**\n- Building scientific workflows\n- Optimizing performance\n- Visualizing results\n- Reproducible research",
          codeExamples: [
            { id: "scipy-50-ex1", title: "Final Demo", description: "Comprehensive SciPy demo", code: { scipy: "import numpy as np\nfrom scipy import linalg, optimize, signal, stats\n\nA = np.random.rand(5, 5)\nb = np.random.rand(5)\nx = linalg.solve(A, b)\nprint('Linear system solved!')\n\nresult = optimize.minimize(lambda x: x**2 + 2*x + 1, 0)\nprint('Minimum at x:', result.x[0])\n\ndata = np.random.normal(0, 1, 100)\nt, p = stats.ttest_1samp(data, 0)\nprint('t-test: t={:.3f}, p={:.3f}'.format(t, p))\nprint('SciPy Mastery: Complete!')" }, explanation: "Comprehensive demo showing multiple SciPy modules." },
          ],
        },
      ],
      quiz: { questions: [{"id":"scipy-50","type":"mcq","question":"What is the key benefit of SciPy?","options":["Comprehensive scientific toolkit","Fastest numerical library","Only free option","Web framework"],"correctAnswer":"Comprehensive scientific toolkit","explanation":"SciPy provides a comprehensive set of scientific computing tools.","difficulty":1}], passingScore: 70 },
      cheatSheet: [{"label":"Mastery","value":"All SciPy modules"},{"label":"Research","value":"Reproducible workflows"}],
    },
  ],
};
