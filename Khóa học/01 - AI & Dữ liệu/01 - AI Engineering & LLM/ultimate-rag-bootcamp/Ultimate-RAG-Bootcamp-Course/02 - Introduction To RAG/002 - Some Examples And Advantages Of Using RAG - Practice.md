# 002 - Some Examples And Advantages Of Using RAG

## Module

Introduction To RAG

## Main Idea

RAG is not just a theoretical concept — it powers many practical applications across industries. This lesson explores concrete examples of RAG in action, from document Q&A to customer support chatbots, and highlights the key advantages that make RAG the preferred approach for knowledge-intensive AI applications.

## Key Concepts

### Concrete RAG Examples

| Application | Knowledge Base | How RAG Helps |
|------------|----------------|---------------|
| Document Q&A | Company PDFs, manuals | Answer questions grounded in specific documents |
| Customer Support Chatbot | Support tickets, FAQ pages | Retrieve relevant past answers for new questions |
| Internal Knowledge Base | Confluence, Notion, wikis | Employees query internal policies and procedures |
| Code Assistant | Codebase, documentation | Retrieve relevant code snippets and API docs |
| Legal Research | Case law, contracts | Surface relevant precedents for legal questions |
| Medical Knowledge Base | Clinical guidelines, journals | Ground answers in peer-reviewed sources |

### Advantages of RAG

- **Freshness**: Update the document store without retraining the model; always reflects current information
- **Grounded Answers**: Responses are tied to retrieved evidence, reducing hallucinations significantly
- **Source Citation**: RAG can return source documents alongside the answer, enabling verification
- **Cost Efficiency**: Adding new knowledge is as simple as uploading a document — no GPU training required
- **Domain Adaptation**: Instantly specializes a general LLM to any domain by giving it the right knowledge base
- **Privacy**: Sensitive documents stay in your vector store; you control what the LLM sees
- **Scalability**: Vector stores can handle millions of documents with sub-second retrieval

## Code Example (if applicable)

```python
# Document Q&A with source citation
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

retriever = Chroma(
    persist_directory="./chroma_db",
    embedding_function=OpenAIEmbeddings()
).as_retriever(search_kwargs={"k": 3})

def format_docs_with_sources(docs):
    result = ""
    for i, doc in enumerate(docs):
        source = doc.metadata.get("source", "unknown")
        result += f"[Source {i+1}: {source}]\n{doc.page_content}\n\n"
    return result

prompt = ChatPromptTemplate.from_template("""
Answer the question based only on the following context.
Include the source reference in your answer.

Context:
{context}

Question: {question}
""")

chain = (
    {"context": retriever | format_docs_with_sources, "question": RunnablePassthrough()}
    | prompt
    | ChatOpenAI(model="gpt-4o-mini")
    | StrOutputParser()
)

answer = chain.invoke("What is the refund policy?")
print(answer)
```

## Learning Objectives

By the end of this lesson, you should be able to:
- Name at least five real-world RAG application types
- Explain why source citation is a major advantage of RAG over standard LLM calls
- Describe how RAG handles the "freshness" problem of LLMs
- Articulate the cost advantages of RAG over fine-tuning for knowledge updates
- Identify which advantage of RAG is most relevant for a given use case

## Review Questions

1. How does a customer support chatbot benefit from RAG compared to a standard fine-tuned model?
2. What does "source citation" mean in the context of RAG, and why is it valuable?
3. If a company releases a new product manual every month, why is RAG a better solution than fine-tuning for keeping the assistant up to date?

## Summary

RAG enables a wide range of knowledge-intensive applications by dynamically retrieving relevant information at query time. Its key advantages — freshness, grounded answers, source citation, and cost efficiency — make it far more practical than fine-tuning for most production knowledge base applications. The ability to cite sources also builds user trust in AI-generated answers.

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
