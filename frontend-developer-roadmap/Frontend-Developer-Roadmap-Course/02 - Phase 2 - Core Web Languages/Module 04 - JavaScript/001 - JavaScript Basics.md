# 001 - JavaScript Basics

## Section
Phase 4 — JavaScript Core

## Learning Objectives

- Declare variables with `let` and `const`
- Work with JavaScript's data types
- Write functions using declarations, expressions, and arrow syntax
- Manipulate arrays and objects
- Use the most important array methods

---

## 1. Variables

```javascript
// const — cannot be reassigned (use by default)
const name = 'Alice'
const age = 25
const isActive = true

// let — can be reassigned
let count = 0
count = count + 1

// var — avoid; function-scoped and hoisted (causes bugs)
```

**Rule**: Always use `const`. Switch to `let` only when you know you'll reassign the value. Never use `var`.

---

## 2. Data Types

### Primitive Types

```javascript
// String
const greeting = 'Hello'
const template = `Hello, ${name}!`    // template literal
const multiline = `Line 1
Line 2`

// Number
const price = 29.99
const count = 42
const negative = -5
const infinity = Infinity
const notANumber = NaN              // result of invalid math

// Boolean
const isLoggedIn = true
const hasErrors = false

// Null — intentional absence of a value
const selectedUser = null

// Undefined — variable declared but not assigned
let result
console.log(result)  // undefined

// Symbol — unique identifier (advanced)
const id = Symbol('id')
```

### Reference Types

```javascript
// Object
const user = {
  name: 'Alice',
  age: 25,
  isActive: true
}

// Array
const skills = ['HTML', 'CSS', 'JavaScript']

// Function (also a reference type)
const greet = function(name) {
  return `Hello, ${name}!`
}
```

### Type Checking

```javascript
typeof 'hello'      // 'string'
typeof 42           // 'number'
typeof true         // 'boolean'
typeof undefined    // 'undefined'
typeof null         // 'object' ← known JavaScript quirk
typeof {}           // 'object'
typeof []           // 'object'
typeof function(){} // 'function'

Array.isArray([])   // true
```

---

## 3. Operators

```javascript
// Arithmetic
5 + 3    // 8
10 - 4   // 6
4 * 3    // 12
15 / 4   // 3.75
15 % 4   // 3  (remainder)
2 ** 8   // 256 (exponentiation)

// Assignment
let x = 10
x += 5   // x = 15
x -= 3   // x = 12
x *= 2   // x = 24
x /= 4   // x = 6

// Comparison
5 === 5    // true  (strict equality — always use this)
5 == '5'   // true  (loose equality — avoid)
5 !== 6    // true  (strict inequality)
5 > 3      // true
5 >= 5     // true

// Logical
true && false   // false (AND)
true || false   // true  (OR)
!true           // false (NOT)

// Ternary
const label = age >= 18 ? 'Adult' : 'Minor'
```

---

## 4. Conditionals

```javascript
const score = 75

if (score >= 90) {
  console.log('Excellent')
} else if (score >= 70) {
  console.log('Good')
} else if (score >= 50) {
  console.log('Pass')
} else {
  console.log('Fail')
}

// Switch
const day = 'Monday'
switch (day) {
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend')
    break
  default:
    console.log('Weekday')
}
```

---

## 5. Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// while loop
let count = 0
while (count < 5) {
  console.log(count)
  count++
}

// for...of — iterate over arrays (preferred)
const fruits = ['apple', 'banana', 'cherry']
for (const fruit of fruits) {
  console.log(fruit)
}

// for...in — iterate over object keys
const user = { name: 'Alice', age: 25 }
for (const key in user) {
  console.log(`${key}: ${user[key]}`)
}
```

---

## 6. Functions

```javascript
// Function declaration (hoisted — can call before definition)
function add(a, b) {
  return a + b
}

// Function expression
const multiply = function(a, b) {
  return a * b
}

// Arrow function (no own 'this', best for callbacks)
const square = (n) => n * n
const greet = (name) => `Hello, ${name}!`
const add = (a, b) => {
  const result = a + b
  return result
}

// Default parameters
function createUser(name, role = 'viewer', isActive = true) {
  return { name, role, isActive }
}

createUser('Alice')              // { name: 'Alice', role: 'viewer', isActive: true }
createUser('Bob', 'admin')       // { name: 'Bob', role: 'admin', isActive: true }
```

---

## 7. Arrays

```javascript
const nums = [1, 2, 3, 4, 5]

// Access
nums[0]           // 1
nums[nums.length - 1]  // 5 (last item)
nums.at(-1)       // 5 (ES2022 — preferred)

// Mutating methods (change original array)
nums.push(6)       // add to end
nums.pop()         // remove from end
nums.unshift(0)    // add to start
nums.shift()       // remove from start
nums.splice(2, 1)  // remove 1 item at index 2

// Non-mutating methods (return new array)
nums.slice(1, 3)   // [2, 3] — extract subarray
nums.concat([6, 7]) // [1,2,3,4,5,6,7]
[...nums, 6, 7]    // same with spread

// Finding
nums.includes(3)          // true
nums.indexOf(3)           // 2
nums.find(n => n > 3)     // 4 (first match)
nums.findIndex(n => n > 3) // 3
```

---

## 8. Key Array Methods

```javascript
const products = [
  { name: 'Shirt', price: 25, inStock: true },
  { name: 'Jeans', price: 60, inStock: false },
  { name: 'Hat',   price: 15, inStock: true },
  { name: 'Shoes', price: 80, inStock: true },
]

// map — transform each item, return new array
const names = products.map(p => p.name)
// ['Shirt', 'Jeans', 'Hat', 'Shoes']

const discounted = products.map(p => ({
  ...p,
  price: p.price * 0.9
}))

// filter — keep items that pass a test
const available = products.filter(p => p.inStock)
// [{Shirt}, {Hat}, {Shoes}]

// find — first item that passes
const expensive = products.find(p => p.price > 50)
// {name: 'Jeans', price: 60, ...}

// some — does ANY item pass?
const hasExpensive = products.some(p => p.price > 70)  // true

// every — do ALL items pass?
const allInStock = products.every(p => p.inStock)  // false

// reduce — accumulate to a single value
const totalValue = products.reduce((sum, p) => sum + p.price, 0)
// 180

// sort — mutates original, use spread to avoid
const sorted = [...products].sort((a, b) => a.price - b.price)
// sorted by price ascending

// flat + flatMap
const nested = [[1, 2], [3, 4]]
nested.flat()  // [1, 2, 3, 4]

const doubled = [[1, 2], [3, 4]].flatMap(arr => arr.map(n => n * 2))
// [2, 4, 6, 8]
```

---

## 9. Objects

```javascript
const user = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'Ho Chi Minh City',
    country: 'Vietnam'
  }
}

// Access
user.name              // 'Alice'
user['age']            // 25
user.address.city      // 'Ho Chi Minh City'

// Add / update
user.email = 'alice@example.com'
user.age = 26

// Delete
delete user.address

// Object.keys / values / entries
Object.keys(user)    // ['name', 'age', 'email']
Object.values(user)  // ['Alice', 26, 'alice@example.com']
Object.entries(user) // [['name', 'Alice'], ['age', 26], ...]

// Spread to copy and merge
const updated = { ...user, age: 27 }
const merged = { ...defaults, ...userPrefs }
```

---

## Practice Exercises

### Exercise 1: Student Score Calculator

```javascript
const students = [
  { name: 'Alice', scores: [85, 92, 78] },
  { name: 'Bob',   scores: [70, 65, 80] },
  { name: 'Carol', scores: [95, 98, 92] },
]

// TODO:
// 1. Calculate average score for each student
// 2. Find the student with the highest average
// 3. Filter students with average >= 80
// 4. Sort by average, descending
// 5. Add a 'grade' property: A (>=90), B (>=80), C (>=70), F (<70)
```

### Exercise 2: Shopping Cart

```javascript
const cart = [
  { id: 1, name: 'Shirt',  price: 25, qty: 2 },
  { id: 2, name: 'Jeans',  price: 60, qty: 1 },
  { id: 3, name: 'Hat',    price: 15, qty: 3 },
]

// TODO:
// 1. Calculate total price for each item (price * qty)
// 2. Calculate grand total
// 3. Find the most expensive single item
// 4. Remove item with id = 2
// 5. Apply 10% discount to items where qty > 1
```

---

## Summary

| Concept | Key Syntax |
|---------|-----------|
| Variables | `const` by default, `let` when reassigning |
| Template literals | `` `Hello, ${name}!` `` |
| Arrow function | `(a, b) => a + b` |
| Array map | `arr.map(item => transform(item))` |
| Array filter | `arr.filter(item => condition)` |
| Array reduce | `arr.reduce((acc, item) => acc + item.value, 0)` |
| Object spread | `{ ...original, newKey: value }` |

---

## Next Lesson

`002 - DOM Manipulation.md` — querySelector, events, creating elements, localStorage
