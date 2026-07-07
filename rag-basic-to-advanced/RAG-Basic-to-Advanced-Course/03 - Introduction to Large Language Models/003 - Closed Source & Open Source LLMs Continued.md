# 003 - Closed Source & Open Source LLMs Continued

## Section

Introduction to Large Language Models

## Duration

6 minutes

## Main Idea

Expands the comparison between closed-source and open-source LLMs, with a focus on specific model capabilities including context window size, multimodal support, and prompt caching — all of which are directly relevant to RAG system design.

## Closed-Source Model Deep Dive

### OpenAI GPT Series
- GPT-4o: multimodal (text + image), strong reasoning, 128K context
- GPT-4 Turbo: 128K context, cost-optimized
- o1 / o3: reasoning-focused models with chain-of-thought

### Anthropic Claude Series
- Claude 3.5 Sonnet / Claude 4: long context (200K tokens), strong instruction following
- **Prompt caching**: Claude supports caching repeated prompt prefixes to reduce cost and latency — directly useful in RAG when system prompts are reused
- Strong at following complex multi-step instructions

### Google Gemini Series
- Gemini 1.5 Pro: 1M token context window — can ingest entire books
- Gemini 2.0: multimodal with improved reasoning
- Native integration with Google Workspace and Vertex AI

## Open-Source Models

| Model | Creator | Parameters | Notable Feature |
|---|---|---|---|
| Llama 3 / 3.1 | Meta | 8B, 70B, 405B | Strong across most benchmarks |
| Mistral 7B / Mixtral | Mistral AI | 7B / 8x7B MoE | Fast, efficient, Apache 2.0 license |
| Gemma 2 | Google | 9B, 27B | High quality at small parameter count |
| DeepSeek-R1 | DeepSeek | Various | Reasoning model, MIT license |
| Phi-3 / Phi-4 | Microsoft | 3.8B, 14B | Strong small model performance |

## Key Differences Summary

| Feature | Closed-Source | Open-Source |
|---|---|---|
| Deployment | API only | Local or cloud |
| Cost model | Per-token pricing | Compute cost only |
| Privacy | Data sent to provider | Fully local option |
| Customization | Limited (prompt-only) | Full fine-tuning access |
| Context window | Up to 1M tokens | Varies (4K–128K typical) |
| Multimodal | Common | Growing support |

## Learning Objectives

By the end of this lesson, you should be able to:

- Compare Claude's prompt caching feature to standard API calls.
- Explain what a 1M token context window enables for RAG.
- List three open-source models and one key characteristic of each.

## Review Questions

1. How does Claude's prompt caching benefit a RAG system with a long system prompt?
2. What does a 1M context window make possible that a 128K window does not?
3. Which open-source model is known for strong reasoning with an open license?

## Summary

Both closed-source and open-source models have evolved significantly. Key differentiators for RAG system design include context window size, multimodal capability, and cost features like prompt caching. Open-source models now match or exceed closed-source quality on many tasks and can be run locally for privacy and cost control.
