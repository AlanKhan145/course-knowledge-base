# 004 - Setting up over VS Code Project

## Section

Vector Databases & Embeddings

## Duration

3 minutes

## Main Idea

Hands-on setup of the VS Code project for the Vector Databases & Embeddings section. Covers installing required Python packages, configuring API keys, and verifying that the environment is ready for the upcoming demos.

## Required Packages

```bash
pip install \
  langchain \
  langchain-openai \
  langchain-community \
  pinecone-client \
  openai \
  sentence-transformers \
  python-dotenv \
  jupyter
```

## Project Directory Structure

```
05-vector-databases/
├── .env
├── requirements.txt
├── embeddings_intro.ipynb
├── pinecone_setup.ipynb
└── multimodal_embeddings.ipynb
```

## API Keys Needed

```
# .env
OPENAI_API_KEY=sk-...
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=us-east-1-aws   # or your region
```

## Verification Script

Run this to confirm everything is installed correctly:

```python
from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv
import os

load_dotenv()

embedding_model = OpenAIEmbeddings(model="text-embedding-3-small")
test_vector = embedding_model.embed_query("Hello, RAG!")
print(f"Vector length: {len(test_vector)}")  # should print 1536
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Install all packages needed for the Vector Databases section.
- Configure the `.env` file with the required API keys.
- Run a test embedding and confirm the correct vector dimension.

## Summary

Install the required packages, configure API keys in `.env`, and verify the embedding model works by checking the output vector dimension. Once this passes, the environment is ready for all vector database demos.

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
