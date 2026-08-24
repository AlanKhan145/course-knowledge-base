# 005 - What does RAG do to LLMs

## Section

Introduction to Large Language Models

## Duration

4 minutes

## Main Idea

Explains precisely how RAG changes the behavior of an LLM: it constrains the model to answer from retrieved context, reduces hallucination, enables answers about private or recent data, and allows sources to be cited.

## LLM Without RAG

A plain LLM call looks like:

```
prompt = f"Answer this question: {user_question}"
response = llm(prompt)
```

The model draws entirely on its training data. Problems:
- **Hallucination** — the model invents plausible-sounding but incorrect facts.
- **Knowledge cutoff** — the model knows nothing after its training date.
- **No private data** — the model cannot access your company's internal documents.

## LLM With RAG

A RAG-augmented call looks like:

```
relevant_chunks = vector_db.search(embed(user_question), top_k=5)
context = "\n".join(relevant_chunks)
prompt = f"""Answer using only the context below.
Context: {context}
Question: {user_question}"""
response = llm(prompt)
```

The model is now constrained to the retrieved context:
- **Reduced hallucination** — the answer is grounded in specific retrieved text.
- **Dynamic knowledge** — update the knowledge base, not the model.
- **Private data access** — index your own documents; no retraining.
- **Source attribution** — return the chunk sources alongside the answer.

## How RAG Improves LLM Output Quality

| Problem (no RAG) | Solution (with RAG) |
|---|---|
| Hallucinated facts | Grounded in retrieved documents |
| Stale knowledge | Always reflects current indexed data |
| No domain specificity | Retrieves from your exact knowledge base |
| No traceability | Sources returned with every answer |

## Important Caveats

- RAG improves grounding but does not eliminate all errors — if the retrieval step returns irrelevant chunks, the LLM may still produce poor answers.
- The quality of retrieval directly determines the quality of generation — "garbage in, garbage out."
- A high-quality embedding model and well-structured knowledge base are prerequisites for good RAG performance.

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what changes in an LLM's behavior when RAG is applied.
- Describe how retrieved context is injected into the prompt.
- State why retrieval quality is the limiting factor in RAG systems.

## Review Questions

1. How does the prompt structure change when RAG is added to an LLM call?
2. Why does RAG reduce (but not eliminate) hallucination?
3. What happens to the LLM's answers if the retrieval step returns irrelevant chunks?

## Summary

RAG transforms an LLM from a closed-world knowledge system into an open, queryable system. By injecting retrieved context into the prompt and instructing the model to answer only from that context, RAG dramatically improves answer accuracy, enables real-time and private data access, and allows source attribution.

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
