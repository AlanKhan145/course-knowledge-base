# 002 - Basics of LLMs and Closed Source Models

## Section

Introduction to Large Language Models

## Duration

8 minutes

## Main Idea

Introduces the transformer-based architecture that underpins modern LLMs, explains key capabilities like few-shot learning and in-context learning, and profiles the major closed-source commercial models.

## How LLMs Work (High Level)

**Transformer Architecture**
- LLMs are built on the transformer architecture (Attention is All You Need, 2017).
- The core mechanism is **self-attention**: the model learns which words in a sequence are most relevant to each other.
- During pretraining the model learns to predict the next token on massive text corpora, developing broad language understanding.

**Key Capabilities**
- **Few-shot learning** — The model can perform new tasks from just a few examples in the prompt, without weight updates.
- **In-context learning** — Instructions and examples given in the prompt guide the model's behavior at inference time.
- **Instruction following** — Fine-tuned variants (instruction-tuned models) follow natural language instructions reliably.

## Closed-Source Commercial Models

| Model Family | Provider | Notable Features |
|---|---|---|
| GPT-4o / GPT-4 | OpenAI | Strong reasoning, multimodal, wide API ecosystem |
| Claude 3 / Claude 4 | Anthropic | Long context window, safety focus, tool use |
| Gemini 1.5 / 2.0 | Google | Multimodal, 1M+ token context, Google integration |
| Command R+ | Cohere | RAG-optimized, grounding features built in |

## Closed-Source Model Characteristics

- Accessed via **API calls** — no local hardware required.
- Providers handle **model updates, infrastructure, and safety**.
- Pricing is **per token** (input + output).
- Context window sizes vary from 8K to over 1M tokens depending on the model.
- Often support **multimodal inputs** (text + images).

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what self-attention does in a transformer at a high level.
- Describe few-shot and in-context learning.
- Name at least three closed-source LLM providers and one distinctive feature of each.

## Key Terms

| Term | Definition |
|---|---|
| Transformer | Neural network architecture based on self-attention |
| Token | The unit of text processed by an LLM (roughly a word or subword) |
| Context window | Maximum number of tokens the model can process in one call |
| Few-shot learning | Learning from a small number of examples in the prompt |
| Instruction tuning | Fine-tuning a base LLM on instruction-response pairs |

## Review Questions

1. What is the key innovation in the transformer architecture?
2. What is few-shot learning and why is it powerful?
3. Why do developers choose closed-source models despite their cost?

## Summary

LLMs are transformer-based models that learn from massive text corpora and can follow instructions, reason, and generate fluent text. Closed-source models like GPT-4, Claude, and Gemini offer powerful capabilities through APIs without requiring local infrastructure.
