# 005 - Audio, Graph, Text and Image Vectors & Embeddings

## Section

Vector Databases & Embeddings

## Duration

7 minutes

## Main Idea

Extends the embedding concept beyond text to cover image, audio, and graph data. Explains the techniques and models used to embed each modality and how multimodal embeddings enable cross-modal retrieval in advanced RAG systems.

## Text Embeddings

The standard RAG embedding modality.

- **Models**: Word2Vec, GloVe, BERT, Sentence Transformers, OpenAI text-embedding-3
- **Word2Vec** (classic): each word → 300-dim vector, learned from co-occurrence
- **Sentence Transformers**: maps entire sentences to a fixed-size vector
- **Use in RAG**: embed document chunks and user queries for semantic search

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
vector = model.encode("What is retrieval-augmented generation?")
```

## Image Embeddings

Used in multimodal RAG systems that can retrieve by image content.

- **Models**: ResNet, ViT (Vision Transformer), CLIP
- **CLIP** (OpenAI): jointly embeds text and images into the same space
  - Enables cross-modal search: "a dog playing in the snow" → retrieves matching images
- **Use in RAG**: index product images; retrieve by text query

```python
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")
```

## Audio Embeddings

Used when the knowledge base contains audio recordings, podcasts, or voice data.

- **Librosa**: Python library for audio feature extraction (MFCCs, spectrograms)
- **Wav2Vec 2.0** (Meta): self-supervised audio embeddings
- **Whisper + text embedding**: transcribe audio → embed the transcript (common RAG pattern)
- **Use in RAG**: find semantically similar audio clips or transcripts

## Graph Embeddings

Used when knowledge is structured as a graph (e.g., knowledge graphs, social networks, ontologies).

- **Node2Vec**: random-walk based node embeddings
- **GraphSAGE**: inductive learning on graph structure
- **TransE / RotatE**: knowledge graph entity and relation embeddings
- **Use in RAG**: Graph RAG — retrieve connected entities from a knowledge graph

## Multimodal Embedding Summary

| Modality | Technique | Key Model |
|---|---|---|
| Text | Dense sentence embedding | Sentence Transformers, OpenAI |
| Image | CNN / Transformer visual features | ResNet, ViT, CLIP |
| Audio | Spectral features / self-supervised | Librosa, Wav2Vec 2.0 |
| Graph | Random walk / GNN | Node2Vec, GraphSAGE |

## Learning Objectives

By the end of this lesson, you should be able to:

- Describe how each data modality (text, image, audio, graph) is converted to a vector.
- Explain what CLIP enables for cross-modal retrieval.
- Identify the right embedding technique for a given data type.

## Review Questions

1. What is the advantage of using CLIP embeddings over ResNet for a RAG system with both text queries and image documents?
2. Why is the "transcribe then embed" approach common for audio RAG?
3. What type of knowledge base would benefit from graph embeddings?

## Summary

Embeddings are not limited to text. Images, audio, and graph data all have established embedding techniques. CLIP uniquely enables cross-modal search by embedding text and images into the same vector space. Knowing the right embedding approach for each modality is essential for building multimodal RAG systems.
