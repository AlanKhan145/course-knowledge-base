# 003 - How Browsers Work

## Section
Phase 1 — Web Foundation

## Learning Objectives

- Understand the browser's rendering pipeline
- Know what the DOM and CSSOM are
- Understand when JavaScript blocks rendering
- Know what reflow and repaint are and why they matter

---

## 1. The Rendering Pipeline

When a browser receives an HTML file, it performs these steps:

```
1. Parse HTML → build DOM tree
2. Parse CSS  → build CSSOM tree
3. Combine DOM + CSSOM → Render Tree
4. Layout  — calculate element positions and sizes
5. Paint   — fill in pixels (colors, text, images, borders)
6. Composite — layer the painted sections onto the screen
```

---

## 2. DOM — Document Object Model

The **DOM** is the browser's in-memory representation of the HTML document as a tree of nodes.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```

DOM tree:

```
Document
└── html
    ├── head
    │   └── title ("My Page")
    └── body
        ├── h1 ("Hello")
        └── p ("World")
```

JavaScript can read and modify the DOM:

```javascript
document.querySelector('h1').textContent = 'Hi there'
document.body.style.background = 'lightblue'
```

---

## 3. CSSOM — CSS Object Model

Similar to the DOM, the **CSSOM** is the browser's in-memory tree of all CSS rules.

```css
body { font-size: 16px; }
h1   { color: blue; font-weight: bold; }
p    { margin: 0; }
```

The browser parses this into a tree of computed styles, then combines it with the DOM to build the **Render Tree** — only visible elements with their final computed styles.

---

## 4. Layout, Paint, and Composite

### Layout (Reflow)

The browser calculates the exact size and position of every element in the render tree.

Triggered by changes to:
- `width`, `height`, `margin`, `padding`
- `font-size`
- Adding/removing elements

### Paint

The browser fills in the pixels: background colors, text, borders, shadows.

Triggered by changes to:
- `color`, `background-color`
- `border-color`, `box-shadow`
- `visibility`

### Composite

The browser combines painted layers and displays them. Only `transform` and `opacity` changes trigger this step — making them the cheapest properties to animate.

---

## 5. How JavaScript Affects Rendering

JavaScript is **render-blocking** by default. When the browser encounters a `<script>` tag, it pauses HTML parsing, runs the script, then continues.

```html
<!-- Blocks HTML parsing — avoid for non-critical scripts -->
<script src="app.js"></script>

<!-- Does not block parsing — loads in parallel, executes when ready -->
<script src="app.js" defer></script>

<!-- Loads in parallel, executes immediately when downloaded -->
<script src="app.js" async></script>
```

**Rule of thumb**: Put scripts at the bottom of `<body>` or use `defer`.

---

## 6. Reflow vs Repaint

| | Reflow | Repaint |
|---|---|---|
| Triggers | Geometry changes (size, position) | Visual changes (color, background) |
| Cost | Expensive (recalculates layout) | Less expensive |
| Causes | Cascades to children and ancestors | Limited to affected elements |

### Avoid Forced Synchronous Reflow

Reading layout properties immediately after writing them forces the browser to flush all pending changes:

```javascript
// Bad — triggers reflow on every iteration
for (let i = 0; i < 100; i++) {
  el.style.width = el.offsetWidth + 10 + 'px'  // read → write → reflow
}

// Good — read once, then batch writes
const width = el.offsetWidth
for (let i = 0; i < 100; i++) {
  el.style.width = width + i * 10 + 'px'
}
```

---

## 7. The JavaScript Engine

Browsers have a built-in JavaScript engine (V8 in Chrome, SpiderMonkey in Firefox).

### Event Loop

JavaScript is **single-threaded** — it can only do one thing at a time.

```
Call Stack         Task Queue        Microtask Queue
─────────────      ─────────────     ────────────────
Main script   →    setTimeout CB     Promise callbacks
Function calls     setInterval CB    queueMicrotask CB
               ↑__________________________|
                   Event Loop picks next task
```

### Key Points

- Synchronous code runs on the call stack
- `setTimeout` and DOM events go into the task queue
- `Promise.then` and `async/await` callbacks go into the microtask queue
- Microtasks are processed before the next task

---

## Practice Exercises

### Exercise 1: Inspect the DOM

1. Open any website
2. Press `F12` → **Elements** tab
3. Expand the tree — find `<html>`, `<head>`, `<body>`
4. Double-click on a text node — edit it live
5. In the **Styles** panel, toggle a CSS property on and off

### Exercise 2: Find What Triggers Reflow

Open Chrome DevTools → **Performance** tab → click Record → interact with a page → stop recording.

Look for long **Layout** (yellow) bars. These are reflows.

### Exercise 3: Build a Minimal HTML File

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
  <style>
    h1 { color: steelblue; }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p id="output"></p>
  <script>
    document.getElementById('output').textContent = 'DOM is ready!'
  </script>
</body>
</html>
```

Open it in a browser, then:
- Inspect the DOM tree
- Change the `h1` text via DevTools Console: `document.querySelector('h1').textContent = 'Changed!'`
- Add a style: `document.querySelector('h1').style.color = 'red'`

---

## Summary

| Concept | Description |
|---------|-------------|
| DOM | Browser's tree representation of the HTML document |
| CSSOM | Browser's tree of computed CSS styles |
| Render Tree | DOM + CSSOM merged — only visible nodes |
| Layout | Calculates element positions and sizes |
| Paint | Fills pixels with colors, text, borders |
| Reflow | Expensive recalculation caused by geometry changes |
| Repaint | Less expensive redraw caused by visual changes |
| Event Loop | Mechanism that runs JS tasks one at a time |

---

## Next Lesson

Phase 2 starts: `02 - Phase 2 - HTML / 001 - HTML Document Structure.md`
