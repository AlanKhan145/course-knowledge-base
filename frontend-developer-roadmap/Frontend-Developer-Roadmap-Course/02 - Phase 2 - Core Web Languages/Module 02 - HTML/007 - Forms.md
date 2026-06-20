# 003 - Forms and Inputs

## Section
Phase 2 — HTML

## Learning Objectives

- Build accessible, well-structured HTML forms
- Know the most useful input types
- Connect labels to inputs correctly
- Add basic HTML validation
- Use select, textarea, checkbox, and radio inputs

---

## 1. Basic Form Structure

```html
<form action="/submit" method="POST">
  <!-- form fields go here -->
  <button type="submit">Submit</button>
</form>
```

| Attribute | Meaning |
|-----------|---------|
| `action` | URL to send the form data to |
| `method` | HTTP method: `GET` (search forms) or `POST` (data submission) |

In modern apps with JavaScript, you usually prevent the default submission and handle it via `fetch` — but the structure stays the same.

---

## 2. Labels and Inputs

Always connect a `<label>` to its `<input>`. This:
- Makes the label clickable (focuses the input)
- Is required for screen reader accessibility

```html
<!-- Method 1: for + id (preferred) -->
<label for="email">Email</label>
<input type="email" id="email" name="email">

<!-- Method 2: wrapping -->
<label>
  Email
  <input type="email" name="email">
</label>
```

---

## 3. Common Input Types

```html
<!-- Text -->
<input type="text"     name="username"  placeholder="Enter username">
<input type="email"    name="email"     placeholder="you@example.com">
<input type="password" name="password"  placeholder="••••••••">
<input type="number"   name="age"       min="1" max="120">
<input type="tel"      name="phone"     placeholder="+84 ...">
<input type="url"      name="website"   placeholder="https://...">

<!-- Date and time -->
<input type="date"          name="birthday">
<input type="time"          name="meeting-time">
<input type="datetime-local" name="appointment">

<!-- Search -->
<input type="search" name="q" placeholder="Search...">

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100" value="50">

<!-- Color picker -->
<input type="color" name="theme-color" value="#3b82f6">

<!-- File upload -->
<input type="file" name="avatar" accept="image/*">

<!-- Hidden (sent with form but not visible) -->
<input type="hidden" name="csrf-token" value="abc123">
```

---

## 4. Textarea

Use for multi-line text input:

```html
<label for="message">Message</label>
<textarea
  id="message"
  name="message"
  rows="5"
  placeholder="Write your message here..."
></textarea>
```

---

## 5. Select (Dropdown)

```html
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">-- Select a country --</option>
  <option value="vn">Vietnam</option>
  <option value="us">United States</option>
  <option value="jp">Japan</option>
</select>

<!-- Multi-select -->
<select name="skills" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="ts">TypeScript</option>
</select>

<!-- Grouped options -->
<select name="framework">
  <optgroup label="Frontend">
    <option value="react">React</option>
    <option value="vue">Vue</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="express">Express</option>
    <option value="fastapi">FastAPI</option>
  </optgroup>
</select>
```

---

## 6. Checkboxes and Radio Buttons

### Checkboxes (multiple selection)

```html
<fieldset>
  <legend>Interests</legend>

  <label>
    <input type="checkbox" name="interests" value="frontend"> Frontend
  </label>
  <label>
    <input type="checkbox" name="interests" value="backend"> Backend
  </label>
  <label>
    <input type="checkbox" name="interests" value="devops" checked> DevOps
  </label>
</fieldset>
```

### Radio Buttons (single selection)

```html
<fieldset>
  <legend>Experience Level</legend>

  <label>
    <input type="radio" name="level" value="beginner"> Beginner
  </label>
  <label>
    <input type="radio" name="level" value="intermediate" checked> Intermediate
  </label>
  <label>
    <input type="radio" name="level" value="senior"> Senior
  </label>
</fieldset>
```

---

## 7. HTML Built-in Validation

Add validation directly on the input without JavaScript:

```html
<input
  type="email"
  name="email"
  required
  placeholder="you@example.com"
>

<input
  type="password"
  name="password"
  required
  minlength="8"
  maxlength="64"
>

<input
  type="text"
  name="username"
  required
  pattern="[a-zA-Z0-9_]{3,20}"
  title="3–20 characters: letters, numbers, underscores only"
>

<input
  type="number"
  name="age"
  min="18"
  max="99"
  required
>
```

| Attribute | Purpose |
|-----------|---------|
| `required` | Field must not be empty |
| `minlength` / `maxlength` | Text length constraints |
| `min` / `max` | Number or date range |
| `pattern` | Regex pattern the value must match |
| `type="email"` | Validates email format automatically |

---

## 8. Complete Contact Form Example

```html
<form action="/contact" method="POST" novalidate>
  <h2>Contact Me</h2>

  <div class="form-group">
    <label for="name">Full Name *</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="2"
      autocomplete="name"
    >
  </div>

  <div class="form-group">
    <label for="email">Email *</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      autocomplete="email"
    >
  </div>

  <div class="form-group">
    <label for="subject">Subject</label>
    <select id="subject" name="subject">
      <option value="">Select a subject</option>
      <option value="job">Job opportunity</option>
      <option value="project">Project collaboration</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Message *</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      required
      minlength="20"
    ></textarea>
  </div>

  <div class="form-group">
    <label>
      <input type="checkbox" name="newsletter" value="yes">
      Subscribe to newsletter
    </label>
  </div>

  <button type="submit">Send Message</button>
  <button type="reset">Clear</button>
</form>
```

---

## Practice Exercises

### Exercise 1: Registration Form

Build a sign-up form with:
- Full name (required, min 2 chars)
- Email (required, email type)
- Password (required, min 8 chars)
- Confirm password field
- Date of birth (date type)
- Country (select dropdown with 5 options)
- Profile picture (file, accept images only)
- Terms of service checkbox (required)
- Submit button

### Exercise 2: Survey Form

Build a short survey with:
- Name and email
- "How did you hear about us?" radio buttons
- "What are you interested in?" checkboxes (3–4 options)
- Rating (range: 1–10)
- Comments (textarea)

---

## Summary

| Element / Attribute | Purpose |
|--------------------|---------|
| `<form>` | Container for form elements |
| `<label for>` | Connects label to input — required for accessibility |
| `<input type>` | Various input types: text, email, password, number, date, file... |
| `<textarea>` | Multi-line text input |
| `<select>` + `<option>` | Dropdown selection |
| `<fieldset>` + `<legend>` | Group related inputs |
| `required` | Makes field mandatory |
| `pattern` | Regex validation |
| `minlength` / `maxlength` | Length constraints |

---

## Next Lesson

`004 - Tables and Media.md` — table structure, video, audio, iframe
