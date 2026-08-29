# 002 - Query Processing And Output Generation Phase

## Module

Core Components In RAG

## Main Idea

The query processing and output generation phase is the online, real-time half of the RAG system. When a user submits a question, it is embedded, used to search the vector store, and the retrieved chunks are assembled into a prompt that guides the LLM to produce a grounded answer. This phase must be fast and reliable to deliver a good user experience.

## Key Concepts

### Full Query Pipeline

```
User Query → Embed Query → Retriever → Context Assembly → Prompt Template → LLM → Final Answer
```

| Step | Component | Role |
|------|-----------|------|
| **User Query** | Raw natural language question | Entry point; may need preprocessing or expansion |
| **Embed Query** | Same embedding model used in ingestion | Convert the query into a vector for similarity search |
| **Retriever** | Vector store similarity search | Find the top-k most similar document chunks to the query vector |
| **Context Assembly** | Document concatenation | Combine retrieved chunks into a single context string |
| **Prompt Template** | `ChatPromptTemplate` | Combine the context + user question into a structured prompt for the LLM |
| **LLM** | ChatOpenAI, ChatGroq, etc. | Generate an answer grounded in the retrieved context |
| **Final Answer** | Output parser | Extract and return the text response to the user |

### Important Design Considerations

- **Embedding Consistency**: The query must be embedded with the SAME model used to embed the documents; mismatched models break similarity search
- **Top-k Selection**: Retrieving too few chunks misses relevant information; too many dilutes the signal and wastes context window
- **Prompt Template Design**: Clear instructions to "answer only from context" reduce hallucination
- **Output Parsing**: `StrOutputParser` extracts the text; `PydanticOutputParser` enforces structured output
- **Latency**: Embedding + retrieval + generation; each step adds latency; production systems optimize each

## Code Example (if applicable)

```python
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# Load pre-built vector store
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)

# Step 1: Create retriever (top-5 chunks)
retriever = vector_store.as_retriever(search_kwargs={"k": 5})

# Step 2: Define prompt template
prompt = ChatPromptTemplate.from_template("""
You are a helpful assistant. Answer the question using ONLY the context below.
If the answer is not in the context, say "I don't have that information."

Context:
{context}

Question: {question}

Answer:
""")

# Step 3: Build the full query chain using LCEL
def format_docs(docs):
    return "\n\n---\n\n".join(doc.page_content for doc in docs)

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

# Step 4: Run a query
answer = chain.invoke("What is the overtime policy?")
print(answer)
```

## Learning Objectives

By the end of this lesson, you should be able to:
- List all seven steps of the RAG query pipeline in order
- Explain why the query must be embedded with the same model used during ingestion
- Describe how the prompt template is used to constrain the LLM's answer to retrieved context
- Identify the latency sources in the query phase and strategies to reduce them
- Build a simple end-to-end query chain using LCEL

## Review Questions

1. What happens if you embed the user query with a different model than the one used to embed the documents?
2. Why should the prompt template explicitly instruct the LLM to "answer only from context"?
3. What is the role of the output parser at the end of the query chain?

## Summary

The query processing phase transforms a user's natural language question into a grounded LLM answer through seven steps: embedding the query, retrieving similar chunks, assembling context, formatting a prompt, calling the LLM, and parsing the output. The ingestion and query phases are linked through the vector store and must use the same embedding model. Together, these two phases form the complete RAG system.

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
