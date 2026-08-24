# 002 - Advanced Text Splitting, Re-ranking, Chunking Techniques

## Section

LangChain / RAG Advanced

## Duration

4 minutes

## Main Idea

Covers the chunking and retrieval refinement techniques that move a RAG system from basic to production-quality: semantic chunking, context-preserving splitting, re-ranking, hybrid retrieval, multi-vector retrieval, and cross-modal retrieval.

## Why Basic Chunking Falls Short

Fixed-size chunking (`chunk_size=500`) splits documents at arbitrary character boundaries, often cutting:
- Sentences mid-way
- Tables across chunks
- Paragraphs that belong together

This degrades retrieval quality because chunks lack coherent context.

## Advanced Chunking Techniques

### Semantic Chunking

Splits at natural semantic boundaries rather than character counts.

```python
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

chunker = SemanticChunker(
    embeddings=OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=95
)
chunks = chunker.split_text(long_document)
```

Sentences with high embedding distance from their neighbors become chunk boundaries.

### Context-Preserving Splitting

Includes surrounding context in each chunk to prevent isolated chunks from losing meaning.

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100,   # 100 chars of overlap = shared context between adjacent chunks
    add_start_index=True
)
```

### Parent-Child Chunking (Multi-vector Retrieval)

Store small chunks for retrieval precision, but return the larger parent chunk to the LLM for richer context.

```python
from langchain.retrievers import ParentDocumentRetriever
from langchain.storage import InMemoryStore

parent_splitter = RecursiveCharacterTextSplitter(chunk_size=2000)
child_splitter = RecursiveCharacterTextSplitter(chunk_size=400)

retriever = ParentDocumentRetriever(
    vectorstore=vector_store,
    docstore=InMemoryStore(),
    child_splitter=child_splitter,
    parent_splitter=parent_splitter,
)
```

## Re-ranking

After retrieving top-k chunks by vector similarity, re-rank them using a **cross-encoder** (a model that scores each (query, chunk) pair together, not separately).

```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CrossEncoderReranker
from langchain_community.cross_encoders import HuggingFaceCrossEncoder

reranker_model = HuggingFaceCrossEncoder(model_name="BAAI/bge-reranker-base")
compressor = CrossEncoderReranker(model=reranker_model, top_n=3)

compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=retriever
)
```

## Hybrid Retrieval (BM25 + Vector)

Combines keyword search (BM25) with semantic vector search, then merges and re-ranks the results.

```python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

bm25_retriever = BM25Retriever.from_documents(chunks)
bm25_retriever.k = 5

ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.4, 0.6]
)
```

## Technique Comparison

| Technique | Improves | Trade-off |
|---|---|---|
| Semantic chunking | Chunk coherence | Slower indexing |
| Parent-child retrieval | Context richness | More storage |
| Re-ranking | Precision | Extra inference call |
| Hybrid retrieval | Recall (keyword + semantic) | More complex pipeline |

## Learning Objectives

By the end of this lesson, you should be able to:

- Implement semantic chunking with `SemanticChunker`.
- Set up a cross-encoder re-ranker to improve retrieval precision.
- Build a hybrid BM25 + vector retriever.
- Explain when to use parent-child retrieval.

## Review Questions

1. Why does high chunk overlap improve context preservation?
2. What is the key difference between a bi-encoder (vector search) and a cross-encoder (re-ranking)?
3. When would hybrid retrieval outperform pure vector search?

## Summary

Advanced chunking (semantic, parent-child) and retrieval refinement (re-ranking, hybrid) are the main levers for improving RAG answer quality. Each adds pipeline complexity but measurably improves the relevance of what the LLM receives as context.

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
