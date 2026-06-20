# 002 - TypeScript with React

## Section
Phase 7 — TypeScript

## Learning Objectives

- Type component props and children
- Handle DOM events with correct TypeScript types
- Type useRef for DOM and mutable values
- Type useState, useEffect, and custom hooks
- Type API responses end-to-end

---

## 1. Component Props

```tsx
// Simple props
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

function Button({ label, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>
}
```

### Extending Native HTML Props

```tsx
// Extend HTMLButtonElement attributes so all native button props work
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
}

function Button({ variant = 'primary', isLoading, children, ...props }: ButtonProps) {
  return (
    <button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

// Now all native button props work automatically:
<Button type="submit" form="login-form" aria-label="Submit form" variant="primary">
  Login
</Button>
```

---

## 2. children Prop

```tsx
import { ReactNode, PropsWithChildren } from 'react'

// Method 1: explicit ReactNode
interface CardProps {
  title: string
  children: ReactNode
}

// Method 2: PropsWithChildren utility
interface CardProps extends PropsWithChildren<{ title: string }> {}

// Method 3: same with generics
function Card({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

---

## 3. Event Types

```tsx
// Common event types
function Form() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    console.log(e.target.checked)  // for checkboxes
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value)
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(e.target.value)
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.clientX, e.clientY)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit()
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

---

## 4. useRef Types

```tsx
import { useRef, useEffect } from 'react'

// DOM element ref — initial value must be null
function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input ref={inputRef} type="text" />
}

// Mutable ref (no DOM) — initial value is the type itself
function Timer() {
  const intervalId = useRef<number | null>(null)
  const renderCount = useRef<number>(0)

  renderCount.current++

  function start() {
    intervalId.current = window.setInterval(() => {
      // ...
    }, 1000)
  }

  function stop() {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
  }
}
```

---

## 5. useState Types

```tsx
import { useState } from 'react'

// TypeScript infers from initial value
const [count, setCount] = useState(0)         // number
const [name, setName] = useState('')          // string
const [flag, setFlag] = useState(false)       // boolean

// When initial value is null/undefined, provide explicit type
const [user, setUser] = useState<User | null>(null)
const [error, setError] = useState<string | null>(null)

// Arrays
const [items, setItems] = useState<Todo[]>([])

// Complex initial state
const [form, setForm] = useState<UserFormData>({
  name: '',
  email: '',
  role: 'viewer',
  status: 'active',
})

// Functional update pattern — use when new state depends on previous
setItems(prev => [...prev, newItem])
setCount(prev => prev + 1)
```

---

## 6. Custom Hook Types

```tsx
// useFetch — generic hook typed end-to-end
interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (!url) {
      setState({ data: null, loading: false, error: null })
      return
    }

    let cancelled = false

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<T>
      })
      .then(data => {
        if (!cancelled) setState({ data, loading: false, error: null })
      })
      .catch(error => {
        if (!cancelled) setState({ data: null, loading: false, error })
      })

    return () => { cancelled = true }
  }, [url])

  return state
}

// Usage
const { data: users, loading, error } = useFetch<User[]>('/api/users')
// users is User[] | null — TypeScript knows the shape
```

---

## 7. Typing API Responses

```typescript
// Define your API contract as types
interface ApiSuccess<T> {
  success: true
  data: T
}

interface ApiError {
  success: false
  error: {
    code: string
    message: string
    details?: Record<string, string>
  }
}

type ApiResult<T> = ApiSuccess<T> | ApiError

// Type guard
function isApiError(result: ApiResult<unknown>): result is ApiError {
  return !result.success
}

// Usage
async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`)
  const result: ApiResult<User> = await res.json()

  if (isApiError(result)) {
    throw new Error(result.error.message)
  }

  return result.data   // TypeScript knows this is User
}
```

---

## 8. Context API with TypeScript

```tsx
import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  async function login(email: string, password: string) {
    const user = await authService.login(email, password)
    setUser(user)
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user !== null }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
```

---

## 9. `as const` and Template Literal Types

```typescript
// as const — infer narrowest possible type
const ROLES = ['admin', 'editor', 'viewer'] as const
type Role = typeof ROLES[number]   // 'admin' | 'editor' | 'viewer'

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
} as const
type HttpMethod = typeof HTTP_METHODS[keyof typeof HTTP_METHODS]
// 'GET' | 'POST' | 'PUT'

// Template literal types
type EventName = `on${Capitalize<string>}`   // 'onClick' | 'onFocus' | etc.
type ApiRoute = `/api/${'users' | 'posts' | 'comments'}`
// '/api/users' | '/api/posts' | '/api/comments'
```

---

## Practice: TypeScript Product Management App

Convert a JavaScript product management app to TypeScript:

### Types to Create

```typescript
// types/product.ts
export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: Category
  inStock: boolean
  imageUrl?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
export type ProductUpdate = Partial<ProductFormData>

export const CATEGORIES = ['electronics', 'clothing', 'food', 'books', 'other'] as const
export type Category = typeof CATEGORIES[number]
```

### Components to Type

- `ProductCard`: receives `Product`, fires `onEdit(id)` and `onDelete(id)`
- `ProductForm`: receives optional `initialData: ProductFormData`, fires `onSubmit(data)`
- `ProductList`: receives `products`, `onEdit`, `onDelete`, `onAdd`
- `useProducts`: custom hook managing CRUD operations

---

## Summary

| Pattern | Key Syntax |
|---------|-----------|
| Props with native attrs | `extends React.ButtonHTMLAttributes<HTMLButtonElement>` |
| Optional children | `children: ReactNode` |
| Event handler | `(e: React.ChangeEvent<HTMLInputElement>) => void` |
| DOM ref | `useRef<HTMLInputElement>(null)` |
| Generic state | `useState<User \| null>(null)` |
| Generic hook | `function useX<T>(url: string): FetchState<T>` |
| Context | `createContext<Type \| null>(null)` |
| Type guard | `function isX(x: A \| B): x is A { return ... }` |

---

## Next Lesson

`003 - Project - Product Management App.md` — full TypeScript React app
