# 002 — Backend Basics

**Course:** 01 — Foundations and LLM Basics
**Module:** Module 01 — Prerequisites
**Content Group:** Background Options
**Roadmap Source:** Prerequisites / Background Options
**Lesson Type:** Prerequisite
**Order in Module:** 002
**Suggested Duration:** 18 minutes

---

## 1. Overview

A frontend gives users buttons, forms, pages, and visual feedback. A backend performs the work behind those interfaces: processing requests, applying business rules, communicating with databases, calling external services, and returning responses.

In a typical web application, the frontend sends a **request** to the backend. The backend processes it, reads or writes data, and returns a **response**. This request–response cycle is the foundation of most web applications.

For an AI Engineer, backend development is especially important because the backend is usually responsible for:

* Receiving prompts and user files.
* Calling language, vision, speech, or embedding models.
* Retrieving information from a vector database.
* Executing agent tools.
* Managing authentication and user limits.
* Recording token usage, latency, errors, and cost.
* Streaming generated responses to the frontend.
* Protecting API keys and private data.

A successful AI product is therefore not only a good prompt. It is a complete software system surrounding the model.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

1. Explain the role of a backend in a modern application.
2. Describe the client–server request lifecycle.
3. Understand APIs, routes, HTTP methods, JSON, and status codes.
4. Connect a backend service to a database.
5. Build a minimal REST API using FastAPI.
6. Identify where AI models, retrieval, tools, and logging belong in the backend.
7. Recognize common backend production failures and debug them systematically.
8. Package a small backend application with Docker.

---

## 3. What Is a Backend?

A backend is the part of an application that runs away from the user interface, normally on a server.

It receives instructions from clients such as:

* Web browsers
* Mobile applications
* Desktop applications
* Other backend services
* Command-line tools
* Automated workers

The backend decides what should happen next.

For example, when a user submits the message:

```text
Summarize this PDF and list its main risks.
```

The backend may need to:

1. Authenticate the user.
2. Validate the uploaded file.
3. Extract text from the PDF.
4. Split the text into smaller chunks.
5. Retrieve relevant sections.
6. Create a model prompt.
7. Call an LLM.
8. Stream the generated answer.
9. Record token usage and latency.
10. Save the conversation to a database.

The user sees only a text box and an answer. The backend coordinates the complete workflow.

---

## 4. Frontend, Backend, and Database

A basic software product usually contains three major parts:

```mermaid
flowchart LR
    U[User] --> F[Frontend]
    F -->|HTTP Request| B[Backend API]
    B -->|Read or Write| D[(Database)]
    D --> B
    B -->|HTTP Response| F
    F --> U
```

### Frontend

The frontend is responsible for presentation and interaction:

* Pages and screens
* Buttons and forms
* Loading indicators
* Charts and images
* Client-side validation
* Displaying API responses

### Backend

The backend is responsible for application behavior:

* Business logic
* Authentication
* Authorization
* Data validation
* Database access
* Model calls
* File processing
* Logging
* Error handling

### Database

The database stores persistent information:

* User accounts
* Conversations
* Documents
* Orders
* Model outputs
* API usage
* Application settings
* Audit logs

A beginner can build many useful projects with one backend service and one database.

---

## 5. Core Backend Components

A backend application normally combines several technologies.

### 5.1 Programming Language

The programming language contains the application logic.

Common backend languages include:

* Python
* JavaScript or TypeScript
* Java
* Go
* C#
* Ruby
* PHP

For AI applications, Python is common because it integrates well with machine learning libraries and AI SDKs.

### 5.2 Runtime or Interpreter

A runtime executes the backend code.

Examples:

| Language   | Runtime or Interpreter |
| ---------- | ---------------------- |
| Python     | CPython                |
| JavaScript | Node.js, Deno, Bun     |
| Java       | Java Virtual Machine   |
| C#         | .NET runtime           |

Node.js, for example, allows JavaScript to run outside the browser.

### 5.3 Framework

A backend framework provides reusable tools for routing, validation, middleware, error handling, and server management.

| Language   | Common Frameworks        |
| ---------- | ------------------------ |
| Python     | FastAPI, Django, Flask   |
| JavaScript | Express, NestJS, Fastify |
| Java       | Spring Boot              |
| Go         | Gin, Fiber               |
| C#         | ASP.NET Core             |
| PHP        | Laravel                  |

Frameworks reduce the amount of low-level server code developers must write manually.

### 5.4 Package Manager

A package manager installs and tracks external libraries.

| Ecosystem  | Package Manager   |
| ---------- | ----------------- |
| Python     | `pip`, Poetry, uv |
| JavaScript | npm, pnpm, Yarn   |
| Java       | Maven, Gradle     |
| Ruby       | Bundler           |

A package manifest records the libraries on which a project depends. Node.js projects commonly use `package.json`, while Python projects may use `requirements.txt` or `pyproject.toml`.

### 5.5 Database

Databases can be grouped into two broad categories.

#### Relational databases

Examples:

* PostgreSQL
* MySQL
* SQLite

They store structured data in tables containing rows and columns.

```text
users
+----+----------------------+------------------+
| id | email                | plan             |
+----+----------------------+------------------+
| 1  | alex@example.com     | free             |
| 2  | maria@example.com    | premium          |
+----+----------------------+------------------+
```

#### NoSQL databases

Examples:

* MongoDB
* DynamoDB
* Redis
* Neo4j

They may store documents, key-value records, graphs, or other flexible structures. SQL databases are generally more structured, while document databases such as MongoDB offer flexible document-based storage.

---

## 6. The Request–Response Cycle

The most important backend concept is the request–response cycle.

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as Backend API
    participant DB as Database
    participant M as AI Model

    U->>F: Submit a question
    F->>A: POST /api/chat
    A->>A: Authenticate and validate
    A->>DB: Load conversation context
    DB-->>A: Previous messages
    A->>M: Send prompt and context
    M-->>A: Generated response
    A->>DB: Save response and usage
    A-->>F: JSON or streamed response
    F-->>U: Display answer
```

A backend request usually contains:

* HTTP method
* URL
* Headers
* Query parameters
* Path parameters
* Request body
* Authentication credentials

A backend response usually contains:

* HTTP status code
* Headers
* JSON, text, file, or streamed body

---

## 7. HTTP Methods

REST APIs commonly use HTTP methods to represent operations.

| Method   | Typical Purpose              | Example                 |
| -------- | ---------------------------- | ----------------------- |
| `GET`    | Retrieve data                | Get a conversation      |
| `POST`   | Create or execute something  | Generate an AI response |
| `PUT`    | Replace an existing resource | Replace a user profile  |
| `PATCH`  | Partially update a resource  | Change the user plan    |
| `DELETE` | Remove a resource            | Delete a conversation   |

Example API design:

```text
GET    /api/conversations
POST   /api/conversations
GET    /api/conversations/{conversation_id}
PATCH  /api/conversations/{conversation_id}
DELETE /api/conversations/{conversation_id}
POST   /api/conversations/{conversation_id}/messages
```

Use nouns for resources and let the HTTP method describe the action.

Less consistent:

```text
POST /api/createConversation
POST /api/deleteConversation
```

More consistent:

```text
POST   /api/conversations
DELETE /api/conversations/{conversation_id}
```

---

## 8. JSON Requests and Responses

Most web APIs exchange data using JSON.

### Example request

```http
POST /api/chat
Content-Type: application/json
Authorization: Bearer <access-token>
```

```json
{
  "message": "Explain vector databases in simple terms.",
  "conversation_id": "conv_123",
  "language": "en"
}
```

### Example successful response

```json
{
  "request_id": "req_8f92d1",
  "answer": "A vector database stores data as numerical representations...",
  "model": "example-model",
  "usage": {
    "input_tokens": 124,
    "output_tokens": 216
  }
}
```

### Example error response

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The message field cannot be empty.",
    "request_id": "req_8f92d1"
  }
}
```

A predictable response format makes frontend integration and debugging easier.

---

## 9. HTTP Status Codes

A backend should return a status code that describes the result.

| Status | Meaning               | Common Use                        |
| -----: | --------------------- | --------------------------------- |
|  `200` | OK                    | Successful read or action         |
|  `201` | Created               | New resource created              |
|  `204` | No Content            | Successful deletion               |
|  `400` | Bad Request           | Invalid request format            |
|  `401` | Unauthorized          | Missing or invalid authentication |
|  `403` | Forbidden             | Authenticated but not permitted   |
|  `404` | Not Found             | Resource does not exist           |
|  `409` | Conflict              | Duplicate or conflicting state    |
|  `422` | Validation Error      | Request data failed validation    |
|  `429` | Too Many Requests     | Rate limit exceeded               |
|  `500` | Internal Server Error | Unexpected backend failure        |
|  `502` | Bad Gateway           | Upstream service failed           |
|  `503` | Service Unavailable   | Service temporarily unavailable   |
|  `504` | Gateway Timeout       | Upstream service timed out        |

Do not return `200 OK` for every situation. Correct status codes help clients decide what to do next.

---

## 10. Backend Architecture for an AI Application

A small AI backend can begin as one service:

```mermaid
flowchart TD
    C[Web or Mobile Client]
    API[FastAPI Backend]
    AUTH[Authentication]
    CHAT[Chat Service]
    RAG[RAG Service]
    TOOLS[Agent Tools]
    MODEL[LLM Provider]
    VDB[(Vector Database)]
    DB[(PostgreSQL)]
    LOGS[Logs and Metrics]

    C --> API
    API --> AUTH
    API --> CHAT
    CHAT --> RAG
    CHAT --> TOOLS
    CHAT --> MODEL
    RAG --> VDB
    CHAT --> DB
    API --> LOGS
    RAG --> LOGS
    TOOLS --> LOGS
    MODEL --> LOGS
```

### API layer

Receives HTTP requests and returns responses.

### Service layer

Contains application logic, such as:

* Creating model prompts
* Selecting a model
* Applying token limits
* Combining retrieved documents
* Executing tools
* Calculating usage cost

### Repository or data-access layer

Reads and writes data without exposing database details to the rest of the application.

### Provider layer

Communicates with external systems:

* OpenAI-compatible APIs
* Embedding providers
* Object storage
* Email providers
* Payment services
* Search APIs

Separating these responsibilities makes the code easier to test and replace.

---

## 11. Minimal FastAPI Demo

### 11.1 Project structure

```text
backend-basics/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── schemas.py
│   └── services.py
├── tests/
│   └── test_main.py
├── Dockerfile
├── requirements.txt
└── README.md
```

### 11.2 Install dependencies

```bash
python -m venv .venv
source .venv/bin/activate
```

On Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Create `requirements.txt`:

```text
fastapi
uvicorn[standard]
pydantic
pytest
httpx
```

Install the packages:

```bash
pip install -r requirements.txt
```

### 11.3 Define request and response schemas

Create `app/schemas.py`:

```python
from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=4_000)
    language: str = Field(default="en", pattern="^(en|vi)$")


class ChatResponse(BaseModel):
    answer: str
    input_length: int
```

Pydantic validates incoming data before the route executes.

### 11.4 Create a service

Create `app/services.py`:

```python
def generate_demo_answer(message: str, language: str) -> str:
    """Return a deterministic response for the backend basics demo."""

    normalized_message = message.strip()

    if language == "vi":
        return f"Bạn đã gửi: {normalized_message}"

    return f"You sent: {normalized_message}"
```

In a real AI application, this function could call an LLM gateway instead.

### 11.5 Create the API

Create `app/main.py`:

```python
from fastapi import FastAPI

from app.schemas import ChatRequest, ChatResponse
from app.services import generate_demo_answer

app = FastAPI(
    title="Backend Basics API",
    version="1.0.0",
)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "healthy"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    answer = generate_demo_answer(
        message=request.message,
        language=request.language,
    )

    return ChatResponse(
        answer=answer,
        input_length=len(request.message),
    )
```

### 11.6 Run the application

```bash
uvicorn app.main:app --reload
```

Open the interactive API documentation:

```text
http://localhost:8000/docs
```

### 11.7 Test with `curl`

```bash
curl -X POST "http://localhost:8000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello backend",
    "language": "en"
  }'
```

Expected response:

```json
{
  "answer": "You sent: Hello backend",
  "input_length": 13
}
```

---

## 12. Connecting to a Database

A production application should not store important data only in memory.

For example, a conversation table might contain:

```sql
CREATE TABLE conversations (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    title VARCHAR(255),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);
```

A messages table might contain:

```sql
CREATE TABLE messages (
    id UUID PRIMARY KEY,
    conversation_id UUID NOT NULL,
    role VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    model VARCHAR(100),
    input_tokens INTEGER,
    output_tokens INTEGER,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id)
);
```

The backend should normally access these tables through a repository or ORM layer rather than placing raw database operations inside every API route.

```mermaid
flowchart LR
    R[API Route] --> S[Chat Service]
    S --> REP[Conversation Repository]
    REP --> DB[(PostgreSQL)]
```

This separation makes database logic easier to test and replace.

---

## 13. Authentication and Authorization

Authentication answers:

> Who is making this request?

Authorization answers:

> Is this user allowed to perform this action?

A common API flow is:

```mermaid
sequenceDiagram
    participant C as Client
    participant A as API
    participant Auth as Auth Service
    participant DB as Database

    C->>A: Request with access token
    A->>Auth: Validate token
    Auth-->>A: User identity
    A->>DB: Load requested resource
    DB-->>A: Resource
    A->>A: Check resource ownership
    A-->>C: Authorized response
```

Important rules:

* Never trust a user ID sent in the request body.
* Derive the current user from a verified access token.
* Check ownership before reading, updating, or deleting data.
* Store password hashes, never plain-text passwords.
* Keep secret keys outside source code.
* Apply rate limits to expensive AI endpoints.

Backend courses commonly introduce authentication together with cookies, middleware, tokens, databases, deployment, and input validation because these features work as one system.

---

## 14. Input Validation

Every external input should be treated as untrusted.

Validate:

* Required fields
* Data types
* String lengths
* File types
* File sizes
* Allowed languages
* Enum values
* Numeric ranges
* URL formats
* Date and timezone formats

For AI endpoints, also consider:

* Maximum prompt length
* Maximum conversation history
* Unsupported file formats
* Prompt-injection attempts
* Dangerous tool parameters
* Private information in logs
* Excessive model cost

Validation should happen before expensive database, retrieval, or model operations.

---

## 15. Synchronous and Background Work

Not every task should run inside the HTTP request.

### Suitable for an immediate request

* Reading a small database record
* Updating a profile
* Producing a short model response
* Running a lightweight search

### Better suited for a background worker

* Generating a long PDF report
* Processing a large document
* Creating embeddings for thousands of chunks
* Sending scheduled notifications
* Running batch evaluations
* Generating video or audio
* Retrying failed external API calls

```mermaid
flowchart LR
    C[Client] -->|POST /reports| API[Backend API]
    API -->|Create job| Q[Job Queue]
    API -->|202 Accepted + job_id| C
    Q --> W[Background Worker]
    W --> DB[(Database or Storage)]
    C -->|GET /jobs/job_id| API
```

A queue-based design prevents long-running work from blocking normal API traffic.

---

## 16. Logging and Observability

A backend that works locally may still fail in production. Logs and metrics make failures visible.

Useful structured log fields include:

```json
{
  "timestamp": "2026-07-16T07:30:00Z",
  "level": "INFO",
  "event": "chat_completed",
  "request_id": "req_8f92d1",
  "user_id": "user_219",
  "model": "example-model",
  "latency_ms": 1840,
  "input_tokens": 426,
  "output_tokens": 318,
  "status_code": 200
}
```

Track at least:

* Request count
* Error rate
* Response latency
* Database latency
* Model latency
* Token usage
* Cost per request
* Cache hit rate
* Tool failure rate
* Queue depth
* Timeout count

Never log:

* Passwords
* Access tokens
* API keys
* Full payment details
* Sensitive personal information
* Entire private documents without a clear reason

---

## 17. Error Handling

An external AI provider may fail because of:

* Rate limits
* Invalid credentials
* Network errors
* Timeouts
* Unsupported models
* Malformed responses
* Content restrictions
* Provider outages

The backend should convert these failures into safe, consistent application errors.

```python
from fastapi import HTTPException


def call_model() -> str:
    try:
        # Call the real provider here.
        return "Generated answer"
    except TimeoutError as exc:
        raise HTTPException(
            status_code=504,
            detail="The model provider timed out.",
        ) from exc
```

A production implementation should also:

* Set explicit timeouts.
* Retry only temporary failures.
* Use exponential backoff.
* Avoid retrying invalid requests.
* Record the original provider error internally.
* Return a safe message to the client.
* Attach a request ID for investigation.

---

## 18. Testing the API

Backend development should include automated tests. Modern backend courses commonly cover REST APIs, database integration, API clients, and testing as connected skills.

Create `tests/test_main.py`:

```python
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_chat_endpoint() -> None:
    response = client.post(
        "/api/chat",
        json={
            "message": "Hello backend",
            "language": "en",
        },
    )

    assert response.status_code == 200

    body = response.json()
    assert body["answer"] == "You sent: Hello backend"
    assert body["input_length"] == 13


def test_chat_rejects_empty_message() -> None:
    response = client.post(
        "/api/chat",
        json={
            "message": "",
            "language": "en",
        },
    )

    assert response.status_code == 422
```

Run the tests:

```bash
pytest
```

For AI applications, mock model calls in most unit tests. Otherwise, tests may become:

* Slow
* Expensive
* Non-deterministic
* Dependent on network availability
* Dependent on external rate limits

Use a small number of separate integration or evaluation tests for real model behavior.

---

## 19. Docker Basics

Docker packages the application and its dependencies into a reproducible container.

Create `Dockerfile`:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app

EXPOSE 8000

CMD [
  "uvicorn",
  "app.main:app",
  "--host",
  "0.0.0.0",
  "--port",
  "8000"
]
```

Build the image:

```bash
docker build -t backend-basics-api .
```

Run the container:

```bash
docker run --rm -p 8000:8000 backend-basics-api
```

Check the health endpoint:

```bash
curl http://localhost:8000/health
```

Expected response:

```json
{
  "status": "healthy"
}
```

Docker helps reduce differences between:

* A developer laptop
* CI test environments
* Staging
* Production servers

---

## 20. Environment Variables

Do not place secrets directly in source code.

Incorrect:

```python
API_KEY = "sk-real-secret-key"
```

Better:

```python
import os

api_key = os.environ["MODEL_API_KEY"]
```

Example local `.env` file:

```env
APP_ENV=development
DATABASE_URL=postgresql://app:password@localhost:5432/app
MODEL_API_KEY=replace-me
```

Add `.env` to `.gitignore`:

```gitignore
.env
.venv/
__pycache__/
.pytest_cache/
```

In production, use the deployment platform’s secret-management system.

---

## 21. AI-Specific Backend Concerns

Traditional backend principles still apply to AI systems, but several new concerns appear.

### 21.1 Model latency

Model responses may take several seconds. Use:

* Streaming responses
* Timeouts
* Loading states
* Background jobs for long tasks
* Caching for repeated requests

### 21.2 Cost control

Every model call may cost money.

Track:

* Input tokens
* Output tokens
* Embedding requests
* Image generation
* Speech processing
* Tool calls
* Retries

### 21.3 Non-deterministic output

The same prompt may produce different answers.

Do not rely on natural-language output when the application needs strict structure. Request structured JSON and validate it.

### 21.4 Prompt injection

Retrieved documents or user messages may contain instructions designed to manipulate the model.

Treat retrieved content as data, not trusted system instructions.

### 21.5 Tool safety

An agent should not directly execute arbitrary user-provided commands.

Validate tool inputs and limit:

* Allowed tools
* File paths
* Database operations
* Network destinations
* Financial actions
* Maximum execution time

### 21.6 Fallback behavior

Plan for model failure.

Possible fallbacks include:

* Retry with the same model
* Switch to a backup model
* Return cached output
* Use deterministic rules
* Queue the request
* Return a clear temporary-error message

---

## 22. Practical Demo Flow

For this lesson, build a small endpoint that simulates an AI feature.

### Input

```json
{
  "message": "Explain backend development.",
  "language": "en"
}
```

### Process

```text
1. Receive the HTTP request.
2. Validate the JSON body.
3. Normalize the input.
4. Run the service function.
5. Create a response object.
6. Return JSON.
7. Record the result in logs.
```

### Output

```json
{
  "answer": "You sent: Explain backend development.",
  "input_length": 28
}
```

After the deterministic version works, replace the service function with:

* An LLM API call
* A retrieval pipeline
* An agent tool
* A database lookup
* A classification model

---

## 23. Production Debugging Example

### Problem

The frontend displays:

```text
Something went wrong.
```

### Investigation

Follow the request across the system:

```mermaid
flowchart TD
    A[Reproduce the issue] --> B[Inspect browser network request]
    B --> C[Check HTTP status and response body]
    C --> D[Search backend logs by request ID]
    D --> E[Identify failing dependency]
    E --> F[Inspect database, model, or external API]
    F --> G[Fix and add regression test]
```

### Example finding

```text
Frontend request:
POST /api/chat

Backend response:
504 Gateway Timeout

Backend log:
model_provider_timeout after 30 seconds
```

### Fix

* Set a suitable provider timeout.
* Stream partial output when possible.
* Add a temporary retry policy.
* Return a clear error response.
* Record provider latency.
* Add a test for timeout handling.

A useful debugging principle is:

> Do not guess which layer failed. Trace the request from the client to the backend, database, model provider, and response.

---

## 24. Hands-On Exercises

### Exercise 1 — Explain the flow

Without looking at the lesson, write five lines explaining:

* Client
* Server
* Request
* Response
* Database

### Exercise 2 — Add a route

Add this endpoint:

```text
GET /api/models
```

Expected response:

```json
{
  "models": [
    "demo-small",
    "demo-large"
  ]
}
```

### Exercise 3 — Add validation

Update the chat request so that:

* The message must contain at least three characters.
* The maximum length is 2,000 characters.
* The language must be `en` or `vi`.

### Exercise 4 — Add request timing

Measure how long `/api/chat` takes and return:

```json
{
  "answer": "You sent: Hello",
  "input_length": 5,
  "latency_ms": 2.4
}
```

### Exercise 5 — Add a database

Store each message with:

* ID
* Input text
* Output text
* Language
* Creation time

SQLite is sufficient for the first version.

### Exercise 6 — Add one production failure

Simulate a model timeout and return a correct `504` response.

Document:

1. What failed
2. How it appeared to the frontend
3. Which log exposed the cause
4. How the backend handled it
5. Which test prevents regression

---

## 25. Common Mistakes

### Memorizing definitions without building anything

Understanding the term “REST API” is not enough. Create and test an endpoint.

### Putting all logic inside API routes

Routes should coordinate the request. Business logic should live in services.

### Trusting client input

The frontend can be bypassed. Validate everything again in the backend.

### Returning inconsistent errors

Use a predictable error schema across all routes.

### Hardcoding secrets

Use environment variables or a secret manager.

### Calling an LLM directly from every route

Create a provider or gateway layer so models can be changed without rewriting application logic.

### Ignoring timeouts

Database, model, search, and storage calls should have explicit timeout behavior.

### Testing only the happy path

Test invalid input, unauthorized access, missing data, provider failure, and timeouts.

### Logging sensitive information

Logs are operational data, not a safe location for secrets or private documents.

### Moving to RAG or agents too early

First make sure you can build, test, debug, and deploy a normal backend API.

---

## 26. Completion Checklist

* [ ] I can explain backend development in one or two minutes.
* [ ] I understand the client–server request–response cycle.
* [ ] I can create `GET` and `POST` API routes.
* [ ] I understand JSON requests and responses.
* [ ] I can choose suitable HTTP status codes.
* [ ] I can validate incoming data.
* [ ] I can separate routes, services, and database access.
* [ ] I can connect a backend to a database.
* [ ] I can explain where an LLM or RAG pipeline belongs.
* [ ] I can write at least one automated API test.
* [ ] I can run the backend in Docker.
* [ ] I know one production failure and how to investigate it.
* [ ] I have documented at least one limitation or open question.

---

## 27. Related Outcome

Prepare the web, backend, and programming foundations required before building AI applications.

After completing this lesson, you should be ready to understand how prompts, models, retrieval systems, agent tools, databases, and user interfaces are connected through backend services.

---

## 28. Related Project

Build a minimal FastAPI or Node.js backend containing:

* A Git repository
* A health-check endpoint
* A REST API
* Request validation
* One database connection
* Environment variables
* Automated tests
* Basic structured logging
* A Dockerfile
* A README with setup instructions

Suggested AI extension:

```text
POST /api/chat
    -> validate request
    -> retrieve user context
    -> call a mock or real LLM
    -> save the result
    -> return JSON or a streamed response
```

---

## 29. Summary

Backend Basics is a foundational milestone in the AI Engineer roadmap.

The backend connects the user interface to:

* Application logic
* Databases
* AI models
* Retrieval systems
* Agent tools
* External APIs
* Authentication
* Logging and monitoring

A model call alone is only a prototype. A reliable AI product also needs validation, security, persistence, testing, observability, cost control, error handling, and deployment.

Turn this lesson into a working API route, a database-backed feature, a Dockerized service, or a small portfolio project. Building and debugging the system is what transforms backend knowledge from theory into engineering skill.
