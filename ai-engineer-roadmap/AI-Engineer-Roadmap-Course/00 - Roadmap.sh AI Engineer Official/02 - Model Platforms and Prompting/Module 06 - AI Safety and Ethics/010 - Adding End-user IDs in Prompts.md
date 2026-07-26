

# 010 — Adding End-User IDs to API Requests

> **Current OpenAI term:** Safety Identifier
> **Roadmap title:** Adding End-user IDs in Prompts

| Field                  | Details                                       |
| ---------------------- | --------------------------------------------- |
| **Course Section**     | 02 — Model Platforms and Prompting            |
| **Module**             | Module 06 — AI Safety and Ethics              |
| **Content Group**      | Testing and Guardrails                        |
| **Roadmap Source**     | AI Safety and Ethics / Testing and Guardrails |
| **Lesson Type**        | AI Safety                                     |
| **Lesson Order**       | 010                                           |
| **Suggested Duration** | 22 minutes                                    |

---

## 1. Lesson Overview

This lesson explains how to associate OpenAI API requests with stable, privacy-preserving end-user identifiers.

OpenAI currently calls this value a **safety identifier**. It is supplied through the `safety_identifier` API parameter rather than being written into the user message or system prompt.

Safety identifiers can help OpenAI monitor and detect abuse, provide more actionable feedback when policy violations occur, and distinguish one abusive end user from the rest of an application’s users. OpenAI recommends using a value that uniquely identifies an individual user without directly exposing personally identifiable information. ([OpenAI Help Center][1])orrect implementation can support:

* Abuse investigation
* Per-user rate limiting
* Incident correlation
* Safety monitoring
* Account-level restrictions
* Regression analysis
* Protection of the wider application when one user misuses it

However, a safety identifier is not:

* A password
* An access token
* An authorization decision
* A replacement for authentication
* A moderation result
* A permission system
* A value the model should be instructed to interpret
* A reason to include personal information in prompts

---

## 2. Important Terminology Correction

The lesson title says:

```text
Adding End-user IDs in Prompts
```

The safer and more accurate implementation is:

```text
Adding privacy-preserving end-user identifiers
to OpenAI API request metadata
```

### Incorrect

```python
user_message = """
User ID: khanh@example.com

Please summarize this document.
"""
```

### Correct

```python
response = client.responses.create(
    model="gpt-5-mini",
    input="Please summarize this document.",
    safety_identifier="usr_8b77d8...",
)
```

OpenAI’s current documentation states that `safety_identifier` supersedes the previous `user` parameter used for the same purpose. ([OpenAI Help Center][1])

## 3. Learning Objectives

After completing this lesson, you should be able to:

* Explain what an end-user safety identifier is.
* Distinguish application users from API keys and OpenAI organization members.
* Explain why raw personal information should not be sent as an identifier.
* Generate a stable, pseudonymous identifier.
* Add `safety_identifier` to Responses API requests.
* Add `safety_identifier` to Chat Completions requests.
* attach a safety identifier to Realtime sessions.
* Handle authenticated and anonymous users.
* Preserve the same identifier across requests from the same end user.
* Separate safety identification from authentication and authorization.
* Record identifiers in privacy-aware safety logs.
* Test whether every relevant model request contains the expected identifier.

---

## 4. What Is an End User?

In this lesson, an **end user** is the individual using your application.

For example:

```text
OpenAI organization
└── Your AI application
    ├── User A
    ├── User B
    ├── User C
    └── Anonymous session D
```

Your backend may use one OpenAI project or API key to serve many end users.

Without an end-user identifier, many requests may appear to originate from the same application-level API credential.

A safety identifier creates a stable pseudonymous link between model requests and the application user or anonymous session that initiated them.

---

## 5. What Is a Safety Identifier?

A **safety identifier** is a string associated with an individual end user and sent with OpenAI API requests.

OpenAI recommends that it:

* Uniquely identify a user.
* Remain stable for that user.
* Avoid directly identifying the person.
* Be derived from a username, email, internal user ID, or another stable account value.
* Use a session ID when the person is not logged in.

OpenAI specifically recommends hashing usernames or email addresses instead of sending identifying information directly. ([OpenAI Help Center][1]) Example

```text
Raw internal user ID:
bf83ebf4-a774-4afb-8c2a-89adb4763ee0

Derived safety identifier:
usr_61f15d049d757517adf1f7c23d9c...
```

The derived value remains stable but does not need to reveal the underlying account information.

---

## 6. Why Safety Identifiers Matter

Safety identifiers improve the traceability of activity across model requests.

They can help distinguish between:

```text
One abusive user
```

and:

```text
An entire application behaving abusively
```

OpenAI states that safety identifiers can help create a stable way to trace activity back to an individual end user and reduce the possibility that one person’s misuse disrupts access for a broader organization. ([OpenAI][2]) Example Scenario

An application has 100,000 registered users.

One account repeatedly attempts to:

* Generate prohibited content
* Bypass safety restrictions
* Automate abusive requests
* Probe system prompts
* Misuse an agent tool

Without per-user identification:

```text
All requests
    ↓
One application API key
    ↓
Difficult to isolate the abusive user
```

With safety identifiers:

```text
Application request
    ↓
Stable safety identifier
    ↓
Activity can be correlated with one account
```

---

## 7. Where the Identifier Belongs

The identifier should be attached at the API request layer.

```mermaid
flowchart LR
    A[Authenticated User] --> B[Application Backend]
    B --> C[Resolve Internal User ID]
    C --> D[Generate Safety Identifier]
    D --> E[OpenAI API Request]

    E --> F[Model Input]
    E --> G[Safety Identifier Metadata]

    F --> H[Model Response]
    G --> I[Safety Monitoring Context]
```

The application should keep these concerns separate:

| Information            | Destination                      |
| ---------------------- | -------------------------------- |
| User’s question        | `input` or `messages`            |
| System behavior rules  | System or developer instructions |
| Safety identifier      | `safety_identifier`              |
| Internal request trace | Application logs or metadata     |
| Authorization context  | Backend policy engine            |
| Tool permissions       | Tool execution layer             |

---

## 8. What Not to Put in the Prompt

Avoid embedding operational identity data in natural-language content.

### Incorrect Prompt

```text
The current user is:
Name: Trần An Khánh
Email: khanh@example.com
Database ID: bf83ebf4-a774-4afb-8c2a-89adb4763ee0
Account level: administrator

Answer the following question...
```

This creates several problems:

* It exposes unnecessary private information.
* The model may repeat the information.
* Retrieved content may manipulate how it is interpreted.
* The user may attempt to replace or override it.
* It mixes identity with natural-language instructions.
* It may appear in model traces, logs, or generated output.
* It does not create reliable authorization.

### Better Separation

```python
response = client.responses.create(
    model="gpt-5-mini",
    input=user_message,
    safety_identifier=safety_id,
)
```

Authorization should be handled separately:

```python
authorized_projects = authorization_service.get_projects(
    authenticated_user.id
)
```

---

## 9. Safety Identifier vs. Other IDs

| Identifier              | Purpose                                     | Example           |
| ----------------------- | ------------------------------------------- | ----------------- |
| **Safety identifier**   | Associate model activity with an end user   | `usr_f18a...`     |
| **Application user ID** | Identify a record in your database          | UUID              |
| **Session ID**          | Identify a temporary browser or app session | `sess_92ac...`    |
| **Request ID**          | Trace one HTTP request                      | `req_c742...`     |
| **Conversation ID**     | Group messages in one conversation          | `conv_831...`     |
| **API key**             | Authenticate your backend to OpenAI         | Secret credential |
| **Tenant ID**           | Identify an organization or workspace       | `tenant_alpha`    |
| **Tool approval ID**    | Identify approval for a sensitive action    | `approval_019`    |

These identifiers should not be treated as interchangeable.

---

## 10. Safety Identifier vs. Authentication

A safety identifier says:

```text
This request is associated with pseudonymous user X.
```

Authentication says:

```text
The requester has proved that they control account X.
```

A client must not be trusted to provide an arbitrary safety identifier without server-side verification.

### Insecure Flow

```mermaid
flowchart LR
    A[Browser] --> B[Send Any safety_identifier]
    B --> C[OpenAI API]
```

A malicious user could impersonate another identifier.

### Safer Flow

```mermaid
flowchart LR
    A[Browser] --> B[Authenticated Backend]
    B --> C[Verify Session or Token]
    C --> D[Load Internal User ID]
    D --> E[Derive Safety Identifier]
    E --> F[OpenAI API]
```

The backend—not the user-controlled prompt—should calculate the value.

---

## 11. Safety Identifier vs. Authorization

A safety identifier must never be used as proof that a user may access a resource.

This is unsafe:

```python
if safety_identifier == "usr_admin":
    allow_database_export()
```

Use authenticated server-side authorization instead:

```python
if not permission_service.can_export(
    user_id=authenticated_user.id,
    resource_id=resource_id,
):
    raise PermissionError("Export is not authorized.")
```

The safety identifier supports abuse monitoring. It does not grant:

* File access
* Database permissions
* Administrator rights
* Tool access
* Financial authority
* Cross-user data access
* Approval for external actions

---

## 12. Generating a Privacy-Preserving Identifier

A plain internal UUID may already be pseudonymous, but deriving a separate safety identifier creates a clearer privacy boundary.

A useful pattern is an HMAC:

```text
safety_identifier =
HMAC(server_secret, tenant_id + ":" + internal_user_id)
```

### Why Use HMAC?

A normal hash of an email can sometimes be guessed using a dictionary of common email addresses.

An HMAC adds a server-held secret:

```text
Raw value + secret key
        ↓
Deterministic pseudonymous identifier
```

Properties:

* Stable for the same input
* Difficult to reverse without the secret
* Different across applications using different secrets
* Does not expose the original email or username

---

## 13. Python Identifier Generator

```python
import hashlib
import hmac
import os


SAFETY_ID_SECRET = os.environ["SAFETY_ID_SECRET"]


def create_safety_identifier(
    *,
    tenant_id: str,
    user_id: str,
) -> str:
    """
    Create a stable, privacy-preserving identifier.

    The secret must remain on the trusted backend.
    """
    canonical_value = f"{tenant_id}:{user_id}".encode("utf-8")
    secret = SAFETY_ID_SECRET.encode("utf-8")

    digest = hmac.new(
        secret,
        canonical_value,
        hashlib.sha256,
    ).hexdigest()

    return f"usr_{digest}"
```

### Usage

```python
safety_id = create_safety_identifier(
    tenant_id="lumina",
    user_id="bf83ebf4-a774-4afb-8c2a-89adb4763ee0",
)
```

Example result:

```text
usr_d109cd82d190c3059ea4cbe6c8e047de...
```

---

## 14. JavaScript Identifier Generator

```javascript
import crypto from "node:crypto";

const safetyIdSecret = process.env.SAFETY_ID_SECRET;

if (!safetyIdSecret) {
  throw new Error("SAFETY_ID_SECRET is required.");
}

export function createSafetyIdentifier({ tenantId, userId }) {
  const canonicalValue = `${tenantId}:${userId}`;

  const digest = crypto
    .createHmac("sha256", safetyIdSecret)
    .update(canonicalValue, "utf8")
    .digest("hex");

  return `usr_${digest}`;
}
```

### Usage

```javascript
const safetyIdentifier = createSafetyIdentifier({
  tenantId: "lumina",
  userId: "bf83ebf4-a774-4afb-8c2a-89adb4763ee0",
});
```

---

## 15. Responses API Example

OpenAI currently supports `safety_identifier` as a top-level Responses API request parameter. ([OpenAI Help Center][1]) Python

```python
from openai import OpenAI

client = OpenAI()

safety_id = create_safety_identifier(
    tenant_id="lumina",
    user_id=authenticated_user.id,
)

response = client.responses.create(
    model="gpt-5-mini",
    input="Summarize my project notes.",
    safety_identifier=safety_id,
)

print(response.output_text)
```

### JavaScript

```javascript
import OpenAI from "openai";

const client = new OpenAI();

const safetyIdentifier = createSafetyIdentifier({
  tenantId: "lumina",
  userId: authenticatedUser.id,
});

const response = await client.responses.create({
  model: "gpt-5-mini",
  input: "Summarize my project notes.",
  safety_identifier: safetyIdentifier,
});

console.log(response.output_text);
```

---

## 16. Chat Completions Example

OpenAI also supports the same parameter on Chat Completions requests. ([OpenAI Help Center][1]) Python

```python
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-5-mini",
    messages=[
        {
            "role": "user",
            "content": "Summarize my project notes.",
        }
    ],
    safety_identifier=safety_id,
)

print(response.choices[0].message.content)
```

### cURL

```bash
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-5-mini",
    "messages": [
      {
        "role": "user",
        "content": "Summarize my project notes."
      }
    ],
    "safety_identifier": "usr_d109cd82d190c3059ea4cbe6c8e047de"
  }'
```

---

## 17. FastAPI Integration

```python
from dataclasses import dataclass

from fastapi import Depends, FastAPI
from openai import OpenAI
from pydantic import BaseModel, Field


app = FastAPI()
client = OpenAI()


@dataclass
class AuthenticatedUser:
    id: str
    tenant_id: str


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=10_000)


class ChatResponse(BaseModel):
    response: str
    request_id: str | None = None


def get_authenticated_user() -> AuthenticatedUser:
    # Replace this example with verified JWT or session authentication.
    return AuthenticatedUser(
        id="bf83ebf4-a774-4afb-8c2a-89adb4763ee0",
        tenant_id="lumina",
    )


@app.post("/api/v1/chat", response_model=ChatResponse)
def chat(
    payload: ChatRequest,
    user: AuthenticatedUser = Depends(get_authenticated_user),
) -> ChatResponse:
    safety_id = create_safety_identifier(
        tenant_id=user.tenant_id,
        user_id=user.id,
    )

    response = client.responses.create(
        model="gpt-5-mini",
        input=payload.message,
        safety_identifier=safety_id,
    )

    return ChatResponse(
        response=response.output_text,
        request_id=getattr(response, "_request_id", None),
    )
```

The frontend does not supply the safety identifier. The backend derives it from the verified user session.

---

## 18. Anonymous Users

OpenAI recommends using a session identifier for users who are not logged in, such as people using a public preview. ([OpenAI Help Center][1]) Anonymous Flow

```mermaid
flowchart LR
    A[Anonymous Visitor] --> B[Backend Creates Session]
    B --> C[Secure Session Cookie]
    C --> D[Derive Anonymous Safety ID]
    D --> E[OpenAI Request]
```

### Example

```python
def create_anonymous_safety_identifier(
    session_id: str,
) -> str:
    canonical_value = f"anonymous:{session_id}".encode("utf-8")
    secret = SAFETY_ID_SECRET.encode("utf-8")

    digest = hmac.new(
        secret,
        canonical_value,
        hashlib.sha256,
    ).hexdigest()

    return f"anon_{digest}"
```

Do not use:

```text
anon
guest
anonymous-user
```

for every anonymous visitor.

Those values would group unrelated users under one identifier.

---

## 19. Anonymous-to-Authenticated Migration

A visitor may begin anonymously and then create an account.

```text
Anonymous session:
anon_fa231...

User signs in:
usr_d109c...
```

After authentication:

* Stop using the anonymous safety identifier.
* Use the authenticated user’s stable identifier.
* Preserve internal analytics linking only when justified.
* Do not expose the relationship in prompts.
* Avoid merging abuse history automatically without a defined policy.

### Example

```python
if authenticated_user is not None:
    safety_id = create_safety_identifier(
        tenant_id=authenticated_user.tenant_id,
        user_id=authenticated_user.id,
    )
else:
    safety_id = create_anonymous_safety_identifier(
        session_id=session.id,
    )
```

---

## 20. Multi-Tenant Applications

In a SaaS application, the same local user ID might theoretically appear in multiple tenants.

Include tenant context when deriving the identifier:

```text
tenant_a:user_123
tenant_b:user_123
```

These should produce different identifiers.

```python
create_safety_identifier(
    tenant_id="tenant_a",
    user_id="user_123",
)

create_safety_identifier(
    tenant_id="tenant_b",
    user_id="user_123",
)
```

This also supports tenant-level incident investigation without placing tenant names in prompts.

---

## 21. Realtime API

For Realtime API requests, OpenAI currently documents the `OpenAI-Safety-Identifier` request header.

When using ephemeral Realtime client secrets, the identifier should be included in the trusted server-side request that creates the secret so it becomes associated with the session. OpenAI also notes that identifiers do not automatically carry over between APIs or sessions. ([OpenAI][2]) Architecture

```mermaid
sequenceDiagram
    participant C as Client
    participant B as Trusted Backend
    participant O as OpenAI Realtime API

    C->>B: Request Realtime session
    B->>B: Authenticate user
    B->>B: Derive safety identifier
    B->>O: Create ephemeral secret with safety header
    O-->>B: Ephemeral client secret
    B-->>C: Return limited client secret
    C->>O: Connect Realtime session
```

### Important Rule

Do not assume this:

```text
Responses API safety_identifier
        ↓
Automatically reused by Realtime API
```

Pass the same stable pseudonymous value separately for each supported API or new Realtime session. ([OpenAI][2])

## 22. Identifier Stability

The same end user should normally receive the same identifier across requests.

### Correct

```text
User A, request 1 -> usr_abc123
User A, request 2 -> usr_abc123
User A, request 3 -> usr_abc123
```

### Incorrect

```text
User A, request 1 -> usr_abc123
User A, request 2 -> usr_def456
User A, request 3 -> usr_ghi789
```

Generating a random value for every request prevents meaningful user-level correlation.

However, a safety identifier may be rotated when:

* The derivation secret is compromised.
* Privacy policy requires rotation.
* Account ownership changes.
* The user is deleted and recreated.
* Tenant boundaries change.
* A security incident requires unlinking future activity.

---

## 23. Secret Rotation

HMAC-based identifiers depend on a server secret.

A simple rotation changes every derived identifier:

```text
Old secret + user ID -> old identifier
New secret + user ID -> new identifier
```

A versioned design can make transitions clearer:

```python
def create_safety_identifier(
    *,
    tenant_id: str,
    user_id: str,
    key_version: str = "v1",
) -> str:
    secret = SAFETY_ID_SECRETS[key_version]
    canonical_value = f"{tenant_id}:{user_id}".encode()

    digest = hmac.new(
        secret.encode(),
        canonical_value,
        hashlib.sha256,
    ).hexdigest()

    return f"usr_{key_version}_{digest}"
```

Example:

```text
usr_v1_d109cd...
```

Do not include the secret itself in:

* Source control
* Prompts
* Client-side JavaScript
* Mobile application bundles
* Logs
* Error messages

---

## 24. What Makes a Good Identifier?

A good safety identifier is:

| Property             | Meaning                                             |
| -------------------- | --------------------------------------------------- |
| **Stable**           | The same user receives the same value               |
| **Unique**           | Different users normally receive different values   |
| **Pseudonymous**     | The value does not directly reveal identity         |
| **Server-generated** | Users cannot choose another person’s identifier     |
| **Non-secret**       | It is not used as a password or token               |
| **Bounded**          | It does not include long profiles or arbitrary text |
| **Consistent**       | It is passed across relevant model requests         |
| **Auditable**        | Missing or malformed identifiers can be detected    |

---

## 25. Values You Should Not Send

Avoid sending raw:

* Email addresses
* Phone numbers
* Full names
* Government identifiers
* Street addresses
* Authentication tokens
* Session cookies
* API keys
* Passwords
* Complete JWTs
* Medical record numbers
* Payment card numbers
* User profile descriptions

### Bad Examples

```text
khanh@example.com
Trần An Khánh
+84-...
eyJhbGciOiJIUzI1NiIs...
admin-password-123
```

### Better Example

```text
usr_d109cd82d190c3059ea4cbe6c8e047de
```

---

## 26. Do Not Encode Roles in the Identifier

Avoid values such as:

```text
admin_user_123
premium_user_456
trusted_user_789
```

The identifier should identify a user, not grant privileges.

Roles can change. If role information is embedded in the identifier:

* Stale privileges may persist.
* Logs may expose account status.
* Developers may mistakenly treat the string as authorization.
* Attackers may try to manipulate the format.

Use a separate authorization context:

```python
authorization_context = {
    "roles": authenticated_user.roles,
    "permissions": permission_service.resolve(
        authenticated_user.id
    ),
}
```

---

## 27. Complete Request Lifecycle

```mermaid
flowchart TD
    A[Client Request] --> B[Authenticate User]
    B --> C[Validate Input]
    C --> D[Resolve Internal User and Tenant]
    D --> E[Derive Safety Identifier]
    E --> F[Apply Rate Limits]
    F --> G[Moderate Input]
    G --> H[OpenAI API Request]
    H --> I[Moderate Output]
    I --> J[Check Tool Permissions]
    J --> K[Return Response]
    K --> L[Write Privacy-Aware Audit Event]
```

The safety identifier is one layer within a larger safety architecture.

It does not replace:

* Input validation
* Moderation
* Prompt-injection defenses
* Retrieval authorization
* Tool permissions
* Approval workflows
* Rate limiting
* Output validation
* Monitoring

OpenAI’s broader safety guidance recommends combining measures such as moderation, adversarial testing, human review, constrained input, and account-level controls rather than relying on one mechanism. ([OpenAI][2])

## 28. Safety-Aware Logging

Store enough information to investigate incidents without creating unnecessary privacy risk.

### Example Audit Event

```json
{
  "event_id": "evt_01J4S2",
  "timestamp": "2026-07-21T00:35:12+07:00",
  "request_id": "req_8472",
  "safety_identifier": "usr_v1_d109cd82d190...",
  "internal_user_id_stored": false,
  "model": "gpt-5-mini",
  "route": "/api/v1/chat",
  "moderation_flagged": false,
  "policy_action": "allow",
  "tool_calls": [],
  "status": "success"
}
```

### Separate Restricted Mapping

Where internal investigation requires mapping the identifier back to an account, keep that mapping in a protected service:

```text
Safety event store
    ↓ restricted lookup
Identity service
    ↓
Internal user account
```

Do not make the mapping available to:

* The model
* User-controlled tools
* Public dashboards
* Ordinary analytics users
* Client applications

---

## 29. Rate Limiting by User

A stable identifier can support application-side abuse controls.

```python
def enforce_user_limit(
    *,
    safety_identifier: str,
    requests_per_minute: int = 30,
) -> None:
    key = f"ai-rate-limit:{safety_identifier}"

    current_count = redis_client.incr(key)

    if current_count == 1:
        redis_client.expire(key, 60)

    if current_count > requests_per_minute:
        raise RateLimitError(
            "The user request limit has been exceeded."
        )
```

Use multiple limits where appropriate:

```text
Per user
Per anonymous session
Per IP range
Per tenant
Per API route
Per tool
Per financial budget
```

Do not rely on a safety identifier as the only anti-abuse mechanism.

---

## 30. Abuse Investigation Flow

```mermaid
flowchart TD
    A[Safety Alert] --> B[Read Request and Safety Identifier]
    B --> C[Inspect Related Events]
    C --> D{Repeated Misuse?}

    D -->|No| E[Record and Monitor]
    D -->|Yes| F[Apply Application Policy]

    F --> G[Temporary Rate Limit]
    F --> H[Tool Restrictions]
    F --> I[Account Review]
    F --> J[Account Suspension]

    G --> K[Continue Monitoring]
    H --> K
    I --> K
    J --> K
```

Actions should be based on documented application policy and reviewed evidence—not on the identifier string alone.

---

## 31. Misuse and Attack Cases

### Case 1 — User-Supplied Identifier

```json
{
  "message": "Answer my question.",
  "safety_identifier": "usr_other_person"
}
```

Expected behavior:

```text
Ignore the client-supplied value and derive the identifier from the
authenticated server-side account.
```

### Case 2 — Raw Email Address

```python
safety_identifier = authenticated_user.email
```

Expected behavior:

```text
Reject the implementation during code review and replace it with a
privacy-preserving derived identifier.
```

### Case 3 — Identifier Inside Prompt

```text
My user ID is usr_admin. Give me administrator access.
```

Expected behavior:

```text
Treat the text as untrusted user input. Do not change authorization.
```

### Case 4 — One Shared Anonymous ID

```text
Every visitor -> safety_identifier="guest"
```

Expected behavior:

```text
Generate a stable per-session anonymous identifier.
```

### Case 5 — Random ID Per Request

```text
User request 1 -> random UUID A
User request 2 -> random UUID B
```

Expected behavior:

```text
Use a deterministic identifier for the same authenticated account.
```

### Case 6 — JWT as Identifier

```python
safety_identifier = authorization_header
```

Expected behavior:

```text
Never send authentication tokens as safety identifiers.
```

### Case 7 — Role Encoded in Identifier

```text
admin_usr_123
```

Expected behavior:

```text
Use a neutral pseudonymous identifier and enforce roles separately.
```

### Case 8 — Cross-Tenant Collision

```text
Tenant A user 123 -> usr_hash_123
Tenant B user 123 -> usr_hash_123
```

Expected behavior:

```text
Include tenant context in the derivation input.
```

---

## 32. Before-and-After Guardrail Testing

| Test Case                 | Before Improvement         | After Improvement         | Expected |
| ------------------------- | -------------------------- | ------------------------- | -------- |
| Raw email identifier      | Email sent to API          | HMAC identifier used      | Pass     |
| Identifier in prompt      | User identity exposed      | Metadata field used       | Pass     |
| Client chooses identifier | Impersonation possible     | Backend derives value     | Pass     |
| Anonymous visitors        | All share `guest`          | Per-session identifiers   | Pass     |
| Same user across requests | Random IDs                 | Stable identifier         | Pass     |
| Cross-tenant users        | Possible collision         | Tenant included           | Pass     |
| Realtime connection       | Identifier missing         | Header attached           | Pass     |
| Tool authorization        | Identifier treated as role | Separate permission check | Pass     |

---

## 33. Automated Unit Tests

```python
def test_same_user_produces_same_identifier() -> None:
    first = create_safety_identifier(
        tenant_id="tenant-a",
        user_id="user-123",
    )

    second = create_safety_identifier(
        tenant_id="tenant-a",
        user_id="user-123",
    )

    assert first == second


def test_different_users_produce_different_identifiers() -> None:
    first = create_safety_identifier(
        tenant_id="tenant-a",
        user_id="user-123",
    )

    second = create_safety_identifier(
        tenant_id="tenant-a",
        user_id="user-456",
    )

    assert first != second


def test_tenant_is_part_of_identifier_scope() -> None:
    first = create_safety_identifier(
        tenant_id="tenant-a",
        user_id="user-123",
    )

    second = create_safety_identifier(
        tenant_id="tenant-b",
        user_id="user-123",
    )

    assert first != second


def test_identifier_does_not_contain_raw_user_id() -> None:
    user_id = "bf83ebf4-a774-4afb-8c2a-89adb4763ee0"

    safety_id = create_safety_identifier(
        tenant_id="lumina",
        user_id=user_id,
    )

    assert user_id not in safety_id
```

---

## 34. API Integration Test

```python
from unittest.mock import Mock


def test_openai_request_contains_safety_identifier(
    monkeypatch,
) -> None:
    mock_create = Mock(
        return_value=Mock(output_text="Test response")
    )

    monkeypatch.setattr(
        client.responses,
        "create",
        mock_create,
    )

    user = AuthenticatedUser(
        id="user-123",
        tenant_id="tenant-a",
    )

    expected_safety_id = create_safety_identifier(
        tenant_id=user.tenant_id,
        user_id=user.id,
    )

    call_model(
        user=user,
        message="Hello",
    )

    mock_create.assert_called_once()

    arguments = mock_create.call_args.kwargs

    assert arguments["safety_identifier"] == expected_safety_id
    assert user.id not in arguments["input"]
```

This verifies both requirements:

1. The identifier is sent through the correct field.
2. The raw user ID is not inserted into the prompt.

---

## 35. Middleware Pattern

A shared middleware or model gateway can prevent missing identifiers.

```python
from dataclasses import dataclass
from typing import Any


@dataclass
class ModelRequestContext:
    user_id: str
    tenant_id: str
    request_id: str


class SafeOpenAIGateway:
    def __init__(self, client: OpenAI) -> None:
        self.client = client

    def create_response(
        self,
        *,
        context: ModelRequestContext,
        model: str,
        input: Any,
        **kwargs: Any,
    ):
        safety_id = create_safety_identifier(
            tenant_id=context.tenant_id,
            user_id=context.user_id,
        )

        return self.client.responses.create(
            model=model,
            input=input,
            safety_identifier=safety_id,
            **kwargs,
        )
```

### Usage

```python
response = gateway.create_response(
    context=request_context,
    model="gpt-5-mini",
    input=user_message,
)
```

This is safer than requiring every route developer to remember the parameter manually.

---

## 36. Missing-Identifier Policy

Define what happens if a request has no authenticated user or session.

Possible policies:

| Situation                         | Action                                                     |
| --------------------------------- | ---------------------------------------------------------- |
| Registered user                   | Derive account safety identifier                           |
| Anonymous user with valid session | Derive session identifier                                  |
| Internal scheduled job            | Use a documented service identifier                        |
| Webhook-generated task            | Bind to the initiating account or service                  |
| Missing identity context          | Reject, restrict, or create a controlled anonymous session |
| High-impact tool action           | Require authenticated user context                         |

### Example

```python
def resolve_safety_identifier(
    *,
    user: AuthenticatedUser | None,
    session_id: str | None,
) -> str:
    if user is not None:
        return create_safety_identifier(
            tenant_id=user.tenant_id,
            user_id=user.id,
        )

    if session_id is not None:
        return create_anonymous_safety_identifier(
            session_id=session_id,
        )

    raise MissingIdentityContextError(
        "A user or anonymous session is required."
    )
```

---

## 37. Service and Background Jobs

Some AI requests are initiated by a system rather than a directly active user.

Examples:

* Nightly summarization
* Notification generation
* Document indexing
* Batch classification
* Scheduled reports

Use a service-scoped identifier:

```text
svc_weekly_forecast
svc_document_indexer
svc_notification_generator
```

When a job was originally requested by a user, preserve both contexts internally:

```json
{
  "initiator_safety_identifier": "usr_d109cd...",
  "execution_identity": "svc_weekly_forecast"
}
```

Use the field expected by the API according to your application’s documented policy, while retaining additional context in your own audit system.

---

## 38. Metrics

### 38.1 Identifier Coverage

```text
identifier_coverage =
requests_with_valid_safety_identifier /
total_model_requests
```

### 38.2 Raw PII Leakage Rate

```text
raw_pii_identifier_rate =
requests_using_raw_personal_information /
total_requests_with_identifier
```

The target should be zero.

### 38.3 Identifier Stability Rate

```text
identifier_stability_rate =
same_user_requests_with_same_identifier /
same_user_request_pairs
```

### 38.4 Collision Rate

```text
collision_rate =
different_users_sharing_identifier /
total_distinct_users
```

### 38.5 Anonymous Session Coverage

```text
anonymous_identifier_coverage =
anonymous_requests_with_session_identifier /
total_anonymous_requests
```

### 38.6 Realtime Coverage

```text
realtime_identifier_coverage =
realtime_sessions_with_safety_header /
total_realtime_sessions
```

### 38.7 Incident Traceability

```text
incident_traceability_rate =
safety_incidents_linked_to_application_identity /
total_safety_incidents
```

---

## 39. Common Mistakes

### 39.1 Adding the ID to the Prompt

The roadmap name can be misunderstood literally.

Use the API field instead of natural-language prompt content.

### 39.2 Sending Raw PII

Do not send an email address or username directly when a privacy-preserving derivative can be used. OpenAI recommends hashing identifying values. ([OpenAI Help Center][1]) 39.3 Continuing to Use the Old `user` Parameter

OpenAI’s current guidance states that `safety_identifier` supersedes the earlier `user` parameter. ([OpenAI Help Center][1]) 39.4 Generating a Random Identifier Per Request

The identifier should be stable enough to associate repeated activity with the same user.

### 39.5 Trusting a Client-Supplied ID

Derive it on a trusted backend from authenticated context.

### 39.6 Treating the Identifier as Authorization

It does not prove identity, roles, ownership, or permission.

### 39.7 Using One ID for Every Anonymous User

Create a stable identifier for each anonymous session.

### 39.8 Using an API Key as the End-User Identifier

API keys authenticate the application backend. They should remain secret and should not be reused as user identifiers.

### 39.9 Including Sensitive Profile Data

The identifier should be a compact opaque string, not a serialized user profile.

### 39.10 Forgetting Realtime Sessions

OpenAI currently requires the safety identifier to be supplied separately for supported Realtime connections; it does not automatically carry across APIs or sessions. ([OpenAI][2]) 39.11 Logging the HMAC Secret

The derivation key must remain protected.

### 39.12 Applying Account Punishment Automatically

A safety identifier supports investigation. Account restrictions should follow documented evidence and review policies.

---

## 40. Practical Exercise

### Task

Add privacy-preserving safety identifiers to a small AI application.

Possible applications include:

* Customer-support chatbot
* RAG assistant
* Astrology QA service
* Story generator
* Email drafting agent
* Learning assistant
* Realtime voice assistant

### Requirements

Your implementation should include:

1. Authentication or anonymous session handling.
2. A server-side safety identifier generator.
3. HMAC or another privacy-preserving derivation strategy.
4. Responses API or Chat Completions integration.
5. No raw user ID in the prompt.
6. A per-user rate limiter.
7. Privacy-aware audit logging.
8. At least five misuse or failure tests.
9. Tests for stability and uniqueness.
10. A policy for anonymous users.
11. A policy for missing user context.
12. A short limitations report.

---

## 41. Suggested Project Structure

```text
end-user-safety-identifiers/
├── README.md
├── app/
│   ├── main.py
│   ├── authentication.py
│   └── schemas.py
├── identity/
│   ├── safety_identifier.py
│   ├── anonymous_sessions.py
│   └── key_rotation.py
├── clients/
│   └── openai_gateway.py
├── safety/
│   ├── rate_limits.py
│   ├── moderation.py
│   └── audit_logger.py
├── tests/
│   ├── test_identifier_generation.py
│   ├── test_openai_gateway.py
│   ├── test_anonymous_sessions.py
│   └── test_safety_regression.py
└── reports/
    ├── test_results.json
    └── privacy_limitations.md
```

---

## 42. Production Checklist

### Identity

* [ ] Every user request has verified identity or session context.
* [ ] The backend derives the identifier.
* [ ] The client cannot choose another user’s identifier.
* [ ] Anonymous sessions receive distinct identifiers.
* [ ] Multi-tenant scope is included where necessary.

### Privacy

* [ ] Raw email addresses are not used.
* [ ] Raw phone numbers are not used.
* [ ] Authentication tokens are never used.
* [ ] The identifier does not contain profile information.
* [ ] HMAC secrets remain server-side.
* [ ] Safety logs have restricted access.
* [ ] Retention rules are documented.

### API Integration

* [ ] `safety_identifier` is sent with Responses API requests.
* [ ] `safety_identifier` is sent with Chat Completions where used.
* [ ] Realtime sessions receive the safety identifier header.
* [ ] The value is stable across requests from the same user.
* [ ] Missing identifiers trigger a defined fallback or error.
* [ ] The old `user` parameter has been removed from new integrations.

### Security

* [ ] The identifier is not used for authorization.
* [ ] Roles are resolved separately.
* [ ] Tool permissions are enforced separately.
* [ ] Rate limiting is implemented.
* [ ] Moderation remains a separate safety layer.
* [ ] Prompt injection cannot modify the identifier.
* [ ] Secret rotation is planned.

### Testing

* [ ] Stability tests pass.
* [ ] Uniqueness tests pass.
* [ ] Cross-tenant tests pass.
* [ ] No raw identifier appears in prompts.
* [ ] Client impersonation tests pass.
* [ ] Anonymous-session tests pass.
* [ ] Realtime coverage is tested.
* [ ] Model gateway coverage is monitored.

---

## 43. Completion Checklist

* [ ] I can explain a safety identifier in one or two minutes.
* [ ] I know why it should not be inserted into prompt text.
* [ ] I understand that `safety_identifier` replaces the old `user` parameter.
* [ ] I can generate a stable pseudonymous identifier.
* [ ] I can add it to a Responses API request.
* [ ] I can add it to a Chat Completions request.
* [ ] I understand anonymous-session handling.
* [ ] I understand Realtime identifier handling.
* [ ] I know that an identifier is not authentication.
* [ ] I know that an identifier is not authorization.
* [ ] I have implemented at least five misuse tests.
* [ ] I have created a working demo or portfolio artifact.
* [ ] I have documented at least one privacy limitation.

---

## 44. Related Outcome

> Identify and reduce safety, security, privacy, bias, and misuse risks in AI applications.

This lesson supports the ability to associate AI activity with individual application users while minimizing unnecessary disclosure of personal information.

---

## 45. Related Project

### Project 5 — Prompt Injection and Safety Test Bench

Extend Project 5 with:

* Stable safety identifiers
* Anonymous session identifiers
* Per-user attack history
* Per-user rate limits
* User-level safety metrics
* Client impersonation tests
* Raw-PII detection
* Missing-identifier tests
* Realtime coverage tests
* Privacy-aware incident logs

### Suggested Portfolio Artifacts

```text
README.md
safety_identifier.py
openai_gateway.py
anonymous_sessions.py
rate_limits.py
audit_logger.py
identifier_test_cases.jsonl
test_identifier_generation.py
test_openai_gateway.py
privacy_limitations.md
```

---

## 46. Key Takeaways

1. End-user identifiers should be sent as API request metadata, not inserted into natural-language prompts.
2. OpenAI currently uses the `safety_identifier` parameter.
3. `safety_identifier` supersedes the previous `user` parameter.
4. The value should be stable and unique for each end user.
5. Raw identifying information should be replaced with a privacy-preserving derived value.
6. Anonymous users can be represented using stable session identifiers.
7. The backend should derive the identifier from trusted identity context.
8. A safety identifier is not authentication or authorization.
9. Realtime sessions require the identifier to be supplied separately.
10. Safety identifiers work best alongside moderation, rate limits, permissions, adversarial testing, and monitoring.

---

## 47. Final Summary

**Adding End-User IDs to API Requests** is a practical AI safety technique for associating model activity with the application user who initiated it.

The recommended flow is:

```text
Authenticate user or create anonymous session
                    ↓
Resolve trusted internal identity
                    ↓
Derive stable pseudonymous safety identifier
                    ↓
Send it through safety_identifier
                    ↓
Apply moderation, rate limits, and permissions
                    ↓
Record a privacy-aware audit event
                    ↓
Investigate repeated misuse when necessary
```

The central rule is:

```text
Identity belongs in trusted application infrastructure.
User content belongs in the prompt.
Authorization belongs in deterministic backend policy.
```

A safety identifier improves traceability, but it is only one layer of a complete safety system. It should be combined with authentication, moderation, prompt-injection protection, tool authorization, human approval, logging, and regression testing.


[1]: https://help.openai.com/en/articles/5428082-how-to-incorporate-a-safety-identifier "How to Incorporate a Safety Identifier | OpenAI Help Center"
[2]: https://platform.openai.com/docs/guides/safety-best-practices "
  Safety best practices | OpenAI API
"
