# 002 - GitHub and Pull Request Workflow

## Section
Phase 5 — Git and Tooling

## Learning Objectives

- Connect a local repo to a remote on GitHub
- Push and pull code
- Open and review a Pull Request (PR)
- Write a useful PR description and README

---

## 1. Connecting to GitHub

```bash
# Add a remote (after creating repo on GitHub)
git remote add origin https://github.com/yourusername/repo-name.git

# Verify remote
git remote -v

# First push — sets upstream tracking
git push -u origin main

# Subsequent pushes
git push

# Pull latest changes
git pull

# Fetch without merging (inspect before applying)
git fetch origin
git diff main origin/main
git merge origin/main
```

---

## 2. Clone an Existing Repo

```bash
git clone https://github.com/username/repo.git
git clone https://github.com/username/repo.git my-local-name
```

---

## 3. Feature Branch Workflow

The standard workflow for professional teams:

```bash
# 1. Always start from a fresh main
git switch main
git pull

# 2. Create feature branch
git switch -c feature/add-dark-mode

# 3. Make changes and commit
git add .
git commit -m "feat: add dark mode CSS variables"
git commit -m "feat: add toggle button to header"

# 4. Push feature branch to GitHub
git push -u origin feature/add-dark-mode

# 5. Open a Pull Request on GitHub

# 6. After PR is merged, clean up
git switch main
git pull
git branch -d feature/add-dark-mode
git push origin --delete feature/add-dark-mode
```

---

## 4. Pull Requests

A Pull Request (PR) is a request to merge your branch into the main branch. It's where code review happens.

### Good PR Description Template

```markdown
## What does this PR do?

Adds a dark mode toggle button to the header. 
Users can switch between light and dark themes; 
preference is saved to localStorage.

## Changes

- Add CSS custom properties for dark theme in `styles.css`
- Add toggle button component in `header.js`
- Add localStorage persistence in `theme.js`

## Screenshots

| Light Mode | Dark Mode |
|-----------|-----------|
| [screenshot] | [screenshot] |

## Testing

- [x] Toggle works on desktop
- [x] Toggle works on mobile
- [x] Theme persists after page refresh
- [x] No console errors
```

### Reviewing a PR

When reviewing someone else's PR, look for:
- Does it do what the description says?
- Are there any obvious bugs?
- Is the code readable?
- Are there any performance concerns?
- Are edge cases handled?

Leave specific, actionable comments — not just "this is bad".

---

## 5. `.gitignore`

Files and folders Git should not track:

```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/
.next/

# Environment variables — NEVER commit these
.env
.env.local
.env.production

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log
npm-debug.log*
```

Create before first commit:

```bash
touch .gitignore
# Or copy from gitignore.io for your stack
```

---

## 6. Writing a Professional README

```markdown
# Project Name

Brief one-line description.

## Live Demo

[https://your-project.vercel.app](link)

## Screenshots

[Add image here]

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
git clone https://github.com/yourusername/project.git
cd project
pnpm install
pnpm dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm test` | Run unit tests |
| `pnpm lint` | Lint code |

## What I Learned

- Lesson 1
- Lesson 2

## Future Improvements

- Improvement 1
- Improvement 2
```

---

## 7. GitHub Profile README

Create a repo named exactly `yourusername/yourusername` — GitHub displays its README on your profile page.

```markdown
# Hi, I'm Nguyen Van A 👋

Frontend Developer building modern, accessible web apps.

## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

## Featured Projects

- [Expense Tracker](link) — Vanilla JS app with localStorage
- [React Dashboard](link) — React + Tailwind + mock API
- [E-commerce Frontend](link) — Next.js + TypeScript

## Contact

[![LinkedIn](link)](linkedin)
[![Email](link)](mailto)
```

---

## Summary

| Command | Purpose |
|---------|---------|
| `git remote add origin <url>` | Connect to GitHub |
| `git push -u origin main` | First push, set upstream |
| `git push` | Push current branch |
| `git pull` | Fetch and merge from remote |
| `git clone <url>` | Copy a remote repo locally |
| `.gitignore` | Exclude files from tracking |

---

## Next Lesson

`003 - Package Manager with pnpm.md` — package.json, dependencies, scripts, versioning
