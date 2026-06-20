# 002 - Server and Client Components

## Section
Phase 8 — Next.js, SSR, SSG

## Learning Objectives

- Understand the Server/Client Component split
- Know which capabilities belong to each
- Compose them correctly (Server wraps Client, not vice versa)
- Fetch data in Server Components
- Use `use client` when needed

---

## 1. The Split

In Next.js App Router, components are **Server Components by default**.

| | Server Component | Client Component |
|---|---|---|
| Runs on | Server only | Browser (also SSR'd once) |
| Can use | `async/await`, `fetch`, DB, filesystem | Hooks, event handlers, browser APIs |
| Cannot use | Browser APIs, hooks, event handlers | Server-only APIs (DB, secret keys) |
| Bundle size | Zero — not sent to browser | Included in JS bundle |
| Directive | None (default) | `'use client'` at the top |

---

## 2. Server Components

```tsx
// app/blog/page.tsx — Server Component (default)
// No 'use client' needed

async function getBlogPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }  // revalidate every hour
  })
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default async function BlogPage() {
  const posts = await getBlogPosts()  // direct async in component

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
```

Benefits:
- Fetch happens on the server — no loading spinner
- Sensitive data (API keys, DB queries) never reaches the browser
- Zero JS overhead for the post list

---

## 3. Client Components

```tsx
// components/SearchBar.tsx
'use client'   // must be the first line

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}
```

Use Client Components when you need:
- `useState`, `useEffect`, or any other hook
- Click/change/submit event handlers
- `window`, `document`, `localStorage`
- `useRouter`, `usePathname`, `useSearchParams`
- Third-party libraries that use the above

---

## 4. Composition Pattern

Server Components can render Client Components as children.
Client Components **cannot** render Server Components directly — they can only accept them as `children`.

```tsx
// ✓ Server Component renders Client Component
// app/page.tsx (Server)
import InteractiveCounter from '@/components/InteractiveCounter'  // Client

export default function Page() {
  return (
    <div>
      <h1>Static heading from Server</h1>
      <InteractiveCounter />  {/* Client Component */}
    </div>
  )
}

// ✓ Pass Server Component as children to Client Component
// app/dashboard/page.tsx (Server)
import Modal from '@/components/Modal'  // Client
import UserDetails from '@/components/UserDetails'  // Server

export default function Page() {
  return (
    <Modal>
      <UserDetails />  {/* Server Component passed as children */}
    </Modal>
  )
}
```

---

## 5. Data Fetching Patterns

### Fetch in Layout (shared across child routes)

```tsx
// app/dashboard/layout.tsx
async function getUser() {
  const session = await getServerSession()
  return session?.user ?? null
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser()

  if (!user) redirect('/login')

  return (
    <div>
      <Header user={user} />
      {children}
    </div>
  )
}
```

### Parallel Data Fetching

```tsx
// app/dashboard/page.tsx
async function DashboardPage() {
  // Both fetch simultaneously — not sequential
  const [stats, recentActivity] = await Promise.all([
    fetch('/api/stats').then(r => r.json()),
    fetch('/api/activity').then(r => r.json()),
  ])

  return (
    <>
      <StatsGrid stats={stats} />
      <ActivityFeed items={recentActivity} />
    </>
  )
}
```

### Streaming with Suspense

```tsx
import { Suspense } from 'react'

async function SlowComponent() {
  await new Promise(r => setTimeout(r, 2000))
  return <div>Slow data loaded!</div>
}

export default function Page() {
  return (
    <div>
      <h1>Fast content renders immediately</h1>
      <Suspense fallback={<div>Loading slow part...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}
```

---

## 6. `use server` — Server Actions

Server Actions let you call server-side code directly from a Client Component form:

```tsx
// actions/user.ts
'use server'

import { revalidatePath } from 'next/cache'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string

  // Direct DB access — this runs on the server
  await db.users.create({ data: { name, email } })
  revalidatePath('/users')   // revalidate the users page cache
}
```

```tsx
// components/CreateUserForm.tsx
'use client'
import { createUser } from '@/actions/user'

export default function CreateUserForm() {
  return (
    <form action={createUser}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Create</button>
    </form>
  )
}
```

---

## 7. Decision Guide

```
Does this component need:
  - useState, useEffect, or other hooks?      → 'use client'
  - onClick, onChange, or any event handler?  → 'use client'
  - browser APIs (window, localStorage)?      → 'use client'
  - useRouter, usePathname, useSearchParams?  → 'use client'

Does this component:
  - Fetch data from DB or API?                → Server Component
  - Access environment variables (secrets)?   → Server Component
  - Render mostly static markup?              → Server Component (default)

Rule of thumb:
  Push 'use client' as far DOWN the tree as possible.
  Keep layouts and page skeletons as Server Components.
  Only the interactive parts need to be Client Components.
```

---

## Summary

| | Server | Client |
|---|---|---|
| Default? | Yes | No (`'use client'` required) |
| Hooks | ✗ | ✓ |
| async/await | ✓ | Only with custom hooks |
| fetch/DB | ✓ | Via API routes |
| Event handlers | ✗ | ✓ |
| JS bundle | 0 | Included |

---

## Next Lesson

`003 - SSR vs SSG vs CSR.md` — rendering strategies and caching in Next.js
