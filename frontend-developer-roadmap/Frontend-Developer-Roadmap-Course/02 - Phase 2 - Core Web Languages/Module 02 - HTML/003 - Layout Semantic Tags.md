# 002 - Semantic HTML

## Section
Phase 2 — HTML

## Learning Objectives

- Understand what semantic HTML is and why it matters
- Know the key semantic elements and when to use each
- Structure a real page layout using only semantic tags
- Improve accessibility and SEO with better markup

---

## 1. What Is Semantic HTML?

Semantic HTML means using elements that describe the *meaning* of content, not just its appearance.

```html
<!-- Non-semantic — tells the browser nothing about the content's purpose -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main-content">...</div>
<div class="footer">...</div>

<!-- Semantic — the element name itself communicates meaning -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

**Why it matters:**
- Screen readers can navigate by landmark regions (header, main, nav)
- Search engines understand your page structure better
- Your HTML is self-documenting and easier to maintain

---

## 2. Page-Level Landmark Elements

```html
<body>
  <header>      <!-- Site header, logo, top nav -->
    <nav>       <!-- Primary navigation links -->
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  </header>

  <main>        <!-- One per page — the primary content -->
    <h1>Page Heading</h1>
    ...
  </main>

  <aside>       <!-- Supplementary content: sidebar, related links -->
    ...
  </aside>

  <footer>      <!-- Site footer: copyright, social links -->
    ...
  </footer>
</body>
```

---

## 3. Content Sectioning

### `<section>`

A thematic grouping of content. Use it when you'd give the section a heading.

```html
<section>
  <h2>Skills</h2>
  <ul>
    <li>React</li>
    <li>TypeScript</li>
  </ul>
</section>

<section>
  <h2>Projects</h2>
  ...
</section>
```

### `<article>`

Self-contained content that makes sense on its own — a blog post, a news article, a product card.

```html
<article>
  <h2>How to Learn React</h2>
  <p>Published: June 2025</p>
  <p>React is a JavaScript library...</p>
</article>
```

### `<section` vs `<article>`

| | `<section>` | `<article>` |
|---|---|---|
| Standalone? | No — part of a larger whole | Yes — makes sense in isolation |
| Examples | Page sections, chapters | Blog posts, news stories, product cards |
| Needs heading? | Usually yes | Usually yes |

---

## 4. Text-Level Semantics

```html
<!-- Strong importance — renders bold, but use for meaning not appearance -->
<strong>Warning: this action cannot be undone</strong>

<!-- Emphasis — renders italic -->
<em>You must complete this step before continuing</em>

<!-- Code -->
<code>npm install</code>

<!-- Abbreviation with explanation -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- Date and time (machine-readable) -->
<time datetime="2025-06-20">June 20, 2025</time>

<!-- Quoted text -->
<blockquote cite="https://developer.mozilla.org">
  HTML describes the structure of a web page.
</blockquote>

<!-- Short inline quote -->
<p>MDN says <q>HTML is easy to learn.</q></p>
```

---

## 5. Figures and Captions

```html
<figure>
  <img src="chart.png" alt="Bar chart showing monthly revenue 2024">
  <figcaption>Monthly revenue for 2024. Source: internal data.</figcaption>
</figure>

<!-- Also works for code snippets -->
<figure>
  <pre><code>const x = 42</code></pre>
  <figcaption>A simple variable declaration in JavaScript</figcaption>
</figure>
```

---

## 6. Full Page Layout Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nguyen Van A — Frontend Developer</title>
  <meta name="description" content="Portfolio of Nguyen Van A, a frontend developer.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header>
    <a href="/" class="logo">NVA</a>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <section id="about">
      <h1>Hi, I'm Nguyen Van A</h1>
      <p>A frontend developer building modern, accessible web experiences.</p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML &amp; CSS</li>
        <li>JavaScript &amp; TypeScript</li>
        <li>React &amp; Next.js</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projects</h2>

      <article>
        <h3>E-commerce Frontend</h3>
        <p>A full-featured product listing and cart built with Next.js.</p>
        <a href="https://github.com/example/project">View on GitHub</a>
      </article>

      <article>
        <h3>React Dashboard</h3>
        <p>Admin dashboard with charts, tables, and CRUD operations.</p>
        <a href="https://github.com/example/dashboard">View on GitHub</a>
      </article>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 Nguyen Van A</p>
    <nav aria-label="Social links">
      <a href="https://github.com/nvana">GitHub</a>
      <a href="https://linkedin.com/in/nvana">LinkedIn</a>
    </nav>
  </footer>

</body>
</html>
```

---

## Practice Exercises

### Exercise 1: Redesign a `<div>` Soup

Take this code and rewrite it using proper semantic elements:

```html
<!-- Before — fix this -->
<div class="top">
  <div class="brand">MyBlog</div>
  <div class="menu">
    <span><a href="/">Home</a></span>
    <span><a href="/posts">Posts</a></span>
  </div>
</div>
<div class="content">
  <div class="post">
    <div class="post-title">My First Post</div>
    <div class="post-body">This is the content.</div>
  </div>
</div>
<div class="bottom">
  <div class="copyright">© 2025</div>
</div>
```

### Exercise 2: Blog Index Page

Create a blog listing page with:
- `<header>` with site name and `<nav>`
- `<main>` containing multiple `<article>` elements
- Each article has a title (`<h2>`), date (`<time>`), excerpt (`<p>`), and a "Read more" link
- `<footer>` with copyright

---

## Summary

| Element | Use For |
|---------|---------|
| `<header>` | Site or section header |
| `<nav>` | Navigation links |
| `<main>` | Primary page content (one per page) |
| `<section>` | Thematic grouping with a heading |
| `<article>` | Self-contained, shareable content |
| `<aside>` | Supplementary / sidebar content |
| `<footer>` | Site or section footer |
| `<figure>` / `<figcaption>` | Images or code with captions |
| `<time>` | Dates and times (machine-readable) |

---

## Next Lesson

`003 - Forms and Inputs.md` — input types, labels, validation, textarea, select
