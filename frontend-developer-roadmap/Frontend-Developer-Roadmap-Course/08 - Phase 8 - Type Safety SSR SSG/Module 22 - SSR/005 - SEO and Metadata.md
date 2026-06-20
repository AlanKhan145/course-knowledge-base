# 004 - SEO and Metadata

## Section
Phase 8 — Next.js, SSR, SSG

## Learning Objectives

- Set static and dynamic metadata in Next.js
- Add Open Graph and Twitter Card tags
- Generate a sitemap and robots.txt
- Add structured data (JSON-LD) for rich search results
- Optimize images for SEO

---

## 1. Static Metadata

```tsx
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our team and mission.',
  keywords: ['frontend', 'developer', 'portfolio'],
  authors: [{ name: 'Nguyen Van A', url: 'https://example.com' }],
  canonical: 'https://example.com/about',

  openGraph: {
    title: 'About Us | My Portfolio',
    description: 'Learn about our team and mission.',
    url: 'https://example.com/about',
    siteName: 'My Portfolio',
    images: [
      {
        url: 'https://example.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About page Open Graph image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us | My Portfolio',
    description: 'Learn about our team.',
    images: ['https://example.com/og-about.jpg'],
    creator: '@yourtwitterhandle',
  },
}

export default function AboutPage() {
  return <h1>About Us</h1>
}
```

---

## 2. Dynamic Metadata

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  }
}
```

---

## 3. Title Template

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | My Portfolio',
    default: 'My Portfolio — Frontend Developer',
  },
  description: 'Portfolio of Nguyen Van A, a frontend developer.',
}

// Any page that sets title: 'About' will render: "About | My Portfolio"
// Pages that don't set a title get: "My Portfolio — Frontend Developer"
```

---

## 4. Sitemap

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const postEntries = posts.map(post => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://example.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...postEntries,
  ]
}
```

---

## 5. Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/api/', '/admin/'],
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```

---

## 6. Structured Data (JSON-LD)

Rich snippets in Google Search — star ratings, breadcrumbs, FAQs, etc.

```tsx
// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.profileUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'My Blog',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://example.com/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
      </article>
    </>
  )
}
```

---

## 7. Image Optimization

```tsx
import Image from 'next/image'

// Optimized image — Next.js auto-converts to WebP, resizes, lazy-loads
<Image
  src="/hero.jpg"
  alt="Hero image description"
  width={1200}
  height={600}
  priority    // LCP image — load eagerly
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Fill parent container
<div className="relative w-full h-64">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover"
    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
  />
</div>
```

**Always include `sizes`** when using `fill` or responsive images. It tells Next.js what size to generate.

---

## SEO Checklist

- [ ] Unique `<title>` for every page (50–60 chars)
- [ ] `<meta name="description">` for every page (150–160 chars)
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Canonical URL set
- [ ] `sitemap.xml` generated and submitted to Google Search Console
- [ ] `robots.txt` configured
- [ ] All images have descriptive `alt` text
- [ ] Heading hierarchy: one `<h1>` per page
- [ ] HTTPS enabled
- [ ] Core Web Vitals passing (Lighthouse > 90)
- [ ] No broken links

---

## Summary

| Feature | API |
|---------|-----|
| Static metadata | `export const metadata: Metadata` |
| Dynamic metadata | `export async function generateMetadata()` |
| Title template | `title: { template: '%s \| Site', default: '...' }` |
| Sitemap | `app/sitemap.ts` |
| Robots.txt | `app/robots.ts` |
| Structured data | `<script type="application/ld+json">` |
| Optimized images | `<Image>` from `next/image` |

---

## Next Lesson

`005 - Project - E-commerce Frontend.md` — full Next.js app with SSG, SSR, SEO, and Vercel deployment
