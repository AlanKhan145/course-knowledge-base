# 003 - CSS Grid

## Section
Phase 3 — CSS

## Learning Objectives

- Build two-dimensional layouts with CSS Grid
- Define columns and rows with `grid-template-columns` and `grid-template-rows`
- Place items precisely with line numbers or named areas
- Use `auto-fill` and `minmax` for responsive grids without media queries

---

## 1. Grid vs Flexbox

| | Flexbox | Grid |
|---|---|---|
| Dimensions | 1D (row OR column) | 2D (rows AND columns) |
| Best for | Navigation bars, card rows, centering | Page layouts, dashboards, image galleries |
| Item placement | Items flow naturally | Items can be placed precisely |

Use **Flexbox** for the content inside a component.
Use **Grid** for the overall page or component layout.

---

## 2. Defining a Grid

```css
.container {
  display: grid;

  /* 3 explicit columns */
  grid-template-columns: 200px 1fr 200px;

  /* 2 explicit rows */
  grid-template-rows: 80px auto 60px;

  /* Gap between cells */
  gap: 24px;
  column-gap: 24px;
  row-gap: 16px;
}
```

### The `fr` Unit

`fr` stands for "fraction of available space":

```css
/* 3 equal columns */
grid-template-columns: 1fr 1fr 1fr;

/* Same, shorter */
grid-template-columns: repeat(3, 1fr);

/* Sidebar + content: 260px sidebar, rest for content */
grid-template-columns: 260px 1fr;

/* Mixed: fixed, flexible, flexible */
grid-template-columns: 200px 2fr 1fr;
/* → sidebar: 200px, main: 2/3 of remaining, aside: 1/3 of remaining */
```

---

## 3. Placing Items

### By Line Numbers

Grid lines are numbered from 1. Negative numbers count from the end.

```css
.item {
  grid-column: 1 / 3;    /* span from line 1 to line 3 (2 columns wide) */
  grid-row: 1 / 2;       /* span from line 1 to line 2 (1 row tall) */

  /* Shorthand */
  grid-area: 1 / 1 / 2 / 3;  /* row-start / col-start / row-end / col-end */

  /* Span keyword */
  grid-column: span 2;   /* start where natural, span 2 columns */
  grid-column: 1 / -1;   /* span full width (from line 1 to last line) */
}
```

### By Named Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content aside"
    "footer footer footer";
  grid-template-columns: 240px 1fr 200px;
  grid-template-rows: 64px 1fr 60px;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

Use `.` for an empty cell:

```css
grid-template-areas:
  "header header"
  "nav    content"
  ".      footer";
```

---

## 4. Responsive Grids Without Media Queries

### `auto-fill` + `minmax`

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
```

This creates as many columns as fit, each at least `280px` wide. On mobile it becomes 1 column, on a wide screen it becomes 4 or 5 — **without any media queries**.

### `auto-fill` vs `auto-fit`

```css
/* auto-fill — empty cells take up space */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit — empty cells collapse to 0 width (items stretch) */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

---

## 5. Alignment

### Align the Entire Grid Content

```css
.container {
  justify-content: start | end | center | stretch | space-between | space-around;
  align-content:   start | end | center | stretch | space-between | space-around;
}
```

### Align All Items Within Their Cells

```css
.container {
  justify-items: start | end | center | stretch;  /* horizontal */
  align-items:   start | end | center | stretch;  /* vertical */
}
```

### Override Alignment for One Item

```css
.item {
  justify-self: start | end | center | stretch;
  align-self:   start | end | center | stretch;
}
```

---

## 6. Common Grid Patterns

### Dashboard Layout

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}
```

### Image Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 8px;
}

/* Feature image spanning 2x2 */
.gallery-item.featured {
  grid-column: span 2;
  grid-row: span 2;
}
```

### Masonry-Like Layout

```css
.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20px;
  gap: 8px;
}

.masonry-item {
  /* Set row span based on content height using JS:
     grid-row-end: span X */
}
```

---

## 7. Implicit vs Explicit Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 explicit columns */
  /* Rows are NOT defined — they're implicit */
  grid-auto-rows: 150px;  /* height for implicitly created rows */
  grid-auto-flow: row;    /* default: fill rows first */
  grid-auto-flow: column; /* fill columns first */
  grid-auto-flow: dense;  /* fill gaps with later items */
}
```

---

## Practice Exercises

### Exercise 1: Page Layout with Named Areas

Build a full-page layout using `grid-template-areas`:
- Header spanning full width
- Sidebar (240px) + main content area
- Footer spanning full width
- Make it collapse to single column on mobile

### Exercise 2: Responsive Card Grid

Build a project card grid:
- Each card: 280px minimum width
- No media queries (use `auto-fill` + `minmax`)
- Consistent card height using `align-items: stretch`
- First card spans 2 columns on desktop

### Exercise 3: Dashboard

Build a dashboard grid with:
- Top stats row: 4 equal-width stat cards
- Middle row: large chart (2/3 width) + activity feed (1/3 width)
- Bottom row: 3 equal cards

---

## Summary

| Property | Applies To | Purpose |
|----------|-----------|---------|
| `display: grid` | Container | Enable grid |
| `grid-template-columns` | Container | Define column sizes |
| `grid-template-rows` | Container | Define row sizes |
| `grid-template-areas` | Container | Named layout regions |
| `gap` | Container | Space between cells |
| `repeat(n, size)` | Container | Repeat column/row definition |
| `minmax(min, max)` | Container | Column/row size range |
| `auto-fill` / `auto-fit` | Container | Responsive column count |
| `grid-column: span N` | Item | Span multiple columns |
| `grid-area: name` | Item | Place in named area |
| `justify-self` / `align-self` | Item | Align within cell |

---

## Next Lesson

`004 - Responsive Design.md` — mobile-first, media queries, fluid typography, viewport units
