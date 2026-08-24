# 005 - Understanding Retrieval-Augmented Generation Architecture

## Section

RAG Fundamentals

## Duration

4 minutes

## Main Idea

Explains the full end-to-end architecture of a RAG system, from data ingestion and indexing through query time retrieval and final response generation.

## RAG Architecture: Two Phases

### Phase 1 — Indexing (Offline / One-time)

```
Raw Documents
    ↓
Document Loader      (PDF, web pages, CSV, etc.)
    ↓
Text Splitter        (chunk into manageable segments)
    ↓
Embedding Model      (convert each chunk to a vector)
    ↓
Vector Database      (store chunk + vector + metadata)
```

### Phase 2 — Query (Online / Per Request)

```
User Query
    ↓
Embedding Model      (embed the query into a vector)
    ↓
Vector Database      (similarity search → top-k chunks)
    ↓
Retrieved Context    (the k most relevant chunks)
    ↓
Prompt Template      (combine query + context into a prompt)
    ↓
LLM                  (generate a grounded answer)
    ↓
Response to User
```

## Components Explained

| Component | Role |
|---|---|
| Document Loader | Reads source files (PDF, HTML, CSV, etc.) |
| Text Splitter | Divides documents into overlapping chunks |
| Embedding Model | Converts text to dense numeric vectors |
| Vector Database | Stores and indexes vectors for fast similarity search |
| Retriever | Runs the query vector against the index; returns top-k results |
| Prompt Template | Formats the question + retrieved context for the LLM |
| LLM | Generates the final natural-language answer |

## Similarity Search

The retriever finds the top-k chunks whose embedding vectors are closest to the query embedding, measured by cosine similarity or dot product.

```
similarity(query_vector, chunk_vector) → score
top_k = sorted chunks by score, descending
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Draw the two-phase RAG architecture from memory (indexing and query).
- Name all seven components of a RAG system and describe their role.
- Explain what similarity search does and why it works.

## Review Questions

1. What happens during the indexing phase and when does it run?
2. What is the role of the embedding model in both phases?
3. How does the prompt template combine the user query and retrieved context?
4. Why is top-k retrieval used instead of returning all documents?

## Summary

A RAG system has two phases: indexing (loading, chunking, embedding, and storing documents) and querying (embedding the query, retrieving top-k chunks, building a prompt, and generating an answer with the LLM). Understanding this architecture is the foundation for everything that follows in the course.

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
