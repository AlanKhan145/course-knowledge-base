# Module 03 — Core Components In RAG

- Lessons: 2
- Phase: Phase 1

## Purpose

This module breaks down the RAG pipeline into its two main phases: data ingestion/preprocessing and query processing/output generation. Understanding each component and how they connect is essential before diving into implementation.

## Lessons

- [001 - Data Ingestion And Preprocessing](001%20-%20Data%20Ingestion%20And%20Preprocessing.md)
- [002 - Query Processing And Output Generation Phase](002%20-%20Query%20Processing%20And%20Output%20Generation%20Phase.md)

## Key Concepts

- Full ingestion pipeline: Data Source → Ingestion → Preprocessing → Chunking → Embedding → Vector Store
- Full query pipeline: User Query → Embed Query → Retriever → Context Assembly → Prompt → LLM → Answer
- Role of each component in the pipeline
- How ingestion and query phases connect through the vector store

## Study Checklist

- [ ] Draw the full RAG pipeline from memory (both phases)
- [ ] Explain what happens at each step of the ingestion phase
- [ ] Explain what happens at each step of the query phase
- [ ] Identify which steps are offline (ingestion) vs. online (query)
