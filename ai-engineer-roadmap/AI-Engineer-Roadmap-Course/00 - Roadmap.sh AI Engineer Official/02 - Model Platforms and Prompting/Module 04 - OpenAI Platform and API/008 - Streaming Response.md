# 008 — Streaming Response

**Course:** 02 — Model Platforms and Prompting
**Module:** Module 04 — OpenAI Platform and API
**Content Group:** Request Design
**Roadmap Source:** OpenAI Platform and API / Request Design
**Lesson Type:** API
**Lesson Order:** 008
**Suggested Duration:** 24 minutes

---

## 1. Lesson Overview

A **Streaming Response** allows an application to receive parts of a model’s output while the model is still generating the rest of the response.

Without streaming, the application normally waits for the complete model output before displaying anything:

```text
Request
   ↓
Model generates the complete response
   ↓
Server returns the entire response
   ↓
User sees the answer
```

With streaming, the application can display incremental output:

```text
Request
   ↓
Model starts generating
   ↓
First text delta
   ↓
More text deltas
   ↓
Final completion event
```

OpenAI’s Responses API supports HTTP streaming through **Server-Sent Events**, or SSE. Streaming begins when `stream: true` is included in the request. This lets an application process the beginning of a response before generation has finished.

Streaming is particularly useful for:

* AI chat applications
* Writing assistants
* Long-form explanations
* Code generation
* RAG-based question answering
* Agent progress displays
* Report generation
* Translation
* Story generation
* Interactive user interfaces

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

1. Explain the difference between streamed and non-streamed responses.
2. Describe how Server-Sent Events deliver incremental output.
3. Enable streaming with the OpenAI Responses API.
4. Process typed streaming events.
5. Display text deltas in a terminal or browser.
6. measure time to first text and total response time.
7. Handle network errors, incomplete responses, and client cancellation.
8. Stream data securely through your own backend.
9. Validate structured output after streaming completes.
10. Design a production-ready streaming workflow.

---

## 3. Why Streaming Matters

A long model response may require several seconds or longer to finish.

Without streaming, the interface may appear inactive:

```text
User submits prompt
        ↓
Loading spinner
        ↓
No visible response
        ↓
Complete answer appears
```

With streaming:

```text
User submits prompt
        ↓
First text appears
        ↓
Answer continues growing
        ↓
Generation completes
```

Streaming primarily improves **perceived responsiveness**. It lets users begin reading before the entire response is available.

It does not automatically:

* Make the model generate fewer tokens
* Improve answer quality
* Reduce token cost
* Eliminate total generation time
* Guarantee successful completion
* Validate the response
* Prevent unsafe output
* Remove output-token limits

The model still has to generate the complete output. Streaming changes how that output is delivered.

---

## 4. Non-Streaming vs. Streaming

### Non-streaming request

```text
┌─────────┐       ┌─────────────┐       ┌───────────┐
│ Browser │──────▶│ App Backend │──────▶│ LLM API   │
└─────────┘       └─────────────┘       └───────────┘
                                              │
                                      Generate everything
                                              │
┌─────────┐       ┌─────────────┐             │
│ Browser │◀──────│ App Backend │◀────────────┘
└─────────┘       └─────────────┘

The browser receives one complete response.
```

### Streaming request

```text
┌─────────┐       ┌─────────────┐       ┌───────────┐
│ Browser │──────▶│ App Backend │──────▶│ LLM API   │
└─────────┘       └─────────────┘       └───────────┘
                       ▲                      │
                       │◀──── text delta 1 ───┤
                       │◀──── text delta 2 ───┤
                       │◀──── text delta 3 ───┤
                       │◀──── completed ──────┘
                       │
                       └──── forwards updates to browser
```

### Comparison

| Area                     | Non-streaming                   | Streaming                            |
| ------------------------ | ------------------------------- | ------------------------------------ |
| First visible output     | After full generation           | During generation                    |
| Implementation           | Simpler                         | More complex                         |
| Partial output           | Not exposed                     | Exposed incrementally                |
| Error handling           | One final result                | Errors can occur mid-stream          |
| Validation               | Validate complete result        | Usually validate after completion    |
| User cancellation        | Less important                  | Important for long responses         |
| Moderation               | Complete output available first | Partial output is harder to evaluate |
| Perceived responsiveness | Lower                           | Higher                               |

---

## 5. What Is Server-Sent Events?

Server-Sent Events provide a way for a server to send a sequence of events over one HTTP response.

Conceptually:

```text
HTTP request
    ↓
Connection remains open
    ↓
event: response.created
    ↓
event: response.output_text.delta
    ↓
event: response.output_text.delta
    ↓
event: response.completed
    ↓
Connection closes
```

The OpenAI streaming guide focuses on HTTP streaming with `stream: true` over SSE. For persistent connections and incremental inputs, OpenAI also provides a Responses API WebSocket mode.

A streaming event is not necessarily a complete sentence, word, or JSON object. It is one incremental update in the response lifecycle.

---

## 6. Responses API Streaming Events

The Responses API uses typed, semantic events. Applications can inspect the event’s `type` property and process only the events they need.

Common text-streaming events include:

```text
response.created
response.output_text.delta
response.completed
error
```

### `response.created`

Indicates that the response has been created.

```text
Request accepted
      ↓
response.created
```

This is useful for:

* Capturing the response ID
* Marking a request as started
* Updating the UI state

---

### `response.output_text.delta`

Contains an incremental piece of generated text.

```json
{
  "type": "response.output_text.delta",
  "delta": "Streaming"
}
```

Several delta events may form one complete answer:

```text
"Streaming"
" allows"
" an application"
" to display"
" output gradually."
```

After concatenation:

```text
Streaming allows an application to display output gradually.
```

---

### `response.completed`

Indicates that response generation has reached its final completed event.

The final response object can contain:

* Final status
* Complete output items
* Token usage
* Model information
* Response metadata

Always inspect the final response rather than assuming that receiving text deltas means the request completed successfully.

---

### `error`

Represents a streaming or generation error.

Possible causes include:

* Authentication failure
* Rate limiting
* Invalid parameters
* Network interruption
* Provider failure
* Internal service error
* Timeout
* Context-window overflow

---

## 7. Streaming Event Lifecycle

```text
Client sends request
        ↓
response.created
        ↓
response.in_progress
        ↓
response.output_item.added
        ↓
response.content_part.added
        ↓
response.output_text.delta
        ↓
response.output_text.delta
        ↓
response.output_text.done
        ↓
response.content_part.done
        ↓
response.output_item.done
        ↓
response.completed
```

Not every application needs to process every event.

A simple text application may only need:

```text
response.output_text.delta
response.completed
error
```

A tool-enabled agent may also need:

```text
response.function_call_arguments.delta
response.function_call_arguments.done
```

A code-interpreter workflow may receive code-interpreter progress and completion events. The Responses API defines typed events for text, refusals, function-call arguments, file search, code interpreter, and lifecycle changes.

---

## 8. Basic JavaScript Streaming Example

Install the SDK:

```bash
npm install openai
```

Set environment variables:

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_MODEL="gpt-5.6"
```

Create `stream-demo.mjs`:

```javascript
import OpenAI from "openai";

const client = new OpenAI();

const model = process.env.OPENAI_MODEL;

if (!model) {
  throw new Error("OPENAI_MODEL is required.");
}

const stream = await client.responses.create({
  model,
  input: [
    {
      role: "developer",
      content:
        "You are an AI engineering instructor. Explain concepts clearly.",
    },
    {
      role: "user",
      content:
        "Explain streaming responses in approximately 200 words.",
    },
  ],
  max_output_tokens: 500,
  stream: true,
});

let fullText = "";

for await (const event of stream) {
  if (event.type === "response.output_text.delta") {
    fullText += event.delta;
    process.stdout.write(event.delta);
  }
}

console.log("\n\nComplete response:");
console.log(fullText);
```

OpenAI’s official JavaScript example similarly creates a response with `stream: true` and iterates over the returned event stream using `for await`.

---

## 9. Handling Lifecycle Events

A production-oriented implementation should distinguish between text, completion, failure, and errors.

```javascript
import OpenAI from "openai";

const client = new OpenAI();

async function generateStream(input) {
  const model = process.env.OPENAI_MODEL;

  if (!model) {
    throw new Error("OPENAI_MODEL is required.");
  }

  const stream = await client.responses.create({
    model,
    input,
    stream: true,
    max_output_tokens: 800,
  });

  let fullText = "";
  let finalResponse = null;

  for await (const event of stream) {
    switch (event.type) {
      case "response.created": {
        console.log(`Response created: ${event.response.id}`);
        break;
      }

      case "response.output_text.delta": {
        fullText += event.delta;
        process.stdout.write(event.delta);
        break;
      }

      case "response.completed": {
        finalResponse = event.response;
        break;
      }

      case "response.failed": {
        const message =
          event.response?.error?.message ?? "Model response failed";

        throw new Error(message);
      }

      case "error": {
        const message =
          event.error?.message ?? "Unknown streaming error";

        throw new Error(message);
      }

      default:
        // Other semantic events can be ignored when they are not needed.
        break;
    }
  }

  if (!finalResponse) {
    throw new Error(
      "The stream ended without a final response event.",
    );
  }

  if (finalResponse.status !== "completed") {
    throw new Error(
      `Unexpected final status: ${finalResponse.status}`,
    );
  }

  return {
    text: fullText,
    response: finalResponse,
  };
}

try {
  const result = await generateStream(
    "Explain the difference between SSE and WebSockets.",
  );

  console.log("\n\nUsage:");
  console.log(result.response.usage);
} catch (error) {
  console.error(
    error instanceof Error ? error.message : String(error),
  );
}
```

---

## 10. Streaming Metrics

Streaming introduces several useful latency measurements.

### Time to First Event

Time between sending the request and receiving the first event.

[
TTFE =
T_{\text{first event}} - T_{\text{request start}}
]

### Time to First Text

Time between sending the request and receiving the first text delta.

[
TTFT =
T_{\text{first text}} - T_{\text{request start}}
]

### Total Response Time

Time between sending the request and receiving the final completion event.

[
T_{\text{total}} =
T_{\text{completed}} - T_{\text{request start}}
]

### Stream Generation Duration

Time from the first text delta to completion.

[
T_{\text{stream}} =
T_{\text{completed}} - T_{\text{first text}}
]

The first event and the first text delta are different measurements:

```text
Request starts
     ↓
response.created       ← first event
     ↓
processing
     ↓
output_text.delta      ← first visible text
     ↓
more deltas
     ↓
response.completed
```

---

## 11. Measuring Streaming Latency

```javascript
import OpenAI from "openai";

const client = new OpenAI();

async function benchmarkStream(input) {
  const startedAt = performance.now();

  let firstEventAt = null;
  let firstTextAt = null;
  let completedAt = null;
  let eventCount = 0;
  let textDeltaCount = 0;
  let fullText = "";
  let finalResponse = null;

  const stream = await client.responses.create({
    model: process.env.OPENAI_MODEL,
    input,
    max_output_tokens: 1000,
    stream: true,
  });

  for await (const event of stream) {
    const now = performance.now();
    eventCount += 1;

    if (firstEventAt === null) {
      firstEventAt = now;
    }

    if (event.type === "response.output_text.delta") {
      if (firstTextAt === null) {
        firstTextAt = now;
      }

      textDeltaCount += 1;
      fullText += event.delta;
      process.stdout.write(event.delta);
    }

    if (event.type === "response.completed") {
      finalResponse = event.response;
      completedAt = now;
    }
  }

  if (
    firstEventAt === null ||
    firstTextAt === null ||
    completedAt === null
  ) {
    throw new Error("The stream did not complete as expected.");
  }

  return {
    text: fullText,
    metrics: {
      timeToFirstEventMs: Math.round(firstEventAt - startedAt),
      timeToFirstTextMs: Math.round(firstTextAt - startedAt),
      totalDurationMs: Math.round(completedAt - startedAt),
      streamingDurationMs: Math.round(
        completedAt - firstTextAt,
      ),
      eventCount,
      textDeltaCount,
      inputTokens:
        finalResponse?.usage?.input_tokens ?? null,
      outputTokens:
        finalResponse?.usage?.output_tokens ?? null,
      totalTokens:
        finalResponse?.usage?.total_tokens ?? null,
    },
  };
}

const result = await benchmarkStream(
  "Explain vector embeddings with one example.",
);

console.log("\n\nMetrics:");
console.log(result.metrics);
```

Generation latency is strongly affected by the selected model and the number of generated tokens. Tokens are generated incrementally, so longer outputs usually increase total generation time.

---

## 12. Streaming Does Not Necessarily Reduce Total Latency

Consider the following example:

| Metric                     | Non-streaming |   Streaming |
| -------------------------- | ------------: | ----------: |
| Time to first visible text |   6.2 seconds | 1.1 seconds |
| Total generation time      |   6.2 seconds | 6.0 seconds |
| Generated tokens           |           600 |         600 |
| Token cost                 |       Similar |     Similar |

The important improvement is:

```text
User can begin reading after 1.1 seconds
instead of waiting approximately 6 seconds.
```

Streaming improves the delivery experience even when the total generation duration remains similar.

---

## 13. Recommended Full-Stack Architecture

Do not call the OpenAI API directly from browser code with a secret API key.

The API key should remain on a trusted server and be loaded from an environment variable or secret-management service. OpenAI explicitly recommends avoiding keys in public code or client-side applications.

```text
┌──────────────┐
│ Web Browser  │
└──────┬───────┘
       │ User request
       ▼
┌──────────────────────────┐
│ Application Backend      │
│                          │
│ - Authentication         │
│ - Input validation       │
│ - Rate limiting          │
│ - OpenAI API key         │
│ - Streaming proxy        │
│ - Logging                │
└──────────┬───────────────┘
           │ Secure API request
           ▼
┌──────────────────────────┐
│ OpenAI Responses API     │
└──────────┬───────────────┘
           │ Streaming events
           ▼
┌──────────────────────────┐
│ Application Backend      │
│ Selects and forwards     │
│ safe application events  │
└──────────┬───────────────┘
           │ Incremental data
           ▼
┌──────────────────────────┐
│ Web Browser              │
│ Updates the interface    │
└──────────────────────────┘
```

---

## 14. Express Backend Streaming Example

This example forwards generated text as plain streamed text.

Install dependencies:

```bash
npm install express openai
```

Create `server.mjs`:

```javascript
import express from "express";
import OpenAI from "openai";

const app = express();
const client = new OpenAI();

app.use(express.json({ limit: "100kb" }));

app.post("/api/write/stream", async (request, response) => {
  const prompt = request.body?.prompt;

  if (typeof prompt !== "string" || prompt.trim() === "") {
    response.status(400).json({
      error: "A non-empty prompt is required.",
    });
    return;
  }

  if (prompt.length > 10_000) {
    response.status(413).json({
      error: "The prompt is too large.",
    });
    return;
  }

  response.status(200);
  response.setHeader(
    "Content-Type",
    "text/plain; charset=utf-8",
  );
  response.setHeader("Cache-Control", "no-cache, no-transform");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.flushHeaders();

  try {
    const stream = await client.responses.create({
      model: process.env.OPENAI_MODEL,
      input: [
        {
          role: "developer",
          content:
            "You are a helpful writing assistant. Follow the user's requested format.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_output_tokens: 1200,
      stream: true,
    });

    for await (const event of stream) {
      if (event.type === "response.output_text.delta") {
        response.write(event.delta);
      }

      if (event.type === "response.failed") {
        throw new Error(
          event.response?.error?.message ??
            "Model generation failed.",
        );
      }

      if (event.type === "error") {
        throw new Error(
          event.error?.message ?? "Streaming error.",
        );
      }
    }
  } catch (error) {
    console.error("Streaming request failed:", error);

    // Headers have already been sent, so the HTTP status cannot
    // be replaced with a normal JSON error response.
    response.write(
      "\n\n[The response was interrupted before completion.]",
    );
  } finally {
    response.end();
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

## 15. Browser Streaming Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <title>Streaming Writing Assistant</title>
  </head>

  <body>
    <textarea
      id="prompt"
      rows="8"
      cols="70"
      placeholder="Enter your request"
    ></textarea>

    <div>
      <button id="generate">Generate</button>
      <button id="cancel" disabled>Cancel</button>
    </div>

    <pre id="output"></pre>
    <p id="status"></p>

    <script>
      const promptElement =
        document.querySelector("#prompt");
      const outputElement =
        document.querySelector("#output");
      const statusElement =
        document.querySelector("#status");
      const generateButton =
        document.querySelector("#generate");
      const cancelButton =
        document.querySelector("#cancel");

      let controller = null;

      generateButton.addEventListener("click", async () => {
        const prompt = promptElement.value.trim();

        if (!prompt) {
          statusElement.textContent =
            "Enter a prompt before generating.";
          return;
        }

        controller = new AbortController();

        outputElement.textContent = "";
        statusElement.textContent = "Generating…";
        generateButton.disabled = true;
        cancelButton.disabled = false;

        try {
          const response = await fetch("/api/write/stream", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
            signal: controller.signal,
          });

          if (!response.ok) {
            const errorBody = await response.text();

            throw new Error(
              errorBody || `HTTP ${response.status}`,
            );
          }

          if (!response.body) {
            throw new Error(
              "This browser did not provide a response stream.",
            );
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();

          while (true) {
            const { value, done } = await reader.read();

            if (done) {
              break;
            }

            outputElement.textContent += decoder.decode(value, {
              stream: true,
            });
          }

          outputElement.textContent += decoder.decode();
          statusElement.textContent = "Completed";
        } catch (error) {
          if (error.name === "AbortError") {
            statusElement.textContent = "Cancelled";
          } else {
            statusElement.textContent =
              error instanceof Error
                ? error.message
                : "An unknown error occurred.";
          }
        } finally {
          controller = null;
          generateButton.disabled = false;
          cancelButton.disabled = true;
        }
      });

      cancelButton.addEventListener("click", () => {
        controller?.abort();
      });
    </script>
  </body>
</html>
```

---

## 16. Plain Text vs. Structured Stream Events

Forwarding plain text is easy:

```text
Backend
   ↓
"Streaming"
   ↓
" responses"
   ↓
" improve UX."
```

However, a production application often needs more than text.

For example:

```json
{"type":"started","requestId":"req_123"}
{"type":"delta","text":"Streaming"}
{"type":"delta","text":" responses"}
{"type":"usage","outputTokens":86}
{"type":"completed","status":"completed"}
```

A structured application stream can represent:

* Started
* Text delta
* Tool progress
* Citation
* Usage
* Completed
* Cancelled
* Failed

Possible architecture:

```text
OpenAI semantic events
         ↓
Backend event mapper
         ↓
Application-specific events
         ↓
Frontend state reducer
         ↓
User interface
```

This prevents the frontend from depending directly on every provider-specific event type.

---

## 17. Suggested Application Event Contract

```typescript
type ApplicationStreamEvent =
  | {
      type: "started";
      requestId: string;
    }
  | {
      type: "text_delta";
      text: string;
    }
  | {
      type: "tool_started";
      toolName: string;
    }
  | {
      type: "tool_completed";
      toolName: string;
    }
  | {
      type: "completed";
      status: "completed";
      usage: {
        inputTokens: number;
        outputTokens: number;
        totalTokens: number;
      };
    }
  | {
      type: "failed";
      message: string;
      retryable: boolean;
    };
```

Benefits include:

* Consistent frontend handling
* Provider independence
* Easier testing
* Easier logging
* Explicit error states
* Better support for tools and RAG citations

---

## 18. Streaming Structured JSON

Suppose the model is expected to produce:

```json
{
  "title": "Introduction to RAG",
  "summary": "RAG combines retrieval with generation.",
  "topics": ["retrieval", "embeddings", "generation"]
}
```

The streamed deltas might look like:

```text
{
"title":
"Introduction
 to RAG",
"summary":
...
```

The partial content is not valid JSON until generation finishes.

Incorrect approach:

```javascript
JSON.parse(event.delta);
```

Correct basic approach:

```javascript
let jsonBuffer = "";

for await (const event of stream) {
  if (event.type === "response.output_text.delta") {
    jsonBuffer += event.delta;
  }

  if (event.type === "response.completed") {
    const parsed = JSON.parse(jsonBuffer);
    validateResult(parsed);
  }
}
```

Recommended workflow:

```text
Receive JSON deltas
        ↓
Append to buffer
        ↓
Wait for final completion
        ↓
Parse complete JSON
        ↓
Validate schema
        ↓
Validate business rules
        ↓
Use the result
```

OpenAI provides dedicated guidance for streaming Structured Outputs as an advanced use case.

---

## 19. Do Not Trust Partial Structured Output

Partial data may be:

* Invalid JSON
* Missing required fields
* Missing a closing object
* Semantically incomplete
* Later corrected by additional output
* Part of a refusal
* Cut off by an error

For example:

```json
{
  "sentiment": "positive",
  "confidence":
```

Do not store this as a successful result.

Use separate UI states:

```text
streaming
   ↓
received_complete_output
   ↓
parsing
   ↓
validating
   ↓
completed
```

A stream ending is not equivalent to successful validation.

---

## 20. Streaming Function Calls

Tool-call arguments may also arrive incrementally.

```text
function name
      ↓
argument delta 1
      ↓
argument delta 2
      ↓
argument delta 3
      ↓
arguments done
      ↓
parse arguments
      ↓
validate arguments
      ↓
execute tool
```

Do not execute a tool using incomplete arguments.

Incorrect:

```text
Partial arguments arrive
        ↓
Execute immediately
```

Correct:

```text
Collect argument deltas
        ↓
Wait for arguments-done event
        ↓
Parse JSON
        ↓
Validate against tool schema
        ↓
Check authorization
        ↓
Execute tool
```

The Responses API includes separate delta and done events for function-call arguments.

---

## 21. Streaming in RAG Applications

A RAG workflow may involve two separate waiting periods:

```text
User question
     ↓
Retrieve documents
     ↓
Rerank documents
     ↓
Build grounded prompt
     ↓
Start model stream
     ↓
Display grounded answer
```

The interface should distinguish retrieval from generation.

Example status events:

```text
Searching documents…
Found 8 candidate passages
Reranking passages…
Generating grounded answer…
Answer completed
```

Architecture:

```text
Browser
   ↓
Backend
   ├── Query transformation
   ├── Vector search
   ├── Reranking
   ├── Prompt construction
   └── LLM streaming
            ↓
       Text + citations
            ↓
         Browser
```

Important validation includes:

* Citation existence
* Citation-to-claim alignment
* Retrieved-source permissions
* Final answer completeness
* Unsupported claims
* Stream completion status

---

## 22. Streaming in Agent Workflows

An agent may perform several steps before producing final text.

```text
User request
    ↓
Agent plans
    ↓
Tool selected
    ↓
Tool arguments generated
    ↓
Tool executed
    ↓
Tool result interpreted
    ↓
Final answer streamed
```

A useful interface should display meaningful state rather than exposing raw internal events.

Good user-facing updates:

```text
Searching the knowledge base…
Reviewing three relevant documents…
Preparing the answer…
```

Avoid exposing:

* Private chain-of-thought
* Secret instructions
* API keys
* Raw credentials
* Internal authorization rules
* Sensitive tool output

Stream concise progress states and user-relevant results instead.

---

## 23. Error Categories

### Error before streaming begins

Examples:

* Invalid API key
* Invalid model
* Request validation error
* Context too large
* Immediate rate-limit rejection

The application can return a normal HTTP error:

```json
{
  "error": {
    "code": "MODEL_REQUEST_FAILED",
    "message": "The generation request could not be started."
  }
}
```

---

### Error after partial output

Example:

```text
The model generated the following recommendation:
1. Validate the input
2. Add
```

Then the connection fails.

At this point:

* HTTP response headers may already be sent.
* The UI already contains partial text.
* A blind retry may duplicate content.
* The result must not be marked complete.

The interface should show:

```text
Generation was interrupted.
[Retry from beginning] [Keep partial text]
```

---

### Client cancellation

The user may intentionally stop a long response.

```text
Generating
    ↓
User selects Stop
    ↓
Abort browser request
    ↓
Stop updating UI
    ↓
Mark result as cancelled
```

Where supported, cancellation should also be propagated through the backend to avoid unnecessary model work.

---

## 24. Retry Strategy

### Before any text is shown

A limited retry may be safe for transient errors:

```text
Request fails before first text
        ↓
Retryable error?
   ├── No → return error
   └── Yes
        ↓
Apply backoff
        ↓
Retry once
```

### After partial output is shown

Do not silently restart the stream and append the new response.

That can produce:

```text
First response: "Streaming improves..."
Retry response: "Streaming improves..."
Combined: "Streaming improves...Streaming improves..."
```

Safer options:

1. Clear the partial response and restart.
2. Show a retry button.
3. Create a carefully bounded continuation request.
4. Preserve the partial result as a failed draft.

Always cap retries and track them in logs.

---

## 25. Timeout Design

A streaming request may need several timeout types.

### Connection timeout

Maximum time allowed to establish the upstream request.

### Time-to-first-text timeout

Maximum acceptable wait for the first text delta.

### Idle timeout

Maximum period allowed without receiving another event.

### Total-generation timeout

Maximum duration of the complete operation.

```text
Request starts
    ↓
Connection timeout
    ↓
First-text timeout
    ↓
Idle timeout between chunks
    ↓
Total-generation timeout
```

Different features may require different values:

| Feature               | Timeout profile                    |
| --------------------- | ---------------------------------- |
| Intent classification | Short                              |
| Chat reply            | Moderate                           |
| RAG answer            | Moderate                           |
| Story chapter         | Long                               |
| Multi-tool agent      | Long                               |
| Long report           | Very long or asynchronous workflow |

---

## 26. Rate Limits and Concurrency

Streaming connections remain open while output is being generated.

A production system should monitor:

* Active streams
* Requests per minute
* Tokens per minute
* Streams per user
* Streams per API key
* Average stream duration
* Cancelled streams
* Failed streams
* Retry count

Suggested controls:

```text
User authentication
        ↓
Per-user concurrency limit
        ↓
Application rate limit
        ↓
Provider rate-limit handling
        ↓
Model request
```

OpenAI recommends planning for rate limits and scalable architecture when moving an API integration into production.

---

## 27. Moderation and Safety

Streaming introduces an important safety trade-off.

When text is shown immediately, users may see partial content before the complete answer can be evaluated. OpenAI notes that partial completions are more difficult to moderate, and moderation scores requested with generation are available after the full output rather than with each partial delta.

Possible strategies include:

### Strategy A — Pre-moderate the input

```text
User input
    ↓
Input moderation
    ↓
Allowed?
   ├── No → reject
   └── Yes → begin streaming
```

### Strategy B — Buffer before displaying

```text
Receive several deltas
        ↓
Evaluate buffered content
        ↓
Release approved text
```

This increases display latency but can improve control.

### Strategy C — Do not stream sensitive workflows

For high-risk domains, wait for complete generation and validation before showing the result.

### Strategy D — Combine controls

Use:

* Input moderation
* Clear model instructions
* Tool restrictions
* Output monitoring
* Final validation
* User reporting
* Audit logs

---

## 28. Streaming UX Guidelines

A useful streaming interface should include:

* A visible generating state
* Incremental text rendering
* A stop button
* A retry button after failure
* Clear completion state
* Auto-scroll that respects manual user scrolling
* Accessible status text
* Protection against duplicate submissions
* Markdown rendering that tolerates incomplete syntax
* Final rendering after completion

Suggested state machine:

```text
idle
  ↓
submitting
  ↓
waiting_for_first_text
  ↓
streaming
  ├── cancelled
  ├── failed
  └── validating
          ↓
       completed
```

Do not use only a boolean such as:

```javascript
isLoading = true;
```

A streaming operation has more states than a normal request.

---

## 29. Rendering Markdown Safely

During streaming, Markdown may be incomplete:

````text
```javascript
function example() {
````

The closing code fence may arrive later.

Possible approach:

```text
Streaming state
    ↓
Render conservatively as partial Markdown
    ↓
Completion event
    ↓
Run final Markdown rendering
    ↓
Sanitize generated HTML
```

Never insert unsanitized generated HTML directly into the page.

Avoid:

```javascript
element.innerHTML = modelOutput;
```

Prefer a Markdown renderer with HTML sanitization or render generated text as plain text.

---

## 30. Production Logging

Example streaming log:

```json
{
  "request_id": "req_2026_008",
  "feature": "explain",
  "model": "configured-model",
  "streaming": true,
  "status": "completed",
  "time_to_first_event_ms": 420,
  "time_to_first_text_ms": 910,
  "total_duration_ms": 6840,
  "streaming_duration_ms": 5930,
  "stream_event_count": 162,
  "text_delta_count": 148,
  "input_tokens": 326,
  "output_tokens": 742,
  "total_tokens": 1068,
  "retry_count": 0,
  "client_cancelled": false,
  "validation_passed": true
}
```

Useful dashboard metrics include:

```text
Time to first text — P50, P95, P99
Total stream duration — P50, P95, P99
Average output tokens
Active stream count
Completion rate
Failure rate
Cancellation rate
Retry rate
Time-to-first-text timeout rate
Mid-stream interruption rate
Validation failure rate
Cost per completed stream
```

Do not log:

* API keys
* Passwords
* Authentication tokens
* Secret system instructions
* Raw sensitive documents
* Unredacted personal data
* Private tool credentials

---

## 31. Streaming Evaluation

Compare streaming and non-streaming with the same:

* Model
* Prompt
* Maximum output tokens
* Temperature
* Input data
* Number of trials

Example results:

| Mode          | First text | Total duration | Output tokens | Success |
| ------------- | ---------: | -------------: | ------------: | ------: |
| Non-streaming |   6,150 ms |       6,150 ms |           640 |     Yes |
| Streaming     |     920 ms |       6,080 ms |           637 |     Yes |
| Streaming     |     880 ms |       5,940 ms |           621 |     Yes |
| Streaming     |   1,210 ms |    Interrupted |           284 |      No |

Evaluate:

1. Time to first text
2. Total response duration
3. Completion rate
4. Mid-stream failure rate
5. Cancellation rate
6. Token usage
7. Output quality
8. Validation success
9. User satisfaction

---

## 32. Common Mistakes

### Mistake 1: Assuming each event is a complete word

A delta may contain:

* Part of a word
* Several words
* Whitespace
* Punctuation
* An empty value

Always concatenate deltas in their received order.

---

### Mistake 2: Treating partial JSON as valid

Wait for completion before parsing and validating the complete object.

---

### Mistake 3: Exposing the API key in browser code

Place API credentials on the backend.

---

### Mistake 4: Ignoring the final event

Receiving text does not prove that the response completed successfully.

---

### Mistake 5: Returning partial content as complete

Store explicit statuses such as:

```text
streaming
completed
cancelled
failed
incomplete
```

---

### Mistake 6: Retrying after partial output without resetting state

This can duplicate or contradict visible content.

---

### Mistake 7: Executing partial tool-call arguments

Wait for the completed arguments event, parse the final JSON, and validate it.

---

### Mistake 8: Assuming streaming reduces cost

Cost is primarily connected to actual token usage and the selected model, not whether the delivery is streamed.

---

### Mistake 9: Ignoring user cancellation

Long responses should provide a clear stop control.

---

### Mistake 10: Testing only on a local machine

Test the complete deployed path:

```text
Browser
  → CDN or proxy
  → load balancer
  → application server
  → model provider
  → application server
  → browser
```

Verify that the deployed infrastructure delivers chunks incrementally rather than buffering the entire response.

---

## 33. Practical Exercise

Build a streaming endpoint for an AI Writing Assistant.

### Required operations

```text
summarize
rewrite
translate
explain
```

### Example request

```json
{
  "operation": "explain",
  "text": "Vector databases store vector embeddings."
}
```

### Expected behavior

```text
1. Validate the operation.
2. Validate the input text.
3. Select a prompt template.
4. Start the model stream.
5. Forward text deltas.
6. Allow cancellation.
7. Capture the final response.
8. Log token usage and latency.
9. Mark the result completed only after final validation.
```

---

## 34. Exercise Architecture

```text
User selects operation
        ↓
POST /api/writing/stream
        ↓
Validate:
- operation
- input length
- authentication
- rate limit
        ↓
Select generation profile
        ↓
Call Responses API with stream: true
        ↓
Forward text deltas
        ↓
Capture completion event
        ↓
Validate final output
        ↓
Log metrics
        ↓
Mark request completed
```

Suggested generation profiles:

```javascript
const generationProfiles = {
  summarize: {
    maxOutputTokens: 500,
  },

  rewrite: {
    maxOutputTokens: 800,
  },

  translate: {
    maxOutputTokens: 1200,
  },

  explain: {
    maxOutputTokens: 1500,
  },
};
```

---

## 35. Required Test Cases

Test at least the following cases:

| Test                             | Expected behavior                         |
| -------------------------------- | ----------------------------------------- |
| Normal short input               | Stream completes                          |
| Long input                       | Accepted or rejected according to limit   |
| Empty input                      | Validation error                          |
| Invalid operation                | Validation error                          |
| Client cancellation              | Stream marked cancelled                   |
| Provider error before first text | Controlled error response                 |
| Error after partial text         | Partial result marked failed              |
| Output-token limit reached       | Result marked incomplete                  |
| Two simultaneous requests        | Both handled safely                       |
| Structured JSON operation        | Parse only after completion               |
| Tool call                        | Execute only after arguments are complete |
| Unsafe input                     | Apply safety policy                       |

---

## 36. Completion Checklist

* [ ] I can explain Streaming Response in one or two minutes.
* [ ] I understand the difference between streaming and non-streaming.
* [ ] I know that OpenAI HTTP streaming uses Server-Sent Events.
* [ ] I can enable streaming with `stream: true`.
* [ ] I can process `response.output_text.delta`.
* [ ] I inspect the final response event.
* [ ] I can measure time to first text.
* [ ] I can measure total stream duration.
* [ ] I know that streaming does not automatically reduce token cost.
* [ ] I keep the API key on the backend.
* [ ] I handle cancellation.
* [ ] I handle errors before and after the first delta.
* [ ] I do not parse incomplete JSON.
* [ ] I do not execute incomplete tool arguments.
* [ ] I track token usage, latency, retries, and failures.
* [ ] I understand the moderation challenges of partial output.
* [ ] I have tested the deployed streaming path.
* [ ] I documented at least one limitation or open question.

---

## 37. Related Outcome

After completing this lesson, you should be better prepared to:

> Call LLM APIs from applications while managing messages, streaming events, tokens, cost, latency, retries, rate limits, cancellation, and structured outputs.

---

## 38. Related Project

### Project 3 — AI Writing Assistant

Build an application with:

```text
Summarize
Rewrite
Translate
Explain
Generate structured JSON
```

Suggested architecture:

```text
┌────────────────────────┐
│ Writing Assistant UI   │
│                        │
│ - Text input           │
│ - Operation selector   │
│ - Generate button      │
│ - Stop button          │
│ - Streaming output     │
└────────────┬───────────┘
             │
             ▼
┌────────────────────────┐
│ Application Backend    │
│                        │
│ - Authentication       │
│ - Validation           │
│ - Prompt templates     │
│ - Generation profiles  │
│ - Streaming proxy      │
│ - Error handling       │
│ - Metrics              │
└────────────┬───────────┘
             │
             ▼
┌────────────────────────┐
│ OpenAI Responses API   │
│                        │
│ stream: true           │
└────────────┬───────────┘
             │
             ▼
┌────────────────────────┐
│ Typed streaming events │
└────────────────────────┘
```

The final project should compare:

* Non-streamed response time
* Time to first streamed text
* Total streamed response time
* Output tokens
* Completion rate
* Cancellation rate
* Validation success
* User experience

---

## 39. Key Takeaways

1. Streaming delivers model output incrementally.
2. The Responses API supports SSE streaming with `stream: true`.
3. `response.output_text.delta` contains incremental text.
4. Deltas must be concatenated in their received order.
5. Applications should inspect the final lifecycle event.
6. Streaming improves perceived responsiveness more than total generation speed.
7. Streaming does not automatically reduce token usage or cost.
8. API keys must remain on a trusted backend.
9. Partial JSON and tool arguments must not be trusted.
10. Errors can occur before or after partial output is displayed.
11. User cancellation is an important part of streaming UX.
12. Production systems should measure time to first text and total duration.
13. Partial responses can be more difficult to moderate.
14. Streaming should be evaluated through the complete deployed architecture.

---

## 40. Final Summary

A Streaming Response changes the model interaction from:

```text
request
   ↓
wait for everything
   ↓
complete response
```

to:

```text
request
   ↓
response created
   ↓
text delta
   ↓
text delta
   ↓
text delta
   ↓
response completed
```

A reliable streaming application combines:

```text
Secure backend
      +
Typed event handling
      +
Incremental rendering
      +
Cancellation
      +
Timeouts
      +
Error handling
      +
Final validation
      +
Token and latency logging
```

Streaming is not only an API parameter. It affects the entire application architecture, including backend transport, frontend state, validation, observability, safety, and user experience.

The goal is not simply to display text one piece at a time. The goal is to provide a responsive experience while preserving correctness, security, and reliable completion.
