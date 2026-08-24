# 002 - Intro to RAG & Core Concepts

## Section

RAG Fundamentals

## Duration

3 minutes

## Main Idea

Explains what Retrieval-Augmented Generation is: a technique that combines a retrieval step with a generation step so that an LLM can answer questions using information from a specific external data source, rather than relying solely on what it learned during training.

## Core Concepts

**Retrieval-Augmented Generation (RAG)**
A framework where a language model's response is augmented by context retrieved from an external knowledge store (e.g., a vector database, document store, or search engine).

**The Two-Phase Process**
1. **Retrieval** — A user's query is embedded and used to search a vector database for the most semantically similar documents or chunks.
2. **Generation** — The retrieved documents are injected into the LLM prompt as context, and the LLM generates a grounded answer.

**Why RAG Exists**
- LLMs have a fixed training cutoff and cannot access real-time or private data.
- Fine-tuning a model on new data is expensive and slow.
- RAG is a cheaper and more flexible alternative: update the knowledge base without touching the model.

## Key Terms

| Term | Definition |
|---|---|
| LLM | Large Language Model — the generative AI component |
| Retrieval | Fetching relevant documents given a query |
| Augmentation | Adding retrieved context to the LLM prompt |
| Generation | The LLM producing an answer from the augmented prompt |
| Knowledge base | The external data source (documents, database, web pages) |
| Vector database | A database optimized for storing and searching embeddings |

## Learning Objectives

By the end of this lesson, you should be able to:

- Define RAG in one sentence.
- Explain the two-phase process (retrieve then generate).
- State why RAG is preferred over fine-tuning for dynamic knowledge.

## Review Questions

1. What does RAG stand for and what problem does it solve?
2. How does RAG differ from using an LLM with no retrieval step?
3. Why is fine-tuning not always a good alternative to RAG?

## Summary

RAG combines a retrieval system with an LLM so that the model can answer questions about information it was not trained on. The retrieval step fetches relevant context; the generation step uses that context to produce an accurate, grounded answer.

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
