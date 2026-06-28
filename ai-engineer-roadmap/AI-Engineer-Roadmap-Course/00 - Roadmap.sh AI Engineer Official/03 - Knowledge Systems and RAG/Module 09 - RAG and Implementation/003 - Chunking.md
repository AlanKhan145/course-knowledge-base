# 003 - Chunking

**Hoc phan:** 03 - Knowledge Systems and RAG
**Module:** Module 09 - RAG and Implementation
**Nhom noi dung:** RAG Concepts
**Nguon roadmap:** RAG and Implementation / RAG Concepts
**Loai bai:** RAG
**Thu tu trong module:** 003
**Thoi luong goi y:** 26 phut

---

## 1. Tom tat

Bai nay giai thich **Chunking** trong boi canh AI Engineer hien dai. Sau bai hoc, ban nen biet topic nay giup xay AI app nao, nam o dau trong workflow va co the bien thanh prompt, API call, RAG pipeline, agent tool, multimodal feature hoac production checklist.

## 2. Muc tieu hoc tap

- Giai thich duoc Chunking bang ngon ngu cua ban.
- Nhan biet topic nay nam o dau trong workflow AI Engineer.
- Ap dung vao mot app, API call, prompt, RAG pipeline, agent tool hoac portfolio demo nho.

## 3. Khai niem chinh

- Chunking splits documents into units that can be embedded and retrieved.
- Chunk size, overlap and boundaries affect retrieval quality.
- Good chunks preserve meaning and carry metadata such as source, page and heading.

## 4. Vi du / Demo

```text
documents -> parse -> chunk -> embed -> retrieve -> prompt with context -> answer with citations
```

## 5. Bai tap thuc hanh

- Chon 5-10 tai lieu nho va tao bo cau hoi test.
- Thuc hanh chunking, embedding, retrieval va ghi lai top-k result.
- Danh gia cau tra loi bang citation va failure cases.

## 6. Loi thuong gap

- Chunk qua dai hoac qua ngan ma khong do retrieval quality.
- Khong luu metadata source/page nen khong citation duoc.
- Danh gia RAG bang cam tinh thay vi bo cau hoi test.

## 7. Checklist hoan thanh

- Toi co the giai thich **Chunking** trong 1-2 phut.
- Toi co mot demo nho hoac artifact thuc hanh cho bai nay.
- Toi biet topic nay lien quan den model, prompt, retrieval, tool, cost, safety hoac UX nao.
- Toi da ghi lai it nhat mot limitation hoac cau hoi can phan tich tiep.

## 8. Outcome lien quan

Build retrieval augmented generation applications that answer using private documents with citations.

## 9. Project lien quan

Project 8: PDF Q&A RAG App with page/chunk citations.

## 10. Tong ket

**Chunking** la mot moc trong lo trinh AI Engineer. Hay bien no thanh mot prompt, API route, RAG workflow, agent tool, multimodal demo, dashboard hoac portfolio note de kien thuc co cho bam.
