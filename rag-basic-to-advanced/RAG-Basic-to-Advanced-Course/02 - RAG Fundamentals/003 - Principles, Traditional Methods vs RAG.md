# 003 - Principles, Traditional Methods vs RAG

## Section

RAG Fundamentals

## Duration

4 minutes

## Main Idea

Compares RAG with traditional approaches to giving LLMs access to specific knowledge (fine-tuning and prompt stuffing), and explains the core principles that make RAG a better choice for most production scenarios.

## Traditional Approaches and Their Limitations

### 1. Prompt Stuffing (Context Window Injection)
- **How it works:** Manually insert all relevant documents into the prompt.
- **Limitation:** Context windows have limits; stuffing too much text degrades quality and increases cost. Not scalable for large knowledge bases.

### 2. Fine-tuning
- **How it works:** Re-train the model weights on domain-specific data.
- **Limitation:** Expensive (compute + time), requires ML expertise, model becomes stale as data changes, and knowledge is baked in rather than queryable.

### 3. Prompt Engineering Only
- **How it works:** Craft prompts that guide the LLM to use its existing knowledge.
- **Limitation:** The LLM can only use what it learned during pretraining — no access to private or recent data.

## RAG Principles

| Principle | Description |
|---|---|
| Dynamic knowledge | Update the knowledge base without retraining the model |
| Reduced hallucination | LLM answers are grounded in retrieved facts |
| Scalability | Vector search scales to millions of documents |
| Transparency | Retrieved sources can be cited alongside the answer |
| Cost efficiency | No GPU training cost; update is just re-indexing |

## Comparison Table

| Criterion | Fine-tuning | Prompt Stuffing | RAG |
|---|---|---|---|
| Handles large corpora | No | No | Yes |
| Real-time knowledge updates | No | Partial | Yes |
| Hallucination risk | Medium | High | Low |
| Cost | Very high | Low | Medium |
| Implementation complexity | High | Low | Medium |

## Learning Objectives

By the end of this lesson, you should be able to:

- Describe at least two limitations of fine-tuning as a knowledge injection method.
- Explain why prompt stuffing does not scale.
- List three advantages of RAG over traditional approaches.

## Review Questions

1. Why does fine-tuning become problematic when data changes frequently?
2. What is the key advantage RAG has over prompt stuffing for large corpora?
3. How does RAG reduce hallucination?

## Summary

Traditional methods — fine-tuning and prompt stuffing — struggle with scale, cost, and data freshness. RAG solves these by keeping the model frozen and retrieving relevant, up-to-date information at query time, injecting it as context for a grounded, accurate response.
