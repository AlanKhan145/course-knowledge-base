# 004 - Prompt Engineering Vs FineTuning Vs RAG

## Module

Introduction To RAG

## Main Idea

There are three primary strategies for adapting LLMs to specific tasks: prompt engineering, fine-tuning, and RAG. Each has distinct trade-offs in terms of cost, freshness, flexibility, and implementation complexity. Choosing the right strategy — or combining strategies — depends on the specific requirements of your application.

## Key Concepts

### Comparison Table

| Dimension | Prompt Engineering | Fine-Tuning | RAG |
|-----------|-------------------|-------------|-----|
| **Cost** | Very low | High (GPU training) | Medium (embedding + vector DB) |
| **Knowledge Freshness** | Static (model cutoff) | Static (frozen after training) | Dynamic (update docs anytime) |
| **Domain Adaptation** | Limited by context window | Strong (baked into weights) | Strong (retrieves relevant docs) |
| **Implementation Speed** | Hours | Days to weeks | Days |
| **Hallucination Risk** | High for niche facts | Moderate | Low (grounded in retrieved docs) |
| **Requires Labeled Data** | No | Yes (many examples) | No |
| **Scalable Knowledge** | No (context limit) | No (requires retraining) | Yes (just add documents) |
| **Source Citation** | No | No | Yes |
| **Best For** | Format, style, reasoning tasks | Specific task behavior patterns | Knowledge-intensive Q&A |

### When to Use Each

**Prompt Engineering**
- Task is well-defined and fits in the context window
- You need fast iteration and zero infrastructure
- The model already has the necessary factual knowledge
- Examples: summarization, translation, classification, code generation

**Fine-Tuning**
- You need consistent output format or style the base model doesn't produce
- You have thousands of labeled examples
- Latency is critical and you can afford training costs
- Examples: domain-specific code completion, structured data extraction with fixed schema

**RAG**
- Knowledge changes frequently or is proprietary
- Questions require specific facts not in the model's training data
- You need source citations for trust and compliance
- Examples: document Q&A, internal knowledge bases, customer support

### Hybrid Approaches

- **RAG + Prompt Engineering**: Most common; engineer the prompt around retrieved context
- **RAG + Fine-Tuning**: Fine-tune the LLM to better use retrieved context; expensive but powerful
- **Prompt Engineering + Fine-Tuning**: Train on specific format; use prompts for task variation

## Code Example (if applicable)

```python
# Demonstrating the difference between prompt engineering and RAG

# --- Prompt Engineering Only ---
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini")

# Works well for general knowledge
response = llm.invoke("What is photosynthesis?")
print("Prompt Engineering:", response.content[:100])

# Fails for proprietary/recent info
response = llm.invoke("What is Acme Corp's Q3 2024 revenue?")
print("Prompt Engineering (niche):", response.content[:100])  # May hallucinate!

# --- RAG ---
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

retriever = Chroma(
    persist_directory="./acme_financials",
    embedding_function=OpenAIEmbeddings()
).as_retriever()

docs = retriever.invoke("What is Acme Corp's Q3 2024 revenue?")
context = "\n".join(doc.page_content for doc in docs)

# Now the LLM has the actual data
response = llm.invoke(
    f"Answer based on this financial report:\n{context}\n\n"
    "What is Acme Corp's Q3 2024 revenue?"
)
print("RAG:", response.content[:100])  # Grounded in real data
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Compare prompt engineering, fine-tuning, and RAG across at least five dimensions
- Identify which strategy is most appropriate for a given real-world scenario
- Explain why RAG does not require labeled training data
- Describe situations where combining multiple strategies is beneficial
- Articulate the trade-offs in cost, freshness, and hallucination risk for each approach

## Review Questions

1. A company wants to build an assistant that answers questions about their internal HR policies, which change quarterly. Which approach — prompt engineering, fine-tuning, or RAG — is most appropriate, and why?
2. Why does fine-tuning not solve the "knowledge freshness" problem even after training is complete?
3. In what scenario might you combine fine-tuning AND RAG in the same system?

## Summary

Prompt engineering, fine-tuning, and RAG represent different points on the trade-off curve between simplicity, cost, and knowledge coverage. RAG is the preferred choice when knowledge is dynamic, proprietary, or too large to fit in a prompt, because it retrieves relevant information at query time without expensive retraining. In practice, most production systems combine prompt engineering with RAG, and occasionally add fine-tuning for format consistency.

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
