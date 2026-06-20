# 002 - Caching and Service Workers

## Section
Phase 11 — Performance and Deployment

## Learning Objectives

- Understand HTTP caching with Cache-Control headers
- Know the difference between browser cache and CDN cache
- Understand what a Service Worker is and what it can do
- Implement a basic offline cache with a Service Worker
- Use Next.js caching strategies correctly

---

## 1. HTTP Caching

HTTP caching lets browsers (and CDNs) store responses so they don't need to re-fetch them.

### Cache-Control Header

```
Cache-Control: max-age=3600, public

Values:
  max-age=N       → cache for N seconds
  public          → CDN and browser can cache
  private         → only browser can cache (not CDN); for user-specific data
  no-cache        → must revalidate before serving (fetches fresh, but uses cached if unchanged)
  no-store        → never cache; for sensitive data like banking pages
  immutable       → never revalidate; safe for versioned assets (bundle.abc123.js)
  s-maxage=N      → CDN-specific max-age (overrides max-age for CDNs)
```

### Common Patterns

```
Static assets (CSS, JS with content hash in filename):
Cache-Control: public, max-age=31536000, immutable
→ Cache forever; filename changes when content changes

HTML pages:
Cache-Control: no-cache
→ Browser checks with server every time, but serves from cache if unchanged (304)

API responses:
Cache-Control: private, max-age=60
→ Only browser caches it; 60 seconds TTL

Sensitive pages (user data):
Cache-Control: no-store
→ Never cache

CDN-cached API:
Cache-Control: public, s-maxage=3600
→ CDN caches for 1 hour; re-fetches after
```

### ETag and Conditional Requests

```
Server response:
  ETag: "abc123"

Browser next request:
  If-None-Match: "abc123"

Server: if content unchanged → 304 Not Modified (no body, saves bandwidth)
        if content changed   → 200 OK with new body + new ETag
```

---

## 2. Next.js Data Cache

Next.js has its own server-side data cache layered on top of HTTP caching.

```tsx
// SSG — cached indefinitely
const data = await fetch('https://api.example.com/products', {
  cache: 'force-cache',   // default for Server Components
})

// SSR — never cached, fresh on every request
const data = await fetch('https://api.example.com/user/profile', {
  cache: 'no-store',
})

// ISR — revalidate every N seconds
const data = await fetch('https://api.example.com/posts', {
  next: { revalidate: 60 },  // refresh cache after 60s
})

// Tag-based revalidation
const data = await fetch('https://api.example.com/products', {
  next: { tags: ['products'] },
})

// In a Server Action or Route Handler:
import { revalidateTag } from 'next/cache'
revalidateTag('products')  // invalidate all fetches tagged 'products'
```

### Next.js Full Route Cache

Next.js also caches entire rendered HTML pages at the route level:

```
Static routes (no dynamic data):      Cached at build time (like SSG)
Dynamic routes (no-store):             Never cached (renders on every request)
ISR routes (revalidate):               Cached, refreshed after TTL
```

---

## 3. Service Workers

A Service Worker is a JavaScript file that runs in the background, separate from the main page. It can:

- **Intercept network requests** and serve from cache (offline support)
- **Cache assets** for fast subsequent loads
- **Receive push notifications**
- **Background sync** (send data when back online)

```
Service Worker lifecycle:
1. Registration  → browser downloads and parses the SW file
2. Installation  → SW runs install event; caches static assets
3. Activation    → SW takes control of all open tabs for this origin
4. Fetch         → SW intercepts all network requests
```

### Basic Service Worker

```javascript
// public/sw.js

const CACHE_NAME = 'my-app-v1'
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
]

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  )
  self.skipWaiting()  // activate immediately
})

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()  // take control immediately
})

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests for same-origin
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached

      return fetch(event.request)
        .then((response) => {
          // Cache successful responses for static assets
          if (response.ok && event.request.url.includes('/static/')) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
          }
          return response
        })
        .catch(() => {
          // Offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html')
          }
        })
    })
  )
})
```

### Registering the Service Worker

```typescript
// src/sw-register.ts
export function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration.scope)
        })
        .catch((error) => {
          console.error('SW registration failed:', error)
        })
    })
  }
}

// In your entry point (e.g., main.tsx or _app.tsx)
import { registerServiceWorker } from './sw-register'
registerServiceWorker()
```

---

## 4. Cache Strategies

Different types of content need different strategies:

| Strategy | Description | Best for |
|----------|-------------|----------|
| **Cache First** | Serve from cache; fetch if not cached | Static assets, fonts |
| **Network First** | Fetch from network; serve from cache if offline | API data |
| **Stale While Revalidate** | Serve from cache immediately; update cache in background | News feeds, non-critical content |
| **Cache Only** | Only serve from cache; fail if not cached | Pre-cached critical assets |
| **Network Only** | Always fetch; no caching | User-specific, real-time data |

```javascript
// Stale While Revalidate strategy
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/news')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request)
        const fetchPromise = fetch(event.request).then((response) => {
          cache.put(event.request, response.clone())
          return response
        })
        return cached || fetchPromise  // serve cached first, update in background
      })
    )
  }
})
```

---

## 5. Using Workbox (Recommended)

Writing service workers manually is error-prone. **Workbox** is a library by Google that provides production-ready cache strategies.

### With Vite

```bash
pnpm add -D vite-plugin-pwa
```

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 },
            },
          },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 },
            },
          },
        ],
      },
    }),
  ],
})
```

---

## 6. Browser DevTools for Caching

```
DevTools → Application tab:
  - Cache Storage: view what's stored in the Cache API
  - Service Workers: register/unregister, update, check status
  - Storage: view cookies, localStorage, IndexedDB

Network tab tricks:
  - "Disable cache" checkbox: bypass all caching for testing
  - Size column: "(disk cache)" or "(memory cache)" = served from cache
  - Throttle dropdown: simulate slow 3G
```

---

## Summary

| Concept | Key API |
|---------|---------|
| Browser cache | `Cache-Control`, `ETag`, `max-age` |
| Next.js cache | `cache: 'force-cache'`, `no-store`, `next: { revalidate }` |
| Tag invalidation | `revalidateTag('tag-name')` |
| Service Worker | `caches.open()`, `caches.match()`, `event.respondWith()` |
| Cache strategies | Cache First, Network First, Stale While Revalidate |
| Workbox | `vite-plugin-pwa` — production-ready SW generation |

---

## Next Lesson

`003 - Deployment Vercel Netlify Cloudflare.md` — deploy your frontend apps to production
