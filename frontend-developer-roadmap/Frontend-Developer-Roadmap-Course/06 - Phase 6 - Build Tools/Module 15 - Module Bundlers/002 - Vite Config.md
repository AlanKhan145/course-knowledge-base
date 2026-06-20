# 004 - Vite

## Section
Phase 5 — Git and Tooling

## Learning Objectives

- Create a React + TypeScript project with Vite
- Use the dev server with HMR
- Build for production
- Use environment variables
- Understand what a bundler does

---

## 1. What Is a Bundler?

Your browser cannot natively understand:
- TypeScript (`*.ts`, `*.tsx`)
- CSS Modules
- JSX (`<Component />`)
- `import` statements from `node_modules`

A bundler (Vite uses Rollup under the hood) compiles and bundles all your source files into optimized HTML, CSS, and JS that browsers understand.

**Vite** is the recommended bundler because it:
- Uses native ES modules for ultra-fast dev server (no bundling during dev)
- Has Hot Module Replacement (HMR) — changes appear instantly without full reload
- Produces an optimized production build with Rollup
- Has a great plugin ecosystem

---

## 2. Create a Project

```bash
# Create React + TypeScript project
pnpm create vite my-app --template react-ts
cd my-app
pnpm install
pnpm dev
```

Available templates: `vanilla`, `vanilla-ts`, `react`, `react-ts`, `react-swc`, `react-swc-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`, `solid`, `solid-ts`, `vue`, `vue-ts`

---

## 3. Project Structure

```
my-app/
├── public/              # Static assets — copied as-is to dist/
│   └── vite.svg
├── src/
│   ├── assets/          # Imported assets (processed by Vite)
│   │   └── react.svg
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx         # Entry point
├── index.html           # Root HTML (Vite starts here, not /src)
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── package.json
```

---

## 4. Dev Server

```bash
pnpm dev
# → Local:   http://localhost:5173/
# → Network: http://192.168.x.x:5173/
```

Features:
- **Hot Module Replacement (HMR)** — React components update without full page reload, preserving state
- **Instant server start** — no bundling needed for dev
- **TypeScript transpilation** — syntax checking via `tsc`, fast transpilation via esbuild

---

## 5. Production Build

```bash
pnpm build
# Outputs to dist/

pnpm preview
# Serves the dist/ folder locally to test the production build
```

The `dist/` folder contains:
- `index.html` — with hashed asset references
- `assets/index-abc123.js` — bundled and minified JS
- `assets/index-def456.css` — extracted and minified CSS
- All static assets with content hashes (for cache busting)

---

## 6. `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // import from '@/components/Button'
    },
  },

  server: {
    port: 3000,
    open: true,           // open browser on start
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: true,       // generate source maps for debugging
    minify: 'esbuild',
    target: 'esnext',
  },
})
```

---

## 7. Environment Variables

Vite uses `.env` files:

```bash
.env                # loaded always
.env.local          # loaded always, gitignored
.env.development    # loaded in dev only
.env.production     # loaded in production only
.env.test           # loaded during tests
```

```env
# .env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App

# Non-VITE_ prefix variables are NOT exposed to the browser
SECRET_KEY=abc123    # only available in Node.js config files, not in src/
```

**Important**: Only variables prefixed with `VITE_` are exposed to your client code.

```typescript
// Access in your code
const apiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV      // boolean
const isProd = import.meta.env.PROD    // boolean
const mode = import.meta.env.MODE      // 'development' | 'production'
```

```typescript
// TypeScript: add types for your env variables
// src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## 8. Path Aliases

```typescript
// vite.config.ts — set up alias
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}

// tsconfig.json — tell TypeScript about the alias
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

```typescript
// Usage — instead of:
import { Button } from '../../../components/ui/Button'

// You can write:
import { Button } from '@/components/ui/Button'
```

---

## 9. Importing Assets

```typescript
// Import image (returns URL string)
import logo from '@/assets/logo.svg'
// <img src={logo} alt="Logo" />

// Import CSS
import '@/styles/globals.css'

// Import JSON
import data from '@/data/products.json'

// Raw file content (as string)
import svgContent from '@/assets/icon.svg?raw'

// URL only (without bundling)
import iconUrl from '@/assets/icon.png?url'
```

---

## Practice Exercises

### Exercise 1: Scaffold and Explore

```bash
pnpm create vite demo --template react-ts
cd demo && pnpm install && pnpm dev
```

Then:
1. Add path alias `@` pointing to `src/`
2. Create `src/components/Button.tsx` and import it in `App.tsx` using the alias
3. Add a `VITE_APP_TITLE` env variable and display it in the app
4. Run `pnpm build` and inspect the `dist/` folder

### Exercise 2: API Proxy

Add a proxy rule so that `fetch('/api/users')` in development proxies to `http://localhost:3001/users`:

```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
},
```

---

## Summary

| Command | Action |
|---------|--------|
| `pnpm create vite` | Scaffold a new project |
| `pnpm dev` | Start HMR dev server |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Serve `dist/` locally |
| `import.meta.env.VITE_*` | Access env variables in code |
| `.env.local` | Local overrides (gitignored) |
| `vite.config.ts` | Configure server, aliases, plugins, build |

---

## Next Phase

Phase 6 — React + Tailwind CSS: components, hooks, routing, state management
