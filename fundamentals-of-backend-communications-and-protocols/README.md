# Fundamentals of Backend Communications & Protocols

Deep-dive notes on how backend systems communicate — covering design patterns, network protocols, and infrastructure fundamentals.

## Course Structure

### Section 1 — Introduction
- Backend communication overview
- Why protocols and patterns matter

### Section 2 — Backend Communication Design Patterns
- Request-Response
- Synchronous vs Asynchronous workloads
- Push, Polling, Long Polling
- Server-Sent Events (SSE)
- Publish-Subscribe (Pub-Sub)
- Multiplexing & Demultiplexing
- Stateful vs Stateless design
- Sidecar pattern

### Section 3 — Protocols
- OSI Model layers
- IP, UDP, TCP
- TLS/SSL
- HTTP/1.1, HTTP/2, HTTP/3
- WebSockets
- gRPC
- WebRTC

### Section 4 — Many Ways to HTTPS
- TLS 1.2 and TLS 1.3 handshake
- TCP + TLS
- QUIC (HTTP/3 transport)
- TCP Fast Open (TFO)
- 0-RTT (Zero Round-Trip Time)

### Section 5 — Backend Execution Patterns
- Processes and threads
- CPU scheduling
- Socket connection acceptance
- Listener, Acceptor, Reader thread patterns
- Message load balancing
- Socket sharding
- Idempotency
- Nagle's Algorithm

### Section 6 — Proxying & Load Balancing
- Proxy vs Reverse Proxy
- Layer 4 vs Layer 7 Load Balancers
- WebSocket proxying

### Section 7 — Extras
- How ChatGPT uses Server-Sent Events
- Request journey through a backend system
- JSON Web Tokens (JWT)
- Database performance
- Kernel connection management

### Section 8 — Bonus Content
- Software design methodology
- Deep dives on selected topics

## Resources

The `Resources/` folder contains:
- PDF slide decks (Fundamentals of Backend Engineering, HTTPS/TLS, IP/TCP/UDP)
- PowerPoint presentations (`.pptx`)
- JavaScript/TypeScript code samples
- `backendcourse-sourcecode/` — Node.js demo projects

## Key PDFs

| File | Content |
|------|---------|
| `Fundamentals+of+Backend+Engineering.pdf` | Main course slides |
| `HTTPS-TLS-And-Certificates.pdf` | TLS deep dive |
| `IP-TCP-UDP-TLS+Slides.pdf` | Protocol slides |
| `proxy+vs+reverse+proxy.pdf` | Proxy patterns |
| `kernel+queues.pdf` | Kernel-level connections |
| `Apache-kafka-long-polling.pdf` | Kafka & polling |

## Files

Lesson notes are stored as `.txt` files under `Backend-Communication-Course/` (63 files).
