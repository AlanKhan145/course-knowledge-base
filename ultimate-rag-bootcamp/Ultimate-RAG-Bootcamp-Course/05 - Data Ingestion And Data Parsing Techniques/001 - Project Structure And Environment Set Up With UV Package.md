# 001 - Project Structure And Environment Set Up With UV Package

## Module

Data Ingestion And Data Parsing Techniques

## Main Idea

UV is a modern, extremely fast Python package manager and project management tool that replaces pip and virtualenv. It offers a superior developer experience with automatic lockfiles, faster installs, and built-in virtual environment management. This lesson demonstrates how to set up a RAG project from scratch using UV.

## Key Concepts

- **UV**: Written in Rust; 10–100x faster than pip; drop-in replacement for pip + venv
- **`uv init`**: Creates a new project with `pyproject.toml`, `uv.lock`, and a virtual environment
- **`uv add`**: Installs packages and updates `pyproject.toml` automatically (like `npm install`)
- **`uv run`**: Runs a Python script inside the project's virtual environment without activating it manually
- **`uv.lock`**: Lockfile that ensures reproducible installs across machines
- **Project Structure for RAG**:
  ```
  my-rag-project/
  ├── pyproject.toml
  ├── uv.lock
  ├── .env
  ├── data/               # Raw documents
  ├── chroma_db/          # Persisted vector store
  ├── notebooks/          # Jupyter notebooks
  └── src/
      ├── ingestion.py
      ├── retriever.py
      └── chain.py
  ```

### Why UV Over pip

| Feature | pip | UV |
|---------|-----|----|
| Speed | Slow | 10–100x faster |
| Lockfile | No (requires pip-tools) | Built-in `uv.lock` |
| venv management | Manual | Automatic |
| Dependency resolution | Basic | SAT solver (correct) |
| No-activate runs | No | `uv run` |

## Code Example (if applicable)

```bash
# Install UV (one time)
pip install uv
# Or on macOS/Linux:
# curl -LsSf https://astral.sh/uv/install.sh | sh

# Create a new RAG project
uv init my-rag-project
cd my-rag-project

# Add core dependencies
uv add langchain langchain-openai langchain-community
uv add chromadb faiss-cpu
uv add pypdf python-docx
uv add python-dotenv

# Add dev dependencies
uv add --dev jupyter ipykernel

# Run a script without activating venv
uv run python src/ingestion.py

# Or activate and use normally
source .venv/bin/activate   # Linux/macOS
# .venv\Scripts\activate    # Windows

python --version
```

```python
# src/ingestion.py — starter template
import os
from dotenv import load_dotenv

load_dotenv()  # Load OPENAI_API_KEY from .env

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
assert OPENAI_API_KEY, "Set OPENAI_API_KEY in .env file"

print("Environment configured successfully!")
print(f"API Key starts with: {OPENAI_API_KEY[:8]}...")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Initialize a new Python project using `uv init`
- Add and manage dependencies with `uv add`
- Run Python scripts inside a UV project environment
- Explain why UV is preferred over pip for modern Python projects
- Set up the standard folder structure for a RAG project

## Review Questions

1. What is the difference between `uv add` and `pip install`, and why does `uv add` produce more reproducible results?
2. How does `uv run` allow you to execute scripts without manually activating the virtual environment?
3. Why is having a lockfile (`uv.lock`) important for team-based projects?

## Summary

UV provides a modern, fast, and reproducible alternative to pip for managing Python projects. Using `uv init`, `uv add`, and `uv run`, developers can set up a RAG project quickly with automatic dependency locking. The recommended project structure separates raw data, vector stores, notebooks, and source code, making the project easy to navigate and maintain as it grows.
