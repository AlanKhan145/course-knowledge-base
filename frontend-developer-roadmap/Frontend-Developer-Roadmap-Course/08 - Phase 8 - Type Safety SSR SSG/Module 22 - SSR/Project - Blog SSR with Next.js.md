# 005 - Project: E-commerce Frontend

## Section
Phase 8 — Next.js, SSR, SSG

## Project Overview

Build a production-ready e-commerce frontend — **Project 5** in your portfolio. Deployed to Vercel with proper SEO.

---

## Skills Demonstrated

- Next.js App Router
- Server and Client Components
- SSG for product pages
- ISR for product listing
- SEO metadata + Open Graph
- `next/image` optimization
- Zustand cart (Client)
- Vercel deployment

---

## Features

- Home page with hero, featured products, categories
- Product listing with filters and pagination
- Product detail page (SSG + ISR)
- Cart (Zustand, persisted)
- Checkout UI (form only, no real payment)
- Search with debounce
- Responsive layout
- SEO on all pages

---

## File Structure

```
ecommerce-frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                   → Home
│   ├── products/
│   │   ├── page.tsx               → Product listing (ISR)
│   │   └── [slug]/
│   │       └── page.tsx           → Product detail (SSG + ISR)
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── CartDrawer.tsx
│   ├── AddToCartButton.tsx        → 'use client'
│   └── SearchBar.tsx              → 'use client'
├── stores/
│   └── useCartStore.ts
└── lib/
    └── api.ts
```

---

## Key Implementation

### Product Listing (ISR)

```tsx
// app/products/page.tsx
import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductGrid from '@/components/ProductGrid'
import ProductFilters from '@/components/ProductFilters'

export const revalidate = 300  // ISR every 5 minutes

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full product catalog.',
}

interface SearchParams {
  category?: string
  sort?: string
  page?: string
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const { category, sort = 'featured', page = '1' } = await searchParams

  const products = await fetch(
    `https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`,
    { next: { revalidate: 300 } }
  ).then(r => r.json())

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 shrink-0">
          <ProductFilters currentCategory={category} />
        </aside>
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
```

### Product Detail (SSG)

```tsx
// app/products/[slug]/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = await fetch('https://fakestoreapi.com/products').then(r => r.json())
  return products.map((p: { id: number }) => ({ slug: String(p.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await fetch(`https://fakestoreapi.com/products/${slug}`).then(r => r.json())

  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: [product.image],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = await fetch(
    `https://fakestoreapi.com/products/${slug}`,
    { next: { revalidate: 3600 } }
  ).then(r => r.json())

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase mb-2">{product.category}</p>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Client Component for cart interaction */}
            <AddToCartButton product={product} />
          </div>
        </div>
      </main>
    </>
  )
}
```

### Cart Store

```typescript
// stores/useCartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  qty: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Omit<CartItem, 'qty'>) => void
  removeItem: (id: number) => void
  updateQty: (id: number, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: () => number
  itemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product) => set(state => {
        const existing = state.items.find(i => i.id === product.id)
        const items = existing
          ? state.items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
          : [...state.items, { ...product, qty: 1 }]
        return { items, isOpen: true }
      }),

      removeItem: (id) => set(state => ({
        items: state.items.filter(i => i.id !== id)
      })),

      updateQty: (id, qty) => set(state => ({
        items: qty > 0
          ? state.items.map(i => i.id === id ? { ...i, qty } : i)
          : state.items.filter(i => i.id !== id)
      })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
      itemCount: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),
    { name: 'cart', skipHydration: true }
  )
)
```

---

## Deployment to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy (from project root)
vercel

# Subsequent deployments
vercel --prod

# Or connect GitHub repo to Vercel dashboard for automatic deployments
```

Environment variables on Vercel:
- Dashboard → Project → Settings → Environment Variables
- Add `NEXT_PUBLIC_*` for client-side vars

---

## Checklist

- [ ] Home page with featured products
- [ ] Product listing with category filter
- [ ] Product detail with JSON-LD structured data
- [ ] SEO metadata on all pages
- [ ] Open Graph images set
- [ ] sitemap.xml and robots.txt
- [ ] Cart works and persists across refresh
- [ ] `next/image` used for all product images
- [ ] Responsive on all breakpoints
- [ ] Lighthouse Performance > 90 on product detail page
- [ ] Deployed to Vercel with live URL

---

## Next Phase

Phase 9 — Auth and Security: JWT, sessions, CORS, XSS, CSRF, OWASP
