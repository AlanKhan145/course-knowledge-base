# Syllabus — Basic to Advanced: Retrieval-Augmented Generation — RAG

## Course Summary

A project-driven course covering RAG architecture, vector databases, embeddings, LangChain pipelines, and advanced retrieval techniques. Students finish by building three production-grade chatbots: Website Chatbot, SQL Chatbot, and Multimedia PDF Chatbot.

---

## Module 1 — Introduction

**Duration:** 7 minutes | **Lessons:** 2

| Lesson | Duration | Description |
|---|---|---|
| 001 - Introduction | 2min | Course overview, goals, and the three capstone projects |
| 002 - Outline | 5min | Full course roadmap across 9 modules |

---

## Module 2 — RAG Fundamentals

**Duration:** 14 minutes | **Lessons:** 5

| Lesson | Duration | Description |
|---|---|---|
| 001 - Section Intro | 1min | Overview of the fundamentals section |
| 002 - Intro to RAG & Core Concepts | 3min | Definition, two-phase process, why RAG exists |
| 003 - Principles, Traditional Methods vs RAG | 4min | Fine-tuning vs. prompt stuffing vs. RAG trade-offs |
| 004 - Real-world Applications and Use Cases | 2min | Enterprise KB, customer support, legal/medical/financial |
| 005 - Understanding RAG Architecture | 4min | End-to-end pipeline: indexing and query phases |

---

## Module 3 — Introduction to Large Language Models

**Duration:** 31 minutes | **Lessons:** 6

| Lesson | Duration | Description |
|---|---|---|
| 001 - Section Intro | 1min | LLMs as the generation component of RAG |
| 002 - Basics of LLMs and Closed Source Models | 8min | Transformers, few-shot learning, GPT/Claude/Gemini |
| 003 - Closed Source & Open Source LLMs Continued | 6min | Context windows, multimodal, prompt caching |
| 004 - Closed vs Open Source Models & Software | 5min | Decision framework: when to use which |
| 005 - What does RAG do to LLMs | 4min | Grounding, hallucination reduction, source attribution |
| 006 - Let's run an Open Source LLM locally | 7min | Ollama installation, running Llama/Mistral/Gemma |

---

## Module 4 — VS Code & GitHub Repo Setup

**Duration:** 4 minutes | **Lessons:** 3

| Lesson | Duration | Description |
|---|---|---|
| 001 - Downloading Python, VS Code, Git and more | 2min | Python 3.10+, VS Code extensions, Git, virtual env |
| 002 - Cloning and accessing all Projects | 2min | git clone, .env configuration, Jupyter kernel setup |
| 003 - PDF for entire course | 1min | Download offline reference PDF |

---

## Module 5 — Vector Databases & Embeddings

**Duration:** 37 minutes | **Lessons:** 7

| Lesson | Duration | Description |
|---|---|---|
| 001 - Section Intro | 1min | Overview of vectors, embeddings, and vector DBs |
| 002 - What are Vectors and Why we use them | 6min | High-dimensional vectors, cosine similarity, semantic search |
| 003 - What are Embeddings | 7min | Embedding models, same model for index and query, chunking |
| 004 - Setting up VS Code Project | 3min | Install packages, API keys, verify embedding output |
| 005 - Audio, Graph, Text and Image Vectors & Embeddings | 7min | CLIP, Word2Vec, Librosa, Node2Vec, Sentence Transformers |
| 006 - Vector DB Indexing and Pinecone Setup | 8min | ANN/HNSW, Pinecone index creation, upsert, query |
| 007 - Image, Text and Paragraph Indexing and Matching | 5min | Hands-on indexing and retrieval across modalities |

---

## Module 6 — LangChain Framework & Building a Simple RAG Pipeline

**Duration:** 22 minutes | **Lessons:** 5

| Lesson | Duration | Description |
|---|---|---|
| 001 - Section Intro | 1min | LangChain as RAG orchestration framework |
| 002 - Components of Basic RAG Pipeline, LangChain and Loaders | 5min | 8 components: loader → splitter → embedding → vector store → retriever → prompt → LLM → chain |
| 003 - Create a Website Chatbot | 10min | End-to-end RAG pipeline: URL → grounded answer |
| 004 - Add a Memory to your Website Chatbot | 3min | ConversationalRetrievalChain, buffer memory, window memory |
| 005 - Building a CSV / Excel Data Chatbot | 3min | CSVLoader, tabular RAG, when to use SQL Agent instead |

---

## Module 7 — LangChain / RAG Advanced

**Duration:** 8 minutes | **Lessons:** 3

| Lesson | Duration | Description |
|---|---|---|
| 001 - Section Intro | 1min | Why basic RAG isn't enough for production |
| 002 - Advanced Text Splitting, Re-ranking, Chunking Techniques | 4min | Semantic chunking, parent-child retrieval, cross-encoder re-ranking, hybrid BM25+vector |
| 003 - Building Query Expansion Workflow | 3min | LLM-generated query variants → union retrieval → better recall |

---

## Module 8 — Advanced Projects with LangChain

**Duration:** 28 minutes | **Lessons:** 5

| Lesson | Duration | Description |
|---|---|---|
| 001 - Section Intro | 1min | Overview of four production-grade project patterns |
| 002 - SQL / Database Chatbot using LangChain | 5min | NL → SQL → result → formatted answer; safety practices |
| 003 - Prompt Caching — In Memory and DB | 7min | InMemoryCache, SQLiteCache, semantic caching with Redis |
| 004 - Multi-modal Chatbot | 6min | PDF image extraction, vision LLM summaries, multimodal retrieval |
| 005 - DeepSeek-R1 RAG Chatbot | 10min | Local LLM + Ollama + LangChain + Streamlit web UI |

---

## Module 9 — Completion

**Duration:** 8 minutes | **Lessons:** 2

| Lesson | Duration | Description |
|---|---|---|
| 001 - 2025 AI Roadmap | 7min | Agents, browser AI, robotics, inference optimization, open-source trends |
| 002 - Congratulations! | 1min | Course summary, next steps, deployment options |

---

## Course Totals

| Metric | Value |
|---|---|
| Total modules | 9 |
| Total lessons | 38 |
| Total duration | ~2h 39min |

---

## Learning Path

```
Phase 1 — Foundation
  Module 1: What is RAG?
  Module 2: RAG fundamentals and architecture
  Module 3: LLMs — open vs. closed source

Phase 2 — Environment
  Module 4: Python, VS Code, GitHub setup

Phase 3 — Core Technical Skills
  Module 5: Embeddings, vectors, Pinecone (most important section)

Phase 4 — Build
  Module 6: LangChain RAG pipeline, Website Chatbot, CSV Chatbot

Phase 5 — Advanced
  Module 7: Re-ranking, chunking, query expansion
  Module 8: SQL Chatbot, Prompt Caching, Multimodal, DeepSeek-R1

Phase 6 — Next Steps
  Module 9: 2025 AI roadmap and graduation
```

---

## Prerequisites

- Basic Python (functions, classes, pip install)
- Familiarity with APIs and JSON
- No prior LLM or ML experience required
