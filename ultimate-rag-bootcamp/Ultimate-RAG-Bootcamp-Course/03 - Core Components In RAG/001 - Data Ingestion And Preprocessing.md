# 001 - Data Ingestion And Preprocessing

## Module

Core Components In RAG

## Main Idea

The data ingestion phase is the offline preparation step in a RAG system. Raw documents from various sources are loaded, cleaned, split into chunks, converted into vector embeddings, and stored in a vector store. This phase happens once (or incrementally) before any user queries are served, and its quality directly determines the quality of retrieval.

## Key Concepts

### Full Ingestion Pipeline

```
Data Source → Ingestion → Preprocessing → Chunking → Embedding → Vector Store
```

| Step | Component | Role |
|------|-----------|------|
| **Data Source** | PDFs, Word docs, CSVs, databases, websites | Raw knowledge to be made queryable |
| **Ingestion** | Document Loaders (LangChain) | Load raw files into LangChain `Document` objects with `page_content` and `metadata` |
| **Preprocessing** | Cleaning functions | Remove noise: headers, footers, special characters, HTML tags, duplicate content |
| **Chunking** | Text Splitters | Split large documents into smaller, overlapping chunks that fit in the LLM context window |
| **Embedding** | Embedding Model | Convert each text chunk into a dense numeric vector capturing semantic meaning |
| **Vector Store** | Chroma, FAISS, Pinecone | Store and index vectors for fast similarity search at query time |

### Key Design Decisions in Ingestion

- **Chunk Size**: Smaller chunks = more precise retrieval but less context per chunk; larger = more context but less precise
- **Chunk Overlap**: Overlapping chunks prevent important information from being split across boundaries
- **Embedding Model**: Quality of embeddings directly impacts retrieval relevance
- **Metadata Preservation**: Store source, page number, timestamp in metadata for citation and filtering

## Code Example (if applicable)

```python
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

# Step 1: Load documents
loader = PyPDFLoader("company_policy.pdf")
raw_docs = loader.load()
print(f"Loaded {len(raw_docs)} pages")

# Step 2: Preprocess (basic cleaning)
for doc in raw_docs:
    doc.page_content = doc.page_content.strip()

# Step 3: Chunk documents
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ".", " ", ""]
)
chunks = splitter.split_documents(raw_docs)
print(f"Created {len(chunks)} chunks")

# Step 4: Embed and store
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)
print("Vector store created and persisted!")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- List all six steps of the RAG ingestion pipeline in order
- Explain the purpose of chunking and why chunk overlap matters
- Describe what a vector embedding is at a conceptual level
- Explain how metadata attached during ingestion enables filtering and citation at query time
- Identify quality issues in ingestion that would hurt retrieval performance

## Review Questions

1. Why do we split documents into chunks rather than embedding the whole document as a single vector?
2. What is the role of the vector store in the RAG system, and when is it populated?
3. How does chunk overlap help preserve context that might otherwise be lost at chunk boundaries?

## Summary

The data ingestion pipeline transforms raw documents into a searchable vector store through six stages: loading, preprocessing, chunking, embedding, and storage. This offline phase is executed once and updated incrementally as new documents arrive. The quality of each step — especially chunking strategy and embedding model choice — has a direct impact on retrieval accuracy in the query phase.
