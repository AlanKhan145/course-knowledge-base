# 002 - React Hooks

## Section
Phase 6 — React and Tailwind CSS

## Learning Objectives

- Sync React state with external effects using `useEffect`
- Access DOM elements directly with `useRef`
- Optimize expensive computations with `useMemo`
- Memoize callbacks with `useCallback`
- Build reusable logic with custom hooks

---

## 1. useEffect

`useEffect` runs side effects after a render: data fetching, subscriptions, timers, DOM manipulation.

```tsx
import { useState, useEffect } from 'react'

useEffect(() => {
  // Effect runs here
}, [dependencies])
// └── When does it run?
//     []        — once after first render (mount)
//     [a, b]    — after first render AND whenever a or b changes
//     (omitted) — after every render (usually wrong)
```

### Fetching Data

```tsx
function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false   // prevent state update after unmount

    async function fetchUser() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`/api/users/${userId}`)
        if (!res.ok) throw new Error(`Error ${res.status}`)
        const data = await res.json()
        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    return () => { cancelled = true }   // cleanup
  }, [userId])    // re-run when userId changes

  if (loading) return <Spinner />
  if (error)   return <ErrorMessage message={error} />
  if (!user)   return null

  return <div>{user.name}</div>
}
```

### Subscriptions and Timers

```tsx
// Event listener — clean up to prevent memory leaks
useEffect(() => {
  function handleResize() {
    setWidth(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)   // cleanup
}, [])

// Interval
useEffect(() => {
  const id = setInterval(() => {
    setTime(new Date())
  }, 1000)

  return () => clearInterval(id)   // cleanup
}, [])
```

---

## 2. useRef

`useRef` stores a mutable value that persists across renders **without causing re-renders**.

### Accessing DOM Elements

```tsx
import { useRef } from 'react'

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <>
      <input ref={inputRef} type="search" placeholder="Search..." />
      <button onClick={focusInput}>Focus</button>
    </>
  )
}
```

### Storing Values Without Re-render

```tsx
// Storing previous value
function usePrevious<T>(value: T) {
  const prevRef = useRef<T>(value)

  useEffect(() => {
    prevRef.current = value
  })

  return prevRef.current
}

// Storing interval ID
function Timer() {
  const intervalRef = useRef<number | null>(null)
  const [seconds, setSeconds] = useState(0)

  function start() {
    intervalRef.current = window.setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
  }

  function stop() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <>
      <p>{seconds}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}
```

---

## 3. useMemo

`useMemo` memoizes an expensive computed value — recalculates only when dependencies change.

```tsx
import { useMemo } from 'react'

function ProductList({ products, searchQuery, sortBy }: Props) {
  // Recalculates only when products, searchQuery, or sortBy changes
  const filteredAndSorted = useMemo(() => {
    let result = products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name))

    return result
  }, [products, searchQuery, sortBy])

  return (
    <ul>
      {filteredAndSorted.map(p => <ProductCard key={p.id} product={p} />)}
    </ul>
  )
}
```

**Don't overuse** — simple calculations don't need memoization. Only memoize when you have a measurable performance problem.

---

## 4. useCallback

`useCallback` memoizes a function — returns the same function reference unless dependencies change.

```tsx
import { useCallback } from 'react'

function Parent() {
  const [count, setCount] = useState(0)

  // Without useCallback: new function reference every render → Child re-renders
  const handleDelete = useCallback((id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }, [])  // no deps → same function forever

  return <ExpensiveChild onDelete={handleDelete} />
}
```

---

## 5. Custom Hooks

Extract stateful logic into reusable functions. Custom hooks start with `use`.

### useFetch

```tsx
interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }))
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: T = await res.json()
        if (!cancelled) setState({ data, loading: false, error: null })
      } catch (err) {
        if (!cancelled) setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed',
        })
      }
    }

    load()
    return () => { cancelled = true }
  }, [url])

  return state
}

// Usage
function Users() {
  const { data: users, loading, error } = useFetch<User[]>('/api/users')

  if (loading) return <Spinner />
  if (error) return <p>Error: {error}</p>
  return <ul>{users?.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

### useLocalStorage

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  function set(newValue: T | ((prev: T) => T)) {
    const resolved = typeof newValue === 'function'
      ? (newValue as (prev: T) => T)(value)
      : newValue

    setValue(resolved)
    localStorage.setItem(key, JSON.stringify(resolved))
  }

  return [value, set] as const
}

// Usage
const [theme, setTheme] = useLocalStorage('theme', 'light')
```

### useDebounce

```tsx
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])

  return debounced
}

// Usage — only fetch after user stops typing for 400ms
function SearchPage() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  const { data } = useFetch(`/api/search?q=${debouncedQuery}`)

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {/* Results only re-fetch when debouncedQuery changes */}
    </>
  )
}
```

---

## Rules of Hooks

1. **Only call hooks at the top level** — not inside if/for/while
2. **Only call hooks inside React functions** — components or custom hooks
3. Custom hooks must start with `use`

```tsx
// Wrong
function Component({ isLogged }) {
  if (isLogged) {
    const [data, setData] = useState(null)   // ❌
  }
}

// Right
function Component({ isLogged }) {
  const [data, setData] = useState(null)   // ✓ always called
  if (!isLogged) return null
}
```

---

## Practice: Movie Search App

Build a movie search app:

```tsx
// useFetch hook for OMDB API
function MovieSearch() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)
  const { data, loading, error } = useFetch<MovieSearchResult>(
    debouncedQuery ? `https://www.omdbapi.com/?s=${debouncedQuery}&apikey=YOUR_KEY` : ''
  )

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      {loading && <Spinner />}
      {error && <p>Error: {error}</p>}
      {data?.Search?.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}
```

---

## Summary

| Hook | Purpose |
|------|---------|
| `useEffect(fn, deps)` | Run side effects after render |
| `useEffect(() => fn, [])` | Run once on mount |
| `useEffect cleanup` | `return () => { ... }` for subscriptions/timers |
| `useRef` | Access DOM, store values without re-render |
| `useMemo` | Memoize expensive computations |
| `useCallback` | Memoize function references |
| Custom hook | Extract and reuse stateful logic |

---

## Next Lesson

`003 - React Router.md` — routing, nested routes, dynamic routes, navigation
