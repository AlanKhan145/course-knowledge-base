# 002 - Prompting Techniques

## Section
Phase 13 — AI Assisted Development

## Learning Objectives

- Write prompts that reliably produce accurate, useful output
- Use context, role, and constraint framing effectively
- Apply prompt patterns for common coding tasks
- Iterate and refine prompts when the first result misses
- Use AI for code review, documentation, and debugging

---

## 1. The Anatomy of a Good Prompt

A strong coding prompt has four parts:

```
[Context]    — who/what/where: the project, file, existing code
[Task]       — what you want: verb + target + scope
[Constraints] — how: format, style, libraries to use or avoid
[Examples]   — what good output looks like (optional but powerful)
```

### Weak vs. Strong Prompts

```
WEAK: "make a button"

STRONG:
Context:    I'm using React 19 with TypeScript and Tailwind CSS.
            We have a Button component in src/components/ui/Button.tsx
            that uses CVA for variants.
Task:       Add an 'icon' size variant to the existing Button component.
Constraint: Follow the existing CVA pattern exactly. The icon button
            should be a 40×40 square with padding 0 and centered content.
            No new dependencies.
```

---

## 2. Context Framing Techniques

### Provide the Relevant Code

Always paste the code you want to modify — don't make the AI guess:

```
Here is my current UserForm component:

```tsx
// src/components/UserForm.tsx
[paste the component]
```

Add client-side validation for the email field using the existing
Zod schema pattern from LoginForm.tsx (also pasted below):

[paste LoginForm.tsx]
```

### Specify the Technology Stack

```
I'm working in:
- Next.js 15 App Router (not Pages Router)
- TypeScript 5.x (strict mode)
- Tailwind CSS v4
- Zustand 5 for state
- React 19

Please use only these libraries.
```

### Reference Existing Patterns

```
Follow the exact same pattern as the useProducts hook in
src/hooks/useProducts.ts. Here is that file:
[paste the file]

Now create a usePosts hook that follows the same structure.
```

---

## 3. Task Specification Patterns

### Be Specific About Output Format

```
Generate a TypeScript interface for this JSON response:
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "role": "admin",
  "createdAt": "2025-06-20T10:00:00Z",
  "posts": [{ "id": 1, "title": "Hello", "published": true }]
}

Output only the TypeScript code, no explanation.
```

### Specify What to Avoid

```
Refactor the fetchUsers function to use async/await.
- Do NOT change the function signature
- Do NOT add error handling (it's handled by the caller)
- Do NOT extract it into a separate module
- Keep TypeScript types exactly as-is
```

### Step-by-Step for Complex Tasks

```
I want to add a search feature to my UserTable component.

Do this in steps:
1. First, explain your approach before writing any code
2. Show the state changes needed (useState hooks to add)
3. Show the filtering logic (a single pure function)
4. Show the updated JSX for the search input
5. Show how to wire them together
```

---

## 4. Debugging Prompts

### Error Diagnosis

```
I'm getting this TypeScript error:

Error:
Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.

In this code:

```ts
const user = useAuthStore(state => state.user)
return <h1>Welcome, {user.name}</h1>
```

The useAuthStore type is:
```ts
interface AuthState {
  user: User | null
  // ...
}
```

How should I handle this safely? Show 3 options from least to most strict.
```

### Unexpected Behavior

```
My React component renders twice in development, and the second render
is causing a duplicate API call. Here's my useEffect:

```tsx
useEffect(() => {
  fetchUsers()
}, [])
```

I'm using React 19 with StrictMode. Explain why this happens and
show the correct pattern to prevent duplicate API calls.
```

### Test Failures

```
This Vitest test is failing with this error:
[paste full error output]

Here is the test:
[paste test code]

Here is the component being tested:
[paste component code]

What's wrong and how do I fix it?
```

---

## 5. Code Review Prompts

```
Review this component for:
1. Performance issues (unnecessary re-renders, missing memoization)
2. Accessibility (missing ARIA labels, keyboard navigation)
3. TypeScript correctness (unsafe types, missing types)
4. React best practices (rules of hooks, stale closures)

```tsx
[paste component]
```

For each issue, show the current code and the fix. Rate severity:
🔴 Bug / 🟠 Should fix / 🟡 Could improve
```

---

## 6. Code Generation Prompts

### Generate Types from API Response

```
Generate TypeScript types for this API response from the JSONPlaceholder API.
Use interface (not type) for objects. Mark all fields as required unless the
value could clearly be null/undefined.

Response:
{
  "id": 1,
  "title": "Post title",
  "body": "Post content...",
  "userId": 1
}

Also generate an interface for the API response array: Post[]
And generate a CreatePostInput type (same as Post but without id).
```

### Generate Tests

```
Generate Vitest tests for this utility function.

```ts
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  
  if (diffSeconds < 60) return 'just now'
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`
  return `${Math.floor(diffSeconds / 86400)}d ago`
}
```

Tests must cover:
- Less than 60 seconds
- 1-59 minutes
- 1-23 hours
- 1+ days
- Edge case: exactly 60 seconds
Use vi.setSystemTime() to control the current time.
```

---

## 7. Documentation Prompts

```
Write a JSDoc comment for this function.
Be concise — max 2 sentences for the description.
Document all parameters and the return type.
Include one example in the @example block.

```ts
export function paginate<T>(
  items: T[],
  page: number,
  pageSize: number
): { items: T[]; total: number; totalPages: number; hasNext: boolean; hasPrev: boolean }
```
```

---

## 8. Iteration Patterns

When the first result is wrong, don't start over — iterate:

```
# First attempt gave wrong pattern:
"That used useState but I wanted useReducer. Try again using
 useReducer with a discriminated union action type."

# Output was too verbose:
"Good, but remove all the comments. I only want the code."

# Output was missing something:
"Add error handling: if the fetch fails, set error state and
 show the error in the component."

# Output used wrong library:
"This uses axios but I need the native fetch API. Rewrite it
 using fetch with async/await."
```

---

## 9. Prompting for Learning

Use AI to build deep understanding, not just to get code:

```
Explain why React's useEffect runs twice in StrictMode.
What problem was it designed to catch?
Show a concrete example of a bug it would expose.
Keep it under 200 words.

---

I just read that 'use client' doesn't mean "this renders only on the client."
Explain what it actually means in Next.js App Router.
Use a diagram or analogy to make it concrete.

---

What's the difference between memo() and useMemo()?
Show a case where you'd use each, and a case where
you're tempted to use one but shouldn't.
```

---

## Summary

| Technique | Template |
|-----------|---------|
| Context first | Stack, file, existing pattern |
| Specific task | Verb + target + scope |
| Constraints | What to avoid, what to follow |
| Debugging | Error + code + what you expected |
| Code review | What to check + severity scale |
| Iteration | Point to specific gap + "try again with..." |
| Learning | Ask for explanation + example + analogy |

---

## Next Phase

Phase 14 — Portfolio and Job Hunting: build projects, write README files, use the junior checklist
