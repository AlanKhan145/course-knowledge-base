# 004 - Modern JavaScript

## Section
Phase 4 — JavaScript Core

## Learning Objectives

- Destructure arrays and objects cleanly
- Use spread and rest operators
- Use optional chaining and nullish coalescing to avoid crashes
- Organize code with ES modules
- Understand closures, scope, and hoisting

---

## 1. Destructuring

### Array Destructuring

```javascript
const colors = ['red', 'green', 'blue']

// Without destructuring
const first = colors[0]
const second = colors[1]

// With destructuring
const [first, second, third] = colors
// first = 'red', second = 'green', third = 'blue'

// Skip elements
const [, , third] = colors         // third = 'blue'
const [head, ...tail] = colors     // head = 'red', tail = ['green', 'blue']

// Default values
const [a = 0, b = 0, c = 0, d = 0] = [1, 2]
// a=1, b=2, c=0, d=0

// Swap variables
let x = 1, y = 2
;[x, y] = [y, x]
// x=2, y=1
```

### Object Destructuring

```javascript
const user = { name: 'Alice', age: 25, role: 'admin' }

// Basic
const { name, age } = user

// Rename while destructuring
const { name: userName, role: userRole } = user
// userName = 'Alice', userRole = 'admin'

// Default values
const { name, theme = 'light' } = user
// theme = 'light' (not in user object)

// Nested destructuring
const response = {
  status: 200,
  data: {
    user: { id: 42, name: 'Alice' }
  }
}
const { data: { user: { id, name } } } = response

// In function parameters
function renderUser({ name, age, role = 'viewer' }) {
  return `${name} (${age}) — ${role}`
}

renderUser({ name: 'Bob', age: 30 })
```

---

## 2. Spread and Rest Operators

Both use `...` — context determines which it is.

### Spread — expand an iterable

```javascript
// Spread arrays
const a = [1, 2, 3]
const b = [4, 5, 6]
const combined = [...a, ...b]        // [1,2,3,4,5,6]
const copy = [...a]                  // shallow copy

// Spread objects
const defaults = { theme: 'light', lang: 'en' }
const userPrefs = { theme: 'dark' }
const settings = { ...defaults, ...userPrefs }
// { theme: 'dark', lang: 'en' } — userPrefs overrides defaults

// Spread in function call
const nums = [3, 1, 4, 1, 5]
Math.max(...nums)   // 5

// Clone and modify
const updated = { ...user, age: 26 }
```

### Rest — collect remaining values

```javascript
// Rest in destructuring
const [first, ...rest] = [1, 2, 3, 4, 5]
// first = 1, rest = [2, 3, 4, 5]

const { name, ...otherFields } = user
// name = 'Alice', otherFields = { age: 25, role: 'admin' }

// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0)
}
sum(1, 2, 3, 4, 5)  // 15
```

---

## 3. Optional Chaining `?.`

Access nested properties without crashing when an intermediate value is `null` or `undefined`.

```javascript
const user = null

// Without optional chaining — throws TypeError
user.profile.avatar     // ❌ Cannot read properties of null

// With optional chaining — returns undefined safely
user?.profile?.avatar   // undefined ✓

// Real-world examples
const street = response?.data?.user?.address?.street
const firstTag = article?.tags?.[0]
const result = object?.method?.()

// Combine with nullish coalescing for a default
const avatar = user?.profile?.avatar ?? '/default-avatar.png'
```

---

## 4. Nullish Coalescing `??`

Returns the right-hand side only when the left side is `null` or `undefined` (not `0`, `false`, or `''`).

```javascript
// || returns right side for ANY falsy value
0 || 'default'      // 'default' ← wrong! 0 is valid
'' || 'default'     // 'default' ← wrong! '' is valid
false || 'default'  // 'default' ← wrong! false is valid

// ?? returns right side ONLY for null/undefined
0 ?? 'default'      // 0       ✓
'' ?? 'default'     // ''      ✓
false ?? 'default'  // false   ✓
null ?? 'default'   // 'default' ✓
undefined ?? 'default' // 'default' ✓

// Practical use
const pageSize = config.pageSize ?? 10
const title = post.title ?? 'Untitled'

// Nullish assignment ??=
user.preferences ??= {}  // only assign if null/undefined
```

---

## 5. Logical Assignment Operators

```javascript
// ||= assign if falsy
a ||= b    // equivalent to: a = a || b

// &&= assign if truthy
a &&= b    // equivalent to: a = a && b

// ??= assign if nullish
a ??= b    // equivalent to: a = a ?? b

// Practical
user.settings ??= {}
user.settings.theme ??= 'light'
```

---

## 6. ES Modules

Modules let you split code into files and share code between them.

```javascript
// math.js — named exports
export function add(a, b) { return a + b }
export function multiply(a, b) { return a * b }
export const PI = 3.14159

// Default export (one per file)
export default function main() { ... }

// api.js — default + named
export default class ApiClient { ... }
export const BASE_URL = 'https://api.example.com'
```

```javascript
// main.js — importing
import { add, multiply, PI } from './math.js'
import mainFn from './math.js'            // default import

// Import all as namespace
import * as math from './math.js'
math.add(1, 2)
math.PI

// Import default and named together
import ApiClient, { BASE_URL } from './api.js'

// Dynamic import (lazy loading)
const module = await import('./heavy-module.js')
module.doSomething()
```

---

## 7. Closures

A closure is a function that has access to variables from its outer scope, even after the outer function has returned.

```javascript
function createCounter(start = 0) {
  let count = start   // closed over by increment and getCount

  return {
    increment() { count++ },
    decrement() { count-- },
    getCount() { return count },
    reset() { count = start },
  }
}

const counter = createCounter(10)
counter.increment()
counter.increment()
counter.getCount()   // 12
counter.reset()
counter.getCount()   // 10

// Another counter is independent
const other = createCounter(0)
other.getCount()   // 0
```

### Practical Use: Data Encapsulation

```javascript
function createStore(initialState) {
  let state = { ...initialState }
  const listeners = []

  return {
    getState: () => ({ ...state }),  // return a copy, not the real state
    setState(updates) {
      state = { ...state, ...updates }
      listeners.forEach(fn => fn(state))
    },
    subscribe(fn) {
      listeners.push(fn)
      return () => listeners.splice(listeners.indexOf(fn), 1)  // unsubscribe
    }
  }
}
```

---

## 8. Scope and Hoisting

### Scope

```javascript
// var — function scoped, avoid
function example() {
  if (true) {
    var x = 1   // accessible outside the if block
  }
  console.log(x)  // 1 — no block scope!
}

// let/const — block scoped
function example() {
  if (true) {
    let x = 1
    const y = 2
  }
  console.log(x)  // ReferenceError — not accessible
}
```

### Hoisting

```javascript
// Function declarations are hoisted — can call before definition
greet()   // works!
function greet() { console.log('hello') }

// const/let — hoisted but not initialized (Temporal Dead Zone)
console.log(name)  // ReferenceError
const name = 'Alice'

// var — hoisted and initialized to undefined
console.log(age)   // undefined (no error, but unexpected)
var age = 25
```

---

## Practice Exercises

### Exercise 1: Refactor with Modern Syntax

Take this old-style code and rewrite it using modern features:

```javascript
// Before
var user = { name: 'Alice', age: 25, settings: { theme: 'dark' } }
var name = user.name
var age = user.age
var theme = user.settings ? user.settings.theme : 'light'
var copy = Object.assign({}, user, { age: 26 })

// After — use destructuring, optional chaining, spread
```

### Exercise 2: Module Split

Split a monolithic script into three modules:
- `api.js` — functions for fetching data
- `utils.js` — helper functions (format date, format price, truncate text)
- `main.js` — orchestrates everything, imports from the other two

---

## Summary

| Feature | Example |
|---------|---------|
| Object destructuring | `const { name, age } = user` |
| Array destructuring | `const [first, ...rest] = arr` |
| Spread | `{ ...defaults, ...overrides }` |
| Rest params | `function sum(...nums)` |
| Optional chaining | `user?.address?.city` |
| Nullish coalescing | `value ?? 'default'` |
| Named export | `export function foo() {}` |
| Default export | `export default MyClass` |
| Import | `import { foo } from './foo.js'` |
| Closure | Inner function accessing outer variable |

---

## Next Lesson

`005 - Project - Expense Tracker.md` — build a full Vanilla JS app with all Phase 4 skills
