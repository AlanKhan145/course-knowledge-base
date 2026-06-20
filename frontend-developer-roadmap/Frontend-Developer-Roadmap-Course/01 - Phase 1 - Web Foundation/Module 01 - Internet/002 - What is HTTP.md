# 002 - HTTP Basics

## Section
Phase 1 — Web Foundation

## Learning Objectives

- Understand what HTTP is and how it works
- Know the common HTTP methods
- Read and interpret status codes
- Understand request/response structure: headers and body
- Work with JSON and basic REST APIs

---

## 1. What Is HTTP?

**HTTP (HyperText Transfer Protocol)** is the protocol for exchanging data between a client and a server on the web.

- **HTTPS** = HTTP + TLS/SSL (encrypted)
- All modern websites use HTTPS

### Request — Response Model

```
Client (Browser)                    Server
      |                                 |
      |------- HTTP Request ----------->|
      |                                 | (processes)
      |<------ HTTP Response -----------|
      |                                 |
```

---

## 2. HTTP Methods

| Method | Purpose | Has Body? |
|--------|----------|-----------|
| `GET` | Retrieve data | No |
| `POST` | Create new data | Yes |
| `PUT` | Replace entire resource | Yes |
| `PATCH` | Update part of a resource | Yes |
| `DELETE` | Delete a resource | No (usually) |

### Real-World Example (User Management API)

```
GET    /users          → Get list of all users
GET    /users/42       → Get user with id=42
POST   /users          → Create a new user
PUT    /users/42       → Replace all fields of user 42
PATCH  /users/42       → Update specific fields of user 42
DELETE /users/42       → Delete user 42
```

---

## 3. Status Codes

### 2xx — Success

| Code | Name | Meaning |
|------|------|---------|
| 200 | OK | Request succeeded (GET, PATCH) |
| 201 | Created | Resource created successfully (POST) |
| 204 | No Content | Succeeded, no data to return (DELETE) |

### 3xx — Redirects

| Code | Name | Meaning |
|------|------|---------|
| 301 | Moved Permanently | URL has permanently moved |
| 302 | Found | Temporary redirect |
| 304 | Not Modified | Data unchanged, use cached version |

### 4xx — Client Errors

| Code | Name | Meaning |
|------|------|---------|
| 400 | Bad Request | Malformed request or missing data |
| 401 | Unauthorized | Not authenticated / invalid token |
| 403 | Forbidden | Authenticated but not permitted |
| 404 | Not Found | Resource does not exist |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |

### 5xx — Server Errors

| Code | Name | Meaning |
|------|------|---------|
| 500 | Internal Server Error | Unknown server error |
| 502 | Bad Gateway | Upstream server returned an error |
| 503 | Service Unavailable | Server is overloaded or under maintenance |

---

## 4. Headers

Headers are metadata attached to a request or response.

### Common Request Headers

```
GET /api/users HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
Content-Type: application/json
```

| Header | Meaning |
|--------|---------|
| `Host` | Target server's domain |
| `Accept` | Data format the client expects |
| `Authorization` | Auth token (e.g., Bearer JWT) |
| `Content-Type` | Format of the request body |
| `Cookie` | Sends cookies to the server |

### Common Response Headers

```
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600
Set-Cookie: session=abc123; HttpOnly
```

| Header | Meaning |
|--------|---------|
| `Content-Type` | Format of the response body |
| `Cache-Control` | Caching policy |
| `Set-Cookie` | Sets a cookie in the browser |
| `Access-Control-Allow-Origin` | CORS policy |

---

## 5. Request Body and JSON

The body carries data sent with POST, PUT, and PATCH requests.

### Example: POST Request to Create a User

```
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "Nguyen Van A",
  "email": "nguyenvana@example.com",
  "age": 25
}
```

### JSON (JavaScript Object Notation)

The most common data format used in web APIs:

```json
{
  "id": 42,
  "name": "Nguyen Van A",
  "email": "nguyenvana@example.com",
  "isActive": true,
  "tags": ["developer", "frontend"],
  "address": {
    "city": "Ho Chi Minh City",
    "country": "Vietnam"
  }
}
```

JSON data types:
- `string`: `"text"`
- `number`: `42`, `3.14`
- `boolean`: `true`, `false`
- `null`: `null`
- `array`: `[1, 2, 3]`
- `object`: `{ "key": "value" }`

---

## 6. REST API

**REST (Representational State Transfer)** is the most widely used API design style.

### REST Principles

1. **Stateless**: Each request is independent; the server does not store client state
2. **Resource-based URLs**: URLs represent resources, not actions
3. **Correct HTTP methods**: GET for read, POST for create, PUT/PATCH for update, DELETE for delete
4. **JSON responses**: Return data as JSON

### Good vs Bad URL Design

```
Bad (action in URL):
GET  /getUsers
POST /createUser
POST /deleteUser?id=42

Good (resource-based):
GET    /users
POST   /users
DELETE /users/42
```

---

## Practice Exercises

### Exercise 1: Use Thunder Client (VS Code Extension)

Install the **Thunder Client** extension in VS Code, then call these public APIs:

**JSONPlaceholder** — free mock API:

```
GET    https://jsonplaceholder.typicode.com/posts
GET    https://jsonplaceholder.typicode.com/posts/1
GET    https://jsonplaceholder.typicode.com/users
POST   https://jsonplaceholder.typicode.com/posts
       Body: { "title": "Test", "body": "Hello", "userId": 1 }
DELETE https://jsonplaceholder.typicode.com/posts/1
```

For each request record:
- Status code
- Response body
- Key response headers

### Exercise 2: Write Out a Login Flow

Describe each step when a user logs in to a website:

1. User types email/password → clicks Login
2. What request does the browser send? Method? URL? Body?
3. What does the server return? Status code? Body?
4. What does the browser do after receiving the response?
5. If the password is wrong, what status code does the server return?

---

## Summary

| Concept | Details |
|---------|---------|
| HTTP | Protocol for client-server communication |
| Methods | GET, POST, PUT, PATCH, DELETE |
| 2xx | Success |
| 4xx | Client error |
| 5xx | Server error |
| Headers | Metadata attached to requests/responses |
| JSON | Most common data format in web APIs |
| REST | API design style based on resources and HTTP methods |

---

## Next Lesson

`003 - How Browsers Work.md` — DOM, CSSOM, render pipeline, JavaScript engine
