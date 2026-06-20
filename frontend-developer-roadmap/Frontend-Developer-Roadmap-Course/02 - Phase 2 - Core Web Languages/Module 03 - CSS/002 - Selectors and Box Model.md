# 001 - Selectors and Box Model

## Section
Phase 3 — CSS

## Learning Objectives

- Write CSS selectors: type, class, ID, attribute, pseudo-class, pseudo-element
- Understand selector specificity and the cascade
- Master the CSS box model
- Control spacing with margin, padding, and border

---

## 1. How CSS Works

CSS is applied via three mechanisms, in increasing order of priority:

1. **Browser default styles** (user-agent stylesheet)
2. **Author styles** (your CSS file)
3. **Inline styles** (`style="..."` on an element)

When multiple rules target the same element, the **cascade** determines which wins.

---

## 2. CSS Selectors

### Basic Selectors

```css
/* Type selector */
p { color: gray; }
h1 { font-size: 2rem; }

/* Class selector */
.card { background: white; border-radius: 8px; }

/* ID selector (use sparingly — low reusability) */
#header { position: sticky; top: 0; }

/* Universal selector */
* { box-sizing: border-box; }
```

### Combinators

```css
/* Descendant: any p inside .article */
.article p { line-height: 1.6; }

/* Child: direct children only */
.nav > li { display: inline-block; }

/* Adjacent sibling: h2 immediately followed by p */
h2 + p { font-size: 1.1rem; }

/* General sibling: all p siblings after h2 */
h2 ~ p { color: #555; }
```

### Attribute Selectors

```css
/* Has the attribute */
[disabled] { opacity: 0.5; cursor: not-allowed; }

/* Exact value */
[type="submit"] { background: blue; }

/* Contains word */
[class~="btn"] { padding: 8px 16px; }

/* Starts with */
[href^="https"] { color: green; }

/* Ends with */
[href$=".pdf"]::after { content: " (PDF)"; }

/* Contains substring */
[class*="icon-"] { width: 24px; height: 24px; }
```

### Pseudo-Classes

```css
/* User interaction */
a:hover  { color: blue; }
a:focus  { outline: 2px solid blue; }
button:active { transform: scale(0.98); }

/* Form states */
input:focus      { border-color: blue; }
input:valid      { border-color: green; }
input:invalid    { border-color: red; }
input:disabled   { opacity: 0.5; }
input:checked    { accent-color: blue; }

/* Structural */
li:first-child  { font-weight: bold; }
li:last-child   { border-bottom: none; }
li:nth-child(2) { background: lightyellow; }
li:nth-child(odd)  { background: #f9f9f9; }
li:nth-child(even) { background: white; }

/* Negation */
p:not(.intro) { font-size: 0.9rem; }
```

### Pseudo-Elements

```css
/* Style first line of text */
p::first-line { font-weight: bold; }

/* Style first letter */
p::first-letter { font-size: 2em; float: left; }

/* Insert content before/after */
.required-field::after {
  content: " *";
  color: red;
}

/* Custom list bullets */
li::before {
  content: "→ ";
  color: blue;
}
```

---

## 3. Specificity

When multiple rules match the same element, specificity determines which wins.

| Selector type | Specificity value |
|---------------|------------------|
| Inline style | 1,0,0,0 |
| ID (`#id`) | 0,1,0,0 |
| Class (`.class`), attribute, pseudo-class | 0,0,1,0 |
| Type (`p`, `h1`), pseudo-element | 0,0,0,1 |

```css
p            { color: black; }   /* 0,0,0,1 */
.text        { color: blue; }    /* 0,0,1,0 — wins */
#content p   { color: green; }   /* 0,1,0,1 — wins over .text */
```

**`!important` overrides specificity** — avoid using it except for utility classes.

---

## 4. The Box Model

Every HTML element is a rectangular box with four layers:

```
┌─────────────────────────────────────┐
│              margin                 │  ← Space outside the border
│  ┌──────────────────────────────┐   │
│  │            border            │   │  ← Visible border
│  │  ┌───────────────────────┐   │   │
│  │  │        padding        │   │   │  ← Space inside the border
│  │  │  ┌─────────────────┐  │   │   │
│  │  │  │     content     │  │   │   │  ← width × height
│  │  │  └─────────────────┘  │   │   │
│  │  └───────────────────────┘   │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

```css
.box {
  width: 300px;
  height: 150px;
  padding: 20px;
  border: 2px solid black;
  margin: 16px;
}
```

### `box-sizing`

By default (`content-box`), `width` and `height` apply to content only. Padding and border are added on top:

```css
/* Default — total width = 300 + 40 + 4 = 344px */
.box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}

/* border-box — total width stays 300px; padding/border eat into it */
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
```

**Always set this globally:**

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## 5. Margin, Padding, Border

### Shorthand syntax (clock order: top, right, bottom, left)

```css
/* All four sides */
margin: 16px;

/* Vertical | Horizontal */
margin: 16px 24px;

/* Top | Horizontal | Bottom */
margin: 16px 24px 8px;

/* Top | Right | Bottom | Left */
margin: 16px 24px 8px 0;

/* Individual sides */
margin-top: 16px;
margin-right: 24px;
margin-bottom: 8px;
margin-left: 0;
```

### Margin Collapsing

Vertical margins between block elements collapse to the larger of the two:

```css
.a { margin-bottom: 20px; }
.b { margin-top: 30px; }
/* Gap between them = 30px (not 50px) */
```

Collapsing does **not** happen with:
- Flex/Grid children
- Floated elements
- Elements with `overflow` set

### Border

```css
.card {
  border: 1px solid #e5e7eb;          /* shorthand: width style color */
  border-top: 3px solid blue;
  border-radius: 8px;
  border-radius: 8px 16px 8px 16px;   /* TL TR BR BL */
  border-radius: 50%;                  /* circle */
}
```

---

## 6. Display Property

```css
display: block;        /* Takes full width, stacks vertically */
display: inline;       /* Flows with text, ignores width/height */
display: inline-block; /* Flows with text, respects width/height */
display: none;         /* Removed from layout entirely */
display: flex;         /* Flexbox container */
display: grid;         /* Grid container */
```

---

## Practice Exercises

### Exercise 1: Specificity Quiz

What color does the `<p>` get in each case?

```css
/* Case 1 */
p { color: black; }
.text { color: blue; }
/* HTML: <p class="text">Hello</p> */

/* Case 2 */
#content p { color: green; }
.text { color: blue; }
/* HTML: <div id="content"><p class="text">Hello</p></div> */
```

### Exercise 2: Box Model Inspector

1. Create a `<div>` with `width: 200px`, `padding: 20px`, `border: 2px solid red`, `margin: 30px`
2. Open DevTools → Elements → select the div → click **Computed** tab
3. Find the box model diagram — verify the total rendered width

### Exercise 3: Selector Targeting

Without touching the HTML, write CSS selectors to:
- Make all `<li>` elements inside `.nav` display horizontally
- Style every odd table row with a light gray background
- Add a red asterisk after any `<label>` that has `class="required"`
- Make all external links (href starts with "http") display in green

---

## Summary

| Concept | Key Rule |
|---------|----------|
| Specificity | Inline > ID > Class > Type |
| Box model | margin → border → padding → content |
| `box-sizing: border-box` | Width includes padding and border |
| Margin collapsing | Vertical margins between blocks collapse |
| `display: none` | Removes from layout; `visibility: hidden` hides but keeps space |

---

## Next Lesson

`002 - Flexbox.md` — one-dimensional layout, alignment, responsive patterns
