# 001 - Bài tập: Giới thiệu RAG

## 1. Mục tiêu

- Phân tích được lý do cần RAG.
- Phân biệt prompt toàn tài liệu với retrieval-based prompting.
- Mô tả đúng ba bước retrieval, augmentation và generation.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm: context window, chunk, retrieval, augmented prompt, latency và cost.

## 3. Đề bài

Một công ty có tài liệu nội bộ dài hàng trăm trang. Người dùng muốn hỏi những câu rất cụ thể, ví dụ một điều khoản hoặc một quy trình chỉ xuất hiện ở vài đoạn.

Thiết kế ở mức khái niệm một luồng RAG cho hệ thống này.

## 4. Nhiệm vụ

1. Liệt kê bốn hạn chế nếu gửi toàn bộ tài liệu vào prompt.
2. Vẽ pipeline từ tài liệu đến câu trả lời.
3. Chỉ ra bước nào xảy ra trước khi người dùng đặt câu hỏi và bước nào xảy ra khi có truy vấn.
4. Giải thích vì sao chunking sai có thể làm retrieval thất bại.
5. Mô tả một tình huống retrieval lấy đúng chủ đề nhưng context vẫn chưa đủ để trả lời.

## 5. Yêu cầu hoàn thành

- [ ] Có đủ bốn hạn chế của prompt quá dài.
- [ ] Pipeline có bước retrieval, augmentation và generation.
- [ ] Phân biệt được preprocessing với query-time processing.
- [ ] Giải thích được ít nhất một rủi ro của chunking.
- [ ] Không sử dụng câu trả lời chung chung kiểu “RAG giúp AI chính xác hơn” mà không giải thích cơ chế.

## 6. Tiêu chí đánh giá

Bài đạt yêu cầu khi người đọc có thể dựa vào sơ đồ và phần giải thích để hiểu vì sao hệ thống chỉ gửi các đoạn liên quan thay vì toàn bộ tài liệu.

## 7. Gợi ý

Hãy bắt đầu từ câu hỏi: “LLM thật sự cần bao nhiêu phần của tài liệu để trả lời truy vấn hiện tại?”
