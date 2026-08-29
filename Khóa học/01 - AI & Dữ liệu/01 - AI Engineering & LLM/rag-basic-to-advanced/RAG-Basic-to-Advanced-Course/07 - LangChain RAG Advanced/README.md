# Section 07 - LangChain RAG Advanced

- Lessons: 3
- Duration: 8min

## Purpose

Covers advanced retrieval techniques that improve answer quality beyond the basic RAG pipeline. Focuses on smarter chunking, re-ranking retrieved results, and query expansion to increase recall from the vector database.

## Lessons

- [001 - Section Intro](001 - Section Intro.md) - 1min
- [002 - Advanced Text Splitting, Re-ranking, Chunking Techniques](002 - Advanced Text Splitting, Re-ranking, Chunking Techniques.md) - 4min
- [003 - Building Query Expansion Workflow](003 - Building Query Expansion Workflow.md) - 3min

## Key Techniques

- Semantic chunking (split at meaning boundaries, not character counts)
- Context-preserving splitting (keep surrounding sentences for coherence)
- Cross-encoder re-ranking (score retrieved chunks against the query)
- Hybrid retrieval (combine keyword BM25 + vector search)
- Multi-vector retrieval (store summary + full chunk)
- Query expansion (generate N query variants → union of retrieved docs)

## Study Checklist

- [ ] Explain why fixed-size chunking can hurt retrieval quality.
- [ ] Implement semantic chunking for a document.
- [ ] Build a query expansion step that generates three query variants.
- [ ] Apply re-ranking to reorder retrieved chunks by relevance score.
