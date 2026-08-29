# 003 - Prompt Caching — In Memory and DB

## Section

Advanced Projects with LangChain

## Duration

7 minutes

## Main Idea

Implements prompt caching to reduce LLM API costs and response latency when the same or similar questions are asked repeatedly. Covers both in-memory caching (session-level) and SQLite-backed caching (persistent across restarts).

## Why Prompt Caching Matters

In a production RAG chatbot:
- Many users ask the same FAQ-style questions.
- Each LLM call costs money (tokens) and adds latency (100–2000ms).
- Caching: if the same prompt has been answered before, return the cached response instantly.

Potential savings: 40–70% cost reduction in high-traffic FAQ chatbots.

## LangChain Cache Integration

LangChain has a built-in caching mechanism. Setting a cache means: before calling the LLM, check if this exact prompt was already answered.

```python
import langchain
```

### In-Memory Cache (Session-Level)

```python
from langchain.cache import InMemoryCache

langchain.llm_cache = InMemoryCache()

from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# First call — hits the API
response1 = llm.invoke("What is RAG?")
print(response1.content)

# Second call with same prompt — served from cache instantly
import time
start = time.time()
response2 = llm.invoke("What is RAG?")
print(f"Cached response in {time.time() - start:.3f}s")
```

### SQLite Cache (Persistent)

Survives server restarts. Useful for production deployments.

```python
from langchain.cache import SQLiteCache

langchain.llm_cache = SQLiteCache(database_path=".langchain_cache.db")

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# This response is now written to .langchain_cache.db
response = llm.invoke("Explain vector embeddings.")

# On the next server start, the same question is still cached
```

## Semantic Caching

Standard caching only matches exact prompts. **Semantic caching** also matches similar prompts using vector similarity:

```python
from langchain.cache import RedisSemanticCache
from langchain_openai import OpenAIEmbeddings

# Requires a running Redis instance
semantic_cache = RedisSemanticCache(
    redis_url="redis://localhost:6379",
    embedding=OpenAIEmbeddings(),
    score_threshold=0.05   # lower = stricter matching
)
langchain.llm_cache = semantic_cache
```

"What is RAG?" and "Can you explain RAG?" will now hit the same cached response.

## Cache Comparison

| Cache Type | Persistence | Match Type | Best For |
|---|---|---|---|
| `InMemoryCache` | Session only | Exact string | Development, testing |
| `SQLiteCache` | Persistent | Exact string | Production (low traffic) |
| `RedisSemanticCache` | Persistent | Semantic similarity | Production (high traffic) |

## Measuring Cache Impact

```python
import time

questions = [
    "What is RAG?",
    "Explain retrieval-augmented generation.",  # semantically similar
    "How does vector search work?",             # different topic
    "What is RAG?",                             # exact repeat
]

for q in questions:
    start = time.time()
    llm.invoke(q)
    elapsed = time.time() - start
    print(f"{'CACHE' if elapsed < 0.05 else 'API  '} | {elapsed:.3f}s | {q[:40]}")
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Configure in-memory caching for a LangChain LLM.
- Configure SQLite-backed caching for persistent response storage.
- Explain the difference between exact and semantic caching.
- Measure the latency and cost impact of caching.

## Review Questions

1. Why does semantic caching provide more value than exact-match caching in a chatbot?
2. What is the risk of setting the `score_threshold` too low in `RedisSemanticCache`?
3. When would `InMemoryCache` be sufficient vs. when do you need `SQLiteCache`?

## Summary

Prompt caching stores LLM responses keyed by the input prompt. In-memory caching is fast but session-scoped; SQLite caching persists across restarts; semantic caching matches similar (not just identical) prompts for maximum hit rate. In high-traffic RAG chatbots, caching can cut API costs and response latency dramatically.
