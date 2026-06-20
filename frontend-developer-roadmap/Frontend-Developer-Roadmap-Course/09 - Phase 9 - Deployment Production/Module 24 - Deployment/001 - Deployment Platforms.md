# 003 - Deployment: Vercel, Netlify, Cloudflare

## Section
Phase 11 — Performance and Deployment

## Learning Objectives

- Deploy a Next.js app to Vercel
- Deploy a Vite app to Netlify or Cloudflare Pages
- Set up environment variables in production
- Use preview deployments for feature branches
- Configure a custom domain

---

## 1. Vercel (Best for Next.js)

Vercel is built by the Next.js team. It handles everything: CDN, serverless functions, edge caching, preview URLs.

### Deploy via CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# From your project directory:
vercel

# Production deployment:
vercel --prod
```

### Deploy via GitHub (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel detects Next.js automatically
5. Click **Deploy**

Every `git push` to `main` triggers a production deployment.
Every PR creates a unique **preview URL** (e.g., `my-app-pr-42.vercel.app`).

### Environment Variables

```bash
# Local .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=postgresql://localhost:5432/mydb
JWT_SECRET=supersecret

# Set on Vercel dashboard:
# Settings → Environment Variables → Add
# Or via CLI:
vercel env add NEXT_PUBLIC_API_URL
vercel env add DATABASE_URL --environment production
```

**Rules:**
- `NEXT_PUBLIC_` prefix → exposed to browser (safe for API URLs, site name)
- No prefix → server-only (secrets, database URLs, API keys)
- Never commit `.env.local` to git (it's in `.gitignore` by default)

### vercel.json Configuration

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["sin1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/api/:path*", "destination": "https://mybackend.com/api/:path*" }
  ]
}
```

### Custom Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. Vercel → Settings → Domains → Add `yourdomain.com`
3. Copy the DNS records Vercel provides
4. In your domain registrar's DNS settings, add those records
5. Wait 5–30 minutes for propagation

---

## 2. Netlify (Best for Static Sites / Vite)

Netlify excels at static site hosting with great CI/CD and form handling.

### Deploy via CLI

```bash
pnpm add -g netlify-cli

# Build first
pnpm build

# Deploy preview
netlify deploy --dir=dist

# Deploy to production
netlify deploy --dir=dist --prod
```

### netlify.toml Configuration

```toml
[build]
  command = "pnpm build"
  publish = "dist"           # Vite output directory
  environment = { NODE_VERSION = "20" }

# SPA — redirect all routes to index.html
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# API proxy
[[redirects]]
  from = "/api/*"
  to = "https://mybackend.com/api/:splat"
  status = 200
  force = true

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

### Environment Variables

Netlify dashboard → Site Settings → Environment Variables → Add variable.

Or via CLI:
```bash
netlify env:set VITE_API_URL https://api.example.com
```

**Vite note**: public env variables must be prefixed with `VITE_`:
```typescript
// Usage in Vite project:
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 3. Cloudflare Pages (Fastest CDN)

Cloudflare Pages runs on Cloudflare's global network (300+ locations). Fastest for global users.

### Deploy via Dashboard

1. Push project to GitHub
2. Cloudflare Dashboard → **Pages** → **Create a project** → Connect to GitHub
3. Set build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist` (Vite) or `.next` (Next.js)
4. Set environment variables
5. Deploy

### wrangler.toml (for Cloudflare Workers)

```toml
name = "my-app"
compatibility_date = "2025-01-01"

[vars]
ENVIRONMENT = "production"
```

### Edge Functions with Cloudflare Workers

```typescript
// functions/api/data.ts
export async function onRequest(context) {
  const { request, env } = context

  const data = await fetch('https://api.example.com/data', {
    headers: { 'Authorization': `Bearer ${env.API_KEY}` }
  })

  return new Response(await data.text(), {
    headers: { 'Content-Type': 'application/json' }
  })
}
```

---

## 4. Choosing a Platform

| Platform | Best for | Free tier | SSR support |
|----------|---------|-----------|-------------|
| Vercel | Next.js, SSR/SSG | Generous (hobby) | First class |
| Netlify | Vite SPA, Hugo, Gatsby | Generous | Via functions |
| Cloudflare Pages | Static + edge functions | Unlimited requests | Via Workers |
| GitHub Pages | Pure static (portfolio) | Free | No |

**For this course:**
- Next.js projects → **Vercel**
- React/Vite projects → **Netlify** or **Cloudflare Pages**
- Portfolio HTML/CSS → **GitHub Pages**

---

## 5. GitHub Pages (for Portfolio)

Free hosting for static HTML/CSS/JS. Good for the Phase 2 portfolio project.

```bash
# Option 1: Deploy from /docs folder
# 1. GitHub repo Settings → Pages → Branch: main, folder: /docs
# 2. Put your HTML files in the /docs folder

# Option 2: Using gh-pages package
pnpm add -D gh-pages

# package.json
{
  "scripts": {
    "predeploy": "pnpm build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://username.github.io/repo-name"
}

pnpm run deploy
```

---

## 6. Preview Deployments

All three platforms create unique URLs for every PR/branch:

```
Main branch:     myapp.vercel.app  (production)
PR branch:       myapp-pr-15-khanh.vercel.app  (preview)
Feature branch:  myapp-feat-new-nav.vercel.app (preview)
```

**Workflow:**
1. Create feature branch, push to GitHub
2. Open PR → preview URL is posted automatically as a PR comment
3. Test the preview URL before merging
4. Merge to main → production deploys automatically

---

## 7. Deployment Checklist

- [ ] All environment variables set in the platform dashboard
- [ ] `.env.local` is in `.gitignore`
- [ ] Build succeeds locally (`pnpm build`) before deploying
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] SPA redirect rule configured (for Netlify/Cloudflare)
- [ ] Custom domain configured with HTTPS
- [ ] Security headers set (X-Frame-Options, X-Content-Type-Options)
- [ ] Static assets have long-lived cache headers
- [ ] Preview URL works and tested

---

## Summary

| Platform | Config file | Output dir | SPA redirect |
|----------|-------------|------------|--------------|
| Vercel | `vercel.json` | auto-detected | automatic |
| Netlify | `netlify.toml` | `dist` | `/* → /index.html 200` |
| Cloudflare | wrangler.toml | `dist` | in Pages settings |
| GitHub Pages | none | docs or root | no (static only) |

---

## Next Phase

Phase 12 — Advanced Frontend: Design Systems, Accessibility, PWA, GraphQL
