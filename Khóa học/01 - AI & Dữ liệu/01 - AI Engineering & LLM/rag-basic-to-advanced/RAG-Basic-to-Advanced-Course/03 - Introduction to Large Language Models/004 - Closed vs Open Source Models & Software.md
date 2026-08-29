# 004 - Closed vs Open Source Models & Software

## Section

Introduction to Large Language Models

## Duration

5 minutes

## Main Idea

A structured analysis of the trade-offs between closed-source and open-source LLMs from a practical software development perspective, helping students choose the right type for their RAG use case.

## Decision Framework

### Choose Closed-Source When:
- Speed to market is the priority — no setup or hardware required.
- You need the highest possible model quality for complex tasks.
- Your team lacks ML engineering expertise.
- Your use case requires multimodal capabilities (e.g., vision).
- You need a stable, versioned API with SLA guarantees.

### Choose Open-Source When:
- Data privacy is critical — you cannot send data to a third party.
- You need to fine-tune the model on proprietary data.
- You want full cost predictability (only compute costs, no per-token fees).
- You need to run inference on-premise or in a private cloud.
- You want to experiment freely without API rate limits.

## Trade-off Table

| Dimension | Closed-Source | Open-Source |
|---|---|---|
| Setup effort | Minimal (API key + SDK) | High (model download, GPU/CPU setup) |
| Ongoing maintenance | Provider handles it | You maintain it |
| Cost at scale | Can become expensive | Scales with compute |
| Data governance | Data leaves your infrastructure | Full control |
| Customization | Prompt-level only | Weight-level (fine-tuning) |
| Model transparency | Black box | Open weights |
| Community | Large, well-documented | Large, fragmented across models |

## RAG-Specific Considerations

- **Latency**: Closed-source API calls add network round-trip time. Local open-source models eliminate this but require capable hardware.
- **Context window**: Larger context windows allow more retrieved chunks per prompt. Check both model and plan limits.
- **Embedding models**: Can mix sources — e.g., use OpenAI embeddings for indexing but an open-source LLM for generation.
- **Cost at scale**: For high-volume RAG systems, the per-token cost of closed-source APIs can exceed the cost of running open-source models on owned hardware.

## Learning Objectives

By the end of this lesson, you should be able to:

- List two advantages and two disadvantages of each model type.
- Apply the decision framework to select the right model type for a given RAG scenario.
- Explain why embedding model choice and LLM choice are independent decisions.

## Review Questions

1. A healthcare company needs a chatbot that never sends patient data to external servers. Which model type should they use?
2. A startup wants to ship a proof-of-concept RAG chatbot in one week. Which model type is more practical?
3. Why might a high-volume RAG system switch from closed-source to open-source over time?

## Summary

Closed-source models offer ease, quality, and reliability at a per-token cost. Open-source models offer control, privacy, and long-term cost efficiency with higher setup complexity. The right choice depends on your data sensitivity requirements, timeline, budget, and team expertise.
