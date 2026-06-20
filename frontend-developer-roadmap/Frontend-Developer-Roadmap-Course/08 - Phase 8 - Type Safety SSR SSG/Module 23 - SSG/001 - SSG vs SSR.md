# 003 - SSR vs SSG vs CSR

## Section
Phase 8 — Next.js, SSR, SSG

## Learning Objectives

- Understand CSR, SSR, and SSG and their tradeoffs
- Control caching with Next.js fetch options
- Know when to use each rendering strategy
- Use ISR (Incremental Static Regeneration) for revalidating static pages

---

## 1. Three Rendering Strategies

### CSR — Client-Side Rendering

HTML is a bare shell; JavaScript fetches and renders content in the browser.

```
Request → Server sends empty <html> + bundle.js → Browser runs JS → Fetch data → Render UI
```

- Fast server response (just static files)
- Slow Time to First Contentful Paint
- Poor SEO (crawlers see empty HTML)
- Example: dashboards, logged-in areas

### SSR — Server-Side Rendering

HTML is fully rendered on the server per request.

```
Request → Server fetches data → Server renders HTML → Browser receives full HTML → Hydrate
```

- HTML ready on arrival → fast FCP
- Good SEO
- Each request hits the server → can be slow under load
- Example: product pages that change frequently

### SSG — Static Site Generation

HTML rendered at build time, cached on CDN.

```
Build time: Fetch data → Render all pages → Output HTML files
Request: CDN serves pre-built HTML instantly
```

- Fastest possible response (CDN)
- Best SEO
- Content can become stale
- Example: blog posts, documentation, marketing pages

---

## 2. Controlling Rendering in Next.js

Next.js uses `fetch` cache options to decide rendering strategy:

```tsx
// app/products/page.tsx

// SSG — cached forever (default for static routes)
const res = await fetch('/api/products', {
  cache: 'force-cache'
})

// SSR — no cache, fresh data on every request
const res = await fetch('/api/products', {
  cache: 'no-store'
})

// ISR — revalidate every 60 seconds
const res = await fetch('/api/products', {
  next: { revalidate: 60 }
})

// Tag-based revalidation — revalidate when content changes
const res = await fetch('/api/products', {
  next: { tags: ['products'] }
})
```

### Route Segment Config

```typescript
// Override at the route level
export const dynamic = 'force-static'    // always SSG
export const dynamic = 'force-dynamic'   // always SSR (no cache)
export const revalidate = 3600          // ISR: revalidate every hour
```

---

## 3. ISR — Incremental Static Regeneration

The best of both worlds — static speed + fresh content.

```tsx
// app/blog/[slug]/page.tsx
export const revalidate = 3600   // revalidate at most every hour

async function getPost(slug: string) {
  const res = await fetch(`https://api.example.com/posts/${slug}`)
  if (!res.ok) notFound()
  return res.json()
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  )
}

// Pre-render the most popular posts at build time
export async function generateStaticParams() {
  const posts = await fetch('/api/posts/popular').then(r => r.json())
  return posts.map((post: { slug: string }) => ({ slug: post.slug }))
}
```

On-demand revalidation (when content is updated in a CMS):

```typescript
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const { tag, secret } = await request.json()

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 })
  }

  revalidateTag(tag)
  return Response.json({ revalidated: true })
}
```

---

## 4. Choosing a Strategy

| Page Type | Strategy | Reason |
|-----------|----------|--------|
| Blog posts | SSG + ISR | Mostly static, update occasionally |
| Product listing | ISR (60s) | Updates frequently but not real-time |
| Product detail | ISR (5min) or SSR | Price/stock changes |
| Search results | SSR | Unique per request |
| Dashboard | SSR or CSR | Personalized, behind auth |
| Marketing/landing | SSG | Never changes, needs max speed |
| Documentation | SSG | Deployed rarely |
| Chat / real-time | CSR | Must be live |

---

## 5. API Routes

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page') ?? '1')

  const users = await db.users.findMany({
    skip: (page - 1) * 10,
    take: 10,
  })

  return NextResponse.json({ users, page })
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const user = await db.users.create({ data: body })

  return NextResponse.json(user, { status: 201 })
}

// app/api/users/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const user = await db.users.findUnique({ where: { id: Number(id) } })

  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(user)
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const user = await db.users.update({ where: { id: Number(id) }, data: body })
  return NextResponse.json(user)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await db.users.delete({ where: { id: Number(id) } })
  return new Response(null, { status: 204 })
}
```

---

## Summary

| Strategy | When | Next.js |
|----------|------|---------|
| SSG | Static content, build-time data | Default for Server Components |
| ISR | Mostly static, periodic updates | `next: { revalidate: N }` |
| SSR | Per-request personalized data | `cache: 'no-store'` or `dynamic = 'force-dynamic'` |
| CSR | Real-time, interactive, auth-gated | `'use client'` + `useEffect` fetch |

---

## Next Lesson

`004 - SEO and Metadata.md` — title, description, Open Graph, JSON-LD, sitemap
