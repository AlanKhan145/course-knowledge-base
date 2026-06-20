# Text Elements

## Section
Stage 2 — Core Frontend — Module 02: HTML

## Learning Objectives
- Understand heading hierarchy and why only one `h1` is allowed per page
- Know when to use semantic inline elements (`strong`, `em`) versus presentational ones (`b`, `i`)
- Use `blockquote`, `pre`, and `code` correctly for quoted and preformatted content
- Apply inline elements (`span`, `mark`, `abbr`, `kbd`, `time`) for precise semantic meaning
- Distinguish between `br` and `p` and choose the right one for the context

---

## 1. Heading Hierarchy (h1–h6)

Headings create an outline of your page. Search engines and screen readers rely on this outline to understand structure.

**Rules:**
- There must be **exactly one `h1`** per page — it represents the main topic.
- Headings must not skip levels (do not jump from `h2` to `h4`).
- Use headings for document structure, never just to make text bigger or bolder.

```html
<h1>The Complete Guide to HTML</h1>

  <h2>Chapter 1: Text Elements</h2>

    <h3>Inline Elements</h3>
    <h3>Block Elements</h3>

  <h2>Chapter 2: Links</h2>

    <h3>Absolute vs Relative URLs</h3>
```

**Wrong — skipping levels:**
```html
<h1>Page Title</h1>
<h3>Subsection</h3>  <!-- h2 was skipped — incorrect -->
```

---

## 2. Paragraph and Line Breaks

Use `<p>` to wrap every standalone block of text. Use `<br>` only when a line break is meaningful content (e.g., inside a poem or postal address) — never as a spacing hack.

```html
<!-- Correct: separate ideas = separate paragraphs -->
<p>HTML is the skeleton of every web page.</p>
<p>Without HTML, browsers would have no structure to render.</p>

<!-- Correct use of br: line breaks are part of the content -->
<address>
  123 Frontend Street<br>
  Web City, WC 10001
</address>

<!-- Wrong: using br as a substitute for paragraph spacing -->
<p>
  First idea.<br><br>
  Second idea.  <!-- Use a new <p> instead -->
</p>
```

---

## 3. Semantic vs Presentational Inline Elements

| Element | Meaning | Visual default |
|---------|---------|---------------|
| `<strong>` | High importance / urgency | Bold |
| `<b>` | Draw attention (no extra importance) | Bold |
| `<em>` | Stress emphasis (changes meaning) | Italic |
| `<i>` | Alternative voice, term, title | Italic |

The key rule: choose the element that describes **why** the text is different, not **how** it looks.

```html
<!-- strong: this warning is critically important -->
<p><strong>Warning:</strong> Do not submit the form twice.</p>

<!-- b: highlighted term, no urgency implied -->
<p>The property is called <b>display</b>.</p>

<!-- em: stress changes the meaning of the sentence -->
<p>I <em>never</em> said she stole the money.</p>

<!-- i: technical term being introduced -->
<p>This technique is called <i>progressive enhancement</i>.</p>
```

---

## 4. Additional Inline Elements

### `<mark>` — Highlighted / relevant text
```html
<p>Search results for "HTML":
  <mark>HTML</mark> is a markup language used to structure web content.
</p>
```

### `<code>` — Inline code
```html
<p>Set the property with <code>display: flex</code>.</p>
```

### `<kbd>` — Keyboard input
```html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

### `<abbr>` — Abbreviation with expanded form
```html
<p><abbr title="HyperText Markup Language">HTML</abbr> was created in 1991.</p>
```

### `<time>` — Machine-readable date/time
```html
<p>Published on <time datetime="2025-06-20">June 20, 2025</time>.</p>
<p>The event starts at <time datetime="18:00">6:00 PM</time>.</p>
```

### `<span>` — Generic inline container (no semantic meaning)
Use `span` only when no other semantic element fits, usually to apply a CSS class or JavaScript hook.
```html
<p>Your score is <span class="score-highlight">98/100</span>.</p>
```

---

## 5. Block Quotations and Preformatted Text

### `<blockquote>` — Long quotation from another source
```html
<blockquote cite="https://www.w3.org/TR/html52/">
  <p>Authors are encouraged to use the most specific element that
  describes their content.</p>
</blockquote>
```

### `<pre>` — Preformatted text (preserves whitespace and line breaks)
Most commonly used together with `<code>` for multi-line code blocks.

```html
<pre><code>function greet(name) {
  return "Hello, " + name + "!";
}
</code></pre>
```

**Important:** Inside `<pre>`, every space and newline is rendered exactly as written. Do not indent the content with your editor's normal indentation — it will appear on the page.

---

## Practice Exercises

### Exercise 1: Build a Structured Article
Create an HTML file that contains:
1. An `h1` for the article title.
2. Two `h2` sections, each with at least one `h3` subsection.
3. A `p` paragraph using `strong` for an important warning and `em` for stress emphasis.
4. An `abbr` for any acronym used in the text (e.g., CSS, API).
5. A `blockquote` citing a real or fictional source.

```html
<!-- Starter structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Article</title>
</head>
<body>
  <h1><!-- Your article title --></h1>

  <h2><!-- Section 1 --></h2>
    <h3><!-- Subsection --></h3>
    <p><!-- Paragraph with strong and em --></p>

  <h2><!-- Section 2 --></h2>
    <blockquote cite="">
      <p><!-- Quote text --></p>
    </blockquote>
</body>
</html>
```

### Exercise 2: Keyboard Shortcut Reference Card
Build a small reference card that lists 5 keyboard shortcuts using `<kbd>`, `<code>`, and appropriate heading levels.

```html
<h2>VS Code Shortcuts</h2>

<h3>File Operations</h3>
<p>Save file: <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
<p>Open terminal: <kbd>Ctrl</kbd> + <kbd>`</kbd></p>

<h3>Editing</h3>
<p>Duplicate line: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd></p>
<!-- Add two more shortcuts of your choice -->
```

---

## Summary

| Concept | Key Point |
|---------|-----------|
| `h1` | Only one per page; represents the main topic |
| Heading order | Never skip levels (h1 → h2 → h3) |
| `strong` vs `b` | `strong` = important; `b` = draw attention without importance |
| `em` vs `i` | `em` = stress that changes meaning; `i` = alternate voice/term |
| `br` vs `p` | `br` for meaningful line breaks; `p` for separate thoughts |
| `abbr` | Always include a `title` attribute with the full expansion |
| `time` | Use `datetime` attribute for machine-readable format |
| `pre` + `code` | Wrap multi-line code in both elements |

---

## Next Lesson
`003 - Images and Media.md` — Embedding images, the `figure` element, responsive images with `srcset`, audio, and video
