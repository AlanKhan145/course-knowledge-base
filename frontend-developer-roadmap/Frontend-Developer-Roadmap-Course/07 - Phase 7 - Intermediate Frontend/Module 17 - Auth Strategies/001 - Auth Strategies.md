# 001 - Auth Strategies

## Section
Phase 9 — Auth and Security

## Learning Objectives

- Understand session-based vs token-based auth
- Know how JWT works and when to use it
- Implement protected routes in React and Next.js
- Handle token refresh and expired sessions
- Understand OAuth basics

---

## 1. Session-Based Auth (Traditional)

```
1. User sends credentials → POST /login
2. Server verifies, creates a session in DB
3. Server sends Set-Cookie: session_id=abc123
4. Browser stores cookie, sends it with every request
5. Server looks up session_id in DB to authenticate
```

Pros: Simple to revoke (delete from DB), works well for monolithic apps
Cons: Server must store session state; doesn't scale well without a session store (Redis)

---

## 2. Token-Based Auth (JWT)

```
1. User sends credentials → POST /login
2. Server verifies, creates a JWT
3. Server returns { token: "eyJ..." }
4. Client stores token (memory, localStorage, or cookie)
5. Client sends: Authorization: Bearer eyJ...
6. Server verifies token signature — no DB lookup needed
```

### JWT Structure

```
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyLCJyb2xlIjoiYWRtaW4ifQ.ABC123

Header:  { "alg": "HS256", "typ": "JWT" }
Payload: { "userId": 42, "role": "admin", "exp": 1750000000, "iat": 1749000000 }
Signature: HMACSHA256(base64(header) + "." + base64(payload), SECRET)
```

The payload is **base64-encoded, not encrypted** — anyone can decode it. Never put sensitive data (passwords, credit cards) in a JWT.

### Token Storage

| Storage | XSS Risk | CSRF Risk | Notes |
|---------|----------|-----------|-------|
| `localStorage` | High | None | Accessible by JS — XSS can steal it |
| `sessionStorage` | High | None | Cleared on tab close |
| `HttpOnly Cookie` | None | Yes | JS cannot read it (safe from XSS); needs CSRF protection |
| Memory (React state) | None | None | Lost on refresh — best security, worst UX |

**Recommendation**: Use `HttpOnly; Secure; SameSite=Strict` cookies.

---

## 3. Refresh Token Pattern

Short-lived access tokens (15min) + long-lived refresh tokens (7 days):

```
Login → Server returns:
  access_token: expires in 15 minutes (JWT)
  refresh_token: expires in 7 days (stored HttpOnly cookie)

Request → Client sends access_token in Authorization header
  Server validates → returns data

After 15 minutes → Server returns 401
  Client calls POST /auth/refresh with refresh_token cookie
  Server validates refresh_token → returns new access_token
  Client retries original request

Logout → Client calls POST /auth/logout
  Server invalidates refresh_token in DB
  Client clears access_token from memory
```

---

## 4. Implementing Auth in React (Client-Side)

```tsx
// src/hooks/useAuth.ts
import { create } from 'zustand'

interface AuthState {
  token: string | null
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,

  login: async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',   // include cookies
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) throw new Error('Invalid credentials')

    const { token, user } = await res.json()
    set({ token, user })
  },

  logout: async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    })
    set({ token: null, user: null })
  },

  refreshToken: async () => {
    const res = await fetch('/api/auth/refresh', {
      method: 'POST',
      credentials: 'include',
    })
    if (!res.ok) {
      set({ token: null, user: null })
      return
    }
    const { token } = await res.json()
    set({ token })
  },
}))
```

---

## 5. Protected Routes (React Router)

```tsx
// components/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/stores/useAuthStore'

interface ProtectedRouteProps {
  requiredRole?: 'admin' | 'editor' | 'viewer'
}

export function ProtectedRoute({ requiredRole }: ProtectedRouteProps) {
  const { user, token } = useAuthStore()
  const location = useLocation()

  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

// Usage in routes
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/profile" element={<Profile />} />
</Route>

<Route element={<ProtectedRoute requiredRole="admin" />}>
  <Route path="/admin" element={<AdminPanel />} />
</Route>
```

---

## 6. Protected Routes (Next.js)

```tsx
// middleware.ts — runs at the edge before every request
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED = ['/dashboard', '/profile', '/admin']
const AUTH_PAGES = ['/login', '/register']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access-token')?.value
  const pathname = request.nextUrl.pathname

  const isProtected = PROTECTED.some(p => pathname.startsWith(p))
  const isAuthPage = AUTH_PAGES.some(p => pathname.startsWith(p))

  if (isProtected && !token) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/admin/:path*', '/login', '/register'],
}
```

---

## 7. OAuth Basics

OAuth 2.0 allows users to log in with a third-party (Google, GitHub) without sharing their password with your app.

```
1. User clicks "Login with Google"
2. Browser redirects to Google's auth page
3. User approves → Google redirects back with an authorization code
4. Your server exchanges the code for access token (server-to-server)
5. Your server fetches user profile from Google
6. Your server creates/finds a user account and issues your own JWT
```

For Next.js, use **Auth.js** (formerly NextAuth):

```bash
pnpm add next-auth@beta
```

```typescript
// auth.ts
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => !!auth,
  },
})
```

---

## Summary

| Strategy | Stored | State on server | Best for |
|----------|--------|-----------------|----------|
| Session | HttpOnly cookie (session ID) | DB/Redis | Traditional MPA |
| JWT access token | Memory or HttpOnly cookie | Stateless | API, SPA |
| JWT + refresh token | Refresh in HttpOnly cookie | Only refresh token | Production apps |
| OAuth | Via provider | Stateless | Social login |

---

## Next Lesson

`002 - Web Security Basics.md` — XSS, CSRF, CORS, HTTPS, input sanitization
