# 002 - Document Structure In LangChain

## Module

Data Ingestion And Data Parsing Techniques

## Main Idea

The `Document` object is the fundamental data unit in LangChain's RAG pipeline. Every piece of text — whether from a PDF, database, or website — is wrapped in a `Document` object with two fields: `page_content` (the text) and `metadata` (a dictionary of arbitrary key-value data). Understanding this structure is essential for working with loaders, splitters, embeddings, and retrievers.

## Key Concepts

- **`Document`**: LangChain's universal container for text data; imported from `langchain_core.documents`
- **`page_content`**: A string containing the actual text of the document chunk
- **`metadata`**: A Python dictionary of additional information: source file path, page number, author, timestamp, URL, etc.
- **Metadata Uses**:
  - Source citation: "This answer comes from `policy.pdf`, page 3"
  - Filtering: Retrieve only documents from a specific source or date range
  - Debugging: Trace which chunks were retrieved for a given query
- **Document Flow**: Loaders produce Documents → Splitters split Documents → Embeddings encode Documents → Vector stores store Documents

## Code Example (if applicable)

```python
from langchain_core.documents import Document

# Creating a Document manually
doc = Document(
    page_content="The return policy allows returns within 30 days of purchase.",
    metadata={
        "source": "policy.pdf",
        "page": 5,
        "author": "Legal Team",
        "date": "2024-01-15",
        "section": "Returns"
    }
)

print(doc.page_content)
# Output: The return policy allows returns within 30 days of purchase.

print(doc.metadata)
# Output: {'source': 'policy.pdf', 'page': 5, 'author': 'Legal Team', ...}

print(type(doc))
# Output: <class 'langchain_core.documents.base.Document'>

# Accessing fields
print(doc.metadata["source"])  # policy.pdf
print(doc.metadata.get("page", "unknown"))  # 5

# Documents are created automatically by loaders
from langchain_community.document_loaders import TextLoader

loader = TextLoader("sample.txt")
docs = loader.load()

for doc in docs:
    print(f"Content (first 100 chars): {doc.page_content[:100]}")
    print(f"Metadata: {doc.metadata}")
    print("---")

# Splitters preserve and augment metadata
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=50)
chunks = splitter.split_documents(docs)

for chunk in chunks[:2]:
    print(f"Chunk: {chunk.page_content[:80]}")
    # Metadata from original doc is preserved in each chunk
    print(f"Source: {chunk.metadata.get('source')}")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Create a LangChain `Document` object with `page_content` and `metadata`
- Explain why metadata is important for source citation and filtering
- Trace how the `Document` object flows through the RAG pipeline from loader to vector store
- Access and manipulate document metadata in Python
- Understand how splitters preserve metadata from parent documents

## Review Questions

1. What are the two main fields of a LangChain `Document`, and what does each contain?
2. How is document metadata used after retrieval to provide source citations?
3. When a document is split into chunks, what happens to the original document's metadata?

## Summary

The LangChain `Document` object is the universal unit of text data in the RAG pipeline. It carries the text in `page_content` and contextual information in `metadata`, which flows through every stage from loading to retrieval. Rich metadata enables source citation, filtering, and debugging, making it a critical design consideration when building production RAG systems.
