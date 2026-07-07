# 003 - What are Embeddings

## Section

Vector Databases & Embeddings

## Duration

7 minutes

## Main Idea

Explains what an embedding model is, how it maps input data to a vector representation, what properties a good embedding should have, and which embedding models are commonly used in RAG systems.

## What is an Embedding?

An **embedding** is the output of an embedding model — a dense numeric vector that captures the semantic meaning of input data.

```python
from openai import OpenAI

client = OpenAI()
text = "Retrieval-Augmented Generation combines retrieval with generation."
response = client.embeddings.create(input=text, model="text-embedding-3-small")
vector = response.data[0].embedding  # list of 1536 floats
```

## Properties of a Good Embedding

| Property | Description |
|---|---|
| Semantic similarity | Similar meanings → small angle between vectors |
| Consistency | Same text always produces the same vector |
| Dimensionality | High enough to capture nuance (768–3072 dims) |
| Normalized | Unit-length vectors enable efficient cosine similarity |

## Embedding in RAG

**Indexing time** (one-time):
```
Document chunks → Embedding model → Vectors → Vector DB
```

**Query time** (per request):
```
User question → Embedding model (same model!) → Query vector → Similarity search
```

The same embedding model **must** be used for both indexing and querying. Mixing models breaks the geometric space.

## Common Embedding Models

| Model | Provider | Dimensions | Notes |
|---|---|---|---|
| text-embedding-3-small | OpenAI | 1536 | Fast, cheap, good quality |
| text-embedding-3-large | OpenAI | 3072 | Higher quality, higher cost |
| embed-english-v3.0 | Cohere | 1024 | Strong retrieval performance |
| all-MiniLM-L6-v2 | HuggingFace | 384 | Fast, runs locally, free |
| bge-large-en-v1.5 | BAAI | 1024 | State-of-art open-source |
| nomic-embed-text | Nomic | 768 | Open, runs with Ollama |

## Chunking and Embedding

Because embedding models have token limits (usually 512–8192 tokens), long documents must be split into chunks before embedding:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_text(long_document)
# Now embed each chunk individually
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Define an embedding and describe what it represents.
- Explain why the same embedding model must be used at indexing and query time.
- List at least three embedding models and describe their trade-offs.
- Explain why chunking is necessary before embedding long documents.

## Review Questions

1. What is the difference between a "vector" and an "embedding"?
2. Why would using OpenAI embeddings for indexing but Cohere embeddings for queries produce bad results?
3. What happens if a document is longer than the embedding model's token limit?

## Summary

An embedding is the numeric vector output of an embedding model. The model encodes semantic meaning into a dense representation that enables similarity search. In RAG, the same embedding model is used to encode both documents at indexing time and user queries at search time.
