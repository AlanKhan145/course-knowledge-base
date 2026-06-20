# 003 - Project: Tested Admin Dashboard

## Section
Phase 10 — Testing

## Project Overview

Add a full test suite to your React/Next.js admin dashboard — **Project 6** in your portfolio. This demonstrates production-quality code with automated safety nets.

---

## Skills Demonstrated

- Unit tests with Vitest + React Testing Library
- E2E tests with Playwright
- Mocking API calls and modules
- Testing forms, CRUD flows, and authentication
- Test coverage reporting
- README with test commands

---

## Test Coverage Goals

| Area | Test Type | Target |
|------|-----------|--------|
| Utility functions | Unit | 100% |
| Form validation logic | Unit | 100% |
| UI components (Button, Input, Modal) | Unit | 90%+ |
| CRUD operations | Unit + E2E | High |
| Login / logout flow | E2E | Required |
| Create / edit / delete user | E2E | Required |
| Protected route redirect | E2E | Required |

---

## Unit Tests to Write

### 1. Utility Functions

```typescript
// src/utils/format.test.ts
import { describe, it, expect } from 'vitest'
import { formatDate, formatCurrency, truncate } from './format'

describe('formatDate', () => {
  it('formats ISO date to readable string', () => {
    expect(formatDate('2025-06-20T10:00:00.000Z')).toBe('Jun 20, 2025')
  })

  it('handles invalid date gracefully', () => {
    expect(formatDate('invalid')).toBe('Invalid date')
  })
})

describe('truncate', () => {
  it('truncates text longer than limit', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...')
  })

  it('does not truncate text within limit', () => {
    expect(truncate('Hi', 8)).toBe('Hi')
  })
})
```

### 2. Form Validation

```typescript
// src/hooks/useUserForm.test.ts
import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useUserForm } from './useUserForm'

describe('useUserForm validation', () => {
  it('returns no errors for valid data', () => {
    const { result } = renderHook(() => useUserForm())

    act(() => {
      result.current.setValues({
        name: 'Alice Johnson',
        email: 'alice@example.com',
        role: 'editor',
      })
    })

    act(() => {
      result.current.validate()
    })

    expect(result.current.errors).toEqual({})
  })

  it('validates name is required', () => {
    const { result } = renderHook(() => useUserForm())

    act(() => { result.current.validate() })

    expect(result.current.errors.name).toBe('Name is required')
  })

  it('validates email format', () => {
    const { result } = renderHook(() => useUserForm())

    act(() => {
      result.current.setValues({ name: 'Alice', email: 'not-an-email', role: 'viewer' })
      result.current.validate()
    })

    expect(result.current.errors.email).toBe('Invalid email address')
  })
})
```

### 3. React Components

```typescript
// src/components/UserTable.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserTable from './UserTable'
import { mockUsers } from '@/test/fixtures'

describe('UserTable', () => {
  it('renders all users', () => {
    render(<UserTable users={mockUsers} onEdit={vi.fn()} onDelete={vi.fn()} />)
    mockUsers.forEach(user => {
      expect(screen.getByText(user.name)).toBeInTheDocument()
    })
  })

  it('filters by search query', async () => {
    const user = userEvent.setup()
    render(<UserTable users={mockUsers} onEdit={vi.fn()} onDelete={vi.fn()} />)

    await user.type(screen.getByPlaceholderText('Search users...'), 'Alice')

    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
    expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument()
  })

  it('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup()
    const handleDelete = vi.fn()

    render(<UserTable users={mockUsers} onEdit={vi.fn()} onDelete={handleDelete} />)
    await user.click(screen.getAllByRole('button', { name: 'Delete' })[0])

    expect(handleDelete).toHaveBeenCalledWith(mockUsers[0].id)
  })

  it('shows empty state when no users match', async () => {
    const user = userEvent.setup()
    render(<UserTable users={mockUsers} onEdit={vi.fn()} onDelete={vi.fn()} />)

    await user.type(screen.getByPlaceholderText('Search users...'), 'zzz nonexistent')

    expect(screen.getByText(/no users found/i)).toBeInTheDocument()
  })
})
```

---

## E2E Tests to Write

### Login Flow

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('login with valid credentials redirects to dashboard', async ({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Email').fill('admin@example.com')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: /login/i }).click()
    await expect(page).toHaveURL('/dashboard')
  })

  test('shows error message for invalid credentials', async ({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Email').fill('wrong@test.com')
    await page.getByLabel('Password').fill('wrong')
    await page.getByRole('button', { name: /login/i }).click()
    await expect(page.getByRole('alert')).toBeVisible()
    await expect(page).toHaveURL('/login')
  })

  test('unauthenticated user is redirected to login', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page).toHaveURL(/\/login/)
  })
})
```

### CRUD Flow

```typescript
// e2e/users.spec.ts
import { test, expect } from './fixtures'  // uses logged-in state

test.describe('User management', () => {
  test('creates a new user', async ({ page }) => {
    await page.goto('/dashboard/users')
    await page.getByRole('button', { name: /add user/i }).click()

    await page.getByLabel('Name').fill('New Test User')
    await page.getByLabel('Email').fill('newuser@test.com')
    await page.getByLabel('Role').selectOption('editor')
    await page.getByRole('button', { name: /save/i }).click()

    await expect(page.getByText('New Test User')).toBeVisible()
    await expect(page.getByRole('status')).toContainText('User created')
  })

  test('edits an existing user', async ({ page }) => {
    await page.goto('/dashboard/users')
    await page.getByRole('row', { name: /alice/i }).getByRole('button', { name: /edit/i }).click()

    await page.getByLabel('Name').clear()
    await page.getByLabel('Name').fill('Alice Updated')
    await page.getByRole('button', { name: /save/i }).click()

    await expect(page.getByText('Alice Updated')).toBeVisible()
  })

  test('deletes a user with confirmation', async ({ page }) => {
    await page.goto('/dashboard/users')
    const userName = await page.getByRole('row').nth(1).getByRole('cell').first().textContent()

    await page.getByRole('row').nth(1).getByRole('button', { name: /delete/i }).click()
    await page.getByRole('button', { name: /confirm/i }).click()

    await expect(page.getByText(userName!)).not.toBeVisible()
  })
})
```

---

## Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:all": "vitest run && playwright test",
    "typecheck": "tsc --noEmit",
    "lint": "eslint src"
  }
}
```

---

## README Test Section

```markdown
## Testing

### Unit Tests (Vitest)

```bash
pnpm test          # watch mode
pnpm test:run      # single run
pnpm test:coverage # with coverage report
```

Coverage report: `coverage/index.html`

### E2E Tests (Playwright)

```bash
# Start dev server first (in a separate terminal):
pnpm dev

# Run all E2E tests:
pnpm test:e2e

# Open interactive UI:
pnpm test:e2e:ui

# View last report:
pnpm exec playwright show-report
```

Test credentials: `admin@example.com` / `password`
```

---

## Checklist

- [ ] All utility functions have 100% unit test coverage
- [ ] Form validation logic fully tested
- [ ] UserTable component tests: render, search, delete, empty state
- [ ] Modal component tests: open, close, submit
- [ ] Login E2E: valid, invalid, redirect
- [ ] CRUD E2E: create, edit, delete with confirmation
- [ ] `pnpm test:run` passes with zero failures
- [ ] `pnpm test:coverage` shows >80% coverage
- [ ] `pnpm test:e2e` passes in Chromium and Firefox
- [ ] README documents how to run tests

---

## Next Phase

Phase 11 — Performance and Deployment: Lighthouse, Core Web Vitals, service workers, Vercel
