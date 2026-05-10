import type { Chapter } from "./types";

export const jsCh21: Chapter = {
  id: "js-ch-21",
  number: 21,
  title: "Scope",
  subtitle: "Where variables are accessible.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 150,
  prerequisites: ["js-ch-08"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Understand global, function, and block scope.",
    "Use let and const correctly.",
    "Avoid scope pollution.",
    "Understand lexical scope.",
    "Know the temporal dead zone.",
  ],
  sections: [
    {
      id: "js21-s1",
      title: "Scope Types",
      whyItMatters: "Scope determines where variables are accessible. Understanding scope prevents bugs and makes code predictable.",
      realWorldAnalogy: "Scope is like the visibility of a sign. A sign inside your house (function scope) isn't visible from the street (global scope).",
      content: `Global scope: Variables declared outside any function.

\`\`\`javascript
const globalVar = 'I am global';

function checkScope() {
  console.log(globalVar); // Accessible
}
\`\`\`

Function scope: Variables declared inside a function.

\`\`\`javascript
function outer() {
  const functionScoped = 'only in outer';
  console.log(functionScoped); // Works
}
console.log(functionScoped); // ReferenceError
\`\`\`

Block scope: Variables declared with let/const inside {}.

\`\`\`javascript
if (true) {
  const blockScoped = 'only in block';
  console.log(blockScoped); // Works
}
console.log(blockScoped); // ReferenceError
\`\`\``,
    },
    {
      id: "js21-s2",
      title: "var vs let vs const",
      whyItMatters: "Choosing the right declaration affects scope and mutability.",
      content: `var: Function-scoped, hoisted, can be redeclared.

\`\`\`javascript
var x = 1;
var x = 2; // No error
\`\`\`

let: Block-scoped, hoisted (TDZ), cannot be redeclared.

\`\`\`javascript
let y = 1;
let y = 2; // SyntaxError
\`\`\`

const: Block-scoped, hoisted (TDZ), cannot be redeclared or reassigned.

\`\`\`javascript
const z = 1;
z = 2; // TypeError
const obj = { a: 1 };
obj.a = 2; // Works - object itself can be mutated
\`\`\`

Best practice: Use const by default, let when you need to reassign. Avoid var.`,
    },
    {
      id: "js21-s3",
      title: "Lexical Scope",
      whyItMatters: "JavaScript uses lexical scoping, meaning scope is determined by where code is written, not where it's called.",
      content: `Lexical scope means inner functions have access to outer function variables.

\`\`\`javascript
function outer() {
  const outerVar = 'outer';
  
  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  
  inner(); // 'outer'
}
\`\`\`

Scope chain: JavaScript looks for variables in the current scope, then outer scopes, until global.

\`\`\`javascript
const global = 'global';

function level1() {
  const l1 = 'level1';
  
  function level2() {
    const l2 = 'level2';
    console.log(global, l1, l2); // All accessible
  }
  
  level2();
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "js21-ex1", title: "Identify scope", difficulty: 1, description: "Determine which variables are accessible in each scope.", requirements: ["Identify global scope", "Identify function scope", "Identify block scope"], starterCode: { javascript: "const a = 1;\n\nfunction test() {\n  const b = 2;\n  if (true) {\n    const c = 3;\n    // What is accessible here?\n  }\n  // What is accessible here?\n}\n// What is accessible here?" }, hints: ["Check where each variable is declared", "Remember block scope for let/const"], solution: { javascript: "const a = 1;\n\nfunction test() {\n  const b = 2;\n  if (true) {\n    const c = 3;\n    console.log(a, b, c); // All accessible\n  }\n  console.log(a, b); // a and b accessible\n}\nconsole.log(a); // Only a accessible" }, solutionExplanation: "Variables are accessible in their scope and all nested scopes." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js21-q1", type: "mcq", question: "What scope does const use?", options: ["Function", "Block", "Global", "Module"], correctAnswer: 1, explanation: "const uses block scope, like let.", difficulty: 1 }] },
  cheatSheet: [{ label: "Block scope", value: "let/const inside {}" }, { label: "Function scope", value: "var inside functions" }, { label: "Lexical", value: "Inner functions access outer variables" }],
};

export const jsCh22: Chapter = {
  id: "js-ch-22",
  number: 22,
  title: "Closures",
  subtitle: "Functions that remember their environment.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-21"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Understand what closures are.",
    "Create closures for data privacy.",
    "Use closures for function factories.",
    "Understand memory implications.",
    "Recognize common closure patterns.",
  ],
  sections: [
    {
      id: "js22-s1",
      title: "What are Closures?",
      whyItMatters: "Closures are one of JavaScript's most powerful features. They enable data privacy, function factories, and many design patterns.",
      realWorldAnalogy: "A closure is like a backpack a function carries. It contains variables from where the function was created, which it can access even after leaving that location.",
      content: `A closure is created when a function remembers variables from its outer scope even after the outer function has returned.

\`\`\`javascript
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
\`\`\`

The inner function "closes over" the count variable, preserving it between calls.`,
    },
    {
      id: "js22-s2",
      title: "Data Privacy",
      whyItMatters: "Closures provide a way to create private variables in JavaScript.",
      content: `Use closures to hide implementation details:

\`\`\`javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return 'Insufficient funds';
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50); // 150
account.withdraw(30); // 120
account.balance; // undefined - private!
account.getBalance(); // 120
\`\`\``,
    },
    {
      id: "js22-s3",
      title: "Function Factories",
      whyItMatters: "Closures enable functions that create customized functions.",
      content: `Create functions with preset parameters:

\`\`\`javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15
\`\`\`

Event handlers with closures:

\`\`\`javascript
function setupButtons() {
  for (let i = 0; i < 3; i++) {
    document.getElementById('btn' + i).addEventListener('click', function() {
      console.log('Button ' + i + ' clicked');
    });
  }
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "js22-ex1", title: "Create a counter", difficulty: 2, description: "Use a closure to create a counter function.", requirements: ["Return a function", "Preserve count between calls", "Return current count"], starterCode: { javascript: "function createCounter() {\n  // Your code here\n}" }, hints: ["Declare count in outer function", "Return inner function that increments count"], solution: { javascript: "function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}" }, solutionExplanation: "The inner function closes over count, preserving it between calls." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js22-q1", type: "mcq", question: "When is a closure created?", options: ["When function is called", "When function is defined", "When function returns", "When scope ends"], correctAnswer: 1, explanation: "Closures are created when a function is defined, capturing its lexical environment.", difficulty: 2 }] },
  cheatSheet: [{ label: "Closure", value: "Function remembering outer scope" }, { label: "Privacy", value: "Variables in outer scope are private" }, { label: "Factory", value: "Function returning customized function" }],
};

export const jsCh23: Chapter = {
  id: "js-ch-23",
  number: 23,
  title: "Hoisting",
  subtitle: "How JavaScript moves declarations.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 140,
  prerequisites: ["js-ch-21"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Understand hoisting mechanism.",
    "Know what gets hoisted.",
    "Distinguish var vs let/const hoisting.",
    "Avoid hoisting bugs.",
    "Understand function hoisting.",
  ],
  sections: [
    {
      id: "js23-s1",
      title: "What is Hoisting?",
      whyItMatters: "Hoisting explains why you can call functions before they're defined, and why some code throws errors unexpectedly.",
      content: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.\n\nOnly declarations are hoisted, not assignments.\n\n\`\`\`javascript\nconsole.log(x); // undefined (not ReferenceError)\nvar x = 5;\n\nconsole.log(y); // ReferenceError\nlet y = 5;\n\`\`\`\n\nThis is equivalent to:\n\n\`\`\`javascript\nvar x; // Declaration hoisted\nconsole.log(x); // undefined\nx = 5; // Assignment stays\n\`\`\`",
    },
    {
      id: "js23-s2",
      title: "Temporal Dead Zone",
      whyItMatters: "The TDZ explains the ReferenceError when accessing let/const before declaration.",
      content: "let and const are hoisted but enter the Temporal Dead Zone (TDZ) until the declaration line.\n\n\`\`\`javascript\nconsole.log(x); // ReferenceError - in TDZ\nlet x = 5;\n\`\`\`\n\nThe TDZ prevents accessing variables before declaration, catching bugs early.\n\n\`\`\`javascript\n// Safe pattern\nlet x;\nconsole.log(x); // undefined\nx = 5;\n\`\`\`",
    },
    {
      id: "js23-s3",
      title: "Function Hoisting",
      whyItMatters: "Function declarations are hoisted differently than function expressions.",
      content: "Function declarations are fully hoisted:\n\n\`\`\`javascript\ngreet(); // 'Hello'\n\nfunction greet() {\n  console.log('Hello');\n}\n\`\`\`\n\nFunction expressions are not:\n\n\`\`\`javascript\ngreet(); // TypeError: greet is not a function\n\nconst greet = function() {\n  console.log('Hello');\n};\n\`\`\`\n\nArrow functions behave like expressions - not hoisted.\n\nBest practice: Declare functions before use to avoid confusion.",
    },
  ],
  exercises: [
    { id: "js23-ex1", title: "Predict output", difficulty: 1, description: "What will this code output?", requirements: ["Understand hoisting", "Predict the output"], starterCode: { javascript: "console.log(a);\nvar a = 10;\nconsole.log(a);\n\nconsole.log(b);\nlet b = 20;\nconsole.log(b);" }, hints: ["var is hoisted as undefined", "let is in TDZ until declaration"], solution: { javascript: "console.log(a); // undefined\nvar a = 10;\nconsole.log(a); // 10\n\nconsole.log(b); // ReferenceError\nlet b = 20;\nconsole.log(b); // 20" }, solutionExplanation: "var is hoisted as undefined, let throws error in TDZ." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js23-q1", type: "mcq", question: "What is hoisted for let?", options: ["Declaration and value", "Only declaration", "Nothing", "Only value"], correctAnswer: 1, explanation: "let declarations are hoisted but enter TDZ until the declaration line.", difficulty: 2 }] },
  cheatSheet: [{ label: "var hoisting", value: "Declaration hoisted as undefined" }, { label: "let/const", value: "Hoisted but in TDZ" }, { label: "Function", value: "Declarations fully hoisted" }],
};

export const jsCh24: Chapter = {
  id: "js-ch-24",
  number: 24,
  title: "Prototypes",
  subtitle: "JavaScript's inheritance mechanism.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-15"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Understand the prototype chain.",
    "Use Object.create() for inheritance.",
    "Understand __proto__ vs prototype.",
    "Add methods to prototypes.",
    "Understand instanceof.",
  ],
  sections: [
    {
      id: "js24-s1",
      title: "Prototype Chain",
      whyItMatters: "JavaScript uses prototypal inheritance. Understanding prototypes is essential for working with objects and classes.",
      realWorldAnalogy: "Prototypes are like a family tree. Objects inherit properties from their prototype, which inherits from its prototype, forming a chain.",
      content: "Every object has a prototype. When accessing a property, JavaScript looks up the prototype chain.\n\n\`\`\`javascript\nconst person = {\n  name: 'Alice'\n};\n\nconsole.log(person.toString()); // Works!\n// toString is found on Object.prototype\n\`\`\`\n\nThe chain:\n\n\`\`\`javascript\nperson → person.__proto__ (Object.prototype) → null\n\`\`\`\n\n__proto__ vs prototype:\n- __proto__: The actual prototype of an object\n- prototype: Used by functions as the prototype for objects created with new",
    },
    {
      id: "js24-s2",
      title: "Object.create()",
      whyItMatters: "Object.create() is the cleanest way to create objects with a specific prototype.",
      content: "Create objects with a prototype:\n\n\`\`\`javascript\nconst animal = {\n  speak() {\n    console.log('Some sound');\n  }\n};\n\nconst dog = Object.create(animal);\ndog.speak(); // 'Some sound'\ndog.bark = function() {\n  console.log('Woof');\n};\ndog.bark(); // 'Woof'\n\`\`\`\n\nCheck if property is on object or prototype:\n\n\`\`\`javascript\nconsole.log(dog.hasOwnProperty('speak')); // false\nconsole.log(dog.hasOwnProperty('bark')); // true\n\`\`\`",
    },
    {
      id: "js24-s3",
      title: "Constructor Functions",
      whyItMatters: "Constructor functions are the traditional way to create objects with shared methods.",
      content: "Use constructor functions with prototypes:\n\n\`\`\`javascript\nfunction Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function() {\n  console.log(`Hello, I'm ${this.name}`);\n};\n\nconst alice = new Person('Alice');\nalice.greet(); // 'Hello, I'm Alice'\n\`\`\`\n\nThe prototype chain for alice:\n\n\`\`\`alice → Person.prototype → Object.prototype → null\n\`\`\`\n\nMethods on prototype are shared across all instances, saving memory.",
    },
  ],
  exercises: [
    { id: "js24-ex1", title: "Create prototype", difficulty: 2, description: "Create an object with a prototype using Object.create().", requirements: ["Create base object", "Create derived object", "Access prototype method"], starterCode: { javascript: "const vehicle = {\n  move() {\n    console.log('Moving');\n  }\n};\n\n// Create car with vehicle as prototype\nconst car = /* your code */;\n\ncar.move(); // Should log 'Moving'" }, hints: ["Use Object.create(vehicle)", "car inherits move from vehicle"], solution: { javascript: "const vehicle = {\n  move() {\n    console.log('Moving');\n  }\n};\n\nconst car = Object.create(vehicle);\ncar.move(); // 'Moving'" }, solutionExplanation: "Object.create() sets the prototype, so car inherits move from vehicle." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js24-q1", type: "mcq", question: "What does __proto__ point to?", options: ["Constructor function", "Object's prototype", "Class definition", "Nothing"], correctAnswer: 1, explanation: "__proto__ points to the object's prototype, which is part of the prototype chain.", difficulty: 2 }] },
  cheatSheet: [{ label: "Prototype chain", value: "obj → prototype → prototype → null" }, { label: "Create", value: "Object.create(proto)" }, { label: "hasOwnProperty", value: "obj.hasOwnProperty('prop')" }],
};

export const jsCh25: Chapter = {
  id: "js-ch-25",
  number: 25,
  title: "Classes — Part 1",
  subtitle: "Modern JavaScript class syntax.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 150,
  prerequisites: ["js-ch-24"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Create classes with class keyword.",
    "Use constructors.",
    "Add methods to classes.",
    "Understand class vs constructor functions.",
    "Create instances with new.",
  ],
  sections: [
    {
      id: "js25-s1",
      title: "Class Basics",
      whyItMatters: "Classes provide cleaner syntax for constructor functions and prototypes, making code more readable.",
      realWorldAnalogy: "A class is like a blueprint. It defines the structure, and instances are the actual buildings built from that blueprint.",
      content: "Define a class:\n\n\`\`\`javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  greet() {\n    console.log(`Hello, I'm ${this.name}`);\n  }\n}\n\nconst alice = new Person('Alice');\nalice.greet(); // 'Hello, I'm Alice'\n\`\`\`\n\nClasses are syntactic sugar over prototypes:\n\n\`\`\`javascript\n// Class syntax (modern)\nclass Person { }\n\n// Equivalent to (traditional)\nfunction Person() { }\n\`\`\`",
    },
    {
      id: "js25-s2",
      title: "Methods",
      whyItMatters: "Class methods are added to the prototype, shared across all instances.",
      content: "Methods in classes are automatically added to the prototype:\n\n\`\`\`javascript\nclass Calculator {\n  add(a, b) {\n    return a + b;\n  }\n  \n  subtract(a, b) {\n    return a - b;\n  }\n}\n\nconst calc = new Calculator();\ncalc.add(5, 3); // 8\n\`\`\`\n\nMethods are shared:\n\n\`\`\`javascript\nconst calc1 = new Calculator();\nconst calc2 = new Calculator();\n\ncalc1.add === calc2.add; // true - same function\n\`\`\`",
    },
    {
      id: "js25-s3",
      title: "Getters and Setters",
      whyItMatters: "Getters and setters let you control access to properties, enabling validation and computed values.",
      content: "Define getters and setters:\n\n\`\`\`javascript\nclass Circle {\n  constructor(radius) {\n    this._radius = radius;\n  }\n  \n  get radius() {\n    return this._radius;\n  }\n  \n  set radius(value) {\n    if (value < 0) {\n      throw new Error('Radius cannot be negative');\n    }\n    this._radius = value;\n  }\n  \n  get area() {\n    return Math.PI * this._radius ** 2;\n  }\n}\n\nconst circle = new Circle(5);\ncircle.area; // 78.54\ncircle.radius = -1; // Error\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js25-ex1", title: "Create a class", difficulty: 1, description: "Create a Rectangle class with area method.", requirements: ["Constructor with width and height", "area() method", "Calculate area"], starterCode: { javascript: "class Rectangle {\n  // Your code here\n}\n\nconst rect = new Rectangle(5, 3);\nconsole.log(rect.area()); // Should be 15" }, hints: ["Use constructor", "Return width * height in area method"], solution: { javascript: "class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  \n  area() {\n    return this.width * this.height;\n  }\n}" }, solutionExplanation: "The constructor sets properties, area() calculates the product." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js25-q1", type: "mcq", question: "Where are class methods stored?", options: ["On each instance", "On the prototype", "In the constructor", "Globally"], correctAnswer: 1, explanation: "Class methods are stored on the prototype, shared across all instances.", difficulty: 1 }] },
  cheatSheet: [{ label: "Class", value: "class Name { constructor() {} }" }, { label: "Instance", value: "new ClassName()" }, { label: "Getter", value: "get prop() { }" }],
};

export const jsCh26: Chapter = {
  id: "js-ch-26",
  number: 26,
  title: "Classes — Part 2",
  subtitle: "Inheritance, private fields, and static.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-25"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Use extends for inheritance.",
    "Call super in constructors.",
    "Override methods.",
    "Use private fields (#).",
    "Use static methods.",
  ],
  sections: [
    {
      id: "js26-s1",
      title: "Inheritance",
      whyItMatters: "Inheritance lets you reuse code and create hierarchical relationships between classes.",
      content: "Extend a class:\n\n\`\`\`javascript\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // Must call super first\n    this.breed = breed;\n  }\n  \n  speak() {\n    console.log(`${this.name} barks`);\n  }\n}\n\nconst dog = new Dog('Buddy', 'Golden Retriever');\ndog.speak(); // 'Buddy barks'\n\`\`\`",
    },
    {
      id: "js26-s2",
      title: "Private Fields",
      whyItMatters: "Private fields prevent external access to internal state, enabling true encapsulation.",
      content: "Use # prefix for private fields:\n\n\`\`\`javascript\nclass BankAccount {\n  #balance = 0;\n  \n  deposit(amount) {\n    this.#balance += amount;\n  }\n  \n  getBalance() {\n    return this.#balance;\n  }\n}\n\nconst account = new BankAccount();\naccount.deposit(100);\naccount.#balance; // SyntaxError - private!\naccount.getBalance(); // 100\n\`\`\`\n\nPrivate fields cannot be accessed from outside the class, even on instances.",
    },
    {
      id: "js26-s3",
      title: "Static Methods",
      whyItMatters: "Static methods belong to the class itself, not instances. Useful for utility functions.",
      content: "Use static for class-level methods:\n\n\`\`\`javascript\nclass MathUtils {\n  static add(a, b) {\n    return a + b;\n  }\n  \n  static multiply(a, b) {\n    return a * b;\n  }\n}\n\nMathUtils.add(5, 3); // 8\nMathUtils.multiply(4, 3); // 12\n\nconst utils = new MathUtils();\nutils.add(5, 3); // TypeError - not on instance\n\`\`\`\n\nCommon use cases: factory methods, utility functions, configuration.",
    },
  ],
  exercises: [
    { id: "js26-ex1", title: "Create subclass", difficulty: 2, description: "Create a Square class that extends Rectangle.", requirements: ["Extend Rectangle", "Constructor with side length", "Override area or use parent"], starterCode: { javascript: "class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  area() {\n    return this.width * this.height;\n  }\n}\n\nclass Square extends Rectangle {\n  // Your code here\n}\n\nconst square = new Square(5);\nconsole.log(square.area()); // Should be 25" }, hints: ["Call super with side for both width and height", "No need to override area"], solution: { javascript: "class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  area() {\n    return this.width * this.height;\n  }\n}\n\nclass Square extends Rectangle {\n  constructor(side) {\n    super(side, side);\n  }\n}" }, solutionExplanation: "Square passes side as both width and height to parent constructor." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js26-q1", type: "mcq", question: "What does # prefix do?", options: ["Comments", "Private fields", "Public fields", "Static fields"], correctAnswer: 1, explanation: "# prefix creates private fields that cannot be accessed outside the class.", difficulty: 2 }] },
  cheatSheet: [{ label: "Extend", value: "class Child extends Parent { }" }, { label: "Super", value: "super() in constructor" }, { label: "Private", value: "#privateField" }],
};

export const jsCh27: Chapter = {
  id: "js-ch-27",
  number: 27,
  title: "The this Keyword",
  subtitle: "Understanding context in JavaScript.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-08"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Understand this in different contexts.",
    "Use bind, call, apply.",
    "Use arrow functions to preserve this.",
    "Avoid common this bugs.",
    "Understand this in event handlers.",
  ],
  sections: [
    {
      id: "js27-s1",
      title: "this in Different Contexts",
      whyItMatters: "this changes based on how a function is called. Understanding this prevents bugs in object-oriented code.",
      content: "this depends on call site:\n\n\`\`\`javascript\n// Method call - this = object\nconst obj = {\n  name: 'Alice',\n  greet() {\n    console.log(this.name); // 'Alice'\n  }\n};\nobj.greet();\n\n// Function call - this = global (undefined in strict mode)\nfunction test() {\n  console.log(this);\n}\ntest();\n\n// Constructor - this = new object\nfunction Person(name) {\n  this.name = name;\n}\nconst p = new Person('Bob');\n\`\`\`",
    },
    {
      id: "js27-s2",
      title: "bind, call, apply",
      whyItMatters: "These methods let you explicitly control what this refers to.",
      content: "bind: Returns new function with bound this\n\n\`\`\`javascript\nconst person = { name: 'Alice' };\n\nfunction greet() {\n  console.log(this.name);\n}\n\nconst boundGreet = greet.bind(person);\nboundGreet(); // 'Alice'\n\`\`\`\n\ncall: Call function with specific this\n\n\`\`\`javascript\ngreet.call(person); // 'Alice'\n\`\`\`\n\napply: Same as call but arguments as array\n\n\`\`\`javascript\nfunction introduce(greeting) {\n  console.log(`${greeting}, I'm ${this.name}`);\n}\nintroduce.apply(person, ['Hello']); // 'Hello, I'm Alice'\n\`\`\`",
    },
    {
      id: "js27-s3",
      title: "Arrow Functions and this",
      whyItMatters: "Arrow functions lexically bind this, solving many this-related bugs.",
      content: "Arrow functions inherit this from surrounding scope:\n\n\`\`\`javascript\nclass Timer {\n  constructor() {\n    this.seconds = 0;\n    setInterval(() => {\n      this.seconds++; // Works! Arrow function preserves this\n      console.log(this.seconds);\n    }, 1000);\n  }\n}\n\`\`\`\n\nWithout arrow function (bug):\n\n\`\`\`javascript\nsetInterval(function() {\n  this.seconds++; // Error! this is not the Timer\n}, 1000);\n\`\`\`\n\nUse arrow functions for callbacks that need this.",
    },
  ],
  exercises: [
    { id: "js27-ex1", title: "Fix this bug", difficulty: 2, description: "Fix the this issue in the callback.", requirements: ["Preserve this", "Use correct approach"], starterCode: { javascript: "const person = {\n  name: 'Alice',\n  greet() {\n    setTimeout(function() {\n      console.log(this.name); // Bug: this is not person\n    }, 100);\n  }\n};\n\nperson.greet(); // Fix this" }, hints: ["Use arrow function", "Or use bind"], solution: { javascript: "const person = {\n  name: 'Alice',\n  greet() {\n    setTimeout(() => {\n      console.log(this.name); // Works!\n    }, 100);\n  }\n};\n\nperson.greet();" }, solutionExplanation: "Arrow function lexically binds this from greet method." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js27-q1", type: "mcq", question: "What does this refer to in arrow function?", options: ["Global object", "Function itself", "Lexical scope's this", "Undefined"], correctAnswer: 2, explanation: "Arrow functions inherit this from their enclosing scope.", difficulty: 2 }] },
  cheatSheet: [{ label: "bind", value: "fn.bind(thisArg)" }, { label: "call", value: "fn.call(thisArg, arg1, arg2)" }, { label: "Arrow", value: "() => {} preserves this" }],
};

export const jsCh28: Chapter = {
  id: "js-ch-28",
  number: 28,
  title: "WeakMap and WeakSet",
  subtitle: "Garbage-collection-friendly collections.",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 160,
  prerequisites: ["js-ch-19"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Understand WeakMap vs Map.",
    "Understand WeakSet vs Set.",
    "Know when to use weak collections.",
    "Understand garbage collection implications.",
    "Use weak collections for metadata.",
  ],
  sections: [
    {
      id: "js28-s1",
      title: "WeakMap",
      whyItMatters: "WeakMap allows garbage collection of keys, preventing memory leaks when associating data with objects.",
      content: "WeakMap keys must be objects and are weakly held:\n\n\`\`\`javascript\nconst weakMap = new WeakMap();\n\nconst obj = { data: 'value' };\nweakMap.set(obj, 'metadata');\n\nweakMap.get(obj); // 'metadata'\n\nobj = null; // obj can be garbage collected\n// WeakMap entry is also removed\n\`\`\`\n\nWeakMap differences from Map:\n- Keys must be objects\n- Keys are weakly held (can be GC'd)\n- Not iterable\n- No size property\n- No clear() method",
    },
    {
      id: "js28-s2",
      title: "WeakSet",
      whyItMatters: "WeakSet is useful for tracking objects without preventing garbage collection.",
      content: "WeakSet holds objects weakly:\n\n\`\`\`javascript\nconst weakSet = new WeakSet();\n\nconst obj1 = { id: 1 };\nconst obj2 = { id: 2 };\n\nweakSet.add(obj1);\nweakSet.add(obj2);\n\nweakSet.has(obj1); // true\n\nobj1 = null; // Can be garbage collected\n\`\`\`\n\nWeakSet differences from Set:\n- Values must be objects\n- Values are weakly held\n- Not iterable\n- No size property\n- Only has, add, delete methods",
    },
    {
      id: "js28-s3",
      title: "Use Cases",
      whyItMatters: "Weak collections excel at scenarios where you don't want to prevent garbage collection.",
      content: "Common use cases:\n\n1. DOM node metadata:\n\n\`\`\`javascript\nconst metadata = new WeakMap();\n\nfunction attachMetadata(node, data) {\n  metadata.set(node, data);\n}\n\n// When node is removed, metadata is automatically cleaned\n\`\`\`\n\n2. Private data:\n\n\`\`\`javascript\nconst privateData = new WeakMap();\n\nclass MyClass {\n  constructor() {\n    privateData.set(this, { secret: 'value' });\n  }\n}\n\`\`\`\n\n3. Caching:\n\n\`\`\`javascript\nconst cache = new WeakMap();\n\nfunction getResult(obj) {\n  if (cache.has(obj)) {\n    return cache.get(obj);\n  }\n  const result = expensiveOperation(obj);\n  cache.set(obj, result);\n  return result;\n}\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js28-ex1", title: "Use WeakMap", difficulty: 2, description: "Create a WeakMap to store metadata for objects.", requirements: ["Create WeakMap", "Store metadata", "Retrieve metadata"], starterCode: { javascript: "const metadata = new WeakMap();\n\nconst obj = { name: 'Alice' };\n\n// Store metadata for obj\n\n// Retrieve metadata" }, hints: ["Use set(key, value)", "Use get(key)"], solution: { javascript: "const metadata = new WeakMap();\n\nconst obj = { name: 'Alice' };\nmetadata.set(obj, { created: new Date() });\n\nconsole.log(metadata.get(obj)); // { created: ... }" }, solutionExplanation: "WeakMap allows associating data without preventing GC of the key object." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js28-q1", type: "mcq", question: "What type can WeakMap keys be?", options: ["Any type", "Only primitives", "Only objects", "Only strings"], correctAnswer: 2, explanation: "WeakMap keys must be objects, which are weakly held for garbage collection.", difficulty: 2 }] },
  cheatSheet: [{ label: "WeakMap", value: "new WeakMap()" }, { label: "WeakSet", value: "new WeakSet()" }, { label: "GC friendly", value: "Keys/values can be garbage collected" }],
};

export const jsCh29: Chapter = {
  id: "js-ch-29",
  number: 29,
  title: "Symbols",
  subtitle: "Unique identifiers for object properties.",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 160,
  prerequisites: ["js-ch-15"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Create symbols with Symbol().",
    "Use symbols as object keys.",
    "Understand symbol uniqueness.",
    "Use well-known symbols.",
    "Know when to use symbols.",
  ],
  sections: [
    {
      id: "js29-s1",
      title: "Creating Symbols",
      whyItMatters: "Symbols create unique property keys that won't collide with other properties.",
      content: "Create unique symbols:\n\n\`\`\`javascript\nconst sym1 = Symbol();\nconst sym2 = Symbol();\n\nconsole.log(sym1 === sym2); // false - always unique\n\nconst sym3 = Symbol('description');\nconsole.log(sym3.toString()); // 'Symbol(description)'\n\`\`\`\n\nSymbols as object keys:\n\n\`\`\`javascript\nconst obj = {};\nconst id = Symbol('id');\n\nobj[id] = 'unique value';\nobj.name = 'regular property';\n\nconsole.log(obj[id]); // 'unique value'\nconsole.log(obj.name); // 'regular property'\n\`\`\`",
    },
    {
      id: "js29-s2",
      title: "Symbol Properties",
      whyItMatters: "Symbol properties are not enumerated by default, making them useful for hidden metadata.",
      content: "Symbol properties are hidden from some operations:\n\n\`\`\`javascript\nconst obj = {\n  name: 'Alice',\n  [Symbol('id')]: 123\n};\n\nObject.keys(obj); // ['name'] - symbol key not included\nfor (const key in obj) {\n  console.log(key); // 'name' only\n}\n\nObject.getOwnPropertySymbols(obj); // [Symbol(id)]\nReflect.ownKeys(obj); // ['name', Symbol(id)]\n\`\`\`\n\nThis makes symbols ideal for:\n- Internal properties\n- Metadata\n- Avoiding property name collisions",
    },
    {
      id: "js29-s3",
      title: "Well-Known Symbols",
      whyItMatters: "JavaScript has built-in symbols for customizing object behavior.",
      content: "Well-known symbols customize object behavior:\n\n\`\`\`javascript\n// Symbol.iterator - make object iterable\nconst iterable = {\n  data: [1, 2, 3],\n  [Symbol.iterator]() {\n    let index = 0;\n    return {\n      next: () => ({\n        value: this.data[index++],\n        done: index > this.data.length\n      })\n    };\n  }\n};\n\n[...iterable]; // [1, 2, 3]\n\`\`\`\n\nOther well-known symbols:\n- Symbol.toStringTag - customize Object.prototype.toString\n- Symbol.toPrimitive - customize type conversion\n- Symbol.hasInstance - customize instanceof",
    },
  ],
  exercises: [
    { id: "js29-ex1", title: "Use symbol key", difficulty: 2, description: "Add a symbol property to an object.", requirements: ["Create symbol", "Use as object key", "Access property"], starterCode: { javascript: "const obj = { name: 'Alice' };\n\n// Add a symbol property\n\n// Access and log the symbol property" }, hints: ["Use Symbol() to create", "Use [sym] syntax for key"], solution: { javascript: "const obj = { name: 'Alice' };\n\nconst secret = Symbol('secret');\nobj[secret] = 'hidden value';\n\nconsole.log(obj[secret]); // 'hidden value'\nconsole.log(Object.keys(obj)); // ['name'] - symbol not shown" }, solutionExplanation: "Symbol properties are unique and hidden from enumeration." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js29-q1", type: "mcq", question: "Are symbols unique?", options: ["No", "Yes, always", "Only with description", "Only global symbols"], correctAnswer: 1, explanation: "Every call to Symbol() creates a unique symbol, even with the same description.", difficulty: 1 }] },
  cheatSheet: [{ label: "Create", value: "Symbol('description')" }, { label: "Key", value: "obj[sym] = value" }, { label: "Hidden", value: "Not in Object.keys()" }],
};

export const jsCh30: Chapter = {
  id: "js-ch-30",
  number: 30,
  title: "Object Property Descriptors",
  subtitle: "Fine-grained control over object properties.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 170,
  prerequisites: ["js-ch-15"],
  partLabel: "Part 3: Scope, Closures, OOP",
  learningObjectives: [
    "Use Object.defineProperty().",
    "Understand configurable, enumerable, writable.",
    "Use Object.freeze, seal, preventExtensions.",
    "Get property descriptors.",
    "Understand property attributes.",
  ],
  sections: [
    {
      id: "js30-s1",
      title: "Property Descriptors",
      whyItMatters: "Property descriptors give you control over how properties behave - whether they can be changed, enumerated, or deleted.",
      content: "Get property descriptor:\n\n\`\`\`javascript\nconst obj = { name: 'Alice' };\n\nconst descriptor = Object.getOwnPropertyDescriptor(obj, 'name');\n// {\n//   value: 'Alice',\n//   writable: true,\n//   enumerable: true,\n//   configurable: true\n// }\n\`\`\`\n\nDefine property with descriptor:\n\n\`\`\`javascript\nconst obj = {};\n\nObject.defineProperty(obj, 'name', {\n  value: 'Alice',\n  writable: false,   // Cannot change\n  enumerable: true,  // Shows in Object.keys\n  configurable: false // Cannot delete or redefine\n});\n\nobj.name = 'Bob'; // Ignored in strict mode\ndelete obj.name; // Fails\n\`\`\`",
    },
    {
      id: "js30-s2",
      title: "Writable, Enumerable, Configurable",
      whyItMatters: "These attributes control property behavior.",
      content: "writable: Can the value be changed?\n\n\`\`\`javascript\nconst obj = {};\nObject.defineProperty(obj, 'constant', {\n  value: 42,\n  writable: false\n});\nobj.constant = 100; // Error in strict mode\n\`\`\`\n\nenumerable: Does it show in loops?\n\n\`\`\`javascript\nObject.defineProperty(obj, 'hidden', {\n  value: 'secret',\n  enumerable: false\n});\nObject.keys(obj); // Doesn't include 'hidden'\n\`\`\`\n\nconfigurable: Can it be deleted/redefined?\n\n\`\`\`javascript\nObject.defineProperty(obj, 'locked', {\n  value: 'locked',\n  configurable: false\n});\ndelete obj.locked; // Fails\n\`\`\`",
    },
    {
      id: "js30-s3",
      title: "Object Immutability",
      whyItMatters: "PreventExtensions, seal, and freeze provide different levels of immutability.",
      content: "Object.preventExtensions: Cannot add new properties\n\n\`\`\`javascript\nconst obj = { name: 'Alice' };\nObject.preventExtensions(obj);\nobj.age = 30; // Fails\n\`\`\`\n\nObject.seal: Cannot add/delete, can modify\n\n\`\`\`javascript\nObject.seal(obj);\ndelete obj.name; // Fails\nobj.name = 'Bob'; // Works\n\`\`\`\n\nObject.freeze: Cannot add/delete/modify\n\n\`\`\`javascript\nObject.freeze(obj);\ndelete obj.name; // Fails\nobj.name = 'Bob'; // Fails\n\`\`\`\n\nLevels: preventExtensions < seal < freeze",
    },
  ],
  exercises: [
    { id: "js30-ex1", title: "Create read-only property", difficulty: 2, description: "Create a property that cannot be changed.", requirements: ["Use defineProperty", "Set writable to false", "Test immutability"], starterCode: { javascript: "const obj = {};\n\n// Create a read-only 'id' property with value 123\n\nobj.id = 456; // Should be ignored\nconsole.log(obj.id); // Should still be 123" }, hints: ["Use Object.defineProperty", "writable: false"], solution: { javascript: "const obj = {};\n\nObject.defineProperty(obj, 'id', {\n  value: 123,\n  writable: false\n});\n\nobj.id = 456; // Ignored in strict mode\nconsole.log(obj.id); // 123" }, solutionExplanation: "writable: false prevents property value changes." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js30-q1", type: "mcq", question: "Which is the strongest immutability?", options: ["preventExtensions", "seal", "freeze", "none"], correctAnswer: 2, explanation: "freeze is the strongest - prevents adding, deleting, and modifying properties.", difficulty: 2 }] },
  cheatSheet: [{ label: "defineProperty", value: "Object.defineProperty(obj, key, descriptor)" }, { label: "freeze", value: "Object.freeze(obj)" }, { label: "writable", value: "Cannot change value" }],
};
