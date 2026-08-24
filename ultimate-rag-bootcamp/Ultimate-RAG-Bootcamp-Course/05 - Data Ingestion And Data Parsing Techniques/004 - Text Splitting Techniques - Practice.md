# 004 - Text Splitting Techniques

## Module

Data Ingestion And Data Parsing Techniques

## Main Idea

Text splitting is one of the most impactful decisions in the RAG pipeline. Chunks that are too large dilute retrieval precision; chunks too small lose context. LangChain provides multiple splitters with different strategies: character-based, recursive character-based, and token-based. Choosing the right splitter and configuring `chunk_size` and `chunk_overlap` correctly significantly affects retrieval quality.

## Key Concepts

| Splitter | Split Strategy | Best For |
|----------|---------------|---------|
| `CharacterTextSplitter` | Splits on a single separator (default `\n\n`) | Simple documents with clear paragraph breaks |
| `RecursiveCharacterTextSplitter` | Tries multiple separators in order until chunks fit | General-purpose; most commonly used |
| `TokenTextSplitter` | Splits by token count (using tiktoken) | When chunk_size must match LLM token limits exactly |

- **`chunk_size`**: Maximum size of each chunk (in characters or tokens)
- **`chunk_overlap`**: Number of characters/tokens that overlap between consecutive chunks; prevents losing context at boundaries
- **`separators`**: For `RecursiveCharacterTextSplitter`, the ordered list of separators to try: `["\n\n", "\n", ".", " ", ""]`
- **Why Recursive is Preferred**: It respects natural text boundaries (paragraphs, then sentences, then words) before resorting to hard character splits

## Code Example (if applicable)

```python
from langchain.text_splitter import (
    CharacterTextSplitter,
    RecursiveCharacterTextSplitter,
    TokenTextSplitter
)

sample_text = """
Chapter 1: Introduction to Machine Learning

Machine learning is a subset of artificial intelligence that enables computers
to learn from data without being explicitly programmed.

Chapter 2: Supervised Learning

In supervised learning, the algorithm is trained on labeled data.
The model learns to map inputs to outputs based on example pairs.
Common algorithms include linear regression, decision trees, and neural networks.

Chapter 3: Unsupervised Learning

Unsupervised learning finds hidden patterns in data without labeled examples.
Clustering and dimensionality reduction are key techniques.
"""

# --- CharacterTextSplitter ---
char_splitter = CharacterTextSplitter(
    separator="\n\n",
    chunk_size=300,
    chunk_overlap=50
)
char_chunks = char_splitter.split_text(sample_text)
print(f"CharacterTextSplitter: {len(char_chunks)} chunks")

# --- RecursiveCharacterTextSplitter (recommended) ---
recursive_splitter = RecursiveCharacterTextSplitter(
    chunk_size=300,
    chunk_overlap=50,
    separators=["\n\n", "\n", ". ", " ", ""]  # Tries each in order
)
recursive_chunks = recursive_splitter.split_text(sample_text)
print(f"RecursiveCharacterTextSplitter: {len(recursive_chunks)} chunks")
for i, chunk in enumerate(recursive_chunks):
    print(f"  Chunk {i+1} ({len(chunk)} chars): {chunk[:60]}...")

# --- TokenTextSplitter ---
token_splitter = TokenTextSplitter(
    chunk_size=100,    # 100 tokens per chunk
    chunk_overlap=20   # 20-token overlap
)
token_chunks = token_splitter.split_text(sample_text)
print(f"TokenTextSplitter: {len(token_chunks)} chunks")

# --- Splitting Documents (not just text) ---
from langchain_community.document_loaders import TextLoader

loader = TextLoader("data/document.txt")
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
chunks = splitter.split_documents(docs)
print(f"\nDocument splitting: {len(docs)} docs → {len(chunks)} chunks")
print(f"Metadata preserved: {chunks[0].metadata}")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Explain the purpose and trade-offs of `chunk_size` and `chunk_overlap`
- Compare `CharacterTextSplitter`, `RecursiveCharacterTextSplitter`, and `TokenTextSplitter`
- Implement `RecursiveCharacterTextSplitter` with custom separator lists
- Use `split_documents()` to preserve document metadata during splitting
- Choose the appropriate splitter and parameters for a given document type

## Review Questions

1. Why is `RecursiveCharacterTextSplitter` preferred over `CharacterTextSplitter` for most use cases?
2. What problem does `chunk_overlap` solve, and what is a typical overlap ratio?
3. When would you choose `TokenTextSplitter` over `RecursiveCharacterTextSplitter`?

## Summary

Text splitting determines the granularity of retrieval in a RAG system. `RecursiveCharacterTextSplitter` is the most versatile choice because it attempts to split on natural language boundaries before resorting to character-level splits. Setting appropriate `chunk_size` (typically 500–1500 characters) and `chunk_overlap` (10–20% of chunk size) balances retrieval precision with contextual richness. The `split_documents()` method is preferred over `split_text()` because it preserves metadata.

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
