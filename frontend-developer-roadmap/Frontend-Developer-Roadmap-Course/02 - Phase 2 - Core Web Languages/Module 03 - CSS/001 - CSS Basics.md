# CSS Basics

## Section
Stage 2 — Core Frontend — Module 03: CSS

## Learning Objectives
- Understand what CSS is and how it controls visual presentation
- Apply CSS using all three methods: inline, internal, and external
- Write valid CSS syntax with selectors, properties, and values
- Use browser DevTools to inspect and debug CSS rules
- Recognize browser default styles and when to reset them

---

## 1. What Is CSS?

CSS (Cascading Style Sheets) is the language that controls how HTML elements look on screen. While HTML defines structure and meaning, CSS handles everything visual — colors, fonts, spacing, layout, animations.

Without CSS, every webpage looks like an unstyled document. With CSS, the same HTML can become anything from a minimal blog to a full dashboard UI.

A simple example — this paragraph is plain HTML:

```html
<p>Hello, world!</p>
```

With CSS applied:

```css
p {
  color: #1a73e8;
  font-size: 1.125rem;
  font-weight: 500;
}
```

The browser reads both files, matches elements to rules, and paints the result.

---

## 2. Three Ways to Add CSS

### Method 1: Inline Styles

Styles written directly on an element using the `style` attribute.

```html
<p style="color: red; font-size: 18px;">This text is red.</p>
```

**When to use:** Almost never in production. Useful for quick experiments or when dynamically setting styles via JavaScript.

**Drawbacks:**
- Mixes content and presentation
- Cannot be reused
- Very hard to override cleanly
- No media queries or pseudo-classes

---

### Method 2: Internal Style Tag

CSS written inside a `<style>` tag in the `<head>` of an HTML document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f5f5f5;
    }

    h1 {
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
```

**When to use:** Single-page demos, email HTML, or when you need styles scoped to exactly one page.

**Drawbacks:**
- Cannot be shared across multiple HTML files
- Page weight increases for multi-page sites
- Harder to maintain at scale

---

### Method 3: External Stylesheet (Recommended)

CSS lives in a separate `.css` file, linked from the HTML `<head>`.

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #111111;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}
```

**Why external is best:**
- One stylesheet applies to every page
- Browser caches the CSS file — faster repeat visits
- Clean separation of concerns
- Easy to maintain, refactor, or hand off to a teammate

---

## 3. CSS Syntax

Every CSS rule has two parts: a **selector** that targets elements, and a **declaration block** with one or more property-value pairs.

```
selector {
  property: value;
  property: value;
}
```

Real example:

```css
h2 {
  color: #222222;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
```

Key rules:
- Declarations end with a semicolon `;`
- The block is wrapped in curly braces `{ }`
- Property and value are separated by a colon `:`
- CSS is case-insensitive for property names, but values like URLs are not

---

## 4. CSS Comments

Comments are ignored by the browser and used to explain code.

```css
/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/

/* TODO: refactor these colors to CSS variables */
.button {
  background-color: #0070f3;
  color: white;
}
```

Use comments to:
- Document why a rule exists, not just what it does
- Mark sections in a large stylesheet
- Temporarily disable a rule while debugging

---

## 5. Browser Default Styles (User-Agent Stylesheet)

Every browser ships with a built-in stylesheet. Before you write a single line of CSS, elements already have styles applied — margins on `<body>`, bold on `<strong>`, bullets on `<ul>`, and so on.

These are called **user-agent styles**. They vary slightly between browsers, which is why a page can look slightly different in Chrome vs Firefox vs Safari with no custom CSS at all.

**Common defaults you will override:**

```css
/* Browsers add margin to body by default */
body {
  margin: 0;
  padding: 0;
}

/* Browsers style links blue with underline */
a {
  color: inherit;
  text-decoration: none;
}

/* Browsers add default padding/margin to lists */
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

A **CSS reset** or **normalize** stylesheet levels the playing field across browsers. A minimal approach:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

This ensures all elements use border-box sizing (explained in the Box Model lesson) and removes default spacing.

---

## 6. Inspecting CSS with Browser DevTools

DevTools is your most important CSS debugging tool. In Chrome or Firefox, press `F12` or right-click any element and choose **Inspect**.

**What to look for in the Styles panel:**

| Panel area | What it shows |
|---|---|
| Applied rules | All CSS rules targeting the selected element |
| Crossed-out rules | Declarations overridden by a higher-specificity rule |
| Computed tab | Final resolved values after cascade and inheritance |
| User-agent styles | Browser defaults at the bottom of the rules list |

**Workflow for debugging a CSS problem:**

1. Right-click the element that looks wrong, select Inspect
2. Check the Styles panel — find the rule you expect to apply
3. If it is crossed out, a more specific rule is winning — find that rule
4. Click on any value in DevTools to edit it live (changes are not saved)
5. Check the Computed tab for final values like exact pixel sizes

---

## Practice Exercises

### Exercise 1: Three Methods Side by Side

Create a single HTML file called `three-methods.html`. Display three paragraphs. Style the first with inline styles (red text), the second with an internal `<style>` tag (blue text, bold), and the third by linking an external `styles.css` file (green text, italic). Open DevTools and compare how each rule appears in the Styles panel.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Three Methods</title>
  <style>
    .internal {
      color: blue;
      font-weight: bold;
    }
  </style>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p style="color: red;">Inline style paragraph.</p>
  <p class="internal">Internal style paragraph.</p>
  <p class="external">External style paragraph.</p>
</body>
</html>
```

```css
/* styles.css */
.external {
  color: green;
  font-style: italic;
}
```

### Exercise 2: Reset and Rebuild

Create a new HTML file with a `<ul>` containing five items and an `<h1>`. Without any CSS, screenshot or note the default appearance. Then add an external stylesheet that:

1. Removes the default `margin` and `padding` from `body`
2. Removes bullets from the `<ul>` and its default padding
3. Sets `font-family` on `body` to `system-ui, sans-serif`
4. Sets `font-size` on `h1` to `2rem` with a color of your choice

Use DevTools to verify that user-agent styles are being overridden.

---

## Summary

| Concept | Key Point |
|---------|-----------|
| CSS purpose | Controls visual presentation of HTML elements |
| Inline styles | `style` attribute on element — avoid in production |
| Internal stylesheet | `<style>` in `<head>` — single-page use only |
| External stylesheet | `<link>` to `.css` file — best practice, cacheable |
| CSS syntax | `selector { property: value; }` |
| Comments | `/* comment */` — explain why, not just what |
| Browser defaults | User-agent stylesheet applies before your CSS |
| DevTools | Inspect applied rules, find overrides, edit live |

---

## Next Lesson
`002 - Selectors and Box Model.md` — How to target elements precisely and understand the spacing model around every element
