# 001 - How The Internet Works

## Section
Phase 1 — Web Foundation

## Learning Objectives

- Understand what the internet is and how it operates
- Distinguish between client and server
- Understand DNS, domain names, and hosting
- Trace the full journey of a browser request

---

## 1. What Is the Internet?

The internet is a global network of billions of devices (computers, phones, servers) connected to each other via standardized protocols (TCP/IP).

When you visit `google.com`, you are sending a request from your machine (**client**) to a Google machine (**server**), receiving data back, and displaying it.

---

## 2. Client and Server

| | Client | Server |
|---|---|---|
| What it is | The user's device (browser, app) | A machine that stores and processes data |
| Examples | Chrome, Firefox, Safari | Vercel server, AWS, Cloudflare |
| Role | Sends requests, displays responses | Receives requests, processes them, returns data |

---

## 3. IP Address

Every device on the internet has a unique IP address.

- **IPv4**: `172.217.11.46` — four numbers separated by dots
- **IPv6**: `2607:f8b0:4004:c07::6a` — newer format, longer

An IP address is like a postal address. When you type `google.com`, your computer needs to know Google's IP to send the request to the right place.

---

## 4. DNS — Domain Name System

**Problem**: IP addresses are hard to remember (`172.217.11.46`). Users need memorable names (`google.com`).

**Solution**: DNS is the internet's "phone book" — it converts domain names into IP addresses.

### DNS Lookup Flow

```
You type: google.com
   ↓
Browser checks its cache
   ↓ (cache miss)
Asks DNS resolver (typically your ISP's or 8.8.8.8)
   ↓
DNS resolver asks Root DNS server
   ↓
Root server points to TLD server (.com)
   ↓
TLD server points to google.com's Authoritative DNS
   ↓
Returns IP: 172.217.11.46
   ↓
Browser connects to that IP
```

---

## 5. Domain Name

Anatomy of a URL:

```
https://www.example.com/path

Protocol:  https://
Subdomain: www.
Domain:    example
TLD:       .com
Path:      /path
```

- **TLD (Top-Level Domain)**: `.com`, `.org`, `.net`, `.io`, `.vn`
- **Subdomain**: `www`, `blog`, `api`, `app` — the part before the main domain
- **Domain registrar**: Where you buy domains — Namecheap, GoDaddy, Google Domains

---

## 6. Hosting

Hosting is a service that provides server space to store your website or app.

| Hosting Type | Description | Best For |
|---|---|---|
| Shared hosting | Many websites share one server | Small blogs, static sites |
| VPS | Dedicated virtual server | Mid-size apps, backends |
| Dedicated Server | Entire physical server | High-traffic sites |
| Cloud (AWS, GCP, Azure) | Auto-scaling infrastructure | Large-scale production apps |
| Serverless/Edge (Vercel, Netlify) | Deploy code, no server management | Frontend, Next.js apps |

---

## 7. Full Journey: Browser to Server

```
1. You type a URL into the browser
2. Browser parses the URL: protocol, domain, path
3. DNS lookup: domain → IP address
4. TCP handshake (3-way: SYN → SYN-ACK → ACK)
5. TLS handshake (if HTTPS)
6. Browser sends HTTP request
7. Server processes the request and returns HTTP response
8. Browser receives HTML, parses it, fetches CSS/JS/images
9. Page renders on screen
```

---

## Practice Exercises

### Exercise 1: Observe Network Traffic in DevTools

1. Open Chrome, press `F12` → go to the **Network** tab
2. Visit any website (e.g., `github.com`)
3. Observe:
   - The list of requests: HTML, CSS, JS, fonts, images
   - The **Status** column: 200, 301, 404...
   - The **Type** column: document, stylesheet, script, fetch
   - The **Size** and **Time** columns
   - Click a request → inspect **Headers**, **Preview**, **Response**

### Exercise 2: DNS Lookup in Terminal

Open your terminal (Windows: `Win+R` → `cmd`):

```bash
nslookup google.com
nslookup github.com
nslookup facebook.com
```

Record the IP address for each domain.

### Exercise 3: Draw the Journey

Draw (by hand or using draw.io) the full path from typing `https://github.com` to seeing the page rendered. Label each step: DNS, TCP, TLS, HTTP request, HTTP response, render.

---

## Summary

| Concept | Short Explanation |
|---|---|
| Internet | Global network of devices connected via TCP/IP |
| Client | Device that sends requests (browser, app) |
| Server | Machine that receives requests and returns data |
| IP address | Numeric identifier for a device on the network |
| DNS | System that translates domain names to IP addresses |
| Domain name | Human-readable name (google.com) instead of an IP |
| Hosting | Service providing server space to run a website |

---

## Next Lesson

`002 - HTTP Basics.md` — HTTP methods, status codes, headers, JSON, REST API
