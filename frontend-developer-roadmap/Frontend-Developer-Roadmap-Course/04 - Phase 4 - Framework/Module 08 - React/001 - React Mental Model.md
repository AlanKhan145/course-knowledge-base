# 001 - React Core

## Section
Phase 6 — React and Tailwind CSS

## Learning Objectives

- Understand React's component model
- Write functional components with JSX
- Pass data with props
- Manage local state with useState
- Handle events and conditional/list rendering
- Compose components into a UI

---

## 1. What Is React?

React is a JavaScript library for building user interfaces using **components** — reusable, self-contained pieces of UI.

```
App
├── Header
│   ├── Logo
│   └── Nav
├── Main
│   ├── Hero
│   ├── ProductList
│   │   ├── ProductCard
│   │   ├── ProductCard
│   │   └── ProductCard
└── Footer
```

Each component manages its own state and renders based on its props and state. When state changes, React re-renders only the affected components.

---

## 2. Your First Component

```tsx
// A React component is a function that returns JSX
function Greeting() {
  return <h1>Hello, World!</h1>
}

// Arrow function style (same thing)
const Greeting = () => {
  return <h1>Hello, World!</h1>
}

// Implicit return (no curly braces, no return keyword)
const Greeting = () => <h1>Hello, World!</h1>

// Usage
function App() {
  return (
    <div>
      <Greeting />
    </div>
  )
}
```

**Naming**: Components must start with a capital letter — `<Greeting />` is a component, `<greeting />` is an HTML tag.

---

## 3. JSX Rules

```tsx
// Must return a single root element
// Wrap in a fragment (<>) when you don't want an extra div
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
)

// className, not class
<div className="card">

// htmlFor, not for
<label htmlFor="email">Email</label>

// Self-closing tags
<img src="..." alt="..." />
<input type="text" />

// JavaScript expressions inside {}
const name = 'Alice'
return <h1>Hello, {name}!</h1>
return <p>{2 + 2}</p>             // 4
return <p>{isLoggedIn ? 'Hi' : 'Sign in'}</p>

// Inline styles — object with camelCase keys
<div style={{ backgroundColor: 'blue', fontSize: '16px' }}>
```

---

## 4. Props

Props are arguments passed to a component from its parent.

```tsx
// Define component with props
interface UserCardProps {
  name: string
  age: number
  avatar?: string   // optional prop
  onClick: () => void
}

function UserCard({ name, age, avatar, onClick }: UserCardProps) {
  return (
    <div className="card" onClick={onClick}>
      {avatar && <img src={avatar} alt={`${name}'s avatar`} />}
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

// Usage
<UserCard
  name="Alice"
  age={25}
  avatar="/alice.jpg"
  onClick={() => console.log('clicked')}
/>
```

### children Prop

```tsx
interface CardProps {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">{children}</div>
    </div>
  )
}

// Usage
<Card title="My Card">
  <p>Any content can go here</p>
  <button>Action</button>
</Card>
```

---

## 5. State with useState

State is data that changes over time. When state changes, React re-renders the component.

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  //     │      │           └── initial value
  //     │      └────────────── setter function
  //     └───────────────────── current value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
```

### State with Objects and Arrays

```tsx
// Never mutate state directly — always return a new value
const [user, setUser] = useState({ name: 'Alice', age: 25 })

// Wrong — mutating directly
user.age = 26           // ❌ React won't detect this change

// Right — spread and override
setUser({ ...user, age: 26 })   // ✓

// Array state
const [items, setItems] = useState<string[]>([])

// Add item
setItems([...items, 'new item'])
setItems(prev => [...prev, 'new item'])   // functional update

// Remove item
setItems(items.filter(item => item !== 'remove me'))

// Update item
setItems(items.map(item => item === 'old' ? 'updated' : item))
```

---

## 6. Conditional Rendering

```tsx
function Alert({ type, message }: { type: 'error' | 'success', message: string }) {
  // Return null to render nothing
  if (!message) return null

  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  )
}

function UserProfile({ user }: { user: User | null }) {
  return (
    <div>
      {/* Ternary operator */}
      {user ? (
        <h1>Welcome, {user.name}</h1>
      ) : (
        <p>Please log in</p>
      )}

      {/* Short-circuit (render only if true) */}
      {user?.isAdmin && <AdminBadge />}

      {/* Nullish coalescing */}
      <p>{user?.bio ?? 'No bio provided'}</p>
    </div>
  )
}
```

---

## 7. List Rendering

```tsx
interface Product {
  id: number
  name: string
  price: number
}

function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="empty">No products found.</p>
  }

  return (
    <ul>
      {products.map(product => (
        // key must be a stable, unique identifier
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
```

**Key rules:**
- Always add a `key` prop when rendering lists
- Use stable IDs (from data), not array indices — indices cause bugs when list order changes
- Keys only need to be unique among siblings, not globally

---

## 8. Handling Events

```tsx
function Form() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Submitted:', name)
    setSubmitted(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  if (submitted) return <p>Thanks, {name}!</p>

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

---

## 9. Controlled Inputs

A controlled input is one whose value is driven by React state:

```tsx
// Controlled — value comes from state
<input
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

// Controlled select
<select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
  <option value="">All</option>
  <option value="food">Food</option>
</select>

// Controlled checkbox
<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

---

## Practice Exercises

### Exercise 1: Reusable Button Component

Build a `Button` component that accepts:
- `children: React.ReactNode`
- `variant: 'primary' | 'secondary' | 'danger'`
- `size: 'sm' | 'md' | 'lg'`
- `disabled?: boolean`
- `onClick?: () => void`

Apply different CSS classes based on props.

### Exercise 2: Todo App in React

Convert your Vanilla JS Todo App to React:
- State: `todos: Todo[]`, `filter: string`
- Components: `App`, `TodoForm`, `TodoList`, `TodoItem`, `FilterBar`
- Props flow down, event handlers flow up

---

## Summary

| Concept | Key Syntax |
|---------|-----------|
| Component | `function Name() { return <JSX /> }` |
| Props | `function C({ prop }: Props)` |
| State | `const [val, setVal] = useState(initial)` |
| Re-render | Happens when state or props change |
| List render | `arr.map(item => <C key={item.id} />)` |
| Conditional | `{condition && <C />}` or `{a ? <X /> : <Y />}` |
| Event handler | `onClick={() => handleClick()}` |
| Controlled input | `value={state} onChange={e => setState(e.target.value)}` |

---

## Next Lesson

`002 - React Hooks.md` — useEffect, useRef, useMemo, useCallback, custom hooks
