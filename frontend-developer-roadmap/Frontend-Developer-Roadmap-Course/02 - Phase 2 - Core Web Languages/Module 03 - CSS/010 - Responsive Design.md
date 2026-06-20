# 004 - Responsive Design

## Section
Phase 3 — CSS

## Learning Objectives

- Build layouts that work on any screen size
- Write mobile-first CSS
- Use media queries correctly
- Apply fluid typography and viewport units
- Understand clamp(), min(), and max()

---

## 1. Mobile-First Approach

Write base styles for the smallest screen, then add complexity as the screen grows.

```css
/* Mobile first — base styles for small screens */
.card {
  display: block;
  padding: 16px;
}

/* Tablet: 640px and above */
@media (min-width: 640px) {
  .card {
    display: flex;
    gap: 16px;
  }
}

/* Desktop: 1024px and above */
@media (min-width: 1024px) {
  .card {
    padding: 24px;
    max-width: 800px;
  }
}
```

**Why mobile-first?**
- Most traffic is mobile
- It's easier to add features as space grows than to strip them away
- Forces you to prioritize core content

---

## 2. Media Queries

### Syntax

```css
@media (min-width: 768px) { ... }
@media (max-width: 767px) { ... }   /* avoid in mobile-first — use max only to override */
@media (min-width: 768px) and (max-width: 1023px) { ... }  /* tablet only */
@media (prefers-color-scheme: dark) { ... }
@media (prefers-reduced-motion: reduce) { ... }
@media print { ... }
@media (orientation: landscape) { ... }
```

### Common Breakpoints

```css
/* Small phones: 320px (default — no media query needed) */
/* Phones: 480px+ */
@media (min-width: 480px) { ... }
/* Tablets: 768px+ */
@media (min-width: 768px) { ... }
/* Small desktops: 1024px+ */
@media (min-width: 1024px) { ... }
/* Large desktops: 1280px+ */
@media (min-width: 1280px) { ... }
/* Extra large: 1536px+ */
@media (min-width: 1536px) { ... }
```

---

## 3. Viewport Units

| Unit | Meaning |
|------|---------|
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `vmin` | 1% of the smaller dimension |
| `vmax` | 1% of the larger dimension |
| `svh` | 1% of small viewport height (excludes mobile browser chrome) |
| `dvh` | 1% of dynamic viewport height (updates as browser chrome shows/hides) |

```css
/* Full-height hero section */
.hero {
  min-height: 100vh;        /* at least full viewport height */
  min-height: 100svh;       /* better on mobile — avoids address bar overlap */
}

/* Full-width section */
.full-width {
  width: 100vw;
  margin-left: calc(-50vw + 50%);   /* break out of a container */
}
```

---

## 4. Fluid Typography with `clamp()`

`clamp(min, preferred, max)` sets a value that scales fluidly between two bounds.

```css
/* Font size: 1rem on mobile, scales up, max 1.5rem on wide screens */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

p {
  font-size: clamp(0.875rem, 2vw, 1.125rem);
}

/* Fluid container padding */
.container {
  padding-inline: clamp(16px, 5vw, 80px);
}
```

### `min()` and `max()`

```css
/* Never exceed 1200px, but shrink on smaller screens */
.container {
  width: min(100%, 1200px);
  margin-inline: auto;
}

/* At least 100px, but as wide as 50% */
.item {
  width: max(100px, 50%);
}
```

---

## 5. Responsive Images

```css
/* Images never exceed their container */
img {
  max-width: 100%;
  height: auto;
}

/* Object-fit for images in fixed containers */
.thumbnail {
  width: 300px;
  height: 200px;
  object-fit: cover;     /* crop to fill */
  object-position: center;
}
```

### The `<picture>` Element for Art Direction

```html
<picture>
  <!-- Use different image on large screens -->
  <source
    srcset="hero-desktop.jpg"
    media="(min-width: 1024px)"
  >
  <!-- Default for mobile -->
  <img src="hero-mobile.jpg" alt="Hero image">
</picture>
```

### Srcset for Resolution Switching

```html
<img
  src="image-400.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(min-width: 1024px) 800px, (min-width: 640px) 600px, 100vw"
  alt="Product photo"
>
```

---

## 6. Responsive Navigation Patterns

### Hamburger Menu

```html
<header>
  <a href="/" class="logo">Brand</a>
  <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">
    <span class="sr-only">Toggle menu</span>
    <span aria-hidden="true">&#9776;</span>
  </button>
  <nav id="main-nav" class="nav" hidden>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

```css
/* Mobile: nav is hidden, show toggle button */
.nav-toggle { display: block; }
.nav[hidden] { display: none; }
.nav.is-open { display: block; }

/* Desktop: nav is always visible, hide toggle */
@media (min-width: 768px) {
  .nav-toggle { display: none; }
  .nav[hidden] { display: block; }  /* override hidden attribute */

  .nav ul {
    display: flex;
    gap: 24px;
  }
}
```

---

## 7. CSS Custom Properties for Responsive Design

```css
:root {
  /* Fluid spacing scale */
  --space-xs: clamp(4px, 1vw, 8px);
  --space-sm: clamp(8px, 2vw, 16px);
  --space-md: clamp(16px, 3vw, 24px);
  --space-lg: clamp(24px, 5vw, 48px);
  --space-xl: clamp(48px, 8vw, 96px);

  /* Fluid type scale */
  --text-sm: clamp(0.75rem, 2vw, 0.875rem);
  --text-base: clamp(0.875rem, 2.5vw, 1rem);
  --text-lg: clamp(1rem, 3vw, 1.25rem);
  --text-xl: clamp(1.25rem, 4vw, 1.75rem);
  --text-2xl: clamp(1.5rem, 5vw, 2.5rem);

  /* Layout */
  --container-max: 1200px;
  --container-padding: clamp(16px, 5vw, 80px);
}
```

---

## Practice Exercises

### Exercise 1: Responsive Portfolio Grid

Update your portfolio project cards:
- Mobile: 1 column
- Tablet (≥640px): 2 columns
- Desktop (≥1024px): 3 columns
- Use `clamp()` for the section padding

### Exercise 2: Fluid Typography

Create a typography demo page with:
- `<h1>` through `<h4>` using `clamp()` for font sizes
- Body text that scales between 14px and 18px
- Line height of 1.5–1.8 on all text

### Exercise 3: Responsive Table

Make a data table responsive:
- Desktop: normal table layout
- Mobile: each row becomes a card, using `data-label` attributes and `::before` pseudo-elements for column headers

---

## Summary

| Technique | Purpose |
|-----------|---------|
| Mobile-first | Write smallest styles first, enhance with `min-width` queries |
| `@media (min-width)` | Apply styles at specific breakpoints |
| `clamp(min, val, max)` | Fluid values that scale with viewport |
| `min()` / `max()` | Choose smaller or larger of two values |
| `vw`, `vh`, `svh` | Viewport-relative units |
| `object-fit: cover` | Crop image to fill container |
| `srcset` + `sizes` | Serve different image sizes per screen |

---

## Next Lesson

`005 - CSS Variables and Animation.md` — custom properties, transitions, keyframe animations
