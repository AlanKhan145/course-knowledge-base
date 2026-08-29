# 007 - Image, Text and Paragraph Indexing and Matching

## Section

Vector Databases & Embeddings

## Duration

5 minutes

## Main Idea

Hands-on practice indexing and querying multiple data types — images, plain text, and multi-paragraph documents — into a vector database, reinforcing the full indexing-to-retrieval workflow for each modality.

## Text Indexing and Matching

### Index

```python
from langchain_openai import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter

texts = [
    "RAG combines retrieval with language model generation.",
    "Pinecone is a managed vector database.",
    "LangChain is an orchestration framework for LLM applications."
]

splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=20)
chunks = splitter.create_documents(texts)

embedding_model = OpenAIEmbeddings(model="text-embedding-3-small")
vectors = [(f"text-{i}", embedding_model.embed_documents([c.page_content])[0], {"text": c.page_content})
           for i, c in enumerate(chunks)]

index.upsert(vectors=[{"id": v[0], "values": v[1], "metadata": v[2]} for v in vectors])
```

### Query

```python
query = "What framework helps build LLM applications?"
q_vector = embedding_model.embed_query(query)
results = index.query(vector=q_vector, top_k=2, include_metadata=True)
# Expected top result: "LangChain is an orchestration framework..."
```

## Paragraph Indexing (Document-Level)

For longer documents, each paragraph is indexed as a separate chunk with document-level metadata:

```python
metadata = {
    "doc_id": "whitepaper-001",
    "paragraph": 3,
    "source": "rag_whitepaper.pdf",
    "text": chunk_text
}
```

At query time, results from the same document can be ranked together or deduplicated.

## Image Indexing and Matching

```python
from PIL import Image
from transformers import CLIPProcessor, CLIPModel
import torch

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Index an image
image = Image.open("product_photo.jpg")
inputs = processor(images=image, return_tensors="pt")
image_vector = model.get_image_features(**inputs).detach().numpy().flatten().tolist()

index.upsert(vectors=[{"id": "img-001", "values": image_vector, "metadata": {"file": "product_photo.jpg"}}])

# Query with text
text_inputs = processor(text=["red running shoes"], return_tensors="pt")
text_vector = model.get_text_features(**text_inputs).detach().numpy().flatten().tolist()

results = index.query(vector=text_vector, top_k=3, include_metadata=True)
```

## Matching Quality Tips

- Use **chunking with overlap** to avoid cutting context at chunk boundaries.
- Store the **original text** in metadata so you can display it alongside the answer.
- For images, store the **file path or URL** in metadata for retrieval.
- Test retrieval quality with several representative queries before building the chatbot layer.

## Learning Objectives

By the end of this lesson, you should be able to:

- Index text chunks, paragraphs, and images into a Pinecone index.
- Query the index with both text and image vectors.
- Use metadata to trace retrieved results back to their source.

## Review Questions

1. Why is chunk overlap important when splitting paragraphs for indexing?
2. How does CLIP enable querying image vectors with a text query?
3. What metadata fields should every indexed document chunk include?

## Summary

Indexing and matching work the same way across modalities: embed the data → upsert with metadata → query with an embedded query. Text uses sentence transformers or OpenAI embeddings; images use CLIP. Metadata is the bridge between a retrieved vector ID and the actual content you display to the user.

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
