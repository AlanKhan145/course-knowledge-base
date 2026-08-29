# 001 - Introduction To RAG

## Module

Introduction To RAG

## Main Idea

Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval from external data sources with the generative capabilities of a large language model. Instead of relying solely on the knowledge baked into the LLM during training, RAG dynamically fetches relevant documents at query time and feeds them as context into the LLM. This approach reduces hallucination and eliminates the need for expensive fine-tuning when the knowledge base changes.

## Key Concepts

- **Hallucination**: When an LLM generates plausible-sounding but factually incorrect information not grounded in evidence
- **Knowledge Cutoff**: LLMs are trained on data up to a certain date; they cannot answer questions about newer events without augmentation
- **RAG Pipeline**: Document ingestion → Chunking → Embedding → Vector Store → Query → Retrieve → Generate
- **External Data Source**: Any corpus the LLM was not trained on — PDFs, websites, databases, wikis
- **Grounded Answer**: An LLM response that is directly supported by retrieved source documents
- **No Fine-Tuning Required**: RAG updates knowledge by updating the document store, not by retraining the model

| Problem | Without RAG | With RAG |
|---------|-------------|----------|
| Stale knowledge | Model knows only up to training cutoff | Retrieves fresh documents at query time |
| Hallucination | Common on niche or recent topics | Grounded in retrieved evidence |
| Private data | Model has no access | Private documents stored in vector DB |
| Cost to update | Expensive retraining | Just add new documents to the store |

## Code Example (if applicable)

```python
# Conceptual RAG flow (simplified)
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate

# 1. Assume documents are already embedded and stored
retriever = Chroma(
    persist_directory="./chroma_db",
    embedding_function=OpenAIEmbeddings()
).as_retriever()

# 2. Retrieve relevant chunks for the user's query
query = "What is the return policy for online orders?"
docs = retriever.invoke(query)

# 3. Inject retrieved context into the prompt
prompt = ChatPromptTemplate.from_template(
    "Answer based on context:\n{context}\n\nQuestion: {question}"
)

# 4. Generate a grounded answer
llm = ChatOpenAI(model="gpt-4o-mini")
context = "\n\n".join(doc.page_content for doc in docs)
response = llm.invoke(prompt.format(context=context, question=query))
print(response.content)
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Define RAG and explain why it was developed
- Describe the core components of the RAG pipeline
- Explain how RAG reduces hallucination
- Identify scenarios where RAG is the appropriate solution
- Distinguish between what the LLM "knows" and what it retrieves

## Review Questions

1. What problem does RAG solve that traditional LLM prompting cannot?
2. Why is grounding an LLM's answer in retrieved documents important for reliability?
3. What are the two main phases of a RAG system — the ingestion phase and the query phase — and what happens in each?

## Summary

RAG bridges the gap between static LLM knowledge and dynamic, domain-specific information by retrieving relevant documents at inference time. It reduces hallucination by grounding responses in real evidence and avoids costly fine-tuning by updating the document store instead of the model. RAG has become the dominant pattern for building knowledge-intensive LLM applications.
