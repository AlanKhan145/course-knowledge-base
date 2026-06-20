# 001 - Design Systems

## Section
Phase 12 — Advanced Frontend

## Learning Objectives

- Understand what a design system is and why it matters
- Build reusable, composable UI components with clear APIs
- Use design tokens for consistent color, spacing, and typography
- Write component variants with CVA (Class Variance Authority)
- Know when to use a component library vs. build your own

---

## 1. What Is a Design System?

A design system is a collection of:
- **Design tokens** — atomic values: colors, spacing, radii, font sizes
- **Components** — reusable UI building blocks with clear props and variants
- **Patterns** — documented rules for how components combine
- **Guidelines** — when and how to use each component

**Benefits:**
- Consistency across all pages (same button, same card everywhere)
- Faster development (never rebuild a button from scratch again)
- Easier onboarding (new developer uses documented components)
- Better accessibility (one accessible component, used everywhere)

---

## 2. Design Tokens

Tokens are the smallest named design decisions. Define them once; use everywhere.

### With CSS Custom Properties + Tailwind

```css
/* src/styles/tokens.css */
:root {
  /* Color palette */
  --color-brand-50:  #eff6ff;
  --color-brand-500: #3b82f6;
  --color-brand-900: #1e3a8a;

  /* Semantic colors */
  --color-bg-primary:   var(--color-brand-50);
  --color-text-primary: #111827;
  --color-text-muted:   #6b7280;
  --color-border:       #e5e7eb;

  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;

  /* Typography */
  --font-sans:  'Inter', system-ui, sans-serif;
  --font-mono:  'JetBrains Mono', monospace;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.25rem;

  /* Radii */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;
  --radius-full: 9999px;
}

.dark {
  --color-bg-primary:   #0f172a;
  --color-text-primary: #f8fafc;
  --color-text-muted:   #94a3b8;
  --color-border:       #334155;
}
```

### Extending Tailwind with Tokens

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  'var(--color-brand-50)',
          500: 'var(--color-brand-500)',
          900: 'var(--color-brand-900)',
        },
        surface: {
          primary: 'var(--color-bg-primary)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
```

---

## 3. Component Variants with CVA

[CVA (Class Variance Authority)](https://cva.style) makes component variants type-safe and clean.

```bash
pnpm add class-variance-authority clsx
```

### Button Component

```tsx
// src/components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  // Base classes (always applied)
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:   'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100',
        outline:   'border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900',
        ghost:     'hover:bg-gray-100 dark:hover:bg-gray-800',
        danger:    'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm:   'h-8  px-3 text-sm',
        md:   'h-10 px-4 text-sm',
        lg:   'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  )
)
Button.displayName = 'Button'

// Usage:
<Button variant="primary" size="md">Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="danger" loading>Deleting...</Button>
<Button variant="ghost" size="icon" aria-label="Settings">⚙</Button>
```

---

## 4. Card Component

```tsx
// src/components/ui/Card.tsx
import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx('rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 shadow-sm', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('flex flex-col space-y-1.5 p-6', className)} {...props} />
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx('font-semibold leading-none tracking-tight', className)} {...props} />
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx('text-sm text-gray-500 dark:text-gray-400', className)} {...props} />
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('p-6 pt-0', className)} {...props} />
}

function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('flex items-center p-6 pt-0', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

// Usage:
<Card>
  <CardHeader>
    <CardTitle>Monthly Revenue</CardTitle>
    <CardDescription>Compared to last month</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-bold">$12,400</p>
  </CardContent>
  <CardFooter>
    <span className="text-sm text-green-600">+8% from last month</span>
  </CardFooter>
</Card>
```

---

## 5. Component Libraries to Know

You don't always need to build from scratch. Know the tradeoffs:

| Library | Style | Customizable | Best for |
|---------|-------|--------------|---------|
| **shadcn/ui** | Tailwind + Radix | Full — code lives in your project | Custom design + good DX |
| **Radix UI** | Unstyled | Full | Accessible primitives, bring your own CSS |
| **Headless UI** | Unstyled | Full | Tailwind users |
| **Ant Design** | Opinionated | Limited | Enterprise dashboards |
| **Material UI** | Material Design | Limited | Google-style apps |
| **Chakra UI** | Flexible | Good | Rapid prototyping |

### shadcn/ui (Recommended for this course)

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card input dialog
```

Components are added as source files to `src/components/ui/`. You own the code.

---

## 6. Storybook (Component Documentation)

```bash
pnpm dlx storybook@latest init
pnpm storybook  # starts on http://localhost:6006
```

```tsx
// src/components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { variant: 'primary', children: 'Click me' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Cancel' } }
export const Loading: Story = { args: { loading: true, children: 'Saving...' } }
```

---

## Summary

| Concept | Tool |
|---------|------|
| Design tokens | CSS custom properties in `:root` |
| Component variants | CVA + Tailwind |
| Class merging | clsx |
| Accessible primitives | Radix UI, Headless UI |
| Pre-built components | shadcn/ui |
| Documentation | Storybook |

---

## Next Lesson

`002 - Accessibility.md` — build UIs that work for everyone
