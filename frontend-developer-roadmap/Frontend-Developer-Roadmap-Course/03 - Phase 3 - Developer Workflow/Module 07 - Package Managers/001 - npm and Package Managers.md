# 003 - Package Manager with pnpm

## Section
Phase 5 — Git and Tooling

## Learning Objectives

- Understand what a package manager does
- Use pnpm to install and manage dependencies
- Understand `package.json`, `node_modules`, and lock files
- Write useful npm scripts
- Understand semantic versioning

---

## 1. What Is a Package Manager?

A package manager automates downloading, installing, and managing third-party libraries (packages) your project depends on.

Without it, you'd manually download every library, manage versions, and track what everything depends on.

**pnpm** is the recommended choice because it:
- Is significantly faster than npm
- Uses a content-addressable store (saves disk space — packages are shared across projects)
- Has strict module resolution (prevents phantom dependencies)

---

## 2. Install pnpm

```bash
# Via npm (if Node.js is installed)
npm install -g pnpm

# Verify
pnpm --version
```

---

## 3. Essential pnpm Commands

```bash
# Initialize a new package.json
pnpm init

# Install all dependencies from package.json
pnpm install
pnpm i     # shorthand

# Add a dependency
pnpm add react react-dom

# Add a dev dependency
pnpm add -D typescript @types/react vite

# Add a global package
pnpm add -g vercel

# Remove a package
pnpm remove axios

# Update packages
pnpm update
pnpm update react

# Check for outdated packages
pnpm outdated

# Run a script
pnpm dev
pnpm build
pnpm test
pnpm run custom-script   # for scripts with non-standard names

# List installed packages
pnpm list
pnpm list --depth=0   # top-level only
```

---

## 4. `package.json`

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A React + TypeScript dashboard",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier --write src/**/*.{ts,tsx,css}"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^6.0.0",
    "vitest": "^3.0.0"
  },
  "engines": {
    "node": ">=20",
    "pnpm": ">=9"
  }
}
```

### `dependencies` vs `devDependencies`

| | `dependencies` | `devDependencies` |
|---|---|---|
| What | Code needed to run the app | Code needed to build/test |
| Examples | react, tailwindcss | typescript, vite, vitest, eslint |
| Included in production build? | Yes | No |
| Install flag | `pnpm add` | `pnpm add -D` |

---

## 5. Semantic Versioning (SemVer)

Package versions follow the format `MAJOR.MINOR.PATCH`:

```
react@19.1.2
        │ │ └── PATCH — bug fix, no breaking changes
        │ └──── MINOR — new features, no breaking changes
        └────── MAJOR — breaking changes
```

### Version Ranges in package.json

```json
"react": "19.1.2"    // exact version
"react": "^19.1.2"   // compatible: >=19.1.2 <20.0.0 (most common)
"react": "~19.1.2"   // patch updates only: >=19.1.2 <19.2.0
"react": "*"         // any version (avoid — unpredictable)
"react": ">=19.0.0"  // minimum version
```

---

## 6. Lock File

`pnpm-lock.yaml` records the **exact** version of every installed package (including transitive dependencies).

- **Commit it to Git** — ensures everyone on the team gets the same versions
- **Never edit it manually**
- When you run `pnpm install`, pnpm uses the lock file

---

## 7. `node_modules`

- Add `node_modules/` to `.gitignore` — never commit it
- Recreate anytime with `pnpm install`
- pnpm stores packages in a global content-addressable store (`~/.pnpm-store`) and hard-links them into `node_modules` — much faster than npm/yarn on re-installs

---

## 8. Scripts

Scripts in `package.json` run via `pnpm <script-name>`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc --noEmit && vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage",
  "test:e2e": "playwright test",
  "lint": "eslint src",
  "lint:fix": "eslint src --fix",
  "format": "prettier --write .",
  "typecheck": "tsc --noEmit",
  "clean": "rimraf dist .next"
}
```

**Pre/post hooks** — run automatically before/after a script:

```json
"prebuild": "pnpm lint && pnpm typecheck",
"build": "vite build",
"postbuild": "echo Build complete"
```

---

## Practice Exercises

### Exercise 1: Init a Project

```bash
mkdir tooling-practice && cd tooling-practice
pnpm init
pnpm add -D vite
pnpm add date-fns

# Add scripts to package.json:
# "dev": "vite",
# "build": "vite build"

# Create index.html and main.js
pnpm dev
```

### Exercise 2: Explore package.json

```bash
# Install a project from GitHub that uses npm
# Convert it to pnpm:
rm package-lock.json   # or yarn.lock
pnpm import            # converts existing lockfile
pnpm install
```

---

## Summary

| Command | Action |
|---------|--------|
| `pnpm install` | Install all deps from package.json |
| `pnpm add <pkg>` | Add a runtime dependency |
| `pnpm add -D <pkg>` | Add a dev dependency |
| `pnpm remove <pkg>` | Remove a package |
| `pnpm dev` | Run `dev` script |
| `pnpm build` | Run `build` script |
| `^version` | Allow minor and patch updates |
| `pnpm-lock.yaml` | Commit this, never edit manually |
| `node_modules/` | Always gitignored |

---

## Next Lesson

`004 - Vite.md` — create project, dev server, build, env variables, plugins
