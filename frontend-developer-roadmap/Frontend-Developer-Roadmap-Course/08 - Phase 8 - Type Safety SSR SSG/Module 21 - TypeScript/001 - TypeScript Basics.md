# 001 - TypeScript Basics

## Section
Phase 7 — TypeScript

## Learning Objectives

- Understand what TypeScript adds over JavaScript
- Use primitive and structural types
- Write type-safe functions
- Use union types, literal types, and type narrowing
- Apply generics for reusable, type-safe code
- Use utility types: Pick, Omit, Partial, Required, Record

---

## 1. Why TypeScript?

TypeScript = JavaScript + static types. The compiler catches bugs before they reach the browser.

```typescript
// JavaScript — no error until runtime
function getUser(id) {
  return users.find(u => u.id === id)
}
getUser('not-a-number')  // typo: silent bug

// TypeScript — error at compile time
function getUser(id: number) {
  return users.find(u => u.id === id)
}
getUser('not-a-number')  // TS Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

## 2. Primitive Types

```typescript
const name: string = 'Alice'
const age: number = 25
const isActive: boolean = true
const nothing: null = null
const notDefined: undefined = undefined

// TypeScript infers types — you don't always need annotations
const name = 'Alice'   // inferred as string
const age = 25         // inferred as number
```

---

## 3. Arrays and Tuples

```typescript
const names: string[] = ['Alice', 'Bob']
const scores: number[] = [95, 87, 73]
const mixed: (string | number)[] = ['Alice', 25]

// Generic array syntax (same thing)
const names: Array<string> = ['Alice', 'Bob']

// Tuple — fixed-length array with specific types at each position
const coordinate: [number, number] = [40.7128, -74.0060]
const entry: [string, number] = ['Alice', 25]
```

---

## 4. Object Types with `interface` and `type`

```typescript
// Interface — preferred for objects (extendable)
interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  avatar?: string     // optional property
  readonly createdAt: string  // cannot be reassigned
}

// Type alias — more flexible
type Coordinates = {
  lat: number
  lon: number
}

// When to use which:
// interface: objects, classes, extendable shapes
// type: unions, intersections, primitives, utility types
```

### Extending Interfaces

```typescript
interface Animal {
  name: string
  sound: string
}

interface Dog extends Animal {
  breed: string
  fetch: () => void
}

// Type intersection (same result)
type Dog = Animal & {
  breed: string
  fetch: () => void
}
```

---

## 5. Functions

```typescript
// Parameter and return types
function add(a: number, b: number): number {
  return a + b
}

// Optional and default parameters
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

// Function type
type Handler = (event: MouseEvent) => void
type Formatter = (value: number, currency: string) => string

// void — function returns nothing
function logError(message: string): void {
  console.error(message)
}
```

---

## 6. Union Types

```typescript
// Value can be one of several types
type Status = 'active' | 'inactive' | 'pending'
type ID = string | number
type Theme = 'light' | 'dark' | 'system'

function formatId(id: string | number): string {
  return typeof id === 'string' ? id : id.toString()
}

// Discriminated union — union of objects with a common literal field
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number }

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':    return Math.PI * shape.radius ** 2
    case 'rectangle': return shape.width * shape.height
    case 'triangle':  return (shape.base * shape.height) / 2
  }
}
```

---

## 7. Type Narrowing

TypeScript narrows the type based on conditions:

```typescript
function processInput(input: string | number | null) {
  // Null check
  if (input === null) {
    console.log('no input')
    return
  }

  // typeof narrowing
  if (typeof input === 'string') {
    console.log(input.toUpperCase())   // TypeScript knows it's a string here
  } else {
    console.log(input.toFixed(2))      // TypeScript knows it's a number here
  }
}

// instanceof narrowing
function handleError(error: unknown) {
  if (error instanceof Error) {
    console.log(error.message)   // typed as Error
  } else {
    console.log('Unknown error', error)
  }
}

// 'in' narrowing
type Cat = { meow: () => void }
type Dog = { bark: () => void }

function makeSound(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow()   // narrowed to Cat
  } else {
    animal.bark()   // narrowed to Dog
  }
}
```

---

## 8. Generics

Write code that works with multiple types while remaining type-safe:

```typescript
// Generic function
function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

first([1, 2, 3])           // returns number | undefined
first(['a', 'b', 'c'])    // returns string | undefined

// Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: 'Alice', age: 25 }
getProperty(user, 'name')   // returns string
getProperty(user, 'age')    // returns number
getProperty(user, 'xyz')    // Error: 'xyz' is not a key of User

// Generic interface
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

type UserResponse = ApiResponse<User>
type UserListResponse = ApiResponse<User[]>

// Generic React component
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string | number
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
```

---

## 9. Utility Types

```typescript
interface User {
  id: number
  name: string
  email: string
  password: string
  role: 'admin' | 'viewer'
  createdAt: string
}

// Partial — all fields optional (useful for update functions)
type UserUpdate = Partial<User>
// { id?: number; name?: string; email?: string; ... }

// Required — all fields required (opposite of Partial)
type RequiredUser = Required<User>

// Pick — select specific fields
type PublicUser = Pick<User, 'id' | 'name' | 'email'>
// { id: number; name: string; email: string }

// Omit — exclude specific fields
type UserWithoutPassword = Omit<User, 'password'>
type UserFormData = Omit<User, 'id' | 'createdAt'>

// Record — object with keys of type K and values of type V
type RolePermissions = Record<User['role'], string[]>
// { admin: string[]; viewer: string[] }

// Readonly — all fields immutable
type ImmutableUser = Readonly<User>

// ReturnType — infer the return type of a function
function fetchUser() { return { id: 1, name: 'Alice' } }
type FetchUserReturn = ReturnType<typeof fetchUser>
// { id: number; name: string }

// Parameters — infer parameter types
type FetchParams = Parameters<typeof fetchUser>
```

---

## Practice Exercises

### Exercise 1: Type a Shopping Cart

```typescript
// Define these types:
// - Product: id, name, price, category, inStock, imageUrl (optional)
// - CartItem: product + quantity
// - Cart: items, total
// - Coupon: code, discount (percentage), expiresAt

// Then type these functions:
function addToCart(cart: Cart, product: Product, qty?: number): Cart
function removeFromCart(cart: Cart, productId: number): Cart
function applyCoupon(cart: Cart, coupon: Coupon): Cart
function calculateTotal(items: CartItem[]): number
```

### Exercise 2: Generic Data Table

Build a generic `DataTable<T>` component that works with any data type. It should accept:
- `data: T[]`
- `columns: Column<T>[]` where `Column` has `key: keyof T`, `label: string`, `render?: (value: T[keyof T]) => ReactNode`

---

## Summary

| Feature | Example |
|---------|---------|
| String type | `name: string` |
| Union type | `status: 'active' \| 'inactive'` |
| Interface | `interface User { id: number }` |
| Type alias | `type ID = string \| number` |
| Optional prop | `avatar?: string` |
| Generic | `function first<T>(arr: T[]): T` |
| Partial | `Partial<User>` — all optional |
| Pick | `Pick<User, 'id' \| 'name'>` — subset |
| Omit | `Omit<User, 'password'>` — exclude |

---

## Next Lesson

`002 - TypeScript with React.md` — typing props, events, refs, hooks, and API responses
