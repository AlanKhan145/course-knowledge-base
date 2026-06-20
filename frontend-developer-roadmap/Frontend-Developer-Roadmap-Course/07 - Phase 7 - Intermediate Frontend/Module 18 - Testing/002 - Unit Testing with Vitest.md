# 001 - Unit Testing with Vitest

## Section
Phase 10 — Testing

## Learning Objectives

- Set up Vitest in a Vite/Next.js project
- Write unit tests for functions and utilities
- Test React components with React Testing Library
- Mock API calls and modules
- Run tests and generate coverage reports

---

## 1. Why Test?

- Catch bugs before users do
- Refactor with confidence — tests tell you if you broke something
- Document expected behavior
- Prevent regressions

**Rule of thumb**: Write tests for logic that has business value — not boilerplate.

---

## 2. Setup

```bash
pnpm add -D vitest @vitest/ui @vitest/coverage-v8
pnpm add -D @testing-library/react @testing-library/user-event @testing-library/jest-dom
pnpm add -D jsdom
```

```typescript
// vite.config.ts (or vitest.config.ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
```

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom'
```

```json
// package.json scripts
{
  "test": "vitest",
  "test:run": "vitest run",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest run --coverage"
}
```

---

## 3. Testing Utility Functions

```typescript
// src/utils/currency.ts
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
}

export function calculateDiscount(price: number, percentOff: number): number {
  if (percentOff < 0 || percentOff > 100) throw new Error('Invalid discount')
  return price * (1 - percentOff / 100)
}
```

```typescript
// src/utils/currency.test.ts
import { describe, it, expect } from 'vitest'
import { formatCurrency, calculateDiscount } from './currency'

describe('formatCurrency', () => {
  it('formats USD correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56')
  })

  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0.00')
  })

  it('rounds to 2 decimal places', () => {
    expect(formatCurrency(1.999)).toBe('$2.00')
  })
})

describe('calculateDiscount', () => {
  it('applies 20% discount correctly', () => {
    expect(calculateDiscount(100, 20)).toBe(80)
  })

  it('handles 0% discount', () => {
    expect(calculateDiscount(50, 0)).toBe(50)
  })

  it('handles 100% discount', () => {
    expect(calculateDiscount(50, 100)).toBe(0)
  })

  it('throws on invalid discount', () => {
    expect(() => calculateDiscount(100, -5)).toThrow('Invalid discount')
    expect(() => calculateDiscount(100, 150)).toThrow('Invalid discount')
  })
})
```

---

## 4. Common Matchers

```typescript
// Equality
expect(value).toBe(42)            // strict equality (===)
expect(obj).toEqual({ a: 1 })    // deep equality
expect(arr).toStrictEqual([1,2]) // strict deep equality

// Truthiness
expect(val).toBeTruthy()
expect(val).toBeFalsy()
expect(val).toBeNull()
expect(val).toBeUndefined()
expect(val).toBeDefined()

// Numbers
expect(3.14).toBeCloseTo(3.14159, 2)   // 2 decimal places
expect(5).toBeGreaterThan(3)
expect(3).toBeLessThanOrEqual(5)

// Strings
expect('Hello World').toContain('World')
expect('Hello').toMatch(/^H/)

// Arrays
expect([1,2,3]).toContain(2)
expect([1,2,3]).toHaveLength(3)

// Objects
expect(obj).toHaveProperty('name', 'Alice')

// Errors
expect(() => fn()).toThrow()
expect(() => fn()).toThrow('Error message')
expect(() => fn()).toThrow(Error)

// Negation
expect(val).not.toBe(null)
expect(arr).not.toContain(99)
```

---

## 5. Testing React Components

```tsx
// src/components/Button.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('renders with label', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Submit</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button disabled onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies variant classes', () => {
    render(<Button variant="danger">Delete</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('danger')
  })
})
```

---

## 6. Testing Forms

```tsx
// src/components/LoginForm.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders email and password fields', () => {
    render(<LoginForm onSubmit={vi.fn()} />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('calls onSubmit with form data', async () => {
    const user = userEvent.setup()
    const handleSubmit = vi.fn()

    render(<LoginForm onSubmit={handleSubmit} />)

    await user.type(screen.getByLabelText(/email/i), 'alice@example.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button', { name: /login/i }))

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'alice@example.com',
      password: 'password123',
    })
  })

  it('shows error when email is invalid', async () => {
    const user = userEvent.setup()

    render(<LoginForm onSubmit={vi.fn()} />)
    await user.type(screen.getByLabelText(/email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /login/i }))

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })
})
```

---

## 7. Mocking

```typescript
// Mock a module
import { vi } from 'vitest'
import { fetchUser } from '@/api/users'

vi.mock('@/api/users', () => ({
  fetchUser: vi.fn(),
}))

// Mock return value
vi.mocked(fetchUser).mockResolvedValue({ id: 1, name: 'Alice' })

// Mock for one test
vi.mocked(fetchUser).mockResolvedValueOnce({ id: 2, name: 'Bob' })

// Mock with implementation
vi.mocked(fetchUser).mockImplementation(async (id) => ({
  id,
  name: id === 1 ? 'Alice' : 'Bob',
}))

// Spy on a function
const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
// ... run test ...
expect(spy).toHaveBeenCalledWith('Error message')
spy.mockRestore()
```

---

## 8. Querying the DOM

React Testing Library encourages querying by what users see:

```typescript
// Priority order (most to least preferred):
screen.getByRole('button', { name: 'Submit' })    // best — accessible
screen.getByLabelText('Email')                     // form inputs
screen.getByPlaceholderText('Search...')
screen.getByText('Welcome, Alice')
screen.getByDisplayValue('current input value')
screen.getByAltText('Profile photo')
screen.getByTitle('Close dialog')
screen.getByTestId('submit-btn')                   // last resort

// Variants:
getByXxx()    — throws if not found or multiple found
findByXxx()   — async version, retries until found
queryByXxx()  — returns null if not found (use for "not present" assertions)
getAllByXxx()  — returns array of all matches
```

---

## Summary

| Topic | Key API |
|-------|---------|
| Setup | `vitest`, `@testing-library/react`, `jsdom` |
| Test file | `*.test.ts` or `*.test.tsx` |
| Describe block | `describe('name', () => { it('...', ...) })` |
| Assert | `expect(value).toBe()`, `.toEqual()`, `.toThrow()` |
| Render component | `render(<Component />)` |
| Query element | `screen.getByRole()`, `getByLabelText()` |
| Simulate user | `userEvent.click()`, `.type()` |
| Mock module | `vi.mock('module', () => ({ fn: vi.fn() }))` |
| Coverage | `pnpm test:coverage` |

---

## Next Lesson

`002 - E2E Testing with Playwright.md` — test real user flows in a real browser
