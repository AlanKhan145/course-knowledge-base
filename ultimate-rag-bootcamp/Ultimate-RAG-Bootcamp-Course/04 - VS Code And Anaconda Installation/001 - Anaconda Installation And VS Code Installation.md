# 001 - Anaconda Installation And VS Code Installation

## Module

VS Code And Anaconda Installation

## Main Idea

A consistent development environment is critical for following along with the course without dependency conflicts. This lesson walks through installing Anaconda (for Python and package management), creating a dedicated conda environment for the bootcamp, and setting up VS Code with the necessary extensions for Python and Jupyter notebook development.

## Key Concepts

- **Anaconda**: A distribution of Python that includes conda, a powerful package and environment manager
- **Conda Environment**: An isolated Python environment with its own packages, preventing version conflicts between projects
- **VS Code**: A lightweight, extensible code editor with excellent Python and Jupyter support
- **Python Extension**: Provides IntelliSense, linting, debugging, and environment selection in VS Code
- **Jupyter Extension**: Enables running `.ipynb` notebook files directly in VS Code

### Installation Steps Overview

1. Download Anaconda from `https://www.anaconda.com/download`
2. Run the installer (Windows: `.exe`, macOS/Linux: `.sh`)
3. Open Anaconda Prompt / Terminal
4. Create a new conda environment
5. Activate the environment
6. Download VS Code from `https://code.visualstudio.com/`
7. Install Python and Jupyter extensions in VS Code
8. Select the conda environment as the Python interpreter in VS Code

## Code Example (if applicable)

```bash
# --- Conda Environment Setup ---

# Create a new environment named "rag-bootcamp" with Python 3.11
conda create -n rag-bootcamp python=3.11 -y

# Activate the environment
conda activate rag-bootcamp

# Verify Python version
python --version
# Expected: Python 3.11.x

# Install core packages for the course
pip install langchain langchain-openai langchain-community
pip install chromadb faiss-cpu
pip install jupyter ipykernel

# Register the environment as a Jupyter kernel
python -m ipykernel install --user --name=rag-bootcamp --display-name "RAG Bootcamp"

# Verify LangChain installation
python -c "import langchain; print(langchain.__version__)"
```

```bash
# --- VS Code Extensions (via command line) ---
# Install the Python extension
code --install-extension ms-python.python

# Install the Jupyter extension
code --install-extension ms-toolsai.jupyter

# Open VS Code in the current directory
code .
```

```python
# --- Verify Environment from Python ---
import sys
import langchain

print(f"Python: {sys.version}")
print(f"LangChain: {langchain.__version__}")
print("Environment is ready!")
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Install Anaconda and create an isolated conda environment for the course
- Activate a conda environment from the terminal
- Install VS Code and configure the Python and Jupyter extensions
- Select the correct conda environment as the Python interpreter in VS Code
- Verify that LangChain and core dependencies are correctly installed

## Review Questions

1. Why is it important to use an isolated conda environment rather than installing packages in the base environment?
2. How do you tell VS Code which Python interpreter to use after creating a conda environment?
3. What command verifies that your Python environment is active and has the correct Python version?

## Summary

Setting up Anaconda and VS Code provides a clean, reproducible development environment for the entire bootcamp. Using a dedicated conda environment prevents package conflicts and makes it easy to reset if something goes wrong. With VS Code's Python and Jupyter extensions, students can run scripts and notebooks interactively, which is essential for the hands-on exercises in subsequent modules.
