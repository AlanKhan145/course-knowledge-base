# 003 — Full-stack Basics

**Course:** 01 — Foundations and LLM Basics
**Module:** Module 01 — Prerequisites
**Content Group:** Background Options
**Roadmap Source:** Prerequisites / Background Options
**Lesson Type:** Prerequisite
**Order in Module:** 003
**Suggested Duration:** 18 minutes

---

## 1. Overview

**Full-stack development** is the practice of building both the user-facing interface and the server-side systems that power an application.

For an AI Engineer, full-stack knowledge is important because an AI feature rarely exists as an isolated model or prompt. A real AI application usually needs:

* A user interface.
* A backend API.
* Authentication and authorization.
* Database storage.
* Model or LLM integration.
* Logging and monitoring.
* Deployment infrastructure.
* Error handling and security controls.

A chatbot, document assistant, recommendation system, image-analysis tool, or AI agent becomes useful only when users can interact with it reliably.

By the end of this lesson, you should understand how frontend, backend, databases, APIs, AI services, and deployment fit together in one application.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain full-stack development in your own words.
* Distinguish between frontend, backend, database, and infrastructure responsibilities.
* Describe how data moves through a modern AI application.
* Design a simple REST API for an AI feature.
* Connect a frontend interface to a backend endpoint.
* Store application data in a database.
* Identify common production failures and debugging strategies.
* Build a small full-stack AI application for your portfolio.

---

## 3. What Is Full-stack Development?

A full-stack application contains multiple technical layers.

```mermaid
flowchart LR
    U[User] --> F[Frontend]
    F -->|HTTP Request| B[Backend API]
    B --> D[(Database)]
    B --> AI[LLM or AI Model]
    AI --> B
    D --> B
    B -->|JSON Response| F
    F --> U
```

The major layers are:

| Layer          | Responsibility                                              | Common Technologies                        |
| -------------- | ----------------------------------------------------------- | ------------------------------------------ |
| Frontend       | Displays information and handles user interaction           | HTML, CSS, JavaScript, React, Vue, Flutter |
| Backend        | Executes business logic and exposes APIs                    | FastAPI, Django, Node.js, Express, NestJS  |
| Database       | Stores users, documents, messages, and application state    | PostgreSQL, MySQL, MongoDB, Redis          |
| AI Layer       | Performs generation, classification, retrieval, or tool use | OpenAI API, Gemini, Claude, local models   |
| Infrastructure | Runs and deploys the application                            | Docker, Linux, cloud services, CI/CD       |

A full-stack developer does not need to master every technology. The goal is to understand how the layers communicate and how to debug problems across the entire system.

---

## 4. Frontend Basics

The frontend is the part of the application that users see and interact with.

A traditional web frontend uses three core technologies:

* **HTML** defines the structure.
* **CSS** controls appearance and layout.
* **JavaScript** adds behavior and interaction.

A useful analogy is a house:

| Web Technology | House Analogy                                     |
| -------------- | ------------------------------------------------- |
| HTML           | Rooms, walls, doors, and structure                |
| CSS            | Paint, furniture, colors, and decoration          |
| JavaScript     | Lights, elevators, locks, and interactive systems |

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Assistant</title>
</head>
<body>
  <main>
    <h1>AI Assistant</h1>

    <form id="chat-form">
      <label for="message">Your message</label>
      <textarea id="message" required></textarea>
      <button type="submit">Send</button>
    </form>

    <section>
      <h2>Response</h2>
      <p id="response">No response yet.</p>
    </section>
  </main>

  <script src="app.js"></script>
</body>
</html>
```

The interface is only one part of the application. JavaScript must send the user's input to a backend service.

```javascript
const form = document.querySelector("#chat-form");
const messageInput = document.querySelector("#message");
const responseElement = document.querySelector("#response");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  responseElement.textContent = "Generating...";

  try {
    const response = await fetch("http://localhost:8000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageInput.value,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    responseElement.textContent = data.answer;
  } catch (error) {
    console.error(error);
    responseElement.textContent =
      "The request failed. Please try again.";
  }
});
```

The frontend should handle more than successful responses. It should also handle:

* Loading states.
* Empty input.
* Validation errors.
* Network failures.
* Authentication failures.
* Slow model responses.
* Rate limits.
* Mobile and desktop layouts.
* Accessibility.

---

## 5. Backend Basics

The backend runs on a server and performs work that should not happen directly in the browser.

Typical backend responsibilities include:

* Validating incoming data.
* Authenticating users.
* Applying business rules.
* Reading and writing database records.
* Calling an AI model.
* Managing prompts.
* Running retrieval pipelines.
* Executing agent tools.
* Protecting secrets and API keys.
* Returning structured responses.
* Recording logs and metrics.

### Minimal FastAPI Example

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="Full-stack AI Demo")


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)


class ChatResponse(BaseModel):
    answer: str


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    message = request.message.strip()

    if not message:
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty.",
        )

    # Replace this placeholder with a real LLM call.
    answer = f"You asked: {message}"

    return ChatResponse(answer=answer)
```

Run the server:

```bash
uvicorn main:app --reload
```

The backend will be available at:

```text
http://localhost:8000
```

The interactive API documentation will normally be available at:

```text
http://localhost:8000/docs
```

---

## 6. Understanding APIs

An **API**, or Application Programming Interface, defines how software systems communicate.

In a full-stack application, the frontend usually communicates with the backend through HTTP.

### Common HTTP Methods

| Method   | Purpose                   | Example                     |
| -------- | ------------------------- | --------------------------- |
| `GET`    | Read data                 | Get chat history            |
| `POST`   | Create or process data    | Send a new prompt           |
| `PUT`    | Replace a resource        | Replace a user profile      |
| `PATCH`  | Update part of a resource | Change a conversation title |
| `DELETE` | Remove a resource         | Delete a saved conversation |

### Example Request

```http
POST /api/chat
Content-Type: application/json

{
  "message": "Explain retrieval-augmented generation."
}
```

### Example Response

```json
{
  "answer": "Retrieval-augmented generation combines document retrieval with language-model generation."
}
```

A production API should define:

* Request fields.
* Response fields.
* Authentication rules.
* Validation rules.
* Error responses.
* Rate limits.
* Timeouts.
* API versioning.

---

## 7. Request and Response Flow

Consider a user asking a question in a document assistant.

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API as Backend API
    participant DB as Database
    participant Retrieval as Vector Search
    participant LLM as Language Model

    User->>Frontend: Enter question
    Frontend->>API: POST /api/questions
    API->>API: Validate input
    API->>DB: Load user and document metadata
    API->>Retrieval: Search relevant document chunks
    Retrieval-->>API: Return matching chunks
    API->>LLM: Send prompt and context
    LLM-->>API: Generated answer
    API->>DB: Save question and answer
    API-->>Frontend: JSON response
    Frontend-->>User: Display answer
```

This flow demonstrates why AI engineering requires more than prompting.

A failure may occur at any step:

* The frontend may send the wrong JSON field.
* The backend may reject the request.
* The database may be unavailable.
* Retrieval may return irrelevant context.
* The model provider may time out.
* The generated response may not match the expected schema.
* The frontend may fail to render the result.

---

## 8. Database Basics

A database stores information that must remain available after the application stops running.

An AI application may store:

* User accounts.
* User preferences.
* Conversations.
* Uploaded files.
* Document chunks.
* Embeddings.
* Model configurations.
* Prompt versions.
* Tool execution history.
* Feedback and evaluation results.
* Usage and billing data.

### Example Relational Structure

```mermaid
erDiagram
    USERS ||--o{ CONVERSATIONS : owns
    CONVERSATIONS ||--o{ MESSAGES : contains
    USERS ||--o{ DOCUMENTS : uploads
    DOCUMENTS ||--o{ DOCUMENT_CHUNKS : contains

    USERS {
        int id
        string email
        datetime created_at
    }

    CONVERSATIONS {
        int id
        int user_id
        string title
        datetime created_at
    }

    MESSAGES {
        int id
        int conversation_id
        string role
        text content
        datetime created_at
    }

    DOCUMENTS {
        int id
        int user_id
        string filename
        string status
    }

    DOCUMENT_CHUNKS {
        int id
        int document_id
        text content
        string embedding_id
    }
```

### SQL Example

```sql
CREATE TABLE conversations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    conversation_id INTEGER NOT NULL,
    role VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id)
        REFERENCES conversations(id)
);
```

For beginner projects, PostgreSQL is a strong default because it supports relational data, transactions, indexing, and JSON fields.

---

## 9. Connecting an AI Model

An AI provider should normally be called from the backend, not directly from the browser.

```mermaid
flowchart LR
    Browser --> Backend
    Backend -->|Secret API key| ModelProvider[AI Provider]
    ModelProvider --> Backend
    Backend --> Browser
```

This protects the API key and allows the backend to control:

* Prompt templates.
* Model selection.
* Token limits.
* Safety rules.
* Retry behavior.
* Logging.
* Cost limits.
* Response validation.

### Service-Layer Example

```python
from dataclasses import dataclass


@dataclass
class AIResult:
    text: str
    model: str


class AIService:
    def generate(self, message: str) -> AIResult:
        # A real implementation would call an LLM provider here.
        generated_text = (
            "This is a placeholder response for: "
            f"{message}"
        )

        return AIResult(
            text=generated_text,
            model="demo-model",
        )
```

Keeping model logic in a separate service makes it easier to:

* Change providers.
* Mock the model during tests.
* Add retries.
* Add caching.
* Track usage.
* Compare multiple models.
* Reuse the service across API routes.

---

## 10. Full-stack Architecture for an AI Application

A small application may begin as a simple three-layer system.

```mermaid
flowchart TB
    subgraph Client
        UI[Web or Mobile UI]
    end

    subgraph Application_Server
        API[REST API]
        Auth[Authentication]
        AIService[AI Service]
        Retrieval[RAG Service]
    end

    subgraph Data
        PostgreSQL[(PostgreSQL)]
        VectorDB[(Vector Database)]
        Cache[(Redis Cache)]
    end

    subgraph External
        LLM[LLM Provider]
        Storage[Object Storage]
    end

    UI --> API
    API --> Auth
    API --> AIService
    API --> Retrieval
    API --> PostgreSQL
    Retrieval --> VectorDB
    AIService --> LLM
    API --> Cache
    API --> Storage
```

Do not begin with every component shown in the diagram.

A sensible beginner version is:

```text
Frontend
   ↓
FastAPI or Node.js API
   ↓
PostgreSQL
   ↓
One AI model provider
```

Add Redis, vector databases, queues, workers, and advanced monitoring only when the application has a clear need for them.

---

## 11. Git Basics

Git records changes to source code and allows developers to collaborate safely.

### Typical Workflow

```bash
git init
git add .
git commit -m "Initialize full-stack AI demo"
git checkout -b feature/chat-api
```

After implementing a feature:

```bash
git add .
git commit -m "Add chat API endpoint"
git push origin feature/chat-api
```

Good commits should:

* Represent one logical change.
* Use clear descriptions.
* Avoid unrelated generated files.
* Never contain secrets.
* Keep the application in a reviewable state.

### Recommended `.gitignore`

```gitignore
.env
.venv/
venv/
__pycache__/
*.pyc
node_modules/
dist/
build/
.idea/
.vscode/
```

---

## 12. Environment Variables and Secrets

Secrets must not be hardcoded into source code.

Incorrect:

```python
API_KEY = "sk-real-secret-key"
```

Better:

```python
import os

api_key = os.getenv("AI_API_KEY")

if not api_key:
    raise RuntimeError("AI_API_KEY is not configured")
```

Example `.env` file:

```env
APP_ENV=development
DATABASE_URL=postgresql://app:password@localhost:5432/ai_app
AI_API_KEY=replace-with-your-key
AI_MODEL=example-model
```

The `.env` file should normally be excluded from Git.

A safe `.env.example` may be committed:

```env
APP_ENV=development
DATABASE_URL=
AI_API_KEY=
AI_MODEL=
```

---

## 13. Docker Basics

Docker packages an application and its dependencies into a reproducible container.

### Minimal FastAPI Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD [
  "uvicorn",
  "main:app",
  "--host",
  "0.0.0.0",
  "--port",
  "8000"
]
```

Build the image:

```bash
docker build -t fullstack-ai-demo .
```

Run the container:

```bash
docker run \
  --rm \
  -p 8000:8000 \
  --env-file .env \
  fullstack-ai-demo
```

Docker helps reduce problems such as:

```text
"It works on my machine, but not on the server."
```

It does not automatically solve:

* Poor architecture.
* Missing environment variables.
* Database migrations.
* Security problems.
* Slow model calls.
* Incorrect application logic.

---

## 14. Error Handling

A reliable application should expect failures.

### Useful HTTP Status Codes

| Status | Meaning                         |
| -----: | ------------------------------- |
|  `200` | Request succeeded               |
|  `201` | Resource created                |
|  `400` | Invalid request                 |
|  `401` | Authentication required         |
|  `403` | Permission denied               |
|  `404` | Resource not found              |
|  `409` | Resource conflict               |
|  `422` | Validation failed               |
|  `429` | Rate limit exceeded             |
|  `500` | Internal server error           |
|  `502` | External service failure        |
|  `503` | Service temporarily unavailable |

### Backend Example

```python
import logging

from fastapi import HTTPException

logger = logging.getLogger(__name__)


def generate_answer(message: str) -> str:
    try:
        return call_model(message)
    except TimeoutError as exc:
        logger.warning("Model request timed out", exc_info=exc)

        raise HTTPException(
            status_code=503,
            detail="The AI service is temporarily unavailable.",
        ) from exc
    except Exception as exc:
        logger.exception("Unexpected generation failure")

        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred.",
        ) from exc
```

Do not expose internal stack traces, API keys, database URLs, or sensitive user data in public error messages.

---

## 15. Logging and Debugging

Debugging a full-stack application means tracing a request across multiple layers.

```mermaid
flowchart TD
    A[User reports a failure] --> B{Did the frontend send a request?}
    B -- No --> C[Inspect browser console and frontend state]
    B -- Yes --> D{Did the backend receive it?}
    D -- No --> E[Check URL, CORS, proxy, and network]
    D -- Yes --> F{Did validation pass?}
    F -- No --> G[Inspect request schema and payload]
    F -- Yes --> H{Did database or model call succeed?}
    H -- No --> I[Inspect dependency logs and timeouts]
    H -- Yes --> J{Was the response rendered?}
    J -- No --> K[Inspect response parsing and UI state]
    J -- Yes --> L[Reproduce with exact input and environment]
```

### Useful Debugging Questions

1. What exact action did the user perform?
2. What request did the frontend send?
3. What status code did the backend return?
4. Was the request ID recorded?
5. Did the database query succeed?
6. Did the model provider respond?
7. Was the response valid JSON?
8. Did the frontend parse the correct field?
9. Is the failure specific to one environment?
10. Can the failure be reproduced consistently?

### Example Structured Log

```json
{
  "level": "INFO",
  "event": "chat_request_completed",
  "request_id": "req_123",
  "user_id": "user_42",
  "route": "/api/chat",
  "model": "example-model",
  "latency_ms": 1240,
  "status_code": 200
}
```

Avoid logging complete prompts or personal data unless the application has a clear privacy policy and appropriate controls.

---

## 16. Common Mistakes

### 16.1 Calling the AI Provider Directly from the Frontend

This can expose secret API keys.

**Better approach:** send the request through your backend.

### 16.2 Building Only the Happy Path

The demo works with one input but fails when:

* The message is empty.
* The provider times out.
* The user uploads a large file.
* The response is malformed.
* The database is unavailable.

**Better approach:** define expected failure states before deployment.

### 16.3 Mixing All Logic into One Route

A single API function handles validation, database access, prompting, retrieval, and response formatting.

**Better approach:** separate routes, services, repositories, and schemas.

### 16.4 Trusting Client Input

The frontend is not a security boundary.

**Better approach:** validate all input again on the backend.

### 16.5 Returning Unstructured Model Output

The frontend expects JSON, but the model returns unpredictable text.

**Better approach:** validate model output with a schema.

### 16.6 Ignoring Timeouts

AI calls may take much longer than normal database requests.

**Better approach:** configure timeouts, retries, cancellation, and loading states.

### 16.7 Committing Secrets

API keys are accidentally included in Git history.

**Better approach:** use environment variables and secret scanning.

### 16.8 Overengineering the First Version

A beginner project starts with microservices, Kubernetes, queues, multiple databases, and several model providers.

**Better approach:** build a working monolith first and split it only when necessary.

---

## 17. Practical Mini Project

Build a minimal AI question-answering application.

### Required Features

* A text input in the frontend.
* A submit button.
* A `POST /api/chat` backend endpoint.
* Request validation.
* One AI service or mocked response.
* PostgreSQL or SQLite message storage.
* Loading and error states.
* A health-check endpoint.
* A Dockerfile.
* A README with setup instructions.

### Suggested Project Structure

```text
fullstack-ai-demo/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   │   └── chat.py
│   │   ├── schemas/
│   │   │   └── chat.py
│   │   ├── services/
│   │   │   └── ai_service.py
│   │   └── repositories/
│   │       └── message_repository.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── styles.css
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

### Minimum Data Flow

```text
1. User enters a message.
2. Frontend validates that the message is not empty.
3. Frontend sends a POST request.
4. Backend validates the request.
5. Backend sends the message to the AI service.
6. Backend stores the result.
7. Backend returns JSON.
8. Frontend displays the answer.
```

---

## 18. Practice Exercises

### Exercise 1 — Explain the Architecture

Without reading the lesson, explain the following terms in five sentences:

* Frontend.
* Backend.
* API.
* Database.
* AI service.

### Exercise 2 — Create an API Route

Create a route:

```text
POST /api/summarize
```

Request:

```json
{
  "text": "Long text to summarize"
}
```

Response:

```json
{
  "summary": "Short summary"
}
```

Add validation for:

* Empty text.
* Text that is too long.
* Model timeout.
* Invalid model response.

### Exercise 3 — Connect the Frontend

Create a small HTML and JavaScript interface that calls the summarization endpoint and displays:

* Loading state.
* Successful result.
* Validation error.
* Server error.

### Exercise 4 — Add Persistence

Store each request with:

* Input text.
* Generated summary.
* Model name.
* Creation time.
* Processing duration.

### Exercise 5 — Production Failure Analysis

Choose one failure:

* Database connection failure.
* Model timeout.
* Invalid API key.
* Rate-limit response.
* Malformed JSON.
* Frontend CORS error.

Write:

1. The visible symptom.
2. The likely cause.
3. The logs you would inspect.
4. The reproduction steps.
5. The fix.
6. A test that prevents regression.

---

## 19. Completion Checklist

### Concepts

* [ ] I can explain frontend, backend, API, database, and infrastructure.
* [ ] I understand how an HTTP request moves through a full-stack application.
* [ ] I understand why AI provider keys must remain on the backend.
* [ ] I can explain where RAG, agents, and model calls fit into the architecture.

### Implementation

* [ ] I created at least one working REST endpoint.
* [ ] I connected a frontend to the endpoint.
* [ ] I validated request data.
* [ ] I handled loading and error states.
* [ ] I connected a database or created a clear database schema.
* [ ] I added a health-check endpoint.
* [ ] I ran the application locally.
* [ ] I created a Docker image.

### Engineering Quality

* [ ] I used environment variables for secrets.
* [ ] I wrote meaningful Git commits.
* [ ] I documented setup instructions.
* [ ] I recorded at least one limitation.
* [ ] I identified at least one production failure.
* [ ] I added at least one automated test.

---

## 20. Related AI Engineering Outcomes

Full-stack foundations prepare you to build:

* LLM chat applications.
* RAG document assistants.
* AI search interfaces.
* Multimodal analysis tools.
* Recommendation systems.
* AI agents with external tools.
* Prompt-management dashboards.
* Model evaluation platforms.
* Human-feedback interfaces.
* Production AI APIs.

The complete workflow may eventually look like this:

```mermaid
flowchart LR
    UI[Frontend UI]
    API[Backend API]
    AUTH[Authentication]
    RAG[Retrieval Pipeline]
    AGENT[Agent or Tool Layer]
    MODEL[AI Model]
    DB[(Application Database)]
    VECTOR[(Vector Database)]
    OBS[Logs and Monitoring]

    UI --> API
    API --> AUTH
    API --> RAG
    API --> AGENT
    RAG --> VECTOR
    RAG --> MODEL
    AGENT --> MODEL
    API --> DB
    API --> OBS
    MODEL --> OBS
```

---

## 21. Related Project

Set up a minimal FastAPI or Node.js application containing:

* Git version control.
* A REST API.
* Request and response schemas.
* A database connection.
* One AI-related endpoint.
* Environment configuration.
* Error handling.
* Structured logging.
* Docker support.
* A complete README.

### Suggested Portfolio Description

> Built a full-stack AI assistant with a browser-based interface, REST API, database persistence, model integration, input validation, error handling, structured logging, and Docker-based deployment.

---

## 22. Summary

**Full-stack Basics** is an essential milestone in the AI Engineer roadmap.

An AI model alone is not a product. A usable AI system requires an interface, backend logic, APIs, data storage, security, observability, deployment, and reliable failure handling.

The most effective way to learn these concepts is to build a small end-to-end application:

```text
User Interface
      ↓
Backend API
      ↓
AI Model and Database
      ↓
Validated Response
      ↓
Logs, Tests, and Deployment
```

Start with one working feature. Make the request flow visible, test its failure cases, document its limitations, and deploy it in a reproducible environment. This foundation will make later topics such as prompting, RAG, agents, multimodal systems, evaluation, and production monitoring much easier to understand.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
