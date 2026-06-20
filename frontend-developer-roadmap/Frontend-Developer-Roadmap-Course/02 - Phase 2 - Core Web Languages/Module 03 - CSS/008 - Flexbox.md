# 002 - Flexbox

## Section
Phase 3 — CSS

## Learning Objectives

- Control one-dimensional layouts with Flexbox
- Align and distribute items along main and cross axes
- Build common UI patterns: navbars, card rows, centered content
- Know when to use Flexbox vs Grid

---

## 1. What Is Flexbox?

Flexbox is a **one-dimensional** layout system — it lays items out in a single row or column.

Use Flexbox for:
- Navigation bars
- Card rows
- Centering content vertically and horizontally
- Distributing space between items

Use **Grid** (next lesson) for **two-dimensional** layouts — rows AND columns at the same time.

---

## 2. Flex Container Properties

Apply these to the **parent** element:

```css
.container {
  display: flex;

  /* Direction of the main axis */
  flex-direction: row;           /* → default: left to right */
  flex-direction: row-reverse;   /* ← right to left */
  flex-direction: column;        /* ↓ top to bottom */
  flex-direction: column-reverse;/* ↑ bottom to top */

  /* Wrap to next line when out of space */
  flex-wrap: nowrap;    /* default — items shrink to fit */
  flex-wrap: wrap;      /* items wrap to next row/column */

  /* Shorthand for flex-direction + flex-wrap */
  flex-flow: row wrap;
}
```

### Alignment on the Main Axis (`justify-content`)

```css
.container {
  justify-content: flex-start;    /* [A B C      ] */
  justify-content: flex-end;      /* [      A B C ] */
  justify-content: center;        /* [   A B C    ] */
  justify-content: space-between; /* [A    B    C ] */
  justify-content: space-around;  /* [ A   B   C  ] */
  justify-content: space-evenly;  /* [  A  B  C   ] */
}
```

### Alignment on the Cross Axis (`align-items`)

```css
.container {
  align-items: stretch;     /* default — items fill the container height */
  align-items: flex-start;  /* items align to the top */
  align-items: flex-end;    /* items align to the bottom */
  align-items: center;      /* items center vertically */
  align-items: baseline;    /* items align by their text baseline */
}
```

### Multi-Line Alignment (`align-content`)

Only applies when `flex-wrap: wrap` is set and there are multiple rows:

```css
.container {
  align-content: flex-start;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
}
```

### Gap

```css
.container {
  gap: 16px;          /* same gap between rows and columns */
  gap: 16px 24px;     /* row-gap column-gap */
  row-gap: 16px;
  column-gap: 24px;
}
```

---

## 3. Flex Item Properties

Apply these to the **children**:

```css
.item {
  /* How much space this item grows relative to siblings */
  flex-grow: 0;    /* default — item does not grow */
  flex-grow: 1;    /* item takes up available space */

  /* How much the item shrinks when there's not enough space */
  flex-shrink: 1;  /* default — item can shrink */
  flex-shrink: 0;  /* item will not shrink */

  /* Initial size before grow/shrink is applied */
  flex-basis: auto;   /* default — use item's content size */
  flex-basis: 200px;  /* start at 200px */
  flex-basis: 0;      /* ignore content size entirely */

  /* Shorthand: grow shrink basis */
  flex: 1;          /* flex: 1 1 0% — equal sharing of space */
  flex: 0 0 200px;  /* fixed 200px, no grow, no shrink */
  flex: auto;       /* flex: 1 1 auto */

  /* Override align-items for this one item */
  align-self: center;

  /* Control display order without changing HTML */
  order: 2;         /* default is 0; lower numbers appear first */
}
```

---

## 4. Common Patterns

### Perfect Centering

```css
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### Navbar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
}
```

### Card Row (wrap to next line)

```css
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 1 1 280px;   /* grow, shrink, minimum width 280px */
  max-width: 400px;
}
```

### Sticky Footer

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;   /* main grows to fill available space, pushing footer down */
}
```

### Equal-Width Columns

```css
.columns {
  display: flex;
  gap: 24px;
}

.column {
  flex: 1;   /* all columns share space equally */
}
```

### Sidebar + Content

```css
.layout {
  display: flex;
  gap: 24px;
}

.sidebar {
  flex: 0 0 260px;   /* fixed 260px, never grow or shrink */
}

.content {
  flex: 1;           /* takes remaining space */
}
```

---

## 5. Responsive Flexbox

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 1 1 100%;    /* mobile: full width */
}

@media (min-width: 640px) {
  .card {
    flex: 1 1 calc(50% - 12px);   /* tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .card {
    flex: 1 1 calc(33.333% - 16px);   /* desktop: 3 columns */
  }
}
```

---

## Practice Exercises

### Exercise 1: Navigation Bar

Build a responsive navbar with:
- Logo on the left
- Navigation links in the center
- CTA button on the right
- On mobile: stack the links vertically

### Exercise 2: Card Layout

Build a card grid that:
- Shows 1 card per row on mobile
- Shows 2 cards per row on tablet
- Shows 3 cards per row on desktop
- Has equal height cards regardless of content length

### Exercise 3: Holy Grail Layout

Build the classic layout using only Flexbox:
```
┌─────────────────────────────┐
│           Header            │
├────────┬────────────┬────────┤
│        │            │        │
│  Nav   │   Content  │ Aside  │
│        │            │        │
├────────┴────────────┴────────┤
│           Footer             │
└──────────────────────────────┘
```

---

## Summary

| Property | Applies To | Purpose |
|----------|-----------|---------|
| `display: flex` | Container | Enable flexbox |
| `flex-direction` | Container | Row or column axis |
| `flex-wrap` | Container | Allow multi-line |
| `justify-content` | Container | Main axis alignment |
| `align-items` | Container | Cross axis alignment |
| `gap` | Container | Space between items |
| `flex: 1` | Item | Grow to fill space |
| `flex: 0 0 Xpx` | Item | Fixed size, no grow/shrink |
| `align-self` | Item | Override cross-axis per item |
| `order` | Item | Change display order |

---

## Next Lesson

`003 - CSS Grid.md` — two-dimensional layouts, template areas, auto-placement
