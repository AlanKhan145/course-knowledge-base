# Frontend Developer Roadmap

A comprehensive course from web fundamentals to advanced frontend development, following the roadmap.sh 2026 learning path. Structured into 11 stages and 33 modules — from the basics of how the internet works to building AI-integrated apps, PWAs, and native desktop/mobile apps.

## Learning Outcomes

By the end of this course you will be able to:

- Build frontend websites and apps using HTML, CSS, JavaScript, and TypeScript
- Create modern UIs with React and Tailwind CSS
- Build production-ready apps with Next.js (SSR, SSG, SEO)
- Use Git, GitHub, npm/pnpm, Vite, ESLint, and Prettier confidently
- Integrate and prompt AI tools effectively in your development workflow
- Write unit and end-to-end tests with Vitest and Playwright
- Understand auth, CORS, HTTPS, CSP, and OWASP security basics
- Use Web APIs: File API, IntersectionObserver, WebSocket, Service Workers
- Deploy to Vercel, Netlify, Cloudflare Pages, and GitHub Pages
- Optimize performance with Lighthouse, Core Web Vitals, caching, and image optimization
- Build advanced features: Web Components, GraphQL, accessible UIs, PWAs
- Extend into React Native, Electron/Tauri, and full design systems

## Course Structure

### Stage 1 — Web Foundation (Module 01)
**Module 01: Internet**
- How the internet works (client, server, IP, request/response)
- HTTP (methods, status codes, headers, cookies)
- Domain names, URL structure
- Hosting (static, dynamic, CDN, cloud)
- DNS and how domains resolve
- How browsers work (DOM, CSSOM, render tree, reflow, JS engine)
- *Project: "What happens when I enter google.com?"*

### Stage 2 — Core Frontend (Modules 02–04)
**Module 02: HTML**
- Document structure, text elements, semantic layout tags
- Links and navigation, images and media, lists and tables
- Forms and input validation
- Accessibility basics, SEO basics
- *Project: Single Page CV, Basic HTML Website, Personal Portfolio*

**Module 03: CSS**
- CSS basics, selectors, cascade/specificity/inheritance
- Box model, units (px/rem/em/vh/clamp), colors and typography
- Display and positioning (block/inline/position/z-index)
- Flexbox, CSS Grid, Responsive design (media queries, mobile-first)
- Transitions, animations, CSS architecture (BEM, utility classes)
- *Project: Responsive Portfolio, Image Grid, Tooltip UI, Testimonial Cards*

**Module 04: JavaScript**
- Variables, data types, operators, conditionals, loops
- Functions (declaration, expression, arrow), closures
- Arrays and objects, destructuring, spread/rest
- DOM manipulation, events, event delegation
- ES Modules (import/export)
- Async JavaScript (callbacks, Promises, async/await)
- Fetch API, browser storage (localStorage/sessionStorage)
- Debugging (DevTools, breakpoints, network tab)
- *Project: Tabs, Accordion, Todo App, Weather App*

### Stage 3 — Developer Tools (Modules 05–07)
**Module 05: Git**
- Repository, init, clone, status, add, commit, log
- Branching, merging, rebase basics, conflict resolution
- .gitignore, commit message conventions
- *Project: Push all HTML/CSS/JS projects to Git*

**Module 06: GitHub / GitLab**
- Create repo, push code, pull requests, code review, issues
- README, GitHub Pages, collaboration workflow
- *Project: Portfolio repo with README, deployed on GitHub Pages*

**Module 07: Package Managers**
- Node.js runtime basics, package.json, npm init
- Install/dev dependencies, scripts, semantic versioning
- npm vs pnpm vs yarn vs Bun
- *Project: Vite project setup with npm packages*

### Stage 4 — Framework & UI Ecosystem (Modules 08–09)
**Module 08: React**
- React mental model: component, props, state, render
- JSX syntax and rules
- State (useState), derived state, state lifting
- Events in React, useEffect with cleanup
- Component design (presentational vs container, reusable)
- React forms (controlled inputs, validation)
- Routing with React Router (nested, protected routes)
- Data fetching (Fetch API, TanStack Query)
- State management (Context, Zustand / Redux Toolkit)
- Performance (React.memo, useMemo, useCallback, lazy loading)
- *Project: React Todo App, Expense Tracker, Quiz App, Dashboard App*

**Module 09: Tailwind CSS**
- Utility-first CSS philosophy
- Tailwind config, spacing/typography/color system
- Responsive prefixes, hover/focus/dark mode variants
- Component extraction, Tailwind + React patterns
- *Project: Clone landing page with Tailwind*

### Stage 5 — AI in Development (Modules 10–14)
**Module 10: AI Basics**
- How LLMs work (tokens, context window, temperature)
- AI vs traditional coding
- AI applications in development (code review, refactoring, docs)

**Module 11: AI Assisted Coding**
- Explain, generate, refactor, and debug with AI
- Using AI safely (verify output, security risks, no blind copy-paste)

**Module 12: Prompting Techniques**
- Clear context prompts, role/constraint prompts
- Output format prompts, debug/test/refactor prompt templates

**Module 13: Agents, MCP, Skills**
- What AI agents are (LLM + tools + planning loop)
- MCP (Model Context Protocol) and how it connects AI to tools
- Frontend development workflows with agents

**Module 14: Implementing AI**
- Calling AI APIs (Anthropic SDK) from Node.js backend
- Streaming responses with SSE to React frontend
- Building a chat UI with conversation history
- *Project: AI Chat UI, AI Writing Assistant, AI Code Review UI*

### Stage 6 — Advanced Tooling (Modules 15–16)
**Module 15: Module Bundlers**
- What bundlers do (tree shaking, code splitting, source maps)
- Vite config (dev server, HMR, environment variables)
- Rollup, esbuild, SWC — what each is used for

**Module 16: Linters & Formatters**
- Prettier setup and config (.prettierrc)
- ESLint setup with React + hooks plugins
- Biome (linter + formatter in one, Rust-based)
- Auto-format on save, pre-commit hooks with Husky + lint-staged
- *Project: ESLint + Prettier/Biome setup for React project*

### Stage 7 — Intermediate Frontend (Modules 17–20)
**Module 17: Auth Strategies**
- Authentication vs Authorization
- Session-based auth, JWT, refresh tokens
- OAuth 2.0, OpenID Connect
- Frontend token storage (localStorage vs httpOnly cookies)
- Protected routes, role-based access
- *Project: Login/Register UI + protected dashboard*

**Module 18: Testing**
- Testing mindset (unit, integration, E2E, test pyramid)
- Unit testing with Vitest
- Testing React components with React Testing Library
- E2E testing with Playwright
- *Project: Test suite for Todo App and Auth Flow*

**Module 19: Web Security**
- HTTPS, Same-origin policy, CORS
- XSS, CSRF, Clickjacking
- CSP, secure cookies, Subresource Integrity
- OWASP Top 10 frontend-relevant risks, npm audit
- *Project: Security audit of a React app*

**Module 20: Web APIs**
- Fetch API (full), URL API, AbortController
- Storage API, History API
- File API, Drag and Drop, Clipboard API
- IntersectionObserver, ResizeObserver
- WebSocket basics, Service Worker API
- *Project: File uploader, Infinite scroll, Clipboard tool*

### Stage 8 — TypeScript, SSR, SSG (Modules 21–23)
**Module 21: TypeScript**
- Why TypeScript, basic types, type inference
- Interface, type alias, union types, discriminated unions
- Generics, utility types (Partial, Pick, Omit, Record…)
- Type narrowing, type guards
- TypeScript with React props and API responses
- *Project: Convert React Todo App from JS to TypeScript*

**Module 22: SSR — Server-Side Rendering**
- SSR vs CSR, hydration
- Next.js App Router: layout, loading, error pages
- Server Components and Client Components
- Data fetching server-side, middleware
- SEO with SSR (metadata API)
- *Project: Blog with SSR using Next.js*

**Module 23: SSG — Static Site Generation**
- SSG vs SSR, build-time rendering
- Astro basics (content collections, islands architecture)
- Next.js static generation (generateStaticParams, ISR)
- Deploying static sites
- *Project: Documentation website or personal blog*

### Stage 9 — Deployment & Production (Modules 24–26)
**Module 24: Deployment**
- Static deployment: GitHub Pages → Netlify → Vercel
- Cloudflare Pages, Render/Railway for backend apps
- Environment variables, preview deployments, custom domains
- CI/CD basics with GitHub Actions
- *Recommended order: GitHub Pages → Netlify → Vercel → Cloudflare → Render/Railway*

**Module 25: Performance**
- Core Web Vitals (LCP, INP, CLS) — thresholds and meaning
- Lighthouse audit, Chrome DevTools Performance tab
- Image optimization (WebP/AVIF, next/image, lazy loading)
- Code splitting, bundle analysis, removing unused code
- Caching strategies, Service Worker for repeat visits
- *Project: Optimize a landing page to Lighthouse 90+*

**Module 26: Design Systems**
- Design tokens (color, typography, spacing)
- Component library structure and API design
- Storybook for isolated component development
- Accessibility in components, versioning
- *Project: Mini design system with React + Tailwind + Storybook*

### Stage 10 — Advanced Frontend (Modules 27–30)
**Module 27: Web Components**
- Custom Elements API
- Shadow DOM and style encapsulation
- HTML Templates and Slots
- When to use Web Components vs React/Vue
- *Project: Custom `<ui-button>` and `<user-card>` components*

**Module 28: GraphQL**
- GraphQL vs REST, query and mutation syntax
- Apollo Client (useQuery, useMutation, cache)
- Relay Modern overview
- *Project: React app consuming a GraphQL API*

**Module 29: Accessibility**
- Semantic HTML, keyboard navigation, focus management
- ARIA roles, aria-label, aria-live regions
- Building accessible modal, menu, accordion
- WCAG 2.1 basics, automated + manual testing
- *Project: Accessible form UI and modal with full keyboard navigation*

**Module 30: PWAs**
- Web App Manifest (installable app)
- Service Worker, offline cache strategies (Workbox)
- Background sync, push notifications
- Lighthouse PWA audit
- *Project: Offline Notes App*

### Stage 11 — Career Extensions (Modules 31–33)
**Module 31: Mobile Apps**
- Mobile app architecture overview
- React Native basics (Expo, core components, navigation)
- Flutter and Ionic overview
- When to choose PWA vs native vs cross-platform

**Module 32: Desktop Apps**
- Electron basics (main/renderer process, IPC, preload)
- Tauri basics (Rust backend, smaller bundle, better performance)
- Packaging, code signing, auto-updater, security

**Module 33: Continue Learning**
- Recommended next tracks: Node.js, Fullstack, Backend, Design Systems, System Design Frontend, Advanced TypeScript, Web Performance

## Projects Built in This Course

| # | Project | Stage | Stack |
|---|---------|-------|-------|
| 1 | Single Page CV / Personal Portfolio | Stage 2 | HTML + CSS |
| 2 | Responsive Portfolio | Stage 2 | HTML + CSS |
| 3 | Todo App / Weather App | Stage 2 | Vanilla JS |
| 4 | Portfolio on GitHub Pages | Stage 3 | HTML + CSS + Git |
| 5 | React Dashboard App | Stage 4 | React + Tailwind |
| 6 | Landing Page Clone | Stage 4 | React + Tailwind |
| 7 | AI Chat UI | Stage 5 | React + Vite + Anthropic API |
| 8 | Login/Register + Protected Dashboard | Stage 7 | React + React Router |
| 9 | Tested Todo App + Auth Flow | Stage 7 | React + Vitest + Playwright |
| 10 | Blog with SSR | Stage 8 | Next.js |
| 11 | Documentation Website | Stage 8 | Astro or Next.js |
| 12 | Optimized Landing Page (90+ Lighthouse) | Stage 9 | React + Tailwind |
| 13 | Mini Design System | Stage 9 | React + Tailwind + Storybook |
| 14 | Offline Notes App (PWA) | Stage 10 | React + Workbox |

## Recommended Study Schedule (36 Weeks)

| Stage | Weeks | Content |
|-------|-------|---------|
| Stage 1 | 1–2 | Web Foundation: Internet, HTTP, DNS, Browsers |
| Stage 2 | 3–4 | HTML: Structure, Semantic, Forms, SEO |
| Stage 2 | 5–7 | CSS: Flexbox, Grid, Responsive, Animation |
| Stage 2 | 8–10 | JavaScript: Core, DOM, Events, Async, Fetch |
| Stage 3 | 11 | Dev Tools: Git, GitHub, npm/pnpm, Vite |
| Stage 4 | 12–16 | React: Hooks, Router, State, Forms, Performance |
| Stage 4 | 17 | Tailwind CSS |
| Stage 5 | 18–19 | AI in Development: All 5 modules |
| Stage 6 | 20 | Tooling: Bundlers, Linters, Formatters |
| Stage 7 | 21–23 | Intermediate: Auth, Testing, Security, Web APIs |
| Stage 8 | 24–26 | TypeScript, SSR with Next.js, SSG with Astro |
| Stage 9 | 27–29 | Deployment, Performance, Design Systems |
| Stage 10 | 30–33 | Advanced: Web Components, GraphQL, a11y, PWA |
| Stage 11 | 34–36 | Extensions: Mobile, Desktop, Career Planning |

## Recommended Stack for Job Applications

HTML · CSS · JavaScript · TypeScript · React · Tailwind CSS · Next.js · Git · npm/pnpm · Vite · ESLint · Vitest · Playwright · Vercel

## Folder Structure

```
Frontend-Developer-Roadmap-Course/
├── 01 - Phase 1 - Web Foundation/
│   └── Module 01 - Internet/
├── 02 - Phase 2 - Core Web Languages/
│   ├── Module 02 - HTML/
│   ├── Module 03 - CSS/
│   └── Module 04 - JavaScript/
├── 03 - Phase 3 - Developer Workflow/
│   ├── Module 05 - Git/
│   ├── Module 06 - GitHub GitLab/
│   └── Module 07 - Package Managers/
├── 04 - Phase 4 - Framework/
│   ├── Module 08 - React/
│   └── Module 09 - Tailwind CSS/
├── 05 - Phase 5 - AI in Development/
│   ├── Module 10 - AI Basics/
│   ├── Module 11 - AI Assisted Coding/
│   ├── Module 12 - Prompting Techniques/
│   ├── Module 13 - Agents MCP Skills/
│   └── Module 14 - Implementing AI/
├── 06 - Phase 6 - Build Tools/
│   ├── Module 15 - Module Bundlers/
│   └── Module 16 - Linters Formatters/
├── 07 - Phase 7 - Intermediate Frontend/
│   ├── Module 17 - Auth Strategies/
│   ├── Module 18 - Testing/
│   ├── Module 19 - Web Security/
│   └── Module 20 - Web APIs/
├── 08 - Phase 8 - Type Safety SSR SSG/
│   ├── Module 21 - TypeScript/
│   ├── Module 22 - SSR/
│   └── Module 23 - SSG/
├── 09 - Phase 9 - Deployment Production/
│   ├── Module 24 - Deployment/
│   ├── Module 25 - Performance/
│   └── Module 26 - Design Systems/
├── 10 - Phase 10 - Advanced Frontend/
│   ├── Module 27 - Web Components/
│   ├── Module 28 - GraphQL/
│   ├── Module 29 - Accessibility/
│   └── Module 30 - PWAs/
└── 11 - Phase 11 - Continue Learning Tracks/
    ├── Module 31 - Mobile Apps/
    ├── Module 32 - Desktop Apps/
    └── Module 33 - Continue Learning/
```

## File Types

- **`.md`** — Detailed lesson files: theory, code examples, practice exercises, project briefs, summary tables
