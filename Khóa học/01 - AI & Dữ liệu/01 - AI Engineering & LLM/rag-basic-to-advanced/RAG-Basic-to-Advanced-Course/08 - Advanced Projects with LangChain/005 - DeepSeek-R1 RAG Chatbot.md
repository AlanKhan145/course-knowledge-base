# 005 - DeepSeek-R1 RAG Chatbot

## Section

Advanced Projects with LangChain

## Duration

10 minutes

## Main Idea

Builds a full production-style RAG chatbot using DeepSeek-R1 as the reasoning LLM, LangChain for the pipeline, and Streamlit for the web interface. The data source is a website, making this the culmination of the course's Website Chatbot pattern.

## What is DeepSeek-R1?

**DeepSeek-R1** is an open-source reasoning model developed by DeepSeek. It uses chain-of-thought style reasoning, making it particularly strong at multi-step questions that require logical inference — a good fit for RAG systems where the model must reason over retrieved context.

- License: MIT (commercial use allowed)
- Available via: Ollama (local), Groq API, Together AI, DeepSeek API
- Strengths: step-by-step reasoning, instruction following, RAG grounding

## Project Architecture

```
Website URL
    ↓
WebBaseLoader → Text chunks → Embeddings → Chroma vector store
    ↓
Streamlit web app
User types question
    ↓
Retriever → top-k chunks
    ↓
DeepSeek-R1 generates grounded answer
    ↓
Displayed in Streamlit chat UI
```

## Installation

```bash
pip install streamlit langchain langchain-community langchain-openai chromadb ollama
ollama pull deepseek-r1:7b   # or :14b, :70b depending on hardware
```

## Core RAG Pipeline

```python
# rag_pipeline.py
from langchain_community.document_loaders import WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.llms import Ollama
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

def build_rag_chain(url: str):
    # Load
    loader = WebBaseLoader(url)
    docs = loader.load()
    
    # Split
    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunks = splitter.split_documents(docs)
    
    # Embed (using nomic-embed-text via Ollama — fully local)
    embeddings = OllamaEmbeddings(model="nomic-embed-text")
    vector_store = Chroma.from_documents(chunks, embeddings)
    retriever = vector_store.as_retriever(search_kwargs={"k": 5})
    
    # LLM
    llm = Ollama(model="deepseek-r1:7b", temperature=0)
    
    # Prompt
    prompt = ChatPromptTemplate.from_template("""
You are a helpful assistant. Answer the question using only the context provided.
Think through the answer step by step.

Context:
{context}

Question: {question}

Answer:""")
    
    # Chain
    def format_docs(docs):
        return "\n\n".join(d.page_content for d in docs)
    
    chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    return chain
```

## Streamlit Web Interface

```python
# app.py
import streamlit as st
from rag_pipeline import build_rag_chain

st.set_page_config(page_title="DeepSeek-R1 RAG Chatbot", layout="wide")
st.title("DeepSeek-R1 RAG Chatbot")

# Sidebar: URL input
with st.sidebar:
    url = st.text_input("Website URL", value="https://en.wikipedia.org/wiki/Retrieval-augmented_generation")
    if st.button("Load Website"):
        with st.spinner("Loading and indexing..."):
            st.session_state.chain = build_rag_chain(url)
        st.success("Ready!")

# Chat interface
if "messages" not in st.session_state:
    st.session_state.messages = []

for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.write(msg["content"])

if prompt := st.chat_input("Ask a question about the website..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.write(prompt)
    
    if "chain" in st.session_state:
        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                response = st.session_state.chain.invoke(prompt)
            st.write(response)
        st.session_state.messages.append({"role": "assistant", "content": response})
    else:
        st.warning("Please load a website first using the sidebar.")
```

## Running the App

```bash
streamlit run app.py
```

Navigate to `http://localhost:8501` in your browser.

## Using DeepSeek-R1 via API (Cloud Alternative)

If local hardware is insufficient, use the Groq API:

```python
from langchain_groq import ChatGroq

llm = ChatGroq(model="deepseek-r1-distill-llama-70b", temperature=0)
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Build a fully local RAG pipeline using DeepSeek-R1 and Ollama.
- Create a Streamlit web interface with a chat UI and sidebar URL input.
- Wire the RAG chain to the Streamlit session state for stateful conversations.
- Run and test the app in a browser.

## Review Questions

1. What advantage does DeepSeek-R1's reasoning style provide in a RAG context?
2. Why use `nomic-embed-text` via Ollama instead of OpenAI embeddings for this project?
3. How does `st.session_state` help maintain the RAG chain and conversation history in Streamlit?

## Summary

The DeepSeek-R1 RAG Chatbot combines a fully local LLM (DeepSeek-R1 via Ollama), local embeddings (nomic-embed-text), Chroma vector store, LangChain orchestration, and a Streamlit web UI into a complete production-grade chatbot that runs entirely on your own machine with no API costs.
