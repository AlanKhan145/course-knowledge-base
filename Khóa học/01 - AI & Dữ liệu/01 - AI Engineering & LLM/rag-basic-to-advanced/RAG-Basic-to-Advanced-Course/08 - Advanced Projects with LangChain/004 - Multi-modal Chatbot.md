# 004 - Multi-modal Chatbot

## Section

Advanced Projects with LangChain

## Duration

6 minutes

## Main Idea

Builds a chatbot that can process multiple data modalities — text, images, and PDFs containing both text and images — using multimodal LLMs and embedding strategies. Demonstrates a Multimedia PDF Chatbot as the primary project.

## What is a Multimodal RAG System?

A multimodal RAG system accepts inputs beyond plain text:
- **Images**: product photos, diagrams, charts
- **PDFs with figures**: scientific papers, reports, manuals
- **Tables**: structured data embedded in documents
- **Audio transcripts**: converted to text then embedded

The LLM also needs to be multimodal (able to process image + text inputs).

## Multimodal PDF Chatbot Architecture

```
PDF (with text + images)
    ↓
PyMuPDF / Unstructured → extract text pages + image pages separately
    ↓
Text chunks → Text embeddings → Vector store
Image pages → Image embeddings (CLIP) or Vision LLM description → Vector store
    ↓
User query → Retrieve relevant text + image chunks
    ↓
Multimodal LLM (GPT-4o / Claude 3) → Answer with reference to images
```

## Implementation

### Extract Text and Images from PDF

```python
import fitz  # PyMuPDF
import base64

def extract_pdf_content(pdf_path):
    doc = fitz.open(pdf_path)
    text_pages = []
    image_pages = []
    
    for page_num, page in enumerate(doc):
        # Extract text
        text = page.get_text()
        if text.strip():
            text_pages.append({"page": page_num, "text": text})
        
        # Extract images
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_b64 = base64.b64encode(image_bytes).decode()
            image_pages.append({"page": page_num, "index": img_index, "b64": image_b64})
    
    return text_pages, image_pages
```

### Create Image Summaries for Embedding

Use a vision LLM to summarize each image — the summary is then embedded:

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

vision_llm = ChatOpenAI(model="gpt-4o", max_tokens=300)

def summarize_image(image_b64):
    msg = HumanMessage(content=[
        {"type": "text", "text": "Describe this image in detail for retrieval purposes."},
        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_b64}"}}
    ])
    return vision_llm.invoke([msg]).content
```

### Build the Multimodal RAG Chain

```python
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

# Index text chunks
text_docs = [Document(page_content=p["text"], metadata={"page": p["page"], "type": "text"})
             for p in text_pages]

# Index image summaries (with original image stored in metadata)
image_docs = [
    Document(
        page_content=summarize_image(img["b64"]),
        metadata={"page": img["page"], "type": "image", "b64": img["b64"]}
    )
    for img in image_pages
]

all_docs = text_docs + image_docs
vector_store = Chroma.from_documents(all_docs, OpenAIEmbeddings())
retriever = vector_store.as_retriever(search_kwargs={"k": 5})
```

### Answering with Multimodal Context

```python
def multimodal_answer(question):
    docs = retriever.get_relevant_documents(question)
    
    # Build messages with text and images
    content = [{"type": "text", "text": f"Answer this question: {question}\n\nContext:"}]
    
    for doc in docs:
        if doc.metadata["type"] == "text":
            content.append({"type": "text", "text": doc.page_content})
        else:
            content.append({"type": "image_url",
                            "image_url": {"url": f"data:image/jpeg;base64,{doc.metadata['b64']}"}})
    
    msg = HumanMessage(content=content)
    return vision_llm.invoke([msg]).content
```

## Learning Objectives

By the end of this lesson, you should be able to:

- Extract text and images from a PDF using PyMuPDF.
- Use a vision LLM to generate searchable summaries of images.
- Index both text and image content in the same vector store.
- Build a retrieval chain that returns both text and image context to a multimodal LLM.

## Review Questions

1. Why is it necessary to summarize images before embedding them for text-based retrieval?
2. What model capability is required to pass image content directly to an LLM?
3. How would you extend this system to support audio files?

## Summary

A multimodal RAG system extracts text and images from PDFs, embeds image summaries alongside text chunks, and at query time passes both text and image context to a vision-capable LLM. This enables chatbots that can answer questions about diagrams, charts, and figures in documents — not just the text.
