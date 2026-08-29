# 002 - Cloning and accessing all Projects

## Section

VS Code & GitHub Repo Setup

## Duration

2 minutes

## Main Idea

Shows how to clone the course GitHub repository, open it in VS Code, and navigate the project structure so students have all starter code and notebooks available locally.

## Cloning the Repository

```bash
# Clone via HTTPS (no SSH key required)
git clone https://github.com/<course-repo-url>.git

# Navigate into the project
cd rag-course

# Open in VS Code
code .
```

## Repository Structure (Typical Layout)

```
rag-course/
├── module-02-rag-fundamentals/
├── module-05-vector-databases/
│   ├── embeddings_demo.ipynb
│   └── pinecone_setup.ipynb
├── module-06-langchain-pipeline/
│   ├── website_chatbot.ipynb
│   ├── csv_chatbot.ipynb
│   └── requirements.txt
├── module-08-advanced-projects/
│   ├── sql_chatbot/
│   ├── multimodal_chatbot/
│   └── deepseek_rag/
├── .env.example
└── README.md
```

## Environment Variables

Most projects require API keys. Copy the example file and fill in your keys:

```bash
cp .env.example .env
```

Edit `.env`:

```
OPENAI_API_KEY=sk-...
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=...
```

Load in Python with `python-dotenv`:

```python
from dotenv import load_dotenv
import os

load_dotenv()
openai_key = os.getenv("OPENAI_API_KEY")
```

## Running a Notebook

1. Open a `.ipynb` file in VS Code.
2. Select the kernel matching your virtual environment.
3. Run cells top-to-bottom with `Shift+Enter`.

## Learning Objectives

By the end of this lesson, you should be able to:

- Clone the course repository using `git clone`.
- Open the project in VS Code.
- Configure environment variables using a `.env` file.
- Select the correct Python kernel for a Jupyter notebook.

## Review Questions

1. Why should API keys be stored in a `.env` file rather than hardcoded in notebooks?
2. What command opens the current directory in VS Code from the terminal?
3. How do you select the virtual environment kernel in a VS Code Jupyter notebook?

## Summary

Clone the course repo with `git clone`, open it in VS Code, configure your API keys in a `.env` file, and run notebooks by selecting the virtual environment kernel. All course projects follow this same setup pattern.

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
