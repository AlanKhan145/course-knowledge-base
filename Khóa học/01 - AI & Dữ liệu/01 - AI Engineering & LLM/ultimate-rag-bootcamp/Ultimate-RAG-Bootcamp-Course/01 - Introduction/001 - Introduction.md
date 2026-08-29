# 001 - Introduction

## Module

Introduction

## Main Idea

This lesson provides a comprehensive overview of the Ultimate RAG Bootcamp, covering the evolution from simple retrieval-augmented generation pipelines to fully agentic AI systems. The course spans 29 modules using LangChain, LangGraph, and LangSmith as the primary toolkit. By the end, students will build a complete end-to-end RAG-powered document search application.

## Key Concepts

- **RAG (Retrieval-Augmented Generation)**: Combining external knowledge retrieval with LLM generation
- **Traditional RAG**: Linear pipeline — load, chunk, embed, store, retrieve, generate
- **Agentic RAG**: Agent decides when and how to retrieve; can iterate and self-correct
- **LangChain**: Framework for building LLM-powered pipelines and chains
- **LangGraph**: Graph-based orchestration for stateful, multi-step agent workflows
- **LangSmith**: Observability and evaluation platform for LLM applications
- **Course Phases**:
  - Phase 1: Foundations and RAG concepts
  - Phase 2: Data ingestion, embeddings, and vector stores
  - Phase 3: Advanced chunking, hybrid search, query enhancement
  - Phase 4: Agents, LangGraph basics, LangChain v1 updates
  - Phase 5: Agentic RAG, autonomous RAG, multi-agent, CRAG, adaptive RAG
  - Phase 6: Persistent memory, caching, guardrails, evaluation
  - Phase 7: Graph databases, GraphRAG, end-to-end project, capstone

## Code Example (if applicable)

```python
# Quick taste of what the course builds toward
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langgraph.graph import StateGraph, END

# By the end of this course, you will build systems like this:
# 1. Ingest documents into a vector store
# 2. Create an agentic RAG graph with LangGraph
# 3. Observe and evaluate with LangSmith
print("Welcome to the Ultimate RAG Bootcamp!")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Describe the overall structure and goals of the course
- Explain the difference between traditional and agentic RAG at a high level
- Identify the three main tools: LangChain, LangGraph, and LangSmith
- Understand the end-to-end project that ties the course together
- Set up a learning plan across the 7 course phases

## Review Questions

1. What are the three main frameworks covered in this course, and what role does each play?
2. How does agentic RAG differ from traditional RAG?
3. What is the end-to-end project students will build by the end of the course?

## Summary

The Introduction module sets the stage for a comprehensive journey through RAG systems, from basic retrieval pipelines to sophisticated agentic architectures. Students will use LangChain, LangGraph, and LangSmith together to build production-grade AI applications. The course culminates in a full-stack document search application with a ReAct agent.
