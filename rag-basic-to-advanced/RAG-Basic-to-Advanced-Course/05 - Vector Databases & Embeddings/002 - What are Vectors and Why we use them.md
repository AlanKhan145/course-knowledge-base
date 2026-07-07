# 002 - What are Vectors and Why we use them

## Section

Vector Databases & Embeddings

## Duration

6 minutes

## Main Idea

Explains what a vector is in the context of machine learning, why data must be converted to vectors for semantic search, and how similarity between vectors captures meaning similarity between pieces of data.

## What is a Vector?

A **vector** is an ordered list of numbers (floats) that represents a piece of data in a high-dimensional space.

```
"The sky is blue"  →  [0.12, -0.45, 0.78, 0.03, ..., 0.61]  # 1536 dimensions
"The ocean is blue" → [0.11, -0.43, 0.79, 0.05, ..., 0.60]  # very similar!
"Machine learning"  → [-0.33, 0.72, -0.15, 0.88, ..., 0.02] # very different
```

The key insight: **similar meaning → similar vector position in space**.

## Why Computers Need Vectors

Traditional databases search by exact matches (`WHERE name = 'John'`). They cannot answer "find me documents about blue sky" unless those exact words appear.

Vectors enable **semantic search**: find documents that mean the same thing, even if they use different words.

## Distance = Similarity

Two vectors are similar if the angle between them is small (high cosine similarity).

```
cosine_similarity(v1, v2) = (v1 · v2) / (|v1| × |v2|)
```

- Score of **1.0** = identical meaning
- Score of **0.0** = unrelated
- Score of **-1.0** = opposite meaning

## Why High Dimensions?

- Low-dimensional vectors (2D, 3D) cannot capture nuanced meaning.
- Modern embedding models use 768 to 3072 dimensions.
- Each dimension encodes a different aspect of meaning (tone, topic, entity type, etc.).

## The Vector Search Pipeline

```
Query: "What is the capital of France?"
    ↓
Embedding model: convert to vector [0.23, -0.11, ...]
    ↓
Vector DB: find top-k stored vectors closest to query vector
    ↓
Return: documents about Paris, France, European capitals, etc.
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what a vector is and why high dimensions are needed.
- Describe cosine similarity and what a high vs. low score means.
- Explain why keyword search fails where vector search succeeds.

## Review Questions

1. Why does "sky is blue" and "ocean is blue" get a high cosine similarity score?
2. What is the limitation of keyword-based database search?
3. Why do embedding models typically produce 768–3072 dimensional vectors?

## Summary

Vectors are high-dimensional numeric arrays that represent the meaning of data. Similar meanings produce similar vectors, enabling semantic search via cosine similarity — which is the retrieval mechanism at the heart of every RAG system.
