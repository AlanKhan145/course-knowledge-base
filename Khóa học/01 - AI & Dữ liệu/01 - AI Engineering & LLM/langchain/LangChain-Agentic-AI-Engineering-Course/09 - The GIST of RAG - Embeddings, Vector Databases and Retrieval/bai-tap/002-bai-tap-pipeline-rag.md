# 002 - Bài tập: Thiết kế pipeline RAG

## 1. Mục tiêu

- Xác định đúng trách nhiệm của từng thành phần.
- Sắp xếp đúng thứ tự ingestion và retrieval.
- Kiểm tra được các boundary quan trọng của pipeline.

## 2. Đề bài

Cho các thành phần:

`TextLoader`, `RecursiveCharacterTextSplitter`, `OpenAIEmbeddings`, `Pinecone`, retriever và LLM.

Hãy thiết kế một pipeline RAG hoàn chỉnh ở mức kiến trúc.

## 3. Nhiệm vụ

1. Sắp xếp các thành phần theo thứ tự xử lý dữ liệu.
2. Tách sơ đồ thành hai vùng: ingestion và query-time.
3. Ghi input và output của mỗi bước.
4. Đề xuất một checkpoint kiểm thử cho mỗi boundary.
5. Giải thích điều gì xảy ra nếu query dùng một không gian embedding không tương thích với dữ liệu đã index.

## 4. Yêu cầu hoàn thành

- [ ] Có sơ đồ ingestion.
- [ ] Có sơ đồ retrieval/generation.
- [ ] Có input/output cho từng thành phần.
- [ ] Có ít nhất năm checkpoint.
- [ ] Không trộn lẫn vai trò của vector store và LLM.

## 5. Gợi ý

Hãy mô hình hóa pipeline theo chuỗi:

```text
document → chunks → vectors → retrieval → context → answer
```
