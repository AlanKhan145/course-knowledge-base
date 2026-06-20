# What is a Domain Name?

## Section
Stage 1 — Foundation — Module 01: Internet

## Learning Objectives
- Understand what a domain name is and why it exists
- Identify the parts of a URL: protocol, subdomain, domain, TLD, path, query string
- Explain the difference between a domain name and an IP address
- Know what a domain registrar is and how to register a domain
- Parse URLs programmatically using the JavaScript `URL` API

---

## 1. What is a Domain Name?

Every device on the internet has a numeric address called an **IP address** (e.g., `142.250.185.46`). IP addresses are difficult for humans to remember. A **domain name** is a human-readable label that maps to one of these IP addresses.

When you type `google.com` into your browser, the Domain Name System (DNS) translates it into the IP address of Google's server behind the scenes. You never have to memorize the number.

```
Human-readable:   google.com
Machine-readable: 142.250.185.46
```

Think of it like a contact book on your phone. You search for "Mum" instead of remembering +84-091-234-5678.

---

## 2. Anatomy of a URL

A **URL (Uniform Resource Locator)** is the full address of a resource on the web. Every URL is made up of distinct parts:

```
https://blog.example.com/articles/dns?page=2&lang=en
  │      │     │       │   │         │
  │      │     │       │   │         └── Query string (?page=2&lang=en)
  │      │     │       │   └──────────── Path (/articles/dns)
  │      │     │       └──────────────── TLD (.com)
  │      │     └──────────────────────── Second-level domain (example)
  │      └────────────────────────────── Subdomain (blog)
  └───────────────────────────────────── Protocol (https)
```

### Protocol
Defines the communication rules used to transfer data.
- `https://` — secure (encrypted) HTTP
- `http://` — plain HTTP (avoid on modern sites)
- `ftp://` — file transfer protocol

### Subdomain
A prefix that sits before the main domain name. Common subdomains:

| Subdomain | Typical use |
|-----------|-------------|
| `www`     | Main website (legacy convention) |
| `blog`    | Blog section hosted separately |
| `api`     | REST/GraphQL API endpoints |
| `mail`    | Email server |
| `dev`     | Development/staging environment |

### Second-Level Domain (SLD)
The unique name you register — `google`, `github`, `example`. This is what you pay for.

### Top-Level Domain (TLD)
The suffix at the end of the domain.

| TLD     | Meaning / Common use |
|---------|----------------------|
| `.com`  | Commercial (most common globally) |
| `.org`  | Non-profit organizations |
| `.net`  | Network infrastructure |
| `.io`   | Popular with tech startups (British Indian Ocean Territory) |
| `.vn`   | Vietnam country-code TLD |
| `.edu`  | Educational institutions |
| `.gov`  | Government websites |
| `.dev`  | Developer tools and projects |

### Path
The specific resource on the server, like a file path on your computer.

```
/articles/dns       → the "dns" article inside the "articles" section
/products/shoes/42  → a specific shoe product
```

### Query String
Key-value pairs appended after `?` that pass extra information to the server.

```
?page=2&lang=en
  │          │
  │          └── lang = "en"
  └──────────── page = "2"
```

---

## 3. Domain vs IP Address

| | Domain Name | IP Address |
|---|---|---|
| Example | `github.com` | `140.82.121.4` |
| Human-readable | Yes | No |
| Stable | Yes (registered) | Can change |
| Who manages it | Domain registrar | Internet provider / host |
| Cost | ~$10–$20/year | Free (assigned by host) |

A single IP address can serve multiple domain names (virtual hosting). A single domain can also point to multiple IP addresses for load balancing.

---

## 4. Domain Registrars

A **domain registrar** is a company accredited to sell and manage domain name registrations. You rent a domain — you do not own it permanently.

Popular registrars:

| Registrar | Notes |
|-----------|-------|
| Namecheap | Affordable, good UI, free WhoisGuard |
| GoDaddy | Largest registrar, aggressive upsells |
| Google Domains (now Squarespace) | Clean interface, simple pricing |
| Cloudflare Registrar | At-cost pricing, no markup |
| Name.com | Solid mid-tier option |

When you register a domain you provide:
1. Your contact information (WHOIS data)
2. Nameservers — DNS servers that will answer queries for your domain

---

## 5. Parsing URLs with the JavaScript URL API

Modern browsers and Node.js expose the built-in `URL` class, which parses any URL string into its component parts.

```javascript
const url = new URL('https://blog.example.com/articles/dns?page=2&lang=en');

console.log(url.protocol);  // "https:"
console.log(url.hostname);  // "blog.example.com"
console.log(url.host);      // "blog.example.com" (includes port if present)
console.log(url.pathname);  // "/articles/dns"
console.log(url.search);    // "?page=2&lang=en"
console.log(url.hash);      // "" (no fragment here)

// Access individual query parameters
console.log(url.searchParams.get('page'));  // "2"
console.log(url.searchParams.get('lang'));  // "en"

// Iterate all parameters
for (const [key, value] of url.searchParams) {
  console.log(`${key} = ${value}`);
}
// page = 2
// lang = en
```

### Extracting the subdomain manually

The `URL` API gives you `hostname` but does not split out subdomains automatically. You can do it with a simple split:

```javascript
function getSubdomain(urlString) {
  const { hostname } = new URL(urlString);
  const parts = hostname.split('.');

  // A hostname like "blog.example.com" has 3 parts
  // "example.com" has 2 parts — no subdomain
  if (parts.length > 2) {
    return parts.slice(0, parts.length - 2).join('.');
  }
  return null;
}

console.log(getSubdomain('https://blog.example.com/'));    // "blog"
console.log(getSubdomain('https://api.dev.example.com/')); // "api.dev"
console.log(getSubdomain('https://example.com/'));         // null
```

### Building URLs safely

Always use the `URL` constructor instead of string concatenation to avoid encoding bugs:

```javascript
// Unsafe — breaks if userInput contains spaces or special characters
const unsafe = 'https://example.com/search?q=' + userInput;

// Safe — URL encodes the value automatically
const base = new URL('https://example.com/search');
base.searchParams.set('q', userInput);
base.searchParams.set('page', 1);
console.log(base.toString());
// https://example.com/search?q=hello+world&page=1
```

---

## Practice Exercises

### Exercise 1: Dissect a URL by Hand

Take the following URL and label every part (protocol, subdomain, SLD, TLD, path, query string):

```
https://api.shop.io/v2/products?category=shoes&sort=price
```

Write your answers in a table like the one in Section 2 before using the `URL` API to verify.

```javascript
const url = new URL('https://api.shop.io/v2/products?category=shoes&sort=price');
console.log(url.protocol);  // verify: "https:"
console.log(url.hostname);  // verify: "api.shop.io"
console.log(url.pathname);  // verify: "/v2/products"
console.log(url.searchParams.get('category')); // verify: "shoes"
console.log(url.searchParams.get('sort'));      // verify: "price"
```

### Exercise 2: Build a URL Programmatically

Write a function `buildApiUrl(baseUrl, endpoint, params)` that returns a complete URL string.

```javascript
function buildApiUrl(baseUrl, endpoint, params = {}) {
  const url = new URL(endpoint, baseUrl);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

// Expected output:
// "https://api.example.com/users?role=admin&active=true"
console.log(
  buildApiUrl('https://api.example.com', '/users', { role: 'admin', active: true })
);
```

---

## Summary

| Concept | Key Point |
|---------|-----------|
| Domain name | Human-readable alias for an IP address |
| IP address | Numeric address of a server (e.g., `142.250.185.46`) |
| URL | Full address including protocol, domain, path, and query string |
| Subdomain | Prefix before the domain (`www`, `blog`, `api`) |
| TLD | Suffix after the domain (`.com`, `.org`, `.vn`) |
| Domain registrar | Company you pay to reserve a domain name |
| `URL` API | Built-in JavaScript class that parses and builds URLs safely |

---

## Next Lesson
`004 - What is Hosting.md` — Where your website files actually live and how they are served to users around the world
