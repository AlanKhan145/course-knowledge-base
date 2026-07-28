# 001 — Deploy a Production AI Application

**Course:** 05 — Production and Portfolio
**Module:** Module 13 — Production AI and LLMOps
**Content Group:** Production Concerns
**Roadmap Source:** Production AI and LLMOps / Production Concerns
**Lesson Type:** Production AI
**Order in Module:** 001
**Suggested Duration:** 24 minutes

---

## 1. Overview

Building an AI prototype is relatively easy. Deploying it as a reliable production application is much harder.

A production AI application must handle more than HTTP requests and database operations. It must also manage:

* Model latency
* Token consumption
* Inference costs
* Prompt and model versions
* Retrieval quality
* Tool execution
* Hallucinations
* Safety incidents
* Provider failures
* Rate limits
* User feedback

Traditional application deployment practices still apply, including containerization, environment configuration, health checks, monitoring, scaling, security, and rollback procedures.

However, AI applications require an additional observability layer for understanding model behavior.

A useful production trace may look like this:

```text
request_id
    -> user request
    -> prompt version
    -> retrieval
    -> model call
    -> tool calls
    -> output validation
    -> safety checks
    -> response
    -> user feedback
```

The goal is not merely to make the application available online. The goal is to make it:

* Reliable
* Observable
* Secure
* Cost-efficient
* Scalable
* Testable
* Recoverable
* Safe to update

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

1. Explain how production deployment differs from running a local AI demo.
2. Identify the main components of a production AI architecture.
3. Package an AI API using containers.
4. configure environment variables and secrets safely.
5. Add request IDs, structured logs, latency tracking, and error reporting.
6. Track model usage, token consumption, and estimated cost.
7. Handle timeouts, retries, rate limits, and provider failures.
8. Define health checks and readiness checks.
9. create a basic deployment and rollback strategy.
10. Document a production AI project in a portfolio README.

---

## 3. What Does “Production” Mean?

A production application serves real users under real-world conditions.

Unlike a local demo, a production system must expect:

* Invalid requests
* Unexpected user behavior
* Traffic spikes
* Slow model responses
* External service failures
* Expired credentials
* Database connection problems
* Prompt injection attempts
* Unsafe inputs
* Incomplete model outputs
* Increased infrastructure costs

A local demo might follow this workflow:

```text
User -> API -> LLM -> Response
```

A production AI system usually requires a more complete pipeline:

```mermaid
flowchart LR
    U[User or Client] --> G[API Gateway]
    G --> A[Authentication]
    A --> R[Rate Limiter]
    R --> S[AI Application Service]

    S --> V[Input Validation]
    V --> C[Context and Retrieval]
    C --> M[Model Gateway]
    M --> P1[Primary Model Provider]
    M --> P2[Fallback Provider]

    S --> T[Tool Services]
    S --> D[(Application Database)]
    S --> K[(Cache)]
    S --> Q[Output and Safety Validation]

    Q --> U

    S --> O[Logs, Metrics and Traces]
    M --> O
    T --> O
    Q --> O
```

The model is only one component of the complete system.

---

## 4. Core Production Concerns

### 4.1 Reliability

Reliability means the application continues to work under normal failures.

Examples of failure conditions include:

* The model provider becomes unavailable.
* A model call exceeds the timeout.
* The vector database responds slowly.
* A tool returns malformed data.
* The generated response does not match the expected schema.
* The application receives more traffic than expected.

Common reliability techniques include:

* Timeouts
* Retries with exponential backoff
* Circuit breakers
* Provider fallbacks
* Response validation
* Graceful degradation
* Queue-based processing
* Caching
* Idempotency keys

---

### 4.2 Observability

Observability helps the engineering team understand what is happening inside the system.

A production AI application should normally collect three categories of telemetry:

| Category | Purpose                            | Examples                                    |
| -------- | ---------------------------------- | ------------------------------------------- |
| Logs     | Record individual events           | Request received, model error, tool failure |
| Metrics  | Measure system behavior over time  | Request rate, latency, token usage          |
| Traces   | Follow one request across services | API → retrieval → model → tools             |

AI-specific observability should include:

* Model provider
* Model name
* Prompt version
* Input token count
* Output token count
* Total token count
* Estimated cost
* Retrieval duration
* Retrieved document IDs
* Number of tool calls
* Model latency
* End-to-end latency
* Validation result
* Safety result
* User feedback

---

### 4.3 Cost Control

LLM applications have variable costs.

The cost of a request may depend on:

* Input tokens
* Output tokens
* Model selection
* Number of retries
* Number of agent steps
* Number of retrieved documents
* Embedding requests
* Image, audio, or video processing
* Tool API usage

A simple estimated cost formula is:

```text
request_cost =
    input_tokens × input_token_price
    + output_tokens × output_token_price
    + tool_cost
    + retrieval_cost
```

Example:

```python
def estimate_llm_cost(
    input_tokens: int,
    output_tokens: int,
    input_price_per_million: float,
    output_price_per_million: float,
) -> float:
    input_cost = input_tokens / 1_000_000 * input_price_per_million
    output_cost = output_tokens / 1_000_000 * output_price_per_million

    return round(input_cost + output_cost, 6)
```

Do not hard-code model prices permanently into application logic. Store them in configuration because pricing can change.

---

### 4.4 Security

AI applications inherit standard web security risks and introduce new AI-specific risks.

Standard risks include:

* Exposed API keys
* Broken authentication
* SQL injection
* Cross-site scripting
* Unrestricted file uploads
* Insecure network access
* Missing authorization checks

AI-specific risks include:

* Prompt injection
* Retrieval poisoning
* Sensitive-data leakage
* Unsafe tool execution
* Excessive agent permissions
* Model-generated malicious content
* Unauthorized access to private documents

Security controls may include:

* Authentication and authorization
* Input size limits
* Content-type validation
* Secret management
* Network isolation
* Tool allowlists
* Output validation
* Data redaction
* Audit logs
* Human approval for high-risk actions

---

### 4.5 Safety

Safety is not a single prompt instruction. It is a system-level concern.

A production safety pipeline may contain:

```mermaid
flowchart LR
    I[User Input] --> S1[Input Safety Check]
    S1 -->|Allowed| A[AI Workflow]
    S1 -->|Blocked| B[Safe Refusal]

    A --> M[Model Output]
    M --> S2[Output Safety Check]

    S2 -->|Valid| R[Return Response]
    S2 -->|Unsafe| F[Filter, Rewrite or Escalate]

    B --> L[Safety Log]
    F --> L
```

Safety events should be logged without storing unnecessary sensitive content.

---

## 5. Recommended Production Architecture

A small production AI application may use the following architecture:

```mermaid
flowchart TB
    CLIENT[Web or Mobile Client]

    subgraph Edge
        CDN[CDN or Load Balancer]
        WAF[Web Application Firewall]
        RATE[Rate Limiter]
    end

    subgraph Application
        API[AI API Service]
        WORKER[Background Worker]
        SCHEDULER[Scheduled Jobs]
    end

    subgraph AI
        ROUTER[Model Router]
        LLM1[Primary LLM]
        LLM2[Fallback LLM]
        EMBED[Embedding Model]
    end

    subgraph Data
        DB[(PostgreSQL)]
        VECTOR[(Vector Database)]
        CACHE[(Redis Cache)]
        OBJECT[(Object Storage)]
        QUEUE[(Message Queue)]
    end

    subgraph Operations
        LOGS[Centralized Logs]
        METRICS[Metrics Dashboard]
        TRACES[Distributed Traces]
        ALERTS[Alerts]
    end

    CLIENT --> CDN
    CDN --> WAF
    WAF --> RATE
    RATE --> API

    API --> ROUTER
    ROUTER --> LLM1
    ROUTER --> LLM2
    API --> EMBED

    API --> DB
    API --> VECTOR
    API --> CACHE
    API --> OBJECT
    API --> QUEUE

    QUEUE --> WORKER
    SCHEDULER --> WORKER

    API --> LOGS
    API --> METRICS
    API --> TRACES
    WORKER --> LOGS
    METRICS --> ALERTS
```

Not every project needs every component. Start with the minimum architecture required for your traffic, reliability requirements, and budget.

---

## 6. Deployment Workflow

A production deployment normally follows several stages.

```mermaid
flowchart LR
    C[Code Change] --> T[Automated Tests]
    T --> B[Build Container]
    B --> S[Security Scan]
    S --> ST[Deploy to Staging]
    ST --> E[Evaluation and Smoke Tests]
    E --> AP[Approval]
    AP --> P[Production Deployment]
    P --> M[Monitor]
    M -->|Healthy| DONE[Complete]
    M -->|Regression| RB[Rollback]
```

A practical workflow is:

1. Develop the feature locally.
2. Run unit and integration tests.
3. Run prompt and model evaluations.
4. Build a container image.
5. Scan dependencies and the image.
6. Deploy to a staging environment.
7. Run smoke tests.
8. Run safety regression tests.
9. Deploy to production gradually.
10. Monitor production metrics.
11. Roll back if important metrics regress.

---

## 7. Packaging the Application with Docker

Containers provide a consistent runtime environment across development, staging, and production.

### Example project structure

```text
production-ai-app/
├── app/
│   ├── main.py
│   ├── config.py
│   ├── middleware.py
│   ├── model_gateway.py
│   ├── schemas.py
│   └── services/
├── tests/
├── requirements.txt
├── Dockerfile
├── .dockerignore
├── .env.example
└── README.md
```

### Example Dockerfile

```dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN addgroup --system appgroup \
    && adduser --system --ingroup appgroup appuser

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY app ./app

USER appuser

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

### Example `.dockerignore`

```text
.git
.github
.env
.venv
__pycache__
*.pyc
.pytest_cache
.coverage
htmlcov
tests
docs
```

### Build and run

```bash
docker build -t production-ai-app:latest .
```

```bash
docker run \
  --rm \
  -p 8000:8000 \
  --env-file .env \
  production-ai-app:latest
```

Never copy a real `.env` file into the container image.

---

## 8. Environment Variables and Secrets

Configuration should be separated from application code.

### Example `.env.example`

```bash
APP_ENV=development
APP_VERSION=0.1.0
LOG_LEVEL=INFO

PRIMARY_MODEL_PROVIDER=openai
PRIMARY_MODEL_NAME=your-model-name
FALLBACK_MODEL_PROVIDER=another-provider
FALLBACK_MODEL_NAME=your-fallback-model

MODEL_TIMEOUT_SECONDS=30
MODEL_MAX_RETRIES=2

DATABASE_URL=postgresql://user:password@localhost:5432/app
REDIS_URL=redis://localhost:6379/0

LLM_API_KEY=replace-me
OBSERVABILITY_API_KEY=replace-me
```

The `.env.example` file contains variable names and safe placeholders. It should not contain real secrets.

### Production secret storage

In production, use a secret-management solution rather than storing secrets in:

* Source code
* Git history
* Docker images
* Public CI logs
* Client-side applications
* Portfolio repositories

A secret should be:

* Encrypted at rest
* Restricted by role
* Rotatable
* Auditable
* Different between environments

---

## 9. Configuration Validation

The application should fail immediately when required configuration is missing.

```python
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    app_version: str = "0.1.0"
    log_level: str = "INFO"

    llm_api_key: str = Field(min_length=1)
    primary_model_name: str = Field(min_length=1)

    model_timeout_seconds: float = Field(default=30, gt=0)
    model_max_retries: int = Field(default=2, ge=0, le=5)

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()
```

This prevents the application from starting with an incomplete configuration.

---

## 10. Request IDs and Structured Logging

Every request should have a unique identifier.

A request ID helps connect:

* API logs
* Model calls
* Retrieval operations
* Database queries
* Tool executions
* Error reports
* User support tickets

### Request lifecycle

```text
request_id
    -> API received
    -> authentication completed
    -> retrieval completed
    -> model completed
    -> output validated
    -> response returned
```

### FastAPI request ID middleware

```python
import logging
import time
import uuid

from fastapi import FastAPI, Request
from starlette.responses import Response

logger = logging.getLogger(__name__)

app = FastAPI()


@app.middleware("http")
async def request_observability(
    request: Request,
    call_next,
) -> Response:
    request_id = request.headers.get(
        "X-Request-ID",
        str(uuid.uuid4()),
    )

    request.state.request_id = request_id
    start_time = time.perf_counter()

    try:
        response = await call_next(request)

    except Exception:
        duration_ms = (time.perf_counter() - start_time) * 1000

        logger.exception(
            "request_failed",
            extra={
                "request_id": request_id,
                "method": request.method,
                "path": request.url.path,
                "duration_ms": round(duration_ms, 2),
            },
        )
        raise

    duration_ms = (time.perf_counter() - start_time) * 1000

    response.headers["X-Request-ID"] = request_id

    logger.info(
        "request_completed",
        extra={
            "request_id": request_id,
            "method": request.method,
            "path": request.url.path,
            "status_code": response.status_code,
            "duration_ms": round(duration_ms, 2),
        },
    )

    return response
```

Avoid logging:

* Passwords
* Access tokens
* API keys
* Full private documents
* Unredacted personal information
* Sensitive model prompts without a clear need

---

## 11. AI Request Trace

A useful AI trace should describe each important processing stage.

```text
request_id: req_8147
user_id: user_102
route: /api/v1/assistant
prompt_version: support-agent-v7
model_provider: provider-a
model_name: model-x
retrieval_latency_ms: 82
documents_retrieved: 5
model_latency_ms: 1432
input_tokens: 1284
output_tokens: 376
estimated_cost_usd: 0.0041
tool_calls: 1
validation_status: passed
safety_status: passed
total_latency_ms: 1689
status: success
```

Use structured fields rather than putting every value inside one long log message.

Structured logs are easier to:

* Search
* Filter
* Aggregate
* Visualize
* Use for alerts

---

## 12. Model Gateway Pattern

Application routes should not call model providers directly.

Create a model gateway or model service that centralizes:

* Authentication
* Timeout settings
* Retries
* Model selection
* Provider fallback
* Usage tracking
* Error normalization
* Logging
* Cost estimation

```mermaid
flowchart LR
    A[Application Service] --> G[Model Gateway]

    G --> C[Configuration]
    G --> R[Retry Policy]
    G --> T[Timeout Policy]
    G --> O[Observability]
    G --> V[Output Validation]

    G --> P1[Provider A]
    G --> P2[Provider B]
    G --> P3[Local Model]
```

### Simplified gateway example

```python
from dataclasses import dataclass
from time import perf_counter
from typing import Protocol


class ModelProvider(Protocol):
    async def generate(self, prompt: str) -> dict:
        ...


@dataclass
class ModelResult:
    text: str
    provider: str
    model: str
    input_tokens: int
    output_tokens: int
    latency_ms: float


class ModelGateway:
    def __init__(
        self,
        primary: ModelProvider,
        fallback: ModelProvider | None = None,
    ) -> None:
        self.primary = primary
        self.fallback = fallback

    async def generate(self, prompt: str) -> ModelResult:
        start = perf_counter()

        try:
            raw = await self.primary.generate(prompt)
            provider_name = "primary"

        except Exception:
            if self.fallback is None:
                raise

            raw = await self.fallback.generate(prompt)
            provider_name = "fallback"

        latency_ms = (perf_counter() - start) * 1000

        return ModelResult(
            text=raw["text"],
            provider=provider_name,
            model=raw["model"],
            input_tokens=raw.get("input_tokens", 0),
            output_tokens=raw.get("output_tokens", 0),
            latency_ms=round(latency_ms, 2),
        )
```

In a real system, catch specific provider exceptions rather than using a broad exception for every failure.

---

## 13. Timeouts

Every network request should have a timeout.

Without a timeout, a request may wait indefinitely and consume:

* Server connections
* Worker capacity
* Memory
* User patience
* Infrastructure budget

Different operations may require different timeout values.

| Operation        | Example timeout strategy |
| ---------------- | ------------------------ |
| Cache lookup     | Very short               |
| Database query   | Short                    |
| Vector search    | Short to moderate        |
| LLM request      | Moderate                 |
| Image generation | Longer or asynchronous   |
| Video processing | Background job           |

A timeout should produce a controlled error response rather than an unhandled crash.

```json
{
  "error": {
    "code": "MODEL_TIMEOUT",
    "message": "The AI service did not respond in time.",
    "request_id": "req_8147",
    "retryable": true
  }
}
```

---

## 14. Retry Strategy

Retries are useful for temporary failures such as:

* Network interruption
* HTTP 429 rate limiting
* HTTP 502 or 503 provider errors
* Temporary database connection failures

Retries are not appropriate for:

* Invalid API keys
* Malformed requests
* Unsupported models
* Content-policy rejection
* Deterministic validation errors

Use exponential backoff with random jitter:

```text
retry_delay = base_delay × 2^attempt + random_jitter
```

Example sequence:

```text
Attempt 1 -> wait approximately 0.5 seconds
Attempt 2 -> wait approximately 1 second
Attempt 3 -> wait approximately 2 seconds
```

Limit the number of retries. Otherwise, one user request may create multiple expensive model requests.

---

## 15. Circuit Breaker

A circuit breaker temporarily stops requests to a failing dependency.

```mermaid
stateDiagram-v2
    [*] --> Closed

    Closed --> Open: Failure threshold reached
    Open --> HalfOpen: Recovery timeout completed
    HalfOpen --> Closed: Test request succeeds
    HalfOpen --> Open: Test request fails
```

Circuit breaker states:

* **Closed:** Requests are sent normally.
* **Open:** Requests fail immediately or use a fallback.
* **Half-open:** A limited test request checks whether the provider has recovered.

This prevents a broken provider from causing repeated delays throughout the application.

---

## 16. Rate Limiting

Rate limits protect:

* Infrastructure capacity
* Provider quotas
* API budgets
* Other users
* High-cost endpoints

Rate limits may be based on:

* IP address
* User ID
* API key
* Subscription plan
* Route
* Token budget

Example policies:

```text
Anonymous user:
20 requests per hour

Authenticated free user:
100 requests per day

Paid user:
60 requests per minute

Image-generation endpoint:
5 requests per minute
```

Return a standard error when the limit is exceeded:

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later.",
    "retry_after_seconds": 30
  }
}
```

---

## 17. Health and Readiness Checks

Production platforms need to know whether the application is alive and whether it can receive traffic.

### Liveness check

A liveness check answers:

> Is the process running?

```python
@app.get("/health/live")
async def live() -> dict[str, str]:
    return {"status": "alive"}
```

### Readiness check

A readiness check answers:

> Can the application currently serve requests?

It may verify:

* Database access
* Cache availability
* Required configuration
* Model gateway initialization

```python
@app.get("/health/ready")
async def ready() -> dict[str, object]:
    checks = {
        "database": True,
        "cache": True,
        "model_gateway": True,
    }

    is_ready = all(checks.values())

    return {
        "status": "ready" if is_ready else "not_ready",
        "checks": checks,
    }
```

Avoid making an expensive paid model request on every health check.

---

## 18. Input Validation

Never send raw, unchecked input directly into an AI workflow.

Validate:

* Required fields
* Maximum text length
* File type
* File size
* Supported language
* Allowed tool names
* Numeric ranges
* URL format
* Conversation length

```python
from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(
        min_length=1,
        max_length=8_000,
    )
    session_id: str = Field(
        min_length=1,
        max_length=100,
    )
    max_output_tokens: int = Field(
        default=500,
        ge=50,
        le=2_000,
    )
```

Input limits improve reliability, cost control, and security.

---

## 19. Output Validation

Model output should not automatically be trusted.

Output validation may check:

* JSON structure
* Required fields
* Data types
* Allowed values
* Citation presence
* Tool-call arguments
* Safety rules
* Maximum response size

### Structured output example

```python
from typing import Literal

from pydantic import BaseModel, Field


class SupportAnswer(BaseModel):
    answer: str = Field(min_length=1)
    confidence: float = Field(ge=0, le=1)
    requires_human_review: bool
    category: Literal[
        "billing",
        "technical",
        "account",
        "other",
    ]
```

If validation fails, the application can:

1. Retry with a correction prompt.
2. Use a fallback model.
3. Return a safe default.
4. Send the case for human review.

---

## 20. Retrieval Observability

For a Retrieval-Augmented Generation application, the model response is only as good as the retrieved context.

Track:

* Search query
* Query rewrite version
* Embedding model
* Number of retrieved chunks
* Document IDs
* Similarity scores
* Retrieval latency
* Reranking latency
* Filter conditions
* Whether the answer cites retrieved context

```text
request_id -> query rewrite -> embedding -> vector search
           -> reranking -> selected context -> model -> citations
```

Do not log private retrieved content unless it is necessary and permitted.

---

## 21. Tool and Agent Observability

Agents can make multiple model and tool calls for one request.

A production trace should capture:

```text
Agent request
├── Planning model call
├── Search tool call
├── Database tool call
├── Calculation tool call
├── Final model call
└── Output validation
```

Useful agent metrics include:

* Number of reasoning steps
* Number of model calls
* Number of tool calls
* Failed tool calls
* Repeated tool calls
* Total token usage
* Total cost
* Maximum execution duration
* Human approval count
* Final task success

Set explicit limits:

```text
maximum_model_calls = 5
maximum_tool_calls = 8
maximum_total_tokens = 20,000
maximum_execution_seconds = 60
```

These limits reduce infinite loops and unexpected costs.

---

## 22. Important Production Metrics

### Application metrics

* Requests per second
* Error rate
* HTTP status distribution
* CPU usage
* Memory usage
* Active connections
* Queue depth

### AI metrics

* Model success rate
* Model timeout rate
* Input tokens per request
* Output tokens per request
* Cost per request
* Cost per user
* Cost per feature
* Provider fallback rate
* Validation failure rate
* Safety-block rate

### Quality metrics

* User rating
* Task completion rate
* Citation correctness
* Retrieval relevance
* Hallucination rate
* Escalation rate
* Response acceptance rate

### Latency metrics

Do not monitor only average latency.

Track percentiles:

* P50: typical request
* P95: slow request
* P99: very slow request

Example:

```text
P50 latency: 1.2 seconds
P95 latency: 3.8 seconds
P99 latency: 8.1 seconds
```

A small number of very slow requests may not appear clearly in the average.

---

## 23. Service-Level Indicators and Objectives

A Service-Level Indicator, or SLI, is a measured value.

Examples:

* Successful request percentage
* P95 response latency
* Model completion rate
* Valid output percentage

A Service-Level Objective, or SLO, is a target for that value.

Example:

```text
Availability SLO:
99.5% of requests succeed each month.

Latency SLO:
95% of text requests finish within 4 seconds.

Validation SLO:
99% of model responses pass schema validation.
```

SLOs help the team decide whether a release is healthy enough to keep.

---

## 24. Error Taxonomy

Define consistent error categories.

| Error Code                 | Meaning                               | Retryable |
| -------------------------- | ------------------------------------- | --------: |
| `INVALID_REQUEST`          | Input validation failed               |        No |
| `AUTHENTICATION_FAILED`    | Credentials are invalid               |        No |
| `RATE_LIMIT_EXCEEDED`      | Request quota exceeded                |   Usually |
| `MODEL_TIMEOUT`            | Model response was too slow           |       Yes |
| `MODEL_UNAVAILABLE`        | Provider is unavailable               |       Yes |
| `OUTPUT_VALIDATION_FAILED` | Generated output is invalid           | Sometimes |
| `RETRIEVAL_FAILED`         | Context retrieval failed              | Sometimes |
| `TOOL_EXECUTION_FAILED`    | External tool failed                  | Sometimes |
| `SAFETY_BLOCKED`           | Input or output violated safety rules |        No |
| `INTERNAL_ERROR`           | Unexpected application failure        | Sometimes |

A normalized error format makes frontend and monitoring behavior more predictable.

---

## 25. Deployment Strategies

### 25.1 Recreate deployment

The old version stops before the new version starts.

**Advantages:**

* Simple
* Low infrastructure cost

**Disadvantages:**

* Temporary downtime
* Higher deployment risk

---

### 25.2 Rolling deployment

Instances are replaced gradually.

```text
v1 v1 v1 v1
v2 v1 v1 v1
v2 v2 v1 v1
v2 v2 v2 v1
v2 v2 v2 v2
```

**Advantages:**

* Minimal downtime
* Common for container platforms

**Disadvantages:**

* Two versions may run simultaneously
* Database compatibility must be managed

---

### 25.3 Blue-green deployment

Two complete environments are maintained.

```mermaid
flowchart LR
    U[Users] --> R[Traffic Router]

    R -->|Current| B[Blue: Version 1]
    R -.->|Prepared| G[Green: Version 2]

    G --> T[Test and Verify]
    T -->|Switch Traffic| R
```

**Advantages:**

* Fast rollback
* Easy production verification

**Disadvantages:**

* Higher infrastructure cost

---

### 25.4 Canary deployment

A small percentage of traffic receives the new version first.

```text
95% traffic -> version 1
 5% traffic -> version 2
```

If metrics remain healthy:

```text
75% traffic -> version 1
25% traffic -> version 2
```

Eventually:

```text
100% traffic -> version 2
```

Canary deployment is useful when changing:

* Models
* Prompts
* Retrieval strategies
* Agent behavior
* Safety filters

---

## 26. Model and Prompt Versioning

Application code is not the only artifact that needs versioning.

Version:

* System prompts
* Prompt templates
* Model names
* Model parameters
* Embedding models
* Retrieval configuration
* Reranking logic
* Tool definitions
* Safety policies
* Evaluation datasets

Example metadata:

```json
{
  "application_version": "1.4.0",
  "prompt_version": "support-v12",
  "model_config_version": "model-routing-v4",
  "retrieval_version": "hybrid-search-v3",
  "safety_policy_version": "safety-v6"
}
```

Without versioning, it is difficult to explain why output quality changed.

---

## 27. Evaluation Before Deployment

Traditional unit tests are necessary but insufficient for AI systems.

A release pipeline should include:

1. Unit tests
2. Integration tests
3. API contract tests
4. Prompt regression tests
5. Retrieval evaluation
6. Safety evaluation
7. Cost comparison
8. Latency comparison
9. Manual review of important examples

Example release comparison:

| Metric            | Current Version | Candidate Version | Decision  |
| ----------------- | --------------: | ----------------: | --------- |
| Task success      |             86% |               90% | Improved  |
| Safety pass rate  |           99.2% |             99.3% | Improved  |
| P95 latency       |           3.1 s |             4.7 s | Regressed |
| Average cost      |          $0.008 |            $0.012 | Regressed |
| Citation accuracy |             91% |               94% | Improved  |

A candidate may improve quality while increasing cost and latency. Deployment is a trade-off, not a single-score decision.

---

## 28. Safety Regression Tests

Safety tests should be repeated whenever the team changes:

* Model provider
* Model version
* System prompt
* Tool permissions
* Retrieval source
* Output parser
* Safety policy

Test categories may include:

* Prompt injection
* Data extraction attempts
* Requests for private information
* Unsafe tool calls
* Policy-violating content
* False positive refusals
* Encoded or multilingual attacks

Store safety test cases in a version-controlled evaluation dataset.

---

## 29. Graceful Degradation

The system should still provide useful behavior when one component fails.

Examples:

### Retrieval unavailable

```text
Return a general answer with a notice that private knowledge sources
are temporarily unavailable.
```

### Primary model unavailable

```text
Use a configured fallback model.
```

### Tool unavailable

```text
Explain that live data could not be retrieved instead of inventing it.
```

### Streaming unavailable

```text
Return a normal non-streaming response.
```

### High traffic

```text
Reduce optional agent steps or queue long-running requests.
```

Graceful degradation is safer than returning fabricated results.

---

## 30. Background Jobs

Long-running AI tasks should not block normal API workers.

Suitable background tasks include:

* Large document ingestion
* PDF processing
* Batch embeddings
* Image generation
* Audio transcription
* Video analysis
* Long reports
* Evaluation runs

```mermaid
sequenceDiagram
    participant User
    participant API
    participant Queue
    participant Worker
    participant Storage

    User->>API: Submit long-running task
    API->>Queue: Enqueue job
    API-->>User: Return job ID

    Queue->>Worker: Deliver job
    Worker->>Storage: Save result
    Worker->>Queue: Mark complete

    User->>API: Check job status
    API->>Storage: Read result
    API-->>User: Return completed result
```

A background job should have:

* A unique job ID
* Status tracking
* Retry limits
* Timeout limits
* Idempotency
* Failure reason
* Result expiration policy

---

## 31. Caching

Caching can reduce latency and cost.

Possible cache targets include:

* Embeddings
* Retrieval results
* Model responses
* Tool responses
* User session summaries
* Prompt templates
* Configuration

A cache key should include every value that changes the result.

Example:

```text
cache_key =
    feature
    + model
    + prompt_version
    + language
    + normalized_input_hash
```

Be careful when caching:

* Personalized responses
* Private data
* Time-sensitive answers
* Responses that depend on user permissions
* Safety decisions

Always define a cache expiration strategy.

---

## 32. Rollback Strategy

Every production deployment should have a rollback plan.

A rollback plan answers:

* What signals trigger rollback?
* Who can approve rollback?
* Which application version is restored?
* Which prompt version is restored?
* Which model configuration is restored?
* Are database migrations backward-compatible?
* How long will rollback take?
* How will users be informed?

### Example rollback triggers

```text
Rollback when any condition remains true for 10 minutes:

- Error rate > 5%
- P95 latency > 8 seconds
- Safety pass rate decreases by more than 1%
- Cost per request increases by more than 30%
- Model validation failures exceed 3%
```

### Rollback record

```text
Incident: INC-2026-014
Deployment: app-v1.8.0
Started: 14:05 UTC
Rollback initiated: 14:23 UTC
Reason: output validation failure increased to 9.4%
Restored version: app-v1.7.3
Prompt restored: support-v18
Result: metrics returned to baseline
```

---

## 33. Production Runbook

A runbook provides step-by-step instructions for responding to known incidents.

### Runbook: sudden cost spike

**Symptoms**

* Token usage increases unexpectedly.
* Daily cost exceeds the expected budget.
* Agent requests contain more steps than usual.

**Checks**

1. Compare traffic volume with the previous period.
2. Check the average input and output tokens.
3. Check model routing and fallback usage.
4. Check retry counts.
5. Check agent loop counts.
6. Check whether prompt context became larger.
7. Check whether caching stopped working.

**Immediate actions**

1. Apply stricter rate limits.
2. Reduce maximum output tokens.
3. Disable optional agent tools.
4. Route low-priority traffic to a less expensive model.
5. Restore the previous prompt or model configuration.
6. Temporarily disable the affected feature if necessary.

---

### Runbook: primary model failure

**Symptoms**

* Increased timeout rate
* Provider HTTP 5xx responses
* Circuit breaker opens
* Fallback usage increases

**Checks**

1. Verify provider status.
2. Check credentials and quotas.
3. Check whether the configured model still exists.
4. Compare failures across regions.
5. Check network and DNS errors.

**Immediate actions**

1. Route requests to the fallback provider.
2. Reduce retry count.
3. Disable nonessential model calls.
4. Notify the engineering team.
5. Return a clear degraded-service message when no fallback is available.

---

## 34. Deployment Checklist

### Application

* [ ] Unit tests pass.
* [ ] Integration tests pass.
* [ ] API contracts are documented.
* [ ] Input validation is enabled.
* [ ] Output validation is enabled.
* [ ] Error responses use a consistent format.
* [ ] Long-running tasks use background workers.

### Configuration

* [ ] Environment variables are documented.
* [ ] Required variables are validated at startup.
* [ ] Development and production configurations are separated.
* [ ] Real secrets are not stored in source control.
* [ ] Secret rotation procedures are documented.

### Reliability

* [ ] Network requests have timeouts.
* [ ] Retries are limited.
* [ ] Retryable and non-retryable errors are separated.
* [ ] Provider fallback behavior is tested.
* [ ] Circuit breaker behavior is defined.
* [ ] Graceful degradation is implemented.

### Observability

* [ ] Every request has a request ID.
* [ ] Logs are structured.
* [ ] Sensitive fields are redacted.
* [ ] End-to-end latency is measured.
* [ ] Model latency is measured.
* [ ] Token usage is recorded.
* [ ] Estimated cost is recorded.
* [ ] Retrieval and tool calls are traced.
* [ ] Dashboards are available.
* [ ] Alerts are configured.

### Security and safety

* [ ] Authentication is enabled where required.
* [ ] Authorization is tested.
* [ ] Request size limits are configured.
* [ ] File uploads are validated.
* [ ] Tool access follows least privilege.
* [ ] Prompt-injection defenses are tested.
* [ ] Safety regression tests pass.
* [ ] Audit logs are available for sensitive operations.

### Deployment

* [ ] Container image builds successfully.
* [ ] Container runs as a non-root user.
* [ ] Health endpoints are available.
* [ ] Staging smoke tests pass.
* [ ] Database migrations are reviewed.
* [ ] Rollback instructions are documented.
* [ ] Previous stable versions remain available.
* [ ] Post-deployment metrics are monitored.

---

## 35. Minimal Production API Example

```python
import logging
import time
import uuid

from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)

app = FastAPI(
    title="Production AI Demo",
    version="0.1.0",
)


class GenerateRequest(BaseModel):
    prompt: str = Field(
        min_length=1,
        max_length=8_000,
    )


class GenerateResponse(BaseModel):
    request_id: str
    answer: str
    model: str
    input_tokens: int
    output_tokens: int
    latency_ms: float


async def call_model(prompt: str) -> dict:
    # Replace this function with a real model gateway.
    return {
        "answer": f"Example response for: {prompt}",
        "model": "example-model",
        "input_tokens": 20,
        "output_tokens": 40,
    }


@app.post(
    "/api/v1/generate",
    response_model=GenerateResponse,
)
async def generate(
    payload: GenerateRequest,
    request: Request,
) -> GenerateResponse:
    request_id = getattr(
        request.state,
        "request_id",
        str(uuid.uuid4()),
    )

    start_time = time.perf_counter()

    try:
        result = await call_model(payload.prompt)

    except TimeoutError as exc:
        logger.warning(
            "model_timeout",
            extra={"request_id": request_id},
        )

        raise HTTPException(
            status_code=504,
            detail={
                "code": "MODEL_TIMEOUT",
                "message": "The model request timed out.",
                "request_id": request_id,
            },
        ) from exc

    latency_ms = (time.perf_counter() - start_time) * 1000

    logger.info(
        "model_request_completed",
        extra={
            "request_id": request_id,
            "model": result["model"],
            "input_tokens": result["input_tokens"],
            "output_tokens": result["output_tokens"],
            "latency_ms": round(latency_ms, 2),
        },
    )

    return GenerateResponse(
        request_id=request_id,
        answer=result["answer"],
        model=result["model"],
        input_tokens=result["input_tokens"],
        output_tokens=result["output_tokens"],
        latency_ms=round(latency_ms, 2),
    )


@app.get("/health/live")
async def live() -> dict[str, str]:
    return {"status": "alive"}
```

This example is intentionally small. A real application should separate:

* Routes
* Schemas
* Business services
* Model providers
* Configuration
* Observability
* Error handling

---

## 36. Dashboard Design

A simple production dashboard can contain five sections.

### Traffic

* Total requests
* Requests per minute
* Active users
* Requests by endpoint

### Reliability

* Success rate
* Error rate
* Timeout rate
* Fallback-provider rate

### Performance

* P50 latency
* P95 latency
* P99 latency
* Retrieval latency
* Model latency

### Usage and cost

* Input tokens
* Output tokens
* Cost per request
* Cost by model
* Cost by feature
* Daily budget consumption

### Quality and safety

* User rating
* Validation pass rate
* Citation accuracy
* Safety-block rate
* Human-escalation rate

```text
Production AI Dashboard
├── Traffic
├── Reliability
├── Latency
├── Tokens and Cost
└── Quality and Safety
```

A dashboard should help engineers make decisions, not merely display every available metric.

---

## 37. Practical Exercise

Build a small production-ready AI API.

### Part 1: Request observability

Add:

* Request ID
* Request duration
* HTTP status
* Structured error logs

Expected log:

```json
{
  "event": "request_completed",
  "request_id": "req_8147",
  "method": "POST",
  "path": "/api/v1/generate",
  "status_code": 200,
  "duration_ms": 1472.8
}
```

---

### Part 2: Model observability

Track:

* Model provider
* Model name
* Input tokens
* Output tokens
* Model latency
* Estimated cost
* Prompt version

Expected trace:

```json
{
  "event": "model_completed",
  "request_id": "req_8147",
  "provider": "provider-a",
  "model": "model-x",
  "prompt_version": "assistant-v3",
  "input_tokens": 821,
  "output_tokens": 244,
  "latency_ms": 1189.4,
  "estimated_cost_usd": 0.0037
}
```

---

### Part 3: Reliability

Implement:

* A model timeout
* A maximum of two retries
* A fallback model
* A normalized error response

Test the behavior by intentionally simulating a provider failure.

---

### Part 4: Deployment

Create:

* `Dockerfile`
* `.dockerignore`
* `.env.example`
* `/health/live`
* `/health/ready`
* Production startup command

Run the application locally inside the container.

---

### Part 5: Operations

Write a short runbook for:

1. A sudden cost spike
2. A model-provider outage
3. Increased output-validation failures

For each incident, document:

* Symptoms
* Metrics to inspect
* Immediate actions
* Rollback conditions
* Recovery verification

---

## 38. Portfolio Project

### Project title

**Production AI Assistant with LLM Observability**

### Suggested features

* FastAPI backend
* Containerized deployment
* LLM provider abstraction
* Primary and fallback models
* Request IDs
* Structured logging
* Token tracking
* Cost estimation
* Health checks
* Rate limiting
* Output validation
* Safety evaluation
* Monitoring dashboard
* Deployment runbook

### Example repository structure

```text
production-ai-assistant/
├── app/
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── observability/
│   ├── providers/
│   ├── services/
│   └── main.py
├── evaluations/
│   ├── quality_cases.json
│   └── safety_cases.json
├── dashboards/
│   └── dashboard.json
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   └── runbook.md
├── tests/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── requirements.txt
└── README.md
```

---

## 39. Portfolio README Requirements

A strong portfolio README should explain:

### Problem

What real problem does the application solve?

### Architecture

Include a diagram showing:

* Client
* API
* Retrieval
* Model
* Database
* Monitoring

### Setup

Document:

* Required software
* Environment variables
* Installation commands
* Local development commands
* Container commands

### Observability

Explain how the project tracks:

* Request IDs
* Latency
* Errors
* Tokens
* Cost
* Model versions
* Safety events

### Reliability

Explain:

* Timeouts
* Retries
* Fallbacks
* Rate limits
* Graceful degradation

### Evaluation

Include:

* Evaluation dataset
* Quality metrics
* Safety tests
* Known limitations

### Deployment

Document:

* Deployment target
* Health checks
* CI/CD workflow
* Rollback procedure

### Evidence

Add:

* API screenshots
* Dashboard screenshots
* Example traces
* Test results
* Public demo link when appropriate

---

## 40. Common Mistakes

### 40.1 Deploying without observability

The application is online, but no one can explain:

* Why requests are slow
* Which model caused an error
* Why costs increased
* Which prompt version generated a bad answer

**Improvement:** Add structured logs, metrics, traces, and version metadata before deployment.

---

### 40.2 Logging sensitive data

The application stores complete user prompts, private documents, or credentials in logs.

**Improvement:** Redact sensitive values and log only the minimum data needed for operations.

---

### 40.3 Missing timeouts

A model or tool request can remain open indefinitely.

**Improvement:** Define explicit timeouts for every external dependency.

---

### 40.4 Retrying every failure

The application retries invalid requests or safety refusals.

**Improvement:** Retry only failures that are likely to be temporary.

---

### 40.5 No fallback strategy

One provider outage makes the entire application unavailable.

**Improvement:** Add a fallback provider or a controlled degraded mode.

---

### 40.6 Unlimited agent loops

An agent repeatedly calls models and tools, causing high latency and cost.

**Improvement:** Limit agent steps, token usage, execution time, and tool calls.

---

### 40.7 Monitoring average latency only

The average appears healthy while some users wait much longer.

**Improvement:** Monitor P50, P95, and P99 latency.

---

### 40.8 Hard-coded secrets

API keys are stored in application code or committed to Git.

**Improvement:** Use environment variables and production secret management.

---

### 40.9 No safety regression testing

The team changes the model or prompt and assumes safety behavior remains unchanged.

**Improvement:** Run a versioned safety evaluation before every important release.

---

### 40.10 No rollback plan

The team discovers a production issue but does not know how to restore the previous version.

**Improvement:** Keep stable artifacts, define rollback triggers, and test the rollback procedure.

---

## 41. Completion Checklist

* [ ] I can explain production AI deployment in one or two minutes.
* [ ] I understand how AI deployment differs from traditional app deployment.
* [ ] I can describe a basic production AI architecture.
* [ ] I can package an API in a container.
* [ ] I can configure environment variables without exposing secrets.
* [ ] I can add request IDs and structured logs.
* [ ] I can measure model and end-to-end latency.
* [ ] I can record token usage and estimate cost.
* [ ] I understand timeouts, retries, fallbacks, and circuit breakers.
* [ ] I can define liveness and readiness checks.
* [ ] I can explain rolling, blue-green, and canary deployments.
* [ ] I can create a deployment checklist.
* [ ] I can write a basic incident runbook.
* [ ] I can define a rollback strategy.
* [ ] I have documented at least one limitation or open question.

---

## 42. Related Outcome

Prepare AI applications for production using:

* Repeatable deployment
* Structured observability
* Cost tracking
* Reliability controls
* Security controls
* Safety regression tests
* Versioned prompts and models
* Monitoring and rollback procedures

---

## 43. Related Project

Build a public production AI demo that includes:

* A containerized API
* Model and prompt versioning
* Request tracing
* Token tracking
* Cost tracking
* Error monitoring
* Health checks
* Provider fallback
* A small operations dashboard
* A deployment runbook
* A professional portfolio README

---

## 44. Key Takeaways

Deploying a production AI application is not simply uploading an API to a cloud platform.

A complete production system must answer the following questions:

1. Is the application available?
2. Is it responding fast enough?
3. Which model and prompt produced each output?
4. How many tokens are being consumed?
5. How much does each feature cost?
6. Are retrieval and tools working correctly?
7. Are generated outputs valid and safe?
8. What happens when a provider fails?
9. Can the team detect regressions?
10. Can the release be rolled back safely?

The most important principle is:

> A production AI application must be observable, bounded, testable, and recoverable.

Turn this lesson into a practical artifact by deploying a small AI API with logging, token tracking, cost tracking, health checks, fallback behavior, safety tests, and a documented rollback plan.
