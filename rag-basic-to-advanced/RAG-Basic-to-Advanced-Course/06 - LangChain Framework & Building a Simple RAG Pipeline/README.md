# Section 06 - LangChain Framework & Building a Simple RAG Pipeline

- Lessons: 5
- Duration: 22min

## Purpose

Puts theory into practice by building a complete RAG pipeline with LangChain. Students go from loading documents to having a working website chatbot with conversation memory, then extend the pattern to CSV/Excel data.

## Lessons

- [001 - Section Intro](001 - Section Intro.md) - 1min
- [002 - Components of Basic RAG Pipeline, LangChain and Loaders](002 - Components of Basic RAG Pipeline, LangChain and Loaders.md) - 5min
- [003 - Create a Website Chatbot](003 - Create a Website Chatbot.md) - 10min
- [004 - Add a Memory to your Website Chatbot](004 - Add a Memory to your Website Chatbot.md) - 3min
- [005 - Building a CSV Excel Data Chatbot](005 - Building a CSV Excel Data Chatbot.md) - 3min

## RAG Pipeline Components

```
Document Loader → Text Splitter → Embedding Model → Vector Store
                                                         ↓
User Question → Embedding → Retriever → Prompt Template → LLM → Answer
```

## Study Checklist

- [ ] List all eight components of a basic LangChain RAG pipeline.
- [ ] Build the website chatbot end-to-end without copying code.
- [ ] Add conversation memory so follow-up questions work correctly.
- [ ] Adapt the pipeline for a CSV file as the data source.
