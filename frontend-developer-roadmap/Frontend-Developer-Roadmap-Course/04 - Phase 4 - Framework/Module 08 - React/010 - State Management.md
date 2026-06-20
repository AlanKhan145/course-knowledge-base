# 004 - State Management

## Section
Phase 6 — React and Tailwind CSS

## Learning Objectives

- Understand when to lift state and when to use global state
- Share state across components with Context API
- Use `useReducer` for complex local state
- Manage global state with Zustand

---

## 1. When to Use What

```
Local state (useState)
  └── UI-only state: open/close modal, form input values, toggle

Lifted state (useState in parent)
  └── State shared between sibling components

Context API
  └── State needed deeply in many parts of the tree: theme, auth, locale

Zustand / Redux Toolkit
  └── Complex app state with many actions and side effects
```

---

## 2. Lifting State

When two components need to share state, lift it to their common parent:

```tsx
// Before: both have their own filter state — they're out of sync
function SearchBar() {
  const [query, setQuery] = useState('')
}
function ProductList() {
  const [query, setQuery] = useState('')
}

// After: parent owns the state, passes it down
function ProductsPage() {
  const [query, setQuery] = useState('')

  return (
    <>
      <SearchBar query={query} onQueryChange={setQuery} />
      <ProductList query={query} />
    </>
  )
}

function SearchBar({ query, onQueryChange }: { query: string, onQueryChange: (q: string) => void }) {
  return (
    <input value={query} onChange={e => onQueryChange(e.target.value)} />
  )
}
```

---

## 3. Context API

Share state without prop drilling:

```tsx
// 1. Create context
import { createContext, useContext, useState, ReactNode } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

// 2. Create provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Create hook for safe usage
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}

// 4. Wrap app in provider
// main.tsx
<ThemeProvider>
  <App />
</ThemeProvider>

// 5. Use in any component
function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}
```

---

## 4. useReducer

`useReducer` is for complex state with multiple actions — cleaner than many `useState` calls.

```tsx
interface Todo {
  id: number
  text: string
  completed: boolean
}

type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number }
  | { type: 'CLEAR_COMPLETED' }

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, completed: false }]
    case 'TOGGLE':
      return state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t)
    case 'DELETE':
      return state.filter(t => t.id !== action.id)
    case 'CLEAR_COMPLETED':
      return state.filter(t => !t.completed)
    default:
      return state
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, [])

  return (
    <>
      <button onClick={() => dispatch({ type: 'ADD', text: 'New task' })}>Add</button>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'TOGGLE', id: todo.id })}>Toggle</button>
          <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>Delete</button>
        </div>
      ))}
    </>
  )
}
```

---

## 5. Zustand

Zustand is a lightweight (~1KB) global state manager — simpler than Redux, more scalable than Context.

```bash
pnpm add zustand
```

### Basic Store

```tsx
import { create } from 'zustand'

interface CartItem {
  id: number
  name: string
  price: number
  qty: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'qty'>) => void
  removeItem: (id: number) => void
  updateQty: (id: number, qty: number) => void
  clearCart: () => void
  total: () => number
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => set(state => {
    const existing = state.items.find(i => i.id === item.id)
    if (existing) {
      return {
        items: state.items.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
    }
    return { items: [...state.items, { ...item, qty: 1 }] }
  }),

  removeItem: (id) => set(state => ({
    items: state.items.filter(i => i.id !== id)
  })),

  updateQty: (id, qty) => set(state => ({
    items: qty > 0
      ? state.items.map(i => i.id === id ? { ...i, qty } : i)
      : state.items.filter(i => i.id !== id)
  })),

  clearCart: () => set({ items: [] }),

  total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
}))

// Usage — no provider needed
function CartBadge() {
  const items = useCartStore(state => state.items)
  return <span>{items.length}</span>
}

function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem)
  return (
    <button onClick={() => addItem(product)}>
      Add to Cart
    </button>
  )
}

function CartTotal() {
  const total = useCartStore(state => state.total())
  return <p>Total: ${total.toFixed(2)}</p>
}
```

### Zustand with Persistence

```tsx
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggle: () => set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    { name: 'theme-storage' }   // localStorage key
  )
)
```

---

## 6. State Management Decision Tree

```
Does the state need to be shared outside this component?
  No → useState inside the component
  Yes ↓

Is it needed in just 2–3 nearby components?
  Yes → Lift state to their common parent
  No  ↓

Is it lightweight (theme, auth, locale)?
  Yes → Context API + useContext
  No  ↓

Is it complex app state (cart, filters, server cache)?
  Yes → Zustand (or TanStack Query for server state)
```

---

## Summary

| Tool | Best For |
|------|----------|
| `useState` | Local, component-scoped state |
| Lifting state | Sharing between sibling components |
| `useReducer` | Complex local state with many actions |
| Context API | Lightweight global state: theme, auth, locale |
| Zustand | Scalable global state: cart, user prefs, complex UI |

---

## Next Lesson

`005 - Tailwind CSS.md` — utility-first CSS, responsive variants, dark mode, component patterns
