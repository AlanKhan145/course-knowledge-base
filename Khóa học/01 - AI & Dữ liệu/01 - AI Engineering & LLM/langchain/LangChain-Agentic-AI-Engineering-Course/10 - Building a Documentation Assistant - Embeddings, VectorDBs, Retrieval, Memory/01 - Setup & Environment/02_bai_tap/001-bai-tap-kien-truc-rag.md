# 001 - Bài tập: Phân tích kiến trúc Documentation Assistant

## 1. Mục tiêu

Bài tập giúp người học kiểm tra khả năng mô tả đúng pipeline của Documentation Assistant và vai trò của từng thành phần trong hệ thống RAG.

## 2. Kiến thức cần dùng

Cần nắm được các khái niệm và thành phần sau:

- Tài liệu nguồn.
- Chunking.
- Embedding.
- Vector database.
- Retrieval.
- Chuỗi xử lý sử dụng mô hình ngôn ngữ.
- `Streamlit`.
- Memory hội thoại.

## 3. Đề bài

Hãy mô tả lại Documentation Assistant như một hệ thống hoàn chỉnh từ lúc nhận tài liệu đến lúc trả lời câu hỏi của người dùng.

## 4. Nhiệm vụ

1. Vẽ một sơ đồ luồng dữ liệu có tối thiểu các thành phần: tài liệu, chunking, embedding, vector database, câu hỏi, retrieval, mô hình ngôn ngữ, giao diện và memory.
2. Viết mô tả ngắn cho vai trò của từng thành phần.
3. Giải thích vì sao vector database không phải là thành phần trực tiếp tạo câu trả lời cuối cùng.
4. Giải thích memory thay đổi trải nghiệm của câu hỏi nối tiếp như thế nào.
5. Phân biệt giai đoạn lập chỉ mục tài liệu với giai đoạn truy xuất để trả lời.

## 5. Yêu cầu

- Không mô tả RAG chỉ bằng một câu chung chung.
- Phải thể hiện đúng thứ tự xử lý của dữ liệu.
- Phải phân biệt rõ lưu trữ vector với sinh câu trả lời.
- Phần giải thích cần dùng thuật ngữ kỹ thuật nhất quán.

## 6. Tiêu chí hoàn thành

Bài được xem là hoàn thành khi:

- Sơ đồ thể hiện đủ hai luồng: chuẩn bị tri thức và hỏi đáp.
- Mỗi thành phần có vai trò rõ ràng.
- Có giải thích đúng mối quan hệ giữa retrieval và mô hình ngôn ngữ.
- Có giải thích đúng vai trò của `Streamlit` và memory.
