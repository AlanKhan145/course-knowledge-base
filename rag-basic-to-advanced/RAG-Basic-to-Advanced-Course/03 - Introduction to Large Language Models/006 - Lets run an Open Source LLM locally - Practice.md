# 006 - Let's run an Open Source LLM locally!

## Section

Introduction to Large Language Models

## Duration

7 minutes

## Main Idea

Hands-on walkthrough of installing Ollama and running an open-source LLM (Llama, Mistral, or Gemma) entirely on a local machine, with no API keys or cloud dependencies.

## What is Ollama?

**Ollama** is a tool that makes it easy to download and run open-source LLMs locally. It handles model management, hardware acceleration (CUDA/Metal/CPU), and exposes a simple CLI and REST API.

- Website: ollama.com
- Supported models: Llama, Mistral, Gemma, DeepSeek, Phi, and many more
- Works on macOS, Linux, and Windows

## Installation Steps

```bash
# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# Download installer from https://ollama.com/download
```

## Running Your First Model

```bash
# Pull and run Llama 3.2 (3B — fast, runs on CPU)
ollama run llama3.2

# Pull and run Mistral 7B
ollama run mistral

# Pull and run Gemma 2 9B
ollama run gemma2:9b
```

Once running, type a prompt directly in the terminal to interact with the model.

## Using Ollama via Python

```python
import ollama

response = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "Explain RAG in one paragraph."}]
)
print(response["message"]["content"])
```

## Ollama REST API

Ollama also exposes a local HTTP server (default: `http://localhost:11434`) compatible with the OpenAI API format:

```bash
curl http://localhost:11434/api/generate \
  -d '{"model": "llama3.2", "prompt": "What is RAG?"}'
```

## Hardware Considerations

| Hardware | Recommended Model Size |
|---|---|
| 8GB RAM (CPU only) | 3B–7B models (quantized) |
| 16GB RAM | 7B–13B models |
| GPU 8GB VRAM | 7B–13B full precision |
| GPU 24GB VRAM | 70B models |

## Learning Objectives

By the end of this lesson, you should be able to:

- Install Ollama on your machine.
- Download and run at least one open-source model.
- Send a prompt to a locally running LLM from Python.
- Identify which model size is appropriate for your hardware.

## Review Questions

1. What does Ollama do that makes running local LLMs easy?
2. Which command downloads and starts Mistral 7B?
3. What is the advantage of using Ollama's REST API in a RAG pipeline?

## Summary

Ollama makes running open-source LLMs locally as simple as a single terminal command. Models like Llama, Mistral, and Gemma can be pulled and run without any cloud dependency, providing full privacy, zero API cost, and low latency — all valuable properties for a local RAG development environment.

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
