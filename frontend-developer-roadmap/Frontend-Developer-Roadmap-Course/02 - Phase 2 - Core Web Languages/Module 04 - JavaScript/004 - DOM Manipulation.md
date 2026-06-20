# 002 - DOM Manipulation

## Section
Phase 4 — JavaScript Core

## Learning Objectives

- Select elements with `querySelector` and `querySelectorAll`
- Read and write element content, attributes, and styles
- Add, remove, and create DOM elements
- Handle events with `addEventListener`
- Store data in `localStorage`

---

## 1. Selecting Elements

```javascript
// Single element — returns first match
const btn = document.querySelector('#submit-btn')
const title = document.querySelector('h1')
const card = document.querySelector('.card')
const activeItem = document.querySelector('.nav a.active')

// All matching elements — returns NodeList
const allCards = document.querySelectorAll('.card')
const allInputs = document.querySelectorAll('input[type="text"]')

// Convert NodeList to array (to use map/filter/reduce)
const cards = Array.from(document.querySelectorAll('.card'))
const cards2 = [...document.querySelectorAll('.card')]

// Older methods (still valid)
document.getElementById('app')
document.getElementsByClassName('card')   // HTMLCollection, not NodeList
document.getElementsByTagName('p')
```

---

## 2. Reading and Writing Content

```javascript
const el = document.querySelector('#message')

// Text content (plain text, no HTML)
el.textContent                    // get
el.textContent = 'Hello World'    // set

// Inner HTML (parses HTML — be careful with user input!)
el.innerHTML                      // get
el.innerHTML = '<strong>Bold</strong>'  // set

// Outer HTML (includes the element itself)
el.outerHTML

// Form input values
const input = document.querySelector('#name-input')
input.value                // get current value
input.value = 'Alice'     // set value
```

---

## 3. Attributes and Classes

```javascript
const img = document.querySelector('img')

// Attributes
img.getAttribute('src')              // get
img.setAttribute('alt', 'New alt')  // set
img.removeAttribute('disabled')     // remove
img.hasAttribute('hidden')          // check

// Shortcut for common attributes
img.src
img.alt
img.id
img.href  // for <a> elements

// Classes
el.classList.add('active')
el.classList.remove('hidden')
el.classList.toggle('open')          // add if absent, remove if present
el.classList.contains('active')      // true/false
el.classList.replace('old', 'new')

// Data attributes
// HTML: <div data-user-id="42" data-role="admin">
el.dataset.userId  // '42'
el.dataset.role    // 'admin'
el.dataset.userId = '99'  // set
```

---

## 4. Inline Styles

```javascript
el.style.color = 'red'
el.style.backgroundColor = '#f0f0f0'
el.style.fontSize = '16px'
el.style.display = 'none'
el.style.display = ''       // reset to stylesheet value

// Read computed styles (actual applied value)
const computed = getComputedStyle(el)
computed.fontSize             // '16px'
computed.marginTop            // '8px'
```

**Prefer CSS classes over inline styles** for anything beyond show/hide. Setting dozens of `el.style.x` properties is hard to maintain.

---

## 5. Creating and Removing Elements

```javascript
// Create element
const card = document.createElement('div')
card.className = 'card'
card.textContent = 'New card'

// Add to DOM
document.body.appendChild(card)                 // end of body
document.querySelector('.list').prepend(card)   // start of list
existingEl.before(card)                         // before sibling
existingEl.after(card)                          // after sibling
parent.insertBefore(card, referenceEl)          // before a specific child

// Template literal approach
const container = document.querySelector('#cards')
container.innerHTML += `
  <div class="card">
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
`
// Warning: += innerHTML re-parses and destroys existing event listeners

// Safer: use insertAdjacentHTML
container.insertAdjacentHTML('beforeend', `
  <div class="card">
    <h3>${title}</h3>
  </div>
`)

// Remove elements
el.remove()
parent.removeChild(child)
```

---

## 6. Events

### Adding Event Listeners

```javascript
const btn = document.querySelector('#submit')

btn.addEventListener('click', function(event) {
  console.log('clicked!', event)
})

// Arrow function — no 'this' binding
btn.addEventListener('click', (e) => {
  e.preventDefault()   // stop default behavior (form submit, link follow)
  e.stopPropagation()  // stop event bubbling up
  console.log(e.target)  // element that was clicked
})

// Remove listener (must keep a reference)
function handleClick() { console.log('clicked') }
btn.addEventListener('click', handleClick)
btn.removeEventListener('click', handleClick)
```

### Common Events

```javascript
// Mouse events
el.addEventListener('click', handler)
el.addEventListener('dblclick', handler)
el.addEventListener('mouseenter', handler)
el.addEventListener('mouseleave', handler)
el.addEventListener('mousemove', handler)

// Keyboard events
document.addEventListener('keydown', (e) => {
  console.log(e.key, e.code, e.ctrlKey, e.shiftKey)
  if (e.key === 'Escape') closeModal()
  if (e.key === 'Enter') submitForm()
})

// Form events
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const name = data.get('name')
})

input.addEventListener('input', (e) => {
  console.log('current value:', e.target.value)
})

input.addEventListener('change', handler)    // fires when focus leaves
input.addEventListener('focus', handler)
input.addEventListener('blur', handler)

// Window / document events
window.addEventListener('resize', handler)
window.addEventListener('scroll', handler)
document.addEventListener('DOMContentLoaded', handler)
```

### Event Delegation

Instead of adding listeners to every child, add one listener to the parent:

```javascript
// Bad — adds listener to every button
document.querySelectorAll('.card .delete-btn').forEach(btn => {
  btn.addEventListener('click', deleteCard)
})

// Good — one listener on parent, check event.target
document.querySelector('.card-list').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    const card = e.target.closest('.card')
    card.remove()
  }
})
```

---

## 7. localStorage

```javascript
// Store — values must be strings (use JSON for objects/arrays)
localStorage.setItem('username', 'Alice')
localStorage.setItem('cart', JSON.stringify([{ id: 1, qty: 2 }]))

// Retrieve
const name = localStorage.getItem('username')  // 'Alice' or null
const cart = JSON.parse(localStorage.getItem('cart') || '[]')

// Remove
localStorage.removeItem('username')

// Clear all
localStorage.clear()

// Helper functions
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key, fallback = null) {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : fallback
}
```

---

## Mini Project: Todo App

Build a complete Todo app:

### Features
- Add a new task (text input + button or Enter key)
- Mark task as completed (toggle class)
- Delete task
- Filter: All / Active / Completed
- Persist to localStorage

### Starter Structure

```html
<div id="app">
  <form id="todo-form">
    <input type="text" id="todo-input" placeholder="Add a task..." required>
    <button type="submit">Add</button>
  </form>

  <div class="filters">
    <button data-filter="all" class="active">All</button>
    <button data-filter="active">Active</button>
    <button data-filter="completed">Completed</button>
  </div>

  <ul id="todo-list"></ul>

  <div id="summary">0 tasks remaining</div>
</div>
```

```javascript
// Data model
let todos = loadFromStorage('todos', [])
let currentFilter = 'all'

// Render all todos
function render() {
  const filtered = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed
    if (currentFilter === 'completed') return todo.completed
    return true
  })

  const list = document.getElementById('todo-list')
  list.innerHTML = filtered.map(todo => `
    <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
      <button class="toggle-btn">${todo.completed ? '✓' : '○'}</button>
      <span class="todo-text">${todo.text}</span>
      <button class="delete-btn">✕</button>
    </li>
  `).join('')

  const remaining = todos.filter(t => !t.completed).length
  document.getElementById('summary').textContent = `${remaining} task(s) remaining`

  saveToStorage('todos', todos)
}

// Add todo
document.getElementById('todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.getElementById('todo-input')
  if (!input.value.trim()) return

  todos.push({
    id: Date.now(),
    text: input.value.trim(),
    completed: false
  })
  input.value = ''
  render()
})

// Toggle and delete via event delegation
document.getElementById('todo-list').addEventListener('click', (e) => {
  const item = e.target.closest('.todo-item')
  if (!item) return

  const id = Number(item.dataset.id)

  if (e.target.matches('.toggle-btn')) {
    todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
  }

  if (e.target.matches('.delete-btn')) {
    todos = todos.filter(t => t.id !== id)
  }

  render()
})

// Filter buttons
document.querySelector('.filters').addEventListener('click', (e) => {
  if (!e.target.matches('[data-filter]')) return
  currentFilter = e.target.dataset.filter
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === currentFilter)
  })
  render()
})

// Initial render
render()
```

---

## Summary

| Task | Method |
|------|--------|
| Select element | `document.querySelector(selector)` |
| Select all | `document.querySelectorAll(selector)` |
| Read text | `el.textContent` |
| Write HTML | `el.insertAdjacentHTML('beforeend', html)` |
| Add class | `el.classList.add('name')` |
| Toggle class | `el.classList.toggle('name')` |
| Create element | `document.createElement('div')` |
| Append element | `parent.appendChild(el)` |
| Remove element | `el.remove()` |
| Listen to event | `el.addEventListener('click', fn)` |
| Prevent default | `e.preventDefault()` |
| Event delegation | Listen on parent, check `e.target.matches()` |
| Store data | `localStorage.setItem(key, JSON.stringify(val))` |

---

## Next Lesson

`003 - Async JavaScript.md` — callbacks, Promises, async/await, Fetch API
