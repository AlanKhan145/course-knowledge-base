# 003 - Ingesting And Parsing Text Data Using Document Loaders

## Module

Data Ingestion And Data Parsing Techniques

## Main Idea

LangChain provides document loaders that abstract the details of reading files and converting them into `Document` objects. The `TextLoader` handles individual text files, while `DirectoryLoader` can recursively load an entire folder of files, optionally filtered by glob patterns. These are the simplest loaders and serve as the foundation for understanding more complex ones.

## Key Concepts

- **`TextLoader`**: Loads a single `.txt` file; each file becomes one `Document`
- **`DirectoryLoader`**: Recursively loads all matching files in a directory; delegates to a specific loader per file type
- **`glob` parameter**: Pattern to filter which files to load (e.g., `"**/*.txt"` for all `.txt` files recursively)
- **`show_progress`**: Boolean to display a progress bar when loading many files
- **`use_multithreading`**: Parallel file loading for faster ingestion of large directories
- **Metadata added by loaders**: `{"source": "path/to/file.txt"}` — the file path is automatically included

## Code Example (if applicable)

```python
from langchain_community.document_loaders import TextLoader, DirectoryLoader

# --- TextLoader: Single file ---
loader = TextLoader("data/company_faq.txt", encoding="utf-8")
docs = loader.load()

print(f"Number of documents: {len(docs)}")  # 1 per file
print(f"Content preview: {docs[0].page_content[:200]}")
print(f"Metadata: {docs[0].metadata}")
# {'source': 'data/company_faq.txt'}

# --- DirectoryLoader: Load all .txt files in a folder ---
dir_loader = DirectoryLoader(
    path="data/",
    glob="**/*.txt",          # Recursive: all .txt files in any subfolder
    loader_cls=TextLoader,    # Use TextLoader for each file
    show_progress=True,       # Show progress bar
    use_multithreading=True   # Load files in parallel
)

all_docs = dir_loader.load()
print(f"Loaded {len(all_docs)} documents from directory")

for doc in all_docs[:3]:
    print(f"  Source: {doc.metadata['source']}")
    print(f"  Length: {len(doc.page_content)} characters")

# --- Filtering by glob pattern ---
# Load only markdown files
md_loader = DirectoryLoader(
    path="docs/",
    glob="**/*.md",
    loader_cls=TextLoader
)
md_docs = md_loader.load()
print(f"Loaded {len(md_docs)} markdown files")

# --- Splitting loaded documents ---
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)
chunks = splitter.split_documents(all_docs)
print(f"Split into {len(chunks)} chunks")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Load a single text file using `TextLoader` and inspect the resulting Document
- Load an entire directory of files using `DirectoryLoader` with a glob filter
- Explain what metadata is automatically added by text loaders
- Use `use_multithreading=True` for faster loading of large document sets
- Chain loading with text splitting for a complete ingestion pipeline

## Review Questions

1. What is the difference between `TextLoader` and `DirectoryLoader`, and when would you use each?
2. What does the `glob="**/*.txt"` pattern mean, and how would you change it to load only files in the top-level directory?
3. After loading a directory of 50 text files, how many `Document` objects would you have before splitting?

## Summary

`TextLoader` and `DirectoryLoader` are the simplest document loaders in LangChain, providing a straightforward way to ingest text files into the RAG pipeline. `DirectoryLoader` is particularly powerful for batch ingestion, supporting glob filtering and multithreaded loading. Understanding these basic loaders establishes the pattern that all other loaders follow: load → produce Documents with metadata → ready for splitting.
