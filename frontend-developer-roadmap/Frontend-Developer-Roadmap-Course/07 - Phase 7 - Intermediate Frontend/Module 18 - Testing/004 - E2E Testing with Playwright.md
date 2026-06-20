# 002 - E2E Testing with Playwright

## Section
Phase 10 — Testing

## Learning Objectives

- Set up Playwright for end-to-end browser testing
- Write tests that simulate real user flows
- Test forms, navigation, and authentication
- Use the Page Object Model pattern
- Run tests in CI

---

## 1. What Is E2E Testing?

End-to-end tests run against a real browser, testing the full stack from the user's perspective. Unlike unit tests that test functions in isolation, E2E tests verify that everything works together.

**When to write E2E tests:**
- Login / authentication flows
- Checkout flows (critical business paths)
- Create / edit / delete operations
- Navigation and routing

---

## 2. Setup

```bash
pnpm add -D @playwright/test
pnpm exec playwright install   # installs Chromium, Firefox, WebKit
```

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html'], ['list']],

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'mobile',   use: { ...devices['iPhone 13'] } },
  ],

  // Start dev server before tests
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

---

## 3. Writing Tests

```typescript
// e2e/home.spec.ts
import { test, expect } from '@playwright/test'

test('home page loads correctly', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/My App/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('navigation')).toBeVisible()
})

test('navigation links work', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL('/about')
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
})
```

---

## 4. Key Locators

```typescript
// By role (preferred — accessibility-aware)
page.getByRole('button', { name: 'Submit' })
page.getByRole('link', { name: 'Home' })
page.getByRole('textbox', { name: 'Email' })
page.getByRole('heading', { level: 1 })

// By label
page.getByLabel('Email')
page.getByLabel('Password')

// By placeholder
page.getByPlaceholder('Search...')

// By text
page.getByText('Welcome, Alice')
page.getByText('Submit', { exact: true })

// By alt text
page.getByAltText('Profile photo')

// By test ID
page.getByTestId('submit-button')  // data-testid="submit-button"

// CSS selector (last resort)
page.locator('.card-list > .card:first-child')
```

---

## 5. Common Actions

```typescript
// Navigation
await page.goto('/products')
await page.goto('https://example.com')
await page.reload()
await page.goBack()

// Interactions
await page.getByLabel('Email').fill('alice@example.com')
await page.getByLabel('Password').fill('password')
await page.getByRole('button', { name: 'Login' }).click()
await page.getByRole('button', { name: 'Login' }).dblclick()
await page.keyboard.press('Enter')
await page.keyboard.press('Escape')
await page.getByRole('option', { name: 'Admin' }).click()    // select dropdown

// File upload
await page.getByLabel('Upload').setInputFiles('photo.jpg')

// Wait for something
await page.waitForURL('/dashboard')
await page.waitForSelector('.toast')
await page.waitForLoadState('networkidle')
await page.getByText('Saved').waitFor()
```

---

## 6. Assertions

```typescript
// Page
await expect(page).toHaveURL('/dashboard')
await expect(page).toHaveTitle('Dashboard | My App')

// Element visibility
await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible()
await expect(page.getByTestId('error-message')).toBeHidden()

// Element text
await expect(page.getByRole('heading')).toHaveText('Dashboard')
await expect(page.locator('#username')).toContainText('Alice')

// Form inputs
await expect(page.getByLabel('Email')).toHaveValue('alice@example.com')
await expect(page.getByRole('checkbox')).toBeChecked()

// Count
await expect(page.getByRole('listitem')).toHaveCount(5)

// CSS class
await expect(page.getByRole('button')).toHaveClass(/active/)

// Element is disabled
await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled()

// URL params
await expect(page).toHaveURL(/\?category=electronics/)
```

---

## 7. Login Flow Test

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('login with valid credentials', async ({ page }) => {
    await page.goto('/login')

    await page.getByLabel('Email').fill('admin@example.com')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByText('Welcome, Admin')).toBeVisible()
  })

  test('shows error with invalid credentials', async ({ page }) => {
    await page.goto('/login')

    await page.getByLabel('Email').fill('wrong@example.com')
    await page.getByLabel('Password').fill('wrongpassword')
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByRole('alert')).toContainText('Invalid credentials')
    await expect(page).toHaveURL('/login')
  })

  test('redirects to login when accessing protected route', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page).toHaveURL(/\/login/)
  })

  test('logout clears session', async ({ page }) => {
    // Login first
    await page.goto('/login')
    await page.getByLabel('Email').fill('admin@example.com')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL('/dashboard')

    // Logout
    await page.getByRole('button', { name: 'Logout' }).click()
    await expect(page).toHaveURL('/login')

    // Try accessing protected route
    await page.goto('/dashboard')
    await expect(page).toHaveURL(/\/login/)
  })
})
```

---

## 8. Page Object Model

Encapsulate page interactions in reusable classes:

```typescript
// e2e/pages/LoginPage.ts
import { Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.emailInput = page.getByLabel('Email')
    this.passwordInput = page.getByLabel('Password')
    this.submitButton = page.getByRole('button', { name: 'Login' })
    this.errorMessage = page.getByRole('alert')
  }

  async goto() {
    await this.page.goto('/login')
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
}

// e2e/auth.spec.ts — cleaner with POM
import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.login('admin@example.com', 'password')
  await expect(page).toHaveURL('/dashboard')
})
```

---

## 9. Authentication Fixtures

Save login state once, reuse across tests:

```typescript
// e2e/fixtures.ts
import { test as base, expect } from '@playwright/test'

const test = base.extend<{}, { workerStorageState: string }>({
  storageState: async ({ workerStorageState }, use) => {
    await use(workerStorageState)
  },
  workerStorageState: [async ({ browser }, use) => {
    const page = await browser.newPage()
    await page.goto('/login')
    await page.getByLabel('Email').fill('admin@example.com')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL('/dashboard')

    await page.context().storageState({ path: 'e2e/.auth/user.json' })
    await page.close()
    await use('e2e/.auth/user.json')
  }, { scope: 'worker' }],
})

export { test, expect }
```

---

## 10. Running Tests

```bash
# Run all tests (headless)
pnpm exec playwright test

# Run with browser UI
pnpm exec playwright test --ui

# Run specific file
pnpm exec playwright test e2e/auth.spec.ts

# Run with visible browser
pnpm exec playwright test --headed

# Debug mode (step through)
pnpm exec playwright test --debug

# View HTML report
pnpm exec playwright show-report
```

---

## Summary

| Concept | Key API |
|---------|---------|
| Navigate | `page.goto('/path')` |
| Find by role | `page.getByRole('button', { name: 'Submit' })` |
| Fill input | `locator.fill('value')` |
| Click | `locator.click()` |
| Assert URL | `expect(page).toHaveURL('/dashboard')` |
| Assert visible | `expect(locator).toBeVisible()` |
| Assert text | `expect(locator).toContainText('Welcome')` |
| Wait for | `locator.waitFor()` |
| Page Object | Class encapsulating page interactions |
| Auth state | Save login state once, reuse via fixtures |

---

## Next Phase

Phase 11 — Performance and Deployment: Lighthouse, caching, service workers, Vercel
