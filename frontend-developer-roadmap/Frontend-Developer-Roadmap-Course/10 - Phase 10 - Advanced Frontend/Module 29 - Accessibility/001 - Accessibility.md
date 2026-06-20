# 002 - Accessibility

## Section
Phase 12 — Advanced Frontend

## Learning Objectives

- Understand why accessibility matters and who benefits
- Use semantic HTML correctly for accessibility
- Apply ARIA attributes where HTML falls short
- Build accessible forms, modals, and navigation
- Test accessibility with browser tools and automated checks

---

## 1. Why Accessibility?

Accessibility (a11y) means building products that work for people with disabilities — visual, motor, hearing, and cognitive.

**Who benefits:**
- 15% of the world's population has some form of disability
- Keyboard-only users (motor disabilities, power users, VI)
- Screen reader users (visual impairments)
- People on slow connections or low-powered devices
- Aging users

**Legal requirement:** WCAG 2.1 AA compliance is legally required in many countries (ADA in the US, EAA in EU).

**Practical bonus:** Accessible code is also better SEO, better for AI parsing, and more maintainable.

---

## 2. Semantic HTML Is the Foundation

The most impactful accessibility improvement is using the right HTML element.

```html
<!-- BAD: custom button -->
<div class="btn" onclick="submit()">Save</div>

<!-- GOOD: real button -->
<button type="submit">Save</button>
<!-- Real buttons: keyboard focusable, ENTER/SPACE activate, role="button" built-in -->

<!-- BAD: span as a link -->
<span onclick="navigate()">Click here</span>

<!-- GOOD: real link -->
<a href="/products">View products</a>

<!-- BAD: div heading -->
<div class="heading">My App</div>

<!-- GOOD: real heading -->
<h1>My App</h1>
```

### Landmark Elements

Screen reader users navigate by landmarks:

```html
<header>    <!-- role="banner" -->
<nav>       <!-- role="navigation" -->
<main>      <!-- role="main" — only one per page -->
<section aria-label="Product reviews">   <!-- role="region" with label -->
<aside>     <!-- role="complementary" -->
<footer>    <!-- role="contentinfo" -->
```

---

## 3. ARIA — Accessible Rich Internet Applications

Use ARIA only when HTML semantics aren't enough.

### Core ARIA Rules

1. Don't use ARIA if a semantic HTML element exists
2. Don't change native semantics unless necessary
3. Interactive ARIA components must be keyboard accessible
4. Don't hide visible, focused elements with `aria-hidden`
5. Interactive elements need accessible names

### Common ARIA Attributes

```html
<!-- Labels for unlabeled elements -->
<button aria-label="Close dialog">✕</button>
<input aria-label="Search products" type="search" />

<!-- Describe with a separate element -->
<input aria-describedby="email-hint" type="email" />
<p id="email-hint">Use your work email</p>

<!-- Hide decorative elements from screen readers -->
<img src="decoration.svg" alt="" aria-hidden="true" />
<span aria-hidden="true">👋</span>

<!-- Live regions — announce dynamic content -->
<div role="status" aria-live="polite">Saved successfully</div>
<div role="alert" aria-live="assertive">Error: Connection failed</div>

<!-- Mark required fields -->
<input type="email" aria-required="true" />

<!-- Mark invalid fields -->
<input type="email" aria-invalid="true" aria-describedby="email-error" />
<p id="email-error" role="alert">Please enter a valid email</p>

<!-- Expand/collapse -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>
```

---

## 4. Accessible Forms

```tsx
// src/components/AccessibleForm.tsx
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        {/* Every input needs a <label> with htmlFor matching the input's id */}
        <label htmlFor="name">
          Full Name <span aria-label="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-red-600 text-sm">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby="email-hint email-error"
        />
        <p id="email-hint" className="text-gray-500 text-sm">
          We'll never share your email.
        </p>
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-600 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      {/* Use fieldset+legend for radio/checkbox groups */}
      <fieldset>
        <legend>Preferred contact method</legend>
        <label>
          <input type="radio" name="contact" value="email" /> Email
        </label>
        <label>
          <input type="radio" name="contact" value="phone" /> Phone
        </label>
      </fieldset>

      <button type="submit">Send Message</button>
    </form>
  )
}
```

---

## 5. Accessible Modal Dialog

```tsx
// src/components/Dialog.tsx
import { useEffect, useRef } from 'react'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Dialog({ isOpen, onClose, title, children }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement
      // Focus the dialog after it opens
      dialogRef.current?.focus()
    } else {
      // Restore focus when dialog closes
      previousFocusRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()

      // Trap focus inside dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
      aria-hidden="true"
    >
      {/* Dialog panel */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        className="bg-white rounded-lg p-6 max-w-md w-full m-4 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title" className="text-lg font-semibold mb-4">
          {title}
        </h2>
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
          aria-label="Close dialog"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
```

---

## 6. Keyboard Navigation

Every interactive element must be keyboard accessible:

```tsx
// Custom interactive element that isn't a button or link
// Must have: role, tabIndex, keyboard event handler

function Tag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="tag">
      {label}
      <span
        role="button"
        tabIndex={0}
        aria-label={`Remove ${label}`}
        onClick={onRemove}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onRemove()
          }
        }}
        className="ml-1 cursor-pointer"
      >
        ×
      </span>
    </span>
  )
}
```

### Focus Management Rules

1. **Never remove focus outlines** (`outline: none`) without replacing them
2. Focus must be visible at all times
3. Focus order must be logical (matches visual order)
4. When a dialog opens, move focus inside it
5. When a dialog closes, return focus to the trigger

```css
/* Replace browser focus with custom focus ring */
:focus-visible {
  outline: 2px solid var(--color-brand-500);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Remove only for mouse users (not keyboard users) */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 7. Color Contrast

WCAG AA requires:
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1
- UI components, icons: 3:1

```
Good: white text on #3b82f6 (blue-500) → 3.94:1 ✓ for large text
Bad:  white text on #93c5fd (blue-300) → 1.73:1 ✗

Check with: https://webaim.org/resources/contrastchecker/
Or: Chrome DevTools → Accessibility tab → Contrast
```

---

## 8. Testing Accessibility

### Automated Tools

```bash
# axe-core for React Testing Library
pnpm add -D @axe-core/react

# In development:
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

if (process.env.NODE_ENV !== 'production') {
  const axe = await import('@axe-core/react')
  axe.default(React, ReactDOM, 1000)
}

# Playwright with axe:
pnpm add -D @axe-core/playwright

test('no accessibility violations', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})
```

### Manual Tests

1. **Keyboard only**: Navigate your entire app using only Tab, Shift+Tab, Enter, Space, Arrow keys
2. **Screen reader**: Test with VoiceOver (Mac), NVDA (Windows free), or TalkBack (Android)
3. **Zoom**: Zoom browser to 200% — layout should not break
4. **DevTools**: Accessibility panel → check labels, roles, tree structure

---

## Summary

| Area | Rule |
|------|------|
| Semantic HTML | Use `<button>`, `<a>`, `<label>`, landmarks |
| ARIA | Only when HTML isn't enough; always test |
| Forms | Label every input; show errors with `aria-describedby` |
| Modals | role="dialog", focus trap, restore focus on close |
| Keyboard | All interactive elements keyboard-reachable |
| Focus | Never remove; always visible |
| Color | 4.5:1 for text, 3:1 for UI components |
| Testing | axe-core + keyboard nav + screen reader |

---

## Next Lesson

`003 - PWA.md` — Progressive Web Apps: installable, offline-capable web experiences
