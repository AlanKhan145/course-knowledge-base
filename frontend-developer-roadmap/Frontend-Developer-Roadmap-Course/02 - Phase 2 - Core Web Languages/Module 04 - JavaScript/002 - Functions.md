# Functions

## Section
Stage 2 — Core Frontend — Module 04: JavaScript

## Learning Objectives
- Understand the differences between function declarations, expressions, and arrow functions
- Use parameters, default values, and rest parameters effectively
- Explain scope, closures, and how they enable powerful patterns
- Write higher-order functions and understand IIFE usage
- Recognize when to use named vs anonymous functions

---

## 1. Function Declaration vs Expression vs Arrow Function

JavaScript offers three main ways to define a function, each with distinct behavior.

**Function Declaration** — hoisted to the top of its scope, so it can be called before the line where it is defined.

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```

**Function Expression** — assigned to a variable; not hoisted, so it must be defined before use.

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // "Hello, Bob!"
```

**Arrow Function** — concise syntax introduced in ES6. Does not have its own `this` binding (important for callbacks inside classes or objects).

```js
// Multi-line body requires explicit return
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Single expression — implicit return, parentheses optional when one param
const double = n => n * 2;

console.log(double(5)); // 10
```

Key difference summary:

| Feature | Declaration | Expression | Arrow |
|---|---|---|---|
| Hoisted | Yes | No | No |
| Own `this` | Yes | Yes | No |
| Concise syntax | No | No | Yes |

---

## 2. Parameters, Default Values, and Rest Parameters

**Default Values** — used when an argument is `undefined` or not passed.

```js
function createUser(name, role = "viewer") {
  return { name, role };
}

console.log(createUser("Alice"));          // { name: "Alice", role: "viewer" }
console.log(createUser("Bob", "admin"));   // { name: "Bob", role: "admin" }
```

**Rest Parameters** (`...args`) — collects all remaining arguments into a real array.

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

You can combine regular parameters with rest, but rest must always be last:

```js
function log(level, ...messages) {
  messages.forEach(msg => console.log(`[${level}] ${msg}`));
}

log("INFO", "Server started", "Listening on port 3000");
```

---

## 3. Return Values

Every function returns a value. Without an explicit `return`, it returns `undefined`.

```js
function add(a, b) {
  return a + b; // explicit return
}

function noReturn() {
  const x = 1; // returns undefined implicitly
}

console.log(add(2, 3));      // 5
console.log(noReturn());     // undefined
```

Functions can return any type, including other functions or objects:

```js
function buildMultiplier(factor) {
  return (number) => number * factor;
}

const triple = buildMultiplier(3);
console.log(triple(7)); // 21
```

---

## 4. Scope — Block vs Function Scope

**Function scope** — variables declared with `var` are scoped to the enclosing function.

**Block scope** — variables declared with `let` or `const` are scoped to the nearest `{}` block.

```js
function example() {
  var x = 1;     // function-scoped
  let y = 2;     // block-scoped
  const z = 3;   // block-scoped

  if (true) {
    var x = 10;  // same variable — overwrites outer x
    let y = 20;  // new variable — only exists inside this block
    console.log(x, y); // 10, 20
  }

  console.log(x); // 10 (var leaked out of block)
  console.log(y); // 2  (let was not affected)
}
```

Best practice: always prefer `const`, use `let` when reassignment is needed, avoid `var`.

---

## 5. Closures

A closure is a function that **remembers the variables from the scope where it was created**, even after that outer function has returned.

**Practical example — counter factory:**

```js
function createCounter(start = 0) {
  let count = start; // this variable is "closed over"

  return {
    increment() { count++; },
    decrement() { count--; },
    value()     { return count; },
  };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value()); // 11
```

Each call to `createCounter` creates an independent `count` variable. This is the core mechanism behind private state in JavaScript.

---

## 6. Higher-Order Functions

A **higher-order function** is one that either:
- accepts a function as an argument, or
- returns a function.

```js
// Takes a function as argument
function applyTwice(fn, value) {
  return fn(fn(value));
}

const addFive = x => x + 5;
console.log(applyTwice(addFive, 10)); // 20

// Returns a function
function withLogging(fn) {
  return function(...args) {
    console.log("Calling with:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
  };
}

const loggedAdd = withLogging((a, b) => a + b);
loggedAdd(3, 4);
// Calling with: [3, 4]
// Result: 7
```

Built-in array methods like `map`, `filter`, and `reduce` are all higher-order functions.

---

## 7. IIFE — Immediately Invoked Function Expression

An IIFE runs immediately after it is defined. It was the main way to create private scope before ES modules and block-scoped variables existed.

```js
(function () {
  const secret = "hidden";
  console.log("IIFE ran, secret:", secret);
})();

// secret is not accessible here
console.log(typeof secret); // "undefined"
```

Arrow function version:

```js
(() => {
  console.log("Arrow IIFE");
})();
```

Modern use cases: wrapping async logic at the top level before `await` at the module level was available, or isolating third-party scripts.

---

## 8. Named vs Anonymous Functions

**Anonymous functions** have no name and are often used as inline callbacks.

```js
const nums = [1, 2, 3];
const doubled = nums.map(function(n) { return n * 2; });
```

**Named functions** (including named function expressions) appear in stack traces, making debugging easier.

```js
const doubled = nums.map(function double(n) { return n * 2; });
```

Arrow functions are always anonymous, but assigning them to a named variable gives them an inferred name for stack traces:

```js
const double = n => n * 2; // inferred name: "double"
```

Prefer named functions for anything non-trivial so error messages point to meaningful function names.

---

## Practice Exercises

### Exercise 1: Counter with Closure
Create a `makeCounter` function that accepts an optional `step` parameter (default `1`). It should return an object with `increment`, `reset`, and `value` methods. Each `increment` call increases the count by `step`. Verify that two separate counters do not share state.

```js
const c1 = makeCounter(2);
const c2 = makeCounter();

c1.increment();
c1.increment();
c2.increment();

console.log(c1.value()); // 4
console.log(c2.value()); // 1
c1.reset();
console.log(c1.value()); // 0
```

### Exercise 2: Higher-Order Validator
Write a `createValidator` higher-order function that accepts a predicate function and an error message string. It should return a new function that, when called with a value, returns `{ valid: true }` if the predicate passes, or `{ valid: false, error: <message> }` if it fails.

```js
const isPositive = createValidator(n => n > 0, "Must be positive");

console.log(isPositive(5));   // { valid: true }
console.log(isPositive(-1));  // { valid: false, error: "Must be positive" }
```

---

## Summary

| Concept | Key Point |
|---------|-----------|
| Function declaration | Hoisted; can be called before definition |
| Function expression | Not hoisted; assigned to a variable |
| Arrow function | Concise; no own `this`; always an expression |
| Default parameters | Used when argument is `undefined` |
| Rest parameters | `...args` collects remaining args into an array |
| Scope | `let`/`const` = block-scoped; `var` = function-scoped |
| Closure | Inner function retains access to outer scope after it returns |
| Higher-order function | Takes or returns a function |
| IIFE | Self-executing function for isolated scope |
| Named function | Improves stack traces and self-reference |

---

## Next Lesson
`003 - Arrays and Objects.md` — Working with JavaScript's primary data structures and modern destructuring syntax
