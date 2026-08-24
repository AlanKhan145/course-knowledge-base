# 005 - Building a CSV / Excel Data Chatbot

## Section

LangChain Framework & Building a Simple RAG Pipeline

## Duration

3 minutes

## Main Idea

Adapts the RAG pipeline to handle structured tabular data (CSV / Excel). Shows how to load rows as documents, embed them, and let the LLM answer natural-language questions about the data.

## When to Use CSV RAG vs. SQL Agent

| Approach | Best For |
|---|---|
| CSV RAG (this lesson) | Small-to-medium datasets, no database infrastructure |
| SQL Agent (Module 8) | Large databases, complex aggregations, existing SQL infrastructure |

## Full CSV Chatbot Pipeline

```python
from langchain_community.document_loaders import CSVLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

# Step 1 — Load CSV
loader = CSVLoader(
    file_path="sales_data.csv",
    source_column="product_name"   # used as the document source metadata
)
docs = loader.load()

# Step 2 — Split (optional for short rows, useful for long descriptions)
splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=30)
chunks = splitter.split_documents(docs)

# Step 3 — Embed and store
embedding_model = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = Chroma.from_documents(chunks, embedding_model)
retriever = vector_store.as_retriever(search_kwargs={"k": 5})

# Step 4 — Prompt and chain
prompt = ChatPromptTemplate.from_template("""
Answer the user's question about the sales data using only the context below.

Context:
{context}

Question: {question}
""")

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def format_docs(docs):
    return "\n".join(d.page_content for d in docs)

chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
)

# Query
response = chain.invoke("Which products had the highest sales in Q1?")
print(response.content)
```

## Loading Excel Files

```python
from langchain_community.document_loaders import UnstructuredExcelLoader

loader = UnstructuredExcelLoader("report.xlsx", mode="elements")
docs = loader.load()
```

## Limitations of CSV RAG

- Cannot do precise numerical aggregations (SUM, AVG) — use SQL Agent for that.
- Works best when each row contains rich descriptive text, not just numbers.
- For analytical queries ("what is the total revenue?"), combine with a pandas tool or use the SQL Agent.

## Learning Objectives

By the end of this lesson, you should be able to:

- Load a CSV file using `CSVLoader` and inspect the resulting documents.
- Build a RAG chain on top of CSV data.
- Explain the limitation of CSV RAG for numerical aggregation tasks.

## Review Questions

1. What does the `source_column` parameter in `CSVLoader` control?
2. When should you prefer the SQL Agent (Module 8) over CSV RAG?
3. How would you extend this pipeline to load a multi-sheet Excel file?

## Summary

CSV and Excel files can be ingested as documents using LangChain loaders and queried semantically with the same RAG pipeline used for web pages. For analytical or aggregation-heavy questions, the SQL Agent (Module 8) is a better choice.

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
