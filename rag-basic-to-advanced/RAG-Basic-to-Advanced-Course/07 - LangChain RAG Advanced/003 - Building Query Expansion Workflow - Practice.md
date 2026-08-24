# 003 - Building Query Expansion Workflow

## Section

LangChain / RAG Advanced

## Duration

3 minutes

## Main Idea

Builds a query expansion step that generates multiple rephrased versions of the user's question and retrieves documents for each variant, dramatically increasing the chance of finding the correct answer when the original query is ambiguous or too specific.

## The Problem Query Expansion Solves

A user asks: "How do agents decide what to do next?"

The vector database might contain the answer under different phrasings:
- "Agent decision-making loop"
- "ReAct reasoning step"
- "Action selection in autonomous agents"

A single query embedding may miss semantically distant but correct documents. Expanding the query into multiple variants and taking the union of retrieved documents improves recall.

## Query Expansion Implementation

### Step 1 — Generate Query Variants with an LLM

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

expansion_prompt = ChatPromptTemplate.from_template("""
You are an AI assistant. Generate {n} different versions of the following question
to improve document retrieval. Return each version on a new line.

Original question: {question}
""")

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

expansion_chain = expansion_prompt | llm | StrOutputParser()

variants = expansion_chain.invoke({"question": "How do agents decide what to do next?", "n": 3})
query_variants = [q.strip() for q in variants.strip().split("\n") if q.strip()]
print(query_variants)
# ["What process do AI agents use to select their next action?",
#  "How is the decision loop structured in autonomous agents?",
#  "Explain the action-selection mechanism in ReAct agents."]
```

### Step 2 — Retrieve for Each Variant

```python
all_docs = []
seen_ids = set()

for query in [original_question] + query_variants:
    docs = retriever.get_relevant_documents(query)
    for doc in docs:
        doc_id = doc.metadata.get("source", "") + doc.page_content[:50]
        if doc_id not in seen_ids:
            all_docs.append(doc)
            seen_ids.add(doc_id)

print(f"Retrieved {len(all_docs)} unique chunks across all query variants")
```

### Step 3 — Pass Union of Docs to LLM

```python
context = "\n\n".join(d.page_content for d in all_docs)
answer_prompt = ChatPromptTemplate.from_template("""
Answer the question using the context below.

Context: {context}
Question: {question}
""")

answer_chain = answer_prompt | llm | StrOutputParser()
answer = answer_chain.invoke({"context": context, "question": original_question})
print(answer)
```

## Full Query Expansion Chain

```python
from langchain_core.runnables import RunnableLambda

def expand_and_retrieve(input_dict):
    question = input_dict["question"]
    variants = expansion_chain.invoke({"question": question, "n": 3})
    all_queries = [question] + [v.strip() for v in variants.strip().split("\n")]
    
    all_docs = []
    seen = set()
    for q in all_queries:
        for doc in retriever.get_relevant_documents(q):
            key = doc.page_content[:80]
            if key not in seen:
                all_docs.append(doc)
                seen.add(key)
    return "\n\n".join(d.page_content for d in all_docs)

rag_with_expansion = (
    {"context": RunnableLambda(expand_and_retrieve), "question": RunnablePassthrough()}
    | answer_prompt
    | llm
    | StrOutputParser()
)

result = rag_with_expansion.invoke({"question": "How do agents decide what to do next?"})
```

## When to Use Query Expansion

| Use Case | Benefit |
|---|---|
| Short, ambiguous queries | Generates more specific variants |
| Technical queries with synonyms | Covers different terminology |
| Knowledge bases with varied phrasing | Improves recall |
| Questions about a specific named concept | Generates alternative names |

## Learning Objectives

By the end of this lesson, you should be able to:

- Implement a query expansion step that generates N query variants using an LLM.
- Retrieve and deduplicate documents across all query variants.
- Combine query expansion with the standard RAG chain.

## Review Questions

1. Why does temperature > 0 help when generating query variants?
2. How does deduplication prevent the same chunk from appearing multiple times in the context?
3. In what situation would query expansion NOT help?

## Summary

Query expansion uses an LLM to generate multiple rephrased versions of the user's question, retrieves documents for each variant, deduplicates the results, and passes the union of retrieved chunks to the final LLM. This significantly improves recall when the original query phrasing doesn't match the phrasing in the knowledge base.

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
