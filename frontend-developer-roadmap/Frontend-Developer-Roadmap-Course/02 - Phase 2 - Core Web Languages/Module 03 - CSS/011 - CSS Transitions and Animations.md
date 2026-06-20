# 005 - CSS Variables and Animation

## Section
Phase 3 — CSS

## Learning Objectives

- Manage design tokens with CSS custom properties
- Build reusable themes with variables
- Add smooth transitions and hover effects
- Create keyframe animations
- Respect user preferences with `prefers-reduced-motion`

---

## 1. CSS Custom Properties (Variables)

Custom properties store reusable values and enable dynamic theming.

### Defining and Using Variables

```css
:root {
  /* Define in :root for global scope */
  --color-primary: #3b82f6;
  --color-primary-dark: #1d4ed8;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-bg: #ffffff;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;

  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.1);

  --transition: 200ms ease;
}

/* Use variables */
.btn {
  background: var(--color-primary);
  border-radius: var(--radius-md);
  color: white;
  transition: background var(--transition);
}

.btn:hover {
  background: var(--color-primary-dark);
}
```

### Fallback Values

```css
.text {
  color: var(--color-text, #111827);  /* use #111827 if --color-text is not defined */
}
```

### Local Scope

```css
.card {
  --card-padding: 16px;
  padding: var(--card-padding);
}

.card.large {
  --card-padding: 32px;  /* overrides for this variant */
}
```

---

## 2. Dark Mode with CSS Variables

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111827;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;
}

/* System dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f172a;
    --color-text: #f1f5f9;
    --color-surface: #1e293b;
    --color-border: #334155;
  }
}

/* Toggle with a class (for user-controlled themes) */
html.dark {
  --color-bg: #0f172a;
  --color-text: #f1f5f9;
  --color-surface: #1e293b;
  --color-border: #334155;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

---

## 3. Transitions

Transitions animate a property from one value to another on state change.

```css
.btn {
  background: var(--color-primary);
  transform: translateY(0);
  box-shadow: var(--shadow-sm);

  /* transition: property duration easing delay */
  transition:
    background 200ms ease,
    transform 150ms ease,
    box-shadow 200ms ease;
}

.btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

### Common Easing Functions

```css
transition-timing-function: ease;           /* slow start, fast middle, slow end */
transition-timing-function: ease-in;        /* slow start */
transition-timing-function: ease-out;       /* slow end */
transition-timing-function: ease-in-out;    /* slow start and end */
transition-timing-function: linear;         /* constant speed */
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);  /* spring bounce */
```

### Transition All (Use Carefully)

```css
/* Cheap way, but can cause unintended transitions */
transition: all 200ms ease;

/* Better: be explicit about what transitions */
transition: color 200ms ease, background 200ms ease;
```

---

## 4. Keyframe Animations

For continuous or multi-step animations:

```css
/* Define the animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Use the animation */
.card {
  animation: fadeIn 300ms ease-out;
  animation-fill-mode: both;  /* apply end state when done */
}
```

### Animation Properties

```css
.element {
  animation-name: fadeIn;
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-delay: 100ms;
  animation-iteration-count: 1;           /* or: infinite */
  animation-direction: normal;            /* or: reverse, alternate, alternate-reverse */
  animation-fill-mode: both;             /* or: none, forwards, backwards */
  animation-play-state: running;         /* or: paused */

  /* Shorthand */
  animation: fadeIn 300ms ease-out 100ms both;
}
```

### Common Animation Patterns

```css
/* Spinning loader */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}

/* Pulsing skeleton loader */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.skeleton {
  background: var(--color-surface);
  animation: pulse 2s ease-in-out infinite;
}

/* Slide in from left */
@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}

/* Bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); animation-timing-function: ease-in; }
  50%       { transform: translateY(-20px); animation-timing-function: ease-out; }
}

/* Toast notification */
@keyframes slideInRight {
  from { transform: translateX(calc(100% + 16px)); }
  to   { transform: translateX(0); }
}
```

---

## 5. Prefer Reduced Motion

Always respect users who have motion sensitivity:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Or conditionally enable animations:

```css
/* Default: no animation */
.card {
  opacity: 1;
}

/* Only animate if the user hasn't requested reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .card {
    opacity: 0;
    animation: fadeIn 300ms ease-out forwards;
  }
}
```

---

## 6. Transform

`transform` is cheap to animate — it doesn't trigger layout or paint, only compositing.

```css
.element {
  /* 2D transforms */
  transform: translateX(20px);
  transform: translateY(-10px);
  transform: translate(20px, -10px);
  transform: scale(1.05);
  transform: scaleX(1.2);
  transform: rotate(45deg);
  transform: skewX(10deg);

  /* Chain multiple transforms */
  transform: translateY(-4px) scale(1.02);

  /* 3D transforms */
  transform: perspective(1000px) rotateY(10deg);
}
```

---

## Practice Exercises

### Exercise 1: Design Token System

Create a `tokens.css` file with:
- 5 primary color shades (50, 100, 500, 700, 900)
- Typography scale (xs, sm, base, lg, xl, 2xl, 3xl)
- Spacing scale (1–16, step of 4px)
- Border radii (none, sm, md, lg, full)
- Box shadows (sm, md, lg)

Use these variables in your portfolio project.

### Exercise 2: Button Component

Build a button component with:
- 3 variants: primary, secondary, outline
- 3 sizes: sm, md, lg
- Hover, focus, active, and disabled states
- Smooth transition on all state changes

### Exercise 3: Card Hover Effect

Build a project card that:
- Has a subtle box-shadow at rest
- On hover: lifts up (`translateY(-4px)`), shadow deepens
- Image inside scales slightly (`scale(1.05)`) with `overflow: hidden` on container
- All transitions: 200ms ease

### Exercise 4: Loading Skeleton

Build a loading skeleton for a blog post card:
- Gray placeholder blocks for image, title (2 lines), and text (3 lines)
- Pulse animation
- Respects `prefers-reduced-motion`

---

## Summary

| Feature | Key Syntax |
|---------|-----------|
| Custom property | `--name: value;` → `var(--name)` |
| Dark mode | `:root { } @media (prefers-color-scheme: dark) { :root { } }` |
| Transition | `transition: property duration easing;` |
| Keyframe | `@keyframes name { from {} to {} }` → `animation: name duration easing;` |
| Reduced motion | `@media (prefers-reduced-motion: reduce) { }` |
| Cheap to animate | `transform` and `opacity` only (no layout/paint) |

---

## Next Phase

Phase 4 — JavaScript Core: variables, functions, DOM, async, modern JS patterns
