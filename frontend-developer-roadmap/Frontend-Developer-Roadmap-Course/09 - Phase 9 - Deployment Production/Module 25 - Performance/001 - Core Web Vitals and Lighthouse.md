# 001 - Core Web Vitals and Lighthouse

## Section
Phase 11 — Performance and Deployment

## Learning Objectives

- Understand the three Core Web Vitals and what they measure
- Run Lighthouse audits and interpret the results
- Identify the most impactful performance improvements
- Use Chrome DevTools Performance panel
- Implement code splitting and lazy loading

---

## 1. Core Web Vitals

Google's Core Web Vitals are the three user-experience metrics that matter most:

| Metric | Stands For | Measures | Good | Needs Improvement | Poor |
|--------|-----------|----------|------|-------------------|------|
| **LCP** | Largest Contentful Paint | Loading speed | ≤ 2.5s | 2.5–4s | > 4s |
| **CLS** | Cumulative Layout Shift | Visual stability | ≤ 0.1 | 0.1–0.25 | > 0.25 |
| **INP** | Interaction to Next Paint | Responsiveness | ≤ 200ms | 200–500ms | > 500ms |

### LCP — Largest Contentful Paint

The time until the largest image or text block in the viewport is rendered.

**Common LCP elements:** Hero image, large heading, above-the-fold banner

**Common causes of slow LCP:**
- Slow server response time
- Render-blocking JavaScript/CSS
- Slow image loading (no CDN, no next/image)

**Fixes:**
```tsx
// 1. Preload the LCP image
<link rel="preload" as="image" href="/hero.jpg" />

// 2. Next.js: priority on hero image
<Image src="/hero.jpg" alt="Hero" priority width={1200} height={600} />

// 3. Use a CDN (Vercel/Cloudflare provides this automatically)
```

### CLS — Cumulative Layout Shift

Score of how much page content unexpectedly shifts during loading.

**Common causes:**
- Images without explicit width/height
- Ads or embeds injecting into the page
- Fonts causing text reflow (FOUT)
- Dynamic content inserted above existing content

**Fixes:**
```tsx
// 1. Always specify dimensions on images
<img src="photo.jpg" width="800" height="600" alt="..." />

// 2. Reserve space for dynamic content
// BAD: div with no height that gets content injected
// GOOD:
<div style={{ minHeight: '60px' }}>
  {ad && <AdComponent />}
</div>

// 3. Font display swap
// In CSS:
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/myfont.woff2') format('woff2');
  font-display: swap;   // show fallback font immediately
}

// 4. Next.js font optimization (zero CLS):
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

### INP — Interaction to Next Paint

How quickly the page responds to user input (clicks, taps, key presses).

**Common causes:**
- Heavy JavaScript running on the main thread
- Unoptimized event handlers
- Third-party scripts blocking the main thread

**Fixes:**
```tsx
// 1. Debounce expensive operations
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debouncedValue
}

// 2. Use useMemo/useCallback to avoid re-renders
const filteredItems = useMemo(
  () => items.filter(item => item.name.includes(query)),
  [items, query]
)

// 3. Virtualize long lists (render only visible items)
import { FixedSizeList } from 'react-window'
```

---

## 2. Lighthouse

Lighthouse is a built-in Chrome DevTools audit tool. It scores your app on:

- **Performance** (Core Web Vitals, speed metrics)
- **Accessibility** (ARIA, color contrast, keyboard navigation)
- **Best Practices** (HTTPS, no deprecated APIs)
- **SEO** (meta tags, structured data)

### Running Lighthouse

1. Open Chrome DevTools → **Lighthouse** tab
2. Select **Mobile** (more strict), all categories
3. Click **Analyze page load**

### Interpreting Results

**Performance score is weighted:**
| Metric | Weight |
|--------|--------|
| LCP | 25% |
| TBT (Total Blocking Time) | 30% |
| CLS | 15% |
| FCP (First Contentful Paint) | 10% |
| Speed Index | 10% |
| Time to Interactive | 10% |

**Target scores:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 3. Bundle Analysis

Large JavaScript bundles are a primary cause of slow LCP and poor performance.

```bash
# Build and analyze bundle size
pnpm build

# Vite projects — install rollup plugin
pnpm add -D rollup-plugin-visualizer

# vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),  // opens stats.html after build
  ],
})
```

### Next.js Bundle Analyzer

```bash
pnpm add -D @next/bundle-analyzer

# next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer'

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  // your existing nextConfig
})

# Run:
ANALYZE=true pnpm build
```

---

## 4. Code Splitting and Lazy Loading

Don't load everything at once. Split code so users download only what they need.

### Lazy Loading React Components

```tsx
import { lazy, Suspense } from 'react'

// Instead of: import HeavyChart from './HeavyChart'
const HeavyChart = lazy(() => import('./HeavyChart'))

function Dashboard() {
  return (
    <Suspense fallback={<div className="h-64 animate-pulse bg-gray-200" />}>
      <HeavyChart />
    </Suspense>
  )
}
```

### Lazy Loading Routes

```tsx
// App.tsx — lazy load each route
const Home    = lazy(() => import('./pages/Home'))
const Product = lazy(() => import('./pages/Product'))
const Admin   = lazy(() => import('./pages/Admin'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/admin"    element={<Admin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
```

### Dynamic Import for Heavy Libraries

```tsx
// Load a heavy library only when needed
async function exportToPDF() {
  const { jsPDF } = await import('jspdf')  // 300KB loaded on demand
  const doc = new jsPDF()
  doc.text('Report', 10, 10)
  doc.save('report.pdf')
}
```

---

## 5. Image Optimization

Images are often the largest bytes on the page.

```tsx
// Next.js — always use next/image
import Image from 'next/image'

// For images with known dimensions:
<Image
  src="/product.jpg"
  alt="Product photo"
  width={800}
  height={600}
  quality={85}           // default 75; balance quality vs size
  placeholder="blur"     // show blur while loading
  blurDataURL="data:..." // tiny base64 placeholder
/>

// For fill layout (responsive, parent must have position: relative):
<div className="relative h-64 w-full">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
    priority   // preload — use for above-the-fold only
  />
</div>
```

**Next.js image optimization automatically:**
- Converts to WebP/AVIF (smaller than JPEG/PNG)
- Resizes to the requested dimensions
- Serves from CDN with caching headers

---

## 6. Performance Budget

Set measurable targets for your project:

```
Target budget for this course's portfolio:
- Lighthouse Performance: ≥ 90 on mobile
- LCP: ≤ 2.5 seconds
- CLS: ≤ 0.1
- INP: ≤ 200ms
- Total JS bundle: ≤ 300KB gzipped
- Total page weight: ≤ 1MB
```

---

## Summary

| Concept | Tool / Fix |
|---------|-----------|
| Measure performance | Lighthouse (DevTools or CLI) |
| LCP optimization | `priority` image, preload, CDN |
| CLS prevention | Image dimensions, font-display: swap, min-height |
| INP improvement | Debounce, memoization, list virtualization |
| Bundle size | Lazy loading, dynamic imports, bundle analyzer |
| Image size | next/image with WebP, correct sizes attribute |

---

## Next Lesson

`002 - Caching and Service Workers.md` — HTTP cache headers, browser caching, service worker basics
