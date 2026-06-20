# 001 - HTML Document Structure

## Section
Phase 2 — HTML

## Learning Objectives

- Understand the anatomy of a valid HTML document
- Know which tags are required and what they do
- Add metadata that helps browsers and search engines
- Write clean, well-structured markup

---

## 1. The Minimal Valid HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <!-- visible content goes here -->
</body>
</html>
```

---

## 2. Each Part Explained

### `<!DOCTYPE html>`

Tells the browser to use modern HTML5 parsing mode. Always place this on line 1.

### `<html lang="en">`

The root element. `lang` tells screen readers and search engines what language the page is in. Use `"vi"` for Vietnamese.

### `<head>`

Contains metadata — information *about* the page, not visible content.

```html
<head>
  <!-- Character encoding — always first in <head> -->
  <meta charset="UTF-8">

  <!-- Makes layout work on mobile devices -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Page title shown in browser tab and search results -->
  <title>My Portfolio</title>

  <!-- Description shown in Google search results -->
  <meta name="description" content="Frontend developer portfolio by Nguyen Van A">

  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="styles.css">

  <!-- Favicon -->
  <link rel="icon" href="favicon.ico">
</head>
```

### `<body>`

Contains all visible page content — text, images, links, forms, etc.

---

## 3. Block vs Inline Elements

### Block elements

Take up the full available width, start on a new line:

```html
<div>   Generic block container
<p>     Paragraph
<h1>–<h6> Headings
<ul>, <ol>, <li>  Lists
<section>, <article>, <header>, <footer>  Semantic blocks
<form>  Forms
<table> Tables
```

### Inline elements

Only take up as much width as their content, do not force a new line:

```html
<span>   Generic inline container
<a>      Links
<strong> Bold (important)
<em>     Italic (emphasis)
<img>    Images
<button> Buttons
<input>  Inputs
<label>  Form labels
```

---

## 4. Headings and Document Outline

Use headings `<h1>`–`<h6>` to create a logical document outline.

```html
<h1>My Portfolio</h1>         <!-- One per page — main topic -->
  <h2>About Me</h2>
  <h2>Projects</h2>
    <h3>Project One</h3>
    <h3>Project Two</h3>
  <h2>Contact</h2>
```

Rules:
- **One `<h1>` per page** — the main topic
- Do not skip heading levels (don't jump from `<h2>` to `<h4>`)
- Headings define structure, not visual size — use CSS for sizing

---

## 5. Links and Images

### Links

```html
<!-- External link — opens in new tab -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub
</a>

<!-- Internal link — same site -->
<a href="/about">About</a>

<!-- Jump to section on same page -->
<a href="#projects">See Projects</a>
<section id="projects">...</section>

<!-- Email link -->
<a href="mailto:me@example.com">Email Me</a>
```

### Images

```html
<!-- Always include alt for accessibility and SEO -->
<img
  src="profile.jpg"
  alt="Nguyen Van A smiling in front of a laptop"
  width="300"
  height="300"
/>

<!-- Decorative image that screen readers should skip -->
<img src="divider.svg" alt="" />
```

---

## 6. Lists

```html
<!-- Unordered list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Install Node.js</li>
  <li>Run npm install</li>
  <li>Run npm dev</li>
</ol>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>Structure of a web page</dd>
  <dt>CSS</dt>
  <dd>Styles and layout</dd>
</dl>
```

---

## Practice Exercises

### Exercise 1: Blog Article Page

Create `blog-article.html` with:
- Proper document structure (`<!DOCTYPE html>`, `<head>`, `<body>`)
- A meaningful `<title>` and `<meta name="description">`
- One `<h1>` for the article title
- Multiple `<h2>` subheadings
- Several `<p>` paragraphs
- At least one `<ul>` or `<ol>` list
- An `<img>` with a descriptive `alt` attribute
- A link to an external resource

### Exercise 2: Validate Your HTML

Go to [validator.w3.org](https://validator.w3.org/) and paste your HTML. Fix any errors reported.

---

## Summary

| Element | Purpose |
|---------|---------|
| `<!DOCTYPE html>` | Enable HTML5 mode |
| `<html lang>` | Root element with language |
| `<head>` | Metadata: charset, viewport, title, CSS |
| `<body>` | Visible page content |
| `<h1>`–`<h6>` | Heading hierarchy — one `<h1>` per page |
| `<a href>` | Links — always include `alt` on images |
| `<img alt>` | Images — always include descriptive `alt` |

---

## Next Lesson

`002 - Semantic HTML.md` — header, main, section, article, nav, footer, and why they matter
