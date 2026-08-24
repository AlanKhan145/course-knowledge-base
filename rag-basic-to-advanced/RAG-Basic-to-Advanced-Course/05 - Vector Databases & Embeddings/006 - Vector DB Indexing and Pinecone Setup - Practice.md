# 006 - Vector DB Indexing and Pinecone Setup

## Section

Vector Databases & Embeddings

## Duration

8 minutes

## Main Idea

Introduces vector databases as the storage layer for embeddings, explains how approximate nearest neighbor (ANN) indexing enables fast similarity search at scale, and walks through setting up a Pinecone index from scratch.

## What is a Vector Database?

A vector database is a specialized database optimized to:
1. Store high-dimensional embedding vectors alongside metadata.
2. Index those vectors for fast approximate similarity search.
3. Return the top-k most similar vectors to a query vector.

Popular vector databases: **Pinecone**, Weaviate, Qdrant, Chroma, Milvus, pgvector.

## Approximate Nearest Neighbor (ANN) Search

Exact nearest neighbor search (brute force) compares a query vector to every stored vector — O(n) per query. This is too slow for large datasets.

**ANN algorithms** trade a small accuracy loss for massive speed gains:

| Algorithm | Description |
|---|---|
| HNSW | Hierarchical Navigable Small World — graph-based, very fast |
| IVF | Inverted File Index — cluster-based |
| LSH | Locality Sensitive Hashing — hash-based |

Pinecone uses HNSW internally. Students do not need to configure the algorithm — Pinecone handles it.

## Pinecone Setup

### 1. Install and Configure

```bash
pip install pinecone-client
```

```python
from pinecone import Pinecone, ServerlessSpec
import os

pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
```

### 2. Create an Index

```python
index_name = "rag-course-index"

if index_name not in pc.list_indexes().names():
    pc.create_index(
        name=index_name,
        dimension=1536,        # must match embedding model output
        metric="cosine",       # cosine, dotproduct, or euclidean
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        )
    )

index = pc.Index(index_name)
```

### 3. Upsert Vectors

```python
vectors = [
    {
        "id": "doc-1",
        "values": [0.12, -0.45, ...],   # 1536 floats
        "metadata": {"source": "page_1", "text": "The original chunk text"}
    }
]
index.upsert(vectors=vectors)
```

### 4. Query the Index

```python
query_vector = embedding_model.embed_query("What is RAG?")
results = index.query(vector=query_vector, top_k=5, include_metadata=True)

for match in results["matches"]:
    print(match["score"], match["metadata"]["text"])
```

## Key Configuration Choices

| Parameter | Recommended Value | Reason |
|---|---|---|
| `dimension` | Match embedding model | Mismatched dimensions cause errors |
| `metric` | `cosine` | Standard for semantic similarity |
| `top_k` | 3–10 | Balance between context richness and prompt length |

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain why ANN indexing is necessary for large vector databases.
- Create a Pinecone serverless index with the correct dimension and metric.
- Upsert document vectors with metadata.
- Query the index and interpret the similarity scores.

## Review Questions

1. Why is exact nearest neighbor search too slow for production RAG?
2. What happens if you create a Pinecone index with dimension 1536 but embed queries with a model that outputs 768 dimensions?
3. What does the `metadata` field in a Pinecone vector allow you to do?

## Summary

Vector databases store embeddings and enable fast approximate nearest neighbor search. Pinecone is a managed cloud vector database that requires no infrastructure management. Set up an index with the correct dimension and cosine metric, upsert document vectors with metadata, and query with a user's query vector to retrieve the most relevant chunks.

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
