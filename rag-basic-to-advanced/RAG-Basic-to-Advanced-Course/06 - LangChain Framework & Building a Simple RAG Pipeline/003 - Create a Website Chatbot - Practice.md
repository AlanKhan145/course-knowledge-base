# 003 - Create a Website Chatbot

## Section

LangChain Framework & Building a Simple RAG Pipeline

## Duration

10 minutes

## Main Idea

End-to-end walkthrough building a working RAG chatbot that answers questions about the content of any website. Covers the complete pipeline from scraping a URL to generating a grounded answer.

## Full Website Chatbot Pipeline

```python
import os
from dotenv import load_dotenv
from langchain_community.document_loaders import WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

# Step 1 — Load the website
loader = WebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/")
docs = loader.load()

# Step 2 — Split into chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
chunks = splitter.split_documents(docs)

# Step 3 — Create embeddings and vector store
embedding_model = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = Chroma.from_documents(chunks, embedding_model)

# Step 4 — Create retriever
retriever = vector_store.as_retriever(search_kwargs={"k": 5})

# Step 5 — Prompt template
prompt = ChatPromptTemplate.from_template("""
Answer the question using only the context below.
If you cannot answer from the context, say "I don't have enough information."

Context: {context}

Question: {question}
""")

# Step 6 — LLM
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# Step 7 — Chain
def format_docs(docs):
    return "\n\n".join(d.page_content for d in docs)

chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
)

# Step 8 — Ask a question
response = chain.invoke("What is the ReAct framework?")
print(response.content)
```

## Key Design Decisions

| Decision | Explanation |
|---|---|
| `chunk_size=1000` | Large enough to preserve context, small enough to stay under embedding limits |
| `k=5` | Retrieve 5 chunks — enough context without overflowing the prompt |
| `temperature=0` | Deterministic answers for factual Q&A |
| Chroma (local) | No API key or cloud setup — good for development |

## Testing Your Chatbot

```python
test_questions = [
    "What is the main purpose of the article?",
    "How does the ReAct agent differ from a simple LLM?",
    "What tools does the agent use?",
]

for q in test_questions:
    print(f"Q: {q}")
    print(f"A: {chain.invoke(q).content}\n")
```

## Switching to Pinecone (Production)

Replace the Chroma vector store with Pinecone:

```python
from langchain_pinecone import PineconeVectorStore

vector_store = PineconeVectorStore.from_documents(
    chunks,
    embedding_model,
    index_name="website-chatbot"
)
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Build a complete LangChain RAG pipeline from a URL to an answer.
- Configure a prompt template that constrains the LLM to the retrieved context.
- Test the chatbot with multiple representative questions.
- Switch the vector store from Chroma (dev) to Pinecone (production).

## Review Questions

1. What does `RunnablePassthrough()` do in the chain definition?
2. Why is `temperature=0` recommended for RAG chatbots?
3. How would you change the chatbot to return the sources alongside the answer?

## Summary

The website chatbot loads a URL, chunks the content, embeds and stores the chunks, and chains retriever → prompt → LLM into a single callable. The entire pipeline is expressed in LangChain's LCEL (LangChain Expression Language) and can be invoked with a plain string question.

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
