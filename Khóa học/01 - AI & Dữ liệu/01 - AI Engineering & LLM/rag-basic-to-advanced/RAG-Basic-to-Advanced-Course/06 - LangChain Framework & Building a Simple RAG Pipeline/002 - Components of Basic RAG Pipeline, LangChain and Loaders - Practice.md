# 002 - Components of Basic RAG Pipeline, LangChain and Loaders

## Section

LangChain Framework & Building a Simple RAG Pipeline

## Duration

5 minutes

## Main Idea

Maps the abstract RAG architecture to concrete LangChain classes. Explains each component's role and the LangChain class that implements it, with a focus on document loaders as the data ingestion layer.

## Eight Components of a LangChain RAG Pipeline

| # | Component | LangChain Class | Role |
|---|---|---|---|
| 1 | Document Loader | `WebBaseLoader`, `PyPDFLoader`, `CSVLoader` | Read source data into `Document` objects |
| 2 | Text Splitter | `RecursiveCharacterTextSplitter` | Divide documents into manageable chunks |
| 3 | Embedding Model | `OpenAIEmbeddings`, `HuggingFaceEmbeddings` | Convert chunks to vectors |
| 4 | Vector Store | `Pinecone`, `Chroma`, `FAISS` | Store and index vectors |
| 5 | Retriever | `.as_retriever()` | Query the vector store; return top-k chunks |
| 6 | Prompt Template | `ChatPromptTemplate` | Format question + context for the LLM |
| 7 | LLM | `ChatOpenAI`, `ChatAnthropic`, `Ollama` | Generate the answer |
| 8 | Chain / Orchestrator | `RunnablePassthrough`, LCEL | Wire all components together |

## Document Loaders Deep Dive

### WebBaseLoader (Scrape a web page)

```python
from langchain_community.document_loaders import WebBaseLoader

loader = WebBaseLoader("https://example.com/about")
docs = loader.load()
print(docs[0].page_content[:200])
```

### PyPDFLoader (Load a PDF)

```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("document.pdf")
pages = loader.load_and_split()
```

### CSVLoader (Load tabular data)

```python
from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(file_path="data.csv", source_column="description")
docs = loader.load()
```

## Text Splitter

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", " ", ""]
)
chunks = splitter.split_documents(docs)
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Name all eight components of a LangChain RAG pipeline.
- Load data from a web page, PDF, and CSV file using the correct LangChain loader.
- Configure a text splitter with appropriate chunk size and overlap.

## Review Questions

1. What is the difference between `load()` and `load_and_split()` in `PyPDFLoader`?
2. Why does `chunk_overlap` exist in `RecursiveCharacterTextSplitter`?
3. Which LangChain class acts as the retriever in a RAG pipeline?

## Summary

LangChain maps every RAG component to a Python class. The pipeline starts with a document loader (web, PDF, CSV), splits documents into chunks, embeds them, stores them in a vector store, and wires the retriever, prompt, and LLM together into a chain.

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
