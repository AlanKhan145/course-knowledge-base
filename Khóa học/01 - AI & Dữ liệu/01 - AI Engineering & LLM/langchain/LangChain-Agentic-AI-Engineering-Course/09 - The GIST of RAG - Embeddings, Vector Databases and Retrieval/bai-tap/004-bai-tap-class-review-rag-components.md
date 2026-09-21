# 004 - Bài tập: Review các thành phần RAG

## 1. Mục tiêu

- Nhận diện đúng vai trò loader, splitter, embedding và vector store.
- Phân tích `chunk_size`, `chunk_overlap` và metadata.
- Giải thích lợi ích của abstraction trong LangChain.

## 2. Đề bài

Một pipeline có hiện tượng: retrieval thường trả về đúng chủ đề nhưng một số câu trả lời thiếu phần đầu hoặc phần cuối của ý quan trọng.

## 3. Nhiệm vụ

1. Phân tích vì sao ranh giới chunk có thể gây lỗi này.
2. Giải thích tác dụng của `chunk_overlap`.
3. Đề xuất cách kiểm tra trực tiếp các chunk trước khi thay model.
4. Mô tả metadata nào nên được giữ cùng chunk.
5. Giải thích vì sao thay vector store không nên buộc phải viết lại toàn bộ ingestion logic.

## 4. Yêu cầu hoàn thành

- [ ] Có nguyên nhân liên quan đến ranh giới chunk.
- [ ] Có phân tích lợi ích và chi phí của overlap.
- [ ] Có đề xuất kiểm tra dữ liệu trước embedding.
- [ ] Có metadata nguồn.
- [ ] Giải thích được giá trị của interface chung.

## 5. Gợi ý

Đừng bắt đầu bằng việc “đổi sang LLM mạnh hơn”. Hãy kiểm tra dữ liệu mà LLM thực sự nhận được.
