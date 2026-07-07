# Section 08 - Advanced Projects with LangChain

- Lessons: 5
- Duration: 28min

## Purpose

Applies RAG to three production-grade project types: SQL database chatbot, multimodal chatbot, and DeepSeek-R1 RAG chatbot. Also covers prompt caching strategies to reduce cost and latency.

## Lessons

- [001 - Section Intro](001 - Section Intro.md) - 1min
- [002 - SQL Database Chatbot using LangChain](002 - SQL Database Chatbot using LangChain.md) - 5min
- [003 - Prompt Caching In Memory and DB](003 - Prompt Caching In Memory and DB.md) - 7min
- [004 - Multi-modal Chatbot](004 - Multi-modal Chatbot.md) - 6min
- [005 - DeepSeek-R1 RAG Chatbot](005 - DeepSeek-R1 RAG Chatbot.md) - 10min

## Projects Overview

| Project | Input | Output |
|---|---|---|
| SQL Chatbot | Natural language question | SQL query result |
| Prompt Cache Chatbot | Repeated queries | Cached response (faster + cheaper) |
| Multimodal Chatbot | Text + images/PDFs | Grounded multimodal answer |
| DeepSeek-R1 RAG | Website content | Streamlit chatbot with DeepSeek-R1 |

## Study Checklist

- [ ] Build the SQL chatbot and test with three natural language questions.
- [ ] Implement in-memory caching and observe latency reduction.
- [ ] Implement SQLite-backed prompt caching for persistence across restarts.
- [ ] Build the multimodal chatbot and test with a PDF input.
- [ ] Deploy the DeepSeek-R1 RAG chatbot in Streamlit end-to-end.
