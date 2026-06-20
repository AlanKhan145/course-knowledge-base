# 001 - Next.js App Router

## Section
Phase 8 — Next.js, SSR, SSG

## Learning Objectives

- Understand what Next.js adds over a Vite React app
- Create routes using the file-system App Router
- Use layouts, loading states, and error pages
- Understand the difference between Server and Client components
- Set up metadata for SEO

---

## 1. Why Next.js?

A Vite React app gives you:
- Client-side rendering (CSR) only
- No built-in routing (you add React Router)
- No server — everything runs in the browser

**Next.js** adds:
- File-system routing (folders = routes)
- Server-side rendering (SSR) — HTML generated on the server per request
- Static site generation (SSG) — HTML generated at build time
- API routes — backend endpoints in the same project
- Image optimization, font optimization, SEO metadata
- Edge runtime support

---

## 2. Create a Project

```bash
pnpm create next-app my-app
# Select: TypeScript ✓, ESLint ✓, Tailwind ✓, App Router ✓, src/ directory ✓
cd my-app
pnpm dev
```

---

## 3. App Router File System

Each folder inside `app/` becomes a route segment:

```
app/
├── layout.tsx          → Root layout (applies to all pages)
├── page.tsx            → Route: /
├── about/
│   └── page.tsx        → Route: /about
├── blog/
│   ├── layout.tsx      → Nested layout for /blog/*
│   ├── page.tsx        → Route: /blog
│   └── [slug]/
│       └── page.tsx    → Route: /blog/:slug
└── dashboard/
    ├── layout.tsx      → Dashboard layout
    ├── page.tsx        → Route: /dashboard
    └── settings/
        └── page.tsx    → Route: /dashboard/settings
```

### Special Files

| Filename | Purpose |
|----------|---------|
| `page.tsx` | Route's main UI |
| `layout.tsx` | Shared UI that wraps child routes |
| `loading.tsx` | Shown while page is loading (Suspense boundary) |
| `error.tsx` | Shown when the route throws an error |
| `not-found.tsx` | Shown when `notFound()` is called |
| `route.ts` | API endpoint (HTTP handlers) |
| `template.tsx` | Like layout but re-mounts on navigation |

---

## 4. Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My App',
  },
  description: 'A modern web application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

---

## 5. Page Components

```tsx
// app/page.tsx — Home page (/)
export default function HomePage() {
  return (
    <main>
      <h1>Welcome</h1>
    </main>
  )
}

// app/about/page.tsx
export const metadata = {
  title: 'About',
  description: 'Learn about us',
}

export default function AboutPage() {
  return <h1>About Us</h1>
}
```

---

## 6. Dynamic Routes

```tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()  // triggers not-found.tsx

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

// Generate static pages at build time
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}
```

---

## 7. Nested Layouts

```tsx
// app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
```

---

## 8. Loading UI

```tsx
// app/blog/loading.tsx — shown while page.tsx is loading
export default function BlogLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  )
}
```

---

## 9. Error Handling

```tsx
// app/blog/error.tsx — must be a Client Component
'use client'

import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  )
}
```

---

## 10. Navigation

```tsx
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Link (preferred — prefetches on hover)
<Link href="/about">About</Link>
<Link href={`/blog/${post.slug}`}>{post.title}</Link>

// Programmatic navigation (Client Component only)
'use client'
function SubmitForm() {
  const router = useRouter()

  async function handleSubmit() {
    await submitData()
    router.push('/success')
    router.replace('/login')  // no back history
    router.refresh()          // refresh server components
    router.back()             // go back
  }
}
```

---

## Summary

| Concept | File |
|---------|------|
| Route | `app/path/page.tsx` |
| Shared layout | `app/path/layout.tsx` |
| Loading state | `app/path/loading.tsx` |
| Error boundary | `app/path/error.tsx` |
| Dynamic segment | `app/path/[param]/page.tsx` |
| API route | `app/api/resource/route.ts` |
| Metadata | `export const metadata` or `generateMetadata()` |

---

## Next Lesson

`002 - Server and Client Components.md` — the fundamental split in Next.js App Router
