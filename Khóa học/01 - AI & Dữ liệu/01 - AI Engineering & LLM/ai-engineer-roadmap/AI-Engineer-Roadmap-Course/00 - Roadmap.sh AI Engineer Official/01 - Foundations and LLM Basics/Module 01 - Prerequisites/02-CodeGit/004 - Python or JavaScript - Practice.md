# 004 — Python or JavaScript

**Course:** 01 — Foundations and LLM Basics
**Module:** Module 01 — Prerequisites
**Content Group:** Required Foundations
**Roadmap Source:** Prerequisites / Required Foundations
**Lesson Type:** Prerequisite
**Order in Module:** 004
**Suggested Duration:** 18 minutes

---

## 1. Overview

To become an AI Engineer, you need at least one programming language that can:

* Call AI model APIs.
* Process JSON data.
* Build backend services.
* Connect to databases.
* Handle files and user input.
* Run retrieval pipelines.
* Execute agent tools.
* Log errors and usage.
* Deploy applications.

For most beginners, the best starting choices are **Python** and **JavaScript**.

Python is widely used for AI, machine learning, data processing, automation, and backend APIs. JavaScript is the primary language of web browsers and is also commonly used for backend development through Node.js.

You do not need to master both languages before building AI applications. Choose one as your primary language, learn its fundamentals well, and add the second language when your project requires it.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain the roles of Python and JavaScript in AI engineering.
* Compare the strengths and limitations of both languages.
* Select a suitable language for a specific AI project.
* Work with variables, functions, collections, loops, and conditions.
* Read and write JSON data.
* Call an external AI API.
* Build a minimal REST endpoint.
* Handle errors and asynchronous operations.
* Organize code into maintainable modules.
* Identify common production problems and debugging strategies.

---

## 3. Where Programming Fits in AI Engineering

Programming connects the user, application, data, and AI model.

```mermaid
flowchart LR
    U[User Input] --> UI[Web or Mobile Interface]
    UI --> API[Backend API]
    API --> P[Application Logic]
    P --> R[Retrieval or Tools]
    P --> M[AI Model]
    R --> D[(Database or Documents)]
    D --> R
    R --> P
    M --> P
    P --> API
    API --> UI
    UI --> U
```

A prompt is only one part of this system.

Programming is responsible for:

* Receiving the user's request.
* Validating the input.
* Loading relevant data.
* Constructing the prompt.
* Calling the model.
* Parsing the response.
* Saving the result.
* Handling failures.
* Returning output to the user.

---

## 4. Python and JavaScript at a Glance

| Area                     | Python                                 | JavaScript                                  |
| ------------------------ | -------------------------------------- | ------------------------------------------- |
| Primary environment      | Servers, scripts, notebooks            | Browsers, servers, mobile and desktop apps  |
| AI and machine learning  | Excellent ecosystem                    | Growing ecosystem                           |
| Data science             | Excellent                              | Limited compared with Python                |
| Web frontend             | Not normally used directly             | Standard browser language                   |
| Backend APIs             | FastAPI, Django, Flask                 | Node.js, Express, NestJS                    |
| Syntax                   | Concise and readable                   | Flexible and widely used                    |
| Asynchronous programming | Supported with `asyncio`               | Central part of the language                |
| Beginner experience      | Usually easier for algorithms and data | Useful when learning web development        |
| Deployment               | Scripts, containers, APIs, serverless  | APIs, serverless, browser and edge runtimes |
| Best fit                 | AI, data, automation, backend          | Full-stack web and interactive applications |

---

## 5. When to Choose Python

Choose Python when your project focuses on:

* Machine learning.
* Data analysis.
* Natural language processing.
* Computer vision.
* Model training.
* Data pipelines.
* RAG systems.
* AI evaluation.
* Automation scripts.
* Backend AI services.

Common Python libraries include:

| Purpose          | Libraries                         |
| ---------------- | --------------------------------- |
| API development  | FastAPI, Flask, Django            |
| Data processing  | pandas, NumPy, Polars             |
| Machine learning | scikit-learn, PyTorch, TensorFlow |
| LLM applications | OpenAI SDK, LangChain, LlamaIndex |
| Validation       | Pydantic                          |
| Databases        | SQLAlchemy, psycopg               |
| Testing          | pytest                            |
| HTTP requests    | httpx, requests                   |

### Typical Python AI Stack

```mermaid
flowchart TB
    Client[Frontend or Mobile App]
    FastAPI[FastAPI Backend]
    Service[Python AI Service]
    RAG[Retrieval Pipeline]
    Model[LLM or ML Model]
    DB[(PostgreSQL)]
    Vector[(Vector Store)]

    Client --> FastAPI
    FastAPI --> Service
    Service --> Model
    Service --> RAG
    RAG --> Vector
    FastAPI --> DB
```

Python is usually the safest first choice when your main goal is AI engineering rather than frontend development.

---

## 6. When to Choose JavaScript

Choose JavaScript or TypeScript when your project focuses on:

* Browser-based AI applications.
* Interactive chat interfaces.
* Full-stack web development.
* Streaming model responses.
* Real-time applications.
* Serverless functions.
* Edge deployment.
* Node.js backend services.
* React, Vue, or Next.js applications.

Common JavaScript and TypeScript tools include:

| Purpose        | Tools                                   |
| -------------- | --------------------------------------- |
| Frontend       | React, Vue, Svelte, Next.js             |
| Backend        | Node.js, Express, Fastify, NestJS       |
| Validation     | Zod, Joi                                |
| Databases      | Prisma, Drizzle, Sequelize              |
| Testing        | Vitest, Jest, Playwright                |
| AI integration | OpenAI SDK, Vercel AI SDK, LangChain.js |
| Mobile         | React Native                            |
| Desktop        | Electron                                |

### Typical JavaScript AI Stack

```mermaid
flowchart TB
    Browser[React or Next.js UI]
    API[Node.js API]
    AI[AI Service]
    Tools[Agent Tools]
    Model[LLM Provider]
    DB[(Database)]

    Browser --> API
    API --> AI
    AI --> Model
    AI --> Tools
    API --> DB
```

JavaScript is especially useful when one language must run across both the frontend and backend.

---

## 7. Should You Learn Python or JavaScript First?

Use the following decision guide:

```mermaid
flowchart TD
    Start[What do you want to build first?]

    Start --> A{Mainly AI, data or automation?}
    A -- Yes --> Python[Start with Python]
    A -- No --> B{Mainly websites or interactive interfaces?}
    B -- Yes --> JavaScript[Start with JavaScript or TypeScript]
    B -- No --> C{Need both frontend and AI backend?}
    C -- Yes --> Hybrid[JavaScript frontend plus Python backend]
    C -- No --> Python
```

### Recommended Choices

| Goal                                     | Recommended Starting Language          |
| ---------------------------------------- | -------------------------------------- |
| Train machine-learning models            | Python                                 |
| Build a RAG backend                      | Python                                 |
| Analyze datasets                         | Python                                 |
| Automate repetitive work                 | Python                                 |
| Build a web interface                    | JavaScript                             |
| Build a React application                | JavaScript or TypeScript               |
| Create a full-stack web application      | TypeScript                             |
| Build an AI product with a modern web UI | JavaScript frontend and Python backend |
| Build a simple AI API quickly            | Python                                 |
| Build a serverless AI feature            | TypeScript or Python                   |

A common production architecture uses both:

```text
React or Flutter frontend
            ↓
Python FastAPI backend
            ↓
LLM, database, retrieval and tools
```

---

## 8. Core Programming Concepts

Regardless of the language you choose, learn the following concepts:

* Variables.
* Data types.
* Conditions.
* Loops.
* Functions.
* Lists and arrays.
* Dictionaries and objects.
* Error handling.
* Modules.
* File handling.
* JSON.
* HTTP requests.
* Asynchronous programming.
* Testing.
* Environment variables.

---

## 9. Variables and Data Types

### Python

```python
user_name = "Alex"
user_age = 24
temperature = 0.7
is_premium = True
selected_model = None
```

### JavaScript

```javascript
const userName = "Alex";
const userAge = 24;
const temperature = 0.7;
const isPremium = true;
let selectedModel = null;
```

### Common Data Types

| Concept             | Python  | JavaScript            |
| ------------------- | ------- | --------------------- |
| Text                | `str`   | `string`              |
| Integer             | `int`   | `number`              |
| Decimal             | `float` | `number`              |
| Boolean             | `bool`  | `boolean`             |
| Empty value         | `None`  | `null` or `undefined` |
| List                | `list`  | `Array`               |
| Key-value structure | `dict`  | `Object`              |

---

## 10. Lists, Dictionaries, Arrays, and Objects

AI applications often work with message lists and JSON objects.

### Python

```python
messages = [
    {
        "role": "system",
        "content": "You are a helpful AI assistant.",
    },
    {
        "role": "user",
        "content": "Explain embeddings.",
    },
]

model_config = {
    "model": "example-model",
    "temperature": 0.3,
    "max_tokens": 500,
}
```

### JavaScript

```javascript
const messages = [
  {
    role: "system",
    content: "You are a helpful AI assistant.",
  },
  {
    role: "user",
    content: "Explain embeddings.",
  },
];

const modelConfig = {
  model: "example-model",
  temperature: 0.3,
  maxTokens: 500,
};
```

---

## 11. Conditions

Conditions allow the application to make decisions.

### Python

```python
def select_model(is_premium: bool) -> str:
    if is_premium:
        return "advanced-model"

    return "fast-model"
```

### JavaScript

```javascript
function selectModel(isPremium) {
  if (isPremium) {
    return "advanced-model";
  }

  return "fast-model";
}
```

### AI Application Example

```python
if token_count > maximum_context:
    raise ValueError("The document exceeds the model context limit.")
```

```javascript
if (tokenCount > maximumContext) {
  throw new Error("The document exceeds the model context limit.");
}
```

---

## 12. Loops

Loops are useful for:

* Processing document chunks.
* Evaluating model outputs.
* Calling tools.
* Reading multiple files.
* Creating embeddings.
* Retrying failed requests.

### Python

```python
documents = [
    "Introduction to RAG",
    "Vector database basics",
    "Prompt engineering",
]

for document in documents:
    print(f"Processing: {document}")
```

### JavaScript

```javascript
const documents = [
  "Introduction to RAG",
  "Vector database basics",
  "Prompt engineering",
];

for (const document of documents) {
  console.log(`Processing: ${document}`);
}
```

---

## 13. Functions

Functions divide a program into reusable units.

### Python

```python
def build_prompt(question: str, context: str) -> str:
    return f"""
Use the context to answer the question.

Context:
{context}

Question:
{question}
""".strip()
```

### JavaScript

```javascript
function buildPrompt(question, context) {
  return `
Use the context to answer the question.

Context:
${context}

Question:
${question}
`.trim();
}
```

A function should ideally perform one clear responsibility.

Poor design:

```python
def handle_everything():
    # Validate input
    # Query database
    # Search documents
    # Build prompt
    # Call model
    # Save response
    # Send notification
    pass
```

Better design:

```python
def validate_question(question: str) -> str:
    ...

def retrieve_context(question: str) -> list[str]:
    ...

def generate_answer(question: str, context: list[str]) -> str:
    ...

def save_message(question: str, answer: str) -> None:
    ...
```

---

## 14. JSON Basics

JSON is one of the most important data formats in AI application development.

### Example JSON

```json
{
  "model": "example-model",
  "messages": [
    {
      "role": "user",
      "content": "What is an embedding?"
    }
  ],
  "temperature": 0.2
}
```

### Python: Encode and Decode JSON

```python
import json

payload = {
    "message": "Explain vector search.",
    "language": "en",
}

json_text = json.dumps(payload)
restored_payload = json.loads(json_text)

print(restored_payload["message"])
```

### JavaScript: Encode and Decode JSON

```javascript
const payload = {
  message: "Explain vector search.",
  language: "en",
};

const jsonText = JSON.stringify(payload);
const restoredPayload = JSON.parse(jsonText);

console.log(restoredPayload.message);
```

Common JSON problems include:

* Missing required fields.
* Incorrect field names.
* Invalid quotation marks.
* Unexpected data types.
* Extra text surrounding model-generated JSON.
* `null` values where strings are expected.

---

## 15. Calling an HTTP API

Most AI providers expose HTTP APIs.

### Python with `httpx`

```python
import os

import httpx


async def generate_answer(message: str) -> dict:
    api_key = os.getenv("AI_API_KEY")

    if not api_key:
        raise RuntimeError("AI_API_KEY is not configured")

    payload = {
        "model": "example-model",
        "messages": [
            {
                "role": "user",
                "content": message,
            }
        ],
    }

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(
            "https://api.example.com/v1/chat",
            json=payload,
            headers=headers,
        )

        response.raise_for_status()
        return response.json()
```

### JavaScript with `fetch`

```javascript
async function generateAnswer(message) {
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey) {
    throw new Error("AI_API_KEY is not configured");
  }

  const response = await fetch("https://api.example.com/v1/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "example-model",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`AI request failed: ${response.status}`);
  }

  return response.json();
}
```

Never place a private AI API key directly in browser code.

---

## 16. Understanding Asynchronous Programming

AI requests, database queries, file operations, and network calls may take time.

Applications should avoid blocking all other work while waiting.

### Python

```python
import asyncio


async def retrieve_documents() -> list[str]:
    await asyncio.sleep(1)
    return ["Document A", "Document B"]


async def call_model() -> str:
    await asyncio.sleep(1)
    return "Generated answer"


async def main() -> None:
    documents_task = retrieve_documents()
    model_task = call_model()

    documents, answer = await asyncio.gather(
        documents_task,
        model_task,
    )

    print(documents)
    print(answer)


asyncio.run(main())
```

### JavaScript

```javascript
async function retrieveDocuments() {
  return ["Document A", "Document B"];
}

async function callModel() {
  return "Generated answer";
}

async function main() {
  const [documents, answer] = await Promise.all([
    retrieveDocuments(),
    callModel(),
  ]);

  console.log(documents);
  console.log(answer);
}

main();
```

### Common Async Mistake

Incorrect JavaScript:

```javascript
const answer = generateAnswer("Hello");
console.log(answer);
```

This prints a `Promise`, not the final answer.

Correct:

```javascript
const answer = await generateAnswer("Hello");
console.log(answer);
```

---

## 17. Building a Minimal Python API

FastAPI is a popular framework for Python AI backends.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="Python AI API")


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)


class ChatResponse(BaseModel):
    answer: str
    model: str


@app.get("/health")
async def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    message = request.message.strip()

    if not message:
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty.",
        )

    answer = f"Python processed: {message}"

    return ChatResponse(
        answer=answer,
        model="demo-model",
    )
```

Run the API:

```bash
uvicorn main:app --reload
```

---

## 18. Building a Minimal JavaScript API

Express is a common Node.js backend framework.

```javascript
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (request, response) => {
  response.json({
    status: "ok",
  });
});

app.post("/api/chat", async (request, response) => {
  const message = request.body?.message?.trim();

  if (!message) {
    return response.status(400).json({
      error: "Message cannot be empty.",
    });
  }

  if (message.length > 2000) {
    return response.status(400).json({
      error: "Message is too long.",
    });
  }

  const answer = `JavaScript processed: ${message}`;

  return response.json({
    answer,
    model: "demo-model",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

Install and run:

```bash
npm install express
node server.js
```

---

## 19. TypeScript for AI Applications

TypeScript extends JavaScript with static types.

It can identify many errors before the application runs.

```typescript
interface ChatRequest {
  message: string;
  language?: "en" | "vi";
}

interface ChatResponse {
  answer: string;
  model: string;
  latencyMs: number;
}

function validateRequest(request: ChatRequest): void {
  if (!request.message.trim()) {
    throw new Error("Message cannot be empty.");
  }
}
```

JavaScript may accept an incorrect object until runtime:

```javascript
const request = {
  mesage: "Hello",
};
```

The field is misspelled as `mesage`.

TypeScript can report this error during development when a proper type is used.

For production JavaScript applications, TypeScript is generally preferable.

---

## 20. Error Handling

External systems can fail for many reasons:

* Network failure.
* Invalid API key.
* Rate limiting.
* Model timeout.
* Database connection failure.
* Invalid JSON.
* Unsupported file type.
* Excessive input length.

### Python

```python
import logging

import httpx

logger = logging.getLogger(__name__)


async def safely_call_model(message: str) -> dict:
    try:
        return await generate_answer(message)

    except httpx.TimeoutException as exc:
        logger.warning("Model request timed out", exc_info=exc)
        raise RuntimeError(
            "The AI service did not respond in time."
        ) from exc

    except httpx.HTTPStatusError as exc:
        status_code = exc.response.status_code

        logger.error(
            "Model provider returned status %s",
            status_code,
        )

        raise RuntimeError(
            f"AI provider request failed with status {status_code}."
        ) from exc

    except Exception as exc:
        logger.exception("Unexpected model failure")
        raise RuntimeError(
            "An unexpected generation error occurred."
        ) from exc
```

### JavaScript

```javascript
async function safelyCallModel(message) {
  try {
    return await generateAnswer(message);
  } catch (error) {
    console.error("Model request failed", {
      message: error.message,
      stack: error.stack,
    });

    throw new Error(
      "The AI service is temporarily unavailable.",
    );
  }
}
```

Do not silently ignore errors.

Poor:

```python
try:
    call_model()
except Exception:
    pass
```

Better:

```python
try:
    call_model()
except Exception:
    logger.exception("Model call failed")
    raise
```

---

## 21. Environment Variables

Configuration and secrets should be stored outside source code.

### `.env`

```env
APP_ENV=development
AI_API_KEY=replace-with-a-real-key
AI_MODEL=example-model
DATABASE_URL=postgresql://user:password@localhost:5432/ai_app
```

### Python

```python
import os

model_name = os.getenv("AI_MODEL", "default-model")
database_url = os.getenv("DATABASE_URL")

if not database_url:
    raise RuntimeError("DATABASE_URL is missing")
```

### JavaScript

```javascript
const modelName =
  process.env.AI_MODEL || "default-model";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing");
}
```

Never commit the real `.env` file to Git.

---

## 22. Organizing a Small AI Project

### Python Structure

```text
python-ai-app/
├── app/
│   ├── main.py
│   ├── api/
│   │   └── chat.py
│   ├── schemas/
│   │   └── chat.py
│   ├── services/
│   │   ├── ai_service.py
│   │   └── retrieval_service.py
│   ├── repositories/
│   │   └── message_repository.py
│   └── core/
│       └── config.py
├── tests/
│   └── test_chat.py
├── requirements.txt
├── Dockerfile
├── .env.example
└── README.md
```

### JavaScript or TypeScript Structure

```text
typescript-ai-app/
├── src/
│   ├── server.ts
│   ├── routes/
│   │   └── chat.ts
│   ├── schemas/
│   │   └── chat.ts
│   ├── services/
│   │   ├── ai-service.ts
│   │   └── retrieval-service.ts
│   ├── repositories/
│   │   └── message-repository.ts
│   └── config/
│       └── environment.ts
├── tests/
│   └── chat.test.ts
├── package.json
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```

---

## 23. Testing

Tests confirm that your application behaves correctly.

### Python with `pytest`

```python
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_chat_success() -> None:
    response = client.post(
        "/api/chat",
        json={"message": "Explain RAG"},
    )

    assert response.status_code == 200
    assert "answer" in response.json()


def test_chat_rejects_empty_message() -> None:
    response = client.post(
        "/api/chat",
        json={"message": ""},
    )

    assert response.status_code == 422
```

### JavaScript with Vitest

```javascript
import { describe, expect, it } from "vitest";

function validateMessage(message) {
  if (!message.trim()) {
    throw new Error("Message cannot be empty.");
  }

  return message.trim();
}

describe("validateMessage", () => {
  it("returns a valid message", () => {
    expect(validateMessage("Hello")).toBe("Hello");
  });

  it("rejects an empty message", () => {
    expect(() => validateMessage(" ")).toThrow(
      "Message cannot be empty.",
    );
  });
});
```

Important test cases include:

* Valid input.
* Empty input.
* Very long input.
* Missing environment variable.
* Model timeout.
* Provider rate limit.
* Invalid response schema.
* Database failure.
* Unauthorized request.

---

## 24. Python and JavaScript in a RAG Pipeline

The programming language coordinates each RAG step.

```mermaid
flowchart LR
    Q[User Question]
    V[Input Validation]
    E[Create Query Embedding]
    S[Search Vector Store]
    C[Select Context]
    P[Build Prompt]
    L[Call LLM]
    O[Validate Output]
    A[Return Answer]

    Q --> V
    V --> E
    E --> S
    S --> C
    C --> P
    P --> L
    L --> O
    O --> A
```

### Simplified Python Example

```python
def answer_question(question: str) -> str:
    validated_question = validate_question(question)
    query_embedding = create_embedding(validated_question)

    chunks = search_vector_store(
        query_embedding=query_embedding,
        limit=5,
    )

    context = "\n\n".join(chunk.text for chunk in chunks)

    prompt = build_prompt(
        question=validated_question,
        context=context,
    )

    return call_model(prompt)
```

### Simplified JavaScript Example

```javascript
async function answerQuestion(question) {
  const validatedQuestion = validateQuestion(question);
  const queryEmbedding =
    await createEmbedding(validatedQuestion);

  const chunks = await searchVectorStore({
    queryEmbedding,
    limit: 5,
  });

  const context = chunks
    .map((chunk) => chunk.text)
    .join("\n\n");

  const prompt = buildPrompt(
    validatedQuestion,
    context,
  );

  return callModel(prompt);
}
```

---

## 25. Python and JavaScript in an Agent Workflow

An AI agent may decide to call one or more tools.

```mermaid
flowchart TD
    U[User Request] --> M[LLM]
    M --> D{Tool required?}
    D -- No --> R[Return Direct Answer]
    D -- Yes --> T[Validate Tool Request]
    T --> X[Execute Tool]
    X --> O[Return Tool Output]
    O --> M
    M --> F[Generate Final Response]
```

The programming language must:

* Define available tools.
* Validate tool arguments.
* Execute functions.
* Handle permissions.
* Limit retries.
* Record tool results.
* Prevent unsafe operations.
* Return results to the model.

### Example Tool Function

```python
def get_order_status(order_id: str) -> dict[str, str]:
    if not order_id.startswith("ORD-"):
        raise ValueError("Invalid order ID")

    return {
        "order_id": order_id,
        "status": "processing",
    }
```

```javascript
function getOrderStatus(orderId) {
  if (!orderId.startsWith("ORD-")) {
    throw new Error("Invalid order ID");
  }

  return {
    orderId,
    status: "processing",
  };
}
```

---

## 26. Common Mistakes

### 26.1 Learning Syntax Without Building Anything

Knowing loops and functions is not enough.

Build small projects that combine:

* User input.
* API calls.
* JSON.
* Validation.
* Error handling.
* Database operations.
* Logging.

### 26.2 Copying Code Without Understanding Data Flow

You should be able to explain:

```text
Where does the input come from?
Where is it validated?
Which function calls the model?
Where is the result saved?
How is an error returned?
```

### 26.3 Ignoring Type and Schema Validation

AI applications frequently exchange structured data.

Without validation, one incorrect field may break the entire workflow.

### 26.4 Hardcoding API Keys

Never write real credentials directly in source code.

### 26.5 Mixing Synchronous and Asynchronous Code Incorrectly

Common symptoms include:

* Unresolved promises.
* Coroutine warnings.
* Blocked servers.
* Requests that never finish.
* Poor concurrency.

### 26.6 Catching Every Error Without Logging It

This makes production failures difficult to investigate.

### 26.7 Trusting Model Output

A model may return:

* Invalid JSON.
* Missing fields.
* Unexpected text.
* Unsupported tool names.
* Unsafe arguments.

Always validate model-generated output before using it.

### 26.8 Building Too Much Too Early

Do not begin with multiple services, queues, caches, and providers unless they solve a real problem.

Start with:

```text
One API
One model
One database
One working user flow
```

---

## 27. Debugging Workflow

Use a systematic process when an AI feature fails.

```mermaid
flowchart TD
    A[Feature Fails] --> B{Input valid?}
    B -- No --> C[Fix validation or frontend payload]
    B -- Yes --> D{API route reached?}
    D -- No --> E[Check URL, method, CORS and network]
    D -- Yes --> F{Model request sent?}
    F -- No --> G[Check application logic and configuration]
    F -- Yes --> H{Provider returned success?}
    H -- No --> I[Check key, rate limit and timeout]
    H -- Yes --> J{Response schema valid?}
    J -- No --> K[Fix parsing or schema validation]
    J -- Yes --> L{Result rendered correctly?}
    L -- No --> M[Inspect frontend state]
    L -- Yes --> N[Reproduce with logs and exact input]
```

### Useful Debugging Information

Record:

* Request ID.
* Route.
* User ID when appropriate.
* Model name.
* Input size.
* Status code.
* Processing duration.
* Error type.
* Retry count.
* Token usage.
* Tool name.

Do not log secret keys or sensitive personal content.

---

## 28. Practical Mini Project

Build a small text summarization service using either Python or JavaScript.

### Required Features

* `POST /api/summarize` endpoint.
* Text input validation.
* Minimum and maximum input lengths.
* One model call or mocked model service.
* Structured JSON response.
* Error handling.
* Request logging.
* Health-check endpoint.
* Environment configuration.
* Unit tests.
* Dockerfile.

### Request

```json
{
  "text": "A long article to summarize...",
  "max_sentences": 3
}
```

### Response

```json
{
  "summary": "A concise summary of the article.",
  "model": "example-model",
  "processing_time_ms": 840
}
```

### Suggested Flow

```mermaid
sequenceDiagram
    participant User
    participant API
    participant Validator
    participant Model
    participant Database

    User->>API: POST /api/summarize
    API->>Validator: Validate text and options
    Validator-->>API: Valid request
    API->>Model: Generate summary
    Model-->>API: Summary
    API->>Database: Save request metadata
    Database-->>API: Saved
    API-->>User: JSON response
```

---

## 29. Practice Exercises

### Exercise 1 — Language Comparison

Write five sentences explaining:

* What Python is best suited for.
* What JavaScript is best suited for.
* Which language you will learn first.
* Why it matches your current goals.
* When you may need the second language.

### Exercise 2 — Data Processing

Create a function that receives a list of model responses and returns only successful responses.

Input:

```json
[
  {"status": "success", "text": "Answer A"},
  {"status": "failed", "text": null},
  {"status": "success", "text": "Answer B"}
]
```

Expected output:

```json
[
  "Answer A",
  "Answer B"
]
```

### Exercise 3 — API Route

Create:

```text
POST /api/classify
```

Request:

```json
{
  "text": "The application is easy to use."
}
```

Response:

```json
{
  "label": "positive",
  "confidence": 0.94
}
```

### Exercise 4 — Failure Handling

Handle the following cases:

* Empty input.
* Input longer than the configured limit.
* Missing API key.
* Provider timeout.
* Invalid model response.
* Rate-limit response.

### Exercise 5 — Production Investigation

Choose one possible failure and document:

1. The user-visible symptom.
2. The likely cause.
3. The logs needed.
4. The reproduction steps.
5. The code fix.
6. The regression test.

---

## 30. Completion Checklist

### Programming Foundations

* [ ] I understand variables, conditions, loops, and functions.
* [ ] I can work with lists, arrays, dictionaries, and objects.
* [ ] I can read and write JSON.
* [ ] I understand modules and project structure.
* [ ] I understand basic asynchronous programming.

### AI Application Skills

* [ ] I can call an external API.
* [ ] I can send model messages as JSON.
* [ ] I can parse a structured response.
* [ ] I can validate model output.
* [ ] I can build a minimal REST endpoint.
* [ ] I can handle a model timeout.
* [ ] I can use environment variables.

### Engineering Quality

* [ ] I have created at least one working demo.
* [ ] I have tested the happy path.
* [ ] I have tested at least one failure path.
* [ ] I have added useful logging.
* [ ] I have documented one limitation.
* [ ] I have stored no secrets in source control.

---

## 31. Related Outcome

This lesson prepares the programming, backend, and web foundations required before building production AI applications.

After completing it, you should be ready to study:

* LLM API integration.
* Prompt engineering.
* Embeddings.
* Vector databases.
* RAG pipelines.
* AI agents.
* Tool calling.
* Multimodal applications.
* Model evaluation.
* AI deployment and monitoring.

---

## 32. Related Project

Create a minimal FastAPI or Node.js application containing:

* Git version control.
* A REST endpoint.
* JSON request and response schemas.
* Input validation.
* One AI-related service.
* Database configuration.
* Environment variables.
* Error handling.
* Logging.
* Automated tests.
* Docker support.
* A complete README.

### Suggested Portfolio Description

> Built a production-oriented AI API using Python FastAPI or TypeScript Node.js, including request validation, asynchronous model integration, structured responses, error handling, logging, automated tests, database configuration, and Docker deployment.

---

## 33. Summary

Python and JavaScript are both strong foundations for modern AI engineering.

Choose **Python** when your work centers on:

* AI models.
* Data.
* Automation.
* RAG.
* Machine learning.
* Backend AI services.

Choose **JavaScript or TypeScript** when your work centers on:

* Websites.
* Interactive interfaces.
* Full-stack applications.
* Streaming.
* Serverless systems.
* Browser-based AI features.

Many real AI products use both:

```text
JavaScript or TypeScript frontend
                 ↓
Python or Node.js backend
                 ↓
Model, retrieval, tools and database
```

The most important goal is not memorizing language syntax. It is learning how to transform user input into a reliable software workflow:

```mermaid
flowchart LR
    Input[User Input]
    Validate[Validate]
    Process[Application Logic]
    AI[Model or AI Tool]
    Check[Validate Output]
    Save[(Save Data)]
    Return[Return Result]
    Monitor[Log and Monitor]

    Input --> Validate
    Validate --> Process
    Process --> AI
    AI --> Check
    Check --> Save
    Save --> Return
    Process --> Monitor
    AI --> Monitor
    Return --> Monitor
```

Select one language, build a small end-to-end application, test its failure cases, and document what you learn. Strong programming fundamentals will make every later topic—prompting, RAG, agents, evaluation, deployment, cost control, safety, and user experience—easier to implement.

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
