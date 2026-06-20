# 005 - Tailwind CSS

## Section
Phase 6 — React and Tailwind CSS

## Learning Objectives

- Write responsive UIs with Tailwind utility classes
- Apply hover, focus, and other state variants
- Enable dark mode
- Build reusable component patterns
- Understand when to extract utility classes

---

## 1. Setup with Vite

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

```css
/* src/index.css */
@import "tailwindcss";
```

---

## 2. Utility-First Approach

Instead of writing custom CSS, compose UI from utility classes:

```tsx
// Traditional CSS approach
// .card { background: white; border-radius: 8px; padding: 16px; ... }
<div class="card">

// Tailwind utility-first
<div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
```

---

## 3. Core Utility Categories

### Layout

```tsx
<div className="flex items-center justify-between gap-4">
<div className="grid grid-cols-3 gap-6">
<div className="container mx-auto px-4">
<div className="w-full max-w-2xl">
<div className="min-h-screen">
```

### Spacing

```tsx
// p = padding, m = margin
// t=top, r=right, b=bottom, l=left, x=horizontal, y=vertical
<div className="p-4 px-6 py-3 mt-8 mb-4 mx-auto">

// Space between children
<ul className="space-y-4">
<div className="flex gap-6">
```

### Typography

```tsx
<h1 className="text-3xl font-bold tracking-tight text-gray-900">
<p className="text-base text-gray-600 leading-relaxed">
<span className="text-sm font-medium text-blue-600 uppercase">
<code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">
```

### Colors

```tsx
// text-{color}-{shade}
<p className="text-gray-900 text-blue-600 text-red-500">
// bg-{color}-{shade}
<div className="bg-white bg-blue-50 bg-gray-100">
// border-{color}-{shade}
<div className="border border-gray-200 border-blue-500">
```

### Borders and Radius

```tsx
<div className="border border-gray-200 rounded-lg">
<div className="border-2 border-blue-500 rounded-full">
<div className="divide-y divide-gray-100">  // dividers between children
```

### Shadows

```tsx
<div className="shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl">
```

---

## 4. Responsive Variants

Prefix with breakpoint: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

```tsx
// Mobile: 1 column, desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Mobile: full width, desktop: 1/3 width sidebar
<aside className="w-full lg:w-64 shrink-0">

// Mobile: block, desktop: flex
<div className="block md:flex md:items-center md:gap-4">

// Hide/show at breakpoints
<nav className="hidden md:flex">       {/* hidden on mobile, flex on md+ */}
<button className="md:hidden">         {/* visible only on mobile */}
```

Breakpoints:
| Prefix | Min Width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## 5. State Variants

```tsx
// Hover
<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">

// Focus (keyboard navigation — always include!)
<input className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">

// Disabled
<button className="bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" disabled>

// Group hover (hover parent to style child)
<div className="group">
  <img className="group-hover:scale-105 transition-transform" />
  <p className="opacity-0 group-hover:opacity-100 transition-opacity">Overlay text</p>
</div>

// Peer (sibling state)
<input type="checkbox" className="peer" id="toggle">
<label htmlFor="toggle" className="peer-checked:text-blue-600">
```

---

## 6. Dark Mode

```css
/* index.css */
@import "tailwindcss";
```

```tsx
// Tailwind v4 uses the OS preference by default
// Or configure class-based dark mode in your CSS:
// @custom-variant dark (&:where(.dark, .dark *));

// Usage — prefix with dark:
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<nav className="border-b border-gray-200 dark:border-gray-700">
<p className="text-gray-600 dark:text-gray-400">
```

---

## 7. Component Patterns

### Reusable Button Component

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const variantClasses = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400',
  danger:    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  ghost:     'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-lg
        transition-colors duration-150
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner className="w-4 h-4" />}
      {children}
    </button>
  )
}
```

### Card Component

```tsx
function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 ${className}`}>
      {children}
    </div>
  )
}
```

### Input Component

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

function Input({ label, error, id, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        className={`
          w-full px-3 py-2 rounded-lg border text-sm
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-gray-100
          placeholder:text-gray-400
          transition-colors
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          ${error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-600'
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
```

---

## 8. Using `clsx` for Conditional Classes

```bash
pnpm add clsx
```

```tsx
import clsx from 'clsx'

// Instead of messy template literals:
<div className={`btn ${isActive ? 'btn-active' : ''} ${isDisabled ? 'opacity-50' : ''}`}>

// Use clsx:
<div className={clsx(
  'btn',
  isActive && 'btn-active',
  isDisabled && 'opacity-50',
  variant === 'primary' && 'bg-blue-600',
  variant === 'danger' && 'bg-red-600',
)}>
```

---

## Practice: Build a Dashboard UI

Using React + Tailwind, build:
- Sidebar with nav links (active state styling)
- Top header with user avatar and notification badge
- Stats cards: 4 cards with icon, number, and label
- Data table with alternating row colors and hover highlight
- Modal with backdrop blur

All responsive: sidebar collapses on mobile.

---

## Summary

| Category | Example Classes |
|----------|----------------|
| Layout | `flex grid items-center justify-between gap-4` |
| Sizing | `w-full h-screen max-w-2xl min-h-0` |
| Spacing | `p-4 px-6 py-3 m-auto space-y-4` |
| Typography | `text-xl font-bold text-gray-900 leading-relaxed` |
| Colors | `bg-blue-600 text-white border-gray-200` |
| Responsive | `md:flex lg:grid-cols-3` |
| State | `hover:bg-blue-700 focus:ring-2 disabled:opacity-50` |
| Dark mode | `dark:bg-gray-900 dark:text-gray-100` |

---

## Next Lesson

`006 - Project - React Dashboard.md` — build a full dashboard with all Phase 6 skills
