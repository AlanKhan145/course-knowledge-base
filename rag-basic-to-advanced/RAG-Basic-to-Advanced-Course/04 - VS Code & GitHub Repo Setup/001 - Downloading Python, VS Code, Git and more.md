# 001 - Downloading Python, VS Code, Git and more

## Section

VS Code & GitHub Repo Setup

## Duration

2 minutes

## Main Idea

Step-by-step guide for installing the core development tools needed for every hands-on exercise in the course: Python, VS Code, Git, and the Jupyter extension.

## Tools to Install

### Python

- Download from python.org — install version 3.10 or higher.
- During Windows installation, check **"Add Python to PATH"**.
- Verify installation:

```bash
python --version
# Python 3.11.x
pip --version
# pip 23.x
```

### VS Code

- Download from code.visualstudio.com.
- Install recommended extensions after opening:
  - **Python** (Microsoft)
  - **Jupyter** (Microsoft)
  - **Pylance** (Microsoft)

### Git

- Download from git-scm.com.
- Verify installation:

```bash
git --version
# git version 2.x.x
```

### Virtual Environment (Best Practice)

Create a virtual environment for each project to avoid dependency conflicts:

```bash
python -m venv .venv
# Activate on Windows
.venv\Scripts\activate
# Activate on macOS/Linux
source .venv/bin/activate
```

### pip Packages (Installed Later Per Project)

```bash
pip install langchain openai pinecone-client python-dotenv
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Install Python 3.10+ and verify it works in the terminal.
- Install VS Code with the Python and Jupyter extensions.
- Install Git and verify it works in the terminal.
- Create and activate a Python virtual environment.

## Review Questions

1. Why should you create a virtual environment instead of installing packages globally?
2. What flag must you check during Python installation on Windows?
3. Which VS Code extension is needed to run Jupyter notebooks?

## Summary

The development environment for this course requires Python 3.10+, VS Code with the Python and Jupyter extensions, and Git. Setting up a virtual environment per project keeps dependencies isolated and reproducible.
