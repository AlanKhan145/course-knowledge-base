# 004 - Add a Memory to your Website Chatbot

## Section

LangChain Framework & Building a Simple RAG Pipeline

## Duration

3 minutes

## Main Idea

Extends the website chatbot with conversation memory so the chatbot can understand follow-up questions that reference previous messages (e.g., "Who wrote it?" after "What is the ReAct framework?").

## The Problem Without Memory

```
User: What is the ReAct framework?
Bot:  ReAct is a technique that combines reasoning and acting...

User: Who proposed it?     # "it" refers to ReAct — but the LLM has no context
Bot:  I don't know what "it" refers to.   ← broken
```

## Adding Conversation Memory

LangChain provides `ConversationBufferMemory` and `RunnableWithMessageHistory` to pass chat history into the prompt.

```python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True,
    output_key="answer"
)

conversational_chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=retriever,
    memory=memory,
    return_source_documents=True
)

# First turn
result = conversational_chain({"question": "What is the ReAct framework?"})
print(result["answer"])

# Follow-up — memory carries the previous exchange
result = conversational_chain({"question": "Who proposed it?"})
print(result["answer"])   # Now works correctly
```

## How Memory Works Internally

1. On each call, the conversation history is retrieved from `memory`.
2. History is prepended to the prompt as `chat_history`.
3. After the LLM responds, the new exchange is saved back to `memory`.

## Memory Window Considerations

- **ConversationBufferMemory**: keeps the full history. Grows indefinitely.
- **ConversationBufferWindowMemory**: keeps the last N exchanges. Prevents context window overflow.

```python
from langchain.memory import ConversationBufferWindowMemory

memory = ConversationBufferWindowMemory(k=5, return_messages=True)
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain why a basic RAG chain cannot handle follow-up questions.
- Add `ConversationBufferMemory` to a LangChain RAG chain.
- Use `ConversationalRetrievalChain` to build a stateful chatbot.
- Describe the difference between buffer and window memory.

## Review Questions

1. What is the risk of using unlimited `ConversationBufferMemory` in a long session?
2. How does the chatbot "know" what "it" refers to in a follow-up question?
3. What does `return_source_documents=True` add to the chain output?

## Summary

Adding memory to a RAG chatbot requires storing the conversation history and injecting it into each new prompt. LangChain's `ConversationalRetrievalChain` handles this automatically. Window memory prevents the prompt from growing too long in multi-turn conversations.
