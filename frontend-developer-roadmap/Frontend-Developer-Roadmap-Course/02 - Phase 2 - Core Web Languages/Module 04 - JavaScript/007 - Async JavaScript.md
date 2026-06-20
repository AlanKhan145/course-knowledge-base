# 003 - Async JavaScript

## Section
Phase 4 — JavaScript Core

## Learning Objectives

- Understand why JavaScript needs asynchronous code
- Work with callbacks, Promises, and async/await
- Fetch data from an API using the Fetch API
- Handle loading states, errors, and empty states

---

## 1. Why Async?

JavaScript is single-threaded — it can only do one thing at a time. If you waited synchronously for a network request (which takes hundreds of milliseconds), the browser would freeze.

Async code lets you say: "Start this, and when it's done, do this other thing." The rest of the code continues running in the meantime.

```javascript
// Synchronous — everything waits
console.log('1')
const data = fetchData()   // browser freezes for 500ms
console.log('2')           // runs 500ms later

// Asynchronous — non-blocking
console.log('1')
fetchData().then(data => console.log('3: data arrived'))
console.log('2')
// Output: 1, 2, 3 (data arrives last)
```

---

## 2. Callbacks

The oldest pattern — pass a function to be called when the async operation completes.

```javascript
function loadUser(id, onSuccess, onError) {
  setTimeout(() => {
    if (id > 0) {
      onSuccess({ id, name: 'Alice' })
    } else {
      onError(new Error('Invalid ID'))
    }
  }, 500)
}

loadUser(
  1,
  (user) => console.log('Got user:', user),
  (err)  => console.error('Error:', err.message)
)
```

**Problem**: Nesting callbacks leads to "callback hell":

```javascript
getUser(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      // 3+ levels deep — hard to read, hard to handle errors
    })
  })
})
```

---

## 3. Promises

A **Promise** is an object representing a value that may not be available yet — it will either **resolve** (success) or **reject** (failure).

```javascript
// Creating a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true
    if (success) {
      resolve({ id: 1, name: 'Alice' })
    } else {
      reject(new Error('Failed to load'))
    }
  }, 1000)
})

// Consuming a promise
promise
  .then(user => console.log('User:', user))
  .catch(err => console.error('Error:', err.message))
  .finally(() => console.log('Request complete'))
```

### Chaining Promises

```javascript
fetch('/api/user/1')
  .then(response => response.json())   // returns another promise
  .then(user => fetch(`/api/posts?userId=${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err))
```

### Promise.all — Run in Parallel

```javascript
const [users, posts, comments] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/comments').then(r => r.json()),
])
// All three requests fire simultaneously; waits for all to finish
```

### Promise.allSettled — Don't Fail on First Error

```javascript
const results = await Promise.allSettled([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/broken-endpoint').then(r => r.json()),
])

results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log('Success:', result.value)
  } else {
    console.log('Failed:', result.reason)
  }
})
```

---

## 4. async / await

`async/await` is syntactic sugar over Promises — same behavior, cleaner syntax.

```javascript
// async function always returns a Promise
async function loadUser(id) {
  const response = await fetch(`/api/users/${id}`)
  const user = await response.json()
  return user
}

// Must await the async function to get the value
const user = await loadUser(1)
```

### Error Handling with try/catch

```javascript
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.weather.com?city=${city}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch weather:', error.message)
    throw error  // re-throw so caller can handle it
  }
}
```

---

## 5. The Fetch API

`fetch()` returns a Promise that resolves to a `Response` object.

### GET Request

```javascript
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  const users = await response.json()
  return users
}
```

### POST Request

```javascript
async function createPost(post) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })

  if (!response.ok) throw new Error(`Error: ${response.status}`)
  return response.json()
}

await createPost({ title: 'Hello', body: 'World', userId: 1 })
```

### PUT / PATCH / DELETE

```javascript
// PUT
await fetch(`/api/posts/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedPost),
})

// PATCH
await fetch(`/api/posts/${id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'New Title' }),
})

// DELETE
await fetch(`/api/posts/${id}`, { method: 'DELETE' })
```

---

## 6. Loading, Error, and Empty States

Every async UI should handle three states:

```javascript
async function loadAndRender(city) {
  const container = document.getElementById('weather')

  // 1. Loading state
  container.innerHTML = '<p class="loading">Loading weather...</p>'

  try {
    const data = await getWeather(city)

    // 2. Empty state
    if (!data) {
      container.innerHTML = '<p class="empty">No data found for this city.</p>'
      return
    }

    // 3. Success state
    container.innerHTML = `
      <h2>${data.city}</h2>
      <p>${data.temperature}°C — ${data.description}</p>
    `
  } catch (error) {
    // 4. Error state
    container.innerHTML = `
      <p class="error">Failed to load weather: ${error.message}</p>
      <button onclick="loadAndRender('${city}')">Try again</button>
    `
  }
}
```

---

## Mini Project: Weather App

### Requirements

- Search input: user types a city name
- On submit: show loading state, call weather API, render result
- Handle error state (invalid city, network error)
- Handle empty input validation

### API (no key required — use Open-Meteo + Geocoding)

```javascript
// Step 1: Get coordinates from city name
async function getCoordinates(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  )
  if (!res.ok) throw new Error('Geocoding failed')
  const data = await res.json()
  if (!data.results?.length) throw new Error(`City not found: ${city}`)
  return data.results[0]
}

// Step 2: Get weather from coordinates
async function getWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  )
  if (!res.ok) throw new Error('Weather fetch failed')
  return res.json()
}

// Combined function
async function searchWeather(city) {
  const location = await getCoordinates(city)
  const weather = await getWeather(location.latitude, location.longitude)
  return { location, weather }
}
```

### HTML Structure

```html
<form id="search-form">
  <input type="text" id="city-input" placeholder="Enter city..." required>
  <button type="submit">Search</button>
</form>
<div id="result"></div>
```

### JavaScript Handler

```javascript
document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const city = document.getElementById('city-input').value.trim()
  const result = document.getElementById('result')

  result.innerHTML = '<p>Loading...</p>'

  try {
    const { location, weather } = await searchWeather(city)
    const temp = weather.current_weather.temperature
    const windspeed = weather.current_weather.windspeed

    result.innerHTML = `
      <div class="weather-card">
        <h2>${location.name}, ${location.country}</h2>
        <p class="temp">${temp}°C</p>
        <p>Wind: ${windspeed} km/h</p>
      </div>
    `
  } catch (err) {
    result.innerHTML = `<p class="error">⚠ ${err.message}</p>`
  }
})
```

---

## Summary

| Concept | When to Use |
|---------|------------|
| Callbacks | Rarely — legacy code or simple cases |
| `.then()` / `.catch()` | Chaining, `Promise.all` |
| `async/await` | Most situations — cleaner syntax |
| `try/catch` | Error handling in async functions |
| `fetch()` | HTTP requests |
| `response.ok` | Always check before calling `.json()` |
| `Promise.all()` | Multiple parallel requests |

---

## Next Lesson

`004 - Modern JavaScript.md` — destructuring, spread/rest, optional chaining, modules, closures
