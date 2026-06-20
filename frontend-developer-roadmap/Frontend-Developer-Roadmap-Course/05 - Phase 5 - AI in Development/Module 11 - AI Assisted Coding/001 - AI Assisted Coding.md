# 001 - AI Assisted Coding

## Section
Phase 13 — AI Assisted Development

## Learning Objectives

- Understand what AI coding tools do and how they work
- Set up and use Claude Code, Cursor, and GitHub Copilot effectively
- Know when AI accelerates your work vs. when to code manually
- Avoid common pitfalls: blind trust, security leaks, over-reliance
- Integrate AI into a professional development workflow

---

## 1. The AI Coding Landscape

AI coding tools in 2025 fall into a few categories:

| Tool | Type | Best for |
|------|------|---------|
| **Claude Code** (Anthropic) | CLI agent | Full-context codebase tasks, file editing, git |
| **Cursor** | IDE (VS Code fork) | In-editor AI with codebase awareness |
| **GitHub Copilot** | IDE extension | Inline autocomplete, chat |
| **Windsurf** | IDE | Agentic coding with Cascade |
| **Claude.ai / ChatGPT** | Chat | Architecture questions, explaining code |

These tools don't replace knowledge — they amplify it. A developer who understands React will get 10x more out of these tools than someone who doesn't.

---

## 2. Claude Code

Claude Code is Anthropic's CLI agent. It reads your entire codebase and can make multi-file changes, run commands, and commit code.

### Setup

```bash
# Install Claude Code
npm install -g @anthropic/claude-code

# Authenticate
claude auth login

# Start a session in your project
cd my-project
claude
```

### What It Can Do

```bash
# Ask questions about your codebase
> What does the useAuthStore hook do?

# Make targeted changes
> Add a loading spinner to the UserTable component

# Create entire features
> Create a NotificationCenter component that shows a badge count
> and a dropdown list of notifications from /api/notifications

# Debug
> The form isn't submitting — what's wrong?

# Refactor
> Refactor all fetch calls to use the apiClient utility function

# Write tests
> Add unit tests for the formatCurrency utility function
```

### CLAUDE.md — Project Instructions

Claude Code reads a `CLAUDE.md` file in your project root as context for every session:

```markdown
# CLAUDE.md

## Project Overview
Admin dashboard built with Next.js 15 App Router, TypeScript, Tailwind CSS.

## Dev Commands
- `pnpm dev` — start dev server on :3000
- `pnpm build` — production build
- `pnpm test:run` — run unit tests
- `pnpm test:e2e` — run Playwright tests
- `pnpm typecheck` — TypeScript check

## Conventions
- Components: PascalCase in `src/components/`
- Hooks: camelCase starting with `use` in `src/hooks/`
- Types: PascalCase in `src/types/`
- Always use TypeScript; never use `any`
- Form state via react-hook-form, not useState
- Global state via Zustand stores in `src/stores/`

## Do Not
- Never modify `src/generated/` files (auto-generated from GraphQL)
- Never commit `.env.local`
- Never use `var` or `any`
```

### Effective Patterns

```bash
# Be specific — include file names and context
> The Button component in src/components/ui/Button.tsx needs a new
> "loading" variant that shows a spinner and disables the button.
> Follow the existing CVA pattern already used.

# Reference existing patterns
> Add form validation to the ProductForm component following the
> same pattern as UserForm in src/components/UserForm.tsx

# Ask for explanation before a risky change
> Before editing the auth middleware, explain how it currently works

# Iterative — break big tasks into steps
> Step 1: First show me the current file structure of src/features/users/
> Step 2: Then we'll add the delete confirmation modal
```

---

## 3. GitHub Copilot

Copilot lives inside VS Code and provides:

1. **Ghost text** — inline completions as you type
2. **Copilot Chat** — ask questions about code
3. **Inline edit** — select code and edit with a prompt

### Setup

```bash
# VS Code extension: search "GitHub Copilot" and install
# Sign in with your GitHub account
```

### Effective Use of Copilot

```typescript
// Write a descriptive comment — Copilot completes the function
// Sort users by role priority: admin > editor > viewer, then by name alphabetically
function sortUsers(users: User[]): User[] {
  // Copilot will write the implementation
}

// Name variables descriptively for better suggestions
const filteredAndSortedProductsByCategory = ...

// Write the first parameter to get accurate type suggestions
const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  // Copilot suggests e.preventDefault() etc.
}
```

### Copilot Chat Prompts

```
/explain  — explain the selected code
/fix      — fix a bug in the selection
/tests    — generate tests for the selection
/doc      — generate JSDoc for the selection

Examples:
> /explain  ← with useCallback selected
> /fix — TypeError: Cannot read properties of undefined
> /tests — generate Vitest tests for this hook
```

---

## 4. Cursor

Cursor is a VS Code fork with deeper AI integration.

### Key Features

- **Cmd+K** (or Ctrl+K): Edit selected code inline
- **Cmd+L**: Chat with your codebase
- **Composer**: Multi-file agent (similar to Claude Code)
- **@ mentions**: Reference specific files/symbols in chat

### Effective Use

```
# In Composer (multi-file agent):
@UserTable.tsx @useUsers.ts
Add pagination to the user table. 
Use the existing Pagination component from @Pagination.tsx.
The API accepts ?page=N&limit=20.

# In chat:
@codebase — search across the whole project
@UserStore.ts — reference a specific file
@tailwind.config.ts — why isn't the dark mode working?
```

---

## 5. When to Use AI vs. Write Manually

### AI Accelerates:
- Boilerplate code (component scaffolding, test setup)
- Repeated patterns (CRUD operations, form validation)
- Refactoring and renaming across files
- Writing tests for existing code
- Explaining unfamiliar code
- Generating types from JSON/API responses
- CSS/Tailwind class adjustments

### Write Manually When:
- Designing core architecture (state management approach, routing structure)
- Security-sensitive logic (auth, input validation)
- Performance-critical code (complex algorithms, rendering optimization)
- Learning a new concept (writing it teaches you more than AI writing it)

---

## 6. Pitfalls to Avoid

### 1. Blind Trust

AI makes plausible-sounding mistakes. Always review generated code.

```tsx
// AI might generate this — looks fine but has a bug:
const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name))
// Bug: Array.sort() mutates the original array
// Fix:
const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name))
```

### 2. Security Leaks

Never paste private keys, database passwords, or user data into AI chat tools.

```bash
# BAD — pasting this into any AI chat:
DATABASE_URL=postgresql://user:REALPASSWORD@prod-db.internal:5432/mydb

# Instead, describe the shape:
DATABASE_URL=postgresql://user:password@host:port/dbname
```

### 3. Outdated APIs

AI training data has a cutoff. Always verify against official docs.

```typescript
// AI might suggest the old Next.js 13 pattern:
import { useRouter } from 'next/router'  // Pages Router

// But your project uses App Router:
import { useRouter } from 'next/navigation'  // App Router
```

### 4. Context Window Limits

Large codebases may exceed context. Break tasks into focused pieces.

```bash
# BAD: vague, large scope
> Refactor the entire project to use React Query

# GOOD: focused, specific
> In src/features/products/hooks/useProducts.ts, 
> convert the manual fetch + useState pattern to useQuery from @tanstack/react-query
```

---

## 7. Professional Workflow

```
1. Understand the task manually (read existing code, understand the system)
2. Use AI to draft or scaffold
3. Review every line — understand what was generated
4. Run tests; fix failures
5. Commit with a clear message explaining WHAT and WHY
```

---

## Summary

| Tool | Setup | Use case |
|------|-------|---------|
| Claude Code | `npm i -g @anthropic/claude-code` | Full-context codebase changes, multi-file |
| Copilot | VS Code extension | Inline completion, quick fixes |
| Cursor | Separate IDE | Deep codebase chat, Composer agent |
| Claude.ai | Web browser | Architecture, debugging help, learning |

---

## Next Lesson

`002 - Prompting Techniques.md` — write prompts that get better results from AI
