# 004 - Tables and Media

## Section
Phase 2 — HTML

## Learning Objectives

- Build accessible, well-structured data tables
- Embed video and audio with the `<video>` and `<audio>` elements
- Embed external content with `<iframe>`
- Know when to use tables (data) vs CSS Grid/Flexbox (layout)

---

## 1. When to Use Tables

Use `<table>` **only for tabular data** — information that naturally fits rows and columns like:
- Pricing plans
- Comparison charts
- Schedules or timetables
- Data reports

**Never use tables for page layout.** Use CSS Grid or Flexbox instead.

---

## 2. Basic Table Structure

```html
<table>
  <caption>Frontend Skills Comparison</caption>

  <thead>
    <tr>
      <th scope="col">Skill</th>
      <th scope="col">Beginner</th>
      <th scope="col">Intermediate</th>
      <th scope="col">Advanced</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">HTML</th>
      <td>Tags, structure</td>
      <td>Semantic HTML, forms</td>
      <td>Accessibility, microdata</td>
    </tr>
    <tr>
      <th scope="row">CSS</th>
      <td>Box model, colors</td>
      <td>Flexbox, Grid</td>
      <td>Animations, custom properties</td>
    </tr>
    <tr>
      <th scope="row">JavaScript</th>
      <td>Variables, functions</td>
      <td>Async/await, DOM</td>
      <td>Performance, design patterns</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="4">Data as of June 2025</td>
    </tr>
  </tfoot>
</table>
```

### Table Elements Reference

| Element | Purpose |
|---------|---------|
| `<table>` | Container |
| `<caption>` | Title/description of the table (accessibility) |
| `<thead>` | Header rows |
| `<tbody>` | Body rows |
| `<tfoot>` | Footer rows |
| `<tr>` | Table row |
| `<th>` | Header cell — bold by default, use `scope` attribute |
| `<td>` | Data cell |
| `colspan` | Span across multiple columns |
| `rowspan` | Span across multiple rows |
| `scope="col"` / `scope="row"` | Tell screen readers what the header applies to |

---

## 3. Spanning Cells

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th colspan="2">Scores</th>
    </tr>
    <tr>
      <th>Theory</th>
      <th>Practice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>90</td>
      <td>85</td>
    </tr>
  </tbody>
</table>
```

---

## 4. Video

```html
<!-- Basic video with controls -->
<video controls width="800">
  <source src="demo.mp4" type="video/mp4">
  <source src="demo.webm" type="video/webm">
  Your browser does not support the video element.
</video>

<!-- Autoplay (muted required for autoplay to work in most browsers) -->
<video autoplay muted loop playsinline width="800">
  <source src="hero-background.mp4" type="video/mp4">
</video>

<!-- With poster image (shown before video plays) -->
<video controls poster="thumbnail.jpg" width="800">
  <source src="tutorial.mp4" type="video/mp4">
</video>
```

| Attribute | Meaning |
|-----------|---------|
| `controls` | Show play/pause/volume controls |
| `autoplay` | Play automatically (requires `muted` in most browsers) |
| `muted` | Start without audio |
| `loop` | Restart when finished |
| `poster` | Thumbnail shown before playing |
| `playsinline` | Play inline on iOS instead of fullscreen |

---

## 5. Audio

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

---

## 6. Iframe

Use `<iframe>` to embed external content — YouTube videos, Google Maps, CodePen demos.

```html
<!-- YouTube video embed -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

<!-- Google Maps embed -->
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0"
  allowfullscreen
  loading="lazy"
  title="Office location"
></iframe>
```

**Security note**: Always include `title` for accessibility. For iframes from untrusted sources, add `sandbox` to restrict what they can do:

```html
<iframe src="..." sandbox="allow-scripts allow-same-origin"></iframe>
```

---

## Practice Exercises

### Exercise 1: Pricing Table

Build a pricing comparison table with:
- 3 plans: Free, Pro, Enterprise
- Rows for: Price, Storage, Users, Support, API access
- Use `colspan` for a "Most Popular" badge spanning the Pro column
- Style it with CSS (borders, background on header row)

### Exercise 2: Course Schedule

Create a weekly class schedule table:
- Columns: Monday–Friday
- Rows: 9am, 10am, 11am, 1pm, 2pm, 3pm
- Use `rowspan` for classes that run multiple hours
- Use `colspan` for breaks that span all days

### Exercise 3: Media Page

Create a page that includes:
- A `<video>` element with controls and a poster image
- An `<audio>` player
- An embedded YouTube video via `<iframe>`

---

## Summary

| Element | Use For |
|---------|---------|
| `<table>` | Tabular data only (not layout) |
| `<caption>` | Accessible table title |
| `<thead>`, `<tbody>`, `<tfoot>` | Semantic table sections |
| `<th scope>` | Header cell with accessibility hint |
| `colspan` / `rowspan` | Cell spanning |
| `<video>` | Embedded video files |
| `<audio>` | Embedded audio files |
| `<iframe>` | Embedded external content |

---

## Next Lesson

`005 - Project - Personal Portfolio Static.md` — build and deploy your first project
